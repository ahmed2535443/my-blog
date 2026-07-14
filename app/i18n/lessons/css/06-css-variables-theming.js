const translations = {
  ar: {
    sections: [
      {
        title: "ما هي متغيرات CSS",
        content: [
          { type: "p", text: "متغيرات CSS (تُعرف أيضاً بـ <strong>CSS Custom Properties</strong>) هي متغيرات حقيقية معرّفة ومُستخدمة مباشرة داخل CSS نفسه. وهي واحدة من أقوى الميزات التي أضافتها مواصفات CSS الحديثة." },
          { type: "p", text: "تبدأ دائماً بـ <code>--</code> وتُستدعى باستخدام الدالة <code>var()</code>. على عكس متغيرات Sass/Less، تعمل متغيرات CSS مباشرة في المتصفح دون أي معالجة مسبقة." },
          { type: "p", text: "الفرق الرئيسي مع متغيرات Sass: متغيرات CSS <strong>ديناميكية</strong> وتعمل أثناء التشغيل. يمكنك تغييرها باستخدام JavaScript في أي وقت، وتورث عبر شجرة DOM مثل خصائص CSS الأخرى." }
        ]
      },
      {
        title: "لماذا نستخدمها",
        content: [
          { type: "p", text: "تحل متغيرات CSS عدة مشاكل حرجة في تطوير الواجهة الأمامية:" },
          { type: "li", text: "<strong>إعادة الاستخدام</strong> — حدد قيمة مرة واحدة واستخدمها في مئات الأماكن" },
          { type: "li", text: "<strong>السمات</strong> — غيّر مظهر الموقع بالكامل بتغيير متغير واحد" },
          { type: "li", text: "<strong>الصيانة</strong> — تغيير لون واحد في مكان واحد يحدث جميع النسخ" },
          { type: "li", text: "<strong>الاستجابة</strong> — أعد تعريف المتغيرات في Media Queries لتغيير التصميم" },
          { type: "li", text: "<strong>تكامل JavaScript</strong> — تفاعل مباشر بين CSS و JS عبر المتغيرات" },
          { type: "li", text: "<strong>بدون خطوة بناء</strong> — تعمل مباشرة في المتصفح دون Sass أو معالجة مسبقة" }
        ]
      },
      {
        title: "المشكلة التي تحلها",
        content: [
          { type: "p", text: "تخيل أن لديك نظام تصميم بألوان وخطوط ومسافات محددة. بدون المتغيرات، عليك تكرار هذه القيم في كل ملف CSS:" },
          { type: "callout-accent", title: "مشكلة التكرار", text: "إذا أردت تغيير لون الحد من #e5e7eb إلى #d1d5db، ستحتاج لتعديل كل ملف يدوياً! مع المتغيرات، غيّره مرة واحدة في التعريف وانتهيت." },
          { type: "p", text: "مع المتغيرات، جميع القيم تُجمع في مكان واحد وتُستخدم في كل مكان آخر. إذا أردت تغيير أي قيمة، فقط غيّر التعريف." }
        ]
      },
      {
        title: "شرح بسيط",
        content: [
          { type: "p", text: "دعنا نشرح كل مفهوم ببساطة قبل الغوص في الكود:" },
          { type: "li", text: "<strong>التعريف</strong> — استخدم -- لتعريف متغير داخل { } محدد أو :root للنطاق العام" },
          { type: "li", text: "<strong>الاستخدام مع var()</strong> — اقرأ قيمة المتغير؛ يمكنك تمرير اسم + قيمة احتياطية" },
          { type: "li", text: "<strong>النطاق</strong> — تتبع المتغيرات قواعد نطاق CSS؛ العناصر الفرعية ترث من الأصل" },
          { type: "li", text: "<strong>القيم الاحتياطية</strong> — var(--name, fallback) تمنع الأخطاء عند عدم تعريف المتغير" },
          { type: "li", text: "<strong>دالة Light-Dark()</strong> — تختار تلقائياً القيمة الفاتحة أو الداكنة بناءً على color-scheme" }
        ]
      },
      {
        title: "خلف الكواليس",
        content: [
          { type: "p", text: "إليك ما يحدث في المتصفح عند استخدام متغيرات CSS:" },
          { type: "li", text: "<strong>المعالجة الأولية:</strong> يقرأ المتصفح CSS ويخزن المتغيرات مع نطاقها - لم تُحسب بعد" },
          { type: "li", text: "<strong>الحل والوراثة:</strong> عند الوصول إلى var()، يبحث المتصفح في النطاق الحالي → الأب → :root → الاحتياطي" },
          { type: "li", text: "<strong>إعادة الحساب التلقائية:</strong> عند تغيير متغير CSS، يحسب المتصفح جميع الخصائص التابعة من جديد" },
          { type: "li", text: "<strong>مقارنة بمتغيرات Sass:</strong> تحسب Sass أثناء البناء (قيم ثابتة)، تحسب CSS أثناء التشغيل (ديناميكية)" }
        ]
      },
      {
        title: "الأخطاء الشائعة",
        content: [
          { type: "li", text: "<strong>الخطأ 1: نسيان الشرطة المزدوجة (--)</strong> — primary: #2563eb هي خاصية CSS عادية، ليست متغيراً" },
          { type: "li", text: "<strong>الخطأ 2: خطأ إملائي في اسم المتغير</strong> — var(--primary-colour) لن تجد --primary-color" },
          { type: "li", text: "<strong>الخطأ 3: استخدام القيمة مباشرة بدون var()</strong> — background: --primary CSS غير صالح" },
          { type: "li", text: "<strong>الخطأ 4: استخدام !important مع المتغيرات</strong> — يسبب مشاكل الصيانة؛ استخدم النوعية الصحيحة بدلاً من ذلك" },
          { type: "li", text: "<strong>الخطأ 5: عدم توفير قيم احتياطية</strong> — var(--undefined) تجعل الخاصية غير صالحة" },
          { type: "li", text: "<strong>الخطأ 6: استخدام var() لأسماء الخصائص أو المحددات</strong> — var() تعمل فقط كقيمة" }
        ]
      },
      {
        title: "أفضل الممارسات",
        content: [
          { type: "li", text: "1. استخدم نظام تسمية متسق للمتغيرات (دلالي، مبني على الحالة)" },
          { type: "li", text: "2. فصل ملفات التعريف (tokens.css) عن ملفات الاستخدام (components.css)" },
          { type: "li", text: "3. استخدم color-mix() لتوليد درجات الألوان تلقائياً" },
          { type: "li", text: "4. استخدم light-dark() لتبسيط تبديل السمة" },
          { type: "li", text: "5. استخدم data-attributes لتبديل السمات" },
          { type: "li", text: "6. استخدم مكونات معزولة بنطاق محلي" }
        ]
      }
    ],
    quiz: [
      {
        question: "ما الفرق الأساسي بين متغيرات CSS ومتغيرات Sass؟",
        options: [
          "متغيرات Sass تعمل مباشرة في المتصفح، متغيرات CSS تحتاج معالجاً مسبقاً",
          "تُحسب متغيرات CSS أثناء التشغيل ويمكن تغييرها باستخدام JavaScript، بينما تُحسب متغيرات Sass أثناء البناء",
          "متغيرات CSS لا تدعم القيم الاحتياطية بينما متغيرات Sass تدعمها",
          "لا يوجد فرق جوهري - كلاهما يخدم نفس الغرض"
        ],
        correctAnswer: 1,
        explanation: "الفرق الرئيسي هو أن CSS Custom Properties تعمل أثناء التشغيم ويمكن تغييرها ديناميكياً عبر JavaScript. تُحوّل Sass Variables إلىقيم ثابتة أثناء البناء ولا يمكن تغييرها أثناء التشغيل."
      },
      {
        question: "متى تستخدم light-dark() ومتى تستخدم prefers-color-scheme؟",
        options: [
          "light-dark() للألوان الدلالية، prefers-color-scheme للخطوط",
          "light-dark() تبسط ضبط لونين في مكان واحد، prefers-color-scheme تحتاج Media Query لكل خاصية",
          "prefers-color-scheme أحدث من light-dark() لذا استخدمها دائماً",
          "كلاهما متطابق تماماً دون فرق"
        ],
        correctAnswer: 1,
        explanation: "تأخذ light-dark() لونين (فاتح وداكن) وتختار تلقائياً بناءً على color-scheme. هذا يبسط الكود بشكل كبير مقارنة باستخدام Media Query (prefers-color-scheme: dark) لكل خاصية على حدة."
      }
    ],
    challenge: {
      title: "بناء نظام سمات كامل لموقع تعليمي",
      description: "أنشئ نظام سمات يتضمن: 1) رموز تصميم باستخدام CSS Variables في :root. 2) السمة الداكنة عبر data-theme='dark'. 3) استخدام color-mix() لدرجات الألوان. 4) تفاعل JavaScript لتبديل السمة. 5) احترام prefers-color-scheme كافتراضي. 6) استخدام light-dark() في بعض الأماكن لتقليل الكود."
    },
    cheatSheet: {
      title: "مرجع سريع لمتغيرات CSS والسمات",
      items: [
        {
          title: "تعريف المتغيرات واستخدامها",
          content: `/* التعريف */
:root {
  --color-primary: #2563eb;
  --spacing-md: 1rem;
}

/* الاستخدام */
.element {
  color: var(--color-primary);
  padding: var(--spacing-md);
}

/* مع احتياطي */
.element {
  color: var(--color-primary, #3b82f6);
}`
        },
        {
          title: "color-mix() — خلط الألوان",
          content: `/* الشكل العام */
color-mix(in color-space, color1 percentage, color2 percentage)

/* أمثلة عملية */
--primary-100: color-mix(in oklch, var(--primary) 20%, white);
--primary-500: var(--primary);
--primary-900: color-mix(in oklch, var(--primary) 80%, black);`
        },
        {
          title: "light-dark() — ألوان تلقائية",
          content: `/* يتطلب color-scheme */
body { color-scheme: light dark; }

/* الصيغة */
property: light-dark(light-value, dark-value);

/* أمثلة */
.card {
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#111827, #e5e7eb);
  border: 1px solid light-dark(#e5e7eb, #334151);
}`
        },
        {
          title: "نمط تبديل السمة",
          content: `/* النمط المثالي */
:root,
[data-theme="light"] {
  color-scheme: light;
  --bg: #ffffff;
  --text: #111827;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0f172a;
  --text: #e2e8f0;
}

/* احترام تفضيلات النظام تلقائياً */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    color-scheme: dark;
    --bg: #0f172a;
    --text: #e2e8f0;
  }
}

/* JavaScript: تبديل السمة */
document.documentElement.setAttribute('data-theme', 'dark');`
        }
      ]
    }
  },
  en: {
    sections: [
      {
        title: "What are CSS Variables",
        content: [
          { type: "p", text: "CSS Variables (also known as <strong>CSS Custom Properties</strong>) are real variables defined and used directly inside CSS itself. They are one of the most powerful features added by modern CSS specifications." },
          { type: "p", text: "They always start with <code>--</code> and are invoked using the <code>var()</code> function. Unlike Sass/Less variables, CSS variables work directly in the browser without any preprocessing." },
          { type: "p", text: "The key difference from Sass Variables: CSS variables are <strong>dynamic</strong> and work at runtime. You can change them with JavaScript at any time, and they inherit through the DOM tree just like other CSS properties." }
        ]
      },
      {
        title: "Why Use Them",
        content: [
          { type: "p", text: "CSS variables solve several critical problems in frontend development:" },
          { type: "li", text: "<strong>Reusability</strong> — Define a value once and use it in hundreds of places" },
          { type: "li", text: "<strong>Theming</strong> — Change the entire site appearance by changing one variable" },
          { type: "li", text: "<strong>Maintenance</strong> — Changing one color in one place updates all instances" },
          { type: "li", text: "<strong>Responsiveness</strong> — Redefine variables in media queries to change the design" },
          { type: "li", text: "<strong>JavaScript Integration</strong> — Direct interaction between CSS and JS via variables" },
          { type: "li", text: "<strong>No Build Step</strong> — Works directly in the browser without Sass or preprocessing" }
        ]
      },
      {
        title: "The Problem It Solves",
        content: [
          { type: "p", text: "Imagine you have a design system with specific colors, fonts, and spacing. Without variables, you must repeat these values in every CSS file:" },
          { type: "callout-accent", title: "The Repetition Problem", text: "If you want to change a border color from #e5e7eb to #d1d5db, you have to edit every file manually! With variables, change it once in the definition and you're done." },
          { type: "p", text: "With variables, all values are collected in one place and used everywhere else. If you want to change any value, just change the definition." }
        ]
      },
      {
        title: "Simple Explanation",
        content: [
          { type: "p", text: "Let's explain each concept simply before diving into code:" },
          { type: "li", text: "<strong>Declaration</strong> — Use -- to define a variable inside { } of a selector or :root for global scope" },
          { type: "li", text: "<strong>Usage with var()</strong> — Read the variable value; can pass name + fallback value" },
          { type: "li", text: "<strong>Scoping</strong> — Variables follow CSS scoping rules; child elements inherit from parents" },
          { type: "li", text: "<strong>Fallback values</strong> — var(--name, fallback) prevents errors when variable is undefined" },
          { type: "li", text: "<strong>Light-Dark() function</strong> — Automatically picks light or dark value based on color-scheme" }
        ]
      },
      {
        title: "Behind the Scenes",
        content: [
          { type: "p", text: "Here's what happens in the browser when using CSS variables:" },
          { type: "li", text: "<strong>Initial Processing:</strong> Browser reads CSS and stores variables with their scope — not computed yet" },
          { type: "li", text: "<strong>Resolution & Inheritance:</strong> When var() is reached, browser searches current scope → parent → :root → fallback" },
          { type: "li", text: "<strong>Automatic Re-computation:</strong> When a CSS variable changes, browser recomputes all dependent properties" },
          { type: "li", text: "<strong>vs Sass Variables:</strong> Sass computes at build time (static values), CSS computes at runtime (dynamic)" }
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Mistake 1: Forgetting the double hyphen (--)</strong> — primary: #2563eb is a regular CSS property, not a variable" },
          { type: "li", text: "<strong>Mistake 2: Misspelling the variable name</strong> — var(--primary-colour) won't find --primary-color" },
          { type: "li", text: "<strong>Mistake 3: Using value directly without var()</strong> — background: --primary is invalid CSS" },
          { type: "li", text: "<strong>Mistake 4: Using !important with variables</strong> — Causes maintenance issues; use correct specificity instead" },
          { type: "li", text: "<strong>Mistake 5: Not providing fallback values</strong> — var(--undefined) makes the property invalid" },
          { type: "li", text: "<strong>Mistake 6: Using var() for property names or selectors</strong> — var() only works as a value" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Use a consistent naming system for variables (semantic, state-based)" },
          { type: "li", text: "2. Separate definition files (tokens.css) from usage files (components.css)" },
          { type: "li", text: "3. Use color-mix() for generating color shades automatically" },
          { type: "li", text: "4. Use light-dark() to simplify theme switching" },
          { type: "li", text: "5. Use data-attributes for theme toggling" },
          { type: "li", text: "6. Use isolated components with local scope" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the fundamental difference between CSS Variables and Sass Variables?",
        options: [
          "Sass Variables work in the browser directly, CSS Variables need a preprocessor",
          "CSS Variables are computed at runtime and can be changed with JavaScript, while Sass Variables are computed at build time",
          "CSS Variables don't support fallback values while Sass Variables do",
          "There's no substantive difference — both serve the same purpose"
        ],
        correctAnswer: 1,
        explanation: "The key difference is that CSS Custom Properties work at runtime and can be dynamically changed via JavaScript. Sass Variables are converted to static values during Build Time and cannot be changed at runtime."
      },
      {
        question: "When do you use light-dark() and when do you use prefers-color-scheme?",
        options: [
          "light-dark() for semantic colors, prefers-color-scheme for fonts",
          "light-dark() simplifies setting two colors in one place, prefers-color-scheme needs a media query for each property",
          "prefers-color-scheme is newer than light-dark() so always use it",
          "Both are completely identical with no difference"
        ],
        correctAnswer: 1,
        explanation: "light-dark() takes two colors (light and dark) and automatically chooses based on color-scheme. This simplifies code significantly compared to using media query (prefers-color-scheme: dark) for each property individually."
      }
    ],
    challenge: {
      title: "Build a Complete Theme System for an Educational Site",
      description: "Create a theme system that includes: 1) Design tokens using CSS Variables in :root. 2) Dark theme via data-theme='dark'. 3) Using color-mix() for color shades. 4) JavaScript interaction for theme switching. 5) Respecting prefers-color-scheme as default. 6) Using light-dark() in some places to reduce code."
    },
    cheatSheet: {
      title: "CSS Variables & Themes Quick Reference",
      items: [
        {
          title: "Variable Declaration & Usage",
          content: `/* Declaration */
:root {
  --color-primary: #2563eb;
  --spacing-md: 1rem;
}

/* Usage */
.element {
  color: var(--color-primary);
  padding: var(--spacing-md);
}

/* With fallback */
.element {
  color: var(--color-primary, #3b82f6);
}`
        },
        {
          title: "color-mix() — Color Mixing",
          content: `/* General form */
color-mix(in color-space, color1 percentage, color2 percentage)

/* Practical examples */
--primary-100: color-mix(in oklch, var(--primary) 20%, white);
--primary-500: var(--primary);
--primary-900: color-mix(in oklch, var(--primary) 80%, black);`
        },
        {
          title: "light-dark() — Automatic Colors",
          content: `/* Requires color-scheme */
body { color-scheme: light dark; }

/* Syntax */
property: light-dark(light-value, dark-value);

/* Examples */
.card {
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#111827, #e5e7eb);
  border: 1px solid light-dark(#e5e7eb, #334151);
}`
        },
        {
          title: "Theme Switching Pattern",
          content: `/* Ideal pattern */
:root,
[data-theme="light"] {
  color-scheme: light;
  --bg: #ffffff;
  --text: #111827;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0f172a;
  --text: #e2e8f0;
}

/* Auto-respect system preferences */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    color-scheme: dark;
    --bg: #0f172a;
    --text: #e2e8f0;
  }
}

/* JavaScript: theme toggle */
document.documentElement.setAttribute('data-theme', 'dark');`
        }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que les Variables CSS",
        content: [
          { type: "p", text: "Les Variables CSS (également appelées <strong>CSS Custom Properties</strong>) sont de vraies variables définies et utilisées directement dans CSS. Elles sont l'une des fonctionnalités les plus puissantes ajoutées par les spécifications CSS modernes." },
          { type: "p", text: "Elles commencent toujours par <code>--</code> et sont appelées avec la fonction <code>var()</code>. Contrairement aux variables Sass/Less, les variables CSS fonctionnent directement dans le navigateur sans prétraitement." }
        ]
      },
      {
        title: "Pourquoi les utiliser",
        content: [
          { type: "p", text: "Les variables CSS résolvent plusieurs problèmes critiques :" },
          { type: "li", text: "<strong>Réutilisabilité</strong> — Définissez une valeur une fois, utilisez-la partout" },
          { type: "li", text: "<strong>Thématisation</strong> — Changez l'apparence du site entier en modifiant une variable" },
          { type: "li", text: "<strong>Maintenance</strong> — Modifier une couleur met à jour toutes les instances" },
          { type: "li", text: "<strong>Intégration JavaScript</strong> — Interaction directe entre CSS et JS" },
          { type: "li", text: "<strong>Pas de Build Step</strong> — Fonctionne directement dans le navigateur" }
        ]
      },
      {
        title: "Le problème qu'il résout",
        content: [
          { type: "p", text: "Imaginez un système de design avec des couleurs et espacements spécifiques. Sans variables, vous devez répéter ces valeurs dans chaque fichier CSS." },
          { type: "callout-accent", title: "Le problème de la répétition", text: "Si vous voulez changer une couleur de bordure, vous devez modifier chaque fichier manuellement ! Avec les variables, changez-la une fois dans la définition." }
        ]
      },
      {
        title: "Explication simple",
        content: [
          { type: "li", text: "<strong>Déclaration</strong> — Utilisez -- pour définir une variable dans { } d'un sélecteur ou :root" },
          { type: "li", text: "<strong>Utilisation avec var()</strong> — Lire la valeur avec une valeur de repli possible" },
          { type: "li", text: "<strong>Portée</strong> — Les variables suivent les règles de portée CSS ; les enfants héritent" },
          { type: "li", text: "<strong>light-dark()</strong> — Choisisse automatiquement entre valeur claire et sombre" }
        ]
      },
      {
        title: "En coulisses",
        content: [
          { type: "li", text: "<strong>Traitement initial :</strong> Le navigateur lit CSS et stocke les variables avec leur portée" },
          { type: "li", text: "<strong>Résolution :</strong> Quand var() est atteint, le navigateur cherche dans portée → parent → :root → repli" },
          { type: "li", text: "<strong>Re-calcul :</strong> Quand une variable change, le navigateur recalcule toutes les propriétés dépendantes" }
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Erreur 1 : Oublier le double tiret (--)</strong> — primary: #2563eb est une propriété CSS normale" },
          { type: "li", text: "<strong>Erreur 2 : Faute de frappe dans le nom</strong> — var(--primary-colour) ne trouve pas --primary-color" },
          { type: "li", text: "<strong>Erreur 3 : Utiliser la valeur sans var()</strong> — background: --primary est invalide" },
          { type: "li", text: "<strong>Erreur 4 : Utiliser !important avec les variables</strong> — Utilisez la spécificité correcte" },
          { type: "li", text: "<strong>Erreur 5 : Ne pas fournir de valeur de repli</strong> — var(--undefined) rend la propriété invalide" },
          { type: "li", text: "<strong>Erreur 6 : Utiliser var() pour les noms de propriétés ou sélecteurs</strong> — var() ne fonctionne que comme valeur" }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "1. Utilisez un système de nommage cohérent pour les variables" },
          { type: "li", text: "2. Séparez les fichiers de définition (tokens.css) des fichiers d'utilisation" },
          { type: "li", text: "3. Utilisez color-mix() pour générer automatiquement les nuances" },
          { type: "li", text: "4. Utilisez light-dark() pour simplifier le changement de thème" },
          { type: "li", text: "5. Utilisez data-attributes pour basculer les thèmes" },
          { type: "li", text: "6. Utilisez des composants isolés avec portée locale" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quelle est la différence fondamentale entre CSS Variables et Sass Variables ?",
        options: [
          "Sass Variables fonctionnent dans le navigateur, CSS Variables ont besoin d'un préprocesseur",
          "CSS Variables sont calculées au runtime et modifiables avec JavaScript, Sass Variables au build time",
          "CSS Variables ne supportent pas les valeurs de repli, Sass Variables si",
          "Il n'y a aucune différence — les deux servent le même but"
        ],
        correctAnswer: 1,
        explanation: "La différence clé est que les CSS Custom Properties fonctionnent au runtime et peuvent être modifiées dynamiquement via JavaScript. Les Sass Variables sont converties en valeurs statiques pendant le Build Time."
      }
    ],
    challenge: {
      title: "Créez un système de thème complet pour un site éducatif",
      description: "Créez un système de thème incluant : 1) Design tokens avec CSS Variables dans :root. 2) Thème sombre via data-theme='dark'. 3) color-mix() pour les nuances. 4) Interaction JavaScript. 5) Respect de prefers-color-scheme. 6) Utilisation de light-dark()."
    },
    cheatSheet: {
      title: "Variables CSS et Thèmes — Référence rapide",
      items: [
        {
          title: "Déclaration et Utilisation",
          content: `/* Déclaration */
:root {
  --color-primary: #2563eb;
  --spacing-md: 1rem;
}

/* Utilisation */
.element {
  color: var(--color-primary);
  padding: var(--spacing-md);
}

/* Avec repli */
.element {
  color: var(--color-primary, #3b82f6);
}`
        },
        {
          title: "color-mix() — Mélange de couleurs",
          content: `--primary-100: color-mix(in oklch, var(--primary) 20%, white);
--primary-500: var(--primary);
--primary-900: color-mix(in oklch, var(--primary) 80%, black);`
        },
        {
          title: "light-dark() — Couleurs automatiques",
          content: `body { color-scheme: light dark; }

.card {
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#111827, #e5e7eb);
}`
        }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was sind CSS-Variablen",
        content: [
          { type: "p", text: "CSS-Variablen (auch <strong>CSS Custom Properties</strong> genannt) sind echte Variablen, die direkt in CSS definiert und verwendet werden. Sie sind eine der leistungsfähigsten Funktionen moderner CSS-Spezifikationen." },
          { type: "p", text: "Sie beginnen immer mit <code>--</code> und werden mit der Funktion <code>var()</code> aufgerufen. Im Gegensatz zu Sass/Less-Variablen funktionieren CSS-Variablen direkt im Browser ohne Vorverarbeitung." }
        ]
      },
      {
        title: "Warum sie verwenden",
        content: [
          { type: "p", text: "CSS-Variablen lösen mehrere kritische Probleme:" },
          { type: "li", text: "<strong>Wiederverwendbarkeit</strong> — Definieren Sie einen Wert einmalig, verwenden Sie ihn überall" },
          { type: "li", text: "<strong>Theming</strong> — Ändern Sie das gesamte Erscheinungsbild durch Ändern einer Variable" },
          { type: "li", text: "<strong>Wartung</strong> — Eine Farbe ändern aktualisiert alle Instanzen" },
          { type: "li", text: "<strong>JavaScript-Integration</strong> — Direkte Interaktion zwischen CSS und JS" },
          { type: "li", text: "<strong>Kein Build-Schritt</strong> — Funktioniert direkt im Browser" }
        ]
      },
      {
        title: "Das Problem, das es löst",
        content: [
          { type: "p", text: "Stellen Sie sich ein Design-System mit spezifischen Farben und Abständen vor. Ohne Variablen müssen Sie diese Werte in jeder CSS-Datei wiederholen." },
          { type: "callout-accent", title: "Das Wiederholungsproblem", text: "Wenn Sie eine Randfarbe ändern wollen, müssen Sie jede Datei manuell bearbeiten! Mit Variablen ändern Sie es einmalig in der Definition." }
        ]
      },
      {
        title: "Einfache Erklärung",
        content: [
          { type: "li", text: "<strong>Deklaration</strong> — Verwenden Sie -- zur Variablendefinition in { } eines Selektors oder :root" },
          { type: "li", text: "<strong>Verwendung mit var()</strong> — Den Variablenwert lesen, mit Fallback-Wert möglich" },
          { type: "li", text: "<strong>Gültigkeitsbereich</strong> — Variablen folgen CSS-Gültigkeitsbereichsregeln" },
          { type: "li", text: "<strong>light-dark()</strong> — Wählt automatisch zwischen hellem und dunklem Wert" }
        ]
      },
      {
        title: "Hinter den Kulissen",
        content: [
          { type: "li", text: "<strong>Erstverarbeitung:</strong> Der Browser liest CSS und speichert Variablen mit ihrem Gültigkeitsbereich" },
          { type: "li", text: "<strong>Auflösung:</strong> Bei var() sucht Browser in Gültigkeitsbereich → Elternteil → :root → Fallback" },
          { type: "li", text: "<strong>Neuberechnung:</strong> Wenn sich eine Variable ändert, berechnet der Browser alle abhängigen Eigenschaften neu" }
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Fehler 1: Doppelten Bindestrich vergessen</strong> — primary: #2563eb ist eine normale CSS-Eigenschaft" },
          { type: "li", text: "<strong>Fehler 2: Tippfehler im Variablennamen</strong> — var(--primary-colour) findet nicht --primary-color" },
          { type: "li", text: "<strong>Fehler 3: Wert direkt ohne var() verwenden</strong> — background: --primary ist ungültiges CSS" },
          { type: "li", text: "<strong>Fehler 4: !important mit Variablen verwenden</strong> — Verwenden Sie stattdessen die richtige Spezifität" },
          { type: "li", text: "<strong>Fehler 5: Keine Fallback-Werte bereitstellen</strong> — var(--undefined) macht die Eigenschaft ungültig" },
          { type: "li", text: "<strong>Fehler 6: var() für Eigenschaftsnamen oder Selektoren verwenden</strong> — var() funktioniert nur als Wert" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Verwenden Sie ein konsistentes Benennungssystem für Variablen" },
          { type: "li", text: "2. Trennen Sie Definitionsdateien (tokens.css) von Verwendungsdateien" },
          { type: "li", text: "3. Verwenden Sie color-mix() zur automatischen Farbnuancengenerierung" },
          { type: "li", text: "4. Verwenden Sie light-dark() zum Vereinfachen des Theme-Wechsels" },
          { type: "li", text: "5. Verwenden Sie data-attributes zum Umschalten der Themes" },
          { type: "li", text: "6. Verwenden Sie isolierte Komponenten mit lokalem Gültigkeitsbereich" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist der grundlegende Unterschied zwischen CSS-Variablen und Sass-Variablen?",
        options: [
          "Sass-Variablen funktionieren direkt im Browser, CSS-Variablen benötigen einen Präprozessor",
          "CSS-Variablen werden zur Laufzeit berechnet und können mit JavaScript geändert werden, Sass-Variablen zur Build-Zeit",
          "CSS-Variablen unterstützen keine Fallback-Werte, Sass-Variablen schon",
          "Es gibt keinen substanziellen Unterschied — beide dienen demselben Zweck"
        ],
        correctAnswer: 1,
        explanation: "Der Hauptunterschied ist, dass CSS Custom Properties zur Laufzeit funktionieren und dynamisch über JavaScript geändert werden können. Sass-Variablen werden während der Build-Zeit in statische Werte umgewandelt."
      }
    ],
    challenge: {
      title: "Erstellen Sie ein vollständiges Theme-System für eine Bildungsseite",
      description: "Erstellen Sie ein Theme-System mit: 1) Design-Tokens mit CSS-Variablen in :root. 2) Dunkles Theme über data-theme='dark'. 3) color-mix() für Farbnuancen. 4) JavaScript-Interaktion. 5) Respekt für prefers-color-scheme. 6) light-dark() an einigen Stellen."
    },
    cheatSheet: {
      title: "CSS-Variablen & Themes Schnellreferenz",
      items: [
        {
          title: "Deklaration & Verwendung",
          content: `/* Deklaration */
:root {
  --color-primary: #2563eb;
  --spacing-md: 1rem;
}

/* Verwendung */
.element {
  color: var(--color-primary);
  padding: var(--spacing-md);
}

/* Mit Fallback */
.element {
  color: var(--color-primary, #3b82f6);
}`
        },
        {
          title: "color-mix() — Farbmischung",
          content: `--primary-100: color-mix(in oklch, var(--primary) 20%, white);
--primary-500: var(--primary);
--primary-900: color-mix(in oklch, var(--primary) 80%, black);`
        },
        {
          title: "light-dark() — Automatische Farben",
          content: `body { color-scheme: light dark; }

.card {
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#111827, #e5e7eb);
}`
        }
      ]
    }
  }
};
export default translations;
