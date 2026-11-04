export type ProductStatus = "Pilot" | "MVP" | "In development" | "Coming soon" | "Planned";

export type Product = {
  slug: string;
  name: string;
  audience: string;
  status: ProductStatus;
  description: string;
  cta: string;
  band: "sun" | "coral" | "sea";
  mono?: boolean;
  dark?: boolean;
};

export const products: Product[] = [
  {
    slug: "host-assistant",
    name: "Host Assistant",
    audience: "Airbnb hosts",
    status: "Pilot",
    description:
      "An AI assistant that answers your guests' questions around the clock — and tells the cleaner which apartments to clean.",
    cta: "Join the pilot",
    band: "sun",
  },
  {
    slug: "digital-menus",
    name: "Fun Digital Menus",
    audience: "Restaurants in Albania",
    status: "Coming soon",
    description:
      "Send a photo of your paper menu, get back a playful digital one — with short dish videos and star ratings.",
    cta: "Get on the list",
    band: "sea",
  },
  {
    slug: "albania-homes",
    name: "Albania Homes",
    audience: "Home buyers in Albania",
    status: "In development",
    description:
      "Brokers paste a listing and AI pulls out the details; buyers just chat to find the place they want to live.",
    cta: "Talk to the lab",
    band: "sun",
  },
  {
    slug: "ai-assistant-core",
    name: "npm i @manudev/ai-assistant-core",
    audience: "Developers",
    status: "Planned",
    description:
      "The building block behind the lab's assistants — a reusable package to add AI assistant features to any app.",
    cta: "Follow the build",
    band: "coral",
    mono: true,
    dark: true,
  },
];

export const sideQuests = [
  "Nomad Cost Calculator",
  "AI Trip Itinerary Generator",
  "Surprisefy",
  "Boarding-pass album",
  "WiFi QR decoder",
];
