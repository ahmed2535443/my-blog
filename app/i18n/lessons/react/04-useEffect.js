const translations = {
  ar: {
    sections: [
      { title: "ما هو useEffect؟", content: [
        { type: "p", text: "<code>useEffect</code> هو خطاف يسمح لك بتشغيل <strong>التأثيرات الجانبية</strong> في مكونات الدالة. ينفذ العمليات بعد العرض." },
        { type: "callout", title: "تشبيه بسيط", text: "useEffect مثل <strong>البريد الوارد</strong>. كلما وصل بريد جديد (تغيير في التبعيات)، تفتح الصندوق (تنفذ الدالة). إذا حدّدت شروطاً (مصفوفة التبعيات)، فتح الصندوق فقط عندما تتحقق الشروط. بدون شروط، تفتحه كل مرة." },
        { type: "p", text: "التأثيرات الجانبية هي عمليات مثل: جلب البيانات من API، إعداد اشتراكات، مؤقتات، أو تعديل DOM مباشر." },
        { type: "p", text: "الصيغة الأساسية: <code>useEffect(() => {}, [])</code>" },
      ]},
      { title: "مصفوفة التبعيات", content: [
        { type: "p", text: "المعامل الثاني لـ <code>useEffect</code> هو <strong>مصفوفة التبعيات</strong> التي تتحكم في متى يُنفذ التأثير." },
        { type: "li", text: "<strong>بدون مصفوفة:</strong> يُنفذ بعد كل عرض" },
        { type: "li", text: "<strong>مصفوفة فارغة []:</strong> يُنفذ مرة واحدة فقط عند العرض الأول" },
        { type: "li", text: "<strong>مع تبعيات [dep1, dep2]:</strong> يُنفذ عند تغيير التبعيات" },
      ]},
      { title: "جلب البيانات", content: [
        { type: "p", text: "واحدة من أكثر استخدامات <code>useEffect</code> شيوعاً هي جلب البيانات من API." },
        { type: "callout", title: "مهم", text: "تعامل دائماً مع حالات التحميل والأخطاء عند جلب البيانات." },
      ]},
      { title: "دالة التنظيف", content: [
        { type: "p", text: "يمكن لـ useEffect إرجاع <strong>دالة تنظيف</strong> تُنفذ قبل إعادة تشغيل التأثير أو عند فك تثبيت المكون." },
        { type: "p", text: "هذا ضروري لتنظيف الاشتراكات أو المؤقتات أو مستمعي الأحداث." },
      ]},
      { title: "الأخطاء الشائعة", content: [
        { type: "li", text: "مصفوفة تبعيات مفقودة - تسبب حلقة لا نهائية" },
        { type: "li", text: "عدم تضمين جميع التبعيات في المصفوفة" },
        { type: "li", text: "استخدام الدوال غير المتزامنة مباشرة في useEffect" },
        { type: "li", text: "نسيان تنظيف التأثيرات الجانبية" },
      ]},
    ],
    quiz: [
      { question: "متى يُنفذ useEffect بمصفوفة تبعيات فارغة []؟", options: ["بعد كل عرض", "مرة واحدة فقط عند العرض الأول", "أبداً", "فقط عند تغيير الحالة"], correctAnswer: 1, explanation: "مصفوفة التبعيات الفارغة تعني أن التأثير يُنفذ مرة واحدة فقط بعد العرض الأولي." },
      { question: "ما هو الغرض من دالة التنظيف في useEffect؟", options: ["تعيين الحالة الأولية", "تنظيف التأثيرات الجانبية قبل إعادة التشغيل أو فك التثبيت", "تحديث DOM", "جلب البيانات"], correctAnswer: 1, explanation: "تُنفذ دالة التنظيف قبل إعادة تشغيل التأثير أو عند فك تثبيت المكون." },
      { question: "لماذا لا يجب استخدام الدوال غير المتزامنة مباشرة في useEffect؟", options: ["React لا يدعم غير المتزامن", "useEffect يتوقع إما لا شيء أو دالة تنظيف كقيمة إرجاع", "الدوال غير المتزامنة أبطأ", "تسبب تسريب الذاكرة"], correctAnswer: 1, explanation: "يتوقع useEffect إما لا شيء أو دالة تنظيف كقيمة إرجاع. الدوال غير المتزامنة تُرجع Promises." },
      { question: "ماذا يحدث إذا نسيت مصفوفة التبعيات؟", options: ["يُنفذ التأثير مرة واحدة فقط", "يُنفذ التأثير بعد كل عرض", "لا يُنفذ التأثير أبداً", "يتوقف المكون"], correctAnswer: 1, explanation: "بدون مصفوفة تبعيات، يُنفذ useEffect بعد كل عرض، مما قد يسبب مشاكل في الأداء." },
    ],
    challenge: { title: "ابنِ أداة جلب بيانات", description: "أنشئ مكوناً يجلب ويعرض البيانات من API مع حالات التحميل والأخطاء." },
    cheatSheet: { title: "ملخص useEffect", columns: [
      { heading: "الصيغة الأساسية:", items: ['useEffect(() => {}, [])'] },
      { heading: "مع التنظيف:", items: ['useEffect(() => { const sub = subscribe(); return () => sub.unsubscribe(); }, [])'] },
    ]},
    interviewQuestions: [
      { question: "متى يُنفذ useEffect بدون مصفوفة تبعيات؟", answer: "بعد كل عرض — هذا نادراً ما يكون مطلوباً وسبب شائع للأخطاء.", difficulty: "medium" },
      { question: "لماذا نحتاج دالة التنظيف؟", answer: "لتنظيف الاشتراكات أو المؤقتات عند فك تثبيت المكون لتجنب تسريب الذاكرة.", difficulty: "medium" },
      { question: "ما الفرق بين [] و [dep] في مصفوفة التبعيات؟", answer: "فارغة [] = مرة واحدة فقط. [dep] = عند تغيير dep.", difficulty: "easy" },
    ],
    tricks: [
      { title: "اجمع التبعيات دائماً", description: "نسيان تبعية يسبب أخطاء صعبة الاكتشاف. استخدم ESLint plugin.", icon: "brain" },
      { title: "لا تجعل async useEffect", description: "استخدم دالة async منفصلة داخل useEffect بدلاً من جعل التأثير async مباشرة", icon: "zap" },
    ]
  },
  en: {
    sections: [
      { title: "What is useEffect?", content: [
        { type: "p", text: "<code>useEffect</code> is a Hook that lets you run <strong>side effects</strong> in function components. It performs operations after rendering." },
        { type: "callout", title: "Simple Analogy", text: "useEffect is like your inbox. Every time new mail arrives (a dependency changes), you open the box (run the function). If you set conditions (dependency array), you only open when conditions are met. Without conditions, you open it every time." },
        { type: "p", text: "Side effects are operations like: fetching data from an API, setting up subscriptions, timers, or direct DOM manipulation." },
        { type: "p", text: "The basic syntax: <code>useEffect(() => {}, [])</code>" },
      ]},
      { title: "Dependency Array", content: [
        { type: "p", text: "The second argument to <code>useEffect</code> is the <strong>dependency array</strong> that controls when the effect runs." },
        { type: "li", text: "<strong>No array:</strong> Runs after every render" },
        { type: "li", text: "<strong>Empty array []:</strong> Runs only once on first render" },
        { type: "li", text: "<strong>With dependencies [dep1, dep2]:</strong> Runs when dependencies change" },
      ]},
      { title: "Fetching Data", content: [
        { type: "p", text: "One of the most common uses of <code>useEffect</code> is fetching data from an API." },
        { type: "callout", title: "Important", text: "Always handle loading and error states when fetching data." },
      ]},
      { title: "Cleanup Function", content: [
        { type: "p", text: "UseEffect can return a <strong>cleanup function</strong> that runs before the effect re-runs or when the component unmounts." },
        { type: "p", text: "This is essential for cleaning up subscriptions, timers, or event listeners." },
      ]},
      { title: "Common Mistakes", content: [
        { type: "li", text: "Missing dependency array - causes infinite loop" },
        { type: "li", text: "Not including all dependencies in the array" },
        { type: "li", text: "Using async functions directly in useEffect" },
        { type: "li", text: "Forgetting to clean up side effects" },
      ]},
    ],
    quiz: [
      { question: "When does useEffect run with an empty dependency array []?", options: ["After every render", "Only once on first render", "Never", "Only when state changes"], correctAnswer: 1, explanation: "An empty dependency array means the effect runs only once after the initial render." },
      { question: "What is the purpose of the cleanup function in useEffect?", options: ["To set initial state", "To clean up side effects before re-running or unmounting", "To update the DOM", "To fetch data"], correctAnswer: 1, explanation: "The cleanup function runs before the effect re-runs or when the component unmounts." },
      { question: "Why should you not use async functions directly in useEffect?", options: ["React doesn't support async", "useEffect expects either nothing or a cleanup function as return", "Async functions are slower", "It causes memory leaks"], correctAnswer: 1, explanation: "useEffect expects either nothing or a cleanup function as its return value. Async functions return Promises." },
      { question: "What happens if you forget the dependency array?", options: ["Effect runs only once", "Effect runs after every render", "Effect never runs", "Component crashes"], correctAnswer: 1, explanation: "Without a dependency array, useEffect runs after every render, which can cause performance issues." },
    ],
    challenge: { title: "Build a Data Fetcher", description: "Create a component that fetches and displays data from an API with loading and error states." },
    cheatSheet: { title: "useEffect Cheat Sheet", columns: [
      { heading: "Basic Syntax:", items: ['useEffect(() => {}, [])'] },
      { heading: "With Cleanup:", items: ['useEffect(() => { const sub = subscribe(); return () => sub.unsubscribe(); }, [])'] },
    ]},
    interviewQuestions: [
      { question: "When does useEffect run without a dependency array?", answer: "After every render — this is rarely needed and is a common source of bugs.", difficulty: "medium" },
      { question: "Why do we need the cleanup function?", answer: "To clean up subscriptions or timers when unmounting the component to prevent memory leaks.", difficulty: "medium" },
      { question: "What is the difference between [] and [dep] in the dependency array?", answer: "Empty [] = runs only once. [dep] = runs when dep changes.", difficulty: "easy" },
    ],
    tricks: [
      { title: "Always include dependencies", description: "Missing a dependency causes hard-to-find bugs. Use the ESLint plugin.", icon: "brain" },
      { title: "Do not make async useEffect", description: "Use a separate async function inside useEffect instead of making the effect directly async", icon: "zap" },
    ]
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que useEffect ?", content: [
        { type: "p", text: "<code>useEffect</code> est un Hook qui vous permet d'exécuter des <strong>effets secondaires</strong> dans les composants fonctionnels." },
      ]},
      { title: "Tableau de dépendances", content: [
        { type: "p", text: "Le second argument de <code>useEffect</code> est le <strong>tableau de dépendances</strong> qui contrôle quand l'effet s'exécute." },
      ]},
    ],
    quiz: [
      { question: "Quand useEffect s'exécute-t-il avec un tableau de dépendances vide [] ?", options: ["Après chaque rendu", "Une seule fois au premier rendu", "Jamais", "Uniquement quand l'état change"], correctAnswer: 1, explanation: "Un tableau vide signifie que l'effet ne s'exécute qu'une seule fois après le rendu initial." },
    ],
    challenge: { title: "Défi : Récupérateur de données", description: "Créez un composant qui récupère et affiche des données depuis une API." },
    cheatSheet: { title: "Référence de useEffect", columns: [
      { heading: "Syntaxe de base:", items: ['useEffect(() => {}, [])'] },
    ]},
  },
  de: {
    sections: [
      { title: "Was ist useEffect?", content: [
        { type: "p", text: "<code>useEffect</code> ist ein Hook, mit dem Sie <strong>Nebeneffekte</strong> in Funktionskomponenten ausführen können." },
      ]},
      { title: "Abhängigkeits-Array", content: [
        { type: "p", text: "Das zweite Argument von <code>useEffect</code> ist das <strong>Abhängigkeits-Array</strong>, das steuert, wann der Effekt ausgeführt wird." },
      ]},
    ],
    quiz: [
      { question: "Wann führt useEffect mit einem leeren Abhängigkeits-Array [] aus?", options: ["Nach jedem Rendering", "Nur einmal beim ersten Rendering", "Nie", "Nur bei State-Änderungen"], correctAnswer: 1, explanation: "Ein leeres Array bedeutet, dass der Effekt nur einmal nach dem initialen Rendering ausgeführt wird." },
    ],
    challenge: { title: "Herausforderung: Datenabruf-Komponente", description: "Erstellen Sie eine Komponente, die Daten von einer API abruft und anzeigt." },
    cheatSheet: { title: "useEffect Übersicht", columns: [
      { heading: "Grundsyntax:", items: ['useEffect(() => {}, [])'] },
    ]},
  },
};

export default translations;
