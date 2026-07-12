// =====================================================
// ملف: CheatSheet.js
// المكان: app/components/CheatSheet.js
// الوظيفة: مكون ورقة الغش - ملخص سريع لمعلومات مهمة
// =====================================================

export default function CheatSheet({ title, children }) {
  return (
    <div
      className="rounded-xl p-6 my-6 border-2"
      style={{
        background: "var(--surface)",
        borderColor: "var(--accent)",
      }}
    >
      {/* عنوان الورقة */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📋</span>
        <span className="font-bold text-lg" style={{ color: "var(--accent)" }}>
          {title || "Cheat Sheet"}
        </span>
      </div>

      {/* المحتوى */}
      <div style={{ color: "var(--foreground)" }}>{children}</div>
    </div>
  );
}
