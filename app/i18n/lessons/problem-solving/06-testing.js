const translations = {
  en: {
    sections: [
      { title: "Introduction to Testing", content: [
        { type: "p", text: "Testing is essential for ensuring code quality and reliability. This lesson covers testing methodologies, test-driven development, and debugging techniques." },
        { type: "callout", title: "What We Will Learn", text: "Testing methodologies, TDD, debugging techniques, test coverage, and best practices." }
      ]},
      { title: "Testing Methodologies", content: [
        { type: "p", text: "Different testing levels catch different types of bugs at different stages." },
        { type: "callout", title: "Testing Levels", text: "Unit tests (individual functions), integration tests (modules), end-to-end tests (full application)." }
      ]},
      { title: "Test-Driven Development (TDD)", content: [
        { type: "p", text: "TDD is a methodology where you write tests before writing the actual code." },
        { type: "callout", title: "TDD Cycle", text: "1. Write a failing test, 2. Write minimal code to pass, 3. Refactor the code." }
      ]},
      { title: "Debugging Techniques", content: [
        { type: "p", text: "Effective debugging helps you find and fix bugs faster." },
        { type: "callout", title: "Techniques", text: "Print debugging, console.log, breakpoints, debugger statement, stack traces, binary search debugging." }
      ]},
      { title: "Test Coverage", content: [
        { type: "p", text: "Test coverage measures how much of your code is tested." },
        { type: "callout", title: "Coverage Tips", text: "Aim for 80%+ coverage, focus on critical paths, don't chase 100% blindly." }
      ]},
      { title: "Debugging Best Practices", content: [
        { type: "p", text: "Follow these practices to debug efficiently and prevent future bugs." },
        { type: "callout", title: "Best Practices", text: "Reproduce the bug first, isolate the problem, understand the error message, fix the root cause." }
      ]}
    ],
    quiz: [
      { question: "What is TDD?",
        options: ["Testing Data-Driven Development", "Test-Driven Development", "Type-Driven Design", "Total Debug Development"],
        correctAnswer: 1, explanation: "TDD stands for Test-Driven Development - write tests before writing code." },
      { question: "What is the first step in TDD?",
        options: ["Write the code", "Write a failing test", "Write documentation", "Deploy the application"],
        correctAnswer: 1, explanation: "In TDD, you first write a failing test that defines what you want to achieve." },
      { question: "What is test coverage?",
        options: ["Number of tests", "Percentage of code tested by tests", "Test execution time", "Number of bugs found"],
        correctAnswer: 1, explanation: "Test coverage measures the percentage of your code that is executed by tests." }
    ],
    challenge: { title: "Challenge: Apply TDD",
      description: "Write a function using TDD. Write tests first, make them pass, then refactor." },
    cheatSheet: { title: "Testing Quick Reference", items: [
      { title: "TDD", content: "Red (fail) → Green (pass) → Refactor" },
      { title: "Debugging", content: "Reproduce → Isolate → Understand → Fix" },
      { title: "Coverage", content: "Aim for 80%+, focus on critical paths" },
      { title: "Tools", content: "console.log, breakpoints, debugger, stack traces" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux tests", content: [
        { type: "p", text: "Les tests sont essentiels pour garantir la qualite et la fiabilite du code." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Methodologies de test, TDD, techniques de debogage, couverture de tests." }
      ]},
      { title: "Methodologies de test", content: [
        { type: "p", text: "Les differents niveaux de test attrapent differents types de bugs." },
        { type: "callout", title: "Niveaux", text: "Tests unitaires, tests d'integration, tests de bout en bout." }
      ]},
      { title: "Developpement piloté par les tests (TDD)", content: [
        { type: "p", text: "Le TDD est une methode ou vous ecrivez les tests avant le code." },
        { type: "callout", title: "Cycle TDD", text: "1. Ecrire un test echouant, 2. Ecrire le code minimal, 3. Refactorer." }
      ]},
      { title: "Techniques de debogage", content: [
        { type: "p", text: "Le debogage efficace vous aide a trouver et corriger les bugs plus rapidement." },
        { type: "callout", title: "Techniques", text: "Print debugging, console.log, points d'arret, traces de pile." }
      ]},
      { title: "Couverture de tests", content: [
        { type: "p", text: "La couverture de tests mesure la partie du code testee." },
        { type: "callout", title: "Conseils", text: "Visez 80%+, concentrez-vous sur les chemins critiques." }
      ]},
      { title: "Bonnes pratiques de debogage", content: [
        { type: "p", text: "Suivez ces pratiques pour deboguer efficacement." },
        { type: "callout", title: "Bonnes pratiques", text: "Reproduisez le bug d'abord, isolez le probleme, comprenez l'erreur." }
      ]}
    ],
    quiz: [
      { question: "Qu'est-ce que le TDD ?",
        options: ["Testing Data-Driven Development", "Developpement pilote par les tests", "Type-Driven Design", "Total Debug Development"],
        correctAnswer: 1, explanation: "Le TDD signifie Developpement pilote par les tests - ecrire les tests avant le code." },
      { question: "Quelle est la premiere etape du TDD ?",
        options: ["Ecrire le code", "Ecrire un test echouant", "Ecrire la documentation", "Deployer l'application"],
        correctAnswer: 1, explanation: "En TDD, vous ecrivez d'abord un test echouant qui definit ce que vous voulez." },
      { question: "Qu'est-ce que la couverture de tests ?",
        options: ["Nombre de tests", "Pourcentage de code teste", "Temps d'execution", "Nombre de bugs trouves"],
        correctAnswer: 1, explanation: "La couverture mesure le pourcentage du code execute par les tests." }
    ],
    challenge: { title: "Defi : Appliquer le TDD",
      description: "Ecrivez une fonction avec le TDD. Ecrivez les tests d'abord, faites-les passer, refactorisez." },
    cheatSheet: { title: "Tests - Reference rapide", items: [
      { title: "TDD", content: "Rouge (echec) → Vert (passe) → Refactorer" },
      { title: "Debogage", content: "Reproduire → Isoler → Comprendre → Corriger" },
      { title: "Couverture", content: "Visez 80%+, chemins critiques" },
      { title: "Outils", content: "console.log, points d'arret, debugger" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Tests", content: [
        { type: "p", text: "Tests sind wesentlich fur Codequalitat und Zuverlassigkeit." },
        { type: "callout", title: "Was wir lernen werden", text: "Testmethoden, TDD, Debugging-Techniken, Testabdeckung." }
      ]},
      { title: "Testmethoden", content: [
        { type: "p", text: "Verschiedene Teststufen fangen verschiedene Fehlertypen." },
        { type: "callout", title: "Teststufen", text: "Unit-Tests, Integrationstests, End-to-End-Tests." }
      ]},
      { title: "Testgetriebene Entwicklung (TDD)", content: [
        { type: "p", text: "TDD ist eine Methode, bei der Sie Tests vor dem Code schreiben." },
        { type: "callout", title: "TDD-Zyklus", text: "1. Fehlenden Test schreiben, 2. Minimale Losung schreiben, 3. Refactorn." }
      ]},
      { title: "Debugging-Techniken", content: [
        { type: "p", text: "Effektives Debugging hilft, Fehler schneller zu finden." },
        { type: "callout", title: "Techniken", text: "Print-Debugging, console.log, Haltepunkte, Stack-Traces." }
      ]},
      { title: "Testabdeckung", content: [
        { type: "p", text: "Testabdeckung misst, wie viel Code getestet wird." },
        { type: "callout", title: "Tipps", text: "Streben Sie 80%+ an, konzentrieren Sie sich auf kritische Pfade." }
      ]},
      { title: "Debugging Best Practices", content: [
        { type: "p", text: "Befolgen Sie diese Praktiken fur effizientes Debugging." },
        { type: "callout", title: "Best Practices", text: "Fehler zuerst reproduzieren, Problem isolieren, Fehlermeldung verstehen." }
      ]}
    ],
    quiz: [
      { question: "Was ist TDD?",
        options: ["Testing Data-Driven Development", "Testgetriebene Entwicklung", "Type-Driven Design", "Total Debug Development"],
        correctAnswer: 1, explanation: "TDD steht fur Testgetriebene Entwicklung - Tests vor dem Code schreiben." },
      { question: "Was ist der erste Schritt in TDD?",
        options: ["Code schreiben", "Fehlenden Test schreiben", "Dokumentation schreiben", "Anwendung deployen"],
        correctAnswer: 1, explanation: "Bei TDD schreiben Sie zuerst einen fehlenden Test, der definiert, was Sie erreichen wollen." },
      { question: "Was ist Testabdeckung?",
        options: ["Anzahl der Tests", "Prozentsatz des getesteten Codes", "Testausfuhrungszeit", "gefundene Fehler"],
        correctAnswer: 1, explanation: "Testabdeckung misst den Prozentsatz des von Tests ausgefuhrten Codes." }
    ],
    challenge: { title: "Herausforderung: TDD anwenden",
      description: "Schreiben Sie eine Funktion mit TDD. Schreiben Sie zuerst Tests, lassen Sie sie bestehen, refactorn Sie." },
    cheatSheet: { title: "Tests - Schnellreferenz", items: [
      { title: "TDD", content: "Rot (fehlgeschlagen) → Grun (bestanden) → Refactorn" },
      { title: "Debugging", content: "Reproduzieren → Isolieren → Verstehen → Beheben" },
      { title: "Abdeckung", content: "80%+ anstreben, kritische Pfade" },
      { title: "Tools", content: "console.log, Haltepunkte, debugger, Stack-Traces" }
    ]}
  }
};
export default translations;
