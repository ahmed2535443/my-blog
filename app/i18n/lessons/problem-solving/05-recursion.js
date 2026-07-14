const translations = {
  en: {
    sections: [
      { title: "Introduction to Recursion", content: [
        { type: "p", text: "Recursion is a technique where a function calls itself to solve smaller instances of a problem." },
        { type: "callout", title: "What We Will Learn", text: "Understanding recursion, base cases, recursive vs iterative solutions, and common recursive patterns." }
      ]},
      { title: "How Recursion Works", content: [
        { type: "p", text: "A recursive function has two parts: a base case that stops recursion, and a recursive case that calls itself." },
        { type: "callout", title: "Recursion Structure", text: "1. Base case - stops recursion, 2. Recursive case - calls itself with smaller input." }
      ]},
      { title: "Base Cases", content: [
        { type: "p", text: "The base case is the condition that stops the recursion. Without it, you get infinite recursion." },
        { type: "callout", title: "Base Case Rules", text: "Every recursive function must have at least one base case. It should be reached eventually." }
      ]},
      { title: "Recursion vs Iteration", content: [
        { type: "p", text: "Recursion and iteration can solve the same problems, but with different trade-offs." },
        { type: "callout", title: "Comparison", text: "Recursion: cleaner code, uses call stack. Iteration: more efficient, no stack overflow risk." }
      ]},
      { title: "Common Recursive Patterns", content: [
        { type: "p", text: "Many problems have natural recursive solutions: tree traversal, divide and conquer, backtracking." },
        { type: "callout", title: "Patterns", text: "Factorial, Fibonacci, tree traversal, binary search, merge sort, quicksort." }
      ]},
      { title: "Tail Recursion", content: [
        { type: "p", text: "Tail recursion is when the recursive call is the last operation, allowing optimization by the compiler." },
        { type: "callout", title: "Tail Recursion Benefit", text: "Can be optimized to iterative code, avoiding stack overflow for deep recursion." }
      ]}
    ],
    quiz: [
      { question: "What is the base case in recursion?",
        options: ["The first function call", "The condition that stops recursion", "The recursive call", "The function parameters"],
        correctAnswer: 1, explanation: "The base case is the condition that stops the recursion from continuing indefinitely." },
      { question: "What happens without a base case?",
        options: ["The function returns null", "Infinite recursion / stack overflow", "The function runs faster", "Nothing happens"],
        correctAnswer: 1, explanation: "Without a base case, the function calls itself infinitely, causing stack overflow." },
      { question: "What is tail recursion?",
        options: ["Recursion at the end of a function", "When recursive call is the last operation", "Using tail call optimization", "Recursion with arrays"],
        correctAnswer: 1, explanation: "Tail recursion is when the recursive call is the last operation, enabling compiler optimization." }
    ],
    challenge: { title: "Challenge: Solve with Recursion",
      description: "Write recursive solutions for factorial, Fibonacci, and binary search. Compare with iterative versions." },
    cheatSheet: { title: "Recursion Quick Reference", items: [
      { title: "Base Case", content: "Must stop recursion - check first!" },
      { title: "Recursive Case", content: "Call yourself with smaller input" },
      { title: "Trade-offs", content: "Recursion: clean code. Iteration: efficient" },
      { title: "Tail Recursion", content: "Last call can be optimized to loop" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a la recursion", content: [
        { type: "p", text: "La recursion est une technique ou une fonction s'appelle elle-meme pour resoudre de plus petits problemes." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Comprendre la recursion, les cas de base, solutions recursives vs iteratives." }
      ]},
      { title: "Comment fonctionne la recursion", content: [
        { type: "p", text: "Une fonction recursive a deux parties : un cas de base et un cas recursif." },
        { type: "callout", title: "Structure", text: "1. Cas de base - arrete la recursion, 2. Cas recursif - s'appelle avec une entree plus petite." }
      ]},
      { title: "Cas de base", content: [
        { type: "p", text: "Le cas de base est la condition qui arrete la recursion." },
        { type: "callout", title: "Regles", text: "Doit avoir au moins un cas de base. Doit etre atteint a un moment." }
      ]},
      { title: "Recursion vs iteration", content: [
        { type: "p", text: "La recursion et l'iteration peuvent resoudre les memes problemes." },
        { type: "callout", title: "Comparaison", text: "Recursion : code plus propre. Iteration : plus efficace." }
      ]},
      { title: "Patterns recursifs courants", content: [
        { type: "p", text: "Beaucoup de problemes ont des solutions naturellement recursives." },
        { type: "callout", title: "Patterns", text: "Factorielle, Fibonacci, parcours d'arbre, tri fusion, tri rapide." }
      ]},
      { title: "Recursion terminale", content: [
        { type: "p", text: "La recursion terminale est quand l'appel recursif est la derniere operation." },
        { type: "callout", title: "Avantage", text: "Peut etre optimisee en code iteratif, evitant les depassements de pile." }
      ]}
    ],
    quiz: [
      { question: "Qu'est-ce qu'un cas de base ?",
        options: ["Le premier appel", "La condition qui arrete la recursion", "L'appel recursif", "Les parametres"],
        correctAnswer: 1, explanation: "Le cas de base est la condition qui arrete la recursion de continuer indefiniment." },
      { question: "Que se passe-t-il sans cas de base ?",
        options: ["La fonction retourne null", "Recursion infinie / depassement de pile", "La fonction tourne plus vite", "Rien"],
        correctAnswer: 1, explanation: "Sans cas de base, la fonction s'appelle indefiniment, causant un depassement de pile." },
      { question: "Qu'est-ce que la recursion terminale ?",
        options: ["Recursion a la fin", "Quand l'appel recursif est la derniere operation", "Utiliser l'optimisation", "Recursion avec tableaux"],
        correctAnswer: 1, explanation: "La recursion terminale est quand l'appel recursif est la derniere operation." }
    ],
    challenge: { title: "Defi : Resoudre avec recursion",
      description: "Ecrivez des solutions recursives pour factorielle, Fibonacci et recherche binaire." },
    cheatSheet: { title: "Recursion - Reference rapide", items: [
      { title: "Cas de base", content: "Doit arreter la recursion !" },
      { title: "Cas recursif", content: "S'appeler avec une entree plus petite" },
      { title: "Compromis", code: "Recursion : propre. Iteration : efficace" },
      { title: "Terminale", content: "Dernier appel peut etre optimise en boucle" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Rekursion", content: [
        { type: "p", text: "Rekursion ist eine Technik, bei der eine Funktion sich selbst aufruft." },
        { type: "callout", title: "Was wir lernen werden", text: "Rekursion verstehen, Basisfälle, rekursive vs iterative Losungen." }
      ]},
      { title: "Wie Rekursion funktioniert", content: [
        { type: "p", text: "Eine rekursive Funktion hat zwei Teile: einen Basisfall und einen rekursiven Fall." },
        { type: "callout", title: "Struktur", text: "1. Basisfall - stoppt Rekursion, 2. Rekursiver Fall - ruft sich mit kleinerer Eingabe auf." }
      ]},
      { title: "Basisfalle", content: [
        { type: "p", text: "Der Basisfall ist die Bedingung, die die Rekursion stoppt." },
        { type: "callout", title: "Regeln", text: "Muss mindestens einen Basisfall haben. Muss irgendwann erreicht werden." }
      ]},
      { title: "Rekursion vs Iteration", content: [
        { type: "p", text: "Rekursion und Iteration konnen dieselben Probleme losen." },
        { type: "callout", title: "Vergleich", text: "Rekursion: sauberer Code. Iteration: effizienter." }
      ]},
      { title: "Haufige rekursive Muster", content: [
        { type: "p", text: "Viele Probleme haben naturliche rekursive Losungen." },
        { type: "callout", title: "Muster", text: "Fakultat, Fibonacci, Baumtraversierung, Binary Search, Merge Sort." }
      ]},
      { title: "Endrekursion", content: [
        { type: "p", text: "Endrekursion liegt vor, wenn der rekursive Aufruf die letzte Operation ist." },
        { type: "callout", title: "Vorteil", text: "Kann vom Compiler zu iterativem Code optimiert werden." }
      ]}
    ],
    quiz: [
      { question: "Was ist ein Basisfall?",
        options: ["Der erste Aufruf", "Die Bedingung die Rekursion stoppt", "Der rekursive Aufruf", "Die Parameter"],
        correctAnswer: 1, explanation: "Der Basisfall ist die Bedingung, die die Rekursion stoppt." },
      { question: "Was passiert ohne Basisfall?",
        options: ["Funktion gibt null zuruck", "Endlose Rekursion / Stack-Overflow", "Funktion lauft schneller", "Nichts"],
        correctAnswer: 1, explanation: "Ohne Basisfall ruft die Funktion sich endlos auf, was Stack-Overflow verursacht." },
      { question: "Was ist Endrekursion?",
        options: ["Rekursion am Ende", "Rekursiver Aufruf ist letzte Operation", "Optimierung nutzen", "Rekursion mit Arrays"],
        correctAnswer: 1, explanation: "Endrekursion liegt vor, wenn der rekursive Aufruf die letzte Operation ist." }
    ],
    challenge: { title: "Herausforderung: Mit Rekursion losen",
      description: "Schreiben Sie rekursive Losungen fur Fakultat, Fibonacci und Binary Search." },
    cheatSheet: { title: "Rekursion - Schnellreferenz", items: [
      { title: "Basisfall", content: "Muss Rekursion stoppen!" },
      { title: "Rekursiver Fall", content: "Selbst aufrufen mit kleinerer Eingabe" },
      { title: "Kompromisse", content: "Rekursion: sauber. Iteration: effizient" },
      { title: "Endrekursion", content: "Letzter Aufruf kann zu Schleife optimiert werden" }
    ]}
  }
};
export default translations;
