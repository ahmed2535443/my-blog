// =====================================================
// ملف: CodeBlock.js (مُحدَّث)
// المكان: app/components/CodeBlock.js
// الوظيفة: مكون احترافي لعرض الكتل البرمجية مع تلوين (Syntax Highlighting)
// الكود يظهر دائماً بخلفية سودة واتجاه LTR (من الشمال لليمين)
// =====================================================

import { createHighlighter } from 'shiki';

// =====================================================
// 💡 مخزن (Cache) لـ highlighter لتجنب إعادة إنشائه في كل استدعاء
// =====================================================
let highlighterPromise = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark'],
      langs: ['html', 'css', 'javascript', 'jsx', 'typescript', 'tsx', 'json', 'bash', 'markdown', 'sql', 'text'],
    });
  }
  return highlighterPromise;
}

// =====================================================
// 💡 CodeBlock هو مكون غير متزامن (Async Component)
//    شاكي تلوّن الكود على الخادم ثم يُرسل HTML جاهز للمتصفح
// =====================================================
export default async function CodeBlock({ code, language }) {
  const highlighter = await getHighlighter();

  // نلوّن الكود باستخدام الثيم الداكن فقط
  const html = highlighter.codeToHtml(code, { lang: language, theme: 'github-dark' });

  return (
    <div
      className="code-block-wrapper relative my-4 rounded-xl overflow-hidden border"
      style={{
        borderColor: '#334155',
        background: '#0d1117',
        direction: 'ltr',
        textAlign: 'left',
      }}
    >
      {/* شريط علوي يُظهر لغة الكود */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{
          background: '#161b22',
          borderColor: '#334155',
        }}
      >
        {/* نقاط زرقاء - تحاكي شكل شاشة الطرفية */}
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        </div>
        {/* اسم اللغة */}
        <span
          className="text-xs font-mono font-medium"
          style={{ color: '#8b949e' }}
        >
          {language}
        </span>
      </div>

      {/* الكود الملوّن */}
      <div
        style={{ direction: 'ltr', textAlign: 'left' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
