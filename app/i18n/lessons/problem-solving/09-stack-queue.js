const translations = {
  en: {
    sections: [
      { title: "Introduction to Stack & Queue", content: [
        { type: "p", text: "Stack and Queue are linear data structures that store elements in specific orders. Stack follows LIFO (Last In First Out), Queue follows FIFO (First In First Out)." },
        { type: "callout", title: "What We Will Learn", text: "Stack operations, Queue operations, Monotonic Stack, and problems like Valid Parentheses and Daily Temperatures." }
      ]},
      { title: "Stack Fundamentals", content: [
        { type: "p", text: "A Stack follows LIFO: the last element added is the first one removed. Key operations: push, pop, top, isEmpty." },
        { type: "callout", title: "Use Cases", text: "Balanced parentheses, undo/redo, function call stack, DFS traversal, evaluating expressions." }
      ]},
      { title: "Queue Fundamentals", content: [
        { type: "p", text: "A Queue follows FIFO: the first element added is the first one removed. Key operations: enqueue, dequeue, front, isEmpty." },
        { type: "callout", title: "Use Cases", text: "BFS traversal, task scheduling, print queue, message queues." }
      ]},
      { title: "Monotonic Stack", content: [
        { type: "p", text: "A Monotonic Stack maintains elements in increasing or decreasing order. Used for finding next greater/smaller element problems." },
        { type: "callout", title: "Pattern", text: "For each element, pop elements that violate monotonicity, process popped elements, push current element." }
      ]},
      { title: "Stack for Expression Evaluation", content: [
        { type: "p", text: "Stacks are used to evaluate postfix expressions and decode nested structures like strings with brackets." },
        { type: "callout", title: "Pattern", text: "For Reverse Polish Notation: push numbers, on operator pop two operands and push result." }
      ]},
      { title: "Implementing Queue with Stacks", content: [
        { type: "p", text: "A Queue can be implemented using two Stacks: one for input and one for output, achieving amortized O(1) operations." },
        { type: "callout", title: "Pattern", text: "Input Stack for enqueue. When output is empty, transfer all from input to output for dequeue/peek." }
      ]}
    ],
    quiz: [
      { question: "What does LIFO stand for?",
        options: ["Last In First Out", "Linear Input Functional Output", "List In Function Out", "Loop Input For Output"],
        correctAnswer: 0, explanation: "LIFO means Last In First Out - the last element added is the first one removed (Stack behavior)." },
      { question: "What is a Monotonic Stack used for?",
        options: ["Storing sorted data", "Finding next greater/smaller element efficiently", "Implementing queues", "Tree traversal"],
        correctAnswer: 1, explanation: "Monotonic Stack maintains order to efficiently find next greater or smaller elements in O(n) time." },
      { question: "How do you implement a Queue using two Stacks?",
        options: ["Not possible", "Input Stack for enqueue, Output Stack for dequeue, transfer when needed", "Use one Stack only", "Use recursion"],
        correctAnswer: 1, explanation: "One Stack handles enqueue, the other handles dequeue. Transfer elements from input to output when output is empty." }
    ],
    challenge: { title: "Challenge: Stack & Queue",
      description: "Implement Valid Parentheses, Daily Temperatures using Monotonic Stack, and decode a nested string using stacks." },
    cheatSheet: { title: "Stack & Queue Quick Reference", items: [
      { title: "Stack", content: "LIFO, push/pop/top all O(1), used for DFS, parentheses" },
      { title: "Queue", content: "FIFO, enqueue/dequeue all O(1), used for BFS, scheduling" },
      { title: "Monotonic Stack", content: "Maintain order, find next greater/smaller element in O(n)" },
      { title: "Queue via Stacks", content: "Two stacks, amortized O(1) per operation" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux piles et files", content: [
        { type: "p", text: "Les piles et files sont des structures de donnees lineaires qui stockent les elements dans des ordres specifiques." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Operations de pile, operations de file, pile monotone, problemes comme Valid Parentheses." }
      ]},
      { title: "Fondamentaux de la pile", content: [
        { type: "p", text: "Une pile suit LIFO: le dernier element ajoute est le premier retire." },
        { type: "callout", title: "Cas d'utilisation", text: "Parentheses equilibrees, annuler/retablir, pile d'appels, DFS." }
      ]},
      { title: "Fondamentaux de la file", content: [
        { type: "p", text: "Une file suit FIFO: le premier element ajoute est le premier retire." },
        { type: "callout", title: "Cas d'utilisation", text: "BFS, planification des taches, file d'impression." }
      ]},
      { title: "Pile monotone", content: [
        { type: "p", text: "Une pile monotone maintient les elements en ordre croissant ou decroissant." },
        { type: "callout", title: "Pattern", text: "Pour chaque element, depiler ceux qui violent la monotonie, traiter, empiler l'actuel." }
      ]},
      { title: "Pile pour evaluation d'expressions", content: [
        { type: "p", text: "Les piles sont utilisees pour evaluer les expressions postfixees et decoder les structures imbriquees." },
        { type: "callout", title: "Pattern", text: "RPN: empiler les nombres, sur operateur depiler deux operandes et empiler le resultat." }
      ]},
      { title: "Implementer une file avec des piles", content: [
        { type: "p", text: "Une file peut etre implementee avec deux piles: une pour l'entree et une pour la sortie." },
        { type: "callout", title: "Pattern", text: "Pile d'entree pour enqueue. Quand la sortie est vide, transferer de l'entree a la sortie." }
      ]}
    ],
    quiz: [
      { question: "Que signifie LIFO ?",
        options: ["Dernier arrive, premier sorti", "Entree lineaire, sortie fonctionnelle", "Liste en fonction de sortie", "Boucle entree pour sortie"],
        correctAnswer: 0, explanation: "LIFO signifie Dernier arrive, premier sorti - comportement de pile." },
      { question: "A quoi sert une pile monotone ?",
        options: ["Stocker des tries", "Trouver l'element suivant plus grand/petit efficacement", "Implementer des files", "Traverser les arbres"],
        correctAnswer: 1, explanation: "La pile monotone maintient l'ordre pour trouver efficacement l'element suivant plus grand ou plus petit." },
      { question: "Comment implementer une file avec deux piles ?",
        options: ["Pas possible", "Pile d'entree pour enqueue, pile de sortie pour dequeue", "Utiliser une seule pile", "Utiliser la recursion"],
        correctAnswer: 1, explanation: "Une pile pour enqueue, l'autre pour dequeue. Transferer quand la pile de sortie est vide." }
    ],
    challenge: { title: "Defi : Pile et File", description: "Implementez Valid Parentheses, Daily Temperatures avec pile monotone, et decodez une chaine imbriquee." },
    cheatSheet: { title: "Pile et File - Reference rapide", items: [
      { title: "Pile", content: "LIFO, push/pop/top O(1), DFS, parentheses" },
      { title: "File", content: "FIFO, enqueue/dequeue O(1), BFS, planification" },
      { title: "Pile monotone", content: "Maintenir l'ordre, trouver suivant plus grand/petit en O(n)" },
      { title: "File via piles", content: "Deux piles, O(1) amorti par operation" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Stapel & Warteschlangen", content: [
        { type: "p", text: "Stapel und Warteschlangen sind lineare Datenstrukturen. Stapel folgt LIFO, Warteschlangen folgen FIFO." },
        { type: "callout", title: "Was wir lernen werden", text: "Stapel-Operationen, Warteschlangen-Operationen, Monotonic Stack, Probleme wie Valid Parentheses." }
      ]},
      { title: "Stapel-Grundlagen", content: [
        { type: "p", text: "Ein Stapel folgt LIFO: das zuletzt hinzugefuegte Element wird zuerst entfernt." },
        { type: "callout", title: "Anwendungsfalle", text: "Ausgeglichene Klammerungen, Undo/Redo, Aufrufstapel, DFS." }
      ]},
      { title: "Warteschlangen-Grundlagen", content: [
        { type: "p", text: "Eine Warteschlange folgt FIFO: das zuerst hinzugefuegte Element wird zuerst entfernt." },
        { type: "callout", title: "Anwendungsfalle", text: "BFS, Aufgabenplanung, Druckerschlange." }
      ]},
      { title: "Monotonic Stack", content: [
        { type: "p", text: "Ein Monotonic Stack hält Elemente in aufsteigender oder absteigender Reihenfolge." },
        { type: "callout", title: "Muster", text: "Fuer jedes Element: verletzende Elemente entfernen, verarbeiten, aktuelles einfügen." }
      ]},
      { title: "Stapel fuer Ausdrucksauswertung", content: [
        { type: "p", text: "Stapel werden zur Auswertung von Postfix-Ausdrucken und zum Decodieren geschachtelter Strukturen verwendet." },
        { type: "callout", title: "Muster", text: "RPN: Zahlen einfügen, bei Operator zwei Operanden entfernen und Ergebnis einfügen." }
      ]},
      { title: "Warteschlange mit Stapeln implementieren", content: [
        { type: "p", text: "Eine Warteschlange kann mit zwei Stapeln implementiert werden: einen fuer Eingang, einen fuer Ausgang." },
        { type: "callout", title: "Muster", text: "Eingabestapel für enqueue. Wenn Ausgang leer, von Eingang zu Ausgang transferieren." }
      ]}
    ],
    quiz: [
      { question: "Was bedeutet LIFO?",
        options: ["Last In First Out", "Linear Input Functional Output", "List In Function Out", "Loop Input For Output"],
        correctAnswer: 0, explanation: "LIFO bedeutet Last In First Out - das zuletzt hinzugefuegte Element wird zuerst entfernt." },
      { question: "Wofuer wird ein Monotonic Stack verwendet?",
        options: ["Sortierte Daten speichern", "Naechstes groesseres/kleineres Element effizient finden", "Warteschlangen implementieren", "Baumtraversierung"],
        correctAnswer: 1, explanation: "Monotonic Stack hält die Reihenfolge, um naechstes groesseres/kleineres Element effizient zu finden." },
      { question: "Wie implementiert man eine Warteschlange mit zwei Stapeln?",
        options: ["Nicht moeglich", "Eingabestapel fuer enqueue, Ausgabestapel fuer dequeue", "Nur einen Stapel verwenden", "Rekursion verwenden"],
        correctAnswer: 1, explanation: "Ein Stapel fuer enqueue, der andere fuer dequeue. Transferieren wenn Ausgabestapel leer." }
    ],
    challenge: { title: "Herausforderung: Stapel & Warteschlangen",
      description: "Implementieren Sie Valid Parentheses, Daily Temperatures mit Monotonic Stack, und decodieren Sie verschachtelte Strings." },
    cheatSheet: { title: "Stapel & Warteschlangen - Schnellreferenz", items: [
      { title: "Stapel", content: "LIFO, push/pop/top O(1), DFS, Klammerungen" },
      { title: "Warteschlange", content: "FIFO, enqueue/dequeue O(1), BFS, Planung" },
      { title: "Monotonic Stack", content: "Ordnung halten, naechstes groesseres/kleineres in O(n)" },
      { title: "Warteschlange via Stapel", content: "Zwei Stapel, amortisiert O(1) pro Operation" }
    ]}
  }
};
export default translations;
