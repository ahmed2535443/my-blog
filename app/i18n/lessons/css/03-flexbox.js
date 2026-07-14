const translations = {
  en: {
    sections: [
      {
        title: "What is Flexbox",
        content: [
          { type: "p", text: "<strong>Flexbox</strong> (Flexible Box Layout) is a CSS layout system designed to easily arrange elements inside a single container, whether horizontally or vertically, with smart handling of available space and gaps." },
          { type: "p", text: "Flexbox is activated by adding <code>display: flex</code> to the container. Any child elements inside become flex items automatically." },
          { type: "callout", title: "Important Note", text: "Flexbox works on two axes: the main axis and the cross axis. The main axis direction depends on the <code>flex-direction</code> value." }
        ]
      },
      {
        title: "Why Use Flexbox",
        content: [
          { type: "p", text: "Before Flexbox, arranging elements on a webpage relied on old and complex techniques. Here are the main reasons to use Flexbox:" },
          { type: "li", text: "<strong>Easy centering</strong> - Center an element horizontally and vertically in one line" },
          { type: "li", text: "<strong>Flexible distribution</strong> - Distribute space between elements easily with justify-content" },
          { type: "li", text: "<strong>Equal height columns</strong> - Create columns with equal height automatically" },
          { type: "li", text: "<strong>Flexible ordering</strong> - Change element order using the order property without modifying HTML" },
          { type: "li", text: "<strong>Responsiveness</strong> - Adapt design to different screen sizes using flex-wrap" },
          { type: "li", text: "<strong>Code simplification</strong> - Less and clearer CSS code compared to old methods" }
        ]
      },
      {
        title: "The Problem It Solves",
        content: [
          { type: "p", text: "Before Flexbox, developers faced many problems in web page layout:" },
          { type: "callout-accent", title: "Problem 1: Difficult Centering", text: "Centering an element horizontally and vertically required complex code with position and transform." },
          { type: "callout-accent", title: "Problem 2: Equal Height Columns", text: "Creating columns of equal height required display: table or complex manual calculations." },
          { type: "callout-accent", title: "Problem 3: Floated Elements", text: "Using float: left caused content flow issues and missing clearfix hacks." }
        ]
      },
      {
        title: "Simple Explanation",
        content: [
          { type: "p", text: "Imagine you have a box (container) with several balls (elements) inside. Flexbox lets you fully control how these balls are distributed inside the box:" },
          { type: "li", text: "<strong>Container properties:</strong> flex-direction, flex-wrap, justify-content, align-items, gap" },
          { type: "li", text: "<strong>Item properties:</strong> flex-grow, flex-shrink, flex-basis, flex, align-self, order" },
          { type: "callout", title: "Key Concept", text: "Properties added to the container control all child elements collectively. Properties added to a specific element control only that element's behavior." }
        ]
      },
      {
        title: "Behind the Scenes",
        content: [
          { type: "p", text: "When Flexbox is applied to a container, the browser engine does the following:" },
          { type: "li", text: "<strong>Step 1: Axis Definition</strong> - The browser determines the main axis based on flex-direction (default: row = horizontal)" },
          { type: "li", text: "<strong>Step 2: Space Calculation</strong> - The browser calculates available space, subtracts padding and borders" },
          { type: "li", text: "<strong>Step 3: Space Distribution</strong> - Extra space is distributed via flex-grow, missing space handled by flex-shrink" },
          { type: "li", text: "<strong>Step 4: Alignment</strong> - Elements are aligned on the cross axis using align-items" }
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Mistake 1: Forgetting flex-wrap</strong> - Without it, elements won't wrap on small screens" },
          { type: "li", text: "<strong>Mistake 2: Using margin instead of gap</strong> - Gap is cleaner and more reliable" },
          { type: "li", text: "<strong>Mistake 3: Confusing justify-content and align-items</strong> - Main axis vs cross axis" },
          { type: "li", text: "<strong>Mistake 4: Forgetting flex-basis</strong> - Using flex-grow without flex-basis can cause unexpected results" },
          { type: "li", text: "<strong>Mistake 5: Using position for centering</strong> - Flexbox or place-items is simpler" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Always use the flex shorthand instead of individual properties" },
          { type: "li", text: "2. Use gap instead of margin for spacing between items" },
          { type: "li", text: "3. Think about axes first - define main and cross axes before writing code" },
          { type: "li", text: "4. Add flex-wrap: wrap for responsive design" },
          { type: "li", text: "5. Use place-items: center for complete centering" },
          { type: "li", text: "6. Avoid excessive nesting - keep nesting levels low" }
        ]
      }
    ],
    quiz: [
      {
        question: "In Flexbox, which axis does justify-content control?",
        options: [
          "Vertical axis only",
          "Horizontal axis only",
          "Main axis - horizontal or vertical depending on flex-direction",
          "Both axes at the same time"
        ],
        correctAnswer: 2,
        explanation: "justify-content controls distribution of items on the main axis. This axis depends on flex-direction: if row, the main axis is horizontal; if column, the main axis is vertical."
      },
      {
        question: "What is the difference between flex: 1 and flex-grow: 1?",
        options: [
          "No difference, they are exactly equal",
          "flex: 1 equals flex-grow: 1 + flex-shrink: 1 + flex-basis: 0%",
          "flex: 1 equals flex-grow: 1 + flex-shrink: 0 + flex-basis: auto",
          "flex-grow: 1 includes flex-shrink as well"
        ],
        correctAnswer: 1,
        explanation: "flex is a shorthand for three properties: flex-grow, flex-shrink, and flex-basis. flex: 1 means flex-grow: 1, flex-shrink: 1, and flex-basis: 0%. flex-grow: 1 alone won't change flex-shrink and flex-basis values."
      }
    ],
    challenge: {
      title: "Build a Complete Navbar with Flexbox",
      description: "Create a navbar with a logo on the left, links in the center, and a login button on the right. Use Flexbox properties to achieve this layout.",
      requirements: [
        "Use display: flex on the main container",
        "Place logo on left, button on right, links in center",
        "Add spacing between elements using gap",
        "Make links equal height with logo and button",
        "Add flex-wrap: wrap for small screen responsiveness"
      ]
    },
    cheatSheet: {
      title: "Flexbox + place-items Reference",
      items: [
        {
          title: "Flex Container Properties",
          content: `| Property | Values | Description |
|----------|--------|-------------|
| display: flex | - | Activates Flexbox |
| flex-direction | row | row-reverse | column | column-reverse | Sets main axis direction |
| flex-wrap | nowrap | wrap | wrap-reverse | Controls item wrapping |
| justify-content | flex-start | flex-end | center | space-between | space-around | space-evenly | Distributes items on main axis |
| align-items | flex-start | flex-end | center | stretch | baseline | Aligns items on cross axis |
| gap | <length> | Space between items (better than margin) |`
        },
        {
          title: "Flex Item Properties",
          content: `| Property | Values | Description |
|----------|--------|-------------|
| flex-grow | 0 (default) | <number> | Item's ability to grow |
| flex-shrink | 1 (default) | <number> | Item's ability to shrink |
| flex-basis | auto | <length> | Item's base size before flex-grow/shrink |
| flex | shorthand: grow shrink basis | Shorthand for all three |
| align-self | auto | flex-start | flex-end | center | stretch | Override align-items |
| order | 0 (default) | <integer> | Change element order |`
        },
        {
          title: "Common Patterns",
          content: `Full Center: display: flex; justify-content: center; align-items: center;
Simple Center: display: grid; place-items: center;
Navbar: display: flex; justify-content: space-between; align-items: center;
Equal Columns: display: flex; align-items: stretch;
Wrapping Content: display: flex; flex-wrap: wrap; gap: 1rem;`
        }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que Flexbox",
        content: [
          { type: "p", text: "<strong>Flexbox</strong> (Flexible Box Layout) est un système de mise en page CSS conçu pour arranger facilement les éléments à l'intérieur d'un seul conteneur, que ce soit horizontalement ou verticalement, avec une gestion intelligente de l'espace disponible et des écarts." },
          { type: "p", text: "Flexbox est activé en ajoutant <code>display: flex</code> au conteneur. Tous les éléments enfants deviennent automatiquement des éléments flex." },
          { type: "callout", title: "Note importante", text: "Flexbox fonctionne sur deux axes : l'axe principal et l'axe transversal. La direction de l'axe principal dépend de la valeur de <code>flex-direction</code>." }
        ]
      },
      {
        title: "Pourquoi utiliser Flexbox",
        content: [
          { type: "p", text: "Avant Flexbox, l'arrangement des éléments sur une page web reposait sur des techniques anciennes et complexes. Voici les principales raisons d'utiliser Flexbox :" },
          { type: "li", text: "<strong>Centrage facile</strong> - Centrer un élément horizontalement et verticalement en une ligne" },
          { type: "li", text: "<strong>Distribution flexible</strong> - Distribuer l'espace facilement avec justify-content" },
          { type: "li", text: "<strong>Colonnes de hauteur égale</strong> - Créer des colonnes de même hauteur automatiquement" },
          { type: "li", text: "<strong>Ordre flexible</strong> - Changer l'ordre des éléments avec la propriété order" },
          { type: "li", text: "<strong>Réactivité</strong> - Adapter le design à différentes tailles d'écran avec flex-wrap" },
          { type: "li", text: "<strong>Simplification du code</strong> - Moins de CSS et plus clair" }
        ]
      },
      {
        title: "Le problème qu'il résout",
        content: [
          { type: "p", text: "Avant Flexbox, les développeurs faisaient face à de nombreux problèmes de mise en page :" },
          { type: "callout-accent", title: "Problème 1 : Centrage difficile", text: "Centrer un élément nécessitait du code complexe avec position et transform." },
          { type: "callout-accent", title: "Problème 2 : Colonnes de hauteur égale", text: "Créer des colonnes de même hauteur nécessitait display: table ou des calculs manuels complexes." },
          { type: "callout-accent", title: "Problème 3 : Éléments flottants", text: "L'utilisation de float: left causait des problèmes de flux de contenu." }
        ]
      },
      {
        title: "Explication simple",
        content: [
          { type: "p", text: "Imaginez que vous avez une boîte (conteneur) avec plusieurs balles (éléments) à l'intérieur. Flexbox vous permet de contrôler complètement la distribution de ces balles :" },
          { type: "li", text: "<strong>Propriétés du conteneur :</strong> flex-direction, flex-wrap, justify-content, align-items, gap" },
          { type: "li", text: "<strong>Propriétés de l'élément :</strong> flex-grow, flex-shrink, flex-basis, flex, align-self, order" }
        ]
      },
      {
        title: "En coulisses",
        content: [
          { type: "p", text: "Lorsque Flexbox est appliqué à un conteneur, le moteur du navigateur fait ce qui suit :" },
          { type: "li", text: "<strong>Étape 1 : Définition des axes</strong> - Le navigateur détermine l'axe principal basé sur flex-direction" },
          { type: "li", text: "<strong>Étape 2 : Calcul de l'espace</strong> - Le navigateur calcule l'espace disponible" },
          { type: "li", text: "<strong>Étape 3 : Distribution de l'espace</strong> - L'espace supplémentaire est distribué via flex-grow" },
          { type: "li", text: "<strong>Étape 4 : Alignement</strong> - Les éléments sont alignés sur l'axe transversal avec align-items" }
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Erreur 1 : Oublier flex-wrap</strong> - Sans lui, les éléments ne s'enroulent pas sur petits écrans" },
          { type: "li", text: "<strong>Erreur 2 : Utiliser margin au lieu de gap</strong> - Gap est plus propre et fiable" },
          { type: "li", text: "<strong>Erreur 3 : Confondre justify-content et align-items</strong> - Axe principal vs transversal" },
          { type: "li", text: "<strong>Erreur 4 : Oublier flex-basis</strong> - Utiliser flex-grow sans flex-basis peut causer des résultats inattendus" },
          { type: "li", text: "<strong>Erreur 5 : Utiliser position pour centrer</strong> - Flexbox ou place-items est plus simple" }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "1. Utilisez toujours le raccourci flex au lieu des propriétés individuelles" },
          { type: "li", text: "2. Utilisez gap au lieu de margin pour l'espacement" },
          { type: "li", text: "3. Pensez aux axes en premier - définissez les axes avant d'écrire le code" },
          { type: "li", text: "4. Ajoutez flex-wrap: wrap pour le design responsive" },
          { type: "li", text: "5. Utilisez place-items: center pour le centrage complet" },
          { type: "li", text: "6. Évitez l'imbriquage excessif" }
        ]
      }
    ],
    quiz: [
      {
        question: "Dans Flexbox, quel axe contrôle justify-content ?",
        options: [
          "L'axe vertical uniquement",
          "L'axe horizontal uniquement",
          "L'axe principal - horizontal ou vertical selon flex-direction",
          "Les deux axes en même temps"
        ],
        correctAnswer: 2,
        explanation: "justify-content contrôle la distribution des éléments sur l'axe principal. Cet axe dépend de flex-direction : si row, l'axe principal est horizontal ; si column, l'axe principal est vertical."
      },
      {
        question: "Quelle est la différence entre flex: 1 et flex-grow: 1 ?",
        options: [
          "Pas de différence, ils sont exactement égaux",
          "flex: 1 égale flex-grow: 1 + flex-shrink: 1 + flex-basis: 0%",
          "flex: 1 égale flex-grow: 1 + flex-shrink: 0 + flex-basis: auto",
          "flex-grow: 1 inclut flex-shrink aussi"
        ],
        correctAnswer: 1,
        explanation: "flex est un raccourci pour trois propriétés : flex-grow, flex-shrink et flex-basis. flex: 1 signifie flex-grow: 1, flex-shrink: 1 et flex-basis: 0%. flex-grow: 1 seul ne changera pas les valeurs de flex-shrink et flex-basis."
      }
    ],
    challenge: {
      title: "Construire une barre de navigation complète avec Flexbox",
      description: "Créez une barre de navigation avec un logo à gauche, des liens au centre et un bouton de connexion à droite. Utilisez les propriétés Flexbox pour réaliser cette mise en page."
    },
    cheatSheet: {
      title: "Référence Flexbox + place-items",
      items: [
        {
          title: "Propriétés du conteneur Flex",
          content: `| Propriété | Valeurs | Description |
|-----------|---------|-------------|
| display: flex | - | Active Flexbox |
| flex-direction | row | column | Direction de l'axe principal |
| justify-content | center | space-between | space-around | Distribution sur l'axe principal |
| align-items | center | stretch | Alignement sur l'axe transversal |
| gap | <longueur> | Espace entre les éléments |`
        },
        {
          title: "Propriétés de l'élément Flex",
          content: `| Propriété | Valeurs | Description |
|-----------|---------|-------------|
| flex-grow | 0 (défaut) | Capacité de l'élément à grandir |
| flex-shrink | 1 (défaut) | Capacité de l'élément à rétrécir |
| flex-basis | auto | Taille de base avant flex-grow/shrink |
| flex | raccourci: grow shrink basis | Raccourci pour les trois |
| align-self | center | Surcharger align-items |
| order | 0 (défaut) | Changer l'ordre des éléments |`
        }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was ist Flexbox",
        content: [
          { type: "p", text: "<strong>Flexbox</strong> (Flexible Box Layout) ist ein CSS-Layoutsystem, das entwickelt wurde, um Elemente innerhalb eines einzigen Containers einfach anzuordnen, ob horizontal oder vertikal, mit intelligenter Handhabung des verfügbaren Platzes und der Abstände." },
          { type: "p", text: "Flexbox wird aktiviert, indem <code>display: flex</code> zum Container hinzugefügt wird. Jedes Kind-Element wird automatisch zu einem Flex-Item." },
          { type: "callout", title: "Wichtiger Hinweis", text: "Flexbox arbeitet auf zwei Achsen: der Hauptachse und der Querachse. Die Richtung der Hauptachse hängt vom <code>flex-direction</code>-Wert ab." }
        ]
      },
      {
        title: "Warum Flexbox verwenden",
        content: [
          { type: "p", text: "Vor Flexbox basierte die Anordnung von Elementen auf einer Webseite auf alten und komplexen Techniken. Hier sind die Hauptgründe für die Verwendung von Flexbox:" },
          { type: "li", text: "<strong>Einfaches Zentrieren</strong> - Element horizontal und vertikal in einer Zeile zentrieren" },
          { type: "li", text: "<strong>Flexible Verteilung</strong> - Platz zwischen Elementen einfach mit justify-content verteilen" },
          { type: "li", text: "<strong>Gleiche Spaltenhöhe</strong> - Spalten automatisch mit gleicher Höhe erstellen" },
          { type: "li", text: "<strong>Flexible Reihenfolge</strong> - Element-Reihenfolge mit der order-Eigenschaft ändern" },
          { type: "li", text: "<strong>Reaktionsfähigkeit</strong> - Design an verschiedene Bildschirmgrößen anpassen" },
          { type: "li", text: "<strong>Code-Vereinfachung</strong> - Weniger und klarerer CSS-Code" }
        ]
      },
      {
        title: "Das Problem, das es löst",
        content: [
          { type: "p", text: "Vor Flexbox hatten Entwickler viele Probleme bei der Webseiten-Layout:" },
          { type: "callout-accent", title: "Problem 1: Schwieriges Zentrieren", text: "Ein Element zu zentrieren erforderte komplexen Code mit position und transform." },
          { type: "callout-accent", title: "Problem 2: Gleiche Spaltenhöhe", text: "Spalten mit gleicher Höhe zu erstellen erforderte display: table oder komplexe manuelle Berechnungen." },
          { type: "callout-accent", title: "Problem 3: Schwebende Elemente", text: "Die Verwendung von float: left verursachte Probleme mit dem Inhaltsfluss." }
        ]
      },
      {
        title: "Einfache Erklärung",
        content: [
          { type: "p", text: "Stellen Sie sich vor, Sie haben eine Box (Container) mit mehreren Bällen (Elementen) darin. Flexbox gibt Ihnen volle Kontrolle über die Verteilung dieser Bälle :" },
          { type: "li", text: "<strong>Container-Eigenschaften:</strong> flex-direction, flex-wrap, justify-content, align-items, gap" },
          { type: "li", text: "<strong>Item-Eigenschaften:</strong> flex-grow, flex-shrink, flex-basis, flex, align-self, order" }
        ]
      },
      {
        title: "Hinter den Kulissen",
        content: [
          { type: "p", text: "Wenn Flexbox auf einen Container angewendet wird, macht die Browser-Engine Folgendes:" },
          { type: "li", text: "<strong>Schritt 1: Achsendefinition</strong> - Der Browser bestimmt die Hauptachse basierend auf flex-direction" },
          { type: "li", text: "<strong>Schritt 2: Platzberechnung</strong> - Der Browser berechnet den verfügbaren Platz" },
          { type: "li", text: "<strong>Schritt 3: Platzverteilung</strong> - Zusätzlicher Platz wird über flex-grow verteilt" },
          { type: "li", text: "<strong>Schritt 4: Ausrichtung</strong> - Elemente werden auf der Querachse mit align-items ausgerichtet" }
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Fehler 1: flex-wrap vergessen</strong> - Ohne es wickeln Elemente nicht auf kleinen Bildschirmen" },
          { type: "li", text: "<strong>Fehler 2: margin statt gap verwenden</strong> - Gap ist sauberer und zuverlässiger" },
          { type: "li", text: "<strong>Fehler 3: justify-content und align-items verwechseln</strong> - Hauptachse vs Querachse" },
          { type: "li", text: "<strong>Fehler 4: flex-basis vergessen</strong> - flex-grow ohne flex-basis kann unerwartete Ergebnisse verursachen" },
          { type: "li", text: "<strong>Fehler 5: position zum Zentrieren verwenden</strong> - Flexbox oder place-items ist einfacher" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Verwenden Sie immer die Flex-Shorthand statt einzelner Eigenschaften" },
          { type: "li", text: "2. Verwenden Sie gap statt margin für Abstände" },
          { type: "li", text: "3. Denken Sie zuerst an die Achsen - definieren Sie Haupt- und Querachse vor dem Codieren" },
          { type: "li", text: "4. Fügen Sie flex-wrap: wrap für responsives Design hinzu" },
          { type: "li", text: "5. Verwenden Sie place-items: center für vollständige Zentrierung" },
          { type: "li", text: "6. Vermeiden Sie übermäßige Verschachtelung" }
        ]
      }
    ],
    quiz: [
      {
        question: "In Flexbox, welche Achse steuert justify-content?",
        options: [
          "Nur die vertikale Achse",
          "Nur die horizontale Achse",
          "Die Hauptachse - horizontal oder vertikal je nach flex-direction",
          "Beide Achsen gleichzeitig"
        ],
        correctAnswer: 2,
        explanation: "justify-content steuert die Verteilung von Elementen auf der Hauptachse. Diese Achse hängt von flex-direction ab: bei row ist die Hauptachse horizontal; bei column ist die Hauptachse vertikal."
      },
      {
        question: "Was ist der Unterschied zwischen flex: 1 und flex-grow: 1?",
        options: [
          "Kein Unterschied, sie sind genau gleich",
          "flex: 1 gleich flex-grow: 1 + flex-shrink: 1 + flex-basis: 0%",
          "flex: 1 gleich flex-grow: 1 + flex-shrink: 0 + flex-basis: auto",
          "flex-grow: 1 beinhaltet auch flex-shrink"
        ],
        correctAnswer: 1,
        explanation: "flex ist eine Kurzform für drei Eigenschaften: flex-grow, flex-shrink und flex-basis. flex: 1 bedeutet flex-grow: 1, flex-shrink: 1 und flex-basis: 0%. flex-grow: 1 allein ändert nicht die Werte von flex-shrink und flex-basis."
      }
    ],
    challenge: {
      title: "Eine vollständige Navigationsleiste mit Flexbox erstellen",
      description: "Erstellen Sie eine Navigationsleiste mit einem Logo links, Links in der Mitte und einem Login-Button rechts. Verwenden Sie Flexbox-Eigenschaften, um dieses Layout zu erreichen."
    },
    cheatSheet: {
      title: "Flexbox + place-items Referenz",
      items: [
        {
          title: "Flex Container Eigenschaften",
          content: `| Eigenschaft | Werte | Beschreibung |
|-------------|-------|-------------|
| display: flex | - | Aktiviert Flexbox |
| flex-direction | row | column | Legt Hauptachse fest |
| justify-content | center | space-between | Verteilt auf Hauptachse |
| align-items | center | stretch | Richtet auf Querachse aus |
| gap | <Länge> | Abstand zwischen Elementen |`
        },
        {
          title: "Flex Item Eigenschaften",
          content: `| Eigenschaft | Werte | Beschreibung |
|-------------|-------|-------------|
| flex-grow | 0 (Standard) | Wachstumsfähigkeit |
| flex-shrink | 1 (Standard) | Schrumpffähigkeit |
| flex-basis | auto | Grundgröße vor flex-grow/shrink |
| flex | Kurzform: grow shrink basis | Kurzform für alle drei |
| align-self | center | Align-items überschreiben |
| order | 0 (Standard) | Reihenfolge ändern |`
        }
      ]
    }
  }
};
export default translations;
