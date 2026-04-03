"use client";

import { useState } from "react";
import Image from "next/image";
import PopupForm from "@/components/Book a Call/popupform";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80";
const teamImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80";

const benefits = [
  {
    title: "Highly Competitive Compensation",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Fast Career Growth",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Performance-Driven Incentives",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Healthcare and Insurance",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Global Learning Opportunities",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Employee Stock Options",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Work-Life Balance",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Supportive Team Culture",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&q=80",
  },
];

const insights = [
  {
    title: "An update from Grove Vista Mumbai leadership",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
  {
    title: "Why professionals are choosing Mumbai real estate careers in 2026",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
  {
    title: "How Mumbai neighborhoods are shaping property demand",
    image:
      "https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
  {
    title: "Mumbai property market outlook for 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
];

const InputField = ({ type, name, placeholder }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500"
    required
  />
);

const SelectField = ({ name, options, placeholder }) => (
  <select
    name={name}
    defaultValue=""
    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500"
    required
  >
    <option value="" disabled>
      {placeholder}
    </option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const CareerForm = ({ className = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok) {
        setSubmitStatus("error");
        setSubmitMessage(result?.message || "Unable to submit your application. Please try again.");
        return;
      }

      setSubmitStatus("success");
      setSubmitMessage(result?.message || "Application submitted successfully.");
      event.currentTarget.reset();
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Network error. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      <div className="grid gap-3">
        <InputField type="text" placeholder="Full Name" name="fullName" />
        <InputField type="text" placeholder="Nationality" name="nationality" />
        <SelectField
          name="inMumbai"
          options={["Yes", "No"]}
          placeholder="Are you currently based in Mumbai, India?"
        />
        <SelectField
          name="department"
          placeholder="Which department are you interested in?"
          options={[
            "Sales and Leasing",
            "Property Management",
            "Conveyancing",
            "HR and Recruitment",
            "Marketing",
            "Customer Service",
            "Technology",
            "Accounting",
            "Admin",
            "Other",
          ]}
        />
        <InputField type="email" placeholder="Email Address" name="email" />
        <InputField type="tel" placeholder="Mobile Number" name="mobile" />

        <div className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3">
          <label className="flex cursor-pointer items-center justify-between gap-3 text-sm font-medium text-slate-700">
            <span>Upload your CV (PDF or DOC, max 4MB)</span>
            <span className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
              Choose File
            </span>
            <input type="file" name="cvFile" accept=".pdf,.doc,.docx" className="hidden" required />
          </label>
        </div>

        <label className="mt-1 flex items-start gap-2 text-sm text-slate-700">
          <input type="checkbox" name="privacyAccepted" required className="mt-0.5 h-4 w-4" />
          <span>I agree to the privacy policy.</span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>

        {submitMessage ? (
          <p className={`text-center text-xs font-medium ${submitStatus === "success" ? "text-green-600" : "text-red-600"}`}>
            {submitMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
};

const InsightCard = ({ item }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <a href={item.link} className="text-sm font-semibold text-slate-900 transition hover:underline">
          {item.title}
        </a>
      </div>
    </article>
  );
};

const BenefitCard = ({ item }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md">
      <div className="relative mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full">
        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="64px" />
      </div>
      <p className="text-sm font-medium text-slate-800">{item.title}</p>
    </div>
  );
};

export default function CareersSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-white text-slate-900">

    <section className="relative w-full h-[500px] md:h-[90vh]">
      
      {/* Background Image */}
      <Image
        src="https://d3h330vgpwpjr8.cloudfront.net/x/1773x/2_15234debdc.webp"
        alt="banner"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="h-1/4"></div>
        <div className="h-3/4 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="max-w-screen-2xl w-full px-4 sm:px-12 py-8 md:py-24 text-center text-white">
          
          <h1 className="text-4xl md:text-[56px] font-bold leading-none uppercase w-full lg:w-3/5 mx-auto">
            Take your career to new heights in luxury living.
          </h1>

          <a href="#form">
            <button className="mt-6 px-6 py-4 bg-white text-black text-sm font-bold uppercase flex items-center gap-3 mx-auto hover:bg-gray-200 transition">
              WORK WITH US
              <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="black"
  strokeWidth="2"
  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M5 12h14M13 5l7 7-7 7"
  />
</svg>
               
            </button>
          </a>

        </div>
      </div>

    </section>

     <section className="mx-auto w-full max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Latest Mumbai team updates</h2>
          <a href="#" className="text-sm font-medium text-slate-900 text-md font-semibold transition hover:underline">
            View More
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((item) => (
            <InsightCard key={item.title} item={item} />
          ))}
        </div>
      </section>


      
      <section className="bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 md:items-center md:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Grow with Grove Vista</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
              Real Estate Careers in Mumbai, India
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              Join a fast-moving team reshaping how buyers and investors discover premium real estate opportunities across Mumbai and India.
            </p>
            <a
              href="/careers#form"
              className="mt-7 inline-flex rounded-lg bg-white px-5 py-3 text-md font-semibold text-slate-900 transition hover:bg-slate-800 hover:text-white"
            >
              View Current Openings
            </a>
          </div>

          <div className="  relative h-[280px] overflow-hidden rounded-2xl border border-white/10 sm:h-[340px] md:h-[420px]">
            <Image
              src={heroImage}
              alt="Modern skyline representing real estate careers in Mumbai, India"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

     

     

      <section className="bg-slate-100 py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Benefits and perks</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            We invest in people first. Our benefits package is designed to support your professional growth, wellbeing, and long-term success.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <BenefitCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* GRID */}
        <div className="grid grid-cols-12 items-center gap-8">
          
          {/* TEXT CONTENT */}
          <div className="col-span-12 xl:col-span-5 order-2 xl:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Caught your attention & want to know more?
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Have a chat with one of our experienced talent acquisition specialists in Mumbai.
            </p>

            <div className="mt-6">
              <button
                className="bg-slate-900 hover:bg-slate-700 text-white px-6 py-3 rounded-md transition"
                type="button"
                onClick={() => setShowPopup(true)}
              >
                Book a call
              </button>
            </div>
          </div>

          {/* SPACER (OPTIONAL like original) */}
          <div className="hidden xl:block xl:col-span-1"></div>

          {/* IMAGE */}
          <div className="col-span-12 xl:col-span-6 order-1 xl:order-2">
            <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                alt="Team discussion"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

       <section id="form" className="bg-slate-100">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:gap-10 md:py-16">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">
              Take the next step in your Mumbai real estate career
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              Build your future with mentoring, transparent growth tracks, and strong earning potential in a performance-oriented Mumbai market.
            </p>

            <div className="relative mt-8 h-[240px] overflow-hidden rounded-2xl border border-slate-200 sm:h-[300px] md:h-[340px]">
              <Image
                src={teamImage}
                alt="Collaborative real estate team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <CareerForm className="mt-8 md:hidden" />
          </div>

          <div className="hidden md:block">
            <CareerForm />
          </div>
        </div>
      </section>

      <PopupForm open={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}
