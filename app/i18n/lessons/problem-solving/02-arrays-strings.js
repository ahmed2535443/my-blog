const translations = {
  en: {
    sections: [
      { title: "Introduction to Arrays & Strings", content: [
        { type: "p", text: "Arrays and strings are fundamental data structures used in almost every programming problem. Mastering operations on them is key to solving many coding challenges." },
        { type: "callout", title: "What We Will Learn", text: "Array operations, string manipulation, Hash Maps for counting, Two Pointers technique, and Sliding Window pattern." }
      ]},
      { title: "Array Fundamentals", content: [
        { type: "p", text: "Arrays store elements in contiguous memory, allowing O(1) access by index. Common operations include traversal, insertion, deletion, and searching." },
        { type: "callout", title: "Key Operations", text: "Access: O(1), Search: O(n), Insert/Delete at end: O(1), Insert/Delete at middle: O(n), Sort: O(n log n)." }
      ]},
      { title: "String Manipulation", content: [
        { type: "p", text: "Strings are sequences of characters. In JavaScript, strings are immutable, so operations that modify them create new strings." },
        { type: "callout", title: "Useful Methods", text: "split(), join(), substring(), includes(), indexOf(), charCodeAt(), toLowerCase()." }
      ]},
      { title: "Hash Maps for Counting", content: [
        { type: "p", text: "Hash Maps (Objects or Maps in JS) provide O(1) average lookup and are essential for frequency counting and Two Sum pattern problems." },
        { type: "callout", title: "Pattern", text: "Use a Map/Object to count occurrences, then iterate to find matches or validate conditions." }
      ]},
      { title: "Two Pointers Technique", content: [
        { type: "p", text: "Two Pointers uses two indices to traverse a data structure, typically from both ends or one fast and one slow pointer." },
        { type: "callout", title: "When to Use", text: "Sorted arrays, pair-finding problems, palindrome checking, container problems." }
      ]},
      { title: "Sliding Window Pattern", content: [
        { type: "p", text: "Sliding Window maintains a window of elements and slides it across the array/string to find optimal subarrays or substrings." },
        { type: "callout", title: "Pattern", text: "Expand window right, shrink from left when condition is violated, track the best result." }
      ]}
    ],
    quiz: [
      { question: "What is the time complexity of accessing an array element by index?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "Array access by index is O(1) - constant time because elements are stored contiguously in memory." },
      { question: "Which data structure is best for counting character frequencies?",
        options: ["Array", "Stack", "Hash Map", "Queue"],
        correctAnswer: 2, explanation: "Hash Maps provide O(1) average lookup and insertion, making them ideal for frequency counting." },
      { question: "What is the Two Pointers technique?",
        options: ["Using two variables to store a result", "Using two indices to traverse from different positions", "Iterating the array twice", "Using recursion with two base cases"],
        correctAnswer: 1, explanation: "Two Pointers uses two indices to traverse a structure, often from both ends, to solve problems efficiently." }
    ],
    challenge: { title: "Challenge: Arrays & Strings",
      description: "Solve Two Sum using a Hash Map in O(n), then implement a sliding window to find the longest substring without repeating characters." },
    cheatSheet: { title: "Arrays & Strings Quick Reference", items: [
      { title: "Array Access", content: "O(1) by index, O(n) search in unsorted" },
      { title: "Hash Map", content: "O(1) avg lookup/insert, great for counting" },
      { title: "Two Pointers", content: "Sorted arrays, pair problems, palindrome" },
      { title: "Sliding Window", content: "Subarray/substring problems, expand right, shrink left" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux tableaux et chaines", content: [
        { type: "p", text: "Les tableaux et les chaines sont des structures de donnees fondamentales utilisees dans presque tous les problemes de programmation." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Operations sur les tableaux, manipulation des chaines, Hash Maps pour le comptage, Two Pointers, Sliding Window." }
      ]},
      { title: "Fonamentaux des tableaux", content: [
        { type: "p", text: "Les tableaux stockent les elements en memoire contigue, permettant un acces O(1) par index." },
        { type: "callout", title: "Operations cles", text: "Acces: O(1), Recherche: O(n), Insertion/Suppression fin: O(1), milieu: O(n)." }
      ]},
      { title: "Manipulation des chaines", content: [
        { type: "p", text: "Les chaines sont des sequences de caracteres. En JavaScript, les chaines sont immuables." },
        { type: "callout", title: "Methodes utiles", text: "split(), join(), substring(), includes(), indexOf()." }
      ]},
      { title: "Hash Maps pour le comptage", content: [
        { type: "p", text: "Les Hash Maps offrent un acces moyen O(1) et sont essentielles pour le comptage de frequence." },
        { type: "callout", title: "Pattern", text: "Utiliser un Map/Object pour compter les occurrences, puis iterer pour trouver les correspondances." }
      ]},
      { title: "Technique Two Pointers", content: [
        { type: "p", text: "Two Pointers utilise deux indices pour traverser une structure de donnees." },
        { type: "callout", title: "Quand l'utiliser", text: "Tableaux tries, problemes de paires, verification de palindrome." }
      ]},
      { title: "Pattern Sliding Window", content: [
        { type: "p", text: "Sliding Window maintient une fenetre d'elements et la deplace pour trouver les meilleurs sous-tableaux." },
        { type: "callout", title: "Pattern", text: "Etendre la fenetre a droite, retrecir a gauche quand la condition est violee." }
      ]}
    ],
    quiz: [
      { question: "Quelle est la complexite d'acces a un element de tableau par index ?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "L'acces par index est O(1) - temps constant." },
      { question: "Quelle structure est la meilleure pour compter les frequences ?",
        options: ["Tableau", "Pile", "Hash Map", "File"],
        correctAnswer: 2, explanation: "Les Hash Maps offrent un acces et une insertion moyens O(1)." },
      { question: "Qu'est-ce que la technique Two Pointers ?",
        options: ["Utiliser deux variables", "Utiliser deux indices pour traverser", "Parcourir deux fois", "Utiliser la recursion"],
        correctAnswer: 1, explanation: "Two Pointers utilise deux indices pour traverser une structure efficacement." }
    ],
    challenge: { title: "Defi : Tableaux et chaines",
      description: "Resolvez Two Sum avec un Hash Map en O(n), puis implementez une fenetre glissante pour le plus long sous-texte sans caracteres repetes." },
    cheatSheet: { title: "Tableaux et chaines - Reference rapide", items: [
      { title: "Acces tableau", content: "O(1) par index, O(n) recherche non triee" },
      { title: "Hash Map", content: "O(1) acces/insertion moyen, ideal pour comptage" },
      { title: "Two Pointers", content: "Tableaux tries, paires, palindrome" },
      { title: "Sliding Window", content: "Sous-tableaux, etendre droite, retrecir gauche" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Arrays & Strings", content: [
        { type: "p", text: "Arrays und Strings sind grundlegende Datenstrukturen, die in fast jedem Programmierproblem verwendet werden." },
        { type: "callout", title: "Was wir lernen werden", text: "Array-Operationen, String-Manipulation, Hash Maps zum Zahlen, Two Pointers, Sliding Window." }
      ]},
      { title: "Array-Grundlagen", content: [
        { type: "p", text: "Arrays speichern Elemente im Zusammenhangspeicher und ermoeglichen O(1)-Zugriff nach Index." },
        { type: "callout", title: "Schlusseloperationen", text: "Zugriff: O(1), Suche: O(n), Einfugen/Entfernen Ende: O(1), Mitte: O(n)." }
      ]},
      { title: "String-Manipulation", content: [
        { type: "p", text: "Strings sind Zeichenfolgen. In JavaScript sind Strings unveranderlich." },
        { type: "callout", title: "Nutzliche Methoden", text: "split(), join(), substring(), includes(), indexOf()." }
      ]},
      { title: "Hash Maps zum Zahlen", content: [
        { type: "p", text: "Hash Maps bieten durchschnittlichen O(1)-Zugriff und sind wesentlich fur Haufigkeitszahlung." },
        { type: "callout", title: "Muster", text: "Map/Object zum Zahlen von Vorkommen verwenden, dann iterieren." }
      ]},
      { title: "Two Pointers Technik", content: [
        { type: "p", text: "Two Pointers verwendet zwei Indizes zum Durchlaufen einer Datenstruktur." },
        { type: "callout", title: "Wann verwenden", text: "Sortierte Arrays, Paarprobleme, Palindrom-Prufung." }
      ]},
      { title: "Sliding Window Muster", content: [
        { type: "p", text: "Sliding Window hält ein Elementfenster und schiebt es über das Array." },
        { type: "callout", title: "Muster", text: "Fenster nach rechts erweitern, bei Verletzung links verkleinern." }
      ]}
    ],
    quiz: [
      { question: "Was ist die Zeitkomplexitat des Array-Zugriffs nach Index?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "Array-Zugriff nach Index ist O(1) - konstante Zeit." },
      { question: "Welche Struktur ist am besten zum Zahlen von Haufigkeiten?",
        options: ["Array", "Stapel", "Hash Map", "Warteschlange"],
        correctAnswer: 2, explanation: "Hash Maps bieten O(1) durchschnittlichen Zugriff und Einfugung." },
      { question: "Was ist die Two Pointers Technik?",
        options: ["Zwei Variablen verwenden", "Zwei Indizes zum Durchlaufen verwenden", "Array zweimal durchlaufen", "Rekursion verwenden"],
        correctAnswer: 1, explanation: "Two Pointers verwendet zwei Indizes, um eine Struktur effizient zu durchlaufen." }
    ],
    challenge: { title: "Herausforderung: Arrays & Strings",
      description: "Losen Sie Two Sum mit einem Hash Map in O(n), dann implementieren Sie ein Sliding Window fur den langsten Substring ohne wiederholte Zeichen." },
    cheatSheet: { title: "Arrays & Strings - Schnellreferenz", items: [
      { title: "Array-Zugriff", content: "O(1) nach Index, O(n) Suche unsortiert" },
      { title: "Hash Map", content: "O(1) durchschnittlich, gut zum Zahlen" },
      { title: "Two Pointers", content: "Sortierte Arrays, Paare, Palindrom" },
      { title: "Sliding Window", content: "Unterarrays, rechts erweitern, links verkleinern" }
    ]}
  }
};
export default translations;
