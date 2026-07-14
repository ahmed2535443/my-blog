const translations = {
  ar: {
    sections: [
      { title: "ملخص شامل لمرحلة Next.js", content: [
        { type: "p", text: "تهانينا! لقد وصلت إلى الدرس الأخير من مرحلة Next.js. دعنا نلخص كل ما تعلمناه في الدروس التسعة السابقة." },
        { type: "li", text: "الدرس 1: مقدمة في Next.js والإعداد" },
        { type: "li", text: "الدرس 2: التوجيه — الصفحات والتخطيطات" },
        { type: "li", text: "الدرس 3: مكونات الخادم والعميل" },
        { type: "li", text: "الدرس 4: جلب البيانات والبث" },
        { type: "li", text: "الدرس 5: Server Actions والنماذج" },
        { type: "li", text: "الدرس 6: Cache Components" },
        { type: "li", text: "الدرس 7: معالجة الأخطاء" },
        { type: "li", text: "الدرس 8: الصور والخطوط والبيانات الوصفية" },
        { type: "li", text: "الدرس 9: Route Handlers والـ Proxy" },
      ]},
      { title: "المشروع النهائي: مدونة مع مصادقة", content: [
        { type: "p", text: "في هذا المشروع، سنبني تطبيق مدونة كامل مع مصادقة، باستخدام جميع المفاهيم التي تعلمناها خلال المرحلة." },
        { type: "li", text: "التوجيه المبني على الملفات مع صفحات ديناميكية" },
        { type: "li", text: "مكونات الخادم لجلب البيانات" },
        { type: "li", text: "مكونات العميل للتفاعلية" },
        { type: "li", text: "Server Actions لعمليات CRUD" },
        { type: "li", text: "معالجة الأخطاء مع error.js" },
        { type: "li", text: "تحسين الصور مع next/image" },
      ]},
      { title: "ما الخطوة التالية؟", content: [
        { type: "p", text: "بعد إكمال هذه المرحلة، لديك أساس متين في Next.js. يمكنك الآن الانتقال إلى Supabase لخدمات الخادم، أو Clerk للمصادقة، أو البدء في بناء مشاريعك الخاصة." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "أتقن أساسيات Next.js: التوجيه، المكونات، جلب البيانات." },
        { type: "li", text: "تعلم Server Actions و Cache Components ومعالجة الأخطاء." },
        { type: "li", text: "بنى مشروعامتكرياً يجمع جميع المفاهيم." },
        { type: "li", text: "جاهز للمراحل التالية: Supabase و Clerk والمشروع النهائي." },
      ]}
    ],
    quiz: [
      { question: "ما هو الترتيب الصحيح للعرض في Next.js؟", options: ["العميل → الخادم → المتصفح", "الخادم → HTML → ترطيب العميل", "المتصفح → الخادم → العميل", "الثابت → الديناميكي → التفاعلي"], explanation: "الخادم يعرض إلى HTML، يرسله إلى المتصفح، ثم مكونات العميل تتماشى للتفاعلية." },
      { question: "أيهم ليس اتفاقية ملف صحيحة في Next.js؟", options: ["page.js", "layout.js", "component.js", "loading.js"], explanation: "component.js ليست اتفاقية ملف قياسية. الملفات القياسية هي page.js و layout.js و loading.js و error.js و not-found.js." },
    ],
    challenge: { title: "ابنِ تطبيق المدونة الكامل", description: "اجمع جميع المفاهيم لبناء مدونة مع مصادقة وعمليات CRUD ومعالجة أخطاء وصور محسّنة." },
    cheatSheet: { title: "ملخص مراجعة Next.js الكامل", items: [
      { term: "npx create-next-app", definition: "إنشاء مشروع جديد" },
      { term: "app/page.js", definition: "صفحة المسار" },
      { term: "app/layout.js", definition: "التخطيط المشترك" },
      { term: "'use client'", definition: "تعليمة مكون العميل" },
      { term: "'use server'", definition: "تعليمة Server Action" },
      { term: "'use cache'", definition: "تعليمة التخزين المؤقت" },
      { term: "error.js", definition: "حدود الخطأ" },
      { term: "loading.js", definition: "واجهة التحميل" },
      { term: "route.js", definition: "نقطة نهاية API" },
      { term: "proxy.ts", definition: "بديل الـ Middleware" }
    ]}
  },
  en: {
    sections: [
      { title: "Comprehensive Next.js Stage Summary", content: [
        { type: "p", text: "Congratulations! You've reached the final lesson of the Next.js stage. Let's summarize everything we learned in the previous 9 lessons." },
        { type: "li", text: "Lesson 1: Introduction to Next.js and setup" },
        { type: "li", text: "Lesson 2: Routing — Pages and Layouts" },
        { type: "li", text: "Lesson 3: Server and Client Components" },
        { type: "li", text: "Lesson 4: Data Fetching and Streaming" },
        { type: "li", text: "Lesson 5: Server Actions and Forms" },
        { type: "li", text: "Lesson 6: Cache Components" },
        { type: "li", text: "Lesson 7: Error Handling" },
        { type: "li", text: "Lesson 8: Images, Fonts, and Metadata" },
        { type: "li", text: "Lesson 9: Route Handlers and Proxy" },
      ]},
      { title: "Final Project: Blog with Authentication", content: [
        { type: "p", text: "In this project, we will build a complete blog application with authentication, using all the concepts learned throughout the stage." },
        { type: "li", text: "File-based routing with dynamic pages" },
        { type: "li", text: "Server Components for data fetching" },
        { type: "li", text: "Client Components for interactivity" },
        { type: "li", text: "Server Actions for CRUD operations" },
        { type: "li", text: "Error handling with error.js" },
        { type: "li", text: "Image optimization with next/image" },
      ]},
      { title: "What's Next?", content: [
        { type: "p", text: "After completing this stage, you have a solid foundation in Next.js. You can now move on to Supabase for backend services, Clerk for authentication, or start building your own projects." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Mastered Next.js fundamentals: routing, components, data fetching." },
        { type: "li", text: "Learned Server Actions, Cache Components, and Error Handling." },
        { type: "li", text: "Built a complete project combining all concepts." },
        { type: "li", text: "Ready for the next stages: Supabase, Clerk, and Final Project." },
      ]}
    ],
    quiz: [
      { question: "What is the correct order of rendering in Next.js?", options: ["Client → Server → Browser", "Server → HTML → Client Hydration", "Browser → Server → Client", "Static → Dynamic → Interactive"], explanation: "Server renders to HTML, sends to browser, then Client Components hydrate for interactivity." },
      { question: "Which is NOT a valid Next.js file convention?", options: ["page.js", "layout.js", "component.js", "loading.js"], explanation: "component.js is not a standard file convention. Standard files are page.js, layout.js, loading.js, error.js, not-found.js." },
    ],
    challenge: { title: "Build the Complete Blog App", description: "Combine all concepts to build a blog with authentication, CRUD operations, error handling, and optimized images." },
    cheatSheet: { title: "Next.js Complete Cheat Sheet", items: [
      { term: "npx create-next-app", definition: "Create new project" },
      { term: "app/page.js", definition: "Route page" },
      { term: "app/layout.js", definition: "Shared layout" },
      { term: "'use client'", definition: "Client Component directive" },
      { term: "'use server'", definition: "Server Action directive" },
      { term: "'use cache'", definition: "Cache directive" },
      { term: "error.js", definition: "Error boundary" },
      { term: "loading.js", definition: "Loading UI" },
      { term: "route.js", definition: "API endpoint" },
      { term: "proxy.ts", definition: "Middleware replacement" }
    ]}
  },
  fr: {
    sections: [
      { title: "Résumé complet de la stage Next.js", content: [
        { type: "p", text: "Félicitations ! Vous avez atteint la dernière leçon de la stage Next.js. Résumons tout ce que nous avons appris." },
        { type: "li", text: "Leçon 1 : Introduction à Next.js et configuration" },
        { type: "li", text: "Leçon 2 : Routage — Pages et Mises en page" },
        { type: "li", text: "Leçon 3 : Composants Server et Client" },
        { type: "li", text: "Leçon 4 : Récupération de données et Streaming" },
        { type: "li", text: "Leçon 5 : Server Actions et Formulaires" },
        { type: "li", text: "Leçon 6 : Cache Components" },
        { type: "li", text: "Leçon 7 : Gestion des erreurs" },
        { type: "li", text: "Leçon 8 : Images, Polices et Métadonnées" },
        { type: "li", text: "Leçon 9 : Route Handlers et Proxy" },
      ]},
      { title: "Projet final : Blog avec authentification", content: [
        { type: "p", text: "Dans ce projet, nous construirons une application blog complète avec authentification." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Maîtrisé les fondamentaux de Next.js." },
        { type: "li", text: "Appris Server Actions, Cache Components et gestion des erreurs." },
        { type: "li", text: "Construit un projet complet combinant tous les concepts." },
      ]}
    ],
    quiz: [
      { question: "Quel est l'ordre correct de rendu dans Next.js ?", options: ["Client → Serveur → Navigateur", "Serveur → HTML → Hydratation Client", "Navigateur → Serveur → Client"], explanation: "Le serveur rend en HTML, l'envoie au navigateur, puis les Client Components s'hydratent." },
    ],
    challenge: { title: "Construire l'application blog complète", description: "Combinez tous les concepts pour construire un blog avec authentification et opérations CRUD." },
    cheatSheet: { title: "Next.js Fiche mémo complète", items: [
      { term: "npx create-next-app", definition: "Créer un nouveau projet" },
      { term: "app/page.js", definition: "Page de route" },
      { term: "'use client'", definition: "Directive Client Component" },
      { term: "'use server'", definition: "Directive Server Action" },
      { term: "'use cache'", definition: "Directive de cache" },
      { term: "error.js", definition: "Error boundary" },
      { term: "route.js", definition: "Endpoint API" },
      { term: "proxy.ts", definition: "Remplaçant du Middleware" }
    ]}
  },
  de: {
    sections: [
      { title: "Umfassende Next.js-Phasen-Zusammenfassung", content: [
        { type: "p", text: "Herzlichen Glückwunsch! Sie haben die letzte Lektion der Next.js-Phase erreicht." },
        { type: "li", text: "Lektion 1: Einführung in Next.js und Einrichtung" },
        { type: "li", text: "Lektion 2: Routing — Seiten und Layouts" },
        { type: "li", text: "Lektion 3: Server- und Client-Komponenten" },
        { type: "li", text: "Lektion 4: Datenabruf und Streaming" },
        { type: "li", text: "Lektion 5: Server Actions und Formulare" },
        { type: "li", text: "Lektion 6: Cache Components" },
        { type: "li", text: "Lektion 7: Fehlerbehandlung" },
        { type: "li", text: "Lektion 8: Bilder, Schriftarten und Metadaten" },
        { type: "li", text: "Lektion 9: Route Handlers und Proxy" },
      ]},
      { title: "Abschlussprojekt: Blog mit Authentifizierung", content: [
        { type: "p", text: "In diesem Projekt erstellen wir eine vollständige Blog-Anwendung mit Authentifizierung." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Next.js-Grundlagen gemeistert: Routing, Komponenten, Datenabruf." },
        { type: "li", text: "Server Actions, Cache Components und Fehlerbehandlung gelernt." },
        { type: "li", text: "Ein vollständiges Projekt mit allen Konzepten erstellt." },
      ]}
    ],
    quiz: [
      { question: "Was ist die richtige Reihenfolge der Darstellung in Next.js?", options: ["Client → Server → Browser", "Server → HTML → Client Hydration", "Browser → Server → Client"], explanation: "Der Server rendert zu HTML, sendet es an den Browser, dann hydratisieren Client-Komponenten." },
    ],
    challenge: { title: "Die vollständige Blog-App erstellen", description: "Kombinieren Sie alle Konzepte, um einen Blog mit Authentifizierung und CRUD-Operationen zu erstellen." },
    cheatSheet: { title: "Next.js Vollständiger Spickzettel", items: [
      { term: "npx create-next-app", definition: "Neues Projekt erstellen" },
      { term: "app/page.js", definition: "Routen-Seite" },
      { term: "'use client'", definition: "Client-Komponenten-Direktive" },
      { term: "'use server'", definition: "Server-Action-Direktive" },
      { term: "'use cache'", definition: "Cache-Direktive" },
      { term: "error.js", definition: "Error Boundary" },
      { term: "route.js", definition: "API-Endpunkt" },
      { term: "proxy.ts", definition: "Middleware-Ersatz" }
    ]}
  }
};
export default translations;
