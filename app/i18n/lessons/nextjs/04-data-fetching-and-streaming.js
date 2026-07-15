const translations = {
  ar: {
    sections: [
      { title: "جلب البيانات في مكونات الخادم", content: [
        { type: "p", text: "واحدة من أكبر ميزات <strong>مكونات الخادم</strong> في Next.js هي القدرة على جلب البيانات <strong>مباشرة داخل المكون</strong> بدون أي hooks مثل useEffect." },
        { type: "p", text: "تصبح الدالة <code>async</code> وتستخدم <code>await</code> مباشرة. لا يوجد useEffect، لا يوجد useState، لا تحتاج حالات تحميل." },
      ]},
      { title: "fetch() المحسّن في Next.js", content: [
        { type: "p", text: "Next.js يحسّن <code>fetch()</code> الأصلي بميزات التخزين المؤقت والتحقق من الصلابة." },
        { type: "li", text: "<code>force-cache</code> — الافتراضي للمكونات الثابتة: يخزّن إلى أجل غير مسمى." },
        { type: "li", text: "<code>no-store</code> — لا يخزّن أبداً: يجلب بيانات طازجة في كل طلب." },
        { type: "li", text: "<code>next: { revalidate: seconds }</code> — يحدّث التخزين المؤقت بعد الثواني المحددة (ISR)." },
        { type: "li", text: "<code>next: { tags: [...] }</code> — وسوم للتحقق المستهدف." },
      ]},
      { title: "البث باستخدام Suspense", content: [
        { type: "p", text: "<strong>البث</strong> يسمح لـ Next.js بإرسال أجزاء الصفحة تدريجياً. استخدم <code>Suspense</code> من React للف المكونات البطيئة." },
        { type: "p", text: "تظهر المكونات السريعة فوراً بينما تعرض المكونات البطيئة حالة تحميل بديلة." },
      ]},
      { title: "loading.js - واجهة تحميل تلقائية", content: [
        { type: "p", text: "Next.js يوفر ملف <code>loading.js</code> لكل مجلد يعرض تلقائياً أثناء تحميل الصفحة." },
      ]},
      { title: "الجلب المتوازي", content: [
        { type: "p", text: "استخدم <code>Promise.all()</code> أو <code>Promise.allSettled()</code> لجلب مصادر بيانات متعددة بالتوازي بدلاً من التسلسلي." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "في مكونات الخادم، اجلب البيانات مباشرة باستخدام async/await بدون useEffect." },
        { type: "li", text: "fetch() في Next.js محسّن بالتخزين المؤقت والتحقق من الصلابة." },
        { type: "li", text: "Suspense يمكّن البث — تسليم المحتوى التدريجي." },
        { type: "li", text: "loading.js يوفر واجهة تحميل تلقائية لكل مسار." },
        { type: "li", text: "استخدم Promise.all() للجلب المتوازي و Promise.allSettled() للأمان." },
      ]}
    ],
    quiz: [
      { question: "ما هي الميزة الرئيسية لجلب البيانات في مكونات الخادم؟", options: ["تنفيذ أبطأ", "يمكن استخدام async/await مباشرة بدون useEffect أو useState", "لا يمكن الجلب من APIs خارجية", "لا يوجد فرق حقيقي"], explanation: "في مكونات الخادم، يمكنك استخدام async/await مباشرة لجلب البيانات بدون useEffect أو useState." },
      { question: "ما هو الغرض الرئيسي من استخدام Suspense مع جلب البيانات؟", options: ["تحسين الأمان", "جعل الكود أسهل في القراءة", "تمكين البث لعرض المحتوى التدريجي", "تقليل حجم JavaScript"], explanation: "Suspense يمكّن البث — عرض المكونات السريعة فوراً مع تحميل للبطيئة." },
      { question: "أي خيار fetch() يحدّث البيانات كل 5 دقائق؟", options: ["cache: force-cache", "cache: no-store", "next: { revalidate: 300 }", "next: { tags: ['data'] }"], explanation: "revalidate: 300 يعني 300 ثانية = 5 دقائق. يخزّن ويحدّث تلقائياً كل 5 دقائق." },
    ],
    challenge: { title: "ابنِ لوحة تحكم مع البث", description: "أنشئ لوحة تحكم تستخدم البث لعرض المحتوى التدريجي مع Suspense و loading.js." },
    cheatSheet: { title: "ملخص مراجعة جلب البيانات والبث", items: [
      { term: "async function Page()", definition: "جلب مباشر في مكون الخادم" },
      { term: "next: { revalidate: 3600 }", definition: "تخزين مؤقت لمدة ساعة" },
      { term: "cache: 'no-store'", definition: "لا تخزين مؤقت أبداً" },
      { term: "<Suspense fallback={...}>", definition: "حدود البث" },
      { term: "loading.js", definition: "واجهة تحميل تلقائية" },
      { term: "Promise.all()", definition: "جلب بيانات متوازي" }
    ]},
    interviewQuestions: [
      {
        question: "كيف تجلب البيانات في Next.js 13+؟",
        answer: "استخدم async/await مباشرة في Server Components. لا need لـ useEffect.",
        difficulty: "easy"
      },
      {
        question: "ما هو streaming؟",
        answer: "عرض أجزاء من الصفحة تدريجياً بدلاً من الانتظار للتحميل الكامل.",
        difficulty: "medium"
      }
    ],
    tricks: [
      {
        title: "استخدم React Cache",
        description: "لتجنب جلب البيانات نفسة عدة مرات في مكونات مختلفة",
        icon: "brain"
      }
    ]
  },
  en: {
    sections: [
      { title: "Data Fetching in Server Components", content: [
        { type: "p", text: "One of the biggest advantages of <strong>Server Components</strong> in Next.js is the ability to fetch data <strong>directly inside the component</strong> without any hooks like useEffect." },
        { type: "p", text: "The function becomes <code>async</code> and uses <code>await</code> directly. No useEffect, no useState, no loading states needed." },
      ]},
      { title: "Optimized fetch() in Next.js", content: [
        { type: "p", text: "Next.js enhances the native <code>fetch()</code> with caching and revalidation features." },
        { type: "li", text: "<code>force-cache</code> — Default for static components: caches indefinitely." },
        { type: "li", text: "<code>no-store</code> — Never caches: fetches fresh data every request." },
        { type: "li", text: "<code>next: { revalidate: seconds }</code> — Updates cache after specified seconds (ISR)." },
        { type: "li", text: "<code>next: { tags: [...] }</code> — Tags for targeted revalidation." },
      ]},
      { title: "Streaming with Suspense", content: [
        { type: "p", text: "<strong>Streaming</strong> allows Next.js to send page parts progressively. Use <code>Suspense</code> from React to wrap slow components." },
        { type: "p", text: "Fast components appear immediately while slow ones show a loading fallback." },
      ]},
      { title: "loading.js - Automatic Loading UI", content: [
        { type: "p", text: "Next.js provides a <code>loading.js</code> file for each folder that automatically shows during page loading." },
      ]},
      { title: "Parallel Data Fetching", content: [
        { type: "p", text: "Use <code>Promise.all()</code> or <code>Promise.allSettled()</code> to fetch multiple data sources in parallel instead of sequentially." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "In Server Components, fetch data directly using async/await without useEffect." },
        { type: "li", text: "fetch() in Next.js is optimized with Caching and Revalidation." },
        { type: "li", text: "Suspense enables Streaming — progressive content delivery." },
        { type: "li", text: "loading.js provides automatic loading UI for each route." },
        { type: "li", text: "Use Promise.all() for parallel fetching and Promise.allSettled() for safety." },
      ]}
    ],
    quiz: [
      { question: "What is the main advantage of data fetching in Server Components?", options: ["Slower execution", "Can use async/await directly without useEffect or useState", "Cannot fetch from external APIs", "No real difference"], explanation: "In Server Components, you can use async/await directly to fetch data without useEffect or useState." },
      { question: "What is the primary purpose of using Suspense with data fetching?", options: ["Improve security", "Make code easier to read", "Enable Streaming for progressive content display", "Reduce JavaScript size"], explanation: "Suspense enables Streaming — showing fast components immediately with loading for slow ones." },
      { question: "Which fetch() option updates data every 5 minutes?", options: ["cache: force-cache", "cache: no-store", "next: { revalidate: 300 }", "next: { tags: ['data'] }"], explanation: "revalidate: 300 means 300 seconds = 5 minutes. Caches and auto-updates every 5 minutes." },
    ],
    challenge: { title: "Build a Dashboard with Streaming", description: "Create a dashboard that uses Streaming to display data progressively with Suspense and loading.js." },
    cheatSheet: { title: "Data Fetching & Streaming Cheat Sheet", items: [
      { term: "async function Page()", definition: "Direct data fetching in Server Component" },
      { term: "next: { revalidate: 3600 }", definition: "Cache for 1 hour" },
      { term: "cache: 'no-store'", definition: "Never cache" },
      { term: "<Suspense fallback={...}>", definition: "Streaming boundary" },
      { term: "loading.js", definition: "Automatic loading UI" },
      { term: "Promise.all()", definition: "Parallel data fetching" }
    ]},
    interviewQuestions: [
      {
        question: "How do you fetch data in Next.js 13+?",
        answer: "Use async/await directly in Server Components. No need for useEffect.",
        difficulty: "easy"
      },
      {
        question: "What is streaming?",
        answer: "Displaying parts of the page progressively instead of waiting for full load.",
        difficulty: "medium"
      }
    ],
    tricks: [
      {
        title: "Use React Cache",
        description: "To avoid fetching the same data multiple times in different components",
        icon: "brain"
      }
    ]
  },
  fr: {
    sections: [
      { title: "Récupération de données dans les Server Components", content: [
        { type: "p", text: "L'un des plus grands avantages des <strong>Server Components</strong> est la capacité de récupérer les données <strong>directement dans le composant</strong> sans hooks comme useEffect." },
      ]},
      { title: "fetch() optimisé dans Next.js", content: [
        { type: "li", text: "<code>force-cache</code> — Par défaut pour les composants statiques." },
        { type: "li", text: "<code>no-store</code> — Ne jamais mettre en cache." },
        { type: "li", text: "<code>next: { revalidate: seconds }</code> — Met à jour le cache après un certain temps (ISR)." },
      ]},
      { title: "Streaming avec Suspense", content: [
        { type: "p", text: "<strong>Streaming</strong> permet d'envoyer les parties de la page progressivement. Utilisez <code>Suspense</code> pour envelopper les composants lents." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Dans les Server Components, récupérez les données directement avec async/await." },
        { type: "li", text: "fetch() est optimisé avec le cache et la revalidation." },
        { type: "li", text: "Suspense active le Streaming — affichage progressif du contenu." },
      ]}
    ],
    quiz: [
      { question: "Quel est l'avantage principal de la récupération de données dans les Server Components ?", options: ["Exécution plus lente", "Peut utiliser async/await directement sans useEffect", "Pas de différence réelle"], explanation: "Dans les Server Components, vous pouvez utiliser async/await directement." },
    ],
    challenge: { title: "Construire un Dashboard avec Streaming", description: "Créez un dashboard utilisant le Streaming avec Suspense et loading.js." },
    cheatSheet: { title: "Fiche mémo Récupération de données & Streaming", items: [
      { term: "async function Page()", definition: "Récupération directe dans Server Component" },
      { term: "next: { revalidate: 3600 }", definition: "Cache pendant 1 heure" },
      { term: "cache: 'no-store'", definition: "Ne jamais mettre en cache" },
      { term: "<Suspense>", definition: "Boundary de Streaming" },
      { term: "loading.js", definition: "Interface de chargement automatique" }
    ]}
  },
  de: {
    sections: [
      { title: "Datenabruf in Server Components", content: [
        { type: "p", text: "Einer der größten Vorteile von <strong>Server Components</strong> ist die Möglichkeit, Daten <strong>direkt in der Komponente</strong> abzurufen, ohne useEffect." },
      ]},
      { title: "Optimiertes fetch() in Next.js", content: [
        { type: "li", text: "<code>force-cache</code> — Standard für statische Komponenten." },
        { type: "li", text: "<code>no-store</code> — Niemals cachen." },
        { type: "li", text: "<code>next: { revalidate: seconds }</code> — Cache-Update nach Sekunden (ISR)." },
      ]},
      { title: "Streaming mit Suspense", content: [
        { type: "p", text: "<strong>Streaming</strong> ermöglicht es Next.js, Seitenteile progressiv zu senden. Verwenden Sie <code>Suspense</code> für langsame Komponenten." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Rufen Sie Daten in Server Components direkt mit async/await ab." },
        { type: "li", text: "fetch() ist mit Caching und Revalidation optimiert." },
        { type: "li", text: "Suspense ermöglicht Streaming — progressive Inhaltsanzeige." },
      ]}
    ],
    quiz: [
      { question: "Was ist der Hauptvorteil des Datenabrufs in Server Components?", options: ["Langsamere Ausführung", "Kann async/await direkt ohne useEffect verwenden", "Kein realer Unterschied"], explanation: "In Server Components können Sie async/await direkt verwenden." },
    ],
    challenge: { title: "Dashboard mit Streaming erstellen", description: "Erstellen Sie ein Dashboard mit Streaming, Suspense und loading.js." },
    cheatSheet: { title: "Datenabruf & Streaming Spickzettel", items: [
      { term: "async function Page()", definition: "Direkter Abruf in Server Component" },
      { term: "next: { revalidate: 3600 }", definition: "1 Stunde cachen" },
      { term: "cache: 'no-store'", definition: "Niemals cachen" },
      { term: "<Suspense>", definition: "Streaming-Grenze" },
      { term: "loading.js", definition: "Automatische Ladeoberfläche" }
    ]}
  }
};
export default translations;
