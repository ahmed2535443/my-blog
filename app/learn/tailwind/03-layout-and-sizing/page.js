import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function LayoutAndSizing() {
  const lesson = getLessonBySlug("tailwind", "03-layout-and-sizing");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== Section 1 ==================== */}
        <LessonSection id="layout-system" title="ما هو نظام التخطيط في Tailwind">
          <p className="text-lg leading-relaxed mb-4">
            يوفّر Tailwind CSS نظام تخطيط مبنيًّا على فئات أدوات (utility classes) تغطي جميع خصائص CSS المتعلقة
            بالتخطيط والحجم والمسافات. بدلاً من كتابة CSS مخصص، يمكنك بناء التخطيط بالكامل باستخدام فئات جاهزة
            مباشرة في HTML.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            يعتمد Tailwind على مقياس مسافات (spacing scale) موحّد يُستخدم في padding وmargin وgap والـ gap
            والأحجام. هذا المقياس يبدأ من <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">0</code>
            ويصل إلى <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">96</code>، مع قيم نصفية
            مثل <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">0.5</code> و
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">1.5</code> و
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">2.5</code> و
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">3.5</code>.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">المقياس الكامل للمسافات</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
            <code className="text-sm whitespace-nowrap">
              0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
            </code>
          </div>

          <p className="text-lg leading-relaxed mb-4">
            كل رقم في هذا المقياس يتوافق مع قيمة rem. على سبيل المثال:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-lg">
            <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">p-4</code> = <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">padding: 1rem</code> = 16px</li>
            <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">m-6</code> = <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">margin: 1.5rem</code> = 24px</li>
            <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">gap-8</code> = <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">gap: 2rem</code> = 32px</li>
            <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">w-48</code> = <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">width: 12rem</code> = 192px</li>
          </ul>

          <CodeBlock
            language="html"
            code={`<!-- مثال على استخدام مقياس المسافات -->
<div className="p-4 m-2 gap-6">
  <div className="p-0">بدون حشو</div>
  <div className="p-1">حشو 0.25rem</div>
  <div className="p-2">حشو 0.5rem</div>
  <div className="p-4">حشو 1rem</div>
  <div className="p-8">حشو 2rem</div>
  <div className="p-16">حشو 4rem</div>
</div>`}
          />

          <p className="text-lg leading-relaxed mt-4">
            هذا المقياس الموحّد يضمن تناسق التصميم عبر جميع العناصر. بدلاً من اختيار قيم عشوائية، يُنصح
            باستخدام قيم من هذا المقياس فقط للحفاظ على اتساق التصميم.
          </p>
        </LessonSection>

        {/* ==================== Section 2 ==================== */}
        <LessonSection id="spacing" title="نظام المسافات (Spacing)">
          <p className="text-lg leading-relaxed mb-4">
            يُعدّ نظام المسافات من أهم أساسيات التخطيط في Tailwind. يشمل Padding و Margin و Gap، وكل منها
            له اختصارات للاتجاهات المختلفة.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">الحشو (Padding)</h3>
          <p className="text-lg leading-relaxed mb-4">
            Padding هو المسافة بين محتوى العنصر وحدوده. يدعم Tailwind اختصارات لكل اتجاه:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- حشو شامل -->
<div className="p-4">حشو 1rem من كل الجوانب</div>
<div className="p-8">حشو 2rem من كل الجوانب</div>

<!-- حشو أفقي وعمودي -->
<div className="px-6 py-4">حشو أفقي 1.5rem وعمودي 1rem</div>

<!-- حشو لاتجاه محدد -->
<div className="pt-4">حشو علوي</div>
<div className="pr-4">حشو أيمن</div>
<div className="pb-4">حشو سفلي</div>
<div className="pl-4">حشو أيسر</div>

<!-- حشو لاتجاهين فقط -->
<div className="px-4">حشو أيمن وأيسر</div>
<div className="py-4">حشو علوي وسفلي</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">الهامش (Margin)</h3>
          <p className="text-lg leading-relaxed mb-4">
            Margin هو المسافة خارج العنصر. يدعم نفس اختصارات Padding مع إمكانية التوسيط باستخدام
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">mx-auto</code>:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- هامش شامل -->
<div className="m-4">هامش 1rem من كل الجوانب</div>

<!-- هامش أفقي وعمودي -->
<div className="mx-6 my-4">هامش أفقي 1.5rem وعمودي 1rem</div>

<!-- هامش لاتجاه محدد -->
<div className="mt-4">هامش علوي</div>
<div className="mr-4">هامش أيمن</div>
<div className="mb-4">هامش سفلي</div>
<div className="ml-4">هامش أيسر</div>

<!-- توسيط أفقي -->
<div className="mx-auto w-fit">عنصر في منتصف الحاوية أفقياً</div>

<!-- هامش سالب -->
<div className="-mt-4">هامش سالب يدفع العنصر لأعلى</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">التباعد (Gap)</h3>
          <p className="text-lg leading-relaxed mb-4">
            Gap يعمل فقط داخل Containers تستخدم Flexbox أو Grid. يُستخدم لتحديد المسافة بين العناصر الأبناء
            دون الحاجة لهوامش سالبة أو مسافات إضافية:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- تباعد شامل -->
<div className="flex gap-4">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
  <div>عنصر 3</div>
</div>

<!-- تباعد أفقي وعمودي -->
<div className="grid grid-cols-3 gap-x-6 gap-y-4">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>

<!-- تباعد مع قيم مختلفة -->
<div className="flex gap-2 md:gap-4 lg:gap-8">
  <div>متجاوب مع Gap</div>
  <div>عنصر ثاني</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">مقارنة: Gap vs Margin</h3>
          <p className="text-lg leading-relaxed mb-4">
            الفرق الجوهري بين Gap و Margin هو أن Gap لا يضيف مسافة على الحواف الخارجية للحاوية:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- باستخدام Margin (قد يسبب مشاكل مع الحدود) -->
<div className="flex">
  <div className="mr-4">عنصر 1</div>
  <div className="mr-4">عنصر 2</div>
  <div>عنصر 3</div> <!-- لا حاجة لـ mr-4 هنا -->
</div>

<!-- باستخدام Gap (الحل الأنظف) -->
<div className="flex gap-4">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
  <div>عنصر 3</div>
</div>`}
          />
        </LessonSection>

        {/* ==================== Section 3 ==================== */}
        <LessonSection id="flexbox" title="Flexbox بالتوابل">
          <p className="text-lg leading-relaxed mb-4">
            يوفّر Tailwind مجموعة شاملة من فئات Flexbox التي تُحلّ محل CSS التقليدي. يمكنك التحكم بالاتجاه
            والتوزيع والمحاذاة بسهولة.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">تفعيل Flexbox</h3>
          <CodeBlock
            language="html"
            code={`<!-- تفعيل Flexbox على العنصر الأب -->
<div className="flex">flexbox أفقي</div>
<div className="inline-flex">flexbox أفقي inline</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">اتجاه العناصر (Direction)</h3>
          <CodeBlock
            language="html"
            code={`<!-- اتجاه أفقي (الافتراضي) -->
<div className="flex flex-row">
  <div>1</div><div>2</div><div>3</div>
</div>

<!-- اتجاه عمودي -->
<div className="flex flex-col">
  <div>1</div><div>2</div><div>3</div>
</div>

<!-- اتجاه أفقي معكوس -->
<div className="flex flex-row-reverse">
  <div>1</div><div>2</div><div>3</div>
</div>

<!-- اتجاه عمودي معكوس -->
<div className="flex flex-col-reverse">
  <div>1</div><div>2</div><div>3</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">التفاف العناصر (Wrapping)</h3>
          <CodeBlock
            language="html"
            code={`<!-- بدون تفاف (الافتراضي) -->
<div className="flex flex-nowrap gap-4">
  <div>عنصر طويل جداً</div>
  <div>عنصر ثاني طويل</div>
  <div>عنصر ثالث</div>
</div>

<!-- مع تفاف -->
<div className="flex flex-wrap gap-4">
  <div>عنصر طويل جداً</div>
  <div>عنصر ثاني طويل</div>
  <div>عنصر ثالث</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">التوزيع الأفقي (Justify)</h3>
          <CodeBlock
            language="html"
            code={`<!-- توزيع من البداية -->
<div className="flex justify-start gap-2">
  <div>A</div><div>B</div><div>C</div>
</div>

<!-- توزيع من النهاية -->
<div className="flex justify-end gap-2">
  <div>A</div><div>B</div><div>C</div>
</div>

<!-- توزيع في المنتصف -->
<div className="flex justify-center gap-2">
  <div>A</div><div>B</div><div>C</div>
</div>

<!-- توزيع مع مسافة بين -->
<div className="flex justify-between gap-2">
  <div>A</div><div>B</div><div>C</div>
</div>

<!-- توزيع بمسافة محيطة -->
<div className="flex justify-around gap-2">
  <div>A</div><div>B</div><div>C</div>
</div>

<!-- توزيع متساوٍ -->
<div className="flex justify-evenly gap-2">
  <div>A</div><div>B</div><div>C</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">المحاذاة العمودية (Items)</h3>
          <CodeBlock
            language="html"
            code={`<!-- محاذاة للبداية -->
<div className="flex items-start h-32 bg-gray-100 gap-2">
  <div className="p-2 bg-blue-200">قصيـر</div>
  <div className="p-8 bg-blue-300">طويل جداً</div>
  <div className="p-4 bg-blue-400">متوسط</div>
</div>

<!-- محاذاة للنهاية -->
<div className="flex items-end h-32 bg-gray-100 gap-2">
  <div className="p-2 bg-green-200">قصيـر</div>
  <div className="p-8 bg-green-300">طويل جداً</div>
  <div className="p-4 bg-green-400">متوسط</div>
</div>

<!-- محاذاة للمنتصف -->
<div className="flex items-center h-32 bg-gray-100 gap-2">
  <div className="p-2 bg-red-200">قصيـر</div>
  <div className="p-8 bg-red-300">طويل جداً</div>
  <div className="p-4 bg-red-400">متوسط</div>
</div>

<!-- محاذاة للخط الأساسي -->
<div className="flex items-baseline h-32 bg-gray-100 gap-2">
  <p className="text-sm bg-yellow-200">نص صغير</p>
  <p className="text-2xl bg-yellow-300">نص كبير</p>
  <p className="text-lg bg-yellow-400">نص متوسط</p>
</div>

<!-- امتداد كامل -->
<div className="flex items-stretch h-32 bg-gray-100 gap-2">
  <div className="bg-purple-200">تمتد للطول الكامل</div>
  <div className="p-4 bg-purple-300">عنصر عادي</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">أحجام العناصر المرنة (Flex)</h3>
          <CodeBlock
            language="html"
            code={`<!-- flex-1: يأخذ المساحة المتبقية -->
<div className="flex gap-2">
  <div className="flex-1 bg-blue-200 p-4">1</div>
  <div className="flex-1 bg-blue-300 p-4">2</div>
  <div className="flex-1 bg-blue-400 p-4">3</div>
</div>

<!-- ratios مختلفة -->
<div className="flex gap-2 mt-2">
  <div className="flex-1 bg-green-200 p-4">1x</div>
  <div className="flex-2 bg-green-300 p-4">2x</div>
  <div className="flex-1 bg-green-400 p-4">1x</div>
</div>

<!-- flex-auto: يأخذ المساحة حسب المحتوى -->
<div className="flex gap-2 mt-2">
  <div className="flex-auto bg-red-200 p-2">محتوى قصير</div>
  <div className="flex-auto bg-red-300 p-8">محتوى طويل جداً جداً</div>
</div>

<!-- flex-none: لا يتمدد ولا يتقلص -->
<div className="flex gap-2 mt-2">
  <div className="flex-none w-32 bg-yellow-200 p-4">ثابت 32</div>
  <div className="flex-1 bg-yellow-300 p-4">يتمدد</div>
</div>

<!-- shrink و grow -->
<div className="flex gap-2 mt-2">
  <div className="shrink-0 w-48 bg-purple-200 p-4">لا يتقلص</div>
  <div className="grow bg-purple-300 p-4">يتمدد فقط</div>
  <div className="grow-0 shrink-0 w-32 bg-purple-400 p-4">ثابت</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">مثال عملي: شريط تنقل (Navbar)</h3>
          <CodeBlock
            language="html"
            code={`<nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
  <!-- الشعار -->
  <div className="flex items-center gap-2">
    <img src="/logo.svg" alt="شعار" className="w-8 h-8" />
    <span className="text-xl font-bold">شركتي</span>
  </div>

  <!-- روابط التنقل -->
  <div className="flex items-center gap-6">
    <a href="/" className="text-gray-700 hover:text-blue-600">الرئيسية</a>
    <a href="/about" className="text-gray-700 hover:text-blue-600">من نحن</a>
    <a href="/services" className="text-gray-700 hover:text-blue-600">خدماتنا</a>
    <a href="/contact" className="text-gray-700 hover:text-blue-600">تواصل معنا</a>
  </div>

  <!-- أزرار -->
  <div className="flex items-center gap-3">
    <button className="px-4 py-2 text-gray-700">تسجيل الدخول</button>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
      ابدأ الآن
    </button>
  </div>
</nav>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">مثال عملي: شبكة بطاقات</h3>
          <CodeBlock
            language="html"
            code={`<div className="flex flex-wrap justify-center gap-6 p-6">
  <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden">
    <img src="/card1.jpg" alt="بطاقة" className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg">عنوان البطاقة</h3>
      <p className="text-gray-600 mt-2">وصف مختصر للبطاقة</p>
    </div>
  </div>
  <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden">
    <img src="/card2.jpg" alt="بطاقة" className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg">عنوان البطاقة</h3>
      <p className="text-gray-600 mt-2">وصف مختصر للبطاقة</p>
    </div>
  </div>
  <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden">
    <img src="/card3.jpg" alt="بطاقة" className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg">عنوان البطاقة</h3>
      <p className="text-gray-600 mt-2">وصف مختصر للبطاقة</p>
    </div>
  </div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">مثال عملي: تخطيط الشريط الجانبي</h3>
          <CodeBlock
            language="html"
            code={`<div className="flex min-h-screen">
  <!-- الشريط الجانبي -->
  <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col gap-2">
    <h2 className="text-lg font-bold mb-4">القائمة</h2>
    <a href="/" className="p-2 rounded hover:bg-gray-700">الرئيسية</a>
    <a href="/dashboard" className="p-2 rounded bg-gray-700">لوحة التحكم</a>
    <a href="/settings" className="p-2 rounded hover:bg-gray-700">الإعدادات</a>
    <a href="/users" className="p-2 rounded hover:bg-gray-700">المستخدمين</a>
  </aside>

  <!-- المحتوى الرئيسي -->
  <main className="flex-1 p-8">
    <h1 className="text-3xl font-bold mb-6">لوحة التحكم</h1>
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">إحصائية 1</div>
      <div className="bg-white p-6 rounded-lg shadow">إحصائية 2</div>
      <div className="bg-white p-6 rounded-lg shadow">إحصائية 3</div>
    </div>
  </main>
</div>`}
          />
        </LessonSection>

        {/* ==================== Section 4 ==================== */}
        <LessonSection id="grid" title="CSS Grid بالتوابل">
          <p className="text-lg leading-relaxed mb-4">
            CSS Grid هو نظام التخطيط二维 الأقوى في CSS، ويوفر Tailwind فئات سهلة لإنشاء شبكات معقدة
            بسهولة. يمكنك التحكم بعدد الأعمدة والصفوف والتمدد والتدفق بفئات بسيطة.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">تفعيل Grid</h3>
          <CodeBlock
            language="html"
            code={`<!-- تفعيل Grid على العنصر الأب -->
<div className="grid">شبكة</div>
<div className="inline-grid">شبكة inline</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">عدد الأعمدة (Grid Columns)</h3>
          <CodeBlock
            language="html"
            code={`<!-- عمود واحد -->
<div className="grid grid-cols-1 gap-4">
  <div className="bg-blue-200 p-4">عمود كامل</div>
</div>

<!-- عمودين -->
<div className="grid grid-cols-2 gap-4">
  <div className="bg-blue-200 p-4">العمود الأول</div>
  <div className="bg-blue-300 p-4">العمود الثاني</div>
</div>

<!-- ثلاثة أعمدة -->
<div className="grid grid-cols-3 gap-4">
  <div className="bg-green-200 p-4">1</div>
  <div className="bg-green-300 p-4">2</div>
  <div className="bg-green-400 p-4">3</div>
</div>

<!-- أربعة أعمدة -->
<div className="grid grid-cols-4 gap-4">
  <div className="bg-red-200 p-4">1</div>
  <div className="bg-red-300 p-4">2</div>
  <div className="bg-red-400 p-4">3</div>
  <div className="bg-red-500 p-4 text-white">4</div>
</div>

<!-- بدون أعمدة محددة -->
<div className="grid grid-cols-none gap-4">
  <div>يتمدد حسب المحتوى</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">تمدد الأعمدة (Column Span)</h3>
          <CodeBlock
            language="html"
            code={`<div className="grid grid-cols-4 gap-4">
  <!-- عنصر يمتد العمودين -->
  <div className="col-span-2 bg-purple-200 p-4">
    يمتد عمودين
  </div>
  <div className="bg-purple-300 p-4">عمود واحد</div>
  <div className="bg-purple-400 p-4">عمود واحد</div>
</div>

<div className="grid grid-cols-3 gap-4 mt-4">
  <!-- عنصر يمتد كل الأعمدة -->
  <div className="col-span-3 bg-yellow-200 p-4 text-center">
    يمتد كل الأعمدة الثلاثة
  </div>
  <div className="bg-yellow-300 p-4">1</div>
  <div className="bg-yellow-400 p-4">2</div>
  <div className="bg-yellow-500 p-4 text-white">3</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">عدد الصفوف (Grid Rows)</h3>
          <CodeBlock
            language="html"
            code={`<div className="grid grid-cols-3 grid-rows-2 gap-4 h-64">
  <div className="bg-blue-200 p-4">صف 1، عمود 1</div>
  <div className="bg-blue-300 p-4">صف 1، عمود 2</div>
  <div className="bg-blue-400 p-4">صف 1، عمود 3</div>
  <div className="bg-blue-500 p-4 text-white row-span-2">
    يمتد صفّين
  </div>
  <div className="bg-blue-600 p-4 text-white">صف 2، عمود 2</div>
  <div className="bg-blue-700 p-4 text-white">صف 2، عمود 3</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">تدفق الشبكة (Grid Flow)</h3>
          <CodeBlock
            language="html"
            code={`<!-- التدفق الأفقي (الافتراضي) -->
<div className="grid grid-flow-col grid-rows-3 gap-4 h-48">
  <div className="bg-green-200 p-4">1</div>
  <div className="bg-green-300 p-4">2</div>
  <div className="bg-green-400 p-4">3</div>
  <div className="bg-green-500 p-4 text-white">4</div>
  <div className="bg-green-600 p-4 text-white">5</div>
  <div className="bg-green-700 p-4 text-white">6</div>
</div>

<!-- التدفق العمودي -->
<div className="grid grid-flow-col grid-cols-3 gap-4 mt-4">
  <div className="bg-orange-200 p-4">1</div>
  <div className="bg-orange-300 p-4">2</div>
  <div className="bg-orange-400 p-4">3</div>
  <div className="bg-orange-500 p-4 text-white">4</div>
  <div className="bg-orange-600 p-4 text-white">5</div>
  <div className="bg-orange-700 p-4 text-white">6</div>
</div>

<!-- التدفق الكثيف -->
<div className="grid grid-flow-dense grid-cols-3 gap-4 mt-4">
  <div className="col-span-2 bg-red-200 p-4">1 (يمتد 2)</div>
  <div className="bg-red-300 p-4">2</div>
  <div className="bg-red-400 p-4">3</div>
  <div className="col-span-2 bg-red-500 p-4 text-white">4 (يمتد 2)</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">الأعمدة التلقائية (Auto Columns)</h3>
          <CodeBlock
            language="html"
            code={`<div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto">
  <div className="bg-teal-200 p-4 w-48">عمود 1</div>
  <div className="bg-teal-300 p-4 w-32">عمود 2</div>
  <div className="bg-teal-400 p-4 w-64">عمود 3</div>
  <div className="bg-teal-500 p-4 w-40 text-white">عمود 4</div>
</div>

<div className="grid grid-flow-col auto-cols-min gap-4 mt-4">
  <div className="bg-indigo-200 p-4">قصيـر</div>
  <div className="bg-indigo-300 p-4">محتوى متوسط الطول</div>
  <div className="bg-indigo-400 p-4">محتوى طويل جداً في هذا العمود</div>
</div>

<div className="grid grid-flow-col auto-cols-fr gap-4 mt-4 h-24">
  <div className="bg-pink-200 p-4">يساوي</div>
  <div className="bg-pink-300 p-4">يساوي</div>
  <div className="bg-pink-400 p-4">يساوي</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">مثال عملي: لوحة تحكم (Dashboard)</h3>
          <CodeBlock
            language="html"
            code={`<div className="min-h-screen bg-gray-100 p-6">
  <!-- Header -->
  <div className="grid grid-cols-4 gap-4 mb-6">
    <div className="bg-white rounded-lg shadow p-4 col-span-1">
      <h3 className="text-gray-500 text-sm">إجمالي المستخدمين</h3>
      <p className="text-3xl font-bold text-blue-600">12,345</p>
    </div>
    <div className="bg-white rounded-lg shadow p-4 col-span-1">
      <h3 className="text-gray-500 text-sm">المبيعات</h3>
      <p className="text-3xl font-bold text-green-600">$45,678</p>
    </div>
    <div className="bg-white rounded-lg shadow p-4 col-span-1">
      <h3 className="text-gray-500 text-sm">الطلبات</h3>
      <p className="text-3xl font-bold text-orange-600">892</p>
    </div>
    <div className="bg-white rounded-lg shadow p-4 col-span-1">
      <h3 className="text-gray-500 text-sm">الإيرادات</h3>
      <p className="text-3xl font-bold text-purple-600">$12,345</p>
    </div>
  </div>

  <!-- المحتوى الرئيسي -->
  <div className="grid grid-cols-3 gap-6">
    <!-- الرسم البياني -->
    <div className="col-span-2 bg-white rounded-lg shadow p-6">
      <h3 className="font-bold text-lg mb-4">المبيعات الشهرية</h3>
      <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
        مساحة الرسم البياني
      </div>
    </div>

    <!-- آخر النشاطات -->
    <div className="col-span-1 bg-white rounded-lg shadow p-6">
      <h3 className="font-bold text-lg mb-4">آخر النشاطات</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm">مستخدم جديد سجّل</span>
        </div>
        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm">طلب جديد #1234</span>
        </div>
        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-sm">مراجعة جديدة</span>
        </div>
      </div>
    </div>
  </div>
</div>`}
          />
        </LessonSection>

        {/* ==================== Section 5 ==================== */}
        <LessonSection id="sizing" title="الأحجام (Sizing)">
          <p className="text-lg leading-relaxed mb-4">
            يوفّر Tailwind فئات للتحكم بالعرض والارتفاع وأحجام الحد الأدنى والأقصى. يمكنك التحكم بدقة
            في حجم العناصر باستخدام مقياس المسافات أو القيم المخصصة.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">العرض (Width)</h3>
          <CodeBlock
            language="html"
            code={`<!-- عرض ثابت -->
<div className="w-32 bg-blue-200 p-4 mb-2">عرض 8rem (128px)</div>
<div className="w-64 bg-blue-300 p-4 mb-2">عرض 16rem (256px)</div>
<div className="w-96 bg-blue-400 p-4 mb-2 text-white">عرض 24rem (384px)</div>

<!-- عرض نسبي -->
<div className="w-full bg-green-200 p-4 mb-2">عرض كامل 100%</div>
<div className="w-1/2 bg-green-300 p-4 mb-2">نصف العرض 50%</div>
<div className="w-1/3 bg-green-400 p-4 mb-2 text-white">ثلث العرض 33.3%</div>
<div className="w-2/3 bg-green-500 p-4 mb-2 text-white">ثلثا العرض 66.6%</div>

<!-- قيم خاصة -->
<div className="w-screen bg-red-200 p-4 mb-2">عرض الشاشة 100vw</div>
<div className="w-min bg-yellow-200 p-4 mb-2">最小 العرض</div>
<div className="w-max bg-purple-200 p-4 mb-2">最大 العرض حسب المحتوى</div>
<div className="w-fit bg-pink-200 p-4 mb-2">العرض المناسب للمحتوى</div>
<div className="w-auto bg-gray-200 p-4 mb-2">العرض التلقائي</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">العرض الأدنى والأقصى (Min/Max Width)</h3>
          <CodeBlock
            language="html"
            code={`<!-- الحد الأدنى للعرض -->
<div className="min-w-0 bg-blue-100 p-4 mb-2">
  الحد الأدنى للعرض هو 0 (يسمح بالانكماش)
</div>
<div className="min-w-full bg-blue-200 p-4 mb-2">
  الحد الأدنى للعرض هو 100%
</div>
<div className="min-w-min bg-blue-300 p-4 mb-2">
  الحد الأدنى هو الحجم الأصغر للمحتوى
</div>

<!-- الحد الأقصى للعرض -->
<div className="max-w-xs bg-green-100 p-4 mb-2">
  max-w-xs = 20rem (320px) - صغير جداً
</div>
<div className="max-w-sm bg-green-200 p-4 mb-2">
  max-w-sm = 24rem (384px) - صغير
</div>
<div className="max-w-md bg-green-300 p-4 mb-2">
  max-w-md = 28rem (448px) - متوسط صغير
</div>
<div className="max-w-lg bg-green-400 p-4 mb-2">
  max-w-lg = 32rem (512px) - متوسط
</div>
<div className="max-w-xl bg-green-500 p-4 mb-2 text-white">
  max-w-xl = 36rem (576px) - كبير
</div>
<div className="max-w-2xl bg-green-600 p-4 mb-2 text-white">
  max-w-2xl = 42rem (672px) - كبير جداً
</div>
<div className="max-w-4xl bg-green-700 p-4 mb-2 text-white">
  max-w-4xl = 56rem (896px) - واسع
</div>
<div className="max-w-7xl bg-green-800 p-4 text-white">
  max-w-7xl = 80rem (1280px) - واسع جداً
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">الارتفاع (Height)</h3>
          <CodeBlock
            language="html"
            code={`<!-- ارتفاع ثابت -->
<div className="h-32 bg-blue-200 p-4 mb-2">ارتفاع 8rem</div>
<div className="h-64 bg-blue-300 p-4 mb-2">ارتفاع 16rem</div>

<!-- ارتفاع نسبي -->
<div className="h-full bg-green-200 p-4 mb-2">ارتفاع كامل 100%</div>
<div className="h-screen bg-red-200 p-4 mb-2">ارتفاع الشاشة 100vh</div>

<!-- قيم خاصة -->
<div className="h-min bg-yellow-200 p-4 mb-2">最小 الارتفاع</div>
<div className="h-max bg-purple-200 p-4 mb-2">最大 الارتفاع</div>
<div className="h-fit bg-pink-200 p-4 mb-2">الارتفاع المناسب للمحتوى</div>

<!-- الحد الأدنى للارتفاع -->
<div className="min-h-screen bg-gray-100 p-4">
  يمتد لملء الشاشة على الأقل
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">الحجم الموحد (Size)</h3>
          <p className="text-lg leading-relaxed mb-4">
            فئة <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">size-*</code> تعيّن العرض
            والارتفاع معاً، مما يوفّر الكتابة:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- حجم موحد -->
<div className="size-32 bg-blue-200 p-4">
  عرض وارتفاع 8rem
</div>
<div className="size-16 bg-green-200 p-4">
  عرض وارتفاع 4rem
</div>
<div className="size-4 bg-red-200 p-4">
  عرض وارتفاع 1rem
</div>`}
          />
        </LessonSection>

        {/* ==================== Section 6 ==================== */}
        <LessonSection id="position" title="الموضع (Position)">
          <p className="text-lg leading-relaxed mb-4">
            تتحكم فئات الموضع في كيفية وضع العنصر في تدفق الصفحة أو بالنسبة لحاويته. يدعم Tailwind
            جميع قيم position في CSS مع اختصارات سهلة.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">أنواع الموضع</h3>
          <CodeBlock
            language="html"
            code={`<!-- static: الموضع الافتراضي -->
<div className="static bg-blue-200 p-4 mb-2">
  موضع ثابت - يتبع تدفق الصفحة الطبيعي
</div>

<!-- relative: موضع نسبي -->
<div className="relative bg-green-200 p-4 mb-2">
  <span>موضع نسبي - يتحرك عنصر أبناؤه المطلقون منه</span>
</div>

<!-- absolute: موضع مطلق -->
<div className="relative bg-yellow-100 p-4 mb-2 h-24">
  <div className="absolute top-0 right-0 bg-red-200 p-2">
    أعلى يمين
  </div>
  <div className="absolute bottom-0 left-0 bg-blue-200 p-2">
    أسفل يسار
  </div>
</div>

<!-- fixed: موضع ثابت -->
<div className="fixed top-4 left-4 bg-purple-200 p-4 rounded shadow-lg z-50">
  يثبت في مكانه عند التمرير
</div>

<!-- sticky: موضع لزق -->
<div className="sticky top-0 bg-gray-200 p-4">
  يلتصق بالأعلى عند التمرير
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">الإزاحة (Offset)</h3>
          <CodeBlock
            language="html"
            code={`<!-- إزاحة لجهة محددة -->
<div className="relative h-32 bg-gray-100 mb-4">
  <div className="absolute top-0 right-0 bg-red-200 p-2">
    top-0 right-0
  </div>
  <div className="absolute top-4 right-4 bg-orange-200 p-2">
    top-4 right-4
  </div>
  <div className="absolute bottom-0 left-0 bg-green-200 p-2">
    bottom-0 left-0
  </div>
  <div className="absolute bottom-4 left-4 bg-blue-200 p-2">
    bottom-4 left-4
  </div>
</div>

<!-- inset-0: جميع الجهات -->
<div className="relative h-32 bg-gray-100 mb-4">
  <div className="absolute inset-0 bg-purple-200 p-2 opacity-50">
    يغطي الأب بالكامل
  </div>
</div>

<!-- inset مع قيم مختلفة -->
<div className="relative h-32 bg-gray-100">
  <div className="absolute inset-y-0 right-4 w-32 bg-yellow-200 p-2">
    يمتد عمودياً من اليمين
  </div>
  <div className="absolute inset-x-0 bottom-0 h-12 bg-blue-200 p-2">
    يمتد أفقياً من الأسفل
  </div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">الترتيب (Z-Index)</h3>
          <CodeBlock
            language="html"
            code={`<div className="relative h-32">
  <!-- طبقة خلفية -->
  <div className="absolute inset-0 bg-blue-200 p-4 z-0">
    z-0 - الخلفية
  </div>

  <!-- طبقة وسط -->
  <div className="absolute inset-4 bg-green-200 p-4 z-10">
    z-10 - الوسط
  </div>

  <!-- طبقة أمامية -->
  <div className="absolute inset-8 bg-red-200 p-4 z-20">
    z-20 - الأمام
  </div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">مثال عملي: Label على صورة</h3>
          <CodeBlock
            language="html"
            code={`<div className="relative w-64 h-48 rounded-lg overflow-hidden">
  <img src="/product.jpg" alt="منتج" className="w-full h-full object-cover" />

  <!-- Badge -->
  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
    خصم 50%
  </div>

  <!-- التقييم -->
  <div className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded flex items-center gap-1">
    <span>⭐</span>
    <span>4.8</span>
  </div>
</div>`}
          />
        </LessonSection>

        {/* ==================== Section 7 ==================== */}
        <LessonSection id="landing-page" title="مثال عملي — صفحة هبوط كاملة">
          <p className="text-lg leading-relaxed mb-4">
            لنطبّق ما تعلّمناه في مثال عملي شامل: صفحة هبوط كاملة تستخدم Flex و Grid و Size و Position.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">1. قسم البطل (Hero Section)</h3>
          <CodeBlock
            language="html"
            code={`<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
  <!-- خلفية مزخرفة -->
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
  </div>

  <!-- المحتوى -->
  <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      ابدأ رحلتك في عالم البرمجة
    </h1>
    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
      منصة تعليمية شاملة تساعدك على تعلم البرمجة من الصفر حتى الاحتراف
      مع مشاريع عملية ومدربين متميزين
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="/register" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto">
        ابدأ مجاناً
      </a>
      <a href="/courses" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
        تصفح الدورات
      </a>
    </div>

    <!-- إحصائيات -->
    <div className="flex flex-wrap justify-center gap-8 mt-16">
      <div className="text-center">
        <p className="text-4xl font-bold text-white">+50,000</p>
        <p className="text-blue-200 mt-1">طالب مسجّل</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-white">+200</p>
        <p className="text-blue-200 mt-1">دورة تدريبية</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-white">+500</p>
        <p className="text-blue-200 mt-1">مشروع عملي</p>
      </div>
    </div>
  </div>
</section>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">2. قسم الميزات (Features Grid)</h3>
          <CodeBlock
            language="html"
            code={`<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختار منصتنا؟</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        نوفّر لك تجربة تعليمية فريدة بأدوات ومميزات لا تجدها في أي مكان آخر
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- ميزة 1 -->
      <div className="p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
          <span className="text-2xl text-white">🎓</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">دورة متكاملة</h3>
        <p className="text-gray-600 leading-relaxed">
          محتوى تعليمي منظم يغطي الأساسيات المتقدمة مع تطبيقات عملية
        </p>
      </div>

      <!-- ميزة 2 -->
      <div className="p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
        <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
          <span className="text-2xl text-white">💻</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">مشاريع عملية</h3>
        <p className="text-gray-600 leading-relaxed">
          طبّق ما تتعلّمه في مشاريع حقيقية تُضيفها لمحفظتك الشخصية
        </p>
      </div>

      <!-- ميزة 3 -->
      <div className="p-8 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
        <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
          <span className="text-2xl text-white">👨‍🏫</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">مدربون متميزون</h3>
        <p className="text-gray-600 leading-relaxed">
          تعلّم من مطورين محترفين ذوي خبرة في Thị trường العمل
        </p>
      </div>

      <!-- ميزة 4 -->
      <div className="p-8 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-colors">
        <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
          <span className="text-2xl text-white">🌍</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">مجتمع نشط</h3>
        <p className="text-gray-600 leading-relaxed">
          انضم لمجتمع يضم آلاف المبرمجين لتبادل الخبرات والدعم
        </p>
      </div>

      <!-- ميزة 5 -->
      <div className="p-8 rounded-2xl bg-red-50 hover:bg-red-100 transition-colors">
        <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6">
          <span className="text-2xl text-white">📱</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">تعلم في أي مكان</h3>
        <p className="text-gray-600 leading-relaxed">
          محتوى متوافق مع الأجهزة المحمولة لتعلم في أي وقت وأي مكان
        </p>
      </div>

      <!-- ميزة 6 -->
      <div className="p-8 rounded-2xl bg-teal-50 hover:bg-teal-100 transition-colors">
        <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
          <span className="text-2xl text-white">🏆</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">شهادات معتمدة</h3>
        <p className="text-gray-600 leading-relaxed">
          احصل على شهادة إتمام يمكنك إضافتها لسيرة حياتك المهنية
        </p>
      </div>
    </div>
  </div>
</section>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">3. قسم الأسعار (Pricing Cards)</h3>
          <CodeBlock
            language="html"
            code={`<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">اختر الخطة المناسبة</h2>
      <p className="text-lg text-gray-600">خطط مرنة تناسب جميع الاحتياجات</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <!-- الخطة المجانية -->
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-2">مجانية</h3>
        <p className="text-gray-500 mb-6">للابتداء</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-800">$0</span>
          <span className="text-gray-500">/ شهرياً</span>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> 5 دورات مجانية
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> مجتمع الم learns
          </li>
          <li className="flex items-center gap-2 text-gray-400">
            <span className="text-gray-300">✗</span> شهادة معتمدة
          </li>
          <li className="flex items-center gap-2 text-gray-400">
            <span className="text-gray-300">✗</span> دعم مباشر
          </li>
        </ul>
        <button className="w-full py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
          ابدأ مجاناً
        </button>
      </div>

      <!-- الخطة الاحترافية (الأكثر شعبية) -->
      <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white relative transform md:scale-105">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full">
          الأكثر شعبية
        </div>
        <h3 className="text-xl font-bold mb-2">احترافية</h3>
        <p className="text-blue-200 mb-6">للمحترفين</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">$29</span>
          <span className="text-blue-200">/ شهرياً</span>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-2">
            <span className="text-green-300">✓</span> كل الدورات
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-300">✓</span> مجتمع VIP
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-300">✓</span> شهادة معتمدة
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-300">✓</span> دعم مباشر 24/7
          </li>
        </ul>
        <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
          اشترك الآن
        </button>
      </div>

      <!-- الخطة للمؤسسات -->
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-2">للمؤسسات</h3>
        <p className="text-gray-500 mb-6">للفرق</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-800">$99</span>
          <span className="text-gray-500">/ شهرياً</span>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> كل مميزات الاحترافية
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> حسابات متعددة
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> تقارير مخصصة
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> مدير حساب مخصص
          </li>
        </ul>
        <button className="w-full py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
          تواصل معنا
        </button>
      </div>
    </div>
  </div>
</section>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">4. التذييل (Footer)</h3>
          <CodeBlock
            language="html"
            code={`<footer className="bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      <!-- الشعار والوصف -->
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-2xl font-bold mb-4">شركتي</h3>
        <p className="text-gray-400 leading-relaxed">
          منصة تعليمية رائدة في عالم البرمجة والتقنية
        </p>
      </div>

      <!-- روابط سريعة -->
      <div>
        <h4 className="font-bold mb-4">روابط سريعة</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="/" className="hover:text-white transition-colors">الرئيسية</a></li>
          <li><a href="/courses" className="hover:text-white transition-colors">الدورات</a></li>
          <li><a href="/about" className="hover:text-white transition-colors">من نحن</a></li>
          <li><a href="/blog" className="hover:text-white transition-colors">المدونة</a></li>
        </ul>
      </div>

      <!-- الدعم -->
      <div>
        <h4 className="font-bold mb-4">الدعم</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="/help" className="hover:text-white transition-colors">مركز المساعدة</a></li>
          <li><a href="/contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
          <li><a href="/faq" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
          <li><a href="/terms" className="hover:text-white transition-colors">الشروط والأحكام</a></li>
        </ul>
      </div>

      <!-- النشرة البريدية -->
      <div>
        <h4 className="font-bold mb-4">اشترك في النشرة</h4>
        <p className="text-gray-400 mb-4">احصل على آخر الأخبار والعروض</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            اشترك
          </button>
        </div>
      </div>
    </div>

    <!-- الخط الفاصل -->
    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-gray-500">© 2024 شركتي. جميع الحقوق محفوظة.</p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-gray-500 hover:text-white transition-colors">فيسبوك</a>
        <a href="#" className="text-gray-500 hover:text-white transition-colors">تويتر</a>
        <a href="#" className="text-gray-500 hover:text-white transition-colors">يوتيوب</a>
        <a href="#" className="text-gray-500 hover:text-white transition-colors">لينكدإن</a>
      </div>
    </div>
  </div>
</footer>`}
          />
        </LessonSection>

        {/* ==================== Section 8 ==================== */}
        <LessonSection id="common-mistakes" title="الأخطاء الشائعة">
          <p className="text-lg leading-relaxed mb-4">
            إليك أكثر الأخطاء شيوعاً عند العمل مع التخطيط والأحجام في Tailwind وكيفية تجنبها.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">1. استخدام margin: auto على المحور الخاطئ</h3>
          <p className="text-lg leading-relaxed mb-2">
            الخطأ: استخدام <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">mx-auto</code> مع
            عنصر flex عمودي:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- خطأ: mx-auto لا يعمل مع flex-col بدون تحديد عرض -->
<div className="flex flex-col mx-auto">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
</div>

<!-- صحيح: استخدم items-center أو حدد العرض -->
<div className="flex flex-col items-center">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">2. نسيان flex على العنصر الأب</h3>
          <p className="text-lg leading-relaxed mb-2">
            الخطأ: استخدام فئات Flex على الأبناء بدون تفعيل Flex على الأب:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- خطأ: flex-1 لا يعمل بدون flex على الأب -->
<div>
  <div className="flex-1">لن يتمدد</div>
  <div className="flex-1">لن يتمدد</div>
</div>

<!-- صحيح -->
<div className="flex">
  <div className="flex-1">سيتمدد</div>
  <div className="flex-1">سيتمدد</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">3. استخدام عروض ثابتة بدلاً من max-w</h3>
          <p className="text-lg leading-relaxed mb-2">
            الخطأ: تحديد عرض ثابت للمحتوى النصي مما يسبب مشاكل في الأجهزة الصغيرة:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- خطأ: عرض ثابت لا يتجاوب -->
<div className="w-96">
  <p>نص طويل قد يتجاوز العرض على الأجهزة الصغيرة</p>
</div>

<!-- صحيح: max-w مع mx-auto -->
<div className="max-w-2xl mx-auto">
  <p>نص طويل سيحتويه بذكاء حسب المساحة المتاحة</p>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">4. استخدام h-screen بدلاً من min-h-screen</h3>
          <p className="text-lg leading-relaxed mb-2">
            الخطأ: استخدام <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">h-screen</code> للأقسام
            التي قد يكون محتواها أطول من الشاشة:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- خطأ: المحتوى سيتداخل أو يتجاوز الشاشة -->
<section className="h-screen">
  <div>محتوى طويل</div>
  <div>محتوى إضافي</div>
</section>

<!-- صحيح: يمتد للأسفل حسب الحاجة -->
<section className="min-h-screen">
  <div>محتوى طويل</div>
  <div>محتوى إضافي</div>
</section>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">5. استخدام Gap مع Flex بدون تفعيل Flex</h3>
          <p className="text-lg leading-relaxed mb-2">
            الخطأ: استخدام <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">gap</code> في عناصر
            عادية:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- خطأ: gap لا يعمل بدون flex أو grid -->
<div className="gap-4">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
</div>

<!-- صحيح: تفعيل flex أو grid أولاً -->
<div className="flex gap-4">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
</div>

<div className="grid grid-cols-2 gap-4">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">6. إهمال responsive prefixes</h3>
          <CodeBlock
            language="html"
            code={`<!-- خطأ: عرض ثابت على كل الأجهزة -->
<div className="grid grid-cols-4 gap-4">
  <div>قد لا يظهر 4 أعمدة على الهاتف</div>
</div>

<!-- صحيح: تكييف مع أحجام الشاشات -->
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>عمود واحد على الهاتف، اثنين على التابلت، أربعة على الحاسوب</div>
</div>`}
          />
        </LessonSection>

        {/* ==================== Section 9 ==================== */}
        <LessonSection id="best-practices" title="أفضل الممارسات">
          <p className="text-lg leading-relaxed mb-4">
            اتبع هذه الممارسات للحصول على تخطيط نظيف وmaintainable ومجابل.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">1. افضل استخدام Gap بدلاً من الهوامش بين الأبناء</h3>
          <CodeBlock
            language="html"
            code={`<!-- أفضل: استخدام Gap -->
<div className="flex gap-4">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
  <div>عنصر 3</div>
</div>

<!-- يُنصح: Gap مع Grid -->
<div className="grid grid-cols-3 gap-6">
  <div>بطاقة 1</div>
  <div>بطاقة 2</div>
  <div>بطاقة 3</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">2. استخدم max-w-* لعرض المحتوى بدلاً من w-*</h3>
          <CodeBlock
            language="html"
            code={`<!-- أفضل: max-w للمحتوى -->
<main className="max-w-4xl mx-auto px-4 py-8">
  <article className="max-w-prose mx-auto">
    <h1 className="text-3xl font-bold mb-4">عنوان المقال</h1>
    <p className="text-lg leading-relaxed">
      محتوى المقال يكون بعرض مناسب للقراءة
    </p>
  </article>
</main>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">3. استخدم min-h-screen بدلاً من h-screen للأقسام الكاملة</h3>
          <CodeBlock
            language="html"
            code={`<!-- أفضل: min-h-screen للأقسام -->
<section className="min-h-screen flex items-center justify-center">
  <div>محتوى قد يكون قصيراً أو طويلاً</div>
</section>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">4. استخدم flex-1 بدلاً من w-full عند تقسيم المساحة</h3>
          <CodeBlock
            language="html"
            code={`<!-- أفضل: flex-1 لتقسيم المساحة -->
<div className="flex gap-4 h-64">
  <div className="flex-1 bg-blue-100 p-4">يأخذ المساحة المتبقية</div>
  <div className="w-32 bg-green-100 p-4">عرض ثابت</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">5. ربط التخطيط بالاستجابة (Responsive)</h3>
          <CodeBlock
            language="html"
            code={`<!-- تخطيط متجاوب: عمود على الهاتف، صف على الحاسوب -->
<div className="flex flex-col lg:flex-row gap-6">
  <div className="flex-1 bg-white p-6 rounded-lg shadow">
    المحتوى الرئيسي
  </div>
  <div className="lg:w-80 bg-white p-6 rounded-lg shadow">
    الشريط الجانبي
  </div>
</div>

<!-- شبكة متجاوبة -->
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div className="bg-white p-4 rounded-lg shadow">بطاقة</div>
  <div className="bg-white p-4 rounded-lg shadow">بطاقة</div>
  <div className="bg-white p-4 rounded-lg shadow">بطاقة</div>
  <div className="bg-white p-4 rounded-lg shadow">بطاقة</div>
</div>`}
          />

          <h3 className="text-xl font-bold mt-6 mb-3">6. تنظيم فئات التخطيط في HTML</h3>
          <p className="text-lg leading-relaxed mb-2">
            يُنصح بترتيب فئات التخطيط بترتيب منطقي لتسهيل القراءة:
          </p>
          <CodeBlock
            language="html"
            code={`<!-- الترتيب المقترح: display → position → direction → sizing → spacing -->
<div className="
  flex                    /* 1. نوع العرض */
  relative                /* 2. الموضع */
  flex-col                /* 3. الاتجاه */
  items-center            /* 4. المحاذاة */
  w-full max-w-4xl mx-auto /* 5. الحجم */
  p-4 gap-6               /* 6. المسافات */
">
  المحتوى
</div>`}
          />
        </LessonSection>

        {/* ==================== Section 10 ==================== */}
        <LessonSection id="summary" title="ملخص + تدريبات + ورقة غش">
          <h3 className="text-xl font-bold mb-4">ملخص الدرس</h3>
          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>مقياس المسافات في Tailwind يعتمد على rem: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">p-4 = 1rem = 16px</code></li>
            <li>Padding و Margin يدعمان اختصارات الاتجاهات: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">px- py- pt- pr- pb- pl-</code></li>
            <li>Gap هو الأفضل للمسافات بين أبناء Flex أو Grid</li>
            <li>Flexbox ممتاز للتخطيط في محور واحد (صف أو عمود)</li>
            <li>Grid ممتاز للتخطيط ثنائي الأبعاد (صفوف وأعمدة)</li>
            <li>max-w-* هو الأفضل لعرض المحتوى النصي بدلاً من w-*</li>
            <li>min-h-screen أفضل من h-screen للأقسام التي قد يطول محتواها</li>
            <li>استخدم <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">size-*</code> لتعيين العرض والارتفاع معاً</li>
            <li>z-index يتحكم في ترتاب الطبقات: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">z-0</code> إلى <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">z-50</code></li>
          </ul>

          {/* Quiz */}
          <h3 className="text-xl font-bold mb-4">اختبر معلوماتك</h3>

          <Quiz
            question="ما هو المقابل بالـ rem للقيمة p-8 في Tailwind؟"
            options={["0.5rem (8px)", "1rem (16px)", "2rem (32px)", "8rem (128px)"]}
            correctAnswer={2}
            explanation="p-8 تعني padding: 2rem لأن Tailwind يضرب الرقم في 0.25. أي 8 × 0.25 = 2rem = 32px."
          />

          <Quiz
            question="أي من الفئات التالية تُنشئ شبكة بأعمدة متساوية العرض وتبدأ عمودياً؟"
            options={["flex flex-col", "grid grid-cols-3", "grid grid-flow-col grid-rows-3", "flex flex-wrap gap-4"]}
            correctAnswer={1}
            explanation="grid grid-cols-3 ينشئ شبكة بثلاثة أعمدة متساوية العرض. الافتراضي هو التدفق العمودي (grid-flow-row)."
          />

          <Quiz
            question="ما الفرق بين flex-1 و flex-none؟"
            options={[
              "flex-1 يجعل العنصر ثابتاً، flex-none يجعله يتمدد",
              "flex-1 يجعل العنصر يتمدد لأخذ المساحة المتبقية، flex-none يجعله لا يتمدد ولا يتقلص",
              "flex-1 يعيّن عرضاً ثابتاً، flex-none يعيّن ارتفاعاً ثابتاً",
              "لا يوجد فرق بينهما"
            ]}
            correctAnswer={1}
            explanation="flex-1 (أو flex: 1 1 0%) يجعل العنصر يتمدد لأخذ المساحة المتبقية. flex-none (أو flex: none) يجعل العنصر لا يتمدد ولا يتقلص، يحتفظ بالحجم الأصلي."
          />

          <Quiz
            question="أي من هذه الفئات هو الأفضل لعرض قسم يمتد لملء الشاشة على الأقل لكنه قد يطول؟"
            options={["h-screen", "h-full", "min-h-screen", "w-screen h-auto"]}
            correctAnswer={2}
            explanation="min-h-screen يضمن أن القسم يكون على الأقل بارتفاع الشاشة، لكنه يتمدد تلقائياً إذا كان المحتوى أطول. h-screen يُجبر القسم أن يكون بارتفاع الشاشة بالضبط مهما طال المحتوى."
          />

          {/* Challenge */}
          <h3 className="text-xl font-bold mt-8 mb-4">تحدي عملي</h3>
          <Challenge
            title="أنشئ صفحة تعريفية لمشروع"
            description="أنشئ صفحة تعريفية (About Page) تستخدم التخطيط والحجمات التي تعلمتها. يجب أن تتضمن:
1. قسم رئيسي (Hero) يستخدم Flex للتوسيط العمودي والأفقي مع min-h-screen
2. قسم 'فريق العمل' يستخدم Grid بثلاثة أعمدة على الحاسوب وعمود واحد على الهاتف
3. كل بطاقة فريق يجب أن تحتوي على صورة (placeholder) واسم وrole
4. تذييل (Footer) يستخدم Grid بأربعة أعمدة على الحاسوب
5. استخدم gap بدلاً من margins بين العناصر
6. استخدم max-w-* لتحديد عرض المحتوى النصي"
          >
            <CodeBlock
              language="html"
              code={`<!-- هيكل مقترح للتحدي -->
<div dir="rtl" className="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
    <div className="text-center px-4 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold text-white mb-6">من نحن</h1>
      <p className="text-xl text-indigo-100">...</p>
    </div>
  </section>

  <!-- Team Section -->
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">فريق العمل</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- بطاقة عضو الفريق -->
        <div className="text-center bg-white rounded-xl shadow-md p-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold text-lg">الاسم</h3>
          <p className="text-gray-500">المسمى الوظيفي</p>
        </div>
        <!-- أضف المزيد -->
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer className="bg-gray-900 text-white py-12 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>القسم الأول</div>
      <div>القسم الثاني</div>
      <div>القسم الثالث</div>
      <div>القسم الرابع</div>
    </div>
  </footer>
</div>`}
            />
          </Challenge>

          {/* CheatSheet */}
          <h3 className="text-xl font-bold mt-8 mb-4">ورقة الغش - التخطيط والأحجام</h3>
          <CheatSheet title="ملخص فئات التخطيط والأحجام في Tailwind">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">المسافات (Spacing)</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <code className="text-sm">
{`p-{size}         // padding شامل
px-{size}        // padding أفقي
py-{size}        // padding عمودي
pt/pr/pb/pl-{size}  // padding لاتجاه

m-{size}         // margin شامل
mx-{size}        // margin أفقي
my-{size}        // margin عمودي
mt/mr/mb/ml-{size}  // margin لاتجاه
mx-auto          // توسيط أفقي

gap-{size}       // تباعد شامل
gap-x-{size}     // تباعد أفقي
gap-y-{size}     // تباعد عمودي`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Flexbox</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <code className="text-sm">
{`flex / inline-flex
flex-row / flex-col / flex-row-reverse / flex-col-reverse
flex-wrap / flex-nowrap

justify-start / justify-end / justify-center
justify-between / justify-around / justify-evenly

items-start / items-end / items-center
items-baseline / items-stretch

flex-1 / flex-auto / flex-initial / flex-none
grow / grow-0 / shrink / shrink-0`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">CSS Grid</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <code className="text-sm">
{`grid / inline-grid
grid-cols-{n}     // n من 1 إلى 12
col-span-{n}      // تمدد عمود
grid-rows-{n}     // n من 1 إلى 12
row-span-{n}      // تمدد صف

grid-flow-row / grid-flow-col / grid-flow-dense
auto-cols-auto / auto-cols-min / auto-cols-max / auto-cols-fr`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">الأحجام (Sizing)</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <code className="text-sm">
{`w-{size} / w-full / w-screen / w-min / w-max / w-fit / w-auto
h-{size} / h-full / h-screen / h-min / h-max / h-fit
size-{size}       // width + height معاً

min-w-* / max-w-xs/sm/md/lg/xl/2xl/3xl/4xl/5xl/6xl/7xl
min-h-* / max-h-*`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">الموضع (Position)</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <code className="text-sm">
{`static / fixed / absolute / relative / sticky

top-{size} / right-{size} / bottom-{size} / left-{size}
inset-{size}      // جميع الجهات
inset-x-{size}    // أفقي فقط
inset-y-{size}    // عمودي فقط

z-{0-50} / z-auto`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">أرقام المقياس (القيمة × 0.25rem)</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <code className="text-sm">
{`0=0px  0.5=2px  1=4px  1.5=6px  2=8px  2.5=10px
3=12px  3.5=14px  4=16px  5=20px  6=24px  7=28px
8=32px  9=36px  10=40px  11=44px  12=48px  14=56px
16=64px  20=80px  24=96px  28=112px  32=128px
36=144px  40=160px  44=176px  48=192px  52=208px
56=224px  60=240px  64=256px  72=288px  80=320px  96=384px`}
                  </code>
                </div>
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

        {/* Navigation */}
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
