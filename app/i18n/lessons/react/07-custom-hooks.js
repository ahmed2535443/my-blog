const translations = {
  ar: {
    sections: [
      { title: "ما هي الخطافات المخصصة؟", content: [
        { type: "p", text: "الخطافات المخصصة هي دوال JavaScript تبدأ بـ <code>use</code> ويمكنها استخدام خطافات أخرى داخلها." },
        { type: "p", text: "تسمح لك باستخراج منطق المكون في دوال قابلة لإعادة الاستخدام، وتجنب تكرار الكود." },
        { type: "p", text: "الخطافات المخصصة هي طريقة لإعادة استخدام المنطق الم满的状态 بين مكونات مختلفة." },
      ]},
      { title: "لماذا تنشئ خطافات مخصصة؟", content: [
        { type: "li", text: "إعادة استخدام المنطق عبر مكونات متعددة" },
        { type: "li", text: "استخراج المنطق المعقد من المكونات" },
        { type: "li", text: "جعل الكود أكثر وضوحاً وقابلية للصيانة" },
        { type: "li", text: "تغليف التأثيرات الجانبية ومنطق الحالة" },
      ]},
      { title: "اتفاقية التسمية", content: [
        { type: "p", text: "يجب أن تبدأ الخطافات المخصصة بكلمة <code>use</code> (مثل useCounter و useFetch و useLocalStorage)." },
        { type: "callout", title: "مهم", text: "هذه الاتفاقية تخبر React بأن الدالة تتبع قواعد الخطافات." },
      ]},
      { title: "مثال: خطاف useCounter", content: [
        { type: "p", text: "خطاف بسيط يغلف منطق العداد: الحالة، الزائد، الناقص، وإعادة التعيين." },
        { type: "li", text: "يدير حالة العدد داخلياً" },
        { type: "li", text: "يكشف دوال الزائد والناقص وإعادة التعيين" },
        { type: "li", text: "يُرجع قيمة العدد الحالية" },
      ]},
      { title: "مثال: خطاف useFetch", content: [
        { type: "p", text: "خطاف يغلف منطق جلب البيانات مع حالات التحميل والأخطاء." },
        { type: "li", text: "يدير بيانات وحالات التحميل والأخطاء" },
        { type: "li", text: "يجلب البيانات من رابط URL" },
        { type: "li", text: "يُرجع جميع الحالات لاستخدامها من قبل المكون" },
      ]},
      { title: "قواعد الخطافات المخصصة", content: [
        { type: "li", text: "يجب أن تبدأ بكلمة 'use'" },
        { type: "li", text: "يمكنها استدعاء خطافات أخرى داخلها" },
        { type: "li", text: "كل مكون يحصل على نسخته الخاصة من الخطاف" },
        { type: "li", text: "يجب اتباع قواعد الخطافات" },
      ]},
    ],
    quiz: [
      { question: "بماذا يجب أن تبدأ الخطافة المخصصة؟", options: ["get", "use", "create", "make"], correctAnswer: 1, explanation: "يجب أن تبدأ الخطافات المخصصة بكلمة 'use' لاتباع قواعد الخطافات." },
      { question: "ماذا يمكنك فعله داخل خطافة مخصصة؟", options: ["استخدام خطافات أخرى", "استخدام مكونات الفئات", "استخدام طرق دورة الحياة", "استخدام this.setState"], correctAnswer: 0, explanation: "يمكن للخطافات المخصصة استدعاء خطافات أخرى مثل useState و useEffect." },
      { question: "ما هي الفائدة الرئيسية للخطافات المخصصة؟", options: ["أداء أفضل", "إعادة استخدام الكود", "حجم حزمة أصغر", "SEO أفضل"], correctAnswer: 1, explanation: "تتيح الخطافات المخصصة إعادة استخدام المنط满的状态 بين مكونات مختلفة." },
      { question: "هل تشارك المكونات الحالة في الخطافات المخصصة؟", options: ["نعم، جميع المكونات تشارك نفس الحالة", "لا، كل مكون يحصل على نسخته الخاصة", "فقط إذا استخدم نفس الخطاف", "فقط في مكونات الخادم"], correctAnswer: 1, explanation: "كل مكون يستخدم خطافة مخصصة يحصل على نسخته المستقلة من حالة الخطاف." },
    ],
    challenge: { title: "أنشئ خطاف useLocalStorage", description: "ابنِ خطافة مخصصة تُزامن الحالة مع localStorage." },
    cheatSheet: { title: "ملخص الخطافات المخصصة", columns: [
      { heading: "الهيكل الأساسي:", items: ['function useCounter(initialValue = 0) {', '  const [count, setCount] = useState(initialValue);', '  const increment = () => setCount(c => c + 1);', '  return { count, increment };', '}'] },
      { heading: "الاستخدام:", items: ['const { count, increment } = useCounter(0);'] },
    ]},
  },
  en: {
    sections: [
      { title: "What are Custom Hooks?", content: [
        { type: "p", text: "Custom Hooks are JavaScript functions that start with <code>use</code> and can use other Hooks inside them." },
        { type: "p", text: "They let you extract component logic into reusable functions, avoiding code duplication." },
        { type: "p", text: "Custom Hooks are a way to reuse stateful logic between different components." },
      ]},
      { title: "Why Create Custom Hooks?", content: [
        { type: "li", text: "Reuse logic across multiple components" },
        { type: "li", text: "Extract complex logic from components" },
        { type: "li", text: "Make code more readable and maintainable" },
        { type: "li", text: "Encapsulate side effects and state logic" },
      ]},
      { title: "Naming Convention", content: [
        { type: "p", text: "Custom Hooks must start with the word <code>use</code> (e.g., useCounter, useFetch, useLocalStorage)." },
        { type: "callout", title: "Important", text: "This convention tells React that the function follows the Rules of Hooks." },
      ]},
      { title: "Example: useCounter Hook", content: [
        { type: "p", text: "A simple hook that encapsulates counter logic: state, increment, decrement, and reset." },
        { type: "li", text: "Manages the count state internally" },
        { type: "li", text: "Exposes increment, decrement, and reset functions" },
        { type: "li", text: "Returns the current count value" },
      ]},
      { title: "Example: useFetch Hook", content: [
        { type: "p", text: "A hook that encapsulates data fetching logic with loading and error states." },
        { type: "li", text: "Manages data, loading, and error states" },
        { type: "li", text: "Fetches data from a URL" },
        { type: "li", text: "Returns all states for the component to use" },
      ]},
      { title: "Rules of Custom Hooks", content: [
        { type: "li", text: "Must start with the word 'use'" },
        { type: "li", text: "Can call other Hooks inside them" },
        { type: "li", text: "Each component gets its own instance of the hook" },
        { type: "li", text: "Must follow the Rules of Hooks" },
      ]},
    ],
    quiz: [
      { question: "What must a Custom Hook start with?", options: ["get", "use", "create", "make"], correctAnswer: 1, explanation: "Custom Hooks must start with the word 'use' to follow the Rules of Hooks." },
      { question: "What can you do inside a Custom Hook?", options: ["Use other Hooks", "Use class components", "Use lifecycle methods", "Use this.setState"], correctAnswer: 0, explanation: "Custom Hooks can call other Hooks like useState, useEffect, etc." },
      { question: "What is the main benefit of Custom Hooks?", options: ["Better performance", "Code reusability", "Smaller bundle size", "Better SEO"], correctAnswer: 1, explanation: "Custom Hooks allow you to reuse stateful logic between different components." },
      { question: "Do components share state in Custom Hooks?", options: ["Yes, all components share the same state", "No, each component gets its own instance", "Only if they use the same hook", "Only in Server Components"], correctAnswer: 1, explanation: "Each component that uses a Custom Hook gets its own independent instance of the hook's state." },
    ],
    challenge: { title: "Create a useLocalStorage Hook", description: "Build a custom hook that synchronizes state with localStorage." },
    cheatSheet: { title: "Custom Hooks Cheat Sheet", columns: [
      { heading: "Basic Structure:", items: ['function useCounter(initialValue = 0) {', '  const [count, setCount] = useState(initialValue);', '  const increment = () => setCount(c => c + 1);', '  return { count, increment };', '}'] },
      { heading: "Usage:", items: ['const { count, increment } = useCounter(0);'] },
    ]},
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que les Custom Hooks ?", content: [
        { type: "p", text: "Les Custom Hooks sont des fonctions JavaScript qui commencent par <code>use</code> et peuvent utiliser d'autres Hooks." },
      ]},
      { title: "Pourquoi créer des Custom Hooks ?", content: [
        { type: "li", text: "Réutiliser la logique entre plusieurs composants" },
        { type: "li", text: "Extraire la logique complexe des composants" },
      ]},
    ],
    quiz: [
      { question: "Par quoi doit commencer un Custom Hook ?", options: ["get", "use", "create", "make"], correctAnswer: 1, explanation: "Les Custom Hooks doivent commencer par 'use'." },
    ],
    challenge: { title: "Défi : Créez un hook useLocalStorage", description: "Créez un hook personnalisé qui synchronise l'état avec localStorage." },
    cheatSheet: { title: "Référence des Custom Hooks", columns: [
      { heading: "Structure de base:", items: ['function useCounter(initialValue = 0) {', '  const [count, setCount] = useState(initialValue);', '  return { count, increment: () => setCount(c => c + 1) };', '}'] },
    ]},
  },
  de: {
    sections: [
      { title: "Was sind Custom Hooks?", content: [
        { type: "p", text: "Custom Hooks sind JavaScript-Funktionen, die mit <code>use</code> beginnen und andere Hooks verwenden können." },
      ]},
      { title: "Warum Custom Hooks erstellen?", content: [
        { type: "li", text: "Logik zwischen Komponenten wiederverwenden" },
        { type: "li", text: "Komplexe Logik aus Komponenten extrahieren" },
      ]},
    ],
    quiz: [
      { question: "Womit muss ein Custom Hook beginnen?", options: ["get", "use", "create", "make"], correctAnswer: 1, explanation: "Custom Hooks müssen mit 'use' beginnen." },
    ],
    challenge: { title: "Herausforderung: Erstellen Sie einen useLocalStorage Hook", description: "Erstellen Sie einen benutzerdefinierten Hook, der den Zustand mit localStorage synchronisiert." },
    cheatSheet: { title: "Custom Hooks Übersicht", columns: [
      { heading: "Grundstruktur:", items: ['function useCounter(initialValue = 0) {', '  const [count, setCount] = useState(initialValue);', '  return { count, increment: () => setCount(c => c + 1) };', '}'] },
    ]},
  },
};

export default translations;
