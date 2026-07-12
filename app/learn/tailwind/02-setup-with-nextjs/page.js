import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function TailwindSetup() {
  const lesson = getLessonBySlug("tailwind", "02-setup-with-nextjs");
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader stage={lesson.stage} lesson={lesson} lessonIndex={lesson.lessonIndex} totalLessons={lesson.totalLessons} />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ======================== Section 1 ======================== */}
        <LessonSection id="what-is-setup" title="ما هو إعداد Tailwind v4">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            في هذا الدرس سنتعلم كيفية إعداد <strong className="text-cyan-600 dark:text-cyan-400">Tailwind CSS v4</strong> مع مشروع <strong className="text-cyan-600 dark:text-cyan-400">Next.js</strong>. الإعداد في v4 أصبح أسهل وأبسط بشكل كبير مقارنة بالإصدارات السابقة.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3">ما الذي تغير في Tailwind v4؟</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">1.</span>
                <span>لم يعد هناك ملف <code className="bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded text-sm">tailwind.config.js</code> — أصبح الإعداد عبر CSS مباشرة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">2.</span>
                <span>استخدام <code className="bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded text-sm">@theme</code> directive في ملف CSS لتفعيل التخصيص</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">3.</span>
                <span>سرعة بناء أسرع بشكل ملحوظ,output أصغر</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">4.</span>
                <span>فحص الملفات بشكل تلقائي بدون تحديد paths في الإعدادات</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            إذا كنت تستخدم Next.js 15+ مع React 19، فـ Tailwind v4 هو الخيار الأمثل لأنه مصمم للعمل مع هذه الإصدارات الحديثة.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">مقارنة سريعة بين v3 و v4</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">الميزة</th>
                    <th className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">v3</th>
                    <th className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">v4</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 font-medium">ملف الإعداد</td>
                    <td className="py-2 px-3"><code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">tailwind.config.js</code></td>
                    <td className="py-2 px-3"><code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">globals.css</code></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 font-medium">العناصر المستخدمة</td>
                    <td className="py-2 px-3"><code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">@tailwind base</code></td>
                    <td className="py-2 px-3"><code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">@import</code></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 font-medium">فحص الملفات</td>
                    <td className="py-2 px-3">يدوي في config</td>
                    <td className="py-2 px-3">تلقائي</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">سرعة البناء</td>
                    <td className="py-2 px-3">سريع</td>
                    <td className="py-2 px-3">أسرع بكثير</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </LessonSection>

        {/* ======================== Section 2 ======================== */}
        <LessonSection id="installation" title="التثبيت مع Next.js 16">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            لنبدأ بالتثبيت خطوة بخطوة. سنقوم بإنشاء مشروع Next.js جديد ثم إضافة Tailwind CSS v4 عليه.
          </p>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">الخطوة 1: إنشاء مشروع Next.js جديد</h4>
          <CodeBlock language="bash" code={`npx create-next-app@latest my-tailwind-project
# اختر TypeScript: Yes
# اختر ESLint: Yes
# اختر Tailwind CSS: No (سنضيفه يدوياً لنتعلم)
# اختر src/ directory: No
# اختر App Router: Yes
# اختر import alias: @/*`} />

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 mt-8">الخطوة 2: تثبيت الحزم المطلوبة</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            نحتاج حزمتين رئيسيتين فقط:
          </p>
          <CodeBlock language="bash" code={`npm install tailwindcss @tailwindcss/postcss`} />

          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-6">
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">ملاحظة مهمة</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              في Tailwind v4 لم نعد نحتاج إلى تثبيت حزم إضافية مثل <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">autoprefixer</code> أو <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">postcss</code> بشكل منفصل — حزمة <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">@tailwindcss/postcss</code> تتضمن كل ما نحتاجه.
            </p>
          </div>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 mt-8">الخطوة 3: إعداد PostCSS</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            أنشئ ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">postcss.config.mjs</code> في جذر المشروع:
          </p>
          <CodeBlock language="javascript" code={`// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`} />

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 mt-8">الخطوة 4: إعداد ملف CSS</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            افتح ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">app/globals.css</code> واستبدل محتواه بسطر واحد:
          </p>
          <CodeBlock language="css" code={`@import "tailwindcss";`} />

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-5 mb-6">
            <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">هذا كل شيء!</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              نعم، هذا هو كل الإعداد المطلوب. لا يوجد ملف config معقد، لا إعدادات مركبة. سطر واحد في CSS وسطر واحد في PostCSS.
            </p>
          </div>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 mt-8">الخطوة 5: تشغيل المشروع</h4>
          <CodeBlock language="bash" code={`npm run dev
# المشروع يعمل على http://localhost:3000`} />
        </LessonSection>

        {/* ======================== Section 3 ======================== */}
        <LessonSection id="file-explanation" title="شرح كل ملف">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            دعنا نفهم ما يفعله كل ملف بالتفصيل. فهم هذه الملفات سيساعدك على حل المشاكل إذا واجهتها.
          </p>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">ملف postcss.config.mjs</h4>
          <CodeBlock language="javascript" code={`// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`} />
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا الملف يخبر Next.js كيف يعالج ملفات CSS. عند تثبيت Tailwind CSS، يمر كل ملف CSS عبر <strong>PostCSS</strong> أولاً، ثم يقوم Plugin الخاص بـ Tailwind بتحويل الأكواد إلى CSS حقيقي.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            بدون هذا الملف، لن يعمل Tailwind CSS على الإطلاق — حتى لو كان ملف globals.css صحيحًا.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">كيف يعمل التحويل؟</h4>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <div className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">1. الملف الأصلي</div>
                <span>→ ملف CSS يحتوي على <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@import</code></span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">2. PostCSS</div>
                <span>→ يقرأ الملف ويمرره عبر Plugins</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">3. @tailwindcss/postcss</div>
                <span>→ يفحص ملفات المشروع ويولّد CSS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">4. النتيجة</div>
                <span>→ CSS نهائي يحتوي فقط على الأدوات المستخدمة</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 mt-8">ملف globals.css</h4>
          <CodeBlock language="css" code={`@import "tailwindcss";`} />
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            هذا الملف هو نقطة الدخول لـ Tailwind CSS. سطر <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">@import "tailwindcss"</code> يفعل التالي:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">→</span>
              <span>يستورد جميع base styles الخاصة بـ Tailwind</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">→</span>
              <span>يقوم بفحص جميع ملفات المشروع لاكتشاف الفئات المستخدمة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">→</span>
              <span>يولّد CSS فقط للفئات المكتشفة ( JIT Mode )</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">→</span>
              <span>يشمل جميع utility classes والـ components</span>
            </li>
          </ul>

          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-5 mb-6">
            <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">لا تستخدم عناصر v3 القديمة!</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              في Tailwind v4، <strong>لا تستخدم</strong> <code className="bg-red-100 dark:bg-red-800 px-1 rounded">@tailwind base</code> أو <code className="bg-red-100 dark:bg-red-800 px-1 rounded">@tailwind components</code> أو <code className="bg-red-100 dark:bg-red-800 px-1 rounded">@tailwind utilities</code>. استبدلها جميعًا بسطر واحد: <code className="bg-red-100 dark:bg-red-800 px-1 rounded">@import "tailwindcss"</code>.
            </p>
          </div>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 mt-8">كيف يعالج Next.js CSS</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Next.js يستخدم PostCSS كجزء من خط بنائه (build pipeline). عندما تعمل بأمر <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">npm run dev</code>:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">1.</span>
              <span>Next.js يقرأ ملفات CSS في مجلد <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">app/</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">2.</span>
              <span>يمررها عبر PostCSS مع جميع Plugins المعرّفة في <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">postcss.config.mjs</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">3.</span>
              <span>Plugin الخاص بـ Tailwind يفحص ملفات JS/JSX/TSX في المشروع</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">4.</span>
              <span>يولّد CSS مخصص فقط للفئات المستخدمة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">5.</span>
              <span>النتيجة تُدمج في الصفحة 最終的に</span>
            </li>
          </ul>
        </LessonSection>

        {/* ======================== Section 4 ======================== */}
        <LessonSection id="vscode-setup" title="إعداد VS Code">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            لتجربة تطوير ممتعة وسريعة، ننصح بتثبيت هذه الإضافات في VS Code:
          </p>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">1. Tailwind CSS IntelliSense</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                الإضافة الأساسية. توفر:
              </p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Auto-complete تلقائي لأسماء الفئات</li>
                <li>• Hover preview لمعاينة الفئات</li>
                <li>• Error highlighting للفئات غير الصحيحة</li>
                <li>• Jump to definition</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">2. Tailwind CSS Snippets</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                توفر اختصارات سريعة لكتابة فئات Tailwind الشائعة:
              </p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">tw-flex</code> → <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">className=&quot;flex&quot;</code></li>
                <li>• <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">tw-grid</code> → <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">className=&quot;grid&quot;</code></li>
                <li>• <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">tw-container</code> → بنية container كاملة</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">3. Prettier + Tailwind Plugin</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                يرتب فئات Tailwind تلقائيًا بالترتيب الموصى به:
              </p>
              <CodeBlock language="javascript" code={`// قبل التنسيق
<div className="p-4 text-white bg-blue-500 flex items-center rounded-lg">

// بعد التنسيق (الترتيب الصحيح)
<div className="flex items-center rounded-lg bg-blue-500 p-4 text-white">`} />
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5 mt-6">
            <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">كيف يعمل Auto-complete؟</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              عندما تكتب <code className="bg-purple-100 dark:bg-purple-800 px-1 rounded">className=&quot;flex &quot;</code> وต่อด้วย space، سترى قائمة منسدلة بجميع الفئات المتاحة مع وصف مختصر لكل فئة ومعاينة مباشرة.
            </p>
            <CodeBlock language="jsx" code={`// عند الكتابة يظهر auto-complete
<div className="flex items-center gap-4">
  {/*       ↑  ↑         ↑
    flex  items-center  gap-4
    (display: flex) (align-items) (gap: 1rem)
  */}
</div>`} />
          </div>
        </LessonSection>

        {/* ======================== Section 5 ======================== */}
        <LessonSection id="first-component" title="مثال عملي — أول مكون">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            دعنا ننشئ أول مكون باستخدام Tailwind CSS ونرى كيف يعمل في الواقع.
          </p>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">أنشئ مكون SimpleCard</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            أنشئ ملف <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">components/SimpleCard.js</code>:
          </p>
          <CodeBlock language="jsx" code={`export default function SimpleCard() {
  return (
    <div className="max-w-sm rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        مرحباً بك في Tailwind
      </h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        هذا مثال على مكون بسيط مُنسّق بـ Tailwind CSS.
        كل الأنواع والالوان والأحجام مكتوبة مباشرة في className.
      </p>
      <button className="rounded-lg bg-cyan-500 px-4 py-2 text-white transition-colors hover:bg-cyan-600 active:scale-95">
        اضغط هنا
      </button>
    </div>
  );
}`} />

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 mt-8">أنشئ صفحة الصفحة الرئيسية</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            استبدل محتوى <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">app/page.js</code>:
          </p>
          <CodeBlock language="jsx" code={`import SimpleCard from "@/components/SimpleCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <SimpleCard />
    </main>
  );
}`} />

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-5 mt-6">
            <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">لاحظ النتيجة!</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              افتح المتصفح على <code className="bg-green-100 dark:bg-green-800 px-1 rounded">localhost:3000</code> وسترى المكون مُنسّقًا بشكل جميل. التغييرات تظهر فورًا بفضل وضع JIT.
            </p>
          </div>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 mt-8">مقارنة: Tailwind مقابل CSS التقليدي</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5">
              <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2"> مع Tailwind</h5>
              <CodeBlock language="jsx" code={`<div className="rounded-lg bg-blue-500 p-4 text-white">
  نص مُنسّق
</div>`} />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5">
              <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2"> مع CSS التقليدي</h5>
              <CodeBlock language="jsx" code={`<div className="my-card">
  نص مُنسّق
</div>`} />
              <CodeBlock language="css" code={`/* في ملف منفصل */
.my-card {
  background-color: #3b82f6;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}`} />
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mt-6">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">لماذا Tailwind أسرع؟</h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>• لا حاجة للتبديل بين ملفات متعددة</li>
              <li>• لا حاجة لتسمية كل شيء (لا cần لكتابة class names)</li>
              <li>• لا يوجد CSS مبذر (unused CSS) — فقط ما تستخدمه</li>
              <li>• كل شيء في مكان واحد — سهل الصيانة</li>
            </ul>
          </div>
        </LessonSection>

        {/* ======================== Section 6 ======================== */}
        <LessonSection id="behind-the-scenes" title="ماذا يحدث خلف الكواليس">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            فهم ما يحدث داخليًا سيساعدك على تجنب المشاكل وفهم سبب ظهور بعض الأخطاء.
          </p>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">عملية تحويل CSS</h4>
          <CodeBlock language="text" code={`globals.css                    →  PostCSS Plugin  →  CSS Final
─────────────                   ───────────────    ───────────
@import "tailwindcss";    →    فحص ملفات المشروع  →  .flex { ... }
                                اكتشاف الفئات      .bg-blue-500 { ... }
                                توليد CSS            .p-4 { ... }
                                                     (أداة فقط)`} />

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            المفتاح هو أن Tailwind <strong>لا يولّد كل شيء</strong> — يفحص ملفات المشروع ويكتشف فقط الفئات المستخدمة ثم يولّد CSS لها فقط.
          </p>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">فحص الملفات التلقائي في v4</h4>
          <CodeBlock language="jsx" code={`// مثال: ملف components/Header.js
export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <span className="text-xl font-bold">شعاعي</span>
        <ul className="flex gap-4">
          <li className="text-gray-700 hover:text-cyan-500">الرئيسية</li>
          <li className="text-gray-700 hover:text-cyan-500">الدروس</li>
        </ul>
      </nav>
    </header>
  );
}`} />

          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Tailwind يكتشف من هذا الملف أنك تستخدم الفئات التالية:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">الفئات المكتشفة:</p>
            <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">
              bg-white, shadow-md, container, mx-auto, flex, items-center, justify-between, p-4, text-xl, font-bold, gap-4, text-gray-700, hover:text-cyan-500
            </p>
          </div>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 mt-8">حجم CSS النهائي في الإنتاج</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            عندما تعمل <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">npm run build</code>، يُنشئ Tailwind ملف CSS نهائي بحجم صغير جدًا:
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-cyan-500">~10KB</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">مشروع بسيط</p>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-cyan-500">~15KB</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">مشروع متوسط</p>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-cyan-500">~25KB</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">مشروع كبير</p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mt-6">
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">مقارنة مع CSS التقليدي</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              مشروع CSS تقليدي قد يصل حجمه إلى 50-100KB بسبب CSS المبذر (unused CSS). مع Tailwind، تتضمن فقط ما تستخدمه بالفعل. هذا الفرق الكبير في الأداء!
            </p>
          </div>
        </LessonSection>

        {/* ======================== Section 7 ======================== */}
        <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            هذه الأخطاء يقع فيها المبتدئون كثيرًا. انتبه لها لتتجنبها:
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">الخطأ 1: نسيان ملف PostCSS</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                إذا لم يكن ملف <code className="bg-red-100 dark:bg-red-800 px-1 rounded">postcss.config.mjs</code> موجودًا، لن يعمل Tailwind على الإطلاق. سترى فئات خام غير مُنسّقة.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>الحل:</strong> تأكد من وجود الملف في جذر المشروع وليس في مجلد فرعي.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">الخطأ 2: استخدام عناصر v3 القديمة</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                استخدام <code className="bg-red-100 dark:bg-red-800 px-1 rounded">@tailwind base</code> أو <code className="bg-red-100 dark:bg-red-800 px-1 rounded">@tailwind components</code> بدلاً من <code className="bg-red-100 dark:bg-red-800 px-1 rounded">@import "tailwindcss"</code>.
              </p>
              <CodeBlock language="css" code={`/* ❌ الخطأ — استخدام عناصر v3 القديمة */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ✅ الصحيح — استخدام v4 */
@import "tailwindcss";`} />
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">الخطأ 3: محاولة تحديد مسارات الفحص يدوياً</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                في v3 كنت تحتاج إلى تحديد مسارات الملفات في <code className="bg-red-100 dark:bg-red-800 px-1 rounded">content</code> في ملف الإعداد. في v4 هذا يتم <strong>تلقائيًا</strong>.
              </p>
              <CodeBlock language="javascript" code={`// ❌ لا تفعل هذا في v4 — غير مطلوب
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};

// ✅ في v4 — Tailwind يفحص كل شيء تلقائياً`} />
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">الخطأ 4: خلط imports في globals.css</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                أضف <code className="bg-red-100 dark:bg-red-800 px-1 rounded">@import "tailwindcss"</code> كسطر أول في الملف. لا تضعه بعد @import آخر.
              </p>
              <CodeBlock language="css" code={`/* ❌ الخطأ */
@import "./variables.css";
@import "tailwindcss";

/* ✅ الصحيح */
@import "tailwindcss";
@import "./variables.css";`} />
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">الخطأ 5: استخدام style بدلاً من className</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                بعض المبرمجين يخلطون بين className (للـ Tailwind) وstyle (للـ CSS المباشر).
              </p>
              <CodeBlock language="jsx" code={`// ❌ الخطأ — استخدام style
<div style={{ padding: "1rem", backgroundColor: "blue" }}>

// ✅ الصحيح — استخدام className مع Tailwind
<div className="bg-blue-500 p-4">`} />
            </div>
          </div>
        </LessonSection>

        {/* ======================== Section 8 ======================== */}
        <LessonSection id="best-practices" title="أفضل الممارسات">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            اتبع هذه الممارسات لتجعل كودك أنظف وأسهل في الصيانة:
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">1. دع Tailwind يتعامل مع التنسيق</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                لا تستخدم CSS تقليدي أو inline styles. استخدم Tailwind لجميع أنواع التنسيق.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">2. استخدم className وليس style</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                جميع فئات Tailwind تُكتب في <code className="bg-green-100 dark:bg-green-800 px-1 rounded">className</code> وليس في <code className="bg-green-100 dark:bg-green-800 px-1 rounded">style</code>.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">3. نظّم فئات Tailwind الطويلة</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                إذا كان هناك كثير من الفئات، استخدم newlines أو arrays:
              </p>
              <CodeBlock language="jsx" code={`// طريقة 1: newlines
<div
  className="
    flex items-center justify-between
    rounded-lg bg-white p-4 shadow-md
    transition-all hover:shadow-lg
    dark:bg-gray-800
  "
>

// طريقة 2: array
const cardClasses = [
  "flex items-center justify-between",
  "rounded-lg bg-white p-4 shadow-md",
  "transition-all hover:shadow-lg",
  "dark:bg-gray-800",
].join(" ");

<div className={cardClasses}>`} />
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">4. استخدم @apply للفئات المتكررة</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                إذا كنت تكرر نفس المجموعة من الفئات، استخدم <code className="bg-green-100 dark:bg-green-800 px-1 rounded">@apply</code> في ملف CSS:
              </p>
              <CodeBlock language="css" code={`/* globals.css */
@import "tailwindcss";

@layer components {
  .btn-primary {
    @apply rounded-lg bg-cyan-500 px-4 py-2 text-white
           transition-colors hover:bg-cyan-600;
  }
}`} />
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">5. استخدم Dark Mode من البداية</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                اكتب فئات <code className="bg-green-100 dark:bg-green-800 px-1 rounded">dark:</code> من البداية. هذا أسهل بكثير من إضافتها لاحقًا.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">6. استخدم Responsive Design</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                اكتب التصميم للموبايل أولاً ثم أضف breakpoints للشاشات الأكبر:
              </p>
              <CodeBlock language="jsx" code={`// Mobile first: flex column → lg: flex row
<div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
  <aside className="w-full lg:w-1/4">القائمة الجانبية</aside>
  <main className="w-full lg:w-3/4">المحتوى الرئيسي</main>
</div>`} />
            </div>
          </div>
        </LessonSection>

        {/* ======================== Section 9 ======================== */}
        <LessonSection id="summary" title="ملخص + تقييم + تحدٍّ + دليل مرجعي">

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">ملخص الدرس</h4>
          <div className="bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800 rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>Tailwind v4 يستخدم CSS-first configuration — لا يوجد tailwind.config.js</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>الإعداد مع Next.js يتطلب حزمتين فقط: <code className="bg-cyan-100 dark:bg-cyan-800 px-1 rounded">tailwindcss</code> و <code className="bg-cyan-100 dark:bg-cyan-800 px-1 rounded">@tailwindcss/postcss</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>ملف <code className="bg-cyan-100 dark:bg-cyan-800 px-1 rounded">postcss.config.mjs</code> يربط Tailwind بـ PostCSS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>ملف <code className="bg-cyan-100 dark:bg-cyan-800 px-1 rounded">globals.css</code> يحتوي على <code className="bg-cyan-100 dark:bg-cyan-800 px-1 rounded">@import &quot;tailwindcss&quot;</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>فحص الملفات تلقائي في v4 — لا حاجة لتحديد paths</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>CSS النهائي في الإنتاج صغير جدًا (10-25KB)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>إضافة IntelliSense في VS Code تسرّع العمل بشكل كبير</span>
              </li>
            </ul>
          </div>

          {/* Quiz */}
          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">اختبر فهمك</h4>
          <div className="space-y-6 mb-8">
            <Quiz
              question="ما هو الملف الذي يجب إضافته في جذر المشروع لإعداد PostCSS مع Tailwind v4؟"
              options={["tailwind.config.js", "postcss.config.mjs", "next.config.js", "css.config.json"]}
              correctAnswer={1}
              explanation="ملف postcss.config.mjs هو المسؤول عن ربط Tailwind CSS بـ PostCSS. بدونه لن يعمل Tailwind على الإطلاق."
            />

            <Quiz
              question="في Tailwind v4، ماذا نستخدم في ملف globals.css بدلاً من @tailwind base/components/utilities؟"
              options={["@include tailwindcss", "@import \"tailwindcss\"", "@use tailwindcss", "@load tailwindcss"]}
              correctAnswer={1}
              explanation={`في v4، نستخدم @import "tailwindcss" بدلاً من العناصر القديمة @tailwind base/components/utilities.`}
            />

            <Quiz
              question="هل نحتاج إلى تحديد مسارات الملفات في v4 لفحص الفئات المستخدمة؟"
              options={["نعم، يجب تحديد paths في content array", "لا، Tailwind v4 يفحص الملفات تلقائيًا", "فقط في وضع الإنتاج", "فقط إذا كان المشروع كبيرًا"]}
              correctAnswer={1}
              explanation="Tailwind v4 يفحص جميع ملفات المشروع تلقائيًا — لا حاجة لتحديد paths في أي مكان."
            />

            <Quiz
              question="ما هو حجم CSS النهائي المتوقع لمشروع Tailwind متوسط في وضع الإنتاج؟"
              options={["50-100KB", "100-200KB", "10-15KB", "5-8KB"]}
              correctAnswer={2}
              explanation="بفضل JIT Mode، يحتوي CSS النهائي فقط على الفئات المستخدمة. المشروع المتوسط ينتج ~10-15KB من CSS."
            />
          </div>

          {/* Challenge */}
          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">تحدي عملي</h4>
          <Challenge
            title="أنشئ مشروع Next.js جديد مع Tailwind v4"
            description={`قم بالخطوات التالية:
1. أنشئ مشروع Next.js جديد باستخدام create-next-app
2. ثبّت Tailwind CSS v4 و @tailwindcss/postcss
3. أنشئ ملف postcss.config.mjs
4. عدّل globals.css ليحتوي على @import "tailwindcss"
5. أنشئ مكون UserCard بتصميم جميل يحتوي على: صورة أفتراضية (placeholder)، اسم المستخدم، الوصف، وزر "متابعة"
6. تأكد من استخدام Dark Mode Classes
7. شغّل المشروع وتأكد من ظهور التصميم`}
          >
            <CodeBlock language="jsx" code={`// components/UserCard.js
export default function UserCard() {
  return (
    <div className="mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xl font-bold text-white">
          أحمد
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">أحمد محمد</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">مطور واجهات أمامية</p>
        </div>
      </div>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        مطور شغوف بتعلم أحدث تقنيات الويب وبناء تجارب مستخدم مميزة.
      </p>
      <button className="w-full rounded-xl bg-cyan-500 px-4 py-2.5 font-medium text-white transition-all hover:bg-cyan-600 hover:shadow-lg active:scale-[0.98]">
        متابعة
      </button>
    </div>
  );
}`} />
          </Challenge>

          {/* CheatSheet */}
          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 mt-8">دليل الإعداد المرجعي</h4>
          <CheatSheet title="قائمة الإعداد الكاملة — Tailwind v4 مع Next.js">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">1. تثبيت الحزم</h5>
                <CodeBlock language="bash" code={`npm install tailwindcss @tailwindcss/postcss`} />
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">2. ملف postcss.config.mjs</h5>
                <CodeBlock language="javascript" code={`const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;`} />
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">3. ملف globals.css</h5>
                <CodeBlock language="css" code={`@import "tailwindcss";`} />
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">4. VS Code Extensions</h5>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Tailwind CSS IntelliSense</li>
                  <li>• Tailwind CSS Snippets</li>
                  <li>• Prettier + Tailwind Plugin</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">5. تشغيل المشروع</h5>
                <CodeBlock language="bash" code={`npm run dev`} />
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">6. قائمة التحقق</h5>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>☐ ملف postcss.config.mjs موجود في الجذر</li>
                  <li>☐ globals.css يحتوي على @import "tailwindcss"</li>
                  <li>☐ لا يوجد tailwind.config.js (غير مطلوب في v4)</li>
                  <li>☐ لا توجد عناصر v3 القديمة (@tailwind base)</li>
                  <li>☐ IntelliSense يعمل في VS Code</li>
                  <li>☐ المشروع يعمل بدون أخطاء</li>
                </ul>
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

        <LessonNavigation prevLesson={lesson.prevLesson} prevStage={lesson.prevLessonStage} nextLesson={lesson.nextLesson} nextStage={lesson.nextLessonStage} />
      </div>
    </div>
  );
}
