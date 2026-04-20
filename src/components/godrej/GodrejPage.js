"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const storyCards = [
  {
    title: "people first",
    desc: "WE prioritise our people in everything we do: employees, customers, and all stakeholders.",
  },
  {
    title: "Quality",
    desc: "WE achieve our desired results and strive for continual improvement.",
  },
  {
    title: "Integrity",
    desc: "WE are consistently honest, transparent, and accountable.",
  },
  {
    title: "Innovation",
    desc: "We transform imagination into reality",
  },
];

const godrejProjects = [
  {
    id: 1,
    name: "Godrej Jardinia",
    price: "₹2.2 Cr – ₹6 Cr",
    title: "Modern Living | Premium Residences in Chembur",
    location: "Chembur, Mumbai",
    status: "Under Construction",
    area: "Land Parcel with Open Greens",
    configs: "2, 3, 4 BHK",
    possession: "2027 (Expected)",
    description:
      "Godrej Jardinia offers thoughtfully designed residences in Chembur with modern amenities, landscaped gardens, and excellent connectivity to BKC, Eastern Freeway, and South Mumbai.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    tag: "NEW LAUNCH",
    externalUrl: "https://www.godrejproperties.com",
  },
  {
    id: 2,
    name: "Godrej The Trees",
    price: "₹3 Cr – ₹10 Cr",
    title: "Luxury Township | Vikhroli East",
    location: "Vikhroli, Mumbai",
    status: "Ready & Ongoing",
    area: "34 Acres",
    configs: "2, 3, 4 BHK",
    possession: "Ready Possession / Phase-wise",
    description:
      "A landmark mixed-use township in Vikhroli by Godrej Properties, featuring luxury residences, office spaces, retail, and vast green landscapes in a centrally connected location.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    tag: "TOWNSHIP",
    externalUrl: "https://www.godrejproperties.com",
  },
];

const tagColors = {
  FLAGSHIP: "bg-emerald-600",
  "ULTRA LUXURY": "bg-violet-600",
  "NEW LAUNCH": "bg-amber-500",
};

const keyFacts = [
  { value: "110+", label: "Million sq. ft. delivered" },
  { value: "127+", label: "Year legacy" },
  { value: "40", label: "Ongoing projects" },
  { value: "95M", label: "Sq. ft. in pipeline" },
];

export default function godrejPage() {
  const [savedProjects, setSavedProjects] = useState([]);
  const [expandedDesc, setExpandedDesc] = useState({});

  const toggleSave = (id) => {
    setSavedProjects((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const toggleDesc = (id) => {
    setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-white mx-auto max-w-7xl">
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
            <span className="text-slate-800">Godrej Properties</span>
          </div>
        </div>

        {/* Split layout — image left, text right */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
          {/* Image */}
          <div className="w-full overflow-hidden rounded-2xl lg:w-[55%] lg:shrink-0">
            <Image
              src="/Godrej.webp"
              alt="Godrej Development"
              width={800}
              height={520}
              className="h-[340px] w-full object-cover lg:h-[460px]"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-amber-700 uppercase">
              THE GODREJ GROUP
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
              Established in 1897, the Godrej Group has its roots in India's
              Independence and Swadeshi movement. Our founder, Ardeshir Godrej,
              a lawyer-turned-serial entrepreneur failed with a few ventures
              before he struck gold with a locks business. Today, we enjoy the
              patronage of 1.1 billion consumers globally across consumer goods,
              real estate, appliances, agriculture and many other businesses. In
              fact, our geographical footprint extends beyond Earth, with our
              engines now powering many of India's space missions.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {keyFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
            >
              <p className="text-[1.6rem] font-black leading-none text-amber-700">
                {fact.value}
              </p>
              <p className="mt-1 text-[12px] font-medium text-slate-500">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="px-6 pb-20 mt-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-1 text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase">
              Projects in Mumbai
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Explore All Developments
            </h2>
            <p className="mt-1.5 text-[15px] font-medium text-slate-600">
              <span className="font-bold text-blue-600">
                {godrejProjects.length}
              </span>{" "}
              active projects
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {godrejProjects.map((project) => {
              const isSaved = savedProjects.includes(project.id);
              const isExpanded = expandedDesc[project.id];
              const shortDesc = `${project.description.slice(0, 95)}...`;

              return (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]"
                >
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden rounded-t-[2rem] bg-slate-100 p-3 pb-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-x-3 bottom-0 h-2/3 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Tag */}
                    <span
                      className={`absolute left-6 top-6 rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md ${tagColors[project.tag] || "bg-blue-600"}`}
                    >
                      {project.tag}
                    </span>

                    {/* Save button */}
                    <button
                      onClick={() => toggleSave(project.id)}
                      className={`absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all ${
                        isSaved
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-white/90 text-slate-500 backdrop-blur-md hover:bg-white hover:text-red-500"
                      }`}
                      aria-label="Save project"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5 transition-transform hover:scale-110"
                        fill={isSaved ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>

                    {/* Status badge */}
                    <span
                      className={`absolute bottom-4 right-6 rounded-full px-3 py-1.5 text-[11.5px] font-bold text-white shadow-md ${
                        project.status === "Ready"
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-1 text-[22px] font-extrabold tracking-tight text-slate-900">
                      {project.price}
                    </h2>
                    <h3 className="mb-1 line-clamp-2 text-[14.5px] font-bold leading-snug text-slate-800">
                      {project.title}
                    </h3>
                    <p className="mb-4 flex items-center gap-1 text-[13px] font-medium text-slate-500">
                      <svg
                        className="h-3.5 w-3.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {project.location}
                    </p>

                    {/* Key info row */}
                    <div className="mb-5 flex items-center justify-between rounded-xl border border-white/60 bg-white/40 p-3 text-[13px] font-bold text-slate-700 shadow-sm">
                      <span>{project.configs}</span>
                      <span className="text-slate-300">|</span>
                      <span>{project.area}</span>
                      <span className="text-slate-300">|</span>
                      <span>{project.possession}</span>
                    </div>

                    {/* Description */}
                    <p className="mb-6 flex-1 text-[13px] font-medium leading-relaxed text-slate-600">
                      {isExpanded ? project.description : shortDesc}
                      <button
                        onClick={() => toggleDesc(project.id)}
                        className="ml-1 font-bold text-blue-600 transition-colors hover:text-blue-800"
                        type="button"
                      >
                        {isExpanded ? "less" : "more"}
                      </button>
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-auto flex gap-3">
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-xl bg-blue-600 py-3 text-center text-[13px] font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="border-t border-slate-100 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-amber-700 uppercase">
              our journey
            </p>
            <h2 className="text-xl font-extralight tracking-tight mt-6">
              "127-year legacy of excellence and trust with a commitment to
              cutting-edge design and technology."
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-1">
            <h1 className="rounded-2xl border border-white/80 bg-white/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Godrej Properties brings the Godrej Group philosophy of
              innovation, sustainability, and excellence to the real estate
              industry. Every Godrej Properties' development combines a 127–year
              legacy of excellence and trust with a commitment to cutting-edge
              design and technology. Since 1990, Godrej Properties Limited (GPL)
              has been a bellwether of excellence in the Indian real estate
              industry.
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
