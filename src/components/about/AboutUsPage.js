import Image from "next/image";
import ContactSection from "@/components/ContactSection";

const statsData = [
  { value: "50+", label: "Team Members" },
  { value: "10,000+", label: "Happy Homebuyers" },
  { value: "10+", label: "Years of Experience" },
  { value: "5+", label: "Cities Served" },
];

const groupImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";
const ceoImg = "https://static.vecteezy.com/system/resources/thumbnails/024/344/088/small/businessman-isolated-illustration-ai-generative-free-png.png";
const leaderImg = "/PeopleImg.jpg";

const StatCard = ({ value, label }) => {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition duration-300 hover:shadow-md sm:p-5 md:hover:scale-[1.02]">
      <h3 className="text-3xl font-extrabold text-[#122247] sm:text-4xl md:text-5xl">{value}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:text-sm md:text-base">{label}</p>
    </div>
  );
};

const valuesData = [
  {
    title: "Mission",
    description:
      "To make home-buying simple, transparent and fully assisted through technology, verified data, and expert guidance, enabling every buyer to make confident real-estate decisions.",
  },
  {
    title: "Vision",
    description:
      "To be the most trusted and innovative real estate partner, driving growth and creating value for our clients, employees, and stakeholders.",
  },
];

const ValueCard = ({ title, description }) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6 md:p-8">
      <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
    </article>
  );
};

const content = {
  title: "Building excellence for generations",
  description:
    "GrowVista is one of India's leading full-stack real estate advisory platforms, helping homebuyers discover, evaluate and buy their dream homes with confidence. With years of ground expertise across major cities, GrowVista provides unmatched end-to-end assistance, from property search and site visits to documentation, home-loan facilitation and final possession.",
};

const insideData = [
  {
    id: "team",
    title: "Team",
    description:
      "Our cross-functional team combines market intelligence, legal support and customer-first advisory to guide each client with confidence.",
  },
  {
    id: "careers",
    title: "Careers",
    description:
      "We are always looking for motivated talent across sales, operations and technology. Join us to build the future of real estate advisory.",
  },
  {
    id: "press",
    title: "Press",
    description:
      "Grove Vista insights and announcements are regularly featured across market reports and media conversations on housing trends.",
  },
];

const leader = [
  {
    id: 1,
    name: "Amit Sharma",
    position: "Founder & CEO",
  },
  {
    id: 2,
    name: "Priya Mehta",
    position: "Chief Operating Officer",
  },
  {
    id: 3,
    name: "Rahul Verma",
    position: "Head of Sales",
  },
  {
    id: 4,
    name: "Neha Patel",
    position: "Marketing Director",
  },
];

const Card = ({ id, title, description }) => {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
    >
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{description}</p>
    </article>
  );
};

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/70">
      <section
        id="our-story"
        className="scroll-mt-28 flex min-h-[70vh] items-center bg-black text-white md:min-h-[90vh]"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-20">
          <div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Message from the CEO
            </h1>
            <p className="mt-5 border-l-2 border-blue-400 pl-3 text-sm leading-relaxed text-gray-300 sm:pl-4 sm:text-base md:mt-6 md:text-lg">
              Grove Vista Properties was founded to redefine excellence in
              Mumbai&apos;s ever-evolving real estate landscape. We leverage
              cutting-edge technology and data-driven strategies to deliver a
              seamless, intelligent, and client-centric property experience. Our
              team of seasoned professionals provides bespoke solutions across
              residential, commercial, and luxury developments. Built on trust,
              transparency, and innovation, Grove Vista Properties is
              positioning itself among India&apos;s most refined and
              forward-thinking real estate brands.
            </p>
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg font-semibold sm:text-xl">Yash Dubey</h3>
              <p className="text-sm text-blue-400 sm:text-base">
                Grove Vista Properties Founder and CEO
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:h-[380px] md:h-[440px]">
              <Image src={ceoImg} alt="CEO" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 560px" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((item, index) => (
            <StatCard key={index} value={item.value} label={item.label} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 md:pb-16">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Our Foundation</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">Our Values</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {valuesData.map((item, index) => (
            <ValueCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 md:pb-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6 md:p-10">
          <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-[1.1fr_1fr]">
            <h2 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-5xl">{content.title}</h2>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">{content.description}</p>
          </div>
        </div>
      </section>
 


   <section className="w-full pb-12 md:pb-16">
  <div
    className="relative h-[320px] w-full overflow-hidden bg-cover bg-center sm:h-[420px] md:h-[520px]"
    style={{ backgroundImage: `url(${groupImage})` }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#020b1d]/90 via-[#020b1d]/70 to-[#020b1d]/90" />

    {/* Content (CENTERED) */}
    <div className="absolute inset-0 flex items-center justify-center text-center">
      
      <div className="max-w-2xl px-6 sm:px-8 md:px-12">
        
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Grove Vista Promise
        </p>

        <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
          Trusted advisory from shortlist to possession
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">
          We combine deep local expertise, verified data and transparent
          process management to make every property decision clear and confident.
        </p>

        {/* CTA Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200 hover:shadow-lg active:scale-95"
          >
            Get in Touch

            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
      

     
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 md:pb-16">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Inside Grove Vista</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">Team, Careers and Press</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {insideData.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} description={item.description} />
          ))}
        </div>
      </section>
    


    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Our Leadership</p>
          <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">Meet the team behind GrowVista Property</h2>
          <div className="mt-6">
            <button className="rounded-full bg-blue-950 px-6 py-2 text-sm font-semibold text-white transition hover:bg-black" type="button">
              Leadership
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {leader.map((item) => (
            <article
              key={item.id}
              className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white/70 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image src={leaderImg} alt={item.name} fill className="object-cover" sizes="(max-width: 1280px) 50vw, 25vw" />
              </div>

              <div className="px-2 pb-2 pt-5">
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.position}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      
     <section
  id="feedback"
  className="scroll-mt-28 w-full bg-gradient-to-br from-blue-50/60 to-slate-50 py-16"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col items-center text-center">
    
    {/* Heading */}
    <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
      Have feedback for our team?
    </h3>

    {/* Description */}
    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
      We use your feedback to improve every stage of our service. Share your
      experience and suggestions, and we will get back to you quickly.
    </p>

    {/* CTA Button */}
    <a
      href="mailto:info@grovevista.com?subject=Grove%20Vista%20Feedback"
      className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-lg active:scale-95"
    >
      Send Feedback

      {/* Arrow Icon */}
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>

  </div>
</section>
      <ContactSection />
    </div>
  );
}
