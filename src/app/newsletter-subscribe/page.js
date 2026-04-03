import NewsletterSubscribe from "@/components/about/newsletter/NewsletterSubscribe";

export const metadata = {
  title: "Newsletter Subscribe",
  description:
    "Subscribe to the Grove Vista newsletter for weekly property picks, market intelligence, and early access to new launches across India.",
  alternates: {
    canonical: "/newsletter-subscribe",
  },
  openGraph: {
    title: "Subscribe to Grove Vista Newsletter",
    description: "Weekly real estate insights and premium property picks.",
    type: "website",
  },
};

export default function NewsletterSubscribePage() {
  return <NewsletterSubscribe />;
}
