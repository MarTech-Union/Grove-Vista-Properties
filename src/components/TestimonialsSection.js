import Image from "next/image";

const testimonials = [
  {
    tag: "Luxury Buy",
    title: "Sea-Facing 4BHK, Worli",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    quote:
      "The team helped us shortlist only serious options and handled every due-diligence detail. We closed the deal in 11 days with full confidence.",
    name: "Arjun Malhotra",
    role: "Entrepreneur, Bandra",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    badge: "Saved 18L in negotiation",
  },
  {
    tag: "Family Upgrade",
    title: "3BHK Skyline Home, Powai",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    quote:
      "From site visits to paperwork, everything felt organized and transparent. Their market insight made pricing and timing decisions much easier.",
    name: "Ritika Sharma",
    role: "Product Lead, Powai",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    badge: "Loan approved in 72 hours",
  },
  {
    tag: "Investment",
    title: "Premium Commercial Unit, BKC",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    quote:
      "I needed a high-return asset with low risk. Their comparisons, rental analytics, and legal clarity gave me confidence to invest.",
    name: "Nikhil Verma",
    role: "Founder, Andheri",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    badge: "Projected yield up by 2.3%",
  },
];

const Card = ({ item }) => {
  return (
    <article className="w-[84vw] max-w-[380px] min-w-[260px] shrink-0 rounded-[22px] border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 84vw, 380px"
          className="h-full w-full object-cover transition duration-700 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-white px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] [font-family:var(--font-manrope)]">
          {item.tag}
        </span>

        <p className="absolute bottom-3 left-3 text-base font-semibold leading-snug text-white [font-family:var(--font-playfair-display)]">
          {item.title}
        </p>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating + Badge */}
        <div className="flex items-center justify-between text-sm text-amber-400 [font-family:var(--font-manrope)]">
          <div>★★★★★</div>
          <span className="rounded-full bg-green-100 px-2 py-1 text-[11px] font-semibold tracking-wide text-green-700">{item.badge}</span>
        </div>

        {/* Quote */}
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 [font-family:var(--font-manrope)]">&quot;{item.quote}&quot;</p>

        {/* User */}
        <div className="mt-4 flex items-center gap-3 border-t pt-3">
          <Image
            src={item.avatar}
            alt={item.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-sm font-semibold [font-family:var(--font-manrope)]">{item.name}</p>
            <p className="text-xs tracking-wide text-gray-500 [font-family:var(--font-manrope)]">{item.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-semibold tracking-[-0.02em] text-[#004477] [font-family:var(--font-playfair-display)] md:text-4xl">
          What Our Clients Say
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-[15px] font-medium leading-relaxed text-gray-600 [font-family:var(--font-manrope)] md:text-base">
          Don&apos;t just take our word for it. Here&apos;s what our clients say.
        </p>

        {/* Scroll Cards */}
        <div className="testimonials-scroll flex gap-6 overflow-x-auto pb-6">
          {testimonials.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}