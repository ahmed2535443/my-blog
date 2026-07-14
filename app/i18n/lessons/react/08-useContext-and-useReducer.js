const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "As your React applications grow, managing state across many components becomes challenging. React provides useContext and useReducer hooks to help manage complex state and avoid prop drilling." },
        { type: "p", text: "In this lesson, we will learn how to use these powerful hooks to manage state more effectively." },
      ]},
      { title: "The Problem with Prop Drilling", content: [
        { type: "p", text: "Prop drilling is when you pass data through multiple layers of components that don't need it. This makes code hard to maintain and understand." },
        { type: "p", text: "Problems with prop drilling:" },
        { type: "li", text: "Components receive props they don't use" },
        { type: "li", text: "Adding new props requires changing many components" },
        { type: "li", text: "Code becomes tightly coupled" },
        { type: "li", text: "Difficult to refactor and test" },
      ]},
      { title: "What is useContext?", content: [
        { type: "p", text: "The useContext hook allows you to access context values without passing props through every component. It provides a way to share data across the component tree." },
        { type: "p", text: "How to use useContext:" },
        { type: "li", text: "1. Create a context with createContext" },
        { type: "li", text: "2. Wrap components with Context.Provider" },
        { type: "li", text: "3. Access values in any child component with useContext" },
      ]},
      { title: "Creating and Using Context", content: [
        { type: "p", text: "To use context effectively:" },
        { type: "li", text: "Create context at the top level of your component tree" },
        { type: "li", text: "Provide values using the Provider component" },
        { type: "li", text: "Consume values in any nested component with useContext" },
        { type: "callout", title: "Tip", text: "Don't put everything into one context. Create separate contexts for different types of data to avoid unnecessary re-renders." },
      ]},
      { title: "What is useReducer?", content: [
        { type: "p", text: "The useReducer hook is an alternative to useState for complex state logic. It uses a reducer function to manage state transitions based on actions." },
        { type: "p", text: "When to use useReducer instead of useState:" },
        { type: "li", text: "When state has complex nested structures" },
        { type: "li", text: "When you have multiple related state updates" },
        { type: "li", text: "When the next state depends on the previous state" },
        { type: "li", text: "When you want to centralize state update logic" },
      ]},
      { title: "How useReducer Works", content: [
        { type: "p", text: "useReducer works similarly to Redux. It takes a reducer function and initial state, returning the current state and a dispatch function." },
        { type: "p", text: "The reducer function takes the current state and an action, then returns the new state based on the action type." },
      ]},
      { title: "Combining useContext and useReducer", content: [
        { type: "p", text: "The real power comes when you combine useContext and useReducer. You can create a complete state management solution without external libraries." },
        { type: "p", text: "Benefits of this pattern:" },
        { type: "li", text: "Centralized state management" },
        { type: "li", text: "No prop drilling" },
        { type: "li", text: "Predictable state updates" },
        { type: "li", text: "Easy to test and debug" },
      ]},
      { title: "When to Use Each Hook", content: [
        { type: "p", text: "Choose the right hook for your needs:" },
        { type: "li", text: "<strong>useState:</strong> Simple, independent state values" },
        { type: "li", text: "<strong>useReducer:</strong> Complex state logic, multiple related updates" },
        { type: "li", text: "<strong>useContext:</strong> Sharing data across component tree without prop drilling" },
        { type: "li", text: "<strong>useReducer + useContext:</strong> Complex shared state across many components" },
      ]},
    ],
    quiz: [
      { question: "What problem does useContext solve?", options: ["State management", "Prop drilling", "Side effects", "Performance issues"], explanation: "useContext solves prop drilling by allowing you to access context values directly in any component without passing props through intermediate components." },
    ],
    challenge: { title: "Challenge: Build a theme switcher", description: "Create a theme switcher using useContext and useReducer that allows users to toggle between light and dark themes." },
    cheatSheet: { title: "useContext and useReducer Cheat Sheet", items: [
      { term: "useContext", definition: "Access context values without prop drilling" },
      { term: "createContext", definition: "Create a new context object" },
      { term: "Context.Provider", definition: "Provide context values to child components" },
      { term: "useReducer", definition: "Complex state logic with reducer functions" },
      { term: "Reducer function", definition: "Takes state and action, returns new state" },
      { term: "dispatch", definition: "Function to send actions to reducer" },
      { term: "Combine both", definition: "Complete state management without external libraries" },
      { term: "When to use", definition: "useState for simple, useReducer for complex state" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "À mesure que vos applications React grandissent, la gestion de l'état à travers de nombreux composants devient difficile. React fournit les hooks useContext et useReducer pour aider à gérer l'état complexe et à éviter le perçage de props." },
        { type: "p", text: "Dans cette leçon, nous apprendrons comment utiliser ces hooks puissants pour gérer l'état plus efficacement." },
      ]},
      { title: "Le problème du perçage de props", content: [
        { type: "p", text: "Le perçage de props est quand vous passez des données à travers plusieurs couches de composants qui n'en ont pas besoin. Cela rend le code difficile à maintenir et à comprendre." },
        { type: "p", text: "Problèmes avec le perçage de props :" },
        { type: "li", text: "Les composants reçoivent des props qu'ils n'utilisent pas" },
        { type: "li", text: "Ajouter de nouvelles props nécessite de changer plusieurs composants" },
        { type: "li", text: "Le code devient fortement couplé" },
        { type: "li", text: "Difficile à refactoriser et à tester" },
      ]},
      { title: "Qu'est-ce que useContext ?", content: [
        { type: "p", text: "Le hook useContext vous permet d'accéder aux valeurs de contexte sans passer des props à travers chaque composant. Il fournit un moyen de partager des données à travers l'arborescence de composants." },
        { type: "p", text: "Comment utiliser useContext :" },
        { type: "li", text: "1. Créez un contexte avec createContext" },
        { type: "li", text: "2. Enveloppez les composants avec Context.Provider" },
        { type: "li", text: "3. Accédez aux valeurs dans n'importe quel composant enfant avec useContext" },
      ]},
      { title: "Créer et utiliser le contexte", content: [
        { type: "p", text: "Pour utiliser le contexte efficacement :" },
        { type: "li", text: "Créez le contexte au niveau supérieur de l'arborescence de composants" },
        { type: "li", text: "Fournissez des valeurs en utilisant le composant Provider" },
        { type: "li", text: "Consommez les valeurs dans n'importe quel composant imbriqué avec useContext" },
        { type: "callout", title: "Conseil", text: "Ne mettez pas tout dans un seul contexte. Créez des contextes séparés pour différents types de données pour éviter les re-rendus inutiles." },
      ]},
      { title: "Qu'est-ce que useReducer ?", content: [
        { type: "p", text: "Le hook useReducer est une alternative à useState pour la logique d'état complexe. Il utilise une fonction réducteur pour gérer les transitions d'état basées sur des actions." },
        { type: "p", text: "Quand utiliser useReducer au lieu de useState :" },
        { type: "li", text: "Quand l'état a des structures imbriquées complexes" },
        { type: "li", text: "Quand vous avez plusieurs mises à jour d'état liées" },
        { type: "li", text: "Quand le prochain état dépend de l'état précédent" },
        { type: "li", text: "Quand vous voulez centraliser la logique de mise à jour d'état" },
      ]},
      { title: "Comment fonctionne useReducer", content: [
        { type: "p", text: "useReducer fonctionne de manière similaire à Redux. Il prend une fonction réducteur et un état initial, retournant l'état actuel et une fonction dispatch." },
        { type: "p", text: "La fonction réducteur prend l'état actuel et une action, puis retourne le nouvel état basé sur le type d'action." },
      ]},
      { title: "Combiner useContext et useReducer", content: [
        { type: "p", text: "Le vrai pouvoir vient quand vous combinez useContext et useReducer. Vous pouvez créer une solution complète de gestion d'état sans bibliothèques externes." },
        { type: "p", text: "Avantages de ce patron :" },
        { type: "li", text: "Gestion d'état centralisée" },
        { type: "li", text: "Pas de perçage de props" },
        { type: "li", text: "Mises à jour d'état prévisibles" },
        { type: "li", text: "Facile à tester et à déboguer" },
      ]},
      { title: "Quand utiliser chaque hook", content: [
        { type: "p", text: "Choisissez le bon hook pour vos besoins :" },
        { type: "li", text: "<strong>useState :</strong> Valeurs d'état simples et indépendantes" },
        { type: "li", text: "<strong>useReducer :</strong> Logique d'état complexe, plusieurs mises à jour liées" },
        { type: "li", text: "<strong>useContext :</strong> Partage de données à travers l'arborescence sans perçage de props" },
        { type: "li", text: "<strong>useReducer + useContext :</strong> État partagé complexe à travers de nombreux composants" },
      ]},
    ],
    quiz: [
      { question: "Quel problème useContext résout-il ?", options: ["La gestion d'état", "Le perçage de props", "Les effets secondaires", "Les problèmes de performance"], explanation: "useContext résout le perçage de props en vous permettant d'accéder aux valeurs de contexte directement dans n'importe quel composant sans passer des props à travers des composants intermédiaires." },
    ],
    challenge: { title: "Défi : Construisez un changeur de thème", description: "Créez un changeur de thème en utilisant useContext et useReducer qui permet aux utilisateurs de basculer entre les thèmes clair et sombre." },
    cheatSheet: { title: "Référence de useContext et useReducer", items: [
      { term: "useContext", definition: "Accédez aux valeurs de contexte sans perçage de props" },
      { term: "createContext", definition: "Créez un nouvel objet de contexte" },
      { term: "Context.Provider", definition: "Fournissez des valeurs de contexte aux composants enfants" },
      { term: "useReducer", definition: "Logique d'état complexe avec des fonctions réducteur" },
      { term: "Fonction réducteur", definition: "Prend l'état et une action, retourne le nouvel état" },
      { term: "dispatch", definition: "Fonction pour envoyer des actions au réducteur" },
      { term: "Combiner les deux", definition: "Gestion d'état complète sans bibliothèques externes" },
      { term: "Quand utiliser", definition: "useState pour simple, useReducer pour état complexe" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Wenn Ihre React-Anwendungen wachsen, wird die Zustandsverwaltung über viele Komponenten herausfordernd. React stellt die Hooks useContext und useReducer bereit, um bei der Verwaltung von komplexem Zustand zu helfen und Prop-Drilling zu vermeiden." },
        { type: "p", text: "In dieser Lektion lernen wir, wie man diese leistungsstarken Hooks effektiver zur Zustandsverwaltung einsetzt." },
      ]},
      { title: "Das Problem mit Prop-Drilling", content: [
        { type: "p", text: "Prop-Drilling liegt vor, wenn Sie Daten durch mehrere Komponentenschichten weitergeben, die sie nicht benötigen. Dies macht Code schwer wartbar und verständlich." },
        { type: "p", text: "Probleme mit Prop-Drilling:" },
        { type: "li", text: "Komponenten erhalten Props, die sie nicht verwenden" },
        { type: "li", text: "Das Hinzufügen neuer Props erfordert Änderungen an vielen Komponenten" },
        { type: "li", text: "Code wird eng gekoppelt" },
        { type: "li", text: "Schwer zu refaktorisieren und zu testen" },
      ]},
      { title: "Was ist useContext?", content: [
        { type: "p", text: "Der Hook useContext ermöglicht es Ihnen, Kontextwerte zuzugreifen, ohne Props durch jede Komponente zu übergeben. Er bietet eine Möglichkeit, Daten über den Komponentenbaum zu teilen." },
        { type: "p", text: "So verwenden Sie useContext:" },
        { type: "li", text: "1. Erstellen Sie einen Kontext mit createContext" },
        { type: "li", text: "2. Wickeln Sie Komponenten mit Context.Provider" },
        { type: "li", text: "3. Greifen Sie in jeder untergeordneten Komponente mit useContext auf Werte zu" },
      ]},
      { title: "Kontext erstellen und verwenden", content: [
        { type: "p", text: "Um Kontext effektiv zu verwenden:" },
        { type: "li", text: "Erstellen Sie Kontext auf der obersten Ebene Ihres Komponentenbaums" },
        { type: "li", text: "Stellen Sie Werte mit der Provider-Komponente bereit" },
        { type: "li", text: "Verbrauchen Sie Werte in jeder verschachtelten Komponente mit useContext" },
        { type: "callout", title: "Tipp", text: "Packen Sie nicht alles in einen Kontext. Erstellen Sie separate Kontexte für verschiedene Datentypen, um unnötige Re-Renderings zu vermeiden." },
      ]},
      { title: "Was ist useReducer?", content: [
        { type: "p", text: "Der Hook useReducer ist eine Alternative zu useState für komplexe Zustandslogik. Er verwendet eine Reducer-Funktion, um Zustandsübergänge basierend auf Aktionen zu verwalten." },
        { type: "p", text: "Wann useReducer statt useState verwenden:" },
        { type: "li", text: "Wenn Zustand komplexe verschachtelte Strukturen hat" },
        { type: "li", text: "Wenn Sie mehrere zusammenhängende Zustandsaktualisierungen haben" },
        { type: "li", text: "Wenn der nächste Zustand vom vorherigen Zustand abhängt" },
        { type: "li", text: "Wenn Sie die Zustandsaktualisierungslogik zentralisieren möchten" },
      ]},
      { title: "So funktioniert useReducer", content: [
        { type: "p", text: "useReducer funktioniert ähnlich wie Redux. Er nimmt eine Reducer-Funktion und Anfangszustand und gibt den aktuellen Zustand und eine dispatch-Funktion zurück." },
        { type: "p", text: "Die Reducer-Funktion nimmt den aktuellen Zustand und eine Aktion und gibt dann den neuen Zustand basierend auf dem Aktionstyp zurück." },
      ]},
      { title: "useContext und useReducer kombinieren", content: [
        { type: "p", text: "Die wahre Stärke kommt, wenn Sie useContext und useReducer kombinieren. Sie können eine vollständige Zustandsverwaltungslösung ohne externe Bibliotheken erstellen." },
        { type: "p", text: "Vorteile dieses Musters:" },
        { type: "li", text: "Zentralisierte Zustandsverwaltung" },
        { type: "li", text: "Kein Prop-Drilling" },
        { type: "li", text: "Vorhersagbare Zustandsaktualisierungen" },
        { type: "li", text: "Leicht zu testen und zu debuggen" },
      ]},
      { title: "Wann welchen Hook verwenden", content: [
        { type: "p", text: "Wählen Sie den richtigen Hook für Ihre Bedürfnisse:" },
        { type: "li", text: "<strong>useState:</strong> Einfache, unabhängige Zustandswerte" },
        { type: "li", text: "<strong>useReducer:</strong> Komplexe Zustandslogik, mehrere zusammenhängende Aktualisierungen" },
        { type: "li", text: "<strong>useContext:</strong> Datenteilung über den Komponentenbaum ohne Prop-Drilling" },
        { type: "li", text: "<strong>useReducer + useContext:</strong> Komplexer geteilter Zustand über viele Komponenten" },
      ]},
    ],
    quiz: [
      { question: "Welches Problem löst useContext?", options: ["Zustandsverwaltung", "Prop-Drilling", "Seiteneffekte", "Leistungsprobleme"], explanation: "useContext löst Prop-Drilling, indem es Ihnen ermöglicht, direkt in jeder Komponente auf Kontextwerte zuzugreifen, ohne Props durch mittlere Komponenten zu übergeben." },
    ],
    challenge: { title: "Herausforderung: Erstellen Sie einen Theme-Umschalter", description: "Erstellen Sie einen Theme-Umschalter mit useContext und useReducer, der es Benutzern ermöglicht, zwischen hellen und dunklen Themes zu wechseln." },
    cheatSheet: { title: "Übersicht über useContext und useReducer", items: [
      { term: "useContext", definition: "Greifen Sie auf Kontextwerte zu, ohne Props zu bohren" },
      { term: "createContext", definition: "Erstellen Sie ein neues Kontextobjekt" },
      { term: "Context.Provider", definition: "Stellen Sie Kontextwerte für Kindkomponenten bereit" },
      { term: "useReducer", definition: "Komplexe Zustandslogik mit Reducer-Funktionen" },
      { term: "Reducer-Funktion", definition: "Nimmt Zustand und Aktion, gibt neuen Zustand zurück" },
      { term: "dispatch", definition: "Funktion zum Senden von Aktionen an den Reducer" },
      { term: "Beide kombinieren", definition: "Vollständige Zustandsverwaltung ohne externe Bibliotheken" },
      { term: "Wann verwenden", definition: "useState für einfach, useReducer für komplexen Zustand" },
    ]}
  },
};

export default translations;
