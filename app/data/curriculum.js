// =====================================================
// ملف: curriculum.js
// المكان: app/data/curriculum.js
// الوظيفة: تعريف المنهج التعليمي الكامل للمنصة
// هذا الملف هو "قاعدة البيانات" للمنصة - كل درس وكل مرحلة هنا
// =====================================================

// =====================================================
// 💡 كل مرحلة (Stage) تحتوي على:
//    - id: معرّف فريد (يُستخدم في الروابط)
//    - title: اسم المرحلة بالعربي
//    - description: وصف مختصر للمرحلة
//    - icon: رمز تعبيري يمثل المرحلة
//    - color: اللون المميز للمرحلة
//    - lessons: مصفوفة من الدروس
// =====================================================

export const stages = [
  // ==========================================
  // المرحلة الأولى: HTML
  // ==========================================
  {
    id: "html",
    title: "HTML",
    description: "الأساس الذي تُبنى عليه كل صفحات الويب - لغة ترميز النص التشعبي",
    icon: "🌐",
    color: "#e44d26",
    lessons: [
      {
        id: "01-introduction-to-html",
        title: "مقدمة في HTML",
        slug: "01-introduction-to-html",
        description: "ما هو HTML ولماذا نحتاجه؟",
        duration: "15 دقيقة",
      },
      {
        id: "02-elements-and-text",
        title: "العناصر والنصوص",
        slug: "02-elements-and-text",
        description: "وسوم HTML وكيفية كتابة النصوص",
        duration: "20 دقيقة",
      },
      {
        id: "03-attributes-and-tables",
        title: "السمات والجداول",
        slug: "03-attributes-and-tables",
        description: "إضافة معلومات إضافية وهيكلة البيانات",
        duration: "25 دقيقة",
      },
      {
        id: "04-links-and-images",
        title: "الروابط والصور",
        slug: "04-links-and-images",
        description: "التنقل بين الصفحات وإضافة الصور",
        duration: "20 دقيقة",
      },
      {
        id: "05-forms",
        title: "النماذج (Forms)",
        slug: "05-forms",
        description: "جمع بيانات المستخدم والمدخلات التفاعلية",
        duration: "30 دقيقة",
      },
      {
        id: "06-semantic-html",
        title: "HTML الدلالي",
        slug: "06-semantic-html",
        description: "وسوم ذات معنى لتحسين بنية الصفحة",
        duration: "20 دقيقة",
      },
      {
        id: "07-accessibility",
        title: "الوصولية (A11y)",
        slug: "07-accessibility",
        description: "جعل موقعك متاحًا للجميع",
        duration: "20 دقيقة",
      },
      {
        id: "08-html-final-project",
        title: "مشروع HTML تطبيقي",
        slug: "08-html-final-project",
        description: "بناء صفحة ويب كاملة باستخدام ما تعلمته",
        duration: "45 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة الثانية: CSS
  // ==========================================
  {
    id: "css",
    title: "CSS الحديث",
    description: "تنسيق وتصميم صفحات الويب بأدوات 2025-2026 - نتجاوز الطرق القديمة",
    icon: "🎨",
    color: "#264de4",
    lessons: [
      {
        id: "01-css-fundamentals",
        title: "مقدمة في CSS + الأساسيات",
        slug: "01-css-fundamentals",
        description: "ربط CSS، Specificity، Box Model، وحدات حديثة، ألوان حديثة",
        duration: "30 دقيقة",
      },
      {
        id: "02-modern-selectors",
        title: "المحددات الحديثة + CSS Nesting",
        slug: "02-modern-selectors",
        description: ":has()، :is()، :where()، CSS Nesting، @layer، @scope",
        duration: "30 دقيقة",
      },
      {
        id: "03-flexbox",
        title: "Flexbox + place-items",
        slug: "03-flexbox",
        description: "التخطيط المرن الكامل + حل التوسيط الحديث",
        duration: "30 دقيقة",
      },
      {
        id: "04-css-grid",
        title: "CSS Grid + Subgrid",
        slug: "04-css-grid",
        description: "التخطيط الشبكي + المحاذاة المتقدمة",
        duration: "30 دقيقة",
      },
      {
        id: "05-modern-responsive",
        title: "التصميم المتجاوب الحديث",
        slug: "05-modern-responsive",
        description: "Container Queries، clamp()، Logical Properties، @supports",
        duration: "30 دقيقة",
      },
      {
        id: "06-css-variables-theming",
        title: "المتغيرات CSS + الثيمات",
        slug: "06-css-variables-theming",
        description: "Custom Properties، light-dark()، color-mix()، Dark/Light Mode",
        duration: "25 دقيقة",
      },
      {
        id: "07-modern-animations",
        title: "الحركات والتحولات الحديثة",
        slug: "07-modern-animations",
        description: "Transitions، Scroll-driven animations، @starting-style",
        duration: "25 دقيقة",
      },
      {
        id: "08-css-final-project",
        title: "مشروع CSS تطبيقي",
        slug: "08-css-final-project",
        description: "تصميم صفحة هبوط احترافية",
        duration: "45 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة الثالثة: Tailwind CSS
  // ==========================================
  {
    id: "tailwind",
    title: "Tailwind CSS",
    description: "إطار عمل CSS الأدواتي - تصميم أسرع وأكثر كفاءة مع Tailwind v4",
    icon: "💨",
    color: "#38bdf8",
    lessons: [
      {
        id: "01-what-is-tailwind",
        title: "ما هو Tailwind CSS؟",
        slug: "01-what-is-tailwind",
        description: "فلسفة Utility-First، لماذا فاز Tailwind، كيف يعمل تحت الكواليس",
        duration: "25 دقيقة",
      },
      {
        id: "02-setup-with-nextjs",
        title: "التثبيت والإعداد مع Next.js",
        slug: "02-setup-with-nextjs",
        description: "Tailwind v4، @import، @theme، إعداد المشروع",
        duration: "25 دقيقة",
      },
      {
        id: "03-layout-and-sizing",
        title: "التخطيط والأبعاد",
        slug: "03-layout-and-sizing",
        description: "Flexbox، Grid، Spacing، Sizing، Position — كل أدوات التخطيط",
        duration: "30 دقيقة",
      },
      {
        id: "04-typography-colors-effects",
        title: "الطباعة والألوان والتأثيرات",
        slug: "04-typography-colors-effects",
        description: "الألوان، الخطوط، الخلفيات، الظلال، التدرجات، الحركات",
        duration: "30 دقيقة",
      },
      {
        id: "05-responsive-dark-states",
        title: "الاستجابة والوضع الداكن والحالات",
        slug: "05-responsive-dark-states",
        description: "Mobile-first، Breakpoints، Dark Mode، Hover/Focus، Group/Peer",
        duration: "30 دقيقة",
      },
      {
        id: "06-dashboard-project",
        title: "مشروع تطبيقي: لوحة تحكم كاملة",
        slug: "06-dashboard-project",
        description: "بناء Dashboard احترافي بـ Tailwind مع Dark Mode واستجابة",
        duration: "45 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة الرابعة: JavaScript
  // ==========================================
  {
    id: "javascript",
    title: "JavaScript + ES6+",
    description: "لغة البرمجة الأساسية + المميزات الحديثة - تحضير شامل لـ React",
    icon: "⚡",
    color: "#f7df1e",
    lessons: [
      {
        id: "01-introduction-to-js",
        title: "مقدمة في JavaScript",
        slug: "01-introduction-to-js",
        description: "ما هو JavaScript، المتغيرات، أنواع البيانات، المعاملات",
        duration: "25 دقيقة",
      },
      {
        id: "02-conditionals-functions-scopes",
        title: "الشروط والدوال والـ Scopes",
        slug: "02-conditionals-functions-scopes",
        description: "if/else، الدوال التقليدية والسهمية، النطاق، الأغلاقات",
        duration: "30 دقيقة",
      },
      {
        id: "03-arrays-and-objects",
        title: "المصفوفات والكائنات",
        slug: "03-arrays-and-objects",
        description: "إنشاء وإدارة المصفوفات والكائنات، Destructuring، Spread/Rest، Template Literals",
        duration: "35 دقيقة",
      },
      {
        id: "04-modules-and-async",
        title: "Modules والبرمجة غير المتزامنة",
        slug: "04-modules-and-async",
        description: "import/export، Promises، async/await، fetch API، JSON، معالجة الأخطاء",
        duration: "35 دقيقة",
      },
      {
        id: "05-array-and-object-methods",
        title: "دوال المصفوفات والكائنات الحديثة",
        slug: "05-array-and-object-methods",
        description: "map، filter، reduce، find، Object.keys/values/entries، Optional Chaining",
        duration: "30 دقيقة",
      },
      {
        id: "06-dom-and-events",
        title: "أساسيات DOM والأحداث",
        slug: "06-dom-and-events",
        description: "هيكل DOM، querySelector، الأحداث، Event Delegation (مختصر)",
        duration: "25 دقيقة",
      },
      {
        id: "07-javascript-final-project",
        title: "مشروع JavaScript تطبيقي",
        slug: "07-javascript-final-project",
        description: "بناء تطبيق كامل يجمع كل المفاهيم",
        duration: "60 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة الخامسة: TypeScript
  // ==========================================
  {
    id: "typescript",
    title: "TypeScript",
    description: "JavaScript مع نظام أنواع - اكتب كود أكثر أمانًا",
    icon: "🔷",
    color: "#3178c6",
    lessons: [
      {
        id: "01-introduction-to-typescript",
        title: "مقدمة في TypeScript",
        slug: "01-introduction-to-typescript",
        description: "ما هو TypeScript ولماذا نستخدمه؟",
        duration: "15 دقيقة",
      },
      {
        id: "02-basic-types",
        title: "الأنواع الأساسية",
        slug: "02-basic-types",
        description: "string, number, boolean والمزيد",
        duration: "20 دقيقة",
      },
      {
        id: "03-interfaces-and-types",
        title: "Interfaces و Types",
        slug: "03-interfaces-and-types",
        description: "تعريف هياكل البيانات",
        duration: "25 دقيقة",
      },
      {
        id: "04-functions-and-generics",
        title: "الدوال والأنواع العامة",
        slug: "04-functions-and-generics",
        description: "كتابة دوال آمنة مع TypeScript",
        duration: "30 دقيقة",
      },
      {
        id: "05-typescript-react",
        title: "TypeScript مع React",
        slug: "05-typescript-react",
        description: "كتابة مكونات React بـ TypeScript",
        duration: "30 دقيقة",
      },
      {
        id: "06-typescript-final-project",
        title: "مشروع TypeScript تطبيقي",
        slug: "06-typescript-final-project",
        description: "تطبيق كامل باستخدام TypeScript",
        duration: "45 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة السابعة: Clean Code
  // ==========================================
  {
    id: "clean-code",
    title: "Clean Code",
    description: "كتابة كود نظيف وقابل للصيانة - عادات المطور المحترف",
    icon: "✨",
    color: "#a855f7",
    lessons: [
      {
        id: "01-naming-conventions",
        title: "اتفاقيات التسمية",
        slug: "01-naming-conventions",
        description: "كيف تسمّي المتغيرات والدوال والملفات",
        duration: "20 دقيقة",
      },
      {
        id: "02-code-organization",
        title: "تنظيم الكود",
        slug: "02-code-organization",
        description: "تقسيم الكود وتنظيم الملفات",
        duration: "20 دقيقة",
      },
      {
        id: "03-comments-and-docs",
        title: "التعليقات والتوثيق",
        slug: "03-comments-and-docs",
        description: "متى وكيف تكتب تعليقات مفيدة",
        duration: "15 دقيقة",
      },
      {
        id: "04-refactoring",
        title: "إعادة الهيكلة (Refactoring)",
        slug: "04-refactoring",
        description: "تحسين الكود الموجود دون تغيير السلوك",
        duration: "25 دقيقة",
      },
      {
        id: "05-design-patterns",
        title: "أنماط التصميم",
        slug: "05-design-patterns",
        description: "حلول جاهزة للمشاكل الشائعة",
        duration: "30 دقيقة",
      },
      {
        id: "06-clean-code-final-project",
        title: "مشروع Clean Code تطبيقي",
        slug: "06-clean-code-final-project",
        description: "تحسين كود مشروع حقيقي",
        duration: "45 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة الثامنة: React
  // ==========================================
  {
    id: "react",
    title: "React",
    description: "مكتبة بناء واجهات المستخدم - الأساس لبناء تطبيقات حديثة",
    icon: "⚛️",
    color: "#61dafb",
    lessons: [
      {
        id: "01-introduction-to-react",
        title: "مقدمة في React",
        slug: "01-introduction-to-react",
        description: "ما هو React ولماذا يُستخدم؟",
        duration: "15 دقيقة",
      },
      {
        id: "02-components-and-props",
        title: "المكونات والخصائص",
        slug: "02-components-and-props",
        description: "بناء واجهات من مكونات مستقلة",
        duration: "25 دقيقة",
      },
      {
        id: "03-state-and-hooks",
        title: "الحالة والـ Hooks",
        slug: "03-state-and-hooks",
        description: "إدارة البيانات التفاعلية مع useState",
        duration: "30 دقيقة",
      },
      {
        id: "04-useEffect",
        title: "useEffect",
        slug: "04-useEffect",
        description: "التعامل مع الآثار الجانبية",
        duration: "25 دقيقة",
      },
      {
        id: "05-server-components",
        title: "Server Components vs Client Components",
        slug: "05-server-components",
        description: "فهم الفرق بين مكونات الخادم والعميل في Next.js",
        duration: "25 دقيقة",
      },
      {
        id: "06-server-actions",
        title: "Server Actions & Forms",
        slug: "06-server-actions",
        description: "جمع بيانات المستخدم وتمريرها للخادم بطريقة حديثة",
        duration: "25 دقيقة",
      },
      {
        id: "07-custom-hooks",
        title: "الـ Hooks المخصصة",
        slug: "07-custom-hooks",
        description: "إنشاء hooks خاصة بمشروعك",
        duration: "25 دقيقة",
      },
      {
        id: "08-context-api",
        title: "Context API",
        slug: "08-context-api",
        description: "إدارة الحالة العامة للتطبيق",
        duration: "25 دقيقة",
      },
      {
        id: "09-react-final-project",
        title: "مشروع React تطبيقي",
        slug: "09-react-final-project",
        description: "بناء تطبيق إدارة مهام كامل",
        duration: "60 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة التاسعة: Next.js 16 (محسّنة حسب المستندات الرسمية)
  // ==========================================
  {
    id: "nextjs",
    title: "Next.js",
    description: "إطار عمل React للإنتاج - تطبيقات أسرع وأقوى (Next.js 16)",
    icon: "▲",
    color: "#ffffff",
    lessons: [
      {
        id: "01-introduction-to-nextjs",
        title: "مقدمة في Next.js والإعداد",
        slug: "01-introduction-to-nextjs",
        description: "ما هو Next.js، إنشاء مشروع، هيكل الملفات، Turbopack، متغيرات البيئة",
        duration: "20 دقيقة",
      },
      {
        id: "02-routing-layouts-pages",
        title: "التوجيه: الصفحات والتخطيطات",
        slug: "02-routing-layouts-pages",
        description: "File-based routing، layouts، dynamic routes، route groups، Link",
        duration: "30 دقيقة",
      },
      {
        id: "03-server-and-client-components",
        title: "مكونات الخادم والعميل",
        slug: "03-server-and-client-components",
        description: "مراجعة Server vs Client Components في سياق Next.js",
        duration: "20 دقيقة",
      },
      {
        id: "04-data-fetching-and-streaming",
        title: "جلب البيانات والـ Streaming",
        slug: "04-data-fetching-and-streaming",
        description: "جلب البيانات، Suspense، loading.js، streaming المحتوى",
        duration: "30 دقيقة",
      },
      {
        id: "05-server-actions-and-forms",
        title: "تعديل البيانات: Server Actions",
        slug: "05-server-actions-and-forms",
        description: "Server Functions، النماذج، useActionState، revalidation",
        duration: "30 دقيقة",
      },
      {
        id: "06-cache-components",
        title: "نظام التخزين (Cache Components)",
        slug: "06-cache-components",
        description: "use cache directive، cacheLife، cacheTag، استراتيجيات التخزين",
        duration: "30 دقيقة",
      },
      {
        id: "07-error-handling",
        title: "معالجة الأخطاء",
        slug: "07-error-handling",
        description: "error.js، not-found.js، global-error.js، Error Boundaries",
        duration: "20 دقيقة",
      },
      {
        id: "08-images-fonts-metadata",
        title: "الصور والخطوط والبيانات الوصفية",
        slug: "08-images-fonts-metadata",
        description: "next/image، next/font، Metadata API، OG images، SEO",
        duration: "25 دقيقة",
      },
      {
        id: "09-route-handlers-and-proxy",
        title: "مسارات API والـ Proxy",
        slug: "09-route-handlers-and-proxy",
        description: "Route Handlers، proxy.ts (المتغير الجديد)، إعادة التوجيه",
        duration: "25 دقيقة",
      },
      {
        id: "10-nextjs-final-project",
        title: "مشروع Next.js تطبيقي",
        slug: "10-nextjs-final-project",
        description: "بناء تطبيق ويب كامل يجمع كل المفاهيم",
        duration: "60 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة العاشرة: Supabase
  // ==========================================
  {
    id: "supabase",
    title: "Supabase",
    description: "Backend كخدمة — قواعد بيانات Postgres + RLS + Storage + Realtime",
    icon: "🟢",
    color: "#3ecf8e",
    lessons: [
      {
        id: "01-what-is-supabase",
        title: "ما هو Supabase؟",
        slug: "01-what-is-supabase",
        description: "المنصة مفتوحة المصدر، المعمارية، متى نستخدمها",
        duration: "25 دقيقة",
      },
      {
        id: "02-setup-with-nextjs",
        title: "الإعداد مع Next.js",
        slug: "02-setup-with-nextjs",
        description: "@supabase/ssr، Server/Browser clients، Middleware",
        duration: "25 دقيقة",
      },
      {
        id: "03-database-and-crud",
        title: "قاعدة البيانات + CRUD",
        slug: "03-database-and-crud",
        description: "إنشاء جداول، الاستعلامات، الفلترة، الترتيب، الترقيم",
        duration: "30 دقيقة",
      },
      {
        id: "04-row-level-security",
        title: "الأمان: Row Level Security",
        slug: "04-row-level-security",
        description: "RLS، Policies، العمل مع Clerk كمزوّد مصادقة خارجي",
        duration: "30 دقيقة",
      },
      {
        id: "05-storage-and-realtime",
        title: "التخزين والوقت الفعلي",
        slug: "05-storage-and-realtime",
        description: "Buckets، رفع الملفات، Realtime subscriptions",
        duration: "30 دقيقة",
      },
      {
        id: "06-supabase-final-project",
        title: "مشروع تطبيقي: تطبيق مهام كامل",
        slug: "06-supabase-final-project",
        description: "تطبيق CRUD مع RLS وStorage وRealtime",
        duration: "45 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة الحادية عشرة: Clerk
  // ==========================================
  {
    id: "clerk",
    title: "Clerk",
    description: "مصادقة المستخدمين - تسجيل دخول وحسابات بسهولة",
    icon: "🔐",
    color: "#6c47ff",
    lessons: [
      {
        id: "01-what-is-clerk",
        title: "مقدمة في Clerk",
        slug: "01-what-is-clerk",
        description: "ما هو Clerk ولماذا نستخدمه؟",
        duration: "20 دقيقة",
      },
      {
        id: "02-setup-with-nextjs",
        title: "إعداد Clerk مع Next.js",
        slug: "02-setup-with-nextjs",
        description: "تثبيت وضبط Clerk في مشروعك",
        duration: "25 دقيقة",
      },
      {
        id: "03-sign-in-sign-up",
        title: "تسجيل الدخول والحسابات",
        slug: "03-sign-in-sign-up",
        description: "نماذج تسجيل الدخول والحسابات والShow الشرطي",
        duration: "25 دقيقة",
      },
      {
        id: "04-protecting-routes",
        title: "حماية المسارات",
        slug: "04-protecting-routes",
        description: "clerkMiddleware، auth.protect، الحماية حسب الأدوار",
        duration: "30 دقيقة",
      },
      {
        id: "05-user-and-sessions",
        title: "إدارة المستخدم والجلسة",
        slug: "05-user-and-sessions",
        description: "UserButton، useUser، useAuth، currentUser، clerkClient",
        duration: "30 دقيقة",
      },
      {
        id: "06-clerk-final-project",
        title: "مشروع Clerk تطبيقي",
        slug: "06-clerk-final-project",
        description: "تطبيق إدارة مهام كامل مع مصادقة وأدوار",
        duration: "45 دقيقة",
      },
    ],
  },

  // ==========================================
  // المرحلة الثانية عشرة: المشروع النهائي
  // ==========================================
  {
    id: "final-project",
    title: "المشروع النهائي",
    description: "بناء مشروع Blog احترافي من الصفر باستخدام كل ما تعلمته",
    icon: "🏆",
    color: "#fbbf24",
    lessons: [
      {
        id: "01-project-planning",
        title: "التخطيط للمشروع",
        slug: "01-project-planning",
        description: "تحليل المتطلبات وتصميم الهيكل",
        duration: "30 دقيقة",
      },
      {
        id: "02-setup-and-structure",
        title: "الإعداد والهيكلة",
        slug: "02-setup-and-structure",
        description: "إعداد المشروع وتثبيت التبعيات",
        duration: "25 دقيقة",
      },
      {
        id: "03-database-design",
        title: "تصميم قاعدة البيانات",
        slug: "03-database-design",
        description: "إنشاء جداول Supabase للمدونة",
        duration: "30 دقيقة",
      },
      {
        id: "04-auth-and-layout",
        title: "المصادقة والتخطيط العام",
        slug: "04-auth-and-layout",
        description: "إضافة Clerk وتصميم الصفحة العامة",
        duration: "35 دقيقة",
      },
      {
        id: "05-crud-operations",
        title: "عمليات CRUD",
        slug: "05-crud-operations",
        description: "إنشاء وتعديل وحذف المقالات",
        duration: "40 دقيقة",
      },
      {
        id: "06-dashboard-and-admin",
        title: "لوحة التحكم والإدارة",
        slug: "06-dashboard-and-admin",
        description: "بناء Dashboard للمحررين",
        duration: "40 دقيقة",
      },
      {
        id: "07-search-and-pagination",
        title: "البحث والترقيم",
        slug: "07-search-and-pagination",
        description: "إضافة البحث وتقليل الصفحات",
        duration: "30 دقيقة",
      },
      {
        id: "08-seo-and-responsive",
        title: "SEO والتصميم المتجاوب",
        slug: "08-seo-and-responsive",
        description: "تحسين محركات البحث والتوافق",
        duration: "25 دقيقة",
      },
      {
        id: "09-deployment",
        title: "النشر النهائي",
        slug: "09-deployment",
        description: "نشر المشروع على Vercel",
        duration: "20 دقيقة",
      },
    ],
  },
];

// =====================================================
// دالة مساعدة: الحصول على مرحلة بناءً على她的 id
// =====================================================
export function getStageById(stageId) {
  return stages.find((stage) => stage.id === stageId);
}

// =====================================================
// دالة مساعدة: الحصول على درس بناءً على id المرحلة و slug الدرس
// =====================================================
export function getLessonBySlug(stageId, lessonSlug) {
  const stage = getStageById(stageId);
  if (!stage) return null;

  const lesson = stage.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return null;

  // ن找回 index الدرس لحساب الدرس السابق وال التالي
  const lessonIndex = stage.lessons.indexOf(lesson);

  // نحصل على مرحلة سابقة و تالية
  const currentStageIndex = stages.indexOf(stage);
  const prevStage = currentStageIndex > 0 ? stages[currentStageIndex - 1] : null;
  const nextStage = currentStageIndex < stages.length - 1 ? stages[currentStageIndex + 1] : null;

  // الدرس السابق: إما الدرس السابق في نفس المرحلة، أو آخر درس في المرحلة السابقة
  let prevLesson = null;
  let prevLessonStage = null;
  if (lessonIndex > 0) {
    prevLesson = stage.lessons[lessonIndex - 1];
    prevLessonStage = stage;
  } else if (prevStage) {
    prevLesson = prevStage.lessons[prevStage.lessons.length - 1];
    prevLessonStage = prevStage;
  }

  // الدرس التالي: إما الدرس التالي في نفس المرحلة، أو أول درس في المرحلة التالية
  let nextLesson = null;
  let nextLessonStage = null;
  if (lessonIndex < stage.lessons.length - 1) {
    nextLesson = stage.lessons[lessonIndex + 1];
    nextLessonStage = stage;
  } else if (nextStage) {
    nextLesson = nextStage.lessons[0];
    nextLessonStage = nextStage;
  }

  return {
    ...lesson,
    stage,
    lessonIndex,
    totalLessons: stage.lessons.length,
    prevLesson,
    prevLessonStage,
    nextLesson,
    nextLessonStage,
  };
}

// =====================================================
// دالة مساعدة: حساب إجمالي الدروس
// =====================================================
export function getTotalLessons() {
  return stages.reduce((total, stage) => total + stage.lessons.length, 0);
}

// =====================================================
// دالة مساعدة: الحصول على جميع الدروس كمصفوفة مسطحة
// =====================================================
export function getAllLessons() {
  return stages.flatMap((stage) =>
    stage.lessons.map((lesson) => ({
      ...lesson,
      stageId: stage.id,
      stageTitle: stage.title,
      stageIcon: stage.icon,
    }))
  );
}
