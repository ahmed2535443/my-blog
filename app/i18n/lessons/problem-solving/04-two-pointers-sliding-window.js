const translations = {
  ar: {
    sections: [
      { title: "مقدمة في Two Pointers و Sliding Window", content: [
        { type: "p", text: "Two Pointers و Sliding Window هما تقنيتان ضروريةان لحل مشاكل المصفوفات والنصوص بكفاءة، مما يقلل تعقيد الوقت من O(n²) إلى O(n)." },
        { type: "callout", title: "ما سنتعلمه", text: "Two Pointers على المصفوفات المرتبة، Sliding Window لمشاكل المجموعات الفرعية/النصوص الفرعية، ومتى تطبق كل تقنية." }
      ]},
      { title: "تقنية Two Pointers", content: [
        { type: "p", text: "يستخدم Two Pointers فهرسين يتحركان نحو بعضهما البعض أو في نفس الاتجاه لإيجاد الأزواج أو حل المشكلات في وقت خطي." },
        { type: "callout", title: "الأنماط", text: "الطرفان المتقابلان: التناظر، مشاكل الحاوية. نفس الاتجاه: إزالة التكرارات، دمج المصفوفات المرتبة." }
      ]},
      { title: "أساسيات Sliding Window", content: [
        { type: "p", text: "يحافظ Sliding Window على نافذة من العناصر ويتحرك عبر المصفوفة، يوسّع ويقلّص بناءً على الشروط." },
        { type: "callout", title: "النافذة الثابتة مقابل المتغيرة", text: "الثابتة: حجم النافذة ثابت (مثل: k). المتغيرة: النافذة تنمو/تقلص بناءً على شرط." }
      ]},
      { title: "Sliding Window المتغيرة", content: [
        { type: "p", text: "وسّع النافذة عن طريق تحريك المؤشر الأيمن، قلّص من اليسار عند انتهاك الشرط، وتابع النتيجة المثالية." },
        { type: "callout", title: "النمط", text: "for right in range: add[right]. while condition_violated: remove[left]، left++. update result." }
      ]},
      { title: "Sliding Window الثابتة", content: [
        { type: "p", text: "استخدم نافذة بحجم ثابت عن طريق إضافة العنصر الجديد وإزالة العنصر القديم مع تحرك النافذة." },
        { type: "callout", title: "النمط", text: "for right in range: add[right]. if right >= k: remove[right - k]. update result." }
      ]},
      { title: "متى تستخدم كل تقنية", content: [
        { type: "p", text: "Two Pointers: المصفوفات المرتبة، إيجاد الأزواج، التناظر. Sliding Window: تحسين المجموعات الفرعية/النصوص الفرعية، العناصر المتتالية." },
        { type: "callout", title: "دليل القرار", text: "تحتاج زوجًا من مصفوفة مرتبة؟ Two Pointers. تحتاج أفضل/أسوأ مجموعة فرعية؟ Sliding Window." }
      ]}
    ],
    quiz: [
      { question: "متى تستخدم Two Pointers؟",
        options: ["للمصفوفات غير المرتبة", "للمصفوفات المرتبة ومشاكل إيجاد الأزواج", "للقوائم المرتبطة فقط", "لتجذور الأشجار"],
        correctAnswer: 1, explanation: "يكون Two Pointers الأكثر فعالية على المصفوفات المرتبة لإيجاد الأزواج والتناظر ومشاكل الحاويات." },
      { question: "ما هو الفرق الرئيسي بين Two Pointers و Sliding Window؟",
        options: ["لا يوجد فرق", "يستخدم Two Pointers فهرسين، يحافظ Sliding Window على نافذة مجموعة فرعية", "Two Pointers أسرع", "Sliding Window للأشجار"],
        correctAnswer: 1, explanation: "يستخدم Two Pointers فهرسين فرديين، بينما يحافظ Sliding Window على مجموعة فرعية/نص فرعي متصل." },
      { question: "كيف تعامل شرطًا منتهكًا في Sliding Window المتغيرة؟",
        options: ["أعد البداية من الأول", "قلّص النافذة من اليسار حتى يتحقق الشرط", "حرّك المؤشر الأيمن إلى الخلف", "عُد فورًا"],
        correctAnswer: 1, explanation: "عند انتهاك الشرط، قلّص النافذة من اليسار حتى تصبح صالحة مرة أخرى." }
    ],
    challenge: { title: "تحدي: Two Pointers و Sliding Window",
      description: "حل Container With Most Water باستخدام Two Pointers، ثم أوجد أطول نص فرعي بدون أحرف مكررة باستخدام Sliding Window." },
    cheatSheet: { title: "مرجع Two Pointers و Sliding Window السريع", items: [
      { title: "Two Pointers", content: "المصفوفات المرتبة، إيجاد الأزواج، وقت O(n)" },
      { title: "Sliding Window", content: "مشاكل المجموعات الفرعية/النصوص الفرعية، توسيع لليمين، قلص لليسار" },
      { title: "النافذة المتغيرة", content: "تنمو حتى ينتهي الشرط، ثم تقلص" },
      { title: "النافذة الثابتة", content: "حجم ثابت، أضف عنصرًا جديدًا، أزل القديم" }
    ]}
  },
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
