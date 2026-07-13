import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Caravan",
  description:
    "The Zarmina Caravan — a private circle for those who appreciate craftsmanship beyond trends.",
  openGraph: {
    title: "The Caravan — Zarmina",
    description: "Early access, artisan stories, private previews. By invitation.",
    images: ["/images/detail-teal.png"],
    url: "/caravan",
  },
  alternates: { canonical: "/caravan" },
};

export default function CaravanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
