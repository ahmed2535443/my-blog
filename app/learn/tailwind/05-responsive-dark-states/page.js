import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ResponsiveDarkStates() {
  const lesson = getLessonBySlug("tailwind", "05-responsive-dark-states");

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
        <LessonSection id="responsive-design" title="التصميم المتجاوب (Responsive Design)">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            التصميم المتجاوب يعني أن موقعك يعمل بشكل مثالي على جميع أحجام الشاشات — من
            الهواتف الصغيرة إلى شاشات المراقبة الكبيرة. Tailwind CSS يجعل التصميم
            المتجاوب سهلاً للغاية باستخدام نظام البادئات (Prefixes).
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">
              Mobile-First Approach — الفلسفة الأساسية
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Tailwind يتبع نهج <strong>Mobile-First</strong> — أي أنك تصمم أولاً للشاشات
              الصغيرة ثم تضيف التعديلات للشاشات الأكبر. هذا يعني:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                الكود بدون بادئة يُطبّق على <strong>جميع الشاشات</strong> (بما فيها الجوال)
              </li>
              <li>
                البادئات مثل <code className="bg-blue-100 dark:bg-blue-800/50 px-1 rounded">sm:</code> و{" "}
                <code className="bg-blue-100 dark:bg-blue-800/50 px-1 rounded">md:</code> تُضيف أنماط إضافية{" "}
                <strong>للشاشات الأكبر فقط</strong>
              </li>
              <li>
                هذا يضمن أن تصميمك يعمل دائماً على الجوال أولاً
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            نقاط التوقف (Breakpoints)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            يوفر Tailwind خمس نقاط توقف رئيسية يمكنك استخدامها:
          </p>

          <CodeBlock
            language="text"
            code={`البادئة     الحد الأدنى للعرض     نوع الشاشة
─────────   ──────────────────    ─────────────────
(sm:)       640px                هاتف كبير
(md:)       768px                تابلت
(lg:)       1024px               لوحي / ديسكتوب صغير
(xl:)       1280px               ديسكتوب
(2xl:)      1536px               شاشة كبيرة جداً

المثال:
┌──────────────────────────────────────────────┐
│  base (بدون بادئة)                            │
│  يعمل على: كل الشاشات                         │
│                                               │
│  sm: 640px+  ────────────────────────────────│
│  يعمل على: 640px فما فوق                      │
│                                               │
│  md: 768px+  ────────────────────────────────│
│  يعمل على: 768px فما فوق                      │
│                                               │
│  lg: 1024px+ ────────────────────────────────│
│  يعمل على: 1024px فما فوق                     │
│                                               │
│  xl: 1280px+ ────────────────────────────────│
│  يعمل على: 1280px فما فوق                     │
│                                               │
│  2xl: 1536px+ ───────────────────────────────│
│  يعمل على: 1536px فما فوق                     │
└──────────────────────────────────────────────┘`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            كيف تعمل البادئات الاستجابة؟
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            البادئات الاستجابة يمكن إضافتها أمام <strong>أي فئة Tailwind</strong> — ليست مقتصرة
            على أحجام الخطوط أو المسافات فحسب:
          </p>

          <CodeBlock
            language="jsx"
            code={`<!-- تغيير حجم الخط: صغير على الجوال، كبير على md+ -->
<p className="text-sm md:text-lg">نص متجاوب</p>

<!-- تغيير المسافات: قليلة على الجوال، كثيرة على lg+ -->
<div className="p-2 lg:p-8">بطاقة</div>

<!-- إظهار/إخفاء العناصر -->
<div className="hidden md:block">يظهر فقط على التابلت+</div>
<div className="block md:hidden">يظهر فقط على الجوال</div>

<!-- تغيير التخطيط: عمودي على الجوال، أفقي على md+ -->
<div className="flex flex-col md:flex-row gap-4">
  <div>عمود 1</div>
  <div>عمール 2</div>
</div>

<!-- تغيير عدد الأعمدة -->
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>بطاقة 1</div>
  <div>بطاقة 2</div>
  <div>بطاقة 3</div>
</div>

<!-- تغيير الأبعاد -->
<img className="w-full md:w-1/2 lg:w-1/3" />`}
          />

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mt-6">
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">
              مثال عملي: شبكة بطاقات متجاوبة
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              إليك كيف تنشئ شبكة بطاقات تتغير من عمود واحد إلى ثلاثة أعمدة:
            </p>
            <CodeBlock
              language="jsx"
              code={`function ResponsiveCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* على الجوال: عمود واحد (100%) */}
      {/* على md: 768px+: عمودين */}
      {/* على lg: 1024px+: ثلاثة أعمدة */}

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold text-lg mb-2">بطاقة 1</h3>
        <p className="text-gray-600">محتوى البطاقة الأولى</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold text-lg mb-2">بطاقة 2</h3>
        <p className="text-gray-600">محتوى البطاقة الثانية</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold text-lg mb-2">بطاقة 3</h3>
        <p className="text-gray-600">محتوى البطاقة الثالثة</p>
      </div>
    </div>
  );
}`}
            />
          </div>
        </LessonSection>

        {/* ======================== Section 2 ======================== */}
        <LessonSection id="responsive-practical" title="أمثلة عملية على الاستجابة">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            لنر الآن أمثلة واقعية لكيفية استخدام التصميم المتجاوب في مشاريعك:
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            1. قائمة تنقل متجاوبة (Responsive Navigation)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            على الجوال تظهر كزر قائمة (Hamburger)، وعلى الشاشات الكبيرة تظهر كروابط كاملة:
          </p>

          <CodeBlock
            language="jsx"
            code={`function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          {/* الشعار */}
          <span className="text-xl font-bold text-indigo-600">
            منصتي
          </span>

          {/* قائمة الروابط - مخفية على الجوال، ظاهرة على md+ */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              الرئيسية
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              الدورات
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              من نحن
            </a>
            <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              تسجيل الدخول
            </a>
          </div>

          {/* زر القائمة - ظاهر على الجوال فقط، مخفي على md+ */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            2. طباعة متجاوبة (Responsive Typography)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            أحجام الخطوط تتغير تلقائياً حسب حجم الشاشة — أصغر على الجوال وأكبر على الديسكتوب:
          </p>

          <CodeBlock
            language="jsx"
            code={`function ResponsiveTypography() {
  return (
    <div className="p-4 md:p-8">
      {/* العنوان الرئيسي */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        عنوان رئيسي متجاوب
      </h1>

      {/* العنوان الفرعي */}
      <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6">
        عنوان فرعي أكبر تدريجياً
      </h2>

      {/* الفقرة */}
      <p className="text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed">
        هذا نص فقرة يبدأ بصغير على الجوال ويصبح أكبر تدريجياً
        مع زيادة حجم الشاشة.
      </p>
    </div>
  );
}`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            3. تخطيط متجاوب: من عمودي إلى جانبي
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            تغيير التخطيط من عمودي (Stack) إلى أفقي (Side by Side):
          </p>

          <CodeBlock
            language="jsx"
            code={`function ResponsiveLayout() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-8">
      {/* المحتوى الرئيسي */}
      <main className="flex-1">
        <h1 className="text-2xl font-bold mb-4">المحتوى الرئيسي</h1>
        <p className="text-gray-600">
          هذا المحتوى يأخذ العرض الكامل على الجوال،
          ويتقاسم المساحة مع الشريط الجانبي على الشاشات الكبيرة.
        </p>
      </main>

      {/* الشريط الجانبي */}
      <aside className="w-full lg:w-80 bg-gray-100 rounded-xl p-6">
        <h2 className="font-bold mb-3">الشريط الجانبي</h2>
        <p className="text-gray-600 text-sm">
          يظهر أسفل المحتوى على الجوال، وبجانبه على الديسكتوب.
        </p>
      </aside>
    </div>
  );
}`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            4. مسافات متجاوبة (Responsive Spacing)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            تقليل المسافات على الجوال وتزديدها على الشاشات الكبيرة:
          </p>

          <CodeBlock
            language="jsx"
            code={`function ResponsiveSpacing() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      {/* على الجوال: padding صغير (p-4 = 1rem) */}
      {/* على sm: 640px+: p-6 = 1.5rem */}
      {/* على md: 768px+: p-8 = 2rem */}
      {/* على lg: 1024px+: p-12 = 3rem */}
      {/* على xl: 1280px+: p-16 = 4rem */}

      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 lg:mb-12">
        قسم بمسافات متجاوبة
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
        <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm">
          <h3 className="font-bold text-lg mb-2">بطاقة 1</h3>
          <p className="text-gray-600 text-sm md:text-base">
            المسافات داخل البطاقة تتغير أيضاً
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm">
          <h3 className="font-bold text-lg mb-2">بطاقة 2</h3>
          <p className="text-gray-600 text-sm md:text-base">
            كل شيء يتناسب مع حجم الشاشة
          </p>
        </div>
      </div>
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ======================== Section 3 ======================== */}
        <LessonSection id="interactive-states" title="الحالات التفاعلية (Interactive States)">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            يوفر Tailwind بادئات للحالات المختلفة التي يمكن أن يكون فيها عنصر. هذه البادئات
            تُضاف أمام أي فئة لتُغيّر المظهر عندما يكون العنصر في حالة معينة.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            الحالات الأساسية
          </h3>

          <CodeBlock
            language="text"
            code={`البادئة           الوصف                              متى تُفعّل
─────────────    ──────────────────────────          ──────────────────────
hover:           الحالة عند التمرير                   عندما يمرّ الماوس فوق العنصر
focus:           الحالة عند التركيز                   عندما يحصل العنصر على focus
                 (لوحة المفاتيح/Tab)                 (كلا النقر ولوحة المفاتيح)
focus-visible:   التركيز المرئي فقط                  فقط عند التنقل بالـ Tab
                 (للوصولية)                          (ليس عند النقر بالماوس)
focus-within:    تركيز أي عنصر ابن                   عندما يحصل أي عنصر ابن على focus
active:          أثناء الضغط                         أثناء النقر mantener الزر
visited:         الروابط المزارة                     بعد زيارة الرابط
disabled:        العناصر المعطّلة                     عندما يكون العنصر معطّلاً
checked:         صناديق الاختيار المُحدّة             عندما يكون الصندوق مُحدّاً
first:/last:     العنصر الأول/الأخير                 في المصفوفة
odd:/even:       العنصر الفردي/الزوجي                 الترتيب في المصفوفة`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            أمثلة على الحالات التفاعلية
          </h3>

           <CodeBlock
            language="jsx"
            code={`function InteractiveButton() {
  return (
    <button
      className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium text-lg transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg focus:ring-4 focus:ring-indigo-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 active:scale-95 active:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
    >
      اضغط هنا
    </button>
  );
}`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            مثال شامل: زر بكل الحالات
          </h3>

          <CodeBlock
            language="jsx"
            code={`function ButtonWithAllStates() {
  return (
    <div className="space-y-6 p-4">

      {/* زر تفاعلي عادي */}
      <button
        className="
          bg-emerald-600 text-white
          px-8 py-3 rounded-xl font-bold
          transition-all duration-200 ease-out

          hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5

          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300

          active:translate-y-0 active:shadow-md active:bg-emerald-800

          disabled:opacity-40 disabled:cursor-not-allowed
          disabled:hover:translate-y-0 disabled:hover:shadow-none
        "
      >
        زر بجميع الحالات
      </button>

      {/* رابط مزار */}
      <a
        href="#"
        className="
          inline-block text-indigo-600
          underline underline-offset-4
          transition-colors duration-200

          hover:text-indigo-800

          visited:text-purple-600

          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-indigo-400 focus-visible:rounded
        "
      >
        رابط يغير لونه بعد الزيارة
      </a>

      {/* صندوق اختيار (checkbox) */}
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="
            w-5 h-5 rounded border-2 border-gray-300
            text-indigo-600
            transition-colors duration-200

            hover:border-indigo-400

            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-indigo-300

            checked:bg-indigo-600 checked:border-indigo-600
          "
        />
        <span className="text-gray-700">اختياري</span>
      </label>

      {/* قائمة بعناصر مُرتبة */}
      <ul className="space-y-2">
        {["العنصر الأول", "العنصر الثاني", "العنصر الثالث", "العنصر الرابع"].map(
          (item, i) => (
            <li
              key={i}
              className="
                p-3 rounded-lg bg-gray-100
                transition-all duration-200

                hover:bg-indigo-100 hover:text-indigo-800

                first:font-bold first:text-indigo-600
                last:italic last:text-gray-500

                odd:bg-gray-50
                even:bg-gray-100
              "
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ======================== Section 4 ======================== */}
        <LessonSection id="dark-mode" title="الوضع الداكن (Dark Mode)">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            الوضع الداكن (Dark Mode) أصبح ميزة أساسية في تطبيقات الويب الحديثة. Tailwind
            يوفر بادئة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">dark:</code> تسمح لك بتحديد أنماط مختلفة
            للوضع الداكن.
          </p>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-3">
              كيف يعمل الوضع الداكن في Tailwind؟
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Tailwind يستخدم استراتيجية <code className="bg-purple-100 dark:bg-purple-800/50 px-1 rounded">class</code> بشكل
              افتراضية. هذا يعني أن الوضع الداكن يُفعّل بإضافة الفئة{" "}
              <code className="bg-purple-100 dark:bg-purple-800/50 px-1 rounded">dark</code> إلى عنصر{" "}
              <code className="bg-purple-100 dark:bg-purple-800/50 px-1 rounded">&lt;html&gt;</code> أو{" "}
              <code className="bg-purple-100 dark:bg-purple-800/50 px-1 rounded">&lt;body&gt;</code>.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              يمكنك أيضاً اكتشاف تفضيلات المستخدم تلقائياً باستخدام{" "}
              <code className="bg-purple-100 dark:bg-purple-800/50 px-1 rounded">prefers-color-scheme: dark</code> في CSS.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            أمثلة على استخدام dark:
          </h3>

          <CodeBlock
            language="jsx"
            code={`// بسيط: خلفية فاتحة في الوضع العادي، داكنة في الوضع الداكن
<div className="bg-white dark:bg-gray-900">
  محتوى البطاقة
</div>

// النص: غامق في الوضع العادي، فاتح في الوضع الداكن
<p className="text-gray-900 dark:text-gray-100">
  نص يتكيف مع الوضع الداكن
</p>

// الحدود
<div className="border border-gray-200 dark:border-gray-700">
  عنصر بحدود متكيفة
</div>

// الألوان المشتركة
<span className="text-indigo-600 dark:text-indigo-400">
  لون أزرق يتكيف مع الوضع
</span>

// الظلال
<div className="shadow-md dark:shadow-gray-800/50">
  بطاقة بظل متكيف
</div>`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            مثال عملي: بطاقة بثيم كامل (Light/Dark)
          </h3>

          <CodeBlock
            language="jsx"
            code={`function ThemedCard() {
  return (
    <div className="
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-2xl shadow-lg dark:shadow-2xl
      p-6
      transition-colors duration-300
    ">
      {/* العنوان */}
      <h2 className="
        text-xl font-bold
        text-gray-900 dark:text-white
        mb-2
      ">
        عنوان البطاقة
      </h2>

      {/* الوصف */}
      <p className="
        text-gray-600 dark:text-gray-400
        leading-relaxed mb-4
      ">
        هذا وصف البطاقة يتكيف مع الوضع الداكن والفاتح.
      </p>

      {/* الصورة */}
      <img
        src="/photo.jpg"
        alt="صورة البطاقة"
        className="
          w-full h-48 object-cover rounded-xl mb-4
          filter brightness-100 dark:brightness-90
        "
      />

      {/* التاج (Tags) */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="
          bg-blue-100 dark:bg-blue-900/30
          text-blue-800 dark:text-blue-300
          text-xs font-medium px-3 py-1 rounded-full
        ">
          React
        </span>
        <span className="
          bg-green-100 dark:bg-green-900/30
          text-green-800 dark:text-green-300
          text-xs font-medium px-3 py-1 rounded-full
        ">
          Tailwind
        </span>
      </div>

      {/* التوسيط السفلي */}
      <div className="flex items-center justify-between pt-4
        border-t border-gray-100 dark:border-gray-700">
        <span className="
          text-sm text-gray-500 dark:text-gray-400
        ">
          15 يناير 2026
        </span>
        <button className="
          bg-indigo-600 hover:bg-indigo-700
          dark:bg-indigo-500 dark:hover:bg-indigo-600
          text-white font-medium
          px-5 py-2 rounded-lg
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-4
          focus-visible:ring-indigo-300
        ">
          اقرأ المزيد
        </button>
      </div>
    </div>
  );
}`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            تفعيل الوضع الداكن في مشروعك
          </h3>

          <CodeBlock
            language="jsx"
            code={`// في Next.js، يمكنك إدارة الوضع الداكن مع next-themes:

"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

// في المكونات، استخدم next-themes للتبديل:
"use client";

import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700
        transition-colors duration-200"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}`}
          />

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mt-6">
            <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">
              لوحة ألوان مقترحة للوضع الداكن
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              إليك نمط متسق للألوان يمكنك استخدامه في مشروعك:
            </p>
            <CodeBlock
              language="text"
              code={`الاستخدام                   الوضع الفاتح        الوضع الداكن
─────────────────────      ────────────────    ────────────────
الخلفية الرئيسية            bg-white            bg-gray-900
خلفية البطاقات              bg-gray-50          bg-gray-800
حدود البطاقات               border-gray-200     border-gray-700
النص الرئيسي                text-gray-900       text-white
النص الثانوي                text-gray-600       text-gray-400
النص الخافت                 text-gray-400       text-gray-500
خلفية الأزرار               bg-indigo-600       bg-indigo-500
 hover الأزرار              hover:bg-indigo-700 hover:bg-indigo-600
التاج (Tags)                bg-blue-100         bg-blue-900/30
 نص التاج                   text-blue-800       text-blue-300
الظلال                      shadow-md           shadow-2xl`}
            />
          </div>
        </LessonSection>

        {/* ======================== Section 5 ======================== */}
        <LessonSection id="group-peer" title="group و peer — التحكم بال Parents والأبناء">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            مجموعتا البادئات <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">group</code> و{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">peer</code> من
            أقوى ميزات Tailwind المتقدمة.它们 تسمح لك بتنسيق عناصر بناءً على حالة عنصر آخر.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            group — التحكم بالأبناء بناءً على حالة الأب
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            تضيف الفئة <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">group</code> على العنصر الأب، ثم تستخدم{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">group-hover:</code> على الأبناء لتغيير
            أنماطهم عندما يمرّ الماوس على الأب:
          </p>

          <CodeBlock
            language="jsx"
            code={`// مثال: بطاقة تتحول بالكامل عند مرور الماوس
<div className="
  group
  bg-white rounded-2xl shadow-md p-6
  hover:shadow-xl hover:scale-[1.02]
  transition-all duration-300 cursor-pointer
">
  {/* العنوان: يتغير لونه عند hover على البطاقة */}
  <h3 className="
    text-xl font-bold
    text-gray-800 group-hover:text-indigo-600
    transition-colors duration-300
    mb-2
  ">
    عنوان البطاقة
  </h3>

  {/* الوصف: يصبح مرئياً أكثر عند hover */}
  <p className="
    text-gray-500 group-hover:text-gray-700
    transition-colors duration-300 mb-4
  ">
    وصف البطاقة يتكيف مع التمرير
  </p>

  {/* الزر: يظهر عند hover */}
  <div className="
    opacity-0 group-hover:opacity-100
    translate-y-2 group-hover:translate-y-0
    transition-all duration-300
  ">
    <button className="
      bg-indigo-600 text-white
      px-4 py-2 rounded-lg
      hover:bg-indigo-700
      transition-colors
    ">
      اقرأ المزيد
    </button>
  </div>

  {/* السهم: يتحرك عند hover */}
  <span className="
    inline-block mt-4
    text-indigo-600
    group-hover:translate-x-[-4px]
    rtl:group-hover:translate-x-[4px]
    transition-transform duration-300
  ">
    ←
  </span>
</div>`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            group بأسماء مخصصة (Named Groups)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            يمكنك إعطاء المجموعة اسم خاص لتستخدم عدة مجموعات في نفس المكون:
          </p>

          <CodeBlock
            language="jsx"
            code={`// استخدام عدة مجموعات في مكون واحد
<div className="group/card ...">
  <img className="group-hover/card:scale-110 ..." />
  <h3 className="group-hover/card:text-indigo-600 ..." />
</div>

<div className="group/btn ...">
  <span className="group-hover/btn:translate-x-2 ..." />
</div>`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            peer — التحكم بالأبناء بناءً على حالة الأخ (Sibling)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">peer</code> يعمل بشكل مشابه لـ group، لكنه يُفعّل الأنماط
            على العناصر <strong>التابعة له</strong> (أبناء الأب نفسه) بناءً على حالة العنصر
            الذي يحمل <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">peer</code>:
          </p>

          <CodeBlock
            language="jsx"
            code={`// مثال: حقل إدخال يغير لون العنوان عند التركيز
<div className="relative">
  <input
    type="email"
    className="
      peer w-full px-4 py-3 pt-6
      border border-gray-300 rounded-lg
      focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
      focus:outline-none transition-colors
    "
    placeholder=" "
  />

  {/* التسمية: تتحرك للأعلى وتصغّر عند تركيز الحقل */}
  <label className="
    absolute right-4 top-3.5
    text-gray-400
    transition-all duration-200
    peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:top-1.5
    peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:top-1.5
    peer-not-placeholder-shown:text-indigo-600
  ">
    البريد الإلكتروني
  </label>
</div>`}
          />

          <CodeBlock
            language="jsx"
            code={`// مثال آخر: خيارات نموذج تفاعلية
<div className="space-y-3">
  {/* خيار 1 */}
  <label className="flex items-center gap-3 p-3 rounded-lg
    border border-gray-200
    peer-checked:border-indigo-500 peer-checked:bg-indigo-50
    cursor-pointer transition-all">
    <input type="radio" name="plan" className="peer sr-only" />
    <span className="w-4 h-4 rounded-full border-2
      border-gray-300 peer-checked:border-indigo-600
      peer-checked:bg-indigo-600 transition-colors" />
    <span className="peer-checked:text-indigo-600 font-medium">
      الخطة المجانية
    </span>
  </label>
</div>`}
          />
        </LessonSection>

        {/* ======================== Section 6 ======================== */}
        <LessonSection id="pseudo-classes" title="Pseudo-Classes المتقدمة: Before, After, Selection">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            يوفر Tailwind عدة بادئات للتعامل مع псевдо-عناصر وحالات خاصة مثل{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">placeholder</code>،{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">selection</code>،{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">file</code>، و{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">marker</code>.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            placeholder — تنسيق النص الدالّ (Placeholder Text)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لتنسيق نص placeholder في حقول الإدخال:
          </p>

          <CodeBlock
            language="jsx"
            code={`<input
  type="text"
  placeholder="اكتب اسمك هنا..."
  className="
    w-full px-4 py-3 rounded-lg
    border border-gray-300

    placeholder:text-gray-400
    placeholder:text-sm
    placeholder:italic

    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
    focus:outline-none
    transition-colors
  "
/>

<textarea
  placeholder="اكتب رسالتك هنا..."
  className="
    w-full px-4 py-3 rounded-lg
    border border-gray-300

    placeholder:text-gray-400
    placeholder:text-right
    placeholder:font-light

    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
    focus:outline-none
    transition-colors
  "
/>`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            selection — تنسيق النص المُحدّد
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لتغيير لون تحديد النص عندما يحدّده المستخدم:
          </p>

          <CodeBlock
            language="jsx"
            code={`<p className="
  text-gray-800
  selection:bg-indigo-200
  selection:text-indigo-900
">
  حدد هذا النص لرؤية تأثير selection
</p>

<p className="
  text-gray-800
  selection:bg-pink-200
  selection:text-pink-900
  selection:font-bold
">
  نص آخر بلون تحديد مختلف
</p>

{/* على مستوى الصفحة بأكملها */}
<div className="selection:bg-indigo-200 selection:text-indigo-900">
  <p>جميع النصوص هنا ستكون بلون تحديد موحد</p>
  <p>عند تحديدها</p>
</div>`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            file — تنسيق أزرار اختيار الملفات
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لتنسيق زر اختيار الملفات في حقل{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">input[type=&quot;file&quot;]</code>:
          </p>

          <CodeBlock
            language="jsx"
            code={`<input
  type="file"
  className="
    w-full text-sm text-gray-500
    file:ml-4 file:py-2 file:px-4
    file:rounded-lg file:border-0
    file:text-sm file:font-semibold
    file:bg-indigo-50 file:text-indigo-700
    hover:file:bg-indigo-100

    file:cursor-pointer
    file:transition-colors
  "
/>`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            marker — تنسيق علامات القوائم (List Markers)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لتنسيق علامات القوائم المُرتّبة وغير المُرتّبة:
          </p>

          <CodeBlock
            language="jsx"
            code={`<ul className="list-disc list-inside space-y-2">
  <li className="marker:text-indigo-600 marker:text-lg">
    عنصر بأيقونة بلون أزرق
  </li>
  <li className="marker:text-emerald-600 marker:text-lg">
    عنصر بأيقونة بلون أخضر
  </li>
  <li className="marker:text-rose-600 marker:text-lg">
    عنصر بأيقونة بلون أحمر
  </li>
</ul>

<ol className="list-decimal list-inside space-y-2">
  <li className="marker:text-indigo-600 marker:font-bold">
    عنصر برقم عريض
  </li>
  <li className="marker:text-indigo-600 marker:font-bold">
    عنصر برقم عريض
  </li>
</ol>`}
          />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            before و after (بقيم عشوائية)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            يمكنك استخدام псевдо-عناصر before و after مع القيم العشوائية (Arbitrary Values):
          </p>

          <CodeBlock
            language="jsx"
            code={`// مثال: زر بنجمة قبل النص
<button className="
  relative
  bg-indigo-600 text-white
  px-6 py-3 rounded-lg
  hover:bg-indigo-700
  transition-colors
">
  <span className="
    absolute top-1/2 right-3 -translate-y-1/2
    before:content-['★']
    before:text-yellow-300
  " />
  <span className="mr-6">مميز</span>
</button>

// مثال: بطاقة بخط مزخرف بعد العنوان
<div className="relative">
  <h2 className="text-2xl font-bold">
    العنوان
  </h2>
  <span className="
    block w-16 h-1 mt-2
    bg-indigo-500 rounded-full
    after:content-['']
    after:block after:w-8 after:h-1
    after:bg-indigo-300 after:rounded-full
    after:mt-1
  " />
</div>`}
          />
        </LessonSection>

        {/* ======================== Section 7 ======================== */}
        <LessonSection id="practical-component" title="مثال عملي — مكون بطاقة تفاعلية كاملة">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            الآن سنجمع كل ما تعلّمناه في مكون واحد احترافي — بطاقة تفاعلية تتضمن التصميم
            المتجاوب، الوضع الداكن، تأثيرات group، وحالات التفاعل:
          </p>

          <CodeBlock
            language="jsx"
            code={`"use client";

function InteractiveCard({ title, description, image, tags, date, href }) {
  return (
    <a
      href={href}
      className="
        group
        block
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-2xl overflow-hidden
        shadow-md dark:shadow-gray-900/50
        hover:shadow-xl hover:dark:shadow-gray-900/80
        hover:scale-[1.02]
        transition-all duration-300 ease-out

        focus-visible:outline-none
        focus-visible:ring-4 focus-visible:ring-indigo-300
        focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900
      "
    >
      {/* صورة البطاقة */}
      <div className="relative overflow-hidden h-48 sm:h-56">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            group-hover:scale-110
            transition-transform duration-500 ease-out
          "
        />
        {/* تدرج فوق الصورة */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-black/50 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        " />
      </div>

      {/* محتوى البطاقة */}
      <div className="p-4 sm:p-6">

        {/* التاج (Tags) */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="
                  text-xs font-medium px-2.5 py-1 rounded-full
                  bg-indigo-100 dark:bg-indigo-900/30
                  text-indigo-700 dark:text-indigo-300
                  group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50
                  transition-colors duration-300
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* العنوان */}
        <h3 className="
          text-lg sm:text-xl font-bold
          text-gray-900 dark:text-white
          group-hover:text-indigo-600 dark:group-hover:text-indigo-400
          transition-colors duration-300
          mb-2 line-clamp-2
        ">
          {title}
        </h3>

        {/* الوصف */}
        <p className="
          text-sm sm:text-base
          text-gray-600 dark:text-gray-400
          leading-relaxed mb-4 line-clamp-3
          group-hover:text-gray-700 dark:group-hover:text-gray-300
          transition-colors duration-300
        ">
          {description}
        </p>

        {/* التوسيط السفلي */}
        <div className="
          flex items-center justify-between
          pt-4 border-t border-gray-100 dark:border-gray-700
        ">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            {date}
          </span>

          {/* رابط "اقرأ المزيد" يظهر عند hover */}
          <span className="
            text-indigo-600 dark:text-indigo-400
            text-sm font-medium
            flex items-center gap-1
            opacity-0 group-hover:opacity-100
            translate-x-2 rtl:-translate-x-2 rtl:group-hover:translate-x-0
            group-hover:translate-x-0
            transition-all duration-300
          ">
            اقرأ المزيد
            <span className="
              inline-block
              group-hover:translate-x-1 rtl:group-hover:-translate-x-1
              transition-transform duration-300
            ">
              ←
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}

// الاستخدام:
// <InteractiveCard
//   title="تعلم Tailwind CSS من الصفر"
//   description="دليل شامل لتعلم Tailwind CSS"
//   image="/tailwind-course.jpg"
//   tags={["Tailwind", "CSS", "تصميم"]}
//   date="15 يناير 2026"
//   href="/courses/tailwind"
// />`}
          />

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mt-6">
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">
              شرح المكون
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code className="bg-amber-100 dark:bg-amber-800/50 px-1 rounded">group</code> —
                يفعّل group-hover: على جميع الأبناء
              </li>
              <li>
                <code className="bg-amber-100 dark:bg-amber-800/50 px-1 rounded">hover:scale-[1.02]</code> —
                تكبير طفيف عند التمرير
              </li>
              <li>
                <code className="bg-amber-100 dark:bg-amber-800/50 px-1 rounded">dark:bg-gray-800</code> —
                خلفية داكنة في الوضع الداكن
              </li>
              <li>
                <code className="bg-amber-100 dark:bg-amber-800/50 px-1 rounded">sm:p-6</code> —
                مسافات أكبر على الشاشات الأكبر
              </li>
              <li>
                <code className="bg-amber-100 dark:bg-amber-800/50 px-1 rounded">focus-visible:ring-4</code> —
                حلقة تركيز للوصولية بلوحة المفاتيح
              </li>
              <li>
                <code className="bg-amber-100 dark:bg-amber-800/50 px-1 rounded">line-clamp-2/3</code> —
                تقييد عدد الأسطر
              </li>
              <li>
                <code className="bg-amber-100 dark:bg-amber-800/50 px-1 rounded">transition-all duration-300</code> —
                انتقال سلس لجميع التغييرات
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ======================== Section 8 ======================== */}
        <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            عند العمل مع الاستجابة والوضع الداكن والحالات، يقع المبتدئون في أخطاء شائعة.
            إليك أهمها وكيف تتجنبها:
          </p>

          <div className="space-y-6">
            {/* الخطأ 1 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                خطأ 1: نسيان Mobile-First
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                الكارثة الأكبر هي كتابة <code className="bg-red-100 dark:bg-red-800/50 px-1 rounded">lg:text-sm</code> بدلاً
                من <code className="bg-red-100 dark:bg-red-800/50 px-1 rounded">text-sm lg:text-lg</code>. البادئات تضيف أنماط إضافية
                للشاشات الأكبر — لا تستبدل الأنماط الأساسية.
              </p>
              <CodeBlock
                language="jsx"
                code={`<!-- ❌ خطأ: lg:text-sm يعني أن النص صغير فقط على lg+ -->
<!-- على الجوال سيكون بحجم الخط الافتراضي -->
<h1 className="lg:text-sm">عنوان</h1>

<!-- ✅ صحيح: text-sm هو الأساس (الجوال)، lg:text-lg أكبر على lg+ -->
<h1 className="text-sm md:text-base lg:text-lg">عنوان</h1>`}
              />
            </div>

            {/* الخطأ 2 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                خطأ 2: عدم استخدام focus-visible للوصولية
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                استخدام <code className="bg-red-100 dark:bg-red-800/50 px-1 rounded">focus:</code> بدلاً من{" "}
                <code className="bg-red-100 dark:bg-red-800/50 px-1 rounded">focus-visible:</code> يسبب ظهور حلقة
                التركيز على جميع العناصر حتى عند النقر بالماوس — وهذا تجربة مستخدم سيئة.
              </p>
              <CodeBlock
                language="jsx"
                code={`<!-- ❌ سيء: حلقة التركيز تظهر حتى عند النقر بالماوس -->
<button className="focus:ring-4 focus:ring-indigo-300">
  اضغط هنا
</button>

<!-- ✅ ممتاز: الحلقة تظهر فقط عند التنقل بلوحة المفاتيح -->
<button className="focus-visible:ring-4 focus-visible:ring-indigo-300 focus-visible:outline-none">
  اضغط هنا
</button>`}
              />
            </div>

            {/* الخطأ 3 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                خطأ 3: تعقيد Dark Mode بشكل مفرط
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                استخدام ألوان مختلفة لكل حالة (hover + dark + responsive) يخلق كوداً معقداً.
                استخدم أنماطاً متسقة وبسيطة.
              </p>
              <CodeBlock
                language="jsx"
                code={`<!-- ❌ معقد وصعب للصيانة -->
<div className="
  bg-white
  hover:bg-gray-50
  dark:bg-gray-800
  dark:hover:bg-gray-750
  border-gray-200
  dark:border-gray-700
  dark:hover:border-gray-600
">

<!-- ✅ متسق وبسيط — نفس النمط لكل حالة -->
<div className="
  bg-white dark:bg-gray-800
  border border-gray-200 dark:border-gray-700
  hover:border-gray-300 dark:hover:border-gray-600
  transition-colors duration-200
">`}
              />
            </div>

            {/* الخطأ 4 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                خطأ 4: عدم الاختبار عند نقاط التوقف الحقيقية
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                التحقق من التصميم ببساطة بتغيير حجم نافذة المتصفح لا يكفي. استخدم DevTools
                لاختبار أحجام شاشات محددة.
              </p>
              <CodeBlock
                language="text"
                code={`للاختبار في Chrome DevTools:
1. اضغط F12 لفتح DevTools
2. اضغط Ctrl+Shift+M لتفعيل Responsive Mode
3. اختر أحجام شاشات محددة:

   iPhone SE:   375px  ← اختبار الجوال الصغير
   iPhone 14:   390px  ← اختبار الهاتف المتوسط
   iPad:        768px  ← اختبار التابلت
   iPad Pro:    1024px ← اختبار اللوحي
   Desktop:     1280px ← اختبار الديسكتوب

مهم: لا تكتفِ بتغيير حجم النافذة!
       اختبر عند نقاط التوقف الحقيقية.`}
              />
            </div>

            {/* الخطأ 5 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                خطأ 5: استخدام !important مع Dark Mode
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                استخدام{" "}
                <code className="bg-red-100 dark:bg-red-800/50 px-1 rounded">dark:!bg-gray-900</code> يكسر
                قابلية الصيانة. إذا كنت تحتاج إلى !important فأنت تفعل شيئاً خاطئاً في الغالب.
              </p>
              <CodeBlock
                language="jsx"
                code={`<!-- ❌ لا تفعل هذا أبداً -->
<div className="dark:!bg-gray-900">

<!-- ✅ إذا كنت تحتاج overrides، أعد هيكلة الكود -->
{/* استخدم Tailwind مع plugins أو قيم عشوائية بدلاً */}`}
              />
            </div>
          </div>
        </LessonSection>

        {/* ======================== Section 9 ======================== */}
        <LessonSection id="best-practices" title="أفضل الممارسات">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            اتبع هذه الممارسات للحصول على تصميم متجاوب ووضع داكن وحالات تفاعلية احترافية:
          </p>

          <div className="space-y-4">
            {/* الممارسة 1 */}
            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  صمم دائماً من الجوال للشاشات الكبيرة (Mobile-First)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ابدأ بتصميم الشاشات الصغيرة أولاً ثم أضف البادئات{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">sm:</code>،{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">md:</code>،{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">lg:</code> للشاشات الأكبر.
                  هذا يضمن أن تصميمك يعمل على كل الأجهزة.
                </p>
              </div>
            </div>

            {/* الممارسة 2 */}
            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  استخدم focus-visible لتحسين الوصولية
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  دائمًا استخدم <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">focus-visible:</code> بدلاً
                  من <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">focus:</code> لعرض حلقة التركيز
                  فقط عند التنقل بلوحة المفاتيح. أضف أيضاً{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">focus-visible:outline-none</code> لإزالة
                  الحد الافتراضي.
                </p>
              </div>
            </div>

            {/* الممارسة 3 */}
            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  أنشئ لوحة ألوان متسقة للوضع الداكن
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  استخدم gray-800 أو gray-900 للخلفيات الرئيسية، وgray-700 للحدود،
                  وgray-400 للنصوص الثانوية. التمسك بنفس الألوان في كل مكان يُنشئ تجربة
                  متناسقة.
                </p>
              </div>
            </div>

            {/* الممارسة 4 */}
            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  استخدم group لمكونات البطاقات
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  عند إنشاء بطاقات أو عناصر تفاعلية، أضف{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">group</code> على الأب
                  واستخدم <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">group-hover:</code> على
                  الأبناء. هذا أس بكثير من إضافة hover: على كل عنصر ابن بشكل منفصل.
                </p>
              </div>
            </div>

            {/* الممارسة 5 */}
            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  اختبر على أحجام شاشات حقيقية
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  لا تكتفِ بتغيير حجم نافذة المتصفح. استخدم DevTools Responsive Mode
                  لاختبار أحجام شاشات الأجهزة الحقيقية. جرّب على هاتف فعلي إذا أمكن.
                </p>
              </div>
            </div>

            {/* الممارسة 6 */}
            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  أضف انتقالات سلسة (Smooth Transitions)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  أضف <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">transition-all duration-300</code> أو{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">transition-colors duration-200</code> لجعل
                  جميع التغييرات سلسة واحترافية.
                </p>
              </div>
            </div>

            {/* الممارسة 7 */}
            <div className="flex gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="text-green-500 text-xl mt-0.5">✅</span>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  استخدم Peer Inputs لحقول النماذج
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  عند بناء نماذج، استخدم <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">peer</code> مع{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">peer-focus:</code> و{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">peer-not-placeholder-shown:</code> لإنشاء
                  حقول إدخال احترافية بدون JavaScript.
                </p>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* ======================== Section 10 ======================== */}
        <LessonSection id="summary" title="ملخص + تدريب عملي">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            في هذا الدرس تعلّمنا:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-8">
            <li>
              التصميم المتجاوب مع Mobile-First ونقاط التوقف (sm, md, lg, xl, 2xl)
            </li>
            <li>
              أي فئة Tailwind يمكن أن تحمل بادئة استجابة
            </li>
            <li>
              الحالات التفاعلية: hover, focus, focus-visible, active, disabled, first, last, odd, even
            </li>
            <li>
              الوضع الداكن مع بادئة dark: وتفعيله في مشروعك
            </li>
            <li>
              group و peer للتحكم بالأنماط بناءً على حالة العناصر الأخرى
            </li>
            <li>
              placeholder, selection, file, marker, before, after
            </li>
          </ul>

          {/* ===== Quiz ===== */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              اختبر فهمك
            </h3>
            <div className="space-y-6">
              <Quiz
                question={`ما هو الترتيب الصحيح للكود لجعل حجم الخط صغيراً على الجوال وكبيراً على الشاشات المتوسطة (768px+)؟`}
                options={[
                  `md:text-sm text-lg`,
                  `text-sm md:text-lg`,
                  `text-lg md:text-sm`,
                  `lg:text-lg text-sm`,
                ]}
                correctAnswer={1}
                explanation={`الصحيح هو text-sm md:text-lg — لأن Tailwind يتبع Mobile-First، فأولاً نحدد الحجم الأساسي (text-sm للجوال) ثم نضيف البادئة md: للشاشات الأكبر (text-lg من 768px فما فوق).`}
              />

              <Quiz
                question={`ما هو الفرق بين focus: و focus-visible:؟`}
                options={[
                  `لا يوجد فرق — كلاهما متساويان`,
                  `focus: يظهر عند النقر والتنقل بلوحة المفاتيح، focus-visible: يظهر فقط عند التنقل بلوحة المفاتيح`,
                  `focus-visible: يظهر عند النقر فقط`,
                  `focus: يعمل فقط في الوضع الداكن`,
                ]}
                correctAnswer={1}
                explanation={`focus: يُفعّل عند التركيز سواء بالماوس أو لوحة المفاتيح. focus-visible: يُفعّل فقط عند التنقل بلوحة المفاتيح (Tab)، وهذا هو السلوك المطلوب للوصولية — لا نريد حلقة تركيز عند النقر بالماوس.`}
              />

              <Quiz
                question={`ما هي البادئة التي تُستخدم لتنسيق جميع الأبناء عند تمرير الماوس على الأب؟`}
                options={[
                  `hover:`,
                  `group-hover:`,
                  `peer-hover:`,
                  `children-hover:`,
                ]}
                correctAnswer={1}
                explanation={`group-hover: هو الصحيح — تضيف group على العنصر الأب ثم group-hover: على أي ابن لتغيير أنماطه عند تمرير الماوس على الأب. hover: يعمل فقط على العنصر نفسه.`}
              />

              <Quiz
                question={`كيف تفعّل الوضع الداكن في Tailwind CSS؟`}
                options={[
                  `يكون مفعلاً تلقائياً`,
                  `بإضافة الفئة dark على عنصر <html> أو <body>`,
                  `باستخدام مكتبة إضافية مطلوبة`,
                  `عبر ملف tailwind.config.js فقط`,
                ]}
                correctAnswer={1}
                explanation={`الوضع الداكن في Tailwind يستخدم استراتيجية class بشكل افتراضي — تُفعّل بإضافة الفئة dark على عنصر <html> أو <body>. يمكنك استخدام next-themes أو JavaScript للتبديل بين الوضعين.`}
              />
            </div>
          </div>

          {/* ===== Challenge ===== */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              تحدّي عملي
            </h3>
            <Challenge
              title="أنشئ صفحة مدونة متجاوبة مع الوضع الداكن"
              description={`أنشئ مكون React يعرض مقالات مدونة مع الميزات التالية:

- تخطيط متجاوب: عمود واحد على الجوال، عمودين على md، ثلاثة على lg
- بطاقة لكل مقال تتضمن: صورة، عنوان، وصف، تاريخ، تاج (tag)
- الوضع الداكن: خلفية داكنة، حدود فاتحة، نصوص فاتحة
- group-hover: البطاقة تتكبّر قليلاً والصورة تزوم عند التمرير
- focus-visible: روابط البطاقات يمكن الوصول إليها بلوحة المفاتيح
- انتقالات سلسة لجميع التغييرات
- قائمة تنقل متجاوبة تظهر كقائمة على الجوال وكروابط على md+`}
            >
              <CodeBlock
                language="jsx"
                code={`// الحل المقترح — صفحة مدونة متجاوبة

function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "مقدمة في Tailwind CSS",
      excerpt: "تعلم أساسيات Tailwind CSS وكيف تستخدمها في مشاريعك",
      image: "/post1.jpg",
      date: "15 يناير 2026",
      tag: "Tailwind",
    },
    {
      id: 2,
      title: "التصميم المتجاوب",
      excerpt: "كيف تنشئ تصميمات تعمل على كل الأجهزة",
      image: "/post2.jpg",
      date: "12 يناير 2026",
      tag: "CSS",
    },
    {
      id: 3,
      title: "الوضع الداكن في React",
      excerpt: "تطبيق Dark Mode في تطبيقات React الحديثة",
      image: "/post3.jpg",
      date: "10 يناير 2026",
      tag: "React",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* قائمة تنقل متجاوبة */}
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">مدوّنتي</span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">الرئيسية</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">المقالات</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">من نحن</a>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            ☰
          </button>
        </div>
      </nav>

      {/* شبكة المقالات */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          أحدث المقالات
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href="#"
              className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-indigo-300 focus-visible:outline-none"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 mb-3 inline-block">
                  {post.tag}
                </span>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {post.date}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
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
            <CheatSheet title="Tailwind CSS — الاستجابة والوضع الداكن والحالات">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                نقاط التوقف الاستجابة (Responsive Breakpoints)
              </h3>
              <CodeBlock
                language="text"
                code={`sm:   → min-width: 640px   (هاتف كبير)
md:   → min-width: 768px   (تابلت)
lg:   → min-width: 1024px  (لوحي/ديسكتوب صغير)
xl:   → min-width: 1280px  (ديسكتوب)
2xl:  → min-width: 1536px  (شاشة كبيرة)

مثال: text-sm md:text-lg lg:text-xl
  → الجوال: text-sm (14px)
  → md: 768px+: text-lg (18px)
  → lg: 1024px+: text-xl (20px)`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                الحالات التفاعلية (Interactive States)
              </h3>
              <CodeBlock
                language="text"
                code={`hover:             → عند مرور الماوس
focus:             → عند التركيز (ماوس + لوحة مفاتيح)
focus-visible:     → عند التركيز بلوحة المفاتيح فقط ✅
active:            → أثناء الضغط
disabled:          → العنصر معطّل
visited:           → الروابط المزارة
checked:           → صناديق الاختيار المُحدّة
first:             → العنصر الأول
last:              → العنصر الأخير
odd:               → العنصر الفردي (1, 3, 5...)
even:              → العنصر الزوجي (2, 4, 6...)`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                الوضع الداكن (Dark Mode)
              </h3>
              <CodeBlock
                language="text"
                code={`dark:bg-gray-900    → خلفية داكنة
dark:text-white     → نص فاتح
dark:border-gray-700 → حدود فاتحة
dark:hover:bg-gray-800 → hover في الوضع الداكن

تفعيل: أضف الفئة "dark" على <html> أو <body>`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                group و peer
              </h3>
              <CodeBlock
                language="text"
                code={`group              → ضعه على الأب
group-hover:       → تغيير الأبناء عند hover على الأب
group-focus:       → تغيير الأبناء عند focus على الأب
group-active:      → تغيير الأبناء عند active على الأب
group-hover/card:  → group باسم مخصص

peer               → ضعه على الأخ (Sibling)
peer-focus:        → تغيير الأخ عند focus على.peer
peer-checked:      → تغيير الأخ عند checked على peer
peer-not-placeholder-shown: → عند كتابة نص في الحقل`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                Pseudo-Classes المتقدمة
              </h3>
              <CodeBlock
                language="text"
                code={`placeholder:text-gray-400    → تنسيق النص الدالّ
selection:bg-indigo-200       → تنسيق النص المُحدّد
selection:text-indigo-900     → لون النص المُحدّد

file:bg-indigo-50             → خلفية زر اختيار الملف
file:text-indigo-700          → لون نص زر الملف
hover:file:bg-indigo-100      → hover على زر الملف

marker:text-indigo-600        → لون علامات القوائم
marker:text-lg                → حجم علامات القوائم`}
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                نمط لوحة الألوان المتسقة
              </h3>
              <CodeBlock
                language="text"
                code={`الخلفية الرئيسية:
  → bg-white / dark:bg-gray-900

خلفية البطاقات:
  → bg-gray-50 / dark:bg-gray-800

حدود:
  → border-gray-200 / dark:border-gray-700

النص الرئيسي:
  → text-gray-900 / dark:text-white

النص الثانوي:
  → text-gray-600 / dark:text-gray-400

الأزرار:
  → bg-indigo-600 / dark:bg-indigo-500
  → hover:bg-indigo-700 / dark:hover:bg-indigo-600

التنقل السلس:
  → transition-all duration-300
  → transition-colors duration-200`}
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
