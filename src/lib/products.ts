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
    gradient: "linear-gradient(135deg,#3a4f2a,#7a8f4a 55%,#d9bd85)",
  },
  {
    id: "daily-cleanser",
    category: "Skin · Nourishment",
    name: "Daily Cleanser",
    tagline: "Simply Sacred",
    description:
      "A gentle, nourishing cleanser crafted with ancestral botanical wisdom. Designed for your daily ritual of renewal.",
    priceCents: 3500,
    gradient: "linear-gradient(135deg,#1a2b42,#4a6b8a 55%,#d9bd85)",
  },
  {
    id: "heritage-collection",
    category: "Gifting · Skin",
    name: "Heritage Collection",
    tagline: "Family Ka Moka",
    description:
      "Our signature collection honouring the Kamoka lineage. Matte navy with gold foil, connecting cultures through sacred care.",
    priceCents: 7500,
    gradient: "linear-gradient(135deg,#101d2e,#1a2b42 55%,#b5893a)",
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
