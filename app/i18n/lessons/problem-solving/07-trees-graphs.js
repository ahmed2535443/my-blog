const translations = {
  ar: {
    sections: [
      { title: "مقدمة في الأشجار والرسوم البيانية", content: [
        { type: "p", text: "الأشجار والرسوم البيانية هي هياكل بيانات شبكية وهرمية تُستخدم لتمثيل العلاقات. وهي ضرورية لحل الكثير من مشاكل العالم الحقيقي والخوارزميات." },
        { type: "callout", title: "ما سنتعلمه", text: "تجذور الأشجار (DFS، BFS)، أشجار البحث الثنائية، تجذور الرسوم البيانية، ومشاكل الأشجار/الرسوم البيانية الشائعة." }
      ]},
      { title: "أساسيات الأشجار", content: [
        { type: "p", text: "الشجرة هي بنية هرمية لها عقدة جذر وعقد أبناء. لكل عقدة في الشجرة الثنائية ما يصل إلى ابنتين." },
        { type: "callout", title: "المصطلحات الرئيسية", text: "الجذر، الأب، الابن، الورقة، الارتفاع، العمق. الشجرة الثنائية: ما يصل إلى 2 ابن لكل عقدة." }
      ]},
      { title: "تجذور DFS", content: [
        { type: "p", text: "يبحث DFS بشكل عميق قدر الإمكان على كل فرع قبل العودة. يمكن تنفيذه باستخدام التكرار الذاتي أو المكدس." },
        { type: "callout", title: "أوامر التجذور", text: "التقدمي: الجذر→اليسار→اليمين. الترددي: اليسار→الجذر→اليمين. التراجعي: اليسار→اليمين→الجذر." }
      ]},
      { title: "تجذور BFS", content: [
        { type: "p", text: "يزور BFS جميع العقد في العمق الحالي قبل الانتقال إلى الأعمق. يستخدم هيكل بيانات القائمة." },
        { type: "callout", title: "النمط", text: "أضف الجذر إلى القائمة. بينما القائمة ليست فارغة: أزل العقدة، عالجها، أضف الأبناء." }
      ]},
      { title: "شجرة البحث الثنائية (BST)", content: [
        { type: "p", text: "في BST، الابن الأيسر < الأب < الابن الأيمن. يعطي التجذور الترددي ترتيبًا مرتبًا." },
        { type: "callout", title: "خاصية BST", text: "قيم الشجرة الفرعية اليسرى < قيمة العقدة < قيم الشجرة الفرعية اليمنى. يتيح بحث O(log n)." }
      ]},
      { title: "أساسيات الرسوم البيانية", content: [
        { type: "p", text: "تتكون الرسم البياني من رؤوس (عقد) وحواف (اتصالات). يمكن أن تكون الرسوم البيانية موجهة/غير موجهة، موزونة/غير موزونة." },
        { type: "callout", title: "التمثيلات", text: "قائمة الجوار (الأكثر شيوعًا)، مصفوفة الجوار. استخدم DFS/BFS للتجذور." }
      ]}
    ],
    quiz: [
      { question: "ما الفرق بين DFS و BFS؟",
        options: ["لا يوجد فرق", "يستخدم DFS المكدس/التكرار الذاتي، يستخدم BFS القائمة", "DFS أسرع", "BFS يستخدم أقل ذاكرة"],
        correctAnswer: 1, explanation: "يبحث DFS بشكل عميق باستخدام المكدس/التكرار الذاتي، يبحث BFS بشكل واسع باستخدام القائمة." },
      { question: "ما هو التجذور الترددي لـ BST؟",
        options: ["الجذر، اليسار، اليمين", "اليسار، الجذر، اليمين", "اليسار، اليمين، الجذر", "اليمين، الجذر، اليسار"],
        correctAnswer: 1, explanation: "يعطي التجذور الترددي (اليسار→الجذر→اليمين) لـ BST قيمًا بترتيب تصاعدي." },
      { question: "متى تستخدم BFS بدلاً من DFS؟",
        options: ["للأشجار العميقة", "لإيجاد أقصر مسار في رسم بياني غير موزون", "للفرز الأنيوغرافي", "لاكتشاف الدورات"],
        correctAnswer: 1, explanation: "يضمن BFS أقصر مسار في رسم بياني غير موزون لأنه يبحث مستوى بمستوى." }
    ],
    challenge: { title: "تحدي: الأشجار والرسوم البيانية",
      description: "نفّذ تجذور DFS و BFS، حل Maximum Depth of Binary Tree، و Number of Islands باستخدام DFS." },
    cheatSheet: { title: "مرجع الأشجار والرسوم البيانية السريع", items: [
      { title: "DFS", content: "المكدس/التكرار الذاتي، استكشاف عميق، التقدمي/الترددي/التراجعي" },
      { title: "BFS", content: "القائمة، مستوى بمستوى، أقصر مسار في رسم بياني غير موزون" },
      { title: "BST", content: "اليسار < الجذر < اليمين، الترددي يعطي الترتيب" },
      { title: "الرسم البياني", content: "قائمة الجوار، DFS/BFS للتجذور، الفرز الأنيوغرافي للترتيب" }
    ]}
  },
  en: {
    sections: [
      { title: "Introduction to Trees & Graphs", content: [
        { type: "p", text: "Trees and Graphs are hierarchical and network data structures used to represent relationships. They are essential for solving many real-world and algorithmic problems." },
        { type: "callout", title: "What We Will Learn", text: "Tree traversals (DFS, BFS), Binary Search Trees, Graph traversals, and common tree/graph problems." }
      ]},
      { title: "Tree Fundamentals", content: [
        { type: "p", text: "A tree is a hierarchical structure with a root node and child nodes. Each node has at most two children in a binary tree." },
        { type: "callout", title: "Key Terms", text: "Root, parent, child, leaf, height, depth. Binary tree: at most 2 children per node." }
      ]},
      { title: "DFS Traversal", content: [
        { type: "p", text: "Depth-First Search explores as far as possible along each branch before backtracking. Can be implemented with recursion or a stack." },
        { type: "callout", title: "Traversal Orders", text: "Pre-order: Root→Left→Right. In-order: Left→Root→Right. Post-order: Left→Right→Root." }
      ]},
      { title: "BFS Traversal", content: [
        { type: "p", text: "Breadth-First Search visits all nodes at the present depth before moving deeper. Uses a queue data structure." },
        { type: "callout", title: "Pattern", text: "Add root to queue. While queue not empty: dequeue node, process it, enqueue children." }
      ]},
      { title: "Binary Search Tree (BST)", content: [
        { type: "p", text: "In a BST, left child < parent < right child. In-order traversal gives sorted order." },
        { type: "callout", title: "BST Property", text: "Left subtree values < node value < right subtree values. Enables O(log n) search." }
      ]},
      { title: "Graph Fundamentals", content: [
        { type: "p", text: "A graph consists of vertices (nodes) and edges (connections). Graphs can be directed/undirected, weighted/unweighted." },
        { type: "callout", title: "Representations", text: "Adjacency list (most common), adjacency matrix. Use DFS/BFS for traversal." }
      ]}
    ],
    quiz: [
      { question: "What is the difference between DFS and BFS?",
        options: ["No difference", "DFS uses stack/recursion, BFS uses queue", "DFS is faster", "BFS uses less memory"],
        correctAnswer: 1, explanation: "DFS explores depth-first using stack/recursion, BFS explores breadth-first using a queue." },
      { question: "What is the in-order traversal of a BST?",
        options: ["Root, Left, Right", "Left, Root, Right", "Left, Right, Root", "Right, Root, Left"],
        correctAnswer: 1, explanation: "In-order traversal (Left→Root→Right) of a BST gives values in sorted ascending order." },
      { question: "When should you use BFS over DFS?",
        options: ["For deep trees", "For finding shortest path in unweighted graph", "For topological sort", "For cycle detection"],
        correctAnswer: 1, explanation: "BFS guarantees the shortest path in an unweighted graph because it explores level by level." }
    ],
    challenge: { title: "Challenge: Trees & Graphs",
      description: "Implement DFS and BFS traversals, solve Maximum Depth of Binary Tree, and Number of Islands using DFS." },
    cheatSheet: { title: "Trees & Graphs Quick Reference", items: [
      { title: "DFS", content: "Stack/recursion, deep exploration, Pre/In/Post order" },
      { title: "BFS", content: "Queue, level-by-level, shortest path in unweighted graph" },
      { title: "BST", content: "Left < Root < Right, in-order gives sorted" },
      { title: "Graph", content: "Adjacency list, DFS/BFS for traversal, topological sort for ordering" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux arbres et graphes", content: [
        { type: "p", text: "Les arbres et graphes sont des structures hierarchiques et reseau pour representer des relations." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Traversales d'arbres (DFS, BFS), arbres binaires de recherche, traversales de graphes." }
      ]},
      { title: "Fondamentaux des arbres", content: [
        { type: "p", text: "Un arbre est une structure hierarchique avec un noeud racine et des noeuds enfants." },
        { type: "callout", title: "Termes cles", text: "Racine, parent, enfant, feuille, hauteur, profondeur." }
      ]},
      { title: "Traversale DFS", content: [
        { type: "p", text: "DFS explore aussi loin que possible le long de chaque branche avant de revenir en arriere." },
        { type: "callout", title: "Ordres", text: "Pre-ordre: Racine→Gauche→Droite. In-ordre: Gauche→Racine→Droite. Post-ordre: Gauche→Droite→Racine." }
      ]},
      { title: "Traversale BFS", content: [
        { type: "p", text: "BFS visite tous les noeuds de la profondeur actuelle avant de passer plus profond." },
        { type: "callout", title: "Pattern", text: "Ajouter racine a la file. Tant que file non vide: retirer, traiter, ajouter enfants." }
      ]},
      { title: "Arbre binaire de recherche (BST)", content: [
        { type: "p", text: "Dans un BST, enfant gauche < parent < enfant droit. La traversale in-ordre donne l'ordre trie." },
        { type: "callout", title: "Propriete BST", text: "Valeurs sous-arbre gauche < valeur noeud < valeurs sous-arbre droit." }
      ]},
      { title: "Fondamentaux des graphes", content: [
        { type: "p", text: "Un graphe est compose de sommets et d'aretes. Les graphes peuvent etre orientes/non orientes." },
        { type: "callout", title: "Representations", text: "Liste d'adjacence (plus courante), matrice d'adjacence." }
      ]}
    ],
    quiz: [
      { question: "Quelle est la difference entre DFS et BFS ?",
        options: ["Pas de difference", "DFS utilise pile/recursion, BFS utilise file", "DFS est plus rapide", "BFS utilise moins de memoire"],
        correctAnswer: 1, explanation: "DFS explore en profondeur avec pile/recursion, BFS explore en largeur avec file." },
      { question: "Quelle est la traversale in-ordre d'un BST ?",
        options: ["Racine, Gauche, Droite", "Gauche, Racine, Droite", "Gauche, Droite, Racine", "Droite, Racine, Gauche"],
        correctAnswer: 1, explanation: "La traversale in-ordre d'un BST donne les valeurs en ordre trie croissant." },
      { question: "Quand utiliser BFS plutot que DFS ?",
        options: ["Pour les arbres profonds", "Pour le chemin le plus court dans un graphe non pondere", "Pour le tri topologique", "Pour la detection de cycles"],
        correctAnswer: 1, explanation: "BFS garantit le chemin le plus court dans un graphe non pondere." }
    ],
    challenge: { title: "Defi : Arbres et Graphes",
      description: "Implementez les traversales DFS et BFS, resolvez Maximum Depth of Binary Tree et Number of Islands." },
    cheatSheet: { title: "Arbres et Graphes - Reference rapide", items: [
      { title: "DFS", content: "Pile/recursion, exploration en profondeur" },
      { title: "BFS", content: "File, niveau par niveau, chemin le plus court" },
      { title: "BST", content: "Gauche < Racine < Droite, in-ordre trie" },
      { title: "Graphe", content: "Liste d'adjacence, DFS/BFS, tri topologique" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Baume & Graphen", content: [
        { type: "p", text: "Baume und Graphen sind hierarchische und Netzwerk-Datenstrukturen zur Darstellung von Beziehungen." },
        { type: "callout", title: "Was wir lernen werden", text: "Baumtraversierungen (DFS, BFS), Suchbaume, Graphtraversierungen." }
      ]},
      { title: "Baum-Grundlagen", content: [
        { type: "p", text: "Ein Baum ist eine hierarchische Struktur mit einem Wurzelknoten und Kindknoten." },
        { type: "callout", title: "Schlusselbegriffe", text: "Wurzel, Elter, Kind, Blatt, Hoehe, Tiefe." }
      ]},
      { title: "DFS-Traversierung", content: [
        { type: "p", text: "DFS erkundet so weit wie moeglich entlang jedes Astes vor dem Zurueckkehren." },
        { type: "callout", title: "Reihenfolgen", text: "Pre-order: Wurzel→Links→Rechts. In-order: Links→Wurzel→Rechts. Post-order: Links→Rechts→Wurzel." }
      ]},
      { title: "BFS-Traversierung", content: [
        { type: "p", text: "BFS besucht alle Knoten der aktuellen Tiefe, bevor tiefer gegangen wird." },
        { type: "callout", title: "Muster", text: "Wurzel in Warteschlange. While nicht leer: entfernen, verarbeiten, Kinder hinzufuegen." }
      ]},
      { title: "Binärbaum-Suche (BST)", content: [
        { type: "p", text: "In einem BST: linkes Kind < Elter < rechtes Kind. In-order gibt sortierte Reihenfolge." },
        { type: "callout", title: "BST-Eigenschaft", text: "Linker Teilbaum < Knotenwert < rechter Teilbaum." }
      ]},
      { title: "Graph-Grundlagen", content: [
        { type: "p", text: "Ein Graph besteht aus Knoten und Kanten. Kann gerichtet/ungerichtet sein." },
        { type: "callout", title: "Darstellungen", text: "Adjazenzliste (haeufigster), Adjazenzmatrix." }
      ]}
    ],
    quiz: [
      { question: "Was ist der Unterschied zwischen DFS und BFS?",
        options: ["Kein Unterschied", "DFS verwendet Stapel/Rekursion, BFS verwendet Warteschlange", "DFS ist schneller", "BFS braucht weniger Speicher"],
        correctAnswer: 1, explanation: "DFS erkundet in Tiefe mit Stapel/Rekursion, BFS in Breite mit Warteschlange." },
      { question: "Was ist die In-order-Traversierung eines BST?",
        options: ["Wurzel, Links, Rechts", "Links, Wurzel, Rechts", "Links, Rechts, Wurzel", "Rechts, Wurzel, Links"],
        correctAnswer: 1, explanation: "In-order (Links→Wurzel→Rechts) gibt die Werte in sortierter Reihenfolge." },
      { question: "Wann sollte man BFS statt DFS verwenden?",
        options: ["Fur tiefe Baume", "Fur kuerzesten Pfad in ungewichteten Graphen", "Fur topologische Sortierung", "Fur Zykluserkennung"],
        correctAnswer: 1, explanation: "BFS garantiert den kuerzesten Pfad in einem ungewichteten Graphen." }
    ],
    challenge: { title: "Herausforderung: Baume & Graphen",
      description: "Implementieren Sie DFS und BFS Traversierungen, losen Sie Maximum Depth und Number of Islands." },
    cheatSheet: { title: "Baume & Graphen - Schnellreferenz", items: [
      { title: "DFS", content: "Stapel/Rekursion, Tiefenerkundung" },
      { title: "BFS", content: "Warteschlange, Ebene für Ebene" },
      { title: "BST", content: "Links < Wurzel < Rechts, In-order sortiert" },
      { title: "Graph", content: "Adjazenzliste, DFS/BFS, topologische Sortierung" }
    ]}
  }
};
export default translations;
