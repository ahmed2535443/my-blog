import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CSSFundamentals() {
  const lesson = getLessonBySlug("css", "01-css-fundamentals");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {/* ===== Section 1: ما هو CSS ===== */}
        <LessonSection title="ما هو CSS">
          <p className="text-lg leading-relaxed mb-4">
            CSS اختصار لـ <strong>Cascading Style Sheets</strong> وتعني أوراق الأنماط المتتالية.
            هو اللغة المستخدمة لتنسيق المظهر والتصميم للصفحات_HTML.
          </p>
          <p className="mb-4">
            بينما يُعنى HTML بالهيكل والمحتوى، يُعنى CSS بالشكل والألوان والخطوط والتخطيط.
          </p>
          <CodeBlock
            code={`<!-- HTML: الهيكل -->
<div class="card">
  <h2>عنوان</h2>
  <p>وصف</p>
</div>`}
            language="html"
          />
          <CodeBlock
            code={`/* CSS: المظهر */
.card {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h2 {
  color: #1a1a2e;
  font-size: 1.5rem;
}

.card p {
  color: #6b7280;
  line-height: 1.6;
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 2: لماذا نستخدمه ===== */}
        <LessonSection title="لماذا نستخدمه">
          <p className="mb-4">بدون CSS، كل صفحة ويب ستبدو واحدة ومملة. CSS يحل هذه المشاكل:</p>
          <ul className="space-y-2 list-disc list-inside mb-4">
            <li><strong>الفصل بين المحتوى والتصميم</strong> - تعديل المظهر بدون لمس المحتوى</li>
            <li><strong>التوزيع الموحد</strong> - تنسيق متسق عبر كل الصفحات</li>
            <li><strong>التخصيص</strong> - تصميمات متجاوبة تعمل على جميع الأجهزة</li>
            <li><strong>التبريد</strong> - تحديث ملف واحد يُحدّث كل الصفحات</li>
            <li><strong>الأداء</strong> - ملفات CSS قابلة للتخزين المؤقت من المتصفح</li>
          </ul>
          <CodeBlock
            code={`/* ملف CSS واحد يُغيّر مظهر كل الموقع */
/* بدلاً من تعديل كل صفحة على حدة */
:root {
  --primary: #2563eb;
  --font-size: 1rem;
}

body {
  font-size: var(--font-size);
  color: #1f2937;
}

a {
  color: var(--primary);
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 3: المشكلة التي يحلها ===== */}
        <LessonSection title="المشكلة التي يحلها">
          <p className="mb-4">تخيل أنك تريد تغيير لون كل العناوين في موقعك المكون من 100 صفحة:</p>
          <CodeBlock
            code={`<!-- بدون CSS: عليك تعديل كل صفحة يدوياً -->
<h1 style="color: blue;">عنوان الصفحة 1</h1>
<!-- صفحة 2 -->
<h1 style="color: blue;">عنوان الصفحة 2</h1>
<!-- صفحة 3 -->
<h1 style="color: blue;">عنوان الصفحة 3</h1>
<!-- ... 97 صفحة أخرى ... -->`}
            language="html"
          />
          <CodeBlock
            code={`/* مع CSS: ملف واحد يُغيّر كل شيء */
h1 {
  color: blue;
  /* غيّر هذا السطر مرة واحدة فقط! */
}`}
            language="css"
          />
          <p className="mt-4 mb-4">
            هذا مثال بسيط. في الواقع، CSS يحل مشاكل أكبر مثل التخطيط المتجاوب،
            والحركات، والتصميم المتعدد الأعمدة، والتحكم بالطباعة، والمزيد.
          </p>
        </LessonSection>

        {/* ===== Section 4: شرح بسيط ===== */}
        <LessonSection title="شرح بسيط">
          <p className="mb-4">CSS يعمل بمبدأ بسيط: <strong>الاختيار + الخاصية + القيمة</strong></p>
          <CodeBlock
            code={`/*_SELECTOR { PROPERTY: VALUE; } */

p {
  color: red;
}
/* Selector: p (كل الفقرات)
   Property: color
   Value: red */`}
            language="css"
          />

          <h3 className="text-xl font-bold mt-6 mb-3">طرق ربط CSS بـ HTML</h3>
          <p className="mb-3">هناك ثلاث طرق لربط CSS بصفحة HTML:</p>

          <h4 className="font-bold mb-2">1. Inline (مضمّن) - الأسوأ</h4>
          <CodeBlock
            code={`<p style="color: red; font-size: 16px;">نص أحمر</p>`}
            language="html"
          />

          <h4 className="font-bold mb-2">2. Internal (داخلي) - جيد للصفحات المنفردة</h4>
          <CodeBlock
            code={`<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: red;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <p>نص أحمر</p>
</body>
</html>`}
            language="html"
          />

          <h4 className="font-bold mb-2">3. External (خارجي) - الأفضل دائماً</h4>
          <CodeBlock
            code={`<!-- في ملف HTML -->
<link rel="stylesheet" href="styles.css">

<!-- في ملف styles.css -->
p {
  color: red;
  font-size: 16px;
}`}
            language="html"
          />

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mt-4">
            <p className="text-yellow-800 dark:text-yellow-300 font-bold mb-1">القاعدة الذهبية</p>
            <p className="text-yellow-700 dark:text-yellow-400">
              استخدم دائماً الملف الخارجي. فقط استخدم Internal في الحجوزات أو الصفحات المنفردة
              Very simple and experimental.
            </p>
          </div>
        </LessonSection>

        {/* ===== Section 5: مثال بسيط ===== */}
        <LessonSection title="مثال بسيط">
          <p className="mb-4">لنرَ كيف يُحوّل CSS صفحة HTML بسيطة إلى تصميم جميل:</p>
          <CodeBlock
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="hero">
    <h1>مرحباً بالعالم</h1>
    <p>هذه أول صفحة ويب لي</p>
  </header>
  <main>
    <article class="card">
      <h2>مقال عن البرمجة</h2>
      <p>البرمجة هي فن حل المشاكل باستخدام لغات الكمبيوتر.</p>
      <button>اقرأ المزيد</button>
    </article>
  </main>
</body>
</html>`}
            language="html"
          />
          <CodeBlock
            code={`/* style.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #1f2937;
  background-color: #f3f4f6;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #667eea;
}

.card p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.card button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.card button:hover {
  background: #5a6fd6;
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 6: مثال عملي ===== */}
        <LessonSection title="مثال عملي">
          <p className="mb-4">تطبيق شامل يجمع كل الأساسيات:</p>
          <CodeBlock
            code={`/* variables.css - المتغيرات */
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-secondary: #7c3aed;
  --color-success: #10b981;
  --color-danger: #ef4444;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-600: #4b5563;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;

  /* Font Sizes */
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}`}
            language="css"
          />

          <CodeBlock
            code={`/* base.css - إعادة التعيين والاستيراد */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%; /* 1rem = 16px */
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-gray-800);
  background-color: var(--color-gray-50);
  min-height: 100dvh;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}`}
            language="css"
          />

          <CodeBlock
            code={`/* components.css - المكونات */
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
  padding-block: var(--space-2xl);
}

/* Card Component */
.card {
  background: white;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Button Component */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn--primary {
  background-color: var(--color-primary);
  color: white;
}

.btn--primary:hover {
  background-color: var(--color-primary-hover);
  text-decoration: none;
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn--secondary:hover {
  background-color: var(--color-primary);
  color: white;
}

/* Grid Layout */
.grid {
  display: grid;
  gap: var(--space-lg);
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`}
            language="css"
          />

          <CodeBlock
            code={`/* responsive.css - التصميم المتجاوب */
@media (max-width: 768px) {
  :root {
    --text-3xl: 1.5rem;
    --text-2xl: 1.25rem;
    --space-2xl: 2rem;
  }

  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 7: ماذا يحدث خلف الكواليس ===== */}
        <LessonSection title="ماذا يحدث خلف الكواليس">
          <p className="mb-4">
            عندما يحمّل المتصفح صفحة ويب، يمر CSS بعدة مراحل قبل عرض النتيجة النهائية:
          </p>

          <h3 className="text-xl font-bold mb-3">1. تحميل وتحليل CSS (Parsing)</h3>
          <p className="mb-3">
            يقرأ المتصفح ملف CSS ويحلله إلى شجرة من العناصر تسمى <strong>CSSOM</strong>
            (CSS Object Model). هذه الشجرة تحتوي على كل القواعد والخصائص مُنظّمة.
          </p>

          <h3 className="text-xl font-bold mb-3">2. بناء شجرة التوثيق (DOM + CSSOM = Render Tree)</h3>
          <p className="mb-3">
            يدمج المتصفح شجرة DOM (التي تمثل HTML) مع شجرة CSSOM لإنشاء شجرة العرض.
            العناصر المخفية بـ <code>display: none</code> لا تظهر هنا.
          </p>

          <h3 className="text-xl font-bold mb-3">3. التخطيط (Layout)</h3>
          <p className="mb-3">
            يحسب المتصفح الموقع والحجم الدقيق لكل عنصر. هنا تُطبَّق خصائص التخطيط مثل
            Flexbox وGrid.
          </p>

          <h3 className="text-xl font-bold mb-3">4. الطلاء (Paint)</h3>
          <p className="mb-3">
            يرسم المتصفح كل عنصر بتأثيراته البصرية: الألوان، الحدود، الظلال، النصوص.
          </p>

          <h3 className="text-xl font-bold mb-3">5. التجميع (Compositing)</h3>
          <p className="mb-4">
            يجمع كل الطبقات الرسومية في النتيجة النهائية المعروضة على الشاشة.
          </p>

          <CodeBlock
            code={`/* الخصائص التي تؤثر على كل مرحلة:

   DOM + CSSOM → Render Tree:
   - display, visibility, content
   - وراثة الخصائص (inheritance)

   Layout (التخطيط):
   - width, height, padding, margin
   - display, position, float
   - flex, grid, gap

   Paint (الطلاء):
   - color, background
   - box-shadow, border
   - font-size, text-decoration

   Compositing (التجميع):
   - transform
   - opacity
   - z-index
*/`}
            language="css"
          />

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mt-4">
            <p className="text-blue-800 dark:text-blue-300 font-bold mb-1">نصيحة للأداء</p>
            <p className="text-blue-700 dark:text-blue-400">
              خصائص مثل <code>transform</code> و <code>opacity</code> لا تُسبب إعادة تخطيط
              (Layout) - فهي أسرع للحركات والتأثيرات البصرية.
            </p>
          </div>
        </LessonSection>

        {/* ===== Section 8: Specificity ===== */}
        <LessonSection title="التنافسية (Specificity)">
          <p className="mb-4">
            عندما تطبق أكثر من قاعدة CSS على عنصر واحد، يقرر المتصفح أي قاعدة تُطبَّق
            بناءً على <strong>تنافسية الاختيارات</strong>.
          </p>

          <h3 className="text-xl font-bold mb-3">ترتيب التنافسية (من الأقل إلى الأعلى):</h3>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">الترتيب</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">النوع</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">مثال</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">التنافسية</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">عنصر HTML</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">p {"{ }"}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">0-0-1</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 p-3">2</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">فئة (Class)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">.text {"{ }"}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">0-1-0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">3</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">مُعرِّف (ID)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">#title {"{ }"}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">1-0-0</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 p-3">4</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3"> مضمن (Inline)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">style="..."</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">1-0-0-0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">5</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">!important</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">p {"{ }"} !important</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">الأعلى (آخر حل)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            code={`/* مثال على التنافسية */

/* تنافسية: 0-0-1 (عنصر واحد) */
p {
  color: black;
}

/* تنافسية: 0-1-0 (فئة واحدة) - تفوز! */
.text {
  color: blue;
}

/* تنافسية: 0-2-0 (فئتين) - تفوز! */
.card .text {
  color: green;
}

/* تنافسية: 1-0-0 (مُعرِّف) - يفوز دائماً! */
#special {
  color: red;
}

/* تنافسية: 10000 (!important) - المطلقة! */
p.important {
  color: purple !important;
}`}
            language="css"
          />

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 mt-4">
            <p className="text-red-800 dark:text-red-300 font-bold mb-1">احذر من !important</p>
            <p className="text-red-700 dark:text-red-400">
              استخدم <code>!important</code> فقط كآخر حل. الإفراط فيه يجعل الكود صعب الصيانة
              ويسبب مشاكل غير متوقعة. استخدم المتغيرات بدلاً منه.
            </p>
          </div>
        </LessonSection>

        {/* ===== Section 9: Box Model ===== */}
        <LessonSection title="نموذج الصندوق (Box Model)">
          <p className="mb-4">
            كل عنصر HTML هو صندوق. نموذج الصندوق يصف كيفية حساب حجم العنصر ومساحته:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-4">
            <pre className="font-mono text-sm leading-loose text-center" dir="ltr">
{`┌─────────────────────────────────────┐
│              margin                 │
│  ┌─────────────────────────────┐    │
│  │          border             │    │
│  │  ┌─────────────────────┐    │    │
│  │  │      padding        │    │    │
│  │  │  ┌───────────────┐  │    │    │
│  │  │  │   CONTENT     │  │    │    │
│  │  │  │  (النص/الصورة) │  │    │    │
│  │  │  └───────────────┘  │    │    │
│  │  └─────────────────────┘    │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘`}
            </pre>
          </div>

          <h3 className="text-xl font-bold mb-3">content-box vs border-box</h3>
          <p className="mb-3">
            القيمة الافتراضية هي <code>content-box</code>، حيث تُحسب الـ width والـ height
            للمحتوى فقط (بدون padding وborder).
          </p>

          <CodeBlock
            code={`/* content-box (الافتراضي) - widths تشمل المحتوى فقط */
.box-content {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* العرض الفعلي: 200 + 20 + 20 + 5 + 5 = 250px ! */

}

/* border-box - widths تشمل كل شيء */
.box-border {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* العرض الفعلي: 200px بالضبط ✓ */
  /* المحتوى الداخلي: 200 - 40 - 10 = 150px */
}`}
            language="css"
          />

          <CodeBlock
            code={`/* الحل الأفضل: أulsط على border-box لكل شيء */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* الآن:
   width: 200px = 200px بالضبط
   padding و border داخل العرض لا خارجه */`}
            language="css"
          />

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4 mt-4">
            <p className="text-green-800 dark:text-green-300 font-bold mb-1">القاعدة الذهبية</p>
            <p className="text-green-700 dark:text-green-400">
              دائماً استخدم <code>box-sizing: border-box</code> في بداية ملفك.
              هذا يجعل التخطيط أسهل وأكثر توقعاً.
            </p>
          </div>
        </LessonSection>

        {/* ===== Section 10: Modern Units ===== */}
        <LessonSection title="الوحدات الحديثة">
          <p className="mb-4">
            CSS توفر مجموعة متنوعة من الوحدات. فهم الفرق بينها يُحسّن التصميم بشكل كبير:
          </p>

          <h3 className="text-xl font-bold mb-3">وحدات الطول النسبية:</h3>
          <CodeBlock
            code={`/* rem - Relative to root (html) font size */
/* القيمة الافتراضية: 1rem = 16px */
html {
  font-size: 100%; /* = 16px */
}

h1 {
  font-size: 2.5rem; /* = 40px */
}

p {
  font-size: 1rem; /* = 16px */
}

/* مثالي للخطوط و التباعد - يعمل مع إعدادات المتصفح */`}

            language="css"
          />

          <CodeBlock
            code={`/* em - Relative to PARENT font size */
.parent {
  font-size: 1rem; /* 16px */
}

.child {
  font-size: 1.5em; /* 16px × 1.5 = 24px */
}

.nested-child {
  font-size: 1.5em; /* 24px × 1.5 = 36px ! */
}
/* مثال: em تتراكم في العناصر المتداخلة - احذر */`}
            language="css"
          />

          <CodeBlock
            code={`/* % - Relative to parent */
.container {
  width: 800px;
}

.sidebar {
  width: 25%; /* = 200px */
}

.content {
  width: 75%; /* = 600px */
}

/* vh / vw - Relative to viewport */
.hero {
  height: 100vh; /* 100% من ارتفاع الشاشة */
  width: 100vw;  /* 100% من عرض الشاشة */
}

/* dvh / svh / lvh - Dynamic/Small/Large viewport */
/* الحل لمشاكل الشريط السفلي في الموبايل */
.hero-mobile {
  height: 100dvh; /* يُعاير مع ظهور/اختفاء شريط المتصفح */
}

/* ch - Relative to width of character "0" */
.narrow-text {
  max-width: 65ch; /* ~65 حرف - مثالي للقراءة */
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">clamp() - الوحدة السحرية:</h3>
          <p className="mb-3">
            تحدد حداً أدنى وقيمة تفاعلية وحداً أقصى. تُغني عن وسائط الاستعلام الكثيرة:
          </p>
          <CodeBlock
            code={`/* clamp(الحد الأدنى, القيمة التفاعلية, الحد الأقصى) */

/* الخط: بين 16px و 3% من العرض، لا يتجاوز 24px */
h1 {
  font-size: clamp(1rem, 3vw, 1.5rem);
}

/* الحاوية: بين 320px و 90%، لا تتجاوز 1200px */
.container {
  width: clamp(320px, 90%, 1200px);
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 4rem);
}

/* بدلاً من كتابة 30 سطر media query */
.heading {
  font-size: clamp(1.75rem, 4vw, 3.5rem);
  line-height: clamp(1.2, 2vw, 1.4);
}

/* يعمل كـ media query واحدة فقط! */`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 11: Modern Colors ===== */}
        <LessonSection title="الألوان الحديثة">
          <p className="mb-4">CSS توفر طرق متعددة لتحديد الألوان، وكل طريقة لها استخداماتها:</p>

          <h3 className="text-xl font-bold mb-3">أنواع الألوان الأساسية:</h3>
          <CodeBlock
            code={`/* Hexadecimal (سداسي عشري) */
.primary {
  color: #2563eb;        /* 6 أرقام */
  background: #2563eb80; /* 8 أرقام مع شفافية */
}

/* RGB / RGBA */
.secondary {
  color: rgb(37, 99, 235);
  background: rgba(37, 99, 235, 0.5); /* 0.5 = شفافية 50% */
}

/* HSL / HSLA - الأسهل للتعديل */
.tertiary {
  color: hsl(217, 91%, 60%);
  /* H: Hue (اللون) 0-360
     S: Saturation (التشبع) 0-100%
     L: Lightness (السطوع) 0-100% */
}

/* ألوان مع الشفافية */
.transparent {
  background-color: hsla(217, 91%, 60%, 0.1);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">oklch() - النموذج اللوني الحديث:</h3>
          <CodeBlock
            code={`/* oklch - مُحسّن للإدراك البشري */
/* oklch(Lightness Chroma Hue) */
.badge-success {
  background: oklch(0.65 0.19 145); /* أخضر */
}

.badge-warning {
  background: oklch(0.85 0.15 85); /* أصفر */
}

.badge-danger {
  background: oklch(0.65 0.25 25); /* أحمر */
}

/* ميزة oklch: ألوان أكثر توازناً مع alpha channel */
.card-shadow {
  box-shadow: 0 4px 15px oklch(0 0 0 / 0.1);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">color-mix() - خلط الألوان:</h3>
          <CodeBlock
            code={`/* color-mix() - خلط لونين */
.link {
  color: #2563eb;
}

.link:hover {
  /* خلط 70% من الأزرق مع 30% من الأسود */
  color: color-mix(in oklch, #2563eb 70%, black);
}

/* تدرجات شفافة من لون أساسي */
.bg-primary-50 {
  background: color-mix(in oklch, var(--color-primary) 10%, white);
}

.bg-primary-100 {
  background: color-mix(in oklch, var(--color-primary) 20%, white);
}

.bg-primary-900 {
  background: color-mix(in oklch, var(--color-primary) 90%, black);
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">light-dark() - الألوان التلقائية:</h3>
          <CodeBlock
            code={`/* light-dark() - يتلقى ألوان حسب وضع المظهر */
/* يتطلب color-scheme: light dark */
body {
  color-scheme: light dark;
}

.card {
  /* الفاتح → أبيض، الداكن → رمادي غامق */
  background: light-dark(#ffffff, #1a1a2e);
  color: light-dark(#1f2937, #e5e7eb);
  border: 1px solid light-dark(#e5e7eb, #374151);
}

/* لا حاجة لـ @media (prefers-color-scheme) */
.primary {
  color: light-dark(#2563eb, #60a5fa);
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Section 12: Display Basics ===== */}
        <LessonSection title="أساسيات Display">
          <p className="mb-4">
            خاصية <code>display</code> تحدد كيفية عرض وعنصر في الصفحة وسلوكه في التخطيط:
          </p>

          <h3 className="text-xl font-bold mb-3">block:</h3>
          <p className="mb-2">تأخذ العرض الكامل للحاوية وتبدأ في سطر جديد:</p>
          <CodeBlock
            code={`.block-element {
  display: block;
  width: 100%; /* تأخذ العرض الكامل */
  height: auto;
  /* مثل: div, h1-h6, p, section, article */
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-4">inline:</h3>
          <p className="mb-2">تبقى في نفس السطر وتأخذ عرض المحتوى فقط:</p>
          <CodeBlock
            code={`.inline-element {
  display: inline;
  /* لا يمكن تحديد width و height */
  /* مثل: span, a, strong, em */
}

/* مثال عملي */
.text {
  display: inline;
}
.text .highlight {
  background: yellow;
  /* لا يكسر السطر */
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-4">inline-block:</h3>
          <p className="mb-2">تجمع بين inline و block - تبقى في السطر لكن تقبل width و height:</p>
          <CodeBlock
            code={`.inline-block-element {
  display: inline-block;
  width: 150px;  /* يُقبل! */
  height: 100px; /* يُقبل! */
  padding: 1rem;
  margin: 0.5rem;
  /* مثل: button, input, select */
}`}
            language="css"
          />

          <h3 className="text-xl font-bold mb-3 mt-4">none:</h3>
          <p className="mb-2">تُخفي العنصر تماماً من الصفحة ومساحته لا تُحتسب:</p>
          <CodeBlock
            code={`.hidden {
  display: none;
  /* العنصر اختفى تماماً كأنه غير موجود */
  /* مساحته (ospace) صفر */
}

/* مقارنة مع visibility: hidden */
.invisible {
  visibility: hidden;
  /* العنصر مخفي لكن مساحته محجوزة */
}`}
            language="css"
          />
        </LessonSection>

        {/* ===== Quiz 1 ===== */}
        <LessonSection title="اختبار سريع">
          <Quiz
            question="ما الفرق بين box-sizing: content-box و box-sizing: border-box؟"
            options={[
              "content-box يحسب padding و border داخل العرض، و border-box لا يحسبهما",
              "border-box يحسب padding و border داخل العرض، و content-box لا يحسبهما",
              "لا يوجد فرق بينهما",
              "border-box يخفي الحدود و content-box يظهرها",
            ]}
            correctAnswer={1}
            explanation="في border-box، تُشمل الـ padding و border داخل العرض المحدد. في content-box (الافتراضي)، يُحسب العرض للمحتوى فقط وتتزايد المساحة مع الـ padding والـ border."
          />

          <div className="mt-8">
            <Quiz
              question="لماذا تُفضل استخدام rem بدلاً من px للخطوط؟"
              options={[
                "rem أسرع في الأداء",
                "rem تجعل الخطوط أكبر حجماً",
                "rem تحترم إعدادات حجم الخط في المتصفح وتوفر سهولة الوصول",
                "px لا تعمل في المتصفح الحديثة",
              ]}
              correctAnswer={2}
              explanation="rem تعتمد على حجم الخط الجذر (root font size). إذا غيّر المستخدم حجم الخط في إعدادات المتصفح لتحسين الوصولية، تتغير كل الخطوط المحددة بـ rem. بينما px ثابتة ولا تتغير."
            />
          </div>
        </LessonSection>

        {/* ===== Challenge ===== */}
        <LessonSection title="تحدي العملية">
          <Challenge
            title="صمم بطاقة (Card) باستخدام الأساسيات"
            description="أنشئ بطاقة بسيطة باستخدام: box-sizing: border-box، rem للخطوط، clamp() للعرض، المتغيرات، display: block/inline-block، وألوان modern. البطاقة يجب أن تكون متجاوبة بدون media queries."
          />
        </LessonSection>

        {/* ===== CheatSheet ===== */}
        <LessonSection title="ملخص مرجعي سريع">
          <CheatSheet
            title="مرجع CSS السريع"
            items={[
              {
                title: "الوحدات (Units)",
                content: `| الوحدة | المرجع | الاستخدام الأمثل |
|--------|---------|------------------|
| px | ثابت | حدود دقيقة، أيقونات |
| rem | حجم الخط الجذر | خطوط، تباعد عام |
| em | حجم خط الأب | خطوط داخل عناصر |
| % | الحاوية | تخطيط نسبي |
| vw / vh | نافذة المتصفح | أحجام متجاوبة |
| dvh | ارتفاع ديناميكي | حل مشاكل الموبايل |
| ch | عرض حرف "0" | أعمدة نصية |
| clamp() | حد أدنى + نسبي + حد أقصى | الأفضل للتخطيط المرن |`
              },
              {
                title: "الألوان (Colors)",
                content: `| الصيغة | مثال | الاستخدام |
|--------|------|-----------|
| #hex | #2563eb | سريع وشائع |
| rgb() | rgb(37, 99, 235) | مع الشفافية: rgba() |
| hsl() | hsl(217, 91%, 60%) | سهل التعديل |
| oklch() | oklch(0.65 0.19 145) | أحدث وأدق |
| color-mix() | color-mix(in oklch, blue 50%, red) | خلط ألوان |
| light-dark() | light-dark(#fff, #111) | ألوان تلقائية |`
              },
              {
                title: "أنواع العرض (Display)",
                content: `| القيمة | السلوك | أمثلة |
|--------|--------|-------|
| block | سطر جديد + عرض كامل | div, p, h1 |
| inline | نفس السطر + عرض المحتوى | span, a, strong |
| inline-block | نفس السطر + قبول الأبعاد | button, input |
| none | إخفاء تام + لا مساحة | إخفاء عناصر |
| flex | تخطيط مرنة | حاويات التخطيط |
| grid | تخطيط شبكي | صفحات معقدة |`
              },
              {
                title: "التنافسية (Specificity)",
                content: `الترتيب من الأقل إلى الأعلى:
1. العناصر (p, div) → 0-0-1
2. الفئات (.class) → 0-1-0
3. المُعرِّفات (#id) → 1-0-0
4. Inline (style="") → 1-0-0-0
5. !important → الأعلى (آخر حل)

القاعدة: استخدم الفئات دائماً، تجنب IDs في CSS، ولا تستخدم !important إلا للإصلاحات الطارئة.`
              },
            ]}
          />
        </LessonSection>

        {/* ===== Summary ===== */}
        <LessonSection title="ملخص">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <p>CSS هو نظام الأنماط الذي يفصل المحتوى عن المظهر.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <p>استخدم دائماً الملف الخارجي (<code>&lt;link&gt;</code>) لربط CSS.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <p><code>box-sizing: border-box</code> يجب أن يكون في كل مشروع.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <p>استخدم <code>rem</code> للخطوط و <code>clamp()</code> للتخطيط المرن.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
              <p><code>oklch()</code> و <code>light-dark()</code> هما مستقبل الألوان.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
              <p>افهم الفرق بين <code>block</code>، <code>inline</code>، و <code>inline-block</code>.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</span>
              <p>التنافسية: الفئات أهم من العناصر، والمُعرِّد أهم من الفئات.</p>
            </div>
          </div>
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