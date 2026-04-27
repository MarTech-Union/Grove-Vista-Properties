"use client";

import { useState } from "react";
import Link from "next/link";

const faqCategories = [
  {
    id: "buying",
    label: "Buying Property",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    faqs: [
      {
        q: "How do I start the process of buying a luxury apartment in Mumbai?",
        a: "Define your budget, location, and preferences, then connect with Grove Vista Properties for verified listings and guidance.",
      },
      {
        q: "What documents do I need to buy property in Mumbai?",
        a: "PAN, Aadhaar, address proof, income proof, and bank statements are generally required.",
      },
      {
        q: "What is stamp duty on property in Mumbai in 2026?",
        a: "Stamp duty in Maharashtra is 5% for properties above INR 30 lakh.",
      },
      {
        q: "What is RERA and why does it matter?",
        a: "RERA ensures approvals, transparency, and legal protection for buyers.",
      },
      {
        q: "How long does it take to complete a property purchase?",
        a: "Typically 30–90 days depending on financing and documentation.",
      },
      {
        q: "How do I verify if a property is RERA approved?",
        a: "You can verify it on the MahaRERA website.",
      },
    ],
  },
  {
    id: "service&support",
    label: "Services & Support",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
    faqs: [
      {
        q: "Does Grove Vista Properties offer off-plan and ready-to-move listings?",
        a: "Yes, we offer off-plan, under-construction, and ready-to-move homes.",
      },
      {
        q: "Can I list my property for sale or rent?",
        a: "Yes, we help owners market and sell or lease their properties.",
      },
      {
        q: "Does Grove Vista Properties help with home loans and legal services?",
        a: "Yes, we assist with loans, legal due diligence, and registration.",
      },
      {
        q: "How do I contact Grove Vista Properties?",
        a: "Contact us via WhatsApp, phone, or the enquiry form on our website.",
      },
    ],
  },
  {
    id: "renting",
    label: "Renting & Leasing",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    faqs: [
      {
        q: "Are maintenance charges included in house rent?",
        a: "Not always, maintenance may be charged separately.",
      },
      {
        q: "How do I avoid rental fraud in Mumbai?",
        a: "Verify ownership, avoid cash deposits, and use verified agents.",
      },
      {
        q: "What is the rent for a villa or bungalow in Mumbai?",
        a: "Premium villas may range from INR 2 lakh to INR 5 lakh per month.",
      },
    ],
  },
  {
    id: "luxury",
    label: "Luxury Homes",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    faqs: [
      {
        q: "Is it better to buy ready-to-move or under-construction 2BHK?",
        a: "Ready homes offer immediate possession, while under-construction may be more affordable.",
      },
      {
        q: "What is the difference between luxury and ultra-luxury homes?",
        a: "Ultra-luxury adds bespoke design, concierge services, and iconic locations.",
      },
      {
        q: "Which is the most expensive area for luxury flats in Mumbai?",
        a: "Worli, Malabar Hill, Bandra West, and Prabhadevi are among the top premium locations.",
      },
      {
        q: "What amenities do luxury flats in Mumbai offer?",
        a: "Infinity pools, smart homes, concierge, gyms, EV charging, and more.",
      },
      {
        q: "Do luxury flats in Mumbai come furnished?",
        a: "Most include premium fittings; some ultra-luxury homes come fully furnished.",
      },
    ],
  },
  {
    id: "agency",
    label: "Working With Us",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    faqs: [
      {
        q: "Which is the most expensive area for luxury flats in Mumbai?",
        a: "Worli is among the most expensive, followed by Malabar Hill, Bandra West, and Prabhadevi.",
      },
      {
        q: "What amenities do luxury flats in Mumbai offer?",
        a: "Typical amenities include infinity pools, gyms, concierge services, smart home tech, EV charging, and 24/7 security.",
      },
      {
        q: "What is the stamp duty on luxury flats in Mumbai in 2026?",
        a: "Stamp duty remains 5% for properties above INR 30 lakh, with stable ready reckoner rates for FY2026-27.",
      },
      {
        q: "Do luxury flats in Mumbai come furnished?",
        a: "Most include premium fittings and modular kitchens, while some ultra-luxury homes offer fully furnished branded interiors.",
      },
      {
        q: "Can I list my property for sale or rent with Grove Vista Properties?",
        a: "Yes, we provide end-to-end services for property owners, including marketing and tenant or buyer sourcing.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("buying");
  const [openFaq, setOpenFaq] = useState(null);

  const currentCategory = faqCategories.find((c) => c.id === activeCategory);

  const toggle = (idx) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white p-4 pb-14 pt-10 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          {/* Breadcrumb */}
          <div className="mx-auto max-w-6xl px-4 py-4 mt-3 sm:px-6">
            <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
              <Link href="/" className="transition-colors hover:text-blue-600">
                Home
              </Link>
              <svg
                className="h-4 w-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-slate-800">FAQs</span>
            </div>
          </div>

          <div className="items-center p-5 ">
            <p className="mb-3 text-[11px] font-bold tracking-[0.25em] text-amber-700 uppercase">
              Help Centre
            </p>
            <h1
              className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight text-slate-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500">
              Everything you need to know about buying, renting, and investing
              in Mumbai real estate — answered clearly.
            </p>
          </div>
        </div>
      </section>



      {/* ── Main ── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 mt-4 mb-5">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          {/* ── Sidebar / Category tabs ── */}
          <aside className="shrink-0 lg:w-56">
            <p className="mb-4 text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
              Categories
            </p>
            <nav className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenFaq(null);
                  }}
                  type="button"
                  className={`flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-2.5 text-[13.5px] font-semibold transition-all duration-200 lg:w-full ${
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={
                      activeCategory === cat.id
                        ? "text-white"
                        : "text-slate-400"
                    }
                  >
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              ))}
            </nav>

            {/* Still have questions? */}
            <div className="mt-10 hidden rounded-2xl border border-slate-100 bg-slate-50 p-5 lg:block">
              <p className="text-[13px] font-bold text-slate-800">
                Still have questions?
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">
                Our team is happy to help with any specific queries.
              </p>
              <Link
                href="/contact"
                className="mt-4 block rounded-xl bg-slate-900 py-2.5 text-center text-[13px] font-bold text-white transition-colors hover:bg-slate-700"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919082799951"
                className="mt-2 block rounded-xl border border-slate-200 py-2.5 text-center text-[13px] font-bold text-slate-700 transition-colors hover:bg-slate-100"
              >
                +91 90827 99951
              </a>
            </div>
          </aside>

          {/* ── FAQ Accordion ── */}
          <div className="flex-1">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {currentCategory.icon}
              </span>
              <h2 className="text-[22px] font-extrabold tracking-tight text-slate-900">
                {currentCategory.label}
              </h2>
              <span className="ml-auto rounded-full bg-slate-100 px-3 py-1 text-[12px] font-bold text-slate-500">
                {currentCategory.faqs.length} questions
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {currentCategory.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                      isOpen
                        ? "border-blue-200 bg-blue-50/40 shadow-sm"
                        : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      type="button"
                      className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span
                        className={`text-[15px] font-semibold leading-snug transition-colors ${
                          isOpen ? "text-blue-700" : "text-slate-800"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        <svg
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6">
                        <div className="h-px bg-blue-100 mb-4" />
                        <p className="text-[14px] leading-relaxed text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile CTA ── */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:hidden">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center">
          <p className="text-[15px] font-bold text-slate-800">
            Still have questions?
          </p>
          <p className="mt-1 text-[13px] text-slate-500">
            Our team is happy to help with any specific queries.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-6 py-3 text-[13px] font-bold text-white transition-colors hover:bg-slate-700"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919082799951"
              className="rounded-xl border border-slate-200 px-6 py-3 text-[13px] font-bold text-slate-700 transition-colors hover:bg-slate-100"
            >
              +91 90827 99951
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
