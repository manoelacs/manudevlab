"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  const onAbout = pathname === "/about";

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
          <Link href="/#products" className="nav-link">
            Products
          </Link>
          <Link href="/offices" className="nav-link" aria-current={pathname === "/offices" ? "page" : undefined}>
            Offices
          </Link>
          <Link href="/about" className="nav-link" aria-current={onAbout ? "page" : undefined}>
            Who I am
          </Link>
          <Link href={onAbout ? "#say-hi" : "/#contact"} className="btn btn-dark btn-sm">
            {onAbout ? "Say hi" : "Let's build"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
