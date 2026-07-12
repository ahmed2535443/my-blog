import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function WhatIsTailwind() {
  const lesson = getLessonBySlug("tailwind", "01-what-is-tailwind");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ======================== Section 1 ======================== */}
        <LessonSection id="what-is-tailwind" title="ما هو Tailwind CSS؟">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <strong>Tailwind CSS</strong> هو إطار عمل CSS من نوع
            &quot;Utility-First&quot; — أي أنه يوفّر لك مجموعة من الفئات
            (Classes) الصغيرة الجاهزة يمكنك دمجها مباشرة في عناصر HTML لتصميم
            واجهات المستخدم بسرعة وكفاءة.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">
              حقائق سريعة عن Tailwind CSS
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>المبتكر:</strong> Adam Wathan — تم إصداره كمشروع مفتوح
                المصدر (Open Source).
              </li>
              <li>
                <strong>الإصدار الحالي:</strong> v4 — الإصدار الذي يعتمد على
                التكوين CSS-First بدلاً من ملفات JavaScript التقليدية.
              </li>
              <li>
                <strong>الفلسفة:</strong> Utility-First — فئات صغيرة مخصصة لكل
                خاصية CSS بدلاً من كتابة فئات مخصصة مسبقة التسمية.
              </li>
              <li>
                <strong>الشعبية:</strong> يُعدّ من أكثر أطر CSS استخداماً في
                المشاريع الحديثة (React, Next.js, Vue, وغيرها).
              </li>
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            في الإصدار الرابع (v4)، لم يعد Tailwind يحتاج إلى ملف{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
              tailwind.config.js
            </code>{" "}
            تقليدي. بدلًا من ذلك، يمكنك تكوين الإطار مباشرة من ملف CSS باستخدام
            المُعامل <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">@theme</code>:
          </p>

          <CodeBlock
            language="css"
            code={`/* ملف CSS الرئيسي في Tailwind v4 */
@import "tailwindcss";

@theme {
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  --font-family-display: "Cairo", sans-serif;
}

/* استخدام الفئات في HTML */
/* class="bg-primary text-white font-display" */`}
          />

          <p className="text-gray-700 dark:text-gray-300 mt-4">
            هذا يعني أن كل ما تحتاجه هو ملف CSS واحد لا يحتاج إلى معالجة
            JavaScript — أسرع وأبسط من أي وقت مضى.
          </p>
        </LessonSection>

        {/* ======================== Section 2 ======================== */}
        <LessonSection id="why-utility-first" title="لماذا Utility-First؟">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            لفهم لماذا اختار مطوّرو Tailwind نموذج &quot;Utility-First&quot;،
            دعنا نرى المشكلة التي يواجهها المطوّرون بالطريقة التقليدية:
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            المشكلة مع CSS التقليدي
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            في المشاريع الكبيرة، يصبح ملف CSS شبه مستحيل الإدارة. إليك
            مثالاً واقعياً:
          </p>

          <CodeBlock
            language="css"
            code={`/* CSS تقليدي — بعد شهور من التطوير */

.card { ... }
.card-large { ... }
.card-large-with-image { ... }
.card-small { ... }
.card-small-with-border { ... }
.card-featured { ... }
.card-featured-with-shadow { ... }
.card-featured-with-shadow-large { ... }
.card-featured-with-shadow-large-hover { ... }

/* مئات الفئات المتشابهة... */
/* كم منها تُستخدم فعلياً؟ لا أحد يعرف! */`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            الحل: Tailwind CSS
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            بدلاً من اختراع فئات مخصصة جديدة، تستخدم فئات Tailwind الجاهزة
            مباشرة في HTML:
          </p>

          <CodeBlock
            language="jsx"
            code={`<!-- الطريقة التقليديّة -->
<div className="card card-featured-with-shadow-large">
  <img src="..." className="card-image" />
  <h3 className="card-title">عنوان</h3>
</div>

<!-- الطريقة مع Tailwind -->
<div className="rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-shadow">
  <img src="..." className="w-full h-48 object-cover rounded-lg mb-4" />
  <h3 className="text-xl font-bold text-gray-900">عنوان</h3>
</div>`}
          />

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mt-6">
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">
              ملاحظة مهمة
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              قد يبدو الكود أطول قليلاً في HTML، لكن الفائدة هي أنك لا تحتاج
              أبدًا إلى فتح ملف CSS وإنشاء فئة جديدة وانتظار البناء. كل ما
              تحتاجه موجود أمامك مباشرة — وعند البناء لإنتاج، Tailwind يحذف
              الفئات غير المستخدمة تلقائيًا.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            مقارنة شاملة
          </h3>
          <CodeBlock
            language="jsx"
            code={`// ✅ الطريقة التقليدية: كود JSX مع CSS مخصص
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img src={product.image} className="product-card-image" />
        {product.isNew && <span className="product-badge">جديد</span>}
      </div>
      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-price">{product.price} ر.س</p>
        <button className="product-card-btn">أضف للسلة</button>
      </div>
    </div>
  );
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// ✅ الطريقة مع Tailwind: لا ملف CSS مطلوب
function ProductCard({ product }) {
  return (
    <div className="rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={product.image} className="w-full h-56 object-cover" />
        {product.isNew && (
          <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            جديد
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-indigo-600 font-semibold text-xl mb-4">{product.price} ر.س</p>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
          أضف للسلة
        </button>
      </div>
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ======================== Section 3 ======================== */}
        <LessonSection id="problems-solved" title="المشكلة التي يحلها Tailwind">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            يحل Tailwind CSS عدة مشاكل أساسية واجهها المطوّرون لسنوات:
          </p>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                1. لا تبديل السياق (No Context Switching)
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                مع CSS التقليدي، كنت تنقّل باستمرار بين ملف HTML/JSX وملف CSS.
                مع Tailwind، كل التصميم موجود في ملف واحد — ملف المكوّن
                (Component) نفسه.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                2. لا CSS ميت (No Dead CSS)
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                خطوات البناء (Build Step) في Tailwind تفحص ملفاتك وتولّد فقط
                الفئات التي تستخدمها فعليًا. النتيجة: ملف CSS إنتاجي صغير جدًا
                (Tree-Shaking).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                3. نظام تصميم متسق (Consistent Design System)
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Tailwind يأتي مع نظام تصميم مبني مسبقاً: ألوان متناسقة،
                مسافات متناسقة، أحجام خطوط متناسقة. لا حاجة لاختيار قيم
                عشوائية — الأنظمة محددة مسبقاً.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                4. تصميم متجاوب بدون تعقيد (Responsive Without Complexity)
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                لا حاجة لكتابة Media Queries في ملف منفصل. فقط أضف البادئة
                المناسبة أمام الفئة:
              </p>
              <CodeBlock
                language="jsx"
                code={`<!-- عرض افتراضي: عمودي، من التابلت+: أفقي -->
<div className="flex flex-col md:flex-row gap-4">
  <div className="w-full md:w-1/3">الشريط الجانبي</div>
  <div className="w-full md:w-2/3">المحتوى الرئيسي</div>
</div>`}
              />
            </div>
          </div>
        </LessonSection>

        {/* ======================== Section 4 ======================== */}
        <LessonSection id="how-it-works" title="كيف يعمل Tailwind تحت الكواليس">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            فهم آلية عمل Tailwind يساعدك على استخدامه بشكل أفضل. إليك ما يحدث
            خلف الكواليس:
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            1. JIT Compiler (ال Compiler اللحظي)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Tailwind v4 يستخدم محركًا اسمه{" "}
            <strong>JIT (Just-In-Time)</strong> — أي أنه يولّد CSS &quot;لحظة
            الطلب&quot; بدلاً من توليد كل الفئات الممكنة مسبقاً.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                <p className="font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  ملفات المصدر
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  HTML / JSX / Vue
                </p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                <p className="font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  ماسح Tailwind
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  يفحص الفئات المستخدمة
                </p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                <p className="font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  CSS مُولّد
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  فقط الفئات المستخدمة
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            2. لا ملف تكوين مطلوب في v4
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            في الإصدارات السابقة، كنت تحتاج إلى إنشاء ملف{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
              tailwind.config.js
            </code>
            . في v4، كل شيء في ملف CSS الرئيسي:
          </p>

          <CodeBlock
            language="css"
            code={`/* ملف CSS واحد فقط! */
@import "tailwindcss";

/* تخصيص الألوان */
@theme {
  --color-brand: #6366f1;
  --color-brand-light: #a5b4fc;
}

/* إضافة خطوط مخصصة */
@theme {
  --font-family-arabic: "Noto Kufi Arabic", sans-serif;
}`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            3. Tree-Shaking = CSS صغير جدًا
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Tailwind v4 يحذف جميع الفئات غير المستخدمة تلقائيًا. مثال:
          </p>

          <CodeBlock
            language="jsx"
            code={`// إذا كنت تستخدم فقط:
<div className="bg-blue-500 text-white p-4">

//Tailwind سيولّد فقط:
.bg-blue-500 { background-color: #3b82f6; }
.text-white { color: #fff; }
.p-4 { padding: 1rem; }

// ولن يُنشئ أي فئة أخرى من مئات الفئات المتاحة!`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            4. كيف تُرجم الفئات إلى CSS
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            كل فئة في Tailwind تتبع نمطاً واضحاً يمكن توقعه:
          </p>

          <CodeBlock
            language="text"
            code={`النمط:   [بادئة]-[قيمة]
مثال:   p-4      → padding: 1rem
مثال:   m-8      → margin: 2rem
مثال:   text-lg  → font-size: 1.125rem
مثال:   bg-red-500 → background-color: #ef4444
مثال:   rounded-lg → border-radius: 0.5rem
مثال:   shadow-md → box-shadow: ...(mitte-sized shadow)`}
          />
        </LessonSection>

        {/* ======================== Section 5 ======================== */}
        <LessonSection id="simple-example" title="مثال بسيط — بطاقة بـ Tailwind">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            لنقم بإنشاء بطاقة بسيطة باستخدام Tailwind فقط. لنلاحظ كيف نجمع
            الفئات للحصول على تصميم احترافي:
          </p>

          <CodeBlock
            language="jsx"
            code={`function SimpleCard() {
  return (
    <div className="max-w-sm rounded-2xl bg-white shadow-lg overflow-hidden">
      {/* صورة البطاقة */}
      <img
        src="/photo.jpg"
        alt="صورة توضيحية"
        className="w-full h-48 object-cover"
      />

      {/* محتوى البطاقة */}
      <div className="p-6">
        {/* العنوان */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          عنوان البطاقة
        </h2>

        {/* الوصف */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          هذا نص توضيحي يصف محتوى البطاقة. يمكنك كتابة أي نص هنا.
        </p>

        {/* التوسيط السفلي */}
        <div className="flex items-center justify-between">
          <span className="text-indigo-600 font-semibold">199 ر.س</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
}`}
          />

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mt-6">
            <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">
              ماذا فعلنا هنا؟
            </h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded">rounded-2xl</code> —
                زوايا مستديرة كبيرة
              </li>
              <li>
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded">shadow-lg</code> —
                ظل واضح
              </li>
              <li>
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded">overflow-hidden</code> —
                إخفاء المحتوى الزائد
              </li>
              <li>
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded">object-cover</code> —
                الصورة تملأ المساحة
              </li>
              <li>
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded">hover:bg-indigo-700</code> —
                تأثير عند التمرير
              </li>
              <li>
                <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded">transition-colors</code> —
                انتقال سلس للألوان
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ======================== Section 6 ======================== */}
        <LessonSection id="landing-page-example" title="مثال عملي — صفحة هبوط مصغرة">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            لنقم بإنشاء قسم بسيط من صفحة هبوط (Landing Page) يتضمن قسم البطل
            (Hero Section) وقسم الميزات:
          </p>

          <CodeBlock
            language="jsx"
            code={`function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500">
      {/* ===== قسم البطل (Hero) ===== */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          ابدأ رحلتك في البرمجة
        </h1>
        <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          تعلم البرمجة بأسلوب عملي وممتع مع مشاريع حقيقية
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-indigo-50 transition-colors shadow-xl">
            ابدأ مجاناً
          </button>
          <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors">
            شاهد الدورة
          </button>
        </div>
      </section>

      {/* ===== قسم الميزات ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-white mb-14">
          لماذا تختار منصتنا؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ميزة 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">محتوى عملي</h3>
            <p className="text-indigo-100 leading-relaxed">
              كل درس يتضمن مشاريع حقيقية تطبق ما تعلمته مباشرة
            </p>
          </div>

          {/* ميزة 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">مسار واضح</h3>
            <p className="text-indigo-100 leading-relaxed">
              من الصفر إلى الاحتراف في مسار منظم ومُخطّط
            </p>
          </div>

          {/* ميزة 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3">مجتمع داعم</h3>
            <p className="text-indigo-100 leading-relaxed">
              انضم لمجتمع يضم آلاف المبرمجين العرب النشطين
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}`}
          />

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mt-6">
            <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
              ملاحظات عن التصميم
            </h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code className="bg-purple-100 dark:bg-purple-800/50 px-1 rounded">md:text-6xl</code> —
                حجم خط أكبر على الشاشات المتوسطة والمتوسطة فما فوق
              </li>
              <li>
                <code className="bg-purple-100 dark:bg-purple-800/50 px-1 rounded">grid-cols-1 md:grid-cols-3</code> —
                عمود واحد على الجوال، ثلاثة على الشاشات الأكبر
              </li>
              <li>
                <code className="bg-purple-100 dark:bg-purple-800/50 px-1 rounded">backdrop-blur-sm</code> —
                تأثير ضبابية خفيفة للخلفية
              </li>
              <li>
                <code className="bg-purple-100 dark:bg-purple-800/50 px-1 rounded">from-indigo-500 via-purple-600 to-pink-500</code> —
                تدرج لوني متعدد الألوان
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ======================== Section 7 ======================== */}
        <LessonSection id="generated-css" title="ماذا يحدث خلف الكواليس">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            قد تتساءل: ماذا يحدث فعلياً عندما تكتب{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
              className=&quot;p-4 bg-blue-500&quot;
            </code>
            ؟ إليك ما يولّده Tailwind فعلياً في ملف CSS النهائي:
          </p>

          <CodeBlock
            language="css"
            code={`/* ماذا يولّده Tailwind لـ: p-4 */
.p-4 {
  padding: 1rem; /* 16px */
}

/* ماذا يولّده Tailwind لـ: bg-blue-500 */
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

/* ماذا يولّده Tailwind لـ: text-white */
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

/* ماذا يولّده Tailwind لـ: rounded-lg */
.rounded-lg {
  border-radius: 0.5rem; /* 8px */
}

/* ماذا يولّده Tailwind لـ: shadow-md */
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

/* ماذا يولّده Tailwind لـ: hover:bg-blue-600 */
.hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

/* ماذا يولّده Tailwind لـ: transition-colors */
.transition-colors {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, --tw-gradient-from,
    --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}`}
          />

          <p className="text-gray-700 dark:text-gray-300 mt-6 mb-4">
            يمكنك أيضاً رؤية هذا في المتصفح مباشرة. افتح{" "}
            <strong>DevTools</strong> وانتقل إلى علامة التبويب{" "}
            <strong>Computed</strong> لرؤية القيم الفعلية المُطبّقة.
          </p>

          <CodeBlock
            language="text"
            code={`mapping: فئة Tailwind  →  الخاصية CSS

p-4                   →  padding: 1rem
m-8                   →  margin: 2rem
mx-auto               →  margin-left: auto; margin-right: auto
flex                  →  display: flex
items-center          →  align-items: center
justify-between       →  justify-content: space-between
w-full                →  width: 100%
h-48                  →  height: 12rem (192px)
text-lg               →  font-size: 1.125rem; line-height: 1.75rem
font-bold             →  font-weight: 700
text-gray-700         →  color: #374151
bg-white              →  background-color: #fff
border                →  border-width: 1px
rounded-xl            →  border-radius: 0.75rem
shadow-lg             →  box-shadow: (large shadow)`}
          />
        </LessonSection>

        {/* ======================== Section 8 ======================== */}
        <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            عند التعلم على Tailwind، يقع المبتدئون في عدة أخطاء شائعة. إليك
            أهمها وكيف تتجنبها:
          </p>

          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                خطأ 1: خلط Tailwind مع CSS مخصص بشكل مفرط
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                الكارثة الأكبر هي إنشاء ملف CSS بفئات مخصصة ودمجها مع Tailwind.
                هذا يخلق صراعات ويجعل الكود صعباً للصيانة.
              </p>
              <CodeBlock
                language="css"
                code={`/* ❌ لا تفعل هذا */
.btn-primary {
  background-color: #6366f1;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
}

/* ✅ بدلاً من ذلك، استخدم Tailwind مباشرة */
/* className="bg-indigo-600 text-white px-4 py-2 rounded-lg" */`}
              />
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                خطأ 2: الإفراط في استخدام @apply
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                محرّك <code className="bg-red-100 dark:bg-red-800/50 px-1 rounded">@apply</code> هو{" "}
                <strong>مخرج احترازي (Escape Hatch)</strong> وليس الطريقة
                الافتراضية. استخدامه بكثرة يُبطل فائدة Tailwind.
              </p>
              <CodeBlock
                language="css"
                code={`/* ❌ لا تفعل هذا بشكل مفرط */
.btn {
  @apply bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium;
  @apply hover:bg-indigo-700 transition-colors;
}

/* ✅ استخدمه فقط عند الحاجة الحقيقية — كالمكونات المُعاد تدويرها */`}
              />
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                خطأ 3: عدم تعلم نمط التسمية
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                فئات Tailwind تتبع نمطاً ثابتاً. إذا حفظت النمط، يمكنك توقع
                أي فئة حتى لو لم تستخدمها من قبل.
              </p>
              <CodeBlock
                language="text"
                code={`النمط: [بادئة]-[القيمة]

p-4   = padding: 1rem    (p = padding، 4 = 4 × 0.25rem)
p-8   = padding: 2rem    (8 = 8 × 0.25rem)
m-4   = margin: 1rem     (m = margin)
mx-4  = margin-left/right: 1rem  (x = محور أفقي)
my-4  = margin-top/bottom: 1rem  (y = محور رأسي)

text-lg   = font-size: large
text-xl   = font-size: extra-large
font-bold = font-weight: 700

bg-blue-500 = خلفية زرقاء (المستوى 500 من لوحة ألوان Tailwind)
text-blue-500 = نص أزرق (نفس النظام)`}
              />
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                خطأ 4: نسيان الاستجابة (Responsive)
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Tailwind يبدأ من الشاشات الصغيرة (Mobile-First). البادئات مثل{" "}
                <code className="bg-red-100 dark:bg-red-800/50 px-1 rounded">md:</code> و{" "}
                <code className="bg-red-100 dark:bg-red-800/50 px-1 rounded">lg:</code> تُضاف لتطبيق
                الأنماط على الشاشات الأكبر.
              </p>
              <CodeBlock
                language="jsx"
                code={`<!-- ❌ ليس متجاوباً — نفس الحجم على كل الشاشات -->
<h1 className="text-4xl font-bold">عنوان</h1>

<!-- ✅ متجاوب — صغير على الجوال، كبير على الديسكتوب -->
<h1 className="text-2xl md:text-4xl font-bold">عنوان</h1>`}
              />
            </div>
          </div>
        </LessonSection>

        {/* ======================== Section 9 ======================== */}
        <LessonSection id="best-practices" title="أفضل الممارسات">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            اتبع هذه الممارسات للحصول على أفضل تجربة مع Tailwind CSS:
          </p>

          <div className="space-y-4">
            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  استخدم Tailwind بشكل حصري
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  لا تكتب CSS مخصصاً إلا عند الضرورة القصوى. كلما التزمت بـ
                  Tailwind، كانت النتيجة أفضل وأكثر قابلية للصيانة.
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  ثبّت امتداد Tailwind CSS IntelliSense
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  امتداد VS Code هذا يوفر إكمالاً تلقائياً ذكياً، معاينة الألوان،
                  والتنقل السريع بين الفئات. ضروري للإنتاجية.
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  اجعل className مصدراً وحيداً للحقيقة
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  جميع الأنماط يجب أن تكون في className مباشرة. لا ملفات CSS
                  منفصلة، لا عناصر style inline، لا أشياء مختلطة.
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  استخدم clsx أو cva لل условий المعقدة
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  عند الحاجة لدمج فئات بشكل شرطي، استخدم مكتبة{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">clsx</code>{" "}
                  لتنظيم الكود:
                </p>
                <CodeBlock
                  language="jsx"
                  code={`import clsx from "clsx";

<button
  className={clsx(
    "px-4 py-2 rounded-lg font-medium transition-colors",
    isActive
      ? "bg-indigo-600 text-white"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
  )}
>
  اضغط هنا
</button>`}
                />
              </div>
            </div>

            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  استخدم Prettier Plugin لـ Tailwind
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  يُرتّب فئات Tailwind تلقائياً حسب الترتيب القياسي. يحسن
                  القراءة ويقلل النزاعات في Git.
                </p>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* ======================== Section 10 ======================== */}
        <LessonSection id="summary" title="ملخص + تدريب عملي">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            في هذه الدرس تعلّمنا:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-8">
            <li>
              Tailwind CSS هو إطار عمل من نوع Utility-First
            </li>
            <li>
              يحل مشاكل CSS التقليدي (CSS ميت، صراعات الأسبقية، غياب التصميم
              المتسق)
            </li>
            <li>
              v4 يستخدم CSS-First Configuration بدون ملف JS
            </li>
            <li>
              JIT Compiler يولّد فقط الفئات المستخدمة
            </li>
            <li>
              الفئات تتبع نمطاً واضحاً يمكن توقعه وحفظه بسهولة
            </li>
          </ul>

          {/* ===== Quiz ===== */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              اختبر فهمك
            </h3>
            <div className="space-y-6">
              <Quiz
                question={`ما هو النوع الأساسي لـ Tailwind CSS؟`}
                options={[
                  "Component-based CSS framework",
                  "Utility-first CSS framework",
                  "JavaScript CSS-in-JS library",
                  "Preprocessor like Sass",
                ]}
                correctAnswer={1}
                explanation={`Tailwind CSS هو إطار عمل من نوع Utility-First — يوفر فئات صغيرة جاهزة يمكنك دمجها مباشرة في HTML لتصميم واجهات المستخدم.`}
              />

              <Quiz
                question={`ما هو التغيير الأكبر في Tailwind v4 مقارنة بالإصدارات السابقة؟`}
                options={[
                  "إضافة دعم TypeScript",
                  "التحول إلى CSS-First Configuration بدلاً من ملف tailwind.config.js",
                  "إزالة JIT Compiler",
                  "إضافة نظام مكونات جاهزة",
                ]}
                correctAnswer={1}
                explanation={`في Tailwind v4، تم التخلص من ملف tailwind.config.js واستبداله بتكوين CSS مباشر باستخدام @theme في ملف CSS الرئيسي. هذا يجعل الإعداد أبسط وأسرع.`}
              />

              <Quiz
                question={`ماذا يفعل JIT Compiler في Tailwind؟`}
                options={[
                  "يولّد كل الفئات الممكنة مسبقاً ثم يحذف غير المستخدمة",
                  "يولّد CSS فقط للفئات المستخدمة فعلياً في ملفات المصدر",
                  "يترجم كود JavaScript إلى CSS",
                  "يقوم بتحسين ملفات الصور",
                ]}
                correctAnswer={1}
                explanation={`JIT (Just-In-Time) Compiler يفحص ملفات HTML/JSX ويولّد فقط الفئات المستخدمة فعلياً. هذا يجعل ملف CSS النهائي صغيراً جداً بسبب Tree-Shaking.`}
              />

              <Quiz
                question={`ما هو النمط الصحيح لكتابة فئة Tailwind للحصول على padding بحجم 2rem؟`}
                options={[
                  "padding-8",
                  "p-8",
                  "pad-2",
                  "spacing-2",
                ]}
                correctAnswer={1}
                explanation={`في Tailwind، P = padding و 8 = 8 × 0.25rem = 2rem. النمط هو [بادئة]-[قيمة] حيث القيمة تُضرب في 0.25rem.`}
              />
            </div>
          </div>

          {/* ===== Challenge ===== */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              تحدّي عملي
            </h3>
            <Challenge
              title="أنشئ بطاقة ملف شخصي (Profile Card)"
              description={`أنشئ مكوّن React يعرض ملفاً شخصياً باستخدام Tailwind CSS فقط (بدون أي CSS مخصص). يجب أن تتضمن البطاقة:

- صورة دائرية (Avatar)
- اسم المستخدم
- الوصف (Bio)
- زر "متابعة"
- تأثير hover عند التمرير على البطاقة
- تصميم متجاوب (عمودي على الجوال، أفقي على الشاشات الكبيرة)

لا تستخدم أي ملف CSS إضافي — كل شيء في className.`}
            >
              <CodeBlock
                language="jsx"
                code={`// الحل المقترح — بطاقة ملف شخصي

function ProfileCard() {
  return (
    <div className="
      flex flex-col md:flex-row items-center gap-6
      bg-white dark:bg-gray-800
      rounded-2xl shadow-lg p-6
      hover:shadow-xl hover:scale-[1.02]
      transition-all duration-300
      max-w-md md:max-w-lg mx-auto
    ">
      {/* الصورة الدائرية */}
      <img
        src="/avatar.jpg"
        alt="صورة المستخدم"
        className="
          w-24 h-24 rounded-full object-cover
          border-4 border-indigo-500
        "
      />

      {/* المعلومات */}
      <div className="text-center md:text-right">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          أحمد محمد
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
          مطور واجهات أمامية | عاشق لـ Tailwind CSS
        </p>
        <button className="
          bg-indigo-600 hover:bg-indigo-700
          text-white font-medium
          px-6 py-2 rounded-full
          transition-colors duration-200
          text-sm
        ">
          متابعة
        </button>
      </div>
    </div>
  );
}`}
              />
            </Challenge>
          </div>

          {/* ===== CheatSheet ===== */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              مرجع سريع (Cheat Sheet)
            </h3>
            <CheatSheet title="Tailwind CSS — المرجع السريع">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                التخطيط (Layout)
              </h3>
              <CodeBlock
                language="text"
                code={`flex               → display: flex
grid               → display: grid
hidden             → display: none
block              → display: block
inline-block       → display: inline-block

items-center       → align-items: center
items-start        → align-items: flex-start
items-end          → align-items: flex-end

justify-center     → justify-content: center
justify-between    → justify-content: space-between
justify-start      → justify-content: flex-start
justify-end        → justify-content: flex-end

flex-col           → flex-direction: column
flex-row           → flex-direction: row
flex-wrap          → flex-wrap: wrap

gap-4              → gap: 1rem
gap-2              → gap: 0.5rem
gap-8              → gap: 2rem`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                المسافات (Spacing)
              </h3>
              <CodeBlock
                language="text"
                code={`p-1 = 0.25rem (4px)     p-2 = 0.5rem (8px)
p-3 = 0.75rem (12px)    p-4 = 1rem (16px)
p-5 = 1.25rem (20px)    p-6 = 1.5rem (24px)
p-8 = 2rem (32px)       p-10 = 2.5rem (40px)

px-4 = padding-left & right: 1rem
py-4 = padding-top & bottom: 1rem

m-4 = margin: 1rem
mx-auto = margin-left & right: auto  (للتوسيط)
mx-4 = margin-left & right: 1rem
my-4 = margin-top & bottom: 1rem

mt-4 = margin-top: 1rem
mb-4 = margin-bottom: 1rem
ml-auto = margin-left: auto
mr-auto = margin-right: auto`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                الألوان (Colors)
              </h3>
              <CodeBlock
                language="text"
                code={`bg-white            → background-color: #fff
bg-black            → background-color: #000
bg-gray-100         → background-color: #f3f4f6
bg-gray-900         → background-color: #111827

bg-red-500          → background-color: #ef4444
bg-blue-500         → background-color: #3b82f6
bg-green-500        → background-color: #22c55e
bg-indigo-600       → background-color: #4f46e5
bg-yellow-400       → background-color: #facc15

text-white          → color: #fff
text-gray-500       → color: #6b7280
text-gray-900       → color: #111827
text-red-500        → color: #ef4444
text-blue-600       → color: #2563eb
text-indigo-600     → color: #4f46e5

border-gray-200     → border-color: #e5e7eb`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                الخطوط (Typography)
              </h3>
              <CodeBlock
                language="text"
                code={`text-xs        → font-size: 0.75rem (12px)
text-sm        → font-size: 0.875rem (14px)
text-base      → font-size: 1rem (16px)
text-lg        → font-size: 1.125rem (18px)
text-xl        → font-size: 1.25rem (20px)
text-2xl       → font-size: 1.5rem (24px)
text-3xl       → font-size: 1.875rem (30px)
text-4xl       → font-size: 2.25rem (36px)

font-normal    → font-weight: 400
font-medium    → font-weight: 500
font-semibold  → font-weight: 600
font-bold      → font-weight: 700

text-center    → text-align: center
text-right     → text-align: right
text-left      → text-align: left`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                الحدود والزوايا (Borders & Radius)
              </h3>
              <CodeBlock
                language="text"
                code={`border          → border-width: 1px
border-2        → border-width: 2px
border-0        → border-width: 0
border-dashed   → border-style: dashed

rounded         → border-radius: 0.25rem (4px)
rounded-md      → border-radius: 0.375rem (6px)
rounded-lg      → border-radius: 0.5rem (8px)
rounded-xl      → border-radius: 0.75rem (12px)
rounded-2xl     → border-radius: 1rem (16px)
rounded-full    → border-radius: 9999px (circle)`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                الأحجام والعرض (Sizing)
              </h3>
              <CodeBlock
                language="text"
                code={`w-full           → width: 100%
w-1/2            → width: 50%
w-1/3            → width: 33.333%
w-1/4            → width: 25%
w-auto           → width: auto
w-64             → width: 16rem (256px)

h-full           → height: 100%
h-auto           → height: auto
h-48             → height: 12rem (192px)
min-h-screen     → min-height: 100vh

max-w-sm         → max-width: 24rem (384px)
max-w-md         → max-width: 28rem (448px)
max-w-lg         → max-width: 32rem (512px)
max-w-xl         → max-width: 36rem (576px)
max-w-2xl        → max-width: 42rem (672px)
max-w-4xl        → max-width: 56rem (896px)

object-cover     → object-fit: cover
object-contain   → object-fit: contain`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                الاستجابة (Responsive)
              </h3>
              <CodeBlock
                language="text"
                code={`// Mobile-First: القيمة بدون بادئة = جميع الشاشات
// البادئات تُضاف للشاشات الأكبر

sm:    → min-width: 640px  (الهاتف الكبير)
md:    → min-width: 768px  (التابلت)
lg:    → min-width: 1024px (اللوحي/ديسكتوب صغير)
xl:    → min-width: 1280px (ديسكتوب)
2xl:   → min-width: 1536px (شاشة كبيرة)

مثال: text-sm md:text-lg
→ على الجوال: حجم صغير
→ على التابلت وما فوق: حجم كبير`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                التأثيرات والانتقالات (Effects)
              </h3>
              <CodeBlock
                language="text"
                code={`shadow-sm         → ظل صغير
shadow            → ظل متوسط
shadow-md         → ظل متوسط كبير
shadow-lg         → ظل كبير
shadow-xl         → ظل كبير جداً
shadow-2xl        → ظل ضخم

opacity-0         → شفافية 0%
opacity-50        → شفافية 50%
opacity-100       → شفافية 100%

transition         → transition: all 150ms ease
transition-colors  → transition: color, background-color...
transition-all     → transition: all
duration-300       → transition-duration: 300ms

hover:scale-105    → عند التمرير: تكبير خفيف
hover:shadow-xl    → عند التمرير: ظل أكبر
hover:bg-blue-600  → عند التمرير: تغيير اللون`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                البادئات الشرطية (Modifiers)
              </h3>
              <CodeBlock
                language="text"
                code={`hover:     → عند مرور الماوس
focus:     → عند التركيز (Tab/Click)
active:    → عند الضغط
disabled:  → عند التعطيل
first:     → العنصر الأول
last:      → العنصر الأخير
odd:       → العناصر الفردية
even:      → العناصر الزوجية

group:     → تطبيق تنسيقات على مجموعة عند التمرير على الأصل
peer:      → تطبيق تنسيقات على شريك ( sibling )`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                أمثلة سريعة جاهزة
              </h3>
              <CodeBlock
                language="text"
                code={`// زر أساسي
className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"

// بطاقة
className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"

// صورة دائرية
className="w-16 h-16 rounded-full object-cover"

// تدرج لوني
className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white"

// توسيط أفقي ورأسي
className="flex items-center justify-center min-h-screen"

// تأثير ضبابية للخلفية
className="bg-white/80 backdrop-blur-md"`}
              />
            </CheatSheet>
          </div>
        </LessonSection>

        {/* ======================== Navigation ======================== */}
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
