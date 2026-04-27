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

const OberoiProjects = [
  {
    id: 1,
    name: "Oberoi Garden City",
    price: "₹2.5 Cr – ₹8 Cr",
    title: "Integrated Luxury Township | Goregaon East",
    location: "Goregaon, Mumbai",
    status: "Ready & Ongoing Phases",
    area: "80 Acres",
    configs: "2, 3, 4 BHK",
    possession: "Immediate / Phase-wise",
    description:
      "A premium integrated township by Oberoi Realty featuring luxury residences, international schools, malls, and open green spaces in Goregaon East.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    tag: "TOWNSHIP",
    externalUrl: "https://www.oberoirealty.com/oberoi-garden-city",
  },
  {
    id: 2,
    name: "Three Sixty West",
    price: "₹15 Cr – ₹40 Cr+",
    title: "Ultra Luxury Residences | Worli Sea Face",
    location: "Worli, Mumbai",
    status: "Ready",
    area: "4 Acres",
    configs: "3, 4, 5 BHK & Duplex",
    possession: "Ready Possession",
    description:
      "One of Mumbai’s most iconic luxury developments offering panoramic Arabian Sea views, world-class residences, and a Ritz-Carlton hotel experience.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    tag: "ULTRA LUXURY",
    externalUrl:
      "https://www.oberoirealty.com/residential/three-sixty-west-worli",
  },
  {
    id: 3,
    name: "Peddar Road Luxury Project",
    price: "₹20 Cr – ₹50 Cr+",
    title: "Exclusive South Mumbai Living | New Launch",
    location: "Peddar Road, Mumbai",
    status: "New Launch",
    area: "Limited Development",
    configs: "3, 4, 5 BHK",
    possession: "Expected 2028",
    description:
      "An ultra-exclusive new launch in South Mumbai’s prime Peddar Road, offering limited residences with high-end specifications and elite neighborhood living.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    tag: "NEW LAUNCH",
    externalUrl: "#",
  },
];

const tagColors = {
  FLAGSHIP: "bg-emerald-600",
  "ULTRA LUXURY": "bg-violet-600",
  "NEW LAUNCH": "bg-amber-500",
};

const keyFacts = [
  { value: "110+", label: "Million sq. ft. delivered" },
  { value: "40+", label: "Year legacy" },
  { value: "40", label: "Ongoing projects" },
  { value: "95M", label: "Sq. ft. in pipeline" },
];

export default function OberoiPage() {
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
            <span className="text-slate-800">Oberoi and Other</span>
          </div>
        </div>

        {/* Split layout — image left, text right */}
        <div className="grid grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="w-full overflow-hidden rounded-2xl">
            <Image
              src="/Oberoi.webp"
              alt="Oberoi Development"
              width={800}
              height={520}
              className="h-[340px] w-full object-cover lg:h-[460px]"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-amber-700 uppercase">
              About Us
            </p>
            <h1
              className="text-2xl font-semibold leading-tight text-slate-900 lg:text-4xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Company Philosophy
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
              For over four decades now, Oberoi Realty has been an insignia of
              trust, transparency, cutting-edge technology and differentiated
              service in the Real Estate sector in Mumbai. Rooted in values, our
              growth and respectability have both been built on adherence to our
              vision, mission and the six pillars we stand on, in all we do and
              deliver.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {keyFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
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
                {OberoiProjects.length}
              </span>{" "}
              active projects
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {OberoiProjects.map((project) => {
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

      {/* ── Our Story ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[18px] font-bold tracking-[0.2em] text-amber-700 uppercase">
              Our Value
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {storyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-300 bg-white/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-[12px] font-bold tracking-[0.2em] text-amber-700 uppercase">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="border-t border-slate-100 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-amber-700 uppercase">
              Who We Are
            </p>
            <h2 className="text-xl font-extrabold tracking-tight text-amber-800 mt-6">
              To Create Spaces that enhance the quality of life
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-1">
            <h1 className="rounded-2xl border border-slate-300 bg-white/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              The vision of our company is an actionable, purpose-led ideal that
              has a real and significant bearing on our deliveries and our
              conduct. We are committed to ensuring that our offerings are
              revolutionary, ahead of the times, benchmarked against best global
              trends & practices and built around our discerning customers'
              needs. We ensure that the ecosystem we operate in, the society
              around and all people who experience, engage or align with any
              aspect of the spaces we create, truly feel the differentiation and
              positive impact on quality of life.
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
