import crypto from "crypto";

export const ADMIN_SESSION_COOKIE = "admin_session";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/**
 * Generates a deterministic HMAC token from the session secret.
 * Same secret always produces same token — no DB needed.
 */
export function generateAdminSessionToken(secret) {
  return crypto
    .createHmac("sha256", secret)
    .update("grove-vista-admin-session-v1")
    .digest("hex");
}

/**
 * Timing-safe token verification.
 */
export function verifyAdminSessionToken(token, secret) {
  if (!token || !secret) return false;
  try {
    const expected = generateAdminSessionToken(secret);
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

/**
 * Timing-safe password comparison.
 */
export function timingSafeCompare(a, b) {
  try {
    const bufA = Buffer.from(String(a));
    const bufB = Buffer.from(String(b));
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}