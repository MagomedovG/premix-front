"use client";
import { useEffect, useState } from 'react';
import Link from "next/link";
const navItems = [
  { label: "Прайс-лист", href: "/#price-section" },
  { label: "Где попробовать", href: "/#clients-section" },
  { label: "Связаться", href: "/#submit-section" },
  { label: "Партнерам", href: "/#submit-section" },
];
export default function MainFooter() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-[#264653] text-white  p-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/">
            <img src="/premixlogo.svg" alt="Premix Logo" className="h-10" />
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 justify-center md:justify-end font-medium">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:text-gray-300 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
  );
}