// =====================================================
// ملف: page.js (الدرس الأول: مقدمة في Next.js والإعداد)
// المكان: app/learn/nextjs/01-introduction-to-nextjs/page.js
// الوظيفة: تعريف المتعلمين بـ Next.js 16 من الصفر
// URL: /learn/nextjs/01-introduction-to-nextjs
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function IntroductionToNextjs() {
  const lessonInfo = getLessonBySlug("nextjs", "01-introduction-to-nextjs");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {/* ========================================== */}
        {/* القسم الأول: ما هو Next.js؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هو Next.js؟">
          <p>
            <strong>Next.js</strong> هو إطار عمل (Framework) مبني على React، تم تطويره بواسطة شركة <strong>Vercel</strong>. يُستخدم Next.js لبناء تطبيقات الويب الحديثة التي تجمع بين قوة React على الواجهة وميزات الخادم (Server-side) المتقدمة.
          </p>

          <p>
            Next.js ليس مجرد مكتبة عادية - إنه إطار عمل متكامل يوفر حلولاً جاهزة لمشاكل شائعة مثل تحسين محركات البحث (SEO)، أداء التحميل الأولي، التوجيه (Routing)، وتحسين الصور.
          </p>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 شركات عالمية تستخدم Next.js:
            </p>
            <p>
              <strong>Netflix</strong> (واجهة المستخدم)، <strong>TikTok</strong> (لوحة التحكم)، <strong>Nike</strong> (المتجر الرسمي)، <strong>Twitch</strong>، <strong>Notion</strong>، و <strong>Hulu</strong>. كل هذه الشركات اختارت Next.js لأنه يُقدم أداءً عالياً وتجربة مطورين ممتازة.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدم Next.js؟ */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم Next.js؟">
          <p>لنفهم لماذا نحتاج Next.js، دعنا نرى المشكلة التي واجهها المطورون قبل ظهوره:</p>

          <p>
            <strong>المشكلة:</strong> تطبيقات React العادية (SPA - Single Page Applications) تُرسل ملف JavaScript ضخم للمتصفح، الذي يقوم ببناء页面 بالكامل على جهاز المستخدم. هذا يُسبب:
          </p>
          <ul>
            <li><strong>SEO ضعيف</strong>: محركات البحث (Google) لا تستطيع قراءة المحتوى بسهولة لأن الصفحة فارغة في البداية.</li>
            <li><strong>تحميل أولي بطيء</strong>: المستخدم ينتظر حتى يتم تحميل كل JavaScript قبل رؤية أي شيء.</li>
            <li><strong>أداء ضعيف على الأجهزة الضعيفة</strong>: الهواتف القديمة تعاني من تشغيل الكود.</li>
          </ul>

          <p>
            <strong>الحل:</strong> Next.js يحل هذه المشكلات عن طريق:
          </p>
          <ul>
            <li><strong>SSR (Server-Side Rendering)</strong>: يبني الصفحة على الخادم ويُرسل HTML جاهز للمتصفح.</li>
            <li><strong>SSG (Static Site Generation)</strong>: يبني صفحات ثابتة مسبقاً (أسرع ما يمكن).</li>
            <li><strong>File-based Routing</strong>: نظام توجيه تلقائي بناءً على هيكل الملفات.</li>
            <li><strong>تحسين الصور والخطوط</strong>: أدوات مدمجة لتحسين الأداء.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: ما الجديد في Next.js 16؟ */}
        {/* ========================================== */}
        <LessonSection title="ما الجديد في Next.js 16؟">
          <p>Next.js 16 هو أحدث إصدار ويحتوي على تغييرات جوهرية تجعله أسرع وأقوى من أي وقت مضى:</p>

          <ul>
            <li>
              <strong>Turbopack كافتراضي</strong>: لم يعد Webpack هو الخيار الأساسي. Turbopack هو الـ bundler الرسمي الأسرع 2-5 مرات مع Fast Refresh أسرع 10 مرات.
            </li>
            <li>
              <strong>Cache Components</strong>: توجيه <code>"use cache"</code> جديد يتيح لك التحكم الدقيق في التخزين المؤقت للمكونات.
            </li>
            <li>
              <strong>React Compiler مستقر</strong>: React Compiler (المعروف سابقاً بـ React Forget) أصبح مستقراً ويُحسّن الأداء تلقائياً.
            </li>
            <li>
              <strong>Proxy بدلاً من Middleware</strong>: <code>proxy.ts</code> هو البديل الجديد لـ Middleware، أكثر قوة ومرونة.
            </li>
            <li>
              <strong>Partial Prerendering (PPR)</strong>: دمج بين الـ static والـ dynamic في نفس الصفحة لأداء أفضل.
            </li>
          </ul>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔔 مهم:
            </p>
            <p>
              Next.js 16 غير متوافق مع الإصدارات السابقة في بعض النقاط. إذا كنت قادماً من Next.js 14 أو 15، تأكد من مراجعة دليل الترقية الرسمي.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: إنشاء مشروع جديد */}
        {/* ========================================== */}
        <LessonSection title="إنشاء مشروع Next.js جديد">
          <p>لإنشاء مشروع Next.js جديد، استخدم الأمر التالي في الطرفية (Terminal):</p>

          <CodeBlock
            language="bash"
            code={`npx create-next-app@latest`}
          />

          <p>سيُطلب منك بعض الخيارات. إليك الإعدادات الموصى بها:</p>

          <CodeBlock
            language="bash"
            code={`What is your project named? my-app
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use src/ directory? No
Would you like to use App Router? Yes (مطلوب)
Would you like to customize the import alias? No`}
          />

          <p>
            بعد انتهاء التثبيت، ادخل إلى المجلد وشغّل المشروع:
          </p>

          <CodeBlock
            language="bash"
            code={`cd my-app
npm run dev`}
          />

          <p>
            افتح المتصفح على <code>http://localhost:3000</code> وسترى صفحة الترحيب الافتراضية لـ Next.js.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: هيكل الملفات */}
        {/* ========================================== */}
        <LessonSection title="هيكل الملفات في App Router">
          <p>بعد إنشاء المشروع، سترى هيكل الملفات التالي:</p>

          <CodeBlock
            language="bash"
            code={`my-app/
  ├── app/
  │   ├── favicon.ico      # أيقونة الموقع
  │   ├── globals.css      # ملف CSS العام
  │   ├── layout.js        # التخطيط الرئيسي للتطبيق
  │   └── page.js          # الصفحة الرئيسية (/) 
  ├── public/              # الملفات الثابتة (الصور، الخطوط)
  ├── next.config.mjs      # إعدادات Next.js
  ├── package.json         # التبعيات والأوامر
  ├── postcss.config.mjs   # إعدادات PostCSS (Tailwind)
  └── tsconfig.json        # إعدادات TypeScript`}
          />

          <p>الملفات المهمة في <code>app/</code>:</p>
          <ul>
            <li><code>layout.js</code>: التخطيط الرئيسي - يُغلّف كل الصفحات (مثل القائمة السفلية والرأسية).</li>
            <li><code>page.js</code>: المحتوى الأساسي للصفحة الرئيسية.</li>
            <li><code>loading.js</code>: يُعرض أثناء تحميل الصفحة (اختياري).</li>
            <li><code>error.js</code>: يُعرض عند حدوث خطأ (اختياري).</li>
            <li><code>not-found.js</code>: يُعرض عند عدم وجود الصفحة 404 (اختياري).</li>
            <li><code>template.js</code>: مثل layout لكن يُعاد تحميله مع كل تنقل (اختياري).</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: ملفات مهمة في المشروع */}
        {/* ========================================== */}
        <LessonSection title="ملفات مهمة في المشروع">
          <p className="font-bold" style={{ color: "var(--foreground)" }}>next.config.mjs:</p>
          <p>ملف إعدادات Next.js الرئيسي. يمكنك تعديله لإضافة خيارات مثل تحسين الصور وإعادة التوجيه:</p>

          <CodeBlock
            language="jsx"
            code={`// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;`}
          />

          <p className="font-bold" style={{ color: "var(--foreground)" }}>tsconfig.json:</p>
          <p>ملف إعدادات TypeScript. يحتوي على إعدادات المسارات (Path Aliases) ومستوى الدقة:</p>

          <CodeBlock
            language="json"
            code={`{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "preserve",
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}
          />

          <p className="font-bold" style={{ color: "var(--foreground)" }}>package.json:</p>
          <p>يحتوي على قائمة بالأوامر المتاحة (scripts) والتبعيات:</p>

          <CodeBlock
            language="json"
            code={`{
  "scripts": {
    "dev": "next dev",        # تشغيل وضع التطوير
    "build": "next build",    # بناء نسخة الإنتاج
    "start": "next start",    # تشغيل نسخة الإنتاج
    "lint": "next lint"       # فحص الكود
  }
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: Turbopack */}
        {/* ========================================== */}
        <LessonSection title="Turbopack - المحول الأساسي الجديد">
          <p>
            <strong>Turbopack</strong> هو الـ bundler الافتراضي في Next.js 16، وقد حل محل Webpack بشكل كامل. تم تطويره بواسطة Vercel بالتعاون مع مبتكر Webpack نفسه (Tobias Koppers) و Rust.
          </p>

          <ul>
            <li><strong>أسرع 2-5 مرات</strong> في البناء (Build) مقارنة بـ Webpack.</li>
            <li><strong>أسرع 10 مرات</strong> في التحديث الفوري (Fast Refresh).</li>
            <li><strong>لا يحتاج إلى إعداد</strong>: يعمل تلقائياً بدون أي config إضافية.</li>
            <li><strong>متوافق مع Webpack Loaders</strong>: يمكن استخدام plugins Webpack القديمة.</li>
          </ul>

          <p>لتأكيد أن Turbopack يعمل في مشروعك، ابحث عن رسالة في التيرمنال عند تشغيل <code>npm run dev</code>:</p>

          <CodeBlock
            language="bash"
            code={`▲ Next.js 16.0.0
- Local: http://localhost:3000
- Turbopack: ✓ (الأداء سريع جداً)`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: متغيرات البيئة */}
        {/* ========================================== */}
        <LessonSection title="متغيرات البيئة (Environment Variables)">
          <p>
            متغيرات البيئة تُستخدم لتخزين المعلومات الحساسة مثل مفاتيح API وكلمات المرور وقواعد البيانات. Next.js يدعم عدة أنواع من ملفات البيئة:
          </p>

          <ul>
            <li><code>.env</code>: متغيرات عامة تدخل في كل البيئات.</li>
            <li><code>.env.local</code>: متغيرات محلية - لا تُرفع إلى GitHub (مهم!).</li>
            <li><code>.env.development</code>: متغيرات خاصة بوضع التطوير.</li>
            <li><code>.env.production</code>: متغيرات خاصة بالإنتاج.</li>
          </ul>

          <p><strong>مثال:</strong></p>

          <CodeBlock
            language="bash"
            code={`# ملف .env.local
DATABASE_URL="postgresql://user:pass@localhost:5432/mydb"
API_SECRET_KEY="sk-xxxxxx"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"`}
          />

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 قاعدة مهمة:
            </p>
            <p>
              تستخدم <strong>NEXT_PUBLIC_</strong> في بداية اسم المتغير إذا كنت تريد الوصول إليه من المتصفح (Client-side). أي متغير بدون هذه البادئة يكون متاحاً فقط على الخادم (Server-side).
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: ماذا يحدث خلف الكواليس */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما تنفذ <code>npx create-next-app@latest</code>، يحدث التالي:</p>

          <ol>
            <li><strong>تحميل القالب</strong>: Next.js يقوم بتحميل أحدث قالب بداية (starter template).</li>
            <li><strong>تثبيت TypeScript</strong>: يُضيف إعدادات TypeScript مع ملف <code>tsconfig.json</code>.</li>
            <li><strong>تثبيت Tailwind CSS</strong>: يُضيف ملفات PostCSS و Tailwind مع إعدادات RTL افتراضية.</li>
            <li><strong>تثبيت App Router</strong>: يُنشئ <code>app/layout.js</code> و <code>app/page.js</code>.</li>
            <li><strong>تثبيت Turbopack</strong>: يُعيّن Turbopack كـ bundler افتراضي.</li>
            <li><strong>تثبيت ESLint</strong>: يُضيف قواعد فحص الكود.</li>
          </ol>

          <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              كل هذه الإعدادات تتم تلقائياً. لست بحاجة لتثبيت أي شيء يدوياً. Next.js يهتم بكل الإعدادات المملة لأنك تبدأ في البرمجة فوراً.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ هيكل ملفات خاطئ:</strong>
              <br />
              وضع <code>page.js</code> في مجلد <code>app/pages/</code> (بـ s) بدلاً من <code>app/page.js</code>. Next.js يتعرف فقط على الملفات ذات الأسماء المحددة.
            </li>
            <li>
              <strong>❌ نسيان "use client":</strong>
              <br />
              استخدام <code>useState</code> أو <code>useEffect</code> في مكون ليس فيه <code>"use client"</code>. كل المكونات افتراضياً هي Server Components.
            </li>
            <li>
              <strong>❌ استخدام بادئة env خاطئة:</strong>
              <br />
              محاولة قراءة متغير بيئة من المتصفح بدون بادئة <code>NEXT_PUBLIC_</code>. المتغير سيكون <code>undefined</code>.
            </li>
            <li>
              <strong>❌ عدم تشغيل <code>npm run dev</code>:</strong>
              <br />
              محاولة فتح الملفات مباشرة من نظام الملفات (file://) بدلاً من تشغيل السيرفر المحلي (http://localhost:3000).
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li>
              <strong>✅ استخدم TypeScript دائماً:</strong>
              <br />
              TypeScript يكتشف الأخطاء قبل التشغيل ويُحسّن تجربة التطوير.
            </li>
            <li>
              <strong>✅ استخدم App Router وليس Pages Router:</strong>
              <br />
              App Router هو المستقبل ويدعم كل ميزات Next.js 16 الحديثة مثل Server Components و Streaming.
            </li>
            <li>
              <strong>✅ احتفظ بالمنطق الحساس على الخادم:</strong>
              <br />
              مفاتيح API، اتصالات قاعدة البيانات، وأي كود حساس يجب أن يكون في Server Components فقط.
            </li>
            <li>
              <strong>✅ استخدم <code>.env.local</code> للمتغيرات السرية:</strong>
              <br />
              هذا الملف مدرج في <code>.gitignore</code> افتراضياً ولا يرفع إلى GitHub.
            </li>
            <li>
              <strong>✅ اقرأ دليل الترقية:</strong>
              <br />
              عند الترقية من إصدار أقدم، راجع دليل الترقية الرسمي لتجنب مشاكل التوافق.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>Next.js</strong> هو إطار عمل مبني على React من Vercel.</li>
              <li>يحل مشاكل الـ SPA مثل <strong>SEO الضعيف</strong> و <strong>التحميل البطيء</strong>.</li>
              <li><strong>Next.js 16</strong> يجلب Turbopack، Cache Components، React Compiler، Proxy، و PPR.</li>
              <li>أنشئ مشروعك بـ <code>npx create-next-app@latest</code>.</li>
              <li>استخدم <strong>App Router</strong> مع هيكل <code>app/</code> للتوجيه التلقائي.</li>
              <li><strong>Turbopack</strong> هو الـ bundler الافتراضي الأسرع 5x.</li>
              <li>استخدم <code>NEXT_PUBLIC_</code> للمتغيرات التي تظهر في المتصفح.</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو Next.js؟"
          options={[
            "مكتبة CSS لتصميم الواجهات",
            "إطار عمل مبني على React من Vercel",
            "نظام إدارة قواعد البيانات",
            "لغة برمجة جديدة",
          ]}
          correctAnswer={1}
          explanation="Next.js هو إطار عمل (Framework) مبني على React، تم تطويره بواسطة Vercel، ويوفر حلولاً متقدمة مثل SSR، SSG، وFile-based Routing."
        />

        <Quiz
          question="ما المشكلة الرئيسية التي يحلها Next.js في تطبيقات React العادية (SPA)؟"
          options={[
            "بطء تحرير الكود",
            "صعوبة تعلم React",
            "ضعف SEO وبطء التحميل الأولي",
            "عدم دعم TypeScript",
          ]}
          correctAnswer={2}
          explanation="تطبيقات SPA تُرسل JavaScript ضخم للمتصفح مما يُسبب تحميلاً أولياً بطيئاً وSEO ضعيفاً. Next.js يحل هذا بـ SSR و SSG."
        />

        <Quiz
          question="ما هو الـ bundler الافتراضي في Next.js 16؟"
          options={[
            "Webpack",
            "Parcel",
            "Turbopack",
            "Rollup",
          ]}
          correctAnswer={2}
          explanation="Turbopack أصبح الـ bundler الافتراضي في Next.js 16، وهو أسرع 2-5 مرات من Webpack ولا يحتاج إلى إعداد."
        />

        <Quiz
          question="إذا أردت الوصول لمتغير بيئة في المتصفح (Client-side)، ماذا يجب أن تفعل؟"
          options={[
            "أضف المتغير إلى ملف package.json",
            "استخدم البادئة NEXT_PUBLIC_ قبل اسم المتغير",
            "استخدم getServerSideProps لجلب المتغير",
            "لا يمكن الوصول لمتغيرات البيئة من المتصفح",
          ]}
          correctAnswer={1}
          explanation="أي متغير يبدأ بـ NEXT_PUBLIC_ يكون متاحاً في المتصفح. المتغيرات بدون هذه البادئة تكون متاحة فقط على الخادم."
        />

        <Quiz
          question="أي من هذه الملفات ليس جزءاً من هيكل app/ في Next.js؟"
          options={[
            "layout.js",
            "page.js",
            "server.js",
            "loading.js",
          ]}
          correctAnswer={2}
          explanation="الملفات القياسية في app/ هي: layout.js، page.js، loading.js، error.js، not-found.js، و template.js. server.js ليس ملفاً قياسياً في App Router."
        />

        {/* ========================================== */}
        {/* القسم الرابع عشر: تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: إنشاء أول مشروع Next.js"
          description={
            <div>
              <p>اتبع هذه الخطوات لإنشاء أول مشروع Next.js 16:</p>
              <ol className="list-decimal pr-6 space-y-2 mt-2">
                <li>شغّل الأمر <code>npx create-next-app@latest</code> في أي مجلد.</li>
                <li>اسم المشروع: <code>first-nextjs-app</code>.</li>
                <li>اختر <strong>Yes</strong> لكل الخيارات (TypeScript، ESLint، Tailwind، App Router).</li>
                <li>ادخل إلى المجلد وشغّل <code>npm run dev</code>.</li>
                <li>افتح <code>http://localhost:3000</code> في المتصفح.</li>
                <li>عدّل ملف <code>app/page.js</code> لترى <code>مرحباً من Next.js 16!</code></li>
              </ol>
            </div>
          }
        >
          <CodeBlock
            language="jsx"
            code={`// app/page.js - بعد التعديل
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>مرحباً من Next.js 16!</h1>
      <p>هذا أول مشروع Next.js لي 🎉</p>
    </main>
  );
}

// شغّل:
// npm run dev
// ثم افتح: http://localhost:3000`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* القسم الخامس عشر: Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص Next.js - الدرس الأول">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>أوامر أساسية:</p>
              <ul className="text-sm space-y-1">
                <li><code className="inline-code">npx create-next-app@latest</code> - إنشاء مشروع</li>
                <li><code className="inline-code">npm run dev</code> - تشغيل وضع التطوير</li>
                <li><code className="inline-code">npm run build</code> - بناء نسخة الإنتاج</li>
                <li><code className="inline-code">npm run start</code> - تشغيل الإنتاج</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>هيكل app/ الأساسي:</p>
              <CodeBlock
                language="bash"
                code={`app/
├── layout.js     # تخطيط رئيسي
├── page.js       # صفحة /
├── loading.js    # حالة التحميل
├── error.js      # معالجة الأخطاء
└── not-found.js  # صفحة 404`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>متغيرات البيئة:</p>
              <ul className="text-sm space-y-1">
                <li><code className="inline-code">.env</code> - عام</li>
                <li><code className="inline-code">.env.local</code> - محلي (سري)</li>
                <li><code className="inline-code">NEXT_PUBLIC_</code> بادئة للـ Client</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>ما الجديد في 16:</p>
              <ul className="text-sm space-y-1">
                <li>Turbopack افتراضي - أسرع 5x</li>
                <li>Cache Components - "use cache"</li>
                <li>React Compiler مستقر</li>
                <li>Proxy بدلاً من Middleware</li>
              </ul>
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* التنقل بين الدروس */}
        {/* ========================================== */}
        <LessonNavigation
          prevLesson={lessonInfo.prevLesson}
          prevStage={lessonInfo.prevLessonStage}
          nextLesson={lessonInfo.nextLesson}
          nextStage={lessonInfo.nextLessonStage}
        />
      </div>
    </div>
  );
}