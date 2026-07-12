import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function TypographyColorsEffects() {
  const lesson = getLessonBySlug("tailwind", "04-typography-colors-effects");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ===== Section 1: الطباعة (Typography) ===== */}
        <LessonSection title="الطباعة (Typography)">
          <p className="text-lg leading-relaxed mb-4">
            توفر لك Tailwind CSS مجموعة شاملة من الأدوات للتحكم الكامل في مظهر النصوص. من أحجام الخطوط إلى
            الارتفاعات والتباعدات — كل شيء متاح كـ Utility Class جاهز للاستخدام.
          </p>

          {/* --- حجم الخط (Font Size) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">حجم الخط (Font Size)</h3>
          <p className="mb-3">
            يوفر Tailwind 9 أحجام خط مختلفة من <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">text-xs</code> إلى
            <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">text-9xl</code>، كل حجم يُقابل حجم معين من
            الـ rem.
          </p>
          <CodeBlock
            language="html"
            code={`<p className="text-xs">text-xs — 0.75rem (12px)</p>
<p className="text-sm">text-sm — 0.875rem (14px)</p>
<p className="text-base">text-base — 1rem (16px)</p>
<p className="text-lg">text-lg — 1.125rem (18px)</p>
<p className="text-xl">text-xl — 1.25rem (20px)</p>
<p className="text-2xl">text-2xl — 1.5rem (24px)</p>
<p className="text-3xl">text-3xl — 1.875rem (30px)</p>
<p className="text-4xl">text-4xl — 2.25rem (36px)</p>
<p className="text-5xl">text-5xl — 3rem (48px)</p>
<p className="text-6xl">text-6xl — 3.75rem (60px)</p>
<p className="text-7xl">text-7xl — 4.5rem (72px)</p>
<p className="text-8xl">text-8xl — 6rem (96px)</p>
<p className="text-9xl">text-9xl — 8rem (128px)</p>`}
          />

          {/* --- وزن الخط (Font Weight) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">وزن الخط (Font Weight)</h3>
          <p className="mb-3">
            تحكم بسماكة الخط باستخدام فئات <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">font-*</code>:
          </p>
          <CodeBlock
            language="html"
            code={`<p className="font-thin">font-thin — وزن 100</p>
<p className="font-extralight">font-extralight — وزن 200</p>
<p className="font-light">font-light — وزن 300</p>
<p className="font-normal">font-normal — وزن 400</p>
<p className="font-medium">font-medium — وزن 500</p>
<p className="font-semibold">font-semibold — وزن 600</p>
<p className="font-bold">font-bold — وزن 700</p>
<p className="font-extrabold">font-extrabold — وزن 800</p>
<p className="font-black">font-black — وزن 900</p>`}
          />

          {/* --- عائلة الخط (Font Family) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">عائلة الخط (Font Family)</h3>
          <p className="mb-3">
            يوفر Tailwind 3 عائلات خط أساسية:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- الخط الافتراضي (Inter, system-ui) -->
<p className="font-sans">هذا نص باستخدام الخط sans-serif الافتراضي</p>

<!-- الخط الطباعي (ui-serif, Georgia) -->
<p className="font-serif">هذا نص باستخدام الخط serif الطباعي</p>

<!-- خط الشاشة (ui-monospace, Courier) -->
<p className="font-mono">هذا نص باستخدام الخط monospace للشفرات</p>`}
          />

          {/* --- ارتفاع السطر (Line Height) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">ارتفاع السطر (Line Height)</h3>
          <p className="mb-3">
            التحكم بمسافة بين الأسطر باستخدام <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">leading-*</code>:
          </p>
          <CodeBlock
            language="html"
            code={`<p className="leading-3">leading-3 — ارتفاع 0.75rem</p>
<p className="leading-4">leading-4 — ارتفاع 1rem</p>
<p className="leading-5">leading-5 — ارتفاع 1.25rem</p>
<p className="leading-6">leading-6 — ارتفاع 1.5rem</p>
<p className="leading-7">leading-7 — ارتفاع 1.75rem</p>
<p className="leading-8">leading-8 — ارتفاع 2rem</p>
<p className="leading-9">leading-9 — ارتفاع 2.25rem</p>
<p className="leading-10">leading-10 — ارتفاع 2.5rem</p>
<p className="leading-none">leading-none — ارتفاع 1</p>
<p className="leading-tight">leading-tight — ارتفاع 1.25</p>
<p className="leading-snug">leading-snug — ارتفاع 1.375</p>
<p className="leading-normal">leading-normal — ارتفاع 1.5</p>
<p className="leading-relaxed">leading-relaxed — ارتفاع 1.625</p>
<p className="leading-loose">leading-loose — ارتفاع 2</p>`}
          />

          {/* --- تباعد الحروف (Letter Spacing) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">تباعد الحروف (Letter Spacing)</h3>
          <p className="mb-3">
            التحكم في المسافة بين الحروف باستخدام <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">tracking-*</code>:
          </p>
          <CodeBlock
            language="html"
            code={`<p className="tracking-tighter">tracking-tighter — تباعد أضيق</p>
<p className="tracking-tight">tracking-tight — تباعد ضيق</p>
<p className="tracking-normal">tracking-normal — تباعد عادي</p>
<p className="tracking-wide">tracking-wide — تباعد واسع</p>
<p className="tracking-wider">tracking-wider — تباعد أوسع</p>
<p className="tracking-widest">tracking-widest — أوسع تباعد</p>`}
          />

          {/* --- محاذاة النص (Text Alignment) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">محاذاة النص (Text Alignment)</h3>
          <p className="mb-3">
            بما أننا نستخدم <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">dir="rtl"</code>، فإن
            <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">text-right</code> هو المحاذاة الافتراضية الصحيحة.
          </p>
          <CodeBlock
            language="html"
            code={`<p className="text-right">نص محاذي لليمين (الافتراضي في RTL)</p>
<p className="text-left">نص محاذي لليسار</p>
<p className="text-center">نص محاذي للوسط</p>
<p className="text-justify">نص مبرر — يتم توزيع المسافات بالتساوي بين الكلمات لإملاء كامل السطر</p>`}
          />

          {/* --- لون النص (Text Color) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">لون النص (Text Color)</h3>
          <p className="mb-3">
            Tailwind توفر أكثر من 50 لونًا جاهزًا مع درجات متفاوتة. سنغطي الألوان بالتفصيل في القسم التالي.
          </p>
          <CodeBlock
            language="html"
            code={`<p className="text-black">نص أسود</p>
<p className="text-white bg-gray-800 px-2">نص أبيض</p>
<p className="text-transparent">نص شفاف (غير مرئي)</p>
<p className="text-gray-500">نص رمادي</p>
<p className="text-red-500">نص أحمر</p>
<p className="text-blue-600">نص أزرق غامق</p>
<p className="text-green-500">نص أخضر</p>
<p className="text-yellow-400">نص أصفر</p>
<p className="text-purple-600">نص بنفسجي</p>`}
          />

          {/* --- زخرفة النص (Text Decoration) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">زخرفة النص (Text Decoration)</h3>
          <p className="mb-3">
            التحكم في خطوط الزخرفة فوق أو تحت النص:
          </p>
          <CodeBlock
            language="html"
            code={`<p className="underline">نص مع تسطير سفلي</p>
<p className="overline">نص مع تسطير علوي</p>
<p className="line-through">نص مع خط يتوسطه</p>
<p className="no-underline">نص بدون أي زخرفة</p>

<!-- تكبير سُمك الخط -->
<p className="underline underline-offset-4 decoration-2">تسطير سميك ومؤخر</p>
<p className="underline decoration-dotted">تسطير منقط</p>
<p className="underline decoration-dashed">تسطير متقطع</p>
<p className="underline decoration-double">تسطير مزدوج</p>
<p className="underline decoration-amber-500">تسطير بلون كهرماني</p>`}
          />

          {/* --- تحويل النص (Text Transform) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">تحويل النص (Text Transform)</h3>
          <p className="mb-3">
            التحكم في حالة الأحرف:
          </p>
          <CodeBlock
            language="html"
            code={`<p className="uppercase">UPPERCASE — أحرف كبيرة</p>
<p className="lowercase">LOWERCASE — أحرف صغيرة</p>
<p className="capitalize">capitalize — أول حرف كبير في كل كلمة</p>
<p className="normal-case">Normal Case — كما هو مكتوب</p>`}
          />

          {/* --- تجاوز النص (Text Overflow) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">تجاوز النص (Text Overflow)</h3>
          <p className="mb-3">
            التعامل مع النص الطويل الذي يتجاوز حاوية النص:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- قص النص وإظهار نقاط الحذف -->
<div className="w-48 truncate">
  هذا نص طويل جدًا سيتم قصه وإظهار نقاط الحذف عند التجاوز
</div>

<!-- إظهار النص المتجاوز كنقاط الحذف -->
<div className="w-48 overflow-hidden text-ellipsis whitespace-nowrap">
  هذا نص طويل سيظهر كنقاط الحذف عند تجاوز العرض
</div>

<!-- قص النص مباشرة -->
<div className="w-48 overflow-hidden text-clip whitespace-nowrap">
  هذا نص طويل سيُقص عند تجاوز العرض بدون نقاط
</div>`}
          />

          {/* --- مثال عملي: مقياس الخطوط --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">مثال عملي: مقياس الخطوط (Typography Scale)</h3>
          <p className="mb-3">
            في تصميم الأنظمة (Design Systems)، يُستخدم مقياس خطوط متسق يسمى "نسبة المقياس الطباعي" (Typographic Scale):
          </p>
          <CodeBlock
            language="html"
            code={`<div className="space-y-3 p-6 bg-white dark:bg-gray-800 rounded-xl">
  <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
    عنوان رئيسي (Heading 1)
  </h1>
  <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
    عنوان فرعي (Heading 2)
  </h2>
  <h3 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">
    عنوان ثالث (Heading 3)
  </h3>
  <h4 className="text-2xl font-medium text-gray-600 dark:text-gray-300">
    عنوان رابع (Heading 4)
  </h4>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
    نص فقرة كبير — مثالي للمقدمة أو الأقسام المهمة
  </p>
  <p className="text-base text-gray-600 dark:text-gray-400 leading-normal">
    نص فقرة عادي — الأكثر استخدامًا للمحتوى العام
  </p>
  <p className="text-sm text-gray-500 dark:text-gray-500 leading-snug">
    نص صغير — مناسب للتعليقات والمعلومات المساعدة
  </p>
  <p className="text-xs text-gray-400 dark:text-gray-600 leading-tight">
    نص مصغر — مناسب للإشعارات والتواريخ
  </p>
</div>`}
          />
        </LessonSection>

        {/* ===== Section 2: الألوان (Colors) ===== */}
        <LessonSection title="الألوان (Colors)">
          <p className="text-lg leading-relaxed mb-4">
            يمتلك Tailwind واحدة من أقوى مجموعات الألوان في أي إطار عمل CSS. أكثر من 50 لونًا مع 11 درجة لكل لون،
            بالإضافة إلى أدوات متقدمة للتحكم في الشفافية.
          </p>

          {/* --- لوحة الألوان --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">لوحة الألوان (Color Palette)</h3>
          <p className="mb-3">
            Tailwind يوفر 11 درجة لكل لون من 50 (الأفتح) إلى 950 (الأغمق):
          </p>
          <CodeBlock
            language="html"
            code={`<!-- مثال على درجات اللون الأزرق -->
<div className="grid grid-cols-11 gap-1">
  <div className="h-10 bg-blue-50 rounded"></div>
  <div className="h-10 bg-blue-100 rounded"></div>
  <div className="h-10 bg-blue-200 rounded"></div>
  <div className="h-10 bg-blue-300 rounded"></div>
  <div className="h-10 bg-blue-400 rounded"></div>
  <div className="h-10 bg-blue-500 rounded"></div>
  <div className="h-10 bg-blue-600 rounded"></div>
  <div className="h-10 bg-blue-700 rounded"></div>
  <div className="h-10 bg-blue-800 rounded"></div>
  <div className="h-10 bg-blue-900 rounded"></div>
  <div className="h-10 bg-blue-950 rounded"></div>
</div>`}
          />

          {/* --- أسماء الألوان المتاحة --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">ألوان الطيف المتاحة</h3>
          <p className="mb-3">
            يوفر Tailwind ألوانًا متنوعة تشمل:</p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-slate-500"></span> <code className="text-xs">slate</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-gray-500"></span> <code className="text-xs">gray</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-zinc-500"></span> <code className="text-xs">zinc</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-neutral-500"></span> <code className="text-xs">neutral</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-stone-500"></span> <code className="text-xs">stone</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-red-500"></span> <code className="text-xs">red</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-orange-500"></span> <code className="text-xs">orange</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-amber-500"></span> <code className="text-xs">amber</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-yellow-500"></span> <code className="text-xs">yellow</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-lime-500"></span> <code className="text-xs">lime</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-green-500"></span> <code className="text-xs">green</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-emerald-500"></span> <code className="text-xs">emerald</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-teal-500"></span> <code className="text-xs">teal</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-cyan-500"></span> <code className="text-xs">cyan</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-sky-500"></span> <code className="text-xs">sky</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-500"></span> <code className="text-xs">blue</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-indigo-500"></span> <code className="text-xs">indigo</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-violet-500"></span> <code className="text-xs">violet</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-purple-500"></span> <code className="text-xs">purple</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-fuchsia-500"></span> <code className="text-xs">fuchsia</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-pink-500"></span> <code className="text-xs">pink</code></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-rose-500"></span> <code className="text-xs">rose</code></div>
          </div>

          {/* --- ألوان الخلفيات --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">ألوان الخلفيات (Background Colors)</h3>
          <CodeBlock
            language="html"
            code={`<div className="bg-white p-4 rounded-lg">خلفية بيضاء</div>
<div className="bg-slate-100 p-4 rounded-lg">خلفية slate فاتحة</div>
<div className="bg-blue-500 p-4 rounded-lg text-white">خلفية زرقاء</div>
<div className="bg-emerald-500 p-4 rounded-lg text-white">خلفية زمردية</div>
<div className="bg-rose-100 p-4 rounded-lg">خلفية وردية فاتحة</div>`}
          />

          {/* --- ألوان النصوص --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">ألوان النصوص (Text Colors)</h3>
          <CodeBlock
            language="html"
            code={`<p className="text-gray-900">نص أسود فاتح</p>
<p className="text-gray-600">نص رمادي متوسط</p>
<p className="text-gray-400">نص رمادي فاتح</p>
<p className="text-blue-600">نص أزرق</p>
<p className="text-red-500">نص أحمر (للتحذيرات)</p>
<p className="text-green-600">نص أخضر (للنجاح)</p>
<p className="text-amber-500">نص كهرماني (للهوامش)</p>`}
          />

          {/* --- ألوان الحدود --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">ألوان الحدود (Border Colors)</h3>
          <CodeBlock
            language="html"
            code={`<div className="border-2 border-gray-300 p-4 rounded-lg mb-2">حد رمادي فاتح</div>
<div className="border-2 border-blue-500 p-4 rounded-lg mb-2">حد أزرق</div>
<div className="border-2 border-red-400 p-4 rounded-lg mb-2">حد أحمر</div>
<div className="border-2 border-emerald-300 p-4 rounded-lg">حد أخضر فاتح</div>`}
          />

          {/* --- ألوان الحلقات --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">ألوان الحلقات (Ring Colors)</h3>
          <p className="mb-3">
            تُستخدم مع <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">ring</code> لإنشاء حلقة حول العناصر (ممتاز للتركيز):
          </p>
          <CodeBlock
            language="html"
            code={`<button className="ring-4 ring-blue-300 p-4 rounded-lg">
  زر مع حلقة زرقاء
</button>

<button className="ring-4 ring-offset-2 ring-blue-500 p-4 rounded-lg">
  زر مع حلقة ومسافة إزاحة
</button>`}
          />

          {/* --- ألوان العناصر النائبة --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">ألوان العناصر النائبة (Placeholder Colors)</h3>
          <CodeBlock
            language="html"
            code={`<input
  type="text"
  placeholder="اكتب اسمك هنا..."
  className="placeholder-gray-400 border border-gray-300 p-3 rounded-lg w-full"
/>

<input
  type="email"
  placeholder="example@email.com"
  className="placeholder-gray-500 focus:ring-2 focus:ring-blue-500 border p-3 rounded-lg w-full"
/>`}
          />

          {/* --- فواصل الأقسام --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">فواصل الأقسام (Dividers)</h3>
          <CodeBlock
            language="html"
            code={`<div className="divide-y divide-gray-200">
  <div className="p-4">قسم أول</div>
  <div className="p-4">قسم ثاني</div>
  <div className="p-4">قسم ثالث</div>
</div>`}
          />

          {/* --- معدلات الشفافية (Opacity Modifiers) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">معدلات الشفافية (Opacity Modifiers)</h3>
          <p className="mb-3">
            من أقوى مميزات Tailwind — يمكنك تحديد الشفافية مباشرة مع اللون باستخدام علامة
            <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">/</code>:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- شفافية 75% للون الخلفية -->
<div className="bg-blue-500/75 p-4 rounded-lg text-white">
  خلفية زرقاء بشفافية 75%
</div>

<!-- شفافية 50% لون النص -->
<p className="text-gray-500/50">
  نص رمادي بشفافية 50%
</p>

<!-- شفافية 25% للحدود -->
<div className="border-2 border-red-500/25 p-4 rounded-lg">
  حد أحمر بشفافية 25%
</div>

<!-- استخدام المتغيرات الديناميكية -->
<div className="bg-blue-500/[0.15] p-4 rounded-lg">
  شفافية مخصصة 15%
</div>`}
          />

          {/* --- مثال عملي: عرض لوحة الألوان --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">مثال عملي: عرض لوحة الألوان</h3>
          <CodeBlock
            language="html"
            code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {[
    { name: "Sky", colors: ["sky-100", "sky-300", "sky-500", "sky-700"] },
    { name: "Emerald", colors: ["emerald-100", "emerald-300", "emerald-500", "emerald-700"] },
    { name: "Violet", colors: ["violet-100", "violet-300", "violet-500", "violet-700"] },
  ].map((colorSet) => (
    <div key={colorSet.name} className="rounded-xl overflow-hidden border">
      <div className="p-3 font-bold bg-gray-50">{colorSet.name}</div>
      {colorSet.colors.map((c) => (
        <div
          key={c}
          className={\`h-12 bg-\${c}\`}
        />
      ))}
    </div>
  ))}
</div>`}
          />
        </LessonSection>

        {/* ===== Section 3: الخلفيات والحدود (Backgrounds & Borders) ===== */}
        <LessonSection title="الخلفيات والحدود (Backgrounds &amp; Borders)">
          <p className="text-lg leading-relaxed mb-4">
            Tailwind توفر تحكمًا دقيقًا في الخلفيات والحدود، بما في ذلك التدرجات اللونية، والأحجام، والموضع، والأشكال.
          </p>

          {/* --- لون الخلفية --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">لون الخلفية (Background Color)</h3>
          <CodeBlock
            language="html"
            code={`<div className="bg-white p-4">خلفية بيضاء</div>
<div className="bg-gray-100 p-4">خلفية رمادية فاتحة</div>
<div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white rounded-lg">
  خلفية متدرجة
</div>`}
          />

          {/* --- صورة الخلفية --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">صورة الخلفية (Background Image)</h3>
          <p className="mb-3">
            Tailwind يدعم التدرجات اللونية (Gradients) بشكل ممتاز:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- تدرج خطي أفقي -->
<div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-xl text-white">
  تدرج من الأزرق إلى السماوي (يسار لليمين)
</div>

<!-- تدرج عمودي -->
<div className="bg-gradient-to-b from-purple-500 to-pink-500 p-6 rounded-xl text-white">
  تدرج من البنفسجي إلى الوردي (علوي لسفلي)
</div>

<!-- تدرج قطري -->
<div className="bg-gradient-to-br from-amber-400 to-orange-600 p-6 rounded-xl text-white">
  تدرج من الكهرماني إلى البرتقالي (قطري)
</div>

<!-- تدرج مع الوسيط (via) -->
<div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-xl text-white">
  تدرج ثلاثي الألوان باستخدام via
</div>

<!-- إزالة صورة الخلفية -->
<div className="bg-none">بدون صورة خلفية</div>`}
          />

          {/* --- حجم الخلفية --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">حجم الخلفية (Background Size)</h3>
          <CodeBlock
            language="html"
            code={`<div className="bg-auto h-32 bg-cover bg-center bg-no-repeat bg-[url('/image.jpg')]">
  الخلفية بحجم تلقائي
</div>
<div className="bg-cover h-32 bg-center bg-no-repeat bg-[url('/image.jpg')]">
  الخلفية تغطي الحاوية بالكامل
</div>
<div className="bg-contain h-32 bg-center bg-no-repeat bg-[url('/image.jpg')]">
  الخلفية ت fit داخل الحاوية
</div>`}
          />

          {/* --- موضع الخلفية --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">موضع الخلفية (Background Position)</h3>
          <CodeBlock
            language="html"
            code={`<div className="bg-center bg-cover bg-no-repeat">وسط</div>
<div className="bg-top bg-cover bg-no-repeat">أعلى</div>
<div className="bg-bottom bg-cover bg-no-repeat">أسفل</div>
<div className="bg-left bg-cover bg-no-repeat">يسار</div>
<div className="bg-right bg-cover bg-no-repeat">يمين</div>`}
          />

          {/* --- الحدود (Borders) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">الحدود (Borders)</h3>
          <p className="mb-3">
            التحكم في الحدود بجميع جوانبها:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- سُمك الحدود -->
<div className="border-0 p-4">بدون حدود</div>
<div className="border p-4 mb-2">حد عادي (1px)</div>
<div className="border-2 p-4 mb-2">حد سميك (2px)</div>
<div className="border-4 p-4 mb-2">حد أسمك (4px)</div>
<div className="border-8 p-4">حد سمين جداً (8px)</div>

<!-- نمط الحدود -->
<div className="border-2 border-solid border-gray-300 p-4 mb-2">حد متصل</div>
<div className="border-2 border-dashed border-gray-300 p-4 mb-2">حد متقطع</div>
<div className="border-2 border-dotted border-gray-300 p-4 mb-2">حد منقط</div>
<div className="border-2 border-double border-gray-300 p-4">حد مزدوج</div>

<!-- حدود جزئية -->
<div className="border-t-2 border-blue-500 p-4">حد علوي فقط</div>
<div className="border-b-2 border-red-500 p-4">حد سفلي فقط</div>
<div className="border-x-2 border-green-500 p-4">حدود جانبية</div>
<div className="border-y-2 border-purple-500 p-4">حدود علوية وسفلي</div>`}
          />

          {/* --- نصف قطر الحدود (Border Radius) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">نصف قطر الحدود (Border Radius)</h3>
          <p className="mb-3">
            تحديد شكل زوايا العناصر:
          </p>
          <CodeBlock
            language="html"
            code={`<div className="grid grid-cols-3 gap-4">
  <div className="rounded-none bg-blue-100 p-6 text-center">rounded-none</div>
  <div className="rounded-sm bg-blue-200 p-6 text-center">rounded-sm</div>
  <div className="rounded bg-blue-300 p-6 text-center">rounded</div>
  <div className="rounded-md bg-blue-400 p-6 text-center text-white">rounded-md</div>
  <div className="rounded-lg bg-blue-500 p-6 text-center text-white">rounded-lg</div>
  <div className="rounded-xl bg-blue-600 p-6 text-center text-white">rounded-xl</div>
  <div className="rounded-2xl bg-blue-700 p-6 text-center text-white">rounded-2xl</div>
  <div className="rounded-3xl bg-blue-800 p-6 text-center text-white">rounded-3xl</div>
  <div className="rounded-full bg-blue-900 p-6 text-center text-white w-24 h-24 flex items-center justify-center">rounded-full</div>
</div>`}
          />

          {/* --- مثال عملي: بطاقة مع ترويسة متدرجة --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">مثال عملي: بطاقة مع ترويسة متدرجة</h3>
          <CodeBlock
            language="html"
            code={`<div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">
  {/* ترويسة متدرجة */}
  <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white">
    <h3 className="text-2xl font-bold mb-2">عنوان البطاقة</h3>
    <p className="text-white/80">وصف تفصيلي للبطاقة يظهر هنا</p>
  </div>
  {/* محتوى البطاقة */}
  <div className="p-6">
    <p className="text-gray-600 leading-relaxed">
      هذا محتوى البطاقة الرئيسي مع نص توضيحي طويل.
    </p>
    <div className="flex items-center gap-2 mt-4">
      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">وسم 1</span>
      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">وسم 2</span>
    </div>
  </div>
</div>`}
          />
        </LessonSection>

        {/* ===== Section 4: الظلال والتدرجات (Shadows & Gradients) ===== */}
        <LessonSection title="الظلال والتدرجات (Shadows &amp; Gradients)">
          <p className="text-lg leading-relaxed mb-4">
            الظلال والتدرجات تعطي عمقًا وحيوية للعناصر. Tailwind توفر مجموعة منظمة من الظلال الجاهزة
            وأدوات قوية للتدرجات اللونية.
          </p>

          {/* --- ظل الصندوق (Box Shadow) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">ظل الصندوق (Box Shadow)</h3>
          <CodeBlock
            language="html"
            code={`<div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
  <div className="shadow-none bg-white p-6 rounded-xl text-center">
    <p className="font-medium text-gray-800">shadow-none</p>
    <p className="text-sm text-gray-500 mt-1">بدون ظل</p>
  </div>
  <div className="shadow-sm bg-white p-6 rounded-xl text-center">
    <p className="font-medium text-gray-800">shadow-sm</p>
    <p className="text-sm text-gray-500 mt-1">ظل صغير</p>
  </div>
  <div className="shadow bg-white p-6 rounded-xl text-center">
    <p className="font-medium text-gray-800">shadow</p>
    <p className="text-sm text-gray-500 mt-1">ظل افتراضي</p>
  </div>
  <div className="shadow-md bg-white p-6 rounded-xl text-center">
    <p className="font-medium text-gray-800">shadow-md</p>
    <p className="text-sm text-gray-500 mt-1">ظل متوسط</p>
  </div>
  <div className="shadow-lg bg-white p-6 rounded-xl text-center">
    <p className="font-medium text-gray-800">shadow-lg</p>
    <p className="text-sm text-gray-500 mt-1">ظل كبير</p>
  </div>
  <div className="shadow-xl bg-white p-6 rounded-xl text-center">
    <p className="font-medium text-gray-800">shadow-xl</p>
    <p className="text-sm text-gray-500 mt-1">ظل كبير جداً</p>
  </div>
  <div className="shadow-2xl bg-white p-6 rounded-xl text-center">
    <p className="font-medium text-gray-800">shadow-2xl</p>
    <p className="text-sm text-gray-500 mt-1">ظل ضخم</p>
  </div>
  <div className="shadow-inner bg-gray-100 p-6 rounded-xl text-center">
    <p className="font-medium text-gray-800">shadow-inner</p>
    <p className="text-sm text-gray-500 mt-1">ظل داخلي</p>
  </div>
</div>`}
          />

          {/* --- ظل النص --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">ظل النص (Text Shadow)</h3>
          <p className="mb-3">
            Tailwind لا يوفر كلاسات مباشرة لظل النص، لكن يمكنك استخدام القيم العشوائية (Arbitrary Values):
          </p>
          <CodeBlock
            language="html"
            code={`<!-- ظل نص بسيط -->
<p className="text-4xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
  نص مع ظل
</p>

<!-- ظل نص متعدد -->
<p className="text-3xl font-bold text-white [text-shadow:0_0_10px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,0.5)]">
  نص متوهج (Glow Effect)
</p>`}
          />

          {/* --- التدرجات (Gradients) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">التدرجات (Gradients) — بالتفصيل</h3>
          <p className="mb-3">
            التدرجات من أقوى أدوات التصميم في Tailwind. يمكنك التحكم بالاتجاه والألوان والوسائط:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- اتجاهات التدرج -->
<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white rounded-lg mb-2">
  from-cyan-500 to-blue-500 — يمين
</div>
<div className="bg-gradient-to-l from-rose-500 to-indigo-500 p-4 text-white rounded-lg mb-2">
  from-rose-500 to-indigo-500 — يسار
</div>
<div className="bg-gradient-to-t from-emerald-500 to-teal-400 p-4 text-white rounded-lg mb-2">
  from-emerald-500 to-teal-400 — للأعلى
</div>
<div className="bg-gradient-to-b from-amber-200 to-amber-600 p-4 text-white rounded-lg mb-2">
  from-amber-200 to-amber-600 — للأسفل
</div>
<div className="bg-gradient-to-tr from-fuchsia-500 to-pink-500 p-4 text-white rounded-lg mb-2">
  from-fuchsia-500 to-pink-500 — قطري أعلى يمين
</div>
<div className="bg-gradient-to-bl from-violet-500 to-blue-500 p-4 text-white rounded-lg">
  from-violet-500 to-blue-500 — قطري أسفل يسار
</div>`}
          />

          {/* --- تدرجات متعددة الألوان --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">تدرجات متعددة الألوان مع via</h3>
          <p className="mb-3">
            يمكنك إضافة لون وسيط باستخدام <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">via-*</code>:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- تدرج ثلاثي الألوان -->
<div className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 p-6 rounded-xl text-white">
  <h4 className="text-xl font-bold mb-2">تدرج ثلاثي الألوان</h4>
  <p className="text-white/80">from-blue-600 via-purple-500 to-pink-500</p>
</div>

<!-- تدرج مع via شفاف -->
<div className="bg-gradient-to-r from-sky-400 via-transparent to-indigo-400 p-6 rounded-xl text-white">
  <h4 className="text-xl font-bold">تدرج مع منتصف شفاف</h4>
</div>`}
          />

          {/* --- مثال عملي: بطاقة تدرج جميلة --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">مثال عملي: بطاقة تدرج جميلة</h3>
          <CodeBlock
            language="html"
            code={`<div className="relative overflow-hidden rounded-2xl p-8 text-white shadow-xl">
  {/* خلفية متدرجة */}
  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400" />

  {/* زخرفة دائرية */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />

  {/* المحتوى */}
  <div className="relative z-10">
    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 text-2xl">
      ✨
    </div>
    <h3 className="text-2xl font-bold mb-2">بطاقة متدرجة</h3>
    <p className="text-white/80 leading-relaxed">
      بطاقة مع خلفية متدرجة وأشكال زخرفية شفافة لإضافة عمق بصري مذهل.
    </p>
  </div>
</div>`}
          />
        </LessonSection>

        {/* ===== Section 5: الشفافية والعمليات (Opacity & Blend) ===== */}
        <LessonSection title="الشفافية والعمليات (Opacity &amp; Blend)">
          <p className="text-lg leading-relaxed mb-4">
            التحكم في الشفافية و蛍合 الألوان (Blending) من الأدوات المتقدمة التي تعطي تأثيرات بصرية قوية.
          </p>

          {/* --- الشفافية (Opacity) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">الشفافية (Opacity)</h3>
          <p className="mb-3">
            فئات <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">opacity-*</code> تتحكم في شفافية العنصر بالكامل:
          </p>
          <CodeBlock
            language="html"
            code={`<div className="space-y-2">
  <div className="flex items-center gap-4">
    <span className="w-20 text-sm text-gray-600">opacity-0</span>
    <div className="h-12 flex-1 bg-blue-500 opacity-0 rounded-lg"></div>
  </div>
  <div className="flex items-center gap-4">
    <span className="w-20 text-sm text-gray-600">opacity-10</span>
    <div className="h-12 flex-1 bg-blue-500 opacity-10 rounded-lg"></div>
  </div>
  <div className="flex items-center gap-4">
    <span className="w-20 text-sm text-gray-600">opacity-25</span>
    <div className="h-12 flex-1 bg-blue-500 opacity-25 rounded-lg"></div>
  </div>
  <div className="flex items-center gap-4">
    <span className="w-20 text-sm text-gray-600">opacity-50</span>
    <div className="h-12 flex-1 bg-blue-500 opacity-50 rounded-lg"></div>
  </div>
  <div className="flex items-center gap-4">
    <span className="w-20 text-sm text-gray-600">opacity-75</span>
    <div className="h-12 flex-1 bg-blue-500 opacity-75 rounded-lg"></div>
  </div>
  <div className="flex items-center gap-4">
    <span className="w-20 text-sm text-gray-600">opacity-100</span>
    <div className="h-12 flex-1 bg-blue-500 opacity-100 rounded-lg"></div>
  </div>
</div>`}
          />

          {/* --- مزيج الخلفية (Background Blend) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">مزيج الخلفية (Background Blend Mode)</h3>
          <p className="mb-3">
            فئات <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">bg-blend-*</code> تتحكم في كيفية خلط طبقات الخلفية المتعددة:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- خلفية صورة مع لون ومزيج -->
<div
  className="h-32 bg-[url('/image.jpg')] bg-cover bg-center bg-blend-multiply bg-blue-500 rounded-lg"
>
  مزيج Multiply
</div>

<div
  className="h-32 bg-[url('/image.jpg')] bg-cover bg-center bg-blend-overlay bg-amber-500 rounded-lg"
>
  مزيج Overlay
</div>`}
          />

          {/* --- مزيج النص (Mix Blend) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">مزيج النص (Mix Blend Mode)</h3>
          <CodeBlock
            language="html"
            code={`<!-- النص يمتزج مع الخلفية -->
<div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-xl">
  <p className="text-white text-4xl font-bold mix-blend-overlay">
    نص مع مزيج Overlay
  </p>
</div>

<div className="bg-[url('/pattern.jpg')] bg-cover p-8 rounded-xl relative">
  <p className="text-white text-3xl font-bold mix-blend-difference">
    نص يظهر بوضوح فوق أي خلفية
  </p>
</div>`}
          />
        </LessonSection>

        {/* ===== Section 6: الحركات والتحولات (Transitions & Animations) ===== */}
        <LessonSection title="الحركات والتحولات (Transitions &amp; Animations)">
          <p className="text-lg leading-relaxed mb-4">
            الحركات تجعل واجهتك أكثر حيوية وتفاعلية. Tailwind توفر مجموعة منظمة من
            الانتقالات (Transitions) والحركات (Animations).
          </p>

          {/* --- الانتقالات (Transitions) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">الانتقالات (Transitions)</h3>
          <p className="mb-3">
            فئات <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">transition-*</code> تحدد أي خصائص CSS تتحول بسلاسة:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- تغيير جميع الخصائص -->
<button className="transition-all duration-300 hover:scale-105 hover:bg-blue-700 bg-blue-500 text-white px-6 py-3 rounded-lg">
  transition-all — كل شيء يتحرك
</button>

<!-- تغيير الألوان فقط -->
<button className="transition-colors duration-200 hover:bg-green-600 bg-blue-500 text-white px-6 py-3 rounded-lg">
  transition-colors — الألوان فقط
</button>

<!-- تغيير الشفافية -->
<button className="transition-opacity hover:opacity-75 bg-blue-500 text-white px-6 py-3 rounded-lg">
  transition-opacity — الشفافية
</button>

<!-- تغيير الظل -->
<button className="transition-shadow duration-300 hover:shadow-xl bg-blue-500 text-white px-6 py-3 rounded-lg">
  transition-shadow — الظل
</button>

<!-- تغيير التحول -->
<button className="transition-transform hover:rotate-3 hover:scale-110 bg-blue-500 text-white px-6 py-3 rounded-lg">
  transition-transform — التحول والتدوير
</button>`}
          />

          {/* --- المدة (Duration) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">مدة الانتقال (Duration)</h3>
          <p className="mb-3">
            التحكم في سرعة الانتقال من <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">duration-75</code> (75 مللي ثانية) إلى
            <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">duration-1000</code> (ثانية واحدة):
          </p>
          <CodeBlock
            language="html"
            code={`<div className="space-x-2">
  <button className="transition-colors duration-75 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
    75ms
  </button>
  <button className="transition-colors duration-150 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
    150ms
  </button>
  <button className="transition-colors duration-200 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
    200ms
  </button>
  <button className="transition-colors duration-300 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
    300ms
  </button>
  <button className="transition-colors duration-500 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
    500ms
  </button>
  <button className="transition-colors duration-700 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
    700ms
  </button>
  <button className="transition-colors duration-1000 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
    1000ms
  </button>
</div>`}
          />

          {/* --- توقيت الحركة (Timing Function) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">توقيت الحركة (Timing Function)</h3>
          <CodeBlock
            language="html"
            code={`<div className="space-x-2">
  <button className="transition-transform duration-500 ease-linear hover:translate-x-4 bg-gray-500 text-white px-4 py-2 rounded-lg">
    ease-linear
  </button>
  <button className="transition-transform duration-500 ease-in hover:translate-x-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
    ease-in
  </button>
  <button className="transition-transform duration-500 ease-out hover:translate-x-4 bg-green-500 text-white px-4 py-2 rounded-lg">
    ease-out
  </button>
  <button className="transition-transform duration-500 ease-in-out hover:translate-x-4 bg-purple-500 text-white px-4 py-2 rounded-lg">
    ease-in-out
  </button>
</div>`}
          />

          {/* --- التأخير (Delay) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">تأخير الانتقال (Delay)</h3>
          <p className="mb-3">
            يمكنك تأخير بداية الانتقال باستخدام <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">delay-*</code>:
          </p>
          <CodeBlock
            language="html"
            code={`<div className="space-x-2">
  <button className="transition-all duration-300 delay-75 hover:bg-blue-700 bg-blue-500 text-white px-4 py-2 rounded-lg">
    delay-75
  </button>
  <button className="transition-all duration-300 delay-150 hover:bg-blue-700 bg-blue-500 text-white px-4 py-2 rounded-lg">
    delay-150
  </button>
  <button className="transition-all duration-300 delay-300 hover:bg-blue-700 bg-blue-500 text-white px-4 py-2 rounded-lg">
    delay-300
  </button>
  <button className="transition-all duration-300 delay-500 hover:bg-blue-700 bg-blue-500 text-white px-4 py-2 rounded-lg">
    delay-500
  </button>
</div>`}
          />

          {/* --- الحركات المدمجة (Built-in Animations) --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">الحركات المدمجة (Built-in Animations)</h3>
          <p className="mb-3">
            Tailwind توفر 4 حركات جاهزة可以用:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- دوران مستمر — مناسب لأيقونات التحميل -->
<div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />

<!-- نبض — يكبر ويصغر -->
<div className="animate-pulse bg-blue-500 h-4 rounded-full w-48 mx-auto my-4" />

<!-- ارتداد — يقفز للأعلى -->
<div className="animate-bounce text-4xl text-center my-4">⬆️</div>

<!-- نبض حركي — يظهر ويختفي -->
<div className="animate-ping w-4 h-4 bg-blue-500 rounded-full mx-auto my-4" />`}
          />

          {/* --- Custom Keyframes --- */}
          <h3 className="text-xl font-bold mt-6 mb-3">Keyframes مخصصة (Custom Keyframes)</h3>
          <p className="mb-3">
            يمكنك إنشاء حركات مخصصة باستخدام القيم العشوائية مع
            <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">animate-[...]</code>:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- حركة مخصصة باستخدام arbitrary values -->
<div className="animate-[fadeIn_1s_ease-in-out] [animation-fill-mode:forwards]">
  نص يظهر تدريجيًا
</div>

<!-- حركة تأرجح (sway) -->
<div className="animate-[sway_2s_ease-in-out_infinite] [animation-fill-mode:forwards]">
  عنصر يتأرجح
</div>

<!-- يمكنك تحديد الـ keyframes في ملف CSS أو عبر @keyframes في Tailwind config -->
<div className="animate-[slideInFromRight_0.5s_ease-out]">
  يظهر من اليمين
</div>`}
          />
        </LessonSection>

        {/* ===== Section 7: مثال عملي — بطاقة منتج احترافية ===== */}
        <LessonSection title="مثال عملي — بطاقة منتج احترافية">
          <p className="text-lg leading-relaxed mb-4">
            لنجمع كل ما تعلمناه في بطاقة منتج احترافية تستخدم الطباعة والألوان والتأثيرات:
          </p>
          <CodeBlock
            language="html"
            code={`<div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
  {/* صورة المنتج مع تدرج */}
  <div className="relative h-56 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    {/* شارة الخصم */}
    <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
      -30%
    </div>
    {/* أيقونة المفضلة */}
    <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
      ♡
    </div>
    {/* اسم المنتج */}
    <div className="absolute bottom-4 left-4 right-4">
      <h3 className="text-2xl font-extrabold text-white drop-shadow-lg">
        سماعة AirPods Max
      </h3>
    </div>
  </div>

  {/* معلومات المنتج */}
  <div className="p-5">
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
      سماعات لاسلكية فائقة الجودة مع خفض ضوضاء نشط وصوت مكاني.
    </p>

    {/* التقييم */}
    <div className="flex items-center gap-2 mb-4">
      <div className="flex text-amber-400 text-sm">
        ★★★★★
      </div>
      <span className="text-sm text-gray-500">(128 تقييم)</span>
    </div>

    {/* السعر */}
    <div className="flex items-center justify-between">
      <div>
        <span className="text-2xl font-extrabold text-indigo-600">$349</span>
        <span className="text-sm text-gray-400 line-through mr-2">$499</span>
      </div>
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95">
        أضف للسلة
      </button>
    </div>

    {/* مميزات سريعة */}
    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
      <div className="flex items-center gap-2 py-2 text-sm text-gray-600 dark:text-gray-400">
        <span className="text-green-500">✓</span> شحن مجاني
      </div>
      <div className="flex items-center gap-2 py-2 text-sm text-gray-600 dark:text-gray-400">
        <span className="text-green-500">✓</span> ضمان لمدة سنة
      </div>
      <div className="flex items-center gap-2 py-2 text-sm text-gray-600 dark:text-gray-400">
        <span className="text-green-500">✓</span> إرجاع خلال 30 يوم
      </div>
    </div>
  </div>
</div>`}
          />
        </LessonSection>

        {/* ===== Section 8: الأخطاء الشائعة ===== */}
        <LessonSection title="الأخطاء الشائعة">
          <p className="text-lg leading-relaxed mb-4">
            تجنب هذه الأخطاء الشائعة عند العمل مع الألوان والتأثيرات في Tailwind:
          </p>

          <div className="space-y-4">
            {/* الخطأ 1 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">
                ١. استخدام ألوان كثيرة ومتناقضة
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                استخدام 10 ألوان مختلفة في صفحة واحدة يجعل التصميم فوضوي وغير متسق.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border text-sm">
                <span className="text-red-500 font-bold">خطأ:</span>{` `}
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">text-red-500 bg-blue-50 border-green-500 text-purple-600 bg-yellow-100</code>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border text-sm mt-2">
                <span className="text-green-500 font-bold">صحيح:</span>{` `}
                التزم بـ 2-3 ألوان رئيسية من لوحة الألوان.
              </div>
            </div>

            {/* الخطأ 2 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">
                ٢. الإفراط في استخدام الظلال
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                استخدام <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">shadow-2xl</code> على كل عنصر يفقد الأهمية ويُضعف العمق البصري.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border text-sm mt-2">
                <span className="text-green-500 font-bold">صحيح:</span>{` `}
                استخدم الظلال باعتدال — العناصر المهمة تحصل على ظل أقوى.
              </div>
            </div>

            {/* الخطأ 3 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">
                ٣. عدم استخدام معدلات الشفافية (Opacity Modifiers)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                كتابة ألوان بشفافية عشوائية بدلاً من استخدام <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">bg-blue-500/75</code>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border text-sm">
                <span className="text-red-500 font-bold">خطأ:</span>{` `}
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">style=&#123;&#123; backgroundColor: &apos;rgba(59,130,246,0.5)&apos; &#125;&#125;</code>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border text-sm mt-2">
                <span className="text-green-500 font-bold">صحيح:</span>{` `}
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">bg-blue-500/50</code>
              </div>
            </div>

            {/* الخطأ 4 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">
                ٤. التدرجات المتعددة المعقدة
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                استخدام 4+ ألوان في تدرج واحد يجعل اللون غير واضح وفوضوي. التدرجات الأفضل تتكون من 2-3 ألوان.
              </p>
            </div>

            {/* الخطأ 5 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">
                ٥. نسيان Dark Mode
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                تصميم الألوان فقط للوضع الفاتح بدون مراعاة الوضع الداكن. استخدم دائمًا
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dark:</code> modifiers.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ===== Section 9: أفضل الممارسات ===== */}
        <LessonSection title="أفضل الممارسات">
          <p className="text-lg leading-relaxed mb-4">
            اتبع هذه الممارسات للحصول على تصميم احترافي ومتقن:
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                ١. استخدم لوحة ألوان Tailwind الافتراضية
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                الألوان المخصصة في Tailwind مختبرة بعناية للتوافق والتناغم. استخدمها بدلاً من اختيار ألوان عشوائية.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                ٢. استخدم Opacity Modifiers بدلاً من opacity المنفصلة
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">bg-blue-500/75</code> أفضل من
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">bg-blue-500 opacity-75</code> لأنها تؤثر فقط على اللون وليس العنصر بالكامل.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                ٣. استخدم transition-colors لتأثيرات Hover
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                بدلاً من <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">transition-all</code>، حدد ما تريد تحريكه
                مثل <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">transition-colors</code> لأفضل أداء.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                ٤. حدّد عدد محاور التدرج إلى 2-3 ألوان
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                التدرجات البسيطة أجمل وأكثر احترافية. استخدم <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">from-*</code> و
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">to-*</code> مع <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">via-*</code> فقط عند الحاجة.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                ٥. استخدم rounded-xl بشكل افتراضي
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                نصف قطر <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">rounded-xl</code> يعطي مظهرًا حديثًا ومتناسقًا لمعظم العناصر.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                ٦. اجعل الحركات سريعة وطبيعية
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                durations بين <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">duration-150</code> و
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">duration-300</code> هي الأفضل لمعظم التفاعلات.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                ٧. نمط الألوان المتسلسل (Consistent Color Pattern)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                استخدم نفس النمط في كل مكان: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">primary-500</code> للعناصر الأساسية،
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">gray-500</code> للنصوص الثانوية،
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">green-500</code> للنجاح،
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">red-500</code> للأخطاء.
              </p>
            </div>
          </div>
        </LessonSection>

        {/* ===== Section 10: ملخص + Quiz + Challenge + CheatSheet ===== */}
        <LessonSection title="ملخص الدرس">
          <p className="text-lg leading-relaxed mb-4">
            تعلمنا في هذا الدرس كيفية التحكم الكامل في المظهر البصري لعناصر واجهة المستخدم باستخدام Tailwind CSS:
          </p>
          <ul className="space-y-2 list-disc list-inside mb-6">
            <li><strong>الطباعة:</strong> أحجام الخطوط، الأوزان، العائلات، الارتفاعات، التباعدات، المحاذاة، والزخرفة</li>
            <li><strong>الألوان:</strong> لوحة الألوان الشاملة مع 50+ لونًا و11 درجة لكل لون</li>
            <li><strong>الخلفيات والحدود:</strong> التدرجات، الأحجام، الموضع، نصف القطر، وأنماط الحدود</li>
            <li><strong>الظلال:</strong> 8 درجات ظل من shadow-sm إلى shadow-2xl مع shadow-inner</li>
            <li><strong>الشفافية:</strong> Opacity modifiers للتحكم الدقيق في الشفافية</li>
            <li><strong>الحركات:</strong> Transitions و Animations مع المدة والتوقيت والتأخير</li>
          </ul>
        </LessonSection>

        {/* ===== Quiz ===== */}
        <LessonSection title="اختبر معلوماتك">
          <Quiz
            question="أي من الكلاسات التالية يُنشئ تدرجًا لونيًا قطريًا من الأزرق إلى البنفسجي؟"
            options={[
              "bg-gradient-to-r from-blue-500 to-purple-500",
              "bg-gradient-to-br from-blue-500 to-purple-500",
              "bg-gradient-to-t from-blue-500 to-purple-500",
              "bg-blue-to-purple-500",
            ]}
            correctAnswer={1}
            explanation={`الإجابة الصحيحة هي bg-gradient-to-br which creates a diagonal gradient from top-left to bottom-right. The to-r direction is horizontal, and to-t is vertical upward.`}
          />

          <Quiz
            question="كيف تُضيف شفافية 50% لون الخلفية الأزرق في Tailwind؟"
            options={[
              "bg-blue-500 opacity-50",
              "bg-blue-500/50",
              "bg-blue/50",
              "transparent-blue-500",
            ]}
            correctAnswer={1}
            explanation={`الإجابة الصحيحة هي bg-blue-500/50. علامة / تسمح بتحديد الشفافية مباشرة مع اللون. أما opacity-50 فتؤثر على العنصر بالكامل وليس اللون فقط.`}
          />

          <Quiz
            question="أي حركة مدمجة في Tailwind تُستخدم لإنشاء أيقونة تحميل دوّارة؟"
            options={[
              "animate-pulse",
              "animate-bounce",
              "animate-spin",
              "animate-ping",
            ]}
            correctAnswer={2}
            explanation={`animate-spin تُنشئ حركة دوران مستمرة، وهي المثالية لأيقونات التحميل. animate-pulse للنبض، animate-bounce للقفز، وanimate-ping للنبض الحركي.`}
          />

          <Quiz
            question="ما هو الفرق بين transition-colors و transition-all؟"
            options={[
              "لا يوجد فرق بينهما",
              "transition-all أسرع من transition-colors",
              "transition-colors يتحرك فقط عند تغيير الألوان، بينما transition-all يتحرك عند تغيير أي خاصية",
              "transition-all لا يدعم Dark Mode",
            ]}
            correctAnswer={2}
            explanation={`transition-all يتحرك عند تغيير أي خاصية CSS (اللون، الحجم، الظل، الموضع...)، بينما transition-colors يتحرك فقط عند تغيير الألوان. استخدام transition-colors أفضل للأداء.`}
          />
        </LessonSection>

        {/* ===== Challenge ===== */}
        <Challenge
          title="تحدي: بطاقة ملف شخصي"
          description="أنشئ بطاقة ملف شخصي (Profile Card) تحتوي على:"
        >
          <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: "var(--foreground)" }}>
            <li>صورة أفقية مع <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">rounded-full</code></li>
            <li>عنوان بخط <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-extrabold</code></li>
            <li>وظيفة بلون ثانوي <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-gray-500</code></li>
            <li>خلفية متدرجة <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">bg-gradient-to-r</code></li>
            <li>ظل <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">shadow-xl</code></li>
            <li>حدود <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">rounded-2xl</code></li>
            <li>أزرار بـ <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">transition-colors</code> وhover effects</li>
          </ul>
          <CodeBlock
            language="jsx"
            code={`<div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white">
  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-24" />
  <div className="px-6 pb-6 -mt-12">
    <img
      className="w-24 h-24 rounded-full border-4 border-white shadow-md"
      src="/avatar.jpg"
      alt="الملف الشخصي"
    />
    <h3 className="text-xl font-extrabold mt-3 text-gray-900">أحمد محمد</h3>
    <p className="text-gray-500 text-sm">مطور واجهات أمامية</p>
    <div className="flex gap-2 mt-4">
      <button className="flex-1 bg-indigo-500 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors duration-200 font-medium">
        متابعة
      </button>
      <button className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg transition-colors duration-200 font-medium">
        رسالة
      </button>
    </div>
  </div>
</div>`}
          />
        </Challenge>

        {/* ===== CheatSheet ===== */}
        <CheatSheet title="ملخص سريع — Typography, Colors & Effects">
          <div className="space-y-4 text-sm">
            {/* Typography */}
            <div>
              <h4 className="font-bold mb-2">الطباعة</h4>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 font-mono text-xs space-y-1">
                <p><code className="text-blue-500">text-xs ... text-9xl</code> — أحجام الخطوط</p>
                <p><code className="text-blue-500">font-thin ... font-black</code> — أوزان الخطوط</p>
                <p><code className="text-blue-500">font-sans | font-serif | font-mono</code> — عائلات الخطوط</p>
                <p><code className="text-blue-500">leading-none ... leading-loose</code> — ارتفاعات الأسطر</p>
                <p><code className="text-blue-500">tracking-tighter ... tracking-widest</code> — تباعد الحروف</p>
                <p><code className="text-blue-500">text-right | text-left | text-center | text-justify</code> — المحاذاة</p>
                <p><code className="text-blue-500">underline | overline | line-through | no-underline</code> — الزخرفة</p>
                <p><code className="text-blue-500">uppercase | lowercase | capitalize | normal-case</code> — تحويل الأحرف</p>
                <p><code className="text-blue-500">truncate | text-ellipsis | text-clip</code> — تجاوز النص</p>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h4 className="font-bold mb-2">الألوان</h4>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 font-mono text-xs space-y-1">
                <p><code className="text-blue-500">bg-* | text-* | border-*</code> — ألوان الخلفية والنص والحدود</p>
                <p><code className="text-blue-500">ring-* | placeholder-* | divide-*</code> — الحلقات والعناصر النائبة والفواصل</p>
                <p><code className="text-blue-500">bg-blue-500/75</code> — شفافية 75% للون الخلفية</p>
                <p><code className="text-blue-500">text-gray-500/50</code> — شفافية 50% للون النص</p>
                <p><code className="text-blue-500">50 | 100 | 200 ... 900 | 950</code> — 11 درجة لكل لون</p>
              </div>
            </div>

            {/* Backgrounds & Borders */}
            <div>
              <h4 className="font-bold mb-2">الخلفيات والحدود</h4>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 font-mono text-xs space-y-1">
                <p><code className="text-blue-500">bg-gradient-to-r/l/t/b/tr/bl/tl/br</code> — اتجاهات التدرج</p>
                <p><code className="text-blue-500">from-* | via-* | to-*</code> — ألوان التدرج</p>
                <p><code className="text-blue-500">bg-cover | bg-contain | bg-auto</code> — حجم الخلفية</p>
                <p><code className="text-blue-500">border | border-2 | border-4 | border-8</code> — سُمك الحدود</p>
                <p><code className="text-blue-500">border-solid | dashed | dotted | double</code> — أنماط الحدود</p>
                <p><code className="text-blue-500">rounded-none ... rounded-full</code> — نصف قطر الحدود</p>
              </div>
            </div>

            {/* Shadows */}
            <div>
              <h4 className="font-bold mb-2">الظلال</h4>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 font-mono text-xs space-y-1">
                <p><code className="text-blue-500">shadow-none | sm | md | lg | xl | 2xl | inner</code> — ظل الصندوق</p>
                <p><code className="text-blue-500">[text-shadow:...]</code> — ظل النص بقيم عشوائية</p>
              </div>
            </div>

            {/* Opacity & Blending */}
            <div>
              <h4 className="font-bold mb-2">الشفافية والمزج</h4>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 font-mono text-xs space-y-1">
                <p><code className="text-blue-500">opacity-0 ... opacity-100</code> — شفافية العنصر</p>
                <p><code className="text-blue-500">mix-blend-multiply | screen | overlay</code> — مزج النص</p>
                <p><code className="text-blue-500">bg-blend-multiply | screen | overlay</code> — مزج الخلفية</p>
              </div>
            </div>

            {/* Transitions & Animations */}
            <div>
              <h4 className="font-bold mb-2">الحركات والتحولات</h4>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 font-mono text-xs space-y-1">
                <p><code className="text-blue-500">transition | transition-all | transition-colors</code> — أنواع الانتقال</p>
                <p><code className="text-blue-500">duration-75 ... duration-1000</code> — مدة الانتقال</p>
                <p><code className="text-blue-500">ease-linear | in | out | in-out</code> — توقيت الحركة</p>
                <p><code className="text-blue-500">delay-75 ... delay-1000</code> — تأخير الانتقال</p>
                <p><code className="text-blue-500">animate-spin | ping | pulse | bounce</code> — حركات مدمجة</p>
              </div>
            </div>
          </div>
        </CheatSheet>

        {/* ===== التنقل ===== */}
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
