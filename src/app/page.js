import HomePage from "@/components/home/HomePage";

export const metadata = {
  title: "Luxury Real Estate in India",
  description:
    "Explore premium Indian real estate with Grove Vista Properties. Find luxury apartments, villas and investment opportunities with expert guidance.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grove Vista Properties | Luxury Real Estate in India",
    description: "Discover premium listings and property advisory support across India.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grove Vista Properties",
    description: "Luxury apartments, villas and investment-ready properties in India.",
  },
};

export default function Home() {
  return <HomePage />;
}
