"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Newsletter from "@/components/news/newsletter";

const properties = [
  {
    id: 1,
    price: "INR 45.00 Cr",
    title: "Golf Course View | Ultra Luxury | Ready",
    location: "DLF The Camellias, Gurgaon, NCR",
    beds: 4,
    baths: 5,
    area: "7,100",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    price: "INR 35.50 Cr",
    title: "City Skyline View | Private Lift | Upgraded",
    location: "Prestige Kingfisher Towers, Bangalore",
    beds: 4,
    baths: 5,
    area: "8,321",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    price: "INR 15.50 Cr",
    title: "Luxury 3BR | Sea Facing | Signature Residence",
    location: "Lodha World One, Worli, Mumbai",
    beds: 3,
    baths: 3,
    area: "1,608",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
];

const services = [
  {
    title: "Connect with a Specialist",
    description: "Access our team of expert agents ready to assist you with finding your dream property in India.",
    color: "text-blue-600 bg-blue-50/80",
  },
  {
    title: "List Your Property",
    description: "Get the best value with expert marketing strategies and access to thousands of buyers.",
    color: "text-orange-600 bg-orange-50/80",
  },
  {
    title: "Download Report",
    description: "Get the latest Indian real estate market reports with actionable insights and trends.",
    color: "text-emerald-600 bg-emerald-50/80",
  },
  {
    title: "Explore Projects",
    description: "Browse our curated portfolio of new developments and off-plan investment opportunities.",
    color: "text-violet-600 bg-violet-50/80",
  },
];

const heroImage =
  "https://static.vecteezy.com/system/resources/thumbnails/036/725/233/small_2x/ai-generated-real-estate-advertisment-background-with-copy-space-free-photo.jpg";
const careerImage = "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("For Sale");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filters = ["For Sale", "For Rent", "Off Plan"];

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/buy?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <Image src={heroImage} alt="Luxury city skyline" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-20 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Find Your Dream
            <span className="block text-blue-300 drop-shadow-lg">Property in India</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-slate-100 drop-shadow-md">
            Explore thousands of verified listings with exclusive deals and expert guidance across India.
          </p>

          <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl">
            <div className="mb-3 flex gap-2 px-2 pt-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeFilter === filter ? "bg-blue-600 text-white shadow-md" : "text-slate-200 hover:bg-white/20"
                  }`}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch} className="flex flex-col gap-3 md:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/50 bg-white/90 px-5 shadow-inner backdrop-blur-sm">
                <svg className="h-5 w-5 shrink-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by city (Mumbai, Bangalore, Gurgaon)..."
                  className="w-full bg-transparent py-4 text-[15px] font-medium text-slate-800 placeholder:text-slate-500 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="rounded-2xl border border-blue-400/50 bg-blue-600 px-8 py-4 text-[15px] font-bold text-white shadow-lg transition-colors hover:bg-blue-500"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/80 py-24">
        <div className="absolute -left-1/2 -top-1/2 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">What We Offer</p>
            <h2 className="mb-5 text-3xl font-extrabold text-slate-900 md:text-5xl">Pan-India Real Estate Solutions</h2>
            <p className="mx-auto max-w-2xl text-lg font-medium text-slate-600">
              Focused around exceptional customer service and proven expertise across the entire Indian market.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group cursor-pointer rounded-3xl border border-white/60 bg-white/40 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-xs font-extrabold uppercase shadow-inner ${service.color}`}>
                  GV
                </div>
                <h3 className="mb-3 text-[17px] font-bold text-slate-900 transition-colors group-hover:text-blue-600">{service.title}</h3>
                <p className="text-[15px] font-medium leading-relaxed text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-bl from-emerald-50 via-slate-50 to-sky-50 py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">Featured Listings</p>
              <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">Explore Property Across India</h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-2 rounded-xl border border-white bg-white/50 p-1.5 backdrop-blur-md">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-lg px-5 py-2.5 text-[14px] font-bold transition-all ${
                      activeFilter === filter ? "bg-blue-600 text-white shadow-md" : "text-slate-600 hover:bg-white/60"
                    }`}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <button
                onClick={() => router.push("/buy")}
                className="rounded-xl bg-orange-600 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl"
                type="button"
              >
                View all properties
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/60 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-64 overflow-hidden rounded-t-3xl p-3 pb-0">
                  <Image src={property.image} alt={property.title} fill className="rounded-2xl object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="pointer-events-none absolute inset-x-3 bottom-0 h-1/2 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-blue-800 shadow-sm backdrop-blur-md">
                    {activeFilter}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-2xl font-extrabold text-slate-900">{property.price}</h3>
                  <p className="mb-3 line-clamp-1 text-[15px] font-bold text-slate-700">{property.title}</p>
                  <p className="mb-5 truncate text-[13px] font-medium text-slate-500">{property.location}</p>

                  <div className="mb-6 flex items-center justify-between rounded-xl border border-white bg-white/50 p-3 text-[13px] font-semibold text-slate-600">
                    <span>Beds {property.beds}</span>
                    <span>Baths {property.baths}</span>
                    <span>{property.area} sqft</span>
                  </div>

                  <div className="mt-auto grid grid-cols-3 gap-3">
                    <button className="rounded-xl border border-slate-200 bg-white py-2.5 text-[13px] font-bold text-slate-700 shadow-sm transition-all hover:bg-blue-50 hover:text-blue-700" type="button">
                      Email
                    </button>
                    <button className="rounded-xl border border-slate-200 bg-white py-2.5 text-[13px] font-bold text-slate-700 shadow-sm transition-all hover:bg-blue-50 hover:text-blue-700" type="button">
                      Call
                    </button>
                    <button className="rounded-xl bg-green-500 py-2.5 text-[13px] font-bold text-white shadow-md shadow-green-500/20 transition-all hover:bg-green-600" type="button">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold text-slate-500">Career at Grove Vista Property</p>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-blue-900 md:text-5xl">
              Exceptional service is our thing and our teams make it happen
            </h2>
            <p className="mb-8 max-w-xl text-lg text-slate-600">
              We are looking for ambitious individuals that thrive in a high-pressure, incentive-driven environment and we provide such candidates
              with opportunities to grow rapidly.
            </p>
            <button
              className="rounded-full bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              type="button"
              onClick={() => router.push("/careers")}
            >
              Are you ready?
            </button>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image src={careerImage} alt="Career team" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

       <Newsletter />


      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-emerald-600/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-400">Why Choose Us</p>
            <h2 className="mb-5 text-3xl font-extrabold text-white md:text-5xl">India&apos;s Premier Property Marketplace</h2>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-400">
              We combine deep market expertise with cutting-edge technology to deliver exceptional results across the country.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Exclusive Access to Prime Properties",
                desc: "Gain priority access to exclusive listings and upcoming developments across top markets in India before they go public.",
              },
              {
                title: "Proven Track Record of Success",
                desc: "With thousands of satisfied clients, our expertise consistently delivers results for investors, buyers and sellers nationwide.",
              },
              {
                title: "Expert Guidance in Current Market",
                desc: "Make informed decisions with strategic insights and comprehensive data on the dynamic Indian real estate market.",
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="transform rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-extrabold text-white">
                  GV
                </div>
                <h3 className="mb-4 text-[18px] font-extrabold text-white">{feature.title}</h3>
                <p className="text-[14.5px] font-medium leading-relaxed text-slate-400">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
