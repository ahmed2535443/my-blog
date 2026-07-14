const translations = {
  ar: {
    sections: [
      { title: "لماذا التعليقات مهمة؟", content: [
        { type: "p", text: "التعليقات الجيدة مثل <strong>الخرائط الطريق</strong> في الكود - она تساعد المطورين على فهم <strong>لماذا</strong> تم كتابة الكود بذلك الشكل، وليس <strong>ماذا</strong> يفعل الكود. الكود الواضح لا يحتاج تعليقات تشرح ما يفعله، لكنه يحتاج تعليقات تشرح السبب خلف القرارات." },
        { type: "callout", title: "القاعدة الذهبية:", text: "<strong>لا تشرحماذا، اشرح لماذا.</strong> الكود الجيد يشرح نفسه - التعليقات الجيدة تشرح السبب." },
      ]},
      { title: "التعليقات الجيدة مقابل التعليقات السيئة", content: [
        { type: "p", text: "هناك فرق كبير بين التعليقات المفيدة والتعليقات المزعجة. التعليقات الجيدة تضيف قيمة، بينما السيئة تزيد فوضى الكود." },
        { type: "p", text: "التعليقات السيئة تشرحماذا يفعل الكود، أو مكررة، أو قديمة." },
        { type: "p", text: "التعليقات الجيدة تشرحلماذا تم اتخاذ قرار، أو تحذر من مشاكل معروفة، أو تشرح قيوداً غير واضحة." },
      ]},
      { title: "تعليقات TODO و FIXME", content: [
        { type: "p", text: "تعليقات <code>TODO</code> و <code>FIXME</code> أدوات مفيدة لتتبع المهام المعلقة. لكن يجب استخدامها باعتدال وسياق واضح." },
        { type: "callout", title: "نصيحة:", text: "استخدم أدوات مثل <code>eslint-plugin-no-todo</code> لتحديد حد أقصى لـ TODOs لكل ملف. إذا كان هناك أكثر من 3 TODOs في ملف واحد، قد تحتاج إلى إعادة تقييم الأولويات." },
      ]},
      { title: "توثيق الدوال باستخدام JSDoc", content: [
        { type: "p", text: "<strong>JSDoc</strong> هو معيار لتوثيق الدوال في JavaScript. يساعد المطورين على فهم كيفية استخدام الدالة دون قراءة الكود الداخلي." },
        { type: "callout", title: "متى تكتب JSDoc؟", text: "واجهات البرمجة العامة التي يستخدمها مطورون آخرون، الدوال المعقدة التي تحتاج إلى توثيق الاستخدام، الدوال التي تتفاعل مع قواعد البيانات أو واجهات البرمجة الخارجية. لا تكتب JSDoc للدوال البسيطة الواضحة." },
      ]},
      { title: "الكود الموثّق ذاتياً", content: [
        { type: "p", text: "أفضل تعليق هو <strong>كود يشرح نفسه</strong>. يمكن تحقيق ذلك بتسمية المتغيرات والدوال بشكل وصفي، واستخدام دوال صغيرة وبسيطة." },
      ]},
      { title: "توثيق README", content: [
        { type: "p", text: "ملف <code>README.md</code> هو البوابة الأولى لأي مشروع. يخبر المطورين الجدد بكيفية البدء في العمل على المشروع وفهمه." },
        { type: "callout-accent", title: "ما يجب أن يحتويه README:", text: "وصف واضح ومختصر للمشروع، خطوات التثبيت والاستخدام، أمثلة على الاستخدام، الإعدادات المطلوبة (متغيرات البيئة)، كيفية تشغيل الاختبارات، كيفية المساهمة." },
      ]},
      { title: "أفضل الممارسات للتعليقات", content: [
        { type: "li", text: "<strong>حافظ على تحديث التعليقات:</strong> التعليق القديم أسوأ من عدم وجود تعليق - إنه يضلل المطورين." },
        { type: "li", text: "<strong>لا تعلق على الكود الواضح:</strong> إذا احتاج الكود إلى تعليق، راجع تسمية المتغيرات والدوال أولاً." },
        { type: "li", text: "<strong>استخدم التعليقات لشرح لماذا فقط:</strong> الكود الواضح يشرحماذا من تلقاء نفسه." },
        { type: "li", text: "<strong>احذف التعليقات الميتة:</strong> الكود القديم لا يحتاج أن يكون في التعليقات." },
        { type: "li", text: "<strong>استخدم JSDoc لواجهات البرمجة العامة:</strong> يسهّل على المطورين فهم كيفية استخدام الدوال." },
        { type: "li", text: "<strong>استخدم TODO و FIXME بشكل مسؤول:</strong> أضف اسمك والتاريخ والمهام." },
        { type: "li", text: "<strong>وثّق القرارات المعمارية:</strong> اشرح لماذا اخترت حلولاً معينة بدلاً من أخرى." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "callout-primary", title: "القاعدة الذهبية:", text: "لا تشرحماذا، اشرح لماذا." },
        { type: "li", text: "التعليقات الجيدة تشرح السبب خلف القرارات، وليس ماذا يفعل الكود." },
        { type: "li", text: "تعليقات <code>TODO</code> و <code>FIXME</code> مفيدة لكن يجب استخدامها باعتدال." },
        { type: "li", text: "<strong>JSDoc</strong> يوثّق الدوال العامة بشكل احترافي." },
        { type: "li", text: "أفضل تعليق هو الكود الموثّق ذاتياً عبر التسمية الواضحة والدوال البسيطة." },
        { type: "li", text: "<code>README.md</code> هي البوابة الأولى للمشروع ويجب أن تكون شاملة." },
        { type: "li", text: "احذف التعليقات القديمة وحافظ على تحديث التعليقات الحالية." },
      ]},
    ],
    quiz: [
      { question: "ما هي القاعدة الذهبية للتعليقات في الكود النظيف؟", options: ["اكتب تعليقاً لكل سطر كود", "اشرحماذا وليس لماذا", "اشرхранبما وليسماذا", "لا تكتب أي تعليقات أبداً"], explanation: "القاعدة الذهبية هي: لا تشرحماذا (ماذا يفعل الكود)، اشرхранبما (لماذا اخترت هذا التصميم أو القرار). الكود الواضح يشرح نفسه - التعليقات الجيدة تشرح السبب." },
    ],
    challenge: { title: "تحدي: حسّن التعليقات", description: "لديك الكود التالي المليء بالتعليقات السيئة. مهمتك: 1. احذف التعليقات الواضحة والمكررة، 2. أعد تسمية المتغيرات والدوال لتكون وصفية، 3. أضف تعليقات لماذا فقط حيث تحتاج، 4. أضف JSDoc للدوال العامة." },
    cheatSheet: { title: "ملخص التعليقات والتوثيق", columns: [
      { heading: "أنواع التعليقات:", items: [
        '<strong style={{ color: "#a855f7" }}>تعليقات لماذا ✅</strong> - تشرح السبب خلف القرار',
        '<strong style={{ color: "#a855f7" }}>TODO / FIXME</strong> - تتبع المهام المعلقة والمشاكل المعروفة',
        '<strong style={{ color: "#a855f7" }}>JSDoc</strong> - توثّق الدوال العامة بالتفصيل',
        '<strong style={{ color: "#ef4444" }}>تعليقاتماذا ❌</strong> - تشرحماذا يفعل الكود الواضح',
      ]},
      { heading: "قواعد التعليقات:", items: [
        '<strong style={{ color: "#22c55e" }}>الكود الموثّق ذاتياً</strong> - الأسماء الواضحة تحل محل التعليقات',
        '<strong style={{ color: "#22c55e" }}>حدّث أو احذف</strong> - التعليقات القديمة أسوأ من عدم وجود تعليق',
        '<strong style={{ color: "#22c55e" }}>TODO مسؤول</strong> - أضف اسمك والتاريخ والسبب',
        '<strong style={{ color: "#3b82f6" }}>README شامل</strong> - التثبيت والاستخدام والإعدادات والمساهمة',
      ]},
    ]}
  },
  en: {
    sections: [
      { title: "Why are comments important?", content: [
        { type: "p", text: "Good comments are like <strong>road maps</strong> in code - they help developers understand <strong>why</strong> code was written that way, not <strong>what</strong> the code does. Clear code doesn't need comments explaining what it does, but needs comments explaining the reason behind decisions." },
        { type: "callout", title: "The Golden Rule:", text: "<strong>Don't explain WHAT, explain WHY.</strong> Good code explains itself - good comments explain the reason." },
      ]},
      { title: "Good Comments vs Bad Comments", content: [
        { type: "p", text: "There is a big difference between helpful comments and annoying comments. Good comments add value, while bad ones increase code clutter." },
        { type: "p", text: "Bad comments explain WHAT the code does, are repeated, or are outdated." },
        { type: "p", text: "Good comments explain WHY a decision was made, warn about known issues, or explain non-obvious constraints." },
      ]},
      { title: "TODO and FIXME Comments", content: [
        { type: "p", text: "<code>TODO</code> and <code>FIXME</code> comments are useful tools for tracking pending tasks. But they should be used in moderation and with clear context." },
        { type: "callout", title: "Tip:", text: "Use tools like <code>eslint-plugin-no-todo</code> to set a limit on TODOs per file. If there are more than 3 TODOs in one file, you may need to re-evaluate priorities." },
      ]},
      { title: "Documenting Functions with JSDoc", content: [
        { type: "p", text: "<strong>JSDoc</strong> is a standard for documenting functions in JavaScript. It helps developers understand how to use a function without reading the internal code." },
        { type: "callout", title: "When to write JSDoc?", text: "Public APIs used by other developers, complex functions requiring usage documentation, functions that interact with databases or external APIs. Don't write JSDoc for simple, clear functions." },
      ]},
      { title: "Self-Documenting Code", content: [
        { type: "p", text: "The best comment is <strong>code that explains itself</strong>. This can be achieved by naming variables and functions descriptively, and using simple small functions." },
      ]},
      { title: "README Documentation", content: [
        { type: "p", text: "The <code>README.md</code> file is the first gateway to any project. It tells new developers how to start working on and understanding the project." },
        { type: "callout-accent", title: "What a README should contain:", text: "A clear and short project description, installation and usage steps, usage examples, required settings (environment variables), how to run tests, how to contribute." },
      ]},
      { title: "Best Practices for Comments", content: [
        { type: "li", text: "<strong>Keep comments updated:</strong> An outdated comment is worse than no comment - it misleads developers." },
        { type: "li", text: "<strong>Don't comment on obvious code:</strong> If code needs a comment, review variable and function naming first." },
        { type: "li", text: "<strong>Use comments to explain WHY only:</strong> Clear code explains WHAT by itself." },
        { type: "li", text: "<strong>Delete dead comments:</strong> Old code doesn't need to be in comments." },
        { type: "li", text: "<strong>Use JSDoc for public APIs:</strong> Makes it easy for developers to understand how to use functions." },
        { type: "li", text: "<strong>Use TODO and FIXME responsibly:</strong> Add your name, the date, and the task." },
        { type: "li", text: "<strong>Document architectural decisions:</strong> Explain why you chose certain solutions over others." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "callout-primary", title: "Golden Rule:", text: "Don't explain WHAT, explain WHY." },
        { type: "li", text: "Good comments explain the reason behind decisions, not what code does." },
        { type: "li", text: "<code>TODO</code> and <code>FIXME</code> comments are useful but should be used in moderation." },
        { type: "li", text: "<strong>JSDoc</strong> documents public functions professionally." },
        { type: "li", text: "The best comment is self-documenting code via clear naming and simple functions." },
        { type: "li", text: "<code>README.md</code> is the first gateway to a project and should be comprehensive." },
        { type: "li", text: "Delete old comments and keep current comments updated." },
      ]},
    ],
    quiz: [
      { question: "What is the golden rule for comments in Clean Code?", options: ["Write a comment for every line of code", "Explain WHAT not WHY", "Explain WHY not WHAT", "Never write any comments"], explanation: "The golden rule is: Don't explain WHAT (what the code does), explain WHY (why you chose this design or decision). Clear code explains itself - good comments explain the reason." },
    ],
    challenge: { title: "Challenge: Improve the comments", description: "You have the following code full of bad comments. Your mission: 1. Delete obvious and repeated comments, 2. Rename variables and functions to be descriptive, 3. Add WHY comments only where needed, 4. Add JSDoc for public functions." },
    cheatSheet: { title: "Comments and Documentation Cheat Sheet", columns: [
      { heading: "Comment types:", items: [
        '<strong style={{ color: "#a855f7" }}>WHY comments ✅</strong> - Explain the reason behind the decision',
        '<strong style={{ color: "#a855f7" }}>TODO / FIXME</strong> - Track pending tasks and known issues',
        '<strong style={{ color: "#a855f7" }}>JSDoc</strong> - Document public functions in detail',
        '<strong style={{ color: "#ef4444" }}>WHAT comments ❌</strong> - Explain what obvious code does',
      ]},
      { heading: "Comment rules:", items: [
        '<strong style={{ color: "#22c55e" }}>Self-documenting code</strong> - Clear names replace comments',
        '<strong style={{ color: "#22c55e" }}>Update or delete</strong> - Old comments are worse than no comment',
        '<strong style={{ color: "#22c55e" }}>Responsible TODO</strong> - Add your name, date, and reason',
        '<strong style={{ color: "#3b82f6" }}>Comprehensive README</strong> - Installation, usage, settings, contribution',
      ]},
    ]}
  },
  fr: {
    sections: [
      { title: "Pourquoi les commentaires sont importants ?", content: [
        { type: "p", text: "Les bons commentaires sont comme des <strong>cartes routières</strong> dans le code - ils aident les développeurs à comprendre <strong>pourquoi</strong> le code a été écrit de cette façon, et non <strong>quoi</strong> fait le code. Le code clair n'a pas besoin de commentaires expliquant ce qu'il fait, mais a besoin de commentaires expliquant la raison derrière les décisions." },
        { type: "callout", title: "La règle d'or :", text: "<strong>N'expliquez pas QUOI, expliquez POURQUOI.</strong> Le bon code s'explique de lui-même - les bons commentaires expliquent la raison." },
      ]},
      { title: "Bons commentaires vs Mauvais commentaires", content: [
        { type: "p", text: "Il y a une grande différence entre les commentaires utiles et les commentaires ennuyeux. Les bons commentaires ajoutent de la valeur, tandis que les mauvais augmentent le désordre du code." },
        { type: "p", text: "Les mauvais commentaires expliquent QUOI fait le code, sont répétés ou sont obsolètes." },
        { type: "p", text: "Les bons commentaires expliquent POURQUOI une décision a été prise, avertissent des problèmes connus ou expliquent des contraintes non évidentes." },
      ]},
      { title: "Commentaires TODO et FIXME", content: [
        { type: "p", text: "Les commentaires <code>TODO</code> et <code>FIXME</code> sont des outils utiles pour suivre les tâches en attente. Mais ils doivent être utilisés avec modération et avec un contexte clair." },
        { type: "callout", title: "Conseil :", text: "Utilisez des outils comme <code>eslint-plugin-no-todo</code> pour limiter les TODOs par fichier. S'il y a plus de 3 TODOs dans un fichier, vous devrez peut-être réévaluer les priorités." },
      ]},
      { title: "Documenter les fonctions avec JSDoc", content: [
        { type: "p", text: "<strong>JSDoc</strong> est un standard pour documenter les fonctions en JavaScript. Il aide les développeurs à comprendre comment utiliser une fonction sans lire le code interne." },
        { type: "callout", title: "Quand écrire du JSDoc ?", text: "Les API publiques utilisées par d'autres développeurs, les fonctions complexes nécessitant une documentation d'utilisation, les fonctions qui interagissent avec des bases de données ou des API externes. N'écrivez pas de JSDoc pour les fonctions simples et claires." },
      ]},
      { title: "Code auto-documenté", content: [
        { type: "p", text: "Le meilleur commentaire est un <strong>code qui s'explique de lui-même</strong>. Cela peut être réalisé en nommant les variables et fonctions de manière descriptive, et en utilisant de petites fonctions simples." },
      ]},
      { title: "Documentation README", content: [
        { type: "p", text: "Le fichier <code>README.md</code> est la première porte d'entrée vers n'importe quel projet. Il indique aux nouveaux développeurs comment commencer à travailler sur et comprendre le projet." },
        { type: "callout-accent", title: "Ce qu'un README devrait contenir :", text: "Une description claire et courte du projet, les étapes d'installation et d'utilisation, des exemples d'utilisation, les paramètres requis (variables d'environnement), comment exécuter les tests, comment contribuer." },
      ]},
      { title: "Meilleures pratiques pour les commentaires", content: [
        { type: "li", text: "<strong>Maintenez les commentaires à jour :</strong> Un commentaire obsolète est pire qu'aucun commentaire - il induit en erreur les développeurs." },
        { type: "li", text: "<strong>Ne commentez pas le code évident :</strong> Si le code a besoin d'un commentaire, revoyez d'abord le nommage des variables et fonctions." },
        { type: "li", text: "<strong>Utilisez les commentaires pour expliquer POURQUOI uniquement :</strong> Le code clair explique QUOI de lui-même." },
        { type: "li", text: "<strong>Supprimez les commentaires morts :</strong> Le vieux code n'a pas besoin d'être dans les commentaires." },
        { type: "li", text: "<strong>Utilisez JSDoc pour les API publiques :</strong> Cela aide les développeurs à comprendre comment utiliser les fonctions." },
        { type: "li", text: "<strong>Utilisez TODO et FIXME de manière responsable :</strong> Ajoutez votre nom, la date et la tâche." },
        { type: "li", text: "<strong>Documentez les décisions architecturales :</strong> Expliquez pourquoi vous avez choisi certaines solutions plutôt que d'autres." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "callout-primary", title: "Règle d'or :", text: "N'expliquez pas QUOI, expliquez POURQUOI." },
        { type: "li", text: "Les bons commentaires expliquent la raison derrière les décisions, pas ce que fait le code." },
        { type: "li", text: "Les commentaires <code>TODO</code> et <code>FIXME</code> sont utiles mais doivent être utilisés avec modération." },
        { type: "li", text: "<strong>JSDoc</strong> documente les fonctions publiques de manière professionnelle." },
        { type: "li", text: "Le meilleur commentaire est un code auto-documenté via un nommage clair et des fonctions simples." },
        { type: "li", text: "<code>README.md</code> est la première porte d'entrée vers un projet et devrait être complet." },
        { type: "li", text: "Supprimez les anciens commentaires et maintenez les commentaires actuels à jour." },
      ]},
    ],
    quiz: [
      { question: "Quelle est la règle d'or pour les commentaires dans le Code Propre ?", options: ["Écrire un commentaire pour chaque ligne de code", "Expliquer QUOI pas POURQUOI", "Expliquer POURQUOI pas QUOI", "Ne jamais écrire de commentaires"], explanation: "La règle d'or est : N'expliquez pas QUOI (ce que fait le code), expliquez POURQUOI (pourquoi vous avez choisi ce design ou cette décision). Le code clair s'explique de lui-même - les bons commentaires expliquent la raison." },
    ],
    challenge: { title: "Défi : Améliorez les commentaires", description: "Vous avez le code suivant rempli de mauvais commentaires. Votre mission : 1. Supprimez les commentaires évidents et répétés, 2. Renommez les variables et fonctions pour qu'elles soient descriptives, 3. Ajoutez des commentaires POURQUOI uniquement où nécessaire, 4. Ajoutez du JSDoc pour les fonctions publiques." },
    cheatSheet: { title: "Référence des commentaires et de la documentation", columns: [
      { heading: "Types de commentaires :", items: [
        '<strong style={{ color: "#a855f7" }}>Commentaires POURQUOI ✅</strong> - Expliquent la raison derrière la décision',
        '<strong style={{ color: "#a855f7" }}>TODO / FIXME</strong> - Suivent les tâches en attente et les problèmes connus',
        '<strong style={{ color: "#a855f7" }}>JSDoc</strong> - Documentent les fonctions publiques en détail',
        '<strong style={{ color: "#ef4444" }}>Commentaires QUOI ❌</strong> - Expliquent ce que fait le code évident',
      ]},
      { heading: "Règles de commentaires :", items: [
        '<strong style={{ color: "#22c55e" }}>Code auto-documenté</strong> - Des noms clairs remplacent les commentaires',
        '<strong style={{ color: "#22c55e" }}>Mettez à jour ou supprimez</strong> - Les anciens commentaires sont pires que pas de commentaire',
        '<strong style={{ color: "#22c55e" }}>TODO responsable</strong> - Ajoutez votre nom, la date et la raison',
        '<strong style={{ color: "#3b82f6" }}>README complet</strong> - Installation, utilisation, paramètres, contribution',
      ]},
    ]}
  },
  de: {
    sections: [
      { title: "Warum sind Kommentare wichtig?", content: [
        { type: "p", text: "Gute Kommentare sind wie <strong>Wegweiser</strong> im Code - sie helfen Entwicklern zu verstehen, <strong>warum</strong> Code so geschrieben wurde, und nicht <strong>was</strong> der Code tut. Klarer Code braucht keine Kommentare, die erklären, was er tut, aber Kommentare, die den Grund hinter Entscheidungen erklären." },
        { type: "callout", title: "Die goldene Regel:", text: "<strong>Erklären Sie nicht WAS, erklären Sie WARUM.</strong> Guter Code erklärt sich selbst - gute Kommentare erklären den Grund." },
      ]},
      { title: "Gute Kommentare vs Schlechte Kommentare", content: [
        { type: "p", text: "Es gibt einen großen Unterschied zwischen hilfreichen und nervenden Kommentaren. Gute Kommentare fügen Wert hinzu, während schlechte den Code-Chaos erhöhen." },
        { type: "p", text: "Schlechte Kommentare erklären, WAS der Code tut, sind wiederholt oder veraltet." },
        { type: "p", text: "Gute Kommentare erklären, WARUM eine Entscheidung getroffen wurde, warnen vor bekannten Problemen oder erklären nicht-offensichtliche Einschränkungen." },
      ]},
      { title: "TODO- und FIXME-Kommentare", content: [
        { type: "p", text: "<code>TODO</code>- und <code>FIXME</code>-Kommentare sind nützliche Tools zur Verfolgung anstehender Aufgaben. Sie sollten jedoch mit Maß und klarem Kontext verwendet werden." },
        { type: "callout", title: "Tipp:", text: "Verwenden Sie Tools wie <code>eslint-plugin-no-todo</code>, um eine Grenze für TODOs pro Datei festzulegen. Wenn es mehr als 3 TODOs in einer Datei gibt, müssen Sie möglicherweise Prioritäten neu bewerten." },
      ]},
      { title: "Funktionen mit JSDokumentation", content: [
        { type: "p", text: "<strong>JSDoc</strong> ist ein Standard zur Dokumentation von Funktionen in JavaScript. Es hilft Entwicklern zu verstehen, wie eine Funktion verwendet wird, ohne den internen Code zu lesen." },
        { type: "callout", title: "Wann JSDoc schreiben?", text: "Öffentliche APIs, die von anderen Entwicklern verwendet werden, komplexe Funktionen, die eine Nutzungsdocs erfordern, Funktionen, die mit Datenbanken oder externen APIs interagieren. Schreiben Sie kein JSDoc für einfache, klare Funktionen." },
      ]},
      { title: "Selbst-dokumentierender Code", content: [
        { type: "p", text: "Der beste Kommentar ist <strong>Code, der sich selbst erklärt</strong>. Dies kann durch beschreibende Benennung von Variablen und Funktionen und die Verwendung einfacher kleiner Funktionen erreicht werden." },
      ]},
      { title: "README-Dokumentation", content: [
        { type: "p", text: "Die <code>README.md</code>-Datei ist das erste Tor zu jedem Projekt. Sie sagt neuen Entwicklern, wie sie anfangen können, am Projekt zu arbeiten und es zu verstehen." },
        { type: "callout-accent", title: "Was ein README enthalten sollte:", text: "Eine klare und kurze Projektbeschreibung, Installations- und Nutzungsschritte, Nutzungshinweise, erforderliche Einstellungen (Umgebungsvariablen), wie Tests ausgeführt werden, wie man beiträgt." },
      ]},
      { title: "Best Practices für Kommentare", content: [
        { type: "li", text: "<strong>Halten Sie Kommentare aktuell:</strong> Ein veralteter Kommentar ist schlechter als kein Kommentar - er irrt Entwickler in die Irre." },
        { type: "li", text: "<strong>Kommentieren Sie nicht offensichtlichen Code:</strong> Wenn Code einen Kommentar braucht, überprüfen Sie zuerst die Benennung von Variablen und Funktionen." },
        { type: "li", text: "<strong>Verwenden Sie Kommentare nur zum Erklären von WARUM:</strong> Klarer Code erklärt WAS von selbst." },
        { type: "li", text: "<strong>Löschen Sie tote Kommentare:</strong> Alter Code muss nicht in Kommentaren sein." },
        { type: "li", text: "<strong>Verwenden Sie JSDoc für öffentliche APIs:</strong> Es erleichtert Entwicklern das Verständnis der Funktionsnutzung." },
        { type: "li", text: "<strong>Verwenden Sie TODO und FIXME verantwortungsvoll:</strong> Fügen Sie Ihren Namen, das Datum und die Aufgabe hinzu." },
        { type: "li", text: "<strong>Dokumentieren Sie architektonische Entscheidungen:</strong> Erklären Sie, warum Sie bestimmte Lösungen anderen vorgezogen haben." },
      ]},
      { title: "Lektionszusammenfassung", content: [
        { type: "callout-primary", title: "Goldene Regel:", text: "Erklären Sie nicht WAS, erklären Sie WARUM." },
        { type: "li", text: "Gute Kommentare erklären den Grund hinter Entscheidungen, nicht was Code tut." },
        { type: "li", text: "<code>TODO</code>- und <code>FIXME</code>-Kommentare sind nützlich, sollten aber mit Maß verwendet werden." },
        { type: "li", text: "<strong>JSDokumentation</strong> dokumentiert öffentliche Funktionen professionell." },
        { type: "li", text: "Der beste Kommentar ist selbst-dokumentierender Code durch klare Benennung und einfache Funktionen." },
        { type: "li", text: "<code>README.md</code> ist das erste Tor zu einem Projekt und sollte umfassend sein." },
        { type: "li", text: "Löschen Sie alte Kommentare und halten Sie aktuelle Kommentare aktuell." },
      ]},
    ],
    quiz: [
      { question: "Was ist die goldene Regel für Kommentare in sauberem Code?", options: ["Schreiben Sie einen Kommentar für jede Codezeile", "Erklären Sie WAS nicht WARUM", "Erklären Sie WARUM nicht WAS", "Schreiben Sie nie Kommentare"], explanation: "Die goldene Regel ist: Erklären Sie nicht WAS (was der Code tut), erklären Sie WARUM (warum Sie dieses Design oder diese Entscheidung getroffen haben). Klarer Code erklärt sich selbst - gute Kommentare erklären den Grund." },
    ],
    challenge: { title: "Herausforderung: Verbessern Sie die Kommentare", description: "Sie haben den folgenden Code voller schlechter Kommentare. Ihre Aufgabe: 1. Löschen Sie offensichtliche und wiederholte Kommentare, 2. Benennen Sie Variablen und Funktionen beschreibend um, 3. Fügen Sie nur WARUM-Kommentare hinzu, wo nötig, 4. Fügen Sie JSDokumentation für öffentliche Funktionen hinzu." },
    cheatSheet: { title: "Übersicht über Kommentare und Dokumentation", columns: [
      { heading: "Kommentartypen:", items: [
        '<strong style={{ color: "#a855f7" }}>WARUM-Kommentare ✅</strong> - Erklären den Grund hinter der Entscheidung',
        '<strong style={{ color: "#a855f7" }}>TODO / FIXME</strong> - Verfolgen anstehende Aufgaben und bekannte Probleme',
        '<strong style={{ color: "#a855f7" }}>JSDokumentation</strong> - Dokumentieren öffentliche Funktionen im Detail',
        '<strong style={{ color: "#ef4444" }}>WAS-Kommentare ❌</strong> - Erklären, was offensichtlicher Code tut',
      ]},
      { heading: "Kommentarregeln:", items: [
        '<strong style={{ color: "#22c55e" }}>Selbst-dokumentierender Code</strong> - Klare Namen ersetzen Kommentare',
        '<strong style={{ color: "#22c55e" }}>Aktualisieren oder löschen</strong> - Alte Kommentare sind schlechter als keine',
        '<strong style={{ color: "#22c55e" }}>Verantwortungsvolles TODO</strong> - Fügen Sie Ihren Namen, das Datum und den Grund hinzu',
        '<strong style={{ color: "#3b82f6" }}>Umfassendes README</strong> - Installation, Nutzung, Einstellungen, Beitrag',
      ]},
    ]}
  },
};

export default translations;
