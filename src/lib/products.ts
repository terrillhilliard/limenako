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
    gradient: "linear-gradient(150deg,#3f7a4e,#7d9068 52%,#d8bf8a)",
  },
  {
    id: "daily-cleanser",
    category: "Skin · Nourishment",
    name: "Daily Cleanser",
    tagline: "Simply Sacred",
    description:
      "A gentle, nourishing cleanser crafted with ancestral botanical wisdom. Designed for your daily ritual of renewal.",
    priceCents: 3500,
    gradient: "linear-gradient(150deg,#2b4a3a,#5a7a56 52%,#d8bf8a)",
  },
  {
    id: "heritage-collection",
    category: "Gifting · Skin",
    name: "Heritage Collection",
    tagline: "Family Ka Moka",
    description:
      "Our signature collection honouring the Kamoka lineage. Matte navy with gold foil, connecting cultures through sacred care.",
    priceCents: 7500,
    gradient: "linear-gradient(150deg,#b0663f,#8a4a30 52%,#2b4a3a)",
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
