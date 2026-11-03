/**
 * Site-wide settings. Edit this file to update contact links and photos.
 *
 * Photos: drop the image files into /public/images and set the paths below,
 * e.g. beach: "/images/beach.jpg". While a path is null, a placeholder shows.
 */
export const site = {
  name: "Manudev Lab",
  domain: "manudevlab.com",
  url: "https://manudevlab.com",
  owner: "Manoela Cassia dos Santos",
  company: "Manoela Cassia dos Santos Serviços Tecnológicos",
  currentCity: "Durrës, Albania",

  email: "hello@manudevlab.com",
  instagram: { handle: "@manoela_dev", url: "https://instagram.com/manoela_dev" },
  linkedin: "https://www.linkedin.com/in/manoelacs/" as string | null,

  photos: {
    // TODO: add a beach photo (shown on the home page, square works best)
    beach: null as string | null,
    // TODO: add a portrait (shown on the "Who I am" page, 4:5 works best)
    portrait: null as string | null,
  },
};
