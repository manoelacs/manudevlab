/**
 * "Offices around the world" gallery.
 *
 * To add a new office: put the photo in /public/images/offices/ and add an
 * entry at the TOP of this list (newest first). `place` is shown as the
 * polaroid caption; `note` is an optional short line underneath.
 */
export type Office = {
  src: string;
  alt: string;
  place: string | null;
  note?: string;
  /** CSS object-position for the square crop, e.g. "40% 50%". */
  focus?: string;
};

export const offices: Office[] = [
  {
    src: "/images/offices/cafe-01.jpg",
    alt: "Manoela smiling at a café table with her laptop and a coffee",
    // TODO: where was this taken? e.g. "Durrës, Albania"
    place: null,
    note: "coffee + Host Assistant",
    focus: "40% 50%",
  },
  {
    src: "/images/offices/amsterdam-library.jpg",
    alt: "Laptop on a library table overlooking the Amsterdam harbour and the green NEMO building",
    place: "Amsterdam, Netherlands",
    note: "library with a harbour view",
    focus: "50% 52%",
  },
  {
    src: "/images/offices/cape-town.jpg",
    alt: "Laptop by a window looking out over Cape Town towards Devil's Peak and Table Mountain",
    place: "Cape Town, South Africa",
    note: "Table Mountain out the window",
    focus: "50% 55%",
  },
  {
    src: "/images/offices/first-setup.jpg",
    alt: "Manoela's first coding setup: a small laptop raised on a wooden box next to a pink monitor showing code",
    place: "My first setup",
    note: "where it all started · 2021",
    focus: "55% 50%",
  },
  {
    src: "/images/offices/fortaleza.jpg",
    alt: "Manoela smiling at a white desk with her laptop open to code",
    place: "Fortaleza, Brazil",
    focus: "50% 70%",
  },
];

/** How many empty "next stop" frames to show after the photos. */
export const emptySlots = 1;
