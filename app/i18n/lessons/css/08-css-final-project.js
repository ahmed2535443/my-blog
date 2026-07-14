const translations = {
  en: {
    sections: [
      {
        title: "Project Introduction",
        content: [
          { type: "p", text: "In this final lesson, we will build together a professional <strong>Landing Page</strong> that combines <strong>everything we've learned</strong> in the modern CSS stage. This project is not just an exercise — it's a real implementation you can use as a foundation for any future project." },
          { type: "p", text: "We will use all modern CSS techniques: variables, grid and flex layouts, dark and light themes, animations, logical properties, fluid units, and advanced colors." },
          { type: "p", text: "We won't write HTML from scratch — we focus on CSS only. But we'll build the structure first to understand how it's styled." }
        ]
      },
      {
        title: "What We'll Learn",
        content: [
          { type: "li", text: "<strong>Responsive Design</strong> using <code>clamp()</code> instead of many media queries" },
          { type: "li", text: "<strong>CSS Grid</strong> with <code>auto-fit</code> and <code>minmax</code> for fluid grids" },
          { type: "li", text: "<strong>Flexbox</strong> for navbar and fluid distribution" },
          { type: "li", text: "<strong>CSS Variables + light-dark()</strong> for an integrated theme system" },
          { type: "li", text: "<strong>Animations & Effects</strong> using Transitions and Keyframes" },
          { type: "li", text: "<strong>Container Queries</strong> to make cards adapt to their container" },
          { type: "li", text: "<strong>Logical Properties</strong> (margin-inline, padding-block) for RTL support" },
          { type: "li", text: "<strong>Modern Colors</strong> using <code>oklch()</code> and <code>color-mix()</code>" },
          { type: "li", text: "<strong>CSS Nesting</strong> for natural code organization" },
          { type: "li", text: "<strong>@layer</strong> for organizing priorities and separating rules" }
        ]
      },
      {
        title: "Project Structure",
        content: [
          { type: "p", text: "The CSS file structure follows an organized layer pattern:" },
          { type: "li", text: "<strong>layers.css</strong> — defines layers in order" },
          { type: "li", text: "<strong>base.css</strong> — reset and imports" },
          { type: "li", text: "<strong>variables.css</strong> — variables and colors" },
          { type: "li", text: "<strong>components.css</strong> — components (cards, buttons, navbar)" },
          { type: "li", text: "<strong>layout.css</strong> — general layout (Grid + Flexbox)" },
          { type: "li", text: "<strong>utilities.css</strong> — helper classes" },
          { type: "li", text: "<strong>animations.css</strong> — animations and effects" },
          { type: "p", text: "We use <code>@layer</code> to organize priorities: each layer is predefined, and the layer higher in the order wins on conflict." }
        ]
      },
      {
        title: "Step 1: The Basics",
        content: [
          { type: "p", text: "We start by setting up variables and basic resets. This is the foundation of every modern CSS project." },
          { type: "li", text: "<strong>Layers definition</strong> — @layer base, components, layout, utilities, animations" },
          { type: "li", text: "<strong>Design tokens</strong> — oklch colors, light-dark() backgrounds, fluid typography with clamp()" },
          { type: "li", text: "<strong>CSS Reset</strong> — box-sizing, margin/padding reset, smooth scrolling, antialiased fonts" },
          { type: "li", text: "<strong>Selection styling</strong> — color-mix() for custom selection color" }
        ]
      },
      {
        title: "Step 2: Layout",
        content: [
          { type: "p", text: "Now we build the general layout: navbar, hero section, cards, and footer." },
          { type: "li", text: "<strong>Navbar</strong> — Flexbox with sticky positioning, backdrop-filter blur, logical properties" },
          { type: "li", text: "<strong>Hero Section</strong> — CSS Grid with place-items, clamp() for typography, radial-gradient background" },
          { type: "li", text: "<strong>Cards Grid</strong> — Grid with auto-fit/minmax for responsive columns" },
          { type: "li", text: "<strong>Feature Card</strong> — Container Queries for adaptive layout within container" },
          { type: "li", text: "<strong>Footer</strong> — Grid with place-items, logical properties for borders" }
        ]
      },
      {
        title: "Step 3: Themes",
        content: [
          { type: "p", text: "We use <code>CSS Variables</code> with <code>light-dark()</code> to create a smart theme system without complex JavaScript." },
          { type: "li", text: "<strong>light-dark()</strong> — takes two values, automatically picks based on color-scheme" },
          { type: "li", text: "<strong>color-scheme</strong> — must be set on :root for light-dark() to work" },
          { type: "li", text: "<strong>JavaScript toggle</strong> — saves preference to localStorage" },
          { type: "li", text: "<strong>Custom themes</strong> — ocean, forest themes via data-theme attribute" }
        ]
      },
      {
        title: "Step 4: Animations",
        content: [
          { type: "p", text: "Animations bring life to the design. We use <code>Transitions</code> for simple effects and <code>Keyframes</code> for complex animations." },
          { type: "li", text: "<strong>Button hover</strong> — professional hover with translateY, box-shadow glow" },
          { type: "li", text: "<strong>Fade-in-up</strong> — hero elements animate in sequence with delays" },
          { type: "li", text: "<strong>Scroll Animations</strong> — animation-timeline: view() for scroll-triggered reveals" },
          { type: "li", text: "<strong>Float animation</strong> — continuous card icon float on hover" }
        ]
      },
      {
        title: "Summary & Tips",
        content: [
          { type: "li", text: "1. Always start with <strong>CSS Variables</strong> — they're the foundation of everything" },
          { type: "li", text: "2. Use <code>@layer</code> to organize code and avoid specificity issues" },
          { type: "li", text: "3. <code>clamp()</code> eliminates the need for many media queries — use it for fonts and sizes" },
          { type: "li", text: "4. <code>light-dark()</code> makes theme support extremely easy" },
          { type: "li", text: "5. Logical Properties (inline/block) make the site ready for Arabic and English" },
          { type: "li", text: "6. <code>Container Queries</code> make components truly flexible independently of the page" },
          { type: "li", text: "7. CSS Nesting makes code more natural to read and easier to maintain" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the difference between CSS Grid and Flexbox in this project?",
        options: [
          "No difference, they are equal",
          "Grid is for 2D layouts, Flexbox is for elements in a single row",
          "Grid is always faster in performance than Flexbox",
          "Flexbox doesn't support responsive design"
        ],
        correctAnswer: 1,
        explanation: "CSS Grid is designed for 2D layout (rows and columns together), while Flexbox is designed for 1D layout (one row or column). In the project, we use Grid for the card grid and full page, and Flexbox for the navbar and elements inside cards."
      },
      {
        question: "Why do we use oklch() instead of hex or rgb?",
        options: [
          "oklch is older and more supported in browsers",
          "oklch is optimized for human perception and produces more balanced colors",
          "hex and rgb don't support transparency",
          "oklch is smaller in file size"
        ],
        correctAnswer: 1,
        explanation: "oklch (OK Lightness-Chroma-Hue) is built on a color model optimized for human perception. It produces more balanced and consistent colors across different devices compared to hex or rgb. It also supports alpha channel directly."
      },
      {
        question: "What is the benefit of @layer in this project?",
        options: [
          "To add explanatory comments in CSS",
          "To define priority order between rule sets and avoid specificity issues",
          "To improve file loading speed",
          "To create 3D effects"
        ],
        correctAnswer: 1,
        explanation: "@layer defines the priority order between rule sets. Later-defined layers win on conflict. This simplifies specificity management and prevents the need to use !important."
      }
    ],
    challenge: {
      title: "Add a Testimonials Section",
      description: "Create a new section titled 'What Our Customers Say' with 3 animated testimonial cards. Each card should include: user image (placeholder), name, position, and testimonial. Use CSS Grid with auto-fit/minmax, add scroll-reveal animations, and make cards adapt with Container Queries."
    },
    cheatSheet: {
      title: "Complete Modern CSS Reference — All Lessons",
      items: [
        {
          title: "Lesson 1: CSS Fundamentals",
          content: `box-sizing: border-box — calculate padding + border inside width
rem — relative to root, ideal for fonts
em — relative to parent, compounds in nesting
clamp(min, preferred, max) — fluid value
oklch(L C H) — perceptually optimized color
color-mix(in oklch, c1, c2) — mix two colors
light-dark(#fff, #111) — auto color based on theme
Specificity: element < class < id < inline < !important`
        },
        {
          title: "Lesson 2: Text Control",
          content: `font-size: clamp(1rem, 2vw, 2rem) — fluid font
line-height: 1.6 — line height (no unit)
text-wrap: balance / pretty — balanced text distribution
font-variation-settings: "wght" 700 — variable font control`
        },
        {
          title: "Lesson 3: Flexbox",
          content: `display: flex — activate Flexbox
flex-direction: row / column — main axis direction
justify-content: space-between / center — main axis distribution
align-items: center / stretch — cross axis alignment
gap: 1rem — space between items
flex: 1 1 auto — grow/shrink/basis shorthand`
        },
        {
          title: "Lesson 4: CSS Grid",
          content: `display: grid — activate Grid
grid-template-columns: repeat(3, 1fr) — define columns
auto-fit: repeat(auto-fit, minmax(250px, 1fr)) — fluid columns
place-items: center — center horizontal + vertical (one line)
grid-column: span 2 — span two columns`
        },
        {
          title: "Lesson 5: Media Queries & Responsive",
          content: `min-width: @media (width >= 768px) — large screens+
Container Queries: @container (min-width: 400px) — adapt to container
container-type: inline-size — activate query
clamp() — alternative to media queries
Logical Properties: margin-inline / padding-block — RTL support`
        },
        {
          title: "Lesson 6: Colors & Themes",
          content: `CSS Variables: --name: value; — define variable
var(--name, fallback) — use variable
oklch(0.65 0.19 145) — modern color
color-mix(in oklch, blue 50%, red) — mix
light-dark(#fff, #111) — theme colors
color-scheme: light dark — enable both modes
@layer: @layer base, components; — organize priorities`
        },
        {
          title: "Lesson 7: Animations & Effects",
          content: `transition: all 0.3s ease — smooth transition
cubic-bezier(0.4, 0, 0.2, 1) — custom motion curve
@keyframes name { from {} to {} } — custom animations
animation: fade-in 0.5s ease both — apply animation
transform: translateY(-4px) / scale(1.05) — visual transform
animation-timeline: view() — scroll-driven animation
will-change: transform — animation performance hint
prefers-reduced-motion: reduce — respect reduced motion`
        },
        {
          title: "Lesson 8: Applied Project",
          content: `CSS Nesting — natural code organization within rules
@layer — separate base / components / layout / utilities
clamp() — fluid typography and sizes
CSS Grid + auto-fit/minmax — responsive card grid
Flexbox — navbar and element distribution
Container Queries — cards adapt to their container
Logical Properties — margin-inline / padding-block for RTL
light-dark() + Variables — integrated theme system
oklch + color-mix — modern and gradient colors
Transitions + Keyframes — smooth animations and effects
backdrop-filter — blur effect on navbar`
        }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Introduction au Projet",
        content: [
          { type: "p", text: "Dans cette leçon finale, nous allons construire ensemble une <strong>Landing Page</strong> professionnelle qui combine <strong>tout ce que nous avons appris</strong> dans le stage CSS moderne. Ce projet n'est pas juste un exercice — c'est une implémentation réelle que vous pouvez utiliser comme base." },
          { type: "p", text: "Nous utiliserons toutes les techniques CSS modernes : variables, grilles et flex layouts, thèmes sombres et clairs, animations, propriétés logiques, unités fluides et couleurs avancées." }
        ]
      },
      {
        title: "Ce que nous allons apprendre",
        content: [
          { type: "li", text: "<strong>Design Responsive</strong> avec <code>clamp()</code> au lieu de nombreuses media queries" },
          { type: "li", text: "<strong>CSS Grid</strong> avec <code>auto-fit</code> et <code>minmax</code> pour les grilles fluides" },
          { type: "li", text: "<strong>Flexbox</strong> pour la barre de navigation" },
          { type: "li", text: "<strong>CSS Variables + light-dark()</strong> pour un système de thèmes intégré" },
          { type: "li", text: "<strong>Animations</strong> avec Transitions et Keyframes" },
          { type: "li", text: "<strong>Container Queries</strong> pour des cartes adaptatives" },
          { type: "li", text: "<strong>Propriétés Logiques</strong> pour le support RTL" },
          { type: "li", text: "<strong>Couleurs Modernes</strong> avec <code>oklch()</code> et <code>color-mix()</code>" },
          { type: "li", text: "<strong>CSS Nesting</strong> pour une organisation naturelle du code" },
          { type: "li", text: "<strong>@layer</strong> pour organiser les priorités" }
        ]
      },
      {
        title: "Structure du Projet",
        content: [
          { type: "p", text: "La structure suit un modèle de couches organisé :" },
          { type: "li", text: "<strong>layers.css</strong> — définit les couches par ordre" },
          { type: "li", text: "<strong>base.css</strong> — réinitialisation et imports" },
          { type: "li", text: "<strong>variables.css</strong> — variables et couleurs" },
          { type: "li", text: "<strong>components.css</strong> — composants (cartes, boutons, navbar)" },
          { type: "li", text: "<strong>layout.css</strong> — mise en page générale (Grid + Flexbox)" },
          { type: "li", text: "<strong>animations.css</strong> — animations et effets" }
        ]
      },
      {
        title: "Étape 1 : Les Bases",
        content: [
          { type: "p", text: "Nous commençons par configurer les variables et les réinitialisations de base." },
          { type: "li", text: "<strong>Définition des couches</strong> — @layer base, components, layout, utilities, animations" },
          { type: "li", text: "<strong>Design tokens</strong> — couleurs oklch, light-dark(), typographie fluide avec clamp()" },
          { type: "li", text: "<strong>Réinitialisation CSS</strong> — box-sizing, margins/paddings, défilement fluide" }
        ]
      },
      {
        title: "Étape 2 : Mise en Page",
        content: [
          { type: "p", text: "Nous construisons la mise en page générale : navbar, section hero, cartes et pied de page." },
          { type: "li", text: "<strong>Navbar</strong> — Flexbox avec position sticky, backdrop-filter, propriétés logiques" },
          { type: "li", text: "<strong>Hero</strong> — CSS Grid avec place-items, clamp() pour la typographie" },
          { type: "li", text: "<strong>Grille de cartes</strong> — Grid avec auto-fit/minmax" },
          { type: "li", text: "<strong>Carte feature</strong> — Container Queries pour mise en page adaptative" }
        ]
      },
      {
        title: "Étape 3 : Thèmes",
        content: [
          { type: "p", text: "Nous utilisons <code>CSS Variables</code> avec <code>light-dark()</code> pour créer un système de thèmes intelligent." },
          { type: "li", text: "<strong>light-dark()</strong> — prend deux valeurs, choisit automatiquement" },
          { type: "li", text: "<strong>color-scheme</strong> — doit être défini sur :root" },
          { type: "li", text: "<strong>Toggle JavaScript</strong> — sauvegarde la préférence dans localStorage" }
        ]
      },
      {
        title: "Étape 4 : Animations",
        content: [
          { type: "p", text: "Les animations donnent vie au design." },
          { type: "li", text: "<strong>Hover bouton</strong> — translateY, box-shadow glow" },
          { type: "li", text: "<strong>Fade-in-up</strong> — éléments hero animés en séquence" },
          { type: "li", text: "<strong>Scroll Animations</strong> — animation-timeline: view()" },
          { type: "li", text: "<strong>Float</strong> — icône de carte en continu au survol" }
        ]
      },
      {
        title: "Résumé & Conseils",
        content: [
          { type: "li", text: "1. Commencez toujours par les <strong>CSS Variables</strong>" },
          { type: "li", text: "2. Utilisez <code>@layer</code> pour organiser le code" },
          { type: "li", text: "3. <code>clamp()</code> remplace de nombreuses media queries" },
          { type: "li", text: "4. <code>light-dark()</code> facilite énormément le support des thèmes" },
          { type: "li", text: "5. Les propriétés logiques préparent le site pour l'arabe et l'anglais" },
          { type: "li", text: "6. <code>Container Queries</code> rendent les composants véritablement flexibles" },
          { type: "li", text: "7. CSS Nesting rend le code plus naturel à lire" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quelle est la différence entre CSS Grid et Flexbox dans ce projet ?",
        options: [
          "Pas de différence, ils sont égaux",
          "Grid est pour les mises en page 2D, Flexbox pour les éléments sur une seule ligne",
          "Grid est toujours plus rapide en performance",
          "Flexbox ne supporte pas le design responsive"
        ],
        correctAnswer: 1,
        explanation: "CSS Grid est conçu pour la mise en page 2D (lignes et colonnes ensemble), tandis que Flexbox est conçu pour la mise en page 1D (une ligne ou colonne)."
      }
    ],
    challenge: {
      title: "Ajoutez une section Témoignages",
      description: "Créez une section 'Ce que disent nos clients' avec 3 cartes de témoignages animées. Chaque carte doit inclure : image, nom, poste et témoignage. Utilisez CSS Grid avec auto-fit/minmax, des animations au défilement, et Container Queries."
    },
    cheatSheet: {
      title: "Référence CSS Complète — Toutes les Leçons",
      items: [
        {
          title: "Leçon 1 : Fondamentaux CSS",
          content: `box-sizing: border-box
rem — relatif à la racine
clamp(min, preferred, max) — valeur fluide
oklch(L C H) — couleur perceptuelle
color-mix(in oklch, c1, c2) — mélange
light-dark(#fff, #111) — couleur automatique
Spécificité: element < class < id < inline < !important`
        },
        {
          title: "Leçon 3 : Flexbox",
          content: `display: flex
flex-direction: row / column
justify-content: space-between / center
align-items: center / stretch
gap: 1rem
flex: 1 1 auto`
        },
        {
          title: "Leçon 4 : CSS Grid",
          content: `display: grid
grid-template-columns: repeat(3, 1fr)
auto-fit: repeat(auto-fit, minmax(250px, 1fr))
place-items: center
grid-column: span 2`
        },
        {
          title: "Leçon 6 : Couleurs & Thèmes",
          content: `CSS Variables: --name: value;
var(--name, fallback)
oklch(0.65 0.19 145)
color-mix(in oklch, blue 50%, red)
light-dark(#fff, #111)
color-scheme: light dark
@layer base, components;`
        },
        {
          title: "Leçon 7 : Animations",
          content: `transition: all 0.3s ease
cubic-bezier(0.4, 0, 0.2, 1)
@keyframes name { from {} to {} }
animation: fade-in 0.5s ease both
transform: translateY(-4px)
animation-timeline: view()
prefers-reduced-motion: reduce`
        }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Projekteinleitung",
        content: [
          { type: "p", text: "In dieser abschließenden Lektion bauen wir gemeinsam eine professionelle <strong>Landing Page</strong>, die <strong>alles</strong> zusammenfasst, was wir in der modernen CSS-Phase gelernt haben. Dieses Projekt ist nicht nur eine Übung — es ist eine echte Implementierung, die Sie als Grundlage für zukünftige Projekte verwenden können." },
          { type: "p", text: "Wir verwenden alle modernen CSS-Techniken: Variablen, Grid- und Flex-Layouts, Dunkel- und Hell-Themes, Animationen, logische Eigenschaften, flüssige Einheiten und erweiterte Farben." }
        ]
      },
      {
        title: "Was wir lernen werden",
        content: [
          { type: "li", text: "<strong>Responsives Design</strong> mit <code>clamp()</code> statt vieler Media Queries" },
          { type: "li", text: "<strong>CSS Grid</strong> mit <code>auto-fit</code> und <code>minmax</code> für flüssige Raster" },
          { type: "li", text: "<strong>Flexbox</strong> für die Navigationsleiste" },
          { type: "li", text: "<strong>CSS Variables + light-dark()</strong> für ein integriertes Theme-System" },
          { type: "li", text: "<strong>Animationen</strong> mit Transitions und Keyframes" },
          { type: "li", text: "<strong>Container Queries</strong> für anpassbare Karten" },
          { type: "li", text: "<strong>Logische Eigenschaften</strong> für RTL-Unterstützung" },
          { type: "li", text: "<strong>Moderne Farben</strong> mit <code>oklch()</code> und <code>color-mix()</code>" },
          { type: "li", text: "<strong>CSS Nesting</strong> für natürliche Code-Organisation" },
          { type: "li", text: "<strong>@layer</strong> zur Prioritätenorganisierung" }
        ]
      },
      {
        title: "Projektstruktur",
        content: [
          { type: "p", text: "Die CSS-Dateistruktur folgt einem organisierten Schichtenmuster:" },
          { type: "li", text: "<strong>layers.css</strong> — definiert Schichten in Reihenfolge" },
          { type: "li", text: "<strong>base.css</strong> — Reset und Imports" },
          { type: "li", text: "<strong>variables.css</strong> — Variablen und Farben" },
          { type: "li", text: "<strong>components.css</strong> — Komponenten (Karten, Buttons, Navbar)" },
          { type: "li", text: "<strong>layout.css</strong> — allgemeines Layout (Grid + Flexbox)" },
          { type: "li", text: "<strong>animations.css</strong> — Animationen und Effekte" }
        ]
      },
      {
        title: "Schritt 1: Die Grundlagen",
        content: [
          { type: "p", text: "Wir beginnen mit der Einrichtung von Variablen und grundlegenden Resets." },
          { type: "li", text: "<strong>Schichtdefinition</strong> — @layer base, components, layout, utilities, animations" },
          { type: "li", text: "<strong>Design-Tokens</strong> — oklch-Farben, light-dark(), flüssige Typografie mit clamp()" },
          { type: "li", text: "<strong>CSS-Reset</strong> — box-sizing, Margins/Paddings, sanftes Scrollen" }
        ]
      },
      {
        title: "Schritt 2: Layout",
        content: [
          { type: "p", text: "Wir bauen das allgemeine Layout: Navbar, Hero-Bereich, Karten und Footer." },
          { type: "li", text: "<strong>Navbar</strong> — Flexbox mit sticky position, backdrop-filter, logische Eigenschaften" },
          { type: "li", text: "<strong>Hero</strong> — CSS Grid mit place-items, clamp() für Typografie" },
          { type: "li", text: "<strong>Kartenraster</strong> — Grid mit auto-fit/minmax" },
          { type: "li", text: "<strong>Feature-Karte</strong> — Container Queries für anpassbares Layout" }
        ]
      },
      {
        title: "Schritt 3: Themes",
        content: [
          { type: "p", text: "Wir verwenden <code>CSS Variables</code> mit <code>light-dark()</code> für ein intelligentes Theme-System." },
          { type: "li", text: "<strong>light-dark()</strong> — nimmt zwei Werte, wählt automatisch" },
          { type: "li", text: "<strong>color-scheme</strong> — muss auf :root gesetzt werden" },
          { type: "li", text: "<strong>JavaScript-Toggle</strong> — speichert Einstellung in localStorage" }
        ]
      },
      {
        title: "Schritt 4: Animationen",
        content: [
          { type: "p", text: "Animationen bringen das Design zum Leben." },
          { type: "li", text: "<strong>Button-Hover</strong> — translateY, box-shadow glow" },
          { type: "li", text: "<strong>Fade-in-up</strong> — Hero-Elemente nacheinander animiert" },
          { type: "li", text: "<strong>Scroll-Animationen</strong> — animation-timeline: view()" },
          { type: "li", text: "<strong>Float-Animation</strong> — Kartensymbol schwebt bei Hover" }
        ]
      },
      {
        title: "Zusammenfassung & Tipps",
        content: [
          { type: "li", text: "1. Beginnen Sie immer mit <strong>CSS Variables</strong>" },
          { type: "li", text: "2. Verwenden Sie <code>@layer</code> zur Code-Organisation" },
          { type: "li", text: "3. <code>clamp()</code> ersetzt viele Media Queries" },
          { type: "li", text: "4. <code>light-dark()</code> macht Theme-Unterstützung extrem einfach" },
          { type: "li", text: "5. Logische Eigenschaften bereiten die Seite für Arabisch und Englisch vor" },
          { type: "li", text: "6. <code>Container Queries</code> machen Komponenten wirklich flexibel" },
          { type: "li", text: "7. CSS Nesting macht Code natürlicher lesbar" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist der Unterschied zwischen CSS Grid und Flexbox in diesem Projekt?",
        options: [
          "Kein Unterschied, sie sind gleich",
          "Grid ist für 2D-Layouts, Flexbox für Elemente in einer einzigen Zeile",
          "Grid ist immer performanter als Flexbox",
          "Flexbox unterstützt kein responsives Design"
        ],
        correctAnswer: 1,
        explanation: "CSS Grid ist für 2D-Layout (Zeilen und Spalten zusammen) konzipiert, während Flexbox für 1D-Layout (eine Zeile oder Spalte) konzipiert ist."
      }
    ],
    challenge: {
      title: "Fügen Sie einen Empfehlungen-Bereich hinzu",
      description: "Erstellen Sie einen Bereich 'Was unsere Kunden sagen' mit 3 animierten Empfehlungskarten. Jede Karte sollte enthalten: Bild, Name, Position und Empfehlung. Verwenden Sie CSS Grid mit auto-fit/minmax, Scroll-Animationen und Container Queries."
    },
    cheatSheet: {
      title: "Komplette Moderne CSS-Referenz — Alle Lektionen",
      items: [
        {
          title: "Lektion 1: CSS-Grundlagen",
          content: `box-sizing: border-box
rem — relativ zur Wurzel
clamp(min, preferred, max) — flüssiger Wert
oklch(L C H) — wahrnehmungsoptimierte Farbe
color-mix(in oklch, c1, c2) — Mischung
light-dark(#fff, #111) — automatische Farbe
Spezifität: element < class < id < inline < !important`
        },
        {
          title: "Lektion 3: Flexbox",
          content: `display: flex
flex-direction: row / column
justify-content: space-between / center
align-items: center / stretch
gap: 1rem
flex: 1 1 auto`
        },
        {
          title: "Lektion 4: CSS Grid",
          content: `display: grid
grid-template-columns: repeat(3, 1fr)
auto-fit: repeat(auto-fit, minmax(250px, 1fr))
place-items: center
grid-column: span 2`
        },
        {
          title: "Lektion 6: Farben & Themes",
          content: `CSS Variables: --name: value;
var(--name, fallback)
oklch(0.65 0.19 145)
color-mix(in oklch, blue 50%, red)
light-dark(#fff, #111)
color-scheme: light dark
@layer base, components;`
        },
        {
          title: "Lektion 7: Animationen",
          content: `transition: all 0.3s ease
cubic-bezier(0.4, 0, 0.2, 1)
@keyframes name { from {} to {} }
animation: fade-in 0.5s ease both
transform: translateY(-4px)
animation-timeline: view()
prefers-reduced-motion: reduce`
        }
      ]
    }
  }
};
export default translations;
