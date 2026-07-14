const translations = {
  en: {
    sections: [
      { title: "Why TypeScript with React?", content: [
        { type: "p", text: "TypeScript is extremely popular with React. It helps catch bugs early, improves developer experience with autocomplete, and makes refactoring safer." },
        { type: "callout", title: "Industry Standard", text: "Most new React projects use TypeScript by default. Learning TypeScript + React together is essential for modern web development." },
      ]},
      { title: "Setting Up TypeScript with Next.js", content: [
        { type: "li", text: "Next.js has built-in TypeScript support" },
        { type: "li", text: "Just add a tsconfig.json to your project root" },
        { type: "li", text: "Rename .js/.jsx files to .ts/.tsx" },
        { type: "li", text: "Next.js will configure TypeScript automatically" },
      ]},
      { title: "Typing Component Props", content: [
        { type: "p", text: "In React with TypeScript, you define the types of props your component accepts:" },
        { type: "code", text: "interface ButtonProps {\n  label: string;\n  onClick: () => void;\n  variant?: 'primary' | 'secondary';\n}\n\nfunction Button({ label, onClick, variant = 'primary' }: ButtonProps) {\n  return (\n    <button onClick={onClick} className={`btn btn-${variant}`}>\n      {label}\n    </button>\n  );\n}" },
      ]},
      { title: "Typing State", content: [
        { type: "p", text: "useState hook can be typed to ensure state has the correct type:" },
        { type: "code", text: "const [count, setCount] = useState<number>(0);\nconst [name, setName] = useState<string>('');\nconst [user, setUser] = useState<User | null>(null);" },
      ]},
      { title: "Typing Events", content: [
        { type: "p", text: "React events can be typed for better type safety:" },
        { type: "code", text: "function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n  e.preventDefault();\n  // form logic\n}\n\nfunction handleChange(e: React.ChangeEvent<HTMLInputElement>) {\n  const value = e.target.value;\n}" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "TypeScript catches bugs early in React components" },
        { type: "li", text: "Next.js has built-in TypeScript support" },
        { type: "li", text: "Props are typed with interfaces or types" },
        { type: "li", text: "useState accepts a generic type parameter" },
        { type: "li", text: "Events can be typed for better safety" },
      ]}
    ],
    quiz: [
      { question: "How do you type props in a React component?", options: ["With PropTypes", "With interfaces/types", "With class names", "With comments"], explanation: "In TypeScript React, props are typed using interfaces or type aliases as generic parameters." },
      { question: "How do you type a useState hook?", options: ["useState<type>(initialValue)", "useState(type, initialValue)", "useState: type = initialValue", "useType(state)"], explanation: "useState accepts a generic type parameter like useState<number>(0)." },
      { question: "What file extension is used for TypeScript React components?", options: [".jsx", ".tsx", ".ts.jsx", ".react.ts"], explanation: "TypeScript React components use the .tsx file extension." }
    ],
    challenge: { title: "Build Typed Components", description: "Create a Card component with typed props, a form with typed events, and a counter with typed state." },
    cheatSheet: { title: "TypeScript React Cheat Sheet", items: [
      { term: ".tsx", definition: "TypeScript React file extension" },
      { term: "interface Props {}", definition: "Define component props type" },
      { term: "function Comp({}: Props)", definition: "Type props in function" },
      { term: "useState<Type>(init)", definition: "Type state with generic" },
      { term: "React.FormEvent", definition: "Form event type" },
      { term: "React.ChangeEvent", definition: "Input change event type" },
      { term: "React.FC", definition: "Function component type (less common)" }
    ]}
  },
  fr: {
    sections: [
      { title: "Pourquoi TypeScript avec React ?", content: [
        { type: "p", text: "TypeScript est extrêmement populaire avec React. Il aide à attraper les bugs tôt et améliore l'expérience développeur." },
      ]},
      { title: "Configurer TypeScript avec Next.js", content: [
        { type: "li", text: "Next.js a un support TypeScript intégré" },
        { type: "li", text: "Ajoutez un tsconfig.json à la racine du projet" },
        { type: "li", text: "Renommez les fichiers .js/.jsx en .ts/.tsx" },
      ]},
      { title: "Typage des Props", content: [
        { type: "p", text: "En React avec TypeScript, vous définissez les types de props que votre composant accepte." },
      ]},
      { title: "Typage de l'état", content: [
        { type: "p", text: "Le hook useState peut être typé pour assurer que l'état a le bon type." },
      ]},
      { title: "Typage des événements", content: [
        { type: "p", text: "Les événements React peuvent être typés pour une meilleure sécurité de type." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "TypeScript attrape les bugs tôt dans les composants React" },
        { type: "li", text: "Les props sont typées avec des interfaces ou types" },
        { type: "li", text: "useState accepte un paramètre de type générique" },
      ]}
    ],
    quiz: [
      { question: "Comment typer les props dans un composant React ?", options: ["Avec PropTypes", "Avec des interfaces/types", "Avec des noms de classe", "Avec des commentaires"], explanation: "En TypeScript React, les props sont typées en utilisant des interfaces ou des alias de type." },
      { question: "Comment typer un hook useState ?", options: ["useState<type>(initialValue)", "useState(type, initialValue)", "useState: type = initialValue", "useType(state)"], explanation: "useState accepte un paramètre de type générique comme useState<number>(0)." },
      { question: "Quelle extension de fichier est utilisée pour les composants React TypeScript ?", options: [".jsx", ".tsx", ".ts.jsx", ".react.ts"], explanation: "Les composants React TypeScript utilisent l'extension de fichier .tsx." }
    ],
    challenge: { title: "Construire des composants typés", description: "Créez un composant Card avec des props typées, un formulaire avec des événements typés, et un compteur avec un état typé." },
    cheatSheet: { title: "Fiche mémo TypeScript React", items: [
      { term: ".tsx", definition: "Extension de fichier TypeScript React" },
      { term: "interface Props {}", definition: "Définir le type des props" },
      { term: "useState<Type>(init)", definition: "Typer l'état avec générique" },
      { term: "React.FormEvent", definition: "Type d'événement formulaire" },
      { term: "React.ChangeEvent", definition: "Type d'événement input" }
    ]}
  },
  de: {
    sections: [
      { title: "Warum TypeScript mit React?", content: [
        { type: "p", text: "TypeScript ist äußerst beliebt mit React. Es hilft, Fehler früh zu erkennen und verbessert die Entwicklererfahrung." },
      ]},
      { title: "TypeScript mit Next.js einrichten", content: [
        { type: "li", text: "Next.js hat eingebaute TypeScript-Unterstützung" },
        { type: "li", text: "Fügen Sie eine tsconfig.json zum Projektstamm hinzu" },
        { type: "li", text: "Benennen Sie .js/.jsx-Dateien in .ts/.tsx um" },
      ]},
      { title: "Props typisieren", content: [
        { type: "p", text: "In React mit TypeScript definieren Sie die Typen der Props, die Ihre Komponente akzeptiert." },
      ]},
      { title: "State typisieren", content: [
        { type: "p", text: "Der useState-Hook kann typisiert werden, um sicherzustellen, dass State den richtigen Typ hat." },
      ]},
      { title: "Events typisieren", content: [
        { type: "p", text: "React-Events können für bessere Typsicherheit typisiert werden." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "TypeScript erkennt Fehler früh in React-Komponenten" },
        { type: "li", text: "Props werden mit Interfaces oder Types typisiert" },
        { type: "li", text: "useState akzeptiert einen generischen Typparameter" },
      ]}
    ],
    quiz: [
      { question: "Wie typisiert man Props in einer React-Komponente?", options: ["Mit PropTypes", "Mit Interfaces/Types", "Mit Klassennamen", "Mit Kommentaren"], explanation: "In TypeScript React werden Props mit Interfaces oder Type Aliases typisiert." },
      { question: "Wie typisiert man einen useState-Hook?", options: ["useState<type>(initialValue)", "useState(type, initialValue)", "useState: type = initialValue", "useType(state)"], explanation: "useState akzeptiert einen generischen Typparameter wie useState<number>(0)." },
      { question: "Welche Dateierweiterung wird für TypeScript React-Komponenten verwendet?", options: [".jsx", ".tsx", ".ts.jsx", ".react.ts"], explanation: "TypeScript React-Komponenten verwenden die Dateierweiterung .tsx." }
    ],
    challenge: { title: "Getypte Komponenten erstellen", description: "Erstellen Sie eine Card-Komponente mit getypten Props, ein Formular mit getypten Events und einen Zähler mit getyptem State." },
    cheatSheet: { title: "TypeScript React Spickzettel", items: [
      { term: ".tsx", definition: "TypeScript React Dateierweiterung" },
      { term: "interface Props {}", definition: "Component-Props-Typ definieren" },
      { term: "useState<Type>(init)", definition: "State mit Generic typisieren" },
      { term: "React.FormEvent", definition: "Formular-Event-Typ" },
      { term: "React.ChangeEvent", definition: "Input-Change-Event-Typ" }
    ]}
  }
};
export default translations;
