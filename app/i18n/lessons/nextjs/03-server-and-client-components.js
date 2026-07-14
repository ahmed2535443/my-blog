const translations = {
  ar: {
    sections: [
      { title: "مراجعة مكونات الخادم مقابل العميل", content: [
        { type: "li", text: "<strong>مكونات الخادم:</strong> تنفذ على الخادم فقط. تصل إلى قواعد البيانات مباشرة، وتقرأ الملفات، وتستخدم مفاتيح API بأمان." },
        { type: "li", text: "<strong>مكونات العميل:</strong> تنفذ على الخادم ثم في المتصفح. مطلوبة للتفاعلية: useState، useEffect، معالجات الأحداث." },
      ]},
      { title: "في سياق Next.js", content: [
        { type: "p", text: "في Next.js مع App Router، جميع المكونات هي <strong>مكونات خادم بشكل افتراضي</strong>. أضف 'use client' في أعلى الملف لتحويلها إلى مكون عميل." },
      ]},
      { title: "متى تستخدم مكون العميل؟", content: [
        { type: "li", text: "إدارة الحالة: useState، useReducer" },
        { type: "li", text: "التأثيرات الجانبية: useEffect لاستدعاءات API" },
        { type: "li", text: "معالجات الأحداث: onClick، onSubmit، onChange" },
        { type: "li", text: "واجهات برمجة المتصفح: localStorage، navigator، window" },
        { type: "li", text: "Hooks مخصصة تستخدم أي مما سبق" },
        { type: "li", text: "مقدمات السياق" },
      ]},
      { title: "متى تستخدم مكون الخادم؟", content: [
        { type: "li", text: "جلب البيانات من قواعد البيانات" },
        { type: "li", text: "قراءة الملفات" },
        { type: "li", text: "معلومات حساسة: مفاتيح API، كلمات المرور" },
        { type: "li", text: "عرض محتوى ثابت" },
        { type: "li", text: "تحسين محركات البحث" },
      ]},
      { title: "التناوب: خلط الخادم والعميل", content: [
        { type: "p", text: "<strong>القاعدة:</strong> مكون الخادم يمكنه استيراد مكون العميل. مكون العميل <strong>لا يمكنه</strong> استيراد مكون الخادم مباشرة — استخدم خاصية children بدلاً من ذلك." },
      ]},
      { title: "النمط الشائع: الخادم يجلب، العميل يتفاعل", content: [
        { type: "p", text: "مكون الخادم يجلب البيانات ويمرر النتائج كخصائص إلى مكون العميل للتفاعلية." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "جميع المكونات في App Router هي مكونات خادم بشكل افتراضي." },
        { type: "li", text: "أضف 'use client' فقط عندما تحتاج useState أو useEffect أو معالجات الأحداث." },
        { type: "li", text: "مكونات الخادم مثالية لجلب البيانات والمنطق الحساس." },
        { type: "li", text: "مكونات العميل ضرورية للتفاعل مع المستخدم." },
        { type: "li", text: "الخادم يمكنه استيراد العميل. العكس ليس صحيحاً — استخدم children بدلاً من ذلك." },
      ]}
    ],
    quiz: [
      { question: "ما هو النوع الافتراضي للمكونات في Next.js App Router؟", options: ["مكون العميل", "مكون الخادم", "مكون هجين", "مكون ثابت"], explanation: "في App Router، جميع المكونات هي مكونات خادم بشكل افتراضي." },
      { question: "أيهم يتطلب التحويل إلى مكون عميل؟", options: ["جلب البيانات من قاعدة البيانات", "عرض نص ثابت", "استخدام useState", "قراءة ملف JSON"], explanation: "useState هو Hook يعمل فقط في المتصفح (من جانب العميل)." },
      { question: "ماذا يحدث عندما يحاول مكون العميل استيراد مكون خادم؟", options: ["يعمل بشكل طبيعي", "خطأ - لا يمكن استيراد الخادم داخل العميل", "يتحول تلقائياً إلى عميل", "يتحول تلقائياً إلى خادم"], explanation: "مكون العميل لا يمكنه استيراد مكون الخادم. استخدم خاصية children بدلاً من ذلك." },
    ],
    challenge: { title: "حدد أنواع المكونات", description: "مع تطبيق مدونة، حدد أي المكونات يجب أن تكون خادماً وأي منها يجب أن يكون عميلاً." },
    cheatSheet: { title: "ملخص مراجعة مكونات الخادم مقابل العميل", items: [
      { term: "مكون الخادم", definition: "الافتراضي، يصل إلى قاعدة البيانات، لا يوجد useState" },
      { term: "مكون العميل", definition: "يحتاج 'use client'، يستخدم useState/useEffect" },
      { term: "'use client'", definition: "تعليمة لتحويل إلى مكون عميل" },
      { term: "التناوب", definition: "الخادم يمكنه استيراد العميل، وليس العكس" },
      { term: "خاصية children", definition: "تمرير محتوى الخادم إلى مكونات العميل" }
    ]}
  },
  en: {
    sections: [
      { title: "Server vs Client Components Review", content: [
        { type: "li", text: "<strong>Server Components:</strong> Execute on the server only. Access databases directly, read files, and use API keys safely." },
        { type: "li", text: "<strong>Client Components:</strong> Execute on the server then in the browser. Needed for interactivity: useState, useEffect, event handlers." },
      ]},
      { title: "In the Context of Next.js", content: [
        { type: "p", text: "In Next.js with App Router, all components are <strong>Server Components by default</strong>. Add 'use client' at the top of the file to convert to Client Component." },
      ]},
      { title: "When to Use Client Component?", content: [
        { type: "li", text: "State management: useState, useReducer" },
        { type: "li", text: "Side effects: useEffect for API calls or DOM" },
        { type: "li", text: "Event handlers: onClick, onSubmit, onChange" },
        { type: "li", text: "Browser APIs: localStorage, navigator, window" },
        { type: "li", text: "Custom Hooks using any of the above" },
        { type: "li", text: "Context Providers" },
      ]},
      { title: "When to Use Server Component?", content: [
        { type: "li", text: "Fetching data from databases" },
        { type: "li", text: "Reading files" },
        { type: "li", text: "Sensitive information: API keys, passwords" },
        { type: "li", text: "Displaying static content" },
        { type: "li", text: "SEO optimization" },
      ]},
      { title: "Interleaving: Mixing Server and Client", content: [
        { type: "p", text: "<strong>Rule:</strong> Server Component can import Client Component. Client Component <strong>cannot</strong> import Server Component directly — use children prop instead." },
      ]},
      { title: "Common Pattern: Server Fetches, Client Interacts", content: [
        { type: "p", text: "Server Component fetches data and passes results as props to Client Component for interactivity." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "All components in App Router are Server Components by default." },
        { type: "li", text: "Add 'use client' only when you need useState, useEffect, or event handlers." },
        { type: "li", text: "Server Components are ideal for data fetching and sensitive logic." },
        { type: "li", text: "Client Components are essential for user interaction." },
        { type: "li", text: "Server can import Client. The reverse is not true — use children instead." },
      ]}
    ],
    quiz: [
      { question: "What is the default type of components in Next.js App Router?", options: ["Client Component", "Server Component", "Hybrid Component", "Static Component"], explanation: "In App Router, all components are Server Components by default." },
      { question: "Which requires converting to Client Component?", options: ["Fetching data from database", "Displaying static text", "Using useState", "Reading a JSON file"], explanation: "useState is a Hook that works only in the browser (Client-side)." },
      { question: "What happens if a Client Component tries to import a Server Component?", options: ["Works normally", "Error - cannot import Server inside Client", "Automatically converts to Client", "Automatically converts to Server"], explanation: "Client Component cannot import Server Component. Use children prop instead." },
    ],
    challenge: { title: "Identify Component Types", description: "Given a blog app, determine which components should be Server and which should be Client." },
    cheatSheet: { title: "Server vs Client Components Cheat Sheet", items: [
      { term: "Server Component", definition: "Default, accesses DB, no useState" },
      { term: "Client Component", definition: "Needs 'use client', uses useState/useEffect" },
      { term: "'use client'", definition: "Directive to convert to Client Component" },
      { term: "Interleaving", definition: "Server can import Client, not vice versa" },
      { term: "children prop", definition: "Pass Server content to Client components" }
    ]}
  },
  fr: {
    sections: [
      { title: "Revue Server vs Client Components", content: [
        { type: "li", text: "<strong>Server Components :</strong> S'exécutent uniquement sur le serveur. Accèdent directement aux bases de données." },
        { type: "li", text: "<strong>Client Components :</strong> S'exécutent sur le serveur puis dans le navigateur. Nécessaires pour l'interactivité : useState, useEffect." },
      ]},
      { title: "Dans le contexte de Next.js", content: [
        { type: "p", text: "Dans Next.js avec App Router, tous les composants sont des <strong>Server Components par défaut</strong>. Ajoutez 'use client' en haut du fichier pour convertir." },
      ]},
      { title: "Quand utiliser Client Component ?", content: [
        { type: "li", text: "Gestion d'état : useState, useReducer" },
        { type: "li", text: "Effets secondaires : useEffect" },
        { type: "li", text: "Gestionnaires d'événements : onClick, onSubmit" },
        { type: "li", text: "APIs navigateur : localStorage, window" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Tous les composants dans App Router sont des Server Components par défaut." },
        { type: "li", text: "Ajoutez 'use client' uniquement pour useState, useEffect ou les événements." },
        { type: "li", text: "Le Server peut importer le Client. L'inverse n'est pas vrai." },
      ]}
    ],
    quiz: [
      { question: "Quel est le type par défaut des composants dans App Router ?", options: ["Client Component", "Server Component", "Hybrid Component"], explanation: "Dans App Router, tous les composants sont des Server Components par défaut." },
      { question: "Qu'est-ce qui nécessite la conversion en Client Component ?", options: ["Récupérer des données", "Afficher du texte statique", "Utiliser useState"], explanation: "useState est un Hook qui fonctionne uniquement côté Client." },
    ],
    challenge: { title: "Identifier les types de composants", description: "Pour une application blog, déterminez quels composants doivent être Server et quels doivent être Client." },
    cheatSheet: { title: "Fiche mémo Server vs Client Components", items: [
      { term: "Server Component", definition: "Par défaut, accède à la DB, pas de useState" },
      { term: "Client Component", definition: "Besoin de 'use client', utilise useState/useEffect" },
      { term: "'use client'", definition: "Directive pour convertir en Client Component" },
      { term: "Interleaving", definition: "Le Server peut importer le Client, pas l'inverse" }
    ]}
  },
  de: {
    sections: [
      { title: "Server vs Client Components Überblick", content: [
        { type: "li", text: "<strong>Server Components:</strong> Nur auf dem Server ausgeführt. Zugriff auf Datenbanken, Dateien und sichere API-Schlüssel." },
        { type: "li", text: "<strong>Client Components:</strong> Auf dem Server dann im Browser ausgeführt. Für Interaktivität: useState, useEffect." },
      ]},
      { title: "Im Kontext von Next.js", content: [
        { type: "p", text: "In Next.js mit App Router sind alle Komponenten standardmäßig <strong>Server Components</strong>. Fügen Sie 'use client' oben in der Datei hinzu." },
      ]},
      { title: "Wann Client Component verwenden?", content: [
        { type: "li", text: "State-Verwaltung: useState, useReducer" },
        { type: "li", text: "Nebeneffekte: useEffect" },
        { type: "li", text: "Event-Handler: onClick, onSubmit" },
        { type: "li", text: "Browser-APIs: localStorage, window" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Alle Komponenten in App Router sind standardmäßig Server Components." },
        { type: "li", text: "Fügen Sie 'use client' nur für useState, useEffect oder Event-Handler hinzu." },
        { type: "li", text: "Server kann Client importieren. Umgekehrt ist nicht wahr." },
      ]}
    ],
    quiz: [
      { question: "Was ist der Standardtyp der Komponenten in App Router?", options: ["Client Component", "Server Component", "Hybrid Component"], explanation: "Im App Router sind alle Komponenten standardmäßig Server Components." },
      { question: "Was erfordert die Umwandlung in Client Component?", options: ["Daten abrufen", "Statischen Text anzeigen", "useState verwenden"], explanation: "useState ist ein Hook, der nur im Browser (Client-seitig) funktioniert." },
    ],
    challenge: { title: "Komponententypen identifizieren", description: "Bestimmen Sie bei einer Blog-App, welche Komponenten Server und welche Client sein sollten." },
    cheatSheet: { title: "Server vs Client Components Spickzettel", items: [
      { term: "Server Component", definition: "Standard, greift auf DB zu, kein useState" },
      { term: "Client Component", definition: "Benötigt 'use client', verwendet useState/useEffect" },
      { term: "'use client'", definition: "Direktive zur Umwandlung in Client Component" },
      { term: "Interleaving", definition: "Server kann Client importieren, nicht umgekehrt" }
    ]}
  }
};
export default translations;
