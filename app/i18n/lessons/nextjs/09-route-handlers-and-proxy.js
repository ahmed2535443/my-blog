const translations = {
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
    ]}
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
