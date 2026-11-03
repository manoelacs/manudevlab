import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © 2026 {site.name} · {site.company}
        </span>
        <span className="mono">Durrës ⇄ Maceió · made with sunscreen</span>
      </div>
    </footer>
  );
}
