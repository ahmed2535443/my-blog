const translations = {
  ar: {
    sections: [
      { title: "ما هي Route Handlers؟", content: [
        { type: "p", text: "<strong>Route Handlers</strong> هي الطريقة لإنشاء نقاط نهاية API داخل تطبيقات Next.js باستخدام App Router. أنشئ ملف <code>route.js</code> داخل أي مجلد." },
        { type: "p", text: "Route Handlers تعمل فقط على الخادم — لا يُحمّل أي JavaScript إلى العميل." },
      ]},
      { title: "مثال أساسي", content: [
        { type: "code", text: "// app/api/users/route.js\nimport { NextResponse } from 'next/server';\n\nexport async function GET() {\n  const users = await db.users.findMany();\n  return NextResponse.json(users);\n}" },
      ]},
      { title: "طرق HTTP", content: [
        { type: "li", text: "<code>GET</code> — جلب البيانات" },
        { type: "li", text: "<code>POST</code> — إنشاء بيانات" },
        { type: "li", text: "<code>PUT</code> — تحديث البيانات" },
        { type: "li", text: "<code>DELETE</code> — حذف البيانات" },
      ]},
      { title: "proxy.ts — الـ Middleware الجديد", content: [
        { type: "p", text: "في Next.js 16، <code>proxy.ts</code> يحل محل الـ Middleware القديم. يتعامل مع تعديل الطلب/الاستجابة، والمصادقة، وإعادة التوجيه." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "Route Handlers تنشئ نقاط نهاية API باستخدام ملفات route.js." },
        { type: "li", text: "تنفذ فقط من جانب الخادم." },
        { type: "li", text: "تدعم جميع طرق HTTP: GET، POST، PUT، DELETE." },
        { type: "li", text: "proxy.ts يحل محل Middleware في Next.js 16." },
      ]}
    ],
    quiz: [
      { question: "أي ملف ينشئ نقطة نهاية API في App Router؟", options: ["api.js", "route.js", "endpoint.js", "server.js"], explanation: "ملف route.js داخل أي مجلد ينشئ نقطة نهاية API." },
      { question: "أين تنفذ Route Handlers؟", options: ["في المتصفح", "على الخادم فقط", "كلاهما الخادم والعميل", "في عملية منفصلة"], explanation: "Route Handlers تعمل فقط على الخادم." },
    ],
    challenge: { title: "أنشئ مسارات API", description: "أنشئ route handlers GET و POST لنقطة نهاية users API." },
    cheatSheet: { title: "ملخص مراجعة Route Handlers", items: [
      { term: "route.js", definition: "ملف نقطة نهاية API" },
      { term: "GET/POST/PUT/DELETE", definition: "تصديرات طرق HTTP" },
      { term: "NextResponse.json()", definition: "إعادة استجابة JSON" },
      { term: "proxy.ts", definition: "بديل الـ Middleware الجديد" }
    ]},
    interviewQuestions: [
      {
        question: "ما هو route handler؟",
        answer: "ملف route.js في مجلد app يوفر API endpoint.",
        difficulty: "easy"
      },
      {
        question: "كيف تحمي route؟",
        answer: "استخدم middleware.ts أو تحقق من Session في Route Handler.",
        difficulty: "medium"
      }
    ],
    tricks: [
      {
        title: "استخدم middleware",
        description: "للحماية التلقائية للمسارات قبل الوصول لها",
        icon: "brain"
      }
    ]
  },
  en: {
    sections: [
      { title: "What are Route Handlers?", content: [
        { type: "p", text: "<strong>Route Handlers</strong> are the way to create API endpoints inside Next.js applications using App Router. Create a <code>route.js</code> file inside any folder." },
        { type: "p", text: "Route Handlers run only on the server — no JavaScript is loaded to the client." },
      ]},
      { title: "Basic Example", content: [
        { type: "code", text: "// app/api/users/route.js\nimport { NextResponse } from 'next/server';\n\nexport async function GET() {\n  const users = await db.users.findMany();\n  return NextResponse.json(users);\n}" },
      ]},
      { title: "HTTP Methods", content: [
        { type: "li", text: "<code>GET</code> — Retrieve data" },
        { type: "li", text: "<code>POST</code> — Create data" },
        { type: "li", text: "<code>PUT</code> — Update data" },
        { type: "li", text: "<code>DELETE</code> — Delete data" },
      ]},
      { title: "proxy.ts — The New Middleware", content: [
        { type: "p", text: "In Next.js 16, <code>proxy.ts</code> replaces the old Middleware. It handles request/response modification, authentication, and redirects." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Route Handlers create API endpoints with route.js files." },
        { type: "li", text: "They run only on the server side." },
        { type: "li", text: "Support all HTTP methods: GET, POST, PUT, DELETE." },
        { type: "li", text: "proxy.ts replaces Middleware in Next.js 16." },
      ]}
    ],
    quiz: [
      { question: "What file creates an API endpoint in App Router?", options: ["api.js", "route.js", "endpoint.js", "server.js"], explanation: "A route.js file inside any folder creates an API endpoint." },
      { question: "Where do Route Handlers execute?", options: ["In the browser", "On the server only", "Both server and client", "In a separate process"], explanation: "Route Handlers run only on the server side." },
    ],
    challenge: { title: "Create API Routes", description: "Create GET and POST route handlers for a users API endpoint." },
    cheatSheet: { title: "Route Handlers Cheat Sheet", items: [
      { term: "route.js", definition: "API endpoint file" },
      { term: "GET/POST/PUT/DELETE", definition: "HTTP method exports" },
      { term: "NextResponse.json()", definition: "Return JSON response" },
      { term: "proxy.ts", definition: "New middleware replacement" }
    ]},
    interviewQuestions: [
      {
        question: "What is a route handler?",
        answer: "A route.js file in an app folder that provides an API endpoint.",
        difficulty: "easy"
      },
      {
        question: "How do you protect a route?",
        answer: "Use middleware.ts or check session in Route Handler.",
        difficulty: "medium"
      }
    ],
    tricks: [
      {
        title: "Use middleware",
        description: "For automatic protection of routes before they are accessed",
        icon: "brain"
      }
    ]
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que les Route Handlers ?", content: [
        { type: "p", text: "Les <strong>Route Handlers</strong> sont le moyen de créer des endpoints API dans les applications Next.js. Créez un fichier <code>route.js</code> dans n'importe quel dossier." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Les Route Handlers créent des endpoints API avec des fichiers route.js." },
        { type: "li", text: "Ils s'exécutent uniquement côté serveur." },
        { type: "li", text: "proxy.ts remplace le Middleware dans Next.js 16." },
      ]}
    ],
    quiz: [
      { question: "Quel fichier crée un endpoint API dans App Router ?", options: ["api.js", "route.js", "endpoint.js", "server.js"], explanation: "Un fichier route.js dans n'importe quel dossier crée un endpoint API." },
    ],
    challenge: { title: "Créer des routes API", description: "Créez des route handlers GET et POST pour un endpoint users." },
    cheatSheet: { title: "Fiche mémo Route Handlers", items: [
      { term: "route.js", definition: "Fichier endpoint API" },
      { term: "GET/POST/PUT/DELETE", definition: "Exports de méthodes HTTP" },
      { term: "NextResponse.json()", definition: "Retourner une réponse JSON" },
      { term: "proxy.ts", definition: "Nouveau remplaçant du Middleware" }
    ]}
  },
  de: {
    sections: [
      { title: "Was sind Route Handlers?", content: [
        { type: "p", text: "<strong>Route Handlers</strong> sind die Methode zum Erstellen von API-Endpunkten in Next.js-Anwendungen. Erstellen Sie eine <code>route.js</code>-Datei in jedem Ordner." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Route Handlers erstellen API-Endpunkte mit route.js-Dateien." },
        { type: "li", text: "Sie werden nur serverseitig ausgeführt." },
        { type: "li", text: "proxy.ts ersetzt Middleware in Next.js 16." },
      ]}
    ],
    quiz: [
      { question: "Welche Datei erstellt einen API-Endpunkt im App Router?", options: ["api.js", "route.js", "endpoint.js", "server.js"], explanation: "Eine route.js-Datei in jedem Ordner erstellt einen API-Endpunkt." },
    ],
    challenge: { title: "API-Routen erstellen", description: "Erstellen Sie GET und POST Route Handler für einen Users-API-Endpunkt." },
    cheatSheet: { title: "Route Handlers Spickzettel", items: [
      { term: "route.js", definition: "API-Endpunkt-Datei" },
      { term: "GET/POST/PUT/DELETE", definition: "HTTP-Methoden-Exports" },
      { term: "NextResponse.json()", definition: "JSON-Antwort zurückgeben" },
      { term: "proxy.ts", definition: "Neuer Middleware-Ersatz" }
    ]}
  }
};
export default translations;
