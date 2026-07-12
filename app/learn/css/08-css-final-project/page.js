import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CSSFinalProject() {
  const lesson = getLessonBySlug("css", "08-css-final-project");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ===== Section 1: مقدمة المشروع ===== */}
        <LessonSection title="مقدمة المشروع">
          <p className="text-lg leading-relaxed mb-4">
            في هذا الدرس الختامي، سنبني معاً صفحة هبوط احترافية (
            <strong>Landing Page</strong>) تجمع <strong>كل ما تعلمناه</strong> في مرحلة CSS الحديث.
            المشروع ليس مجرد تمرين - بل هو تطبيق حقيقي يمكنك استخدامه كأساس لأي مشروع مستقبلي.
          </p>
          <p className="mb-4">
            سنستخدم في هذا المشروع تقنيات CSS الحديثة كلها: المتغيرات، التخطيط الشبكي والمرن، الثيمات الداكنة والفاتحة، الحركات، الاستعلامات المنطقية، الوحدات الم태يئة، والألوان المتقدمة.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-300 font-bold mb-1">ملاحظة</p>
            <p className="text-blue-700 dark:text-blue-400">
              لا نكتب HTML من الصفر هنا - نحن نركّز على CSS فقط. لكن سنبني الهيكل أولاً لفهم كيفية تنسيقه.
            </p>
          </div>
        </LessonSection>

        {/* ===== Section 2: ماذا سنتعلم ===== */}
        <LessonSection title="ماذا سنتعلم">
          <p className="mb-4">من خلال بناء هذا المشروع، ستُ实战 جميع المفاهيم التالية:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <span><strong>التصميم المتجاوب</strong> باستخدام <code>clamp()</code> بدلاً من وسائط الاستعلام الكثيرة</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <span><strong>CSS Grid</strong> مع <code>auto-fit</code> و <code>minmax</code> لشبكات مرنة</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <span><strong>Flexbox</strong> لشريط التنقل والتوزيع المرن</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
              <span><strong>CSS Variables + light-dark()</strong> لنظام ثيمات متكامل</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
              <span><strong>الحركات والتأثيرات</strong> باستخدام Transitions و Keyframes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">6</span>
              <span><strong>Container Queries</strong> لجعل البطاقات تتكيف حسب حاويتها</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">7</span>
              <span><strong>الخصائص المنطقية</strong> (<code>margin-inline</code>، <code>padding-block</code>) لدعم RTL</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">8</span>
              <span><strong>ألوان حديثة</strong> باستخدام <code>oklch()</code> و <code>color-mix()</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">9</span>
              <span><strong>CSS Nesting</strong> لتنظيم الكود بشكل طبيعي</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">10</span>
              <span><strong>@layer</strong> لتنظيم الأولويات وفصل القواعد</span>
            </li>
          </ul>
        </LessonSection>

        {/* ===== Section 3: هيكل المشروع ===== */}
        <LessonSection title="هيكل المشروع">
          <p className="mb-4">هيكل ملفات CSS في المشروع يتبع نمط الطبقات المنظمة:</p>
          <CodeBlock
            code={`project/
├── index.html
├── css/
│   ├── layers.css        ← تعريف الطبقات بترتيبها
│   ├── base.css          ← إعادة التعيين والاستيرادات
│   ├── variables.css     ← المتغيرات والألوان
│   ├── components.css    ← المكونات (بطاقات، أزرار، شريط تنقل)
│   ├── layout.css        ← التخطيط العام (Grid + Flexbox)
│   ├── utilities.css     ← فئات مساعدة
│   └── animations.css    ← الحركات والتأثيرات
└── js/
    └── theme-toggle.js   ← التبديل بين الثيمات`}
            language="text"
          />
          <p className="mb-4">
            نستخدم <code>@layer</code> لتنظيم الأولويات:
            كل طبقة معرّفة مسبقاً، والطبقة الأعلى في الترتيب تفوز عند التعارض.
          </p>
        </LessonSection>

        {/* ===== Section 4: الخطوة الأولى: الأساسيات ===== */}
        <LessonSection title="الخطوة الأولى: الأساسيات">
          <p className="mb-4">
            نبدأ بإعداد المتغيرات وأعادة التعيين الأساسية. هذه هي基石 لكل مشروع CSS حديث.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">ملف الطبقات (layers.css)</h3>
          <CodeBlock
            code={`@layer base, components, layout, utilities, animations;`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">ملف المتغيرات (variables.css)</h3>
          <CodeBlock
            code={`@layer base {
  :root {
    color-scheme: light dark;

    /* ألوان الأساسي - oklch لتناسق إدراكي */
    --color-primary: oklch(0.65 0.19 265);
    --color-primary-hover: oklch(0.55 0.19 265);
    --color-primary-light: oklch(0.92 0.05 265);
    --color-secondary: oklch(0.65 0.19 145);
    --color-accent: oklch(0.75 0.15 55);

    /* ألوان الخلفية - تتكيف مع الثيم */
    --bg-page: light-dark(#f8fafc, #0f172a);
    --bg-surface: light-dark(#ffffff, #1e293b);
    --bg-surface-hover: light-dark(#f1f5f9, #334155);
    --bg-muted: light-dark(#f1f5f9, #1e293b);

    /* ألوان النص */
    --text-primary: light-dark(#0f172a, #f1f5f9);
    --text-secondary: light-dark(#475569, #94a3b8);
    --text-muted: light-dark(#94a3b8, #64748b);

    /* ألوان الحدود */
    --border-default: light-dark(#e2e8f0, #334155);
    --border-hover: light-dark(#cbd5e1, #475569);

    /* الظلال */
    --shadow-sm: 0 1px 2px oklch(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px oklch(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px oklch(0 0 0 / 0.1);
    --shadow-glow: 0 0 20px color-mix(in oklch, var(--color-primary) 25%, transparent);

    /* الخطوط */
    --font-family: 'Inter', system-ui, -apple-system, sans-serif;
    --font-size-xs: clamp(0.75rem, 0.7rem + 0.15vw, 0.8rem);
    --font-size-sm: clamp(0.8rem, 0.75rem + 0.2vw, 0.875rem);
    --font-size-base: clamp(0.9rem, 0.85rem + 0.25vw, 1rem);
    --font-size-lg: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
    --font-size-xl: clamp(1.25rem, 1rem + 1vw, 1.75rem);
    --font-size-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem);
    --font-size-hero: clamp(2rem, 1.5rem + 2.5vw, 4rem);

    /* التباعد */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;

    /* الزوايا */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-full: 9999px;

    /* الانتقالات */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);

    /* الأبعاد */
    --container-max: min(100% - 2rem, 72rem);
    --nav-height: 4rem;
  }
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">إعادة التعيين (base.css)</h3>
          <CodeBlock
            code={`@layer base {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--nav-height);
  }

  body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-page);
    min-height: 100dvh;
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-primary-hover);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
    color: var(--text-primary);
  }

  ::selection {
    background: color-mix(in oklch, var(--color-primary) 30%, transparent);
  }
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 5: الخطوة الثانية: التخطيط ===== */}
        <LessonSection title="الخطوة الثانية: التخطيط">
          <p className="mb-4">
            الآن نبني التخطيط العام للموقع: شريط التنقل، قسم البطل (
            <strong>Hero</strong>)، البطاقات، والتذييل.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">شريط التنقل (Navbar) - Flexbox</h3>
          <CodeBlock
            code={`/* components.css */
@layer components {
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    height: var(--nav-height);
    padding-inline: clamp(1rem, 3vw, 2rem);
    background: color-mix(in oklch, var(--bg-surface) 85%, transparent);
    backdrop-filter: blur(12px) saturate(1.5);
    border-block-end: 1px solid var(--border-default);
  }

  .navbar__logo {
    font-size: var(--font-size-xl);
    font-weight: 800;
    color: var(--color-primary);
  }

  .navbar__links {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    list-style: none;
  }

  .navbar__link {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    font-weight: 500;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);

    &:hover,
    &.active {
      color: var(--color-primary);
      background: var(--color-primary-light);
    }
  }

  .navbar__actions {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">قسم البطل (Hero Section) - clamp()</h3>
          <CodeBlock
            code={`@layer components {
  .hero {
    display: grid;
    place-items: center;
    min-height: min(70vh, 500px);
    padding-block: var(--space-3xl);
    padding-inline: var(--space-xl);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero__bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 30% 20%,
        color-mix(in oklch, var(--color-primary) 15%, transparent),
        transparent 60%
      ),
      radial-gradient(
        ellipse at 70% 80%,
        color-mix(in oklch, var(--color-secondary) 10%, transparent),
        transparent 60%
      );
    z-index: -1;
  }

  .hero__title {
    font-size: var(--font-size-hero);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    max-width: 20ch;
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--color-primary) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .hero__subtitle {
    font-size: var(--font-size-xl);
    color: var(--text-secondary);
    max-width: 45ch;
    margin-block-start: var(--space-lg);
  }

  .hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
    margin-block-start: var(--space-2xl);
    justify-content: center;
  }
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">شبكة البطاقات - CSS Grid</h3>
          <CodeBlock
            code={`@layer layout {
  .features {
    padding-block: var(--space-3xl);
    padding-inline: var(--space-xl);
  }

  .features__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: var(--space-xl);
    max-width: var(--container-max);
    margin-inline: auto;
  }
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">البطاقة مع Container Queries</h3>
          <CodeBlock
            code={`@layer components {
  .feature-card {
    container-type: inline-size;
    container-name: feature-card;
    background: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    transition: all var(--transition-base);

    &:hover {
      border-color: var(--border-hover);
      box-shadow: var(--shadow-lg), var(--shadow-glow);
      transform: translateY(-4px);
    }
  }

  .feature-card__icon {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: var(--radius-lg);
    background: var(--color-primary-light);
    color: var(--color-primary);
    font-size: 1.5rem;
    margin-block-end: var(--space-md);
  }

  .feature-card__title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-block-end: var(--space-sm);
  }

  .feature-card__description {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    line-height: 1.7;
  }

  /* Container Query: تكيّف البطاقة حسب حجم الحاوية */
  @container feature-card (min-width: 400px) {
    .feature-card {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      gap: var(--space-sm) var(--space-lg);
      align-items: start;
    }

    .feature-card__icon {
      grid-row: 1 / -1;
      width: 4rem;
      height: 4rem;
      font-size: 2rem;
    }

    .feature-card__title {
      margin-block-end: 0;
    }
  }
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">التذييل (Footer)</h3>
          <CodeBlock
            code={`@layer layout {
  .footer {
    display: grid;
    place-items: center;
    gap: var(--space-lg);
    padding-block: var(--space-3xl) var(--space-xl);
    padding-inline: var(--space-xl);
    border-block-start: 1px solid var(--border-default);
    background: var(--bg-muted);
    text-align: center;
  }

  .footer__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-md) var(--space-xl);
    list-style: none;
  }

  .footer__copy {
    font-size: var(--font-size-sm);
    color: var(--text-muted);
  }
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 6: الخطوة الثالثة: الثيمات ===== */}
        <LessonSection title="الخطوة الثالثة: الثيمات">
          <p className="mb-4">
            نستخدم <code>CSS Variables</code> مع <code>light-dark()</code> لإنشاء نظام ثيمات ذكي بدون أي JavaScript معقد.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">كيف يعمل light-dark()؟</h3>
          <CodeBlock
            code={`/* light-dark() تأخذ قيمتين:
   الأولى للوضع الفاتح (light)
   والثانية للوضع الداكن (dark)

   يتطلب color-scheme على :root */

:root {
  color-scheme: light dark;
}

.card {
  /* إذا كان المظهر فاتحاً → #ffffff
     إذا كان داكناً → #1e293b */
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#0f172a, #f1f5f9);
}

/* لا حاجة لكتابة:
   @media (prefers-color-scheme: dark) { ... } */
`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">زر التبديل مع JavaScript</h3>
          <CodeBlock
            code={`/* JavaScript: theme-toggle.js */
const STORAGE_KEY = "theme";
const html = document.documentElement;

function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme(theme) {
  html.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

// تطبيق الثيم المحفوظ فوراً
setTheme(getPreferredTheme());`}
            language="javascript"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">تخصيص الثيمات باستخدام CSS Variables</h3>
          <CodeBlock
            code={`/* يمكنك توسيع الثيمات بألوان إضافية */
:root {
  --theme-transition: color-scheme 0.3s ease;
}

/* تأثيرات مرئية عند تبديل الثيم */
*,
*::before,
*::after {
  transition: background-color var(--transition-base),
              color var(--transition-fast),
              border-color var(--transition-fast);
}

/* سمة مخصصة حسب المستخدم */
[data-theme="ocean"] {
  --color-primary: oklch(0.6 0.15 230);
  --bg-page: light-dark(#f0f9ff, #0c1929);
}

[data-theme="forest"] {
  --color-primary: oklch(0.6 0.18 155);
  --bg-page: light-dark(#f0fdf4, #0a1f0a);
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 7: الخطوة الرابعة: الحركات ===== */}
        <LessonSection title="الخطوة الرابعة: الحركات">
          <p className="mb-4">
            الحركات تُضفي الحياة على التصميم. نستخدم <code>Transitions</code> للتأثيرات البسيطة و <code>Keyframes</code> للحركات المعقدة.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">التأثيرات البسيطة مع Transitions</h3>
          <CodeBlock
            code={`@layer animations {
  /* زر مع تأثير hover احترافي */
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-xl);
    font-size: var(--font-size-base);
    font-weight: 600;
    border: none;
    border-radius: var(--radius-lg);
    cursor: pointer;
    overflow: hidden;
    transition: all var(--transition-base);
  }

  .btn--primary {
    background: var(--color-primary);
    color: light-dark(#ffffff, #ffffff);
    box-shadow: var(--shadow-md);
  }

  .btn--primary:hover {
    background: var(--color-primary-hover);
    box-shadow: var(--shadow-lg), var(--shadow-glow);
    transform: translateY(-2px);
  }

  .btn--primary:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }

  .btn--outline {
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }

  .btn--outline:hover {
    background: var(--color-primary);
    color: light-dark(#ffffff, #ffffff);
    transform: translateY(-2px);
  }
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">حركات متحركة مع @keyframes</h3>
          <CodeBlock
            code={`@layer animations {
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 0 0 color-mix(in oklch, var(--color-primary) 40%, transparent);
    }
    50% {
      box-shadow: 0 0 20px 5px color-mix(in oklch, var(--color-primary) 20%, transparent);
    }
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in-right {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .hero__title {
    animation: fade-in-up 0.8s ease-out both;
  }

  .hero__subtitle {
    animation: fade-in-up 0.8s 0.2s ease-out both;
  }

  .hero__actions {
    animation: fade-in-up 0.8s 0.4s ease-out both;
  }

  .feature-card {
    animation: fade-in-up 0.6s ease-out both;
  }

  .feature-card:nth-child(1) { animation-delay: 0.1s; }
  .feature-card:nth-child(2) { animation-delay: 0.2s; }
  .feature-card:nth-child(3) { animation-delay: 0.3s; }

  /* تأثير float على أيقونة البطاقة */
  .feature-card:hover .feature-card__icon {
    animation: float 2s ease-in-out infinite;
  }
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">الحركات عند التمرير (Scroll Animations)</h3>
          <CodeBlock
            code={`@layer animations {
  /* استخدام CSS scroll-driven animations */
  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(40px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .feature-card {
    animation: reveal linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 100%;
  }

  /* كخيار بديل: استخدام IntersectionObserver */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 8: التحديات الإضافية ===== */}
        <LessonSection title="التحديات الإضافية">
          <p className="mb-4">
            بعد بناء المشروع الأساسي، جرّب هذه التحديات لتطوير مهاراتك أكثر:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
              <h4 className="text-amber-800 dark:text-amber-300 font-bold mb-2">تحدي 1: قائمة الملاحة المتجاوبة</h4>
              <p className="text-amber-700 dark:text-amber-400 mb-2">
                حوّل شريط التنقل إلى قائمة جانبية على الشاشات الصغيرة مع تأثير حركي عند الفتح والإغلاق.
              </p>
              <CodeBlock
                code={`/* أفكار للتنفيذ */
@media (width < 640px) {
  .navbar__links {
    position: fixed;
    inset-inline-start: 0;
    inset-block: 0;
    flex-direction: column;
    background: var(--bg-surface);
    padding-top: var(--nav-height);
    transform: translateX(-100%);
    transition: transform var(--transition-slow);
    z-index: 99;

    &.open {
      transform: translateX(0);
    }
  }
}`}
                language="css"
              />
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
              <h4 className="text-amber-800 dark:text-amber-300 font-bold mb-2">تحدي 2: وضع التركيز (Focus Mode)</h4>
              <p className="text-amber-700 dark:text-amber-400 mb-2">
                أضف تأثيراً بصرياً عند تمرير الماوس فوق البطاقة: تعتيم بقية البطاقات وتكبير البطاقة المحددة.
              </p>
              <CodeBlock
                code={`/* أفكار للتنفيذ */
.features__grid:hover .feature-card {
  opacity: 0.5;
  filter: blur(1px);
}

.features__grid .feature-card:hover {
  opacity: 1;
  filter: blur(0);
  transform: scale(1.03);
  z-index: 1;
}`}
                language="css"
              />
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
              <h4 className="text-amber-800 dark:text-amber-300 font-bold mb-2">تحدي 3: تأثير الألوان الديناميكية</h4>
              <p className="text-amber-700 dark:text-amber-400 mb-2">
                استخدم <code>color-mix()</code> لإنشاء تدرجات ديناميكية تتغير حسب موقع الماوس باستخدام متغيرات CSS محدثة بـ JavaScript.
              </p>
              <CodeBlock
                code={`/* أفكار للتنفيذ */
:root {
  --mouse-x: 50%;
  --mouse-y: 50%;
}

.hero__bg {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    color-mix(in oklch, var(--color-primary) 12%, transparent),
    transparent 50%
  );
}`}
                language="css"
              />
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
              <h4 className="text-amber-800 dark:text-amber-300 font-bold mb-2">تحدي 4: صفحة مخصصة للطباعة</h4>
              <p className="text-amber-700 dark:text-amber-400">
                أضف <code>@media print</code> لإخفاء شريط التنقل والتذييل، وتحويل الألوان إلى أبيض وأسود، وضبط هوامش الطباعة.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ===== Section 9: ملخص ونصائح ===== */}
        <LessonSection title="ملخص ونصائح">
          <p className="mb-4">
            مبروك! لقد أكملت بناء مشروع CSS متكامل. إليك أهم النقاط التي يجب أن تحفظها:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <p>ابدأ دائماً بالمتغيرات (<code>CSS Variables</code>) - فهي أساس كل شيء.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <p>استخدم <code>@layer</code> لتنظيم الكود وتجنب مشاكل التنافسية.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <p><code>clamp()</code> يُغني عن وسائط الاستعلام الكثيرة - استخدمه للخطوط والأحجام.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <p><code>light-dark()</code> يجعل دعم الثيمات سهلاً للغاية.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
              <p>الخصائص المنطقية (<code>inline</code>/<code>block</code>) تجعل الموقع جاهزاً للعربية والإنجليزية.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
              <p><code>Container Queries</code> تجعل المكونات مرنة حقاً independently من الصفحة.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</span>
              <p>CSS Nesting يجعل الكود أقرب للقراءة الطبيعية وأسهل في الصيانة.</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
            <p className="text-green-800 dark:text-green-300 font-bold mb-1">نصيحة ذهبية</p>
            <p className="text-green-700 dark:text-green-400">
              لا تحاول حفظ كل شيء! احفظ المبادئ الأساسية واعرف أين تجد الباقي. CSS هو لغة تتعلم بالممارسة لا بالحفظ.
              أنشئ مشاريع حقيقية وستجد نفسك تستخدم هذه التقنيات بشكل طبيعي.
            </p>
          </div>
        </LessonSection>

        {/* ===== Quiz ===== */}
        <LessonSection title="اختبار سريع">
          <Quiz
            question="ما الفرق بين CSS Grid و Flexbox في هذا المشروع؟"
            options={[
              "لا يوجد فرق، كلاهما متساويان",
              "Grid للصفحات الثنائية البعد، و Flexbox للعناصر في سطر واحد",
              "Grid أسرع في الأداء من Flexbox دائماً",
              "Flexbox لا يدعم التصميم المتجاوب"
            ]}
            correctAnswer={1}
            explanation="CSS Grid صُمم للتخطيط ثنائي البعد (صفوف وأعمدة معاً)، بينما Flexbox صُمم للتخطيط أحادي البعد (صف أو عمود واحد). في المشروع نستخدم Grid لشبكة البطاقات والصفحة الكاملة، و Flexbox لشريط التنقل والعنصر داخل البطاقة."
          />

          <div className="mt-8">
            <Quiz
              question="لماذا نستخدم oklch() بدلاً من hex أو rgb؟"
              options={[
                "oklch أقدم وأكثر دعماً في المتصفحات",
                "oklch مُحسّن للإدراك البشري ويُنتج ألواناً أكثر توازناً",
                "hex و rgb لا يدعمان الشفافية",
                "oklch أصغر في حجم الملف"
              ]}
              correctAnswer={1}
              explanation="oklch (OK Lightness-Chroma-Hue) مبني على نموذج اللون المُحسّن لإدراك البشري. يُنتج ألواناً أكثر توازناً وثباتاً عبر الأجهزة المختلفة مقارنة بـ hex أو rgb. كما أنه يدعم alpha channel بشكل مباشر."
            />
          </div>

          <div className="mt-8">
            <Quiz
              question="ما فائدة @layer في هذا المشروع؟"
              options={[
                "لإضافة تعليقات توضيحية في CSS",
                "لتحديد ترتيب أولويات الطبقات وتجنب مشاكل التنافسية",
                "لتحسين سرعة تحميل الملفات",
                "لإنشاء تأثيرات ثلاثية الأبعاد"
              ]}
              correctAnswer={1}
              explanation="@layer يُعرّف ترتيب الأولويات بين مجموعات القواعد. الطبقات المُعرّفة لاحقاً تفوز عند التعارض. هذا يُبسط إدارة التنافسية (Specificity) ويمنع الحاجة لاستخدام !important."
            />
          </div>
        </LessonSection>

        {/* ===== Challenge ===== */}
        <LessonSection title="تحدي عملي">
          <Challenge
            title="أضف قسم شهادات العملاء"
            description="أنشئ قسماً جديداً بعنوان 'ماذا يقول عملاؤنا' يحتوي على 3 بطاقات شهادة متحركة. كل بطاقة يجب أن تتضمن: صورة المستخدم (باستخدام placeholder)، الاسم، المنصب، والشهادة. استخدم CSS Grid مع auto-fit/minmax، وأضف حركات ظهور عند التمرير، واجعل البطاقات تتكيف مع Container Queries."
          />
        </LessonSection>

        {/* ===== CheatSheet ===== */}
        <LessonSection title="ملخص مرجعي شامل">
          <CheatSheet
            title="مرجع CSS الحديث الشامل - جميع الدروس"
          >
            <h3>الدرس 1: أساسيات CSS</h3>
            <CodeBlock language="text" code={`| المفهوم | الصيغة | الاستخدام |
|---------|--------|-----------|
| box-sizing | border-box | حساب padding + border داخل العرض |
| rem | 1rem = 16px | وحدة نسبية للجذر، مثالية للخطوط |
| em | 1.5em | وحدة نسبية للأب، تتراكم في التداخل |
| vw / vh | 100vw | نسبة من عرض/ارتفاع نافذة المتصفح |
| dvh | 100dvh | ارتفاع ديناميكي (يحل مشاكل الموبايل) |
| clamp() | clamp(min, preferred, max) | حد أدنى + نسبي + حد أقصى |
| oklch() | oklch(L C H) | لون محسّن للإدراك البشري |
| color-mix() | color-mix(in oklch, c1, c2) | خلط لونين بنسبة |
| light-dark() | light-dark(#fff, #111) | لون تلقائي حسب الثيم |
| Specificity | element < class < id < inline < !important | ترتيب الأسبقية |`} />

            <h3>الدرس 2: التحكم بالنص</h3>
            <CodeBlock language="text" code={`| الخاصية | القيم | الاستخدام |
|---------|-------|-----------|
| font-size | clamp(1rem, 2vw, 2rem) | حجم الخط المرن |
| line-height | 1.6 | ارتفاع السطر (بدون وحدة) |
| letter-spacing | -0.02em | تباعد الحروف |
| text-wrap | balance / pretty | توزيع النص بشكل متوازن |
| font-variation-settings | "wght" 700 | تحكم بالخطوط المتغيرة |
| @font-face | src: url() | تحميل خطوط مخصصة |
| text-shadow | 0 2px 4px rgba() | ظل النص |
| -webkit-background-clip | text | خلفية متصلة بالنص |`} />

            <h3>الدرس 3: Flexbox</h3>
            <CodeBlock language="text" code={`| الخاصية | القيم | الوظيفة |
|---------|-------|---------|
| display: flex | - | تفعيل Flexbox |
| flex-direction | row / column | اتجاه المحور الرئيسي |
| justify-content | space-between / center / gap | توزيع على المحور الرئيسي |
| align-items | center / stretch | محاذاة على المحور المتقاطع |
| flex-wrap | wrap | تفاف العناصر |
| gap | 1rem | مسافة بين العناصر |
| flex | 1 / 1 1 auto | اختصار grow/shrink/basis |
| align-self | center | تجاوز محاذاة العنصر |
| order | 0 | تغيير الترتيب |`} />

            <h3>الدرس 4: CSS Grid</h3>
            <CodeBlock language="text" code={`| الخاصية | القيم | الوظيفة |
|---------|-------|---------|
| display: grid | - | تفعيل Grid |
| grid-template-columns | repeat(3, 1fr) | تعريف الأعمدة |
| auto-fit | repeat(auto-fit, minmax(250px, 1fr)) | عدد مرن من الأعمدة |
| minmax() | minmax(250px, 1fr) | حد أدنى وأقصى للعمود |
| grid-template-areas | "header header" "side main" | تخطيط بالاسم |
| place-items | center | توسيط أفقي + رأسي (سطر واحد) |
| place-content | center | توسيط المحتوى |
| grid-column | span 2 | تمديد عمودين |
| grid-row | span 2 | تمديد صفوفين |`} />

            <h3>الدرس 5: الوسائط المتعددة والاستعلامات</h3>
            <CodeBlock language="text" code={`| الوسيلة | الصيغة | الاستخدام |
|--------|--------|-----------|
| min-width | @media (width >= 768px) | شاشات كبيرة+ |
| max-width | @media (width < 640px) | شاشات صغيرة |
| prefers-color-scheme | dark / light | تفضيل الثيم |
| prefers-reduced-motion | reduce | تقليل الحركة |
| hover: hover | @media (hover: hover) | يدعم التمرير |
| Container Queries | @container (min-width: 400px) | تكيّف حسب الحاوية |
| container-type | inline-size | تفعيل الاستعلام |
| clamp() | clamp(1rem, 2vw, 2rem) | بديل لوسائط الاستعلام |
| Logical Properties | margin-inline / padding-block | دعم RTL |`} />

            <h3>الدرس 6: الألوان والثيمات</h3>
            <CodeBlock language="text" code={`| المفهوم | الصيغة | الاستخدام |
|---------|--------|-----------|
| CSS Variables | --name: value; | تعريف متغير |
| var() | var(--name, fallback) | استخدام متغير |
| oklch() | oklch(0.65 0.19 145) | لون حديث |
| color-mix() | color-mix(in oklch, blue 50%, red) | خلط |
| light-dark() | light-dark(#fff, #111) | ألوان الثيمات |
| color-scheme | light dark | تفعيل الوضعين |
| @media prefers-color-scheme | dark | استعلام الثيم القديم |
| @layer | @layer base, components; | تنظيم الأولويات |`} />

            <h3>الدرس 7: الحركات والتأثيرات</h3>
            <CodeBlock language="text" code={`| المفهوم | الصيغة | الاستخدام |
|---------|--------|-----------|
| transition | all 0.3s ease | انتقال سلس |
| cubic-bezier | cubic-bezier(0.4, 0, 0.2, 1) | منحنى حركة مخصص |
| @keyframes | @keyframes name { from {} to {} } | حركات مخصصة |
| animation | fade-in 0.5s ease both | تطبيق حركة |
| transform | translateY(-4px) / scale(1.05) | تحويل بصري |
| animation-timeline: view() | scroll-driven | حركة عند التمرير |
| opacity | 0 → 1 | ظهور تدريجي |
| will-change | transform | تحسين أداء الحركة |
| prefers-reduced-motion | reduce | احترام تقليل الحركة |`} />

            <h3>الدرس 8: المشروع التطبيقي</h3>
            <CodeBlock language="text" code={`| التقنية | الاستخدام في المشروع |
|---------|----------------------|
| CSS Nesting | تنظيم الكود بشكل طبيعي داخل القواعد |
| @layer | فصل base / components / layout / utilities |
| clamp() | أحجام الخطوط والأحجام المتجاوبة |
| CSS Grid + auto-fit/minmax | شبكة البطاقات المرنة |
| Flexbox | شريط التنقل وتوزيع العناصر |
| Container Queries | البطاقات تتكيف حسب حاويتها |
| Logical Properties | margin-inline / padding-block لدعم RTL |
| light-dark() + Variables | نظام ثيمات متكامل |
| oklch + color-mix | ألوان حديثة ومتدرجة |
| Transitions + Keyframes | حركات سلسة وتأثيرات احترافية |
| backdrop-filter | تأثير ضبابية على شريط التنقل |
| @property (اختياري) | خصائص CSS مخصصة للحركات |`} />
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
