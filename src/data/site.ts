/**
 * Site-wide settings. Edit this file to update contact links and photos.
 *
 * Photos: drop the image files into /public/images and set the paths below,
 * e.g. office: "/images/office.jpg". While a path is null, a placeholder shows.
 */
export const site = {
  name: "Manudev Lab",
  domain: "manudevlab.com",
  url: "https://manudevlab.com",
  owner: "Manoela Cassia dos Santos",
  company: "Manoela Cassia dos Santos Serviços Tecnológicos",
  currentCity: "Durrës, Albania",

  // The contact email lives in src/components/EmailButton.tsx, split into parts
  // so spam bots can't read it from the page HTML.
  instagram: { handle: "@manoela_dev", url: "https://instagram.com/manoela_dev" },
  linkedin: "https://www.linkedin.com/in/manoelacs/" as string | null,

  photos: {
    // "Office of the day" photo on the home page (square frame)
    office: "/images/office.jpg" as string | null,
    // Portrait shown on the "Who I am" page (4:5 frame)
    portrait: "/images/portrait.jpg" as string | null,
  },
};
