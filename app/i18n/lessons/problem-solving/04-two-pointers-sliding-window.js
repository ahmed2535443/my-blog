const translations = {
  en: {
    sections: [
      { title: "Introduction to Two Pointers & Sliding Window", content: [
        { type: "p", text: "Two Pointers and Sliding Window are essential techniques for solving array and string problems efficiently, reducing time complexity from O(n²) to O(n)." },
        { type: "callout", title: "What We Will Learn", text: "Two Pointers on sorted arrays, Sliding Window for subarray/substring problems, and when to apply each technique." }
      ]},
      { title: "Two Pointers Technique", content: [
        { type: "p", text: "Two Pointers uses two indices moving towards each other or in the same direction to find pairs or solve problems in linear time." },
        { type: "callout", title: "Patterns", text: "Opposite ends: palindrome, container problems. Same direction: remove duplicates, merge sorted arrays." }
      ]},
      { title: "Sliding Window Basics", content: [
        { type: "p", text: "Sliding Window maintains a window of elements and slides it across the array, expanding and shrinking based on conditions." },
        { type: "callout", title: "Fixed vs Variable Window", text: "Fixed: window size is constant (e.g., k). Variable: window grows/shrinks based on a condition." }
      ]},
      { title: "Variable Sliding Window", content: [
        { type: "p", text: "Expand the window by moving the right pointer, shrink from the left when the condition is violated, and track the optimal result." },
        { type: "callout", title: "Pattern", text: "for right in range: add[right]. while condition_violated: remove[left], left++. update result." }
      ]},
      { title: "Fixed Sliding Window", content: [
        { type: "p", text: "Use a fixed-size window by adding the new element and removing the oldest element as the window moves." },
        { type: "callout", title: "Pattern", text: "for right in range: add[right]. if right >= k: remove[right - k]. update result." }
      ]},
      { title: "When to Use Each Technique", content: [
        { type: "p", text: "Two Pointers: sorted arrays, pair finding, palindrome. Sliding Window: subarray/substring optimization, consecutive elements." },
        { type: "callout", title: "Decision Guide", text: "Need pair from sorted array? Two Pointers. Need best/worst subarray? Sliding Window." }
      ]}
    ],
    quiz: [
      { question: "When should you use Two Pointers?",
        options: ["For unsorted arrays", "For sorted arrays and pair-finding problems", "For linked lists only", "For tree traversal"],
        correctAnswer: 1, explanation: "Two Pointers is most effective on sorted arrays for finding pairs, palindromes, and container problems." },
      { question: "What is the key difference between Two Pointers and Sliding Window?",
        options: ["No difference", "Two Pointers uses two indices, Sliding Window maintains a subarray window", "Two Pointers is faster", "Sliding Window is for trees"],
        correctAnswer: 1, explanation: "Two Pointers uses two individual indices, while Sliding Window maintains a contiguous subarray/substring." },
      { question: "How do you handle a violated condition in variable Sliding Window?",
        options: ["Restart from beginning", "Shrink window from the left until condition is met", "Move right pointer back", "Return immediately"],
        correctAnswer: 1, explanation: "When the condition is violated, shrink the window from the left until it's valid again." }
    ],
    challenge: { title: "Challenge: Two Pointers & Sliding Window",
      description: "Solve Container With Most Water using Two Pointers, then find the longest substring without repeating characters using Sliding Window." },
    cheatSheet: { title: "Two Pointers & Sliding Window Quick Reference", items: [
      { title: "Two Pointers", content: "Sorted arrays, pair finding, O(n) time" },
      { title: "Sliding Window", content: "Subarray/substring problems, expand right, shrink left" },
      { title: "Variable Window", content: "Grow until condition violated, then shrink" },
      { title: "Fixed Window", content: "Constant size, add new element, remove old" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a Two Pointers et Sliding Window", content: [
        { type: "p", text: "Two Pointers et Sliding Window sont des techniques essentielles pour resoudre efficacement les problemes de tableaux et chaines." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Two Pointers sur tableaux tries, Sliding Window pour sous-tableaux, quand appliquer chaque technique." }
      ]},
      { title: "Technique Two Pointers", content: [
        { type: "p", text: "Two Pointers utilise deux indices pour trouver des paires ou resoudre des problemes en temps lineaire." },
        { type: "callout", title: "Patterns", text: "Extremites opposees: palindrome, container. Meme direction: supprimer doublons." }
      ]},
      { title: "Bases de Sliding Window", content: [
        { type: "p", text: "Sliding Window maintient une fenetre d'elements et la deplace a travers le tableau." },
        { type: "callout", title: "Fenetre fixe vs variable", text: "Fixe: taille constante. Variable: la fenetre grandit/se retrecit selon une condition." }
      ]},
      { title: "Sliding Window variable", content: [
        { type: "p", text: "Etendez la fenetre vers la droite, retrecissez a gauche quand la condition est violee." },
        { type: "callout", title: "Pattern", text: "for right: add[right]. while viole: remove[left], left++." }
      ]},
      { title: "Sliding Window fixe", content: [
        { type: "p", text: "Utilisez une fenetre de taille fixe en ajoutant le nouvel element et retirant l'ancien." },
        { type: "callout", title: "Pattern", text: "for right: add[right]. if right >= k: remove[right-k]." }
      ]},
      { title: "Quand utiliser chaque technique", content: [
        { type: "p", text: "Two Pointers: tableaux tries, paires. Sliding Window: sous-tableaux, elements consecutifs." },
        { type: "callout", title: "Guide", text: "Paire dans tableau trie? Two Pointers. Meilleur sous-tableau? Sliding Window." }
      ]}
    ],
    quiz: [
      { question: "Quand utiliser Two Pointers ?",
        options: ["Pour tableaux non tries", "Pour tableaux tries et problemes de paires", "Pour listes liees uniquement", "Pour traversee d'arbres"],
        correctAnswer: 1, explanation: "Two Pointers est plus efficace sur les tableaux tries pour trouver des paires et des palindromes." },
      { question: "Quelle est la difference cle entre Two Pointers et Sliding Window ?",
        options: ["Pas de difference", "Two Pointers utilise deux indices, Sliding Window maintient une fenetre", "Two Pointers est plus rapide", "Sliding Window est pour les arbres"],
        correctAnswer: 1, explanation: "Two Pointers utilise deux indices individuels, Sliding Window maintient un sous-tableau contigu." },
      { question: "Comment gerer une condition violee dans Sliding Window variable ?",
        options: ["Recommencer au debut", "Retrecir la fenetre depuis la gauche", "Reculer le pointeur droit", "Retourner immediatement"],
        correctAnswer: 1, explanation: "Quand la condition est violee, retrecissez la fenetre depuis la gauche jusqu'a ce qu'elle soit valide." }
    ],
    challenge: { title: "Defi : Two Pointers et Sliding Window",
      description: "Resolvez Container With Most Water avec Two Pointers, puis trouvez le plus long sous-texte sans caracteres repetes avec Sliding Window." },
    cheatSheet: { title: "Two Pointers et Sliding Window - Reference rapide", items: [
      { title: "Two Pointers", content: "Tableaux tries, paires, temps O(n)" },
      { title: "Sliding Window", content: "Sous-tableaux, etendre droite, retrecir gauche" },
      { title: "Variable", content: "Grandir jusqu'a violation, puis retrecir" },
      { title: "Fixe", content: "Taille constante, ajouter nouveau, retirer ancien" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Two Pointers & Sliding Window", content: [
        { type: "p", text: "Two Pointers und Sliding Window sind wesentliche Techniken fur die effiziente Losung von Array- und String-Problemen." },
        { type: "callout", title: "Was wir lernen werden", text: "Two Pointers auf sortierten Arrays, Sliding Window fur Unterarray-Probleme, wann jede Technik angewendet wird." }
      ]},
      { title: "Two Pointers Technik", content: [
        { type: "p", text: "Two Pointers verwendet zwei Indizes, um Paare zu finden oder Probleme in linearer Zeit zu losen." },
        { type: "callout", title: "Muster", text: "Gegenuberliegende Enden: Palindrom, Container. Gleiche Richtung: Duplikate entfernen." }
      ]},
      { title: "Sliding Window Grundlagen", content: [
        { type: "p", text: "Sliding Window hält ein Fenster von Elementen und schiebt es über das Array." },
        { type: "callout", title: "Fest vs Variabel", text: "Fest: konstante Groesse. Variabel: Fenster wachst/schrumpft basierend auf Bedingung." }
      ]},
      { title: "Variables Sliding Window", content: [
        { type: "p", text: "Fenster nach rechts erweitern, bei Verletzung links verkleinern und optimales Ergebnis verfolgen." },
        { type: "callout", title: "Muster", text: "for right: add[right]. while verletzt: remove[left], left++." }
      ]},
      { title: "Festes Sliding Window", content: [
        { type: "p", text: "Fenster fester Groesse durch Hinzufuegen des neuen und Entfernen des alten Elements." },
        { type: "callout", title: "Muster", text: "for right: add[right]. if right >= k: remove[right-k]." }
      ]},
      { title: "Wann jede Technik verwenden", content: [
        { type: "p", text: "Two Pointers: sortierte Arrays, Paare. Sliding Window: Unterarrays, aufeinanderfolgende Elemente." },
        { type: "callout", title: "Leitfaden", text: "Paar in sortiertem Array? Two Pointers. Bestes Unterarray? Sliding Window." }
      ]}
    ],
    quiz: [
      { question: "Wann sollte man Two Pointers verwenden?",
        options: ["Fur unsortierte Arrays", "Fur sortierte Arrays und Paarprobleme", "Nur fur verkettete Listen", "Fur Baumtraversierung"],
        correctAnswer: 1, explanation: "Two Pointers ist am effektivsten auf sortierten Arrays zum Finden von Paaren und Palindromen." },
      { question: "Was ist der Hauptunterschied zwischen Two Pointers und Sliding Window?",
        options: ["Kein Unterschied", "Two Pointers verwendet zwei Indizes, Sliding Window ein Fenster", "Two Pointers ist schneller", "Sliding Window ist für Baeume"],
        correctAnswer: 1, explanation: "Two Pointers verwendet zwei einzelne Indizes, Sliding Window hält ein zusammenhaengendes Unterarray." },
      { question: "Wie behandeln Sie eine verletzte Bedingung im variablen Sliding Window?",
        options: ["Neu anfangen", "Fenster von links verkleinern bis Bedingung erfullt", "Rechten Zeiger zuruecksetzen", "Sofort zurueckgeben"],
        correctAnswer: 1, explanation: "Bei Verletzung der Bedingung das Fenster von links verkleinern, bis es wieder gueltig ist." }
    ],
    challenge: { title: "Herausforderung: Two Pointers & Sliding Window",
      description: "Losen Sie Container With Most Water mit Two Pointers, dann finden Sie den laengsten Substring ohne wiederholte Zeichen mit Sliding Window." },
    cheatSheet: { title: "Two Pointers & Sliding Window - Schnellreferenz", items: [
      { title: "Two Pointers", content: "Sortierte Arrays, Paare, O(n) Zeit" },
      { title: "Sliding Window", content: "Unterarray-Probleme, rechts erweitern, links verkleinern" },
      { title: "Variabel", content: "Wachsen bis Verletzung, dann verkleinern" },
      { title: "Fest", content: "Feste Groesse, neuen hinzufuegen, alten entfernen" }
    ]}
  }
};
export default translations;
