"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const teamAvatars = [
  { bg: "bg-slate-200", color: "text-slate-500", initials: "AK" },
  { bg: "bg-amber-100", color: "text-amber-700", initials: "RS" },
  { bg: "bg-orange-200", color: "text-orange-800", initials: "PM" },
  { bg: "bg-red-200", color: "text-red-700", initials: "NB" },
  { bg: "bg-blue-200", color: "text-blue-800", initials: "VJ" },
];

const weeklyItems = [
  {
    title: "Premium Listings",
    text: "Handpicked premium property listings across India delivered straight to your inbox every week.",
  },
  {
    title: "Market Intelligence",
    text: "Real-time market trends, price movements, and investment insights from our analyst network.",
  },
  {
    title: "Early Access",
    text: "Exclusive early access to new launches, off-market deals, and limited-time offers.",
  },
  {
    title: "Insider Stories",
    text: "Stories and interviews from Grove Vista experts and community members.",
  },
];

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setApiError("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), name: name.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setApiError(data.message || "Something went wrong. Please try again.");
        return;
      }

      setSubscribed(true);
    } catch {
      setApiError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#f8f9fa] pb-24 pt-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#9d2b20]">Grove Vista Properties Newsletter</p>

            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 lg:text-5xl">
              Discover new <span className="text-[#9d2b20]">properties and market trends</span> with Grove Vista.
            </h1>

            <p className="max-w-lg text-lg font-medium leading-relaxed text-slate-500">
              Join 5,000+ investors and homebuyers who get exclusive deals, market reports, and off-market listings delivered every week.
            </p>

            <div className="relative w-full max-w-lg overflow-hidden p-6 shadow-xl">
           <div className="relative w-full max-w-lg">
              <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-sm">
                {/* Background */}
                <rect width="520" height="300" fill="#f8fafc" rx="16" />
                {/* Sky gradient */}
               
                <rect width="520" height="230" fill="url(#sky)" rx="16" />
                {/* Ground */}
                <rect y="230" width="520" height="70" fill="#d1fae5" />
                <rect y="248" width="520" height="52" fill="#a7f3d0" />
                {/* Road */}
                <rect y="252" width="520" height="10" fill="#94a3b8" opacity="0.4" />
                <rect x="60" y="255" width="35" height="2" rx="1" fill="#fff" opacity="0.7" />
                <rect x="190" y="255" width="35" height="2" rx="1" fill="#fff" opacity="0.7" />
                <rect x="330" y="255" width="35" height="2" rx="1" fill="#fff" opacity="0.7" />
                {/* Left building */}
                <rect x="30" y="100" width="85" height="135" fill="#9d2b20" rx="5" />
                <rect x="25" y="93" width="95" height="12" rx="3" fill="#7c221a" />
                {[0,1,2,3,4].map(row => [0,1].map(col => (
                  <rect key={`lb-${row}-${col}`} x={47 + col * 30} y={112 + row * 23} width="14" height="14" rx="2" fill={row % 2 === col % 2 ? "#fca5a5" : "#bfdbfe"} opacity="0.9" />
                )))}
                {/* Center building */}
                <rect x="135" y="140" width="90" height="95" fill="#c78a2c" rx="5" />
                <rect x="130" y="133" width="100" height="12" rx="3" fill="#a36b20" />
                {[0,1,2].map(row => [0,1,2].map(col => (
                  <rect key={`cb-${row}-${col}`} x={148 + col * 22} y={153 + row * 26} width="12" height="14" rx="2" fill="#fde68a" opacity="0.8" />
                )))}
                {/* Main house */}
                <rect x="254" y="168" width="118" height="72" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" rx="5" />
                <polygon points="247,170 313,118 382,170" fill="#1e293b" />
                <rect x="275" y="35" width="1" height="85" fill="none" />
                {/* Chimney */}
                <rect x="278" y="128" width="14" height="26" rx="2" fill="#f87171" />
                {/* Door */}
                <rect x="305" y="198" width="30" height="42" rx="4" fill="#184d74" />
                <circle cx="331" cy="220" r="2.5" fill="#fbbf24" />
                {/* Windows */}
                <rect x="264" y="182" width="28" height="20" rx="3" fill="#bae6fd" stroke="#93c5fd" strokeWidth="1" />
                <line x1="278" y1="182" x2="278" y2="202" stroke="#93c5fd" strokeWidth="1" />
                <line x1="264" y1="192" x2="292" y2="192" stroke="#93c5fd" strokeWidth="1" />
                <rect x="345" y="182" width="28" height="20" rx="3" fill="#bae6fd" stroke="#93c5fd" strokeWidth="1" />
                <line x1="359" y1="182" x2="359" y2="202" stroke="#93c5fd" strokeWidth="1" />
                <line x1="345" y1="192" x2="373" y2="192" stroke="#93c5fd" strokeWidth="1" />
                {/* FOR SALE sign */}
                <rect x="392" y="198" width="68" height="30" rx="4" fill="#9d2b20" />
                <text x="426" y="218" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">FOR SALE</text>
                <rect x="421" y="228" width="6" height="24" fill="#94a3b8" />
                {/* Right building */}
                <rect x="470" y="120" width="45" height="115" fill="#c4b5fd" rx="5" />
                <rect x="466" y="113" width="53" height="11" rx="3" fill="#a78bfa" />
                {[0,1,2,3].map(row => (
                  <rect key={`rb-${row}`} x={480} y={128 + row * 24} width="12" height="14" rx="2" fill="#fff" opacity="0.8" />
                ))}
                {/* Trees */}
                <rect x="228" y="218" width="6" height="22" rx="2" fill="#292524" />
                <circle cx="231" cy="213" r="13" fill="#4ade80" />
                <rect x="460" y="228" width="6" height="18" rx="2" fill="#292524" />
                <circle cx="463" cy="223" r="11" fill="#22c55e" />
              </svg>
            </div>
              <div className="absolute bottom-6 left-6 rounded-full bg-[#9d2b20] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                Weekly picks and insights
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_8px_50px_-8px_rgba(0,0,0,0.12)]">
              <div className="mb-5 flex justify-center">
                <Image src="/Grove Vista Properties.png" alt="Grove Vista Properties" width={180} height={45} priority />
              </div>

              {!subscribed ? (
                <>
                  <p className="mb-7 text-center text-[15px] font-semibold leading-relaxed text-slate-700">
                    Sign up to receive weekly news and stories from <span className="font-bold text-[#9d2b20]">Grove Vista Properties</span>
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9d2b20]/30"
                    />

                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setApiError("");
                      }}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9d2b20]/30"
                    />

                    {apiError && (
                      <p className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-center text-xs font-semibold text-red-600">{apiError}</p>
                    )}

                    <p className="text-center text-xs leading-relaxed text-slate-400">
                      Your information will be used in accordance with Grove Vista&apos;s
                      <Link href="/" className="ml-1 font-semibold text-[#9d2b20] hover:underline">
                        privacy policy
                      </Link>
                      . You may opt out at any time.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#9d2b20] py-3.5 text-[15px] font-bold text-white shadow-md transition-all duration-200 hover:bg-[#7c221a] hover:shadow-lg disabled:cursor-not-allowed disabled:bg-[#9d2b20]/60"
                    >
                      {loading ? "Subscribing..." : "Subscribe Now"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-green-200 bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="mb-2 text-xl font-extrabold text-slate-900">You are subscribed!</p>
                  <p className="text-sm font-medium leading-relaxed text-slate-500">Welcome, {name || "there"}. Check your inbox for our first newsletter.</p>
                  <button
                    onClick={() => {
                      setSubscribed(false);
                      setEmail("");
                      setName("");
                      setApiError("");
                    }}
                    className="mt-5 text-xs font-semibold text-[#9d2b20] hover:underline"
                    type="button"
                  >
                    Subscribe with another email
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <div className="relative mb-12 flex items-center justify-center gap-0">
            {teamAvatars.map((avatar, index) => (
              <div
                key={avatar.initials}
                className={`relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-white text-sm font-bold shadow-lg ring-2 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 hover:z-20 ${avatar.bg} ${avatar.color}`}
                style={{
                  transform: `rotate(${(index - 2) * 6}deg)`,
                  marginLeft: index !== 0 ? "-14px" : "0",
                  zIndex: index,
                }}
              >
                {avatar.initials}
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-3xl font-extrabold leading-snug text-slate-800 md:text-4xl">
            Learn more about <span className="text-red-800">what is happening</span>
            <br />
            at Grove Vista Properties
          </h2>

          <p className="mx-auto max-w-xl text-base font-medium leading-relaxed text-slate-600 md:text-lg">
            Be one of the first to <span className="font-semibold text-red-800">hear</span> from Grove Vista leaders about key initiatives, and
            <span className="font-semibold text-red-800"> learn more</span> about the experts behind your favorite properties.
          </p>

          <button
            onClick={handleShare}
            className="mt-8 rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#9d2b20] hover:text-[#9d2b20]"
            type="button"
          >
            {copied ? "Link copied" : "Share this page"}
          </button>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#f8f9fa] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[260px]">
              <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-[#9d2b20]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white px-2 py-3 shadow-2xl">
                <div className="mx-auto mb-3 h-3 w-16 rounded-full bg-slate-200" />

                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 bg-white px-3 py-2.5">
                    <div className="leading-tight">
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#9d2b20]">Grove Vista</p>
                      <p className="text-[8px] font-semibold uppercase tracking-widest text-yellow-700">Properties</p>
                    </div>
                    <span className="rounded bg-[#9d2b20]/10 px-2 py-0.5 text-[9px] font-bold text-[#9d2b20]">Explore</span>
                  </div>

                  <div className="relative h-28 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                      alt="Featured listing"
                      fill
                      className="object-cover"
                      sizes="260px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-2.5">
                      <p className="text-[8px] uppercase tracking-widest text-slate-300">Featured</p>
                      <p className="text-[11px] font-extrabold text-white">Luxury Villa, Lucknow</p>
                    </div>
                    <div className="absolute right-2 top-2 rounded-full bg-[#9d2b20] px-1.5 py-0.5 text-[7px] font-bold text-white">NEW</div>
                  </div>

                  <div className="space-y-2.5 p-3">
                    <p className="text-[10px] font-extrabold text-slate-800">This Week&apos;s Top Picks</p>
                    <p className="text-[8px] leading-relaxed text-slate-500">Premium listings, market trends and investment insights curated for you.</p>

                    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-2">
                      <div>
                        <p className="text-[8px] font-bold text-slate-800">3BHK, Gomti Nagar</p>
                        <p className="text-[7px] font-semibold text-[#9d2b20]">INR 75 Lakh</p>
                      </div>
                      <span className="rounded-lg bg-[#9d2b20] px-2 py-1 text-[7px] font-bold text-white">View</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-2">
                      <div>
                        <p className="text-[8px] font-bold text-slate-800">4BHK Villa, Gurgaon</p>
                        <p className="text-[7px] font-semibold text-[#9d2b20]">INR 2.4 Crore</p>
                      </div>
                      <span className="rounded-lg bg-slate-200 px-2 py-1 text-[7px] font-bold text-slate-700">View</span>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-3 h-2.5 w-16 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#9d2b20]">What you get</p>
            <h2 className="text-3xl font-extrabold leading-snug text-slate-900 md:text-4xl">
              <span className="text-[#9d2b20]">What to expect</span> every week
            </h2>

            <ul className="space-y-6">
              {weeklyItems.map((item) => (
                <li key={item.title} className="group flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#9d2b20]/10 text-[11px] font-extrabold text-[#9d2b20] transition-all duration-300 group-hover:bg-[#9d2b20] group-hover:text-white">
                    GV
                  </div>
                  <div className="pt-2">
                    <p className="text-[15px] font-bold text-slate-900">{item.title}</p>
                    <p className="text-base font-medium leading-relaxed text-slate-700">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
