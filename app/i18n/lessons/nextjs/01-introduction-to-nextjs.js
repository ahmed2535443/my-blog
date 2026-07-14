const translations = {
  ar: {
    sections: [
      { title: "ما هو Next.js؟", content: [
        { type: "p", text: "<strong>Next.js</strong> هو إطار عمل مبني على React، تم تطويره بواسطة <strong>Vercel</strong>. يجمع بين قوة React في الواجهة الأمامية وميزات متقدمة من جانب الخادم لبناء تطبيقات الويب الحديثة." },
        { type: "p", text: "Next.js ليس مجرد مكتبة — بل هو إطار عمل كامل يوفر حلولاً جاهزة لتحسين محركات البحث (SEO)، وأداء التحميل الأولي، والتوجيه، وتحسين الصور." },
        { type: "callout", title: "شركات عالمية تستخدم Next.js", text: "Netflix و TikTok و Nike و Twitch و Notion و Hulu جميعها اختارت Next.js بسبب أدائه العالي وتجربة المطور الممتازة." },
      ]},
      { title: "لماذا تستخدم Next.js؟", content: [
        { type: "p", text: "<strong>المشكلة:</strong> تطبيقات React العادية (SPAs) ترسل حزمة JavaScript ضخمة للمتصفح، مما يسبب ضعف SEO، وبطء التحميل الأولي، وأداء سيء على الأجهزة الضعيفة." },
        { type: "p", text: "<strong>الحل:</strong> Next.js يحل هذه المشاكل باستخدام SSR (العرض من جانب الخادم)، و SSG (إنشاء الموقع الثابت)، والتوجيه المبني على الملفات، وتحسين الصور والخطوط المدمج." },
      ]},
      { title: "ما الجديد في Next.js 16؟", content: [
        { type: "li", text: "<strong>Turbopack كافتراضي:</strong> حزمة أسرع 2-5 مرات مع Fast Refresh أسرع 10 مرات." },
        { type: "li", text: "<strong>Cache Components:</strong> تعليمة 'use cache' جديدة للتحكم الدقيق في التخزين المؤقت." },
        { type: "li", text: "<strong>React Compiler مستقر:</strong> يحسّن الأداء تلقائياً." },
        { type: "li", text: "<strong>Proxy بدلاً من Middleware:</strong> proxy.ts يحل محل Middleware بميزات أقوى." },
        { type: "li", text: "<strong>Partial Prerendering (PPR):</strong> يجمع بين الثابت والديناميكي في نفس الصفحة." },
      ]},
      { title: "إنشاء مشروع Next.js جديد", content: [
        { type: "code", text: "npx create-next-app@latest" },
        { type: "p", text: "بعد التثبيت، انتقل إلى المجلد وشغّل:" },
        { type: "code", text: "cd my-app\nnpm run dev" },
        { type: "p", text: "افتح http://localhost:3000 لرؤية صفحة الترحيب الافتراضية." },
      ]},
      { title: "هيكل الملفات في App Router", content: [
        { type: "code", text: "my-app/\n  app/\n    layout.js        # التخطيط الرئيسي\n    page.js          # الصفحة الرئيسية (/)\n    loading.js       # حالة التحميل\n    error.js         # معالجة الأخطاء\n    not-found.js     # صفحة 404" },
        { type: "li", text: "<code>layout.js</code>: التخطيط الرئيسي الذي يلف جميع الصفحات." },
        { type: "li", text: "<code>page.js</code>: محتوى الصفحة الأساسي." },
        { type: "li", text: "<code>loading.js</code>: يعرض أثناء تحميل الصفحة." },
        { type: "li", text: "<code>error.js</code>: يعرض عند حدوث أخطاء." },
      ]},
      { title: "Turbopack - الحزمة الافتراضية الجديدة", content: [
        { type: "li", text: "<strong>أسرع 2-5 مرات</strong> في البناء مقارنة بـ Webpack." },
        { type: "li", text: "<strong>أسرع 10 مرات</strong> في Fast Refresh." },
        { type: "li", text: "<strong>لا يحتاج إعداد:</strong> يعمل تلقائياً." },
        { type: "li", text: "<strong>متوافق مع Webpack Loaders.</strong>" },
      ]},
      { title: "متغيرات البيئة", content: [
        { type: "li", text: "<code>.env</code>: متغيرات عامة تُحمّل في جميع البيئات." },
        { type: "li", text: "<code>.env.local</code>: متغيرات محلية — لا تُرفع إلى GitHub." },
        { type: "li", text: "<code>.env.development</code>: متغيرات خاصة بالتطوير." },
        { type: "li", text: "<code>.env.production</code>: متغيرات خاصة بالإنتاج." },
        { type: "callout", title: "قاعدة مهمة", text: "استخدم البادئة NEXT_PUBLIC_ للوصول إلى المتغيرات من المتصفح (من جانب العميل). المتغيرات بدون هذه البادئة خاصة بالخادم فقط." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "Next.js هو إطار عمل مبني على React من Vercel." },
        { type: "li", text: "يحل مشاكل SPAs مثل ضعف SEO والبطء." },
        { type: "li", text: "Next.js 16 يجلب Turbopack و Cache Components و React Compiler و Proxy و PPR." },
        { type: "li", text: "أنشئ مشروعك باستخدام npx create-next-app@latest." },
        { type: "li", text: "استخدم App Router مع هيكل app/ للتوجيه التلقائي." },
        { type: "li", text: "استخدم NEXT_PUBLIC_ للمتغيرات المتاحة في المتصفح." },
      ]}
    ],
    quiz: [
      { question: "ما هو Next.js؟", options: ["مكتبة CSS", "إطار عمل مبني على React من Vercel", "نظام قواعد بيانات", "لغة برمجة جديدة"], explanation: "Next.js هو إطار عمل مبني على React، تم تطويره بواسطة Vercel، ويوفر SSR و SSG و File-based Routing." },
      { question: "أي مشكلة يحل Next.js في SPAs؟", options: ["بطء تحرير الكود", "صعوبة تعلم React", "ضعف SEO وبطء التحميل الأولي", "لا يوجد دعم TypeScript"], explanation: "SPAs ترسل كميات ضخمة من JavaScript مما يسبب البطء وضعف SEO. Next.js يحل هذا بـ SSR و SSG." },
      { question: "ما هي الحزمة الافتراضية في Next.js 16؟", options: ["Webpack", "Parcel", "Turbopack", "Rollup"], explanation: "Turbopack هو الحزمة الافتراضية في Next.js 16، أسرع 2-5 مرات من Webpack." },
    ],
    challenge: { title: "أنشئ مشروع Next.js الأول الخاص بك", description: "شغّل npx create-next-app@latest، أدخل اسم المشروع، اختر Yes لجميع الخيارات، شغّل npm run dev، وافتح http://localhost:3000." },
    cheatSheet: { title: "ملخص مراجعة مقدمة Next.js", items: [
      { term: "npx create-next-app@latest", definition: "إنشاء مشروع جديد" },
      { term: "npm run dev", definition: "تشغيل وضع التطوير" },
      { term: "npm run build", definition: "بناء نسخة الإنتاج" },
      { term: "app/layout.js", definition: "التخطيط الرئيسي" },
      { term: "app/page.js", definition: "الصفحة الرئيسية" },
      { term: "NEXT_PUBLIC_", definition: "بادئة متغيرات العميل" },
      { term: "Turbopack", definition: "الحزمة الافتراضية - أسرع 5 مرات" }
    ]}
  },
  en: {
    sections: [
      { title: "What is Next.js?", content: [
        { type: "p", text: "<strong>Next.js</strong> is a framework built on React, developed by <strong>Vercel</strong>. It combines React's frontend power with advanced server-side features for building modern web applications." },
        { type: "p", text: "Next.js is not just a library — it is a complete framework providing ready-made solutions for SEO optimization, initial load performance, routing, and image optimization." },
        { type: "callout", title: "Global Companies Using Next.js", text: "Netflix, TikTok, Nike, Twitch, Notion, and Hulu all chose Next.js for its high performance and excellent developer experience." },
      ]},
      { title: "Why Use Next.js?", content: [
        { type: "p", text: "<strong>The Problem:</strong> Regular React apps (SPAs) send a massive JavaScript bundle to the browser, causing poor SEO, slow initial load, and poor performance on low-end devices." },
        { type: "p", text: "<strong>The Solution:</strong> Next.js solves these problems with SSR (Server-Side Rendering), SSG (Static Site Generation), File-based Routing, and built-in image and font optimization." },
      ]},
      { title: "What's New in Next.js 16?", content: [
        { type: "li", text: "<strong>Turbopack as default:</strong> 2-5x faster bundler with 10x faster Fast Refresh." },
        { type: "li", text: "<strong>Cache Components:</strong> New 'use cache' directive for precise component caching control." },
        { type: "li", text: "<strong>Stable React Compiler:</strong> Automatically optimizes performance." },
        { type: "li", text: "<strong>Proxy instead of Middleware:</strong> proxy.ts replaces Middleware with more power." },
        { type: "li", text: "<strong>Partial Prerendering (PPR):</strong> Combines static and dynamic in the same page." },
      ]},
      { title: "Creating a New Next.js Project", content: [
        { type: "code", text: "npx create-next-app@latest" },
        { type: "p", text: "After installation, navigate to the folder and run:" },
        { type: "code", text: "cd my-app\nnpm run dev" },
        { type: "p", text: "Open http://localhost:3000 to see the default welcome page." },
      ]},
      { title: "File Structure in App Router", content: [
        { type: "code", text: "my-app/\n  app/\n    layout.js        # Main layout\n    page.js          # Home page (/)\n    loading.js       # Loading state\n    error.js         # Error handling\n    not-found.js     # 404 page" },
        { type: "li", text: "<code>layout.js</code>: Main layout wrapping all pages." },
        { type: "li", text: "<code>page.js</code>: Core page content." },
        { type: "li", text: "<code>loading.js</code>: Displayed during page loading." },
        { type: "li", text: "<code>error.js</code>: Displayed on errors." },
      ]},
      { title: "Turbopack - The New Default Bundler", content: [
        { type: "li", text: "<strong>2-5x faster</strong> builds compared to Webpack." },
        { type: "li", text: "<strong>10x faster</strong> Fast Refresh." },
        { type: "li", text: "<strong>No configuration needed:</strong> Works automatically." },
        { type: "li", text: "<strong>Compatible with Webpack Loaders.</strong>" },
      ]},
      { title: "Environment Variables", content: [
        { type: "li", text: "<code>.env</code>: Public variables loaded in all environments." },
        { type: "li", text: "<code>.env.local</code>: Local variables — not uploaded to GitHub." },
        { type: "li", text: "<code>.env.development</code>: Development-specific variables." },
        { type: "li", text: "<code>.env.production</code>: Production-specific variables." },
        { type: "callout", title: "Important Rule", text: "Use NEXT_PUBLIC_ prefix to access variables from the browser (Client-side). Variables without this prefix are server-only." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Next.js is a framework built on React from Vercel." },
        { type: "li", text: "It solves SPA problems like poor SEO and slow loading." },
        { type: "li", text: "Next.js 16 brings Turbopack, Cache Components, React Compiler, Proxy, and PPR." },
        { type: "li", text: "Create your project with npx create-next-app@latest." },
        { type: "li", text: "Use App Router with app/ structure for automatic routing." },
        { type: "li", text: "Use NEXT_PUBLIC_ for browser-accessible variables." },
      ]}
    ],
    quiz: [
      { question: "What is Next.js?", options: ["A CSS library", "A framework built on React from Vercel", "A database system", "A new programming language"], explanation: "Next.js is a framework built on React, developed by Vercel, providing SSR, SSG, and File-based Routing." },
      { question: "What problem does Next.js solve in SPAs?", options: ["Slow code editing", "Difficulty learning React", "Poor SEO and slow initial loading", "No TypeScript support"], explanation: "SPAs send massive JavaScript causing slow loading and poor SEO. Next.js solves this with SSR and SSG." },
      { question: "What is the default bundler in Next.js 16?", options: ["Webpack", "Parcel", "Turbopack", "Rollup"], explanation: "Turbopack is the default bundler in Next.js 16, 2-5x faster than Webpack." },
    ],
    challenge: { title: "Create Your First Next.js Project", description: "Run npx create-next-app@latest, name the project, choose Yes for all options, run npm run dev, and open http://localhost:3000." },
    cheatSheet: { title: "Next.js Introduction Cheat Sheet", items: [
      { term: "npx create-next-app@latest", definition: "Create a new project" },
      { term: "npm run dev", definition: "Run development mode" },
      { term: "npm run build", definition: "Build production version" },
      { term: "app/layout.js", definition: "Main layout" },
      { term: "app/page.js", definition: "Home page" },
      { term: "NEXT_PUBLIC_", definition: "Client-side env prefix" },
      { term: "Turbopack", definition: "Default bundler - 5x faster" }
    ]}
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que Next.js ?", content: [
        { type: "p", text: "<strong>Next.js</strong> est un framework construit sur React, développé par <strong>Vercel</strong>. Il combine la puissance de React côté frontend avec des fonctionnalités avancées côté serveur." },
        { type: "p", text: "Next.js n'est pas simplement une bibliothèque — c'est un framework complet offrant des solutions pour l'optimisation SEO, les performances de chargement, le routage et l'optimisation des images." },
        { type: "callout", title: "Entreprises utilisant Next.js", text: "Netflix, TikTok, Nike, Twitch, Notion et Hulu ont toutes choisi Next.js pour ses performances élevées." },
      ]},
      { title: "Pourquoi utiliser Next.js ?", content: [
        { type: "p", text: "<strong>Le Problème :</strong> Les applications React classiques (SPAs) envoient un énorme bundle JavaScript au navigateur, causant un mauvais SEO, un chargement initial lent et de mauvaises performances." },
        { type: "p", text: "<strong>La Solution :</strong> Next.js résout ces problèmes avec le SSR, le SSG, le File-based Routing et l'optimisation intégrée des images et polices." },
      ]},
      { title: "Nouveautés de Next.js 16 ?", content: [
        { type: "li", text: "<strong>Turbopack par défaut :</strong> Bundler 2-5x plus rapide avec Fast Refresh 10x plus rapide." },
        { type: "li", text: "<strong>Cache Components :</strong> Nouvelle directive 'use cache' pour le contrôle du cache." },
        { type: "li", text: "<strong>React Compiler stable :</strong> Optimise automatiquement les performances." },
        { type: "li", text: "<strong>Proxy au lieu de Middleware :</strong> proxy.ts remplace Middleware." },
        { type: "li", text: "<strong>Partial Prerendering (PPR) :</strong> Combine statique et dynamique." },
      ]},
      { title: "Créer un nouveau projet Next.js", content: [
        { type: "code", text: "npx create-next-app@latest" },
        { type: "p", text: "Après l'installation, naviguez vers le dossier et lancez :" },
        { type: "code", text: "cd my-app\nnpm run dev" },
        { type: "p", text: "Ouvrez http://localhost:3000 pour voir la page d'accueil." },
      ]},
      { title: "Structure des fichiers dans App Router", content: [
        { type: "code", text: "my-app/\n  app/\n    layout.js        # Mise en page principale\n    page.js          # Page d'accueil (/)\n    loading.js       # Etat de chargement\n    error.js         # Gestion des erreurs\n    not-found.js     # Page 404" },
        { type: "li", text: "<code>layout.js</code> : Mise en page enveloppant toutes les pages." },
        { type: "li", text: "<code>page.js</code> : Contenu principal de la page." },
        { type: "li", text: "<code>loading.js</code> : Affiché pendant le chargement." },
        { type: "li", text: "<code>error.js</code> : Affiché lors des erreurs." },
      ]},
      { title: "Turbopack - Le nouveau bundler par défaut", content: [
        { type: "li", text: "<strong>2-5x plus rapide</strong> en builds par rapport à Webpack." },
        { type: "li", text: "<strong>10x plus rapide</strong> en Fast Refresh." },
        { type: "li", text: "<strong>Aucune configuration requise :</strong> Fonctionne automatiquement." },
        { type: "li", text: "<strong>Compatible avec les Webpack Loaders.</strong>" },
      ]},
      { title: "Variables d'environnement", content: [
        { type: "li", text: "<code>.env</code> : Variables publiques chargées partout." },
        { type: "li", text: "<code>.env.local</code> : Variables locales — pas sur GitHub." },
        { type: "li", text: "<code>.env.development</code> : Variables de développement." },
        { type: "li", text: "<code>.env.production</code> : Variables de production." },
        { type: "callout", title: "Règle importante", text: "Utilisez le préfixe NEXT_PUBLIC_ pour accéder aux variables depuis le navigateur." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Next.js est un framework construit sur React par Vercel." },
        { type: "li", text: "Il résout les problèmes SPA comme le mauvais SEO et le chargement lent." },
        { type: "li", text: "Next.js 16 apporte Turbopack, Cache Components, React Compiler, Proxy et PPR." },
        { type: "li", text: "Créez votre projet avec npx create-next-app@latest." },
        { type: "li", text: "Utilisez App Router avec la structure app/ pour le routage automatique." },
        { type: "li", text: "Utilisez NEXT_PUBLIC_ pour les variables accessibles dans le navigateur." },
      ]}
    ],
    quiz: [
      { question: "Qu'est-ce que Next.js ?", options: ["Une bibliothèque CSS", "Un framework construit sur React par Vercel", "Un système de base de données", "Un nouveau langage"], explanation: "Next.js est un framework construit sur React, développé par Vercel, offrant SSR, SSG et File-based Routing." },
      { question: "Quel problème Next.js résout-il dans les SPAs ?", options: ["Lenteur de l'édition", "Difficulté d'apprendre React", "Mauvais SEO et chargement initial lent", "Pas de support TypeScript"], explanation: "Les SPAs envoient d'énormes quantités de JavaScript causant un chargement lent et un mauvais SEO." },
      { question: "Quel est le bundler par défaut dans Next.js 16 ?", options: ["Webpack", "Parcel", "Turbopack", "Rollup"], explanation: "Turbopack est le bundler par défaut, 2-5x plus rapide que Webpack." },
    ],
    challenge: { title: "Créez votre premier projet Next.js", description: "Exécutez npx create-next-app@latest, nommez le projet, choisissez Yes pour toutes les options, exécutez npm run dev, et ouvrez http://localhost:3000." },
    cheatSheet: { title: "Fiche mémo Introduction à Next.js", items: [
      { term: "npx create-next-app@latest", definition: "Créer un nouveau projet" },
      { term: "npm run dev", definition: "Lancer le mode développement" },
      { term: "npm run build", definition: "Build production" },
      { term: "app/layout.js", definition: "Mise en page principale" },
      { term: "app/page.js", definition: "Page d'accueil" },
      { term: "NEXT_PUBLIC_", definition: "Préfixe env côté client" },
      { term: "Turbopack", definition: "Bundler par défaut - 5x plus rapide" }
    ]}
  },
  de: {
    sections: [
      { title: "Was ist Next.js?", content: [
        { type: "p", text: "<strong>Next.js</strong> ist ein Framework, das auf React aufbaut und von <strong>Vercel</strong> entwickelt wird. Es kombiniert die Leistung von React im Frontend mit erweiterten serverseitigen Funktionen." },
        { type: "p", text: "Next.js ist nicht nur eine Bibliothek — es ist ein vollständiges Framework mit Lösungen für SEO-Optimierung, Ladeleistung, Routing und Bildoptimierung." },
        { type: "callout", title: "Unternehmen die Next.js verwenden", text: "Netflix, TikTok, Nike, Twitch, Notion und Hulu haben sich für Next.js entschieden." },
      ]},
      { title: "Warum Next.js verwenden?", content: [
        { type: "p", text: "<strong>Das Problem:</strong> Normale React-Apps (SPAs) senden riesige JavaScript-Bundles an den Browser, was zu schlechtem SEO, langsamen Laden und schlechter Leistung führt." },
        { type: "p", text: "<strong>Die Lösung:</strong> Next.js löst diese Probleme mit SSR, SSG, File-based Routing und integrierter Bild- und Schriftartenoptimierung." },
      ]},
      { title: "Was ist neu in Next.js 16?", content: [
        { type: "li", text: "<strong>Turbopack als Standard:</strong> 2-5x schnellerer Bundler mit 10x schnellerem Fast Refresh." },
        { type: "li", text: "<strong>Cache Components:</strong> Neue 'use cache'-Direktive für präzise Caching-Kontrolle." },
        { type: "li", text: "<strong>Stabiler React Compiler:</strong> Optimiert die Leistung automatisch." },
        { type: "li", text: "<strong>Proxy statt Middleware:</strong> proxy.ts ersetzt Middleware." },
        { type: "li", text: "<strong>Partial Prerendering (PPR):</strong> Kombiniert statisch und dynamisch." },
      ]},
      { title: "Ein neues Next.js-Projekt erstellen", content: [
        { type: "code", text: "npx create-next-app@latest" },
        { type: "p", text: "Nach der Installation navigieren Sie zum Ordner und starten:" },
        { type: "code", text: "cd my-app\nnpm run dev" },
        { type: "p", text: "Öffnen Sie http://localhost:3000 für die Willkommensseite." },
      ]},
      { title: "Dateistruktur im App Router", content: [
        { type: "code", text: "my-app/\n  app/\n    layout.js        # Hauptlayout\n    page.js          # Startseite (/)\n    loading.js       # Ladezustand\n    error.js         # Fehlerbehandlung\n    not-found.js     # 404-Seite" },
        { type: "li", text: "<code>layout.js</code>: Hauptlayout, das alle Seiten umschließt." },
        { type: "li", text: "<code>page.js</code>: Hauptinhalt der Seite." },
        { type: "li", text: "<code>loading.js</code>: Wird während des Ladens angezeigt." },
        { type: "li", text: "<code>error.js</code>: Wird bei Fehlern angezeigt." },
      ]},
      { title: "Turbopack - Der neue Standard-Bundler", content: [
        { type: "li", text: "<strong>2-5x schneller</strong> bei Builds als Webpack." },
        { type: "li", text: "<strong>10x schneller</strong> bei Fast Refresh." },
        { type: "li", text: "<strong>Keine Konfiguration nötig:</strong> Funktioniert automatisch." },
        { type: "li", text: "<strong>Kompatibel mit Webpack Loaders.</strong>" },
      ]},
      { title: "Umgebungsvariablen", content: [
        { type: "li", text: "<code>.env</code>: Öffentliche Variablen für alle Umgebungen." },
        { type: "li", text: "<code>.env.local</code>: Lokale Variablen — nicht auf GitHub." },
        { type: "li", text: "<code>.env.development</code>: Entwicklungsspezifische Variablen." },
        { type: "li", text: "<code>.env.production</code>: Produktionsspezifische Variablen." },
        { type: "callout", title: "Wichtige Regel", text: "Verwenden Sie NEXT_PUBLIC_ Präfix für Browser-zugängliche Variablen." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Next.js ist ein Framework, das auf React von Vercel aufbaut." },
        { type: "li", text: "Es löst SPA-Probleme wie schlechtes SEO und langsames Laden." },
        { type: "li", text: "Next.js 16 bringt Turbopack, Cache Components, React Compiler, Proxy und PPR." },
        { type: "li", text: "Erstellen Sie Ihr Projekt mit npx create-next-app@latest." },
        { type: "li", text: "Verwenden Sie App Router mit app/-Struktur für automatisches Routing." },
        { type: "li", text: "Verwenden Sie NEXT_PUBLIC_ für browserzugängliche Variablen." },
      ]}
    ],
    quiz: [
      { question: "Was ist Next.js?", options: ["Eine CSS-Bibliothek", "Ein Framework das auf React von Vercel aufbaut", "Ein Datenbanksystem", "Eine neue Programmiersprache"], explanation: "Next.js ist ein Framework auf React, entwickelt von Vercel, mit SSR, SSG und File-based Routing." },
      { question: "Welches Problem löst Next.js in SPAs?", options: ["Langsames Code-Editieren", "Schwierigkeit React zu lernen", "Schlechtes SEO und langsames Laden", "Kein TypeScript-Support"], explanation: "SPAs senden riesige JavaScript-Bundles die zu langsamen Laden und schlechtem SEO führen." },
      { question: "Was ist der Standard-Bundler in Next.js 16?", options: ["Webpack", "Parcel", "Turbopack", "Rollup"], explanation: "Turbopack ist der Standard-Bundler, 2-5x schneller als Webpack." },
    ],
    challenge: { title: "Erstellen Sie Ihr erstes Next.js-Projekt", description: "Führen Sie npx create-next-app@latest aus, benennen Sie das Projekt, wählen Sie Yes für alle Optionen, starten Sie npm run dev und öffnen Sie http://localhost:3000." },
    cheatSheet: { title: "Next.js Einführung Spickzettel", items: [
      { term: "npx create-next-app@latest", definition: "Neues Projekt erstellen" },
      { term: "npm run dev", definition: "Entwicklungsmodus starten" },
      { term: "npm run build", definition: "Produktionsversion erstellen" },
      { term: "app/layout.js", definition: "Hauptlayout" },
      { term: "app/page.js", definition: "Startseite" },
      { term: "NEXT_PUBLIC_", definition: "Client-seitiges Env-Präfix" },
      { term: "Turbopack", definition: "Standard-Bundler - 5x schneller" }
    ]}
  }
};
export default translations;
