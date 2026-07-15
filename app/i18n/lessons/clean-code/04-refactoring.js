const translations = {
  ar: {
    sections: [
      { title: "لماذا إعادة الهيكلة؟", content: [
        { type: "p", text: "إعادة الهيكلة هي عملية <strong>تحسين هيكل الكود</strong> دون تغيير سلوكيته الخارجية. الهدف هو جعل الكود أسهل للقراءة والصيانة والتوسع." },
        { type: "p", text: "الكثير من المبرمجين يكتبون كوداً يعمل ثم يتركونه. لكن الكود النظيف يحتاج إلى صيانة مستمرة. الكود الفوضوي يصبح <strong>غالياً وخطيراً</strong> مع مرور الوقت." },
        { type: "callout", title: "تشبيه بسيط:", text: "تخيل غرفة مزدحمة بالأشياء. إعادة الهيكلة مثل تنظيم الغرفة: الأشياء نفسها، لكن أنت تعرف أين كل شيء ويمكنك الوصول إليه بسهولة." },
        { type: "p", text: "هناك عدة مبادئ توجيه إعادة الهيكلة. الأشهر هي <strong>DRY</strong> و <strong>KISS</strong>، بالإضافة إلى تقنيات تحسين متنوعة سنستكشفها في هذا الدرس." },
      ]},
      { title: "DRY - لا تكرر نفسك", content: [
        { type: "p", text: "مبدأ <strong>DRY</strong> يعني: لا تكرر نفسك. كل قطعة من المعرفة يجب أن يكون لها تمثيل واحد واضح في النظام. إذا وجدت نفس المنطق مكرراً في أكثر من مكان، استخرجه في دالة أو وحدة مشتركة." },
        { type: "callout-accent", title: "فوائد DRY:", text: "تقليل تكرار الكود، صيانة وتعديل أسهل، أخطاء أقل من النسخ واللصق، وضوح الكود." },
      ]},
      { title: "KISS - أبقه بسيطاً", content: [
        { type: "p", text: "مبدأ <strong>KISS</strong> يعني: أبقه بسيطاً. الكود يجب أن يكون بسيطاً ومقروءاً قدر الإمكان. إذا كان من الصعب فهم ما يفعله الكود، فإنه يحتاج إلى إعادة هيكلة." },
      ]},
      { title: "استخراج الدالة", content: [
        { type: "p", text: "عندما تكون الدالة طويلة جداً وتفعل أشياء كثيرة، <strong>قسمها إلى دوال أصغر</strong> كل واحدة مسؤولة عن شيء واحد." },
      ]},
      { title: "إعادة تسمية المتغير", content: [
        { type: "p", text: "أسماء المتغيرات الواضحة تجعل الكود أسهل للفهم. إعادة تسمية المتغيرات هي واحدة من أبسط تقنيات إعادة الهيكلة وأكثرها تأثيراً." },
        { type: "callout-primary", title: "قواعد تسمية المتغيرات:", text: "استخدم أسماء تصف ما يحتويه المتغير: userName بدلاً من x. استخدم أسماء أفعال للدوال: getUser بدلاً من user. تجنب الحروف المفردة إلا إذا كانت شائعة: i في الحلقات مقبول. استخدم الاتجاه الإنجليزي: المتغيرات كأسماء، الدوال كأفعال." },
      ]},
      { title: "استبدال الشرط بالتعدد الأشكال", content: [
        { type: "p", text: "عندما يكون لديك جمل <code>if/else</code> أو <code>switch</code> طويلة تتحقق من أنواع البيانات، يُفضل استبدالها بـ <strong>التعدد الأشكال</strong>. هذا يجعل الكود أسهل للتوسع والصيانة." },
        { type: "callout", title: "متى تستخدم التعدد الأشكال بدلاً من الشروط؟", text: "عندما يكون لديك أكثر من 3-4 حالات في شرط، عندما تحتاج إلى إضافة حالات جديدة ب頻度، عندما يكون لكل فرع منطق مختلف ومستقل." },
      ]},
    ],
    quiz: [
      { question: "أي مبدأ ينص على عدم تكرار الكود واستخراج المنطق المشترك في مكان واحد؟", options: ["KISS - أبقه بسيطاً", "DRY - لا تكرر نفسك", "YAGNI - لن تحتاج إليه", "SOLID - المسؤولية الفردية"], explanation: "DRY (لا تكرر نفسك) هو المبدأ الذي ينص على أن كل قطعة من المعرفة يجب أن يكون لها تمثيل واحد في النظام. عندما تجد كوداً يكرر نفسه، استخرجه في دالة أو وحدة مشتركة." },
    ],
    challenge: { title: "تحدي: أعد هيكلة دالة معالجة بيانات الطلاب", description: "لديك الدالة التالية التي تحسب متوسط درجات الطلاب. أعد هيكلتها باستخدام تقنيات DRY واستخراج الدالة وإعادة تسمية المتغير." },
    cheatSheet: { title: "ملخص إعادة الهيكلة", columns: [
      { heading: "المبادئ الأساسية:", items: [
        '<strong style={{ color: "var(--primary)" }}>DRY</strong> - لا تكرر نفسك - استخرج المنطق المشترك',
        '<strong style={{ color: "var(--accent)" }}>KISS</strong> - أبقه بسيطاً - تجنب التعقيد غير الضروري',
        '<strong style={{ color: "var(--secondary)" }}>المسؤولية الفردية</strong> - كل دالة تفعل شيئاً واحداً فقط',
      ]},
      { heading: "تقنيات إعادة الهيكلة:", items: [
        '<strong style={{ color: "var(--primary)" }}>استخراج الدالة</strong> - قسم الدوال الطويلة إلى أصغر',
        '<strong style={{ color: "var(--accent)" }}>إعادة تسمية المتغير</strong> - حسّن أسماء المتغيرات والدوال',
        '<strong style={{ color: "var(--secondary)" }}>استبدال الشرط</strong> - استبدل الشروط بالتعدد الأشكال أو الكائنات',
      ]},
    ]},
    interviewQuestions: [
      { question: "ما هي Code Smells الشائعة؟", answer: "Duplicated code, long methods, large classes, magic numbers.", difficulty: "easy" }
    ],
    tricks: [
      { title: "استخدم Extract Method", description: "عندما تكون الدالة طويلة، افصل المنطق إلى دوال أصغر", type: "brain" }
    ]
  },
  en: {
    sections: [
      { title: "Why Refactoring?", content: [
        { type: "p", text: "Refactoring is the process of <strong>improving code structure</strong> without changing its external behavior. The goal is to make code easier to read, maintain, and extend." },
        { type: "p", text: "Many programmers write code that works and then leave it. But clean code requires continuous maintenance. Messy code becomes <strong>expensive and dangerous</strong> over time." },
        { type: "callout", title: "Simple analogy:", text: "Imagine a room cluttered with items. Refactoring is like organizing the room: same items, but you know where everything is and can access it easily." },
        { type: "p", text: "There are several principles that guide refactoring. The most famous are <strong>DRY</strong> and <strong>KISS</strong>, along with various improvement techniques we'll explore in this lesson." },
      ]},
      { title: "DRY - Don't Repeat Yourself", content: [
        { type: "p", text: "The <strong>DRY</strong> principle means: Don't repeat yourself. Every piece of knowledge should have one clear representation in the system. If you find the same logic repeated in more than one place, extract it into a shared function or module." },
        { type: "callout-accent", title: "Benefits of DRY:", text: "Reduced code duplication, easier maintenance and modification, fewer copy-paste errors, improved code clarity." },
      ]},
      { title: "KISS - Keep It Simple, Stupid", content: [
        { type: "p", text: "The <strong>KISS</strong> principle means: Keep it simple, stupid. Code should be as simple and readable as possible. If it's hard to understand what code does, it needs refactoring." },
      ]},
      { title: "Extract Function", content: [
        { type: "p", text: "When a function is too long and does many things, <strong>split it into smaller functions</strong> each responsible for one thing." },
      ]},
      { title: "Rename Variable", content: [
        { type: "p", text: "Clear variable names make code easier to understand. Renaming variables is one of the simplest and most impactful refactoring techniques." },
        { type: "callout-primary", title: "Rules for variable naming:", text: "Use names that describe what the variable contains: userName instead of x. Use action names for functions: getUser instead of user. Avoid single letters unless common: i in loops is acceptable. Use English direction: variables as nouns, functions as verbs." },
      ]},
      { title: "Replace Conditional with Polymorphism", content: [
        { type: "p", text: "When you have long <code>if/else</code> or <code>switch</code> statements checking data types, it's better to replace them with <strong>Polymorphism</strong>. This makes code easier to extend and maintain." },
        { type: "callout", title: "When to use Polymorphism instead of conditionals?", text: "When you have more than 3-4 cases in a conditional, when you need to add new cases frequently, when each branch has different independent logic, when you want to separate logic from data." },
      ]},
    ],
    quiz: [
      { question: "What is the principle that states not to repeat code and extract shared logic to one place?", options: ["KISS - Keep It Simple, Stupid", "DRY - Don't Repeat Yourself", "YAGNI - You Aren't Gonna Need It", "SOLID - Single Responsibility"], explanation: "DRY (Don't Repeat Yourself) is the principle that states every piece of knowledge should have one representation in the system. When you find code repeating, extract it to a shared function or module." },
    ],
    challenge: { title: "Challenge: Refactor the student data processing function", description: "You have the following function that calculates the average student grades. Refactor it using DRY, Extract Function, and Rename Variable techniques." },
    cheatSheet: { title: "Refactoring Cheat Sheet", columns: [
      { heading: "Core principles:", items: [
        '<strong style={{ color: "var(--primary)" }}>DRY</strong> - Don\'t repeat yourself - extract shared logic',
        '<strong style={{ color: "var(--accent)" }}>KISS</strong> - Keep it simple - avoid unnecessary complexity',
        '<strong style={{ color: "var(--secondary)" }}>Single Responsibility</strong> - Each function does one thing only',
      ]},
      { heading: "Refactoring techniques:", items: [
        '<strong style={{ color: "var(--primary)" }}>Extract Function</strong> - Split long functions into smaller ones',
        '<strong style={{ color: "var(--accent)" }}>Rename Variable</strong> - Improve variable and function names',
        '<strong style={{ color: "var(--secondary)" }}>Replace Conditional</strong> - Replace conditionals with polymorphism or objects',
      ]},
    ]},
    interviewQuestions: [
      { question: "What are common Code Smells?", answer: "Duplicated code, long methods, large classes, magic numbers.", difficulty: "easy" }
    ],
    tricks: [
      { title: "Use Extract Method", description: "When a function is long, split the logic into smaller functions", type: "brain" }
    ]
  },
  fr: {
    sections: [
      { title: "Pourquoi la refactorisation ?", content: [
        { type: "p", text: "La refactorisation est le processus d'<strong>amélioration de la structure du code</strong> sans changer son comportement externe. L'objectif est de rendre le code plus facile à lire, à maintenir et à étendre." },
        { type: "p", text: "Beaucoup de programmeurs écrivent du code qui fonctionne et le laissent ensuite. Mais le code propre nécessite un entretien continu. Le code désordonné devient <strong>coûteux et dangereux</strong> avec le temps." },
        { type: "callout", title: "Analogie simple :", text: "Imaginez une pièce encombrée d'objets. La refactorisation est comme organiser la pièce : mêmes objets, mais vous savez où se trouve tout et vous pouvez y accéder facilement." },
        { type: "p", text: "Il existe plusieurs principes qui guident la refactorisation. Les plus connus sont <strong>DRY</strong> et <strong>KISS</strong>, ainsi que diverses techniques d'amélioration que nous explorerons dans cette leçon." },
      ]},
      { title: "DRY - Ne vous répétez pas", content: [
        { type: "p", text: "Le principe <strong>DRY</strong> signifie : Ne vous répétez pas. Chaque morceau de connaissance devrait avoir une représentation claire dans le système. Si vous trouvez la même logique répétée à plusieurs endroits, extrayez-la dans une fonction ou un module partagé." },
        { type: "callout-accent", title: "Avantages de DRY :", text: "Réduction de la duplication de code, maintenance et modification plus faciles, moins d'erreurs de copier-coller, clarté du code améliorée." },
      ]},
      { title: "KISS - Gardez-le simple", content: [
        { type: "p", text: "Le principe <strong>KISS</strong> signifie : Gardez-le simple, stupide. Le code devrait être aussi simple et lisible que possible. S'il est difficile de comprendre ce que fait le code, il a besoin d'une refactorisation." },
      ]},
      { title: "Extraire une fonction", content: [
        { type: "p", text: "Quand une fonction est trop longue et fait beaucoup de choses, <strong>divisez-la en fonctions plus petites</strong> chacune responsable d'une chose." },
      ]},
      { title: "Renommer une variable", content: [
        { type: "p", text: "Des noms de variables clairs rendent le code plus facile à comprendre. Renommer les variables est l'une des techniques de refactorisation les plus simples et les plus Impactantes." },
        { type: "callout-primary", title: "Règles de nommage des variables :", text: "Utilisez des noms qui décrivent ce que contient la variable : userName au lieu de x. Utilisez des noms d'action pour les fonctions : getUser au lieu de user. Évitez les lettres simples sauf courantes : i dans les boucles est acceptable." },
      ]},
      { title: "Remplacer le conditionnel par le polymorphisme", content: [
        { type: "p", text: "Quand vous avez de longues instructions <code>if/else</code> ou <code>switch</code> qui vérifient les types de données, il vaut mieux les remplacer par le <strong>Polymorphisme</code>. Cela rend le code plus facile à étendre et à maintenir." },
        { type: "callout", title: "Quand utiliser le polymorphisme ?", text: "Quand vous avez plus de 3-4 cas dans un conditionnel, quand vous devez ajouter de nouveaux cas fréquemment, quand chaque branche a une logique différente et indépendante." },
      ]},
    ],
    quiz: [
      { question: "Quel principe stipule de ne pas répéter le code et d'extraire la logique commune en un seul endroit ?", options: ["KISS - Gardez-le simple, stupide", "DRY - Ne vous répétez pas", "YAGNI - Vous n'allez pas en avoir besoin", "SOLID - Responsabilité unique"], explanation: "DRY (Ne vous répétez pas) est le principe qui stipule que chaque morceau de connaissance devrait avoir une seule représentation dans le système. Quand vous trouvez du code qui se répète, extrayez-le dans une fonction ou un module partagé." },
    ],
    challenge: { title: "Défi : Refactorisez la fonction de traitement des données étudiantes", description: "Vous avez la fonction suivante qui calcule la moyenne des notes des étudiants. Refactorisez-la en utilisant les techniques DRY, Extraire une fonction et Renommer une variable." },
    cheatSheet: { title: "Référence de la refactorisation", columns: [
      { heading: "Principes fondamentaux :", items: [
        '<strong style={{ color: "var(--primary)" }}>DRY</strong> - Ne vous répétez pas - extrayez la logique commune',
        '<strong style={{ color: "var(--accent)" }}>KISS</strong> - Gardez-le simple - évitez la complexité inutile',
        '<strong style={{ color: "var(--secondary)" }}>Responsabilité unique</strong> - Chaque fonction ne fait qu\'une chose',
      ]},
      { heading: "Techniques de refactorisation :", items: [
        '<strong style={{ color: "var(--primary)" }}>Extraire une fonction</strong> - Divisez les fonctions longues en plus petites',
        '<strong style={{ color: "var(--accent)" }}>Renommer une variable</strong> - Améliorez les noms de variables et fonctions',
        '<strong style={{ color: "var(--secondary)" }}>Remplacer le conditionnel</strong> - Remplacez les conditionnels par le polymorphisme',
      ]},
    ]}
  },
  de: {
    sections: [
      { title: "Warum Refaktorisierung?", content: [
        { type: "p", text: "Refaktorisierung ist der Prozess der <strong>Verbesserung der Codestruktur</strong> ohne Änderung des externen Verhaltens. Das Ziel ist es, Code leichter lesbar, wartbar und erweiterbar zu machen." },
        { type: "p", text: "Viele Programmierer schreiben Code, der funktioniert, und lassen ihn dann. Aber sauberer Code erfordert kontinuierliche Wartung. Unordentlicher Code wird mit der Zeit <strong>teuer und gefährlich</strong>." },
        { type: "callout", title: "Einfache Analogie:", text: "Stellen Sie sich einen Raum vor, der mit Gegenständen überfüllt ist. Refaktorisierung ist wie das Organisieren des Raums: dieselben Gegenstände, aber Sie wissen, wo alles ist und können darauf zugreifen." },
        { type: "p", text: "Es gibt mehrere Prinzipien, die die Refaktorisierung leiten. Die bekanntesten sind <strong>DRY</strong> und <strong>KISS</strong>, zusammen mit verschiedenen Verbesserungstechniken, die wir in dieser Lektion erkunden werden." },
      ]},
      { title: "DRY - Wiederholen Sie sich nicht", content: [
        { type: "p", text: "Das <strong>DRY</strong>-Prinzip bedeutet: Wiederholen Sie sich nicht. Jedes Stück Wissen sollte eine klare Repräsentation im System haben. Wenn Sie dieselbe Logik an mehr als einem Ort wiederholt finden, extrahieren Sie sie in eine gemeinsame Funktion oder Modul." },
        { type: "callout-accent", title: "Vorteile von DRY:", text: "Reduzierte Code-Duplizierung, einfachere Wartung und Modifikation, weniger Copy-Paste-Fehler, verbesserte Code-Klarheit." },
      ]},
      { title: "KISS - Halten Sie es einfach", content: [
        { type: "p", text: "Das <strong>KISS</strong>-Prinzip bedeutet: Halten Sie es einfach, dumm. Code sollte so einfach und lesbar wie möglich sein. Wenn es schwer ist zu verstehen, was Code tut, braucht er Refaktorisierung." },
      ]},
      { title: "Funktion extrahieren", content: [
        { type: "p", text: "Wenn eine Funktion zu lang ist und viele Dinge tut, <strong>teilen Sie sie in kleinere Funktionen</strong> auf, die jeweils für eine Sache verantwortlich sind." },
      ]},
      { title: "Variable umbenennen", content: [
        { type: "p", text: "Klare Variablennamen machen Code leichter verständlich. Das Umbenennen von Variablen ist eine der einfachsten und wirkungsvollsten Refaktorisierungstechniken." },
        { type: "callout-primary", title: "Regeln für die Variablbenennung:", text: "Verwenden Sie Namen, die beschreiben, was die Variable enthält: userName statt x. Verwenden Sie Aktionsnamen für Funktionen: getUser statt user. Vermeiden Sie einzelne Buchstaben, außer übliche: i in Schleifen ist akzeptabel." },
      ]},
      { title: "Bedingung durch Polymorphismus ersetzen", content: [
        { type: "p", text: "Wenn Sie lange <code>if/else</code>- oder <code>switch</code>-Anweisungen haben, die Datentypen prüfen, ersetzen Sie sie besser durch <strong>Polymorphismus</strong>. Das macht Code leichter erweiterbar und wartbar." },
        { type: "callout", title: "Wann Polymorphismus statt Bedingungen verwenden?", text: "Wenn Sie mehr als 3-4 Fälle in einer Bedingung haben, wenn Sie häufig neue Fälle hinzufügen müssen, wenn jeder Zweck eine andere unabhängige Logik hat." },
      ]},
    ],
    quiz: [
      { question: "Welches Prinzip besagt, Code nicht zu wiederholen und gemeinsame Logik an einem Ort zu extrahieren?", options: ["KISS - Halten Sie es einfach, dumm", "DRY - Wiederholen Sie sich nicht", "YAGNI - Sie werden es nicht brauchen", "SOLID - Verantwortliche Einzelheit"], explanation: "DRY (Wiederholen Sie sich nicht) ist das Prinzip, dass jedes Stück Wissen eine einzige Repräsentation im System haben sollte. Wenn Sie Code finden, der sich wiederholt, extrahieren Sie ihn in eine gemeinsame Funktion oder Modul." },
    ],
    challenge: { title: "Herausforderung: Refaktorisieren Sie die Studentendatenverarbeitungsfunktion", description: "Sie haben die folgende Funktion, die den Notendurchschnitt der Studenten berechnet. Refaktorisieren Sie sie mit DRY-, Funktions extrahieren- und Variablen umbenennen-Techniken." },
    cheatSheet: { title: "Übersicht über die Refaktorisierung", columns: [
      { heading: "Grundprinzipien:", items: [
        '<strong style={{ color: "var(--primary)" }}>DRY</strong> - Wiederholen Sie sich nicht - extrahieren Sie gemeinsame Logik',
        '<strong style={{ color: "var(--accent)" }}>KISS</strong> - Halten Sie es einfach - vermeiden Sie unnötige Komplexität',
        '<strong style={{ color: "var(--secondary)" }}>Verantwortliche Einzelheit</strong> - Jede Funktion tut nur eine Sache',
      ]},
      { heading: "Refaktorisierungstechniken:", items: [
        '<strong style={{ color: "var(--primary)" }}>Funktion extrahieren</strong> - Teilen Sie lange Funktionen in kleinere auf',
        '<strong style={{ color: "var(--accent)" }}>Variable umbenennen</strong> - Verbessern Sie Variablen- und Funktionsnamen',
        '<strong style={{ color: "var(--secondary)" }}>Bedingung ersetzen</strong> - Ersetzen Sie Bedingungen durch Polymorphismus',
      ]},
    ]}
  },
};

export default translations;
