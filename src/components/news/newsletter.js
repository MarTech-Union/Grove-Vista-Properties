import Image from "next/image";

const newsData = [
	{
		id: 1,
		date: "30.03.2026",
		views: 520,
		title: "Mumbai Real Estate Boom: Property Registrations Hit 14-Year High",
		desc: "Mumbai recorded over 13,000 property registrations in Feb 2026, marking strong buyer confidence in the housing market.",
	},
	{
		id: 2,
		date: "25.03.2026",
		views: 410,
		title: "Why Mumbai Buyers Are Moving Towards Bigger Homes in 2026",
		desc: "Demand is shifting from 1BHK to 2BHK and 3BHK homes as families prioritize space, comfort, and modern amenities.",
	},
	{
		id: 3,
		date: "20.03.2026",
		views: 380,
		title: "Top Investment Hotspots in Mumbai Metropolitan Region",
		desc: "Areas like Thane, Navi Mumbai, and Panvel are gaining popularity due to metro connectivity and infrastructure growth.",
	},
];

const skylineImage = "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=80";

export default function Newsletter() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-24">
			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mb-12 flex items-center justify-between gap-6">
					<h2 className="text-4xl font-semibold text-slate-900">Real Estate News</h2>
					<button
						className="flex items-center gap-6 rounded-full bg-slate-200 px-5 py-2 text-sm font-medium transition hover:bg-blue-800 hover:text-white"
						type="button"
					>
						View all posts
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">+</span>
					</button>
				</div>

				<div className="grid gap-10 md:grid-cols-3">
					{newsData.map((item) => (
						<article key={item.id} className="group">
							<div className="relative h-64 overflow-hidden rounded-2xl">
								<Image src={skylineImage} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
							</div>

							<div className="mt-4 flex justify-between text-sm text-slate-500">
								<span>{item.date}</span>
								<span>{item.views} views</span>
							</div>

							<h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">{item.title}</h3>
							<p className="mt-2 text-sm text-slate-600">{item.desc}</p>

							<button
								className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:bg-blue-700"
								type="button"
							>
								+
							</button>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}



