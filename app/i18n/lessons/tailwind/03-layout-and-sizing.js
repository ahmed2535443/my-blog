const translations = {
  en: {
    sections: [
      { title: "Layout System in Tailwind", content: [
        { type: "p", text: "Tailwind CSS provides a layout system built on utility classes covering all CSS properties related to layout, sizing, and spacing." },
        { type: "p", text: "Tailwind uses a unified spacing scale used in padding, margin, gap, and sizes. This scale starts from 0 and goes up to 96, with half-values." },
      ]},
      { title: "Spacing System", content: [
        { type: "li", text: "<strong>Padding:</strong> Distance between element content and its border. Supports directional shortcuts: px (horizontal), py (vertical), pt/pr/pb/pl (specific sides)." },
        { type: "li", text: "<strong>Margin:</strong> Distance outside the element. Supports the same Padding shortcuts plus mx-auto for centering." },
        { type: "li", text: "<strong>Gap:</strong> Works only inside Flexbox or Grid containers. Sets spacing between child elements." },
      ]},
      { title: "Flexbox with Tailwind", content: [
        { type: "p", text: "Tailwind provides a comprehensive set of Flexbox classes. You can control direction, distribution, and alignment easily." },
        { type: "li", text: "flex / inline-flex to activate Flexbox" },
        { type: "li", text: "flex-row / flex-col for direction" },
        { type: "li", text: "justify-start/center/end/between/around/evenly for horizontal distribution" },
        { type: "li", text: "items-start/center/end/baseline/stretch for vertical alignment" },
      ]},
      { title: "CSS Grid with Tailwind", content: [
        { type: "p", text: "CSS Grid is the most powerful layout system in CSS. Tailwind provides easy classes for creating complex grids." },
        { type: "li", text: "grid / inline-grid to activate Grid" },
        { type: "li", text: "grid-cols-1 through grid-cols-12 for column count" },
        { type: "li", text: "col-span-* for column spanning" },
        { type: "li", text: "grid-rows-* for row configuration" },
      ]},
      { title: "Sizing", content: [
        { type: "p", text: "Tailwind provides classes for controlling width, height, min/max sizes. You can use the spacing scale or custom values." },
        { type: "li", text: "w-* for width (w-full, w-1/2, w-64, etc.)" },
        { type: "li", text: "h-* for height (h-full, h-screen, h-48, etc.)" },
        { type: "li", text: "min-w-*, max-w-*, min-h-*, max-h-* for constraints" },
        { type: "li", text: "size-* sets both width and height" },
      ]},
      { title: "Position", content: [
        { type: "p", text: "Position classes control how an element is placed in the page flow or relative to its container." },
        { type: "li", text: "static, relative, absolute, fixed, sticky" },
        { type: "li", text: "top-*, right-*, bottom-*, left-* for offsets" },
        { type: "li", text: "inset-* for setting all sides at once" },
        { type: "li", text: "z-* for stacking order (z-index)" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Tailwind provides a unified spacing scale from 0-96" },
        { type: "li", text: "Flexbox classes cover direction, alignment, and distribution" },
        { type: "li", text: "Grid classes handle columns, rows, and spanning" },
        { type: "li", text: "Sizing classes control width, height, and constraints" },
        { type: "li", text: "Position classes manage static, relative, absolute, fixed, and sticky positioning" },
      ]}
    ],
    quiz: [
      { question: "What does mx-auto do?", options: ["Sets margin on all sides", "Centers an element horizontally", "Sets margin-left and margin-right to auto", "Both B and C"], explanation: "mx-auto sets margin-left and margin-right to auto, which centers the element horizontally." },
      { question: "What is the difference between gap and margin?", options: ["No difference", "Gap doesn't add space on outer edges of the container", "Margin doesn't work with Flexbox", "Gap only works with Grid"], explanation: "Gap doesn't add space on the outer edges of the container, making it cleaner than margin for spacing between items." },
      { question: "How do you make an element span 2 columns in a grid?", options: ["grid-cols-2", "col-span-2", "span-2", "width-2"], explanation: "col-span-2 makes an element span 2 columns in a CSS Grid layout." }
    ],
    challenge: { title: "Build a Responsive Dashboard Layout", description: "Create a dashboard layout with a sidebar, header, and main content area using Flexbox and Grid. The sidebar should be hidden on mobile and visible on desktop." },
    cheatSheet: { title: "Layout & Sizing Cheat Sheet", items: [
      { term: "flex", definition: "display: flex" },
      { term: "grid", definition: "display: grid" },
      { term: "p-4 / m-4", definition: "padding / margin: 1rem" },
      { term: "gap-4", definition: "gap: 1rem" },
      { term: "grid-cols-3", definition: "3-column grid" },
      { term: "col-span-2", definition: "Span 2 columns" },
      { term: "w-full", definition: "width: 100%" },
      { term: "h-screen", definition: "height: 100vh" },
      { term: "sticky top-0", definition: "Sticky positioning at top" },
      { term: "z-10", definition: "z-index: 10" }
    ]}
  },
  fr: {
    sections: [
      { title: "Système de mise en page dans Tailwind", content: [
        { type: "p", text: "Tailwind CSS fournit un système de mise en page basé sur des classes utilitaires couvrant toutes les propriétés CSS liées à la mise en page, au dimensionnement et à l'espacement." },
        { type: "p", text: "Tailwind utilise une échelle d'espacement unifiée utilisée pour le padding, la marge, l'interligne et les tailles." },
      ]},
      { title: "Système d'espacement", content: [
        { type: "li", text: "<strong>Padding :</strong> Espace entre le contenu de l'élément et sa bordure. Raccourcis directionnels : px (horizontal), py (vertical)." },
        { type: "li", text: "<strong>Marge :</strong> Espace en dehors de l'élément. Supporte les mêmes raccourcis plus mx-auto pour le centrage." },
        { type: "li", text: "<strong>Gap :</strong> Fonctionne uniquement dans les conteneurs Flexbox ou Grid. Définit l'espacement entre les éléments enfants." },
      ]},
      { title: "Flexbox avec Tailwind", content: [
        { type: "p", text: "Tailwind fournit un ensemble complet de classes Flexbox. Vous pouvez contrôler la direction, la distribution et l'alignement facilement." },
        { type: "li", text: "flex / inline-flex pour activer Flexbox" },
        { type: "li", text: "flex-row / flex-col pour la direction" },
        { type: "li", text: "justify-start/center/end/between pour la distribution" },
        { type: "li", text: "items-start/center/end pour l'alignement vertical" },
      ]},
      { title: "CSS Grid avec Tailwind", content: [
        { type: "p", text: "CSS Grid est le système de mise en page le plus puissant en CSS. Tailwind fournit des classes faciles pour créer des grilles complexes." },
        { type: "li", text: "grid / inline-grid pour activer Grid" },
        { type: "li", text: "grid-cols-1 à grid-cols-12 pour le nombre de colonnes" },
        { type: "li", text: "col-span-* pour l'étendue des colonnes" },
      ]},
      { title: "Dimensionnement", content: [
        { type: "p", text: "Tailwind fournit des classes pour contrôler la largeur, la hauteur, les tailles min/max." },
        { type: "li", text: "w-* pour la largeur (w-full, w-1/2, w-64)" },
        { type: "li", text: "h-* pour la hauteur (h-full, h-screen, h-48)" },
        { type: "li", text: "min-w-*, max-w-*, min-h-*, max-h-* pour les contraintes" },
      ]},
      { title: "Position", content: [
        { type: "p", text: "Les classes de position contrôlent comment un élément est placé dans le flux de la page." },
        { type: "li", text: "static, relative, absolute, fixed, sticky" },
        { type: "li", text: "top-*, right-*, bottom-*, left-* pour les décalages" },
        { type: "li", text: "z-* pour l'ordre de superposition" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Tailwind fournit une échelle d'espacement unifiée de 0-96" },
        { type: "li", text: "Les classes Flexbox couvrent la direction, l'alignement et la distribution" },
        { type: "li", text: "Les classes Grid gèrent les colonnes, lignes et l'étendue" },
        { type: "li", text: "Les classes de dimensionnement contrôlent largeur et hauteur" },
      ]}
    ],
    quiz: [
      { question: "Que fait mx-auto ?", options: ["Définit la marge sur tous les côtés", "Centre un élément horizontalement", "Définit margin-left et margin-right à auto", "Les deux B et C"], explanation: "mx-auto définit margin-left et margin-right à auto, ce qui centre l'élément horizontalement." },
      { question: "Quelle est la différence entre gap et margin ?", options: ["Pas de différence", "Gap n'ajoute pas d'espace sur les bords extérieurs", "Margin ne fonctionne pas avec Flexbox", "Gap ne fonctionne qu'avec Grid"], explanation: "Gap n'ajoute pas d'espace sur les bords extérieurs du conteneur." },
      { question: "Comment faire couvrir 2 colonnes à un élément dans une grille ?", options: ["grid-cols-2", "col-span-2", "span-2", "width-2"], explanation: "col-span-2 fait couvrir 2 colonnes à un élément dans un layout CSS Grid." }
    ],
    challenge: { title: "Construire un tableau de bord responsive", description: "Créez un layout de tableau de bord avec une barre latérale, un en-tête et une zone de contenu principal en utilisant Flexbox et Grid." },
    cheatSheet: { title: "Fiche mémo Mise en page et Dimensionnement", items: [
      { term: "flex", definition: "display: flex" },
      { term: "grid", definition: "display: grid" },
      { term: "p-4 / m-4", definition: "padding / margin: 1rem" },
      { term: "gap-4", definition: "gap: 1rem" },
      { term: "grid-cols-3", definition: "Grille à 3 colonnes" },
      { term: "col-span-2", definition: "Couvre 2 colonnes" },
      { term: "w-full", definition: "width: 100%" },
      { term: "h-screen", definition: "height: 100vh" },
      { term: "sticky top-0", definition: "Position sticky en haut" },
      { term: "z-10", definition: "z-index: 10" }
    ]}
  },
  de: {
    sections: [
      { title: "Layout-System in Tailwind", content: [
        { type: "p", text: "Tailwind CSS bietet ein Layout-System basierend auf Utility-Klassen, das alle CSS-Eigenschaften zu Layout, Größenanpassung und Abstand abdeckt." },
        { type: "p", text: "Tailwind verwendet eine einheitliche Abstandsskala für padding, margin, gap und Größen." },
      ]},
      { title: "Abstandssystem", content: [
        { type: "li", text: "<strong>Padding:</strong> Abstand zwischen dem Inhalt des Elements und seinem Rand. Richtungskürzel: px (horizontal), py (vertikal)." },
        { type: "li", text: "<strong>Margin:</strong> Abstand außerhalb des Elements. Unterstützt die gleichen Padding-Kürzel plus mx-auto zum Zentrieren." },
        { type: "li", text: "<strong>Gap:</strong> Funktioniert nur in Flexbox- oder Grid-Containern." },
      ]},
      { title: "Flexbox mit Tailwind", content: [
        { type: "p", text: "Tailwind bietet ein umfassendes Set an Flexbox-Klassen. Sie können Richtung, Verteilung und Ausrichtung einfach steuern." },
        { type: "li", text: "flex / inline-flex zum Aktivieren von Flexbox" },
        { type: "li", text: "flex-row / flex-col für die Richtung" },
        { type: "li", text: "justify-start/center/end/between für die Verteilung" },
        { type: "li", text: "items-start/center/end für die vertikale Ausrichtung" },
      ]},
      { title: "CSS Grid mit Tailwind", content: [
        { type: "p", text: "CSS Grid ist das mächtigste Layout-System in CSS. Tailwind bietet einfache Klassen für komplexe Raster." },
        { type: "li", text: "grid / inline-grid zum Aktivieren von Grid" },
        { type: "li", text: "grid-cols-1 bis grid-cols-12 für die Spaltenanzahl" },
        { type: "li", text: "col-span-* für die Spaltenbreite" },
      ]},
      { title: "Größenanpassung", content: [
        { type: "p", text: "Tailwind bietet Klassen zur Steuerung von Breite, Höhe und Min/Max-Größen." },
        { type: "li", text: "w-* für Breite (w-full, w-1/2, w-64)" },
        { type: "li", text: "h-* für Höhe (h-full, h-screen, h-48)" },
        { type: "li", text: "min-w-*, max-w-*, min-h-*, max-h-* für Einschränkungen" },
      ]},
      { title: "Position", content: [
        { type: "p", text: "Positionsklassen steuern, wie ein Element im Seitenfluss platziert wird." },
        { type: "li", text: "static, relative, absolute, fixed, sticky" },
        { type: "li", text: "top-*, right-*, bottom-*, left-* für Verschiebungen" },
        { type: "li", text: "z-* für Stapelreihenfolge" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Tailwind bietet eine einheitliche Abstandsskala von 0-96" },
        { type: "li", text: "Flexbox-Klassen decken Richtung, Ausrichtung und Verteilung ab" },
        { type: "li", text: "Grid-Klassen verwalten Spalten, Zeilen und Breite" },
        { type: "li", text: "Größenklassen steuern Breite und Höhe" },
      ]}
    ],
    quiz: [
      { question: "Was macht mx-auto?", options: ["Setzt Margin auf allen Seiten", "Zentriert ein Element horizontal", "Setzt margin-left und margin-right auf auto", "Sowohl B als auch C"], explanation: "mx-auto setzt margin-left und margin-right auf auto, was das Element horizontal zentriert." },
      { question: "Was ist der Unterschied zwischen gap und margin?", options: ["Kein Unterschied", "Gap fügt keinen Abstand an den Außenkanten hinzu", "Margin funktioniert nicht mit Flexbox", "Gap funktioniert nur mit Grid"], explanation: "Gap fügt keinen Abstand an den Außenkanten des Containers hinzu." },
      { question: "Wie lässt man ein Element 2 Spalten in einem Grid überstreichen?", options: ["grid-cols-2", "col-span-2", "span-2", "width-2"], explanation: "col-span-2 lässt ein Element 2 Spalten in einem CSS Grid-Layout überstreichen." }
    ],
    challenge: { title: "Responsive Dashboard-Layout erstellen", description: "Erstellen Sie ein Dashboard-Layout mit einer Seitenleiste, einem Header und einem Hauptinhaltsbereich mit Flexbox und Grid." },
    cheatSheet: { title: "Layout & Größenanpassung Spickzettel", items: [
      { term: "flex", definition: "display: flex" },
      { term: "grid", definition: "display: grid" },
      { term: "p-4 / m-4", definition: "padding / margin: 1rem" },
      { term: "gap-4", definition: "gap: 1rem" },
      { term: "grid-cols-3", definition: "3-Spalten-Raster" },
      { term: "col-span-2", definition: "2 Spalten überstreichen" },
      { term: "w-full", definition: "width: 100%" },
      { term: "h-screen", definition: "height: 100vh" },
      { term: "sticky top-0", definition: "Sticky-Positionierung oben" },
      { term: "z-10", definition: "z-index: 10" }
    ]}
  }
};
export default translations;
