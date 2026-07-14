const translations = {
  en: {
    sections: [
      { title: "What is useEffect?", content: [
        { type: "p", text: "<code>useEffect</code> is a Hook that lets you run <strong>side effects</strong> in function components. It performs operations after rendering." },
        { type: "p", text: "Side effects are operations like: fetching data from an API, setting up subscriptions, timers, or direct DOM manipulation." },
        { type: "p", text: "The basic syntax: <code>useEffect(() => {}, [])</code>" },
      ]},
      { title: "Dependency Array", content: [
        { type: "p", text: "The second argument to <code>useEffect</code> is the <strong>dependency array</strong> that controls when the effect runs." },
        { type: "li", text: "<strong>No array:</strong> Runs after every render" },
        { type: "li", text: "<strong>Empty array []:</strong> Runs only once on first render" },
        { type: "li", text: "<strong>With dependencies [dep1, dep2]:</strong> Runs when dependencies change" },
      ]},
      { title: "Fetching Data", content: [
        { type: "p", text: "One of the most common uses of <code>useEffect</code> is fetching data from an API." },
        { type: "callout", title: "Important", text: "Always handle loading and error states when fetching data." },
      ]},
      { title: "Cleanup Function", content: [
        { type: "p", text: "UseEffect can return a <strong>cleanup function</strong> that runs before the effect re-runs or when the component unmounts." },
        { type: "p", text: "This is essential for cleaning up subscriptions, timers, or event listeners." },
      ]},
      { title: "Common Mistakes", content: [
        { type: "li", text: "Missing dependency array - causes infinite loop" },
        { type: "li", text: "Not including all dependencies in the array" },
        { type: "li", text: "Using async functions directly in useEffect" },
        { type: "li", text: "Forgetting to clean up side effects" },
      ]},
    ],
    quiz: [
      { question: "When does useEffect run with an empty dependency array []?", options: ["After every render", "Only once on first render", "Never", "Only when state changes"], correctAnswer: 1, explanation: "An empty dependency array means the effect runs only once after the initial render." },
      { question: "What is the purpose of the cleanup function in useEffect?", options: ["To set initial state", "To clean up side effects before re-running or unmounting", "To update the DOM", "To fetch data"], correctAnswer: 1, explanation: "The cleanup function runs before the effect re-runs or when the component unmounts." },
      { question: "Why should you not use async functions directly in useEffect?", options: ["React doesn't support async", "useEffect expects either nothing or a cleanup function as return", "Async functions are slower", "It causes memory leaks"], correctAnswer: 1, explanation: "useEffect expects either nothing or a cleanup function as its return value. Async functions return Promises." },
      { question: "What happens if you forget the dependency array?", options: ["Effect runs only once", "Effect runs after every render", "Effect never runs", "Component crashes"], correctAnswer: 1, explanation: "Without a dependency array, useEffect runs after every render, which can cause performance issues." },
    ],
    challenge: { title: "Build a Data Fetcher", description: "Create a component that fetches and displays data from an API with loading and error states." },
    cheatSheet: { title: "useEffect Cheat Sheet", columns: [
      { heading: "Basic Syntax:", items: ['useEffect(() => {}, [])'] },
      { heading: "With Cleanup:", items: ['useEffect(() => { const sub = subscribe(); return () => sub.unsubscribe(); }, [])'] },
    ]},
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que useEffect ?", content: [
        { type: "p", text: "<code>useEffect</code> est un Hook qui vous permet d'exécuter des <strong>effets secondaires</strong> dans les composants fonctionnels." },
      ]},
      { title: "Tableau de dépendances", content: [
        { type: "p", text: "Le second argument de <code>useEffect</code> est le <strong>tableau de dépendances</strong> qui contrôle quand l'effet s'exécute." },
      ]},
    ],
    quiz: [
      { question: "Quand useEffect s'exécute-t-il avec un tableau de dépendances vide [] ?", options: ["Après chaque rendu", "Une seule fois au premier rendu", "Jamais", "Uniquement quand l'état change"], correctAnswer: 1, explanation: "Un tableau vide signifie que l'effet ne s'exécute qu'une seule fois après le rendu initial." },
    ],
    challenge: { title: "Défi : Récupérateur de données", description: "Créez un composant qui récupère et affiche des données depuis une API." },
    cheatSheet: { title: "Référence de useEffect", columns: [
      { heading: "Syntaxe de base:", items: ['useEffect(() => {}, [])'] },
    ]},
  },
  de: {
    sections: [
      { title: "Was ist useEffect?", content: [
        { type: "p", text: "<code>useEffect</code> ist ein Hook, mit dem Sie <strong>Nebeneffekte</strong> in Funktionskomponenten ausführen können." },
      ]},
      { title: "Abhängigkeits-Array", content: [
        { type: "p", text: "Das zweite Argument von <code>useEffect</code> ist das <strong>Abhängigkeits-Array</strong>, das steuert, wann der Effekt ausgeführt wird." },
      ]},
    ],
    quiz: [
      { question: "Wann führt useEffect mit einem leeren Abhängigkeits-Array [] aus?", options: ["Nach jedem Rendering", "Nur einmal beim ersten Rendering", "Nie", "Nur bei State-Änderungen"], correctAnswer: 1, explanation: "Ein leeres Array bedeutet, dass der Effekt nur einmal nach dem initialen Rendering ausgeführt wird." },
    ],
    challenge: { title: "Herausforderung: Datenabruf-Komponente", description: "Erstellen Sie eine Komponente, die Daten von einer API abruft und anzeigt." },
    cheatSheet: { title: "useEffect Übersicht", columns: [
      { heading: "Grundsyntax:", items: ['useEffect(() => {}, [])'] },
    ]},
  },
};

export default translations;
