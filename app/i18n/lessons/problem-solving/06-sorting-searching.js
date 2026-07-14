const translations = {
  ar: {
    sections: [
      { title: "مقدمة في الفرز والبحث", content: [
        { type: "p", text: "ينظم الفرز البيانات لاسترجاعها بكفاءة. يقلل Binary Search وقت البحث من O(n) إلى O(log n) على البيانات المرتبة." },
        { type: "callout", title: "ما سنتعلمه", text: "خوارزمية Binary Search، خوارزميات الفرز (Quick Sort، Merge Sort)، ومشاكل البحث المتقدمة." }
      ]},
      { title: "أساسيات Binary Search", content: [
        { type: "p", text: "يعمل Binary Search على المصفوفات المرتبة عن طريق تقسيم فترات البحث إلى نصف بشكل متكرر." },
        { type: "callout", title: "المعادلة الرئيسية", text: "mid = left + Math.floor((right - left) / 2). قارن mid مع الهدف، أeliminate نصفًا في كل خطوة." }
      ]},
      { title: "تنويعات Binary Search", content: [
        { type: "p", text: "يمكن تكييف Binary Search لإيجاد الحدود أو القمم أو الإجابة في نطاق من القيم الممكنة." },
        { type: "callout", title: "التنويعات", text: "البحث الكلاسيكي، الظهور الأول/الأخير، البحث في مصفوفة مدورة، الإجابة على نطاق مرتب (BS على الإجابة)." }
      ]},
      { title: "خوارزميات الفرز", content: [
        { type: "p", text: "فهم خوارزميات الفرز يساعد في اختيار المناسب منها بناءً على حجم البيانات والذاكرة والمتطلبات." },
        { type: "callout", title: "الخوارزميات الشائعة", text: "Quick Sort: O(n log n) متوسط، مدمج. Merge Sort: O(n log n) مضمون، مستقر. Insertion Sort: O(n²)، جيد للبيانات الصغيرة." }
      ]},
      { title: "Binary Search على الإجابة", content: [
        { type: "p", text: "عندما تكون الإجابة في نطاق [low, high]، استخدم Binary Search لإيجاد الحد الأدنى/الأقصى للإجابة الصالحة." },
        { type: "callout", title: "النمط", text: "حدد نطاق البحث، لكل mid تحقق من الصلاحية، حرّك يسارًا أو يمينًا بناءً على الصلاحية." }
      ]},
      { title: "البحث في مصفوفة 2D", content: [
        { type: "p", text: "تعامل مع مصفوفة 2D مرتبة كمصفوفة مسطحة مرتبة وطبّق Binary Search مع تحويل الفهرس." },
        { type: "callout", title: "تحويل الفهرس", text: "row = Math.floor(mid / cols)، col = mid % cols. O(log(m*n))." }
      ]}
    ],
    quiz: [
      { question: "ما هو تعقيد الوقت لـ Binary Search؟",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: 1, explanation: "ي eliminate Binary Search نصف مساحة البحث في كل خطوة، مما يعطي تعقيد وقت O(log n)." },
      { question: "لماذا نستخدم mid = left + Math.floor((right - left) / 2)؟",
        options: ["أسرع", "يمنع تجاوز الأعداد الصحيحة", "أسهل في القراءة", "لا يوجد سبب"],
        correctAnswer: 1, explanation: "الاستخدام left + (right-left)/2 بدلاً من (left+right)/2 يمنع تجاوز الأعداد الصحيحة المحتمل." },
      { question: "متى يمكنك تطبيق Binary Search؟",
        options: ["أي مصفوفة", "المصفوفات المرتبة أو الشروط الأحادية", "القوائم المرتبطة فقط", "الأشجار فقط"],
        correctAnswer: 1, explanation: "يتطلب Binary Search بيانات مرتبة أو شرطًا أحاديًا يسمح بإزالة نصف مساحة البحث." }
    ],
    challenge: { title: "تحدي: الفرز والبحث",
      description: "نفّذ Binary Search، حل Search in Rotated Sorted Array، ثم حل Koko Eating Bananas باستخدام Binary Search على الإجابة." },
    cheatSheet: { title: "مرجع الفرز والبحث السريع", items: [
      { title: "Binary Search", content: "O(log n)، بيانات مرتبة، mid = left + (right-left)/2" },
      { title: "Quick Sort", content: "O(n log n) متوسط، مدمج، غير مستقر" },
      { title: "Merge Sort", content: "O(n log n) مضمون، مستقر، O(n) ذاكرة" },
      { title: "BS على الإجابة", content: "نطاق [low, high]، تحقق من الصلاحية لكل mid" }
    ]}
  },
  en: {
    sections: [
      { title: "Introduction to Sorting & Searching", content: [
        { type: "p", text: "Sorting organizes data for efficient retrieval. Binary Search reduces search time from O(n) to O(log n) on sorted data." },
        { type: "callout", title: "What We Will Learn", text: "Binary Search algorithm, sorting algorithms (Quick Sort, Merge Sort), and advanced search problems." }
      ]},
      { title: "Binary Search Fundamentals", content: [
        { type: "p", text: "Binary Search works on sorted arrays by repeatedly dividing the search interval in half." },
        { type: "callout", title: "Key Formula", text: "mid = left + Math.floor((right - left) / 2). Compare mid with target, eliminate half each step." }
      ]},
      { title: "Binary Search Variations", content: [
        { type: "p", text: "Binary Search can be adapted for finding boundaries, peaks, or the answer in a range of possible values." },
        { type: "callout", title: "Variations", text: "Classic search, first/last occurrence, search in rotated array, answer on sorted range (BS on answer)." }
      ]},
      { title: "Sorting Algorithms", content: [
        { type: "p", text: "Understanding sorting algorithms helps choose the right one based on data size, memory, and stability requirements." },
        { type: "callout", title: "Common Algorithms", text: "Quick Sort: O(n log n) avg, in-place. Merge Sort: O(n log n) guaranteed, stable. Insertion Sort: O(n²), good for small data." }
      ]},
      { title: "Binary Search on Answer", content: [
        { type: "p", text: "When the answer is in a range [low, high], use Binary Search to find the minimum/maximum valid answer." },
        { type: "callout", title: "Pattern", text: "Define search range, for each mid check if valid, move left or right based on validity." }
      ]},
      { title: "Search in 2D Matrix", content: [
        { type: "p", text: "Treat a sorted 2D matrix as a flat sorted array and apply Binary Search with index conversion." },
        { type: "callout", title: "Index Conversion", text: "row = Math.floor(mid / cols), col = mid % cols. O(log(m*n)) time." }
      ]}
    ],
    quiz: [
      { question: "What is the time complexity of Binary Search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: 1, explanation: "Binary Search eliminates half the search space each step, giving O(log n) time complexity." },
      { question: "Why use mid = left + Math.floor((right - left) / 2)?",
        options: ["It's faster", "It prevents integer overflow", "It's easier to read", "No reason"],
        correctAnswer: 1, explanation: "Using left + (right-left)/2 instead of (left+right)/2 prevents potential integer overflow." },
      { question: "When can you apply Binary Search?",
        options: ["Any array", "Sorted arrays or monotonic conditions", "Only linked lists", "Only trees"],
        correctAnswer: 1, explanation: "Binary Search requires sorted data or a monotonic condition that allows eliminating half the search space." }
    ],
    challenge: { title: "Challenge: Sorting & Searching",
      description: "Implement Binary Search, solve Search in Rotated Sorted Array, then solve Koko Eating Bananas using Binary Search on answer." },
    cheatSheet: { title: "Sorting & Searching Quick Reference", items: [
      { title: "Binary Search", content: "O(log n), sorted data, mid = left + (right-left)/2" },
      { title: "Quick Sort", content: "O(n log n) avg, in-place, not stable" },
      { title: "Merge Sort", content: "O(n log n) guaranteed, stable, O(n) space" },
      { title: "BS on Answer", content: "Search range [low, high], check validity at each mid" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction au tri et a la recherche", content: [
        { type: "p", text: "Le tri organise les donnees pour une recuperation efficace. La recherche binaire reduit le temps de O(n) a O(log n)." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Algorithme de recherche binaire, algorithmes de tri, problemes de recherche avances." }
      ]},
      { title: "Fondamentaux de la recherche binaire", content: [
        { type: "p", text: "La recherche binaire fonctionne sur des tableaux tries en divisant repetitivement l'intervalle de recherche." },
        { type: "callout", title: "Formule cles", text: "mid = left + Math.floor((right - left) / 2). Comparer mid avec la cible, eliminer la moitie." }
      ]},
      { title: "Variations de la recherche binaire", content: [
        { type: "p", text: "La recherche binaire peut etre adaptee pour trouver des frontieres, des pics, ou des reponses dans une plage." },
        { type: "callout", title: "Variations", text: "Recherche classique, premiere/derniere occurrence, tableau tourne, BS sur reponse." }
      ]},
      { title: "Algorithmes de tri", content: [
        { type: "p", text: "Comprendre les algorithmes de tri aide a choisir le bon selon la taille, la memoire et la stabilite." },
        { type: "callout", title: "Algorithmes courants", text: "Quick Sort: O(n log n) moyen. Merge Sort: O(n log n) garanti, stable. Insertion Sort: O(n²)." }
      ]},
      { title: "Recherche binaire sur reponse", content: [
        { type: "p", text: "Quand la reponse est dans une plage [low, high], utilisez la recherche binaire pour trouver la reponse optimale." },
        { type: "callout", title: "Pattern", text: "Definir la plage, pour chaque mid verifier la validite, deplacer gauche ou droite." }
      ]},
      { title: "Recherche dans matrice 2D", content: [
        { type: "p", text: "Traiter une matrice triee 2D comme un tableau plat trie et appliquer la recherche binaire." },
        { type: "callout", title: "Conversion d'index", text: "row = Math.floor(mid / cols), col = mid % cols. O(log(m*n))." }
      ]}
    ],
    quiz: [
      { question: "Quelle est la complexite de la recherche binaire ?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: 1, explanation: "La recherche binaire elimine la moitie de l'espace de recherche a chaque etape, soit O(log n)." },
      { question: "Pourquoi utiliser mid = left + Math.floor((right - left) / 2) ?",
        options: ["C'est plus rapide", "Cela evite le depassement entier", "C'est plus lisible", "Aucune raison"],
        correctAnswer: 1, explanation: "Cette formule evite le depassement d'entier potentiel." },
      { question: "Quand peut-on appliquer la recherche binaire ?",
        options: ["Tout tableau", "Tableaux tries ou conditions monotones", "Listes liees uniquement", "Arbres uniquement"],
        correctAnswer: 1, explanation: "La recherche binaire necessite des donnees tries ou une condition monotone." }
    ],
    challenge: { title: "Defi : Tri et Recherche",
      description: "Implementez la recherche binaire, resolvez Search in Rotated Sorted Array, puis Koko Eating Bananas." },
    cheatSheet: { title: "Tri et Recherche - Reference rapide", items: [
      { title: "Recherche binaire", content: "O(log n), donnees tries, mid = left + (right-left)/2" },
      { title: "Quick Sort", content: "O(n log n) moyen, en place, non stable" },
      { title: "Merge Sort", content: "O(n log n) garanti, stable, O(n) espace" },
      { title: "BS sur reponse", content: "Plage [low, high], verifier validite a chaque mid" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Sortierung & Suche", content: [
        { type: "p", text: "Sortierung organisiert Daten für effiziente Suche. Binary Search reduziert die Suchzeit von O(n) auf O(log n)." },
        { type: "callout", title: "Was wir lernen werden", text: "Binary Search Algorithmus, Sortieralgorithmen, fortgeschrittene Suchprobleme." }
      ]},
      { title: "Binary Search Grundlagen", content: [
        { type: "p", text: "Binary Search arbeitet auf sortierten Arrays, indem es das Suchintervall in der Haelfte teilt." },
        { type: "callout", title: "Schluesselformel", text: "mid = left + Math.floor((right - left) / 2). Mid mit Ziel vergleichen, jeden Schritt die Haelfte eliminieren." }
      ]},
      { title: "Binary Search Variationen", content: [
        { type: "p", text: "Binary Search kann fuer Grenzen, Spitzen oder Antworten in einem Bereich angepasst werden." },
        { type: "callout", title: "Variationen", text: "Klassische Suche, erste/letzte Vorkommen, gedrehtes Array, BS auf Antwort." }
      ]},
      { title: "Sortieralgorithmen", content: [
        { type: "p", text: "Das Verstaendnis von Sortieralgorithmen hilft, den richtigen basierend auf Groesse, Speicher und Stabilitaet zu waehlen." },
        { type: "callout", title: "Haeufige Algorithmen", text: "Quick Sort: O(n log n) Durchschnitt. Merge Sort: O(n log n) garantiert, stabil. Insertion Sort: O(n²)." }
      ]},
      { title: "Binary Search auf Antwort", content: [
        { type: "p", text: "Wenn die Antwort in einem Bereich [low, high] liegt, verwenden Sie Binary Search fuer die optimale Antwort." },
        { type: "callout", title: "Muster", text: "Bereich definieren, fuer jedes mid Gueltigkeit pruefen, links oder rechts bewegen." }
      ]},
      { title: "Suche in 2D Matrix", content: [
        { type: "p", text: "Eine sortierte 2D Matrix als flaches sortiertes Array behandeln und Binary Search mit Indexkonvertierung anwenden." },
        { type: "callout", title: "Indexkonvertierung", text: "row = Math.floor(mid / cols), col = mid % cols. O(log(m*n))." }
      ]}
    ],
    quiz: [
      { question: "Was ist die Zeitkomplexitat von Binary Search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: 1, explanation: "Binary Search eliminiert jeden Schritt die Haelfte des Suchbereichs, also O(log n)." },
      { question: "Warum mid = left + Math.floor((right - left) / 2) verwenden?",
        options: ["Es ist schneller", "Verhindert Integer-Overflow", "Ist lesbarer", "Kein Grund"],
        correctAnswer: 1, explanation: "Diese Formel verhindert moeglichen Integer-Overflow." },
      { question: "Wann kann man Binary Search anwenden?",
        options: ["Jedes Array", "Sortierte Arrays oder monotone Bedingungen", "Nur verkettete Listen", "Nur Baeume"],
        correctAnswer: 1, explanation: "Binary Search erfordert sortierte Daten oder eine monotone Bedingung." }
    ],
    challenge: { title: "Herausforderung: Sortierung & Suche",
      description: "Implementieren Sie Binary Search, losen Sie Search in Rotated Sorted Array, dann Koko Eating Bananas." },
    cheatSheet: { title: "Sortierung & Suche - Schnellreferenz", items: [
      { title: "Binary Search", content: "O(log n), sortierte Daten, mid = left + (right-left)/2" },
      { title: "Quick Sort", content: "O(n log n) Durchschnitt, an Ort, nicht stabil" },
      { title: "Merge Sort", content: "O(n log n) garantiert, stabil, O(n) Platz" },
      { title: "BS auf Antwort", content: "Bereich [low, high], Gueltigkeit pruefen" }
    ]}
  }
};
export default translations;
