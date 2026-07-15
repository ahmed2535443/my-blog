const translations = {
  ar: {
    sections: [
      { title: "ما هي Context API؟", content: [
        { type: "p", text: "Context API هو آلية تسمح لك بمشاركة البيانات بين المكونات <strong>دون تمرير الخصائص يدوياً</strong> في كل مستوى." },
        { type: "callout", title: "تشبيه بسيط", text: "Context مثل <strong>الراديو</strong>. بدلاً من أن ترسل رسالة لكل شخص على حدة (تمرير Props)، تُبث الرسالة عبر الراديوeveryone يستمع在同一时间. أي مكون يمكنه \"الاستماع\" للبيانات بدون تمرير يدوي." },
        { type: "p", text: "يحل مشكلة <strong>تنقل الخصائص (prop drilling)</strong> حيث يجب أن تمر البيانات عبر العديد من المكونات الوسيطة." },
        { type: "p", text: "فكّر في Context كـ \"حالة عامة\" يمكن لأي مكون الوصول إليها." },
      ]},
      { title: "لماذا تستخدم Context API؟", content: [
        { type: "li", text: "تجنب تنقل الخصائص عبر مكونات كثيرة" },
        { type: "li", text: "مشاركة بيانات عامة مثل السمة أو اللغة أو المصادقة" },
        { type: "li", text: "جعل البيانات متاحة لأي مكون في الشجرة" },
        { type: "li", text: "تبسيط إدارة الحالة للبيانات العامة" },
      ]},
      { title: "إنشاء Context", content: [
        { type: "p", text: "استخدم <code>createContext</code> لإنشاء كائن Context جديد. يمكنك توفير قيمة افتراضية." },
        { type: "callout", title: "مهم", text: "تُستخدم القيمة الافتراضية عندما لا يمتلك المكون مزوداً مطابقاً فوقه." },
      ]},
      { title: "توفير Context", content: [
        { type: "p", text: "استخدم مكون <code>Provider</code> لتفريغ أجزاء الشجرة التي تحتاج إلى الوصول إلى السياق." },
        { type: "p", text: "تحتوي خاصية <code>value</code> للمزود على البيانات المراد مشاركتها." },
      ]},
      { title: "استهلاك Context", content: [
        { type: "p", text: "استخدم خطاف <code>useContext</code> لاستهلاك السياق في مكونات الدالة." },
        { type: "p", text: "انقل كائن السياق إلى useContext وسيرجع القيمة الحالية." },
      ]},
      { title: "Context مع useReducer", content: [
        { type: "p", text: "اجمع Context مع <code>useReducer</code> لإدارة الحالة المعقدة، مشابهاً لـ Redux." },
        { type: "li", text: "يدير useReducer منطق الحالة المعقدة" },
        { type: "li", text: "يوفر Context الحالة والتحويل إلى جميع المكونات" },
        { type: "li", text: "مثالي للتطبيقات متوسطة الحجم" },
      ]},
    ],
    quiz: [
      { question: "أي مشكلة تحل Context API؟", options: ["مشاكل الأداء", "تنقل الخصائص", "تسريب الذاكرة", "مشاكل التنسيق"], correctAnswer: 1, explanation: "تحل Context API مشكلة تنقل الخصائص بتمرير البيانات دون المرور بكل مكون وسيط." },
      { question: "كيف تنشئ Context؟", options: ["useContext()", "createContext()", "new Context()", "Context.create()"], correctAnswer: 1, explanation: "استخدم createContext() لإنشاء كائن Context جديد." },
      { question: "كيف تستهلك Context في مكون دالة؟", options: ["this.context", "useContext()", "Context.Consumer", "getContext()"], correctAnswer: 1, explanation: "استخدم خطاف useContext لاستهلاك السياق في مكونات الدالة." },
      { question: "ماذا تحتوي خاصية value في Provider؟", options: ["شجرة المكونات", "البيانات المراد مشاركتها", "مُحوّل الحالة", "اسم السياق"], correctAnswer: 1, explanation: "تحتوي خاصية value على البيانات التي سيتم مشاركتها مع جميع المكونات المستهلكة." },
      { question: "متى تُستخدم القيمة الافتراضية لـ createContext؟", options: ["دائماً", "عند عدم وجود مزود أعلى", "عندما لا يمتلك المزود قيمة", "أبداً"], correctAnswer: 1, explanation: "تُستخدم القيمة الافتراضية عندما لا يمتلك المكون مزوداً مطابقاً فوقه في الشجرة." },
    ],
    challenge: { title: "ابنِ مُبدّل السمة", description: "أنشئ سياق سمة يسمح بالتبديل بين السمات الفاتحة والداكنة عبر التطبيق." },
    cheatSheet: { title: "ملخص Context API", columns: [
      { heading: "إنشاء Context:", items: ['const ThemeContext = createContext("light");'] },
      { heading: "توفير Context:", items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'] },
      { heading: "استهلاك Context:", items: ['const theme = useContext(ThemeContext);'] },
    ]},
    interviewQuestions: [
      { question: "متى تستخدم Context بدلاً من Props العادية؟", answer: "عندما تحتاج لتمرير بيانات عبر العديد من مستويات المكونات.", difficulty: "medium" },
      { question: "ما هو prop drilling؟", answer: "تمرير Props عبر مكونات لا تحتاجها فقط لتوصيلها بمكون أعمق.", difficulty: "easy" },
      { question: "متى لا تستخدم Context؟", answer: "للحالة المتغيرة بسرعة — يسبب إعادة عرض غير ضرورية.", difficulty: "hard" },
    ],
    tricks: [
      { title: "افصل السياقات", description: "لا تضع كل شيء في سياق واحد. افصل بين السمة والمصادقة والترجمة.", icon: "brain" },
    ]
  },
  en: {
    sections: [
      { title: "What is Context API?", content: [
        { type: "p", text: "Context API is a mechanism that lets you share data between components <strong>without passing props manually</strong> at every level." },
        { type: "callout", title: "Simple Analogy", text: "Context is like a <strong>radio</strong>. Instead of sending a message to each person individually (passing Props), you broadcast the message via radio — everyone listens at the same time. Any component can listen to the data without manual passing." },
        { type: "p", text: "It solves the <strong>prop drilling</strong> problem where data has to pass through many intermediate components." },
        { type: "p", text: "Think of Context as a \"global state\" that any component can access." },
      ]},
      { title: "Why Use Context API?", content: [
        { type: "li", text: "Avoid prop drilling through many components" },
        { type: "li", text: "Share global data like theme, language, or authentication" },
        { type: "li", text: "Make data accessible to any component in the tree" },
        { type: "li", text: "Simplify state management for global data" },
      ]},
      { title: "Creating Context", content: [
        { type: "p", text: "Use <code>createContext</code> to create a new Context object. You can provide a default value." },
        { type: "callout", title: "Important", text: "The default value is used when a component doesn't have a matching Provider above it." },
      ]},
      { title: "Providing Context", content: [
        { type: "p", text: "Use the <code>Provider</code> component to wrap the parts of the tree that need access to the context." },
        { type: "p", text: "The <code>value</code> prop of the Provider contains the data to share." },
      ]},
      { title: "Consuming Context", content: [
        { type: "p", text: "Use the <code>useContext</code> hook to consume context in functional components." },
        { type: "p", text: "Pass the context object to useContext and it returns the current value." },
      ]},
      { title: "Context with useReducer", content: [
        { type: "p", text: "Combine Context with <code>useReducer</code> for complex state management, similar to Redux." },
        { type: "li", text: "useReducer manages complex state logic" },
        { type: "li", text: "Context provides the state and dispatch to all components" },
        { type: "li", text: "Perfect for medium-sized applications" },
      ]},
    ],
    quiz: [
      { question: "What problem does Context API solve?", options: ["Performance issues", "Prop drilling", "Memory leaks", "Styling problems"], correctAnswer: 1, explanation: "Context API solves prop drilling by allowing data to be passed without going through every intermediate component." },
      { question: "How do you create a Context?", options: ["useContext()", "createContext()", "new Context()", "Context.create()"], correctAnswer: 1, explanation: "Use createContext() to create a new Context object." },
      { question: "How do you consume Context in a functional component?", options: ["this.context", "useContext()", "Context.Consumer", "getContext()"], correctAnswer: 1, explanation: "Use the useContext hook to consume context in functional components." },
      { question: "What does the Provider's value prop contain?", options: ["The component tree", "The data to share", "The state reducer", "The context name"], correctAnswer: 1, explanation: "The value prop contains the data that will be shared with all consuming components." },
      { question: "When is the default value of createContext used?", options: ["Always", "When there's no Provider above", "When the Provider has no value", "Never"], correctAnswer: 1, explanation: "The default value is used when a component doesn't have a matching Provider above it in the tree." },
    ],
    challenge: { title: "Build a Theme Switcher", description: "Create a theme context that allows switching between light and dark themes across the app." },
    cheatSheet: { title: "Context API Cheat Sheet", columns: [
      { heading: "Create Context:", items: ['const ThemeContext = createContext("light");'] },
      { heading: "Provide Context:", items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'] },
      { heading: "Consume Context:", items: ['const theme = useContext(ThemeContext);'] },
    ]},
    interviewQuestions: [
      { question: "When do you use Context instead of regular Props?", answer: "When you need to pass data through many levels of components.", difficulty: "medium" },
      { question: "What is prop drilling?", answer: "Passing Props through components that do not need them just to reach a deeper component.", difficulty: "easy" },
      { question: "When should you not use Context?", answer: "For rapidly changing state — it causes unnecessary re-renders.", difficulty: "hard" },
    ],
    tricks: [
      { title: "Separate your contexts", description: "Do not put everything in one context. Separate theme, authentication, and translation.", icon: "brain" },
    ]
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que l'API Context ?", content: [
        { type: "p", text: "L'API Context est un mécanisme qui permet de partager des données entre composants <strong>sans passer les props manuellement</strong>." },
      ]},
      { title: "Pourquoi utiliser l'API Context ?", content: [
        { type: "li", text: "Éviter le prop drilling" },
        { type: "li", text: "Partager des données globales comme le thème ou la langue" },
      ]},
    ],
    quiz: [
      { question: "Quel problème résout l'API Context ?", options: ["Les problèmes de performance", "Le prop drilling", "Les fuites mémoire", "Les problèmes de style"], correctAnswer: 1, explanation: "L'API Context résout le prop drilling." },
    ],
    challenge: { title: "Défi : changeur de thème", description: "Créez un contexte de thème pour basculer entre les modes clair et sombre." },
    cheatSheet: { title: "Référence de l'API Context", columns: [
      { heading: "Créer un Context:", items: ['const ThemeContext = createContext("light");'] },
      { heading: "Fournir le Context:", items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'] },
      { heading: "Consommer le Context:", items: ['const theme = useContext(ThemeContext);'] },
    ]},
  },
  de: {
    sections: [
      { title: "Was ist die Context API?", content: [
        { type: "p", text: "Die Context API ist ein Mechanismus, mit dem Daten zwischen Komponenten geteilt werden können, <strong>ohne Props manuell weiterzureichen</strong>." },
      ]},
      { title: "Warum die Context API verwenden?", content: [
        { type: "li", text: "Prop drilling vermeiden" },
        { type: "li", text: "Globale Daten wie Thema oder Sprache teilen" },
      ]},
    ],
    quiz: [
      { question: "Welches Problem löst die Context API?", options: ["Performance-Probleme", "Prop drilling", "Speicherlecks", "Styling-Probleme"], correctAnswer: 1, explanation: "Die Context API löst das Problem des Prop Drilling." },
    ],
    challenge: { title: "Herausforderung: Theme-Umschalter", description: "Erstellen Sie einen Theme-Kontext zum Umschreiben zwischen hellem und dunklem Modus." },
    cheatSheet: { title: "Context API Übersicht", columns: [
      { heading: "Context erstellen:", items: ['const ThemeContext = createContext("light");'] },
      { heading: "Context bereitstellen:", items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'] },
      { heading: "Context konsumieren:", items: ['const theme = useContext(ThemeContext);'] },
    ]},
  },
};

export default translations;
