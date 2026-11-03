import type { Metadata } from "next";
import { site } from "@/data/site";
import { Wave } from "@/components/Wave";
import { Polaroid } from "@/components/Polaroid";
import { ContactButtons, SeeProductsLink } from "@/components/ContactButtons";
import { Music, Scooter, Waves } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Who I am",
  description:
    "Manoela Cassia dos Santos — Brazilian senior frontend engineer, digital nomad and the person behind Manudev Lab.",
};

const stops = [
  { year: "2013", title: "Computer Science at UFAL", text: "Maceió, Brazil. Where it all started.", color: "var(--lagoon)" },
  { year: "2021", title: 'console.log("hi")', text: "My first frontend code. No going back.", color: "var(--coral)" },
  {
    year: "2022",
    title: "Senior frontend, Purple Metrics",
    text: "Fully remote — the laptop comes along.",
    color: "var(--sun)",
  },
  { year: "2026", title: "Manudev Lab", text: "My own products, built from Durrës.", color: "var(--sun)", dark: true },
];

const passportStamps = [
  { label: "BRAZIL", className: "pstamp", tilt: -6 },
  { label: "S. AFRICA", className: "pstamp pstamp-round pstamp-rust", tilt: 4 },
  { label: "NETHERLANDS", className: "pstamp pstamp-dashed", tilt: -3 },
  { label: "TURKEY", className: "pstamp pstamp-round", tilt: 7 },
  { label: "ALBANIA · NOW", className: "pstamp pstamp-now", tilt: -5 },
];

export default function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section className="hero">
        <div className="container split" style={{ gap: 56 }}>
          <div className="split-main stack" style={{ gap: 24 }}>
            <p className="eyebrow">{"// whoami"}</p>
            <h1 className="h1" style={{ fontSize: "clamp(50px, 7vw, 96px)" }}>
              Hi, I&apos;m Manoela.
              <br />
              <span className="highlight">Dev</span> &amp; traveler.
            </h1>
            <p className="lead" style={{ maxWidth: 600 }}>
              Brazilian senior frontend engineer, digital nomad and beach person. I write React, Next.js, TypeScript and
              Flutter — and more and more AI — from wherever the sea is closest.
            </p>
          </div>
          <div
            className="split-side"
            style={{ position: "relative", display: "flex", justifyContent: "center", padding: "24px 0" }}
          >
            <div
              className="blob"
              aria-hidden="true"
              style={{ width: 300, height: 300, background: "var(--coral)", top: 0, right: 10 }}
            />
            <Polaroid
              src={site.photos.portrait}
              alt="Portrait of Manoela"
              placeholder="[YOUR PORTRAIT]"
              caption="somewhere on the Adriatic"
              aspect="portrait"
              tilt={3}
              preload
            />
          </div>
        </div>
      </section>

      <Wave direction="down" />

      {/* STORY */}
      <section className="on-sea">
        <div className="container split" style={{ paddingBlock: "48px 88px", alignItems: "flex-start" }}>
          <div className="stack" style={{ gap: 10, flex: "1 1 280px", minWidth: 0 }}>
            <p className="eyebrow">{"// travel log"}</p>
            <h2 className="h2">The short version</h2>
          </div>
          <div className="split-main story" style={{ flexBasis: 560 }}>
            <p>
              I grew up by the beaches of Maceió and started Computer Science at UFAL in 2013 — but I only wrote my
              first line of frontend code in 2021. It clicked fast: by January 2022 I&apos;d joined Purple Metrics,
              where I still work as a senior frontend developer.
            </p>
            <p>
              Then I packed the laptop. South Africa, the Netherlands, Turkey, and Albania, where I spent about three
              years and keep coming back. Today I&apos;m in Durrës, on the Albanian coast, learning the language and
              building for the city around me.
            </p>
            <p>
              Manudev Lab is where those products live. Every one of them started with something I noticed while living
              somewhere new.
            </p>
          </div>
        </div>
      </section>

      <Wave direction="up" />

      {/* ROUTE */}
      <section>
        <div className="container stack" style={{ paddingBlock: "48px 88px", gap: 40 }}>
          <div className="stack" style={{ gap: 10 }}>
            <p className="eyebrow">{"// the route so far"}</p>
            <h2 className="h2">Stops along the way</h2>
          </div>
          <ol className="stops">
            {stops.map((s) => (
              <li key={s.year} className={`stop${s.dark ? " stop-dark" : ""}`}>
                <span className="year" style={{ background: s.color }}>
                  {s.year}
                </span>
                <span className="card-title" style={{ fontSize: 24 }}>
                  {s.title}
                </span>
                <span className="card-text" style={{ fontSize: 15 }}>
                  {s.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PASSPORT + LIFE */}
      <section className="on-sun">
        <div className="container grid-cards" style={{ paddingBlock: 80, gap: 24 }}>
          <div className="panel">
            <h2 className="card-title" style={{ fontSize: 28 }}>
              Passport stamps
            </h2>
            <ul className="passport-stamps" aria-label="Countries I've lived in">
              {passportStamps.map((p) => (
                <li key={p.label} className={p.className} style={{ transform: `rotate(${p.tilt}deg)` }}>
                  {p.label}
                </li>
              ))}
            </ul>
            <p className="display" style={{ fontWeight: 600, fontSize: 26, lineHeight: 1.3, letterSpacing: 0 }}>
              &ldquo;Home is a person, not a place.&rdquo;
            </p>
          </div>
          <div className="panel">
            <h2 className="card-title" style={{ fontSize: 28 }}>
              When the laptop closes
            </h2>
            <ul className="hobbies">
              <li>
                <span className="icon-dot" style={{ background: "var(--lagoon)" }}>
                  <Waves />
                </span>
                Beach days, wherever there&apos;s a coast
              </li>
              <li>
                <span className="icon-dot" style={{ background: "var(--coral)" }}>
                  <Music />
                </span>
                Dancing, cinema and a good night out
              </li>
              <li>
                <span className="icon-dot" style={{ background: "var(--sun)" }}>
                  <Scooter />
                </span>
                Exploring by scooter
              </li>
              <li>
                <span
                  className="icon-dot mono"
                  aria-hidden="true"
                  style={{ background: "var(--white)", border: "2px solid var(--ink)", fontSize: 12 }}
                >
                  sq
                </span>
                Learning Albanian, one lesson at a time
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="say-hi" className="on-sea">
        <div className="container stack" style={{ paddingBlock: 88, gap: 24, alignItems: "flex-start" }}>
          <p className="eyebrow">{"// say hi"}</p>
          <h2 className="display" style={{ fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.02, maxWidth: 820 }}>
            Building something, or passing through Durrës? Let&apos;s grab a coffee by the sea.
          </h2>
          <ContactButtons showLinkedIn extra={<SeeProductsLink />} />
        </div>
      </section>
    </>
  );
}
