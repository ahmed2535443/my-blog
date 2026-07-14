const translations = {
  ar: {
    sections: [
      { title: "لماذا معالجة الأخطاء مهمة", content: [
        { type: "p", text: "في تطبيقات الإنتاج، قد تنفصل قواعد البيانات، ويفشل الشبكات، وقد يدخل المستخدمون روابط خاطئة. بدون معالجة أخطاء مناسبة، يرى المستخدمون شاشات بيضاء فارغة." },
        { type: "p", text: "Next.js يوفر نظاماً شاملاً لمعالجة الأخطاء من خلال اتفاقيات الملفات التي تسمح التقاط الأخطاء وعرض واجهات مستخدم ودية." },
      ]},
      { title: "error.js — حدود الأخطاء", content: [
        { type: "p", text: "ملف <code>error.js</code> هو اتفاقية ملف في Next.js تُستخدم لإنشاء حدود الأخطاء التي تلتقط الأخطاء في أجزاء المسارات." },
        { type: "p", text: "عندما يحدث خطأ في صفحة، يقوم error.js التقاطه وعرض واجهة بديلة بدلاً من إيقاف تشغيل التطبيق بالكامل." },
      ]},
      { title: "not-found.js — صفحات 404", content: [
        { type: "p", text: "ملف <code>not-found.js</code> يتعامل مع أخطاء 404 عندما لا تُوجد الصفحة. يمكنك تشغيله يدوياً باستخدام <code>notFound()</code> من next/navigation." },
      ]},
      { title: "استراتيجيات التعافي من الأخطاء", content: [
        { type: "li", text: "استخدم error.js مع 'use client' للتعافي التفاعلي من الأخطاء" },
        { type: "li", text: "استخدم دالة reset() لإعادة محاولة العرض" },
        { type: "li", text: "استخدم not-found.js لصفحات 404" },
        { type: "li", text: "error.js عالمي لأخطاء التخطيط الجذري" },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "error.js ينشئ حدود أخطاء لأجزاء المسارات." },
        { type: "li", text: "not-found.js يتعامل مع أخطاء 404." },
        { type: "li", text: "استخدم reset() لإعادة المحاولة بعد الأخطاء." },
        { type: "li", text: "قدم دائماً واجهة بديلة لحالات الخطأ." },
      ]}
    ],
    quiz: [
      { question: "ماذا يفعل error.js في Next.js؟", options: ["يسجل الأخطاء في console", "ينشئ حدود أخطاء تلتقط الأخطاء في أجزاء المسارات", "يمنع جميع الأخطاء", "يرسل تقارير الأخطاء"], explanation: "error.js ينشئ حدود أخطاء تلتقط الأخطاء و تعرض واجهة بديلة بدلاً من الإيقاف." },
      { question: "كيف تُشغّل صفحة 404 يدوياً؟", options: ["throw new Error('404')", "notFound() من next/navigation", "return null", "redirect('/404')"], explanation: "استخدم notFound() من next/navigation لتشغيل صفحة not-found.js." },
    ],
    challenge: { title: "تنفيذ معالجة الأخطاء", description: "أضف error.js و not-found.js إلى مساراتك مع واجهة بديلة مناسبة." },
    cheatSheet: { title: "ملخص مراجعة معالجة الأخطاء", items: [
      { term: "error.js", definition: "حدود خطأ لجزء المسار" },
      { term: "not-found.js", definition: "معالج صفحة 404" },
      { term: "reset()", definition: "إعادة محاولة العرض بعد الخطأ" },
      { term: "notFound()", definition: "تشغيل صفحة 404 يدوياً" }
    ]}
  },
  en: {
    sections: [
      { title: "Why Error Handling Matters", content: [
        { type: "p", text: "In production applications, databases may disconnect, networks may fail, and users may enter wrong URLs. Without proper error handling, users see blank white screens." },
        { type: "p", text: "Next.js provides a comprehensive error handling system through file conventions that allow catching errors and showing friendly user interfaces." },
      ]},
      { title: "error.js — Error Boundaries", content: [
        { type: "p", text: "The <code>error.js</code> file is a file convention in Next.js used to create Error Boundaries that catch errors in route segments." },
        { type: "p", text: "When an error occurs in a page, error.js catches it and displays an alternative interface instead of crashing the entire application." },
      ]},
      { title: "not-found.js — 404 Pages", content: [
        { type: "p", text: "The <code>not-found.js</code> file handles 404 errors when a page is not found. You can trigger it manually with <code>notFound()</code> from next/navigation." },
      ]},
      { title: "Error Recovery Strategies", content: [
        { type: "li", text: "Use error.js with 'use client' for interactive error recovery" },
        { type: "li", text: "Use reset() function to retry rendering" },
        { type: "li", text: "Use not-found.js for 404 pages" },
        { type: "li", text: "Global error.js for root layout errors" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "error.js creates Error Boundaries for route segments." },
        { type: "li", text: "not-found.js handles 404 errors." },
        { type: "li", text: "Use reset() to retry after errors." },
        { type: "li", text: "Always provide fallback UI for error states." },
      ]}
    ],
    quiz: [
      { question: "What does error.js do in Next.js?", options: ["Logs errors to console", "Creates Error Boundaries that catch errors in route segments", "Prevents all errors", "Sends error reports"], explanation: "error.js creates Error Boundaries that catch errors and display alternative UI instead of crashing." },
      { question: "How do you trigger a 404 page manually?", options: ["throw new Error('404')", "notFound() from next/navigation", "return null", "redirect('/404')"], explanation: "Use notFound() from next/navigation to trigger the not-found.js page." },
    ],
    challenge: { title: "Implement Error Handling", description: "Add error.js and not-found.js to your routes with proper fallback UI." },
    cheatSheet: { title: "Error Handling Cheat Sheet", items: [
      { term: "error.js", definition: "Error Boundary for route segment" },
      { term: "not-found.js", definition: "404 page handler" },
      { term: "reset()", definition: "Retry rendering after error" },
      { term: "notFound()", definition: "Trigger 404 page manually" }
    ]}
  },
  fr: {
    sections: [
      { title: "Pourquoi la gestion des erreurs est importante", content: [
        { type: "p", text: "Dans les applications de production, les bases de données peuvent se déconnecter, les réseaux peuvent échouer. Sans gestion appropriée, les utilisateurs voient des écrans blancs." },
      ]},
      { title: "error.js — Limites d'erreurs", content: [
        { type: "p", text: "Le fichier <code>error.js</code> crée des Error Boundaries qui captent les erreurs dans les segments de routes." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "error.js crée des Error Boundaries pour les segments de routes." },
        { type: "li", text: "not-found.js gère les erreurs 404." },
        { type: "li", text: "Utilisez reset() pour réessayer après les erreurs." },
      ]}
    ],
    quiz: [
      { question: "Que fait error.js dans Next.js ?", options: ["Journalise les erreurs", "Crée des Error Boundaries qui captent les erreurs", "Empêche toutes les erreurs"], explanation: "error.js crée des Error Boundaries qui affichent une UI alternative." },
    ],
    challenge: { title: "Implémenter la gestion des erreurs", description: "Ajoutez error.js et not-found.js à vos routes." },
    cheatSheet: { title: "Fiche mémo Gestion des erreurs", items: [
      { term: "error.js", definition: "Error Boundary pour segment de route" },
      { term: "not-found.js", definition: "Gestionnaire de page 404" },
      { term: "reset()", definition: "Réessayer après erreur" },
      { term: "notFound()", definition: "Déclencher la page 404" }
    ]}
  },
  de: {
    sections: [
      { title: "Warum Fehlerbehandlung wichtig ist", content: [
        { type: "p", text: "In Produktionsanwendungen können Datenbanken getrennt werden und Netzwerke ausfallen. Ohne ordnungsgemäße Fehlerbehandlung sehen Benutzer leere weiße Bildschirme." },
      ]},
      { title: "error.js — Error Boundaries", content: [
        { type: "p", text: "Die Datei <code>error.js</code> erstellt Error Boundaries, die Fehler in Routen-Segmenten abfangen." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "error.js erstellt Error Boundaries für Routen-Segmente." },
        { type: "li", text: "not-found.js behandelt 404-Fehler." },
        { type: "li", text: "Verwenden Sie reset() zum erneuten Versuch nach Fehlern." },
      ]}
    ],
    quiz: [
      { question: "Was macht error.js in Next.js?", options: ["Protokolliert Fehler", "Erstellt Error Boundaries die Fehler abfangen", "Verhindert alle Fehler"], explanation: "error.js erstellt Error Boundaries, die alternative UI anzeigen." },
    ],
    challenge: { title: "Fehlerbehandlung implementieren", description: "Fügen Sie error.js und not-found.js zu Ihren Routen hinzu." },
    cheatSheet: { title: "Fehlerbehandlung Spickzettel", items: [
      { term: "error.js", definition: "Error Boundary für Routen-Segment" },
      { term: "not-found.js", definition: "404-Seiten-Handler" },
      { term: "reset()", definition: "Nach Fehler erneut versuchen" },
      { term: "notFound()", definition: "404-Seite manuell auslösen" }
    ]}
  }
};
export default translations;
