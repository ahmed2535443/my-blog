const translations = {
  en: {
    sections: [
      { title: "Introduction to Deployment", content: [
        { type: "p", text: "Deployment is the process of making your application available to users on the internet. This lesson covers deploying to Vercel, configuring environment variables, and setting up CI/CD." },
        { type: "callout", title: "What We Will Learn", text: "Deploying to Vercel, environment variable configuration, Supabase production setup, custom domain configuration, performance optimization, CI/CD with GitHub Actions." }
      ]},
      { title: "Pre-deployment Preparation", content: [
        { type: "p", text: "Before deploying, ensure your project is production-ready: run linting, type checking, and build successfully." },
        { type: "callout", title: "Pre-deployment Checklist", text: "Run npm run lint, npm run type-check, npm run build, verify .gitignore includes sensitive files." }
      ]},
      { title: "Deploying with Vercel", content: [
        { type: "p", text: "Vercel is the easiest way to deploy Next.js apps. Push to GitHub, connect to Vercel, configure environment variables, and deploy." },
        { type: "callout", title: "Vercel Deployment Steps", text: "1. Push to GitHub, 2. Create Vercel account, 3. Import repository, 4. Configure env vars, 5. Deploy." }
      ]},
      { title: "Environment Variables Configuration", content: [
        { type: "p", text: "Environment variables store sensitive data like API keys. They must be configured in Vercel dashboard, never committed to Git." },
        { type: "callout", title: "Key Variables", text: "NEXT_PUBLIC_ prefix for client-side vars, SUPABASE_SERVICE_ROLE_KEY for server-only, CLERK keys for authentication." }
      ]},
      { title: "Supabase Production Setup", content: [
        { type: "p", text: "Configure RLS policies, storage buckets, and database functions for production use." },
        { type: "callout", title: "Production Checklist", text: "Enable RLS on all tables, create storage buckets with policies, add database functions, test all operations." }
      ]},
      { title: "Custom Domain Configuration", content: [
        { type: "p", text: "Connect a custom domain to your Vercel deployment with DNS configuration and SSL." },
        { type: "callout", title: "Domain Setup", text: "Purchase domain, add to Vercel, configure DNS records (A/CNAME), SSL is automatic." }
      ]},
      { title: "Performance Optimization", content: [
        { type: "p", text: "Optimize your production build with image optimization, font loading, caching, and code splitting." },
        { type: "callout", title: "Optimization Tips", text: "Use next/image with priority, optimize fonts with next/font, leverage caching, use dynamic imports." }
      ]},
      { title: "CI/CD with GitHub Actions", content: [
        { type: "p", text: "Set up continuous integration and deployment with GitHub Actions for automated testing and deployment." },
        { type: "callout", title: "CI/CD Benefits", text: "Automated testing on every push, automatic deployment to production, consistent build process." }
      ]}
    ],
    quiz: [
      { question: "What is the purpose of environment variables in production?",
        options: ["Improve performance", "Store sensitive data like API keys separately from code", "Speed up builds", "Reduce bundle size"],
        correctAnswer: 1, explanation: "Environment variables store sensitive configuration data separately from the codebase, keeping secrets secure." },
      { question: "What does vercel.json configure?",
        options: ["React settings", "Vercel deployment settings like headers, redirects, and rewrites", "Database schema", "Package dependencies"],
        correctAnswer: 1, explanation: "vercel.json configures deployment-specific settings including security headers, URL redirects/rewrites, and cron jobs." },
      { question: "How should sensitive environment variables be stored for GitHub Actions?",
        options: ["In README.md", "In GitHub Secrets", "In .env.local", "In package.json"],
        correctAnswer: 1, explanation: "GitHub Secrets encrypt sensitive variables so they can be used in workflows without exposing them." },
      { question: "What does CI/CD stand for?",
        options: ["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment", "Create Install / Create Deploy", "Central Interface / Central Database"],
        correctAnswer: 1, explanation: "CI/CD automates the process of testing, integrating, and deploying code changes consistently." }
    ],
    challenge: { title: "Challenge: Set Up Complete Deployment",
      description: "Create vercel.json with security headers, set up GitHub Actions workflow, create a health check endpoint, configure environment variables in Vercel." },
    cheatSheet: { title: "Deployment Quick Reference", items: [
      { title: "Vercel Commands", content: "vercel, vercel --prod, vercel ls" },
      { title: "vercel.json", content: "headers for security, redirects/rewrites for URLs" },
      { title: "Optimization", content: "next/image, next/font, caching, dynamic imports" },
      { title: "CI/CD", content: "GitHub Actions for automated testing and deployment" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction au deploiement", content: [
        { type: "p", text: "Le deploiement est le processus de mise a disposition de votre application aux utilisateurs sur Internet." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Deploiement sur Vercel, configuration des variables d'environnement, configuration de production Supabase, domaine personnalise, optimisation, CI/CD." }
      ]},
      { title: "Preparation au deploiement", content: [
        { type: "p", text: "Avant de deployer, assurez-vous que votre projet est pret pour la production." },
        { type: "callout", title: "Checklist", text: "Lancez lint, type-check et build, verifiez le .gitignore." }
      ]},
      { title: "Deploiement avec Vercel", content: [
        { type: "p", text: "Vercel est la facon la plus simple de deployer les applications Next.js." },
        { type: "callout", title: "Etapes", text: "1. Push vers GitHub, 2. Creer un compte Vercel, 3. Importer le depot, 4. Configurer les vars, 5. Deployer." }
      ]},
      { title: "Configuration des variables d'environnement", content: [
        { type: "p", text: "Les variables d'environnement stockent les donnees sensibles. Elles doivent etre configurees dans le dashboard Vercel." },
        { type: "callout", title: "Variables cles", text: "Prefixe NEXT_PUBLIC_ pour le client, SUPABASE_SERVICE_ROLE_KEY pour le serveur, cles Clerk pour l'auth." }
      ]},
      { title: "Configuration de production Supabase", content: [
        { type: "p", text: "Configurez les politiques RLS, les buckets de stockage et les fonctions de base de donnees." },
        { type: "callout", title: "Checklist production", text: "Activez RLS, creez les buckets, ajoutez les fonctions, testez toutes les operations." }
      ]},
      { title: "Configuration du domaine personnalise", content: [
        { type: "p", text: "Connectez un domaine personnalise a votre deploiement Vercel avec DNS et SSL." },
        { type: "callout", title: "Etapes du domaine", text: "Achetez le domaine, ajoutez-le a Vercel, configurez DNS, SSL automatique." }
      ]},
      { title: "Optimisation des performances", content: [
        { type: "p", text: "Optimisez votre build de production avec l'optimisation d'images et le cache." },
        { type: "callout", title: "Conseils", text: "Utilisez next/image, optimisez les polices, utilisez le cache et les imports dynamiques." }
      ]},
      { title: "CI/CD avec GitHub Actions", content: [
        { type: "p", text: "Configurez l'integration et le deploiement continus avec GitHub Actions." },
        { type: "callout", title: "Avantages CI/CD", text: "Tests automatiques, deploiement automatique, processus de build coherent." }
      ]}
    ],
    quiz: [
      { question: "Quel est le but des variables d'environnement en production ?",
        options: ["Ameliorer les performances", "Stockent les donnees sensibles separement du code", "Accelerer les builds", "Reduire la taille du bundle"],
        correctAnswer: 1, explanation: "Les variables d'environnement stockent les donnees de configuration sensibles separement du code." },
      { question: "Que configure vercel.json ?",
        options: ["Parametres React", "Parametres de deploiement Vercel incluant headers et redirects", "Schema de base de donnees", "Dependances"],
        correctAnswer: 1, explanation: "vercel.json configure les parametres de deploiement incluant headers de securite et redirects." },
      { question: "Comment stocker les variables sensibles pour GitHub Actions ?",
        options: ["Dans README.md", "Dans GitHub Secrets", "Dans .env.local", "Dans package.json"],
        correctAnswer: 1, explanation: "GitHub Secrets chiffre les variables sensibles pour les utiliser dans les workflows." },
      { question: "Que signifie CI/CD ?",
        options: ["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment", "Create Install / Create Deploy", "Central Interface / Central Database"],
        correctAnswer: 1, explanation: "CI/CD automatise le processus de test, integration et deploiement du code." }
    ],
    challenge: { title: "Defi : Configurer le deploiement complet",
      description: "Creez vercel.json avec les headers de securite, configurez GitHub Actions, creez un endpoint health check." },
    cheatSheet: { title: "Reference rapide de deploiement", items: [
      { title: "Commandes Vercel", content: "vercel, vercel --prod, vercel ls" },
      { title: "vercel.json", content: "headers pour la securite, redirects/rewrites pour les URLs" },
      { title: "Optimisation", content: "next/image, next/font, cache, imports dynamiques" },
      { title: "CI/CD", content: "GitHub Actions pour tests et deploiement auto" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in das Deployment", content: [
        { type: "p", text: "Deployment ist der Prozess, Ihre Anwendung Benutzern im Internet zur Verfugung zu stellen." },
        { type: "callout", title: "Was wir lernen werden", text: "Deployment auf Vercel, Umgebungsvariablen-Konfiguration, Supabase-Produktioneinrichtung, benutzerdefinierte Domain, Leistungsoptimierung, CI/CD." }
      ]},
      { title: "Vorbereitung auf das Deployment", content: [
        { type: "p", text: "Stellen Sie vor dem Deployment sicher, dass Ihr Projekt produktionsbereit ist." },
        { type: "callout", title: "Checkliste", text: "Fuhren Sie lint, type-check und build aus, uberprufen Sie .gitignore." }
      ]},
      { title: "Deployment mit Vercel", content: [
        { type: "p", text: "Vercel ist der einfachste Weg, Next.js-Apps zu deployen." },
        { type: "callout", title: "Schritte", text: "1. Zu GitHub pushen, 2. Vercel-Konto erstellen, 3. Repository importieren, 4. Env-Vars konfigurieren, 5. Deployen." }
      ]},
      { title: "Umgebungsvariablen-Konfiguration", content: [
        { type: "p", text: "Umgebungsvariablen speichern sensible Daten wie API-Schlussel." },
        { type: "callout", title: "Schlusselvariablen", text: "NEXT_PUBLIC_ Prefix fur Client, SUPABASE_SERVICE_ROLE_KEY fur Server, Clerk-Schlussel fur Auth." }
      ]},
      { title: "Supabase Produktioneinrichtung", content: [
        { type: "p", text: "Konfigurieren Sie RLS-Richtlinien, Storage-Buckets und Datenbankfunktionen." },
        { type: "callout", title: "Produktions-Checkliste", text: "RLS aktivieren, Buckets erstellen, Funktionen hinzufugen, alle Operationen testen." }
      ]},
      { title: "Benutzerdefinierte Domain", content: [
        { type: "p", text: "Verbinden Sie eine benutzerdefinierte Domain mit Ihrem Vercel-Deployment." },
        { type: "callout", title: "Domain-Setup", text: "Domain kaufen, zu Vercel hinzufugen, DNS konfigurieren, SSL ist automatisch." }
      ]},
      { title: "Leistungsoptimierung", content: [
        { type: "p", text: "Optimieren Sie Ihren Produktionsbuild mit Bildoptimierung und Caching." },
        { type: "callout", title: "Optimierungstipps", text: "Verwenden Sie next/image, optimieren Sie Schriftarten, nutzen Sie Cache und dynamische Imports." }
      ]},
      { title: "CI/CD mit GitHub Actions", content: [
        { type: "p", text: "Richten Sie Continuous Integration und Deployment mit GitHub Actions ein." },
        { type: "callout", title: "CI/CD-Vorteile", text: "Automatisches Testen, automatisches Deployment, konsistenter Build-Prozess." }
      ]}
    ],
    quiz: [
      { question: "Was ist der Zweck von Umgebungsvariablen in der Produktion?",
        options: ["Leistung verbessern", "Sensible Daten wie API-Schlussel getrennt vom Code speichern", "Builds beschleunigen", "Bundle-Größe reduzieren"],
        correctAnswer: 1, explanation: "Umgebungsvariablen speichern sensible Konfigurationsdaten getrennt vom Codebase." },
      { question: "Was konfiguriert vercel.json?",
        options: ["React-Einstellungen", "Vercel-Deployment-Einstellungen wie Headers und Redirects", "Datenbankschema", "Paketabhangigkeiten"],
        correctAnswer: 1, explanation: "vercel.json konfiguriert deployment-spezifische Einstellungen inklusive Security-Headers und Redirects." },
      { question: "Wie sollten sensible Umgebungsvariablen fur GitHub Actions gespeichert werden?",
        options: ["In README.md", "In GitHub Secrets", "In .env.local", "In package.json"],
        correctAnswer: 1, explanation: "GitHub Secrets verschlosselt sensible Variablen zur Verwendung in Workflows." },
      { question: "Was bedeutet CI/CD?",
        options: ["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment", "Create Install / Create Deploy", "Central Interface / Central Database"],
        correctAnswer: 1, explanation: "CI/CD automatisiert den Prozess des Testens, Integrierens und Deployens von Codeänderungen." }
    ],
    challenge: { title: "Herausforderung: Vollständiges Deployment einrichten",
      description: "Erstellen Sie vercel.json mit Security-Headers, richten Sie GitHub Actions ein, erstellen Sie einen Health-Check-Endpunkt." },
    cheatSheet: { title: "Deployment-Schnellreferenz", items: [
      { title: "Vercel-Befehle", content: "vercel, vercel --prod, vercel ls" },
      { title: "vercel.json", content: "headers fur Sicherheit, redirects/rewrites fur URLs" },
      { title: "Optimierung", content: "next/image, next/font, Cache, dynamische Imports" },
      { title: "CI/CD", content: "GitHub Actions fur automatisches Testen und Deployment" }
    ]}
  }
};
export default translations;
