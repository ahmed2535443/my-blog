const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Error handling is a critical part of writing clean code. Proper error handling makes code more robust, reliable, and easier to maintain. When errors are handled well, programs behave predictably even when things go wrong." },
        { type: "p", text: "In this lesson, we will learn the best practices for handling errors in JavaScript." },
      ]},
      { title: "Why Error Handling Matters", content: [
        { type: "p", text: "Errors are inevitable in programming. A good error handling strategy helps you:" },
        { type: "li", text: "Understand what went wrong when errors occur" },
        { type: "li", text: "Recover from errors gracefully" },
        { type: "li", text: "Provide meaningful feedback to users" },
        { type: "li", text: "Debug and fix issues faster" },
        { type: "li", text: "Keep your application stable and reliable" },
      ]},
      { title: "Try-Catch-Finally", content: [
        { type: "p", text: "The <code>try...catch</code> statement is the primary way to handle errors in JavaScript. It allows you to try code that might fail and handle the error if it occurs." },
        { type: "p", text: "How it works:" },
        { type: "li", text: "<code>try</code>: Contains code that might throw an error" },
        { type: "li", text: "<code>catch</code>: Handles the error if one occurs" },
        { type: "li", text: "<code>finally</code>: Always runs, regardless of whether an error occurred (optional)" },
      ]},
      { title: "Error Handling Best Practices", content: [
        { type: "p", text: "Rule 1: <strong>Don't catch errors silently</strong>. Always log or handle errors in some way. Swallowing errors makes debugging very difficult." },
        { type: "p", text: "Rule 2: <strong>Use custom error classes</strong> for domain-specific errors. This makes error handling more meaningful and easier to manage." },
        { type: "p", text: "Rule 3: <strong>Don't use try-catch for flow control</strong>. Try-catch is for exceptional cases, not for normal program flow." },
        { type: "p", text: "Rule 4: <strong>Provide meaningful error messages</strong>. Error messages should clearly describe what went wrong and help with debugging." },
      ]},
      { title: "Using Custom Errors", content: [
        { type: "p", text: "Custom error classes allow you to create domain-specific errors that are more meaningful and easier to handle. They help you organize errors by type and handle them differently." },
        { type: "p", text: "Benefits of custom errors:" },
        { type: "li", text: "Organize errors by type" },
        { type: "li", text: "Handle different errors differently" },
        { type: "li", text: "Provide meaningful error messages" },
        { type: "li", text: "Make error handling more structured" },
      ]},
      { title: "Async Error Handling", content: [
        { type: "p", text: "When working with asynchronous code (Promises, async/await), error handling requires special attention." },
        { type: "p", text: "Best practices for async error handling:" },
        { type: "li", text: "<strong>Always catch Promise rejections</strong> to prevent unhandled rejections" },
        { type: "li", text: "<strong>Use async/await with try-catch</strong> for cleaner error handling" },
        { type: "li", text: "<strong>Handle errors in async operations</strong> to prevent silent failures" },
      ]},
      { title: "When to Use Error Handling", content: [
        { type: "p", text: "Not all errors need to be caught and handled. Here are guidelines for when to use error handling:" },
        { type: "li", text: "<strong>Network operations:</strong> Always handle network errors" },
        { type: "li", text: "<strong>User input:</strong> Validate and handle invalid input" },
        { type: "li", text: "<strong>External services:</strong> Handle failures from external APIs" },
        { type: "li", text: "<strong>File operations:</strong> Handle file not found or permission errors" },
        { type: "li", text: "<strong>Data parsing:</strong> Handle malformed data gracefully" },
      ]},
    ],
    quiz: [
      { question: "What is the primary way to handle errors in JavaScript?", options: ["if...else statement", "try...catch statement", "switch statement", "for loop"], explanation: "The try...catch statement is the primary way to handle errors in JavaScript. It allows you to try code that might fail and handle the error if it occurs." },
    ],
    challenge: { title: "Challenge: Add error handling", description: "The following function makes an API call but has no error handling. Add proper error handling." },
    cheatSheet: { title: "Error Handling Cheat Sheet", items: [
      { term: "try-catch-finally", definition: "Primary error handling mechanism in JavaScript" },
      { term: "Don't swallow errors", definition: "Always log or handle errors in some way" },
      { term: "Custom error classes", definition: "Create domain-specific errors for better organization" },
      { term: "Meaningful messages", definition: "Error messages should clearly describe what went wrong" },
      { term: "Async error handling", definition: "Use try-catch with async/await, catch Promise rejections" },
      { term: "Error boundaries", definition: "Catch errors at appropriate levels in your code" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "La gestion des erreurs est une partie critique de l'écriture de code propre. Une bonne gestion des erreurs rend le code plus robuste, fiable et facile à maintenir. Quand les erreurs sont bien gérées, les programmes se comportent de manière prévisible même quand les choses tournent mal." },
        { type: "p", text: "Dans cette leçon, nous apprendrons les meilleures pratiques pour gérer les erreurs en JavaScript." },
      ]},
      { title: "Pourquoi la gestion des erreurs est importante", content: [
        { type: "p", text: "Les erreurs sont inévitables en programmation. Une bonne stratégie de gestion des erreurs vous aide à :" },
        { type: "li", text: "Comprendre ce qui a mal tourné quand les erreurs surviennent" },
        { type: "li", text: "Récupérer des erreurs gracieusement" },
        { type: "li", text: "Fournir des retours significatifs aux utilisateurs" },
        { type: "li", text: "Déboguer et corriger les problèmes plus rapidement" },
        { type: "li", text: "Garder votre application stable et fiable" },
      ]},
      { title: "Try-Catch-Finally", content: [
        { type: "p", text: "L'instruction <code>try...catch</code> est le moyen principal de gérer les erreurs en JavaScript. Elle vous permet d'essayer du code qui pourrait échouer et de gérer l'erreur si elle survient." },
        { type: "p", text: "Comment ça marche :" },
        { type: "li", text: "<code>try</code> : Contient le code qui pourrait lancer une erreur" },
        { type: "li", text: "<code>catch</code> : Gère l'erreur si une erreur survient" },
        { type: "li", text: "<code>finally</code> : S'exécute toujours, qu'une erreur survienne ou non (optionnel)" },
      ]},
      { title: "Meilleures pratiques de gestion des erreurs", content: [
        { type: "p", text: "Règle 1 : <strong>Ne pas attraper les erreurs silencieusement</strong>. Toujours journaliser ou gérer les erreurs d'une manière ou d'une autre. Les erreurs avalées rendent le débogage très difficile." },
        { type: "p", text: "Règle 2 : <strong>Utiliser des classes d'erreur personnalisées</strong> pour les erreurs spécifiques au domaine. Cela rend la gestion des erreurs plus significative et plus facile à gérer." },
        { type: "p", text: "Règle 3 : <strong>Ne pas utiliser try-catch pour le contrôle de flux</strong>. Try-catch est pour les cas exceptionnels, pas pour le flux normal du programme." },
        { type: "p", text: "Règle 4 : <strong>Fournir des messages d'erreur significatifs</strong>. Les messages d'erreur devraient décrire clairement ce qui a mal tourné et aider au débogage." },
      ]},
      { title: "Utilisation d'erreurs personnalisées", content: [
        { type: "p", text: "Les classes d'erreur personnalisées vous permettent de créer des erreurs spécifiques au domaine qui sont plus significatives et plus faciles à gérer. Elles vous aident à organiser les erreurs par type et à les gérer différemment." },
        { type: "p", text: "Avantages des erreurs personnalisées :" },
        { type: "li", text: "Organiser les erreurs par type" },
        { type: "li", text: "Gérer différentes erreurs différemment" },
        { type: "li", text: "Fournir des messages d'erreur significatifs" },
        { type: "li", text: "Rendre la gestion des erreurs plus structurée" },
      ]},
      { title: "Gestion asynchrone des erreurs", content: [
        { type: "p", text: "Lorsque vous travaillez avec du code asynchrone (Promesses, async/await), la gestion des erreurs nécessite une attention particulière." },
        { type: "p", text: "Meilleures pratiques pour la gestion asynchrone des erreurs :" },
        { type: "li", text: "<strong>Toujours attraper les rejets de Promesses</strong> pour éviter les rejets non gérés" },
        { type: "li", text: "<strong>Utiliser async/await avec try-catch</strong> pour une gestion des erreurs plus propre" },
        { type: "li", text: "<strong>Gérer les erreurs dans les opérations asynchrones</strong> pour éviter les échecs silencieux" },
      ]},
      { title: "Quand utiliser la gestion des erreurs", content: [
        { type: "p", text: "Toutes les erreurs n'ont pas besoin d'être attrapées et gérées. Voici des directives pour savoir quand utiliser la gestion des erreurs :" },
        { type: "li", text: "<strong>Opérations réseau :</strong> Toujours gérer les erreurs réseau" },
        { type: "li", text: "<strong>Saisie utilisateur :</strong> Valider et gérer les entrées invalides" },
        { type: "li", text: "<strong>Services externes :</strong> Gérer les échecs des API externes" },
        { type: "li", text: "<strong>Opérations de fichier :</strong> Gérer les erreurs de fichier non trouvé ou de permission" },
        { type: "li", text: "<strong>Parsing de données :</strong> Gérer les données malformées gracieusement" },
      ]},
    ],
    quiz: [
      { question: "Quel est le moyen principal de gérer les erreurs en JavaScript ?", options: ["Instruction if...else", "Instruction try...catch", "Instruction switch", "Boucle for"], explanation: "L'instruction try...catch est le moyen principal de gérer les erreurs en JavaScript. Elle vous permet d'essayer du code qui pourrait échouer et de gérer l'erreur si elle survient." },
    ],
    challenge: { title: "Défi : Ajoutez la gestion des erreurs", description: "La fonction suivante effectue un appel API mais n'a pas de gestion des erreurs. Ajoutez une gestion des erreurs appropriée." },
    cheatSheet: { title: "Référence de la gestion des erreurs", items: [
      { term: "try-catch-finally", definition: "Mécanisme principal de gestion des erreurs en JavaScript" },
      { term: "Ne pas avaler les erreurs", definition: "Toujours journaliser ou gérer les erreurs d'une manière ou d'une autre" },
      { term: "Classes d'erreur personnalisées", definition: "Créez des erreurs spécifiques au domaine pour une meilleure organisation" },
      { term: "Messages significatifs", definition: "Les messages d'erreur devraient décrire clairement ce qui a mal tourné" },
      { term: "Gestion asynchrone", definition: "Utilisez try-catch avec async/await, attrapez les rejets de Promesses" },
      { term: "Limites d'erreur", definition: "Attrapez les erreurs à des niveaux appropriés dans votre code" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Fehlerbehandlung ist ein kritischer Teil des Schreibens von sauberem Code. Richtige Fehlerbehandlung macht Code robuster, zuverlässiger und leichter wartbar. Wenn Fehler gut behandelt werden, verhalten sich Programme vorhersagbar, auch wenn etwas schiefgeht." },
        { type: "p", text: "In dieser Lektion lernen wir bewährte Praktiken zur Fehlerbehandlung in JavaScript." },
      ]},
      { title: "Warum Fehlerbehandlung wichtig ist", content: [
        { type: "p", text: "Fehler sind im Programmieren unvermeidlich. Eine gute Fehlerbehandlungsstrategie hilft Ihnen:" },
        { type: "li", text: "Zu verstehen, was schiefgegangen ist, wenn Fehler auftreten" },
        { type: "li", text: "Geschickt von Fehlern zu erholen" },
        { type: "li", text: "Benutzern aussagekräftiges Feedback zu geben" },
        { type: "li", text: "Probleme schneller zu debuggen und zu beheben" },
        { type: "li", text: "Ihre Anwendung stabil und zuverlässig zu halten" },
      ]},
      { title: "Try-Catch-Finally", content: [
        { type: "p", text: "Die Anweisung <code>try...catch</code> ist die Hauptmethode zur Fehlerbehandlung in JavaScript. Sie ermöglicht es Ihnen, Code auszuprobieren, der fehlschlagen könnte, und den Fehler zu behandeln, wenn er auftritt." },
        { type: "p", text: "So funktioniert es:" },
        { type: "li", text: "<code>try</code>: Enthält Code, der einen Fehler werfen könnte" },
        { type: "li", text: "<code>catch</code>: Behandelt den Fehler, wenn einer auftritt" },
        { type: "li", text: "<code>finally</code>: Läuft immer, unabhängig davon, ob ein Fehler aufgetreten ist (optional)" },
      ]},
      { title: "Best Practices für Fehlerbehandlung", content: [
        { type: "p", text: "Regel 1: <strong>Fangen Sie Fehler nicht stillschweigend ab</strong>. Protokollieren oder behandeln Sie Fehler immer irgendwie. Verschluckte Fehler machen das Debuggen sehr schwierig." },
        { type: "p", text: "Regel 2: <strong>Verwenden Sie benutzerdefinierte Fehlertypen</strong> für domänenspezifische Fehler. Dies macht die Fehlerbehandlung aussagekräftiger und leichter zu verwalten." },
        { type: "p", text: "Regel 3: <strong>Verwenden Sie try-catch nicht zur Flusskontrolle</strong>. Try-catch ist für Ausnahmefälle, nicht für den normalen Programmablauf." },
        { type: "p", text: "Regel 4: <strong>Geben Sie aussagekräftige Fehlermeldungen</strong>. Fehlermeldungen sollten klar beschreiben, was schiefgegangen ist, und beim Debuggen helfen." },
      ]},
      { title: "Verwendung benutzerdefinierter Fehler", content: [
        { type: "p", text: "Benutzerdefinierte Fehlertypen ermöglichen es Ihnen, domänenspezifische Fehler zu erstellen, die aussagekräftiger und leichter zu behandeln sind. Sie helfen Ihnen, Fehler nach Typ zu organisieren und unterschiedlich zu behandeln." },
        { type: "p", text: "Vorteile benutzerdefinierter Fehler:" },
        { type: "li", text: "Fehler nach Typ organisieren" },
        { type: "li", text: "Verschiedene Fehler unterschiedlich behandeln" },
        { type: "li", text: "Aussagekräftige Fehlermeldungen bereitstellen" },
        { type: "li", text: "Fehlerbehandlung strukturierter machen" },
      ]},
      { title: "Asynchrone Fehlerbehandlung", content: [
        { type: "p", text: "Bei der Arbeit mit asynchronem Code (Promises, async/await) erfordert die Fehlerbehandlung besondere Aufmerksamkeit." },
        { type: "p", text: "Best Practices für asynchrone Fehlerbehandlung:" },
        { type: "li", text: "<strong>Fangen Sie Promise-Ablehnungen immer ab</strong>, um unbehandelte Ablehnungen zu verhindern" },
        { type: "li", text: "<strong>Verwenden Sie async/await mit try-catch</strong> für sauberere Fehlerbehandlung" },
        { type: "li", text: "<strong>Behandeln Sie Fehler in asynchronen Operationen</strong>, um stille Fehler zu verhindern" },
      ]},
      { title: "Wann Fehlerbehandlung verwenden", content: [
        { type: "p", text: "Nicht alle Fehler müssen abgefangen und behandelt werden. Hier sind Richtlinien, wann Fehlerbehandlung verwendet werden sollte:" },
        { type: "li", text: "<strong>Netzwerkoperationen:</strong> Behandeln Sie Netzwerkfehler immer" },
        { type: "li", text: "<strong>Benutzereingaben:</strong> Validieren und behandeln Sie ungültige Eingaben" },
        { type: "li", text: "<strong>Externe Dienste:</strong> Behandeln Sie Ausfälle externer APIs" },
        { type: "li", text: "<strong>Dateioperationen:</strong> Behandeln Sie Datei-nicht-gefunden- oder Berechtigungsfehler" },
        { type: "li", text: "<strong>Datenparsen:</strong> Behandeln Sie fehlerhafte Daten geschickt" },
      ]},
    ],
    quiz: [
      { question: "Was ist die Hauptmethode zur Fehlerbehandlung in JavaScript?", options: ["if...else-Anweisung", "try...catch-Anweisung", "switch-Anweisung", "for-Schleife"], explanation: "Die try...catch-Anweisung ist die Hauptmethode zur Fehlerbehandlung in JavaScript. Sie ermöglicht es Ihnen, Code auszuprobieren, der fehlschlagen könnte, und den Fehler zu behandeln, wenn er auftritt." },
    ],
    challenge: { title: "Herausforderung: Fügen Sie Fehlerbehandlung hinzu", description: "Die folgende Funktion macht einen API-Aufruf, hat aber keine Fehlerbehandlung. Fügen Sie ordnungsgemäße Fehlerbehandlung hinzu." },
    cheatSheet: { title: "Übersicht über Fehlerbehandlung", items: [
      { term: "try-catch-finally", definition: "Hauptmechanismus der Fehlerbehandlung in JavaScript" },
      { term: "Fehler nicht verschlucken", definition: "Protokollieren oder behandeln Sie Fehler immer irgendwie" },
      { term: "Benutzerdefinierte Fehlertypen", definition: "Erstellen Sie domänenspezifische Fehler für bessere Organisation" },
      { term: "Aussagekräftige Meldungen", definition: "Fehlermeldungen sollten klar beschreiben, was schiefgegangen ist" },
      { term: "Asynchrone Fehlerbehandlung", definition: "Verwenden Sie try-catch mit async/await, fangen Sie Promise-Ablehnungen ab" },
      { term: "Fehlergrenzen", definition: "Fangen Sie Fehler auf angemessenen Ebenen in Ihrem Code ab" },
    ]}
  },
};

export default translations;
