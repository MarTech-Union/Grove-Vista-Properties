"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Luxury Flats in Mumbai: The Complete 2026 Buyer's Guide",
    excerpt:
      "Discover luxury flats in Mumbai across Worli, Bandra, Juhu, and Lower Parel. Get area-wise prices, expert tips, and verified listings at Grove Vista Properties.",
    category: "Buyer's Guide",
    date: "April 18, 2026",
    readTime: "8 min read",
    metaTitle: "Luxury Flats in Mumbai: Top Locations, Prices & Buying Guide 2026 | Grove Vista Properties",
    primaryKeyword: "luxury flats in Mumbai",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "2BHK Flat for Sale in Mumbai: A Complete Buyer's Guide for 2026",
    excerpt:
      "Looking for a 2BHK flat for sale in Mumbai? Compare prices across Andheri, Powai, Thane and more. Get verified listings and expert guidance at Grove Vista Properties.",
    category: "Buyer's Guide",
    date: "April 10, 2026",
    readTime: "7 min read",
    metaTitle: "2BHK Flat for Sale in Mumbai: Area-Wise Prices, Locations & Buying Tips 2026 | Grove Vista",
    primaryKeyword: "2BHK flat for sale in Mumbai",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Houses for Rent in Mumbai: A Complete Guide for 2026",
    excerpt:
      "Find houses for rent in Mumbai across Bandra, Andheri, Powai, Thane and Navi Mumbai. Get 2026 rent prices, tips, and verified listings at Grove Vista Properties.",
    category: "Renting",
    date: "March 29, 2026",
    readTime: "6 min read",
    metaTitle: "Houses for Rent in Mumbai: Area-Wise Rent Prices & Complete Renter's Guide 2026 | Grove Vista",
    primaryKeyword: "houses for rent in Mumbai",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
];

const categoryColors = {
  "Investment":         "bg-emerald-100 text-emerald-800",
  "Home Loans":         "bg-blue-100 text-blue-800",
  "Legal & RERA":       "bg-violet-100 text-violet-800",
  "Project Comparison": "bg-amber-100 text-amber-800",
  "Buyer's Guide":      "bg-sky-100 text-sky-800",
  "NRI Corner":         "bg-orange-100 text-orange-800",
  "Project Spotlight":  "bg-rose-100 text-rose-800",
  "Renting":            "bg-teal-100 text-teal-800",
};

const INITIAL_VISIBLE = 4;

export default function BlogPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogs : blogs.slice(0, INITIAL_VISIBLE);

  return (
    <div className="relative min-h-screen bg-white">

       <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white p-4 pb-14 pt-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
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
              <span className="text-slate-800">Blogs</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex  flex-col items-center p-5">
              <p className="mb-2 text-[11px] font-bold tracking-[0.25em] text-amber-700 uppercase">
                Insights &amp; Guides
              </p>
              <h1
                className="text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-tight text-slate-900"
                style={{ fontFamily: "Georgia, serif" }}
              >
                The Grove Vista Blog
              </h1>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500">
                Expert advice, market insights, and honest guides to help you
                navigate Mumbai's real estate landscape with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)]"
            >
              {/* ── Image (top of card) ── */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* ── Date strip (directly below image) ── */}
              <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5 justify-between">
                <span className="text-[11.5px] font-semibold text-slate-500">
                  {blog.date}
                </span>
                <span className="ml-auto flex items-center gap-1 text-[11px] text-slate-400">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {blog.readTime}
                </span>
              </div>

              {/* ── Card body ── */}
              <div className="flex flex-1 flex-col p-4">

                {/* Category badge */}
                <span
                  className={`mb-3 inline-block self-start  px-3 py-0.5 text-[10.5px]  font-bold tracking-wide ${
                    categoryColors[blog.primaryKeyword] || "bg-slate-100 text-slate-600"
                  }`}
                >
                  {blog.primaryKeyword}
                </span>

                {/* Title */}
                <h2 className="mb-2 line-clamp-3 text-[13.5px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">
                  {blog.title}
                </h2>

                {/* Excerpt */}
                <p className="mb-4 flex-1 line-clamp-3 text-[12px] leading-relaxed text-slate-500">
                  {blog.excerpt}
                </p>

                {/* Read more */}
                <Link
                  href={`/blogs/${blog.id}`}
                  className="mt-auto flex items-center gap-1.5 text-[12.5px] font-bold text-blue-600 transition-all hover:gap-3 hover:text-blue-800"
                >
                  Read Article
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="mx-auto max-w-6xl p-6 pb-10 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 text-center">
          <p className="mb-2 text-[11px] font-bold tracking-[0.25em] text-amber-400 uppercase">
            Stay Informed
          </p>
          <h2
            className="text-[clamp(1.4rem,3vw,2rem)] font-semibold text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Get Mumbai Real Estate Insights
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-slate-400">
            Market updates, new project launches, and expert guides — delivered
            straight to your inbox.
          </p>
        </div>
      </section>

    </div>
  );
}