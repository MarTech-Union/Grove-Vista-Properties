import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data");

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

function safePath(filename) {
  const filepath = path.join(DATA_DIR, filename);
  if (!filepath.startsWith(DATA_DIR)) {
    throw new Error("Invalid filename — path traversal detected.");
  }
  return filepath;
}

export async function readJSON(filename, defaultValue = []) {
  await ensureDataDir();
  const filepath = safePath(filename);
  try {
    const raw = await fs.readFile(filepath, "utf-8");
    if (!raw.trim()) return defaultValue;
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return defaultValue;
    if (err instanceof SyntaxError) {
      console.error(`[readJSON] Corrupted JSON in "${filename}":`, err.message);
      return defaultValue;
    }
    throw err;
  }
}

export async function writeJSON(filename, data) {
  await ensureDataDir();
  const filepath = safePath(filename);
  let serialized;
  try {
    serialized = JSON.stringify(data, null, 2);
  } catch (err) {
    throw new Error(`[writeJSON] Data not serializable: ${err.message}`);
  }
  const tempPath = filepath + ".tmp";
  try {
    await fs.writeFile(tempPath, serialized, "utf-8");
    await fs.rename(tempPath, filepath);
  } catch (err) {
    await fs.unlink(tempPath).catch(() => {});
    throw err;
  }
}

export async function fileExists(filename) {
  const filepath = path.join(DATA_DIR, filename);
  try {
    await fs.access(filepath);
    return true;
  } catch {
    return false;
  }
}