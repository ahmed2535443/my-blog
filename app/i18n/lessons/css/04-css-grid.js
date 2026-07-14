const translations = {
  ar: {
    sections: [
      {
        title: "ما هو CSS Grid",
        content: [
          { type: "p", text: "<strong>CSS Grid Layout</strong> هو نظام تخطيط ثنائي الأبعاد في CSS يتيح لك تنظيم العناصر في صفوف وأعمدة في نفس الوقت. يتم تفعيله بإضافة <code>display: grid</code> إلى الحاوية." },
          { type: "p", text: "على عكس Flexbox الذي يعمل على محور واحد، يوفر Grid تحكماً كاملاً في كلا المحورين (أفقي وعمودي) في نفس الوقت. هذا يجعله مثالياً لإنشاء تخطيطات معقدة مثل صفحات الويب الكاملة ولوحات المعلومات وشبكات الأعمدة المتعددة." },
          { type: "callout", title: "ملاحظة مهمة", text: "عند تطبيق <code>display: grid</code> على حاوية، تصبح العناصر المباشرة تلقائياً عناصر شبكة. العناصر المتداخلة لن تتأثر ما لم يتم تعريفها أيضاً كحاويات شبكة." }
        ]
      },
      {
        title: "لماذا نستخدم CSS Grid",
        content: [
          { type: "p", text: "يوفر CSS Grid حلولاً قوية لمشاكل التخطيط التي واجهها المطورون لسنوات:" },
          { type: "li", text: "<strong>تخطيط ثنائي الأبعاد</strong> - تحكم كامل في الصفوف والأعمدة معاً" },
          { type: "li", text: "<strong>مناطق مسماة</strong> - تسمية مناطق التخطيط ووضع العناصر بسهولة" },
          { type: "li", text: "<strong>متجاوب دون Media Queries</strong> - خصائص مثل auto-fit و minmax() تجعل التصميم متجاوباً تلقائياً" },
          { type: "li", text: "<strong>محاذاة دقيقة</strong> - align و justify يعملان على كلا المحورين مع تحكم متقدم" },
          { type: "li", text: "<strong>تبسيط</strong> - كود أقل وأوضح مقارنة بالطرق القديمة (float, position, table)" },
          { type: "li", text: "<strong>Subgrid</strong> - القدرة على محاذاة شبكات متداخلة مع الشبكة الأب" }
        ]
      },
      {
        title: "المشكلة التي يحلها",
        content: [
          { type: "p", text: "قبل CSS Grid، واجه المطورون مشاكل كبيرة في إنشاء تخطيطات ثنائية الأبعاد:" },
          { type: "callout-accent", title: "المشكلة 1: تخطيط الصفحة الكاملة", text: "إنشاء تخطيط مع رأس وشريط جانبي ومحتوى رئيسي وتذييل كان يتطلب CSS معقداً مع float وحسابات العرض." },
          { type: "callout-accent", title: "المشكلة 2: شبكات الأعمدة المتعددة", text: "إنشاء شبكة بطاقات متجاوبة بعدد أعمدة متغير كان يتطلب حسابات يدوية معقدة." },
          { type: "callout-accent", title: "المشكلة 3: تراكب العناصر", text: "جعل عنصر يراكب آخر كان يتطلب position: absolute وحسابات transform معقدة." }
        ]
      },
      {
        title: "شرح بسيط",
        content: [
          { type: "p", text: "تخيل أن لديك لوح شطرنج فارغاً. تحدد عدد الصفوف والأعمدة، ثم تضع القطع في أماكنها المحددة. يعمل CSS Grid بنفس الطريقة:" },
          { type: "li", text: "<strong>الحاوية:</strong> grid-template-columns, grid-template-rows, gap, grid-template-areas" },
          { type: "li", text: "<strong>العنصر:</strong> grid-column, grid-row, grid-area, span" },
          { type: "callout-primary", title: "القاعدة الذهبية", text: "الخصائص المضافة إلى الحاوية تتحكم في الشبكة بالكامل. الخصائص المضافة إلى عنصر تتحكم فقط في موقع ذلك العنصر." }
        ]
      },
      {
        title: "خلف الكواليس",
        content: [
          { type: "p", text: "عند تطبيق CSS Grid على حاوية، يتبع المتصفح هذه الخطوات:" },
          { type: "li", text: "<strong>الخطوة 1: تكوين الشبكة</strong> - يحدد المتصفح خطوط الشبكة بناءً على grid-template-columns و grid-template-rows" },
          { type: "li", text: "<strong>الخطوة 2: وضع العناصر</strong> - يتم وضع العناصر في الخلايا المتاحة (تلقائياً أو حسب grid-column/grid-row الصريح)" },
          { type: "li", text: "<strong>الخطوة 3: حساب الأحجام</strong> - يتم حساب أحجام الأعمدة/الصفوف (px ثابتة، fr مشاعر، auto محتوى)" },
          { type: "li", text: "<strong>الخطوة 4: الوضع التلقائي</strong> - العناصر بدون وضع صريح تملأ الخلايا الفارغة تلقائياً" }
        ]
      },
      {
        title: "الأخطاء الشائعة",
        content: [
          { type: "li", text: "<strong>الخطأ 1: استخدام margin بدلاً من gap</strong> - نفس مشكلة Flexbox، مسافات غير متساوية عند الحواف" },
          { type: "li", text: "<strong>الخطأ 2: استخدام النسب المئوية مع grid-template-rows</strong> - النسب المئوية لا تعمل مباشرة، استخدم fr أو minmax()" },
          { type: "li", text: "<strong>الخطأ 3: نسيان grid-auto-rows</strong> - بدونه، قد تظهر العناصر بأحجام غير متوقعة" },
          { type: "li", text: "<strong>الخطأ 4: خلط Grid و Flexbox على نفس العنصر</strong> - اختر واحداً؛ Grid للخارج و Flex للداخل جيد" },
          { type: "li", text: "<strong>الخطأ 5: عدم استخدام minmax() مع auto-fit/auto-fill</strong> - لن يعطي التصميم المتجاوب المتوقع" }
        ]
      },
      {
        title: "أفضل الممارسات",
        content: [
          { type: "li", text: "1. استخدم grid-template-areas للتخطيطات المعقدة - المناطق المسماة تجعل الكود مقروءاً" },
          { type: "li", text: "2. استخدم repeat(auto-fit, minmax()) للشبكات المتجاوبة دون Media Queries" },
          { type: "li", text: "3. فكر بالأبعاد: Grid لـ 2D (صفوف+أعمدة)، Flexbox لـ 1D (صف أو عمود)" },
          { type: "li", text: "4. استخدم minmax() لضمان الحد الأدنى من الأحجام" },
          { type: "li", text: "5. استخدم دائماً gap للمسافات بين العناصر" },
          { type: "li", text: "6. استخدم place-items: center للتوسيط السريع" }
        ]
      }
    ],
    quiz: [
      {
        question: "ما الفرق بين auto-fit و auto-fill في دالة repeat()؟",
        options: [
          "لا يوجد فرق، متساويان تماماً",
          "auto-fit يوسّع العناصر لملء المساحة الفارغة، بينما auto-fill يحتفظ بالأعمدة الفارغة",
          "auto-fill أحدث من auto-fit ويعمل فقط في المتصفحات الحديثة",
          "auto-fit يعمل فقط مع minmax() بينما auto-fill يعمل مع أي وحدة"
        ],
        correctAnswer: 1,
        explanation: "يقوم auto-fit بدمج الخلايا الفارغة وتوسيع العناصر المتاحة لملء المساحة الفارغة. يحتفظ auto-fit بعدد الأعمدة المحدد حتى لو كانت فارغة. يظهر الفرق عندما لا تملأ العناصر جميع الأعمدة."
      },
      {
        question: "متى تستخدم CSS Grid بدلاً من Flexbox؟",
        options: [
          "عندما تريد ترتيب العناصر في صف واحد فقط",
          "عندما تحتاج تخطيط ثنائي الأبعاد (صفوف وأعمدة معاً) مع تحكم دقيق في الوضع",
          "عندما تريد فقط إضافة مسافات بين العناصر",
          "Flexbox أفضل دائماً من Grid في جميع الحالات"
        ],
        correctAnswer: 1,
        explanation: "CSS Grid مصمم للتخطيط ثنائي الأبعاد حيث تتحكم في الصفوف والأعمدة معاً. Flexbox يعمل بشكل أفضل للتخطيط أحادي البعد. إذا كنت بحاجة لترتيب العناصر في صفوف وأعمدة مع تحكم دقيق، Grid هو الأفضل."
      }
    ],
    challenge: {
      title: "بناء تخطيط لوحة معلومات بـ CSS Grid",
      description: "أنشئ لوحة معلومات برأس وشريط جانبي ومحتوى رئيسي وتذييل باستخدام CSS Grid مع مناطق مسماة."
    },
    cheatSheet: {
      title: "مرجع CSS Grid + Subgrid",
      items: [
        {
          title: "خصائص حاوية Grid",
          content: `| الخاصية | القيم | الوصف |
|---------|-------|------|
| display | grid | inline-grid | يفعّل Grid |
| grid-template-columns | [قيم] | يحدد عدد الأعمدة وعرضها |
| grid-template-rows | [قيم] | يحدد عدد الصفوف وارتفاعها |
| grid-template-areas | "اسم اسم" | يحدد المناطق المسماة |
| gap | <طول> | مسافة بين خلايا الشبكة |
| justify-items | start | end | center | stretch | محاذاة أفقي |
| align-items | start | end | center | stretch | محاذاة عمودي |
| grid-auto-flow | row | column | dense | اتجاه الوضع التلقائي |`
        },
        {
          title: "خصائص عنصر Grid",
          content: `| الخاصية | القيم | الوصف |
|---------|-------|------|
| grid-column | start / end | span N | الوضع الأفقي |
| grid-row | start / end | span N | الوضع العمودي |
| grid-area | اسم | وضع حسب الاسم أو الأرقام |
| justify-self | start | end | center | stretch | محاذاة عنصر أفقي |
| align-self | start | end | center | stretch | محاذاة عنصر عمودي |`
        },
        {
          title: "الأنماط الشائعة",
          content: `شبكة بطاقات متجاوبة: repeat(auto-fit, minmax(250px, 1fr))
التوسيط الكامل: display: grid; place-items: center;
شريط جانبي + محتوى: grid-template-columns: 250px 1fr;
الكأس المقدسة: grid-template: "header header header" auto "nav main aside" 1fr "footer footer footer" auto / 200px 1fr 200px;`
        }
      ]
    }
  },
  en: {
    sections: [
      {
        title: "What is CSS Grid",
        content: [
          { type: "p", text: "<strong>CSS Grid Layout</strong> is a two-dimensional layout system in CSS that allows you to organize elements in rows and columns simultaneously. It is activated by adding <code>display: grid</code> to the container." },
          { type: "p", text: "Unlike Flexbox which works on one axis, Grid provides complete control over both axes (horizontal and vertical) at the same time. This makes it ideal for creating complex layouts like full web pages, dashboards, and multi-column grids." },
          { type: "callout", title: "Important Note", text: "When you apply <code>display: grid</code> to a container, direct children automatically become grid items. Nested elements won't be affected unless also defined as grid containers." }
        ]
      },
      {
        title: "Why Use CSS Grid",
        content: [
          { type: "p", text: "CSS Grid provides powerful solutions to layout problems developers have faced for years:" },
          { type: "li", text: "<strong>Two-dimensional layout</strong> - Full control over rows and columns together" },
          { type: "li", text: "<strong>Named Areas</strong> - Name layout regions (header, sidebar, main) and place elements easily" },
          { type: "li", text: "<strong>Responsive without Media Queries</strong> - Properties like auto-fit and minmax() make design automatically responsive" },
          { type: "li", text: "<strong>Precise alignment</strong> - align and justify work on both axes with advanced control" },
          { type: "li", text: "<strong>Simplification</strong> - Less and clearer code compared to old methods (float, position, table)" },
          { type: "li", text: "<strong>Subgrid</strong> - Ability to align nested grids with the parent grid for advanced styling" }
        ]
      },
      {
        title: "The Problem It Solves",
        content: [
          { type: "p", text: "Before CSS Grid, developers faced major problems creating two-dimensional layouts:" },
          { type: "callout-accent", title: "Problem 1: Full Page Layout", text: "Creating a layout with header, sidebar, main and footer required complex and interleaved CSS with float and width calculations." },
          { type: "callout-accent", title: "Problem 2: Multi-column Grids", text: "Creating a responsive card grid with variable column count required manual calculations with flex-wrap and relative widths." },
          { type: "callout-accent", title: "Problem 3: Element Overlapping", text: "Making one element overlay another required position: absolute and complex transform calculations." }
        ]
      },
      {
        title: "Simple Explanation",
        content: [
          { type: "p", text: "Imagine you have an empty chessboard. You define the number of rows and columns, then place pieces in their designated spots. CSS Grid works the same way:" },
          { type: "li", text: "<strong>Container:</strong> grid-template-columns, grid-template-rows, gap, grid-template-areas" },
          { type: "li", text: "<strong>Item:</strong> grid-column, grid-row, grid-area, span" },
          { type: "callout-primary", title: "Golden Rule", text: "Properties added to the container control the entire grid. Properties added to an item control only that item's position." }
        ]
      },
      {
        title: "Behind the Scenes",
        content: [
          { type: "p", text: "When CSS Grid is applied to a container, the browser follows these steps:" },
          { type: "li", text: "<strong>Step 1: Grid Formation</strong> - The browser defines grid lines based on grid-template-columns and grid-template-rows" },
          { type: "li", text: "<strong>Step 2: Item Placement</strong> - Items are placed in available cells (auto or by explicit grid-column/grid-row)" },
          { type: "li", text: "<strong>Step 3: Size Calculation</strong> - Column/row sizes are calculated (fixed px, fr shares, auto content-based)" },
          { type: "li", text: "<strong>Step 4: Auto Placement</strong> - Items without explicit placement fill empty cells automatically" }
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Mistake 1: Using margin instead of gap</strong> - Same issue as Flexbox, unequal spacing at edges" },
          { type: "li", text: "<strong>Mistake 2: Using percentages with grid-template-rows</strong> - Percentages don't work directly, use fr or minmax()" },
          { type: "li", text: "<strong>Mistake 3: Forgetting grid-auto-rows</strong> - Without it, items may appear with unexpected heights" },
          { type: "li", text: "<strong>Mistake 4: Mixing Grid and Flexbox on same element</strong> - Choose one; Grid for outer, Flex for inner is fine" },
          { type: "li", text: "<strong>Mistake 5: Not using minmax() with auto-fit/auto-fill</strong> - Won't give expected responsive design" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Use grid-template-areas for complex layouts - named regions make code readable" },
          { type: "li", text: "2. Use repeat(auto-fit, minmax()) for responsive grids without media queries" },
          { type: "li", text: "3. Think in dimensions: Grid for 2D (rows+columns), Flexbox for 1D (row or column)" },
          { type: "li", text: "4. Use minmax() to ensure minimum sizes" },
          { type: "li", text: "5. Always use gap for spacing between items" },
          { type: "li", text: "6. Use place-items: center for quick centering" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the difference between auto-fit and auto-fill in the repeat() function?",
        options: [
          "No difference, they are exactly equal",
          "auto-fit expands items to fill empty space, while auto-fill keeps empty columns",
          "auto-fill is newer than auto-fit and only works in modern browsers",
          "auto-fit only works with minmax() while auto-fill works with any unit"
        ],
        correctAnswer: 1,
        explanation: "auto-fit merges empty cells and expands available items to fill empty space. auto-fill keeps the specified number of columns even if empty. The difference shows when items don't fill all columns."
      },
      {
        question: "When do you use CSS Grid instead of Flexbox?",
        options: [
          "When you want to arrange elements in a single row only",
          "When you need two-dimensional layout (rows and columns together) with precise placement control",
          "When you only want to add spacing between elements",
          "Flexbox is always better than Grid in all cases"
        ],
        correctAnswer: 1,
        explanation: "CSS Grid is designed for two-dimensional layout where you control rows and columns together. Flexbox works better for one-dimensional layout. If you need to arrange items in rows and columns with precise placement, Grid is best."
      }
    ],
    challenge: {
      title: "Build a Dashboard Layout with CSS Grid",
      description: "Create a dashboard with header, sidebar, main content, and footer using CSS Grid with named areas.",
      requirements: [
        "Use display: grid on the main container",
        "Define areas using grid-template-areas",
        "Make sidebar fixed width 250px",
        "Make main content fill available space",
        "Add gap between areas",
        "Make design responsive using media query"
      ]
    },
    cheatSheet: {
      title: "CSS Grid + Subgrid Reference",
      items: [
        {
          title: "Grid Container Properties",
          content: `| Property | Values | Description |
|----------|--------|-------------|
| display | grid | inline-grid | Activates Grid |
| grid-template-columns | [values] | Defines column count and width |
| grid-template-rows | [values] | Defines row count and height |
| grid-template-areas | "name name" | Defines named regions |
| gap | <length> | Space between grid cells |
| justify-items | start | end | center | stretch | Align items horizontally |
| align-items | start | end | center | stretch | Align items vertically |
| grid-auto-flow | row | column | dense | Auto-placement direction |`
        },
        {
          title: "Grid Item Properties",
          content: `| Property | Values | Description |
|----------|--------|-------------|
| grid-column | start / end | span N | Horizontal placement |
| grid-row | start / end | span N | Vertical placement |
| grid-area | name | row-start / col-start | Placement by name or numbers |
| justify-self | start | end | center | stretch | Align single item horizontally |
| align-self | start | end | center | stretch | Align single item vertically |`
        },
        {
          title: "Grid vs Flexbox Decision Guide",
          content: `Row of buttons → Flexbox (one-dimensional)
Card grid → Grid (two-dimensional)
Center element → Both (Grid: place-items: center)
Navbar → Flexbox (simple horizontal distribution)
Dashboard → Grid (layout with named areas)
Sidebar + Content → Grid (variable width columns)
Wrapping text items → Flexbox (flex-wrap: wrap)`
        },
        {
          title: "Common Patterns",
          content: `Responsive card grid: repeat(auto-fit, minmax(250px, 1fr))
Full center: display: grid; place-items: center;
Sidebar + content: grid-template-columns: 250px 1fr;
Holy Grail: grid-template: "header header header" auto "nav main aside" 1fr "footer footer footer" auto / 200px 1fr 200px;`
        }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que CSS Grid",
        content: [
          { type: "p", text: "<strong>CSS Grid Layout</strong> est un système de mise en page bidimensionnel en CSS qui vous permet d'organiser les éléments en lignes et colonnes simultanément. Il est activé en ajoutant <code>display: grid</code> au conteneur." },
          { type: "p", text: "Contrairement à Flexbox qui fonctionne sur un seul axe, Grid offre un contrôle complet sur les deux axes (horizontal et vertical) en même temps. Cela le rend idéal pour créer des mises en page complexes comme des pages web complètes, des tableaux de bord et des grilles multi-colonnes." }
        ]
      },
      {
        title: "Pourquoi utiliser CSS Grid",
        content: [
          { type: "p", text: "CSS Grid fournit des solutions puissantes aux problèmes de mise en page rencontrés par les développeurs depuis des années :" },
          { type: "li", text: "<strong>Mise en page bidimensionnelle</strong> - Contrôle complet des lignes et colonnes ensemble" },
          { type: "li", text: "<strong>Zones nommées</strong> - Nommez les régions de mise en page et placez les éléments facilement" },
          { type: "li", text: "<strong>Réactive sans Media Queries</strong> - auto-fit et minmax() rendent le design automatiquement réactif" },
          { type: "li", text: "<strong>Alignement précis</strong> - align et justify fonctionnent sur les deux axes" },
          { type: "li", text: "<strong>Simplification</strong> - Moins de code et plus clair" },
          { type: "li", text: "<strong>Subgrid</strong> - Capacité d'aligner les grilles imbriquées avec la grille parent" }
        ]
      },
      {
        title: "Le problème qu'il résout",
        content: [
          { type: "p", text: "Avant CSS Grid, les développeurs faisaient face à de gros problèmes de mise en page bidimensionnelle :" },
          { type: "callout-accent", title: "Problème 1 : Mise en page complète", text: "Créer une mise en page avec header, sidebar, main et footer nécessitait du CSS complexe avec float et calculs de largeur." },
          { type: "callout-accent", title: "Problème 2 : Grilles multi-colonnes", text: "Créer une grille de cartes réactive avec un nombre variable de colonnes nécessitait des calculs manuels complexes." },
          { type: "callout-accent", title: "Problème 3 : Superposition", text: "Faire chevaucher un élément sur un autre nécessitait position: absolute et des calculs transform complexes." }
        ]
      },
      {
        title: "Explication simple",
        content: [
          { type: "p", text: "Imaginez un échiquier vide. Vous définissez le nombre de lignes et colonnes, puis placez les pièces dans leurs emplacements désignés. CSS Grid fonctionne de la même manière :" },
          { type: "li", text: "<strong>Conteneur :</strong> grid-template-columns, grid-template-rows, gap, grid-template-areas" },
          { type: "li", text: "<strong>Élément :</strong> grid-column, grid-row, grid-area, span" }
        ]
      },
      {
        title: "En coulisses",
        content: [
          { type: "p", text: "Lorsque CSS Grid est appliqué à un conteneur, le navigateur suit ces étapes :" },
          { type: "li", text: "<strong>Étape 1 : Formation de la grille</strong> - Le navigateur définit les lignes de grille" },
          { type: "li", text: "<strong>Étape 2 : Placement des éléments</strong> - Les éléments sont placés dans les cellules disponibles" },
          { type: "li", text: "<strong>Étape 3 : Calcul des tailles</strong> - Les tailles des colonnes/lignes sont calculées" },
          { type: "li", text: "<strong>Étape 4 : Placement automatique</strong> - Les éléments sans placement explicite remplissent les cellules vides" }
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Erreur 1 : Utiliser margin au lieu de gap</strong> - Espacement inégal aux bords" },
          { type: "li", text: "<strong>Erreur 2 : Utiliser des pourcentages avec grid-template-rows</strong> - Utilisez fr ou minmax()" },
          { type: "li", text: "<strong>Erreur 3 : Oublier grid-auto-rows</strong> - Les éléments peuvent avoir des hauteurs inattendues" },
          { type: "li", text: "<strong>Erreur 4 : Mélanger Grid et Flexbox sur le même élément</strong> - Choisissez un seul" },
          { type: "li", text: "<strong>Erreur 5 : Ne pas utiliser minmax() avec auto-fit/auto-fill</strong> - Pas de design réactif attendu" }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "1. Utilisez grid-template-areas pour les mises en page complexes" },
          { type: "li", text: "2. Utilisez repeat(auto-fit, minmax()) pour les grilles réactives" },
          { type: "li", text: "3. Pensez en dimensions : Grid pour 2D, Flexbox pour 1D" },
          { type: "li", text: "4. Utilisez minmax() pour garantir des tailles minimales" },
          { type: "li", text: "5. Utilisez toujours gap pour l'espacement" },
          { type: "li", text: "6. Utilisez place-items: center pour le centrage rapide" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quelle est la différence entre auto-fit et auto-fill dans la fonction repeat() ?",
        options: [
          "Pas de différence, ils sont exactement égaux",
          "auto-fit étend les éléments pour remplir l'espace vide, tandis que auto-fill conserve les colonnes vides",
          "auto-fill est plus récent que auto-fit",
          "auto-fit ne fonctionne qu'avec minmax() tandis que auto-fill fonctionne avec n'importe quelle unité"
        ],
        correctAnswer: 1,
        explanation: "auto-fit fusionne les cellules vides et étend les éléments disponibles pour remplir l'espace vide. auto-fill conserve le nombre d'colonnes spécifié même si elles sont vides."
      },
      {
        question: "Quand utilisez CSS Grid au lieu de Flexbox ?",
        options: [
          "Quand vous voulez arranger les éléments dans une seule ligne uniquement",
          "Quand vous avez besoin d'une mise en page bidimensionnelle avec contrôle précis du placement",
          "Quand vous voulez seulement ajouter de l'espacement entre les éléments",
          "Flexbox est toujours meilleur que Grid"
        ],
        correctAnswer: 1,
        explanation: "CSS Grid est conçu pour la mise en page bidimensionnelle où vous contrôlez les lignes et colonnes ensemble. Flexbox fonctionne mieux pour la mise en page unidimensionnelle."
      }
    ],
    challenge: {
      title: "Construire un tableau de bord avec CSS Grid",
      description: "Créez un tableau de bord avec header, sidebar, contenu principal et footer en utilisant CSS Grid avec des zones nommées."
    },
    cheatSheet: {
      title: "Référence CSS Grid + Subgrid",
      items: [
        {
          title: "Propriétés du conteneur Grid",
          content: `| Propriété | Valeurs | Description |
|-----------|---------|-------------|
| display | grid | inline-grid | Active Grid |
| grid-template-columns | [valeurs] | Définit le nombre et la largeur des colonnes |
| grid-template-rows | [valeurs] | Définit le nombre et la hauteur des lignes |
| grid-template-areas | "nom nom" | Définit les zones nommées |
| gap | <longueur> | Espace entre les cellules |
| justify-items | start | center | stretch | Aligne horizontalement |
| align-items | start | center | stretch | Aligne verticalement |`
        },
        {
          title: "Propriétés de l'élément Grid",
          content: `| Propriété | Valeurs | Description |
|-----------|---------|-------------|
| grid-column | start / end | span N | Placement horizontal |
| grid-row | start / end | span N | Placement vertical |
| grid-area | nom | Placement par nom ou chiffres |
| justify-self | start | center | stretch | Surcharger align-items |
| align-self | start | center | stretch | Surcharger align-items |`
        }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was ist CSS Grid",
        content: [
          { type: "p", text: "<strong>CSS Grid Layout</strong> ist ein zweidimensionales Layoutsystem in CSS, das es Ihnen ermöglicht, Elemente gleichzeitig in Zeilen und Spalten zu organisieren. Es wird durch Hinzufügen von <code>display: grid</code> zum Container aktiviert." },
          { type: "p", text: "Im Gegensatz zu Flexbox, das auf einer Achse arbeitet, bietet Grid vollständige Kontrolle über beide Achsen (horizontal und vertikal) gleichzeitig. Das macht es ideal für komplexe Layouts wie vollständige Webseiten, Dashboards und mehrspaltige Raster." }
        ]
      },
      {
        title: "Warum CSS Grid verwenden",
        content: [
          { type: "p", text: "CSS Grid bietet leistungsstarke Lösungen für Layout-Probleme, mit denen Entwickler seit Jahren konfrontiert sind:" },
          { type: "li", text: "<strong>Zweidimensionales Layout</strong> - Vollständige Kontrolle über Zeilen und Spalten zusammen" },
          { type: "li", text: "<strong>Benannte Bereiche</strong> - Benennen Sie Layout-Regionen und platzieren Sie Elemente einfach" },
          { type: "li", text: "<strong>Responsiv ohne Media Queries</strong> - auto-fit und minmax() machen Design automatisch responsiv" },
          { type: "li", text: "<strong>Präzise Ausrichtung</strong> - align und justify arbeiten auf beiden Achsen" },
          { type: "li", text: "<strong>Vereinfachung</strong> - Weniger und klarerer Code" },
          { type: "li", text: "<strong>Subgrid</strong> - Verschachtelte Raster mit dem übergeordneten Raster ausrichten" }
        ]
      },
      {
        title: "Das Problem, das es löst",
        content: [
          { type: "p", text: "Vor CSS Grid hatten Entwickler große Probleme bei zweidimensionalen Layouts:" },
          { type: "callout-accent", title: "Problem 1: Vollständiges Seitenlayout", text: "Ein Layout mit Header, Sidebar, Main und Footer zu erstellen erforderte komplexen CSS-Code mit float und Breitenberechnungen." },
          { type: "callout-accent", title: "Problem 2: Mehrspaltige Raster", text: "Ein responsives Kartenraster mit variabler Spaltenanzahl zu erstellen erforderte komplexe manuelle Berechnungen." },
          { type: "callout-accent", title: "Problem 3: Element-Überlagerung", text: "Ein Element über ein anderes zu legen erforderte position: absolute und komplexe transform-Berechnungen." }
        ]
      },
      {
        title: "Einfache Erklärung",
        content: [
          { type: "p", text: "Stellen Sie sich ein leeres Schachbrett vor. Sie definieren die Anzahl der Zeilen und Spalten und platzieren die Figuren an ihren zugewiesenen Stellen. CSS Grid funktioniert genauso:" },
          { type: "li", text: "<strong>Container:</strong> grid-template-columns, grid-template-rows, gap, grid-template-areas" },
          { type: "li", text: "<strong>Item:</strong> grid-column, grid-row, grid-area, span" }
        ]
      },
      {
        title: "Hinter den Kulissen",
        content: [
          { type: "p", text: "Wenn CSS Grid auf einen Container angewendet wird, folgt der Browser diesen Schritten:" },
          { type: "li", text: "<strong>Schritt 1: Rasterbildung</strong> - Der Browser definiert Rasterlinien" },
          { type: "li", text: "<strong>Schritt 2: Elementplatzierung</strong> - Elemente werden in verfügbare Zellen platziert" },
          { type: "li", text: "<strong>Schritt 3: Größenberechnung</strong> - Spalten-/Zeilengrößen werden berechnet" },
          { type: "li", text: "<strong>Schritt 4: Auto-Platzierung</strong> - Elemente ohne explizite Platzierung füllen leere Zellen automatisch" }
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Fehler 1: margin statt gap verwenden</strong> - Ungleicher Abstand an den Rändern" },
          { type: "li", text: "<strong>Fehler 2: Prozentzahlen mit grid-template-rows verwenden</strong> - Verwenden Sie fr oder minmax()" },
          { type: "li", text: "<strong>Fehler 3: grid-auto-rows vergessen</strong> - Elemente können unerwartete Höhen haben" },
          { type: "li", text: "<strong>Fehler 4: Grid und Flexbox auf demselben Element mischen</strong> - Wählen Sie eines" },
          { type: "li", text: "<strong>Fehler 5: minmax() nicht mit auto-fit/auto-fill verwenden</strong> - Kein erwartetes responsives Design" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Verwenden Sie grid-template-areas für komplexe Layouts" },
          { type: "li", text: "2. Verwenden Sie repeat(auto-fit, minmax()) für responsive Raster" },
          { type: "li", text: "3. Denken Sie in Dimensionen: Grid für 2D, Flexbox für 1D" },
          { type: "li", text: "4. Verwenden Sie minmax() um Mindestgrößen zu gewährleisten" },
          { type: "li", text: "5. Verwenden Sie immer gap für Abstände" },
          { type: "li", text: "6. Verwenden Sie place-items: center für schnelles Zentrieren" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist der Unterschied zwischen auto-fit und auto-fill in der repeat()-Funktion?",
        options: [
          "Kein Unterschied, sie sind genau gleich",
          "auto-fit erweitert Elemente um leeren Platz zu füllen, während auto-fill leere Spalten beibehält",
          "auto-fill ist neuer als auto-fit",
          "auto-fit funktioniert nur mit minmax(), während auto-fill mit jeder Einheit funktioniert"
        ],
        correctAnswer: 1,
        explanation: "auto-fit verschmelzt leere Zellen und erweitert verfügbare Elemente, um leeren Platz zu füllen. auto-fill behält die angegebene Anzahl von Spalten bei, auch wenn sie leer sind."
      },
      {
        question: "Wann verwenden Sie CSS Grid statt Flexbox?",
        options: [
          "Wenn Sie Elemente nur in einer einzigen Reihe anordnen möchten",
          "Wenn Sie zweidimensionales Layout mit präziser Platzierungskontrolle benötigen",
          "Wenn Sie nur Abstände zwischen Elementen hinzufügen möchten",
          "Flexbox ist immer besser als Grid"
        ],
        correctAnswer: 1,
        explanation: "CSS Grid ist für zweidimensionales Layouts entwickelt, bei dem Sie Zeilen und Spalten zusammen steuern. Flexbox funktioniert besser für eindimensionales Layout."
      }
    ],
    challenge: {
      title: "Ein Dashboard-Layout mit CSS Grid erstellen",
      description: "Erstellen Sie ein Dashboard mit Header, Sidebar, Hauptinhalt und Footer mit benannten Bereichen using CSS Grid."
    },
    cheatSheet: {
      title: "CSS Grid + Subgrid Referenz",
      items: [
        {
          title: "Grid Container Eigenschaften",
          content: `| Eigenschaft | Werte | Beschreibung |
|-------------|-------|-------------|
| display | grid | inline-grid | Aktiviert Grid |
| grid-template-columns | [Werte] | Definiert Spaltenanzahl und -breite |
| grid-template-rows | [Werte] | Definiert Zeilenzanzahl und -höhe |
| grid-template-areas | "name name" | Definiert benannte Bereiche |
| gap | <Länge> | Abstand zwischen Rasterzellen |
| justify-items | start | center | Richtet horizontal aus |
| align-items | start | center | Richtet vertikal aus |`
        },
        {
          title: "Grid Item Eigenschaften",
          content: `| Eigenschaft | Werte | Beschreibung |
|-------------|-------|-------------|
| grid-column | start / end | span N | Horizontale Platzierung |
| grid-row | start / end | span N | Vertikale Platzierung |
| grid-area | name | Platzierung nach Name |
| justify-self | start | center | Einzelnes Element horizontal ausrichten |
| align-self | start | center | Einzelnes Element vertikal ausrichten |`
        }
      ]
    }
  }
};
export default translations;
