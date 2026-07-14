const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Lists are essential for displaying collections of data in React. Whether it's a list of users, products, or messages, you need to know how to render arrays of data efficiently." },
        { type: "p", text: "In this lesson, we will learn how to render lists and why keys are important for React's performance." },
      ]},
      { title: "Rendering Lists in React", content: [
        { type: "p", text: "To render a list of elements in React, you use the map() method to transform an array of data into an array of JSX elements." },
        { type: "p", text: "The map() method creates a new array by applying a function to each element. In React, you use it to transform data into JSX." },
      ]},
      { title: "Why Keys Are Important", content: [
        { type: "p", text: "Keys help React identify which items have changed, been added, or removed. They provide a stable identity for elements in a list." },
        { type: "p", text: "Without keys, React would have to re-render the entire list on every change, which is inefficient." },
        { type: "callout", title: "Important", text: "Keys should be stable, predictable, and unique among siblings. Avoid using array indices as keys if the list can be reordered or filtered." },
      ]},
      { title: "Using Keys Correctly", content: [
        { type: "p", text: "Best practices for using keys:" },
        { type: "li", text: "<strong>Use unique IDs:</strong> Database IDs, UUIDs, or other unique identifiers" },
        { type: "li", text: "<strong>Avoid using array indices:</strong> Unless the list is static and won't be reordered" },
        { type: "li", text: "<strong>Keys must be unique among siblings:</strong> Not globally unique" },
        { type: "li", text: "<strong>Don't generate keys on the fly:</strong> This defeats the purpose of keys" },
      ]},
      { title: "Filtering Lists", content: [
        { type: "p", text: "You can filter lists using the filter() method before mapping. This creates a new array with only the items that pass the test." },
        { type: "p", text: "Combining filter() and map() is a common pattern for displaying filtered data." },
      ]},
      { title: "Sorting Lists", content: [
        { type: "p", text: "You can sort lists using the sort() method. Remember that sort() mutates the original array, so always create a copy first using spread operator or slice()." },
        { type: "p", text: "Tip: Create a sorted copy of the array rather than sorting the original." },
      ]},
      { title: "Nested Lists", content: [
        { type: "p", text: "Sometimes you need to render lists inside lists. You can nest map() calls, but keep it readable by extracting into components." },
        { type: "p", text: "For very complex nested lists, consider extracting the inner list into its own component." },
      ]},
      { title: "Performance Considerations", content: [
        { type: "p", text: "When working with large lists, consider these performance optimizations:" },
        { type: "li", text: "<strong>Virtualization:</strong> Only render items visible in the viewport" },
        { type: "li", text: "<strong>Pagination:</strong> Load data in chunks" },
        { type: "li", text: "<strong>React.memo:</strong> Memoize list items to prevent unnecessary re-renders" },
        { type: "li", text: "<strong>Use keys properly:</strong> Helps React optimize re-rendering" },
      ]},
    ],
    quiz: [
      { question: "Why are keys important when rendering lists in React?", options: ["They make lists look pretty", "They help React identify changed items", "They are required for CSS styling", "They prevent memory leaks"], explanation: "Keys help React identify which items have changed, been added, or removed. They provide a stable identity for elements, allowing React to optimize re-rendering." },
    ],
    challenge: { title: "Challenge: Build a filterable list", description: "Create a component that displays a list of users with the ability to filter by name and sort by age." },
    cheatSheet: { title: "Lists and Keys Cheat Sheet", items: [
      { term: "map()", definition: "Transform array data into JSX elements" },
      { term: "Keys", definition: "Help React identify changed items in lists" },
      { term: "Unique keys", definition: "Use stable, unique IDs among siblings" },
      { term: "filter()", definition: "Filter array before mapping" },
      { term: "sort()", definition: "Sort array (remember to copy first)" },
      { term: "Virtualization", definition: "Render only visible items for large lists" },
      { term: "Nested lists", definition: "Use nested map() or extract to components" },
      { term: "Don't use index as key", definition: "Unless list is static and won't reorder" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Les listes sont essentielles pour afficher des collections de données dans React. Qu'il s'agisse d'une liste d'utilisateurs, de produits ou de messages, vous devez savoir comment afficher des tableaux de données efficacement." },
        { type: "p", text: "Dans cette leçon, nous apprendrons comment afficher des listes et pourquoi les clés sont importantes pour les performances de React." },
      ]},
      { title: "Afficher des listes dans React", content: [
        { type: "p", text: "Pour afficher une liste d'éléments dans React, vous utilisez la méthode map() pour transformer un tableau de données en un tableau d'éléments JSX." },
        { type: "p", text: "La méthode map() crée un nouveau tableau en appliquant une fonction à chaque élément. Dans React, vous l'utilisez pour transformer des données en JSX." },
      ]},
      { title: "Pourquoi les clés sont importantes", content: [
        { type: "p", text: "Les clés aident React à identifier les éléments qui ont changé, été ajoutés ou supprimés. Elles fournissent une identité stable pour les éléments dans une liste." },
        { type: "p", text: "Sans clés, React devrait re-rendre la liste entière à chaque changement, ce qui est inefficace." },
        { type: "callout", title: "Important", text: "Les clés doivent être stables, prévisibles et uniques parmi les frères. Évitez d'utiliser les indices de tableau comme clés si la liste peut être réordonnée ou filtrée." },
      ]},
      { title: "Utiliser les clés correctement", content: [
        { type: "p", text: "Meilleures pratiques pour l'utilisation des clés :" },
        { type: "li", text: "<strong>Utilisez des IDs uniques :</strong> IDs de base de données, UUIDs ou autres identifiants uniques" },
        { type: "li", text: "<strong>Évitez d'utiliser les indices de tableau :</strong> Sauf si la liste est statique et ne sera pas réordonnée" },
        { type: "li", text: "<strong>Les clés doivent être uniques parmi les frères :</strong> Pas mondialement uniques" },
        { type: "li", text: "<strong>Ne générez pas de clés à la volée :</strong> Cela annule l'objectif des clés" },
      ]},
      { title: "Filtrer les listes", content: [
        { type: "p", text: "Vous pouvez filtrer les listes en utilisant la méthode filter() avant le mapping. Cela crée un nouveau tableau avec uniquement les éléments qui passent le test." },
        { type: "p", text: "Combiner filter() et map() est un patron courant pour afficher des données filtrées." },
      ]},
      { title: "Trier les listes", content: [
        { type: "p", text: "Vous pouvez trier les listes en utilisant la méthode sort(). Rappelez-vous que sort() mute le tableau original, donc créez toujours une copie d'abord avec l'opérateur spread ou slice()." },
        { type: "p", text: "Conseil : Créez une copie triée du tableau plutôt que de trier l'original." },
      ]},
      { title: "Listes imbriquées", content: [
        { type: "p", text: "Parfois, vous devez afficher des listes dans des listes. Vous pouvez imbriquer les appels map(), mais gardez-le lisible en extrayant dans des composants." },
        { type: "p", text: "Pour des listes imbriquées très complexes, envisagez d'extraire la liste interne dans son propre composant." },
      ]},
      { title: "Considérations de performance", content: [
        { type: "p", text: "Lorsque vous travaillez avec de grandes listes, considérez ces optimisations de performance :" },
        { type: "li", text: "<strong>Virtualisation :</strong> N'affichez que les éléments visibles dans le viewport" },
        { type: "li", text: "<strong>Pagination :</strong> Chargez les données par morceaux" },
        { type: "li", text: "<strong>React.memo :</strong> Mémoïsez les éléments de liste pour éviter les re-rendus inutiles" },
        { type: "li", text: "<strong>Utilisez les clés correctement :</strong> Aide React à optimiser le re-rendu" },
      ]},
    ],
    quiz: [
      { question: "Pourquoi les clés sont-elles importantes lors de l'affichage de listes dans React ?", options: ["Elles rendent les listes jolies", "Elles aident React à identifier les éléments modifiés", "Elles sont nécessaires pour le style CSS", "Elles empêchent les fuites de mémoire"], explanation: "Les clés aident React à identifier les éléments qui ont changé, été ajoutés ou supprimés. Elles fournissent une identité stable pour les éléments, permettant à React d'optimiser le re-rendu." },
    ],
    challenge: { title: "Défi : Construisez une liste filtrable", description: "Créez un composant qui affiche une liste d'utilisateurs avec la possibilité de filtrer par nom et trier par âge." },
    cheatSheet: { title: "Référence des listes et clés", items: [
      { term: "map()", definition: "Transforme des données de tableau en éléments JSX" },
      { term: "Clés", definition: "Aident React à identifier les éléments modifiés dans les listes" },
      { term: "Clés uniques", definition: "Utilisez des IDs stables et uniques parmi les frères" },
      { term: "filter()", definition: "Filtre le tableau avant le mapping" },
      { term: "sort()", definition: "Trie le tableau (souvenez-vous de copier d'abord)" },
      { term: "Virtualisation", definition: "N'affichez que les éléments visibles pour les grandes listes" },
      { term: "Listes imbriquées", definition: "Utilisez des map() imbriqués ou extrayez dans des composants" },
      { term: "N'utilisez pas l'index comme clé", definition: "Sauf si la liste est statique et ne sera pas réordonnée" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Listen sind essenziell für die Anzeige von Datensammlungen in React. Ob Benutzerliste, Produktliste oder Nachrichtenliste - Sie müssen wissen, wie man Datenarrays effizient darstellt." },
        { type: "p", text: "In dieser Lektion lernen wir, wie man Listen darstellt und warum Schlüssel wichtig für Reacts Leistung sind." },
      ]},
      { title: "Listen in React darstellen", content: [
        { type: "p", text: "Um eine Liste von Elementen in React darzustellen, verwenden Sie die map()-Methode, um ein Daten-Array in ein Array von JSX-Elementen zu transformieren." },
        { type: "p", text: "Die map()-Methode erstellt ein neues Array, indem sie eine Funktion auf jedes Element anwendet. In React verwenden Sie sie, um Daten in JSX zu transformieren." },
      ]},
      { title: "Warum Schlüssel wichtig sind", content: [
        { type: "p", text: "Schlüssel helfen React zu identifizieren, welche Elemente sich geändert, hinzugefügt oder entfernt wurden. Sie geben Elementen in einer Liste eine stabile Identität." },
        { type: "p", text: "Ohne Schlüssel müsste React die gesamte Liste bei jeder Änderung neu rendern, was ineffizient ist." },
        { type: "callout", title: "Wichtig", text: "Schlüssel sollten stabil, vorhersagbar und unter Geschwisterelementen einzigartig sein. Vermeiden Sie die Verwendung von Array-Indizes als Schlüssel, wenn die Liste umsortiert oder gefiltert werden kann." },
      ]},
      { title: "Schlüssel korrekt verwenden", content: [
        { type: "p", text: "Best Practices für die Verwendung von Schlüsseln:" },
        { type: "li", text: "<strong>Einzigartige IDs verwenden:</strong> Datenbank-IDs, UUIDs oder andere einzigartige Bezeichner" },
        { type: "li", text: "<strong>Array-Indizes vermeiden:</strong> Nur wenn die Liste statisch ist und nicht umsortiert wird" },
        { type: "li", text: "<strong>Schlüssel müssen unter Geschwistern einzigartig sein:</strong> Nicht global einzigartig" },
        { type: "li", text: "<strong>Keine Schlüssel in Eigenregie generieren:</strong> Das widerspricht dem Zweck von Schlüsseln" },
      ]},
      { title: "Listen filtern", content: [
        { type: "p", text: "Sie können Listen mit der filter()-Methode vor dem Mapping filtern. Dies erstellt ein neues Array mit nur den Elementen, die den Test bestehen." },
        { type: "p", text: "Die Kombination aus filter() und map() ist ein gängiges Muster zur Anzeige gefilterter Daten." },
      ]},
      { title: "Listen sortieren", content: [
        { type: "p", text: "Sie können Listen mit der sort()-Methode sortieren. Denken Sie daran, dass sort() das ursprüngliche Array verändert, also erstellen Sie immer zuerst eine Kopie mit dem Spread-Operator oder slice()." },
        { type: "p", text: "Tipp: Erstellen Sie eine sortierte Kopie des Arrays, anstatt das Original zu sortieren." },
      ]},
      { title: "Verschachtelte Listen", content: [
        { type: "p", text: "Manchmal müssen Sie Listen innerhalb von Listen darstellen. Sie können map()-Aufrufe verschachteln, aber halten Sie es lesbar, indem Sie in Komponenten extrahieren." },
        { type: "p", text: "Für sehr komplexe verschachtelte Listen erwägen Sie, die innere Liste in eine eigene Komponente zu extrahieren." },
      ]},
      { title: "Leistungsaspekte", content: [
        { type: "p", text: "Bei der Arbeit mit großen Listen beachten Sie diese Leistungsoptimierungen:" },
        { type: "li", text: "<strong>Virtualisierung:</strong> Nur sichtbare Elemente im Viewport rendern" },
        { type: "li", text: "<strong>Paginierung:</strong> Daten in Chargen laden" },
        { type: "li", text: "<strong>React.memo:</strong> Listenelemente memoisieren, um unnötige Re-Renderings zu vermeiden" },
        { type: "li", text: "<strong>Schlüssel korrekt verwenden:</strong> Hilft React, Re-Renderings zu optimieren" },
      ]},
    ],
    quiz: [
      { question: "Warum sind Schlüssel beim Darstellen von Listen in React wichtig?", options: ["Sie machen Listen hübsch", "Sie helfen React, geänderte Elemente zu identifizieren", "Sie sind für das CSS-Styling erforderlich", "Sie verhindern Speicherlecks"], explanation: "Schlüssel helfen React zu identifizieren, welche Elemente sich geändert, hinzugefügt oder entfernt wurden. Sie geben Elementen eine stabile Identität und ermöglichen es React, Re-Renderings zu optimieren." },
    ],
    challenge: { title: "Herausforderung: Erstellen Sie eine filterbare Liste", description: "Erstellen Sie eine Komponente, die eine Benutzerliste mit der Möglichkeit zum Filtern nach Name und Sortieren nach Alter anzeigt." },
    cheatSheet: { title: "Übersicht über Listen und Schlüssel", items: [
      { term: "map()", definition: "Transformiert Array-Daten in JSX-Elemente" },
      { term: "Schlüssel", definition: "Helfen React, geänderte Elemente in Listen zu identifizieren" },
      { term: "Einzigartige Schlüssel", definition: "Verwenden Sie stabile, einzigartige IDs unter Geschwistern" },
      { term: "filter()", definition: "Filtert Array vor dem Mapping" },
      { term: "sort()", definition: "Sortiert Array (denken Sie daran, zuerst zu kopieren)" },
      { term: "Virtualisierung", definition: "Nur sichtbare Elemente für große Listen rendern" },
      { term: "Verschachtelte Listen", definition: "Verwenden Sie verschachtelte map() oder extrahieren Sie in Komponenten" },
      { term: "Index nicht als Schlüssel verwenden", definition: "Nur wenn Liste statisch ist und nicht umsortiert wird" },
    ]}
  },
};

export default translations;
