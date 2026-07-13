"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[70px] border-b backdrop-blur-md"
      style={{
        background: "var(--background)",
        borderColor: "var(--border)",
        opacity: 0.95,
      }}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 h-full">
        <Link href="/" className="text-2xl font-extrabold" style={{ color: "var(--primary)" }}>
          <span style={{ color: "var(--secondary)" }}>&lt;</span>
          CodeMaster
          <span style={{ color: "var(--secondary)" }}> /&gt;</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-[var(--primary)]"
            style={{ color: "var(--foreground)" }}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/learn"
            className="text-sm font-medium transition-colors duration-200 hover:text-[var(--primary)]"
            style={{ color: "var(--foreground)" }}
          >
            {t.nav.curriculum}
          </Link>
          <Link
            href="/learn/html/01-introduction-to-html"
            className="text-sm font-medium transition-colors duration-200 hover:text-[var(--primary)]"
            style={{ color: "var(--foreground)" }}
          >
            {t.nav.startLearning}
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors"
            style={{
              background: "var(--surface)",
              color: "var(--foreground)",
              cursor: "pointer",
            }}
            aria-label="فتح القائمة"
          >
            <span
              className="w-5 h-0.5 rounded transition-all duration-300"
              style={{
                background: "var(--foreground)",
                transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
              }}
            />
            <span
              className="w-5 h-0.5 rounded transition-all duration-300"
              style={{
                background: "var(--foreground)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="w-5 h-0.5 rounded transition-all duration-300"
              style={{
                background: "var(--foreground)",
                transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden absolute top-[70px] right-0 left-0 border-b p-4 space-y-3"
          style={{
            background: "var(--background)",
            borderColor: "var(--border)",
          }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 rounded-lg transition-colors hover:bg-[var(--surface)]"
            style={{ color: "var(--foreground)" }}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/learn"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 rounded-lg transition-colors hover:bg-[var(--surface)]"
            style={{ color: "var(--foreground)" }}
          >
            {t.nav.curriculum}
          </Link>
          <Link
            href="/learn/html/01-introduction-to-html"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 rounded-lg transition-colors hover:bg-[var(--surface)]"
            style={{ color: "var(--foreground)" }}
          >
            {t.nav.startLearning}
          </Link>
        </div>
      )}
    </header>
  );
}
