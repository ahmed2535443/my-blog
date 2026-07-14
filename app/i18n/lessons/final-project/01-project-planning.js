const translations = {
  en: {
    sections: [
      {
        title: "Project Overview",
        content: [
          { type: "p", text: "In this final stage of the curriculum, we will build a real project that combines everything we have learned. The project is a complete <strong>professional blog</strong> that allows users to create and manage articles." },
          { type: "p", text: "Why a blog? Because it is an ideal project for learning web development as it includes:" },
          { type: "li", text: "<strong>Full CRUD:</strong> Create, read, update, and delete articles" },
          { type: "li", text: "<strong>Authentication system:</strong> Login and user accounts" },
          { type: "li", text: "<strong>Real database:</strong> Data storage and relationships" },
          { type: "li", text: "<strong>Responsive design:</strong> Works on all devices" },
          { type: "li", text: "<strong>Search and filtering:</strong> Find articles quickly" },
          { type: "callout", title: "Core Blog Features", text: "Homepage displaying all published articles, article detail page, login and registration system, user dashboard for managing articles, creating, editing and deleting articles, category system for organizing articles, article search, responsive design with dark mode." }
        ]
      },
      {
        title: "Requirements Analysis",
        content: [
          { type: "p", text: "Before writing any code, we need to understand exactly what we need. Requirements analysis is the most important step in any project because it prevents us from adding unnecessary features or forgetting important ones." },
          { type: "p", text: "<strong>Functional Requirements:</strong> These are the features the application must perform:" },
          { type: "li", text: "<strong>Display articles:</strong> Homepage shows all published articles (High priority)" },
          { type: "li", text: "<strong>Article details:</strong> Dedicated page for each article with full content (High priority)" },
          { type: "li", text: "<strong>Authentication:</strong> Login and registration for users (High priority)" },
          { type: "li", text: "<strong>Article management:</strong> Create, edit, and delete articles from dashboard (High priority)" },
          { type: "li", text: "<strong>Categories:</strong> Classify articles into different categories (Medium priority)" },
          { type: "li", text: "<strong>Search:</strong> Search in article titles and content (Medium priority)" },
          { type: "li", text: "<strong>Comments:</strong> Add comments on articles (Low priority)" },
          { type: "p", text: "<strong>Non-Functional Requirements:</strong> These relate to how the application works, not what it does:" },
          { type: "li", text: "Performance: Homepage must load in less than 3 seconds" },
          { type: "li", text: "Security: Protect user data with RLS" },
          { type: "li", text: "Responsiveness: Works well on phone and desktop" },
          { type: "li", text: "Maintainability: Clean, organized code that is easy to develop" },
          { type: "li", text: "User experience: Easy and clear interface" }
        ]
      },
      {
        title: "Tech Stack",
        content: [
          { type: "p", text: "We chose a set of well-integrated technologies to build the blog project. Each tool solves a specific problem:" },
          { type: "li", text: "<strong>Next.js 16 - React framework:</strong> Provides file-based routing, server configurations, server-side data fetching, and automatic SEO optimization." },
          { type: "li", text: "<strong>Supabase - Backend as a Service:</strong> Used for PostgreSQL database, file storage, and real-time features. Provides an easy API for database operations." },
          { type: "li", text: "<strong>Clerk - User Authentication:</strong> Manages user accounts and login. Provides ready-made components and multiple authentication options." },
          { type: "li", text: "<strong>Tailwind CSS - CSS framework:</strong> Used for rapid UI design with utility classes instead of custom CSS." },
          { type: "callout", title: "Why this combination?", text: "Next.js handles routing and rendering, Supabase handles data and storage, Clerk handles authentication, and Tailwind handles styling. Together they provide a complete full-stack solution." }
        ]
      },
      {
        title: "Project Structure",
        content: [
          { type: "p", text: "Before we start coding, we need to plan the file structure. A good structure makes code easier to understand and maintain." },
          { type: "p", text: "This structure follows Next.js best practices:" },
          { type: "li", text: "<strong>app/:</strong> Contains all pages and routes (File-based routing)" },
          { type: "li", text: "<strong>components/:</strong> Contains reusable components" },
          { type: "li", text: "<strong>lib/:</strong> Contains configurations and helper functions" },
          { type: "li", text: "<strong>middleware.js:</strong> Protects protected routes (like Dashboard)" },
          { type: "callout", title: "Tip: Why this structure?", text: "This structure makes code easier to understand because each folder has a specific purpose. When you want to modify something specific, you know exactly where to go. This is the secret of good maintainability." }
        ]
      },
      {
        title: "Planning Summary",
        content: [
          { type: "p", text: "Now we have a clear understanding of what we need to build the blog project. Let's summarize what we learned:" },
          { type: "li", text: "The project is a professional blog using Next.js + Supabase + Clerk + Tailwind" },
          { type: "li", text: "We need to analyze requirements before starting to code" },
          { type: "li", text: "Good file structure simplifies maintenance and development" },
          { type: "li", text: "We start with core requirements then gradually add additional features" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the main reason for using Supabase in the blog project?",
        options: [
          "Because it is free only",
          "Because it provides a PostgreSQL database with RLS for security",
          "Because it is faster than Firebase",
          "Because it does not need internet"
        ],
        correctAnswer: 1,
        explanation: "Supabase provides a real PostgreSQL database with Row Level Security (RLS) that protects data at the row level. This makes it ideal for projects that need strong security."
      }
    ],
    challenge: {
      title: "Planning Challenge: Plan Your Own Project",
      description: "Before we move to the next lesson, plan your own project. Choose an idea and define: 1. What is the idea? (e.g., e-commerce store, task app, forum) 2. What core features do you need? 3. What is the appropriate tech stack? 4. What is the proposed file structure? Write your answers on paper or in a text file. This will help you develop planning skills."
    },
    cheatSheet: {
      title: "Quick Planning Reference",
      items: [
        { title: "1. Define the Idea", content: "Write a brief description of your project" },
        { title: "2. Analyze Requirements", content: "Define core and additional features" },
        { title: "3. Choose Technologies", content: "Choose the right tools for your project" },
        { title: "4. Plan the Structure", content: "Define the file and folder structure" }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Vue d'ensemble du projet",
        content: [
          { type: "p", text: "Dans cette dernière étape du programme, nous allons construire un vrai projet qui combine tout ce que nous avons appris. Le projet est un <strong>blog professionnel complet</strong> qui permet aux utilisateurs de créer et gérer des articles." },
          { type: "p", text: "Pourquoi un blog ? Parce que c'est un projet idéal pour apprendre le développement web car il inclut :" },
          { type: "li", text: "<strong>CRUD complet :</strong> Créer, lire, modifier et supprimer des articles" },
          { type: "li", text: "<strong>Système d'authentification :</strong> Connexion et comptes utilisateurs" },
          { type: "li", text: "<strong>Base de données réelle :</strong> Stockage des données et relations" },
          { type: "li", text: "<strong>Design responsive :</strong> Fonctionne sur tous les appareils" },
          { type: "li", text: "<strong>Recherche et filtrage :</strong> Trouver des articles rapidement" },
          { type: "callout", title: "Fonctionnalités principales du blog", text: "Page d'accueil affichant tous les articles publiés, page de détails de l'article, système de connexion et d'inscription, tableau de bord utilisateur pour gérer les articles, création, modification et suppression des articles, système de catégories pour organiser les articles, recherche d'articles, design responsive avec mode sombre." }
        ]
      },
      {
        title: "Analyse des besoins",
        content: [
          { type: "p", text: "Avant d'écrire le moindre code, nous devons comprendre exactement ce dont nous avons besoin. L'analyse des besoins est l'étape la plus importante dans tout projet car elle nous empêche d'ajouter des fonctionnalités inutiles ou d'en oublier d'importantes." },
          { type: "p", text: "<strong>Exigences fonctionnelles :</strong> Ce sont les fonctionnalités que l'application doit remplir :" },
          { type: "li", text: "<strong>Afficher les articles :</strong> La page d'accueil affiche tous les articles publiés (Priorité haute)" },
          { type: "li", text: "<strong>Détails de l'article :</strong> Page dédiée pour chaque article avec le contenu complet (Priorité haute)" },
          { type: "li", text: "<strong>Authentification :</strong> Connexion et inscription pour les utilisateurs (Priorité haute)" },
          { type: "li", text: "<strong>Gestion des articles :</strong> Créer, modifier et supprimer des articles depuis le tableau de bord (Priorité haute)" },
          { type: "li", text: "<strong>-catégories :</strong> Classer les articles dans différentes catégories (Priorité moyenne)" },
          { type: "li", text: "<strong>Recherche :</strong> Rechercher dans les titres et contenus des articles (Priorité moyenne)" },
          { type: "li", text: "<strong>Commentaires :</strong> Ajouter des commentaires sur les articles (Priorité basse)" },
          { type: "p", text: "<strong>Exigences non fonctionnelles :</strong> Elles concernent le fonctionnement de l'application, pas ce qu'elle fait :" },
          { type: "li", text: "Performance : La page d'accueil doit se charger en moins de 3 secondes" },
          { type: "li", text: "Sécurité : Protéger les données utilisateur avec RLS" },
          { type: "li", text: "Réactivité : Fonctionne bien sur mobile et bureau" },
          { type: "li", text: "Maintenabilité : Code propre et organisé facile à développer" },
          { type: "li", text: "Expérience utilisateur : Interface facile et claire" }
        ]
      },
      {
        title: "Stack technique",
        content: [
          { type: "p", text: "Nous avons choisi un ensemble de technologies bien intégrées pour construire le projet blog. Chaque outil résout un problème spécifique :" },
          { type: "li", text: "<strong>Next.js 16 - Framework React :</strong> Fournit le routage basé sur les fichiers, les configurations serveur, la récupération de données côté serveur et l'optimisation SEO automatique." },
          { type: "li", text: "<strong>Supabase - Backend en tant que Service :</strong> Utilisé pour la base de données PostgreSQL, le stockage de fichiers et les fonctionnalités en temps réel. Fournit une API facile pour les opérations de base de données." },
          { type: "li", text: "<strong>Clerk - Authentification utilisateur :</strong> Gère les comptes utilisateurs et la connexion. Fournit des composants prêts à l'emploi et plusieurs options d'authentification." },
          { type: "li", text: "<strong>Tailwind CSS - Framework CSS :</strong> Utilisé pour un design UI rapide avec des classes utilitaires au lieu de CSS personnalisé." },
          { type: "callout", title: "Pourquoi cette combinaison ?", text: "Next.js gère le routage et le rendu, Supabase gère les données et le stockage, Clerk gère l'authentification et Tailwind gère le style. Ensemble, ils fournissent une solution full-stack complète." }
        ]
      },
      {
        title: "Structure du projet",
        content: [
          { type: "p", text: "Avant de commencer à coder, nous devons planifier la structure des fichiers. Une bonne structure rend le code plus facile à comprendre et à maintenir." },
          { type: "p", text: "Cette structure suit les meilleures pratiques de Next.js :" },
          { type: "li", text: "<strong>app/ :</strong> Contient toutes les pages et routes (Routage basé sur les fichiers)" },
          { type: "li", text: "<strong>components/ :</strong> Contient les composants réutilisables" },
          { type: "li", text: "<strong>lib/ :</strong> Contient les configurations et fonctions utilitaires" },
          { type: "li", text: "<strong>middleware.js :</strong> Protège les routes protégées (comme le Dashboard)" },
          { type: "callout", title: "Conseil : Pourquoi cette structure ?", text: "Cette structure rend le code plus facile à comprendre car chaque dossier a un objectif spécifique. Quand vous voulez modifier quelque chose de précis, vous savez exactement où aller. C'est le secret d'une bonne maintenabilité." }
        ]
      },
      {
        title: "Résumé de la planification",
        content: [
          { type: "p", text: "Maintenant nous avons une compréhension claire de ce dont nous avons besoin pour construire le projet blog. Résumons ce que nous avons appris :" },
          { type: "li", text: "Le projet est un blog professionnel utilisant Next.js + Supabase + Clerk + Tailwind" },
          { type: "li", text: "Nous devons analyser les besoins avant de commencer à coder" },
          { type: "li", text: "Une bonne structure de fichiers simplifie la maintenance et le développement" },
          { type: "li", text: "Nous commençons par les exigences de base puis ajoutons progressivement les fonctionnalités supplémentaires" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quelle est la raison principale de l'utilisation de Supabase dans le projet blog ?",
        options: [
          "Parce qu'il est gratuit uniquement",
          "Parce qu'il fournit une base de données PostgreSQL avec RLS pour la sécurité",
          "Parce qu'il est plus rapide que Firebase",
          "Parce qu'il n'a pas besoin d'internet"
        ],
        correctAnswer: 1,
        explanation: "Supabase fournit une vraie base de données PostgreSQL avec Row Level Security (RLS) qui protège les données au niveau des lignes. Cela le rend idéal pour les projets nécessitant une sécurité forte."
      }
    ],
    challenge: {
      title: "Défi de planification : Planifiez votre propre projet",
      description: "Avant de passer à la leçon suivante, planifiez votre propre projet. Choisissez une idée et définissez : 1. Quelle est l'idée ? (par ex. : boutique en ligne, application de tâches, forum) 2. Quelles sont les fonctionnalités de base dont vous avez besoin ? 3. Quelle est la pile technique appropriée ? 4. Quelle est la structure de fichiers proposée ? Écrivez vos réponses sur papier ou dans un fichier texte. Cela vous aidera à développer vos compétences en planification."
    },
    cheatSheet: {
      title: "Référence rapide de planification",
      items: [
        { title: "1. Définir l'idée", content: "Écrivez une brève description de votre projet" },
        { title: "2. Analyser les besoins", content: "Définissez les fonctionnalités de base et supplémentaires" },
        { title: "3. Choisir les technologies", content: "Choisissez les bons outils pour votre projet" },
        { title: "4. Planifier la structure", content: "Définissez la structure des fichiers et dossiers" }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Projektübersicht",
        content: [
          { type: "p", text: "In dieser letzten Stufe des Lehrplans werden wir ein echtes Projekt erstellen, das alles zusammenfasst, was wir gelernt haben. Das Projekt ist ein vollständiger <strong>professioneller Blog</strong>, der es Benutzern ermöglicht, Artikel zu erstellen und zu verwalten." },
          { type: "p", text: "Warum ein Blog? Weil er ein ideales Projekt zum Erlernen der Webentwicklung ist, da er Folgendes umfasst:" },
          { type: "li", text: "<strong>Vollständiges CRUD:</strong> Erstellen, lesen, aktualisieren und löschen von Artikeln" },
          { type: "li", text: "<strong>Authentifizierungssystem:</strong> Anmeldung und Benutzerkonten" },
          { type: "li", text: "<strong>Echte Datenbank:</strong> Datenspeicherung und Beziehungen" },
          { type: "li", text: "<strong>Responsives Design:</strong> Funktioniert auf allen Geräten" },
          { type: "li", text: "<strong>Suche und Filterung:</strong> Artikel schnell finden" },
          { type: "callout", title: "Kernfunktionen des Blogs", text: "Startseite mit allen veröffentlichten Artikeln, Artikeldetailseite, Anmelde- und Registrierungssystem, Benutzer-Dashboard zur Artikelverwaltung, Erstellen, Bearbeiten und Löschen von Artikeln, Kategorisystem zur Artikelaorganisation, Artikelsuche, responsives Design mit Dunkelmodus." }
        ]
      },
      {
        title: "Anforderungsanalyse",
        content: [
          { type: "p", text: "Bevor wir Code schreiben, müssen wir genau verstehen, was wir brauchen. Die Anforderungsanalyse ist der wichtigste Schritt in jedem Projekt, da sie uns daran hindert, unnötige Funktionen hinzuzufügen oder wichtige zu vergessen." },
          { type: "p", text: "<strong>Funktionale Anforderungen:</strong> Das sind die Funktionen, die die Anwendung ausführen muss:" },
          { type: "li", text: "<strong>Artikel anzeigen:</strong> Startseite zeigt alle veröffentlichten Artikel (Hohe Priorität)" },
          { type: "li", text: "<strong>Artikeldetails:</strong> Eigene Seite für jeden Artikel mit vollständigem Inhalt (Hohe Priorität)" },
          { type: "li", text: "<strong>Authentifizierung:</strong> Anmeldung und Registrierung für Benutzer (Hohe Priorität)" },
          { type: "li", text: "<strong>Artikelverwaltung:</strong> Erstellen, bearbeiten und löschen von Artikeln über das Dashboard (Hohe Priorität)" },
          { type: "li", text: "<strong>Kategorien:</strong> Artikel in verschiedene Kategorien einordnen (Mittlere Priorität)" },
          { type: "li", text: "<strong>Suche:</strong> In Artikeltiteln und Inhalten suchen (Mittlere Priorität)" },
          { type: "li", text: "<strong>Kommentare:</strong> Kommentare zu Artikeln hinzufügen (Niedrige Priorität)" },
          { type: "p", text: "<strong>Nicht-funktionale Anforderungen:</strong> Sie beziehen sich darauf, wie die Anwendung funktioniert, nicht was sie tut:" },
          { type: "li", text: "Leistung: Die Startseite muss in weniger als 3 Sekunden geladen werden" },
          { type: "li", text: "Sicherheit: Benutzerdaten mit RLS schützen" },
          { type: "li", text: "Responsivität: Funktioniert gut auf Handy und Desktop" },
          { type: "li", text: "Wartbarkeit: Sauberer, organisierter Code, der leicht zu entwickeln ist" },
          { type: "li", text: "Benutzererfahrung: Einfache und klare Oberfläche" }
        ]
      },
      {
        title: "Tech-Stack",
        content: [
          { type: "p", text: "Wir haben eine Reihe von gut integrierten Technologien ausgewählt, um das Blog-Projekt zu erstellen. Jedes Tool löst ein spezifisches Problem:" },
          { type: "li", text: "<strong>Next.js 16 - React-Framework:</strong> Bietet dateibasiertes Routing, Serverkonfigurationen, serverseitiges Data Fetching und automatische SEO-Optimierung." },
          { type: "li", text: "<strong>Supabase - Backend as a Service:</strong> Wird für die PostgreSQL-Datenbank, Dateispeicherung und Echtzeit-Funktionen verwendet. Bietet eine einfache API für Datenbankoperationen." },
          { type: "li", text: "<strong>Clerk - Benutzerauthentifizierung:</strong> Verwaltet Benutzerkonten und Anmeldung. Bietet fertige Komponenten und mehrere Authentifizierungsoptionen." },
          { type: "li", text: "<strong>Tailwind CSS - CSS-Framework:</strong> Wird für schnelles UI-Design mit Utility-Klassen statt benutzerdefiniertem CSS verwendet." },
          { type: "callout", title: "Warum diese Kombination?", text: "Next.js übernimmt Routing und Rendering, Supabase übernimmt Daten und Speicherung, Clerk übernimmt Authentifizierung und Tailwind übernimmt Styling. Zusammen bieten sie eine vollständige Full-Stack-Lösung." }
        ]
      },
      {
        title: "Projektstruktur",
        content: [
          { type: "p", text: "Bevor wir mit dem Programmieren beginnen, müssen wir die Dateistruktur planen. Eine gute Struktur macht Code leichter verständlich und wartbar." },
          { type: "p", text: "Diese Struktur folgt den Best Practices von Next.js:" },
          { type: "li", text: "<strong>app/:</strong> Enthält alle Seiten und Routen (Dateibasiertes Routing)" },
          { type: "li", text: "<strong>components/:</strong> Enthält wiederverwendbare Komponenten" },
          { type: "li", text: "<strong>lib/:</strong> Enthält Konfigurationen und Hilfsfunktionen" },
          { type: "li", text: "<strong>middleware.js:</strong> Schützt geschützte Routen (wie Dashboard)" },
          { type: "callout", title: "Tipp: Warum diese Struktur?", text: "Diese Struktur macht Code leichter verständlich, da jeder Ordner einen spezifischen Zweck hat. Wenn Sie etwas Bestimmtes ändern wollen, wissen Sie genau, wo Sie hingehen müssen. Das ist das Geheimnis einer guten Wartbarkeit." }
        ]
      },
      {
        title: "Planungszusammenfassung",
        content: [
          { type: "p", text: "Jetzt haben wir ein klares Verständnis dafür, was wir brauchen, um das Blog-Projekt zu erstellen. Fassen wir zusammen, was wir gelernt haben:" },
          { type: "li", text: "Das Projekt ist ein professioneller Blog mit Next.js + Supabase + Clerk + Tailwind" },
          { type: "li", text: "Wir müssen die Anforderungen analysieren, bevor wir mit dem Programmieren beginnen" },
          { type: "li", text: "Eine gute Dateistruktur vereinfacht Wartung und Entwicklung" },
          { type: "li", text: "Wir beginnen mit den Kernanforderungen und fügen dann schrittweise zusätzliche Funktionen hinzu" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist der Hauptgrund für die Verwendung von Supabase im Blog-Projekt?",
        options: [
          "Weil es nur kostenlos ist",
          "Weil es eine PostgreSQL-Datenbank mit RLS für Sicherheit bietet",
          "Weil es schneller ist als Firebase",
          "Weil es kein Internet benötigt"
        ],
        correctAnswer: 1,
        explanation: "Supabase bietet eine echte PostgreSQL-Datenbank mit Row Level Security (RLS), die Daten auf Zeilenebene schützt. Das macht es ideal für Projekte, die starke Sicherheit benötigen."
      }
    ],
    challenge: {
      title: "Planungsherausforderung: Planen Sie Ihr eigenes Projekt",
      description: "Bevor wir zur nächsten Lektion übergehen, planen Sie Ihr eigenes Projekt. Wählen Sie eine Idee und definieren Sie: 1. Was ist die Idee? (z.B.: Online-Shop, Aufgaben-App, Forum) 2. Welche Kernfunktionen benötigen Sie? 3. Welcher Tech-Stack ist geeignet? 4. Welche ist die vorgeschlagene Dateistruktur? Schreiben Sie Ihre Antworten auf Papier oder in eine Textdatei. Dies hilft Ihnen, Ihre Planungsfähigkeiten zu entwickeln."
    },
    cheatSheet: {
      title: "Schnelle Planungsreferenz",
      items: [
        { title: "1. Idee definieren", content: "Schreiben Sie eine kurze Beschreibung Ihres Projekts" },
        { title: "2. Anforderungen analysieren", content: "Definieren Sie Kern- und Zusatzfunktionen" },
        { title: "3. Technologien wählen", content: "Wählen Sie die richtigen Tools für Ihr Projekt" },
        { title: "4. Struktur planen", content: "Definieren Sie die Datei- und Ordnerstruktur" }
      ]
    }
  }
};
export default translations;
