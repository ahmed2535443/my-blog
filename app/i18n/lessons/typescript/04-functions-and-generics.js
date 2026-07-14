const translations = {
  ar: {
    sections: [
      { title: "أنواع الدوال", content: [
        { type: "p", text: "في TypeScript، يمكنك كتابة المعاملات وقيمة الإرجاع للدوال:" },
        { type: "code", text: "function add(a: number, b: number): number {\n  return a + b;\n}\n\nconst result = add(5, 3); // 8" },
      ]},
      { title: "المعاملات الاختيارية والافتراضية", content: [
        { type: "p", text: "يمكن أن يكون لدى الدوال معاملات اختيارية وقيم افتراضية:" },
        { type: "code", text: "function greet(name: string, greeting: string = 'Hello'): string {\n  return `${greeting}, ${name}!`;\n}\n\ngreet('Ahmed');           // 'Hello, Ahmed!'\ngreet('Salaam', 'Salaam'); // 'Salaam, Salaam!'" },
      ]},
      { title: "الدوال السهمية", content: [
        { type: "p", text: "تدعم الدوال السهمية أيضاً تعليقات الأنواع:" },
        { type: "code", text: "const multiply = (a: number, b: number): number => a * b;\n\nconst double = (x: number): number => x * 2;" },
      ]},
      { title: "إحلال الدوال", content: [
        { type: "p", text: "يسمح إحلال الدوال للدالة بقبول أنواع مختلفة من المعاملات:" },
        { type: "code", text: "function format(value: string): string;\nfunction format(value: number): string;\nfunction format(value: string | number): string {\n  if (typeof value === 'string') return value;\n  return value.toFixed(2);\n}" },
      ]},
      { title: "الدوال العامة", content: [
        { type: "p", text: "تُمكّنك العامة من كتابة دوال تعمل مع أي نوع مع الحفاظ على أمان النوع:" },
        { type: "code", text: "function identity<T>(arg: T): T {\n  return arg;\n}\n\nconst num = identity<number>(42);    // 42\nconst str = identity<string>('hello'); // 'hello'" },
        { type: "callout", title: "لماذا العامة؟", text: "تُمكّنك العامة من كتابة دوال قابلة لإعادة الاستخدام دون فقدان معلومات النوع. يُحدد النوع عند استدعاء الدالة." },
      ]},
      { title: "حارس النوع", content: [
        { type: "p", text: "يساعد حارس النوع على تضييق الأنواع داخل الكتل الشرطية:" },
        { type: "code", text: "function process(value: string | number) {\n  if (typeof value === 'string') {\n    return value.toUpperCase();\n  }\n  return value.toFixed(2);\n}" },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "يمكن أن يكون للدوال معاملات وقيم إرجاع مكتوبة بنوع" },
        { type: "li", text: "تستخدم المعاملات الاختيارية ? والقيم الافتراضية =" },
        { type: "li", text: "تدعم الدوال السهمية تعليقات الأنواع" },
        { type: "li", text: "تتعامل إحلال الدوال مع أنواع معاملات متعددة" },
        { type: "li", text: "تكتب العامة دوال آمنة النوع قابلة لإعادة الاستخدام" },
        { type: "li", text: "يضيق حارس النوع الأنواع في الكتل الشرطية" },
      ]}
    ],
    quiz: [
      { question: "كيف تكتب نوعاً لمعامل الدالة؟", options: ["param: type", "type param", "(type) param", "param as type"], explanation: "تُكتب معاملات الدوال بالصيغة paramName: type." },
      { question: "ما هي فائدة العامة؟", options: ["تنفيذ أسرع", "دوال قابلة لإعادة الاستخدام آمنة النوع", "حجم كود أصغر", "أداء أفضل"], explanation: "تُمكّنك العامة من كتابة دوال قابلة لإعادة الاستخدام تحافظ على أمان النوع لأي نوع." },
      { question: "كيف تُحدّد قيمة معامل افتراضية؟", options: ["param = value", "param: value", "param ? value", "default param value"], explanation: "تُحدد المعاملات الافتراضية بالصيغة paramName = defaultValue." }
    ],
    challenge: { title: "بناء دوال أداة", description: "أنشئ دوال أداة عامة: identity، first، last، zip. اختبرها بأنواع مختلفة للتحقق من أمان النوع." },
    cheatSheet: { title: "ملخص الدوال والعامة", items: [
      { term: "function name(p: type): type", definition: "إعلان دالة مكتوبة بنوع" },
      { term: "param?: type", definition: "معامل اختياري" },
      { term: "param = value", definition: "قيمة معامل افتراضية" },
      { term: "const fn = (p: type): type =>", definition: "دالة سهمية مكتوبة بنوع" },
      { term: "<T>", definition: "معامل نوع عام" },
      { term: "إحلال الدالة", definition: "توقيعات نوع متعددة" },
      { term: "typeof value === 'string'", definition: "حارس نوع" }
    ]}
  },
  en: {
    sections: [
      { title: "Function Types", content: [
        { type: "p", text: "In TypeScript, you can type both the parameters and the return value of functions:" },
        { type: "code", text: "function add(a: number, b: number): number {\n  return a + b;\n}\n\nconst result = add(5, 3); // 8" },
      ]},
      { title: "Optional and Default Parameters", content: [
        { type: "p", text: "Functions can have optional parameters and default values:" },
        { type: "code", text: "function greet(name: string, greeting: string = 'Hello'): string {\n  return `${greeting}, ${name}!`;\n}\n\ngreet('Ahmed');           // 'Hello, Ahmed!'\ngreet('Salaam', 'Salaam'); // 'Salaam, Salaam!'" },
      ]},
      { title: "Arrow Functions", content: [
        { type: "p", text: "Arrow functions also support type annotations:" },
        { type: "code", text: "const multiply = (a: number, b: number): number => a * b;\n\nconst double = (x: number): number => x * 2;" },
      ]},
      { title: "Function Overloads", content: [
        { type: "p", text: "Function overloads allow a function to accept different types of arguments:" },
        { type: "code", text: "function format(value: string): string;\nfunction format(value: number): string;\nfunction format(value: string | number): string {\n  if (typeof value === 'string') return value;\n  return value.toFixed(2);\n}" },
      ]},
      { title: "Generic Functions", content: [
        { type: "p", text: "Generics allow you to write functions that work with any type while maintaining type safety:" },
        { type: "code", text: "function identity<T>(arg: T): T {\n  return arg;\n}\n\nconst num = identity<number>(42);    // 42\nconst str = identity<string>('hello'); // 'hello'" },
        { type: "callout", title: "Why Generics?", text: "Generics let you write reusable functions without losing type information. The type is determined when you call the function." },
      ]},
      { title: "Type Guards", content: [
        { type: "p", text: "Type guards help narrow down types within conditional blocks:" },
        { type: "code", text: "function process(value: string | number) {\n  if (typeof value === 'string') {\n    return value.toUpperCase();\n  }\n  return value.toFixed(2);\n}" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Functions can have typed parameters and return values" },
        { type: "li", text: "Optional parameters use ? and default values use =" },
        { type: "li", text: "Arrow functions support type annotations" },
        { type: "li", text: "Function overloads handle multiple argument types" },
        { type: "li", text: "Generics write type-safe reusable functions" },
        { type: "li", text: "Type guards narrow types in conditional blocks" },
      ]}
    ],
    quiz: [
      { question: "How do you type a function parameter?", options: ["param: type", "type param", "(type) param", "param as type"], explanation: "Function parameters are typed with the syntax paramName: type." },
      { question: "What is the benefit of generics?", options: ["Faster execution", "Reusable type-safe functions", "Smaller code size", "Better performance"], explanation: "Generics let you write reusable functions that maintain type safety for any type." },
      { question: "How do you specify a default parameter value?", options: ["param = value", "param: value", "param ? value", "default param value"], explanation: "Default parameters are specified with paramName = defaultValue." }
    ],
    challenge: { title: "Build Utility Functions", description: "Create generic utility functions: identity, first, last, zip. Test them with different types to verify type safety." },
    cheatSheet: { title: "Functions and Generics Cheat Sheet", items: [
      { term: "function name(p: type): type", definition: "Typed function declaration" },
      { term: "param?: type", definition: "Optional parameter" },
      { term: "param = value", definition: "Default parameter value" },
      { term: "const fn = (p: type): type =>", definition: "Typed arrow function" },
      { term: "<T>", definition: "Generic type parameter" },
      { term: "function overload", definition: "Multiple type signatures" },
      { term: "typeof value === 'string'", definition: "Type guard" }
    ]}
  },
  fr: {
    sections: [
      { title: "Types de fonctions", content: [
        { type: "p", text: "En TypeScript, vous pouvez typer les paramètres et la valeur de retour des fonctions." },
      ]},
      { title: "Paramètres optionnels et par défaut", content: [
        { type: "p", text: "Les fonctions peuvent avoir des paramètres optionnels et des valeurs par défaut." },
      ]},
      { title: "Fonctions fléchées", content: [
        { type: "p", text: "Les fonctions fléchées supportent également les annotations de type." },
      ]},
      { title: "Surcharge de fonctions", content: [
        { type: "p", text: "La surcharge de fonctions permet à une fonction d'accepter différents types d'arguments." },
      ]},
      { title: "Fonctions génériques", content: [
        { type: "p", text: "Les generics permettent d'écrire des fonctions qui fonctionnent avec tout type tout en maintenant la sécurité de type." },
      ]},
      { title: "Gardiens de type", content: [
        { type: "p", text: "Les type guards aident à réduire les types dans les blocs conditionnels." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Les fonctions peuvent avoir des paramètres et valeurs de retour typés" },
        { type: "li", text: "Les generics écrivent des fonctions réutilisables et sûres" },
        { type: "li", text: "Les type guards réduisent les types dans les blocs conditionnels" },
      ]}
    ],
    quiz: [
      { question: "Comment typer un paramètre de fonction ?", options: ["param: type", "type param", "(type) param", "param as type"], explanation: "Les paramètres de fonction sont typés avec la syntaxe paramName: type." },
      { question: "Quel est l'avantage des generics ?", options: ["Exécution plus rapide", "Fonctions réutilisables et sûres", "Taille de code réduite", "Meilleure performance"], explanation: "Les generics permettent d'écrire des fonctions réutilisables qui maintiennent la sécurité de type." },
      { question: "Comment spécifier une valeur par défaut ?", options: ["param = value", "param: value", "param ? value", "default param value"], explanation: "Les paramètres par défaut sont spécifiés avec paramName = defaultValue." }
    ],
    challenge: { title: "Construire des fonctions utilitaires", description: "Créez des fonctions génériques utilitaires : identity, first, last, zip. Testez-les avec différents types." },
    cheatSheet: { title: "Fiche mémo Fonctions et Generics", items: [
      { term: "function name(p: type): type", definition: "Déclaration de fonction typée" },
      { term: "param?: type", definition: "Paramètre optionnel" },
      { term: "param = value", definition: "Valeur par défaut" },
      { term: "<T>", definition: "Paramètre de type générique" },
      { term: "surcharge de fonction", definition: "Signatures multiples" },
      { term: "typeof value === 'string'", definition: "Type guard" }
    ]}
  },
  de: {
    sections: [
      { title: "Funktionstypen", content: [
        { type: "p", text: "In TypeScript können Sie sowohl die Parameter als auch den Rückgabewert von Funktionen typisieren." },
      ]},
      { title: "Optionale und Standardparameter", content: [
        { type: "p", text: "Funktionen können optionale Parameter und Standardwerte haben." },
      ]},
      { title: "Arrow Functions", content: [
        { type: "p", text: "Arrow Functions unterstützen ebenfalls Typannotationen." },
      ]},
      { title: "Funktionsüberladung", content: [
        { type: "p", text: "Funktionsüberladung erlaubt es einer Funktion, verschiedene Argumenttypen zu akzeptieren." },
      ]},
      { title: "Generische Funktionen", content: [
        { type: "p", text: "Generics ermöglichen es Ihnen, Funktionen zu schreiben, die mit jedem Typ funktionieren und dabei Typsicherheit beibehalten." },
      ]},
      { title: "Type Guards", content: [
        { type: "p", text: "Type Guards helfen, Typen in bedingten Blöcken einzugrenzen." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Funktionen können getypte Parameter und Rückgabewerte haben" },
        { type: "li", text: "Generics schreiben wiederverwendbare typsichere Funktionen" },
        { type: "li", text: "Type Guards schränken Typen in bedingten Blöcken ein" },
      ]}
    ],
    quiz: [
      { question: "Wie typisiert man einen Funktionsparameter?", options: ["param: type", "type param", "(type) param", "param as type"], explanation: "Funktionsparameter werden mit der Syntax paramName: type typisiert." },
      { question: "Was ist der Vorteil von Generics?", options: ["Schnellere Ausführung", "Wiederverwendbare typsichere Funktionen", "Kleinere Codegröße", "Bessere Leistung"], explanation: "Generics ermöglichen es Ihnen, wiederverwendbare Funktionen zu schreiben, die Typsicherheit beibehalten." },
      { question: "Wie gibt man einen Standardparameterwert an?", options: ["param = value", "param: value", "param ? value", "default param value"], explanation: "Standardparameter werden mit paramName = defaultValue angegeben." }
    ],
    challenge: { title: "Utility-Funktionen erstellen", description: "Erstellen Sie generische Utility-Funktionen: identity, first, last, zip. Testen Sie sie mit verschiedenen Typen." },
    cheatSheet: { title: "Funktionen und Generics Spickzettel", items: [
      { term: "function name(p: type): type", definition: "Getypte Funktionsdeklaration" },
      { term: "param?: type", definition: "Optionaler Parameter" },
      { term: "param = value", definition: "Standardparameterwert" },
      { term: "<T>", definition: "Generischer Typparameter" },
      { term: "Funktionsüberladung", definition: "Mehrere Typsignaturen" },
      { term: "typeof value === 'string'", definition: "Type Guard" }
    ]}
  }
};
export default translations;
