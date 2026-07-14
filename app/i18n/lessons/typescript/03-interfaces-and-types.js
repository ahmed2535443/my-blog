const translations = {
  en: {
    sections: [
      { title: "What is an Interface?", content: [
        { type: "p", text: "An <strong>interface</strong> defines the shape of an object. It specifies what properties an object must have and what types those properties should be." },
        { type: "code", text: "interface Person {\n  name: string;\n  age: number;\n  email: string;\n}\n\nconst person: Person = {\n  name: 'Ahmed',\n  age: 25,\n  email: 'ahmed@example.com'\n};" },
      ]},
      { title: "Optional and Readonly Properties", content: [
        { type: "p", text: "Interfaces support optional properties (?) and readonly properties:" },
        { type: "code", "text": "interface Config {\n  readonly apiUrl: string;\n  timeout?: number;\n  debug?: boolean;\n}" },
        { type: "callout", title: "Key Points", text: "readonly = cannot be changed after creation. ? = property is optional." },
      ]},
      { title: "Extending Interfaces", content: [
        { type: "p", text: "Interfaces can extend other interfaces to reuse and build upon existing types:" },
        { type: "code", text: "interface Animal {\n  name: string;\n  sound: string;\n}\n\ninterface Dog extends Animal {\n  breed: string;\n  bark(): void;\n}" },
      ]},
      { title: "Type Aliases", content: [
        { type: "p", text: "Type aliases are another way to create custom types. They work similarly to interfaces but are more flexible:" },
        { type: "code", text: "type Point = {\n  x: number;\n  y: number;\n};\n\ntype ID = string | number;\n\ntype Result = {\n  success: boolean;\n  data: any;\n  error?: string;\n};" },
        { type: "callout", title: "Interface vs Type", text: "Use interface for objects and classes. Use type for unions, intersections, and simpler type definitions." },
      ]},
      { title: "Intersection Types", content: [
        { type: "p", text: "Intersection types combine multiple types into one:" },
        { type: "code", text: "type HasName = { name: string };\ntype HasAge = { age: number };\n\ntype Person = HasName & HasAge;\n// Person must have both name AND age" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Interfaces define the shape of objects" },
        { type: "li", text: "readonly makes properties immutable" },
        { type: "li", text: "? makes properties optional" },
        { type: "li", text: "Interfaces can extend other interfaces" },
        { type: "li", text: "Type aliases are more flexible for unions and intersections" },
        { type: "li", text: "Intersection types (&) combine multiple types" },
      ]}
    ],
    quiz: [
      { question: "What does the readonly modifier do?", options: ["Makes property required", "Makes property immutable", "Makes property optional", "Makes property private"], explanation: "readonly makes a property immutable — it cannot be changed after the object is created." },
      { question: "What is the difference between interface and type?", options: ["No difference", "Interface is for objects, type is more flexible", "Type is faster", "Interface supports unions"], explanation: "Interfaces are best for objects and classes, while type aliases are more flexible for unions and intersections." },
      { question: "How do you combine two types into one?", options: ["Union (|)", "Intersection (&)", "Merge", "Combine"], explanation: "The intersection operator (&) combines multiple types into one, requiring all properties." }
    ],
    challenge: { title: "Build a Type System", description: "Create interfaces for a blog system: Post, User, Comment. Use extends for inheritance, optional properties, and intersection types." },
    cheatSheet: { title: "Interfaces and Types Cheat Sheet", items: [
      { term: "interface", definition: "Defines object shape" },
      { term: "readonly", definition: "Property cannot be changed" },
      { term: "?:", definition: "Optional property" },
      { term: "extends", definition: "Inherit from another interface" },
      { term: "type", definition: "Type alias — more flexible" },
      { term: "A & B", definition: "Intersection — combines types" },
      { term: "A | B", definition: "Union — A or B" }
    ]}
  },
  fr: {
    sections: [
      { title: "Qu'est-ce qu'une interface ?", content: [
        { type: "p", text: "Une <strong>interface</strong> définit la forme d'un objet. Elle spécifie quelles propriétés un objet doit avoir et quels types ces propriétés doivent avoir." },
      ]},
      { title: "Propriétés optionnelles et readonly", content: [
        { type: "p", text: "Les interfaces supportent les propriétés optionnelles (?) et les propriétés readonly." },
      ]},
      { title: "Extension des interfaces", content: [
        { type: "p", text: "Les interfaces peuvent étendre d'autres interfaces pour réutiliser et construire sur des types existants." },
      ]},
      { title: "Alias de type", content: [
        { type: "p", text: "Les alias de type sont une autre façon de créer des types personnalisés. Ils sont plus flexibles que les interfaces." },
      ]},
      { title: "Types d'intersection", content: [
        { type: "p", text: "Les types d'intersection combinent plusieurs types en un seul." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Les interfaces définissent la forme des objets" },
        { type: "li", text: "readonly rend les propriétés immuables" },
        { type: "li", text: "? rend les propriétés optionnelles" },
        { type: "li", text: "Les alias de type sont plus flexibles pour les unions et intersections" },
      ]}
    ],
    quiz: [
      { question: "Que fait le modificateur readonly ?", options: ["Rend la propriété requise", "Rend la propriété immuable", "Rend la propriété optionnelle", "Rend la propriété privée"], explanation: "readonly rend une propriété immuable — elle ne peut pas être changée après la création." },
      { question: "Quelle est la différence entre interface et type ?", options: ["Aucune différence", "Interface est pour les objets, type est plus flexible", "Type est plus rapide", "Interface supporte les unions"], explanation: "Les interfaces sont meilleures pour les objets, tandis que les alias de type sont plus flexibles." },
      { question: "Comment combiner deux types en un ?", options: ["Union (|)", "Intersection (&)", "Merge", "Combine"], explanation: "L'opérateur d'intersection (&) combine plusieurs types en un seul." }
    ],
    challenge: { title: "Construire un système de types", description: "Créez des interfaces pour un système de blog : Post, User, Comment. Utilisez extends pour l'héritage et les types d'intersection." },
    cheatSheet: { title: "Fiche mémo Interfaces et Types", items: [
      { term: "interface", definition: "Définit la forme d'un objet" },
      { term: "readonly", definition: "Propriété non modifiable" },
      { term: "?:", definition: "Propriété optionnelle" },
      { term: "extends", definition: "Hériter d'une autre interface" },
      { term: "type", definition: "Alias de type — plus flexible" },
      { term: "A & B", definition: "Intersection — combine les types" },
      { term: "A | B", definition: "Union — A ou B" }
    ]}
  },
  de: {
    sections: [
      { title: "Was ist ein Interface?", content: [
        { type: "p", text: "Ein <strong>Interface</strong> definiert die Form eines Objekts. Es legt fest, welche Eigenschaften ein Objekt haben muss und welche Typen diese Eigenschaften haben sollten." },
      ]},
      { title: "Optionale und Readonly-Eigenschaften", content: [
        { type: "p", text: "Interfaces unterstützen optionale (?) und readonly-Eigenschaften." },
      ]},
      { title: "Interfaces erweitern", content: [
        { type: "p", text: "Interfaces können andere Interfaces erben, um bestehende Typen wiederzuverwenden." },
      ]},
      { title: "Type Aliases", content: [
        { type: "p", text: "Type Aliases sind eine weitere Möglichkeit, benutzerdefinierte Typen zu erstellen. Sie sind flexibler als Interfaces." },
      ]},
      { title: "Intersection-Typen", content: [
        { type: "p", text: "Intersection-Typen kombinieren mehrere Typen zu einem." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Interfaces definieren die Form von Objekten" },
        { type: "li", text: "readonly macht Eigenschaften unveränderlich" },
        { type: "li", text: "? macht Eigenschaften optional" },
        { type: "li", text: "Type Aliases sind flexibler für Unions und Intersections" },
      ]}
    ],
    quiz: [
      { question: "Was macht der readonly-Modifikator?", options: ["Macht Eigenschaft erforderlich", "Macht Eigenschaft unveränderlich", "Macht Eigenschaft optional", "Macht Eigenschaft privat"], explanation: "readonly macht eine Eigenschaft unveränderlich — sie kann nach der Erstellung nicht geändert werden." },
      { question: "Was ist der Unterschied zwischen interface und type?", options: ["Kein Unterschied", "Interface ist für Objekte, type ist flexibler", "Type ist schneller", "Interface unterstützt Unions"], explanation: "Interfaces sind besser für Objekte, während Type Aliases flexibler sind." },
      { question: "Wie kombiniert man zwei Typen zu einem?", options: ["Union (|)", "Intersection (&)", "Merge", "Combine"], explanation: "Der Intersection-Operator (&) kombiniert mehrere Typen zu einem." }
    ],
    challenge: { title: "Ein Typsystem aufbauen", description: "Erstellen Sie Interfaces für ein Blog-System: Post, User, Comment. Verwenden Sie extends für Vererbung und Intersection-Typen." },
    cheatSheet: { title: "Interfaces und Typen Spickzettel", items: [
      { term: "interface", definition: "Definiert Objektform" },
      { term: "readonly", definition: "Eigenschaft unveränderlich" },
      { term: "?:", definition: "Optionale Eigenschaft" },
      { term: "extends", definition: "Von anderem Interface erben" },
      { term: "type", definition: "Type Alias — flexibler" },
      { term: "A & B", definition: "Intersection — kombiniert Typen" },
      { term: "A | B", definition: "Union — A oder B" }
    ]}
  }
};
export default translations;
