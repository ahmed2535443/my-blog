const translations = {
  ar: {
    sections: [
      { title: "ما هو TypeScript؟", content: [
        { type: "p", text: "<strong>TypeScript</strong> هو لغة برمجة مبنية فوق JavaScript، طورها <strong>Microsoft</strong> في عام 2012. هو ببساطة <strong>JavaScript + نظام الأنواع</strong>." },
        { type: "callout", title: "تشبيه بسيط", text: "JavaScript مثل سيارة بدون لوحة معلومات — تسير لكنك لا تعرف سرعتك أو مستوى الوقود. TypeScript يضيف لوحة المعلومات! يخبرك أين المشكلة قبل أن ينهار." },
        { type: "p", text: "مهم: لا يعمل TypeScript مباشرة في المتصفح أو Node.js. يتم تجميعه إلى JavaScript عادي عبر <strong>tsc (مترجم TypeScript)</strong>. المخرج النهائي هو JavaScript خالص — لا قيود وقت التشغيل!" },
      ]},
      { title: "لماذا نستخدم TypeScript؟", content: [
        { type: "li", text: "<strong>اكتشاف الأخطاء مبكراً</strong> — يلتقط TypeScript أخطاء النوع في وقت التجميع، وليس وقت التشغيل." },
        { type: "li", text: "<strong>دعم أفضل لمحرر الأكواد</strong> — إكمال تلقائي وتوثيق داخلي وأدوات إعادة الهيكلة." },
        { type: "li", text: "<strong>كود يوثّق نفسه</strong> — تعمل الأنواع كتوثيق لكودك." },
        { type: "li", text: "<strong>إعادة هيكلة أكثر أماناً</strong> — غيّر توقيع دالة ويخبرك TypeScript في كل مكان ينكسر." },
        { type: "li", text: "<strong>أفضل للفرق</strong> — تعمل الأنواع كعقود بين المطورين." },
      ]},
      { title: "TypeScript مقابل JavaScript", content: [
        { type: "p", text: "TypeScript هو مجموعة فرعية من JavaScript — كل ملف JavaScript صالح هو أيضاً ملف TypeScript صالح. الفرق الرئيسي هو أن TypeScript يضيف تعليقات نوع اختيارية." },
        { type: "callout", title: "الفرق الرئيسي", text: "TypeScript = JavaScript + أنواع. يمكنك تبني TypeScript تدريجياً في مشاريع JavaScript الحالية." },
      ]},
      { title: "إعداد TypeScript", content: [
        { type: "li", text: "تثبيت TypeScript عالمياً: npm install -g typescript" },
        { type: "li", text: "تهيئة مشروع TypeScript: tsc --init" },
        { type: "li", text: "تجميع TypeScript: tsc filename.ts" },
        { type: "li", text: "ملف tsconfig.json يُكوّن مترجم TypeScript" },
      ]},
      { title: "أول كود TypeScript لك", content: [
        { type: "p", text: "لنكتب أول كود TypeScript لك. ابدأ بإعلان متغير بسيط مع تعليق نوع." },
        { type: "code", text: "let message: string = 'Hello TypeScript';\nlet count: number = 42;\nlet isActive: boolean = true;" },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "TypeScript هو JavaScript مع نظام أنواع" },
        { type: "li", text: "يكتشف الأخطاء في وقت التجميع، وليس وقت التشغيل" },
        { type: "li", text: "يُجمع إلى JavaScript عادي عبر tsc" },
        { type: "li", text: "كل JavaScript صالح هو TypeScript صالح" },
        { type: "li", text: "يحسّن TypeScript دعم محرر الأكواد وجودة الكود" },
      ]}
    ],
    quiz: [
      { question: "ما هو TypeScript؟", options: ["بديل لـ JavaScript", "JavaScript مع نظام أنواع", "إطار عمل CSS", "لغة قواعد بيانات"], explanation: "TypeScript هو JavaScript مع نظام أنواع مضاف، طوره Microsoft." },
      { question: "كيف يعمل TypeScript في المتصفح؟", options: ["مباشرةً", "يُجمع إلى JavaScript أولاً", "من خلال إضافة خاصة", "لا يعمل في المتصفحات"], explanation: "يُجمع TypeScript إلى JavaScript عادي عبر tsc قبل التشغيل في المتصفح." },
      { question: "ما هي الفائدة الرئيسية لـ TypeScript؟", options: ["تنفيذ أسرع", "اكتشاف الأخطاء في وقت التجميع", "حجم ملفات أصغر", "SEO أفضل"], explanation: "الفائدة الرئيسية لـ TypeScript هي اكتشاف أخطاء النوع في وقت التجميع وليس وقت التشغيل." }
    ],
    challenge: { title: "إعداد أول مشروع TypeScript لك", description: "ثبّت TypeScript، أنشئ tsconfig.json، اكتب ملف .ts بسيطاً بمتغيرات بأنواع مختلفة، وقم بتجميعه إلى JavaScript." },
    cheatSheet: { title: "ملخص مقدمة TypeScript", items: [
      { term: "npm install -g typescript", definition: "تثبيت TypeScript عالمياً" },
      { term: "tsc --init", definition: "تهيئة مشروع TypeScript" },
      { term: "tsc file.ts", definition: "تجميع TypeScript إلى JavaScript" },
      { term: "tsconfig.json", definition: "تكوين مترجم TypeScript" },
      { term: ": string", definition: "تعليق نوع النص" },
      { term: ": number", definition: "تعليق نوع الرقم" },
      { term: ": boolean", definition: "تعليق نوع المنطقي" }
    ]}
  },
  en: {
    sections: [
      { title: "What is TypeScript?", content: [
        { type: "p", text: "<strong>TypeScript</strong> is a programming language built on top of JavaScript, developed by <strong>Microsoft</strong> in 2012. It is simply <strong>JavaScript + Type System</strong>." },
        { type: "callout", title: "Simple Analogy", text: "JavaScript is like a car without a dashboard — it runs but you don't know your speed or fuel level. TypeScript adds the dashboard! It tells you where the problem is before it crashes." },
        { type: "p", text: "Important: TypeScript is not run directly in the browser or Node.js. It is compiled to plain JavaScript via <strong>tsc (TypeScript Compiler)</strong>. The final output is pure JavaScript — no runtime limitations!" },
      ]},
      { title: "Why Use TypeScript?", content: [
        { type: "li", text: "<strong>Catch errors early</strong> — TypeScript catches type errors at compile time, not at runtime." },
        { type: "li", text: "<strong>Better IDE support</strong> — Auto-completion, inline documentation, and refactoring tools." },
        { type: "li", text: "<strong>Self-documenting code</strong> — Types serve as documentation for your code." },
        { type: "li", text: "<strong>Safer refactoring</strong> — Change a function signature and TypeScript tells you everywhere that breaks." },
        { type: "li", text: "<strong>Better for teams</strong> — Types act as contracts between developers." },
      ]},
      { title: "TypeScript vs JavaScript", content: [
        { type: "p", text: "TypeScript is a superset of JavaScript — every valid JavaScript file is also a valid TypeScript file. The key difference is that TypeScript adds optional type annotations." },
        { type: "callout", title: "Key Difference", text: "TypeScript = JavaScript + Types. You can gradually adopt TypeScript in existing JavaScript projects." },
      ]},
      { title: "Setting Up TypeScript", content: [
        { type: "li", text: "Install TypeScript globally: npm install -g typescript" },
        { type: "li", text: "Initialize a TypeScript project: tsc --init" },
        { type: "li", text: "Compile TypeScript: tsc filename.ts" },
        { type: "li", text: "The tsconfig.json file configures the TypeScript compiler" },
      ]},
      { title: "Your First TypeScript Code", content: [
        { type: "p", text: "Let's write your first TypeScript code. Start with a simple variable declaration with type annotation." },
        { type: "code", text: "let message: string = 'Hello TypeScript';\nlet count: number = 42;\nlet isActive: boolean = true;" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "TypeScript is JavaScript with a type system" },
        { type: "li", text: "It catches errors at compile time, not runtime" },
        { type: "li", text: "It compiles to plain JavaScript via tsc" },
        { type: "li", text: "Every valid JavaScript is valid TypeScript" },
        { type: "li", text: "TypeScript improves IDE support and code quality" },
      ]}
    ],
    quiz: [
      { question: "What is TypeScript?", options: ["A replacement for JavaScript", "JavaScript with a type system", "A CSS framework", "A database language"], explanation: "TypeScript is JavaScript with an added type system, developed by Microsoft." },
      { question: "How does TypeScript run in the browser?", options: ["Directly", "It compiles to JavaScript first", "Through a special plugin", "It doesn't run in browsers"], explanation: "TypeScript is compiled to plain JavaScript via tsc before running in the browser." },
      { question: "What is the main benefit of TypeScript?", options: ["Faster execution", "Catches errors at compile time", "Smaller file sizes", "Better SEO"], explanation: "TypeScript's main benefit is catching type errors at compile time rather than at runtime." }
    ],
    challenge: { title: "Set Up Your First TypeScript Project", description: "Install TypeScript, create a tsconfig.json, write a simple .ts file with variables of different types, and compile it to JavaScript." },
    cheatSheet: { title: "TypeScript Introduction Cheat Sheet", items: [
      { term: "npm install -g typescript", definition: "Install TypeScript globally" },
      { term: "tsc --init", definition: "Initialize TypeScript project" },
      { term: "tsc file.ts", definition: "Compile TypeScript to JavaScript" },
      { term: "tsconfig.json", definition: "TypeScript compiler configuration" },
      { term: ": string", definition: "String type annotation" },
      { term: ": number", definition: "Number type annotation" },
      { term: ": boolean", definition: "Boolean type annotation" }
    ]}
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que TypeScript ?", content: [
        { type: "p", text: "<strong>TypeScript</strong> est un langage de programmation construit au-dessus de JavaScript, développé par <strong>Microsoft</strong> en 2012. C'est simplement <strong>JavaScript + Système de types</strong>." },
        { type: "callout", title: "Analogie simple", text: "JavaScript est comme une voiture sans tableau de bord — elle roule mais vous ne connaissez ni votre vitesse ni le niveau de carburant. TypeScript ajoute le tableau de bord !" },
        { type: "p", text: "Important : TypeScript n'est pas exécuté directement dans le navigateur ou Node.js. Il est compilé en JavaScript via <strong>tsc (TypeScript Compiler)</strong>." },
      ]},
      { title: "Pourquoi utiliser TypeScript ?", content: [
        { type: "li", text: "<strong>Catch errors early</strong> — TypeScript attrape les erreurs de type à la compilation." },
        { type: "li", text: "<strong>Better IDE support</strong> — Auto-complétion, documentation en ligne et outils de refactoring." },
        { type: "li", text: "<strong>Self-documenting code</strong> — Les types servent de documentation." },
        { type: "li", text: "<strong>Safer refactoring</strong> — Changez la signature d'une fonction et TypeScript vous dit partout où cela casse." },
      ]},
      { title: "TypeScript vs JavaScript", content: [
        { type: "p", text: "TypeScript est un sur-ensemble de JavaScript — chaque fichier JavaScript valide est aussi un fichier TypeScript valide." },
        { type: "callout", title: "Différence clé", text: "TypeScript = JavaScript + Types. Vous pouvez adopter TypeScript progressivement dans des projets JavaScript existants." },
      ]},
      { title: "Configurer TypeScript", content: [
        { type: "li", text: "Installer TypeScript : npm install -g typescript" },
        { type: "li", text: "Initialiser un projet : tsc --init" },
        { type: "li", text: "Compiler : tsc filename.ts" },
        { type: "li", text: "Le fichier tsconfig.json configure le compilateur" },
      ]},
      { title: "Votre premier code TypeScript", content: [
        { type: "p", text: "Écrivons votre premier code TypeScript. Commencez par une déclaration de variable avec annotation de type." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "TypeScript est JavaScript avec un système de types" },
        { type: "li", text: "Il attrape les erreurs à la compilation, pas à l'exécution" },
        { type: "li", text: "Il compile en JavaScript via tsc" },
        { type: "li", text: "Chaque JavaScript valide est du TypeScript valide" },
      ]}
    ],
    quiz: [
      { question: "Qu'est-ce que TypeScript ?", options: ["Un remplacement de JavaScript", "JavaScript avec un système de types", "Un framework CSS", "Un langage de base de données"], explanation: "TypeScript est JavaScript avec un système de types ajouté, développé par Microsoft." },
      { question: "Comment TypeScript s'exécute-t-il dans le navigateur ?", options: ["Directement", "Il compile d'abord en JavaScript", "Via un plugin spécial", "Il ne s'exécute pas dans les navigateurs"], explanation: "TypeScript est compilé en JavaScript via tsc avant de s'exécuter dans le navigateur." },
      { question: "Quel est le principal avantage de TypeScript ?", options: ["Exécution plus rapide", "Attrape les erreurs à la compilation", "Tailles de fichiers réduites", "Meilleur SEO"], explanation: "Le principal avantage de TypeScript est d'attraper les erreurs de type à la compilation." }
    ],
    challenge: { title: "Configurez votre premier projet TypeScript", description: "Installez TypeScript, créez un tsconfig.json, écrivez un fichier .ts simple avec des variables de différents types, et compilez-le en JavaScript." },
    cheatSheet: { title: "Fiche mémo Introduction à TypeScript", items: [
      { term: "npm install -g typescript", definition: "Installer TypeScript globalement" },
      { term: "tsc --init", definition: "Initialiser un projet TypeScript" },
      { term: "tsc file.ts", definition: "Compiler TypeScript en JavaScript" },
      { term: "tsconfig.json", definition: "Configuration du compilateur TypeScript" },
      { term: ": string", definition: "Annotation de type string" },
      { term: ": number", definition: "Annotation de type number" },
      { term: ": boolean", definition: "Annotation de type boolean" }
    ]}
  },
  de: {
    sections: [
      { title: "Was ist TypeScript?", content: [
        { type: "p", text: "<strong>TypeScript</strong> ist eine Programmiersprache, die auf JavaScript aufbaut, entwickelt von <strong>Microsoft</strong> im Jahr 2012. Es ist einfach <strong>JavaScript + Typsystem</strong>." },
        { type: "callout", title: "Einfache Analogie", text: "JavaScript ist wie ein Auto ohne Armaturenbrett — es läuft, aber Sie kennen weder Ihre Geschwindigkeit noch den Kraftstoffstand. TypeScript fügt das Armaturenbrett hinzu!" },
        { type: "p", text: "Wichtig: TypeScript wird nicht direkt im Browser oder Node.js ausgeführt. Es wird über <strong>tsc (TypeScript Compiler)</strong> zu plain JavaScript kompiliert." },
      ]},
      { title: "Warum TypeScript verwenden?", content: [
        { type: "li", text: "<strong>Fehler früh erkennen</strong> — TypeScript erkennt Typfehler zur Compile-Zeit." },
        { type: "li", text: "<strong>Bessere IDE-Unterstützung</strong> — Autovervollständigung, Inline-Dokumentation und Refactoring-Tools." },
        { type: "li", text: "<strong>Selbst dokumentierender Code</strong> — Typen dienen als Dokumentation." },
        { type: "li", text: "<strong>Sichereres Refactoring</strong> — Ändern Sie eine Funktionssignatur und TypeScript sagt Ihnen, wo es überall bricht." },
      ]},
      { title: "TypeScript vs JavaScript", content: [
        { type: "p", text: "TypeScript ist eine Teilmenge von JavaScript — jede gültige JavaScript-Datei ist auch eine gültige TypeScript-Datei." },
        { type: "callout", title: "Hauptunterschied", text: "TypeScript = JavaScript + Typen. Sie können TypeScript schrittweise in bestehenden JavaScript-Projekten einführen." },
      ]},
      { title: "TypeScript einrichten", content: [
        { type: "li", text: "TypeScript installieren: npm install -g typescript" },
        { type: "li", text: "Projekt initialisieren: tsc --init" },
        { type: "li", text: "Kompilieren: tsc filename.ts" },
        { type: "li", text: "Die tsconfig.json-Datei konfiguriert den Compiler" },
      ]},
      { title: "Ihr erster TypeScript-Code", content: [
        { type: "p", text: "Schreiben wir Ihren ersten TypeScript-Code. Beginnen Sie mit einer einfachen Variablendeklaration mit Typannotation." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "TypeScript ist JavaScript mit einem Typsystem" },
        { type: "li", text: "Es erkennt Fehler zur Compile-Zeit, nicht zur Laufzeit" },
        { type: "li", text: "Es kompiliert zu plain JavaScript via tsc" },
        { type: "li", text: "Jedes gültige JavaScript ist gültiges TypeScript" },
      ]}
    ],
    quiz: [
      { question: "Was ist TypeScript?", options: ["Ein Ersatz für JavaScript", "JavaScript mit einem Typsystem", "Ein CSS-Framework", "Eine Datenbanksprache"], explanation: "TypeScript ist JavaScript mit einem hinzugefügten Typsystem, entwickelt von Microsoft." },
      { question: "Wie läuft TypeScript im Browser?", options: ["Direkt", "Es wird zuerst zu JavaScript kompiliert", "Über ein spezielles Plugin", "Es läuft nicht in Browsern"], explanation: "TypeScript wird via tsc zu plain JavaScript kompiliert, bevor es im Browser läuft." },
      { question: "Was ist der Hauptvorteil von TypeScript?", options: ["Schnellere Ausführung", "Erkennt Fehler zur Compile-Zeit", "Kleinere Dateigrößen", "Besseres SEO"], explanation: "Der Hauptvorteil von TypeScript ist die Erkennung von Typfehlern zur Compile-Zeit." }
    ],
    challenge: { title: "Richten Sie Ihr erstes TypeScript-Projekt ein", description: "Installieren Sie TypeScript, erstellen Sie eine tsconfig.json, schreiben Sie eine einfache .ts-Datei mit Variablen verschiedener Typen und kompilieren Sie sie zu JavaScript." },
    cheatSheet: { title: "TypeScript Einführung Spickzettel", items: [
      { term: "npm install -g typescript", definition: "TypeScript global installieren" },
      { term: "tsc --init", definition: "TypeScript-Projekt initialisieren" },
      { term: "tsc file.ts", definition: "TypeScript zu JavaScript kompilieren" },
      { term: "tsconfig.json", definition: "TypeScript Compiler-Konfiguration" },
      { term: ": string", definition: "String-Typannotation" },
      { term: ": number", definition: "Number-Typannotation" },
      { term: ": boolean", definition: "Boolean-Typannotation" }
    ]}
  }
};
export default translations;
