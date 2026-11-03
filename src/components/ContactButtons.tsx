import Link from "next/link";
import { site } from "@/data/site";

export function ContactButtons({ showLinkedIn, extra }: { showLinkedIn?: boolean; extra?: React.ReactNode }) {
  return (
    <div className="btn-row">
      <a href={`mailto:${site.email}`} className="btn btn-sun">
        {site.email}
      </a>
      <a href={site.instagram.url} className="btn btn-outline-light" target="_blank" rel="noreferrer">
        Instagram {site.instagram.handle}
      </a>
      {showLinkedIn && site.linkedin ? (
        <a href={site.linkedin} className="btn btn-outline-light" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      ) : null}
      {extra}
    </div>
  );
}

export function SeeProductsLink() {
  return (
    <Link href="/#products" className="btn-link-sun">
      See the products →
    </Link>
  );
}
