"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Ladder", href: "#ladder" },
  { label: "Join", href: "#join" },
  { label: "Report", href: "#report" },
  { label: "Rules", href: "#rules", desktopOnly: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[rgba(12,35,64,0.97)] backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-3 px-4 sm:px-5 md:px-12 h-16 sm:h-20 md:h-24">
        <a href="#top" className="flex items-center shrink-0" aria-label="Home">
          <Image
            src="/images/logo-header-v2.svg"
            alt="Mount Cinnamon Beach & Wellness Resort"
            width={250}
            height={111}
            className="h-10 sm:h-12 md:h-[72px] w-auto"
            priority
          />
        </a>
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-10">
          {links.map((link) => (
            <li
              key={link.href}
              className={link.desktopOnly ? "hidden md:block" : ""}
            >
              <a
                href={link.href}
                className="inline-flex items-center min-h-[44px] py-2 text-[10px] sm:text-[11px] md:text-[12px] font-medium uppercase tracking-[1.5px] sm:tracking-[2px] text-white/55 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
