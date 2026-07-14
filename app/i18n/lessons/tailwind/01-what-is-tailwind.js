const translations = {
  en: {
    sections: [
      {
        title: "What is Tailwind CSS?",
        content: [
          { type: "p", text: "<strong>Tailwind CSS</strong> is a utility-first CSS framework — it provides you with a set of small, ready-to-use utility classes that you can combine directly in HTML elements to design user interfaces quickly and efficiently." },
          { type: "callout", title: "Quick Facts about Tailwind CSS", text: "Created by Adam Wathan as an open-source project. Current version: v4 which uses CSS-first configuration instead of traditional JavaScript files. Philosophy: Utility-First — small classes dedicated to each CSS property. It is one of the most used CSS frameworks in modern projects." },
          { type: "p", text: "In version 4 (v4), Tailwind no longer needs a traditional tailwind.config.js file. Instead, you can configure the framework directly from a CSS file using the @theme directive." },
        ]
      },
      {
        title: "Why Utility-First?",
        content: [
          { type: "p", text: "To understand why Tailwind developers chose the utility-first model, let's look at the problem developers face with the traditional approach:" },
          { type: "p", text: "In large projects, CSS files become nearly impossible to manage. With Tailwind, all the design lives in one file — the component file itself." },
          { type: "callout", title: "Important Note", text: "The code may look a bit longer in HTML, but the benefit is that you never need to open a CSS file, create a new class, and wait for the build. Everything you need is right in front of you — and for production builds, Tailwind automatically removes unused classes." },
        ]
      },
      {
        title: "Problems Solved by Tailwind",
        content: [
          { type: "li", text: "<strong>No Context Switching:</strong> With traditional CSS, you constantly switch between HTML/JSX and CSS files. With Tailwind, all the design lives in one file." },
          { type: "li", text: "<strong>No Dead CSS:</strong> The build step scans your files and generates only the classes you actually use. Result: a very small production CSS file (Tree-Shaking)." },
          { type: "li", text: "<strong>Consistent Design System:</strong> Tailwind comes with a pre-built design system: consistent colors, consistent spacing, consistent font sizes." },
          { type: "li", text: "<strong>Responsive Design Without Complexity:</strong> No need to write Media Queries in a separate file. Just add the appropriate prefix in front of the class." },
        ]
      },
      {
        title: "How Does Tailwind Work Behind the Scenes?",
        content: [
          { type: "li", text: "<strong>JIT Compiler:</strong> Tailwind v4 uses a JIT (Just-In-Time) engine — it generates CSS on-demand instead of generating all possible classes upfront." },
          { type: "li", text: "<strong>No Config File Needed in v4:</strong> In previous versions, you needed to create a tailwind.config.js file. In v4, everything is in the main CSS file." },
          { type: "li", text: "<strong>Tree-Shaking = Very Small CSS:</strong> Tailwind v4 automatically removes all unused classes." },
        ]
      },
      {
        title: "Simple Example — Card with Tailwind",
        content: [
          { type: "p", text: "Let's create a simple card using only Tailwind. Notice how we combine classes to achieve a professional design." },
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Mistake 1: Mixing Tailwind with too much custom CSS</strong> — The biggest mistake is creating a CSS file with custom classes and mixing them with Tailwind." },
          { type: "li", text: "<strong>Mistake 2: Overusing @apply</strong> — The @apply directive is an escape hatch, not the default way. Overusing it defeats the purpose of Tailwind." },
          { type: "li", text: "<strong>Mistake 3: Not learning the naming pattern</strong> — Tailwind classes follow a fixed pattern. If you memorize the pattern, you can predict any class." },
          { type: "li", text: "<strong>Mistake 4: Forgetting Responsive</strong> — Tailwind is Mobile-First. Prefixes like md: and lg: add styles for larger screens." },
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Use Tailwind exclusively</strong> — Don't write custom CSS unless absolutely necessary." },
          { type: "li", text: "<strong>Install the Tailwind CSS IntelliSense extension</strong> — Provides smart auto-complete, color previews, and quick navigation between classes." },
          { type: "li", text: "<strong>Make className the single source of truth</strong> — All styles should be directly in className." },
          { type: "li", text: "<strong>Use clsx or cva for complex conditions</strong> — When combining classes conditionally." },
          { type: "li", text: "<strong>Use the Prettier Plugin for Tailwind</strong> — Automatically sorts classes in the standard order." },
        ]
      },
      {
        title: "Lesson Summary",
        content: [
          { type: "li", text: "<strong>Tailwind CSS</strong> is a utility-first CSS framework." },
          { type: "li", text: "It solves traditional CSS problems (dead CSS, priority conflicts, lack of consistent design)." },
          { type: "li", text: "v4 uses CSS-First Configuration without a JS file." },
          { type: "li", text: "JIT Compiler generates only the classes used." },
          { type: "li", text: "Classes follow a predictable and easy-to-memorize pattern." },
        ]
      }
    ],
    quiz: [
      {
        question: "What is the basic type of Tailwind CSS?",
        options: ["Component-based CSS framework", "Utility-first CSS framework", "JavaScript CSS-in-JS library", "Preprocessor like Sass"],
        explanation: "Tailwind CSS is a utility-first CSS framework — it provides small utility classes you can combine directly in HTML to design user interfaces."
      },
      {
        question: "What is the biggest change in Tailwind v4 compared to previous versions?",
        options: ["Added TypeScript support", "Shifted to CSS-First Configuration instead of tailwind.config.js", "Removed JIT Compiler", "Added a built-in component system"],
        explanation: "In Tailwind v4, the tailwind.config.js file was replaced with direct CSS configuration using @theme in the main CSS file."
      },
      {
        question: "What does the JIT Compiler do in Tailwind?",
        options: ["Generates all possible classes upfront then deletes unused ones", "Generates CSS only for classes actually used in source files", "Translates JavaScript code to CSS", "Optimizes image files"],
        explanation: "The JIT (Just-In-Time) Compiler scans HTML/JSX files and generates CSS only for the classes actually used."
      },
      {
        question: "What is the correct pattern for writing a Tailwind class to get 2rem padding?",
        options: ["padding-8", "p-8", "pad-2", "spacing-2"],
        explanation: "In Tailwind, P = padding and 8 = 8 × 0.25rem = 2rem. The pattern is [prefix]-[value]."
      }
    ],
    challenge: {
      title: "Challenge: Create a Profile Card",
      description: "Create a React component that displays a profile using only Tailwind CSS (no custom CSS). The card should include: a circular avatar, username, bio, a 'Follow' button, a hover effect, and a responsive design."
    },
    cheatSheet: {
      title: "Tailwind CSS Cheat Sheet — Lesson 1",
      items: [
        { term: "flex", definition: "display: flex" },
        { term: "grid", definition: "display: grid" },
        { term: "p-4", definition: "padding: 1rem" },
        { term: "m-4", definition: "margin: 1rem" },
        { term: "mx-auto", definition: "margin-left: auto; margin-right: auto" },
        { term: "items-center", definition: "align-items: center" },
        { term: "justify-between", definition: "justify-content: space-between" },
        { term: "gap-4", definition: "gap: 1rem" },
        { term: "text-lg", definition: "font-size: 1.125rem" },
        { term: "font-bold", definition: "font-weight: 700" },
        { term: "rounded-lg", definition: "border-radius: 0.5rem" },
        { term: "shadow-md", definition: "Medium box shadow" },
        { term: "hover:bg-blue-600", definition: "Background on hover" },
        { term: "transition-colors", definition: "Smooth color transition" },
        { term: "md: / lg:", definition: "Responsive breakpoints" }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que Tailwind CSS ?",
        content: [
          { type: "p", text: "<strong>Tailwind CSS</strong> est un framework CSS utility-first — il vous fournit un ensemble de petites classes utilitaires prêtes à l'emploi que vous pouvez combiner directement dans les éléments HTML pour concevoir des interfaces utilisateur rapidement et efficacement." },
          { type: "callout", title: "Faits rapides sur Tailwind CSS", text: "Créé par Adam Wathan en tant que projet open-source. Version actuelle : v4 qui utilise une configuration CSS-first au lieu de fichiers JavaScript traditionnels. Philosophie : Utility-First — de petites classes dédiées à chaque propriété CSS. C'est l'un des frameworks CSS les plus utilisés dans les projets modernes." },
          { type: "p", text: "Dans la version 4 (v4), Tailwind n'a plus besoin d'un fichier tailwind.config.js traditionnel. Au lieu de cela, vous pouvez configurer le framework directement depuis un fichier CSS en utilisant la directive @theme." },
        ]
      },
      {
        title: "Pourquoi Utility-First ?",
        content: [
          { type: "p", text: "Pour comprendre pourquoi les développeurs de Tailwind ont choisi le modèle utility-first, regardons le problème auquel les développeurs font face avec l'approche traditionnelle :" },
          { type: "p", text: "Dans les projets volumineux, les fichiers CSS deviennent presque impossibles à gérer. Avec Tailwind, tout le design vit dans un seul fichier — le fichier du composant lui-même." },
          { type: "callout", title: "Note importante", text: "Le code peut sembler un peu plus long en HTML, mais l'avantage est que vous n'avez jamais besoin d'ouvrir un fichier CSS, de créer une nouvelle classe et d'attendre la compilation. Tout ce dont vous avez besoin est directement devant vous." },
        ]
      },
      {
        title: "Problèmes résolus par Tailwind",
        content: [
          { type: "li", text: "<strong>Pas de changement de contexte :</strong> Avec le CSS traditionnel, vous alternez constamment entre les fichiers HTML/JSX et CSS. Avec Tailwind, tout le design vit dans un seul fichier." },
          { type: "li", text: "<strong>Pas de CSS mort :</strong> L'étape de build scanne vos fichiers et ne génère que les classes que vous utilisez réellement. Résultat : un fichier CSS de production très petit." },
          { type: "li", text: "<strong>Système de design cohérent :</strong> Tailwind est livré avec un système de design pré-construit : couleurs cohérentes, espacement cohérent, tailles de police cohérentes." },
          { type: "li", text: "<strong>Design responsive sans complexité :</strong> Pas besoin d'écrire des Media Queries dans un fichier séparé. Ajoutez simplement le préfixe approprié devant la classe." },
        ]
      },
      {
        title: "Comment Tailwind fonctionne en coulisses ?",
        content: [
          { type: "li", text: "<strong>JIT Compiler :</strong> Tailwind v4 utilise un moteur JIT (Just-In-Time) — il génère le CSS à la demande au lieu de générer toutes les classes à l'avance." },
          { type: "li", text: "<strong>Pas de fichier de configuration nécessaire en v4 :</strong> Dans les versions précédentes, vous deviez créer un fichier tailwind.config.js. En v4, tout est dans le fichier CSS principal." },
          { type: "li", text: "<strong>Tree-Shaking = CSS très petit :</strong> Tailwind v4 supprime automatiquement toutes les classes inutilisées." },
        ]
      },
      {
        title: "Exemple simple — Carte avec Tailwind",
        content: [
          { type: "p", text: "Créons une carte simple en utilisant uniquement Tailwind. Remarquez comment nous combinons les classes pour obtenir un design professionnel." },
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Erreur 1 : Mélanger Tailwind avec trop de CSS personnalisé</strong> — La plus grande erreur est de créer un fichier CSS avec des classes personnalisées et de les mélanger avec Tailwind." },
          { type: "li", text: "<strong>Erreur 2 : Utiliser trop @apply</strong> — La directive @apply est une solution de secours, pas la méthode par défaut." },
          { type: "li", text: "<strong>Erreur 3 : Ne pas apprendre le pattern de nommage</strong> — Les classes Tailwind suivent un pattern fixe. Si vous le mémorisez, vous pouvez prédire n'importe quelle classe." },
          { type: "li", text: "<strong>Erreur 4 : Oublier le responsive</strong> — Tailwind est Mobile-First. Les préfixes comme md: et lg: ajoutent des styles pour les écrans plus grands." },
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "<strong>Utilisez Tailwind exclusivement</strong> — N'écrivez pas de CSS personnalisé sauf absolument nécessaire." },
          { type: "li", text: "<strong>Installez l'extension Tailwind CSS IntelliSense</strong> — Fournit l'auto-complétion intelligente, les aperçus de couleurs et la navigation rapide." },
          { type: "li", text: "<strong>Faites de className la source unique de vérité</strong> — Tous les styles doivent être directement dans className." },
          { type: "li", text: "<strong>Utilisez clsx ou cva pour les conditions complexes</strong> — Lorsque vous combinez des classes conditionnellement." },
          { type: "li", text: "<strong>Utilisez le plugin Prettier pour Tailwind</strong> — Trie automatiquement les classes dans l'ordre standard." },
        ]
      },
      {
        title: "Résumé de la leçon",
        content: [
          { type: "li", text: "<strong>Tailwind CSS</strong> est un framework CSS utility-first." },
          { type: "li", text: "Il résout les problèmes du CSS traditionnel (CSS mort, conflits de priorité, manque de design cohérent)." },
          { type: "li", text: "v4 utilise une configuration CSS-First sans fichier JS." },
          { type: "li", text: "Le JIT Compiler ne génère que les classes utilisées." },
          { type: "li", text: "Les classes suivent un pattern prévisible et facile à mémoriser." },
        ]
      }
    ],
    quiz: [
      {
        question: "Quel est le type de base de Tailwind CSS ?",
        options: ["Framework CSS basé sur les composants", "Framework CSS utility-first", "Bibliothèque JavaScript CSS-in-JS", "Préprocesseur comme Sass"],
        explanation: "Tailwind CSS est un framework CSS utility-first — il fournit de petites classes utilitaires que vous pouvez combiner directement dans HTML pour concevoir des interfaces utilisateur."
      },
      {
        question: "Quel est le plus grand changement dans Tailwind v4 par rapport aux versions précédentes ?",
        options: ["Ajout du support TypeScript", "Passage à une configuration CSS-First au lieu de tailwind.config.js", "Suppression du JIT Compiler", "Ajout d'un système de composants intégré"],
        explanation: "Dans Tailwind v4, le fichier tailwind.config.js a été remplacé par une configuration CSS directe via @theme dans le fichier CSS principal."
      },
      {
        question: "Que fait le JIT Compiler dans Tailwind ?",
        options: ["Génère toutes les classes possibles puis supprime les inutilisées", "Génère le CSS uniquement pour les classes réellement utilisées", "Traduit le code JavaScript en CSS", "Optimise les fichiers image"],
        explanation: "Le JIT Compiler scanne les fichiers HTML/JSX et ne génère le CSS que pour les classes réellement utilisées."
      },
      {
        question: "Quel est le bon pattern pour écrire une classe Tailwind pour un padding de 2rem ?",
        options: ["padding-8", "p-8", "pad-2", "spacing-2"],
        explanation: "Dans Tailwind, P = padding et 8 = 8 × 0.25rem = 2rem. Le pattern est [préfixe]-[valeur]."
      }
    ],
    challenge: {
      title: "Défi : Créer une carte de profil",
      description: "Créez un composant React qui affiche un profil en utilisant uniquement Tailwind CSS (pas de CSS personnalisé). La carte doit inclure : un avatar circulaire, un nom d'utilisateur, une bio, un bouton 'Suivre', un effet hover et un design responsive."
    },
    cheatSheet: {
      title: "Fiche mémo Tailwind CSS — Leçon 1",
      items: [
        { term: "flex", definition: "display: flex" },
        { term: "grid", definition: "display: grid" },
        { term: "p-4", definition: "padding: 1rem" },
        { term: "m-4", definition: "margin: 1rem" },
        { term: "mx-auto", definition: "margin-left: auto; margin-right: auto" },
        { term: "items-center", definition: "align-items: center" },
        { term: "justify-between", definition: "justify-content: space-between" },
        { term: "gap-4", definition: "gap: 1rem" },
        { term: "text-lg", definition: "font-size: 1.125rem" },
        { term: "font-bold", definition: "font-weight: 700" },
        { term: "rounded-lg", definition: "border-radius: 0.5rem" },
        { term: "shadow-md", definition: "Ombre moyenne" },
        { term: "hover:bg-blue-600", definition: "Arrière-plan au survol" },
        { term: "transition-colors", definition: "Transition fluide des couleurs" },
        { term: "md: / lg:", definition: "Points de rupture responsive" }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was ist Tailwind CSS?",
        content: [
          { type: "p", text: "<strong>Tailwind CSS</strong> ist ein Utility-First CSS-Framework — es stellt Ihnen eine Reihe kleiner, einsatzbereiter Utility-Klassen zur Verfügung, die Sie direkt in HTML-Elementen kombinieren können, um Benutzeroberflächen schnell und effizient zu gestalten." },
          { type: "callout", title: "Schnelle Fakten über Tailwind CSS", text: "Erstellt von Adam Wathan als Open-Source-Projekt. Aktuelle Version: v4, die eine CSS-First-Konfiguration anstelle traditioneller JavaScript-Dateien verwendet. Philosophie: Utility-First — kleine Klassen, die jeder CSS-Eigenschaft gewidmet sind. Es ist eines der meistgenutzten CSS-Frameworks in modernen Projekten." },
          { type: "p", text: "In Version 4 (v4) benötigt Tailwind keine traditionelle tailwind.config.js-Datei mehr. Stattdessen können Sie das Framework direkt aus einer CSS-Datei konfigurieren, indem Sie die @theme-Direktive verwenden." },
        ]
      },
      {
        title: "Warum Utility-First?",
        content: [
          { type: "p", text: "Um zu verstehen, warum die Tailwind-Entwickler das Utility-First-Modell gewählt haben, betrachten wir das Problem, mit dem Entwickler beim traditionellen Ansatz konfrontiert sind:" },
          { type: "p", text: "In großen Projekten werden CSS-Dateien nahezu unmöglich zu verwalten. Mit Tailwind lebt das gesamte Design in einer einzigen Datei — der Komponentendatei selbst." },
          { type: "callout", title: "Wichtiger Hinweis", text: "Der Code mag in HTML etwas länger aussehen, aber der Vorteil ist, dass Sie nie eine CSS-Datei öffnen, eine neue Klasse erstellen und auf den Build warten müssen. Alles, was Sie brauchen, ist direkt vor Ihnen." },
        ]
      },
      {
        title: "Von Tailwind gelöste Probleme",
        content: [
          { type: "li", text: "<strong>Kein Kontextwechsel:</strong> Mit traditionellem CSS wechseln Sie ständig zwischen HTML/JSX- und CSS-Dateien. Mit Tailwind lebt das gesamte Design in einer einzigen Datei." },
          { type: "li", text: "<strong>Kein totes CSS:</strong> Der Build-Schritt scannt Ihre Dateien und generiert nur die Klassen, die Sie tatsächlich verwenden. Ergebnis: eine sehr kleine Produktions-CSS-Datei." },
          { type: "li", text: "<strong>Konsistentes Designsystem:</strong> Tailwind wird mit einem vorgefertigten Designsystem geliefert: konsistente Farben, konsistente Abstände, konsistente Schriftgrößen." },
          { type: "li", text: "<strong>Responsives Design ohne Komplexität:</strong> Keine Notwendigkeit, Media Queries in einer separaten Datei zu schreiben. Fügen Sie einfach den entsprechenden Präfix vor die Klasse hinzu." },
        ]
      },
      {
        title: "Wie funktioniert Tailwind hinter den Kulissen?",
        content: [
          { type: "li", text: "<strong>JIT Compiler:</strong> Tailwind v4 verwendet eine JIT-Engine (Just-In-Time) — es generiert CSS nach Bedarf, anstatt alle Klassen im Voraus zu generieren." },
          { type: "li", text: "<strong>Keine Konfigurationsdatei in v4 nötig:</strong> In früheren Versionen mussten Sie eine tailwind.config.js-Datei erstellen. In v4 ist alles in der Haupt-CSS-Datei." },
          { type: "li", text: "<strong>Tree-Shaking = Sehr kleines CSS:</strong> Tailwind v4 entfernt automatisch alle ungenutzten Klassen." },
        ]
      },
      {
        title: "Einfaches Beispiel — Karte mit Tailwind",
        content: [
          { type: "p", text: "Erstellen wir eine einfache Karte nur mit Tailwind. Beachten Sie, wie wir Klassen kombinieren, um ein professionelles Design zu erreichen." },
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Fehler 1: Tailwind mit zu viel benutzerdefiniertem CSS mischen</strong> — Der größte Fehler ist das Erstellen einer CSS-Datei mit benutzerdefinierten Klassen und deren Mischung mit Tailwind." },
          { type: "li", text: "<strong>Fehler 2: Zu viel @apply verwenden</strong> — Die @apply-Direktive ist ein Ausweg, nicht der Standardweg." },
          { type: "li", text: "<strong>Fehler 3: Namensschema nicht lernen</strong> — Tailwind-Klassen folgen einem festen Schema. Wenn Sie es auswendig lernen, können Sie jede Klasse vorhersagen." },
          { type: "li", text: "<strong>Fehler 4: Responsive vergessen</strong> — Tailwind ist Mobile-First. Präfixe wie md: und lg: fügen Stile für größere Bildschirme hinzu." },
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Verwenden Sie Tailwind ausschließlich</strong> — Schreiben Sie kein benutzerdefiniertes CSS, es sei denn, es ist absolut notwendig." },
          { type: "li", text: "<strong>Installieren Sie die Tailwind CSS IntelliSense-Erweiterung</strong> — Bietet intelligente Autovervollständigung, Farbvorschauen und schnelle Navigation." },
          { type: "li", text: "<strong>Machen Sie className zur einzigen Wahrheitsquelle</strong> — Alle Stile sollten direkt in className stehen." },
          { type: "li", text: "<strong>Verwenden Sie clsx oder cva für komplexe Bedingungen</strong> — Beim bedingten Kombinieren von Klassen." },
          { type: "li", text: "<strong>Verwenden Sie das Prettier-Plugin für Tailwind</strong> — Sortiert Klassen automatisch in der Standardreihenfolge." },
        ]
      },
      {
        title: "Zusammenfassung der Lektion",
        content: [
          { type: "li", text: "<strong>Tailwind CSS</strong> ist ein Utility-First CSS-Framework." },
          { type: "li", text: "Es löst traditionelle CSS-Probleme (totes CSS, Prioritätskonflikte, fehlendes konsistentes Design)." },
          { type: "li", text: "v4 verwendet eine CSS-First-Konfiguration ohne JS-Datei." },
          { type: "li", text: "Der JIT Compiler generiert nur die verwendeten Klassen." },
          { type: "li", text: "Klassen folgen einem vorhersagbaren und leicht zu merkenden Schema." },
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist der grundlegende Typ von Tailwind CSS?",
        options: ["Komponentenbasiertes CSS-Framework", "Utility-First CSS-Framework", "JavaScript CSS-in-JS-Bibliothek", "Präprozessor wie Sass"],
        explanation: "Tailwind CSS ist ein Utility-First CSS-Framework — es stellt kleine Utility-Klassen bereit, die Sie direkt in HTML kombinieren können, um Benutzeroberflächen zu gestalten."
      },
      {
        question: "Was ist die größte Änderung in Tailwind v4 im Vergleich zu früheren Versionen?",
        options: ["TypeScript-Unterstützung hinzugefügt", "Wechsel zu CSS-First-Konfiguration statt tailwind.config.js", "JIT Compiler entfernt", "Ein eingebautes Komponentensystem hinzugefügt"],
        explanation: "In Tailwind v4 wurde die Datei tailwind.config.js durch direkte CSS-Konfiguration mit @theme in der Haupt-CSS-Datei ersetzt."
      },
      {
        question: "Was macht der JIT Compiler in Tailwind?",
        options: ["Generiert alle möglichen Klassen im Voraus und löscht dann ungenutzte", "Generiert CSS nur für tatsächlich verwendete Klassen", "Übersetzt JavaScript-Code in CSS", "Optimiert Bilddateien"],
        explanation: "Der JIT Compiler scannt HTML/JSX-Dateien und generiert CSS nur für die tatsächlich verwendeten Klassen."
      },
      {
        question: "Was ist das richtige Schema für eine Tailwind-Klasse mit 2rem Padding?",
        options: ["padding-8", "p-8", "pad-2", "spacing-2"],
        explanation: "In Tailwind steht P für Padding und 8 = 8 × 0.25rem = 2rem. Das Schema ist [Präfix]-[Wert]."
      }
    ],
    challenge: {
      title: "Herausforderung: Profilkarte erstellen",
      description: "Erstellen Sie eine React-Komponente, die ein Profil nur mit Tailwind CSS anzeigt (kein benutzerdefiniertes CSS). Die Karte sollte umfassen: einen kreisförmigen Avatar, Benutzernamen, Bio, eine 'Folgen'-Schaltfläche, einen Hover-Effekt und ein responsives Design."
    },
    cheatSheet: {
      title: "Tailwind CSS Spickzettel — Lektion 1",
      items: [
        { term: "flex", definition: "display: flex" },
        { term: "grid", definition: "display: grid" },
        { term: "p-4", definition: "padding: 1rem" },
        { term: "m-4", definition: "margin: 1rem" },
        { term: "mx-auto", definition: "margin-left: auto; margin-right: auto" },
        { term: "items-center", definition: "align-items: center" },
        { term: "justify-between", definition: "justify-content: space-between" },
        { term: "gap-4", definition: "gap: 1rem" },
        { term: "text-lg", definition: "font-size: 1.125rem" },
        { term: "font-bold", definition: "font-weight: 700" },
        { term: "rounded-lg", definition: "border-radius: 0.5rem" },
        { term: "shadow-md", definition: "Mittlerer Box-Schatten" },
        { term: "hover:bg-blue-600", definition: "Hintergrund bei Mauszeiger" },
        { term: "transition-colors", definition: "Sanfter Farbübergang" },
        { term: "md: / lg:", definition: "Responsive Breakpoints" }
      ]
    }
  }
};

export default translations;
