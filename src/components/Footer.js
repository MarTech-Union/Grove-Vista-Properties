import Link from "next/link";

const footerLinks = {
  Services: [
    { name: "Leasing", path: "/services" },
    { name: "Mortgages", path: "/services" },
    { name: "Snagging and Inspection", path: "/services" },
    { name: "Holiday Homes", path: "/services" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/services" },
    { name: "Our Awards", path: "/about" },
    { name: "Blog", path: "/" },
    { name: "Newsletter", path: "/about/newsletter-subscribe" },
    { name: "Contact Us", path: "/contact" },
    {name:"Testimonials", path:"/testimonials"},  
  ],
};



export default function Footer() {
  return (
    <footer className="bg-black pb-16 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5 md:pr-4 lg:pr-10">
            <h3 className="mb-2 text-[20px] font-bold tracking-tight">Stay in the loop</h3>
            <p className="mb-8 text-[13px] font-medium text-slate-300">Sign up to our weekly newsletter for market updates</p>

            <div className="flex w-full max-w-md items-center gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-lg bg-white px-4 py-3 text-sm text-black shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link
                href="/about/newsletter-subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-600 text-white shadow-sm transition-all hover:border-white hover:bg-white hover:text-black"
                aria-label="Subscribe"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="hidden md:col-span-1 md:block" />

          <div className="grid grid-cols-2 gap-8 md:col-span-6 lg:grid-cols-3">
            {Object.entries(footerLinks).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-5 text-[15px] font-bold tracking-tight">{category}</h3>
                <ul className="space-y-3.5">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Link href={item.path} className="text-[13px] font-medium tracking-wide text-slate-300 transition-colors hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="mb-5 text-[15px] font-bold uppercase tracking-tight">Contact Us</h3>
              <ul className="space-y-4">
                <li className="text-[13px] font-medium tracking-wide text-slate-300">
                  <a href="tel:+919999999999" className="transition-colors hover:text-white">
                    +91 9082799951
                  </a>
                </li>
                <li className="text-[13px] font-medium tracking-wide text-slate-300">
                  <a href="mailto:info@grovevista.com" className="transition-colors hover:text-white">
                    info@grovevista.com
                  </a>
                </li>
                <li className="text-[13px] font-medium tracking-wide text-slate-300">
                  Business Tower, Andheri East
                  <br />
                  Mumbai - 400069
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-10 md:flex-row lg:items-end">
          <div className="mt-4 w-full max-w-3xl border-t border-slate-800 pt-8 md:mt-0 md:border-t-0 md:pt-0">
            <div className="mb-6 flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-100">Grove Vista Properties</h1>
            </div>

            <div className="mb-1 flex flex-wrap items-center gap-[6px] text-[13px] font-semibold tracking-wide text-white">
              <Link href="/" className="hover:underline">
                Terms and Conditions
              </Link>
              <span className="text-slate-500">|</span>
              <Link href="/" className="hover:underline">
                Privacy and Cookies
              </Link>
            </div>

            <p className="mb-7 text-[13px] font-semibold tracking-wide text-white">Copyright 2026 Grove Vista Properties</p>

            <p className="max-w-[800px] text-[11.5px] font-medium leading-relaxed text-slate-500">
              Grove Vista Properties Real Estate Broker is a company registered in Mumbai, Maharashtra, India (Registration No. XXXXXXXX), 36th Floors,
              Business Tower, Andheri East, Mumbai - 400069. We are regulated under RERA with registration number XXXXXXXX.
            </p>
          </div>

          
        </div>
      </div>
    </footer>
  );
}
