const translations = {
  ar: {
    sections: [
      { title: "مقدمة في أنماط التفكير", content: [
        { type: "p", text: "أنماط التفكير هي مناهج منظمة لحل المشكلات. يغطي هذا الدرس أكثر النماذج العقلية فعالية لتفكيك التحديات المعقدة." },
        { type: "callout", title: "ما سنتعلمه", text: "التفكيك، التعرف على الأنماط، التجريد، التفكير الخوارزمي، ومبادئ SOLID." }
      ]},
      { title: "التفكيك", content: [
        { type: "p", text: "افصل المشكلات المعقدة إلى مشكلات فرعية أصغر وأسهل في الإدارة يمكن حلها بشكل مستقل." },
        { type: "callout", title: "التقنية الرئيسية", text: "اسأل: ما هي الأجزاء الأصغر؟ هل يمكن حل كل جزء بشكل منفصل؟ كيف تتصل ببعضها؟" }
      ]},
      { title: "التعرف على الأنماط", content: [
        { type: "p", text: "حدد التشابهات والاتجاهات والهياكل المتكررة عبر مشكلات مختلفة لتطبيق الحلول المعروفة." },
        { type: "callout", title: "كيفية الممارسة", text: "بعد حل 5-10 مشكلات، راجعها معًا. ابحث عن الهياكل والمنهجيات الشائعة." }
      ]},
      { title: "التجريد", content: [
        { type: "p", text: "أزل التفاصيل غير الضرورية وركّز على المعلومات الأساسية التي تهم للحل." },
        { type: "callout", title: "مستويات التجريد", text: "المستوى العالي (مفهوم) → المستوى المتوسط (بنية تحتية) → المستوى المنخفض (تفاصيل التنفيذ)." }
      ]},
      { title: "التفكير الخوارزمي", content: [
        { type: "p", text: "صمم إجراءات خطوة بخطوة لحل المشكلات بطريقة منهجية وقابلة للتكرار." },
        { type: "callout", title: "الخطوات", text: "1. افهم المدخلات، 2. حدد المخرجات، 3. صمم الخطوات، 4. اختبر بالأمثلة." }
      ]},
      { title: "مبادئ SOLID", content: [
        { type: "p", text: "SOLID هو مجموعة من خمسة مبادئ تصميم تساعد المطورين على إنشاء كود قابل للصيانة والمرونة." },
        { type: "callout", title: "ronym SOLID", text: "S - المسؤولية الواحدة، O - المفتوح/المغلق، L - تعويض Liskov، I - فصل الواجهة، D - عكس التبعية." }
      ]}
    ],
    quiz: [
      { question: "ما هو التفكيك؟",
        options: ["كتابة كود معقد", "تقسيم مشكلة إلى مشكلات فرعية أصغر", "حفظ الخوارزميات", "استخدام الأطر"],
        correctAnswer: 1, explanation: "التفكيك يعني تقسيم المشكلات المعقدة إلى مشكلات فرعية أصغر وأسهل في الإدارة." },
      { question: "كيف يساعد التعرف على الأنماط؟",
        options: ["كتابة كود أسرع", "تحديد التشابهات بين المشكلات لتطبيق الحلول المعروفة", "حفظ بنية اللغة", "تجنب الأخطاء"],
        correctAnswer: 1, explanation: "يساعد التعرف على الأنماط في تحديد التشابهات عبر المشكلات لتطبيق الحلول المعروفة." },
      { question: "ماذا يعني S في SOLID؟",
        options: ["بسيط", "المسؤولية الواحدة", "منفصل", "منظم"],
        correctAnswer: 1, explanation: "S تعني مبدأ المسؤولية الواحدة - يجب أن يكون لكل فئة مسؤولية واحدة." }
    ],
    challenge: { title: "تحدي: تطبيق أنماط التفكير",
      description: "اختر مشكلة معقدة، فككها إلى مشكلات فرعية، حدد الأنماط، طبّق التجريد، واكتب حلًا خوارزميًا." },
    cheatSheet: { title: "مرجع أنماط التفكير السريع", items: [
      { title: "التفكيك", content: "افصل المشكلات إلى أجزاء أصغر" },
      { title: "التعرف على الأنماط", text: "ابحث عن التشابهات بين المشكلات" },
      { title: "التجريد", content: "ركز على التفاصيل الأساسية" },
      { title: "SOLID", text: "5 مبادئ لكود قابل للصيانة" }
    ]}
  },
  en: {
    sections: [
      { title: "Introduction to Thinking Patterns", content: [
        { type: "p", text: "Thinking patterns are structured approaches to solving problems. This lesson covers the most effective mental models for breaking down complex challenges." },
        { type: "callout", title: "What We Will Learn", text: "Decomposition, pattern recognition, abstraction, algorithmic thinking, and the SOLID principles." }
      ]},
      { title: "Decomposition", content: [
        { type: "p", text: "Break complex problems into smaller, manageable sub-problems that can be solved independently." },
        { type: "callout", title: "Key Technique", text: "Ask: What are the smaller parts? Can each part be solved separately? How do they connect?" }
      ]},
      { title: "Pattern Recognition", content: [
        { type: "p", text: "Identify similarities, trends, and recurring structures across different problems to apply known solutions." },
        { type: "callout", title: "How to Practice", text: "After solving 5-10 problems, review them together. Look for common structures and approaches." }
      ]},
      { title: "Abstraction", content: [
        { type: "p", text: "Remove unnecessary details and focus on the essential information that matters for the solution." },
        { type: "callout", title: "Abstraction Levels", text: "High level (concept) → Medium level (architecture) → Low level (implementation details)." }
      ]},
      { title: "Algorithmic Thinking", content: [
        { type: "p", text: "Design step-by-step procedures to solve problems in a systematic, repeatable way." },
        { type: "callout", title: "Steps", text: "1. Understand the input, 2. Define the output, 3. Design the steps, 4. Test with examples." }
      ]},
      { title: "SOLID Principles", content: [
        { type: "p", text: "SOLID is a set of five design principles that help developers create maintainable and flexible code." },
        { type: "callout", title: "SOLID Acronym", text: "S - Single Responsibility, O - Open/Closed, L - Liskov Substitution, I - Interface Segregation, D - Dependency Inversion." }
      ]}
    ],
    quiz: [
      { question: "What is decomposition?",
        options: ["Writing complex code", "Breaking a problem into smaller sub-problems", "Memorizing algorithms", "Using frameworks"],
        correctAnswer: 1, explanation: "Decomposition means breaking complex problems into smaller, manageable sub-problems." },
      { question: "What does pattern recognition help with?",
        options: ["Writing faster code", "Identifying similarities across problems to apply known solutions", "Memorizing syntax", "Avoiding bugs"],
        correctAnswer: 1, explanation: "Pattern recognition helps identify similarities across problems to apply known solutions." },
      { question: "What is the S in SOLID?",
        options: ["Simple", "Single Responsibility", "Separate", "Structured"],
        correctAnswer: 1, explanation: "S stands for Single Responsibility Principle - each class should have one responsibility." }
    ],
    challenge: { title: "Challenge: Apply Thinking Patterns",
      description: "Pick a complex problem, decompose it into sub-problems, identify patterns, apply abstraction, and write an algorithmic solution." },
    cheatSheet: { title: "Thinking Patterns Quick Reference", items: [
      { title: "Decomposition", content: "Break problems into smaller parts" },
      { title: "Pattern Recognition", content: "Find similarities across problems" },
      { title: "Abstraction", content: "Focus on essential details" },
      { title: "SOLID", content: "5 principles for maintainable code" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux modeles de reflexion", content: [
        { type: "p", text: "Les modeles de reflexion sont des approches structurees pour resoudre des problemes." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Decomposition, reconnaissance de patrons, abstraction, pensee algebrique et principes SOLID." }
      ]},
      { title: "Decomposition", content: [
        { type: "p", text: "Decoupez les problemes complexes en sous-problemes plus petits et gerables." },
        { type: "callout", title: "Technique cle", text: "Demandez : Quelles sont les petites parties ? Peuvent-elles etre resolues separement ?" }
      ]},
      { title: "Reconnaissance de patrons", content: [
        { type: "p", text: "Identifiez les similitudes et les structures recurrentes dans differents problemes." },
        { type: "callout", title: "Comment pratiquer", text: "Apres avoir resolu 5-10 problemes, revoyez-les ensemble pour trouver les structures communes." }
      ]},
      { title: "Abstraction", content: [
        { type: "p", text: "Supprimez les details inutiles et concentrez-vous sur les informations essentielles." },
        { type: "callout", title: "Niveaux d'abstraction", text: "Haut niveau (concept) → Niveau moyen (architecture) → Bas niveau (details)." }
      ]},
      { title: "Pensee algebrique", content: [
        { type: "p", text: "Concevez des procedures etape par etape pour resoudre des problemes de maniere systematique." },
        { type: "callout", title: "Etapes", text: "1. Comprendre l'entree, 2. Definir la sortie, 3. Concevoir les etapes, 4. Tester avec des exemples." }
      ]},
      { title: "Principes SOLID", content: [
        { type: "p", text: "SOLID est un ensemble de cinq principes de conception pour un code maintenable." },
        { type: "callout", title: "Acronyme SOLID", text: "S - Responsabilite unique, O - Ouvert/Ferme, L - Liskov, I - Segregation d'interface, D - Inversion de dependance." }
      ]}
    ],
    quiz: [
      { question: "Qu'est-ce que la decomposition ?",
        options: ["Ecrire du code complexe", "Decouper un probleme en sous-problemes", "Memoriser des algorithmes", "Utiliser des frameworks"],
        correctAnswer: 1, explanation: "La decomposition consiste a decouper les problemes complexes en sous-problemes." },
      { question: "A quoi aide la reconnaissance de patrons ?",
        options: ["Ecrire du code plus rapide", "Identifier les similitudes entre les problemes", "Memoriser la syntaxe", "Eviter les bugs"],
        correctAnswer: 1, explanation: "La reconnaissance de patrons aide a identifier les similitudes pour appliquer des solutions connues." },
      { question: "Que represente S dans SOLID ?",
        options: ["Simple", "Responsabilite unique", "Separe", "Structure"],
        correctAnswer: 1, explanation: "S signifie Principe de responsabilite unique - chaque classe doit avoir une seule responsabilite." }
    ],
    challenge: { title: "Defi : Appliquer les modeles de reflexion",
      description: "Choisissez un probleme complexe, decomposez-le, identifiez les patrons, appliquez l'abstraction." },
    cheatSheet: { title: "Reference rapide des modeles de reflexion", items: [
      { title: "Decomposition", content: "Decouper les problemes en petites parties" },
      { title: "Reconnaissance", content: "Trouver les similitudes entre les problemes" },
      { title: "Abstraction", content: "Se concentrer sur les details essentiels" },
      { title: "SOLID", content: "5 principes pour un code maintenable" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Denkmuster", content: [
        { type: "p", text: "Denkmuster sind strukturierte Ansatze zur Problemlösung." },
        { type: "callout", title: "Was wir lernen werden", text: "Zerlegung, Mustererkennung, Abstraktion, algorithmisches Denken und SOLID-Prinzipien." }
      ]},
      { title: "Zerlegung", content: [
        { type: "p", text: "Zerlegen Sie komplexe Probleme in kleinere, handhabbare Teilprobleme." },
        { type: "callout", title: "Schlusseltechnik", text: "Fragen Sie: Was sind die kleineren Teile? Können sie separat gelöst werden?" }
      ]},
      { title: "Mustererkennung", content: [
        { type: "p", text: "Identifizieren Sie Ahnlichkeiten und wiederkehrende Strukturen in verschiedenen Problemen." },
        { type: "callout", title: "Ubung", text: "Uberprufen Sie 5-10 geloste Probleme zusammen, um gemeinsame Strukturen zu finden." }
      ]},
      { title: "Abstraktion", content: [
        { type: "p", text: "Entfernen Sie unnötige Details und konzentrieren Sie sich auf wesentliche Informationen." },
        { type: "callout", title: "Abstraktionsstufen", text: "Hohe Stufe (Konzept) → Mittlere Stufe (Architektur) → Niedrige Stufe (Details)." }
      ]},
      { title: "Algorithmisches Denken", content: [
        { type: "p", text: "Entwickeln Sie schrittweise Verfahren zur systematischen Problemlösung." },
        { type: "callout", title: "Schritte", text: "1. Eingabe verstehen, 2. Ausgabe definieren, 3. Schritte entwerfen, 4. Mit Beispielen testen." }
      ]},
      { title: "SOLID-Prinzipien", content: [
        { type: "p", text: "SOLID ist ein Satz von fünf Gestaltungsprinzipien für wartbaren Code." },
        { type: "callout", title: "SOLID-Akronym", text: "S - Single Responsibility, O - Open/Closed, L - Liskov Substitution, I - Interface Segregation, D - Dependency Inversion." }
      ]}
    ],
    quiz: [
      { question: "Was ist Zerlegung?",
        options: ["Komplexen Code schreiben", "Ein Problem in kleinere Teilprobleme zerlegen", "Algorithmen auswendig lernen", "Frameworks verwenden"],
        correctAnswer: 1, explanation: "Zerlegung bedeutet, komplexe Probleme in kleinere, handhabbare Teilprobleme zu zerlegen." },
      { question: "Wofur hilft Mustererkennung?",
        options: ["Schnelleren Code schreiben", "Ahlichkeiten zwischen Problemen erkennen", "Syntax auswendig lernen", "Fehler vermeiden"],
        correctAnswer: 1, explanation: "Mustererkennung hilft, Ahnlichkeiten zu erkennen, um bekannte Losungen anzuwenden." },
      { question: "Was ist das S in SOLID?",
        options: ["Simple", "Single Responsibility", "Separate", "Structured"],
        correctAnswer: 1, explanation: "S steht fur Single Responsibility Principle - jede Klasse sollte eine Verantwortung haben." }
    ],
    challenge: { title: "Herausforderung: Denkmuster anwenden",
      description: "Wahlen Sie ein komplexes Problem, zerlegen Sie es, identifizieren Sie Muster und wenden Sie Abstraktion an." },
    cheatSheet: { title: "Denkmuster-Schnellreferenz", items: [
      { title: "Zerlegung", content: "Probleme in kleinere Teile zerlegen" },
      { title: "Mustererkennung", content: "Ahnlichkeiten zwischen Problemen finden" },
      { title: "Abstraktion", content: "Sich auf wesentliche Details konzentrieren" },
      { title: "SOLID", content: "5 Prinzipien fur wartbaren Code" }
    ]}
  }
};
export default translations;
