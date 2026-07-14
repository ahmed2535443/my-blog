const translations = {
  ar: {
    sections: [
      {
        title: "ما هي المحددات الحديثة",
        content: [
          { type: "p", text: "<strong>المحددات الحديثة</strong> في CSS هي مجموعة من الأدوات التي تتيح لك استهداف العناصر بطرق أذكى وأكثر مرونة. بدلاً من الاعتماد فقط على الفئات والمعرّفات، يمكنك الآن استخدام محددات متقدمة تصل إلى عناصر الأب، وتجمع عدة محددات معاً، وتتحكم في النوعية بذكاء." },
          { type: "p", text: "أيضاً، <strong>CSS Nesting</strong> متوفر الآن في جميع المتصفحات الحديثة دون الحاجة إلى معالجات مثل Sass، مما يجعل الكود أكثر تنظيماً وقابلية للصيانة." },
          { type: "p", text: "في هذه الدرس، ستتعلم:" },
          { type: "li", text: "مراجعة سريعة للمحددات الأساسية والمحرّكات" },
          { type: "li", text: "الفئات الزائفة والعناصر الزائفة المتقدمة" },
          { type: "li", text: "المحددات الحديثة: <code>:has()</code>, <code>:is()</code>, <code>:where()</code>" },
          { type: "li", text: "CSS Nesting - التداخل الأصلي دون Sass" },
          { type: "li", text: "<code>@layer</code> - التحكم في ترتيب النوعية" },
          { type: "li", text: "<code>@scope</code> - تضييق نطاق الأنماط" }
        ]
      },
      {
        title: "لماذا نستخدمها",
        content: [
          { type: "p", text: "تحل المحددات الحديثة عدة مشاكل حقيقية واجهها المطورون لسنوات:" },
          { type: "li", text: "<strong>تقليل تكرار الكود</strong> - استخدم <code>:is()</code> لجمع المحددات" },
          { type: "li", text: "<strong>الوصول إلى عناصر الأب</strong> - تنسيق الأبناء بناءً على الأبناء باستخدام <code>:has()</code>" },
          { type: "li", text: "<strong>التحكم في النوعية</strong> - أدوات مثل <code>:where()</code> و <code>@layer</code> تمنح تحكماً دقيقاً" },
          { type: "li", text: "<strong>تنظيم الكود مع CSS Nesting</strong> - تداخل قواعد CSS داخل بعضها البعض" }
        ]
      },
      {
        title: "المشكلة التي تحلها",
        content: [
          { type: "p", text: "دعنا نرى مشكلة حقيقية واجهها المطورون قبل المحددات الحديثة:" },
          { type: "li", text: "<strong>المشكلة 1: تنسيق الأبناء بناءً على الأبناء</strong> - بدون <code>:has()</code>، كنت مضطراً لإضافة فئات يدوياً" },
          { type: "li", text: "<strong>المشكلة 2: تكرار المحددات</strong> - تكرارات طويلة ومملة لحالات hover/focus/active" },
          { type: "li", text: "<strong>المشكلة 3: صعوبة إعادة التعيين</strong> - قواعد إعادة التعيين كان لها نوعية عالية وتعارضت مع عملك" }
        ]
      },
      {
        title: "شرح بسيط",
        content: [
          { type: "p", text: "دعنا نغوص في شرح تفصيلي لكل أداة مع مفاهيم أساسية سريعة:" },
          { type: "li", text: "<strong>محددات العناصر</strong> - استهدف الوسوم مباشرة (p, h1, div)" },
          { type: "li", text: "<strong>محددات الفئات</strong> - استهدف العناصر حسب فئتها (.btn, .card)" },
          { type: "li", text: "<strong>محددات المعرّفات</strong> - استهدف العناصر بمعرّف فريد (#header)" },
          { type: "li", text: "<strong>محددات السمات</strong> - استهدف حسب نوع السمة أو وجودها أو قيمتها" },
          { type: "li", text: "<strong>المحرّكات</strong> - الابن (>), التابع (مسافة), المتجاور (+), العام (~)" },
          { type: "li", text: "<strong>الفئات الزائفة</strong> - :hover, :focus, :first-child, :nth-child(n), :not()" },
          { type: "li", text: "<strong>العناصر الزائفة</strong> - ::before, ::after, ::first-line, ::placeholder, ::marker" }
        ]
      },
      {
        title: "الأخطاء الشائعة",
        content: [
          { type: "li", text: "1. الإفراط في استخدام <code>:has()</code> مع محددات معقدة - اجعلها بسيطة" },
          { type: "li", text: "2. خلط <code>:is()</code> مع <code>:where()</code> - <code>:is()</code> تأخذ النوعية، <code>:where()</code> لها صفر" },
          { type: "li", text: "3. نسيان الفواصل بين المحددات في <code>:is()</code>" },
          { type: "li", text: "4. التداخل المفرط مع CSS Nesting (الحد الأقصى 2-3 مستويات)" },
          { type: "li", text: "5. سوء فهم ترتيب @layer - المعلن عنه لاحقاً يفوز" },
          { type: "li", text: "6. استخدام <code>:has()</code> مع ::before/::after - هذه ليست عناصر DOM" },
          { type: "li", text: "7. استخدام nth-child() بشكل خاطئ - لا يقبل محددات الفئات" }
        ]
      },
      {
        title: "أفضل الممارسات",
        content: [
          { type: "li", text: "1. استخدم <code>@layer</code> لتنظيم النوعية" },
          { type: "li", text: "2. استخدم <code>:where()</code> لإعادة التعيين - النوعية الصفرية تجعلها سهلة التجاوز" },
          { type: "li", text: "3. اكتب CSS Nesting بشكل مسطح - الحد الأقصى 2-3 مستويات" },
          { type: "li", text: "4. اختر <code>:is()</code> أو <code>:where()</code> بوعي حسب احتياجات النوعية" },
          { type: "li", text: "5. استخدم <code>:has()</code> لتحسين تجربة المستخدم - النماذج، القوائم، الصفحات" },
          { type: "li", text: "6. استخدم <code>@scope</code> لمنع تسرب الأنماط" },
          { type: "li", text: "7. تجنب <code>!important</code> مع <code>:has()</code>" }
        ]
      }
    ],
    quiz: [
      {
        question: "ما هو الاستخدام الصحيح لمحدد :has() في CSS؟",
        options: [
          "لاختيار عناصر تحتوي على نص معين",
          "لتنسيق عنصر أب بناءً على محتواه أو أبنائه",
          "لحذف عناصر من DOM",
          "لإضافة مستمعي أحداث JavaScript"
        ],
        correctAnswer: 1,
        explanation: "يُعرف محدد :has() بمحدد الأب لأنه يتيح تنسيق عنصر أب بناءً على شروط مرتبطة بأبنائه. مثال: .card:has(img) يُنسّق بطاقة تحتوي على صورة."
      },
      {
        question: "ما الفرق بين :is() و :where() في CSS؟",
        options: [
          ":is() أسرع من :where()",
          ":where() لها نوعية صفرية بينما :is() تأخذ أعلى نوعية من محدداتها الداخلية",
          ":is() تعمل فقط مع الفئات الزائفة",
          "لا يوجد فرق بينهما"
        ],
        correctAnswer: 1,
        explanation: "الفرق الرئيسي هو النوعية: :where() لها دائماً نوعية صفرية، مما يجعلها ممتازة لإعادة التعيين حيث يمكنك تجاوزها بسهولة. :is() تأخذ أعلى نوعية من محدداتها الداخلية."
      }
    ],
    challenge: {
      title: "بناء نموذج تسجيل دخول بالمحددات الحديثة",
      description: "أنشئ نموذج تسجيل دخول احترافي باستخدام CSS Nesting والمحددات الحديثة و @layer. يجب أن يتضمن النموذج حالات التحقق وتأثيرات التركيز وأزرار تسجيل الدخول الاجتماعية."
    },
    cheatSheet: {
      title: "ملخص: المحددات الحديثة + CSS Nesting",
      items: [
        {
          title: "المحددات الأساسية",
          content: `| المحدد | الصيغة | الاستخدام |
|---------|--------|-----------|
| عنصر | p { } | استهداف وسم محدد |
| فئة | .btn { } | استهداف حسب الفئة |
| معرّف | #header { } | استهداف بمعرّف فريد |
| سمة | [type="text"] | استهداف حسب السمة |
| يحتوي | [class*="btn"] | القيمة تحتوي على النص |
| يبدأ بـ | [href^="https"] | يبدأ بالقيمة |
| ينتهي بـ | [href$=".pdf"] | ينتهي بالقيمة |`
        },
        {
          title: "المحرّكات",
          content: `| المحرّك | الصيغة | المعنى |
|---------|--------|--------|
| ابنة > | .nav > li | ابنة مباشرة |
| تابع (مسافة) | .nav a | أي تابع |
| مجاور + | h2 + p | الأخ المجاور التالي |
| عام ~ | h2 ~ p | جميع الإخوة التاليين |`
        },
        {
          title: "المحددات الحديثة",
          content: `| المحدد | الاستخدام | النوعية |
|---------|-----------|---------|
| :has() | تنسيق الأبناء بناءً على الأبناء | تعتمد على المحددات الداخلية |
| :is() | جمع المحددات لتقليل التكرار | الأعلى من المحددات الداخلية |
| :where() | مطابقة بنوعية صفرية | دائماً صفر |`
        }
      ]
    }
  },
  en: {
    sections: [
      {
        title: "What Are Modern Selectors",
        content: [
          { type: "p", text: "<strong>Modern Selectors</strong> in CSS are a set of tools that allow you to target elements in smarter and more flexible ways. Instead of relying only on classes and IDs, you can now use advanced selectors that reach parent elements, combine multiple selectors, and control specificity intelligently." },
          { type: "p", text: "Also, <strong>CSS Nesting</strong> is now available in all modern browsers without needing preprocessors like Sass, making code more organized and maintainable." },
          { type: "p", text: "In this lesson, you will learn:" },
          { type: "li", text: "Quick review of basic selectors and Combinators" },
          { type: "li", text: "Advanced Pseudo-classes and Pseudo-elements" },
          { type: "li", text: "Modern selectors: <code>:has()</code>, <code>:is()</code>, <code>:where()</code>" },
          { type: "li", text: "CSS Nesting - Native nesting without Sass" },
          { type: "li", text: "<code>@layer</code> - Controlling specificity order" },
          { type: "li", text: "<code>@scope</code> - Narrowing style scope" }
        ]
      },
      {
        title: "Why Use Them",
        content: [
          { type: "p", text: "Modern selectors solve several real problems developers have faced for years:" },
          { type: "li", text: "<strong>Reducing code repetition</strong> - Use <code>:is()</code> to group selectors" },
          { type: "li", text: "<strong>Accessing parent elements</strong> - Style parents based on children using <code>:has()</code>" },
          { type: "li", text: "<strong>Controlling specificity</strong> - Tools like <code>:where()</code> and <code>@layer</code> give precise control" },
          { type: "li", text: "<strong>Organizing code with CSS Nesting</strong> - Nest CSS rules inside each other without Sass" }
        ]
      },
      {
        title: "The Problem It Solves",
        content: [
          { type: "p", text: "Let's see a real problem developers faced before modern selectors:" },
          { type: "li", text: "<strong>Problem 1: Styling parent based on child</strong> - Without <code>:has()</code>, you had to manually add classes" },
          { type: "li", text: "<strong>Problem 2: Selector repetition</strong> - Long, boring repetitions for hover/focus/active states" },
          { type: "li", text: "<strong>Problem 3: Difficulty with resets</strong> - Reset rules had high specificity and conflicted with your work" }
        ]
      },
      {
        title: "Simple Explanation",
        content: [
          { type: "p", text: "Let's dive into detailed explanation of each tool with quick basic concepts:" },
          { type: "li", text: "<strong>Element Selectors</strong> - Target tags directly (p, h1, div)" },
          { type: "li", text: "<strong>Class Selectors</strong> - Target elements by their class (.btn, .card)" },
          { type: "li", text: "<strong>ID Selectors</strong> - Target elements by unique ID (#header)" },
          { type: "li", text: "<strong>Attribute Selectors</strong> - Target by attribute type, presence, or value" },
          { type: "li", text: "<strong>Combinators</strong> - Child (>), Descendant (space), Adjacent (+), General (~)" },
          { type: "li", text: "<strong>Pseudo-classes</strong> - :hover, :focus, :first-child, :nth-child(n), :not()" },
          { type: "li", text: "<strong>Pseudo-elements</strong> - ::before, ::after, ::first-line, ::placeholder, ::marker" }
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "1. Overusing <code>:has()</code> with complex selectors - keep it simple" },
          { type: "li", text: "2. Confusing <code>:is()</code> with <code>:where()</code> - <code>:is()</code> takes specificity, <code>:where()</code> has zero" },
          { type: "li", text: "3. Forgetting commas between selectors in <code>:is()</code>" },
          { type: "li", text: "4. Over-nesting with CSS Nesting (max 2-3 levels)" },
          { type: "li", text: "5. Misunderstanding @layer ordering - declared later wins" },
          { type: "li", text: "6. Using <code>:has()</code> with ::before/::after - these aren't DOM elements" },
          { type: "li", text: "7. Incorrect nth-child() usage - it doesn't accept class selectors" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Use <code>@layer</code> to organize specificity" },
          { type: "li", text: "2. Use <code>:where()</code> for resets - zero specificity makes them easy to override" },
          { type: "li", text: "3. Write CSS Nesting flatly - max 2-3 levels" },
          { type: "li", text: "4. Choose <code>:is()</code> or <code>:where()</code> intentionally based on specificity needs" },
          { type: "li", text: "5. Use <code>:has()</code> to improve UX - forms, lists, pages" },
          { type: "li", text: "6. Use <code>@scope</code> to prevent style leakage" },
          { type: "li", text: "7. Avoid <code>!important</code> with <code>:has()</code>" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the correct use of the :has() selector in CSS?",
        options: [
          "To select elements containing specific text",
          "To style a parent element based on its content or children",
          "To delete elements from the DOM",
          "To add JavaScript event listeners"
        ],
        correctAnswer: 1,
        explanation: "The :has() selector is known as the parent selector because it allows styling a parent element based on conditions related to its children. For example: .card:has(img) styles a card that contains an image."
      },
      {
        question: "What is the difference between :is() and :where() in CSS?",
        options: [
          ":is() is faster than :where()",
          ":where() has zero specificity while :is() takes the highest specificity from its inner selectors",
          ":is() only works with Pseudo-classes",
          "There is no difference between them"
        ],
        correctAnswer: 1,
        explanation: "The key difference is specificity: :where() always has zero specificity, making it excellent for resets since you can easily override it. :is() takes the highest specificity from its inner selectors."
      },
      {
        question: "In the following code, which rule wins? @layer base { .card { color: red; } } @layer components { .card { color: blue; } }",
        options: [
          "color: red because base is declared first",
          "color: blue because components is declared second in the hierarchy",
          "Cannot be predicted - depends on the browser",
          "color: red because base has higher specificity"
        ],
        correctAnswer: 1,
        explanation: "In @layer, order depends on declaration order. The rule declared second (components) overrides the rule declared first (base). This is similar to the order from lowest to highest."
      },
      {
        question: "What is the main purpose of using @layer in CSS?",
        options: [
          "Improving page load performance",
          "Adding animations to elements",
          "Controlling specificity order and organizing rules in layers",
          "Creating responsive design"
        ],
        correctAnswer: 2,
        explanation: "@layer creates layers of CSS rules with clear specificity ordering. This solves specificity conflicts between different libraries and makes code more organized."
      }
    ],
    challenge: {
      title: "Build a Login Form with Modern Selectors",
      description: "Create a professional login form using CSS Nesting, Modern Selectors, and @layer. The form should include validation states, focus effects, and social login buttons."
    },
    cheatSheet: {
      title: "Cheat Sheet: Modern Selectors + CSS Nesting",
      items: [
        {
          title: "Basic Selectors",
          content: `| Selector | Syntax | Usage |
|----------|--------|-------|
| Element | p { } | Target specific tag |
| Class | .btn { } | Target by class |
| ID | #header { } | Target by unique ID |
| Attribute | [type="text"] | Target by attribute |
| Contains | [class*="btn"] | Value contains text |
| Starts With | [href^="https"] | Starts with value |
| Ends With | [href$=".pdf"] | Ends with value |`
        },
        {
          title: "Combinators",
          content: `| Combinator | Syntax | Meaning |
|------------|--------|---------|
| Child > | .nav > li | Direct child |
| Descendant (space) | .nav a | Any descendant |
| Adjacent + | h2 + p | Next adjacent sibling |
| General ~ | h2 ~ p | All following siblings |`
        },
        {
          title: "Pseudo-classes",
          content: `Interaction: :hover, :focus, :active
Children: :first-child, :last-child, :nth-child(n)
State: :checked, :disabled, :empty
Exception: :not(selector)
New: :has(selector)`
        },
        {
          title: "Modern Selectors",
          content: `| Selector | Usage | Specificity |
|----------|-------|-------------|
| :has() | Style parent based on child | Depends on inner selectors |
| :is() | Group selectors to reduce repetition | Highest from inner selectors |
| :where() | Match with zero specificity | Always zero |`
        },
        {
          title: "CSS Nesting",
          content: `.parent {
  & .child { color: red; }
  &:hover { background: gray; }
  &::before { content: ""; }
  &.active { color: blue; }
  @media (max-width: 768px) { font-size: 14px; }
}`
        },
        {
          title: "@layer",
          content: `/* 1. Define layer order */
@layer reset, base, components, utilities;

/* 2. Define each layer */
@layer reset { * { margin: 0; } }
@layer base { body { font-family: system-ui; } }
@layer components { .card { padding: 1rem; } }
@layer utilities { .hidden { display: none; } }

/* Rules outside @layer = highest specificity */`
        }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que les sélecteurs modernes",
        content: [
          { type: "p", text: "Les <strong>sélecteurs modernes</strong> en CSS sont un ensemble d'outils qui vous permettent de cibler les éléments de manière plus intelligente et flexible. Au lieu de vous fier uniquement aux classes et aux IDs, vous pouvez maintenant utiliser des sélecteurs avancés qui atteignent les éléments parents, combinent plusieurs sélecteurs et contrôlent la spécificité de manière intelligente." },
          { type: "p", text: "De plus, le <strong>CSS Nesting</strong> est maintenant disponible dans tous les navigateurs modernes sans nécessiter de préprocesseurs comme Sass, rendant le code plus organisé et maintenable." }
        ]
      },
      {
        title: "Pourquoi les utiliser",
        content: [
          { type: "p", text: "Les sélecteurs modernes résolvent plusieurs problèmes réels auxquels les développeurs sont confrontés depuis des années :" },
          { type: "li", text: "<strong>Réduire la répétition du code</strong> - Utilisez <code>:is()</code> pour regrouper les sélecteurs" },
          { type: "li", text: "<strong>Accéder aux éléments parents</strong> - Stylez les parents basés sur les enfants avec <code>:has()</code>" },
          { type: "li", text: "<strong>Contrôler la spécificité</strong> - Des outils comme <code>:where()</code> et <code>@layer</code> donnent un contrôle précis" },
          { type: "li", text: "<strong>Organiser le code avec CSS Nesting</strong> - Imbriquez les règles CSS les unes dans les autres" }
        ]
      },
      {
        title: "Le problème qu'il résout",
        content: [
          { type: "p", text: "Voyons un problème réel auquel les développeurs étaient confrontés avant les sélecteurs modernes :" },
          { type: "li", text: "<strong>Problème 1 : Styler le parent basé sur l'enfant</strong> - Sans <code>:has()</code>, vous deviez ajouter des classes manuellement" },
          { type: "li", text: "<strong>Problème 2 : Répétition des sélecteurs</strong> - Des répétitions longues et ennuyeuses pour les états hover/focus/active" },
          { type: "li", text: "<strong>Problème 3 : Difficulté avec les resets</strong> - Les règles de reset avaient une spécificité élevée et entraient en conflit" }
        ]
      },
      {
        title: "Explication simple",
        content: [
          { type: "p", text: "Plongeons dans une explication détaillée de chaque outil avec des concepts de base rapides :" },
          { type: "li", text: "<strong>Sélecteurs d'éléments</strong> - Ciblez les balises directement (p, h1, div)" },
          { type: "li", text: "<strong>Sélecteurs de classe</strong> - Ciblez les éléments par leur classe (.btn, .card)" },
          { type: "li", text: "<strong>Sélecteurs d'ID</strong> - Ciblez les éléments par ID unique (#header)" },
          { type: "li", text: "<strong>Sélecteurs d'attribut</strong> - Ciblez par type, présence ou valeur d'attribut" },
          { type: "li", text: "<strong>Combinateurs</strong> - Child (>), Descendant (espace), Adjacent (+), General (~)" },
          { type: "li", text: "<strong>Pseudo-classes</strong> - :hover, :focus, :first-child, :nth-child(n), :not()" },
          { type: "li", text: "<strong>Pseudo-éléments</strong> - ::before, ::after, ::first-line, ::placeholder, ::marker" }
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "1. Surutiliser <code>:has()</code> avec des sélecteurs complexes - gardez-le simple" },
          { type: "li", text: "2. Confondre <code>:is()</code> avec <code>:where()</code> - <code>:is()</code> prend la spécificité, <code>:where()</code> a zéro" },
          { type: "li", text: "3. Oublier les virgules entre les sélecteurs dans <code>:is()</code>" },
          { type: "li", text: "4. Imbriquer trop avec CSS Nesting (max 2-3 niveaux)" },
          { type: "li", text: "5. Mal comprendre l'ordre de @layer - celui déclaré en dernier gagne" },
          { type: "li", text: "6. Utiliser <code>:has()</code> avec ::before/::after - ce ne sont pas des éléments DOM" },
          { type: "li", text: "7. Utilisation incorrecte de nth-child() - il n'accepte pas les sélecteurs de classe" }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "1. Utilisez <code>@layer</code> pour organiser la spécificité" },
          { type: "li", text: "2. Utilisez <code>:where()</code> pour les resets - spécificité zéro facilite la surcharge" },
          { type: "li", text: "3. Écrivez CSS Nesting à plat - max 2-3 niveaux" },
          { type: "li", text: "4. Choisissez <code>:is()</code> ou <code>:where()</code> intentionnellement selon les besoins de spécificité" },
          { type: "li", text: "5. Utilisez <code>:has()</code> pour améliorer l'UX - formulaires, listes, pages" },
          { type: "li", text: "6. Utilisez <code>@scope</code> pour empêcher la fuite des styles" },
          { type: "li", text: "7. Évitez <code>!important</code> avec <code>:has()</code>" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quelle est l'utilisation correcte du sélecteur :has() en CSS ?",
        options: [
          "Pour sélectionner des éléments contenant un texte spécifique",
          "Pour styliser un élément parent basé sur son contenu ou ses enfants",
          "Pour supprimer des éléments du DOM",
          "Pour ajouter des écouteurs d'événements JavaScript"
        ],
        correctAnswer: 1,
        explanation: "Le sélecteur :has() est connu comme le sélecteur parent car il permet de styliser un élément parent basé sur des conditions liées à ses enfants. Par exemple : .card:has(img) stylise une carte qui contient une image."
      },
      {
        question: "Quelle est la différence entre :is() et :where() en CSS ?",
        options: [
          ":is() est plus rapide que :where()",
          ":where() a une spécificité de zéro tandis que :is() prend la spécificité la plus élevée de ses sélecteurs internes",
          ":is() ne fonctionne qu'avec les Pseudo-classes",
          "Il n'y a pas de différence entre eux"
        ],
        correctAnswer: 1,
        explanation: "La différence clé est la spécificité : :where() a toujours une spécificité de zéro, ce qui la rend excellente pour les resets car vous pouvez la surcharger facilement. :is() prend la spécificité la plus élevée de ses sélecteurs internes."
      }
    ],
    challenge: {
      title: "Construire un formulaire de connexion avec les sélecteurs modernes",
      description: "Créez un formulaire de connexion professionnel en utilisant CSS Nesting, les sélecteurs modernes et @layer. Le formulaire doit inclure des états de validation, des effets de focus et des boutons de connexion sociale."
    },
    cheatSheet: {
      title: "Aide-mémoire : Sélecteurs modernes + CSS Nesting",
      items: [
        {
          title: "Sélecteurs de base",
          content: `| Sélecteur | Syntaxe | Usage |
|-----------|---------|-------|
| Élément | p { } | Cibler une balise spécifique |
| Classe | .btn { } | Cibler par classe |
| ID | #header { } | Cibler par ID unique |
| Attribut | [type="text"] | Cibler par attribut |
| Contient | [class*="btn"] | La valeur contient le texte |
| Commence par | [href^="https"] | Commence par la valeur |
| Finit par | [href$=".pdf"] | Finit par la valeur |`
        },
        {
          title: "Combinateurs",
          content: `| Combinateur | Syntaxe | Signification |
|-------------|---------|---------------|
| Child > | .nav > li | Enfant direct |
| Descendant (espace) | .nav a | Tout descendant |
| Adjacent + | h2 + p | Frère adjacent suivant |
| General ~ | h2 ~ p | Tous les frères suivants |`
        },
        {
          title: "Modernes sélecteurs",
          content: `| Sélecteur | Usage | Spécificité |
|-----------|-------|-------------|
| :has() | Styliser le parent basé sur l'enfant | Dépend des sélecteurs internes |
| :is() | Regrouper les sélecteurs pour réduire la répétition | La plus élevée des sélecteurs internes |
| :where() | Correspondre avec spécificité zéro | Toujours zéro |`
        }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was sind moderne Selektoren",
        content: [
          { type: "p", text: "<strong>Moderne Selektoren</strong> in CSS sind ein Werkzeugsatz, der es Ihnen ermöglicht, Elemente auf intelligentere und flexiblere Weise anzusprechen. Anstatt sich nur auf Klassen und IDs zu verlassen, können Sie jetzt fortschrittliche Selektoren verwenden, die übergeordnete Elemente erreichen, mehrere Selektoren kombinieren und Spezifität intelligent steuern." },
          { type: "p", text: "Außerdem ist <strong>CSS Nesting</strong> jetzt in allen modernen Browsern verfügbar, ohne dass Preprozessoren wie Sass benötigt werden, was den Code organisierter und wartbarer macht." }
        ]
      },
      {
        title: "Warum sie verwenden",
        content: [
          { type: "p", text: "Moderne Selektoren lösen mehrere reale Probleme, mit denen Entwickler seit Jahren konfrontiert sind:" },
          { type: "li", text: "<strong>Code-Wiederholung reduzieren</strong> - Verwenden Sie <code>:is()</code> um Selektoren zu gruppieren" },
          { type: "li", text: "<strong>Übergeordnete Elemente erreichen</strong> - Gestalten Sie Eltern basierend auf Kindern mit <code>:has()</code>" },
          { type: "li", text: "<strong>Spezifität steuern</strong> - Werkzeuge wie <code>:where()</code> und <code>@layer</code> geben genaue Kontrolle" },
          { type: "li", text: "<strong>Code mit CSS Nesting organisieren</strong> - Verschachteln Sie CSS-Regeln ineinander" }
        ]
      },
      {
        title: "Das Problem, das es löst",
        content: [
          { type: "p", text: "Schauen wir uns ein reales Problem an, mit dem Entwickler vor modernen Selektoren konfrontiert waren:" },
          { type: "li", text: "<strong>Problem 1: Elternteil basierend auf Kind gestalten</strong> - Ohne <code>:has()</code> mussten Sie manuell Klassen hinzufügen" },
          { type: "li", text: "<strong>Problem 2: Selektoren-Wiederholung</strong> - Lange, langweilige Wiederholungen für hover/focus/active-Zustände" },
          { type: "li", text: "<strong>Problem 3: Schwierigkeiten mit Resets</strong> - Reset-Regeln hatten hohe Spezifität und traten in Konflikt" }
        ]
      },
      {
        title: "Einfache Erklärung",
        content: [
          { type: "p", text: "Lassen Sie uns in eine detaillierte Erklärung jedes Werkzeugs mit schnellen Grundkonzepten eintauchen:" },
          { type: "li", text: "<strong>Element-Selektoren</strong> - Sprechen Sie Tags direkt an (p, h1, div)" },
          { type: "li", text: "<strong>Klassen-Selektoren</strong> - Sprechen Sie Elemente nach ihrer Klasse an (.btn, .card)" },
          { type: "li", text: "<strong>ID-Selektoren</strong> - Sprechen Sie Elemente nach eindeutiger ID an (#header)" },
          { type: "li", text: "<strong>Attribut-Selektoren</strong> - Sprechen Sie nach Attributtyp, -vorhandensein oder -wert an" },
          { type: "li", text: "<strong>Kombinatoren</strong> - Child (>), Descendant (Leerzeichen), Adjacent (+), General (~)" },
          { type: "li", text: "<strong>Pseudo-Klassen</strong> - :hover, :focus, :first-child, :nth-child(n), :not()" },
          { type: "li", text: "<strong>Pseudo-Elemente</strong> - ::before, ::after, ::first-line, ::placeholder, ::marker" }
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "1. Übermäßige Verwendung von <code>:has()</code> mit komplexen Selektoren - halten Sie es einfach" },
          { type: "li", text: "2. Verwechslung von <code>:is()</code> mit <code>:where()</code> - <code>:is()</code> übernimmt Spezifität, <code>:where()</code> hat null" },
          { type: "li", text: "3. Vergessen der Kommas zwischen Selektoren in <code>:is()</code>" },
          { type: "li", text: "4. Zu tiefe Verschachtelung mit CSS Nesting (max 2-3 Ebenen)" },
          { type: "li", text: "5. Falsches Verständnis der @layer-Reihenfolge - zuletzt deklariert gewinnt" },
          { type: "li", text: "6. Verwendung von <code>:has()</code> mit ::before/::after - das sind keine DOM-Elemente" },
          { type: "li", text: "7. Falsche nth-child() Verwendung - es akzeptiert keine Klassen-Selektoren" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Verwenden Sie <code>@layer</code> um Spezifität zu organisieren" },
          { type: "li", text: "2. Verwenden Sie <code>:where()</code> für Resets - null Spezifität macht sie leicht überschreibbar" },
          { type: "li", text: "3. Schreiben Sie CSS Nesting flach - max 2-3 Ebenen" },
          { type: "li", text: "4. Wählen Sie <code>:is()</code> oder <code>:where()</code> bewusst basierend auf Spezifitätsbedürfnissen" },
          { type: "li", text: "5. Verwenden Sie <code>:has()</code> um die UX zu verbessern - Formulare, Listen, Seiten" },
          { type: "li", text: "6. Verwenden Sie <code>@scope</code> um Style-Leckage zu verhindern" },
          { type: "li", text: "7. Vermeiden Sie <code>!important</code> mit <code>:has()</code>" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist die korrekte Verwendung des :has()-Selektors in CSS?",
        options: [
          "Um Elemente mit bestimmtem Text auszuwählen",
          "Um ein übergeordnetes Element basierend auf seinem Inhalt oder seinen Kindern zu gestalten",
          "Um Elemente aus dem DOM zu löschen",
          "Um JavaScript-Event-Listener hinzuzufügen"
        ],
        correctAnswer: 1,
        explanation: "Der :has()-Selektor ist als Eltern-Selektor bekannt, da er das Gestalten eines übergeordneten Elements basierend auf Bedingungen im Zusammenhang mit seinen Kindern ermöglicht. Beispiel: .card:has(img) gestaltet eine Karte, die ein Bild enthält."
      },
      {
        question: "Was ist der Unterschied zwischen :is() und :where() in CSS?",
        options: [
          ":is() ist schneller als :where()",
          ":where() hat null Spezifität, während :is() die höchste Spezifität seiner inneren Selektoren übernimmt",
          ":is() funktioniert nur mit Pseudo-Klassen",
          "Es gibt keinen Unterschied zwischen ihnen"
        ],
        correctAnswer: 1,
        explanation: "Der Hauptunterschied ist die Spezifität: :where() hat immer null Spezifität, was es hervorragend für Resets macht, da man sie leicht überschreiben kann. :is() übernimmt die höchste Spezifität seiner inneren Selektoren."
      }
    ],
    challenge: {
      title: "Ein Login-Formular mit modernen Selektoren erstellen",
      description: "Erstellen Sie ein professionelles Login-Formular mit CSS Nesting, modernen Selektoren und @layer. Das Formular muss Validierungszustände, Fokus-Effekte und Social-Login-Buttons enthalten."
    },
    cheatSheet: {
      title: "Spickzettel: Moderne Selektoren + CSS Nesting",
      items: [
        {
          title: "Basis-Selektoren",
          content: `| Selektor | Syntax | Verwendung |
|----------|--------|------------|
| Element | p { } | Bestimmtes Tag ansprechen |
| Klasse | .btn { } | Nach Klasse ansprechen |
| ID | #header { } | Nach eindeutiger ID ansprechen |
| Attribut | [type="text"] | Nach Attribut ansprechen |
| Enthält | [class*="btn"] | Wert enthält Text |
| Beginnt mit | [href^="https"] | Beginnt mit Wert |
| Endet mit | [href$=".pdf"] | Endet mit Wert |`
        },
        {
          title: "Kombinatoren",
          content: `| Kombinator | Syntax | Bedeutung |
|------------|--------|-----------|
| Child > | .nav > li | Direktes Kind |
| Descendant (Leerzeichen) | .nav a | Jedes Nachkommen |
| Adjacent + | h2 + p | Nächstes angrenzendes Geschwister |
| General ~ | h2 ~ p | Alle folgenden Geschwister |`
        },
        {
          title: "Moderne Selektoren",
          content: `| Selektor | Verwendung | Spezifität |
|----------|-----------|-------------|
| :has() | Übergeordnetes basierend auf Kind gestalten | Hängt von inneren Selektoren ab |
| :is() | Selektoren gruppieren um Wiederholung zu reduzieren | Höchste aus inneren Selektoren |
| :where() | Mit null Spezifität matchen | Immer null |`
        }
      ]
    }
  }
};
export default translations;
