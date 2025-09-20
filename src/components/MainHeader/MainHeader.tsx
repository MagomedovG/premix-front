"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Прайс-лист", href: "/#price-section" },
  { label: "Где попробовать", href: "/#clients-section" },
  { label: "Связаться", href: "/#submit-section" },
  { label: "Партнерам", href: "/distributor" },
];

export default function MainHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#264653]/95" : "bg-[#264653]"
      } p-4 md:p-6`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/premixlogo.svg" alt="Premix Logo" className="h-8" />
        </Link>

        <nav className="hidden md:flex gap-8 text-white font-medium">
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

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0 pointer-events-none"
        } ${scrolled ? "bg-[transparent]" : "bg-[#264653]"} rounded-lg`}
      >
        <div className="p-4 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block text-white text-lg font-medium hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
