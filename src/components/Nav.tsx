"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/offices", label: "Offices", page: "/offices" },
  { href: "/about", label: "About", page: "/about" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav-wrap">
      <nav aria-label="Main" className="container nav">
        <Link href="/" className="logo">
          <span className="logo-mark mono" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="logo-word">manudev lab</span>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              aria-current={l.page && pathname === l.page ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href={pathname === "/about" ? "#say-hi" : "/#contact"} className="btn btn-dark btn-sm">
            Start a project
          </Link>
        </div>
      </nav>
    </header>
  );
}
