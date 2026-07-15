const translations = {
  ar: {
    sections: [
      { title: "التوجيه المبني على الملفات", content: [
        { type: "p", text: "في Next.js، <strong>التوجيه</strong> تلقائي بناءً على هيكل الملفات والمجلدات. كل مجلد داخل <code>app/</code> يمثل مقطعاً في الرابط." },
        { type: "li", text: "<code>app/page.js</code> → <code>/</code> (الصفحة الرئيسية)" },
        { type: "li", text: "<code>app/about/page.js</code> → <code>/about</code>" },
        { type: "li", text: "<code>app/blog/page.js</code> → <code>/blog</code>" },
      ]},
      { title: "الصفحات", content: [
        { type: "p", text: "<strong>page.js</strong> يحدد واجهة المستخدم لكل مسار. كل مجلد يحتوي على <code>page.js</code> يصبح مساراً قابل للزيارة." },
        { type: "p", text: "يجب أن يكون اسم الملف بالضبط <code>page.js</code> (أو <code>page.tsx</code> مع TypeScript)." },
      ]},
      { title: "التخطيطات", content: [
        { type: "p", text: "<strong>layout.js</strong> يحدد تخطيطاً مشتركاً بين عدة صفحات. يلف الصفحات الفرعية ويبقى ثابتاً أثناء التنقل بينها." },
        { type: "li", text: "<strong>مشترك:</strong> يلف جميع الصفحات الفرعية." },
        { type: "li", text: "<strong>ثابت:</strong> لا يُعاد تحميله عند التنقل (يحافظ على الحالة)." },
        { type: "li", text: "<strong>متداخل:</strong> يمكن تداخل التخطيطات (مثلاً، لوحة التحكم لها تخطيطها الخاص)." },
      ]},
      { title: "المسارات الديناميكية", content: [
        { type: "p", text: "عندما لا تعرف اسم المسار مسبقاً، استخدم <strong>المسارات الديناميكية</strong> مع الأقواس المربعة <code>[slug]</code>." },
        { type: "code", text: "app/blog/[slug]/page.js" },
        { type: "p", text: "في Next.js 16، <code>params</code> هو Promise ويجب استخدام <code>await</code> للوصول إلى قيمته." },
      ]},
      { title: "مجموعات المسارات", content: [
        { type: "p", text: "استخدم الأقواس <code>()</code> لتنظيم الملفات دون التأثير على مسار الرابط." },
        { type: "code", text: "app/(marketing)/about/page.js  → /about\napp/(dashboard)/settings/page.js  → /settings" },
      ]},
      { title: "مكون Link", content: [
        { type: "p", text: "<strong>&lt;Link&gt;</strong> هو مكون التنقل في Next.js. يوفر التحميل المسبق، والتنقل من جانب العميل، والتعامل التلقائي مع التمرير." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "التوجيه المبني على الملفات: المسارات محددة بهيكل الملفات في app/." },
        { type: "li", text: "page.js هو ملف الصفحة، layout.js هو التخطيط المشترك." },
        { type: "li", text: "المسارات الديناميكية تستخدم [slug] للمسارات غير المعروفة." },
        { type: "li", text: "مجموعات المسارات () تنظّم دون تغيير المسار." },
        { type: "li", text: "استخدم Link للتنقل وuseRouter للتنقل البرمجي." },
      ]}
    ],
    quiz: [
      { question: "كيف تحدد المسار /about في App Router؟", options: ["app/page.js", "app/about.js", "app/about/page.js", "app/about/index.js"], explanation: "في App Router، كل مجلد داخل app/ يمثل مقطعاً في الرابط. ملف page.js يحدد واجهة المستخدم." },
      { question: "ما هو الفرق الرئيسي بين layout.js و page.js؟", options: ["layout.js للـ APIs فقط", "layout.js مشترك بين الصفحات، page.js يحدد محتوى الصفحة", "layout.js يعمل فقط في الإنتاج", "لا يوجد فرق"], explanation: "layout.js يلف الصفحات الفرعية ويبقى ثابتاً. page.js يحدد المحتوى لكل مسار." },
      { question: "كيف تنشئ مساراً ديناميكياً لمنشور المدونة؟", options: ["app/blog/page/[slug].js", "app/blog/[slug]/page.js", "app/blog/dynamic/slug.js", "app/blog/page.js مع useParams"], explanation: "المسارات الديناميكية تستخدم [slug] كاسم مجلد مع page.js داخله." },
    ],
    challenge: { title: "ابنِ موقعاً متعدد الصفحات مع تخطيط", description: "أنشئ هيكل ملفات مع تخطيط رئيسي، وصفحة رئيسية، وصفحة حول، ومدونة مع منشورات ديناميكية، وقسم لوحة تحكم." },
    cheatSheet: { title: "ملخص مراجعة التوجيه", items: [
      { term: "page.js", definition: "صفحة المسار" },
      { term: "layout.js", definition: "التخطيط المشترك" },
      { term: "[slug]/page.js", definition: "مسار ديناميكي" },
      { term: "(group)/page.js", definition: "مجموعة مسارات" },
      { term: "<Link href='/about'>", definition: "رابط التنقل" },
      { term: "router.push()", definition: "تنقل برمجي" },
      { term: "generateStaticParams", definition: "إنشاء مسارات ثابتة" }
    ]},
    interviewQuestions: [
      {
        question: "كيف يعمل routing في Next.js 13+؟",
        answer: "بناءً على الملفات في مجلد app/. كل مجلد route.",
        difficulty: "easy"
      },
      {
        question: "ما هو layout؟",
        answer: "مكون يلف عدة صفحات ويحتفظ بالحالة عند التنقل بينها.",
        difficulty: "medium"
      }
    ],
    tricks: [
      {
        title: "استخدم loading.js",
        description: "أنشئ ملف loading.js في أي مجلد لعرض loading spinner تلقائياً",
        icon: "rocket"
      }
    ]
  },
  en: {
    sections: [
      { title: "File-based Routing", content: [
        { type: "p", text: "In Next.js, <strong>routing</strong> is automatic based on the file and folder structure. Every folder inside <code>app/</code> represents a URL segment." },
        { type: "li", text: "<code>app/page.js</code> → <code>/</code> (Home page)" },
        { type: "li", text: "<code>app/about/page.js</code> → <code>/about</code>" },
        { type: "li", text: "<code>app/blog/page.js</code> → <code>/blog</code>" },
      ]},
      { title: "Pages", content: [
        { type: "p", text: "<strong>page.js</strong> defines the UI for each route. Every folder containing <code>page.js</code> becomes a visitable route." },
        { type: "p", text: "The file name must be exactly <code>page.js</code> (or <code>page.tsx</code> with TypeScript)." },
      ]},
      { title: "Layouts", content: [
        { type: "p", text: "<strong>layout.js</strong> defines a layout shared between multiple pages. It wraps child pages and stays persistent when navigating between them." },
        { type: "li", text: "<strong>Shared:</strong> Wraps all child pages." },
        { type: "li", text: "<strong>Persistent:</strong> Doesn't reload when navigating (preserves state)." },
        { type: "li", text: "<strong>Nested:</strong> Layouts can be nested (e.g., dashboard has its own layout)." },
      ]},
      { title: "Dynamic Routes", content: [
        { type: "p", text: "When you don't know the route name in advance, use <strong>dynamic routes</strong> with square brackets <code>[slug]</code>." },
        { type: "code", text: "app/blog/[slug]/page.js" },
        { type: "p", text: "In Next.js 16, <code>params</code> is a Promise and you must use <code>await</code> to access its value." },
      ]},
      { title: "Route Groups", content: [
        { type: "p", text: "Use parentheses <code>()</code> to organize files without affecting the URL path." },
        { type: "code", text: "app/(marketing)/about/page.js  → /about\napp/(dashboard)/settings/page.js  → /settings" },
      ]},
      { title: "Link Component", content: [
        { type: "p", text: "<strong>&lt;Link&gt;</strong> is Next.js's navigation component. It provides Prefetching, Client-side Navigation, and automatic scroll handling." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "File-based Routing: Routes are defined by the file structure in app/." },
        { type: "li", text: "page.js is the page file, layout.js is the shared layout." },
        { type: "li", text: "Dynamic routes use [slug] for unknown routes." },
        { type: "li", text: "Route Groups () organize without changing the path." },
        { type: "li", text: "Use Link for navigation and useRouter for programmatic navigation." },
      ]}
    ],
    quiz: [
      { question: "How do you define the /about route in App Router?", options: ["app/page.js", "app/about.js", "app/about/page.js", "app/about/index.js"], explanation: "In App Router, each folder inside app/ represents a URL segment. The page.js file defines the UI." },
      { question: "What is the main difference between layout.js and page.js?", options: ["layout.js is for APIs only", "layout.js is shared between pages, page.js defines page content", "layout.js works only in production", "No difference"], explanation: "layout.js wraps child pages and stays persistent. page.js defines content for each route." },
      { question: "How do you create a dynamic route for a blog post?", options: ["app/blog/page/[slug].js", "app/blog/[slug]/page.js", "app/blog/dynamic/slug.js", "app/blog/page.js with useParams"], explanation: "Dynamic routes use [slug] as a folder name with page.js inside." },
    ],
    challenge: { title: "Build a Multi-page Site with Layout", description: "Create a file structure with a main layout, home page, about page, blog with dynamic posts, and a dashboard section." },
    cheatSheet: { title: "Routing Cheat Sheet", items: [
      { term: "page.js", definition: "Route page" },
      { term: "layout.js", definition: "Shared layout" },
      { term: "[slug]/page.js", definition: "Dynamic route" },
      { term: "(group)/page.js", definition: "Route Group" },
      { term: "<Link href='/about'>", definition: "Navigation link" },
      { term: "router.push()", definition: "Programmatic navigation" },
      { term: "generateStaticParams", definition: "Generate static routes" }
    ]},
    interviewQuestions: [
      {
        question: "How does routing work in Next.js 13+?",
        answer: "Based on files in the app/ directory. Each folder is a route.",
        difficulty: "easy"
      },
      {
        question: "What is a layout?",
        answer: "A component that wraps multiple pages and preserves state when navigating between them.",
        difficulty: "medium"
      }
    ],
    tricks: [
      {
        title: "Use loading.js",
        description: "Create a loading.js file in any folder to show a loading spinner automatically",
        icon: "rocket"
      }
    ]
  },
  fr: {
    sections: [
      { title: "File-based Routing", content: [
        { type: "p", text: "Dans Next.js, le <strong>routage</strong> est automatique basé sur la structure des fichiers. Chaque dossier dans <code>app/</code> représente un segment d'URL." },
        { type: "li", text: "<code>app/page.js</code> → <code>/</code> (Page d'accueil)" },
        { type: "li", text: "<code>app/about/page.js</code> → <code>/about</code>" },
      ]},
      { title: "Pages", content: [
        { type: "p", text: "<strong>page.js</strong> définit l'interface pour chaque route. Le nom du fichier doit être exactement <code>page.js</code>." },
      ]},
      { title: "Mises en page", content: [
        { type: "p", text: "<strong>layout.js</strong> définit une mise en page partagée entre plusieurs pages. Il enveloppe les pages enfants et reste persistant lors de la navigation." },
      ]},
      { title: "Routes dynamiques", content: [
        { type: "p", text: "Utilisez les crochets <code>[slug]</code> pour les routes dynamiques. Dans Next.js 16, <code>params</code> est un Promise." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "File-based Routing : Les routes sont définies par la structure des fichiers." },
        { type: "li", text: "page.js est le fichier de page, layout.js est la mise en page partagée." },
        { type: "li", text: "Utilisez Link pour la navigation et useRouter pour la navigation programmatique." },
      ]}
    ],
    quiz: [
      { question: "Comment définir la route /about ?", options: ["app/page.js", "app/about.js", "app/about/page.js", "app/about/index.js"], explanation: "Dans App Router, chaque dossier représente un segment d'URL. Le fichier page.js définit l'interface." },
      { question: "Quelle est la différence entre layout.js et page.js ?", options: ["layout.js est pour les APIs", "layout.js est partagé entre les pages, page.js définit le contenu", "Pas de différence"], explanation: "layout.js enveloppe les pages et reste persistant. page.js définit le contenu." },
    ],
    challenge: { title: "Construire un site multi-pages avec layout", description: "Créez une structure avec un layout principal, une page d'accueil, une page about, un blog avec des posts dynamiques." },
    cheatSheet: { title: "Fiche mémo Routage", items: [
      { term: "page.js", definition: "Page de route" },
      { term: "layout.js", definition: "Mise en page partagée" },
      { term: "[slug]/page.js", definition: "Route dynamique" },
      { term: "<Link href='/about'>", definition: "Lien de navigation" },
      { term: "router.push()", definition: "Navigation programmatique" }
    ]}
  },
  de: {
    sections: [
      { title: "File-based Routing", content: [
        { type: "p", text: "In Next.js erfolgt das <strong>Routing</strong> automatisch basierend auf der Dateistruktur. Jeder Ordner in <code>app/</code> stellt ein URL-Segment dar." },
        { type: "li", text: "<code>app/page.js</code> → <code>/</code> (Startseite)" },
        { type: "li", text: "<code>app/about/page.js</code> → <code>/about</code>" },
      ]},
      { title: "Seiten", content: [
        { type: "p", text: "<strong>page.js</strong> definiert die UI für jede Route. Der Dateiname muss genau <code>page.js</code> sein." },
      ]},
      { title: "Layouts", content: [
        { type: "p", text: "<strong>layout.js</strong> definiert einLayout, das zwischen mehreren Seiten geteilt wird. Es umschließt untergeordnete Seiten und bleibt bei der Navigation bestehen." },
      ]},
      { title: "Dynamische Routen", content: [
        { type: "p", text: "Verwenden Sie eckige Klammern <code>[slug]</code> für dynamische Routen. In Next.js 16 ist <code>params</code> ein Promise." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "File-based Routing: Routen werden durch die Dateistruktur definiert." },
        { type: "li", text: "page.js ist die Seitendatei, layout.js ist das gemeinsame Layout." },
        { type: "li", text: "Verwenden Sie Link für Navigation und useRouter für programmatische Navigation." },
      ]}
    ],
    quiz: [
      { question: "Wie definiert man die /about-Route?", options: ["app/page.js", "app/about.js", "app/about/page.js", "app/about/index.js"], explanation: "Im App Router stellt jeder Ordner ein URL-Segment dar. Die page.js-Datei definiert die UI." },
      { question: "Was ist der Hauptunterschied zwischen layout.js und page.js?", options: ["layout.js ist nur für APIs", "layout.js wird zwischen Seiten geteilt, page.js definiert den Inhalt", "Kein Unterschied"], explanation: "layout.js umschließt untergeordnete Seiten und bleibt bestehen. page.js definiert den Inhalt." },
    ],
    challenge: { title: "Eine mehrseitige Seite mit Layout erstellen", description: "Erstellen Sie eine Struktur mit einem Hauptlayout, Startseite, About-Seite, Blog mit dynamischen Beiträgen." },
    cheatSheet: { title: "Routing Spickzettel", items: [
      { term: "page.js", definition: "Routen-Seite" },
      { term: "layout.js", definition: "Gemeinsames Layout" },
      { term: "[slug]/page.js", definition: "Dynamische Route" },
      { term: "<Link href='/about'>", definition: "Navigationslink" },
      { term: "router.push()", definition: "Programmatische Navigation" }
    ]}
  }
};
export default translations;
