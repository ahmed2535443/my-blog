const translations = {
  en: {
    sections: [
      { title: "Introduction to Algorithmic Thinking", content: [
        { type: "p", text: "Algorithmic thinking is the ability to define clear, step-by-step instructions to solve a problem. This lesson covers algorithms, pseudocode, flowcharts, and Big O notation." },
        { type: "callout", title: "What We Will Learn", text: "Understanding algorithms, writing pseudocode, designing flowcharts, and analyzing time/space complexity with Big O." }
      ]},
      { title: "What is an Algorithm?", content: [
        { type: "p", text: "An algorithm is a finite set of unambiguous instructions that solve a specific problem or perform a task." },
        { type: "callout", title: "Algorithm Properties", text: "1. Finite - must terminate, 2. Well-defined - clear instructions, 3. Input/Output - takes input, produces output." }
      ]},
      { title: "Writing Pseudocode", content: [
        { type: "p", text: "Pseudocode is a human-readable way to describe algorithms without using actual programming syntax." },
        { type: "callout", title: "Pseudocode Rules", text: "Use plain English, indent to show structure, write one statement per line, be consistent." }
      ]},
      { title: "Designing Flowcharts", content: [
        { type: "p", text: "Flowcharts are visual representations of algorithms using symbols to show the flow of control." },
        { type: "callout", title: "Flowchart Symbols", text: "Oval = Start/End, Rectangle = Process, Diamond = Decision, Parallelogram = Input/Output." }
      ]},
      { title: "Big O Notation", content: [
        { type: "p", text: "Big O notation measures the worst-case time and space complexity of algorithms." },
        { type: "callout", title: "Common Complexities", text: "O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic." }
      ]},
      { title: "Algorithm Design Strategies", content: [
        { type: "p", text: "Common strategies include divide and conquer, dynamic programming, greedy algorithms, and backtracking." },
        { type: "callout", title: "Strategy Selection", text: "Divide and conquer for sub-problems, dynamic programming for overlapping sub-problems, greedy for locally optimal choices." }
      ]}
    ],
    quiz: [
      { question: "What is an algorithm?",
        options: ["A programming language", "A finite set of instructions to solve a problem", "A software framework", "A type of database"],
        correctAnswer: 1, explanation: "An algorithm is a finite set of unambiguous instructions that solve a specific problem." },
      { question: "What does Big O notation measure?",
        options: ["Code readability", "Worst-case time/space complexity", "Number of lines", "Memory usage only"],
        correctAnswer: 1, explanation: "Big O notation measures the worst-case time and space complexity of algorithms." },
      { question: "What does O(1) mean?",
        options: ["Constant time", "Linear time", "Logarithmic time", "Quadratic time"],
        correctAnswer: 0, explanation: "O(1) means constant time - the operation takes the same time regardless of input size." }
    ],
    challenge: { title: "Challenge: Write an Algorithm",
      description: "Write pseudocode and a flowchart for sorting a list of numbers. Analyze its time complexity." },
    cheatSheet: { title: "Algorithmic Thinking Quick Reference", items: [
      { title: "Pseudocode", content: "Plain English algorithm description" },
      { title: "Flowcharts", content: "Visual algorithm representation" },
      { title: "Big O", content: "O(1) < O(log n) < O(n) < O(n log n) < O(n²)" },
      { title: "Strategies", content: "Divide & conquer, dynamic programming, greedy" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a la pensee algebrique", content: [
        { type: "p", text: "La pensee algebrique est la capacite a definir des instructions claires et etape par etape." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Comprendre les algorithmes, ecrire du pseudocode, concevoir des organigrammes, analyser la complexite avec Big O." }
      ]},
      { title: "Qu'est-ce qu'un algorithme ?", content: [
        { type: "p", text: "Un algorithme est un ensemble fini d'instructions non ambiguës qui resolvent un probleme." },
        { type: "callout", title: "Proprietes", text: "1. Fini - doit se terminer, 2. Bien defini - instructions claires, 3. Entree/Sortie." }
      ]},
      { title: "Ecrire du pseudocode", content: [
        { type: "p", text: "Le pseudocode est une facon lisible de decrire les algorithmes sans syntaxe de programmation." },
        { type: "callout", title: "Regles", text: "Utilisez l'anglais simple, indentez pour montrer la structure, une instruction par ligne." }
      ]},
      { title: "Concevoir des organigrammes", content: [
        { type: "p", text: "Les organigrammes sont des representations visuelles des algorithmes." },
        { type: "callout", title: "Symboles", text: "Ovale = Debut/Fin, Rectangle = Processus, Losange = Decision, Parallelogramme = Entree/Sortie." }
      ]},
      { title: "Notation Big O", content: [
        { type: "p", text: "La notation Big O mesure la complexite temporelle et spatiale au pire cas." },
        { type: "callout", title: "Complexites courantes", text: "O(1) constant, O(log n) logarithmique, O(n) lineaire, O(n log n) lineique, O(n²) quadratique." }
      ]},
      { title: "Strategies de conception", content: [
        { type: "p", text: "Les strategies courantes incluent diviser pour regner, programmation dynamique, algorithmes gloutons." },
        { type: "callout", title: "Selection de strategie", text: "Diviser pour regner pour les sous-problemes, programmation dynamique pour les sous-problemes chevauchants." }
      ]}
    ],
    quiz: [
      { question: "Qu'est-ce qu'un algorithme ?",
        options: ["Un langage de programmation", "Un ensemble fini d'instructions pour resoudre un probleme", "Un framework", "Un type de base de donnees"],
        correctAnswer: 1, explanation: "Un algorithme est un ensemble fini d'instructions non ambiguës qui resolvent un probleme." },
      { question: "Que mesure la notation Big O ?",
        options: ["La lisibilite du code", "La complexite temporelle/spatiale au pire cas", "Le nombre de lignes", "L'utilisation memoire uniquement"],
        correctAnswer: 1, explanation: "La notation Big O mesure la complexite temporelle et spatiale au pire cas." },
      { question: "Que signifie O(1) ?",
        options: ["Temps constant", "Temps lineaire", "Temps logarithmique", "Temps quadratique"],
        correctAnswer: 0, explanation: "O(1) signifie temps constant - l'operation prend le meme temps quelle que soit la taille." }
    ],
    challenge: { title: "Defi : Ecrire un algorithme",
      description: "Ecrivez du pseudocode et un organigramme pour trier une liste de nombres." },
    cheatSheet: { title: "Reference rapide de la pensee algebrique", items: [
      { title: "Pseudocode", content: "Description d'algorithme en anglais simple" },
      { title: "Organigrammes", content: "Representation visuelle des algorithmes" },
      { title: "Big O", content: "O(1) < O(log n) < O(n) < O(n log n) < O(n²)" },
      { title: "Strategies", content: "Diviser pour regner, programmation dynamique, glouton" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in algorithmisches Denken", content: [
        { type: "p", text: "Algorithmisches Denken ist die Fahigkeit, klare, schrittweise Anweisungen zur Problemlösung zu definieren." },
        { type: "callout", title: "Was wir lernen werden", text: "Algorithmen verstehen, Pseudocode schreiben, Flussdiagramme entwerfen, Big O Notation analysieren." }
      ]},
      { title: "Was ist ein Algorithmus?", content: [
        { type: "p", text: "Ein Algorithmus ist eine endliche Menge eindeutiger Anweisungen, die ein spezifisches Problem löst." },
        { type: "callout", title: "Eigenschaften", text: "1. Endlich - muss terminieren, 2. Eindeutig - klare Anweisungen, 3. Ein/Ausgabe." }
      ]},
      { title: "Pseudocode schreiben", content: [
        { type: "p", text: "Pseudocode ist eine menschenlesbare Methode, Algorithmen ohne Programmiersyntax zu beschreiben." },
        { type: "callout", title: "Regeln", text: "Verwenden Sie einfaches Englisch, einrucken fur Struktur, eine Anweisung pro Zeile." }
      ]},
      { title: "Flussdiagramme entwerfen", content: [
        { type: "p", text: "Flussdiagramme sind visuelle Darstellungen von Algorithmen mit Symbolen." },
        { type: "callout", title: "Symbole", text: "Oval = Start/Ende, Rechteck = Prozess, Raute = Entscheidung, Parallelogramm = Ein/Ausgabe." }
      ]},
      { title: "Big O Notation", content: [
        { type: "p", text: "Big O Notation misst die Zeit- und Speicherkomplexität im schlimmsten Fall." },
        { type: "callout", title: "Haufige Komplexitaten", text: "O(1) konstant, O(log n) logarithmisch, O(n) linear, O(n log n) linearithmisch, O(n²) quadratisch." }
      ]},
      { title: "Algorithmus-Design-Strategien", content: [
        { type: "p", text: "Haufige Strategien sind Divide and Conquer, dynamische Programmierung, Greedy-Algorithmen." },
        { type: "callout", title: "Strategiewahl", text: "Divide and Conquer fur Teilprobleme, dynamische Programmierung fur uberlappende Teilprobleme." }
      ]}
    ],
    quiz: [
      { question: "Was ist ein Algorithmus?",
        options: ["Eine Programmiersprache", "Eine endliche Menge von Anweisungen zur Problemlosung", "Ein Software-Framework", "Eine Datenbank"],
        correctAnswer: 1, explanation: "Ein Algorithmus ist eine endliche Menge eindeutiger Anweisungen, die ein Problem löst." },
      { question: "Was misst Big O Notation?",
        options: ["Code-Lesbarkeit", "Zeit-/Speicherkomplexität im schlimmsten Fall", "Anzahl der Zeilen", "Nur Speichernutzung"],
        correctAnswer: 1, explanation: "Big O Notation misst die Zeit- und Speicherkomplexität im schlimmsten Fall." },
      { question: "Was bedeutet O(1)?",
        options: ["Konstante Zeit", "Lineare Zeit", "Logarithmische Zeit", "Quadratische Zeit"],
        correctAnswer: 0, explanation: "O(1) bedeutet konstante Zeit - die Operation dauert gleich lange unabhangig von der Eingabegroße." }
    ],
    challenge: { title: "Herausforderung: Algorithmus schreiben",
      description: "Schreiben Sie Pseudocode und ein Flussdiagramm zum Sortieren einer Zahlenliste." },
    cheatSheet: { title: "Algorithmisches Denken - Schnellreferenz", items: [
      { title: "Pseudocode", content: "Algorithmus-Beschreibung in einfacher Sprache" },
      { title: "Flussdiagramme", content: "Visuelle Algorithmus-Darstellung" },
      { title: "Big O", content: "O(1) < O(log n) < O(n) < O(n log n) < O(n²)" },
      { title: "Strategien", content: "Divide & Conquer, dynamische Programmierung, Greedy" }
    ]}
  }
};
export default translations;
