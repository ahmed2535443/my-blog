const translations = {
  en: {
    sections: [
      { title: "Project Overview", content: [
        { type: "p", text: "In this final project, we'll combine everything you've learned about TypeScript to build a complete <strong>Task Management Application</strong> with Next.js." },
        { type: "li", text: "<strong>Task CRUD</strong> — Create, Read, Update, Delete tasks" },
        { type: "li", text: "<strong>Type-Safe State</strong> — All state managed with proper types" },
        { type: "li", text: "<strong>Form Handling</strong> — Typed form events and validation" },
        { type: "li", text: "<strong>Component Composition</strong> — Reusable typed components" },
      ]},
      { title: "Defining Your Types", content: [
        { type: "p", text: "Start by defining all the types your application needs:" },
        { type: "code", text: "interface Task {\n  id: string;\n  title: string;\n  description: string;\n  status: 'todo' | 'in-progress' | 'done';\n  priority: 'low' | 'medium' | 'high';\n  createdAt: Date;\n}\n\ntype TaskAction =\n  | { type: 'ADD'; payload: Task }\n  | { type: 'UPDATE'; payload: { id: string; updates: Partial<Task> } }\n  | { type: 'DELETE'; payload: { id: string } };" },
      ]},
      { title: "Building Typed Components", content: [
        { type: "p", text: "Build reusable components with strict type definitions:" },
        { type: "li", text: "TaskCard — displays a single task with all its properties" },
        { type: "li", text: "TaskForm — form for creating and editing tasks" },
        { type: "li", text: "TaskList — renders a list of tasks with filtering" },
        { type: "li", text: "StatusFilter — filter tasks by status" },
      ]},
      { title: "Type-Safe State Management", content: [
        { type: "p", text: "Use useReducer with typed actions for predictable state management:" },
        { type: "code", text: "function taskReducer(state: Task[], action: TaskAction): Task[] {\n  switch (action.type) {\n    case 'ADD':\n      return [...state, action.payload];\n    case 'UPDATE':\n      return state.map(task =>\n        task.id === action.payload.id\n          ? { ...task, ...action.payload.updates }\n          : task\n      );\n    case 'DELETE':\n      return state.filter(task => task.id !== action.payload.id);\n    default:\n      return state;\n  }\n}" },
      ]},
      { title: "Adding Validation", content: [
        { type: "p", text: "Use TypeScript to create type-safe validation functions:" },
        { type: "code", text: "function validateTask(task: Partial<Task>): string[] {\n  const errors: string[] = [];\n  if (!task.title || task.title.length < 3) {\n    errors.push('Title must be at least 3 characters');\n  }\n  if (!task.description) {\n    errors.push('Description is required');\n  }\n  return errors;\n}" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Define all types before building the application" },
        { type: "li", text: "Use discriminated unions for action types" },
        { type: "li", text: "Build reusable typed components" },
        { type: "li", text: "Use useReducer for type-safe state management" },
        { type: "li", text: "Create validation functions with TypeScript" },
      ]}
    ],
    quiz: [
      { question: "What pattern is used for task actions (ADD, UPDATE, DELETE)?", options: ["Object literals", "Discriminated unions", "Arrays", "Maps"], explanation: "Discriminated unions use a common 'type' property to distinguish between different action shapes." },
      { question: "What is the benefit of using useReducer with TypeScript?", options: ["Faster rendering", "Type-safe state management", "Less code", "Better styling"], explanation: "useReducer with TypeScript ensures all state transitions are type-checked and predictable." },
      { question: "What does Partial<Task> mean?", options: ["All properties are required", "All properties are optional", "Some properties are readonly", "Task is an array"], explanation: "Partial<Task> makes all properties of the Task interface optional." }
    ],
    challenge: { title: "Extend the Application", description: "Add features: task filtering by priority, drag-and-drop reordering, local storage persistence, and dark mode toggle." },
    cheatSheet: { title: "TypeScript Final Project Cheat Sheet", items: [
      { term: "interface Task {}", definition: "Define task shape" },
      { term: "'todo' | 'in-progress' | 'done'", definition: "String literal union for status" },
      { term: "Partial<Task>", definition: "All properties optional" },
      { term: "{ type: 'ADD'; payload: Task }", definition: "Discriminated union action" },
      { term: "useReducer<Task[], TaskAction>", definition: "Type-safe reducer" },
      { term: "Partial<Task>", definition: "For validation input" },
      { term: "string[]", definition: "Return type for validation errors" }
    ]}
  },
  fr: {
    sections: [
      { title: "Aperçu du projet", content: [
        { type: "p", text: "Dans ce projet final, nous allons combiner tout ce que vous avez appris sur TypeScript pour construire une <strong>application de gestion de tâches</strong> complète avec Next.js." },
        { type: "li", text: "<strong>CRUD des tâches</strong> — Créer, Lire, Modifier, Supprimer" },
        { type: "li", text: "<strong>État typé</strong> — Tout l'état géré avec des types appropriés" },
        { type: "li", text: "<strong>Gestion de formulaires</strong> — Événements de formulaire typés et validation" },
      ]},
      { title: "Définir vos types", content: [
        { type: "p", text: "Commencez par définir tous les types dont votre application a besoin." },
      ]},
      { title: "Construction de composants typés", content: [
        { type: "p", text: "Construisez des composants réutilisables avec des définitions de type strictes." },
      ]},
      { title: "Gestion d'état typée", content: [
        { type: "p", text: "Utilisez useReducer avec des actions typées pour une gestion d'état prévisible." },
      ]},
      { title: "Ajout de la validation", content: [
        { type: "p", text: "Utilisez TypeScript pour créer des fonctions de validation typées." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Définissez tous les types avant de construire l'application" },
        { type: "li", text: "Utilisez les discriminated unions pour les types d'actions" },
        { type: "li", text: "Construisez des composants réutilisables typés" },
      ]}
    ],
    quiz: [
      { question: "Quel pattern est utilisé pour les actions de tâche ?", options: ["Littéraux d'objet", "Discriminated unions", "Tableaux", "Maps"], explanation: "Les discriminated unions utilisent une propriété 'type' commune pour distinguer les formes d'action." },
      { question: "Quel est l'avantage de useReducer avec TypeScript ?", options: ["Rendu plus rapide", "Gestion d'état typée", "Moins de code", "Meilleur style"], explanation: "useReducer avec TypeScript garantit que toutes les transitions d'état sont vérifiées par type." },
      { question: "Que signifie Partial<Task> ?", options: ["Toutes les propriétés sont requises", "Toutes les propriétés sont optionnelles", "Certaines propriétés sont readonly", "Task est un tableau"], explanation: "Partial<Task> rend toutes les propriétés de l'interface Task optionnelles." }
    ],
    challenge: { title: "Étendre l'application", description: "Ajoutez des fonctionnalités : filtrage par priorité, réordonnancement par glisser-déposer, persistance du stockage local." },
    cheatSheet: { title: "Fiche mémo Projet Final TypeScript", items: [
      { term: "interface Task {}", definition: "Définir la forme de la tâche" },
      { term: "'todo' | 'in-progress' | 'done'", definition: "Union de littéraux pour le statut" },
      { term: "Partial<Task>", definition: "Toutes les propriétés optionnelles" },
      { term: "{ type: 'ADD'; payload: Task }", definition: "Action discriminated union" },
      { term: "useReducer<Task[], TaskAction>", definition: "Réducteur typé" }
    ]}
  },
  de: {
    sections: [
      { title: "Projektübersicht", content: [
        { type: "p", text: "In diesem Abschlussprojekt kombinieren wir alles, was Sie über TypeScript gelernt haben, um eine vollständige <strong>Aufgabenverwaltungsanwendung</strong> mit Next.js zu bauen." },
        { type: "li", text: "<strong>Aufgaben-CRUD</strong> — Erstellen, Lesen, Aktualisieren, Löschen" },
        { type: "li", text: "<strong>Typsicherer State</strong> — Ganzer State mit richtigen Typen verwaltet" },
        { type: "li", text: "<strong>Formularbehandlung</strong> — Getypte Formularevents und Validierung" },
      ]},
      { title: "Ihre Typen definieren", content: [
        { type: "p", text: "Beginnen Sie mit der Definition aller Typen, die Ihre Anwendung benötigt." },
      ]},
      { title: "Getypte Komponenten erstellen", content: [
        { type: "p", text: "Erstellen Sie wiederverwendbare Komponenten mit strikten Typdefinitionen." },
      ]},
      { title: "Typsichere State-Verwaltung", content: [
        { type: "p", text: "Verwenden Sie useReducer mit getypten Aktionen für vorhersagbare State-Verwaltung." },
      ]},
      { title: "Validierung hinzufügen", content: [
        { type: "p", text: "Verwenden Sie TypeScript, um typsichere Validierungsfunktionen zu erstellen." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Definieren Sie alle Typen vor dem Bauen der Anwendung" },
        { type: "li", text: "Verwenden Sie Discriminated Unions für Aktionstypen" },
        { type: "li", text: "Erstellen Sie wiederverwendbare getypte Komponenten" },
      ]}
    ],
    quiz: [
      { question: "Welches Muster wird für Aufgabenaktionen verwendet?", options: ["Objektliterale", "Discriminated Unions", "Arrays", "Maps"], explanation: "Discriminated Unions verwenden eine gemeinsame 'type'-Eigenschaft, um verschiedene Aktionsformen zu unterscheiden." },
      { question: "Was ist der Vorteil von useReducer mit TypeScript?", options: ["Schnelleres Rendering", "Typsichere State-Verwaltung", "Weniger Code", "Besseres Styling"], explanation: "useReducer mit TypeScript stellt sicher, dass alle State-Übergänge typgeprüft und vorhersagbar sind." },
      { question: "Was bedeutet Partial<Task>?", options: ["Alle Eigenschaften sind erforderlich", "Alle Eigenschaften sind optional", "Einige Eigenschaften sind readonly", "Task ist ein Array"], explanation: "Partial<Task> macht alle Eigenschaften der Task-Schnittstelle optional." }
    ],
    challenge: { title: "Die Anwendung erweitern", description: "Fügen Sie Funktionen hinzu: Filterung nach Priorität, Drag-and-Drop, Lokale Speicherung und Dunkelmodus-Umschalter." },
    cheatSheet: { title: "TypeScript Abschlussprojekt Spickzettel", items: [
      { term: "interface Task {}", definition: "Aufgabenform definieren" },
      { term: "'todo' | 'in-progress' | 'done'", definition: "String-Literal-Union für Status" },
      { term: "Partial<Task>", definition: "Alle Eigenschaften optional" },
      { term: "{ type: 'ADD'; payload: Task }", definition: "Discriminated Union Aktion" },
      { term: "useReducer<Task[], TaskAction>", definition: "Typsicherer Reducer" }
    ]}
  }
};
export default translations;
