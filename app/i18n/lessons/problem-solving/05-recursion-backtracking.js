const translations = {
  en: {
    sections: [
      { title: "Introduction to Recursion & Backtracking", content: [
        { type: "p", text: "Recursion is a technique where a function calls itself. Backtracking uses recursion to explore all possible solutions and undo choices when they lead to dead ends." },
        { type: "callout", title: "What We Will Learn", text: "Recursion fundamentals, base cases, Memoization, Backtracking pattern, and classic problems like N-Queens and Sudoku." }
      ]},
      { title: "How Recursion Works", content: [
        { type: "p", text: "A recursive function has two parts: a base case that stops recursion, and a recursive case that calls itself with a smaller input." },
        { type: "callout", title: "Key Rules", text: "1. Always have a base case. 2. Progress toward the base case. 3. Trust that the recursive call works." }
      ]},
      { title: "Memoization", content: [
        { type: "p", text: "Memoization stores computed results to avoid redundant calculations, reducing exponential time to polynomial time." },
        { type: "callout", title: "Pattern", text: "Use a Map/cache to store results. Before computing, check if already cached. Store result after computing." }
      ]},
      { title: "Backtracking Pattern", content: [
        { type: "p", text: "Backtracking explores all possible choices, backtracking when a choice leads to an invalid state. It's used for combinatorial problems." },
        { type: "callout", title: "Pattern", text: "Choose → Explore → Undo (backtrack) → Try next choice. Common in permutation, combination, and constraint problems." }
      ]},
      { title: "Subsets and Permutations", content: [
        { type: "p", text: "Generate all subsets or permutations by making choices at each step and backtracking to explore alternatives." },
        { type: "callout", title: "Approach", text: "For subsets: include/exclude each element. For permutations: pick each available element and recurse on remaining." }
      ]},
      { title: "N-Queens and Constraint Problems", content: [
        { type: "p", text: "Place queens row by row, checking if each position is valid. Backtrack when no valid position exists in a row." },
        { type: "callout", title: "Validation", text: "Check column, diagonal (upper-left), and anti-diagonal (upper-right) for conflicts." }
      ]}
    ],
    quiz: [
      { question: "What are the two essential parts of a recursive function?",
        options: ["Loop and condition", "Base case and recursive case", "Input and output", "Function and variable"],
        correctAnswer: 1, explanation: "Every recursive function must have a base case (to stop) and a recursive case (to continue with smaller input)." },
      { question: "What is Memoization?",
        options: ["A sorting technique", "Storing computed results to avoid redundant calculations", "A type of loop", "Memory management"],
        correctAnswer: 1, explanation: "Memoization caches results of expensive function calls to avoid recomputing them." },
      { question: "When do you use Backtracking?",
        options: ["For simple loops", "For combinatorial problems with multiple choices", "For array sorting", "For database queries"],
        correctAnswer: 1, explanation: "Backtracking is used for problems requiring exploration of all possible configurations, like permutations and constraint satisfaction." }
    ],
    challenge: { title: "Challenge: Recursion & Backtracking",
      description: "Implement Fibonacci with Memoization, solve the Subsets problem using Backtracking, then solve N-Queens." },
    cheatSheet: { title: "Recursion & Backtracking Quick Reference", items: [
      { title: "Base Case", content: "Must stop recursion - always define first!" },
      { title: "Recursive Case", content: "Call yourself with smaller input toward base case" },
      { title: "Memoization", content: "Cache results to avoid redundant O(2^n) calls" },
      { title: "Backtracking", content: "Choose → Explore → Undo → Try next" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a la recursion et au backtracking", content: [
        { type: "p", text: "La recursion est une technique ou une fonction s'appelle elle-meme. Le backtracking utilise la recursion pour explorer toutes les solutions possibles." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Fondamentaux de la recursion, cas de base, Memoization, pattern Backtracking, problemes classiques." }
      ]},
      { title: "Comment fonctionne la recursion", content: [
        { type: "p", text: "Une fonction recursive a deux parties: un cas de base et un cas recursif." },
        { type: "callout", title: "Regles cles", text: "1. Toujours avoir un cas de base. 2. Progresser vers le cas de base. 3. Faire confiance a l'appel recursif." }
      ]},
      { title: "Memoization", content: [
        { type: "p", text: "La Memoization stocke les resultats calcules pour eviter les calculs redondants." },
        { type: "callout", title: "Pattern", text: "Utiliser un cache/Map. Avant de calculer, verifier si deja en cache." }
      ]},
      { title: "Pattern Backtracking", content: [
        { type: "p", text: "Le backtracking explore tous les choix possibles et revient en arriere quand un choix mene a une impasse." },
        { type: "callout", title: "Pattern", text: "Choisir → Explorer → Annuler → Essayer le choix suivant." }
      ]},
      { title: "Sous-ensembles et permutations", content: [
        { type: "p", text: "Generer tous les sous-ensembles ou permutations en faisant des choix a chaque etape." },
        { type: "callout", title: "Approche", text: "Sous-ensembles: inclure/exclure. Permutations: choisir chaque element disponible." }
      ]},
      { title: "N-Queens et problemes de contraintes", content: [
        { type: "p", text: "Placer les reines ligne par ligne en verifiant la validite de chaque position." },
        { type: "callout", title: "Validation", text: "Verifier colonne, diagonale et anti-diagonale pour les conflits." }
      ]}
    ],
    quiz: [
      { question: "Quelles sont les deux parties essentielles d'une fonction recursive ?",
        options: ["Boucle et condition", "Cas de base et cas recursif", "Entree et sortie", "Fonction et variable"],
        correctAnswer: 1, explanation: "Toute fonction recursive doit avoir un cas de base et un cas recursif." },
      { question: "Qu'est-ce que la Memoization ?",
        options: ["Une technique de tri", "Stocker les resultats pour eviter les calculs redondants", "Un type de boucle", "Gestion de la memoire"],
        correctAnswer: 1, explanation: "La Memoization met en cache les resultats pour eviter de les recalculer." },
      { question: "Quand utilise-t-on le backtracking ?",
        options: ["Pour des boucles simples", "Pour des problemes combinatoires", "Pour le tri de tableaux", "Pour les requetes de base de donnees"],
        correctAnswer: 1, explanation: "Le backtracking est utilise pour les problemes nécessitant l'exploration de configurations possibles." }
    ],
    challenge: { title: "Defi : Recursion et Backtracking",
      description: "Implementez Fibonacci avec Memoization, resolvez Subsets avec Backtracking, puis resolvez N-Queens." },
    cheatSheet: { title: "Recursion et Backtracking - Reference rapide", items: [
      { title: "Cas de base", content: "Doit arreter la recursion - toujours definir en premier !" },
      { title: "Cas recursif", content: "S'appeler avec une entree plus petite" },
      { title: "Memoization", content: "Mettre en cache pour eviter les appels redondants" },
      { title: "Backtracking", content: "Choisir → Explorer → Annuler → Suivant" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Rekursion & Backtracking", content: [
        { type: "p", text: "Rekursion ist eine Technik, bei der eine Funktion sich selbst aufruft. Backtracking nutzt Rekursion, um alle moglichen Losungen zu erkunden." },
        { type: "callout", title: "Was wir lernen werden", text: "Rekursionsgrundlagen, Basisfalle, Memoization, Backtracking-Muster, klassische Probleme wie N-Queens." }
      ]},
      { title: "Wie Rekursion funktioniert", content: [
        { type: "p", text: "Eine rekursive Funktion hat zwei Teile: einen Basisfall und einen rekursiven Fall." },
        { type: "callout", title: "Schlusselregeln", text: "1. Immer einen Basisfall haben. 2. Zum Basisfall fortschreiten. 3. Dem rekursiven Aufruf vertrauen." }
      ]},
      { title: "Memoization", content: [
        { type: "p", text: "Memoization speichert berechnete Ergebnisse, um redundante Berechnungen zu vermeiden." },
        { type: "callout", title: "Muster", text: "Cache/Map verwenden. Vor der Berechnung prufen ob bereits gecacht." }
      ]},
      { title: "Backtracking Muster", content: [
        { type: "p", text: "Backtracking erkundet alle moglichen Wahlmoglichkeiten und kehrt zuruck, wenn eine Wahl zu einer Sackgasse fuehrt." },
        { type: "callout", title: "Muster", text: "Wahlen → Erkunden → Rueckgängig machen → Nachste Wahl." }
      ]},
      { title: "Teilmengen und Permutationen", content: [
        { type: "p", text: "Alle Teilmengen oder Permutationen erzeugen, indem zu jedem Schritt Wahlmoglichkeiten getroffen werden." },
        { type: "callout", title: "Ansatz", text: "Teilmengen: einschliessen/ausschliessen. Permutationen: jedes verfuegbare Element waehlen." }
      ]},
      { title: "N-Queens und Constraint-Probleme", content: [
        { type: "p", text: "Damen Reihe für Reihe platzieren und jede Position auf Gueltigkeit prufen." },
        { type: "callout", title: "Validierung", text: "Spalte, Diagonale und Anti-Diagonale auf Konflikte prufen." }
      ]}
    ],
    quiz: [
      { question: "Was sind die zwei wesentlichen Teile einer rekursiven Funktion?",
        options: ["Schleife und Bedingung", "Basisfall und rekursiver Fall", "Eingabe und Ausgabe", "Funktion und Variable"],
        correctAnswer: 1, explanation: "Jede rekursive Funktion muss einen Basisfall und einen rekursiven Fall haben." },
      { question: "Was ist Memoization?",
        options: ["Eine Sortiertechnik", "Berechnete Ergebnisse speichern um redundante Berechnungen zu vermeiden", "Ein Schleifentyp", "Speicherverwaltung"],
        correctAnswer: 1, explanation: "Memoization puffert Ergebnisse kostspieliger Funktionsaufrufe." },
      { question: "Wann verwendet man Backtracking?",
        options: ["Fur einfache Schleifen", "Fur kombinatorische Probleme", "Fur Array-Sortierung", "Fur Datenbankabfragen"],
        correctAnswer: 1, explanation: "Backtracking wird fur Probleme verwendet, die die Erkundung aller moglichen Konfigurationen erfordern." }
    ],
    challenge: { title: "Herausforderung: Rekursion & Backtracking",
      description: "Implementieren Sie Fibonacci mit Memoization, losen Sie Subsets mit Backtracking, dann losen Sie N-Queens." },
    cheatSheet: { title: "Rekursion & Backtracking - Schnellreferenz", items: [
      { title: "Basisfall", content: "Muss Rekursion stoppen - immer zuerst definieren!" },
      { title: "Rekursiver Fall", content: "Mit kleinerer Eingabe zum Basisfall aufrufen" },
      { title: "Memoization", content: "Ergebnisse puffern um redundante Aufrufe zu vermeiden" },
      { title: "Backtracking", content: "Wahlen → Erkunden → Rueckgängig → Nachstes" }
    ]}
  }
};
export default translations;
