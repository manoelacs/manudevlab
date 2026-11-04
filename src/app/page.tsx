import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { services, process, facts, type ServiceIcon } from "@/data/services";
import { site } from "@/data/site";
import { Wave } from "@/components/Wave";
import { ContactButtons } from "@/components/ContactButtons";
import {
  ArrowRight,
  Browser,
  Chat,
  Check,
  Code,
  Dashboard,
  Languages,
  MapPin,
  Phone,
} from "@/components/Icons";

const serviceIcons: Record<ServiceIcon, React.ReactNode> = {
  chat: <Chat size={24} />,
  browser: <Browser />,
  dashboard: <Dashboard />,
  phone: <Phone />,
  code: <Code size={24} />,
  languages: <Languages />,
};

const statusClass: Record<string, string> = {
  Pilot: "badge badge-live",
  MVP: "badge badge-live",
  "In development": "badge",
  "Coming soon": "badge badge-soon",
  Planned: "badge badge-soon",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="stack" style={{ gap: 24 }}>
            <p className="eyebrow-pill">Independent software studio</p>
            <h1 className="h1-pro">
              AI &amp; web products for small businesses and <span className="underline-sun">growing teams.</span>
            </h1>
            <p className="lead">
              Manudev Lab designs and builds AI assistants, websites, web apps and mobile apps — led by a senior
              frontend engineer, from idea to launch.
            </p>
            <div className="btn-row">
              <Link href="#contact" className="btn btn-dark">
                Start a project <ArrowRight />
              </Link>
              <Link href="#services" className="btn btn-outline">
                See services
              </Link>
            </div>
          </div>

          <figure className="hero-photo">
            <div className="hero-photo-frame">
              {site.photos.office ? (
                <Image
                  src={site.photos.office}
                  alt="Manoela working at a café table with her laptop"
                  fill
                  sizes="(max-width: 900px) 90vw, 440px"
                  style={{ objectFit: "cover", objectPosition: "35% 50%" }}
                  preload
                />
              ) : null}
            </div>
            <figcaption className="hero-badge">
              <MapPin />
              <span>
                <strong>Manoela Cassia dos Santos</strong>
                <br />
                Founder · working from {site.currentCity}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FACTS STRIP */}
      <section className="facts" aria-label="At a glance">
        <ul className="container facts-list">
          {facts.map((f) => (
            <li key={f}>
              <Check /> {f}
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pro">
        <div className="container stack" style={{ gap: 40 }}>
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2 className="h2">What you can hire the lab for</h2>
            <p className="lead" style={{ fontSize: 18 }}>
              One senior developer, start to finish — no hand-offs between agencies and freelancers.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <article key={s.title} className="service-card">
                <span className="service-icon">{serviceIcons[s.icon]}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="card-text">{s.description}</p>
                <p className="service-for">
                  <span>Good for</span> {s.goodFor}
                </p>
              </article>
            ))}
          </div>
          <div className="services-cta">
            <p>Not sure which one you need? Describe the problem and I&apos;ll suggest the simplest fix.</p>
            <Link href="#contact" className="btn btn-dark">
              Get a free intro call <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Wave direction="down" />

      {/* PROCESS */}
      <section className="on-sea">
        <div className="container stack" style={{ paddingBlock: "40px 88px", gap: 40 }}>
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 className="h2">From first call to launch</h2>
          </div>
          <ol className="process">
            {process.map((p) => (
              <li key={p.step} className="process-step">
                <span className="process-num mono">{p.step}</span>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-text">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Wave direction="up" />

      {/* PRODUCTS */}
      <section id="products" className="section-pro" style={{ paddingTop: 48 }}>
        <div className="container stack" style={{ gap: 40 }}>
          <div className="section-head">
            <p className="eyebrow">Products</p>
            <h2 className="h2">Built in the lab</h2>
            <p className="lead" style={{ fontSize: 18 }}>
              Alongside client work, the lab builds its own products for hosts, restaurants and small markets.
            </p>
          </div>
          <div className="grid-2">
            {products.map((p) => (
              <article key={p.slug} className={`product-card${p.dark ? " product-dark" : ""}`}>
                <div className="product-top">
                  <span className={statusClass[p.status] ?? "badge"}>{p.status}</span>
                  <span className="product-audience">{p.audience}</span>
                </div>
                <h3 className={p.mono ? "tag-title-mono" : "service-title"} style={{ fontSize: p.mono ? 18 : 24 }}>
                  {p.name}
                </h3>
                <p className="card-text">{p.description}</p>
                <a href="#contact" className="product-cta">
                  {p.cta} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="on-sun">
        <div className="container about-strip">
          <div className="about-photo">
            {site.photos.portrait ? (
              <Image
                src={site.photos.portrait}
                alt="Portrait of Manoela above the Adriatic sea"
                fill
                sizes="200px"
                style={{ objectFit: "cover", objectPosition: "65% 35%" }}
              />
            ) : null}
          </div>
          <div className="stack" style={{ gap: 16, flex: "999 1 420px", minWidth: 0 }}>
            <p className="mono" style={{ fontSize: 14 }}>
              Who&apos;s behind the lab
            </p>
            <p className="about-quote">
              I&apos;m Manoela — a Brazilian senior frontend engineer who has lived and worked in five countries. I
              build for the places I live in, then make it work everywhere.
            </p>
            <div className="btn-row">
              <Link href="/about" className="btn btn-dark">
                About me <ArrowRight />
              </Link>
              <Link href="/offices" className="btn btn-outline">
                See where I work from
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="on-sea">
        <div className="container contact-grid">
          <div className="stack" style={{ gap: 20 }}>
            <p className="eyebrow">Start a project</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05 }}>
              Tell me what you want to build.
            </h2>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--foam)", maxWidth: 560 }}>
              Write in English or Portuguese. You&apos;ll get a reply with next steps — no obligation.
            </p>
            <ContactButtons showLinkedIn />
          </div>
          <ul className="contact-list">
            <li>
              <Check /> A short reply on whether I&apos;m the right fit
            </li>
            <li>
              <Check /> A clear scope and price before any work starts
            </li>
            <li>
              <Check /> One person from first call to launch
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
