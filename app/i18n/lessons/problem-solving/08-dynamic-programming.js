const translations = {
  en: {
    sections: [
      { title: "Introduction to Dynamic Programming", content: [
        { type: "p", text: "Dynamic Programming (DP) solves complex problems by breaking them into overlapping subproblems and storing results to avoid redundant computation." },
        { type: "callout", title: "What We Will Learn", text: "DP fundamentals, state definition, transition equations, memoization vs tabulation, and classic DP problems." }
      ]},
      { title: "What is Dynamic Programming?", content: [
        { type: "p", text: "DP is an optimization technique for problems with overlapping subproblems and optimal substructure." },
        { type: "callout", title: "Two Conditions", text: "1. Overlapping subproblems (same subproblems solved repeatedly). 2. Optimal substructure (optimal solution contains optimal sub-solutions)." }
      ]},
      { title: "Memoization (Top-Down)", content: [
        { type: "p", text: "Memoization uses recursion with a cache to store computed results, avoiding redundant calculations." },
        { type: "callout", title: "Pattern", text: "Check cache before computing. If cached, return. Otherwise compute, store, and return." }
      ]},
      { title: "Tabulation (Bottom-Up)", content: [
        { type: "p", text: "Tabulation fills a DP table iteratively from the base cases up to the final answer." },
        { type: "callout", title: "Pattern", text: "Initialize base cases. For each state, compute from previously computed states. Return dp[target]." }
      ]},
      { title: "1D DP Problems", content: [
        { type: "p", text: "Problems like Climbing Stairs, House Robber, and Coin Change use a one-dimensional DP table." },
        { type: "callout", title: "Examples", text: "Climbing Stairs: dp[i] = dp[i-1] + dp[i-2]. House Robber: dp[i] = max(dp[i-1], dp[i-2] + nums[i])." }
      ]},
      { title: "2D DP Problems", content: [
        { type: "p", text: "Problems like Edit Distance and Regular Expression Matching use a two-dimensional DP table." },
        { type: "callout", title: "Examples", text: "Edit Distance: dp[i][j] based on character match/mismatch. LCS: dp[i][j] from previous states." }
      ]}
    ],
    quiz: [
      { question: "What are the two conditions for Dynamic Programming?",
        options: ["Sorted data and unique elements", "Overlapping subproblems and optimal substructure", "Recursion and iteration", "Arrays and strings"],
        correctAnswer: 1, explanation: "DP requires overlapping subproblems (repeated solving) and optimal substructure (optimal contains optimal sub-solutions)." },
      { question: "What is the difference between Memoization and Tabulation?",
        options: ["No difference", "Memoization is top-down (recursive), Tabulation is bottom-up (iterative)", "Memoization is faster", "Tabulation uses more memory"],
        correctAnswer: 1, explanation: "Memoization uses recursion with caching (top-down), Tabulation fills a table iteratively (bottom-up)." },
      { question: "What is the time complexity of Climbing Stairs?",
        options: ["O(2^n)", "O(n)", "O(n²)", "O(1)"],
        correctAnswer: 1, explanation: "With DP, Climbing Stairs is O(n) because each state is computed exactly once." }
    ],
    challenge: { title: "Challenge: Dynamic Programming",
      description: "Solve Climbing Stairs, Coin Change, and Longest Increasing Subsequence using both memoization and tabulation." },
    cheatSheet: { title: "Dynamic Programming Quick Reference", items: [
      { title: "State", content: "What does dp[i] or dp[i][j] represent?" },
      { title: "Transition", content: "How to compute dp[i] from previous states?" },
      { title: "Base Case", content: "What are the initial values of dp?" },
      { title: "Memoization", content: "Cache results recursively. Tabulation: fill table iteratively." }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a la programmation dynamique", content: [
        { type: "p", text: "La programmation dynamique (DP) resout des problemes complexes en les decomposant en sous-problemes chevauchants." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Fondamentaux de la DP, definition de l'etat, equations de transition, memoization vs tabulation." }
      ]},
      { title: "Qu'est-ce que la programmation dynamique ?",
        content: [
        { type: "p", text: "La DP est une technique d'optimisation pour les problemes avec sous-problemes chevauchants et structure de sous-optimale." },
        { type: "callout", title: "Deux conditions", text: "1. Sous-problemes chevauchants. 2. Structure de sous-optimale optimale." }
      ]},
      { title: "Memoization (Haut vers bas)", content: [
        { type: "p", text: "La memoization utilise la recursion avec un cache pour stocker les resultats calcules." },
        { type: "callout", title: "Pattern", text: "Verifier le cache avant de calculer. Si en cache, retourner. Sinon calculer, stocker." }
      ]},
      { title: "Tabulation (Bas vers haut)", content: [
        { type: "p", text: "La tabulation remplit une table DP iterativement depuis les cas de base." },
        { type: "callout", title: "Pattern", text: "Initialiser les cas de base. Pour chaque etat, calculer depuis les etats precedents." }
      ]},
      { title: "Problemes DP 1D", content: [
        { type: "p", text: "Problemes comme Climbing Stairs, House Robber et Coin Change utilisent une table DP 1D." },
        { type: "callout", title: "Exemples", text: "Climbing Stairs: dp[i] = dp[i-1] + dp[i-2]. House Robber: dp[i] = max(dp[i-1], dp[i-2] + nums[i])." }
      ]},
      { title: "Problemes DP 2D", content: [
        { type: "p", text: "Problemes comme Edit Distance et Regular Expression Matching utilisent une table DP 2D." },
        { type: "callout", title: "Exemples", text: "Edit Distance: dp[i][j] basee sur concordance/disharmonie des caracteres." }
      ]}
    ],
    quiz: [
      { question: "Quelles sont les deux conditions de la DP ?",
        options: ["Donnees triees et elements uniques", "Sous-problemes chevauchants et structure de sous-optimale", "Recursion et iteration", "Tableaux et chaines"],
        correctAnswer: 1, explanation: "La DP necessite des sous-problemes chevauchants et une structure de sous-optimale optimale." },
      { question: "Quelle est la difference entre Memoization et Tabulation ?",
        options: ["Pas de difference", "Memoization est haut-vers-bas (recursif), Tabulation est bas-vers-haut (iteratif)", "Memoization est plus rapide", "Tabulation utilise plus de memoire"],
        correctAnswer: 1, explanation: "Memoization utilise la recursion avec cache (haut-vers-bas), Tabulation remplit une table iterativement (bas-vers-haut)." },
      { question: "Quelle est la complexite de Climbing Stairs ?",
        options: ["O(2^n)", "O(n)", "O(n²)", "O(1)"],
        correctAnswer: 1, explanation: "Avec la DP, Climbing Stairs est O(n) car chaque etat est calcule une seule fois." }
    ],
    challenge: { title: "Defi : Programmation dynamique",
      description: "Resolvez Climbing Stairs, Coin Change et Longest Increasing Subsequence avec memoization et tabulation." },
    cheatSheet: { title: "Programmation dynamique - Reference rapide", items: [
      { title: "Etat", content: "Que represente dp[i] ou dp[i][j] ?" },
      { title: "Transition", content: "Comment calculer dp[i] depuis les etats precedents ?" },
      { title: "Cas de base", content: "Quelles sont les valeurs initiales de dp ?" },
      { title: "Memoization", content: "Cache recursif. Tabulation: remplir la table iterativement." }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in dynamische Programmierung", content: [
        { type: "p", text: "Dynamische Programmierung (DP) lost komplexe Probleme, indem sie sie in ueberlappende Teilprobleme zerlegt." },
        { type: "callout", title: "Was wir lernen werden", text: "DP-Grundlagen, Zustandsdefinition, Uebergangsgleichungen, Memoization vs Tabulation." }
      ]},
      { title: "Was ist dynamische Programmierung?",
      content: [
        { type: "p", text: "DP ist eine Optimizationstechnik fuer Probleme mit ueberlappenden Teilproblemen und optimaler Substruktur." },
        { type: "callout", title: "Zwei Bedingungen", text: "1. Ueberlappende Teilprobleme. 2. Optimale Substruktur." }
      ]},
      { title: "Memoization (Top-Down)", content: [
        { type: "p", text: "Memoization verwendet Rekursion mit Cache zur Speicherung berechneter Ergebnisse." },
        { type: "callout", title: "Muster", text: "Vor der Berechnung Cache pruefen. Wenn gecacht, zurueckgeben. Sonst berechnen und speichern." }
      ]},
      { title: "Tabulation (Bottom-Up)", content: [
        { type: "p", text: "Tabulation fuellt eine DP-Tabelle iterativ von den Basisfaellen bis zur Antwort." },
        { type: "callout", title: "Muster", text: "Basisfaelle initialisieren. Fuer jeden Zustand aus vorherigen berechnen." }
      ]},
      { title: "1D DP Probleme", content: [
        { type: "p", text: "Probleme wie Climbing Stairs, House Robber und Coin Change verwenden eine 1D DP-Tabelle." },
        { type: "callout", title: "Beispiele", text: "Climbing Stairs: dp[i] = dp[i-1] + dp[i-2]. House Robber: dp[i] = max(dp[i-1], dp[i-2] + nums[i])." }
      ]},
      { title: "2D DP Probleme", content: [
        { type: "p", text: "Probleme wie Edit Distance und Regex Matching verwenden eine 2D DP-Tabelle." },
        { type: "callout", title: "Beispiele", text: "Edit Distance: dp[i][j] basierend auf Zeichenuebereinstimmung." }
      ]}
    ],
    quiz: [
      { question: "Was sind die zwei Bedingungen fuer DP?",
        options: ["Sortierte Daten und eindeutige Elemente", "Ueberlappende Teilprobleme und optimale Substruktur", "Rekursion und Iteration", "Arrays und Strings"],
        correctAnswer: 1, explanation: "DP erfordert ueberlappende Teilprobleme und optimale Substruktur." },
      { question: "Was ist der Unterschied zwischen Memoization und Tabulation?",
        options: ["Kein Unterschied", "Memoization ist Top-Down (rekursiv), Tabulation ist Bottom-Up (iterativ)", "Memoization ist schneller", "Tabulation braucht mehr Speicher"],
        correctAnswer: 1, explanation: "Memoization verwendet Rekursion mit Cache (Top-Down), Tabulation fuellt iterativ eine Tabelle (Bottom-Up)." },
      { question: "Was ist die Zeitkomplexitat von Climbing Stairs?",
        options: ["O(2^n)", "O(n)", "O(n²)", "O(1)"],
        correctAnswer: 1, explanation: "Mit DP ist Climbing Stairs O(n), da jeder Zustand genau einmal berechnet wird." }
    ],
    challenge: { title: "Herausforderung: Dynamische Programmierung",
      description: "Losen Sie Climbing Stairs, Coin Change und Longest Increasing Subsequence mit Memoization und Tabulation." },
    cheatSheet: { title: "Dynamische Programmierung - Schnellreferenz", items: [
      { title: "Zustand", content: "Was repraesentiert dp[i] oder dp[i][j]?" },
      { title: "Uebergang", content: "Wie dp[i] aus vorherigen Zustanden berechnen?" },
      { title: "Basisfall", content: "Was sind die Anfangswerte von dp?" },
      { title: "Memoization", content: "Rekursiver Cache. Tabulation: Tabelle iterativ fuellen." }
    ]}
  }
};
export default translations;
