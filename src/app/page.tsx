import Link from "next/link";
import { products, sideQuests } from "@/data/products";
import { site } from "@/data/site";
import { Wave } from "@/components/Wave";
import { Polaroid } from "@/components/Polaroid";
import { ContactButtons } from "@/components/ContactButtons";
import { ArrowRight, Chat, Code, Compass, Plane, Sun } from "@/components/Icons";

const focus = [
  {
    title: "AI assistants",
    text: "Assistants that answer guests and customers from a business's own information — so owners can go to the beach.",
    icon: <Chat />,
    color: "var(--sun)",
  },
  {
    title: "Made for small markets",
    text: "The Balkans and other small countries get overlooked. I build for them first, in their own language.",
    icon: <Compass />,
    color: "var(--coral)",
  },
  {
    title: "Web & mobile that ships",
    text: "React, Next.js, TypeScript, Flutter and Supabase — polished by a senior frontend engineer.",
    icon: <Code />,
    color: "var(--lagoon)",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container split">
          <div className="split-main stack" style={{ gap: 26 }}>
            <p className="location-pill">
              <Sun /> now coding from: {site.currentCity}
            </p>
            <h1 className="h1">
              Code from
              <br />
              the <span className="highlight">coast.</span>
            </h1>
            <p className="lead">
              Manudev Lab is a tiny software lab run by a traveling developer. I build AI-powered products for hosts,
              small businesses and small-country markets — usually a few steps from the sea.
            </p>
            <div className="btn-row">
              <Link href="#products" className="btn btn-dark">
                Explore the products <ArrowRight />
              </Link>
              <Link href="/about" className="btn btn-outline">
                Meet the traveler
              </Link>
            </div>
          </div>

          <div className="split-side hero-art">
            <div
              className="blob"
              aria-hidden="true"
              style={{ width: 340, height: 340, background: "var(--sun)", top: 10, right: 0 }}
            />
            <div
              className="blob"
              aria-hidden="true"
              style={{ width: 120, height: 120, background: "var(--coral)", bottom: 10, left: 10 }}
            />
            <div className="pass" role="img" aria-label="Boarding pass from Maceió to Albania for Manoela">
              <div className="pass-body">
                <div className="pass-top">
                  <span>BOARDING PASS</span>
                  <span style={{ color: "var(--sea)" }}>
                    <Plane />
                  </span>
                </div>
                <div className="pass-route">
                  <div className="stack">
                    <span className="pass-code">MCZ</span>
                    <span className="pass-city">Maceió</span>
                  </div>
                  <span className="pass-dash" />
                  <div className="stack" style={{ textAlign: "right" }}>
                    <span className="pass-code">TIA</span>
                    <span className="pass-city">Albania</span>
                  </div>
                </div>
                <dl className="pass-grid">
                  <div>
                    <dt>PASSENGER</dt>
                    <dd>MANOELA C. SANTOS</dd>
                  </div>
                  <div>
                    <dt>FLIGHT</dt>
                    <dd>ML-2026</dd>
                  </div>
                  <div>
                    <dt>GATE</dt>
                    <dd>AI / LLM</dd>
                  </div>
                  <div>
                    <dt>SEAT</dt>
                    <dd>Frontend · window</dd>
                  </div>
                </dl>
              </div>
              <div className="pass-stub">&lt;build /&gt; · SHIP</div>
            </div>
          </div>
        </div>
      </section>

      <Wave direction="down" />

      {/* FOCUS */}
      <section className="on-sea section">
        <div className="container stack" style={{ gap: 44 }}>
          <div className="stack" style={{ gap: 10 }}>
            <p className="eyebrow">{"// the itinerary"}</p>
            <h2 className="h2" style={{ maxWidth: 720 }}>
              Building for the places I actually live in.
            </h2>
          </div>
          <div className="grid-cards">
            {focus.map((f) => (
              <div key={f.title} className="focus-card">
                <span className="icon-dot" style={{ background: f.color }}>
                  {f.icon}
                </span>
                <h3 className="card-title">{f.title}</h3>
                <p className="card-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Wave direction="up" />

      {/* PRODUCTS */}
      <section id="products" className="section">
        <div className="container stack" style={{ gap: 44 }}>
          <div className="stack" style={{ gap: 10, maxWidth: 680 }}>
            <p className="eyebrow">{"// packed in the backpack"}</p>
            <h2 className="h2">What I&apos;m building</h2>
            <p className="lead" style={{ fontSize: 18 }}>
              Every product started with a real problem I ran into on the road.
            </p>
          </div>

          <div className="grid-cards">
            {products.map((p) => (
              <article key={p.slug} className={`tag${p.dark ? " tag-dark" : ""}`}>
                <div className={`tag-band band-${p.band}`}>
                  <span>DEST · {p.audience}</span>
                  <span className="tag-hole" aria-hidden="true" />
                </div>
                <div className="tag-body">
                  <span
                    className={`stamp${p.status === "Coming soon" || p.status === "Planned" ? " stamp-soon" : ""}`}
                  >
                    {p.status}
                  </span>
                  <h3 className={p.mono ? "tag-title-mono" : "tag-title"}>{p.name}</h3>
                  <p className="card-text">{p.description}</p>
                  <a href="#contact" className="tag-cta">
                    {p.cta} →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="side-quests">
            <h3 className="card-title" style={{ fontSize: 22 }}>
              Side quests
            </h3>
            <ul className="chips">
              {sideQuests.map((q) => (
                <li key={q} className="chip">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="on-sun">
        <div className="container split" style={{ paddingBlock: 80, gap: 56 }}>
          <Polaroid
            src={site.photos.office}
            alt="Manoela smiling at a café table with her laptop and a coffee"
            placeholder="[YOUR PHOTO]"
            objectPosition="40% 50%"
            caption="office of the day ☼"
            aspect="square"
            tilt={-4}
          />
          <div className="split-main stack" style={{ gap: 22, flexBasis: 480 }}>
            <p className="mono" style={{ fontSize: 14 }}>
              {"// the person behind the lab"}
            </p>
            <p className="quote">
              &ldquo;Five countries, one laptop, and a lot of beaches. I build for the cities I land in — then make it
              work everywhere.&rdquo;
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.6 }}>
              {site.owner} — Brazilian senior frontend engineer and digital nomad.
            </p>
            <Link href="/about" className="btn btn-dark" style={{ alignSelf: "flex-start" }}>
              Read my story <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="on-sea">
        <div className="container stack" style={{ paddingBlock: 96, gap: 24, alignItems: "flex-start" }}>
          <p className="eyebrow">{"// next stop"}</p>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5.6vw, 72px)", lineHeight: 1, maxWidth: 860 }}>
            Let&apos;s build something by the sea.
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--foam)", maxWidth: 620 }}>
            Hosts, restaurants, small businesses and teams — write in English, Portuguese or a little Albanian.
          </p>
          <ContactButtons />
        </div>
      </section>
    </>
  );
}
