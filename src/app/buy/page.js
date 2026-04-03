import { Suspense } from "react";
import BuyPageComponent from "@/components/buy/BuyPage";

export const metadata = {
  title: "Properties for Sale in India",
  description:
    "Browse verified luxury properties for sale across India. Apartments, villas and penthouses in Mumbai, Bangalore, Gurgaon, Noida and more.",
  alternates: {
    canonical: "/buy",
  },
  openGraph: {
    title: "Properties for Sale in India | Grove Vista",
    description: "Browse verified properties for sale across India with Grove Vista Properties.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Properties for Sale in India | Grove Vista",
    description: "Explore luxury apartments and villas across India.",
  },
};

export default function BuyPageRoute() {
  return (
    <Suspense fallback={<div className="min-h-[40vh] bg-white" />}>
      <BuyPageComponent />
    </Suspense>
  );
}
