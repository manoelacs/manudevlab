export type ServiceIcon = "chat" | "browser" | "dashboard" | "phone" | "code" | "languages";

export type Service = {
  icon: ServiceIcon;
  title: string;
  description: string;
  goodFor: string;
};

/** Services clients can hire Manudev Lab for. Edit freely — the home page reads this list. */
export const services: Service[] = [
  {
    icon: "chat",
    title: "AI assistants & chatbots",
    description:
      "Assistants that answer your customers and guests around the clock, on your website or WhatsApp, using your own information.",
    goodFor: "Hosts, shops and service businesses",
  },
  {
    icon: "browser",
    title: "Websites & landing pages",
    description:
      "Fast, bilingual websites that look great on every phone and are easy to update — built new, or a refresh of the one you have.",
    goodFor: "Restaurants, cafés and small businesses",
  },
  {
    icon: "dashboard",
    title: "Web apps & dashboards",
    description:
      "Booking systems, client portals, internal tools and dashboards, built with React, Next.js, TypeScript and Supabase.",
    goodFor: "Startups and growing teams",
  },
  {
    icon: "phone",
    title: "Mobile apps",
    description: "iOS and Android apps from a single Flutter codebase, from first prototype to app-store launch.",
    goodFor: "Founders with an app idea",
  },
  {
    icon: "code",
    title: "Senior frontend for your team",
    description:
      "Extra senior hands on your React or Next.js codebase: new features, design systems, performance and clean-up.",
    goodFor: "Product teams that need to ship faster",
  },
  {
    icon: "languages",
    title: "Localization for small markets",
    description:
      "Products that feel local in the Balkans and Brazil — the right languages, and flows that fit how people there actually pay and talk.",
    goodFor: "Businesses in Albania, the Balkans and Brazil",
  },
];

export const process = [
  { step: "01", title: "Intro call", text: "Tell me what you need. I'll say honestly whether I'm the right fit." },
  { step: "02", title: "Plan & quote", text: "A clear scope, timeline and price before any work starts." },
  { step: "03", title: "Build", text: "Regular updates and a preview link you can click through as it grows." },
  { step: "04", title: "Launch & support", text: "I put it live, show you how to use it, and stay around for fixes." },
];

export const facts = [
  "Senior frontend engineer",
  "React · Next.js · TypeScript · Flutter",
  "English & Português",
  "Remote — Europe & Brazil time zones",
];
