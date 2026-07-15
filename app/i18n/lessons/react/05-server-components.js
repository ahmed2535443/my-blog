const translations = {
  ar: {
    sections: [
      { title: "ما هي مكونات الخادم؟", content: [
        { type: "p", text: "مكونات الخادم هي مكونات React تعمل <strong>فقط على الخادم</strong>. لا تنقل JavaScript أبداً إلى العميل، مما يجعل تطبيقك أسرع وأخف." },
        { type: "callout", title: "تشبيه بسيط", text: "مكون الخادم مثل <strong>المطبخ</strong> — يُحضّر الطعام (يجلب البيانات) بعيداً عن العميل. مكون العميل مثل <strong>طاولة التقديم</strong> — يعرض الطعام (الواجهة) للمستخدم ويتفاعل معه. لا تريد إرسال المطبخ بأكمله للعميل!" },
        { type: "p", text: "في Next.js 13+، جميع المكونات في مجلد <code>app/</code> هي مكونات خادم افتراضياً." },
        { type: "p", text: "يمكن لمكونات الخادم الوصول مباشرة إلى قواعد البيانات وأنظمة الملفات والموارد الخادم الأخرى." },
      ]},
      { title: "مكونات الخادم مقابل مكونات العميل", content: [
        { type: "li", text: "<strong>مكونات الخادم:</strong> تعمل على الخادم، لا تفاعلية، يمكنها الوصول مباشرة إلى الخلفية" },
        { type: "li", text: "<strong>مكونات العميل:</strong> تعمل في المتصفح، يمكنها استخدام خطافات مثل useState/useEffect، تتعامل مع تفاعلات المستخدم" },
        { type: "callout", title: "الفرق الجوهري", text: "إذا كان المكون يحتاج إلى useState أو useEffect أو معالجات أحداث، فيجب أن يكون مكون عميل." },
      ]},
      { title: "متى تستخدم مكونات الخادم", content: [
        { type: "li", text: "جلب البيانات من قواعد البيانات أو واجهات البرمجة" },
        { type: "li", text: "الوصول مباشرة إلى موارد الخلفية" },
        { type: "li", text: "إبقاء البيانات الحساسة على الخادم" },
        { type: "li", text: "تقليل حزمة JavaScript من جانب العميل" },
      ]},
      { title: "متى تستخدم مكونات العميل", content: [
        { type: "li", text: "استخدام خطافات مثل useState و useEffect و useContext" },
        { type: "li", text: "إضافة مستمعي أحداث والتعامل مع التفاعلات" },
        { type: "li", text: "استخدام APIs المتصفح فقط" },
        { type: "li", text: "إنشاء عناصر واجهة مستخدم تفاعلية" },
      ]},
      { title: "كيف تجعل المكون مكون عميل", content: [
        { type: "p", text: "أضف التوجيه <code>\"use client\"</code> في أعلى الملف لجعله مكون عميل." },
        { type: "callout", title: "مهم", text: "استورد مكونات العميل فقط في مكونات العميل الأخرى، وليس العكس." },
      ]},
    ],
    quiz: [
      { question: "ماذا يحدث لـ JavaScript مكونات الخادم على العميل؟", options: ["يُرسل ويُنفذ على العميل", "يُرسل لكن لا يُنفذ", "لا يُرسل إلى العميل على الإطلاق", "يُرسل كنص غير متزامن"], correctAnswer: 2, explanation: "مكونات الخادم لا تنقل JavaScript إلى العميل أبداً، مما يجعل التطبيق أسرع وأخف." },
      { question: "متى تستخدم مكون العميل؟", options: ["جلب البيانات من API", "استخدام useState أو useEffect", "الوصول إلى قاعدة بيانات", "قراءة ملفات على الخادم"], correctAnswer: 1, explanation: "مكونات العميل مطلوبة عند استخدام خطافات مثل useState و useEffect أو التعامل مع تفاعلات المستخدم." },
      { question: "كيف تجعل المكون مكون عميل؟", options: ["أضف توجيه 'use server'", "أضف توجيه 'use client'", "صدّره كافتراضي", "استخدم خاصية client"], correctAnswer: 1, explanation: "أضف التوجيه 'use client' في أعلى الملف." },
      { question: "ما هي الفائدة الرئيسية لمكونات الخادم؟", options: ["SEO أفضل", "تقليل حزمة JavaScript من جانب العميل", "إدارة حالة أسهل", "إعادة عرض أسرع"], correctAnswer: 1, explanation: "مكونات الخادم تقلل من كمية JavaScript المُرسلة إلى العميل، مما يجعل التطبيق أسرع." },
    ],
    challenge: { title: "ابنِ مكون عرض بيانات", description: "أنشئ مكون خادم يجلب ويعرض البيانات دون نقل JavaScript إلى العميل." },
    cheatSheet: { title: "ملخص مكونات الخادم", columns: [
      { heading: "مكون الخادم:", items: ['// الافتراضي في مجلد app/', 'async function ServerComponent() {', '  const data = await fetchData();', '  return <div>{data.title}</div>;', '}'] },
      { heading: "مكون العميل:", items: ['"use client";', 'import { useState } from "react";', 'function ClientComponent() {', '  const [count, setCount] = useState(0);', '}'] },
    ]},
  },
  en: {
    sections: [
      { title: "What are Server Components?", content: [
        { type: "p", text: "Server Components are React components that run <strong>only on the server</strong>. They never ship JavaScript to the client, making your app faster and lighter." },
        { type: "callout", title: "Simple Analogy", text: "A Server Component is like a <strong>kitchen</strong> — it prepares food (fetches data) away from the client. A Client Component is like a <strong>dining table</strong> — it serves food (the UI) to the user and interacts with them. You would not send the entire kitchen to the client!" },
        { type: "p", text: "In Next.js 13+, all components in the <code>app/</code> directory are Server Components by default." },
        { type: "p", text: "Server Components can directly access databases, file systems, and other server-side resources." },
      ]},
      { title: "Server vs Client Components", content: [
        { type: "li", text: "<strong>Server Components:</strong> Run on server, no interactivity, can access backend directly" },
        { type: "li", text: "<strong>Client Components:</strong> Run in browser, can use hooks like useState/useEffect, handle user interactions" },
        { type: "callout", title: "Key Difference", text: "If a component needs useState, useEffect, or event handlers, it must be a Client Component." },
      ]},
      { title: "When to Use Server Components", content: [
        { type: "li", text: "Fetching data from databases or APIs" },
        { type: "li", text: "Accessing backend resources directly" },
        { type: "li", text: "Keeping sensitive data on the server" },
        { type: "li", text: "Reducing client-side JavaScript bundle" },
      ]},
      { title: "When to Use Client Components", content: [
        { type: "li", text: "Using hooks like useState, useEffect, useContext" },
        { type: "li", text: "Adding event listeners and handling interactions" },
        { type: "li", text: "Using browser-only APIs" },
        { type: "li", text: "Creating interactive UI elements" },
      ]},
      { title: "How to Mark a Component as Client", content: [
        { type: "p", text: "Add the <code>\"use client\"</code> directive at the top of the file to make it a Client Component." },
        { type: "callout", title: "Important", text: "Only import Client Components into other Client Components, not vice versa." },
      ]},
    ],
    quiz: [
      { question: "What happens to Server Component JavaScript on the client?", options: ["It's sent and executed on the client", "It's sent but not executed", "It's not sent to the client at all", "It's sent as an async script"], correctAnswer: 2, explanation: "Server Components never ship JavaScript to the client, making the app faster and lighter." },
      { question: "When should you use a Client Component?", options: ["Fetching data from an API", "Using useState or useEffect", "Accessing a database", "Reading files on the server"], correctAnswer: 1, explanation: "Client Components are needed when using hooks like useState, useEffect, or handling user interactions." },
      { question: "How do you make a component a Client Component?", options: ["Add 'use server' directive", "Add 'use client' directive", "Export as default", "Use the client prop"], correctAnswer: 1, explanation: "Add the 'use client' directive at the top of the file." },
      { question: "What is the main benefit of Server Components?", options: ["Better SEO", "Reduced client-side JavaScript bundle", "Easier state management", "Faster re-renders"], correctAnswer: 1, explanation: "Server Components reduce the amount of JavaScript sent to the client, making the app faster." },
    ],
    challenge: { title: "Build a Data Display Component", description: "Create a Server Component that fetches and displays data without shipping JavaScript to the client." },
    cheatSheet: { title: "Server Components Cheat Sheet", columns: [
      { heading: "Server Component:", items: ['// Default in app/ directory', 'async function ServerComponent() {', '  const data = await fetchData();', '  return <div>{data.title}</div>;', '}'] },
      { heading: "Client Component:", items: ['"use client";', 'import { useState } from "react";', 'function ClientComponent() {', '  const [count, setCount] = useState(0);', '}'] },
    ]},
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que les Server Components ?", content: [
        { type: "p", text: "Les Server Components sont des composants React qui s'exécutent <strong>uniquement sur le serveur</strong>." },
      ]},
      { title: "Server vs Client Components", content: [
        { type: "li", text: "<strong>Server Components :</strong> S'exécutent sur le serveur, pas d'interactivité" },
        { type: "li", text: "<strong>Client Components :</strong> S'exécutent dans le navigateur, peuvent utiliser les hooks" },
      ]},
    ],
    quiz: [
      { question: "Que devient le JavaScript des Server Components côté client ?", options: ["Il est envoyé et exécuté", "Il est envoyé mais pas exécuté", "Il n'est pas envoyé du tout", "Il est envoyé en script asynchrone"], correctAnswer: 2, explanation: "Les Server Components n'envoient jamais de JavaScript au client." },
    ],
    challenge: { title: "Défi : Composant d'affichage de données", description: "Créez un Server Component qui récupère et affiche des données." },
    cheatSheet: { title: "Référence des Server Components", columns: [
      { heading: "Server Component:", items: ['async function ServerComponent() {', '  const data = await fetchData();', '  return <div>{data.title}</div>;', '}'] },
    ]},
  },
  de: {
    sections: [
      { title: "Was sind Server Components?", content: [
        { type: "p", text: "Server Components sind React-Komponenten, die <strong>nur auf dem Server</strong> ausgeführt werden." },
      ]},
      { title: "Server vs Client Components", content: [
        { type: "li", text: "<strong>Server Components:</strong> Laufen auf dem Server, keine Interaktivität" },
        { type: "li", text: "<strong>Client Components:</strong> Laufen im Browser, können Hooks verwenden" },
      ]},
    ],
    quiz: [
      { question: "Was passiert mit dem JavaScript von Server Components auf dem Client?", options: ["Es wird gesendet und ausgeführt", "Es wird gesendet aber nicht ausgeführt", "Es wird überhaupt nicht gesendet", "Es wird als async Script gesendet"], correctAnswer: 2, explanation: "Server Components senden nie JavaScript an den Client." },
    ],
    challenge: { title: "Herausforderung: Datenanzeige-Komponente", description: "Erstellen Sie eine Server Component, die Daten abruft und anzeigt." },
    cheatSheet: { title: "Server Components Übersicht", columns: [
      { heading: "Server Component:", items: ['async function ServerComponent() {', '  const data = await fetchData();', '  return <div>{data.title}</div>;', '}'] },
    ]},
  },
};

export default translations;
