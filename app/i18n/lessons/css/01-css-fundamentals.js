const translations = {
  en: {
    sections: [
      {
        title: "What is CSS",
        content: [
          { type: "p", text: "CSS stands for <strong>Cascading Style Sheets</strong>. It is the language used to style and design HTML pages." },
          { type: "p", text: "While HTML handles structure and content, CSS handles appearance, colors, fonts, and layout." },
          { type: "callout", title: "Key Concept", text: "CSS separates content from presentation, allowing you to change the look of your entire website by modifying a single file." }
        ]
      },
      {
        title: "Why We Use It",
        content: [
          { type: "p", text: "Without CSS, every webpage would look the same and boring. CSS solves these problems:" },
          { type: "li", text: "<strong>Separation of content and design</strong> - Change appearance without touching content" },
          { type: "li", text: "<strong>Consistent distribution</strong> - Uniform styling across all pages" },
          { type: "li", text: "<strong>Customization</strong> - Responsive designs that work on all devices" },
          { type: "li", text: "<strong>Caching</strong> - Update one file to update all pages" },
          { type: "li", text: "<strong>Performance</strong> - CSS files are cacheable by browsers" }
        ]
      },
      {
        title: "The Problem It Solves",
        content: [
          { type: "p", text: "Imagine you want to change the color of all headings on a 100-page website:" },
          { type: "callout-accent", title: "Without CSS", text: "You would need to edit every page manually. With CSS, one file change updates everything." }
        ]
      },
      {
        title: "Simple Explanation",
        content: [
          { type: "p", text: "CSS works on a simple principle: <strong>Selector + Property + Value</strong>" },
          { type: "p", text: "There are three ways to link CSS to an HTML page:" },
          { type: "li", text: "<strong>Inline</strong> - The worst approach, using style attribute" },
          { type: "li", text: "<strong>Internal</strong> - Good for single pages, using style tag" },
          { type: "li", text: "<strong>External</strong> - Always the best, using link tag" },
          { type: "callout-primary", title: "Golden Rule", text: "Always use external files. Only use internal styles for prototypes or single pages." }
        ]
      },
      {
        title: "What Happens Behind the Scenes",
        content: [
          { type: "p", text: "When a browser loads a webpage, CSS goes through several stages before displaying the final result:" },
          { type: "li", text: "<strong>1. CSS Parsing</strong> - The browser reads and parses CSS into a tree called CSSOM" },
          { type: "li", text: "<strong>2. Render Tree Construction</strong> - DOM and CSSOM are merged into a render tree" },
          { type: "li", text: "<strong>3. Layout</strong> - The browser calculates exact position and size of each element" },
          { type: "li", text: "<strong>4. Paint</strong> - The browser draws each element with its visual effects" },
          { type: "li", text: "<strong>5. Compositing</strong> - All graphic layers are combined into the final result" },
          { type: "callout", title: "Performance Tip", text: "Properties like <code>transform</code> and <code>opacity</code> don't trigger layout recalculation - they're faster for animations and visual effects." }
        ]
      },
      {
        title: "Specificity",
        content: [
          { type: "p", text: "When multiple CSS rules apply to one element, the browser decides which rule to apply based on <strong>selector specificity</strong>." },
          { type: "li", text: "1. HTML Element (p, div) → 0-0-1" },
          { type: "li", text: "2. Class (.class) → 0-1-0" },
          { type: "li", text: "3. ID (#id) → 1-0-0" },
          { type: "li", text: "4. Inline (style=\"\") → 1-0-0-0" },
          { type: "li", text: "5. !important → Highest (last resort)" },
          { type: "callout-accent", title: "Beware of !important", text: "Use <code>!important</code> only as a last resort. Overusing it makes code hard to maintain and causes unexpected issues. Use variables instead." }
        ]
      },
      {
        title: "Box Model",
        content: [
          { type: "p", text: "Every HTML element is a box. The box model describes how to calculate element size and spacing:" },
          { type: "li", text: "<strong>content-box</strong> (default) - Width includes content only" },
          { type: "li", text: "<strong>border-box</strong> - Width includes padding and border" },
          { type: "callout-primary", title: "Golden Rule", text: "Always use <code>box-sizing: border-box</code> at the start of your file. This makes layout easier and more predictable." }
        ]
      },
      {
        title: "Modern Units",
        content: [
          { type: "p", text: "CSS provides various units. Understanding the differences significantly improves design:" },
          { type: "li", text: "<strong>rem</strong> - Relative to root font size, ideal for fonts and spacing" },
          { type: "li", text: "<strong>em</strong> - Relative to parent font size, accumulates in nested elements" },
          { type: "li", text: "<strong>%</strong> - Relative to parent container" },
          { type: "li", text: "<strong>vw/vh</strong> - Relative to viewport width/height" },
          { type: "li", text: "<strong>dvh</strong> - Dynamic viewport height, solves mobile issues" },
          { type: "li", text: "<strong>clamp()</strong> - Sets min, preferred, and max values - the magic unit" }
        ]
      },
      {
        title: "Modern Colors",
        content: [
          { type: "p", text: "CSS provides multiple ways to specify colors, each with its use cases:" },
          { type: "li", text: "<strong>Hexadecimal</strong> - Quick and popular (#2563eb)" },
          { type: "li", text: "<strong>RGB/RGBA</strong> - With transparency support" },
          { type: "li", text: "<strong>HSL/HSLA</strong> - Easiest to modify (Hue, Saturation, Lightness)" },
          { type: "li", text: "<strong>oklch()</strong> - Modern, perceptually uniform colors" },
          { type: "li", text: "<strong>color-mix()</strong> - Mix two colors directly in CSS" },
          { type: "li", text: "<strong>light-dark()</strong> - Automatic theme colors" }
        ]
      },
      {
        title: "Display Basics",
        content: [
          { type: "p", text: "The <code>display</code> property determines how an element is rendered and its layout behavior:" },
          { type: "li", text: "<strong>block</strong> - Takes full width, starts on new line (div, p, h1)" },
          { type: "li", text: "<strong>inline</strong> - Stays in same line, takes content width only (span, a)" },
          { type: "li", text: "<strong>inline-block</strong> - Combines inline and block benefits (button, input)" },
          { type: "li", text: "<strong>none</strong> - Completely hides element, no space reserved" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the difference between box-sizing: content-box and box-sizing: border-box?",
        options: [
          "content-box includes padding and border in width, border-box doesn't",
          "border-box includes padding and border in width, content-box doesn't",
          "There is no difference between them",
          "border-box hides borders and content-box shows them"
        ],
        correctAnswer: 1,
        explanation: "In border-box, padding and border are included in the specified width. In content-box (the default), width is calculated for content only, and space increases with padding and border."
      },
      {
        question: "Why is rem preferred over px for fonts?",
        options: [
          "rem is faster in performance",
          "rem makes fonts larger in size",
          "rem respects browser font size settings and provides accessibility",
          "px doesn't work in modern browsers"
        ],
        correctAnswer: 2,
        explanation: "rem depends on the root font size. If a user changes font size in browser settings for accessibility, all fonts defined with rem change accordingly. px is fixed and doesn't change."
      }
    ],
    challenge: {
      title: "Design a Card Using Fundamentals",
      description: "Create a simple card using: box-sizing: border-box, rem for fonts, clamp() for width, variables, display: block/inline-block, and modern colors. The card must be responsive without media queries."
    },
    cheatSheet: {
      title: "Quick CSS Reference",
      items: [
        {
          title: "Units",
          content: `| Unit | Reference | Best Use |
|------|-----------|----------|
| px | Fixed | Precise borders, icons |
| rem | Root font size | Fonts, general spacing |
| em | Parent font size | Fonts inside elements |
| % | Container | Relative layout |
| vw / vh | Viewport | Responsive sizes |
| dvh | Dynamic height | Mobile solution |
| ch | Character "0" width | Text columns |
| clamp() | Min + relative + max | Best for flexible layout |`
        },
        {
          title: "Colors",
          content: `| Format | Example | Usage |
|--------|---------|-------|
| #hex | #2563eb | Quick and popular |
| rgb() | rgb(37, 99, 235) | With transparency: rgba() |
| hsl() | hsl(217, 91%, 60%) | Easy to modify |
| oklch() | oklch(0.65 0.19 145) | Modern and precise |
| color-mix() | color-mix(in oklch, blue 50%, red) | Color mixing |
| light-dark() | light-dark(#fff, #111) | Automatic theme colors |`
        },
        {
          title: "Display Types",
          content: `| Value | Behavior | Examples |
|-------|----------|----------|
| block | New line + full width | div, p, h1 |
| inline | Same line + content width | span, a, strong |
| inline-block | Same line + accepts dimensions | button, input |
| none | Hide completely + no space | Element hiding |
| flex | Flexible layout | Layout containers |
| grid | Grid layout | Complex pages |`
        },
        {
          title: "Specificity",
          content: `Order from lowest to highest:
1. Elements (p, div) → 0-0-1
2. Classes (.class) → 0-1-0
3. IDs (#id) → 1-0-0
4. Inline (style="") → 1-0-0-0
5. !important → Highest (last resort)

Rule: Always use classes, avoid IDs in CSS, and never use !important except for emergency fixes.`
        }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que le CSS",
        content: [
          { type: "p", text: "CSS signifie <strong>Cascading Style Sheets</strong> (Feuilles de Style en Cascade). C'est le langage utilisé pour styliser et concevoir les pages HTML." },
          { type: "p", text: "Tandis que le HTML gère la structure et le contenu, le CSS gère l'apparence, les couleurs, les polices et la mise en page." },
          { type: "callout", title: "Concept clé", text: "Le CSS sépare le contenu de la présentation, vous permettant de modifier l'apparence de tout votre site en modifiant un seul fichier." }
        ]
      },
      {
        title: "Pourquoi l'utiliser",
        content: [
          { type: "p", text: "Sans CSS, chaque page web serait identique et ennuyeuse. Le CSS résout ces problèmes :" },
          { type: "li", text: "<strong>Séparation du contenu et du design</strong> - Modifier l'apparence sans toucher au contenu" },
          { type: "li", text: "<strong>Style uniforme</strong> - Mise en page cohérente sur toutes les pages" },
          { type: "li", text: "<strong>Personnalisation</strong> - Designs responsives qui fonctionnent sur tous les appareils" },
          { type: "li", text: "<strong>Mise en cache</strong> - Modifier un seul fichier pour mettre à jour toutes les pages" },
          { type: "li", text: "<strong>Performance</strong> - Les fichiers CSS sont mis en cache par les navigateurs" }
        ]
      },
      {
        title: "Le problème qu'il résout",
        content: [
          { type: "p", text: "Imaginez que vous vouliez changer la couleur de tous les titres d'un site de 100 pages :" },
          { type: "callout-accent", title: "Sans CSS", text: "Vous devriez modifier chaque page manuellement. Avec CSS, un seul fichier modifié met à jour tout." }
        ]
      },
      {
        title: "Explication simple",
        content: [
          { type: "p", text: "Le CSS fonctionne sur un principe simple : <strong>Sélecteur + Propriété + Valeur</strong>" },
          { type: "p", text: "Il existe trois façons de lier le CSS à une page HTML :" },
          { type: "li", text: "<strong>Inline</strong> - La pire approche, en utilisant l'attribut style" },
          { type: "li", text: "<strong>Interne</strong> - Bon pour les pages isolées, en utilisant la balise style" },
          { type: "li", text: "<strong>Externe</strong> - Toujours le meilleur, en utilisant la balise link" },
          { type: "callout-primary", title: "Règle d'or", text: "Utilisez toujours des fichiers externes. N'utilisez les styles internes que pour les prototypes ou les pages isolées." }
        ]
      },
      {
        title: "Ce qui se passe en coulisses",
        content: [
          { type: "p", text: "Lorsqu'un navigateur charge une page web, le CSS passe par plusieurs étapes avant d'afficher le résultat final :" },
          { type: "li", text: "<strong>1. Analyse CSS</strong> - Le navigateur lit et analyse le CSS en un arbre appelé CSSOM" },
          { type: "li", text: "<strong>2. Construction de l'arbre de rendu</strong> - DOM et CSSOM sont fusionnés en un arbre de rendu" },
          { type: "li", text: "<strong>3. Disposition</strong> - Le navigateur calcule la position et la taille exactes de chaque élément" },
          { type: "li", text: "<strong>4. Peinture</strong> - Le navigateur dessine chaque élément avec ses effets visuels" },
          { type: "li", text: "<strong>5. Composition</strong> - Toutes les couches graphiques sont combinées dans le résultat final" },
          { type: "callout", title: "Conseil de performance", text: "Les propriétés comme <code>transform</code> et <code>opacity</code> ne déclenchent pas de recalcul de mise en page - elles sont plus rapides pour les animations et effets visuels." }
        ]
      },
      {
        title: "Spécificité",
        content: [
          { type: "p", text: "Lorsque plusieurs règles CSS s'appliquent à un élément, le navigateur décide quelle règle appliquer en se basant sur la <strong>spécificité du sélecteur</strong>." },
          { type: "li", text: "1. Élément HTML (p, div) → 0-0-1" },
          { type: "li", text: "2. Classe (.class) → 0-1-0" },
          { type: "li", text: "3. ID (#id) → 1-0-0" },
          { type: "li", text: "4. Inline (style=\"\") → 1-0-0-0" },
          { type: "li", text: "5. !important → La plus élevée (dernier recours)" },
          { type: "callout-accent", title: "Attention à !important", text: "N'utilisez <code>important</code> qu'en dernier recours. Son utilisation excessive rend le code difficile à maintenir et cause des problèmes inattendus. Utilisez les variables à la place." }
        ]
      },
      {
        title: "Modèle de boîte (Box Model)",
        content: [
          { type: "p", text: "Chaque élément HTML est une boîte. Le modèle de boîte décrit comment calculer la taille et l'espacement de l'élément :" },
          { type: "li", text: "<strong>content-box</strong> (par défaut) - La largeur inclut uniquement le contenu" },
          { type: "li", text: "<strong>border-box</strong> - La largeur inclut le padding et la bordure" },
          { type: "callout-primary", title: "Règle d'or", text: "Utilisez toujours <code>box-sizing: border-box</code> au début de votre fichier. Cela rend la mise en page plus facile et plus prévisible." }
        ]
      },
      {
        title: "Unités modernes",
        content: [
          { type: "p", text: "Le CSS fournit diverses unités. Comprendre les différences améliore considérablement le design :" },
          { type: "li", text: "<strong>rem</strong> - Relatif à la taille de police racine, idéal pour les polices et espacements" },
          { type: "li", text: "<strong>em</strong> - Relatif à la taille de police parent, s'accumule dans les éléments imbriqués" },
          { type: "li", text: "<strong>%</strong> - Relatif au conteneur parent" },
          { type: "li", text: "<strong>vw/vh</strong> - Relatif à la largeur/hauteur du viewport" },
          { type: "li", text: "<strong>dvh</strong> - Hauteur dynamique du viewport, résout les problèmes mobiles" },
          { type: "li", text: "<strong>clamp()</strong> - Définit les valeurs min, préférée et max - l'unité magique" }
        ]
      },
      {
        title: "Couleurs modernes",
        content: [
          { type: "p", text: "Le CSS offre plusieurs façons de spécifier les couleurs, chacune avec ses cas d'utilisation :" },
          { type: "li", text: "<strong>Hexadécimal</strong> - Rapide et populaire (#2563eb)" },
          { type: "li", text: "<strong>RGB/RGBA</strong> - Avec support de la transparence" },
          { type: "li", text: "<strong>HSL/HSLA</strong> - Le plus facile à modifier (Teinte, Saturation, Luminosité)" },
          { type: "li", text: "<strong>oklch()</strong> - Couleurs modernes, uniformes perceptuellement" },
          { type: "li", text: "<strong>color-mix()</strong> - Mélanger deux couleurs directement en CSS" },
          { type: "li", text: "<strong>light-dark()</strong> - Couleurs de thème automatiques" }
        ]
      },
      {
        title: "Bases de Display",
        content: [
          { type: "p", text: "La propriété <code>display</code> détermine comment un élément est rendu et son comportement de mise en page :" },
          { type: "li", text: "<strong>block</strong> - Prend toute la largeur, commence sur une nouvelle ligne (div, p, h1)" },
          { type: "li", text: "<strong>inline</strong> - Reste sur la même ligne, prend la largeur du contenu uniquement (span, a)" },
          { type: "li", text: "<strong>inline-block</strong> - Combine les avantages de inline et block (button, input)" },
          { type: "li", text: "<strong>none</strong> - Masque complètement l'élément, aucun espace réservé" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quelle est la différence entre box-sizing: content-box et box-sizing: border-box ?",
        options: [
          "content-box inclut le padding et la bordure dans la largeur, border-box ne les inclut pas",
          "border-box inclut le padding et la bordure dans la largeur, content-box ne les inclut pas",
          "Il n'y a pas de différence entre eux",
          "border-box masque les bordures et content-box les affiche"
        ],
        correctAnswer: 1,
        explanation: "Dans border-box, le padding et la bordure sont inclus dans la largeur spécifiée. Dans content-box (par défaut), la largeur est calculée uniquement pour le contenu, et l'espace augmente avec le padding et la bordure."
      },
      {
        question: "Pourquoi préfère-t-on rem plutôt que px pour les polices ?",
        options: [
          "rem est plus rapide en performance",
          "rem rend les polices plus grandes",
          "rem respecte les paramètres de taille de police du navigateur et améliore l'accessibilité",
          "px ne fonctionne pas dans les navigateurs modernes"
        ],
        correctAnswer: 2,
        explanation: "rem dépend de la taille de police racine. Si un utilisateur change la taille de police dans les paramètres du navigateur pour l'accessibilité, toutes les polices définies avec rem changent. px est fixe et ne change pas."
      }
    ],
    challenge: {
      title: "Concevoir une carte avec les bases",
      description: "Créez une carte simple en utilisant : box-sizing: border-box, rem pour les polices, clamp() pour la largeur, les variables, display: block/inline-block, et les couleurs modernes. La carte doit être responsive sans media queries."
    },
    cheatSheet: {
      title: "Référence CSS rapide",
      items: [
        {
          title: "Unités",
          content: `| Unité | Référence | Meilleur usage |
|-------|-----------|----------------|
| px | Fixe | Bordures précises, icônes |
| rem | Taille de police racine | Polices, espacement général |
| em | Taille de police parent | Polices dans les éléments |
| % | Conteneur | Mise en page relative |
| vw / vh | Viewport | Tailles responsives |
| dvh | Hauteur dynamique | Solution mobile |
| ch | Largeur du caractère "0" | Colonnes de texte |
| clamp() | Min + relatif + max | Meilleur pour la mise en page flexible |`
        },
        {
          title: "Couleurs",
          content: `| Format | Exemple | Usage |
|--------|---------|-------|
| #hex | #2563eb | Rapide et populaire |
| rgb() | rgb(37, 99, 235) | Avec transparence : rgba() |
| hsl() | hsl(217, 91%, 60%) | Facile à modifier |
| oklch() | oklch(0.65 0.19 145) | Moderne et précis |
| color-mix() | color-mix(in oklch, blue 50%, red) | Mélange de couleurs |
| light-dark() | light-dark(#fff, #111) | Couleurs de thème automatiques |`
        },
        {
          title: "Types d'affichage",
          content: `| Valeur | Comportement | Exemples |
|--------|-------------|----------|
| block | Nouvelle ligne + pleine largeur | div, p, h1 |
| inline | Même ligne + largeur du contenu | span, a, strong |
| inline-block | Même ligne + accepte les dimensions | button, input |
| none | Masquer complètement + aucun espace | Masquage d'éléments |
| flex | Mise en page flexible | Conteneurs de mise en page |
| grid | Mise en page en grille | Pages complexes |`
        },
        {
          title: "Spécificité",
          content: `Ordre du plus bas au plus élevé :
1. Éléments (p, div) → 0-0-1
2. Classes (.class) → 0-1-0
3. IDs (#id) → 1-0-0
4. Inline (style="") → 1-0-0-0
5. !important → La plus élevée (dernier recours)

Règle : Utilisez toujours les classes, évitez les IDs en CSS, et n'utilisez jamais !important sauf pour les corrections d'urgence.`
        }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was ist CSS",
        content: [
          { type: "p", text: "CSS steht für <strong>Cascading Style Sheets</strong>. Es ist die Sprache, die zum Gestalten und Designen von HTML-Seiten verwendet wird." },
          { type: "p", text: "Während HTML sich um Struktur und Inhalt kümmert, kümmert sich CSS um das Aussehen, Farben, Schriftarten und Layout." },
          { type: "callout", title: "Schlüsselkonzept", text: "CSS trennt Inhalt von Präsentation und ermöglicht es Ihnen, das Aussehen Ihrer gesamten Website zu ändern, indem Sie nur eine einzige Datei ändern." }
        ]
      },
      {
        title: "Warum wir es verwenden",
        content: [
          { type: "p", text: "Ohne CSS würde jede Webseite gleich und langweilig aussehen. CSS löst diese Probleme:" },
          { type: "li", text: "<strong>Trennung von Inhalt und Design</strong> - Aussehen ändern, ohne den Inhalt zu berühren" },
          { type: "li", text: "<strong>Einheitlicher Stil</strong> - Konsistentes Styling über alle Seiten hinweg" },
          { type: "li", text: "<strong>Anpassung</strong> - Responsives Design, das auf allen Geräten funktioniert" },
          { type: "li", text: "<strong>Caching</strong> - Eine Datei ändern, um alle Seiten zu aktualisieren" },
          { type: "li", text: "<strong>Leistung</strong> - CSS-Dateien werden von Browsern zwischengespeichert" }
        ]
      },
      {
        title: "Das Problem, das es löst",
        content: [
          { type: "p", text: "Stellen Sie sich vor, Sie möchten die Farbe aller Überschriften auf einer 100-seitigen Website ändern:" },
          { type: "callout-accent", title: "Ohne CSS", text: "Sie müssten jede Seite manuell bearbeiten. Mit CSS aktualisiert eine einzige Datei alles." }
        ]
      },
      {
        title: "Einfache Erklärung",
        content: [
          { type: "p", text: "CSS funktioniert nach einem einfachen Prinzip: <strong>Auswähler + Eigenschaft + Wert</strong>" },
          { type: "p", text: "Es gibt drei Möglichkeiten, CSS mit einer HTML-Datei zu verbinden:" },
          { type: "li", text: "<strong>Inline</strong> - Der schlechteste Ansatz, mit dem style-Attribut" },
          { type: "li", text: "<strong>Intern</strong> - Gut für einzelne Seiten, mit dem style-Tag" },
          { type: "li", text: "<strong>Extern</strong> - Immer am besten, mit dem link-Tag" },
          { type: "callout-primary", title: "Goldene Regel", text: "Verwenden Sie immer externe Datei. Verwenden Sie interne Styles nur für Prototypen oder einzelne Seiten." }
        ]
      },
      {
        title: "Was hinter den Kulissen passiert",
        content: [
          { type: "p", text: "Wenn ein Browser eine Webseite lädt, durchläuft CSS mehrere Stufen, bevor das endgültige Ergebnis angezeigt wird:" },
          { type: "li", text: "<strong>1. CSS-Parsing</strong> - Der Browser liest und analysiert CSS in einen Baum namens CSSOM" },
          { type: "li", text: "<strong>2. Aufbau des Renderbaums</strong> - DOM und CSSOM werden zu einem Renderbaum zusammengeführt" },
          { type: "li", text: "<strong>3. Layout</strong> - Der Browser berechnet die genaue Position und Größe jedes Elements" },
          { type: "li", text: "<strong>4. Zeichnung</strong> - Der Browser zeichnet jedes Element mit seinen visuellen Effekten" },
          { type: "li", text: "<strong>5. Komposition</strong> - Alle Grafikebenen werden zum Endergebnis kombiniert" },
          { type: "callout", title: "Leistungstipp", text: "Eigenschaften wie <code>transform</code> und <code>opacity</code> lösen keine Layout-Neuberechnung aus - sie sind schneller für Animationen und visuelle Effekte." }
        ]
      },
      {
        title: "Spezifität",
        content: [
          { type: "p", text: "Wenn mehrere CSS-Regeln auf ein Element zutreffen, entscheidet der Browser, welche Regel angewendet wird, basierend auf der <strong>Auswähler-Spezifität</strong>." },
          { type: "li", text: "1. HTML-Element (p, div) → 0-0-1" },
          { type: "li", text: "2. Klasse (.class) → 0-1-0" },
          { type: "li", text: "3. ID (#id) → 1-0-0" },
          { type: "li", text: "4. Inline (style=\"\") → 1-0-0-0" },
          { type: "li", text: "5. !important → Höchste (letzter Ausweg)" },
          { type: "callout-accent", title: "Vorsicht mit !important", text: "Verwenden Sie <code>!important</code> nur als letzten Ausweg. Übermäßige Verwendung macht den Code schwer wartbar und verursacht unerwartete Probleme. Verwenden Sie stattdessen Variablen." }
        ]
      },
      {
        title: "Box-Modell",
        content: [
          { type: "p", text: "Jedes HTML-Element ist eine Box. Das Box-Modell beschreibt, wie Elementgröße und Abstände berechnet werden:" },
          { type: "li", text: "<strong>content-box</strong> (Standard) - Breite enthält nur den Inhalt" },
          { type: "li", text: "<strong>border-box</strong> - Breite enthält Padding und Rahmen" },
          { type: "callout-primary", title: "Goldene Regel", text: "Verwenden Sie immer <code>box-sizing: border-box</code> am Anfang Ihrer Datei. Das macht das Layout einfacher und vorhersehbarer." }
        ]
      },
      {
        title: "Moderne Einheiten",
        content: [
          { type: "p", text: "CSS bietet verschiedene Einheiten. Das Verständnis der Unterschiede verbessert das Design erheblich:" },
          { type: "li", text: "<strong>rem</strong> - Relativ zur Root-Schriftgröße, ideal für Schriften und Abstände" },
          { type: "li", text: "<strong>em</strong> - Relativ zur Eltern-Schriftgröße, kumuliert in verschachtelten Elementen" },
          { type: "li", text: "<strong>%</strong> - Relativ zum übergeordneten Container" },
          { type: "li", text: "<strong>vw/vh</strong> - Relativ zur Viewport-Breite/Höhe" },
          { type: "li", text: "<strong>dvh</strong> - Dynamische Viewport-Höhe, löst mobile Probleme" },
          { type: "li", text: "<strong>clamp()</strong> - Setzt Min-, bevorzugte und Max-Werte - die magische Einheit" }
        ]
      },
      {
        title: "Moderne Farben",
        content: [
          { type: "p", text: "CSS bietet mehrere Möglichkeiten, Farben anzugeben, jede mit ihren Anwendungsfällen:" },
          { type: "li", text: "<strong>Hexadezimal</strong> - Schnell und beliebt (#2563eb)" },
          { type: "li", text: "<strong>RGB/RGBA</strong> - Mit Transparenz-Unterstützung" },
          { type: "li", text: "<strong>HSL/HSLA</strong> - Am einfachsten zu ändern (Farbton, Sättigung, Helligkeit)" },
          { type: "li", text: "<strong>oklch()</strong> - Moderne, wahrnehmungsgleichmäßige Farben" },
          { type: "li", text: "<strong>color-mix()</strong> - Zwei Farben direkt in CSS mischen" },
          { type: "li", text: "<strong>light-dark()</strong> - Automatische Theme-Farben" }
        ]
      },
      {
        title: "Display-Grundlagen",
        content: [
          { type: "p", text: "Die Eigenschaft <code>display</code> bestimmt, wie ein Element gerendert wird und sich im Layout verhält:" },
          { type: "li", text: "<strong>block</strong> - Nimmt volle Breite ein, beginnt in neuer Zeile (div, p, h1)" },
          { type: "li", text: "<strong>inline</strong> - Bleibt in gleicher Zeile, nimmt nur Inhaltsbreite ein (span, a)" },
          { type: "li", text: "<strong>inline-block</strong> - Kombiniert Vorteile von inline und block (button, input)" },
          { type: "li", text: "<strong>none</strong> - Versteckt Element komplett, kein Platz reserviert" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist der Unterschied zwischen box-sizing: content-box und box-sizing: border-box?",
        options: [
          "content-box schließt Padding und Rahmen in der Breite ein, border-box nicht",
          "border-box schließt Padding und Rahmen in der Breite ein, content-box nicht",
          "Es gibt keinen Unterschied zwischen ihnen",
          "border-box versteckt Rahmen und content-box zeigt sie"
        ],
        correctAnswer: 1,
        explanation: "In border-box werden Padding und Rahmen in der angegebenen Breite eingeschlossen. In content-box (Standard) wird die Breite nur für den Inhalt berechnet, und der Platz erhöht sich mit Padding und Rahmen."
      },
      {
        question: "Warum bevorzugt man rem statt px für Schriftarten?",
        options: [
          "rem ist leistungsschneller",
          "rem macht Schriftarten größer",
          "rem respektiert die Schriftgrößeneinstellungen des Browsers und verbessert die Barrierefreiheit",
          "px funktioniert nicht in modernen Browsern"
        ],
        correctAnswer: 2,
        explanation: "rem hängt von der Root-Schriftgröße ab. Wenn ein Benutzer die Schriftgröße in den Browsereinstellungen für Barrierefreiheit ändert, ändern sich alle mit rem definierten Schriftarten. px ist fest und ändert sich nicht."
      }
    ],
    challenge: {
      title: "Eine Karte mit Grundlagen gestalten",
      description: "Erstellen Sie eine einfache Karte mit: box-sizing: border-box, rem für Schriftarten, clamp() für die Breite, Variablen, display: block/inline-block und modernen Farben. Die Karte muss ohne Media Queries responsiv sein."
    },
    cheatSheet: {
      title: "Schnelle CSS-Referenz",
      items: [
        {
          title: "Einheiten",
          content: `| Einheit | Referenz | Beste Verwendung |
|---------|----------|------------------|
| px | Fest | Genau Rahmen, Icons |
| rem | Root-Schriftgröße | Schriften, allgemeine Abstände |
| em | Eltern-Schriftgröße | Schriften innerhalb von Elementen |
| % | Container | Relatives Layout |
| vw / vh | Viewport | Responsive Größen |
| dvh | Dynamische Höhe | Mobile Lösung |
| ch | Zeichenbreite "0" | Textspalten |
| clamp() | Min + relativ + Max | Beste für flexibles Layout |`
        },
        {
          title: "Farben",
          content: `| Format | Beispiel | Verwendung |
|--------|----------|------------|
| #hex | #2563eb | Schnell und beliebt |
| rgb() | rgb(37, 99, 235) | Mit Transparenz: rgba() |
| hsl() | hsl(217, 91%, 60%) | Leicht zu ändern |
| oklch() | oklch(0.65 0.19 145) | Modern und präzise |
| color-mix() | color-mix(in oklch, blue 50%, red) | Farbmischung |
| light-dark() | light-dark(#fff, #111) | Automatische Theme-Farben |`
        },
        {
          title: "Display-Typen",
          content: `| Wert | Verhalten | Beispiele |
|------|-----------|-----------|
| block | Neue Zeile + volle Breite | div, p, h1 |
| inline | Gleiche Zeile + Inhaltsbreite | span, a, strong |
| inline-block | Gleiche Zeile + akzeptiert Dimensionen | button, input |
| none | Vollständig verstecken + kein Platz | Element verstecken |
| flex | Flexibles Layout | Layout-Container |
| grid | Raster-Layout | Komplexe Seiten |`
        },
        {
          title: "Spezifität",
          content: `Reihenfolge vom niedrigsten zum höchsten:
1. Elemente (p, div) → 0-0-1
2. Klassen (.class) → 0-1-0
3. IDs (#id) → 1-0-0
4. Inline (style="") → 1-0-0-0
5. !important → Höchste (letzter Ausweg)

Regel: Verwenden Sie immer Klassen, vermeiden Sie IDs in CSS und verwenden Sie niemals !important, außer für Notfallbehebungen.`
        }
      ]
    }
  }
};
export default translations;
