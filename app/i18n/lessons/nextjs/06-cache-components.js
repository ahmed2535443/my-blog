const translations = {
  ar: {
    sections: [
      { title: "نظرة عامة: التخزين المؤقت في Next.js 16", content: [
        { type: "p", text: "Next.js 16 يقدم <strong>نموذج تخزين مؤقت جديد تماماً</strong>. لا شيء يُخزّن مؤقتاً إلا إذا طلبته صراحةً باستخدام <code>'use cache'</code>." },
        { type: "p", text: "كل مكون ودالة تنفذ في كل مرة إلا إذا أضفت <code>'use cache'</code>." },
      ]},
      { title: "تعليمة 'use cache'", content: [
        { type: "p", text: "أضف <code>'use cache'</code> في أعلى دالة أو مكون لتمكين التخزين المؤقت. يمكنك التخزين على مستوى الدالة أو المكون أو مع وسوم محددة." },
      ]},
      { title: "أوضاع التخزين المؤقت", content: [
        { type: "li", text: "<code>'use cache'</code> — تخزين مؤقت للقيمة المُعادة من الدالة." },
        { type: "li", text: "<code>'use cache' مع وسوم</code> — تخزين مؤقت مع وسوم للإبطال المستهدف." },
        { type: "li", text: "بدون 'use cache' — تنفيذ دائماً بشكل طازج (السلوك الافتراضي)." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "Next.js 16 يستخدم التخزين المؤقت الاختياري مع 'use cache'." },
        { type: "li", text: "لا شيء يُخزّن مؤقتاً بشكل افتراضي." },
        { type: "li", text: "استخدم الوسوم لإبطال التخزين المؤقت المستهدف." },
      ]}
    ],
    quiz: [
      { question: "ما هو سلوك التخزين المؤقت الافتراضي في Next.js 16؟", options: ["كل شيء يُخزّن مؤقتاً", "لا شيء يُخزّن مؤقتاً إلا إذا استخدمت 'use cache'", "الصفحات الثابتة فقط تُخزّن مؤقتاً", "التخزين المؤقت معطل"], explanation: "في Next.js 16، لا شيء يُخزّن مؤقتاً إلا إذا استخدمت 'use cache' صراحةً." },
      { question: "كيف تخزّن دالة مؤقتاً في Next.js 16؟", options: ["استخدم cache: true", "أضف 'use cache' في أعلى الدالة", "استخدم useMemo", "التخزين المؤقت تلقائي"], explanation: "أضف 'use cache' في أعلى الدالة لتمكين التخزين المؤقت." },
    ],
    challenge: { title: "تنفيذ استراتيجية التخزين المؤقت", description: "أضف 'use cache' إلى المكونات واختبر سلوك التخزين المؤقت مع سيناريوهات مختلفة." },
    cheatSheet: { title: "ملخص مراجعة Cache Components", items: [
      { term: "'use cache'", definition: "تمكين التخزين المؤقت للدالة/المكون" },
      { term: "بدون تعليمة", definition: "دائماً طازج (الافتراضي)" },
      { term: "tags", definition: "إبطال التخزين المؤقت المستهدف" }
    ]}
  },
  en: {
    sections: [
      { title: "Overview: Caching in Next.js 16", content: [
        { type: "p", text: "Next.js 16 introduces a <strong>completely new caching model</strong>. Nothing is cached unless you explicitly request it using <code>'use cache'</code>." },
        { type: "p", text: "Every component and function executes every time unless you add <code>'use cache'</code>." },
      ]},
      { title: "'use cache' Directive", content: [
        { type: "p", text: "Add <code>'use cache'</code> at the top of a function or component to enable caching. You can cache at function level, component level, or with specific tags." },
      ]},
      { title: "Cache Modes", content: [
        { type: "li", text: "<code>'use cache'</code> — Cache the return value of the function." },
        { type: "li", text: "<code>'use cache' with tags</code> — Cache with tags for targeted invalidation." },
        { type: "li", text: "No 'use cache' — Always execute fresh (default behavior)." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Next.js 16 uses opt-in caching with 'use cache'." },
        { type: "li", text: "Nothing is cached by default." },
        { type: "li", text: "Use tags for targeted cache invalidation." },
      ]}
    ],
    quiz: [
      { question: "What is the default caching behavior in Next.js 16?", options: ["Everything is cached", "Nothing is cached unless you use 'use cache'", "Only static pages are cached", "Caching is disabled"], explanation: "In Next.js 16, nothing is cached unless you explicitly use 'use cache'." },
      { question: "How do you cache a function in Next.js 16?", options: ["Use cache: true", "Add 'use cache' at the top of the function", "Use useMemo", "Caching is automatic"], explanation: "Add 'use cache' at the top of the function to enable caching." },
    ],
    challenge: { title: "Implement Caching Strategy", description: "Add 'use cache' to components and test caching behavior with different scenarios." },
    cheatSheet: { title: "Cache Components Cheat Sheet", items: [
      { term: "'use cache'", definition: "Enable caching for function/component" },
      { term: "No directive", definition: "Always fresh (default)" },
      { term: "tags", definition: "Targeted cache invalidation" }
    ]}
  },
  fr: {
    sections: [
      { title: "Vue d'ensemble : Mise en cache dans Next.js 16", content: [
        { type: "p", text: "Next.js 16 introduit un <strong>modèle de mise en cache complètement nouveau</strong>. Rien n'est mis en cache sauf si vous le demandez explicitement avec <code>'use cache'</code>." },
      ]},
      { title: "Directive 'use cache'", content: [
        { type: "p", text: "Ajoutez <code>'use cache'</code> au début d'une fonction pour activer la mise en cache." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Next.js 16 utilise la mise en cache optionnelle avec 'use cache'." },
        { type: "li", text: "Rien n'est mis en cache par défaut." },
      ]}
    ],
    quiz: [
      { question: "Quel est le comportement de cache par défaut dans Next.js 16 ?", options: ["Tout est mis en cache", "Rien n'est mis en cache sauf avec 'use cache'"], explanation: "Dans Next.js 16, rien n'est mis en cache sauf si vous utilisez 'use cache'." },
    ],
    challenge: { title: "Implémenter une stratégie de cache", description: "Ajoutez 'use cache' aux composants et testez le comportement." },
    cheatSheet: { title: "Fiche mémo Cache Components", items: [
      { term: "'use cache'", definition: "Activer la mise en cache" },
      { term: "Pas de directive", definition: "Toujours frais (par défaut)" }
    ]}
  },
  de: {
    sections: [
      { title: "Überblick: Caching in Next.js 16", content: [
        { type: "p", text: "Next.js 16 führt ein <strong>völlig neues Caching-Modell</strong> ein. Nichts wird zwischengespeichert, es sei denn, Sie fordern dies explizit mit <code>'use cache'</code> an." },
      ]},
      { title: "'use cache' Direktive", content: [
        { type: "p", text: "Fügen Sie <code>'use cache'</code> am Anfang einer Funktion hinzu, um Caching zu aktivieren." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Next.js 16 verwendet opt-in Caching mit 'use cache'." },
        { type: "li", text: "Standardmäßig wird nichts zwischengespeichert." },
      ]}
    ],
    quiz: [
      { question: "Was ist das Standard-Caching-Verhalten in Next.js 16?", options: ["Alles wird zwischengespeichert", "Nichts wird zwischengespeichert, es sei denn mit 'use cache'"], explanation: "In Next.js 16 wird nichts zwischengespeichert, es sei denn mit 'use cache'." },
    ],
    challenge: { title: "Caching-Strategie implementieren", description: "Fügen Sie 'use cache' zu Komponenten hinzu und testen Sie das Verhalten." },
    cheatSheet: { title: "Cache Components Spickzettel", items: [
      { term: "'use cache'", definition: "Caching für Funktion/Komponente aktivieren" },
      { term: "Keine Direktive", definition: "Immer frisch (Standard)" }
    ]}
  }
};
export default translations;
