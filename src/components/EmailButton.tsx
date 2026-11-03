"use client";

import { useState } from "react";

/**
 * Email button that keeps the address out of the page HTML, so spam bots
 * scraping the site can't harvest it. The address is assembled only when a
 * person clicks, then shown so they can copy it too.
 */
const USER = "hello";
const DOMAIN = "manudevlab.com";

type Props = {
  className?: string;
  label?: string;
  subject?: string;
};

export function EmailButton({ className = "btn btn-sun", label = "Send me an email", subject }: Props) {
  const [revealed, setRevealed] = useState(false);
  const address = `${USER}@${DOMAIN}`;

  function handleClick() {
    setRevealed(true);
    const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    window.location.href = `mailto:${address}${query}`;
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {revealed ? address : label}
    </button>
  );
}
