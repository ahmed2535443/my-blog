const translations = {
  en: {
    sections: [
      { title: "Introduction to Data Structures", content: [
        { type: "p", text: "Data structures are ways to organize and store data efficiently. This lesson covers arrays, linked lists, stacks, queues, trees, and hash tables." },
        { type: "callout", title: "What We Will Learn", text: "Understanding different data structures, their use cases, time complexity, and when to use each one." }
      ]},
      { title: "Arrays and Lists", content: [
        { type: "p", text: "Arrays store elements in contiguous memory locations, allowing fast access by index." },
        { type: "callout", title: "Array Properties", text: "O(1) access by index, O(n) insertion/deletion in middle, O(1) append at end." }
      ]},
      { title: "Linked Lists", content: [
        { type: "p", text: "Linked lists store elements in nodes where each node points to the next." },
        { type: "callout", title: "Linked List Types", text: "Singly linked, doubly linked, circular linked. O(1) insertion/deletion at head." }
      ]},
      { title: "Stacks and Queues", content: [
        { type: "p", text: "Stacks are LIFO (Last In First Out), queues are FIFO (First In First Out)." },
        { type: "callout", title: "Use Cases", text: "Stack: undo operations, function calls. Queue: task scheduling, BFS traversal." }
      ]},
      { title: "Trees", content: [
        { type: "p", text: "Trees are hierarchical data structures with a root node and child nodes." },
        { type: "callout", title: "Tree Types", text: "Binary tree, binary search tree, AVL tree, red-black tree. O(log n) search in balanced trees." }
      ]},
      { title: "Hash Tables", content: [
        { type: "p", text: "Hash tables map keys to values using a hash function for O(1) average access." },
        { type: "callout", title: "Hash Table Properties", text: "O(1) average lookup, O(1) average insert/delete, collision handling needed." }
      ]}
    ],
    quiz: [
      { question: "What does LIFO stand for?",
        options: ["Last In First Out", "Linear Input Functional Output", "List In Function Out", "Loop Input For Output"],
        correctAnswer: 0, explanation: "LIFO means Last In First Out - the last element added is the first one removed." },
      { question: "What is the time complexity of accessing an array element by index?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "Array access by index is O(1) - constant time because elements are stored contiguously." },
      { question: "What is a hash table?",
        options: ["A table made of hash", "A structure mapping keys to values using a hash function", "A type of tree", "A sorted array"],
        correctAnswer: 1, explanation: "Hash tables use a hash function to map keys to values for fast O(1) average access." }
    ],
    challenge: { title: "Challenge: Implement a Data Structure",
      description: "Implement a linked list with insert, delete, and search operations. Compare its performance with arrays." },
    cheatSheet: { title: "Data Structures Quick Reference", items: [
      { title: "Array", content: "O(1) access, O(n) insert/delete middle" },
      { title: "Linked List", content: "O(1) insert/delete at head, O(n) search" },
      { title: "Stack/Queue", content: "LIFO/FIFO operations" },
      { title: "Hash Table", content: "O(1) average lookup, needs collision handling" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux structures de donnees", content: [
        { type: "p", text: "Les structures de donnees sont des moyens d'organiser et de stocker les donnees efficacement." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Comprendre les differentes structures, leurs cas d'utilisation, la complexite temporelle." }
      ]},
      { title: "Tableaux et listes", content: [
        { type: "p", text: "Les tableaux stockent les elements dans des emplacements memoire contigus." },
        { type: "callout", title: "Proprietes", text: "O(1) acces par index, O(n) insertion/suppression au milieu." }
      ]},
      { title: "Listes liees", content: [
        { type: "p", text: "Les listes liees stockent les elements dans des noeuds qui pointent vers le suivant." },
        { type: "callout", title: "Types", text: "Simples, doubles, circulaires. O(1) insertion/suppression en tete." }
      ]},
      { title: "Piles et files", content: [
        { type: "p", text: "Les piles sont LIFO, les files sont FIFO." },
        { type: "callout", title: "Cas d'utilisation", text: "Pile : operations d'annulation. File : planification des taches." }
      ]},
      { title: "Arbres", content: [
        { type: "p", text: "Les arbres sont des structures de donnees hierarchiques avec un noeud racine." },
        { type: "callout", title: "Types d'arbres", text: "Binaire, binaire de recherche, AVL, rouge-noir. O(log n) recherche dans les arbres equilibres." }
      ]},
      { title: "Tables de hachage", content: [
        { type: "p", text: "Les tables de hachage associent des cles a des valeurs avec une fonction de hachage." },
        { type: "callout", title: "Proprietes", text: "O(1) recherche moyenne, O(1) insertion/suppression, gestion des collisions necessaire." }
      ]}
    ],
    quiz: [
      { question: "Que signifie LIFO ?",
        options: ["Dernier arrive, premier sorti", "Entree lineaire, sortie fonctionnelle", "Liste en fonction de sortie", "Boucle entree pour sortie"],
        correctAnswer: 0, explanation: "LIFO signifie Last In First Out - le dernier element ajoute est le premier retire." },
      { question: "Quelle est la complexite d'acces a un element de tableau par index ?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "L'acces par index est O(1) - temps constant car les elements sont stockes de facon contigue." },
      { question: "Qu'est-ce qu'une table de hachage ?",
        options: ["Une table faite de hachage", "Une structure associant cles a valeurs avec une fonction de hachage", "Un type d'arbre", "Un tableau trie"],
        correctAnswer: 1, explanation: "Les tables de hachage utilisent une fonction de hachage pour un acces moyen O(1)." }
    ],
    challenge: { title: "Defi : Implementer une structure",
      description: "Implementez une liste liee avec insert, recherche et suppression." },
    cheatSheet: { title: "Structures de donnees - Reference rapide", items: [
      { title: "Tableau", content: "O(1) acces, O(n) insertion/suppression milieu" },
      { title: "Liste liee", content: "O(1) insertion/suppression en tete, O(n) recherche" },
      { title: "Pile/File", content: "Operations LIFO/FIFO" },
      { title: "Table de hachage", content: "O(1) recherche moyenne, gestion des collisions" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Datenstrukturen", content: [
        { type: "p", text: "Datenstrukturen sind Wege, Daten effizient zu organisieren und zu speichern." },
        { type: "callout", title: "Was wir lernen werden", text: "Verschiedene Datenstrukturen verstehen, ihre Anwendungsfalle, Zeitkomplexitat." }
      ]},
      { title: "Arrays und Listen", content: [
        { type: "p", text: "Arrays speichern Elemente in zusammenhangenden Speicherplatzern." },
        { type: "callout", title: "Eigenschaften", text: "O(1) Zugriff nach Index, O(n) Einfugung/Loeschung in der Mitte." }
      ]},
      { title: "Verkettete Listen", content: [
        { type: "p", text: "Verkettete Listen speichern Elemente in Knoten, die auf den nachsten verweisen." },
        { type: "callout", title: "Typen", text: "Einfach, doppelt, zirkular. O(1) Einfugung/Loeschung am Kopf." }
      ]},
      { title: "Stapel und Warteschlangen", content: [
        { type: "p", text: "Stapel sind LIFO, Warteschlangen sind FIFO." },
        { type: "callout", title: "Anwendungsfalle", text: "Stapel: Undo-Operationen. Warteschlangen: Aufgabenplanung." }
      ]},
      { title: "Baume", content: [
        { type: "p", text: "Baume sind hierarchische Datenstrukturen mit einem Wurzelknoten." },
        { type: "callout", title: "Baumtypen", text: "Binärbaum, Suchbaum, AVL, Rot-Schwarz. O(log n) Suche in balancierten Baumen." }
      ]},
      { title: "Hash-Tabellen", content: [
        { type: "p", text: "Hash-Tabellen ordnen Schlussel Werten mit einer Hash-Funktion zu." },
        { type: "callout", title: "Eigenschaften", text: "O(1) durchschnittlicher Zugriff, Kollisionsbehandlung erforderlich." }
      ]}
    ],
    quiz: [
      { question: "Was bedeutet LIFO?",
        options: ["Last In First Out", "Linear Input Functional Output", "List In Function Out", "Loop Input For Output"],
        correctAnswer: 0, explanation: "LIFO bedeutet Last In First Out - das zuletzt hinzugefugte Element wird zuerst entfernt." },
      { question: "Was ist die Zeitkomplexitat des Array-Zugriffs nach Index?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "Array-Zugriff nach Index ist O(1) - konstante Zeit." },
      { question: "Was ist eine Hash-Tabelle?",
        options: ["Ein Tisch aus Hash", "Eine Struktur die Schlussel mit Werten zuordnet", "Ein Baumtyp", "Ein sortiertes Array"],
        correctAnswer: 1, explanation: "Hash-Tabellen verwenden eine Hash-Funktion fur O(1) durchschnittlichen Zugriff." }
    ],
    challenge: { title: "Herausforderung: Datenstruktur implementieren",
      description: "Implementieren Sie eine verkettete Liste mit Einfugen, Loschen und Suchen." },
    cheatSheet: { title: "Datenstrukturen - Schnellreferenz", items: [
      { title: "Array", content: "O(1) Zugriff, O(n) Einfugung/Loeschung Mitte" },
      { title: "Verkettete Liste", content: "O(1) Einfugung/Loeschung am Kopf, O(n) Suche" },
      { title: "Stapel/Warteschlange", content: "LIFO/FIFO Operationen" },
      { title: "Hash-Tabelle", content: "O(1) durchschnittlicher Zugriff, Kollisionsbehandlung" }
    ]}
  }
};
export default translations;
