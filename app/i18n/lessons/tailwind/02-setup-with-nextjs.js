const translations = {
  en: {
    sections: [
      {
        title: "What is Tailwind v4 Setup?",
        content: [
          { type: "p", text: "In this lesson, we will learn how to set up <strong>Tailwind CSS v4</strong> with a <strong>Next.js</strong> project. The setup in v4 has become much easier and simpler compared to previous versions." },
          { type: "callout", title: "What changed in Tailwind v4?", text: "No more tailwind.config.js file — setup is now via CSS directly. Uses the @theme directive for customization. Significantly faster build speed with smaller output. Automatic file scanning without specifying paths." },
        ]
      },
      {
        title: "Installation with Next.js",
        content: [
          { type: "li", text: "<strong>Step 1:</strong> Create a new Next.js project using create-next-app" },
          { type: "li", text: "<strong>Step 2:</strong> Install the required packages: tailwindcss and @tailwindcss/postcss" },
          { type: "li", text: "<strong>Step 3:</strong> Set up PostCSS by creating postcss.config.mjs" },
          { type: "li", text: "<strong>Step 4:</strong> Set up the CSS file with @import \"tailwindcss\"" },
          { type: "li", text: "<strong>Step 5:</strong> Run the project with npm run dev" },
        ]
      },
      {
        title: "File Explanation",
        content: [
          { type: "p", text: "The postcss.config.mjs file tells Next.js how to process CSS files. The globals.css file is the entry point for Tailwind CSS. The @import \"tailwindcss\" line imports all base styles, scans project files, and generates CSS for discovered classes." },
          { type: "callout", title: "Don't use old v3 directives!", text: "In Tailwind v4, do NOT use @tailwind base, @tailwind components, or @tailwind utilities. Replace them all with a single line: @import \"tailwindcss\"." },
        ]
      },
      {
        title: "VS Code Setup",
        content: [
          { type: "li", text: "<strong>Tailwind CSS IntelliSense</strong> — Provides auto-complete, hover preview, and error highlighting." },
          { type: "li", text: "<strong>Tailwind CSS Snippets</strong> — Provides quick shortcuts for writing common Tailwind classes." },
          { type: "li", text: "<strong>Prettier + Tailwind Plugin</strong> — Automatically sorts Tailwind classes in the recommended order." },
        ]
      },
      {
        title: "First Component",
        content: [
          { type: "p", text: "Let's create our first component using Tailwind CSS and see how it works in practice. Create a SimpleCard component and add it to your home page." },
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Mistake 1: Forgetting the PostCSS file</strong> — Without postcss.config.mjs, Tailwind won't work at all." },
          { type: "li", text: "<strong>Mistake 2: Using old v3 directives</strong> — Using @tailwind base instead of @import \"tailwindcss\"." },
          { type: "li", text: "<strong>Mistake 3: Manually specifying scan paths</strong> — In v4 this is done automatically." },
          { type: "li", text: "<strong>Mistake 4: Mixing imports in globals.css</strong> — Add @import \"tailwindcss\" as the first line." },
          { type: "li", text: "<strong>Mistake 5: Using style instead of className</strong> — Tailwind classes go in className, not style." },
        ]
      }
    ],
    quiz: [
      {
        question: "Which file must be added to the project root to set up PostCSS with Tailwind v4?",
        options: ["tailwind.config.js", "postcss.config.mjs", "next.config.js", "css.config.json"],
        explanation: "The postcss.config.mjs file is responsible for connecting Tailwind CSS to PostCSS."
      },
      {
        question: "In Tailwind v4, what do we use in globals.css instead of @tailwind base/components/utilities?",
        options: ["@include tailwindcss", "@import \"tailwindcss\"", "@use tailwindcss", "@load tailwindcss"],
        explanation: "In v4, we use @import \"tailwindcss\" instead of the old @tailwind directives."
      },
      {
        question: "Do we need to specify file scan paths in v4?",
        options: ["Yes, must specify paths in content array", "No, Tailwind v4 scans files automatically", "Only in production mode", "Only if the project is large"],
        explanation: "Tailwind v4 scans all project files automatically — no need to specify paths anywhere."
      },
      {
        question: "What is the expected final CSS size for an average Tailwind project in production?",
        options: ["50-100KB", "100-200KB", "10-15KB", "5-8KB"],
        explanation: "Thanks to JIT Mode, the final CSS contains only used classes. An average project produces ~10-15KB of CSS."
      }
    ],
    challenge: {
      title: "Challenge: Create a New Next.js Project with Tailwind v4",
      description: "Follow these steps: Create a new Next.js project, install Tailwind CSS v4 and @tailwindcss/postcss, create postcss.config.mjs, modify globals.css, create a UserCard component with dark mode support, and verify the design renders correctly."
    },
    cheatSheet: {
      title: "Complete Setup Guide — Tailwind v4 with Next.js",
      items: [
        { term: "npm install tailwindcss @tailwindcss/postcss", definition: "Install required packages" },
        { term: "postcss.config.mjs", definition: "PostCSS config with @tailwindcss/postcss plugin" },
        { term: "@import \"tailwindcss\"", definition: "Entry point in globals.css" },
        { term: "Tailwind CSS IntelliSense", definition: "VS Code extension for auto-complete" },
        { term: "npm run dev", definition: "Start development server" },
        { term: "File scanning", definition: "Automatic in v4 — no paths needed" }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que la configuration de Tailwind v4 ?",
        content: [
          { type: "p", text: "Dans cette leçon, nous apprendrons comment configurer <strong>Tailwind CSS v4</strong> avec un projet <strong>Next.js</strong>. La configuration en v4 est devenue beaucoup plus facile et simple par rapport aux versions précédentes." },
          { type: "callout", title: "Qu'est-ce qui a changé dans Tailwind v4 ?", text: "Plus de fichier tailwind.config.js — la configuration se fait maintenant directement via CSS. Utilise la directive @theme pour la personnalisation. Vitesse de build nettement plus rapide avec une sortie plus petite. Scan automatique des fichiers sans spécifier de chemins." },
        ]
      },
      {
        title: "Installation avec Next.js",
        content: [
          { type: "li", text: "<strong>Étape 1 :</strong> Créer un nouveau projet Next.js avec create-next-app" },
          { type: "li", text: "<strong>Étape 2 :</strong> Installer les packages requis : tailwindcss et @tailwindcss/postcss" },
          { type: "li", text: "<strong>Étape 3 :</strong> Configurer PostCSS en créant postcss.config.mjs" },
          { type: "li", text: "<strong>Étape 4 :</strong> Configurer le fichier CSS avec @import \"tailwindcss\"" },
          { type: "li", text: "<strong>Étape 5 :</strong> Lancer le projet avec npm run dev" },
        ]
      },
      {
        title: "Explication des fichiers",
        content: [
          { type: "p", text: "Le fichier postcss.config.mjs indique à Next.js comment traiter les fichiers CSS. Le fichier globals.css est le point d'entrée pour Tailwind CSS. La ligne @import \"tailwindcss\" importe tous les styles de base, scanne les fichiers du projet et génère le CSS pour les classes découvertes." },
          { type: "callout", title: "N'utilisez pas les anciennes directives v3 !", text: "En Tailwind v4, n'utilisez PAS @tailwind base, @tailwind components ou @tailwind utilities. Remplacez-les toutes par une seule ligne : @import \"tailwindcss\"." },
        ]
      },
      {
        title: "Configuration VS Code",
        content: [
          { type: "li", text: "<strong>Tailwind CSS IntelliSense</strong> — Fournit l'auto-complétion, l'aperçu au survol et la mise en évidence des erreurs." },
          { type: "li", text: "<strong>Tailwind CSS Snippets</strong> — Fournit des raccourcis rapides pour écrire les classes Tailwind courantes." },
          { type: "li", text: "<strong>Prettier + Tailwind Plugin</strong> — Trie automatiquement les classes Tailwind dans l'ordre recommandé." },
        ]
      },
      {
        title: "Premier composant",
        content: [
          { type: "p", text: "Créons notre premier composant avec Tailwind CSS et voyons comment il fonctionne en pratique. Créez un composant SimpleCard et ajoutez-le à votre page d'accueil." },
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Erreur 1 : Oublier le fichier PostCSS</strong> — Sans postcss.config.mjs, Tailwind ne fonctionnera pas du tout." },
          { type: "li", text: "<strong>Erreur 2 : Utiliser les anciennes directives v3</strong> — Utiliser @tailwind base au lieu de @import \"tailwindcss\"." },
          { type: "li", text: "<strong>Erreur 3 : Spécifier manuellement les chemins de scan</strong> — En v4, c'est fait automatiquement." },
          { type: "li", text: "<strong>Erreur 4 : Mélanger les imports dans globals.css</strong> — Ajoutez @import \"tailwindcss\" comme première ligne." },
          { type: "li", text: "<strong>Erreur 5 : Utiliser style au lieu de className</strong> — Les classes Tailwind vont dans className, pas dans style." },
        ]
      }
    ],
    quiz: [
      {
        question: "Quel fichier doit être ajouté à la racine du projet pour configurer PostCSS avec Tailwind v4 ?",
        options: ["tailwind.config.js", "postcss.config.mjs", "next.config.js", "css.config.json"],
        explanation: "Le fichier postcss.config.mjs est responsable de la connexion de Tailwind CSS à PostCSS."
      },
      {
        question: "En Tailwind v4, que'utilisons-nous dans globals.css au lieu de @tailwind base/components/utilities ?",
        options: ["@include tailwindcss", "@import \"tailwindcss\"", "@use tailwindcss", "@load tailwindcss"],
        explanation: "En v4, nous utilisons @import \"tailwindcss\" au lieu des anciennes directives @tailwind."
      },
      {
        question: "Devons-nous spécifier les chemins de scan des fichiers en v4 ?",
        options: ["Oui, il faut spécifier les chemins dans le tableau content", "Non, Tailwind v4 scanne les fichiers automatiquement", "Seulement en mode production", "Seulement si le projet est volumineux"],
        explanation: "Tailwind v4 scanne automatiquement tous les fichiers du projet — pas besoin de spécifier de chemins."
      },
      {
        question: "Quelle est la taille CSS finale attendue pour un projet Tailwind moyen en production ?",
        options: ["50-100KB", "100-200KB", "10-15KB", "5-8KB"],
        explanation: "Grâce au JIT Mode, le CSS final ne contient que les classes utilisées. Un projet moyen produit ~10-15KB de CSS."
      }
    ],
    challenge: {
      title: "Défi : Créer un nouveau projet Next.js avec Tailwind v4",
      description: "Suivez ces étapes : Créez un nouveau projet Next.js, installez Tailwind CSS v4 et @tailwindcss/postcss, créez postcss.config.mjs, modifiez globals.css, créez un composant UserCard avec support du mode sombre, et vérifiez que le design s'affiche correctement."
    },
    cheatSheet: {
      title: "Guide complet de configuration — Tailwind v4 avec Next.js",
      items: [
        { term: "npm install tailwindcss @tailwindcss/postcss", definition: "Installer les packages requis" },
        { term: "postcss.config.mjs", definition: "Config PostCSS avec le plugin @tailwindcss/postcss" },
        { term: "@import \"tailwindcss\"", definition: "Point d'entrée dans globals.css" },
        { term: "Tailwind CSS IntelliSense", definition: "Extension VS Code pour l'auto-complétion" },
        { term: "npm run dev", definition: "Démarrer le serveur de développement" },
        { term: "Scan des fichiers", definition: "Automatique en v4 — aucun chemin nécessaire" }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was ist das Tailwind v4-Setup?",
        content: [
          { type: "p", text: "In dieser Lektion lernen wir, wie man <strong>Tailwind CSS v4</strong> mit einem <strong>Next.js</strong>-Projekt einrichtet. Das Setup in v4 ist im Vergleich zu früheren Versionen viel einfacher und unkomplizierter geworden." },
          { type: "callout", title: "Was hat sich in Tailwind v4 geändert?", text: "Keine tailwind.config.js-Datei mehr — das Setup erfolgt jetzt direkt über CSS. Verwendet die @theme-Direktive für Anpassungen. Deutlich schnellere Build-Geschwindigkeit mit kleinerer Ausgabe. Automatische Dateiscannung ohne Pfadangaben." },
        ]
      },
      {
        title: "Installation mit Next.js",
        content: [
          { type: "li", text: "<strong>Schritt 1:</strong> Ein neues Next.js-Projekt mit create-next-app erstellen" },
          { type: "li", text: "<strong>Schritt 2:</strong> Die erforderlichen Pakete installieren: tailwindcss und @tailwindcss/postcss" },
          { type: "li", text: "<strong>Schritt 3:</strong> PostCSS einrichten durch Erstellen von postcss.config.mjs" },
          { type: "li", text: "<strong>Schritt 4:</strong> Die CSS-Datei mit @import \"tailwindcss\" einrichten" },
          { type: "li", text: "<strong>Schritt 5:</strong> Das Projekt mit npm run dev starten" },
        ]
      },
      {
        title: "Dateierklärung",
        content: [
          { type: "p", text: "Die Datei postcss.config.mjs teilt Next.js mit, wie CSS-Dateien verarbeitet werden sollen. Die Datei globals.css ist der Einstiegspunkt für Tailwind CSS. Die Zeile @import \"tailwindcss\" importiert alle Basisstile, scannt Projektdateien und generiert CSS für entdeckte Klassen." },
          { type: "callout", title: "Verwenden Sie keine alten v3-Direktiven!", text: "Verwenden Sie in Tailwind v4 KEINE @tailwind base, @tailwind components oder @tailwind utilities. Ersetzen Sie alles durch eine einzige Zeile: @import \"tailwindcss\"." },
        ]
      },
      {
        title: "VS Code-Einrichtung",
        content: [
          { type: "li", text: "<strong>Tailwind CSS IntelliSense</strong> — Bietet Auto-Vervollständigung, Hover-Vorschau und Fehlerhervorhebung." },
          { type: "li", text: "<strong>Tailwind CSS Snippets</strong> — Bietet schnelle Abkürzungen zum Schreiben gängiger Tailwind-Klassen." },
          { type: "li", text: "<strong>Prettier + Tailwind Plugin</strong> — Sortiert Tailwind-Klassen automatisch in der empfohlenen Reihenfolge." },
        ]
      },
      {
        title: "Erste Komponente",
        content: [
          { type: "p", text: "Erstellen wir unsere erste Komponente mit Tailwind CSS und sehen wir, wie sie in der Praxis funktioniert. Erstellen Sie eine SimpleCard-Komponente und fügen Sie sie Ihrer Startseite hinzu." },
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Fehler 1: PostCSS-Datei vergessen</strong> — Ohne postcss.config.mjs funktioniert Tailwind überhaupt nicht." },
          { type: "li", text: "<strong>Fehler 2: Alte v3-Direktiven verwenden</strong> — @tailwind base anstelle von @import \"tailwindcss\" verwenden." },
          { type: "li", text: "<strong>Fehler 3: Scan-Pfade manuell angeben</strong> — In v4 geschieht dies automatisch." },
          { type: "li", text: "<strong>Fehler 4: Imports in globals.css mischen</strong> — Fügen Sie @import \"tailwindcss\" als erste Zeile hinzu." },
          { type: "li", text: "<strong>Fehler 5: style statt className verwenden</strong> — Tailwind-Klassen gehören in className, nicht in style." },
        ]
      }
    ],
    quiz: [
      {
        question: "Welche Datei muss zum Projekthinzugefügt werden, um PostCSS mit Tailwind v4 einzurichten?",
        options: ["tailwind.config.js", "postcss.config.mjs", "next.config.js", "css.config.json"],
        explanation: "Die Datei postcss.config.mjs ist für die Verbindung von Tailwind CSS mit PostCSS verantwortlich."
      },
      {
        question: "Was verwenden wir in Tailwind v4 in globals.css statt @tailwind base/components/utilities?",
        options: ["@include tailwindcss", "@import \"tailwindcss\"", "@use tailwindcss", "@load tailwindcss"],
        explanation: "In v4 verwenden wir @import \"tailwindcss\" anstelle der alten @tailwind-Direktiven."
      },
      {
        question: "Müssen wir in v4 Datei-Scan-Pfade angeben?",
        options: ["Ja, Pfade müssen im content-Array angegeben werden", "Nein, Tailwind v4 scannt Dateien automatisch", "Nur im Produktionsmodus", "Nur bei großen Projekten"],
        explanation: "Tailwind v4 scannt automatisch alle Projektdateien — keine Pfadangaben nötig."
      },
      {
        question: "Wie groß ist die erwartete finale CSS-Größe für ein durchschnittliches Tailwind-Projekt in der Produktion?",
        options: ["50-100KB", "100-200KB", "10-15KB", "5-8KB"],
        explanation: "Dank JIT Mode enthält das finale CSS nur die verwendeten Klassen. Ein durchschnittliches Projekt erzeugt ~10-15KB CSS."
      }
    ],
    challenge: {
      title: "Herausforderung: Neues Next.js-Projekt mit Tailwind v4 erstellen",
      description: "Folgen Sie diesen Schritten: Erstellen Sie ein neues Next.js-Projekt, installieren Sie Tailwind CSS v4 und @tailwindcss/postcss, erstellen Sie postcss.config.mjs, ändern Sie globals.css, erstellen Sie eine UserCard-Komponente mit Dark-Mode-Unterstützung und überprüfen Sie, ob das Design korrekt dargestellt wird."
    },
    cheatSheet: {
      title: "Kompletter Einrichtungsleitfaden — Tailwind v4 mit Next.js",
      items: [
        { term: "npm install tailwindcss @tailwindcss/postcss", definition: "Erforderliche Pakete installieren" },
        { term: "postcss.config.mjs", definition: "PostCSS-Konfiguration mit @tailwindcss/postcss-Plugin" },
        { term: "@import \"tailwindcss\"", definition: "Einstiegspunkt in globals.css" },
        { term: "Tailwind CSS IntelliSense", definition: "VS Code-Erweiterung für Auto-Vervollständigung" },
        { term: "npm run dev", definition: "Entwicklungsserver starten" },
        { term: "Dateiscannung", definition: "Automatisch in v4 — keine Pfade nötig" }
      ]
    }
  }
};

export default translations;
