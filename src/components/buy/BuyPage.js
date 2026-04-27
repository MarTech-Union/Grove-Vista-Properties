"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const properties = [
  {
    id: 1,
    price: "INR 45.00 Cr",
    priceCr: 45,
    title: "Golf Course View | Ultra Luxury | Ready",
    location: "Mulund , Mumbai",
    type: "Apartment",
    status: "Ready",
    sqft: "7,100",
    beds: 4,
    baths: 5,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    description:
      "Stunning ultra-luxury apartment with golf course views. A masterclass in luxury living offering exquisite amenities and a high-profile neighborhood in Gurgaon.",
    tag: "HOT DEAL",
  },
  {
    id: 2,
    price: "INR 35.50 Cr",
    priceCr: 35.5,
    title: "City Skyline View | Private Lift | Upgraded",
    location: "Vasai,Mumbai",
    type: "Apartment",
    status: "Ready",
    sqft: "8,321",
    beds: 4,
    baths: 5,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    description:
      "Luxurious apartment with spectacular city skyline views. Upgraded with premium finishes and exclusive private elevators in the business hub of Bangalore.",
    tag: "PREMIUM",
  },
  {
    id: 3,
    price: "INR 15.50 Cr",
    priceCr: 15.5,
    title: "Luxury 3BR | Sea Facing | Signature Residence",
    location: "Lodha World One, Worli, Mumbai",
    type: "Apartment",
    status: "Off Plan",
    sqft: "1,608",
    beds: 3,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Elegant corner unit with Arabian Sea views in a signature-branded residence. A luxury three-bedroom apartment with world-class amenities.",
    tag: "OFF PLAN",
  },
  {
    id: 4,
    price: "INR 12.00 Cr",
    priceCr: 12,
    title: "Golf Course Extension | Spanish Villas",
    location: "Panvel, Mumbai",
    type: "Villa",
    status: "Ready",
    sqft: "5,600",
    beds: 5,
    baths: 5,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    description:
      "Breathtaking Spanish-style villa located in the heart of Gurgaon. Turnkey investment offering premium amenities and lush green surroundings.",
    tag: "FURNISHED",
  },
  {
    id: 5,
    price: "INR 8.50 Cr",
    priceCr: 8.5,
    title: "Lakeside Living | Signature Development",
    location: "Worli, Mumbai",
    type: "Apartment",
    status: "Ready",
    sqft: "3,200",
    beds: 4,
    baths: 4,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
    description:
      "Iconic lakeside apartment with unmatched luxury and stunning spaces. Exquisite four-bedroom residence designed for modern living.",
    tag: "EXCLUSIVE",
  },
  {
    id: 6,
    price: "INR 5.00 Cr",
    priceCr: 5,
    title: "Golf Links | Modern Villas | Golf Views",
    location: "Andheri, Mumbai",
    type: "Villa",
    status: "Off Plan",
    sqft: "2,480",
    beds: 3,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=80",
    description:
      "Smart villa in the heart of Noida with golf course views. A strong off-plan investment with healthy rental yield potential.",
    tag: "OFF PLAN",
  },
];

const tagColors = {
  "HOT DEAL": "bg-red-500",
  PREMIUM: "bg-violet-600",
  "OFF PLAN": "bg-amber-500",
  FURNISHED: "bg-teal-500",
  EXCLUSIVE: "bg-blue-700",
};

const experts = [
  {
    name: "Sahil Maurya",
    role: "Consultant - Secondary Sales",
    languages: "English, Hindi",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Manish Singh",
    role: "Consultant - Primary Sales",
    languages: "English",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Raj Dubey",
    role: "Consultant - Primary Sales",
    languages: "English, Hindi",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
];

const luxuryDetails = [
  {
    id: 1,
    name: "Antilia",
    price: "INR 15,000 Cr",
    location: "Mumbai, Maharashtra",
    builder: "Reliance Industries",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "DLF The Camellias",
    price: "INR 40 Cr - 100 Cr",
    location: "Mumbai, Maharashtra",
    builder: "DLF Limited",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Lodha Altamount",
    price: "INR 25 Cr - 80 Cr",
    location: "Mumbai, Maharashtra",
    builder: "Lodha Group",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Kingfisher Towers",
    price: "INR 20 Cr - 50 Cr",
    location: "Mumbai, Maharashtra",
    builder: "Prestige Group",
    image:
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80",
  },
];

const faqs = [
  {
    id: 1,
    question: "What is the process of buying a property in Mumbai?",
    answer:
      "The process includes selecting a property, verifying legal documents, signing the agreement, paying stamp duty and registration charges, and completing ownership transfer.",
  },
  {
    id: 2,
    question: "What are the stamp duty charges in Mumbai?",
    answer:
      "Stamp duty in Mumbai is usually around 5% of the property value, along with 1% registration charges.",
  },
  {
    id: 3,
    question: "Can I get a home loan for buying property in Mumbai?",
    answer:
      "Yes, most banks and financial institutions offer home loans covering up to 75-90% of the property value, depending on eligibility.",
  },
  {
    id: 4,
    question: "Which are the best areas to invest in Mumbai real estate?",
    answer:
      "Popular areas include Bandra, Andheri, Powai, Thane, and Navi Mumbai due to good connectivity and infrastructure.",
  },
  {
    id: 5,
    question: "What documents are required to buy a property in Mumbai?",
    answer:
      "Key documents include title deed, sale agreement, occupancy certificate (OC), building approvals, and identity/address proof.",
  },
];

function withinPriceRange(priceCr, range) {
  if (range === "Any Price") return true;
  if (range === "Under 2 Cr") return priceCr < 2;
  if (range === "2 Cr - 5 Cr") return priceCr >= 2 && priceCr <= 5;
  if (range === "5 Cr - 10 Cr") return priceCr > 5 && priceCr <= 10;
  if (range === "Above 10 Cr") return priceCr > 10;
  return true;
}

export default function BuyPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [savedProperties, setSavedProperties] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [activeFilter, setActiveFilter] = useState("Any");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [searchText, setSearchText] = useState(initialQuery);
  const [priceRange, setPriceRange] = useState("Any Price");
  const [propertyType, setPropertyType] = useState("Any Type");
  const [openId, setOpenId] = useState(null);

  const statusFilters = ["Any", "Ready", "Off Plan"];
  const sortOptions = [
    "Most Recent",
    "Price: Low to High",
    "Price: High to Low",
    "Most Popular",
  ];

  const filteredProperties = useMemo(() => {
    const base = properties.filter((property) => {
      if (activeFilter !== "Any" && property.status !== activeFilter)
        return false;
      if (propertyType !== "Any Type" && property.type !== propertyType)
        return false;
      if (!withinPriceRange(property.priceCr, priceRange)) return false;
      if (searchText) {
        const q = searchText.toLowerCase();
        if (
          !property.title.toLowerCase().includes(q) &&
          !property.location.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    });

    if (sortBy === "Price: Low to High") {
      return [...base].sort((a, b) => a.priceCr - b.priceCr);
    }
    if (sortBy === "Price: High to Low") {
      return [...base].sort((a, b) => b.priceCr - a.priceCr);
    }
    if (sortBy === "Most Popular") {
      return [...base].sort((a, b) => b.beds + b.baths - (a.beds + a.baths));
    }

    return base;
  }, [activeFilter, propertyType, priceRange, searchText, sortBy]);

  const toggleSave = (propertyId) => {
    setSavedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId],
    );
  };

  const toggleDescription = (propertyId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [propertyId]: !prev[propertyId],
    }));
  };

  const toggleFaq = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/70">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-violet-200/40 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-200/40 blur-[100px]" />
      </div>

      <div className="sticky top-20 z-40 border-b border-white/60 bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <div className="flex min-w-[220px] flex-1 items-center gap-2 rounded-xl border border-white bg-white/50 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all focus-within:border-blue-400 focus-within:bg-white">
              <svg
                className="h-4 w-4 shrink-0 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
                placeholder="City, area (Mumbai)"
                className="w-full bg-transparent text-[14px] font-medium text-slate-800 placeholder:text-slate-500 focus:outline-none"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <select
              className="rounded-xl border border-white bg-white/50 px-3 py-[11px] text-[14px] font-medium text-slate-800 shadow-sm backdrop-blur-md focus:border-blue-400 focus:outline-none"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="Any Type">Any Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Studio">Studio</option>
            </select>

            <select
              className="rounded-xl border border-white bg-white/50 px-3 py-[11px] text-[14px] font-medium text-slate-800 shadow-sm backdrop-blur-md focus:border-blue-400 focus:outline-none"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="Any Price">Any Price</option>
              <option value="Under 2 Cr">Under 2 Cr</option>
              <option value="2 Cr - 5 Cr">2 Cr - 5 Cr</option>
              <option value="5 Cr - 10 Cr">5 Cr - 10 Cr</option>
              <option value="Above 10 Cr">Above 10 Cr</option>
            </select>

            <button
              className="rounded-xl bg-blue-600 px-7 py-[11px] text-[14px] font-bold text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] transition-all hover:bg-blue-700"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
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
          <span className="text-slate-800">Properties for Sale in Mumbai</span>
        </div>
      </div>

      <main className="mx-auto mt-2 max-w-7xl px-4 pb-20 sm:px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Properties for Sale in Mumbai
            </h1>
            <p className="mt-1.5 text-[15px] font-medium text-slate-600">
              <span className="font-bold text-blue-600">
                {filteredProperties.length}
              </span>{" "}
              premium listings found
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex gap-1 rounded-xl border border-white/60 bg-white/40 p-1.5 shadow-sm backdrop-blur-md">
              {statusFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-[10px] px-5 py-1.5 text-[13px] font-bold transition-all ${
                    activeFilter === filter
                      ? "bg-white text-blue-700 shadow-sm"
                      : "text-slate-600 hover:bg-white/50 hover:text-slate-900"
                  }`}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="cursor-pointer rounded-xl border border-white bg-white/60 px-4 py-[9px] text-[13px] font-bold text-slate-700 shadow-sm backdrop-blur-md transition-all focus:border-blue-400 focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="rounded-3xl border border-white/60 bg-white/40 py-32 text-center shadow-lg backdrop-blur-md">
            <p className="mb-2 text-2xl font-bold text-slate-800">
              No properties align with your search
            </p>
            <p className="font-medium text-slate-500">
              Try adjusting your filters, location, or budget constraints.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => {
              const isSaved = savedProperties.includes(property.id);
              const isExpanded = expandedDescriptions[property.id];
              const shortDesc = `${property.description.slice(0, 95)}...`;

              return (
                <article
                  key={property.id}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]"
                >
                  <div className="relative h-60 overflow-hidden rounded-t-[2rem] bg-slate-100 p-3 pb-0">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    <div className="pointer-events-none absolute inset-x-3 bottom-0 h-2/3 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent" />

                    <span
                      className={`absolute left-6 top-6 rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md ${tagColors[property.tag] || "bg-blue-600"}`}
                    >
                      {property.tag}
                    </span>

                    <button
                      onClick={() => toggleSave(property.id)}
                      className={`absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all ${
                        isSaved
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-white/90 text-slate-500 backdrop-blur-md hover:bg-white hover:text-red-500"
                      }`}
                      aria-label="Save property"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5 transition-transform hover:scale-110"
                        fill={isSaved ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>

                    <span
                      className={`absolute bottom-4 right-6 rounded-full px-3 py-1.5 text-[11.5px] font-bold text-white shadow-md ${
                        property.status === "Ready"
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-1 text-[24px] font-extrabold tracking-tight text-slate-900">
                      {property.price}
                    </h2>
                    <h3 className="mb-3 line-clamp-2 text-[14.5px] font-bold leading-snug text-slate-800">
                      {property.title}
                    </h3>
                    <p className="mb-5 truncate text-[13px] font-medium text-slate-500">
                      {property.location}
                    </p>

                    <div className="mb-5 flex items-center justify-between rounded-xl border border-white/60 bg-white/40 p-3 text-[13px] font-bold text-slate-700 shadow-sm">
                      <span>
                        {property.beds > 0 ? `${property.beds} Beds` : "Studio"}
                      </span>
                      <span>{property.baths} Baths</span>
                      <span>{property.sqft} sqft</span>
                    </div>

                    <p className="mb-6 flex-1 text-[13px] font-medium leading-relaxed text-slate-600">
                      {isExpanded ? property.description : shortDesc}
                      <button
                        onClick={() => toggleDescription(property.id)}
                        className="ml-1 font-bold text-blue-600 transition-colors hover:text-blue-800"
                        type="button"
                      >
                        {isExpanded ? "less" : "more"}
                      </button>
                    </p>

                    <div className="mt-auto flex gap-3">
                      <button
                        className="flex-1 rounded-xl bg-blue-600 py-3 text-[13px] font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700"
                        type="button"
                      >
                        Book Viewing
                      </button>
                      <button
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] font-bold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
                        type="button"
                      >
                        Call
                      </button>
                      <button
                        className="rounded-xl bg-green-500 px-4 py-3 text-[13px] font-bold text-white shadow-md shadow-green-500/20 transition-all hover:bg-green-600"
                        type="button"
                      >
                        Chat
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {filteredProperties.length > 0 && (
          <div className="mt-14 text-center">
            <button
              className="rounded-xl border border-white bg-white/70 px-10 py-4 text-[14px] font-extrabold text-slate-800 shadow-lg transition-all hover:border-blue-400 hover:text-blue-700 hover:shadow-xl"
              type="button"
            >
              Load More Properties
            </button>
          </div>
        )}
      </main>

      <section className="mx-auto bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-blue-900 md:text-4xl">
            Contact Property Expert in Mumbai
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-64">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900">
                  {expert.name}
                </h3>
                <p className="mb-2 text-sm text-slate-500">{expert.role}</p>
                <p className="mb-4 text-sm text-slate-700">
                  <span className="font-semibold">Languages:</span>{" "}
                  {expert.languages}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <button
                    className="transition-colors hover:text-blue-600"
                    type="button"
                  >
                    Email
                  </button>
                  <button
                    className="transition-colors hover:text-blue-600"
                    type="button"
                  >
                    Call
                  </button>
                  <button
                    className="transition-colors hover:text-green-600"
                    type="button"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#101010] px-6 py-16">
        <div className="mx-auto max-w-7xl p-5">
          <h2 className="mb-4 text-2xl font-medium text-white md:text-4xl">
            Most Trending Projects in Mumbai
          </h2>
          <div className="p-5">
            <span className="inline-block rounded-full bg-white px-6 py-2 text-black transition hover:bg-black hover:text-white">
              Luxury
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {luxuryDetails.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-xl bg-black text-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-72">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm text-white">{project.price}</p>
                  </div>
                  <p className="p-1 text-sm font-semibold text-white">
                    {project.location}
                  </p>
                  <p className="p-1 text-sm font-semibold text-white">
                    {project.builder}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#0b1b4a] px-8 py-10 md:px-20">
          <h2 className="pb-4 text-4xl font-bold">
            <span className="text-white">Get </span>
            <span className="text-green-500">INR 50,000 OFF</span>
          </h2>
          <p className="font-normal text-white">
            Along with low interest and exclusive benefits on home loans today.
          </p>
          <div className="p-5">
            <button
              className="inline-block rounded-full bg-white px-6 py-2 text-black transition hover:bg-black hover:text-white"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-3xl font-semibold text-blue-950 md:text-4xl">
            Frequently Asked Questions
          </h2>

          {faqs.map((item) => (
            <div key={item.id} className="border-b border-slate-200 py-6">
              <button
                onClick={() => toggleFaq(item.id)}
                className="flex w-full items-center justify-between gap-4 text-left"
                type="button"
                aria-expanded={openId === item.id}
              >
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {item.question}
                </h3>
                <span
                  className={`text-xl font-bold text-blue-900 transition-transform duration-300 ${
                    openId === item.id ? "rotate-45" : "rotate-0"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden text-slate-600 transition-all duration-300 ${
                  openId === item.id ? "mt-4 max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
