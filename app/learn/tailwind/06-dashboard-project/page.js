import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function DashboardProject() {
  const lesson = getLessonBySlug("tailwind", "06-dashboard-project");
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader stage={lesson.stage} lesson={lesson} lessonIndex={lesson.lessonIndex} totalLessons={lesson.totalLessons} />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* Section 1: ما سنبنيه */}
        <LessonSection id="what-we-build" title="ما سنبنيه في هذا المشروع">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            في هذا الدرس الأخير من مرحلة Tailwind، سنقوم ببناء مشروع تطبيقي حقيقي: <strong className="text-blue-600 dark:text-blue-400">لوحة تحكم كاملة (Dashboard)</strong>. هذا المشروع يجمع كل ما تعلمناه في الدرسات السابقة في مكان واحد.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">ما الذي سنبنيه؟</h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span><strong>شريط جانبي (Sidebar)</strong> — يحتوي على الشعار وروابط التنقل مع حالة نشطة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span><strong>رأس الصفحة (Header)</strong> — شريط بحث + أيقونة إشعارات + صورة المستخدم</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span><strong>بطاقات الإحصائيات (Stats Cards)</strong> — شبكة بطاقات بأرقام ومؤشرات</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span><strong>جدول البيانات (Data Table)</strong> — جدول متجاوب يعرض بيانات المستخدمين</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span><strong>الوضع الداكن (Dark Mode)</strong> — تبديل كامل مع دعم جميع المكونات</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-l from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">ملاحظة مهمة</h4>
            <p className="text-blue-700 dark:text-blue-400">
              هذا المشروع مبني بالكامل باستخدام <strong>فئات Tailwind فقط</strong> — لا يوجد أي CSS مخصص. كل التخطيط والألوان والخطوط والتحريكات من Tailwind.
            </p>
          </div>

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">المفاهيم التي سنستخدمها:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-3 py-2 rounded-lg text-sm font-medium text-center">Flexbox</span>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium text-center">Grid</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-2 rounded-lg text-sm font-medium text-center">Responsive</span>
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-2 rounded-lg text-sm font-medium text-center">Hover States</span>
              <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-2 rounded-lg text-sm font-medium text-center">Dark Mode</span>
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-3 py-2 rounded-lg text-sm font-medium text-center">Transitions</span>
            </div>
          </div>
        </LessonSection>

        {/* Section 2: هيكل المشروع */}
        <LessonSection id="project-structure" title="هيكل المشروع">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            قبل أن نبدأ بالكتابة، دعنا نفهم الهيكل العام للوحة التحكم. التصميم يتكون من ثلاثة أجزاء رئيسية مرتبة بـ <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">flexbox</code> أفقي.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">مخطط التخطيط العام</h3>

          <CodeBlock language="html" code={`<!-- هيكل لوحة التحكم العام -->
<div className="flex min-h-screen">
  <!-- الشريط الجانبي -->
  <aside className="hidden lg:block w-64 bg-white border-l ...">
    الشريط الجانبي
  </aside>

  <!-- المحتوى الرئيسي -->
  <div className="flex-1 flex flex-col">
    <!-- الرأس -->
    <header className="h-16 bg-white border-b ...">
      الرأس
    </header>

    <!-- محتوى الصفحة -->
    <main className="flex-1 p-6">
      <!-- بطاقات الإحصائيات -->
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        البطاقات
      </div>

      <!-- جدول البيانات -->
      <div className="mt-6 bg-white rounded-xl ...">
        الجدول
      </div>
    </main>
  </div>
</div>`} />

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">نقاط تصميمية مهمة:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">→</span>
                <span>نستخدم <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">flex</code> للتخطيط الأفقي بين الشريط الجانبي والمحتوى</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">→</span>
                <span>نستخدم <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">flex-1</code> على المحتوى ليأخذ المساحة المتبقية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">→</span>
                <span>نستخدم <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">flex-col</code> لترتيب الرأس والمحتوى عمودياً</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">→</span>
                <span>الشريط الجانبي مخفي على الموبايل بـ <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">hidden lg:block</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">→</span>
                <span>الشبكة تتحول من عمود واحد على الموبايل إلى 4 أعمدة على الشاشات الكبيرة</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 mt-8">الملفات التي سننشئها</h3>
          <CodeBlock language="text" code={`dashboard/
├── page.js          ← الصفحة الرئيسية (هذا الدرس)
├── components/
│   ├── Sidebar.js   ← الشريط الجانبي
│   ├── Header.js    ← رأس الصفحة
│   ├── StatsCard.js ← بطاقات الإحصائيات
│   ├── DataTable.js ← جدول البيانات
│   └── ThemeToggle.js ← زر الوضع الداكن`} />

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
            في هذا الدرس سنكتب كل شيء في ملف واحد لسهولة التعلم. في المشاريع الحقيقية، يُفضل تقسيم كل مكون في ملف منفصل.
          </p>
        </LessonSection>

        {/* Section 3: بناء الشريط الجانبي */}
        <LessonSection id="sidebar" title="بناء الشريط الجانبي (Sidebar)">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            الشريط الجانبي هو العنصر الرئيسي للتنقل في لوحة التحكم. يحتوي على الشعار في الأعلى، وروابط التنقل في الوسط، ومعلومات المستخدم في الأسفل.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">التصميم الأساسي للشريط الجانبي</h3>

          <CodeBlock language="jsx" code={`function Sidebar() {
  const navItems = [
    { icon: "📊", label: "لوحة التحكم", active: true },
    { icon: "👥", label: "المستخدمون", active: false },
    { icon: "📦", label: "المنتجات", active: false },
    { icon: "📈", label: "التقارير", active: false },
    { icon: "⚙️", label: "الإعدادات", active: false },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 h-screen sticky top-0">
      {/* الشعار */}
      <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
          🎓 منصّة التعليم
        </span>
      </div>

      {/* روابط التنقل */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={\`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors \${
              item.active
                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            }\`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* معلومات المستخدم */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
            أحمد
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
              أحمد محمد
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              admin@example.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}`} />

          <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">تفصيل الفئات المستخدمة:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-amber-700 dark:text-amber-400">
              <div><code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded">hidden lg:flex</code> — مخفي افتراضياً، يظهر كـ flex على lg</div>
              <div><code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded">sticky top-0</code> — يلتصق بالأعلى عند التمرير</div>
              <div><code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded">flex-col</code> — ترتيب العناصر عمودياً</div>
              <div><code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded">flex-1</code> — يأخذ المساحة المتبقية للتنقل</div>
              <div><code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded">border-l</code> — حد على اليسار (لأن الاتجاه RTL)</div>
              <div><code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded">truncate</code> — قص النص الطويل</div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 mt-8">تنبيه: Template Literals في Tailwind</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            لاحظ كيف نستخدم Template Literals لإنشاء فئات متحركة. هذا المبدأ يسمح لنا بتطبيق فئات شرطية بناءً على حالة المكون.
          </p>
          <CodeBlock language="jsx" code={`// مثال على الفئات الشرطية
className={\`flex items-center px-3 py-2 rounded-lg \${
  isActive
    ? "bg-blue-50 text-blue-600"    // حالة نشطة
    : "text-gray-600 hover:bg-gray-100"  // حالة عادية
}\`}`} />
        </LessonSection>

        {/* Section 4: بناء الرأس */}
        <LessonSection id="header" title="بناء الرأس (Header)">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            رأس الصفحة يحتوي على شريط البحث في الوسط، وأيقونة الإشعارات والصورة على اليمين (في RTL)، وزر القائمة على الموبايل في اليسار.
          </p>

          <CodeBlock language="jsx" code={`function Header({ onMenuToggle }) {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 lg:px-6">
      {/* زر القائمة - يظهر فقط على الموبايل */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="text-xl">☰</span>
      </button>

      {/* شريط البحث */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="بحث..."
            className="w-full pr-10 pl-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg text-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* الأزرار والإجراءات */}
      <div className="flex items-center gap-2">
        {/* زر الوضع الداكن */}
        <button className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <span className="text-lg">🌙</span>
        </button>

        {/* الإشعارات */}
        <button className="relative p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <span className="text-lg">🔔</span>
          <span className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* صورة المستخدم */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
          أحمد
        </div>
      </div>
    </header>
  );
}`} />

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">ملاحظات على التصميم:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span><code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">lg:hidden</code> يخفي زر القائمة على الشاشات الكبيرة لأن الشريط الجانبي ظاهر</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span><code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">max-w-md</code> يحدد أقصى عرض لشريط البحث</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span><code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">focus:ring-2</code> يظهر حلقة حول حقل البحث عند التركيز</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span><code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">relative</code> و <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">absolute</code> لإظهار نقطة الإشعار</span>
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* Section 5: بطاقات الإحصائيات */}
        <LessonSection id="stats-cards" title="بطاقات الإحصائيات (Stats Cards)">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            بطاقات الإحصائيات تعرض معلومات سريعة وأرقاماً رئيسية. نستخدم <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">CSS Grid</code> لتخطيطها بشكل متجاوب.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">الكود الكامل للبطاقات</h3>

          <CodeBlock language="jsx" code={`function StatsCards() {
  const stats = [
    {
      icon: "👥",
      label: "إجمالي المستخدمين",
      value: "12,458",
      change: "+12.5%",
      trend: "up",
      color: "blue",
    },
    {
      icon: "📦",
      label: "المنتجات النشطة",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      color: "green",
    },
    {
      icon: "💰",
      label: "إجمالي الإيرادات",
      value: "45,678$",
      change: "-2.4%",
      trend: "down",
      color: "purple",
    },
    {
      icon: "📈",
      label: "معدل التحويل",
      value: "3.24%",
      change: "+0.8%",
      trend: "up",
      color: "amber",
    },
  ];

  const colorMap = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      icon: "text-blue-600 dark:text-blue-400",
      ring: "ring-blue-100 dark:ring-blue-800",
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/20",
      icon: "text-green-600 dark:text-green-400",
      ring: "ring-green-100 dark:ring-green-800",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      icon: "text-purple-600 dark:text-purple-400",
      ring: "ring-purple-100 dark:ring-purple-800",
    },
    amber: {
      bg: "bg-amber-50 dark:bg-amber-900/20",
      icon: "text-amber-600 dark:text-amber-400",
      ring: "ring-amber-100 dark:ring-amber-800",
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat) => {
        const colors = colorMap[stat.color];
        return (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={\`w-12 h-12 rounded-xl \${colors.bg} ring-1 \${colors.ring} flex items-center justify-center\`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <span
                className={\`text-sm font-medium px-2 py-1 rounded-full \${
                  stat.trend === "up"
                    ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                    : "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20"
                }\`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}`} />

          <div className="mt-6 bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">nikkei النقاط الرئيسية في هذا المكون:</h4>
            <ul className="space-y-1 text-green-700 dark:text-green-400 text-sm">
              <li>• <code className="bg-green-100 dark:bg-green-900/40 px-1 rounded">grid-cols-1 md:grid-cols-2 lg:grid-cols-4</code> — تدرج شبكي متجاوب</li>
              <li>• <code className="bg-green-100 dark:bg-green-900/40 px-1 rounded">hover:shadow-md</code> — تأثير عند مرور الماوس</li>
              <li>• <code className="bg-green-100 dark:bg-green-900/40 px-1 rounded">transition-shadow</code> — انتقال سلس للظل</li>
              <li>• <code className="bg-green-100 dark:bg-green-900/40 px-1 rounded">ring-1</code> — حلقة خفيفة حول الأيقونة</li>
              <li>• <code className="bg-green-100 dark:bg-green-900/40 px-1 rounded">rounded-full</code> — شكل بيضاوي لمؤشر التغيير</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 mt-8">شرح تدرج الشبكة المتجاوب</h3>
          <CodeBlock language="text" code={`grid grid-cols-1   →  عمود واحد (الموبايل)
grid md:grid-cols-2 →  عمودين (التابلت)
grid lg:grid-cols-4 →  أربعة أعمدة (الديسكتوب)

gap-4 lg:gap-6      →  مسافة أصغر على الموبايل، أكبر على الديسكتوب`} />
        </LessonSection>

        {/* Section 6: بناء الجدول */}
        <LessonSection id="data-table" title="بناء جدول البيانات (Data Table)">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            الجدول يعرض قائمة المستخدمين مع صورهم وأسمائهم وأدوارهم وحالاتهم. على الموبايل، نسمح بالتمرير أفقياً باستخدام <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">overflow-x-auto</code>.
          </p>

          <CodeBlock language="jsx" code={`function DataTable() {
  const users = [
    { id: 1, name: "أحمد محمد", role: "مدير", status: "نشط", email: "ahmed@example.com" },
    { id: 2, name: "سارة العلي", role: "مطور", status: "نشط", email: "sara@example.com" },
    { id: 3, name: "محمد حسن", role: "مصمم", status: "معلق", email: "mohammed@example.com" },
    { id: 4, name: "فاطمة الزهراء", role: "مدير", status: "نشط", email: "fatima@example.com" },
    { id: 5, name: "عمر بن خالد", role: "مطور", status: "غير نشط", email: "omar@example.com" },
  ];

  const statusStyles = {
    "نشط": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    "معلق": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    "غير نشط": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      {/* رأس الجدول */}
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
          قائمة المستخدمين
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          إدارة وعرض جميع المستخدمين المسجلين
        </p>
      </div>

      {/* الجدول - تمرير أفقي على الموبايل */}
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                المستخدم
              </th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                الدور
              </th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                البريد
              </th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                الحالة
              </th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                      {user.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                  {user.role}
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <span className={\`inline-flex px-2.5 py-1 rounded-full text-xs font-medium \${statusStyles[user.status]}\`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-900/20 transition-colors">
                      ✏️
                    </button>
                    <button className="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:text-red-400 dark:hover:bg-red-900/20 transition-colors">
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ترقيم الصفحات */}
      <div className="px-5 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          عرض 1-5 من 125 مستخدم
        </span>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white font-medium">
            1
          </button>
          <button className="px-3 py-1.5 text-sm rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            2
          </button>
          <button className="px-3 py-1.5 text-sm rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            3
          </button>
          <button className="px-3 py-1.5 text-sm rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            التالي ←
          </button>
        </div>
      </div>
    </div>
  );
}`} />

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">nikkei ملاحظات الجدول:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span><code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">overflow-x-auto</code> يسمح بالتمرير الأفقي على الشاشات الصغيرة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span><code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">whitespace-nowrap</code> يمنع تكسير النص داخل الخلايا</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span><code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">divide-y</code> يرسم خطوطاً فاصلة بين الصفوف</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span><code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">uppercase tracking-wider</code> لتنسيق العناوين بشكل احترافي</span>
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* Section 7: الوضع الداكن */}
        <LessonSection id="dark-mode" title="الوضع الداكن (Dark Mode Integration)">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            الوضع الداكن في Tailwind يعمل عن طريق إضافة بادئة <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">dark:</code> أمام كل فئة. سنبني زر تبديل ونطبق الألوان الداكنة على جميع المكونات.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">مكون زر التبديل</h3>

          <CodeBlock language="jsx" code={`function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={\`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 \${
        isDark ? "bg-blue-600" : "bg-gray-300"
      }\`}
    >
      <span
        className={\`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center text-xs \${
          isDark ? "right-0.5 translate-x-0" : "right-0 translate-x-7"
        }\`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}`} />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 mt-8">الكود الكامل مع الوضع الداكن</h3>

          <CodeBlock language="jsx" code={`// الصفحة الرئيسية مع الوضع الداكن
"use client";
import { useState } from "react";

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={\`min-h-screen transition-colors duration-300 \${
      isDark ? "bg-gray-900" : "bg-gray-50"
    }\`}>
      <div className="flex">
        {/* الشريط الجانبي */}
        <aside className={\`hidden lg:flex flex-col w-64 h-screen sticky top-0 transition-colors duration-300 \${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } border-l\`}>
          <div className="h-16 flex items-center justify-center border-b border-inherit">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              🎓 منصّة التعليم
            </span>
          </div>
          {/* ... باقي عناصر الشريط الجانبي */}
        </aside>

        {/* المحتوى */}
        <div className="flex-1 flex flex-col">
          {/* الرأس */}
          <header className={\`h-16 flex items-center justify-between px-4 lg:px-6 border-b transition-colors duration-300 \${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }\`}>
            <div className="flex-1 max-w-md mx-4">
              <input
                type="text"
                placeholder="بحث..."
                className={\`w-full px-4 py-2 rounded-lg text-sm transition-colors \${
                  isDark
                    ? "bg-gray-700 text-gray-200 placeholder-gray-400"
                    : "bg-gray-100 text-gray-800 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500\`}
              />
            </div>

            {/* زر التبديل */}
            <div className="flex items-center gap-3">
              <ThemeToggle
                isDark={isDark}
                onToggle={() => setIsDark(!isDark)}
              />
              <button className={\`p-2 rounded-lg transition-colors \${
                isDark
                  ? "text-gray-400 hover:bg-gray-700"
                  : "text-gray-600 hover:bg-gray-100"
              }\`}>
                🔔
              </button>
            </div>
          </header>

          {/* المحتوى الرئيسي */}
          <main className="flex-1 p-4 lg:p-6">
            {/* بطاقات الإحصائيات */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* ... البطاقات */}
            </div>

            {/* جدول البيانات */}
            <div className={\`mt-6 rounded-xl shadow-sm border transition-colors duration-300 \${
              isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }\`}>
              {/* ... الجدول */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}`} />

          <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">nikkei نمط الألوان الداكنة المتناسق:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-purple-700 dark:text-purple-400">
              <div><strong>الخلفية:</strong> <code className="bg-purple-100 dark:bg-purple-900/40 px-1 rounded">bg-gray-900</code> للصفحة، <code className="bg-purple-100 dark:bg-purple-900/40 px-1 rounded">bg-gray-800</code> للمكونات</div>
              <div><strong>الحدود:</strong> <code className="bg-purple-100 dark:bg-purple-900/40 px-1 rounded">border-gray-700</code> لجميع الحدود</div>
              <div><strong>النصوص:</strong> <code className="bg-purple-100 dark:bg-purple-900/40 px-1 rounded">text-gray-200</code> للنصوص الرئيسية</div>
              <div><strong>النصوص الثانوية:</strong> <code className="bg-purple-100 dark:bg-purple-900/40 px-1 rounded">text-gray-400</code> للنصوص الأقل أهمية</div>
              <div><strong>التحويم:</strong> <code className="bg-purple-100 dark:bg-purple-900/40 px-1 rounded">hover:bg-gray-700</code> للعناصر التفاعلية</div>
              <div><strong>الانتقال:</strong> <code className="bg-purple-100 dark:bg-purple-900/40 px-1 rounded">transition-colors duration-300</code> للتبديل السلس</div>
            </div>
          </div>
        </LessonSection>

        {/* Section 8: التحسينات النهائية */}
        <LessonSection id="final-touches" title="التحسينات النهائية">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            قبل أن نجمع كل شيء معاً، دعنا نراجع بعض التحسينات المهمة التي تجعل لوحة التحكم أكثر احترافية وإمكانية الوصول.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">نقاط التوقف المستجيبة (Responsive Breakpoints)</h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-3 text-gray-500 dark:text-gray-400 font-semibold">البريكس بوينت</th>
                    <th className="pb-3 text-gray-500 dark:text-gray-400 font-semibold">الحجم</th>
                    <th className="pb-3 text-gray-500 dark:text-gray-400 font-semibold">الاستخدام في المشروع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  <tr>
                    <td className="py-3 text-gray-800 dark:text-gray-200 font-medium">الموبايل (الافتراضي)</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">0px - 767px</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">عمود واحد، شريط جانبي مخفي</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-800 dark:text-gray-200 font-medium">md (تابلت)</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">768px+</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">عمودين للبطاقات</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-800 dark:text-gray-200 font-medium">lg (ديسكتوب)</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">1024px+</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">شريط جانبي ظاهر، 4 بطاقات</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">تأثيرات التحويم والتحولات</h3>
          <CodeBlock language="jsx" code={`// أمثلة على التحسينات التفاعلية

// 1. تأثير التحويم على البطاقات
className="hover:shadow-md transition-shadow duration-200"

// 2. تأثير التحويم على الأزرار
className="hover:bg-blue-700 active:bg-blue-800 transition-colors"

// 3. تأثير التحويم على صفوف الجدول
className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"

// 4. تأثير التركيز للوصولية
className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

// 5. انتقال سلس للوضع الداكن
className="transition-colors duration-300"`} />

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 mt-8">nikkei الكود الكامل النهائي للصفحة</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            هذا هو الكود الكامل الذي يجمع كل المكونات معاً. يمكنك نسخه والصقه في ملف صفحة React:
          </p>

          <CodeBlock language="jsx" code={`"use client";
import { useState } from "react";

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");

  const navItems = [
    { id: "dashboard", icon: "📊", label: "لوحة التحكم" },
    { id: "users", icon: "👥", label: "المستخدمون" },
    { id: "products", icon: "📦", label: "المنتجات" },
    { id: "reports", icon: "📈", label: "التقارير" },
    { id: "settings", icon: "⚙️", label: "الإعدادات" },
  ];

  const stats = [
    { icon: "👥", label: "إجمالي المستخدمين", value: "12,458", change: "+12.5%", trend: "up", color: "blue" },
    { icon: "📦", label: "المنتجات النشطة", value: "1,234", change: "+8.2%", trend: "up", color: "green" },
    { icon: "💰", label: "إجمالي الإيرادات", value: "45,678$", change: "-2.4%", trend: "down", color: "purple" },
    { icon: "📈", label: "معدل التحويل", value: "3.24%", change: "+0.8%", trend: "up", color: "amber" },
  ];

  const users = [
    { id: 1, name: "أحمد محمد", role: "مدير", status: "نشط", email: "ahmed@example.com" },
    { id: 2, name: "سارة العلي", role: "مطور", status: "نشط", email: "sara@example.com" },
    { id: 3, name: "محمد حسن", role: "مصمم", status: "معلق", email: "mohammed@example.com" },
    { id: 4, name: "فاطمة الزهراء", role: "مدير", status: "نشط", email: "fatima@example.com" },
    { id: 5, name: "عمر بن خالد", role: "مطور", status: "غير نشط", email: "omar@example.com" },
  ];

  const bg = isDark ? "bg-gray-900" : "bg-gray-50";
  const cardBg = isDark ? "bg-gray-800" : "bg-white";
  const border = isDark ? "border-gray-700" : "border-gray-200";
  const textPrimary = isDark ? "text-gray-100" : "text-gray-800";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <div className={\`min-h-screen \${bg} transition-colors duration-300\`}>
      <div className="flex">
        {/* الشريط الجانبي */}
        <aside className={\`hidden lg:flex flex-col w-64 h-screen sticky top-0 \${cardBg} border-l \${border} transition-colors duration-300\`}>
          <div className={\`h-16 flex items-center justify-center border-b \${border}\`}>
            <span className="text-xl font-bold text-blue-600">🎓 منصّة التعليم</span>
          </div>
          <nav className="flex-1 py-4 px-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={\`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors \${
                  activeNav === item.id
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    : \`\${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-700\`
                }\`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className={\`p-4 border-t \${border}\`}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">أ</div>
              <div className="flex-1 min-w-0">
                <p className={\`text-sm font-medium \${textPrimary} truncate\`}>أحمد محمد</p>
                <p className={\`text-xs \${textSecondary} truncate\`}>admin@example.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* المحتوى */}
        <div className="flex-1 flex flex-col">
          {/* الرأس */}
          <header className={\`h-16 \${cardBg} border-b \${border} flex items-center justify-between px-4 lg:px-6 transition-colors duration-300\`}>
            <button className={\`lg:hidden p-2 rounded-lg \${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-700\`}>
              <span className="text-xl">☰</span>
            </button>
            <div className="flex-1 max-w-md mx-4">
              <input
                type="text"
                placeholder="بحث..."
                className={\`w-full px-4 py-2 rounded-lg text-sm transition-colors \${
                  isDark ? "bg-gray-700 text-gray-200 placeholder-gray-400" : "bg-gray-100 text-gray-800 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500\`}
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className={\`p-2 rounded-lg transition-colors \${
                  isDark ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"
                }\`}
              >
                {isDark ? "☀️" : "🌙"}
              </button>
              <button className={\`relative p-2 rounded-lg \${textSecondary} hover:bg-gray-100 dark:hover:bg-gray-700\`}>
                🔔
                <span className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold cursor-pointer">أ</div>
            </div>
          </header>

          {/* المحتوى */}
          <main className="flex-1 p-4 lg:p-6">
            <h1 className={\`text-2xl font-bold \${textPrimary} mb-6\`}>لوحة التحكم</h1>

            {/* البطاقات */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className={\`\${cardBg} rounded-xl p-5 shadow-sm border \${border} hover:shadow-md transition-all duration-200\`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <span className={\`text-sm font-medium px-2 py-1 rounded-full \${
                      stat.trend === "up"
                        ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                        : "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20"
                    }\`}>{stat.change}</span>
                  </div>
                  <h3 className={\`text-2xl font-bold \${textPrimary}\`}>{stat.value}</h3>
                  <p className={\`text-sm \${textSecondary} mt-1\`}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* الجدول */}
            <div className={\`mt-6 \${cardBg} rounded-xl shadow-sm border \${border} overflow-hidden transition-colors duration-300\`}>
              <div className={\`p-5 border-b \${border}\`}>
                <h3 className={\`text-lg font-bold \${textPrimary}\`}>قائمة المستخدمين</h3>
                <p className={\`text-sm \${textSecondary} mt-1\`}>إدارة وعرض جميع المستخدمين</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead>
                    <tr className={\`border-b \${border}\`}>
                      {["المستخدم", "الدور", "البريد", "الحالة", "الإجراءات"].map((h) => (
                        <th key={h} className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-sm font-bold">{user.name.charAt(0)}</div>
                            <span className={\`font-medium \${textPrimary} whitespace-nowrap\`}>{user.name}</span>
                          </div>
                        </td>
                        <td className={\`px-5 py-4 text-sm \${textSecondary} whitespace-nowrap\`}>{user.role}</td>
                        <td className={\`px-5 py-4 text-sm \${textSecondary} whitespace-nowrap\`}>{user.email}</td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className={\`inline-flex px-2.5 py-1 rounded-full text-xs font-medium \${
                            user.status === "نشط" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : user.status === "معلق" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          }\`}>{user.status}</span>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 transition-colors">✏️</button>
                            <button className="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:text-red-400 transition-colors">🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}`} />
        </LessonSection>

        {/* Section 9: ماذا تعلمنا */}
        <LessonSection id="what-we-learned" title="ماذا تعلمنا؟">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            في هذا المشروع التطبيقي، استخدمنا معاً كل ما تعلمناه في مرحلة Tailwind. إليك ملخصاً لكل مفهوم استخدمناه:
          </p>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">التخطيط (Layout)</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                استخدمنا <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">flex</code> للتخطيط الأفقي والعمودي، و <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">grid</code> لشبكة البطاقات. مفاهيم مثل <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">flex-1</code> و <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">flex-col</code> و <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">gap</code> كانت أساسية.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">المتجاوب (Responsive)</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                استخدمنا <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">md:</code> و <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">lg:</code> لتغيير التخطيط حسب حجم الشاشة. الشريط الجانبي مخفي على الموبايل، والشبكة تتحول من عمود واحد إلى أربعة أعمدة.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">الألوان والثيمات</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                استخدمنا <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">dark:</code> لجميع المكونات مع تدرجات ألوان متناسقة. النصوص تتحول من <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">gray-800</code> إلى <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">gray-100</code> في الوضع الداكن.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-2">التفاعلية</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                أضفنا تأثيرات <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">hover:</code> و <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">focus:</code> و <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">active:</code> مع <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">transition</code> سلسة.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">الvoddscale (الوصولية)</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                استخدمنا <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">focus:ring-2</code> و <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">focus:outline-none</code> لتحسين تجربة المستخدم مع لوحة المفاتيح.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-l from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">💡 القوة الحقيقية لـ Tailwind</h4>
            <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
              لاحظ أننا بنينا لوحة تحكم كاملة واحترافية <strong>بدون كتابة سطر CSS واحد</strong>. هذا هو جمال Utility-First — كل شيء في markup، والكود قابل لإعادة الاستخدام والصيانة بسهولة.
            </p>
          </div>
        </LessonSection>

        {/* Section 10: ملخص + Quiz + Challenge + CheatSheet */}
        <LessonSection id="summary" title="ملخص وتقييم">

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">ملخص الدرس</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            في هذا الدرس، بنينا لوحة تحكم كاملة باستخدام Tailwind CSS فقط. مررنا على بناء مكونات متعددة: شريط جانبي، رأس صفحة، بطاقات إحصائيات، جدول بيانات، ووضع داكن. هذا المشروع يثبت أن Tailwind كافٍ لبناء واجهات احترافية بالكامل.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mb-8">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3">نقاط مهمة للتذكر:</h4>
            <ol className="space-y-2 text-blue-700 dark:text-blue-400 text-sm list-decimal list-inside">
              <li>استخدم <code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">flex</code> للتخطيط الأفقي/العمودي و <code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">grid</code> للشبكات</li>
              <li>اجعل التصميم متجاوباً باستخدام نقاط التوقف <code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">sm:</code> <code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">md:</code> <code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">lg:</code></li>
              <li>أضف <code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">dark:</code> أمام كل فئة لدعم الوضع الداكن</li>
              <li>استخدم <code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">transition</code> مع <code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">hover:</code> و <code className="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">focus:</code> لتحسين التجربة</li>
              <li>لا تحتاج CSS مخصص — Tailwind يكفي لبناء واجهات كاملة</li>
            </ol>
          </div>

          {/* Quiz */}
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">اختبر معلوماتك</h3>

          <div className="space-y-6 mb-8">
            <Quiz
              question="أي فئة تُستخدم لإخفاء عنصر على الموبايل وإظهاره فقط على شاشات الديسكتوب (lg)؟"
              options={[
                "block lg:hidden",
                "hidden lg:block",
                "visible lg:invisible",
                "hidden md:flex"
              ]}
              correctAnswer={1}
              explanation={`الإجابة الصحيحة: hidden lg:block. الفئة hidden تخفي العنصر افتراضياً (على الموبايل)، و lg:block تجعله ظاهراً كـ block على الشاشات الكبيرة (1024px+).`}
            />

            <Quiz
              question="كيف نقوم بتطبيق فئات Tailwind شرطياً في React بناءً على متغير؟"
              options={[
                "نستخدم if/else عادي",
                "نستخدم Template Literals مع الشرط三目وي",
                "نستخدم styled-components",
                "نستخدم CSS variables"
              ]}
              correctAnswer={1}
              explanation={`الصحيح هو استخدام Template Literals مع العامل الشرطي三目وي: className={\`base-class \${condition ? "active-class" : "inactive-class"}\`}. هذا يسمح بتطبيق فئات ديناميكية في markup.`}
            />

            <Quiz
              question="ما الفرق بين border و ring في Tailwind؟"
              options={[
                "لا يوجد فرق، كلاهما يرسم حداً",
                "border يرسم حداً خارجياً، ring يرسم حداً داخلياً",
                "border يمسك بالحدود، ring يرسم حلقة حول العنصر",
                "ring أسرع في الأداء من border"
              ]}
              correctAnswer={2}
              explanation={`الإجابة الصحيحة: border يرسم حداً على حافة العنصر (الجزء الخارجي)، بينما ring يرسم حلقة حول العنصر (أمام الحد) ولا ي affects التخطيط. ring ممتاز للتأثيرات البصرية مثل focus states.`}
            />
          </div>

          {/* Challenge */}
          <Challenge
            title="تحدي: أضف قسم نشاط المستخدمين"
            description={`قم بتوسيع لوحة التحكم بإضافة قسم جديد يعرض آخر نشاطات المستخدمين. يتطلب التحدي:

1. إنشاء مكون " آخر النشاطات" (Recent Activity)
2. يحتوي على قائمة من 5-6 نشاطات (مثل: "أحمد أضاف منتجاً جديداً"، "سارة عدّلت إعدادات الحساب")
3. كل نشاط يحتوي على أيقونة، نص، وتاريخ
4. استخدم Flexbox أو Grid للتخطيط
5. أضف تأثيرات hover على العناصر
6. تأكد من دعم الوضع الداكن
7. اجعل القسم متجاوباً

حاول تنفيذ هذا التحدي قبل الانتقال إلى مرحلة التالية!`}
          />

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mt-8 mb-8">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">💡 تلميح للتحدي:</h4>
            <CodeBlock language="jsx" code={`function RecentActivity() {
  const activities = [
    { icon: "➕", text: "أحمد أضاف منتجاً جديداً", time: "منذ 5 دقائق" },
    { icon: "✏️", text: "سارة عدّلت إعدادات الحساب", time: "منذ ساعة" },
    // ... أضف المزيد
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border ...">
      <div className="p-5 border-b ...">
        <h3 className="font-bold text-lg ...">آخر النشاطات</h3>
      </div>
      <div className="divide-y ...">
        {activities.map((act, i) => (
          <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 ...">
            <span className="text-xl">{act.icon}</span>
            <div className="flex-1">
              <p className="text-sm ...">{act.text}</p>
              <p className="text-xs text-gray-500 ...">{act.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`} />
          </div>

          {/* CheatSheet */}
          <CheatSheet title="ملخص شامل: جميع فئات Tailwind المستخدمة في هذه المرحلة">

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg mt-4">التخطيط الأساسي (Layout)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">flex</code></td><td className="py-2 text-gray-600 dark:text-gray-400">يحوّل العنصر إلى flex container</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">flex-col</code></td><td className="py-2 text-gray-600 dark:text-gray-400">يرتب العناصر عمودياً</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">flex-1</code></td><td className="py-2 text-gray-600 dark:text-gray-400">يأخذ المساحة المتبقية</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">items-center</code></td><td className="py-2 text-gray-600 dark:text-gray-400">توسيط العناصر عمودياً</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">justify-between</code></td><td className="py-2 text-gray-600 dark:text-gray-400">توزيع المسافة بالتساوي بين العناصر</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">gap-3 / gap-4 / gap-6</code></td><td className="py-2 text-gray-600 dark:text-gray-400">مسافة بين عناصر Flex أو Grid</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">الشبكة (Grid)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">grid</code></td><td className="py-2 text-gray-600 dark:text-gray-400">يحوّل العنصر إلى grid container</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">grid-cols-1</code></td><td className="py-2 text-gray-600 dark:text-gray-400">عمود واحد</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">md:grid-cols-2</code></td><td className="py-2 text-gray-600 dark:text-gray-400">عمودين من md فما فوق</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">lg:grid-cols-4</code></td><td className="py-2 text-gray-600 dark:text-gray-400">أربعة أعمدة من lg فما فوق</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">المتجاوب (Responsive)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">البريك بوينت</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الحد الأدنى</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">sm:</code></td><td className="py-2 text-gray-600 dark:text-gray-400">640px</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">md:</code></td><td className="py-2 text-gray-600 dark:text-gray-400">768px</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">lg:</code></td><td className="py-2 text-gray-600 dark:text-gray-400">1024px</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">xl:</code></td><td className="py-2 text-gray-600 dark:text-gray-400">1280px</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">2xl:</code></td><td className="py-2 text-gray-600 dark:text-gray-400">1536px</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">الألوان (Colors)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الاستخدام</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">bg-{"{color}"}-{"{shade}"}</code></td><td className="py-2 text-gray-600 dark:text-gray-400">لون الخلفية</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">text-{"{color}"}-{"{shade}"}</code></td><td className="py-2 text-gray-600 dark:text-gray-400">لون النص</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">border-{"{color}"}-{"{shade}"}</code></td><td className="py-2 text-gray-600 dark:text-gray-400">لون الحد</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">ring-{"{color}"}-{"{shade}"}</code></td><td className="py-2 text-gray-600 dark:text-gray-400">لون الحلقة (focus)</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">الظلال والحدود (Borders & Shadows)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">shadow-sm</code></td><td className="py-2 text-gray-600 dark:text-gray-400">ظل خفيف</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">shadow-md</code></td><td className="py-2 text-gray-600 dark:text-gray-400">ظل متوسط</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">hover:shadow-md</code></td><td className="py-2 text-gray-600 dark:text-gray-400">ظل عند التحويم</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">border</code></td><td className="py-2 text-gray-600 dark:text-gray-400">حد واحد</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">border-b</code></td><td className="py-2 text-gray-600 dark:text-gray-400">حد سفلي فقط</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">border-l</code></td><td className="py-2 text-gray-600 dark:text-gray-400">حد يساري فقط (مهم في RTL)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">divide-y</code></td><td className="py-2 text-gray-600 dark:text-gray-400">خطوط فاصلة بين العناصر الأبناء</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">ring-1 / ring-2</code></td><td className="py-2 text-gray-600 dark:text-gray-400">حلقة حول العنصر (ممتازة لـ focus)</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">الشكل (Sizing & Shape)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">w-64</code></td><td className="py-2 text-gray-600 dark:text-gray-400">عرض ثابت 256px (للشريط الجانبي)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">w-full</code></td><td className="py-2 text-gray-600 dark:text-gray-400">عرض 100%</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">max-w-md</code></td><td className="py-2 text-gray-600 dark:text-gray-400">أقصى عرض متوسط (للبحث)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">h-16</code></td><td className="py-2 text-gray-600 dark:text-gray-400">ارتفاع ثابت 64px (للرأس)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">min-h-screen</code></td><td className="py-2 text-gray-600 dark:text-gray-400">أقل ارتفاع = ارتفاع الشاشة</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">rounded-lg / rounded-xl / rounded-full</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تدوير الحواف</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">التحويم والتركيز (Hover & Focus)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">hover:bg-{"{color}"}-{"{shade}"}</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تغيير لون الخلفية عند التحويم</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">hover:text-{"{color}"}-{"{shade}"}</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تغيير لون النص عند التحويم</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">hover:shadow-md</code></td><td className="py-2 text-gray-600 dark:text-gray-400">إضافة ظل عند التحويم</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">focus:outline-none</code></td><td className="py-2 text-gray-600 dark:text-gray-400">إزالة الخط الافتراضي عند التركيز</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">focus:ring-2</code></td><td className="py-2 text-gray-600 dark:text-gray-400">إضافة حلقة عند التركيز</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">focus:ring-offset-2</code></td><td className="py-2 text-gray-600 dark:text-gray-400">مسافة بين الحلقة والعنصر</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">active:bg-{"{color}"}-{"{shade}"}</code></td><td className="py-2 text-gray-600 dark:text-gray-400">لون عند الضغط الفعلي</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">التحولات (Transitions)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">transition-all</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تحول لكل الخصائص</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">transition-colors</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تحول الألوان فقط</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">transition-shadow</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تحول الظل فقط</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">transition-transform</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تحول التحريك فقط</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">duration-200 / duration-300</code></td><td className="py-2 text-gray-600 dark:text-gray-400">مدة التحول بالميلي ثانية</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">الوضع الداكن (Dark Mode)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الاستخدام</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">dark:bg-gray-800</code></td><td className="py-2 text-gray-600 dark:text-gray-400">خلفية داكنة</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">dark:text-gray-200</code></td><td className="py-2 text-gray-600 dark:text-gray-400">نص فاتح في الوضع الداكن</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">dark:border-gray-700</code></td><td className="py-2 text-gray-600 dark:text-gray-400">حدود داكنة</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">dark:hover:bg-gray-700</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تحويم في الوضع الداكن</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">dark:focus:ring-offset-gray-800</code></td><td className="py-2 text-gray-600 dark:text-gray-400">موضع الحلقة في الوضع الداكن</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">النصوص (Typography)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">text-xs</code></td><td className="py-2 text-gray-600 dark:text-gray-400">نص صغير جداً (12px)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">text-sm</code></td><td className="py-2 text-gray-600 dark:text-gray-400">نص صغير (14px)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">text-lg</code></td><td className="py-2 text-gray-600 dark:text-gray-400">نص كبير (18px)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">text-xl / text-2xl</code></td><td className="py-2 text-gray-600 dark:text-gray-400">عناوين كبيرة</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">font-bold / font-semibold / font-medium</code></td><td className="py-2 text-gray-600 dark:text-gray-400">سُمك الخط</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">uppercase</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تحويل للأحرف الكبيرة</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">tracking-wider</code></td><td className="py-2 text-gray-600 dark:text-gray-400">توسيع المسافة بين الأحرف</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">truncate</code></td><td className="py-2 text-gray-600 dark:text-gray-400">قص النص الطويل بـ ellipsis</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">whitespace-nowrap</code></td><td className="py-2 text-gray-600 dark:text-gray-400">منع تكسير النص</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">text-right</code></td><td className="py-2 text-gray-600 dark:text-gray-400">محاذاة النص لليمين</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">التباعد والهوامش (Spacing)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">p-2 / p-4 / p-5 / p-6</code></td><td className="py-2 text-gray-600 dark:text-gray-400">حشوة داخلية (padding)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">px-3 / px-4 / px-5</code></td><td className="py-2 text-gray-600 dark:text-gray-400">حشوة أفقية</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">py-2 / py-3 / py-4</code></td><td className="py-2 text-gray-600 dark:text-gray-400">حشوة عمودية</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">mb-1 / mb-2 / mb-4 / mb-6</code></td><td className="py-2 text-gray-600 dark:text-gray-400">هامش سفلي (margin-bottom)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">mt-1 / mt-6 / mt-8</code></td><td className="py-2 text-gray-600 dark:text-gray-400">هامش علوي</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">mx-auto</code></td><td className="py-2 text-gray-600 dark:text-gray-400">توسيط أفقي</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">space-y-1 / space-y-2</code></td><td className="py-2 text-gray-600 dark:text-gray-400">مسافة عمودية بين العناصر الأبناء</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">الأدوات المساعدة (Utilities)</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الفئة</th>
                    <th className="pb-2 text-gray-500 dark:text-gray-400 font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">sticky top-0</code></td><td className="py-2 text-gray-600 dark:text-gray-400">لصق العنصر بالأعلى عند التمرير</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">relative / absolute</code></td><td className="py-2 text-gray-600 dark:text-gray-400">موضع العنصر</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">fixed</code></td><td className="py-2 text-gray-600 dark:text-gray-400">ثابت بالنسبة للشاشة</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">overflow-x-auto</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تمرير أفقي عند Overflow</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">hidden</code></td><td className="py-2 text-gray-600 dark:text-gray-400">إخفاء العنصر</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">flex-shrink-0</code></td><td className="py-2 text-gray-600 dark:text-gray-400">منع الانكماش</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">-translate-y-1/2</code></td><td className="py-2 text-gray-600 dark:text-gray-400">تحريك عمودي (للتوسيط)</td></tr>
                  <tr><td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">cursor-pointer</code></td><td className="py-2 text-gray-600 dark:text-gray-400">مؤشر اليد عند التحويم</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-l from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800 mt-6">
              <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">🎓 مبروك! أنهيت مرحلة Tailwind CSS</h4>
              <p className="text-indigo-700 dark:text-indigo-400 text-sm leading-relaxed">
                الآن لديك جميع الأدوات لبناء واجهات ويب احترافية باستخدام Tailwind CSS. تذكر أن الممارسة هي المفتاح — حاول بناء مشاريع خاصة بك لتثبيت ما تعلمته. كل فئة في Tailwind هي قطعة من puzzles — والآن لديك خريطة كاملة لتركيبها معاً!
              </p>
            </div>

          </CheatSheet>

        </LessonSection>

        <LessonNavigation prevLesson={lesson.prevLesson} prevStage={lesson.prevLessonStage} nextLesson={lesson.nextLesson} nextStage={lesson.nextLessonStage} />
      </div>
    </div>
  );
}