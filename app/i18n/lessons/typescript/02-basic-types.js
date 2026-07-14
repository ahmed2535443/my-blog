const translations = {
  en: {
    sections: [
      { title: "Primitive Types", content: [
        { type: "p", text: "TypeScript provides several primitive types that form the building blocks of your type system." },
        { type: "li", text: "<strong>string</strong> — for text: let name: string = 'Ahmed'" },
        { type: "li", text: "<strong>number</strong> — for all numbers (integers, floats, decimals): let age: number = 25" },
        { type: "li", text: "<strong>boolean</strong> — for true/false values: let isActive: boolean = true" },
        { type: "li", text: "<strong>null</strong> and <strong>undefined</strong> — represent absence of value" },
      ]},
      { title: "Arrays", content: [
        { type: "p", text: "Arrays can be typed in two ways in TypeScript:" },
        { type: "code", text: "let numbers: number[] = [1, 2, 3];\nlet names: Array<string> = ['Ali', 'Sara'];" },
      ]},
      { title: "Objects and Interface", content: [
        { type: "p", text: "Objects can be typed using interfaces or type aliases:" },
        { type: "code", text: "interface User {\n  name: string;\n  age: number;\n  email?: string; // optional\n}\n\nconst user: User = {\n  name: 'Ahmed',\n  age: 25\n};" },
        { type: "callout", title: "Key Point", text: "The ? marks a property as optional. TypeScript will not require it to be provided." },
      ]},
      { title: "Union Types", content: [
        { type: "p", text: "Union types allow a variable to hold one of several types:" },
        { type: "code", text: "let id: string | number;\nid = '123'; // OK\nid = 123;   // OK\nid = true;  // Error!" },
      ]},
      { title: "Type Inference", content: [
        { type: "p", text: "TypeScript can automatically infer types from the assigned value. You don't always need to specify types explicitly." },
        { type: "code", text: "let message = 'Hello'; // TypeScript infers string\nlet count = 42;        // TypeScript infers number" },
        { type: "callout", title: "Best Practice", text: "Let TypeScript infer types when possible. Only add explicit types when necessary for clarity or when inference isn't sufficient." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Primitive types: string, number, boolean, null, undefined" },
        { type: "li", text: "Arrays can be typed with T[] or Array<T>" },
        { type: "li", text: "Objects are typed with interfaces or type aliases" },
        { type: "li", text: "Union types (|) allow multiple types for one variable" },
        { type: "li", text: "TypeScript infers types automatically when possible" },
      ]}
    ],
    quiz: [
      { question: "How do you define an array of numbers?", options: ["number[]", "Array<number>", "Both A and B", "number{}"], explanation: "Both number[] and Array<number> are valid ways to type an array of numbers in TypeScript." },
      { question: "What does the ? symbol mean in an interface?", options: ["Required property", "Optional property", "Nullable property", "Read-only property"], explanation: "The ? symbol marks a property as optional, meaning it doesn't have to be provided." },
      { question: "What is type inference?", options: ["Manual type declaration", "TypeScript automatically determining types", "A debugging tool", "A compiler flag"], explanation: "Type inference is when TypeScript automatically determines the type of a variable from its assigned value." }
    ],
    challenge: { title: "Practice Basic Types", description: "Create variables with different types (string, number, boolean, arrays, objects with interfaces, and union types). Test which values are accepted and which cause errors." },
    cheatSheet: { title: "Basic Types Cheat Sheet", items: [
      { term: "string", definition: "Text type" },
      { term: "number", definition: "Numeric type (int, float, decimal)" },
      { term: "boolean", definition: "True/false type" },
      { term: "T[] or Array<T>", definition: "Array type" },
      { term: "interface", definition: "Defines object shape" },
      { term: "A | B", definition: "Union type — A or B" },
      { term: "?:", definition: "Optional property" },
      { term: "type inference", definition: "Automatic type detection" }
    ]}
  },
  fr: {
    sections: [
      { title: "Types primitifs", content: [
        { type: "p", text: "TypeScript fournit plusieurs types primitifs qui constituent les briques de votre système de types." },
        { type: "li", text: "<strong>string</strong> — pour le texte : let name: string = 'Ahmed'" },
        { type: "li", text: "<strong>number</strong> — pour tous les nombres : let age: number = 25" },
        { type: "li", text: "<strong>boolean</strong> — pour les valeurs vrai/faux : let isActive: boolean = true" },
        { type: "li", text: "<strong>null</strong> et <strong>undefined</strong> — représentent l'absence de valeur" },
      ]},
      { title: "Tableaux", content: [
        { type: "p", text: "Les tableaux peuvent être typés de deux manières en TypeScript." },
      ]},
      { title: "Objets et Interface", content: [
        { type: "p", text: "Les objets peuvent être typés en utilisant des interfaces ou des alias de type." },
      ]},
      { title: "Types d'union", content: [
        { type: "p", text: "Les types d'union permettent à une variable de contenir l'un de plusieurs types." },
      ]},
      { title: "Inférence de type", content: [
        { type: "p", text: "TypeScript peut automatiquement inférer les types à partir de la valeur assignée." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Types primitifs : string, number, boolean, null, undefined" },
        { type: "li", text: "Les tableaux peuvent être typés avec T[] ou Array<T>" },
        { type: "li", text: "Les objets sont typés avec des interfaces ou des alias de type" },
        { type: "li", text: "Les types d'union (|) permettent plusieurs types pour une variable" },
      ]}
    ],
    quiz: [
      { question: "Comment définir un tableau de nombres ?", options: ["number[]", "Array<number>", "Les deux A et B", "number{}"], explanation: "number[] et Array<number> sont deux façons valides de typer un tableau de nombres." },
      { question: "Que signifie le symbole ? dans une interface ?", options: ["Propriété requise", "Propriété optionnelle", "Propriété nullable", "Propriété en lecture seule"], explanation: "Le symbole ? marque une propriété comme optionnelle." },
      { question: "Qu'est-ce que l'inférence de type ?", options: ["Déclaration manuelle de type", "TypeScript déterminant automatiquement les types", "Un outil de débogage", "Un drapeau du compilateur"], explanation: "L'inférence de type est quand TypeScript détermine automatiquement le type d'une variable." }
    ],
    challenge: { title: "Pratiquer les types de base", description: "Créez des variables avec différents types (string, number, boolean, tableaux, objets avec interfaces, et types d'union)." },
    cheatSheet: { title: "Fiche mémo Types de base", items: [
      { term: "string", definition: "Type texte" },
      { term: "number", definition: "Type numérique" },
      { term: "boolean", definition: "Type vrai/faux" },
      { term: "T[] ou Array<T>", definition: "Type tableau" },
      { term: "interface", definition: "Définit la forme d'un objet" },
      { term: "A | B", definition: "Type d'union" },
      { term: "?:", definition: "Propriété optionnelle" }
    ]}
  },
  de: {
    sections: [
      { title: "Primitive Typen", content: [
        { type: "p", text: "TypeScript bietet mehrere primitiver Typen als Bausteine Ihres Typsystems." },
        { type: "li", text: "<strong>string</strong> — für Text: let name: string = 'Ahmed'" },
        { type: "li", text: "<strong>number</strong> — für alle Zahlen: let age: number = 25" },
        { type: "li", text: "<strong>boolean</strong> — für wahr/falsch Werte: let isActive: boolean = true" },
        { type: "li", text: "<strong>null</strong> und <strong>undefined</strong> — stellen das Fehlen eines Werts dar" },
      ]},
      { title: "Arrays", content: [
        { type: "p", text: "Arrays können auf zwei Arten getypt werden in TypeScript." },
      ]},
      { title: "Objekte und Interface", content: [
        { type: "p", text: "Objekte können mit Interfaces oder Type Aliases getypt werden." },
      ]},
      { title: "Union-Typen", content: [
        { type: "p", text: "Union-Typen erlauben es einer Variable, einen von mehreren Typen zu halten." },
      ]},
      { title: "Typ-Inferenz", content: [
        { type: "p", text: "TypeScript kann Typen automatisch aus dem zugewiesenen Wert ableiten." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Primitive Typen: string, number, boolean, null, undefined" },
        { type: "li", text: "Arrays können mit T[] oder Array<T> getypt werden" },
        { type: "li", text: "Objekte werden mit Interfaces oder Type Aliases getypt" },
        { type: "li", text: "Union-Typen (|) erlauben mehrere Typen für eine Variable" },
      ]}
    ],
    quiz: [
      { question: "Wie definiert man ein Array von Zahlen?", options: ["number[]", "Array<number>", "Beides A und B", "number{}"], explanation: "number[] und Array<number> sind beide gültige Wege, ein Zahlenarray zu typisieren." },
      { question: "Was bedeutet das ? Symbol in einem Interface?", options: ["Erforderliche Eigenschaft", "Optionale Eigenschaft", "Nullable Eigenschaft", "Read-only Eigenschaft"], explanation: "Das ? Symbol markiert eine Eigenschaft als optional." },
      { question: "Was ist Typ-Inferenz?", options: ["Manuelle Typdeklaration", "TypeScript bestimmt Typen automatisch", "Ein Debugging-Tool", "Ein Compiler-Flag"], explanation: "Typ-Inferenz ist wenn TypeScript den Typ einer Variablen automatisch bestimmt." }
    ],
    challenge: { title: "Grundlegende Typen üben", description: "Erstellen Sie Variablen mit verschiedenen Typen (string, number, boolean, Arrays, Objekte mit Interfaces und Union-Typen)." },
    cheatSheet: { title: "Grundlegende Typen Spickzettel", items: [
      { term: "string", definition: "Texttyp" },
      { term: "number", definition: "Numerischer Typ" },
      { term: "boolean", definition: "Wahr/Falsch-Typ" },
      { term: "T[] oder Array<T>", definition: "Array-Typ" },
      { term: "interface", definition: "Definiert Objektform" },
      { term: "A | B", definition: "Union-Typ" },
      { term: "?:", definition: "Optionale Eigenschaft" }
    ]}
  }
};
export default translations;
