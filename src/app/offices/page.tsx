import type { Metadata } from "next";
import Image from "next/image";
import { offices, emptySlots } from "@/data/offices";
import { site } from "@/data/site";
import { Wave } from "@/components/Wave";

export const metadata: Metadata = {
  title: "Offices around the world",
  description: "One laptop, a lot of tables — the cafés, terraces and beaches where Manudev Lab gets built.",
};

const tilts = [-3, 2, -1.5, 3, -2.5, 1.5];

export default function OfficesPage() {
  const count = offices.length;

  return (
    <>
      {/* INTRO */}
      <section className="hero">
        <div className="container stack" style={{ gap: 24, maxWidth: 1200 }}>
          <p className="eyebrow">{"// offices around the world"}</p>
          <h1 className="h1" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
            One laptop,
            <br />a lot of <span className="highlight">tables.</span>
          </h1>
          <p className="lead">
            Cafés, terraces, airports and beaches — every product in the lab was built at one of these tables. This
            wall grows every time I open the laptop somewhere new.
          </p>
          <p className="location-pill">
            {count} {count === 1 ? "office" : "offices"} so far · still counting
          </p>
        </div>
      </section>

      {/* WALL */}
      <section className="section" style={{ paddingTop: 16 }}>
        <ul className="container office-wall">
          {offices.map((o, i) => (
            <li key={o.src} className="office" style={{ transform: `rotate(${tilts[i % tilts.length]}deg)` }}>
              <div className="office-photo">
                <Image
                  src={o.src}
                  alt={o.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 340px"
                  style={{ objectFit: "cover", objectPosition: o.focus ?? "50% 50%" }}
                  preload={i === 0}
                />
              </div>
              <div className="office-caption">
                <span className="office-place">{o.place ?? "office of the day"}</span>
                {o.note ? <span className="mono office-note">{o.note}</span> : null}
              </div>
            </li>
          ))}
          {Array.from({ length: emptySlots }).map((_, i) => (
            <li
              key={`empty-${i}`}
              className="office office-empty"
              style={{ transform: `rotate(${tilts[(count + i) % tilts.length]}deg)` }}
              aria-hidden="true"
            >
              <div className="office-photo office-photo-empty">
                <span className="mono">next table?</span>
              </div>
              <div className="office-caption">
                <span className="office-place">somewhere new</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Wave direction="down" />

      {/* CTA */}
      <section className="on-sea">
        <div className="container stack" style={{ paddingBlock: "48px 88px", gap: 24, alignItems: "flex-start" }}>
          <p className="eyebrow">{"// recommend a table"}</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05, maxWidth: 820 }}>
            Know a café with good Wi-Fi and a sea view? Send it my way.
          </h2>
          <div className="btn-row">
            <a href={`mailto:${site.email}?subject=A%20table%20for%20the%20lab`} className="btn btn-sun">
              Recommend a spot
            </a>
            <a href={site.instagram.url} className="btn btn-outline-light" target="_blank" rel="noreferrer">
              Follow the trip on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
