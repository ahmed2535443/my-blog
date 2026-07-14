"use client";

export default function Error({ error, reset }) {
  return (
    <div
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
      style={{ color: "var(--foreground)" }}
    >
      <div className="text-8xl mb-6">⚠️</div>
      <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
        خطأ في الصفحة
      </h1>
      <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
        عذراً، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl font-bold transition-all duration-200"
        style={{
          background: "var(--primary)",
          color: "var(--background)",
          cursor: "pointer",
        }}
      >
        إعادة المحاولة
      </button>
    </div>
  );
}
