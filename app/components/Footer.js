"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="border-t py-10 mt-auto"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3" style={{ color: "var(--primary)" }}>
              <span style={{ color: "var(--secondary)" }}>&lt;</span>
              CodeMaster
              <span style={{ color: "var(--secondary)" }}> /&gt;</span>
            </h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {t.footer.platformDesc}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3" style={{ color: "var(--foreground)" }}>
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-[var(--primary)]" style={{ color: "var(--muted)" }}>
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/learn" className="transition-colors hover:text-[var(--primary)]" style={{ color: "var(--muted)" }}>
                  {t.nav.curriculum}
                </Link>
              </li>
              <li>
                <Link href="/learn/html/01-introduction-to-html" className="transition-colors hover:text-[var(--primary)]" style={{ color: "var(--muted)" }}>
                  {t.nav.startLearning}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3" style={{ color: "var(--foreground)" }}>
              {t.footer.techs}
            </h4>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "Tailwind", "JavaScript", "React", "Next.js", "Supabase", "Clerk"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{ background: "var(--border)", color: "var(--muted)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} CodeMaster. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
