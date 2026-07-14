const translations = {
  en: {
    sections: [
      {
        title: "What are Modern Animations",
        content: [
          { type: "p", text: "Modern Animations are a collection of CSS features that allow you to create interactive and smooth animations without relying entirely on JavaScript. These features include <strong>Transitions</strong>, <strong>Animations</strong>, <strong>Scroll-driven Animations</strong>, and <strong>@starting-style</strong>." },
          { type: "p", text: "Simply put, these tools let you control how elements move from one state to another — whether it's changing a button color on hover, creating a continuous rotation effect, or even linking motion to the scroll position on the page." },
          { type: "p", text: "Both CSS Animations and Transitions produce the same visual result (smooth motion), but differ in method and usage. The key difference is that Transitions move between only two states, while Animations can go through multiple stages (keyframes)." }
        ]
      },
      {
        title: "Why Use Them",
        content: [
          { type: "li", text: "<strong>Improve User Experience:</strong> Smooth animations make the interface more interactive and professional" },
          { type: "li", text: "<strong>Guide User Attention:</strong> Use motion to draw attention to important elements like buttons or alerts" },
          { type: "li", text: "<strong>Reduce JavaScript Dependency:</strong> Many visual effects can be achieved with CSS only, improving performance" },
          { type: "li", text: "<strong>Better Performance:</strong> CSS animations are processed by the GPU in many cases, making them faster than software solutions" },
          { type: "li", text: "<strong>Scroll Compatibility:</strong> New Scroll-driven Animations features allow visual effects linked to scroll position without JavaScript" },
          { type: "li", text: "<strong>Accessibility:</strong> With <code>prefers-reduced-motion</code>, you can respect user preferences for reduced motion" }
        ]
      },
      {
        title: "The Problem It Solves",
        content: [
          { type: "p", text: "Without animations and transitions, interface changes happen suddenly and abruptly. This makes interactions feel rigid and unnatural." },
          { type: "p", text: "<strong>Before animations:</strong> Button color changes instantly, showing/hiding elements is jarring, no way to guide user attention, page content appears static." },
          { type: "p", text: "<strong>After animations:</strong> Transitions between states are smooth and natural, complex interactive effects can be created with CSS only, motion can be linked to scroll position, and user preferences for reduced motion are respected." }
        ]
      },
      {
        title: "Simple Explanation",
        content: [
          { type: "li", text: "<strong>Transitions:</strong> Allow an element to move smoothly from one CSS state to another — needs four key properties" },
          { type: "li", text: "<strong>Animations:</strong> More flexible than transitions — define multiple stages (Keyframes) and move automatically between them" },
          { type: "li", text: "<strong>Scroll-driven Animations:</strong> Link animation to scroll position using animation-timeline: scroll() or view()" },
          { type: "li", text: "<strong>@starting-style:</strong> Defines initial styles when an element is first inserted — perfect for smooth entry effects" },
          { type: "li", text: "<strong>will-change:</strong> Performance hint that tells the browser to prepare for animation" }
        ]
      },
      {
        title: "Behind the Scenes",
        content: [
          { type: "p", text: "<strong>How Transitions work:</strong> When a CSS property changes on an element with transition, the browser detects the change, calculates initial and final values, uses the timing function to compute values at each frame, applies them, and reaches the final value when the duration ends." },
          { type: "p", text: "<strong>How Animations work:</strong> Similar but with added complexity — reads all defined keyframes, calculates current time relative to total duration, determines which two stages we're between, uses timing function for precise calculation, and applies values based on iteration count." },
          { type: "p", text: "<strong>Scroll-driven Animations:</strong> When using animation-timeline: scroll(), the browser links animation progress to scroll position instead of time — at 0% scroll, animation is at 0%; at 50% scroll, animation is at 50%; at 100% scroll, animation completes." }
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Mistake 1: Using transition on properties that don't interpolate smoothly</strong> — display and font-family cannot be transitioned smoothly" },
          { type: "li", text: "<strong>Mistake 2: Forgetting to specify transition-property</strong> — Without it, all transitionable properties will animate" },
          { type: "li", text: "<strong>Mistake 3: Creating long animations that cause annoyance</strong> — Animations longer than one second can be tiring" },
          { type: "li", text: "<strong>Mistake 4: Overusing will-change</strong> — Using it on every element degrades performance instead of improving it" },
          { type: "li", text: "<strong>Mistake 5: Ignoring prefers-reduced-motion</strong> — Ignoring this query disadvantages users with motion sensitivity or vestibular disorders" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Use animations with a clear purpose — to guide attention, improve understanding, or provide feedback" },
          { type: "li", text: "2. Keep animations fast and comfortable — optimal duration is between 150ms and 500ms" },
          { type: "li", text: "3. Specify properties in transition-property — don't use transition: all" },
          { type: "li", text: "4. Use appropriate timing functions — ease-out for entering, ease-in for exiting, ease-in-out for balanced" },
          { type: "li", text: "5. Always respect prefers-reduced-motion — this is not optional" },
          { type: "li", text: "6. Use transform and opacity for animations — they're GPU-accelerated" },
          { type: "li", text: "7. Test animations on different devices" },
          { type: "li", text: "8. Use @starting-style for element entry effects" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the fundamental difference between Transition and Animation in CSS?",
        options: [
          "Transition is faster than Animation",
          "Transition moves between two states only, while Animation can go through multiple stages (keyframes)",
          "Animation doesn't need keyframes",
          "Transition only works with Hover"
        ],
        correctAnswer: 1,
        explanation: "Transition moves from one CSS state to another (e.g., on Hover), while Animation can go through multiple stages defined using @keyframes and can repeat automatically."
      },
      {
        question: "Why should prefers-reduced-motion be used on websites?",
        options: [
          "To improve site performance",
          "To make the site work on old browsers",
          "To respect user preferences for motion sensitivity or vestibular disorders",
          "To add extra animations"
        ],
        correctAnswer: 2,
        explanation: "prefers-reduced-motion is a media query that detects if the user requests reduced motion. Some people have motion sensitivity or balance disorders, and their preferences must be respected for a safe and comfortable user experience."
      }
    ],
    challenge: {
      title: "Create a Gallery Page with Scroll Animations",
      description: "Create a gallery page with: a progress bar at the top linked to scroll, image cards fading in and sliding up on scroll, hover effects moving cards up with shadow changes, a continuously spinning loading indicator, and all animations stopped when prefers-reduced-motion is active."
    },
    cheatSheet: {
      title: "Modern Animations Quick Reference",
      items: [
        {
          title: "Transition Properties",
          content: `transition-property: background-color, transform;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;
transition-delay: 0s;

/* Shorthand */
transition: background-color 0.3s ease-in-out 0s,
            transform 0.2s ease-out 0.1s;`
        },
        {
          title: "Animation Properties",
          content: `@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

animation-name: slideIn;
animation-duration: 0.5s;
animation-timing-function: ease-out;
animation-iteration-count: 1;
animation-fill-mode: forwards;

/* Shorthand */
animation: slideIn 0.5s ease-out 0s 1 normal forwards;`
        },
        {
          title: "Scroll-driven Animations",
          content: `/* Link to page scroll */
animation-timeline: scroll(root);
animation-timeline: scroll(nearest);

/* Link to element appearance */
animation-timeline: view();
animation-range: entry 0% entry 100%;`
        },
        {
          title: "Timing Functions",
          content: `ease — default, slow start then fast then slow
linear — constant speed
ease-in — slow start (for exiting elements)
ease-out — slow end (for entering elements)
ease-in-out — balanced
cubic-bezier(0.68, -0.55, 0.27, 1.55) — custom`
        }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que les Animations Modernes",
        content: [
          { type: "p", text: "Les Animations Modernes sont un ensemble de fonctionnalités CSS qui permettent de créer des animations interactives et fluides sans entièrement dépendre de JavaScript. Elles incluent <strong>Transitions</strong>, <strong>Animations</strong>, <strong>Scroll-driven Animations</strong> et <strong>@starting-style</strong>." },
          { type: "p", text: "Ces outils vous contrôler comment les éléments passent d'un état à l'autre — qu'il s'agisse de changer la couleur d'un bouton au survol, de créer un effet de rotation continu, ou même de lier le mouvement à la position de défilement." }
        ]
      },
      {
        title: "Pourquoi les utiliser",
        content: [
          { type: "li", text: "<strong>Améliorer l'UX :</strong> Les animations fluides rendent l'interface plus interactive et professionnelle" },
          { type: "li", text: "<strong>Orienter l'attention :</strong> Utilisez le mouvement pour attirer l'attention sur des éléments importants" },
          { type: "li", text: "<strong>Réduire la dépendance JavaScript :</strong> Beaucoup d'effets visuels peuvent être réalisés en CSS uniquement" },
          { type: "li", text: "<strong>Meilleure performance :</strong> Les animations CSS sont traitées par le GPU" },
          { type: "li", text: "<strong>Compatibilité défilement :</strong> Les Scroll-driven Animations lient le mouvement à la position de défilement" },
          { type: "li", text: "<strong>Accessibilité :</strong> Avec prefers-reduced-motion, respectez les préférences utilisateur" }
        ]
      },
      {
        title: "Le problème qu'il résout",
        content: [
          { type: "p", text: "Sans animations et transitions, les changements d'interface se produisent soudainement et brusquement. Cela rend les interactions rigides et artificielles." },
          { type: "p", text: "<strong>Avant :</strong> La couleur du bouton change instantanément, l'affichage/masquage est brutal, aucun moyen d'orienter l'attention." },
          { type: "p", text: "<strong>Après :</strong> Les transitions sont fluides et naturelles, des effets interactifs complexes sont possibles en CSS, le mouvement peut être lié au défilement." }
        ]
      },
      {
        title: "Explication simple",
        content: [
          { type: "li", text: "<strong>Transitions :</strong> Permettent à un élément de passer doucement d'un état CSS à un autre" },
          { type: "li", text: "<strong>Animations :</strong> Plus flexibles — définissez plusieurs étapes (Keyframes)" },
          { type: "li", text: "<strong>Scroll-driven Animations :</strong> Lient l'animation à la position de défilement" },
          { type: "li", text: "<strong>@starting-style :</strong> Définit les styles initiaux lors de l'insertion d'un élément" },
          { type: "li", text: "<strong>will-change :</strong> Indice de performance qui dit au navigateur de se préparer" }
        ]
      },
      {
        title: "En coulisses",
        content: [
          { type: "p", text: "<strong>Transitions :</strong> Le navigateur détecte le changement, calcule les valeurs initiale et finale, utilise la timing function pour chaque image, les applique, et atteint la valeur finale à la fin de la durée." },
          { type: "p", text: "<strong>Animations :</strong> Similaire mais plus complexe — lit les keyframes, calcule le temps courant, détermine entre quelles étapes on se trouve, utilise la timing function, et applique les valeurs selon le nombre d'itérations." },
          { type: "p", text: "<strong>Scroll-driven :</strong> Avec animation-timeline: scroll(), le navigateur lie la progression de l'animation à la position de défilement au lieu du temps." }
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Erreur 1 : Utiliser transition sur des propriétés qui ne s'interpolent pas</strong> — display et font-family ne peuvent pas être transitions" },
          { type: "li", text: "<strong>Erreur 2 : Oublier de spécifier transition-property</strong> — Sans elle, toutes les propriétés transitionables seront animées" },
          { type: "li", text: "<strong>Erreur 3 : Créer des animations longues ennuyeuses</strong> — Plus d'une seconde peut être fatigant" },
          { type: "li", text: "<strong>Erreur 4 : Abuser de will-change</strong> — L'utiliser sur chaque élément dégrade les performances" },
          { type: "li", text: "<strong>Erreur 5 : Ignorer prefers-reduced-motion</strong> — C'est inacceptable pour l'accessibilité" }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "1. Utilisez les animations avec un objectif clair" },
          { type: "li", text: "2. Gardez les animations rapides et confortables (150ms-500ms)" },
          { type: "li", text: "3. Spécifiez les propriétés dans transition-property" },
          { type: "li", text: "4. Utilisez les bonnes timing functions" },
          { type: "li", text: "5. Respectez toujours prefers-reduced-motion" },
          { type: "li", text: "6. Utilisez transform et opacity pour les animations GPU" },
          { type: "li", text: "7. Testez sur différents appareils" },
          { type: "li", text: "8. Utilisez @starting-style pour les effets d'entrée" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quelle est la différence fondamentale entre Transition et Animation en CSS ?",
        options: [
          "Transition est plus rapide qu'Animation",
          "Transition ne bouge qu'entre deux états, tandis qu'Animation peut passer par plusieurs étapes (keyframes)",
          "Animation n'a pas besoin de keyframes",
          "Transition ne fonctionne qu'avec le Hover"
        ],
        correctAnswer: 1,
        explanation: "Transition passe d'un état CSS à un autre (ex: au survol), tandis qu'Animation peut passer par plusieurs étapes définies avec @keyframes et peut se répéter automatiquement."
      }
    ],
    challenge: {
      title: "Créez une page galerie avec animations de défilement",
      description: "Créez une page galerie avec : une barre de progression liée au défilement, des cartes d'images apparaissant en fondu glissant vers le haut, des effets de survol, un indicateur de chargement rotatif, et préférences reduced-motion respectées."
    },
    cheatSheet: {
      title: "Animations Modernes — Référence rapide",
      items: [
        {
          title: "Propriétés Transition",
          content: `transition-property: background-color, transform;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;

/* Raccourci */
transition: background-color 0.3s ease-in-out 0s,
            transform 0.2s ease-out 0.1s;`
        },
        {
          title: "Propriétés Animation",
          content: `@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

animation: slideIn 0.5s ease-out 0s 1 normal forwards;`
        },
        {
          title: "Scroll-driven Animations",
          content: `animation-timeline: scroll(root);
animation-timeline: view();
animation-range: entry 0% entry 100%;`
        }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was sind Moderne Animationen",
        content: [
          { type: "p", text: "Moderne Animationen sind eine Sammlung von CSS-Funktionen, die es Ihnen ermöglichen, interaktive und flüssige Animationen zu erstellen, ohne vollständig auf JavaScript angewiesen zu sein. Dazu gehören <strong>Transitions</strong>, <strong>Animations</strong>, <strong>Scroll-driven Animations</strong> und <strong>@starting-style</strong>." },
          { type: "p", text: "Diese Tools ermöglichen es Ihnen zu kontrollieren, wie Elemente von einem Zustand zum anderen wechseln — sei es eine Farbänderung bei Hover, ein kontinuierlicher Rotationseffekt oder die Verknüpfung von Bewegung mit der Scrollposition." }
        ]
      },
      {
        title: "Warum sie verwenden",
        content: [
          { type: "li", text: "<strong>Benutzererfahrung verbessern:</strong> Flüssige Animationen machen die Oberfläche interaktiver und professioneller" },
          { type: "li", text: "<strong>Benutzeraufmerksamkeit lenken:</strong> Bewegung einsetzen, um Aufmerksamkeit auf wichtige Elemente zu lenken" },
          { type: "li", text: "<strong>JavaScript-Abhängigkeit reduzieren:</strong> Viele visuelle Effekte können rein mit CSS erreicht werden" },
          { type: "li", text: "<strong>Bessere Leistung:</strong> CSS-Animationen werden von der GPU verarbeitet" },
          { type: "li", text: "<strong>Scroll-Kompatibilität:</strong> Scroll-driven Animations verknüpfen Bewegung mit Scrollposition" },
          { type: "li", text: "<strong>Barrierefreiheit:</strong> Mit prefers-reduced-motion können Benutzerpräferenzen respektiert werden" }
        ]
      },
      {
        title: "Das Problem, das es löst",
        content: [
          { type: "p", text: "Ohne Animationen und Transitions passen Änderungen plötzlich und abrupt statt. Das macht Interaktionen steif und unnatürlich." },
          { type: "p", text: "<strong>Vorher:</strong> Buttonfarbe ändert sich augenblicklich, Ein-/Ausblenden ist brutal, keine Möglichkeit die Aufmerksamkeit zu lenken." },
          { type: "p", text: "<strong>Nachher:</strong> Übergänge sind flüssig und natürlich, komplexe Effekte möglich, Bewegung kann mit Scrollposition verknüpft werden." }
        ]
      },
      {
        title: "Einfache Erklärung",
        content: [
          { type: "li", text: "<strong>Transitions:</strong> Ermöglichen sanften Übergang zwischen zwei CSS-Zuständen" },
          { type: "li", text: "<strong>Animations:</strong> Flexibler — definieren Sie mehrere Stufen (Keyframes)" },
          { type: "li", text: "<strong>Scroll-driven Animations:</strong> Verknüpfen Animation mit Scrollposition" },
          { type: "li", text: "<strong>@starting-style:</strong> Definiert Anfangsstile beim Einfügen eines Elements" },
          { type: "li", text: "<strong>will-change:</strong> Leistungshinweis, der dem Browser signalisiert, sich vorzubereiten" }
        ]
      },
      {
        title: "Hinter den Kulissen",
        content: [
          { type: "p", text: "<strong>Transitions:</strong> Der Browser erkennt die Änderung, berechnet Anfangs- und Endwerte, verwendet die Timing-Funktion für jeden Frame, wendet sie an und erreicht den Endwert bei Ablauf der Dauer." },
          { type: "p", text: "<strong>Animations:</strong> Ähnlich, aber komplexer — liest Keyframes, berechnet aktuelle Zeit, bestimmt die Phase, verwendet Timing-Funktion und wendet Werte basierend auf Iterationszahl an." },
          { type: "p", text: "<strong>Scroll-driven:</strong> Mit animation-timeline: scroll() verknüpft der Browser den Fortschritt mit der Scrollposition statt mit der Zeit." }
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Fehler 1: Transition auf Eigenschaften verwenden, die nicht interpolieren</strong> — display und font-family können nicht sanft übergehen" },
          { type: "li", text: "<strong>Fehler 2: transition-property vergessen</strong> — Ohne sie werden alle überführbaren Eigenschaften animiert" },
          { type: "li", text: "<strong>Fehler 3: Lange Animationen erstellen</strong> — Über eine Sekunde kann ermüdend sein" },
          { type: "li", text: "<strong>Fehler 4: will-change übermäßig verwenden</strong> — Auf jedem Element verschlechtert die Leistung" },
          { type: "li", text: "<strong>Fehler 5: prefers-reduced-motion ignorieren</strong> — Inakzeptabel für Barrierefreiheit" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Verwenden Sie Animationen mit klarem Zweck" },
          { type: "li", text: "2. Halten Sie Animationen schnell und angenehm (150ms-500ms)" },
          { type: "li", text: "3. Spezifizieren Sie Eigenschaften in transition-property" },
          { type: "li", text: "4. Verwenden Sie passende Timing-Funktionen" },
          { type: "li", text: "5. Respektieren Sie immer prefers-reduced-motion" },
          { type: "li", text: "6. Verwenden Sie transform und opacity für GPU-beschleunigte Animationen" },
          { type: "li", text: "7. Testen Sie auf verschiedenen Geräten" },
          { type: "li", text: "8. Verwenden Sie @starting-style für Eingangseffekte" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist der grundlegende Unterschied zwischen Transition und Animation in CSS?",
        options: [
          "Transition ist schneller als Animation",
          "Transition bewegt sich nur zwischen zwei Zuständen, während Animation mehrere Stufen (Keyframes) durchlaufen kann",
          "Animation braucht keine Keyframes",
          "Transition funktioniert nur mit Hover"
        ],
        correctAnswer: 1,
        explanation: "Transition wechselt von einem CSS-Zustand zum anderen (z.B. bei Hover), während Animation mehrere mit @keyframes definierte Stufen durchlaufen und sich automatisch wiederholen kann."
      }
    ],
    challenge: {
      title: "Erstellen Sie eine Galerieseite mit Scroll-Animationen",
      description: "Erstellen Sie eine Galerieseite mit: Fortschrittsbalken verknüpft mit Scroll, Bildkarten mit Einblendeffekt, Hover-Effekte, rotierender Ladeanzeige, und reduzierte-Bewegung-Präferenzen respektiert."
    },
    cheatSheet: {
      title: "Moderne Animationen Schnellreferenz",
      items: [
        {
          title: "Transition-Eigenschaften",
          content: `transition-property: background-color, transform;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;

/* Kurzform */
transition: background-color 0.3s ease-in-out 0s,
            transform 0.2s ease-out 0.1s;`
        },
        {
          title: "Animation-Eigenschaften",
          content: `@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

animation: slideIn 0.5s ease-out 0s 1 normal forwards;`
        },
        {
          title: "Scroll-driven Animations",
          content: `animation-timeline: scroll(root);
animation-timeline: view();
animation-range: entry 0% entry 100%;`
        }
      ]
    }
  }
};
export default translations;
