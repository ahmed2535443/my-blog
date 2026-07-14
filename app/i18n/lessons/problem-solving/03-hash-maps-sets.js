const translations = {
  ar: {
    sections: [
      { title: "مقدمة في Hash Maps والمجموعات", content: [
        { type: "p", text: "Hash Maps والمجموعات هي هياكل بيانات قوية للبحث السريع والإزالة المزدوجة وعد التكرارات. توفر O(1) في المتوسط للإدراج والحذف والبحث." },
        { type: "callout", title: "ما سنتعلمه", text: "عمليات Hash Map، عمليات Set، أنماط عد التكرارات، نمط Two Sum، ومشاكل المقابلات الشائعة." }
      ]},
      { title: "أساسيات Hash Map", content: [
        { type: "p", text: "يربط Hash Map المفاتيح بالقيم باستخدام دالة التجزئة. في JavaScript، استخدم Objects العادية أو فئة Map للأزواج المفتاح-القيمة." },
        { type: "callout", title: "Map مقابل Object", text: "Map: أي نوع مفتاح، يحافظ على ترتيب الإدراج، له .size. Object: مفاتيح نصية فقط، بنية أبسط." }
      ]},
      { title: "أساسيات Set", content: [
        { type: "p", text: "تخزن Set القيم الفريدة فقط. توفر بحثًا متوسطًا O(1 وهي مثالية للإزالة المزدوجة واختبار العضوية." },
        { type: "callout", title: "عمليات Set", text: "add()، has()، delete()، size. تزيل المجموعات التكرارات تلقائيًا من المجموعات." }
      ]},
      { title: "نمط عد التكرارات", content: [
        { type: "p", text: "عد تكرارات كل عنصر باستخدام Hash Map. يُستخدم هذا النمط في مشاكل التناظر وتحليل تكرارات الأحرف وأكثر." },
        { type: "callout", title: "النمط", text: "iterate وزيادة العداد: count[item] = (count[item] || 0) + 1. ثم iterate الخريطة لإيجاد النتائج." }
      ]},
      { title: "نمط Two Sum", content: [
        { type: "p", text: "لكل عنصر، تحقق مما إذا كان مكمله (target - الحالي) موجودًا في Hash Map. هذا يتجنب نهج القوة الغاشمة O(n²)." },
        { type: "callout", title: "النمط", text: "for num in array: complement = target - num. إذا كان المكمل موجودًا في الخريطة: أعد الزوج. وإلا: احفظ العدد في الخريطة." }
      ]},
      { title: "المجموع التراكمي مع Hash Map", content: [
        { type: "p", text: "ادمج المجموعات التراكمية مع Hash Maps لإيجاد مجموعات فرعية بمجموع معين في وقت O(n)." },
        { type: "callout", title: "النمط", text: "تتبع المجموع التراكمي. إذا وُجد (currentSum - k) في الخريطة، فهناك مجموعة فرعية بمجموع k." }
      ]}
    ],
    quiz: [
      { question: "ما هو تعقيد الوقت المتوسط لعمليات Hash Map؟",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "إدراج Hash Map وحذفه وبحثه O(1) في المتوسط بسبب توزيع دالة التجزئة." },
      { question: "ما الفرق بين Map و Set؟",
        options: ["لا يوجد فرق", "Map يخزن أزواج مفتاح-قيمة، Set يخزن قيمًا فريدة فقط", "Map أسرع", "Set يستخدم更多 ذاكرة"],
        correctAnswer: 1, explanation: "يحتفظ Map بأزواج مفتاح-قيمة للربط، بينما تحتفظ Set بالقيم الفريدة فقط لاختبار العضوية." },
      { question: "كيف تتحقق مما إذا كانت قيمة موجودة في Set؟",
        options: ["set.get(value)", "set.has(value)", "set.contains(value)", "set.find(value)"],
        correctAnswer: 1, explanation: "تحقق دالة has() مما إذا كانت قيمة موجودة في Set وترجع true أو false." }
    ],
    challenge: { title: "تحدي: Hash Maps والمجموعات",
      description: "نفّذ Two Sum في O(n) باستخدام Hash Map، ثم حل مشكلة أطول تسلسل متتالي باستخدام Set." },
    cheatSheet: { title: "مرجع Hash Maps والمجموعات السريع", items: [
      { title: "Hash Map", content: "O(1) بحث/إدراج/حذف متوسط، أزواج مفتاح-قيمة" },
      { title: "Set", content: "O(1) بحث متوسط، قيم فريدة فقط، إزالة مزدوجة" },
      { title: "Two Sum", content: "تحقق من المكمل في الخريطة أثناء الـ iterate" },
      { title: "المجموع التراكمي + Map", content: "ابحث عن مجموعات فرعية بمجموع مستهدف في O(n)" }
    ]}
  },
  en: {
    sections: [
      { title: "Introduction to Hash Maps & Sets", content: [
        { type: "p", text: "Hash Maps and Sets are powerful data structures for fast lookups, deduplication, and frequency counting. They provide O(1) average time for insert, delete, and lookup operations." },
        { type: "callout", title: "What We Will Learn", text: "Hash Map operations, Set operations, frequency counting patterns, Two Sum pattern, and common interview problems." }
      ]},
      { title: "Hash Map Fundamentals", content: [
        { type: "p", text: "A Hash Map maps keys to values using a hash function. In JavaScript, use plain Objects or the Map class for key-value pairs." },
        { type: "callout", title: "Map vs Object", text: "Map: any key type, maintains insertion order, has .size. Object: string keys only, simpler syntax." }
      ]},
      { title: "Set Fundamentals", content: [
        { type: "p", text: "A Set stores unique values only. It provides O(1) average lookup and is perfect for deduplication and membership testing." },
        { type: "callout", title: "Set Operations", text: "add(), has(), delete(), size. Sets automatically remove duplicates from collections." }
      ]},
      { title: "Frequency Counting Pattern", content: [
        { type: "p", text: "Count occurrences of each element using a Hash Map. This pattern is used in anagram problems, character frequency analysis, and more." },
        { type: "callout", title: "Pattern", text: "Iterate and increment count: count[item] = (count[item] || 0) + 1. Then iterate the map to find results." }
      ]},
      { title: "Two Sum Pattern", content: [
        { type: "p", text: "For each element, check if its complement (target - current) exists in the Hash Map. This avoids the O(n²) brute force approach." },
        { type: "callout", title: "Pattern", text: "For num in array: complement = target - num. If complement in map: return pair. Else: store num in map." }
      ]},
      { title: "Prefix Sum with Hash Map", content: [
        { type: "p", text: "Combine prefix sums with Hash Maps to find subarrays with a given sum in O(n) time." },
        { type: "callout", title: "Pattern", text: "Track cumulative sum. If (currentSum - k) exists in map, a subarray with sum k exists." }
      ]}
    ],
    quiz: [
      { question: "What is the average time complexity of Hash Map operations?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "Hash Map insert, delete, and lookup are O(1) on average due to hash function distribution." },
      { question: "What is the difference between Map and Set?",
        options: ["No difference", "Map stores key-value pairs, Set stores unique values only", "Map is faster", "Set uses more memory"],
        correctAnswer: 1, explanation: "Map stores key-value pairs for mapping, while Set stores only unique values for membership testing." },
      { question: "How do you check if a value exists in a Set?",
        options: ["set.get(value)", "set.has(value)", "set.contains(value)", "set.find(value)"],
        correctAnswer: 1, explanation: "The has() method checks if a value exists in the Set and returns true or false." }
    ],
    challenge: { title: "Challenge: Hash Maps & Sets",
      description: "Implement Two Sum in O(n) using a Hash Map, then solve the Longest Consecutive Sequence problem using a Set." },
    cheatSheet: { title: "Hash Maps & Sets Quick Reference", items: [
      { title: "Hash Map", content: "O(1) avg lookup/insert/delete, key-value pairs" },
      { title: "Set", content: "O(1) avg lookup, unique values only, deduplication" },
      { title: "Two Sum Pattern", content: "Check complement in map while iterating" },
      { title: "Prefix Sum + Map", content: "Find subarrays with target sum in O(n)" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux Hash Maps et Sets", content: [
        { type: "p", text: "Les Hash Maps et Sets sont des structures de donnees puissantes pour les recherches rapides, la dedoublonnage et le comptage de frequence." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Operations Hash Map, operations Set, comptage de frequence, pattern Two Sum, problemes d'entretien courants." }
      ]},
      { title: "Fondamentaux Hash Map", content: [
        { type: "p", text: "Un Hash Map associe des cles a des valeurs avec une fonction de hachage." },
        { type: "callout", title: "Map vs Object", text: "Map: tout type de cle, ordre d'insertion. Object: cles string uniquement." }
      ]},
      { title: "Fondamentaux Set", content: [
        { type: "p", text: "Un Set stocke uniquement des valeurs uniques avec O(1) de recherche moyenne." },
        { type: "callout", title: "Operations Set", text: "add(), has(), delete(), size. Supprime automatiquement les doublons." }
      ]},
      { title: "Pattern de comptage de frequence", content: [
        { type: "p", text: "Comptez les occurrences de chaque element avec un Hash Map." },
        { type: "callout", title: "Pattern", text: "Incrementer le compteur: count[item] = (count[item] || 0) + 1." }
      ]},
      { title: "Pattern Two Sum", content: [
        { type: "p", text: "Pour chaque element, verifiez si son complement existe dans le Hash Map." },
        { type: "callout", title: "Pattern", text: "complement = target - num. Si complement dans map: retourner la paire." }
      ]},
      { title: "Prefix Sum avec Hash Map", content: [
        { type: "p", text: "Combinez les sommes prefix avec les Hash Maps pour trouver des sous-tableaux avec une somme donnee." },
        { type: "callout", title: "Pattern", text: "Suivre la somme cumulee. Si (currentSum - k) existe, un sous-tableau avec somme k existe." }
      ]}
    ],
    quiz: [
      { question: "Quelle est la complexite moyenne des operations Hash Map ?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "Les operations Hash Map sont O(1) en moyenne grace a la fonction de hachage." },
      { question: "Quelle est la difference entre Map et Set ?",
        options: ["Pas de difference", "Map stocke des paires cle-valeur, Set stocke des valeurs uniques", "Map est plus rapide", "Set utilise plus de memoire"],
        correctAnswer: 1, explanation: "Map stocke des paires cle-valeur, tandis que Set stocke uniquement des valeurs uniques." },
      { question: "Comment verifiez-vous si une valeur existe dans un Set ?",
        options: ["set.get(value)", "set.has(value)", "set.contains(value)", "set.find(value)"],
        correctAnswer: 1, explanation: "La methode has() verifie si une valeur existe dans le Set." }
    ],
    challenge: { title: "Defi : Hash Maps et Sets",
      description: "Implementez Two Sum en O(n) avec un Hash Map, puis resolvez Longest Consecutive Sequence avec un Set." },
    cheatSheet: { title: "Hash Maps et Sets - Reference rapide", items: [
      { title: "Hash Map", content: "O(1) acces/insertion/suppression moyen" },
      { title: "Set", content: "O(1) recherche moyenne, valeurs uniques" },
      { title: "Two Sum", content: "Verifier le complement dans la map" },
      { title: "Prefix Sum + Map", content: "Trouver sous-tableaux avec somme cible" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Hash Maps & Sets", content: [
        { type: "p", text: "Hash Maps und Sets sind leistungsstarke Datenstrukturen fur schnelle Suche, Deduplizierung und Haufigkeitszahlung." },
        { type: "callout", title: "Was wir lernen werden", text: "Hash Map Operationen, Set Operationen, Haufigkeitsmuster, Two Sum Muster, Vorstellungsgesprache." }
      ]},
      { title: "Hash Map Grundlagen", content: [
        { type: "p", text: "Eine Hash Map ordnet Schlussel Werten mit einer Hash-Funktion zu." },
        { type: "callout", title: "Map vs Object", text: "Map: beliebiger Schlusselfeltyp, Einfugereihenfolge. Object: nur String-Schlussel." }
      ]},
      { title: "Set Grundlagen", content: [
        { type: "p", text: "Ein Set speichert nur eindeutige Werte mit O(1) durchschnittlicher Suche." },
        { type: "callout", title: "Set Operationen", text: "add(), has(), delete(), size. Entfernt automatisch Duplikate." }
      ]},
      { title: "Haufigkeitszahlungs-Muster", content: [
        { type: "p", text: "Zahlen Sie das Vorkommen jedes Elements mit einem Hash Map." },
        { type: "callout", title: "Muster", text: "Zahler erhoehen: count[item] = (count[item] || 0) + 1." }
      ]},
      { title: "Two Sum Muster", content: [
        { type: "p", text: "Fur jedes Element prufen, ob sein Komplement im Hash Map existiert." },
        { type: "callout", title: "Muster", text: "complement = target - num. Wenn complement in map: Paar zuruckgeben." }
      ]},
      { title: "Prefix Sum mit Hash Map", content: [
        { type: "p", text: "Kombinieren Sie Prefix-Summen mit Hash Maps, um Unterarrays mit gegebener Summe zu finden." },
        { type: "callout", title: "Muster", text: "Kumulative Summe verfolgen. Wenn (currentSum - k) existiert, existiert ein Unterarray mit Summe k." }
      ]}
    ],
    quiz: [
      { question: "Was ist die durchschnittliche Zeitkomplexitat von Hash Map Operationen?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2, explanation: "Hash Map Einfugen, Loschen und Suchen sind durchschnittlich O(1)." },
      { question: "Was ist der Unterschied zwischen Map und Set?",
        options: ["Kein Unterschied", "Map speichert Schluessel-Wert-Paare, Set nur eindeutige Werte", "Map ist schneller", "Set braucht mehr Speicher"],
        correctAnswer: 1, explanation: "Map speichert Schluessel-Wert-Paare, wahrend Set nur eindeutige Werte speichert." },
      { question: "Wie prufen Sie, ob ein Wert in einem Set existiert?",
        options: ["set.get(value)", "set.has(value)", "set.contains(value)", "set.find(value)"],
        correctAnswer: 1, explanation: "Die has() Methode pruft, ob ein Wert im Set existiert." }
    ],
    challenge: { title: "Herausforderung: Hash Maps & Sets",
      description: "Implementieren Sie Two Sum in O(n) mit einem Hash Map, dann losen Sie Longest Consecutive Sequence mit einem Set." },
    cheatSheet: { title: "Hash Maps & Sets - Schnellreferenz", items: [
      { title: "Hash Map", content: "O(1) durchschnittlich, Schluessel-Wert-Paare" },
      { title: "Set", content: "O(1) Suche, nur eindeutige Werte" },
      { title: "Two Sum", text: "Komplement in Map prufen" },
      { title: "Prefix Sum + Map", content: "Unterarrays mit Zielsumme finden" }
    ]}
  }
};
export default translations;
