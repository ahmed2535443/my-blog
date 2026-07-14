const translations = {
  en: {
    sections: [
      { title: "Responsive Design", content: [
        { type: "p", text: "Responsive design means your site works perfectly on all screen sizes — from small phones to large monitors. Tailwind CSS makes responsive design extremely easy using the prefix system." },
        { type: "callout", title: "Mobile-First Approach", text: "Tailwind follows a Mobile-First approach — you design for small screens first, then add modifications for larger screens. Code without a prefix applies to all screens. Prefixes like sm: and md: add styles for larger screens only." },
        { type: "li", text: "sm: — min-width: 640px (large phone)" },
        { type: "li", text: "md: — min-width: 768px (tablet)" },
        { type: "li", text: "lg: — min-width: 1024px (laptop/desktop)" },
        { type: "li", text: "xl: — min-width: 1280px (desktop)" },
        { type: "li", text: "2xl: — min-width: 1536px (large screen)" },
      ]},
      { title: "Practical Responsive Examples", content: [
        { type: "li", text: "Responsive navigation — hamburger menu on mobile, full links on desktop" },
        { type: "li", text: "Responsive typography — smaller on mobile, larger on desktop" },
        { type: "li", text: "Responsive layout — stack on mobile, side-by-side on desktop" },
        { type: "li", text: "Responsive spacing — less padding on mobile, more on desktop" },
      ]},
      { title: "Interactive States", content: [
        { type: "p", text: "Tailwind provides prefixes for different states an element can be in. These prefixes are added before any class to change appearance in specific states." },
        { type: "li", text: "hover: — when mouse is over the element" },
        { type: "li", text: "focus: / focus-visible: — when element has focus" },
        { type: "li", text: "active: — while clicking/pressing" },
        { type: "li", text: "disabled: — when element is disabled" },
        { type: "li", text: "first: / last: / odd: / even: — positional selectors" },
      ]},
      { title: "Dark Mode", content: [
        { type: "p", text: "Dark mode has become an essential feature in modern web applications. Tailwind provides the dark: prefix to specify different styles for dark mode." },
        { type: "callout", title: "How Dark Mode Works in Tailwind", text: "Tailwind uses the 'class' strategy by default. Dark mode is activated by adding the 'dark' class to the <html> or <body> element." },
        { type: "li", text: "bg-white dark:bg-gray-900 — light background, dark in dark mode" },
        { type: "li", text: "text-gray-900 dark:text-gray-100 — dark text, light in dark mode" },
        { type: "li", text: "border-gray-200 dark:border-gray-700 — adaptive borders" },
      ]},
      { title: "group and peer", content: [
        { type: "p", text: "The group and peer prefixes are among Tailwind's most powerful advanced features. They allow you to style elements based on the state of another element." },
        { type: "li", text: "group — adds group-hover: to all children when parent is hovered" },
        { type: "li", text: "peer — styles sibling elements based on a peer element's state" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Responsive design uses breakpoint prefixes: sm:, md:, lg:, xl:, 2xl:" },
        { type: "li", text: "Interactive states use hover:, focus:, active:, disabled:" },
        { type: "li", text: "Dark mode uses the dark: prefix with the 'class' strategy" },
        { type: "li", text: "group and peer enable parent/sibling-based styling" },
      ]}
    ],
    quiz: [
      { question: "What does md:text-lg mean?", options: ["Text is large only on tablets and above", "Text is always large", "Text is large on mobile", "Text has margin"], explanation: "md:text-lg applies font-size: 1.125rem only on screens 768px and above." },
      { question: "How do you activate dark mode in Tailwind?", options: ["Add dark-mode class to body", "Add dark class to html or body", "Use prefers-color-scheme media query", "Set a JavaScript variable"], explanation: "Tailwind uses the 'class' strategy by default — add the dark class to the html or body element." },
      { question: "What does group-hover: do?", options: ["Hides the element on hover", "Applies styles to children when parent is hovered", "Makes the element a group", "Enables group selection"], explanation: "group-hover: applies styles to child elements when the parent with the group class is hovered." }
    ],
    challenge: { title: "Build a Dark Mode Toggle Component", description: "Create a component that supports both light and dark modes with smooth transitions, using Tailwind's dark: prefix and responsive design." },
    cheatSheet: { title: "Responsive, States & Dark Mode Cheat Sheet", items: [
      { term: "sm: / md: / lg: / xl:", definition: "Responsive breakpoints" },
      { term: "hover:", definition: "Mouse hover state" },
      { term: "focus-visible:", definition: "Keyboard focus state" },
      { term: "active:", definition: "Click/press state" },
      { term: "disabled:", definition: "Disabled state" },
      { term: "dark:", definition: "Dark mode styles" },
      { term: "group-hover:", definition: "Parent hover → child styles" },
      { term: "peer-checked:", definition: "Sibling checkbox checked" },
      { term: "first: / last:", definition: "First/last child selectors" },
      { term: "transition-colors", definition: "Smooth color transitions" }
    ]}
  },
  fr: {
    sections: [
      { title: "Design responsive", content: [
        { type: "p", text: "Le design responsive signifie que votre site fonctionne parfaitement sur toutes les tailles d'écran — des petits téléphones aux grands moniteurs." },
        { type: "callout", title: "Approche Mobile-First", text: "Tailwind suit une approche Mobile-First — vous concevez d'abord pour les petits écrans, puis ajoutez des modifications pour les écrans plus grands." },
        { type: "li", text: "sm: — min-width: 640px (grand téléphone)" },
        { type: "li", text: "md: — min-width: 768px (tablette)" },
        { type: "li", text: "lg: — min-width: 1024px (ordinateur)" },
        { type: "li", text: "xl: — min-width: 1280px (bureau)" },
      ]},
      { title: "Exemples responsive pratiques", content: [
        { type: "li", text: "Navigation responsive — menu hamburger sur mobile, liens complets sur bureau" },
        { type: "li", text: "Typographie responsive — plus petite sur mobile, plus grande sur bureau" },
        { type: "li", text: "Mise en page responsive — pile sur mobile, côte à côte sur bureau" },
      ]},
      { title: "États interactifs", content: [
        { type: "p", text: "Tailwind fournit des préfixes pour les différents états d'un élément." },
        { type: "li", text: "hover: — quand la souris est sur l'élément" },
        { type: "li", text: "focus: / focus-visible: — quand l'élément a le focus" },
        { type: "li", text: "active: — pendant le clic" },
        { type: "li", text: "disabled: — quand l'élément est désactivé" },
      ]},
      { title: "Mode sombre", content: [
        { type: "p", text: "Le mode sombre est devenu une fonctionnalité essentielle. Tailwind fournit le préfixe dark: pour spécifier des styles différents." },
        { type: "callout", title: "Fonctionnement du mode sombre", text: "Tailwind utilise la stratégie 'class' par défaut. Le mode sombre est activé en ajoutant la classe 'dark' à l'élément <html> ou <body>." },
      ]},
      { title: "group et peer", content: [
        { type: "p", text: "Les préfixes group et peer parmi les fonctionnalités avancées les plus puissantes de Tailwind." },
        { type: "li", text: "group — applique group-hover: à tous les enfants quand le parent est survolé" },
        { type: "li", text: "peer — stylise les éléments frères basés sur l'état d'un élément peer" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Le design responsive utilise les préfixes de breakpoints : sm:, md:, lg:, xl:" },
        { type: "li", text: "Les états interactifs utilisent hover:, focus:, active:, disabled:" },
        { type: "li", text: "Le mode sombre utilise le préfixe dark: avec la stratégie 'class'" },
      ]}
    ],
    quiz: [
      { question: "Que signifie md:text-lg ?", options: ["Le texte est grand uniquement sur tablette et au-dessus", "Le texte est toujours grand", "Le texte est grand sur mobile", "Le texte a une marge"], explanation: "md:text-lg applique font-size: 1.125rem uniquement sur les écrans de 768px et plus." },
      { question: "Comment activer le mode sombre dans Tailwind ?", options: ["Ajouter la classe dark-mode au body", "Ajouter la classe dark au html ou body", "Utiliser prefers-color-scheme", "Définir une variable JavaScript"], explanation: "Tailwind utilise la stratégie 'class' — ajoutez la classe dark à l'élément html ou body." },
      { question: "Que fait group-hover: ?", options: ["Cache l'élément au survol", "Applique des styles aux enfants quand le parent est survolé", "Rend l'élément un groupe", "Active la sélection de groupe"], explanation: "group-hover: applique des styles aux éléments enfants quand le parent avec la classe group est survolé." }
    ],
    challenge: { title: "Créer un composant bascule mode sombre", description: "Créez un composant supportant les modes clair et sombre avec des transitions fluides." },
    cheatSheet: { title: "Fiche mémo Responsive, États & Mode sombre", items: [
      { term: "sm: / md: / lg: / xl:", definition: "Breakpoints responsive" },
      { term: "hover:", definition: "État survol souris" },
      { term: "focus-visible:", definition: "État focus clavier" },
      { term: "active:", definition: "État clic" },
      { term: "disabled:", definition: "État désactivé" },
      { term: "dark:", definition: "Styles mode sombre" },
      { term: "group-hover:", definition: "Survole parent → styles enfants" },
      { term: "transition-colors", definition: "Transitions de couleurs fluides" }
    ]}
  },
  de: {
    sections: [
      { title: "Responsives Design", content: [
        { type: "p", text: "Responsives Design bedeutet, dass Ihre Website auf allen Bildschirmgrößen perfekt funktioniert — von kleinen Telefone bis zu großen Monitoren." },
        { type: "callout", title: "Mobile-First-Ansatz", text: "Tailwind folgt einem Mobile-First-Ansatz — Sie gestalten zuerst für kleine Bildschirme und fügen dann Änderungen für größere Bildschirme hinzu." },
        { type: "li", text: "sm: — min-width: 640px (großes Telefon)" },
        { type: "li", text: "md: — min-width: 768px (Tablet)" },
        { type: "li", text: "lg: — min-width: 1024px (Laptop/Desktop)" },
        { type: "li", text: "xl: — min-width: 1280px (Desktop)" },
      ]},
      { title: "Praktische responsive Beispiele", content: [
        { type: "li", text: "Responsive Navigation — Hamburger-Menü auf Mobilgeräten, vollständige Links auf dem Desktop" },
        { type: "li", text: "Responsive Typografie — kleiner auf Mobilgeräten, größer auf Desktop" },
        { type: "li", text: "Responsive Layout — gestapelt auf Mobilgeräten, nebeneinander auf Desktop" },
      ]},
      { title: "Interaktive Zustände", content: [
        { type: "p", text: "Tailwind bietet Präfixe für verschiedene Zustände, in denen ein Element sein kann." },
        { type: "li", text: "hover: — wenn die Maus über dem Element ist" },
        { type: "li", text: "focus: / focus-visible: — wenn das Element Fokus hat" },
        { type: "li", text: "active: — beim Klicken" },
        { type: "li", text: "disabled: — wenn das Element deaktiviert ist" },
      ]},
      { title: "Dunkelmodus", content: [
        { type: "p", text: "Der Dunkelmodus ist zu einem wesentlichen Merkmal moderner Webanwendungen geworden. Tailwind bietet das dark: Präfix." },
        { type: "callout", title: "Funktionsweise des Dunkelmodus", text: "Tailwind verwendet standardmäßig die 'class'-Strategie. Der Dunkelmodus wird aktiviert, indem die Klasse 'dark' zum <html>- oder <body>-Element hinzugefügt wird." },
      ]},
      { title: "group und peer", content: [
        { type: "p", text: "Die group und peer Präfixe gehören zu den leistungsstärksten erweiterten Funktionen von Tailwind." },
        { type: "li", text: "group — wendet group-hover: auf alle Kinder an, wenn das Elternteil gehovered wird" },
        { type: "li", text: "peer — gestaltet Geschwisterelemente basierend auf dem Zustand eines Peer-Elements" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Responsives Design verwendet Breakpoint-Präfixe: sm:, md:, lg:, xl:" },
        { type: "li", text: "Interaktive Zustände verwenden hover:, focus:, active:, disabled:" },
        { type: "li", text: "Dunkelmodus verwendet das dark: Präfix mit der 'class'-Strategie" },
      ]}
    ],
    quiz: [
      { question: "Was bedeutet md:text-lg?", options: ["Text ist nur auf Tablets und größer groß", "Text ist immer groß", "Text ist auf Mobilgeräten groß", "Text hat einen Rand"], explanation: "md:text-lg wendet font-size: 1.125rem nur auf Bildschirmen mit 768px und mehr an." },
      { question: "Wie aktiviert man den Dunkelmodus in Tailwind?", options: ["dark-mode-Klasse zum body hinzufügen", "dark-Klasse zum html oder body hinzufügen", "prefers-color-scheme verwenden", "JavaScript-Variable setzen"], explanation: "Tailwind verwendet die 'class'-Strategie — fügen Sie die dark-Klasse zum html- oder body-Element hinzu." },
      { question: "Was macht group-hover:?", options: ["Versteckt das Element beim Hover", "Wendet Stile auf Kinder an, wenn das Elternteil gehovered wird", "Macht das Element zu einer Gruppe", "Aktiviert die Gruppenauswahl"], explanation: "group-hover: wendet Stile auf Kinderelemente an, wenn das Elternteil mit der group-Klasse gehovered wird." }
    ],
    challenge: { title: "Dunkelmodus-Umschaltkomponente erstellen", description: "Erstellen Sie eine Komponente, die sowohl hellen als auch dunklen Modus mit fließenden Übergängen unterstützt." },
    cheatSheet: { title: "Responsive, Zustände & Dunkelmodus Spickzettel", items: [
      { term: "sm: / md: / lg: / xl:", definition: "Responsive Breakpoints" },
      { term: "hover:", definition: "Maus-Hover-Zustand" },
      { term: "focus-visible:", definition: "Tastatur-Fokus-Zustand" },
      { term: "active:", definition: "Klick-Zustand" },
      { term: "disabled:", definition: "Deaktivierter Zustand" },
      { term: "dark:", definition: "Dunkelmodus-Stile" },
      { term: "group-hover:", definition: "Elternteil-Hover → Kinder-Stile" },
      { term: "transition-colors", definition: "Sanfte Farbübergänge" }
    ]}
  }
};
export default translations;
