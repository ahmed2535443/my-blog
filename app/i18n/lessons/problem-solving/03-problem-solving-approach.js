const translations = {
  en: {
    sections: [
      { title: "Introduction to Problem Solving", content: [
        { type: "p", text: "Problem solving is the core skill of software engineering. This lesson covers systematic approaches to analyzing and solving programming challenges." },
        { type: "callout", title: "What We Will Learn", text: "Problem analysis, solution design, debugging strategies, testing approaches, and documentation." }
      ]},
      { title: "Problem Analysis", content: [
        { type: "p", text: "Before solving a problem, understand it completely. Identify the input, output, constraints, and edge cases." },
        { type: "callout", title: "Analysis Steps", text: "1. Read the problem carefully, 2. Identify inputs/outputs, 3. List constraints, 4. Find edge cases." }
      ]},
      { title: "Solution Design", content: [
        { type: "p", text: "Design your solution before coding. Use pseudocode, flowcharts, or diagrams to plan your approach." },
        { type: "callout", title: "Design Tips", text: "Start with a high-level approach, break into smaller tasks, consider time/space complexity." }
      ]},
      { title: "Debugging Strategies", content: [
        { type: "p", text: "Effective debugging is essential for finding and fixing bugs in your code." },
        { type: "callout", title: "Debugging Techniques", text: "Print debugging, breakpoints, stack traces, rubber duck debugging, binary search debugging." }
      ]},
      { title: "Testing Approaches", content: [
        { type: "p", text: "Testing ensures your solution works correctly for all cases." },
        { type: "callout", title: "Testing Types", text: "Unit testing, integration testing, edge case testing, performance testing." }
      ]},
      { title: "Documentation", content: [
        { type: "p", text: "Document your solution for future reference and for other developers." },
        { type: "callout", title: "Documentation Best Practices", text: "Write clear comments, create README files, document API endpoints, explain complex logic." }
      ]}
    ],
    quiz: [
      { question: "What is the first step in problem analysis?",
        options: ["Write code immediately", "Read the problem carefully", "Choose a framework", "Start testing"],
        correctAnswer: 1, explanation: "Always read and understand the problem completely before attempting to solve it." },
      { question: "What is rubber duck debugging?",
        options: ["Using a rubber duck toy", "Explaining your code line by line to find bugs", "A type of automated testing", "A debugging framework"],
        correctAnswer: 1, explanation: "Rubber duck debugging involves explaining your code line by line to find logical errors." },
      { question: "Why is documentation important?",
        options: ["It makes code run faster", "It helps future developers understand the code", "It prevents all bugs", "It replaces testing"],
        correctAnswer: 1, explanation: "Documentation helps future developers (including yourself) understand and maintain the code." }
    ],
    challenge: { title: "Challenge: Solve a Problem",
      description: "Take a coding challenge, analyze it, design a solution, implement it, debug if needed, and document your approach." },
    cheatSheet: { title: "Problem Solving Quick Reference", items: [
      { title: "Analysis", content: "Read, identify I/O, list constraints, find edge cases" },
      { title: "Design", content: "High-level approach → smaller tasks → complexity" },
      { title: "Debugging", content: "Print, breakpoints, stack traces, rubber duck" },
      { title: "Testing", content: "Unit, integration, edge cases, performance" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a la resolution de problemes", content: [
        { type: "p", text: "La resolution de problemes est la competence centrale du developpement logiciel." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Analyse des problemes, conception de solutions, strategies de debogage, approches de test, documentation." }
      ]},
      { title: "Analyse du probleme", content: [
        { type: "p", text: "Avant de resoudre un probleme, comprenez-le completement." },
        { type: "callout", title: "Etapes d'analyse", text: "1. Lisez attentivement, 2. Identifiez les E/S, 3. Listez les contraintes, 4. Trouvez les cas limites." }
      ]},
      { title: "Conception de la solution", content: [
        { type: "p", text: "Concevez votre solution avant de coder." },
        { type: "callout", title: "Conseils", text: "Commencez par une approche globale, decomposez en taches plus petites." }
      ]},
      { title: "Strategies de debogage", content: [
        { type: "p", text: "Le debogage efficace est essentiel pour trouver et corriger les bugs." },
        { type: "callout", title: "Techniques", text: "Debogage par impression, points d'arret, traces de pile, canard en plastique." }
      ]},
      { title: "Approches de test", content: [
        { type: "p", text: "Les tests garantissent que votre solution fonctionne correctement." },
        { type: "callout", title: "Types de tests", text: "Test unitaire, test d'integration, test de cas limites, test de performance." }
      ]},
      { title: "Documentation", content: [
        { type: "p", text: "Documentez votre solution pour les futures references." },
        { type: "callout", title: "Bonnes pratiques", text: "Commentaires clairs, fichiers README, documentation des API." }
      ]}
    ],
    quiz: [
      { question: "Quelle est la premiere etape de l'analyse ?",
        options: ["Ecrire du code immediatement", "Lire attentivement le probleme", "Choisir un framework", "Commencer les tests"],
        correctAnswer: 1, explanation: "Lisez et comprenez toujours completement le probleme avant de le resoudre." },
      { question: "Qu'est-ce que le debogage au canard ?",
        options: ["Utiliser un jouet canard", "Expliquer son code ligne par ligne pour trouver les bugs", "Un type de test automatise", "Un framework de debogage"],
        correctAnswer: 1, explanation: "Le debogage au canard consiste a expliquer son code ligne par ligne pour trouver les erreurs." },
      { question: "Pourquoi la documentation est-elle importante ?",
        options: ["Elle rend le code plus rapide", "Elle aide les futurs developpeurs a comprendre le code", "Elle previent tous les bugs", "Elle remplace les tests"],
        correctAnswer: 1, explanation: "La documentation aide les futurs developpeurs a comprendre et maintenir le code." }
    ],
    challenge: { title: "Defi : Resoudre un probleme",
      description: "Prenez un defi de programmation, analysez-le, concevez une solution, implementez-la, documentez." },
    cheatSheet: { title: "Reference rapide de resolution", items: [
      { title: "Analyse", content: "Lire, identifier E/S, contraintes, cas limites" },
      { title: "Conception", content: "Approche globale → taches plus petites" },
      { title: "Debogage", content: "Impression, points d'arret, canard" },
      { title: "Test", content: "Unitaire, integration, cas limites" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in die Problemlösung", content: [
        { type: "p", text: "Problemlösung ist die Kernkompetenz des Software-Engineerings." },
        { type: "callout", title: "Was wir lernen werden", text: "Problemanalyse, Lösungsgestaltung, Debugging-Strategien, Testansatze, Dokumentation." }
      ]},
      { title: "Problemanalyse", content: [
        { type: "p", text: "Bevor Sie ein Problem losen, verstehen Sie es vollstandig." },
        { type: "callout", title: "Analyseschritte", text: "1. Problem genau lesen, 2. Ein/Ausgaben identifizieren, 3. Einschrankungen auflisten, 4. Randfalle finden." }
      ]},
      { title: "Losungsgestaltung", content: [
        { type: "p", text: "Gestalten Sie Ihre Losung vor dem Programmieren." },
        { type: "callout", title: "Tipps", text: "Beginnen Sie mit einem hochsten Ansatz, zerlegen Sie in kleinere Aufgaben." }
      ]},
      { title: "Debugging-Strategien", content: [
        { type: "p", text: "Effektives Debugging ist wesentlich zum Finden und Beheben von Fehlern." },
        { type: "callout", title: "Techniken", text: "Print-Debugging, Haltepunkte, Stack-Traces, Rubber-Duck-Debugging." }
      ]},
      { title: "Testansatze", content: [
        { type: "p", text: "Tests stellen sicher, dass Ihre Losung fur alle Falle korrekt funktioniert." },
        { type: "callout", title: "Testarten", text: "Unit-Tests, Integrationstests, Randfalltests, Performance-Tests." }
      ]},
      { title: "Dokumentation", content: [
        { type: "p", text: "Dokumentieren Sie Ihre Losung fur zukunftige Referenz." },
        { type: "callout", title: "Best Practices", text: "Klare Kommentare, README-Dateien, API-Dokumentation, komplexe Logik erklaren." }
      ]}
    ],
    quiz: [
      { question: "Was ist der erste Schritt der Problemanalyse?",
        options: ["Sofort Programmcode schreiben", "Problem genau lesen", "Framework wahlen", "Tests starten"],
        correctAnswer: 1, explanation: "Lesen und verstehen Sie das Problem immer vollstandig, bevor Sie es zu losen versuchen." },
      { question: "Was ist Rubber-Duck-Debugging?",
        options: ["Eine Ente benutzen", "Code Zeile für Zeile erklaren, um Fehler zu finden", "Ein automatisierter Test", "Ein Debugging-Framework"],
        correctAnswer: 1, explanation: "Rubber-Duck-Debugging bedeutet, Code Zeile für Zeile zu erklaren, um logische Fehler zu finden." },
      { question: "Warum ist Dokumentation wichtig?",
        options: ["Macht Code schneller", "Hilft zukunftigen Entwicklern den Code zu verstehen", "Verhindert alle Fehler", "Ersetzt Tests"],
        correctAnswer: 1, explanation: "Dokumentation hilft zukunftigen Entwicklern, den Code zu verstehen und zu warten." }
    ],
    challenge: { title: "Herausforderung: Problem losen",
      description: "Nehmen Sie eine Programmieraufgabe, analysieren Sie sie, gestalten Sie eine Losung, implementieren Sie sie." },
    cheatSheet: { title: "Problemlösung - Schnellreferenz", items: [
      { title: "Analyse", content: "Lesen, E/A identifizieren, Einschrankungen, Randfalle" },
      { title: "Gestaltung", content: "Hochster Ansatz → kleinere Aufgaben" },
      { title: "Debugging", content: "Print, Haltepunkte, Rubber Duck" },
      { title: "Test", content: "Unit, Integration, Randfalle" }
    ]}
  }
};
export default translations;
