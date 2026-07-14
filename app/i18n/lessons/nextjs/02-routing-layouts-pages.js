const translations = {
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
    ]}
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
