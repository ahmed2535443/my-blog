const translations = {
  ar: {
    sections: [
      {
        title: "ما هو التصميم المتجاوب الحديث",
        content: [
          { type: "p", text: "التصميم المتجاوب الحديث هو مجموعة من تقنيات CSS المتقدمة التي تتيح لك بناء مواقع ويب تتكيف تلقائياً مع أحجام شاشات وأجهزة مختلفة - لكن بطريقة أذكى وأكثر كفاءة من الأساليب التقليدية." },
          { type: "p", text: "في الماضي، كنا نعتمد حصرياً على <strong>Media Queries</strong> للكشف عن عرض الشاشة وضبط التصميم وفقاً لذلك. لكن مع تطور الويب، هناك أدوات أقوى وأكثر مرونة:" },
          { type: "li", text: "1. Media Queries - كلاسيكية لكن محسّنة" },
          { type: "li", text: "2. Container Queries - الثورة الحقيقية!" },
          { type: "li", text: "3. clamp() - أحجام خطوط ومسافات سائلة دون Media Queries" },
          { type: "li", text: "4. min() و max() - دوال حساب ذكية" },
          { type: "li", text: "5. Logical Properties - دعم RTL كامل" },
          { type: "li", text: "6. @supports - كشف الميزات" },
          { type: "li", text: "7. Aspect Ratio - نسبة العرض إلى الارتفاع" },
          { type: "li", text: "8. استراتيجية نقاط التوقف المبنية على المحتوى" }
        ]
      },
      {
        title: "لماذا نستخدمه",
        content: [
          { type: "p", text: "التصميم المتجاوب الحديث ليس مجرد 'أداة إضافية' - بل هو <strong>ضرورة مطلقة</strong> في عالم الويب الحديث." },
          { type: "li", text: "<strong>تنوّع الأجهزة الجنوني</strong> - المستخدمون يتصفحون من الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر المكتبية والمحمولة والتلفزيونات الذكية" },
          { type: "li", text: "<strong>مشكلة Media Queries الكلاسيكية</strong> - Media Queries ترى عرض منطقة العرض، لا عرض الحاوية" },
          { type: "li", text: "<strong>أداء أفضل</strong> - Container Queries و clamp() تعمل على مستوى CSS مباشرة" },
          { type: "li", text: "<strong>دعم RTL</strong> - Logical Properties تحل مشاكل margin-left/right في تصاميم RTL" }
        ]
      },
      {
        title: "المشكلة التي يحلها",
        content: [
          { type: "p", text: "دعنا نأخذ مثالاً عملياً. تخيل مكون بطاقات يُستخدم في أماكن مختلفة:" },
          { type: "callout-accent", title: "مشكلة الحاوية", text: "بطاقة في الشريط الجانبي (ضيقة) مقابل المحتوى الرئيسي (واسع) تحتاج تخطيطات مختلفة. Media Queries ترى فقط عرض منطقة العرض. Container Queries تحل هذا ببراعة!" },
          { type: "callout-accent", title: "مشكلة الخط الثابت", text: "بدون clamp()، تحتاج مئات الأسطر في Media Queries لتغيير أحجام الخطوط عند كل نقطة توقف. clamp() يفعل ذلك بسطر واحد!" },
          { type: "callout-accent", title: "مشكلة الاتجاه (LTR/RTL)", text: "في تصاميم الويب العربية، تحتاج margin-right في LTR و margin-left في RTL. Logical Properties تحل هذا تلقائياً بـ margin-inline-end." }
        ]
      },
      {
        title: "شرح بسيط",
        content: [
          { type: "p", text: "دعنا نشرح كل تقنية ببساطة قبل الغوص في الكود:" },
          { type: "li", text: "<strong>Media Queries</strong> — \"على أي جهاز أنت؟\" — بسيطة لكن محدودة، لا تعرف السياق الداخلي" },
          { type: "li", text: "<strong>Container Queries</strong> — \"أين أنت داخل الصفحة؟\" — هذه هي الثورة!" },
          { type: "li", text: "<strong>clamp()</strong> — \"أعطني حجماً سائلاً\" — قيم الحد الأدنى والفضلي والأقصى تتغير بسلاسة" },
          { type: "li", text: "<strong>Logical Properties</strong> — \"افهم الاتجاه من السياق\" — margin-inline-start بدلاً من margin-left" },
          { type: "li", text: "<strong>Aspect Ratio</strong> — \"حافظ على النسبة\" — الحفاظ على نسبة 16:9 دون حيل CSS القديمة" }
        ]
      },
      {
        title: "خلف الكواليس",
        content: [
          { type: "p", text: "دعنا نفهم كيف تعمل هذه التقنيات على مستوى المتصفح:" },
          { type: "li", text: "<strong>Container Queries:</strong> يجد المتصفح عنصر container-type، ويُنشئ سياق الحجز، ويتبع الأبعاد، وينطبق قواعد @container" },
          { type: "li", text: "<strong>clamp():</strong> المعادلة: max(القيمة-الدنيا, min(القيمة-المفضلة, القيمة-القصوى)). يحسب سائلاً بين الحد الأدنى والأقصى" },
          { type: "li", text: "<strong>Logical Properties:</strong> يفهم المتصفح writing-mode. LTR: inline-start = يسار. RTL: inline-start = يمين (معكوس!)" },
          { type: "li", text: "<strong>@supports:</strong> كشف الميزات قبل تطبيق الأنماط - تحسين تدريجي" }
        ]
      },
      {
        title: "الأخطاء الشائعة",
        content: [
          { type: "li", text: "<strong>الخطأ 1: استخدام container-type: size بدلاً من inline-size</strong> — قد يسبب تبعية دائرية" },
          { type: "li", text: "<strong>الخطأ 2: نسيان container-name</strong> — قد يستعلم من حاوية غير متوقعة" },
          { type: "li", text: "<strong>الخطأ 3: أرقام clamp() خاطئة</strong> — القيمة الدنيا أكبر من القصوى لا معنى لها" },
          { type: "li", text: "<strong>الخطأ 4: عدم تطابق container-name</strong> — الاسم في الاستعلام يجب أن يطابق container-name" },
          { type: "li", text: "<strong>الخطأ 5: استخدام الخصائص المادية في RTL</strong> — margin-left لا يعمل بشكل صحيح في RTL" },
          { type: "li", text: "<strong>الخطأ 6: نقاط التوقف المحددة للجهاز</strong> — استخدم نقاط التوقف المبنية على المحتوى بدلاً من ذلك" },
          { type: "li", text: "<strong>الخطأ 7: إنشاء حلقات لا نهائية</strong> — لا تغير حجم الحاوية من داخل @container" }
        ]
      },
      {
        title: "أفضل الممارسات",
        content: [
          { type: "li", text: "1. استخدم clamp() للمسافات والأحجام - أنشئ متغيرات سائلة" },
          { type: "li", text: "2. ابدأ من الجوال أولاً باستخدام Container Queries" },
          { type: "li", text: "3. استخدم @supports للتحسين التدريجي" },
          { type: "li", text: "4. اكتب دائماً Logical Properties" },
          { type: "li", text: "5. استخدم aspect-ratio للصور والفيديوهات" },
          { type: "li", text: "6. استخدم استراتيجية نقاط التوقف المبنية على المحتوى" }
        ]
      }
    ],
    quiz: [
      {
        question: "ما هو الفرق الأساسي بين Media Queries و Container Queries؟",
        options: [
          "Media Queries أسرع من Container Queries",
          "Media Queries تستعلم عن عرض منطقة العرض، Container Queries تستعلم عن حجم الحاوية",
          "Container Queries تعمل فقط على الهواتف",
          "Media Queries لا تعمل مع RTL"
        ],
        correctAnswer: 1,
        explanation: "ترى Media Queries عرض منطقة العرض (نافذة المتصفح)، بينما ترى Container Queries حجم الحاوية حيث ي exist المكون. هذا يتيح للمكونات التكيف مع مكانها داخل الصفحة، وليس فقط حجم الشاشة."
      },
      {
        question: "لماذا نوصي باستخدام inline-size بدلاً من size في Container Queries؟",
        options: [
          "لأن size غير مدعومة من جميع المتصفحات",
          "لأن inline-size أسرع في الأداء",
          "لأن size قد تسبب تبعية دائرية بين الحاوية والمحتوى",
          "لأن inline-size تعمل فقط مع RTL"
        ],
        correctAnswer: 2,
        explanation: "عند استخدام container-type: size، قد يدخل المتصفح في حلقة لا نهائية حيث يعتمد حجم الحاوية على المحتوى والمحتوى يعتمد على الحاوية. تتبع inline-size العرض فقط وأكثر أماناً."
      },
      {
        question: "ما المكافئ المنطقي لـ margin-left؟",
        options: [
          "margin-inline-end",
          "margin-inline-start",
          "margin-inline: left",
          "margin-left-inline"
        ],
        correctAnswer: 1,
        explanation: "margin-inline-start هو المكافئ المنطقي لـ margin-left في LTR و margin-right في RTL. 'start' تعني بداية السطر وتتغير حسب اتجاه الكتابة."
      },
      {
        question: "متى تستخدم Container Queries بدلاً من Media Queries؟",
        options: [
          "عندما تريد دعم المتصفحات القديمة",
          "عندما يتم استخدام مكون في أماكن مختلفة بأحجام مختلفة",
          "عندما تريد تحسين أداء الموقع",
          "عندما تصمم لجهاز محدد"
        ],
        correctAnswer: 1,
        explanation: "Container Queries مثالية عندما لديك مكون (مثل بطاقة) يُستخدم في أماكن مختلفة (شريط جانبي، محتوى رئيسي، نافذة منبثقة) ويحتاج أن يتكيف مع حجم كل حاوية."
      }
    ],
    challenge: {
      title: "بناء مكون بطاقات متوافق مع RTL",
      description: "أنشئ مكون تعليمي للبطاقات باستخدام Container Queries و clamp() و Logical Properties و aspect-ratio و @supports للتحسين التدريجي."
    },
    cheatSheet: {
      title: "مرجع سريع للتصميم المتجاوب الحديث",
      items: [
        {
          title: "Container Queries",
          content: `.container { container-type: inline-size; container-name: my-container; }
@container my-container (min-width: 500px) { .child { /* ... */ } }
@container (min-width: 400px) { /* حاوية كبيرة */ }
@container (max-width: 399px) { /* حاوية صغيرة */ }`
        },
        {
          title: "صيغة clamp()",
          content: `font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(1rem, 3vw, 3rem);
width: clamp(300px, 80%, 1200px);
/* الصيغة: max(الدنيا, min(المفضلة, القصوى)) */`
        },
        {
          title: "خريطة Logical Properties",
          content: `width → inline-size
height → block-size
margin-left → margin-inline-start
margin-right → margin-inline-end
padding-left → padding-inline-start
text-align: left → text-align: start
inset-left → inset-inline-start`
        },
        {
          title: "min() و max()",
          content: `width: min(80%, 800px); /* الأصغر من الاثنين */
width: max(300px, 50%); /* الأكبر من الاثنين */
font-size: max(1rem, min(3vw, 2rem)); /* يعادل clamp */`
        }
      ]
    }
  },
  en: {
    sections: [
      {
        title: "What is Modern Responsive Design",
        content: [
          { type: "p", text: "Modern Responsive Design is a set of advanced CSS techniques that allow you to build websites that automatically adapt to different screen sizes and devices — but in a smarter and more efficient way than traditional approaches." },
          { type: "p", text: "In the past, we relied exclusively on <strong>Media Queries</strong> to detect screen width and adjust the design accordingly. But with web evolution, there are more powerful and flexible tools:" },
          { type: "li", text: "1. Media Queries — classic but improved" },
          { type: "li", text: "2. Container Queries — the real revolution!" },
          { type: "li", text: "3. clamp() — fluid font sizes and spacing without Media Queries" },
          { type: "li", text: "4. min() and max() — smart calculation functions" },
          { type: "li", text: "5. Logical Properties — full RTL support" },
          { type: "li", text: "6. @supports — feature detection" },
          { type: "li", text: "7. Aspect Ratio — width to height ratio" },
          { type: "li", text: "8. Content-based breakpoint strategy" }
        ]
      },
      {
        title: "Why Use It",
        content: [
          { type: "p", text: "Modern responsive design is not just an 'additional tool' — it's an <strong>absolute necessity</strong> in the modern web world." },
          { type: "li", text: "<strong>Crazy device variety</strong> - Users browse from phones, tablets, desktops, laptops, and smart TVs" },
          { type: "li", text: "<strong>Classic Media Query problem</strong> - Media Queries see viewport width, not container width" },
          { type: "li", text: "<strong>Better performance</strong> - Container Queries and clamp() work at CSS level directly" },
          { type: "li", text: "<strong>RTL support</strong> - Logical Properties solve margin-left/right issues in RTL designs" }
        ]
      },
      {
        title: "The Problem It Solves",
        content: [
          { type: "p", text: "Let's take a practical example. Imagine a card component used in different places:" },
          { type: "callout-accent", title: "The Container Problem", text: "A card in a sidebar (narrow) vs in main content (wide) needs different layouts. Media Queries only see viewport width, not the container size. Container Queries solve this brilliantly!" },
          { type: "callout-accent", title: "The Fixed Font Problem", text: "Without clamp(), you need hundreds of lines in Media Queries to change font sizes at every breakpoint. clamp() does it with one line!" },
          { type: "callout-accent", title: "The Direction Problem (LTR/RTL)", text: "In Arabic web designs, you need margin-right in LTR and margin-left in RTL. Logical Properties solve this automatically with margin-inline-end." }
        ]
      },
      {
        title: "Simple Explanation",
        content: [
          { type: "p", text: "Let's explain each technique simply before diving into code:" },
          { type: "li", text: "<strong>Media Queries</strong> — \"What device are you on?\" — Simple but limited, doesn't know internal context" },
          { type: "li", text: "<strong>Container Queries</strong> — \"Where are you inside the page?\" — This is the revolution!" },
          { type: "li", text: "<strong>clamp()</strong> — \"Give me a fluid size\" — Minimum, preferred, and maximum values that change smoothly" },
          { type: "li", text: "<strong>Logical Properties</strong> — \"Understand direction from context\" — margin-inline-start instead of margin-left" },
          { type: "li", text: "<strong>Aspect Ratio</strong> — \"Keep the ratio\" — Maintain 16:9 ratio without old CSS tricks" }
        ]
      },
      {
        title: "Behind the Scenes",
        content: [
          { type: "p", text: "Let's understand how these techniques work at the browser level:" },
          { type: "li", text: "<strong>Container Queries:</strong> Browser finds container-type element, creates containment context, tracks dimensions, and applies @container rules" },
          { type: "li", text: "<strong>clamp():</strong> Formula: max(min-value, min(preferred-value, max-value)). Calculates fluidly between min and max" },
          { type: "li", text: "<strong>Logical Properties:</strong> Browser understands writing-mode. LTR: inline-start = left. RTL: inline-start = right (reversed!)" },
          { type: "li", text: "<strong>@supports:</strong> Feature detection before applying styles — progressive enhancement" }
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Mistake 1: Using container-type: size instead of inline-size</strong> — Can cause circular dependency" },
          { type: "li", text: "<strong>Mistake 2: Forgetting container-name</strong> — May query from unexpected container" },
          { type: "li", text: "<strong>Mistake 3: Wrong clamp() numbers</strong> — Min value greater than max makes no sense" },
          { type: "li", text: "<strong>Mistake 4: Mismatched container-name</strong> — Name in query must match container-name" },
          { type: "li", text: "<strong>Mistake 5: Using physical properties in RTL</strong> — margin-left doesn't work correctly in RTL" },
          { type: "li", text: "<strong>Mistake 6: Device-specific breakpoints</strong> — Use content-based breakpoints instead" },
          { type: "li", text: "<strong>Mistake 7: Creating infinite loops</strong> — Don't change container size from within @container" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Use clamp() for spacing and sizes — create fluid variables" },
          { type: "li", text: "2. Start with mobile-first using Container Queries" },
          { type: "li", text: "3. Use @supports for progressive enhancement" },
          { type: "li", text: "4. Always write Logical Properties" },
          { type: "li", text: "5. Use aspect-ratio for images and videos" },
          { type: "li", text: "6. Use content-based breakpoint strategy" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the fundamental difference between Media Queries and Container Queries?",
        options: [
          "Media Queries are faster than Container Queries",
          "Media Queries query viewport width, Container Queries query container size",
          "Container Queries only work on phones",
          "Media Queries don't work with RTL"
        ],
        correctAnswer: 1,
        explanation: "Media Queries see the viewport (browser window) width, while Container Queries see the size of the container where the component resides. This allows components to adapt to their place inside the page, not just the screen size."
      },
      {
        question: "Why do we recommend using inline-size instead of size in Container Queries?",
        options: [
          "Because size isn't supported by all browsers",
          "Because inline-size is faster in performance",
          "Because size can cause circular dependency between container and content",
          "Because inline-size only works with RTL"
        ],
        correctAnswer: 2,
        explanation: "When using container-type: size, the browser may enter an infinite loop where container size depends on content and content depends on container. inline-size tracks only width and is safer."
      },
      {
        question: "What is the logical equivalent of margin-left?",
        options: [
          "margin-inline-end",
          "margin-inline-start",
          "margin-inline: left",
          "margin-left-inline"
        ],
        correctAnswer: 1,
        explanation: "margin-inline-start is the logical equivalent of margin-left in LTR and margin-right in RTL. 'start' means the beginning of the line and changes based on writing direction."
      },
      {
        question: "When do you use Container Queries instead of Media Queries?",
        options: [
          "When you want to support old browsers",
          "When a component is used in different places with different sizes",
          "When you want to improve site performance",
          "When designing for a specific device"
        ],
        correctAnswer: 1,
        explanation: "Container Queries are ideal when you have a component (like a card) used in different places (sidebar, main content, modal) and it needs to adapt to each container's size."
      }
    ],
    challenge: {
      title: "Build an RTL-Compatible Card Component",
      description: "Create an educational card component using Container Queries, clamp(), Logical Properties, aspect-ratio, and @supports for progressive enhancement."
    },
    cheatSheet: {
      title: "Modern Responsive Design Quick Reference",
      items: [
        {
          title: "Container Queries",
          content: `.container { container-type: inline-size; container-name: my-container; }
@container my-container (min-width: 500px) { .child { /* ... */ } }
@container (min-width: 400px) { /* large container */ }
@container (max-width: 399px) { /* small container */ }`
        },
        {
          title: "clamp() Formula",
          content: `font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(1rem, 3vw, 3rem);
width: clamp(300px, 80%, 1200px);
/* Formula: max(min, min(preferred, max)) */`
        },
        {
          title: "Logical Properties Map",
          content: `width → inline-size
height → block-size
margin-left → margin-inline-start
margin-right → margin-inline-end
padding-left → padding-inline-start
text-align: left → text-align: start
inset-left → inset-inline-start`
        },
        {
          title: "min() and max()",
          content: `width: min(80%, 800px); /* smaller of the two */
width: max(300px, 50%); /* larger of the two */
font-size: max(1rem, min(3vw, 2rem)); /* equivalent to clamp */`
        }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que le Design Responsive Moderne",
        content: [
          { type: "p", text: "Le Design Responsive Moderne est un ensemble de techniques CSS avancées qui vous permettent de construire des sites web qui s'adaptent automatiquement à différentes tailles d'écran et appareils — mais de manière plus intelligente et efficace." },
          { type: "p", text: "Auparavant, nous nous appuyions exclusivement sur les <strong>Media Queries</strong>. Mais avec l'évolution du web, il existe des outils plus puissants :" },
          { type: "li", text: "1. Media Queries — classiques mais améliorées" },
          { type: "li", text: "2. Container Queries — la vraie révolution !" },
          { type: "li", text: "3. clamp() — tailles de police et espaces fluides" },
          { type: "li", text: "4. min() et max() — fonctions de calcul intelligentes" },
          { type: "li", text: "5. Logical Properties — support RTL complet" },
          { type: "li", text: "6. @supports — détection des fonctionnalités" },
          { type: "li", text: "7. Aspect Ratio — rapport largeur/hauteur" }
        ]
      },
      {
        title: "Pourquoi l'utiliser",
        content: [
          { type: "p", text: "Le design responsive moderne n'est pas juste un « outil supplémentaire » — c'est une <strong>nécessité absolue</strong>." },
          { type: "li", text: "<strong>Variété folle des appareils</strong> - Téléphones, tablettes, ordinateurs, TV connectées" },
          { type: "li", text: "<strong>Problème des Media Queries</strong> - Elles voient la largeur du viewport, pas du conteneur" },
          { type: "li", text: "<strong>Meilleure performance</strong> - Container Queries et clamp() fonctionnent au niveau CSS" },
          { type: "li", text: "<strong>Support RTL</strong> - Les Logical Properties résolvent les problèmes margin-left/right" }
        ]
      },
      {
        title: "Le problème qu'il résout",
        content: [
          { type: "p", text: "Prenons un exemple pratique. Imaginez un composant carte utilisé dans différents endroits :" },
          { type: "callout-accent", title: "Le problème du conteneur", text: "Une carte dans une sidebar (étroite) vs dans le contenu principal (large) a besoin de mises en page différentes. Les Media Queries ne voient que la largeur du viewport. Les Container Queries résolvent cela brillamment !" },
          { type: "callout-accent", title: "Le problème de la taille fixe", text: "Sans clamp(), vous avez besoin de centaines de lignes dans les Media Queries. clamp() le fait en une ligne !" }
        ]
      },
      {
        title: "Explication simple",
        content: [
          { type: "p", text: "Expliquons chaque technique simplement avant de passer au code :" },
          { type: "li", text: "<strong>Media Queries</strong> — « Sur quel appareil êtes-vous ? » — Simple mais limitée" },
          { type: "li", text: "<strong>Container Queries</strong> — « Où êtes-vous dans la page ? » — C'est la révolution !" },
          { type: "li", text: "<strong>clamp()</strong> — « Donnez-moi une taille fluide » — Min, préféré et max" },
          { type: "li", text: "<strong>Logical Properties</strong> — « Comprenez la direction du contexte » — margin-inline-start" },
          { type: "li", text: "<strong>Aspect Ratio</strong> — « Gardez le ratio » — Maintenir 16:9 sans astuces" }
        ]
      },
      {
        title: "En coulisses",
        content: [
          { type: "p", text: "Comprendre comment ces techniques fonctionnent au niveau du navigateur :" },
          { type: "li", text: "<strong>Container Queries :</strong> Le navigateur trouve l'élément container-type, crée le contexte de confinement, suit les dimensions" },
          { type: "li", text: "<strong>clamp() :</strong> Formule : max(valeur-min, min(valeur-préférée, valeur-max))" },
          { type: "li", text: "<strong>Logical Properties :</strong> Le navigateur comprend le writing-mode. LTR : inline-start = gauche. RTL : inline-start = droite" },
          { type: "li", text: "<strong>@supports :</strong> Détection des fonctionnalités avant application — amélioration progressive" }
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Erreur 1 : Utiliser container-type: size au lieu de inline-size</strong> — Dépendance circulaire possible" },
          { type: "li", text: "<strong>Erreur 2 : Oublier container-name</strong> — Peut interroger un conteneur inattendu" },
          { type: "li", text: "<strong>Erreur 3 : Mauvais nombres dans clamp()</strong> — Min supérieur à max n'a pas de sens" },
          { type: "li", text: "<strong>Erreur 4 : Utiliser des propriétés physiques en RTL</strong> — margin-left ne fonctionne pas correctement" },
          { type: "li", text: "<strong>Erreur 5 : Points d'arrêt basés sur les appareils</strong> — Utilisez des points d'arrêt basés sur le contenu" }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "1. Utilisez clamp() pour les espaces et tailles" },
          { type: "li", text: "2. Commencez par mobile-first avec Container Queries" },
          { type: "li", text: "3. Utilisez @supports pour l'amélioration progressive" },
          { type: "li", text: "4. Écrivez toujours des Logical Properties" },
          { type: "li", text: "5. Utilisez aspect-ratio pour les images et vidéos" },
          { type: "li", text: "6. Stratégie de points d'arrêt basée sur le contenu" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quelle est la différence fondamentale entre Media Queries et Container Queries ?",
        options: [
          "Les Media Queries sont plus rapides",
          "Les Media Queries interrogent la largeur du viewport, les Container Queries la taille du conteneur",
          "Les Container Queries ne fonctionnent que sur téléphone",
          "Les Media Queries ne fonctionnent pas avec le RTL"
        ],
        correctAnswer: 1,
        explanation: "Les Media Queries voient la largeur du viewport (fenêtre du navigateur), tandis que les Container Queries voient la taille du conteneur où réside le composant."
      },
      {
        question: "Pourquoi recommande-t-on d'utiliser inline-size au lieu de size dans les Container Queries ?",
        options: [
          "Parce que size n'est pas supporté par tous les navigateurs",
          "Parce que inline-size est plus rapide",
          "Parce que size peut causer une dépendance circulaire",
          "Parce que inline-size ne fonctionne qu'avec le RTL"
        ],
        correctAnswer: 2,
        explanation: "Avec container-type: size, le navigateur peut entrer dans une boucle infinie. inline-size ne suit que la largeur et est plus sûr."
      }
    ],
    challenge: {
      title: "Construire un composant carte compatible RTL",
      description: "Créez un composant carte éducatif en utilisant Container Queries, clamp(), Logical Properties, aspect-ratio et @supports."
    },
    cheatSheet: {
      title: "Référence rapide du Design Responsive Moderne",
      items: [
        {
          title: "Container Queries",
          content: `.container { container-type: inline-size; container-name: mon-conteneur; }
@container mon-conteneur (min-width: 500px) { .enfant { /* ... */ } }`
        },
        {
          title: "Formule clamp()",
          content: `font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(1rem, 3vw, 3rem);
width: clamp(300px, 80%, 1200px);`
        },
        {
          title: "Carte des Logical Properties",
          content: `width → inline-size
height → block-size
margin-left → margin-inline-start
margin-right → margin-inline-end
text-align: left → text-align: start`
        }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was ist Modernes Responsives Design",
        content: [
          { type: "p", text: "Modernes Responsives Design ist eine Reihe fortschrittlicher CSS-Techniken, die es Ihnen ermöglichen, Webseiten zu erstellen, die sich automatisch an verschiedene Bildschirmgrößen und Geräte anpassen — aber auf intelligentere und effizientere Weise." },
          { type: "p", text: "Früher verließ man sich ausschließlich auf <strong>Media Queries</strong>. Aber mit der Web-Entwicklung gibt es leistungsfähigere Werkzeuge:" },
          { type: "li", text: "1. Media Queries — klassisch aber verbessert" },
          { type: "li", text: "2. Container Queries — die wahre Revolution!" },
          { type: "li", text: "3. clamp() — flüssige Schriftgrößen und Abstände" },
          { type: "li", text: "4. min() und max() — intelligente Berechnungsfunktionen" },
          { type: "li", text: "5. Logical Properties — vollständige RTL-Unterstützung" },
          { type: "li", text: "6. @supports — Feature-Erkennung" },
          { type: "li", text: "7. Aspect Ratio — Breite-zu-Höhe-Verhältnis" }
        ]
      },
      {
        title: "Warum es verwenden",
        content: [
          { type: "p", text: "Modernes responsives Design ist nicht nur ein 'Zusatztool' — es ist eine <strong>absolute Notwendigkeit</strong>." },
          { type: "li", text: "<strong>Verrückte Gerätevielfalt</strong> - Telefone, Tablets, Desktops, Laptops, Smart-TVs" },
          { type: "li", text: "<strong>Klassisches Media Query-Problem</strong> - Media Queries sehen Viewport-Breite, nicht Container-Breite" },
          { type: "li", text: "<strong>Bessere Leistung</strong> - Container Queries und clamp() arbeiten direkt auf CSS-Ebene" },
          { type: "li", text: "<strong>RTL-Unterstützung</strong> - Logical Properties lösen margin-left/right-Probleme" }
        ]
      },
      {
        title: "Das Problem, das es löst",
        content: [
          { type: "p", text: "Nehmen wir ein praktisches Beispiel. Stellen Sie sich eine Kartenkomponente vor, die an verschiedenen Orten verwendet wird:" },
          { type: "callout-accent", title: "Das Container-Problem", text: "Eine Karte in einer Sidebar (schmal) vs im Hauptinhalt (breit) braucht unterschiedliche Layouts. Media Queries sehen nur Viewport-Breite. Container Queries lösen das brillant!" },
          { type: "callout-accent", title: "Das Problem der festen Größe", text: "Ohne clamp() brauchen Sie Hunderte von Zeilen in Media Queries. clamp() macht es mit einer Zeile!" }
        ]
      },
      {
        title: "Einfache Erklärung",
        content: [
          { type: "p", text: "Erklären wir jede Technik einfach, bevor wir zum Code kommen:" },
          { type: "li", text: "<strong>Media Queries</strong> — « Auf welchem Gerät sind Sie? » — Einfach aber begrenzt" },
          { type: "li", text: "<strong>Container Queries</strong> — « Wo sind Sie auf der Seite? » — Das ist die Revolution!" },
          { type: "li", text: "<strong>clamp()</strong> — « Geben Sie mir eine flüssige Größe » — Min, bevorzugt und Max" },
          { type: "li", text: "<strong>Logical Properties</strong> — « Verstehen Sie die Richtung aus dem Kontext » — margin-inline-start" },
          { type: "li", text: "<strong>Aspect Ratio</strong> — « Halten Sie das Verhältnis » — 16:9 ohne alte Tricks" }
        ]
      },
      {
        title: "Hinter den Kulissen",
        content: [
          { type: "p", text: "Verstehen wir, wie diese Techniken auf Browser-Ebene funktionieren:" },
          { type: "li", text: "<strong>Container Queries:</strong> Der Browser findet container-type Element, erstellt containment context, verfolgt Abmessungen" },
          { type: "li", text: "<strong>clamp():</strong> Formel: max(min-Wert, min(bevorzugter-Wert, max-Wert))" },
          { type: "li", text: "<strong>Logical Properties:</strong> Der Browser versteht writing-mode. LTR: inline-start = links. RTL: inline-start = rechts" },
          { type: "li", text: "<strong>@supports:</strong> Feature-Erkennung vor Stilanwendung — progressive Verbesserung" }
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Fehler 1: container-type: size statt inline-size verwenden</strong> — Zirkuläre Abhängigkeit möglich" },
          { type: "li", text: "<strong>Fehler 2: container-name vergessen</strong> — Kann unerwarteten Container abfragen" },
          { type: "li", text: "<strong>Fehler 3: Falsche clamp()-Zahlen</strong> — Min größer als Max ergibt keinen Sinn" },
          { type: "li", text: "<strong>Fehler 4: Physische Eigenschaften in RTL verwenden</strong> — margin-left funktioniert nicht richtig" },
          { type: "li", text: "<strong>Fehler 5: Gerätespezifische Breakpoints</strong> — Verwenden Sie inhaltsbasierte Breakpoints" }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "1. Verwenden Sie clamp() für Abstände und Größen" },
          { type: "li", text: "2. Beginnen Sie mobile-first mit Container Queries" },
          { type: "li", text: "3. Verwenden Sie @supports für progressive Verbesserung" },
          { type: "li", text: "4. Schreiben Sie immer Logical Properties" },
          { type: "li", text: "5. Verwenden Sie aspect-ratio für Bilder und Videos" },
          { type: "li", text: "6. Inhaltsbasierte Breakpoint-Strategie" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist der grundlegende Unterschied zwischen Media Queries und Container Queries?",
        options: [
          "Media Queries sind schneller als Container Queries",
          "Media Queries fragen Viewport-Breite ab, Container Queries Container-Größe",
          "Container Queries funktionieren nur auf Handys",
          "Media Queries funktionieren nicht mit RTL"
        ],
        correctAnswer: 1,
        explanation: "Media Queries sehen die Viewport-Breite (Browserfenster), während Container Queries die Größe des Containers sehen, in dem die Komponente sich befindet."
      },
      {
        question: "Warum empfehlen wir inline-size statt size in Container Queries?",
        options: [
          "Weil size nicht von allen Browsern unterstützt wird",
          "Weil inline-size schneller ist",
          "Weil size zirkuläre Abhängigkeit verursachen kann",
          "Weil inline-size nur mit RTL funktioniert"
        ],
        correctAnswer: 2,
        explanation: "Bei container-type: size kann der Browser in eine Endlosschleife geraten. inline-size verfolgt nur die Breite und ist sicherer."
      }
    ],
    challenge: {
      title: "Eine RTL-kompatible Kartenkomponente erstellen",
      description: "Erstellen Sie eine Lernkartenkomponente mit Container Queries, clamp(), Logical Properties, aspect-ratio und @supports."
    },
    cheatSheet: {
      title: "Modernes Responsives Design Schnellreferenz",
      items: [
        {
          title: "Container Queries",
          content: `.container { container-type: inline-size; container-name: mein-container; }
@container mein-container (min-width: 500px) { .kind { /* ... */ } }`
        },
        {
          title: "clamp()-Formel",
          content: `font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(1rem, 3vw, 3rem);
width: clamp(300px, 80%, 1200px);`
        },
        {
          title: "Logical Properties Karte",
          content: `width → inline-size
height → block-size
margin-left → margin-inline-start
margin-right → margin-inline-end
text-align: left → text-align: start`
        }
      ]
    }
  }
};
export default translations;
