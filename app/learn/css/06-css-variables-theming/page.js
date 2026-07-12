import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CSSVariablesTheming() {
  const lesson = getLessonBySlug("css", "06-css-variables-theming");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ===== Section 1: ما هو ===== */}
        <LessonSection title="ما هو">
          <p className="text-lg leading-relaxed mb-4">
            المتغيرات في CSS (Known as <strong>CSS Custom Properties</strong>) هي متغيرات حقيقية تُعرَّف وتُستخدم
            داخل CSS نفسها. هي من أقوى الميزات التي أضافتها المواصفات الحديثة لـ CSS.
          </p>
          <p className="mb-4">
            تبدأ دائماً بعلامة <code>--</code> وتُستدعى باستخدام دالة <code>var()</code>. على عكس متغيرات
            CSS preprocessing مثل Sass و Less، المتغيرات العربية تعمل مباشرة في المتصفح بدون أي معالج.
          </p>
          <CodeBlock
            code={`/* تعريف المتغير */
:root {
  --primary-color: #2563eb;
  --font-size-base: 16px;
  --spacing-md: 1rem;
}

/* استخدام المتغير */
.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
  padding: var(--spacing-md);
}`}
            language="css"
          />
          <p className="mt-4 mb-4">
            الفرق الجوهري عن Sass Variables: متغيرات CSS <strong>ديناميكية</strong> وتعمل في Runtime.
            يمكنك تغييرها باستخدام JavaScript في أي وقت، وهي ترث في شجرة DOM تماماً像 الخصائص CSS الأخرى.
          </p>
        </LessonSection>

        {/* ===== Section 2: لماذا نستخدمه ===== */}
        <LessonSection title="لماذا نستخدمه">
          <p className="mb-4">المتغيرات CSS تحل عدة مشاكل حرجة في تطوير الواجهات:</p>
          <ul className="space-y-3 list-disc list-inside mb-4">
            <li><strong>إعادة الاستخدام</strong> -عرّف القيمة مرة واحدة واستخدمها في مئات الأماكن</li>
            <li><strong>التثبيت (Theming)</strong> - غيّر مظهر الموقع كله بتغيير متغير واحد</li>
            <li><strong>الصيانة</strong> - تعديل لون واحد في مكان واحد يُحدّث كل التكرارات</li>
            <li><strong>الاستجابة</strong> - أعد تعريف المتغيرات في media queries لتغيير التصميم</li>
            <li><strong>التوافق مع JavaScript</strong> - تفاعل مباشر بين CSS و JS عبر المتغيرات</li>
            <li><strong>بدون بناء (No Build Step)</strong> - تعمل مباشرة في المتصفح بدون Sass أو preprocessing</li>
          </ul>
          <CodeBlock
            code={`/* بدون متغيرات: تغيير اللون يعني تعديل كل مكان */
.card { background: #2563eb; }
.button { background: #2563eb; }
.link { color: #2563eb; }
.badge { border-color: #2563eb; }
/* إذا أردت تغيير اللون → عدّل 4 أماكن على الأقل! */

/* مع المتغيرات: تغيير اللون في مكان واحد فقط */
:root { --color-primary: #2563eb; }
.card { background: var(--color-primary); }
.button { background: var(--color-primary); }
.link { color: var(--color-primary); }
.badge { border-color: var(--color-primary); }
/* الآن غيّر قيمة --color-primary وينتهي الأمر */`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 3: المشكلة التي يحلها ===== */}
        <LessonSection title="المشكلة التي يحلها">
          <p className="mb-4">
            تخيّل أن لديك تصميم نظام (Design System) بألوان وخطوط ومسافات محددة.
            بدون متغيرات، عليك تكرار هذه القيم في كل ملف CSS:
          </p>
          <CodeBlock
            code={`/* الملف الأول: buttons.css */
.btn-primary {
  background: #2563eb;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
}

/* الملف الثاني: cards.css */
.card {
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 8px;
}

/* الملف الثالث: forms.css */
.input {
  border: 1px solid #e5e7eb;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
}

/* المشكلة: إذا أردت تغيير الحدود من #e5e7eb إلى #d1d5db
   → عليك تعديل كل ملف يدوياً! */`}
            language="css"
          />
          <p className="mt-4 mb-4">
            مع المتغيرات، تُجمّع كل القيم في مكان واحد وتُستخدم في كل مكان آخر.
            إذا أردت تغيير أي قيمة، تغيّرها في التعريف فقط:
          </p>
          <CodeBlock
            code={`/* theme.css - مكان واحد للتحكم */
:root {
  --color-border: #e5e7eb;
  --color-primary: #2563eb;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --text-sm: 14px;
}

/* كل الملفات الآن تعتمد على المتغيرات */
.btn-primary {
  background: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
}

.card {
  border: 1px solid var(--color-border);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

.input {
  border: 1px solid var(--color-border);
  padding: var(--spacing-sm) 12px;
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
}

/* الآن غيّر --color-border مرة واحدة وينتهي الأمر! */`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 4: شرح بسيط ===== */}
        <LessonSection title="شرح بسيط">
          <h3 className="text-xl font-bold mb-3">1. تعريف المتغير (Declaration)</h3>
          <p className="mb-3">
            يتطلب تعريف المتغير使用 <code>--</code> متبوعاً باسم المتغير وقيمته. يجب أن يكون التعريف داخل
            <code>{'{ }'}</code> ل.selector معين أو <code>:root</code> للنطاق العام:
          </p>
          <CodeBlock
            code={`/* المتغيرات العامة - تصل لكل العناصر */
:root {
  --color-primary: #3b82f6;
  --spacing-unit: 8px;
  --font-stack: 'Segoe UI', sans-serif;
}

/* المتغيرات المحلية - تصل لهذا المكون فقط */
.sidebar {
  --sidebar-width: 280px;
  --sidebar-bg: #1e293b;
  width: var(--sidebar-width);
  background: var(--sidebar-bg);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">2. استخدام المتغير (var())</h3>
          <p className="mb-3">
            تستخدم دالة <code>var()</code> لقراءة قيمة المتغير. يمكنك تمرير اسمين: اسم المتغير وقيمة احتياطية:
          </p>
          <CodeBlock
            code={`/* الصيغة الأساسية */
.element {
  color: var(--my-color);
}

/* مع قيمة احتياطية (fallback) */
.element {
  color: var(--my-color, blue);
  /* إذا --my-color غير معرّف → استخدم blue */
}

/* مع قيمة احتياطية متقدمة */
.element {
  color: var(--my-color, var(--backup-color, green));
  /* إذا --my-color غير موجود → استخدم --backup-color
     إذا --backup-color غير موجود أيضاً → استخدم green */`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">3. النطاق (Scoping)</h3>
          <p className="mb-3">
            المتغيرات CSS تتبع قواعد النطاق في CSS. متغير مُعرَّف في عنصر ما يمكن أن يُرث في العناصر الأبناء:
          </p>
          <CodeBlock
            code={`/* النطاق العام عبر :root */
:root {
  --text-color: #1f2937;
}

/* هذا العنصر يُعرّف متغيراً محلياً */
.card {
  --card-bg: white;
  background: var(--card-bg);       /* white */
  color: var(--text-color);         /* #1f2937 من :root */
}

/* العنصر الأبناء يرث المتغيرات */
.card .title {
  color: var(--text-color);         /* موروث من :root */
  background: var(--card-bg);       /* موروث من .card */
}

/* يمكن لأي عنصر أب إعادة تعريف متغير للأبناء */
.special-card {
  --card-bg: #fef3c7;               /* يُعيد تعريف card-bg */
  background: var(--card-bg);       /* #fef3c7 بدلاً من white */
}`}
            language="css"
          />

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mt-4">
            <p className="text-blue-800 dark:text-blue-300 font-bold mb-1">ملاحظة مهمة عن الوراثة</p>
            <p className="text-blue-700 dark:text-blue-400">
              المتغيرات CSS تتبع وراثة CSS العادية. عنصر ابن يرث متغيرات أبِه، ويمكنه إعادة تعريفها
              بدون التأثير على الأصل. هذا يسمح بتصميم مكونات معزولة (Isolated Components).
            </p>
          </div>
        </LessonSection>

        {/* ===== Section 5: مثال بسيط ===== */}
        <LessonSection title="مثال بسيط">
          <p className="mb-4">مثال عملي يوضح كيف يمكنك إنشاء نظام ثيم (Theming System) بسيط:</p>
          <CodeBlock
            code={`:root {
  --bg: #ffffff;
  --text: #1f2937;
  --primary: #2563eb;
  --surface: #f3f4f6;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: system-ui, sans-serif;
  transition: background 0.3s, color 0.3s;
}

.card {
  background: var(--surface);
  border: 1px solid color-mix(in oklch, var(--text) 10%, transparent);
  border-radius: 12px;
  padding: 1.5rem;
}

.button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}

.button:hover {
  filter: brightness(1.1);
}`}
            language="css"
          />
          <p className="mt-4 mb-4">
            يمكنك الآن تغيير المظهر بالكثير بتغيير قيم المتغيرات في <code>:root</code> فقط!
          </p>
        </LessonSection>

        {/* ===== Section 6: مثال عملي ===== */}
        <LessonSection title="مثال عملي">
          <p className="mb-4">نظام ثيم كامل يتضمن Dark Mode و JavaScript Interaction:</p>

          <h3 className="text-xl font-bold mb-3">1. تعريف المتغيرات (tokens.css)</h3>
          <CodeBlock
            code={`/* Design Tokens - القيم الأساسية */
:root {
  /* Color Palette */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;

  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-500: #6b7280;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  /* Semantic Colors - Light Mode */
  --bg-primary: var(--color-gray-50);
  --bg-surface: #ffffff;
  --bg-surface-hover: var(--color-gray-100);
  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-500);
  --border-color: var(--color-gray-200);
  --accent: var(--color-primary-600);
  --accent-hover: var(--color-primary-700);

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', 'Cascadia Code', monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;

  /* Spacing Scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">2. الثيم الداكن (dark-theme.css)</h3>
          <CodeBlock
            code={`/* Dark Mode - إعادة تعريف المتغيرات */
[data-theme="dark"] {
  --bg-primary: var(--color-gray-900);
  --bg-surface: var(--color-gray-800);
  --bg-surface-hover: var(--color-gray-700);
  --text-primary: var(--color-gray-50);
  --text-secondary: var(--color-gray-300);
  --border-color: var(--color-gray-700);
  --accent: var(--color-primary-500);
  --accent-hover: var(--color-primary-600);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">3. المكونات (components.css)</h3>
          <CodeBlock
            code={`/* Base Styles */
body {
  font-family: var(--font-sans);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: background var(--transition-slow), color var(--transition-slow);
}

/* Card Component */
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--accent);
}

/* Button Component */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.btn-outline {
  background: transparent;
  border-color: var(--accent);
  color: var(--accent);
}

.btn-outline:hover {
  background: var(--accent);
  color: white;
}

/* Input Component */
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  color: var(--text-primary);
  font-size: var(--text-base);
  transition: border-color var(--transition-fast);
}

.input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px color-mix(in oklch, var(--accent) 20%, transparent);
}

/* Badge Component */
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
}

.badge-primary {
  background: color-mix(in oklch, var(--accent) 15%, transparent);
  color: var(--accent);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">4. التحكم بالثيم (JavaScript)</h3>
          <CodeBlock
            code={`// theme-toggle.js
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// تحميل الثيم المحفوظ عند بدء التحميل
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">5. التفاعل مع JavaScript عبر المتغيرات</h3>
          <CodeBlock
            code={`// قراءة قيمة متغير CSS
const styles = getComputedStyle(document.documentElement);
const primaryColor = styles.getPropertyValue('--accent').trim();
console.log(primaryColor); // "#2563eb"

// تغيير قيمة متغير من JavaScript
document.documentElement.style.setProperty('--accent', '#10b981');
// الآن كل العناصر التي تستخدم --accent ستتحول للون الأخضر

// تغيير متغير لعنصر محدد
const card = document.querySelector('.card');
card.style.setProperty('--bg-surface', '#fef3c7');

// حذف قيمة متغير (يعود للقيمة الموروثة)
card.style.removeProperty('--bg-surface');`}
            language="javascript"
          />
        </LessonSection>

        {/* ===== Section 7: ماذا يحدث خلف الكواليس ===== */}
        <LessonSection title="ماذا يحدث خلف الكواليس">
          <p className="mb-4">
            عند استخدام المتغيرات CSS، يحدث شيء رائع في المتصفح:
          </p>

          <h3 className="text-xl font-bold mb-3">1. المعالجة الأولية (Initial Processing)</h3>
          <p className="mb-3">
            يقرأ المتصفح CSS ويخزن المتغيرات مع النطاق الخاص بها. المتغيرات <strong>لا تُحسب</strong>
            (computed) في هذه المرحلة - فقط تُعرَّف مع قيمها النصية.
          </p>

          <h3 className="text-xl font-bold mb-3">2. الحل والتوريث (Resolution & Inheritance)</h3>
          <p className="mb-3">
            عند الوصول إلى خاصية تستخدم <code>var()</code>، يبحث المتصفح في:
          </p>
          <ul className="space-y-2 list-disc list-inside mb-3">
            <li>النطاق الحالي للعنصر</li>
            <li>ثم نطاق الأب (Parent) - بشكل متسلسل للأعلى</li>
            <li>ثم <code>:root</code> (النطاق العام)</li>
            <li>إذا لم يجد → يستخدم القيمة الاحتياطية (Fallback)</li>
            <li>إذا لم توجد قيمة احتياطية → تكون الخاصية غير صالحة (Invalid)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3">3. إعادة الحساب التلقائي (Automatic Re-computation)</h3>
          <p className="mb-3">
            عندما يتغير متغير CSS (مثلاً عبر JavaScript)، يعيد المتصفح حساب <strong>كل الخصائص</strong>
            التي تعتمد عليه. هذا أسرع بكثير من تغيير كل خاصية يدوياً لأن المتصفح يعرف بالضبط
            أي الخصائص تحتاج إعادة حساب.
          </p>

          <CodeBlock
            code={`/* وراثة المتغيرات - تسلسل البحث */

:root { --color: blue; }      /* ← الخطوة 3 */
.parent { --color: green; }    /* ← الخطوة 2 */
.child { --color: red; }       /* ← الخطوة 1 */

.child {
  color: var(--color);
  /* المتصفح يبحث:
     1. هل يوجد --color في .child؟ نعم → red
     2. لو لم يوجد → يبحث في .parent → green
     3. لو لم يوجد → يبحث في :root → blue */`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">4. الفرق عن Sass Variables</h3>
          <CodeBlock
            code={`/* Sass Variables - تُحسب وقت البناء (Build Time) */
$primary: #2563eb;
.button { color: $primary; }
/* → الناتج: .button { color: #2563eb; } */
/* لا يمكن تغييرها في Runtime */

/* CSS Variables - تُحسب وقت التشغيل (Runtime) */
:root { --primary: #2563eb; }
.button { color: var(--primary); }
/* → الناتج: .button { color: var(--primary); } */
/* يمكن تغييرها في أي وقت عبر JavaScript */`}
            language="css"
          />

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mt-4">
            <p className="text-yellow-800 dark:text-yellow-300 font-bold mb-1">الأداء</p>
            <p className="text-yellow-700 dark:text-yellow-400">
              المتغيرات CSS مُحسّنة جيداً في المتصفحات الحديثة. إعادة حساب المتغيرات
              أسرع بكثير من إعادة حساب الخصائص يدوياً. لا تخف من استخدامها بكثرة.
            </p>
          </div>
        </LessonSection>

        {/* ===== Section 8: الأخطاء الشائعة ===== */}
        <LessonSection title="الأخطاء الشائعة">
          <p className="mb-4">هذه الأخطاء يقع فيها المبتدئون عند استخدام المتغيرات CSS:</p>

          <h3 className="text-xl font-bold mb-3">1. نسيان البادئة الشرطة المزدوجة (--)</h3>
          <CodeBlock
            code={`/* ❌ خطأ - نسيان -- */
:root {
  primary: #2563eb;       /* هذا خاصية CSS عادية وليس متغير! */
}

/* ✅ صحيح */
:root {
  --primary: #2563eb;
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">2. استخدام اسم خاطئ أو spelling mistake</h3>
          <CodeBlock
            code={`/* ❌ خطأ - اسم غير متطابق */
:root {
  --primary-color: #2563eb;
}

.button {
  background: var(--primary-colour);  /* خطأ إملائي! */
  /* المتصفح لن يجد المتغير → الخاصية تصبح invalid */
}

/* ✅ صحيح - تأكد من التطابق */
.button {
  background: var(--primary-color);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">3. استخدام القيم المباشرة بدون var()</h3>
          <CodeBlock
            code={`/* ❌ خطأ - محاولة استخدام المتغير بدون var() */
:root {
  --primary: #2563eb;
}

.button {
  background: --primary;  /* هذا ليس كود CSS صحيح! */
}

/* ✅ صحيح */
.button {
  background: var(--primary);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">4. استخدام !important مع المتغيرات</h3>
          <CodeBlock
            code={`/* ❌ تجنب هذا - يسبب مشاكل صيانة */
:root {
  --color: red !important;
}

/* ✅ أفضل حل - استخدم النطاق الصحيح بدلاً من !important */
.special-section {
  --color: red;  /* هذا يغلب القيمة الأصلية بسبب التنافسية */
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">5. عدم توفير قيمة احتياطية</h3>
          <CodeBlock
            code={`/* ❌ خطأ - لا قيمة احتياطية */
.element {
  color: var(--undefined-variable);
  /* إذا المتغير غير موجود → تصبح الخاصية invalid */
}

/* ✅ صحيح - قدم قيمة احتياطية دائماً */
.element {
  color: var(--undefined-variable, #374151);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">6. استخدام القيم غير المدعومة مع var()</h3>
          <CodeBlock
            code={`/* ❌ خطأ - var() لا يعمل مع selectors أو property names */
:root {
  --selector: .card;
  --property: color;
}

/* هذا لا يعمل! var() لا يُستخدم لأسماء الخصائص أو الاختيارات */
.element {
  var(--property): var(--selector);  /* ❌ ❌ ❌ */
}

/* ✅ var() يعمل فقط كقيمة (value) */
:root {
  --color: #2563eb;
}
.element {
  color: var(--color);  /* ✅ فقط كقيمة */`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 9: أفضل الممارسات ===== */}
        <LessonSection title="أفضل الممارسات">
          <p className="mb-4">اتبع هذه الممارسات للحصول على أفضل نتيجة مع المتغيرات CSS:</p>

          <h3 className="text-xl font-bold mb-3">1. استخدم نظام اتساق لسماء المتغيرات</h3>
          <CodeBlock
            code={`/* ✅ نظام متسق ومفهوم */
:root {
  /* الألوان الدلالية (Semantic) */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-border-default: #e5e7eb;
  --color-accent: #2563eb;

  /* الألوان القائمة على الحالة (State-based) */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-info: #3b82f6;

  /* الخطوط */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;

  /* المسافات */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;

  /* الزوايا */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">2. فصل التعريف عن الاستخدام</h3>
          <CodeBlock
            code={`/* ✅ ملف tokens.css - تعريف القيم فقط */
/* لا يوجد أي selector أو خاصية هنا - فقط تعريفات المتغيرات */
:root,
[data-theme="light"] {
  --color-primary: #2563eb;
  --space-md: 1rem;
}

[data-theme="dark"] {
  --color-primary: #60a5fa;
  --space-md: 1rem;
}

/* ✅ ملف components.css - استخدام المتغيرات فقط */
.button {
  background: var(--color-primary);
  padding: var(--space-md);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">3. استخدم color-mix() لتوليد التدرجات</h3>
          <CodeBlock
            code={`/* ✅ بدلاً من تعريف 10 درجات يدوياً */
:root {
  --color-primary: #2563eb;

  /* توليد التدرجات تلقائياً */
  --color-primary-50: color-mix(in oklch, var(--color-primary) 10%, white);
  --color-primary-100: color-mix(in oklch, var(--color-primary) 20%, white);
  --color-primary-200: color-mix(in oklch, var(--color-primary) 30%, white);
  --color-primary-300: color-mix(in oklch, var(--color-primary) 40%, white);
  --color-primary-400: color-mix(in oklch, var(--color-primary) 50%, white);
  --color-primary-500: var(--color-primary);
  --color-primary-600: color-mix(in oklch, var(--color-primary) 80%, black);
  --color-primary-700: color-mix(in oklch, var(--color-primary) 70%, black);
  --color-primary-800: color-mix(in oklch, var(--color-primary) 60%, black);
  --color-primary-900: color-mix(in oklch, var(--color-primary) 50%, black);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">4. استخدم light-dark() للتبسيط</h3>
          <CodeBlock
            code={`/* ✅ light-dark() بدلاً من data-theme أو media query */
body {
  color-scheme: light dark;
}

.card {
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#111827, #e5e7eb);
  border: 1px solid light-dark(#e5e7eb, #334151);
}

/* ✅ أو استخدمهما معاً للمرونة الكاملة */
:root,
[data-theme="light"] {
  --bg: light-dark(#ffffff, #1e293b);
  --text: light-dark(#111827, #e5e7eb);
}

[data-theme="dark"] {
  --bg: #1e293b;
  --text: #e5e7eb;
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">5. استخدم data-attributes لتبديل الثيم</h3>
          <CodeBlock
            code={`/* ✅ نمط مثالي لتبديل الثيم */
:root,
[data-theme="light"] {
  color-scheme: light;
  --bg: #ffffff;
  --text: #111827;
  --surface: #f9fafb;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0f172a;
  --text: #e2e8f0;
  --surface: #1e293b;
}

/* الاحترام لتفضيلات النظام */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    color-scheme: dark;
    --bg: #0f172a;
    --text: #e2e8f0;
    --surface: #1e293b;
  }
}

/* ✅ هذا النمط يحترم:
   1. تفضيلات المستخدم في النظام (prefers-color-scheme)
   2. اختيار المستخدم في الموقع (data-theme)
   3. يحفظ اختيار المستخدم عبر localStorage */`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">6. استخدم المكونات المعزولة مع النطاق المحلي</h3>
          <CodeBlock
            code={`/* ✅ كل مكون يُعرّف متغيراته الخاصة */
.dashboard {
  --dashboard-gap: 1.5rem;
}

.dashboard .sidebar {
  --sidebar-width: 280px;
  --sidebar-bg: var(--surface);
  width: var(--sidebar-width);
  background: var(--sidebar-bg);
}

/* ✅ الثيم العالمي + الثيم المحلي */
.card {
  /* القيمة الافتراضية من الثيم العام */
  background: var(--bg-surface);
}

.card[data-variant="highlight"] {
  /* إعادة تعريف للمكون المحدد */
  --bg-surface: #fef3c7;
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 10: ملخص ===== */}
        <LessonSection title="ملخص">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <p>
                <strong>المتغيرات CSS</strong> تبدأ بـ <code>--</code> وتُستدعى بـ <code>var()</code> -
                تعمل مباشرة في المتصفح بدون preprocessing.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <p>
                <strong>النطاق (Scoping)</strong> - المتغيرات تُرث عبر شجرة DOM.
                استخدم <code>:root</code> للثيم العام والمكونات للثيم المحلي.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <p>
                <strong>القيم الاحتياطية</strong> في <code>var(--name, fallback)</code> تمنع
                الأخطاء عند عدم تعريف المتغير.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <p>
                <strong>JavaScript Interaction</strong> - يمكنك قراءة وتعديل المتغيرات عبر
                <code>setProperty()</code> و <code>getComputedStyle()</code>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
              <p>
                <strong>light-dark()</strong> وظيفة حديثة تُبسط تبديل الألوان حسب وضع المظهر
                بدون media queries معقدة.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
              <p>
                <strong>color-mix()</strong> تخلط لونين مباشرة في CSS بدون Sass -
                مثالية لتوليد التدرجات والظلال.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</span>
              <p>
                <strong>نمط الثيم</strong> - استخدم <code>data-theme</code> attribute +
                <code>prefers-color-scheme</code> لتبديل ثيم ذكي يحترم تفضيلات المستخدم.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">8</span>
              <p>
                <strong>المتغيرات أو Sass</strong> - المتغيرات CSS أفضل للمحاليل والثيمات
                الديناميكية. Sass متغيرات أفضل للحسابات المعقدة قبل البناء.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ===== Quiz 1 ===== */}
        <LessonSection title="اختبار سريع">
          <Quiz
            question="ما الفرق الجوهري بين CSS Variables و Sass Variables؟"
            options={[
              "Sass Variables تعمل في المتصفح مباشرة و CSS Variables تحتاج معالج",
              "CSS Variables تُحسب وقت التشغيل (Runtime) ويمكن تغييرها بـ JavaScript، بينما Sass Variables تُحسب وقت البناء (Build Time)",
              "CSS Variables لا تدعم القيم الاحتياطية (Fallback) بينما Sass Variables تدعمها",
              "لا يوجد فرق实质ي بينهما - كلاهما يُستخدم لنفس الغرض",
            ]}
            correctAnswer={1}
            explanation="الفرق الرئيسي هو أن CSS Custom Properties تعمل في Runtime ويمكن تغييرها ديناميكياً عبر JavaScript. Sass Variables تُحول إلى قيم ثابتة (static values) أثناء Build Time ولا يمكن تغييرها في Runtime."
          />

          <div className="mt-8">
            <Quiz
              question="متى تستخدم light-dark() ومتى تستخدم prefers-color-scheme؟"
              options={[
                "light-dark() للألوان الدلالية و prefers-color-scheme للخطوط",
                "light-dark() تُبسط تعيين لونين في مكان واحد، prefers-color-scheme تحتاج media query لكل خاصية",
                "prefers-color-scheme أحدث من light-dark() nên استخدامها دائماً",
                "两者 متطابقتان تماماً ولا فرق بينهما",
              ]}
              correctAnswer={1}
              explanation="light-dark() تأخذ لونين (فاتح وداكن) وتختار تلقائياً بناءً على color-scheme. هذا يُبسط الكود بشكل كبير مقارنة باستخدام media query (prefers-color-scheme: dark) لكل خاصية على حدة."
            />
          </div>
        </LessonSection>

        {/* ===== Challenge ===== */}
        <LessonSection title="تحدي العملية">
          <Challenge
            title="أنشئ نظام ثيم كامل لموقع تعليمي"
            description="أنشئ نظام ثيم يتضمن: 1) تعريف design tokens باستخدام CSS Variables في :root. 2) ثيم داكن عبر data-theme='dark'. 3) استخدام color-mix() لتوليد تدرجات الألوان. 4) تأمين تفاعل مع JavaScript لتغيير الثيم. 5) احترام prefers-color-scheme كقيمة افتراضية. 6) استخدام light-dark() في بعض الأماكن لتقليل الكود."
          />
        </LessonSection>

        {/* ===== CheatSheet ===== */}
        <LessonSection title="ملخص مرجعي سريع">
          <CheatSheet title="ورقة غش - المتغيرات CSS + الثيمات">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">تعريف المتغيرات واستدعاؤها</h4>
                <CodeBlock
                  code={`/* التعريف */
:root {
  --color-primary: #2563eb;
  --spacing-md: 1rem;
}

/* الاستخدام */
.element {
  color: var(--color-primary);
  padding: var(--spacing-md);
}

/* مع قيمة احتياطية */
.element {
  color: var(--color-primary, #3b82f6);
}`}
                  language="css"
                />
              </div>

              <div>
                <h4 className="font-bold mb-2">color-mix() - خلط الألوان</h4>
                <CodeBlock
                  code={`/* الصيغة العامة */
color-mix(in color-space, color1 percentage, color2 percentage)

/* أمثلة عملية */
--primary-100: color-mix(in oklch, var(--primary) 20%, white);
--primary-500: var(--primary);
--primary-900: color-mix(in oklch, var(--primary) 80%, black);

/* خلط لونين */
half-blue: color-mix(in oklch, blue 50%, red);
quarter-blue: color-mix(in oklch, blue 25%, red);`}
                  language="css"
                />
              </div>

              <div>
                <h4 className="font-bold mb-2">light-dark() - ألوان تلقائية</h4>
                <CodeBlock
                  code={`/* يتطلب color-scheme */
body { color-scheme: light dark; }

/* الصيغة */
property: light-dark(light-value, dark-value);

/* أمثلة */
.card {
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#111827, #e5e7eb);
  border: 1px solid light-dark(#e5e7eb, #334151);
}`}
                  language="css"
                />
              </div>

              <div>
                <h4 className="font-bold mb-2">نمط تبديل الثيم (Theme Switching)</h4>
                <CodeBlock
                  code={`/* النمط المثالي */
:root,
[data-theme="light"] {
  color-scheme: light;
  --bg: #ffffff;
  --text: #111827;
  --surface: #f9fafb;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0f172a;
  --text: #e2e8f0;
  --surface: #1e293b;
}

/* الاحترام التلقائي لتفضيلات النظام */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    color-scheme: dark;
    --bg: #0f172a;
    --text: #e2e8f0;
    --surface: #1e293b;
  }
}

/* JavaScript: تبديل الثيم */
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.style.setProperty('--bg', '#0f172a');`}
                  language="css"
                />
              </div>

              <div>
                <h4 className="font-bold mb-2">التفاعل مع JavaScript</h4>
                <CodeBlock
                  code={`// قراءة قيمة متغير
const styles = getComputedStyle(document.documentElement);
const value = styles.getPropertyValue('--my-var').trim();

// تغيير قيمة متغير
document.documentElement.style.setProperty('--my-var', 'newValue');

// حذف متغير (يعود للقيمة الموروثة)
document.documentElement.style.removeProperty('--my-var');

// مراقبة تغييرات الثيم
const observer = new MutationObserver(() => {
  const theme = document.documentElement.getAttribute('data-theme');
  console.log('Theme changed to:', theme);
});
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme']
});`}
                  language="javascript"
                />
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

        {/* ===== Navigation ===== */}
        <LessonNavigation
          prevLesson={lesson.prevLesson}
          prevStage={lesson.prevLessonStage}
          nextLesson={lesson.nextLesson}
          nextStage={lesson.nextLessonStage}
        />
      </div>
    </div>
  );
}
