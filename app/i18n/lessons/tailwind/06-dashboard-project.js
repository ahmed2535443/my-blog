const translations = {
  en: {
    sections: [
      { title: "What We'll Build", content: [
        { type: "p", text: "In this final lesson of the Tailwind stage, we'll build a real practical project: a complete Dashboard. This project brings together everything we've learned in previous lessons." },
        { type: "li", text: "<strong>Sidebar</strong> — Logo and navigation links with active state" },
        { type: "li", text: "<strong>Header</strong> — Search bar + notification icon + user avatar" },
        { type: "li", text: "<strong>Stats Cards</strong> — Grid of cards with numbers and indicators" },
        { type: "li", text: "<strong>Data Table</strong> — Responsive table displaying user data" },
        { type: "li", text: "<strong>Dark Mode</strong> — Full toggle with all components support" },
      ]},
      { title: "Project Structure", content: [
        { type: "p", text: "The design consists of three main parts arranged with horizontal flexbox: sidebar, header, and main content area." },
        { type: "callout", title: "Key Design Points", text: "We use flex for horizontal layout between sidebar and content. flex-1 on content takes remaining space. Sidebar is hidden on mobile with hidden lg:block." },
      ]},
      { title: "Building the Sidebar", content: [
        { type: "p", text: "The sidebar is the main navigation element. It contains the logo at top, navigation links in the middle, and user info at the bottom." },
        { type: "li", text: "hidden lg:flex — hidden by default, flex on lg screens" },
        { type: "li", text: "sticky top-0 — sticks to top on scroll" },
        { type: "li", text: "flex-col — vertical layout for sidebar elements" },
        { type: "li", text: "flex-1 — takes remaining space for navigation" },
      ]},
      { title: "Building the Header", content: [
        { type: "p", text: "The header contains the search bar in the center, notification icon and user avatar on the right, and mobile menu button on the left." },
      ]},
      { title: "Stats Cards", content: [
        { type: "p", text: "Stats cards display quick information and key numbers. We use CSS Grid for responsive layout." },
        { type: "li", text: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 — responsive grid" },
        { type: "li", text: "hover:shadow-md — hover effect" },
        { type: "li", text: "transition-shadow — smooth shadow transition" },
      ]},
      { title: "Data Table", content: [
        { type: "p", text: "The table displays a list of users with their avatars, names, roles, and status. On mobile, we allow horizontal scrolling." },
        { type: "li", text: "overflow-x-auto — allows horizontal scroll on small screens" },
        { type: "li", text: "whitespace-nowrap — prevents text wrapping in cells" },
        { type: "li", text: "divide-y — draws separator lines between rows" },
      ]},
      { title: "Dark Mode Integration", content: [
        { type: "p", text: "Dark mode in Tailwind works by adding the dark: prefix before each class. We build a toggle button and apply dark colors to all components." },
        { type: "callout", title: "Consistent Dark Color Pattern", text: "Background: bg-gray-900 for page, bg-gray-800 for components. Borders: border-gray-700. Text: text-gray-200 for primary, text-gray-400 for secondary." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "The dashboard combines Flexbox, Grid, Responsive, and Dark Mode" },
        { type: "li", text: "Sidebar uses sticky positioning and responsive hiding" },
        { type: "li", text: "Stats cards use responsive grid with hover effects" },
        { type: "li", text: "Data table supports horizontal scrolling on mobile" },
        { type: "li", text: "Dark mode uses consistent color patterns across all components" },
      ]}
    ],
    quiz: [
      { question: "How is the sidebar hidden on mobile?", options: ["display: none", "hidden lg:flex", "visibility: hidden", "opacity-0"], explanation: "hidden lg:flex hides the sidebar by default and shows it as flex on lg (1024px+) screens." },
      { question: "What class allows horizontal scrolling on mobile?", options: ["overflow-scroll", "overflow-x-auto", "scroll-x", "horizontal-scroll"], explanation: "overflow-x-auto allows horizontal scrolling when content exceeds the container width." },
      { question: "How do you make a grid responsive with 1 column on mobile and 4 on desktop?", options: ["grid-cols-4", "grid-cols-1 md:grid-cols-4", "responsive-grid", "grid-auto-4"], explanation: "grid-cols-1 md:grid-cols-4 sets 1 column by default and 4 columns on md (768px+) screens." }
    ],
    challenge: { title: "Build a Complete Dashboard", description: "Create a full dashboard with sidebar, header, stats cards, data table, and dark mode toggle using only Tailwind CSS classes." },
    cheatSheet: { title: "Dashboard Project Cheat Sheet", items: [
      { term: "hidden lg:flex", definition: "Show element only on lg+ screens" },
      { term: "sticky top-0", definition: "Stick element to top on scroll" },
      { term: "flex-1", definition: "Take remaining space" },
      { term: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4", definition: "Responsive 1→2→4 column grid" },
      { term: "overflow-x-auto", definition: "Horizontal scroll on overflow" },
      { term: "divide-y", definition: "Horizontal dividers between items" },
      { term: "dark:bg-gray-800", definition: "Dark mode background" },
      { term: "transition-colors duration-300", definition: "Smooth color transition" }
    ]}
  },
  fr: {
    sections: [
      { title: "Ce que nous allons construire", content: [
        { type: "p", text: "Dans cette dernière leçon du stage Tailwind, nous allons construire un projet pratique réel : un tableau de bord complet." },
        { type: "li", text: "<strong>Barre latérale</strong> — Logo et liens de navigation avec état actif" },
        { type: "li", text: "<strong>En-tête</strong> — Barre de recherche + icône de notification + avatar" },
        { type: "li", text: "<strong>Cartes statistiques</strong> — Grille de cartes avec chiffres et indicateurs" },
        { type: "li", text: "<strong>Tableau de données</strong> — Tableau responsive affichant les données" },
        { type: "li", text: "<strong>Mode sombre</strong> — Bascule complète avec support de tous les composants" },
      ]},
      { title: "Structure du projet", content: [
        { type: "p", text: "Le design se compose de trois parties principales disposées avec flexbox horizontal : barre latérale, en-tête et zone de contenu principal." },
      ]},
      { title: "Construction de la barre latérale", content: [
        { type: "p", text: "La barre latérale est l'élément de navigation principal." },
        { type: "li", text: "hidden lg:flex — cachée par défaut, flex sur les écrans lg" },
        { type: "li", text: "sticky top-0 — reste fixe en haut au défilement" },
      ]},
      { title: "Construction de l'en-tête", content: [
        { type: "p", text: "L'en-tête contient la barre de recherche, l'icône de notification et l'avatar utilisateur." },
      ]},
      { title: "Cartes statistiques", content: [
        { type: "p", text: "Les cartes statistiques affichent des informations rapides. Nous utilisons CSS Grid pour un layout responsive." },
      ]},
      { title: "Tableau de données", content: [
        { type: "p", text: "Le tableau affiche une liste d'utilisateurs. Sur mobile, nous permettons le défilement horizontal." },
      ]},
      { title: "Intégration du mode sombre", content: [
        { type: "p", text: "Le mode sombre dans Tailwind fonctionne en ajoutant le préfixe dark: avant chaque classe." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Le tableau de bord combine Flexbox, Grid, Responsive et Mode sombre" },
        { type: "li", text: "La barre latérale utilise le positionnement sticky et le masquage responsive" },
        { type: "li", text: "Les cartes statistiques utilisent une grille responsive avec effets de survol" },
      ]}
    ],
    quiz: [
      { question: "Comment la barre latérale est-elle cachée sur mobile ?", options: ["display: none", "hidden lg:flex", "visibility: hidden", "opacity-0"], explanation: "hidden lg:flex cache la barre latérale par défaut et l'affiche en flex sur les écrans lg (1024px+)." },
      { question: "Quelle classe permet le défilement horizontal sur mobile ?", options: ["overflow-scroll", "overflow-x-auto", "scroll-x", "horizontal-scroll"], explanation: "overflow-x-auto permet le défilement horizontal quand le contenu dépasse la largeur du conteneur." },
      { question: "Comment rendre une grille responsive avec 1 colonne sur mobile et 4 sur bureau ?", options: ["grid-cols-4", "grid-cols-1 md:grid-cols-4", "responsive-grid", "grid-auto-4"], explanation: "grid-cols-1 md:grid-cols-4 définit 1 colonne par défaut et 4 colonnes sur les écrans md (768px+)." }
    ],
    challenge: { title: "Construire un tableau de bord complet", description: "Créez un tableau de bord complet avec barre latérale, en-tête, cartes statistiques, tableau de données et bascule de mode sombre." },
    cheatSheet: { title: "Fiche mémo Projet Tableau de bord", items: [
      { term: "hidden lg:flex", definition: "Afficher l'élément uniquement sur écrans lg+" },
      { term: "sticky top-0", definition: "Fixer l'élément en haut au défilement" },
      { term: "flex-1", definition: "Prendre l'espace restant" },
      { term: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4", definition: "Grille responsive 1→2→4 colonnes" },
      { term: "overflow-x-auto", definition: "Défilement horizontal en débordement" },
      { term: "dark:bg-gray-800", definition: "Arrière-plan mode sombre" },
      { term: "transition-colors duration-300", definition: "Transition de couleurs fluide" }
    ]}
  },
  de: {
    sections: [
      { title: "Was wir bauen werden", content: [
        { type: "p", text: "In dieser letzten Lektion der Tailwind-Stufe bauen wir ein echtes praktisches Projekt: ein vollständiges Dashboard." },
        { type: "li", text: "<strong>Sidebar</strong> — Logo und Navigationslinks mit aktiven Zustand" },
        { type: "li", text: "<strong>Header</strong> — Suchleiste + Benachrichtigungssymbol + Benutzeravatar" },
        { type: "li", text: "<strong>Statistik-Karten</strong> — Raster von Karten mit Zahlen und Indikatoren" },
        { type: "li", text: "<strong>Datentabelle</strong> — Responsive Tabelle mit Benutzerdaten" },
        { type: "li", text: "<strong>Dunkelmodus</strong> — Vollständiger Umschalter mit allen Komponenten" },
      ]},
      { title: "Projektstruktur", content: [
        { type: "p", text: "Das Design besteht aus drei Hauptteilen, die mit horizontalem Flexbox angeordnet sind: Sidebar, Header und Hauptinhaltsbereich." },
      ]},
      { title: "Sidebar erstellen", content: [
        { type: "p", text: "Die Sidebar ist das HauptnavigationsElement." },
        { type: "li", text: "hidden lg:flex — standardmäßig versteckt, flex auf lg-Bildschirmen" },
        { type: "li", text: "sticky top-0 — bleibt beim Scrollen oben haften" },
      ]},
      { title: "Header erstellen", content: [
        { type: "p", text: "Der Header enthält die Suchleiste, das Benachrichtigungssymbol und den Benutzeravatar." },
      ]},
      { title: "Statistik-Karten", content: [
        { type: "p", text: "Statistik-Karten zeigen schnelle Informationen. Wir verwenden CSS Grid für ein responsive Layout." },
      ]},
      { title: "Datentabelle", content: [
        { type: "p", text: "Die Tabelle zeigt eine Benutzerliste. Auf Mobilgeräten erlauben wir horizontales Scrollen." },
      ]},
      { title: "Dunkelmodus-Integration", content: [
        { type: "p", text: "Der Dunkelmodus in Tailwind funktioniert durch Hinzufügen des dark: Präfixes vor jeder Klasse." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Das Dashboard kombiniert Flexbox, Grid, Responsive und Dunkelmodus" },
        { type: "li", text: "Die Sidebar verwendet Sticky-Positionierung und responsives Verstecken" },
        { type: "li", text: "Statistik-Karten verwenden responsive Raster mit Hover-Effekten" },
      ]}
    ],
    quiz: [
      { question: "Wie wird die Sidebar auf Mobilgeräten versteckt?", options: ["display: none", "hidden lg:flex", "visibility: hidden", "opacity-0"], explanation: "hidden lg:flex versteckt die Sidebar standardmäßig und zeigt sie als flex auf lg (1024px+) Bildschirmen." },
      { question: "Welche Klasse erlaubt horizontales Scrollen auf Mobilgeräten?", options: ["overflow-scroll", "overflow-x-auto", "scroll-x", "horizontal-scroll"], explanation: "overflow-x-auto erlaubt horizontales Scrollen, wenn der Inhalt die Containerbreite überschreitet." },
      { question: "Wie macht man ein Grid responsiv mit 1 Spalte auf Mobil und 4 auf Desktop?", options: ["grid-cols-4", "grid-cols-1 md:grid-cols-4", "responsive-grid", "grid-auto-4"], explanation: "grid-cols-1 md:grid-cols-4 setzt 1 Spalte als Standard und 4 Spalten auf md (768px+) Bildschirmen." }
    ],
    challenge: { title: "Ein vollständiges Dashboard erstellen", description: "Erstellen Sie ein vollständiges Dashboard mit Sidebar, Header, Statistik-Karten, Datentabelle und Dunkelmodus-Umschalter." },
    cheatSheet: { title: "Dashboard-Projekt Spickzettel", items: [
      { term: "hidden lg:flex", definition: "Element nur auf lg+ Bildschirmen anzeigen" },
      { term: "sticky top-0", definition: "Element beim Scrollen oben haften" },
      { term: "flex-1", definition: "Verbleibenden Platz einnehmen" },
      { term: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4", definition: "Responsive 1→2→4 Spalten-Raster" },
      { term: "overflow-x-auto", definition: "Horizontales Scrollen bei Überlauf" },
      { term: "dark:bg-gray-800", definition: "Dunkelmodus-Hintergrund" },
      { term: "transition-colors duration-300", definition: "Sanfter Farbübergang" }
    ]}
  }
};
export default translations;
