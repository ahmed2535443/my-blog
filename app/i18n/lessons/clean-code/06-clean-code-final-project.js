const translations = {
  ar: {
    sections: [
      { title: "نظرة عامة على المشروع", content: [
        { type: "p", text: "في هذا المشروع الأخير، ستطبق جميع مبادئ الكود النظيف التي تعلمتها طوال الدورة على كود حقيقي. ستبدأ بمشروع يحتوي على كود فوضوي، وتحلل المشاكل، وأخيراً تعيد كتابته بطريقة نظيفة واحترافية." },
        { type: "callout", title: "ما سنفعله في هذا المشروع:", text: "1. تحليل الكود السيئ وتحديد المشاكل، 2. تسمية المتغيرات والدوال بشكل صحيح، 3. تقسيم الدوال الطويلة إلى دوال صغيرة، 4. إزالة التكرار (مبدأ DRY)، 5. إضافة تعليقات مفيدة، 6. عرض النتيجة النهائية" },
      ]},
      { title: "الخطوة 1: تحليل الكود السيئ", content: [
        { type: "p", text: "هذا الكود مأخوذ من نظام إدارة الطلاب. الكود يعمل بشكل صحيح، لكنه يحتوي على العديد من المشاكل التي تجعله صعباً للصيانة والقراءة. دعنا نحلل المشاكل واحداً تلو الآخر." },
        { type: "callout", title: "المشاكل في الكود أعلاه:", text: "أسماء متغيرات غير واضحة (d, t, r, s, n)، دوال طويلة مركبة، تكرار الكود، لا تعليقات، أرقام سحرية (50, 90, 80, 70, 60)، اهتمامات مختلطة." },
      ]},
      { title: "الخطوة 2: تسمية المتغيرات والدوال", content: [
        { type: "p", text: "الخطوة الأولى في تحسين الكود هي تسمية كل شيء بشكل واضح ووصفي. الأسماء الجيدة تحل محل التعليقات وتجعل الكود يُقرأ كقصة." },
        { type: "callout-accent", title: "التحسينات:", text: "d → students, t → filterType, r → filteredStudents, s → score, n → name, proc → filterStudentsByType, calc → calculateStatistics, rpt → generateReportTable" },
      ]},
      { title: "الخطوة 3: تقسيم الدوال (استخراج الدوال)", content: [
        { type: "p", text: "الدوال الطويلة يجب تقسيمها إلى دوال أصغر كل واحدة تفعل شيئاً واحداً. هذا يجعل الكود أسهل للقراءة والاختبار وإعادة الاستخدام." },
      ]},
      { title: "الخطوة 4: إزالة التكرار (DRY)", content: [
        { type: "p", text: "مبدأ DRY (لا تكرر نفسك) يقول: أي قطعة من المعرفة يجب أن يكون لها تمثيل واحد. عندما تجد تكراراً، استخرجه في دالة مشتركة." },
      ]},
      { title: "الخطوة 5: إضافة تعليقات مفيدة", content: [
        { type: "p", text: "التعليقات الجيدة تشرح <strong>لماذا</strong> وليس <strong>ماذا</strong>. الكود الجيد يشرح نفسه، لكن أحياناً تحتاج إلى تعليقات لتوضيح السبب خلف القرارات المعمارية أو القيود الخاصة." },
      ]},
      { title: "الخطوة 6: النتيجة النهائية", content: [
        { type: "p", text: "الآن دعنا نرى الكود النظيف الكامل بعد تطبيق جميع المبادئ. الكود الناتج أسهل للقراءة والصيانة والاختبار." },
        { type: "callout-accent", title: "مقارنة بين الكود القديم والجديد:", text: "القراءة: الكود يُقرأ كقصة، الصيانة: تغيير درجة النجاح يتطلب تغيير مكان واحد، الاختبار: يمكن اختبار كل دالة بشكل مستقل، إعادة الاستخدام: يمكن استخدام الدوال في أجزاء مختلفة، التوسع: إضافة فلتر جديد = سطر واحد في filterStrategies" },
      ]},
      { title: "اختبار المعرفة", content: [] },
      { title: "تحدي عملي", content: [
        { type: "p", text: "الكود التالي يمثل نظام حساب فواتير بسيط لكن غير نظيف. مهمتك هي تطبيق جميع مبادئ الكود النظيف التي تعلمتها." },
        { type: "p", text: "المتطلبات: سمّ المتغيرات والدوال بشكل وصفي، قسّم الدوال الطويلة إلى دوال صغيرة، أزل التكرار، حوّل الأرقام السحرية إلى ثوابت، أضف تعليقات مفيدة حيث تحتاج." },
      ]},
      { title: "ملخص المشروع", content: [
        { type: "li", text: "<strong>قواعد التسمية:</strong> استخدم أسماء وصفية واضحة، اجعل الأسماء تُقرأ كقصة، تجنب الأسماء المختصرة، استخدم الثوابت للأرقام السحرية" },
        { type: "li", text: "<strong>قواعد الدوال:</strong> كل دالة تفعل شيئاً واحداً فقط، أبقِ الدوال صغيرة (أقل من 20 سطر)، استخدم معايير واضحة، قسّم الدوال الطويلة" },
        { type: "li", text: "<strong>مبادئ التنظيم:</strong> DRY: لا تكرر نفسك، KISS: أبقه بسيطاً، المسؤولية الفردية: مسؤولية واحدة، فصل الاهتمامات: افصل الاهتمامات" },
        { type: "li", text: "<strong>التعليقات:</strong> اشرح لماذا وليسماذا، لا تعلق على الكود الواضح، استخدم JSDoc للدوال العامة، حدّث التعليقات مع الكود" },
      ]},
    ],
    quiz: [
      { question: "أي من الأسماء التالية هو أفضل اسم لدالة تحسب متوسط درجة الطالب؟", options: ["calc", "doStuff", "calculateAverageScore", "func1"], explanation: "calculateAverageScore هو الأفضل لأنه يصف بوضوح ما تفعله الدالة: تحسب المعدل." },
      { question: "ما هو مبدأ DRY الذي ناقشناه في هذا الدرس؟", options: ["لا تكرر نفسك - لا تكرر نفسك", "افعل الصواب أمس - افعل الصواب أمس", "لا ترتاح أمس - لا ترتاح أمس", "عوائد التصميم - عوائد التصميم"], explanation: "DRY يعني لا تكرر نفسك. أي قطعة من المعرفة أو المنطق يجب أن يكون لها تمثيل واحد في النظام." },
      { question: "لماذا نحوّل الأرقام السحرية مثل 50 و 90 إلى ثوابت؟", options: ["لأن JavaScript لا يدعم الأرقام", "لأن الثوابت أسهل في التغيير وتجعل الكود أوضح", "لأن الأرقام تسبب أخطاء", "لأن الثوابت أسرع في التنفيذ"], explanation: "الثوابت تجعل الكود أسهل للصيانة (تغيير مكان واحد فقط) وتجعل الكود أوضح (PASSING_SCORE بدلاً من 50)." },
    ],
    challenge: { title: "أعد هيكلة نظام حساب الفواتير", description: "طبق جميع مبادئ الكود النظيف التي تعلمتها لإعادة هيكلة كود حساب الفواتير." },
    cheatSheet: { title: "مرجع سريع للكود النظيف", columns: [
      { heading: "قواعد التسمية:", items: [
        "استخدم أسماء وصفية واضحة",
        "اجعل الأسماء تُقرأ كقصة",
        "تجنب الأسماء المختصرة",
        "استخدم الثوابت للأرقام السحرية",
      ]},
      { heading: "قواعد الدوال:", items: [
        "كل دالة تفعل شيئاً واحداً فقط",
        "أبقِ الدوال صغيرة (أقل من 20 سطر)",
        "استخدم معايير واضحة",
        "قسّم الدوال الطويلة",
      ]},
      { heading: "مبادئ التنظيم:", items: [
        "DRY: لا تكرر نفسك",
        "KISS: أبقه بسيطاً",
        "المسؤولية الفردية: مسؤولية واحدة",
        "فصل الاهتمامات: افصل الاهتمامات",
      ]},
      { heading: "التعليقات:", items: [
        "اشرح لماذا وليسماذا",
        "لا تعلق على الكود الواضح",
        "استخدم JSDoc للدوال العامة",
        "حدّث التعليقات مع الكود",
      ]},
    ]}
  },
  en: {
    sections: [
      { title: "Project Overview", content: [
        { type: "p", text: "In this final project, you will apply all the Clean Code principles you've learned throughout the course to real code. You'll start with a project containing messy code, analyze the problems, and finally rewrite it in a clean and professional way." },
        { type: "callout", title: "What we'll do in this project:", text: "1. Analyze bad code and identify problems, 2. Name variables and functions correctly, 3. Split long functions into small functions, 4. Remove duplication (DRY Principle), 5. Add useful comments, 6. Show the final result" },
      ]},
      { title: "Step 1: Analyze the Bad Code", content: [
        { type: "p", text: "This code is taken from a student management system. The code works correctly, but it contains many problems that make it hard to maintain and read. Let's analyze the problems one by one." },
        { type: "callout", title: "Problems in the code above:", text: "Unclear variable names (d, t, r, s, n), long compound functions, code duplication, no comments, magic numbers (50, 90, 80, 70, 60), mixed concerns." },
      ]},
      { title: "Step 2: Name Variables and Functions", content: [
        { type: "p", text: "The first step in improving code is to name everything clearly and descriptively. Good names replace comments and make code read like a story." },
        { type: "callout-accent", title: "Improvements:", text: "d → students, t → filterType, r → filteredStudents, s → score, n → name, proc → filterStudentsByType, calc → calculateStatistics, rpt → generateReportTable" },
      ]},
      { title: "Step 3: Split Functions (Extract Functions)", content: [
        { type: "p", text: "Long functions should be split into smaller functions that each do one thing. This makes code easier to read, test, and reuse." },
      ]},
      { title: "Step 4: Remove Duplication (DRY)", content: [
        { type: "p", text: "The DRY (Don't Repeat Yourself) principle says: any piece of knowledge should have one representation. When you find duplication, extract it into a shared function." },
      ]},
      { title: "Step 5: Add Useful Comments", content: [
        { type: "p", text: "Good comments explain <strong>why</strong> not <strong>what</strong>. Good code explains itself, but sometimes you need comments to clarify the reason behind architectural decisions or specific constraints." },
      ]},
      { title: "Step 6: Final Result", content: [
        { type: "p", text: "Now let's see the complete clean code after applying all the principles. The resulting code is easier to read, maintain, and test." },
        { type: "callout-accent", title: "Comparison between old and new code:", text: "Readability: Code reads like a story, Maintainability: Changing passing score requires changing one place, Testability: Each function can be tested independently, Reusability: Functions can be used in different parts, Extensibility: Adding a new filter = one line in filterStrategies" },
      ]},
      { title: "Knowledge Test", content: [] },
      { title: "Practical Challenge", content: [
        { type: "p", text: "The following code represents a simple but unclean invoice calculation system. Your task is to apply all the Clean Code principles you've learned." },
        { type: "p", text: "Requirements: Name variables and functions descriptively, split long functions into small functions, remove duplication, convert magic numbers to constants, add useful comments where needed." },
      ]},
      { title: "Project Summary", content: [
        { type: "li", text: "<strong>Naming Rules:</strong> Use descriptive clear names, make names read like a story, avoid abbreviated names, use constants for magic numbers" },
        { type: "li", text: "<strong>Function Rules:</strong> Each function does one thing only, keep functions small (under 20 lines), use clear parameters, split long functions" },
        { type: "li", text: "<strong>Organization Principles:</strong> DRY: Don't repeat yourself, KISS: Keep it simple and stupid, Single Responsibility: one responsibility, Separation of Concerns: separate concerns" },
        { type: "li", text: "<strong>Comments:</strong> Explain WHY not WHAT, don't comment on obvious code, use JSDoc for public functions, update comments with code" },
      ]},
    ],
    quiz: [
      { question: "Which of the following is the best name for a function that calculates the average student score?", options: ["calc", "doStuff", "calculateAverageScore", "func1"], explanation: "calculateAverageScore is the best because it clearly describes what the function does: calculates the average score." },
      { question: "What is the DRY principle we discussed in this lesson?", options: ["Don't Repeat Yourself - Don't repeat yourself", "Do Right Yesterday - Do the right thing yesterday", "Don't Rest Yesterday - Don't rest yesterday", "Design Related Yields - Design related yields"], explanation: "DRY means Don't Repeat Yourself. Any piece of knowledge or logic should have one representation in the system." },
      { question: "Why do we convert magic numbers like 50 and 90 to constants?", options: ["Because JavaScript doesn't support numbers", "Because constants are easier to change and make code clearer", "Because numbers cause errors", "Because constants are faster to execute"], explanation: "Constants make code easier to maintain (change one place only) and make code clearer (PASSING_SCORE instead of 50)." },
    ],
    challenge: { title: "Restructure the invoice calculation system", description: "Apply all Clean Code principles you've learned to refactor the invoice calculation code." },
    cheatSheet: { title: "Clean Code Quick Reference", columns: [
      { heading: "Naming rules:", items: [
        "Use descriptive, clear names",
        "Make names read like a story",
        "Avoid abbreviated names",
        "Use constants for magic numbers",
      ]},
      { heading: "Function rules:", items: [
        "Each function does one thing only",
        "Keep functions small (under 20 lines)",
        "Use clear parameters",
        "Split long functions",
      ]},
      { heading: "Organization principles:", items: [
        "DRY: Don't repeat yourself",
        "KISS: Keep it simple and stupid",
        "Single Responsibility: one responsibility",
        "Separation of Concerns: separate concerns",
      ]},
      { heading: "Comments:", items: [
        "Explain WHY not WHAT",
        "Don't comment obvious code",
        "Use JSDoc for public functions",
        "Update comments with code",
      ]},
    ]}
  },
  fr: {
    sections: [
      { title: "Vue d'ensemble du projet", content: [
        { type: "p", text: "Dans ce projet final, vous appliquerez tous les principes du Code Propre que vous avez appris tout au long du cours à du vrai code. Vous commencerez avec un projet contenant du code désordonné, analyserez les problèmes, et le réécrirez proprement et professionnellement." },
        { type: "callout", title: "Ce que nous ferons dans ce projet :", text: "1. Analyser le mauvais code et identifier les problèmes, 2. Nommer correctement les variables et fonctions, 3. Diviser les fonctions longues en petites fonctions, 4. Supprimer la duplication (Principe DRY), 5. Ajouter des commentaires utiles, 6. Montrer le résultat final" },
      ]},
      { title: "Étape 1 : Analyser le mauvais code", content: [
        { type: "p", text: "Ce code provient d'un système de gestion d'étudiants. Le code fonctionne correctement, mais il contient de nombreux problèmes qui le rendent difficile à maintenir et à lire. Analysons les problèmes un par un." },
        { type: "callout", title: "Problèmes dans le code ci-dessus :", text: "Noms de variables peu clairs (d, t, r, s, n), fonctions longues et composées, duplication de code, pas de commentaires, nombres magiques (55, 90, 80, 70, 60), préoccupations mélangées." },
      ]},
      { title: "Étape 2 : Nommer les variables et fonctions", content: [
        { type: "p", text: "La première étape pour améliorer le code est de nommer tout clairement et de manière descriptive. Les bons noms remplacent les commentaires et font lire le code comme une histoire." },
        { type: "callout-accent", title: "Améliorations :", text: "d → students, t → filterType, r → filteredStudents, s → score, n → name, proc → filterStudentsByType, calc → calculateStatistics, rpt → generateReportTable" },
      ]},
      { title: "Étape 3 : Diviser les fonctions", content: [
        { type: "p", text: "Les fonctions longues doivent être divisées en fonctions plus petites qui font chacune une chose. Cela rend le code plus facile à lire, tester et réutiliser." },
      ]},
      { title: "Étape 4 : Supprimer la duplication (DRY)", content: [
        { type: "p", text: "Le principe DRY (Ne vous répétez pas) dit : toute connaissance devrait avoir une seule représentation. Quand vous trouvez de la duplication, extrayez-la dans une fonction partagée." },
      ]},
      { title: "Étape 5 : Ajouter des commentaires utiles", content: [
        { type: "p", text: "Les bons commentaires expliquent <strong>pourquoi</strong> pas <strong>quoi</strong>. Le bon code s'explique de lui-même, mais parfois vous avez besoin de commentaires pour clarifier la raison derrière les décisions architecturales." },
      ]},
      { title: "Étape 6 : Résultat final", content: [
        { type: "p", text: "Voyons maintenant le code propre complet après l'application de tous les principes. Le code résultant est plus facile à lire, à maintenir et à tester." },
        { type: "callout-accent", title: "Comparaison entre l'ancien et le nouveau code :", text: "Lisibilité : Le code se lit comme une histoire, Maintenabilité : Modifier la note de passage nécessite de changer un seul endroit, Testabilité : Chaque fonction peut être testée indépendamment, Réutilisabilité : Les fonctions peuvent être utilisées dans différentes parties, Extensibilité : Ajouter un nouveau filtre = une ligne dans filterStrategies" },
      ]},
      { title: "Test de connaissances", content: [] },
      { title: "Défi pratique", content: [
        { type: "p", text: "Le code suivant représente un système simple de calcul de factures mais non propre. Votre tâche est d'appliquer tous les principes du Code Propre que vous avez appris." },
        { type: "p", text: "Exigences : Nommez les variables et fonctions de manière descriptive, divisez les fonctions longues en petites fonctions, supprimez la duplication, convertissez les nombres magiques en constantes, ajoutez des commentaires utiles si nécessaire." },
      ]},
      { title: "Résumé du projet", content: [
        { type: "li", text: "<strong>Règles de nommage :</strong> Utilisez des noms descriptifs et clairs, faites lire les noms comme une histoire, évitez les noms abrégés, utilisez des constantes pour les nombres magiques" },
        { type: "li", text: "<strong>Règles des fonctions :</strong> Chaque fonction ne fait qu'une chose, gardez les fonctions petites (moins de 20 lignes), utilisez des paramètres clairs, divisez les fonctions longues" },
        { type: "li", text: "<strong>Principes d'organisation :</strong> DRY : Ne vous répétez pas, KISS : Gardez-le simple, Responsabilité unique : une responsabilité, Séparation des responsabilités : séparez les préoccupations" },
        { type: "li", text: "<strong>Commentaires :</strong> Expliquez POURQUOI pas QUOI, ne commentez pas le code évident, utilisez JSDoc pour les fonctions publiques, mettez à jour les commentaires avec le code" },
      ]},
    ],
    quiz: [
      { question: "Lequel des suivants est le meilleur nom pour une fonction qui calcule la note moyenne des étudiants ?", options: ["calc", "doStuff", "calculateAverageScore", "func1"], explanation: "calculateAverageScore est le meilleur car il décrit clairement ce que fait la fonction : calcule la note moyenne." },
      { question: "Quel est le principe DRY que nous avons discuté dans cette leçon ?", options: ["Ne vous répétez pas - Ne vous répétez pas", "Faites bien hier - Faites le bien hier", "Ne vous reposez hier - Ne vous reposez pas hier", "Rendements liés au design - Rendements liés au design"], explanation: "DRY signifie Ne vous répétez pas. Toute connaissance ou logique devrait avoir une seule représentation dans le système." },
      { question: "Pourquoi convertissons-nous les nombres magiques comme 50 et 90 en constantes ?", options: ["Parce que JavaScript ne supporte pas les nombres", "Parce que les constantes sont plus faciles à changer et rendent le code plus clair", "Parce que les nombres causent des erreurs", "Parce que les constantes sont plus rapides à exécuter"], explanation: "Les constantes rendent le code plus facile à maintenir (changer un seul endroit) et rendent le code plus clair (PASSING_SCORE au lieu de 50)." },
    ],
    challenge: { title: "Restructurez le système de calcul de factures", description: "Appliquez tous les principes du Code Propre que vous avez appris pour refactoriser le code de calcul de factures." },
    cheatSheet: { title: "Référence rapide du Code Propre", columns: [
      { heading: "Règles de nommage :", items: [
        "Utilisez des noms descriptifs et clairs",
        "Faites lire les noms comme une histoire",
        "Évitez les noms abrégés",
        "Utilisez des constantes pour les nombres magiques",
      ]},
      { heading: "Règles des fonctions :", items: [
        "Chaque fonction ne fait qu'une chose",
        "Gardez les fonctions petites (moins de 20 lignes)",
        "Utilisez des paramètres clairs",
        "Divisez les fonctions longues",
      ]},
      { heading: "Principes d'organisation :", items: [
        "DRY : Ne vous répétez pas",
        "KISS : Gardez-le simple",
        "Responsabilité unique : une responsabilité",
        "Séparation des responsabilités : séparez les préoccupations",
      ]},
      { heading: "Commentaires :", items: [
        "Expliquez POURQUOI pas QUOI",
        "Ne commentez pas le code évident",
        "Utilisez JSDoc pour les fonctions publiques",
        "Mettez à jour les commentaires avec le code",
      ]},
    ]}
  },
  de: {
    sections: [
      { title: "Projektübersicht", content: [
        { type: "p", text: "In diesem Endprojekt wenden Sie alle Sauber-Code-Prinzipien an, die Sie im gesamten Kurs gelernt haben, auf echten Code an. Sie beginnen mit einem Projekt, das unordentlichen Code enthält, analysieren die Probleme und schreiben ihn schließlich sauber und professionell um." },
        { type: "callout", title: "Was wir in diesem Projekt tun werden:", text: "1. Schlechten Code analysieren und Probleme identifizieren, 2. Variablen und Funktionen korrekt benennen, 3. Lange Funktionen in kleine Funktionen aufteilen, 4. Duplizierung entfernen (DRY-Prinzip), 5. Nützliche Kommentare hinzufügen, 6. Das Endergebnis zeigen" },
      ]},
      { title: "Schritt 1: Schlechten Code analysieren", content: [
        { type: "p", text: "Dieser Code stammt aus einem Studentenverwaltungssystem. Der Code funktioniert korrekt, enthält aber viele Probleme, die ihn schwer wartbar und lesbar machen. Lassen Sie uns die Probleme einzeln analysieren." },
        { type: "callout", title: "Probleme im obigen Code:", text: "Unklare Variablennamen (d, t, r, s, n), lange zusammengesetzte Funktionen, Code-Duplizierung, keine Kommentare, Zahlenmagie (50, 90, 80, 70, 60), vermischte Anliegen." },
      ]},
      { title: "Schritt 2: Variablen und Funktionen benennen", content: [
        { type: "p", text: "Der erste Schritt zur Codeverbesserung ist, alles klar und beschreibend zu benennen. Gute Namen ersetzen Kommentare und lassen Code wie eine Geschichte lesen." },
        { type: "callout-accent", title: "Verbesserungen:", text: "d → students, t → filterType, r → filteredStudents, s → score, n → name, proc → filterStudentsByType, calc → calculateStatistics, rpt → generateReportTable" },
      ]},
      { title: "Schritt 3: Funktionen aufteilen", content: [
        { type: "p", text: "Lange Funktionen sollten in kleinere Funktionen aufgeteilt werden, die jeweils eine Sache tun. Das macht Code leichter lesbar, testbar und wiederverwendbar." },
      ]},
      { title: "Schritt 4: Duplizierung entfernen (DRY)", content: [
        { type: "p", text: "Das DRY-Prinzip (Wiederholen Sie sich nicht) besagt: Jedes Wissensstück sollte eine einzige Repräsentation haben. Wenn Sie Duplizierung finden, extrahieren Sie sie in eine gemeinsame Funktion." },
      ]},
      { title: "Schritt 5: Nützliche Kommentare hinzufügen", content: [
        { type: "p", text: "Gute Kommentare erklären <strong>warum</strong> nicht <strong>was</strong>. Guter Code erklärt sich selbst, aber manchmal brauchen Sie Kommentare, um den Grund hinter architektonischen Entscheidungen zu klären." },
      ]},
      { title: "Schritt 6: Endergebnis", content: [
        { type: "p", text: "Sehen wir uns nun den vollständigen sauberen Code nach Anwendung aller Prinzipien an. Der resultierende Code ist leichter lesbar, wartbar und testbar." },
        { type: "callout-accent", title: "Vergleich zwischen altem und neuem Code:", text: "Lesbarkeit: Code liest sich wie eine Geschichte, Wartbarkeit: Bestehende Note zu ändern erfordert Änderung nur eines Orts, Testbarkeit: Jede Funktion kann unabhängig getestet werden, Wiederverwendbarkeit: Funktionen können in verschiedenen Teilen verwendet werden, Erweiterbarkeit: Neuen Filter hinzufügen = eine Zeile in filterStrategies" },
      ]},
      { title: "Wissenstest", content: [] },
      { title: "Praktische Herausforderung", content: [
        { type: "p", text: "Der folgende Code repräsentiert ein einfaches, aber unsauberes Rechnungsberechnungssystem. Ihre Aufgabe ist es, alle Sauber-Code-Prinzipien anzuwenden, die Sie gelernt haben." },
        { type: "p", text: "Anforderungen: Benennen Sie Variablen und Funktionen beschreibend, teilen Sie lange Funktionen in kleine Funktionen auf, entfernen Sie Duplizierung, konvertieren Sie Zahlenmagie in Konstanten, fügen Sie nützliche Kommentare hinzu, wo nötig." },
      ]},
      { title: "Projektzusammenfassung", content: [
        { type: "li", text: "<strong>Benennungsregeln:</strong> Verwenden Sie beschreibende klare Namen, lassen Sie Namen wie eine Geschichte lesen, vermeiden Sie abgekürzte Namen, verwenden Sie Konstanten für Zahlenmagie" },
        { type: "li", text: "<strong>Funktionsregeln:</strong> Jede Funktion tut nur eine Sache, halten Sie Funktionen klein (unter 20 Zeilen), verwenden Sie klare Parameter, teilen Sie lange Funktionen auf" },
        { type: "li", text: "<strong>Organisationsprinzipien:</strong> DRY: Wiederholen Sie sich nicht, KISS: Halten Sie es einfach, Verantwortliche Einzelheit: eine Verantwortung, Trennung der Anliegen: trennen Sie Anliegen" },
        { type: "li", text: "<strong>Kommentare:</strong> Erklären Sie WARUM nicht WAS, kommentieren Sie nicht offensichtlichen Code, verwenden Sie JSDokumentation für öffentliche Funktionen, aktualisieren Sie Kommentare mit dem Code" },
      ]},
    ],
    quiz: [
      { question: "Welche der folgenden ist der beste Name für eine Funktion, die die durchschnittliche Studentenbewertung berechnet?", options: ["calc", "doStuff", "calculateAverageScore", "func1"], explanation: "calculateAverageScore ist der Beste, weil er klar beschreibt, was die Funktion tut: die durchschnitliche Bewertung berechnet." },
      { question: "Was ist das DRY-Prinzip, das wir in dieser Lektion besprochen haben?", options: ["Wiederholen Sie sich nicht - Wiederholen Sie sich nicht", "Machen Sie es richtig gestern - Machen Sie es richtig gestern", "Rasten Sie nicht gestern - Rasten Sie nicht gestern", "Design-bezogene Erträge - Design-bezogene Erträge"], explanation: "DRY bedeutet Wiederholen Sie sich nicht. Jedes Stück Wissen oder Logik sollte eine einzige Repräsentation im System haben." },
      { question: "Warum konvertieren wir Zahlenmagie wie 50 und 90 in Konstanten?", options: ["Weil JavaScript keine Zahlen unterstützt", "Weil Konstanten leichter zu ändern sind und den Code klarer machen", "Weil Zahlen Fehler verursachen", "Weil Konstanten schneller ausgeführt werden"], explanation: "Konstanten machen Code leichter wartbar (nur einen Ort ändern) und machen Code klarer (PASSING_SCORE statt 50)." },
    ],
    challenge: { title: "Restrukturieren Sie das Rechnungsberechnungssystem", description: "Wenden Sie alle Sauber-Code-Prinzipien an, die Sie gelernt haben, um den Code der Rechnungsberechnung zu refaktorisieren." },
    cheatSheet: { title: "Schnellreferenz für Sauber-Code", columns: [
      { heading: "Benennungsregeln:", items: [
        "Verwenden Sie beschreibende, klare Namen",
        "Lassen Sie Namen wie eine Geschichte lesen",
        "Vermeiden Sie abgekürzte Namen",
        "Verwenden Sie Konstanten für Zahlenmagie",
      ]},
      { heading: "Funktionsregeln:", items: [
        "Jede Funktion tut nur eine Sache",
        "Halten Sie Funktionen klein (unter 20 Zeilen)",
        "Verwenden Sie klare Parameter",
        "Teilen Sie lange Funktionen auf",
      ]},
      { heading: "Organisationsprinzipien:", items: [
        "DRY: Wiederholen Sie sich nicht",
        "KISS: Halten Sie es einfach",
        "Verantwortliche Einzelheit: eine Verantwortung",
        "Trennung der Anliegen: trennen Sie Anliegen",
      ]},
      { heading: "Kommentare:", items: [
        "Erklären Sie WARUM nicht WAS",
        "Kommentieren Sie nicht offensichtlichen Code",
        "Verwenden Sie JSDokumentation für öffentliche Funktionen",
        "Aktualisieren Sie Kommentare mit dem Code",
      ]},
    ]}
  },
};

export default translations;
