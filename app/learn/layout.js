// =====================================================
// ملف: layout.js (تخطيط صفحة الدرس)
// المكان: app/learn/layout.js
// الوظيفة: التخطيط العام لجميع صفحات الدروس
// =====================================================

export default function LearnLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  );
}
