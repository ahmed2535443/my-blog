const translations = {
  en: {
    sections: [
      { title: "Advanced Clerk Features", content: [
        { type: "p", text: "Clerk offers several advanced features that enhance security and user experience." },
      ]},
      { title: "Protecting Routes with Middleware", content: [
        { type: "code", text: "// middleware.js\nimport { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);\n\nexport default clerkMiddleware(async (req, auth) => {\n  if (!isPublicRoute(req)) {\n    await auth.protect();\n  }\n});\n\nexport const config = [\n  '/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\n  '/(api|trpc)(.*)',\n];" },
      ]},
      { title: "Clerk + Supabase Integration", content: [
        { type: "p", text: "Use Clerk for authentication and Supabase for database. Send Clerk's JWT token to Supabase to verify users." },
        { type: "code", text: "// Getting the Clerk token for Supabase\nimport { auth } from '@clerk/nextjs/server';\n\nexport async function getSupabaseUser() {\n  const { userId } = await auth();\n  // Use userId to query Supabase\n}" },
      ]},
      { title: "Custom Themes", content: [
        { type: "p", text: "Clerk components can be themed using Tailwind CSS classes or the appearance prop." },
        { type: "code", text: "<SignIn\n  appearance={{\n    elements: {\n      rootBox: 'mx-auto',\n      card: 'shadow-xl rounded-lg',\n    },\n  }}\n/>" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Use middleware.js to protect routes globally." },
        { type: "li", text: "Clerk can integrate with Supabase for auth + database." },
        { type: "li", text: "Components can be customized with appearance prop." },
      ]}
    ],
    quiz: [
      { question: "What does clerkMiddleware do?", options: ["Protects all routes", "Handles authentication checks on routes", "Creates database connections", "Manages file uploads"], explanation: "clerkMiddleware handles authentication checks on specified routes." },
      { question: "How do you customize Clerk component appearance?", options: ["With CSS files", "With the appearance prop", "With inline styles", "Cannot customize"], explanation: "Use the appearance prop with element classes to customize Clerk components." },
    ],
    challenge: { title: "Set Up Route Protection", description: "Implement middleware.js to protect all routes except public ones. Add custom theming to sign-in component." },
    cheatSheet: { title: "Advanced Clerk Cheat Sheet", items: [
      { term: "clerkMiddleware", definition: "Global route protection" },
      { term: "createRouteMatcher()", definition: "Define public routes" },
      { term: "auth.protect()", definition: "Require authentication" },
      { term: "appearance={{}}", definition: "Customize component styles" },
      { term: "Clerk + Supabase", definition: "Auth + Database integration" }
    ]}
  },
  fr: {
    sections: [
      { title: "Fonctionnalités avancées de Clerk", content: [
        { type: "p", text: "Clerk offre plusieurs fonctionnalités avancées qui améliorent la sécurité et l'expérience utilisateur." },
      ]},
      { title: "Protection des routes avec Middleware", content: [
        { type: "code", text: "import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);\n\nexport default clerkMiddleware(async (req, auth) => {\n  if (!isPublicRoute(req)) {\n    await auth.protect();\n  }\n});" },
      ]},
      { title: "Intégration Clerk + Supabase", content: [
        { type: "p", text: "Utilisez Clerk pour l'authentification et Supabase pour la base de données." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Utilisez middleware.js pour protéger les routes globalement." },
        { type: "li", text: "Clerk peut s'intégrer à Supabase." },
        { type: "li", text: "Les composants peuvent être personnalisés." },
      ]}
    ],
    quiz: [
      { question: "Que fait clerkMiddleware ?", options: ["Protège toutes les routes", "Gère les vérifications d'authentification"], explanation: "clerkMiddleware gère les vérifications d'authentification sur les routes spécifiées." },
    ],
    challenge: { title: "Configurer la protection des routes", description: "Implémentez middleware.js pour protéger les routes." },
    cheatSheet: { title: "Clerk Avancé Fiche mémo", items: [
      { term: "clerkMiddleware", definition: "Protection globale des routes" },
      { term: "auth.protect()", definition: "Exiger l'authentification" },
      { term: "appearance={{}}", definition: "Personnaliser les styles" },
    ]}
  },
  de: {
    sections: [
      { title: "Erweiterte Clerk-Funktionen", content: [
        { type: "p", text: "Clerk bietet mehrere erweiterte Funktionen für Sicherheit und Benutzererfahrung." },
      ]},
      { title: "Routenschutz mit Middleware", content: [
        { type: "code", text: "import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);\n\nexport default clerkMiddleware(async (req, auth) => {\n  if (!isPublicRoute(req)) {\n    await auth.protect();\n  }\n});" },
      ]},
      { title: "Clerk + Supabase-Integration", content: [
        { type: "p", text: "Verwenden Sie Clerk für Authentifizierung und Supabase für die Datenbank." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Verwenden Sie middleware.js zum globalen Routenschutz." },
        { type: "li", text: "Clerk kann mit Supabase integriert werden." },
        { type: "li", text: "Komponenten können angepasst werden." },
      ]}
    ],
    quiz: [
      { question: "Was macht clerkMiddleware?", options: ["Schützt alle Routen", "Handhabt Authentifizierungsprüfungen"], explanation: "clerkMiddleware handhabt Authentifizierungsprüfungen auf angegebenen Routen." },
    ],
    challenge: { title: "Routenschutz einrichten", description: "Implementieren Sie middleware.js zum Schutz aller Routen." },
    cheatSheet: { title: "Erweiterte Clerk Spickzettel", items: [
      { term: "clerkMiddleware", definition: "Globaler Routenschutz" },
      { term: "auth.protect()", definition: "Authentifizierung erfordern" },
      { term: "appearance={{}}", definition: "Komponenten anpassen" },
    ]}
  }
};
export default translations;
