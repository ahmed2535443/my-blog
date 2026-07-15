const translations = {
  ar: {
    sections: [
      { title: "ما هي إجراءات الخادم؟", content: [
        { type: "p", text: "إجراءات الخادم هي دوال تعمل <strong>فقط على الخادم</strong>. تتعامل مع إرسال النماذج وعمليات قاعدة البيانات والمهام الخادم الأخرى." },
        { type: "callout", title: "تشبيه بسيط", text: "إجراء الخادم مثل <strong>صندوق بريد</strong>. أنت تكتب رسالة (تبيانات النموذج) وتحطها في الصندوق. تلقائياً تصل الرسالة إلى الخادم وتُعالج. لا تحتاج لكتابة كود اتصال معقد — فقط ضع البيانات في الصندوق!" },
        { type: "p", text: "في Next.js 13+، حدد الدالة بـ <code>\"use server\"</code> لجعلها إجراء خادم." },
        { type: "p", text: "يمكن استدعاء إجراءات الخادم من مكونات العميل أو النماذج أو حتى مكونات الخادم." },
      ]},
      { title: "لماذا تستخدم إجراءات الخادم؟", content: [
        { type: "li", text: "إبقاء المنطق الحساس والبيانات على الخادم" },
        { type: "li", text: "تقليل حزمة JavaScript من جانب العميل" },
        { type: "li", text: "تبسيط تعامل النماذج دون مسارات API" },
        { type: "li", text: "الوصول المباشر إلى قاعدة البيانات دون كشف بيانات الاعتماد" },
      ]},
      { title: "الصيغة الأساسية", content: [
        { type: "p", text: "أضف <code>\"use server\"</code> في أعلى الملف أو داخل دالة غير متزامنة لجعلها إجراء خادم." },
        { type: "callout", title: "مهم", text: "يجب أن تكون إجراءات الخادم دوال غير متزامنة." },
      ]},
      { title: "استخدام إجراءات الخادم مع النماذج", content: [
        { type: "p", text: "انقل إجراء الخادم إلى خاصية <code>action</code> لعنصر النموذج للتعامل التلقائي مع النموذج." },
        { type: "li", text: "تتم تسلسل بيانات النموذج تلقائياً" },
        { type: "li", text: "يعمل مع مكونات الخادم و مكونات العميل" },
        { type: "li", text: "يدعم التحسين التدريجي" },
      ]},
      { title: "إعادة التحقق من البيانات", content: [
        { type: "p", text: "بعد اكتمال إجراء الخادم، استخدم <code>revalidatePath</code> أو <code>revalidateTag</code> لتحديث البيانات المخزنة مؤقتاً." },
      ]},
    ],
    quiz: [
      { question: "كيف تجعل الدالة إجراء خادم؟", options: ["أضف توجيه 'use client'", "أضف توجيه 'use server'", "صدّره كافتراضي", "استخدم خاصية server"], correctAnswer: 1, explanation: "أضف التوجيه 'use server' في أعلى الملف أو داخل الدالة." },
      { question: "أي نوع من الدوال يجب أن تكون إجراءات الخادم؟", options: ["متزامنة", "دوال سهمية", "دوال غير متزامنة", "دوال مولّدة"], correctAnswer: 2, explanation: "يجب أن تكون إجراءات الخادم دوال غير متزامنة." },
      { question: "هل يمكن استدعاء إجراءات الخادم من مكونات العميل؟", options: ["لا، فقط من مكونات الخادم", "نعم، يمكن استدعاءها من أي مكان", "فقط من النماذج", "فقط من مسارات API"], correctAnswer: 1, explanation: "يمكن استدعاء إجراءات الخادم من مكونات العميل أو النماذج أو مكونات الخادم." },
      { question: "كيف تُحدّث البيانات المخزنة مؤقتاً بعد إجراء خادم؟", options: ["استخدم useEffect", "استخدم revalidatePath أو revalidateTag", "استخدم router.refresh()", "استخدم SWR"], correctAnswer: 1, explanation: "استخدم revalidatePath أو revalidateTag لتحديث البيانات المخزنة مؤقتاً بعد إجراء الخادم." },
    ],
    challenge: { title: "ابنِ معالج نماذج", description: "أنشئ نموذجاً يستخدم إجراءات الخادم لمعالجة الإرسالات وحفظ البيانات في قاعدة بيانات." },
    cheatSheet: { title: "ملخص إجراءات الخادم", columns: [
      { heading: "إجراء خادم أساسي:", items: ['"use server";', 'async function saveData(formData) {', '  const name = formData.get("name");', '  await db.insert(name);', '}'] },
      { heading: "في النموذج:", items: ['<form action={saveData}>', '  <input name="name" />', '  <button type="submit">Save</button>', '</form>'] },
    ]},
    interviewQuestions: [
      { question: "كيف تحدد إجراء خادم؟", answer: "أضف 'use server' في أعلى الملف أو داخل الدالة.", difficulty: "easy" },
      { question: "من يمكنه استدعاء إجراءات الخادم؟", answer: "مكونات العميل، النماذج، وحتى مكونات الخادم.", difficulty: "medium" },
    ],
    tricks: [
      { title: "استخدم useActionState للنماذج", description: "useActionState في React 19 يدير حالة النموذج تلقائياً مع Server Actions", icon: "brain" },
    ]
  },
  en: {
    sections: [
      { title: "What are Server Actions?", content: [
        { type: "p", text: "Server Actions are functions that run <strong>only on the server</strong>. They handle form submissions, database operations, and other server-side tasks." },
        { type: "callout", title: "Simple Analogy", text: "A Server Action is like a <strong>mailbox</strong>. You write a message (form data) and drop it in the box. The message automatically reaches the server and gets processed. You do not need to write complex connection code — just put the data in the mailbox!" },
        { type: "p", text: "In Next.js 13+, mark a function with <code>\"use server\"</code> to make it a Server Action." },
        { type: "p", text: "Server Actions can be called from Client Components, forms, or even Server Components." },
      ]},
      { title: "Why Use Server Actions?", content: [
        { type: "li", text: "Keep sensitive logic and data on the server" },
        { type: "li", text: "Reduce client-side JavaScript bundle" },
        { type: "li", text: "Simplify form handling without API routes" },
        { type: "li", text: "Direct database access without exposing credentials" },
      ]},
      { title: "Basic Syntax", content: [
        { type: "p", text: "Add <code>\"use server\"</code> at the top of a file or inside an async function to mark it as a Server Action." },
        { type: "callout", title: "Important", text: "Server Actions must be async functions." },
      ]},
      { title: "Using Server Actions with Forms", content: [
        { type: "p", text: "Pass a Server Action to the <code>action</code> prop of a form element for automatic form handling." },
        { type: "li", text: "Form data is automatically serialized" },
        { type: "li", text: "Works with both Server and Client Components" },
        { type: "li", text: "Supports progressive enhancement" },
      ]},
      { title: "Revalidating Data", content: [
        { type: "p", text: "After a Server Action completes, use <code>revalidatePath</code> or <code>revalidateTag</code> to refresh cached data." },
      ]},
    ],
    quiz: [
      { question: "How do you mark a function as a Server Action?", options: ["Add 'use client' directive", "Add 'use server' directive", "Export as default", "Use the server prop"], correctAnswer: 1, explanation: "Add the 'use server' directive at the top of the file or inside the function." },
      { question: "What type of functions must Server Actions be?", options: ["Synchronous", "Arrow functions", "Async functions", "Generator functions"], correctAnswer: 2, explanation: "Server Actions must be async functions." },
      { question: "Can Server Actions be called from Client Components?", options: ["No, only from Server Components", "Yes, they can be called from anywhere", "Only from forms", "Only from API routes"], correctAnswer: 1, explanation: "Server Actions can be called from Client Components, forms, or Server Components." },
      { question: "How do you refresh cached data after a Server Action?", options: ["Use useEffect", "Use revalidatePath or revalidateTag", "Use router.refresh()", "Use SWR"], correctAnswer: 1, explanation: "Use revalidatePath or revalidateTag to refresh cached data after a Server Action." },
    ],
    challenge: { title: "Build a Form Handler", description: "Create a form that uses Server Actions to handle submissions and save data to a database." },
    cheatSheet: { title: "Server Actions Cheat Sheet", columns: [
      { heading: "Basic Server Action:", items: ['"use server";', 'async function saveData(formData) {', '  const name = formData.get("name");', '  await db.insert(name);', '}'] },
      { heading: "In Form:", items: ['<form action={saveData}>', '  <input name="name" />', '  <button type="submit">Save</button>', '</form>'] },
    ]},
    interviewQuestions: [
      { question: "How do you define a Server Action?", answer: "Add 'use server' at the top of the file or inside the function.", difficulty: "easy" },
      { question: "Who can call Server Actions?", answer: "Client Components, forms, and even Server Components.", difficulty: "medium" },
    ],
    tricks: [
      { title: "Use useActionState for forms", description: "useActionState in React 19 manages form state automatically with Server Actions", icon: "brain" },
    ]
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que les Server Actions ?", content: [
        { type: "p", text: "Les Server Actions sont des fonctions qui s'exécutent <strong>uniquement sur le serveur</strong>." },
      ]},
      { title: "Pourquoi utiliser les Server Actions ?", content: [
        { type: "li", text: "Garder la logique sensible sur le serveur" },
        { type: "li", text: "Réduire le bundle JavaScript côté client" },
      ]},
    ],
    quiz: [
      { question: "Comment marquer une fonction comme Server Action ?", options: ["Ajouter 'use client'", "Ajouter 'use server'", "Exporter par défaut", "Utiliser la prop server"], correctAnswer: 1, explanation: "Ajoutez la directive 'use server' en haut du fichier." },
    ],
    challenge: { title: "Défi : Gestionnaire de formulaires", description: "Créez un formulaire qui utilise les Server Actions pour gérer les soumissions." },
    cheatSheet: { title: "Référence des Server Actions", columns: [
      { heading: "Server Action de base:", items: ['"use server";', 'async function saveData(formData) {', '  await db.insert(formData.get("name"));', '}'] },
    ]},
  },
  de: {
    sections: [
      { title: "Was sind Server Actions?", content: [
        { type: "p", text: "Server Actions sind Funktionen, die <strong>nur auf dem Server</strong> ausgeführt werden." },
      ]},
      { title: "Warum Server Actions verwenden?", content: [
        { type: "li", text: "Sensible Logik auf dem Server halten" },
        { type: "li", text: "Client-seitiges JavaScript-Bündel reduzieren" },
      ]},
    ],
    quiz: [
      { question: "Wie markiert man eine Funktion als Server Action?", options: ["'use client' hinzufügen", "'use server' hinzufügen", "Als Standard exportieren", "Die server-Prop verwenden"], correctAnswer: 1, explanation: "Fügen Sie die Direktive 'use server' oben in die Datei ein." },
    ],
    challenge: { title: "Herausforderung: Formular-Handler", description: "Erstellen Sie ein Formular, das Server Actions zur Datenverarbeitung verwendet." },
    cheatSheet: { title: "Server Actions Übersicht", columns: [
      { heading: "Grundlegende Server Action:", items: ['"use server";', 'async function saveData(formData) {', '  await db.insert(formData.get("name"));', '}'] },
    ]},
  },
};

export default translations;
