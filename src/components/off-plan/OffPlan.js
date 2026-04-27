"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const FILTERS = ["All", "Lodha", "Oberoi", "Godrej", "Piramal", "Marathon"];

const PROPERTIES = [
  {
    id: 1,
    developer: "Lodha",
    name: "Palava City",
    location: "Navi Mumbai",
    type: "Township",
    status: "Under Construction",
    bedrooms: ["1 BHK", "2 BHK", "3 BHK"],
    area: "4,500 acres",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    developer: "Godrej",
    name: "New Cuffe Parade",
    location: "Wadala, Mumbai",
    type: "Luxury Residential",
    status: "Ready to Move",
    bedrooms: ["2 BHK", "3 BHK", "4 BHK"],
    area: "22 acres",
    image:
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    developer: "Piramal",
    name: "South Mumbai",
    location: "Byculla, Mumbai",
    type: "Luxury Residences",
    status: "Pre-Launch",
    bedrooms: ["3 BHK", "4 BHK", "Penthouse"],
    area: "8 acres",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 4,
    developer: "Oberoi",
    name: "Oberoi Garden City",
    location: "Goregaon, Mumbai",
    type: "Integrated Township",
    status: "Under Construction",
    bedrooms: ["2 BHK", "3 BHK", "4 BHK"],
    area: "80 acres",
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 5,
    developer: "Marathon",
    name: "Marathon Nextown",
    location: "Goregaon, Mumbai",
    type: "Integrated Township",
    status: "Under Construction",
    bedrooms: ["2 BHK", "3 BHK", "4 BHK"],
    area: "80 acres",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
  },
];

function PropertyCard({ property }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="relative h-60 overflow-hidden rounded-2xl bg-slate-100 p-3 pb-0">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="flex justify-end items-end">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            {property.developer}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 ">
        <p className="line-clamp-2 text-[14.5px] font-bold leading-snug text-slate-800">
          {property.name}
        </p>
        <div className="grid grid-cols-2 gap-2 text-[12px]">
          <div className="rounded-xl bg-slate-50 px-3 py-2">
            <p className="font-semibold text-slate-400 uppercase tracking-wide text-[10px]">
              Type
            </p>
            <p className="font-bold text-slate-700 mt-0.5">{property.type}</p>
          </div>
          <div className="rounded-xl bg-slate-50 px-3 py-2">
            <p className="font-semibold text-slate-400 uppercase tracking-wide text-[10px]">
              Area
            </p>
            <p className="font-bold text-slate-700 mt-0.5">{property.area}</p>
          </div>
          <div className="rounded-xl bg-slate-50 px-3 py-2">
            <p className="font-semibold text-slate-400 uppercase tracking-wide text-[10px]">
              Status
            </p>
            <p className="font-bold text-slate-700 mt-0.5">{property.status}</p>
          </div>
        </div>
        <button className="mt-auto w-full rounded-xl py-2.5 text-[13px] font-bold transition-all duration-200  bg-slate-900 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/22">
          Enquire Now
        </button>
      </div>
    </div>
  );
}

{
  /* Main Page Component */
}

export default function OffPlanPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filtered = PROPERTIES.filter((p) => {
    const matchesDeveloper =
      activeFilter === "All" || p.developer === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q);
    return matchesDeveloper && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 pt-2">
      {/* ── Filters + Search ── */}
      <section className="top-[100px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          {/* Developer Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-5">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-xl px-4 py-2 text-[13px] font-bold transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <svg
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search project or location…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-[13px] font-medium text-slate-700 placeholder-slate-400 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </section>

      {/* ── Property Grid ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl px-4  sm:px-6">
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
            <span className="text-slate-800">
              {" "}
              Off-plan Properties in Mumbai
            </span>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight py-5 text-slate-900">
          Off-plan Properties in Mumbai
        </h1>

        {/* Result count */}
        <p className="mb-6 text-[13px] font-semibold text-slate-500">
          Showing{" "}
          <span className="text-blue-600 font-extrabold">
            {filtered.length}
          </span>{" "}
          off-plan {filtered.length === 1 ? "property" : "properties"}
          {activeFilter !== "All" ? ` by ${activeFilter}` : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-6xl">🏗️</span>
            <h3 className="mt-4 text-xl font-bold text-slate-700">
              No properties found
            </h3>
            <p className="mt-2 text-[14px] text-slate-400">
              Try adjusting your filters or search term.
            </p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchQuery("");
              }}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-2.5 text-[14px] font-bold text-white hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>

      {/* ── Why Off-Plan ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Why Invest in Off-Plan?
            </h2>
            <p className="mt-2 text-[15px] text-slate-500">
              Early-stage investment delivers superior returns in Mumbai's
              booming real estate market.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "💸",
                title: "Pre-Launch Pricing",
                desc: "Lock in properties at 15–30% below market value before public launch.",
              },
              {
                icon: "📈",
                title: "Capital Appreciation",
                desc: "Mumbai off-plan properties have historically appreciated 25–40% by possession.",
              },
              {
                icon: "🏦",
                title: "Flexible Payment Plans",
                desc: "Pay in easy installments spread across construction milestones.",
              },
              {
                icon: "🤝",
                title: "Developer Guarantees",
                desc: "RERA-registered projects with assured timelines and legal protection.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-blue-100 hover:bg-blue-50/30 hover:shadow-sm"
              >
                <span className="text-3xl">{benefit.icon}</span>
                <h3 className="mt-3 text-[15px] font-extrabold text-slate-800">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get Exclusive Pre-Launch Access
          </h2>
          <p className="mt-3 text-[15px] text-slate-400">
            Our advisors have insider access to the best off-plan deals before
            they go public. Speak to us today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919082799951"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[14px] font-bold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              <svg
                className="h-4 w-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call +91 9082799951
            </a>
            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-6 py-3 text-[14px] font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500"
            >
              Schedule a Consultation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
