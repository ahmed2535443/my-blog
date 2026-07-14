const translations = {
  en: {
    sections: [
      { title: "What is Context API?", content: [
        { type: "p", text: "Context API is a mechanism that lets you share data between components <strong>without passing props manually</strong> at every level." },
        { type: "p", text: "It solves the <strong>prop drilling</strong> problem where data has to pass through many intermediate components." },
        { type: "p", text: "Think of Context as a \"global state\" that any component can access." },
      ]},
      { title: "Why Use Context API?", content: [
        { type: "li", text: "Avoid prop drilling through many components" },
        { type: "li", text: "Share global data like theme, language, or authentication" },
        { type: "li", text: "Make data accessible to any component in the tree" },
        { type: "li", text: "Simplify state management for global data" },
      ]},
      { title: "Creating Context", content: [
        { type: "p", text: "Use <code>createContext</code> to create a new Context object. You can provide a default value." },
        { type: "callout", title: "Important", text: "The default value is used when a component doesn't have a matching Provider above it." },
      ]},
      { title: "Providing Context", content: [
        { type: "p", text: "Use the <code>Provider</code> component to wrap the parts of the tree that need access to the context." },
        { type: "p", text: "The <code>value</code> prop of the Provider contains the data to share." },
      ]},
      { title: "Consuming Context", content: [
        { type: "p", text: "Use the <code>useContext</code> hook to consume context in functional components." },
        { type: "p", text: "Pass the context object to useContext and it returns the current value." },
      ]},
      { title: "Context with useReducer", content: [
        { type: "p", text: "Combine Context with <code>useReducer</code> for complex state management, similar to Redux." },
        { type: "li", text: "useReducer manages complex state logic" },
        { type: "li", text: "Context provides the state and dispatch to all components" },
        { type: "li", text: "Perfect for medium-sized applications" },
      ]},
    ],
    quiz: [
      { question: "What problem does Context API solve?", options: ["Performance issues", "Prop drilling", "Memory leaks", "Styling problems"], correctAnswer: 1, explanation: "Context API solves prop drilling by allowing data to be passed without going through every intermediate component." },
      { question: "How do you create a Context?", options: ["useContext()", "createContext()", "new Context()", "Context.create()"], correctAnswer: 1, explanation: "Use createContext() to create a new Context object." },
      { question: "How do you consume Context in a functional component?", options: ["this.context", "useContext()", "Context.Consumer", "getContext()"], correctAnswer: 1, explanation: "Use the useContext hook to consume context in functional components." },
      { question: "What does the Provider's value prop contain?", options: ["The component tree", "The data to share", "The state reducer", "The context name"], correctAnswer: 1, explanation: "The value prop contains the data that will be shared with all consuming components." },
      { question: "When is the default value of createContext used?", options: ["Always", "When there's no Provider above", "When the Provider has no value", "Never"], correctAnswer: 1, explanation: "The default value is used when a component doesn't have a matching Provider above it in the tree." },
    ],
    challenge: { title: "Build a Theme Switcher", description: "Create a theme context that allows switching between light and dark themes across the app." },
    cheatSheet: { title: "Context API Cheat Sheet", columns: [
      { heading: "Create Context:", items: ['const ThemeContext = createContext("light");'] },
      { heading: "Provide Context:", items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'] },
      { heading: "Consume Context:", items: ['const theme = useContext(ThemeContext);'] },
    ]},
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que l'API Context ?", content: [
        { type: "p", text: "L'API Context est un mécanisme qui permet de partager des données entre composants <strong>sans passer les props manuellement</strong>." },
      ]},
      { title: "Pourquoi utiliser l'API Context ?", content: [
        { type: "li", text: "Éviter le prop drilling" },
        { type: "li", text: "Partager des données globales comme le thème ou la langue" },
      ]},
    ],
    quiz: [
      { question: "Quel problème résout l'API Context ?", options: ["Les problèmes de performance", "Le prop drilling", "Les fuites mémoire", "Les problèmes de style"], correctAnswer: 1, explanation: "L'API Context résout le prop drilling." },
    ],
    challenge: { title: "Défi : changeur de thème", description: "Créez un contexte de thème pour basculer entre les modes clair et sombre." },
    cheatSheet: { title: "Référence de l'API Context", columns: [
      { heading: "Créer un Context:", items: ['const ThemeContext = createContext("light");'] },
      { heading: "Fournir le Context:", items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'] },
      { heading: "Consommer le Context:", items: ['const theme = useContext(ThemeContext);'] },
    ]},
  },
  de: {
    sections: [
      { title: "Was ist die Context API?", content: [
        { type: "p", text: "Die Context API ist ein Mechanismus, mit dem Daten zwischen Komponenten geteilt werden können, <strong>ohne Props manuell weiterzureichen</strong>." },
      ]},
      { title: "Warum die Context API verwenden?", content: [
        { type: "li", text: "Prop drilling vermeiden" },
        { type: "li", text: "Globale Daten wie Thema oder Sprache teilen" },
      ]},
    ],
    quiz: [
      { question: "Welches Problem löst die Context API?", options: ["Performance-Probleme", "Prop drilling", "Speicherlecks", "Styling-Probleme"], correctAnswer: 1, explanation: "Die Context API löst das Problem des Prop Drilling." },
    ],
    challenge: { title: "Herausforderung: Theme-Umschalter", description: "Erstellen Sie einen Theme-Kontext zum Umschreiben zwischen hellem und dunklem Modus." },
    cheatSheet: { title: "Context API Übersicht", columns: [
      { heading: "Context erstellen:", items: ['const ThemeContext = createContext("light");'] },
      { heading: "Context bereitstellen:", items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'] },
      { heading: "Context konsumieren:", items: ['const theme = useContext(ThemeContext);'] },
    ]},
  },
};

export default translations;
