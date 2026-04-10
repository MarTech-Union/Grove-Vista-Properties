"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const menuData = {
  Buy: {
    title: "Properties for Sale in India",
    path: "/buy",
    sections: [
      {
        heading: "Properties by Type",
        items: [
          "Apartments",
          "Penthouses",
          "Villas",
          "Bungalows",
          "Commercial",
          "See All",
        ],
      },
      {
        heading: "Buyer Resources",
        items: [
          "Buyer Guide",
          "Home Loan Assistance",
          "Legal Help",
          "RERA Info",
        ],
      },
    ],
  },
  Rent: {
    title: "Properties for Rent",
    path: "/rent",
    sections: [
      {
        heading: "Popular Rentals",
        items: [
          "Apartments",
          "Villas",
          "Short Term",
          "Commercial",
          "Co-living",
        ],
      },
      {
        heading: "Resources",
        items: ["Tenant Guide", "Rental Agreement", "FAQs"],
      },
    ],
  },
  Projects: {
    title: "New Projects in India",
    path: null,
    sections: [
      {
        heading: "By City",
        items: [
          "Mumbai Projects",
          "Delhi NCR Projects",
          "Bangalore Projects",
          "Pune Projects",
          "Hyderabad Projects",
        ],
      },
      {
        heading: "By Type",
        items: ["Luxury", "Mid-Range", "Affordable", "Off-Plan / Pre-Launch"],
      },
    ],
  },
  Developers: {
    title: "Top Developers",
    path: null,
    sections: [
      {
        heading: "National Leaders",
        items: ["DLF", "Lodha", "Godrej Properties", "Prestige Group", "Sobha"],
      },
      {
        heading: "Regional Leaders",
        items: ["Hiranandani", "Oberoi Realty", "Rustomjee", "Brigade Group"],
      },
    ],
  },
  Areas: {
    title: "Explore Cities and Areas",
    path: null,
    sections: [
      {
        heading: "Top Cities",
        items: ["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad"],
      },
      {
        heading: "Premium Localities",
        items: [
          "Bandra West",
          "Worli",
          "Golf Course Road",
          "Koramangala",
          "Jubilee Hills",
        ],
      },
    ],
  },
  Services: {
    title: "Our Services",
    path: "/services",
    sections: [
      {
        heading: "What We Offer",
        items: [
          "Home Loan",
          "Legal Consultation",
          "Property Management",
          "NRI Services",
        ],
      },
      {
        heading: "Tools",
        items: [
          "EMI Calculator",
          "Market Reports",
          "Property Valuation",
          "Newsletter",
        ],
      },
    ],
  },
  More: {
    title: "More",
    path: null,
    sections: [
      {
        heading: "Company",
        items: ["About Us", "Testimonials", "Careers", "Press", "Contact Us"],
      },
      {
        heading: "Resources",
        items: ["Blog", "FAQs", "Newsletter"],
      },
    ],
  },
};

const menuItemRoutes = {
  Newsletter: "/newsletter-subscribe",
  "About Us": "/about",
  Testimonials: "/testimonials",
  "Contact Us": "/contact",
  Careers: "/careers",
  Press: "/about",
  Blog: "/",
  FAQs: "/contact",
  "EMI Calculator": "/services/emiCalculator",
};

function isRoutable(path) {
  return typeof path === "string" && path.startsWith("/");
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateFromMenuItem = (item) => {
    const targetPath = menuItemRoutes[item];
    if (!targetPath) {
      return;
    }

    router.push(targetPath);
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 h-25 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white shadow-lg backdrop-blur-xl"
          : "border-b border-slate-100 bg-white"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/GroveVista.png"
            alt="Grove Vista Properties"
            width={180}
            height={45}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex lg:items-center lg:gap-0.5">
          {Object.entries(menuData).map(([menu, data]) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[14px] font-semibold transition-all duration-200 ${
                  activeMenu === menu
                    ? "bg-blue-50/80 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                }`}
                onClick={() => {
                  if (isRoutable(data.path)) {
                    router.push(data.path);
                  }
                }}
                type="button"
              >
                {menu}
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeMenu === menu
                      ? "rotate-180 text-blue-500"
                      : "text-slate-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeMenu === menu && (
                <div className="absolute left-0 top-full z-50 mt-2 w-[520px] rounded-2xl border border-white/60 bg-white/95 p-6 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
                  <div className="mb-5 flex items-center gap-2 border-b border-slate-100 pb-4">
                    <div className="h-5 w-1.5 rounded-full bg-blue-600" />
                    <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-blue-600">
                      {data.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {data.sections.map((section) => (
                      <div key={section.heading}>
                        <p className="mb-3 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                          {section.heading}
                        </p>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <button
                              key={item}
                              className="cursor-pointer py-1 text-left text-[14px] font-medium text-slate-700 transition-all duration-150 hover:translate-x-1 hover:text-blue-600"
                              onClick={() => navigateFromMenuItem(item)}
                              type="button"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 text-[13px] font-bold text-slate-700 transition-colors hover:text-blue-600"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
              <svg
                className="h-4 w-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            +91 99XXXXXX
          </a>

          <div className="h-6 w-px bg-slate-200" />

          <button
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-[14px] font-bold text-slate-700 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-600"
            type="button"
          >
            Login
          </button>
          <button
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-[14px] font-bold text-white shadow-md shadow-slate-500/20 transition-all duration-200 hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-500/30"
            type="button"
          >
            List Property
          </button>
        </div>

        <button
          className="rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-slate-100 bg-white/98 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {Object.entries(menuData).map(([menu, data]) => (
              <div key={menu}>
                <button
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[14px] font-bold text-slate-800 transition-all hover:bg-blue-50/50 hover:text-blue-600"
                  onClick={() =>
                    setMobileExpanded((prev) => (prev === menu ? null : menu))
                  }
                  type="button"
                >
                  <span>{menu}</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileExpanded === menu
                        ? "rotate-180 text-blue-500"
                        : "text-slate-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileExpanded === menu && (
                  <div className="mb-2 ml-4 border-l-2 border-blue-100 pl-4 pt-1">
                    {data.sections.map((section) => (
                      <div key={section.heading} className="py-2">
                        <p className="mb-2 text-[10.5px] font-extrabold uppercase tracking-widest text-slate-400">
                          {section.heading}
                        </p>
                        {section.items.map((item) => (
                          <button
                            key={item}
                            className="block py-1.5 text-[14px] font-medium text-slate-600 transition-colors hover:text-blue-600"
                            onClick={() => navigateFromMenuItem(item)}
                            type="button"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-3 space-y-3 border-t border-slate-100 pt-4">
              <a
                href="tel:+919999999999"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-[14px] font-bold text-slate-700 hover:bg-slate-50"
              >
                <svg
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 99XXXXXX
              </a>
              <button
                className="w-full rounded-xl border border-slate-300 py-3 text-[14px] font-bold transition-colors hover:bg-slate-50"
                type="button"
              >
                Login
              </button>
              <button
                className="w-full rounded-xl bg-blue-600 py-3 text-[14px] font-bold text-white shadow-md transition-colors hover:bg-blue-700"
                type="button"
              >
                List Your Property
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
