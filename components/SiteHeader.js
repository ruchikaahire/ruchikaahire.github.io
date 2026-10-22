"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onBlog = pathname?.startsWith("/blog");

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Ruchika Ahire, home">
        Ruchika Ahire
        <i aria-hidden="true"></i>
      </Link>
      <button
        className="menu-button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>
      <nav id="site-nav" aria-label="Primary navigation" className={open ? "open" : ""}>
        <Link href="/#work" onClick={() => setOpen(false)}>
          Work
        </Link>
        <Link href="/#about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="/blog" className={onBlog ? "active" : ""} onClick={() => setOpen(false)}>
          Blog
        </Link>
        <Link className="nav-cta" href="/#contact" onClick={() => setOpen(false)}>
          Let&rsquo;s talk ↗
        </Link>
      </nav>
    </header>
  );
}
