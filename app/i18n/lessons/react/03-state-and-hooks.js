const translations = {
  en: {
    sections: [
      { title: "What is State?", content: [
        { type: "p", text: "<strong>State</strong> is data that changes over time and affects what the component displays. When state changes, React re-renders the component automatically." },
        { type: "p", text: "Think of State as the component's <strong>memory</strong>: it remembers things between renders." },
        { type: "p", text: "For example, a counter needs to remember the current number. A toggle needs to remember visibility. A login form needs to remember if the user has entered their data." },
      ]},
      { title: "Why Do We Need State?", content: [
        { type: "p", text: "Without State, you cannot build interactive applications. Imagine everything in the UI was static and never changed." },
        { type: "li", text: "The counter wouldn't increment when you click a button" },
        { type: "li", text: "A product list wouldn't change when selecting a category" },
        { type: "li", text: "Navigation between pages wouldn't work" },
        { type: "li", text: "Forms wouldn't retain entered data" },
        { type: "p", text: "State is what makes React applications <strong>interactive</strong>." },
      ]},
      { title: "The useState Hook", content: [
        { type: "p", text: "<code>useState</code> is the first Hook you'll use. It lets you \"pin\" state features in a function component." },
        { type: "p", text: "Basic syntax of <code>useState</code>:" },
        { type: "li", text: "<strong>First element:</strong> The current state value (currentState)" },
        { type: "li", text: "<strong>Second element:</strong> A function to update the value (setStateFunction)" },
        { type: "callout", title: "Important", text: "The updater function name typically starts with <code>set</code> like <code>setCount</code> and <code>setName</code>. This is a convention, not a strict rule." },
      ]},
      { title: "Simple Example - Counter", content: [
        { type: "p", text: "Here's a simple counter using <code>useState</code>:" },
        { type: "li", text: "Create state with initial value <code>0</code> using <code>useState(0)</code>" },
        { type: "li", text: "Get <code>count</code> (current value) and <code>setCount</code> (update function)" },
        { type: "li", text: "When \"Increase\" button is pressed, call <code>setCount(count + 1)</code>" },
        { type: "li", text: "React re-renders with the new value automatically" },
      ]},
      { title: "Practical Example - Todo List", content: [
        { type: "p", text: "A more complex example: a To-Do List that allows adding, completing, and deleting tasks." },
        { type: "li", text: "Using <code>useState</code> with an array as initial value" },
        { type: "li", text: "Using <code>setTodos</code> with <code>map</code> and <code>filter</code>" },
        { type: "li", text: "Using Spread Operator <code>[...todos, newTodo]</code>" },
        { type: "li", text: "Managing two State values in the same component" },
      ]},
      { title: "Rules of Hooks", content: [
        { type: "p", text: "There are strict rules when using Hooks in React:" },
        { type: "li", text: "<strong>Don't</strong> call Hooks inside loops, conditions, or nested functions" },
        { type: "li", text: "<strong>Don't</strong> call Hooks inside regular functions" },
        { type: "li", text: "<strong>Do</strong> call Hooks at the top level of your component" },
        { type: "li", text: "<strong>Do</strong> call Hooks from React Function Components" },
      ]},
      { title: "State vs Props", content: [
        { type: "p", text: "Props come from the parent component (external, read-only). State is internal to the component (read and write)." },
        { type: "li", text: "<strong>Props:</strong> Come from parent, read-only, like function arguments" },
        { type: "li", text: "<strong>State:</strong> Internal to component, can change with setState, like local variables" },
      ]},
      { title: "What Happens Behind the Scenes?", content: [
        { type: "p", text: "When you call a setter like <code>setCount</code>, React schedules the state update and re-renders the component." },
        { type: "li", text: "<strong>Update State:</strong> React schedules the new value (may not happen immediately)" },
        { type: "li", text: "<strong>Schedule Re-render:</strong> React re-renders the component and children in one update cycle" },
        { type: "li", text: "<strong>Re-render:</strong> Component function is called again with new State" },
        { type: "li", text: "<strong>Compare Virtual DOM:</strong> React compares new Virtual DOM tree with old" },
        { type: "li", text: "<strong>Update Real DOM:</strong> Only changed parts are updated in the real page" },
      ]},
    ],
    quiz: [
      { question: "What is the correct way to create State using useState?", options: ["const state = useState(0)", "const [count, setCount] = useState(0)", "const { count, setCount } = useState(0)", "let count = useState(0)"], correctAnswer: 1, explanation: "useState returns an array with two elements. We use Destructuring to split them: the current value and the update function." },
      { question: "What happens when you call a set function in React?", options: ["State updates immediately and re-renders", "State updates and re-renders in the next cycle", "State updates only without re-rendering", "Re-renders only without changing State"], correctAnswer: 1, explanation: "State doesn't update immediately. The update happens in the next Render Cycle." },
      { question: "What is the difference between Props and State?", options: ["Props for read/write, State for read only", "Props from parent (external), State inside component (internal)", "Props for strings only, State for numbers only", "No difference between them"], correctAnswer: 1, explanation: "Props come from the parent and cannot be changed (read-only). State is internal and can be changed with the setter function." },
      { question: "Which is a correct usage of useState?", options: ["Inside a for loop", "Inside an if condition", "At the top level of the component only", "Inside a nested function"], correctAnswer: 2, explanation: "Hooks must be called at the top level only, not in loops, conditions, or nested functions." },
      { question: "Why use the updater function instead of direct value?", options: ["React doesn't support direct updates", "It's easier to write", "It ensures correct updates when based on previous state", "It's faster in performance"], correctAnswer: 2, explanation: "The updater function ensures you get the latest State value even with rapid updates." },
    ],
    challenge: { title: "Build a Smart Counter with Toggle", description: "Create an app combining a counter with content show/hide toggle using State." },
    cheatSheet: { title: "State and Hooks Cheat Sheet", columns: [
      { heading: "Basic useState:", items: ['<code>const [count, setCount] = useState(0)</code>'] },
      { heading: "Update State:", code: "// Direct value\nsetCount(5);\n// Updater function\nsetCount(prev => prev + 1);" },
    ]},
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que l'état ?", content: [
        { type: "p", text: "L'<strong>état</strong> sont des données qui changent avec le temps et affectent l'affichage du composant. Quand l'état change, React re-rend le composant automatiquement." },
        { type: "p", text: "Pensez à l'état comme la <strong>mémoire</strong> du composant." },
      ]},
      { title: "Pourquoi avons-nous besoin de l'état ?", content: [
        { type: "p", text: "Sans l'état, vous ne pouvez pas construire d'applications interactives." },
      ]},
      { title: "Le hook useState", content: [
        { type: "p", text: "<code>useState</code> est le premier Hook que vous utiliserez. Il vous permet d'\"épingler\" l'état dans un composant fonctionnel." },
      ]},
    ],
    quiz: [
      { question: "Quelle est la bonne façon de créer l'état avec useState ?", options: ["const state = useState(0)", "const [count, setCount] = useState(0)", "const { count, setCount } = useState(0)", "let count = useState(0)"], correctAnswer: 1, explanation: "useState retourne un tableau avec deux éléments." },
    ],
    challenge: { title: "Défi : Construisez un compteur intelligent", description: "Créez une application combinant compteur et bouton afficher/masquer." },
    cheatSheet: { title: "Référence de l'état et des hooks", columns: [
      { heading: "useState de base:", items: ['<code>const [count, setCount] = useState(0)</code>'] },
    ]},
  },
  de: {
    sections: [
      { title: "Was ist State?", content: [
        { type: "p", text: "<strong>State</strong> sind Daten, die sich über die Zeit ändern und beeinflussen, was die Komponente anzeigt." },
      ]},
      { title: "Warum brauchen wir State?", content: [
        { type: "p", text: "Ohne State können Sie keine interaktiven Anwendungen erstellen." },
      ]},
      { title: "Der useState Hook", content: [
        { type: "p", text: "<code>useState</code> ist der erste Hook, den Sie verwenden werden." },
      ]},
    ],
    quiz: [
      { question: "Was ist der richtige Weg, State mit useState zu erstellen?", options: ["const state = useState(0)", "const [count, setCount] = useState(0)", "const { count, setCount } = useState(0)", "let count = useState(0)"], correctAnswer: 1, explanation: "useState gibt ein Array mit zwei Elementen zurück." },
    ],
    challenge: { title: "Herausforderung: Erstellen Sie einen intelligenten Zähler", description: "Erstellen Sie eine App mit Zähler und Ein-/Ausblenden-Button." },
    cheatSheet: { title: "Übersicht über State und Hooks", columns: [
      { heading: "Grundlegendes useState:", items: ['<code>const [count, setCount] = useState(0)</code>'] },
    ]},
  },
};

export default translations;
