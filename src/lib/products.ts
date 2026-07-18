export type Product = {
  id: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  priceCents: number;
  gradient: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "lemongrass-soap",
    category: "Skin · Home",
    name: "Lemongrass Soap",
    tagline: "Acne-Free Glow",
    description:
      "100% natural, handmade cold-processed soap with lemongrass and botanical extracts. No artificial ingredients.",
    priceCents: 2500,
    gradient: "linear-gradient(150deg,#1a2b42,#33455f 55%,#d4af37)",
  },
  {
    id: "daily-cleanser",
    category: "Skin · Nourishment",
    name: "Daily Cleanser",
    tagline: "Simply Sacred",
    description:
      "A gentle, nourishing cleanser crafted with ancestral botanical wisdom. Designed for your daily ritual of renewal.",
    priceCents: 3500,
    gradient: "linear-gradient(150deg,#131f30,#26405f 55%,#d9bd85)",
  },
  {
    id: "heritage-collection",
    category: "Gifting · Skin",
    name: "Heritage Collection",
    tagline: "Family Ka Moka",
    description:
      "Our signature collection honouring the Kamoka lineage. Matte navy with gold foil, connecting cultures through sacred care.",
    priceCents: 7500,
    gradient: "linear-gradient(150deg,#1a2b42,#0f1826 55%,#d4af37)",
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
