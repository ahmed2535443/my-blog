export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="relative">
        <div
          className="w-16 h-16 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: "var(--border)", borderTopColor: "var(--primary)" }}
        />
      </div>
      <p
        className="mt-4 text-lg font-medium animate-pulse"
        style={{ color: "var(--muted)" }}
      >
        جاري التحميل...
      </p>
    </div>
  );
}
