"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
      style={{ color: "var(--foreground)" }}
    >
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
        404
      </h1>
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
        الصفحة غير موجودة
      </h2>
      <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl font-bold transition-all duration-200"
          style={{
            background: "var(--primary)",
            color: "var(--background)",
          }}
        >
          العودة للرئيسية
        </Link>
        <Link
          href="/learn"
          className="px-6 py-3 rounded-xl font-bold transition-all duration-200 border-2"
          style={{
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        >
          تصفح المنهج
        </Link>
      </div>
    </div>
  );
}
