const translations = {
  ar: {
    sections: [
      {
        title: "ما هي العناصر؟",
        content: [
          { type: "p", text: "في الدرس السابق تعلمنا أن HTML مكون من \"علامات\". لكن في الواقع، العلامة وحدها ليست العنصر. <strong>العنصر</strong> يتكون من ثلاثة أجزاء:" },
          { type: "li", text: "<strong>علامة الفتح</strong>" },
          { type: "li", text: "<strong>المحتوى</strong>" },
          { type: "li", text: "<strong>علامة الإغلاق</strong>" },
          { type: "p", text: "بعض العناصر <strong>لا تحتوي على محتوى</strong> وتسمى \"عناصر فارغة\" مثل:" },
          { type: "callout", title: "تشبيه بسيط", text: "العلامة مثل الأقواس <code>( )</code>، والمحتوى هو ما بداخلها. لكن بعض العناصر مثل <code>&lt;br&gt;</code> و<code>&lt;img&gt;</code> لا تحتاج محتوى بين الأقواس - إنها مثل <code>( )</code> فارغة." }
        ]
      },
      {
        title: "عناصر النص الأساسية",
        content: [
          { type: "p", text: "هناك العديد من العلامات للعمل مع النص. إليك أهمها:" },
          { type: "h3", text: "العناوين" },
          { type: "p", text: "HTML يوفر 6 مستويات من العناوين من <code>&lt;h1&gt;</code> (الأكبر) إلى <code>&lt;h6&gt;</code> (الأصغر):" },
          { type: "callout", title: "قاعدة مهمة", text: "لا تقفز من <code>&lt;h1&gt;</code> مباشرة إلى <code>&lt;h3&gt;</code>! العناوين يجب أن تكون تسلسلية. <code>&lt;h1&gt;</code> ثم <code>&lt;h2&gt;</code> ثم <code>&lt;h3&gt;</code> وهكذا. تخطي المستويات خطأ شائع." },
          { type: "h3", text: "الفقرات" },
          { type: "p", text: "لفقرة نصية عادية، نستخدم علامة <code>&lt;p&gt;</code>:" },
          { type: "h3", text: "النص العريض والمائل" },
          { type: "p", text: "الفرق بين <code>&lt;strong&gt;</code> و<code>&lt;b&gt;</code>: الأولى تشير إلى <strong>الأهمية الدلالية</strong> للنص، بينما الثانية فقط تعطي <strong>عريضاً مرئياً</strong>. يُفضل استخدام <code>&lt;strong&gt;</code> لأسباب تتعلق بالإمكانية." }
        ]
      },
      {
        title: "القوائم",
        content: [
          { type: "p", text: "HTML يوفر ثلاثة أنواع من القوائم:" },
          { type: "h3", text: "1. قائمة غير مرقمة" },
          { type: "p", text: "تُستخدم عندما لا يكون ترتيب العناصر مهماً:" },
          { type: "h3", text: "2. قائمة مرقمة" },
          { type: "p", text: "تُستخدم عندما يكون الترتيب مهماً:" },
          { type: "h3", text: "3. قائمة وصفية" },
          { type: "p", text: "تُستخدم لعرض أزواج من المصطلحات والتعريفات:" },
          { type: "h3", text: "قوائم متداخلة" },
          { type: "p", text: "يمكنك وضع قائمة داخل قائمة أخرى:" }
        ]
      },
      {
        title: "علامات نصية مفيدة أخرى",
        content: [
          { type: "p", text: "HTML يوفر عدة علامات مفيدة أخرى لتنسيق النص وهيكلته." }
        ]
      },
      {
        title: "مثال عملي: صفحة مقال بسيطة",
        content: [
          { type: "p", text: "دعنا نرى كيف نستخدم كل ما تعلمناه في صفحة مقال حقيقية:" }
        ]
      },
      {
        title: "ماذا يحدث خلف الكواليس؟",
        content: [
          { type: "p", text: "عندما يقرأ المتصفح علامات النص، يحدث ما يلي:" },
          { type: "li", text: "يحول <code>&lt;h1&gt;</code> إلى نص كبير (عادة <strong>32px</strong> أو أكثر) بوزن عريض." },
          { type: "li", text: "يحول <code>&lt;p&gt;</code> إلى نص في فقرة منفصلة بهامش سفلي." },
          { type: "li", text: "يحول <code>&lt;ul&gt;</code> و<code>&lt;ol&gt;</code> إلى قوائم نقطية أو مرقمة تلقائياً." },
          { type: "li", text: "يحول <code>&lt;strong&gt;</code> إلى نص <strong>عريض</strong>." },
          { type: "li", text: "يحول <code>&lt;code&gt;</code> إلى نص بخط خاص (Monospace) وخلفية رمادية." },
          { type: "callout", title: "هل تعلم؟", text: "المتصفح يعطي كل علامة <strong>أبعاداً افتراضية</strong>. مثلاً، <code>&lt;h1&gt;</code> تحصل على <code>font-size: 2em</code> و<code>margin: 0.67em 0</code>. يمكنك رؤية هذه القيم في أدوات المطورين (F12)." }
        ]
      },
      {
        title: "أخطاء شائعة",
        content: [
          { type: "li", text: "<strong>تخطي مستويات العناوين:</strong> استخدام <code>&lt;h1&gt;</code> يتبعه مباشرة <code>&lt;h3&gt;</code> بدون <code>&lt;h2&gt;</code>. هذا يضعف هيكل الصفحة ويسبب مشاكل SEO والإمكانية." },
          { type: "li", text: "<strong>استخدام العناوين لتنسيق النص فقط:</strong> استخدام <code>&lt;h3&gt;</code> لأنك تريد نصاً أصغر. العناوين فقط للهيكل الدلالي، التنسيق دور CSS." },
          { type: "li", text: "<strong>وضع عناصر السطر في أماكن خاطئة:</strong> مثل وضع <code>&lt;p&gt;</code> داخل <code>&lt;p&gt;</code> آخر. هذا غير صالح في HTML." },
          { type: "li", text: "<strong>استخدام <code>&lt;br&gt;</code> لإنشاء مسافة:</strong> استخدام <code>&lt;br&gt;&lt;br&gt;&lt;br&gt;</code> لإنشاء مسافة بين الفقرات. استخدم هامش CSS بدلاً من ذلك." }
        ]
      },
      {
        title: "أفضل الممارسات",
        content: [
          { type: "li", text: "<strong>استخدم h1 مرة واحدة فقط لكل صفحة:</strong> لأنه يمثل العنوان الرئيسي للصفحة." },
          { type: "li", text: "<strong>استخدم strong وem بدلاً من b وi:</strong> لأنه يوفران دلالة إضافية." },
          { type: "li", text: "<strong>افصل العناصر بمسافة بصرية:</strong> استخدم سطور فارغة بين الكتل المنطقية في ملفات HTML لسهولة القراءة." },
          { type: "li", text: "<strong>استخدم القوائم عند الحاجة:</strong> لا تحول كل مجموعة نقاط إلى فقرات." }
        ]
      },
      {
        title: "ملخص الدرس",
        content: [
          { type: "li", text: "<strong>العنصر</strong> = علامة فتح + محتوى + علامة إغلاق" },
          { type: "li", text: "العناوين من <code>&lt;h1&gt;</code> إلى <code>&lt;h6&gt;</code> - لا تخطي المستويات" },
          { type: "li", text: "الفقرات: <code>&lt;p&gt;</code>" },
          { type: "li", text: "نص عريض: <code>&lt;strong&gt;</code> | مائل: <code>&lt;em&gt;</code>" },
          { type: "li", text: "القوائم: <code>&lt;ul&gt;</code> (غير مرقمة) | <code>&lt;ol&gt;</code> (مرقمة) | <code>&lt;dl&gt;</code> (وصفية)" },
          { type: "li", text: "العناصر الفارغة: <code>&lt;br&gt;</code> و<code>&lt;hr&gt;</code> و<code>&lt;img&gt;</code> (بدون علامة إغلاق)" }
        ]
      }
    ],
    quiz: [
      {
        question: "كم عدد مستويات العناوين في HTML؟",
        options: ["4 مستويات", "5 مستويات", "6 مستويات", "3 مستويات"],
        explanation: "HTML يوفر 6 مستويات عناوين من h1 (الأكبر) إلى h6 (الأصغر)."
      },
      {
        question: "ما الفرق بين <strong>strong</strong> و<strong>b</strong>؟",
        options: [
          "لا يوجد فرق بينهما",
          "strong للنص العريض، b للنص المائل",
          "strong تدل على الأهمية الدلالية، b تعطي عرياً مرئياً فقط",
          "strong يُستخدم في CSS، b فقط في HTML"
        ],
        explanation: "strong تدل على أن النص له أهمية دلالية، بينما b تعطي مظهراً عريضاً فقط بدون دلالة إضافية. يُفضل استخدام strong لأسباب تتعلق بالإمكانية."
      }
    ],
    challenge: {
      title: "تحدي: صفحة مقال مكتملة",
      description: "أنشئ صفحة HTML تحتوي على مقال مكتمل بـ: 1. عنوان رئيسي <code>&lt;h1&gt;</code>، 2. فقرة مقدمة، 3. عنوان فرعي <code>&lt;h2&gt;</code> مع فقرة، 4. قائمة مرقمة بالخطوات، 5. قائمة غير مرقمة، 6. اقتباس، 7. خط أفقي، 8. فقرة ختامية بنص عريض ومائل."
    },
    cheatSheet: {
      title: "ملخص العناصر والنصوص",
      items: [
        { term: "<code>&lt;h1&gt;</code> إلى <code>&lt;h6&gt;</code>", definition: "العناوين (h1 الأكبر، h6 الأصغر)" },
        { term: "<code>&lt;p&gt;</code>", definition: "فقرة" },
        { term: "<code>&lt;strong&gt;</code>", definition: "عريض (أهمية دلالية)" },
        { term: "<code>&lt;em&gt;</code>", definition: "مائل (تأكيد)" },
        { term: "<code>&lt;ul&gt;</code>", definition: "قائمة غير مرقمة" },
        { term: "<code>&lt;ol&gt;</code>", definition: "قائمة مرقمة" },
        { term: "<code>&lt;li&gt;</code>", definition: "عنصر قائمة" },
        { term: "<code>&lt;code&gt;</code>", definition: "كود مضمّن" },
        { term: "<code>&lt;blockquote&gt;</code>", definition: "اقتباس كتلي" },
        { term: "<code>&lt;pre&gt;</code>", definition: "نص مُنسّق مسبقاً" }
      ]
    }
  },
  en: {
    sections: [
      {
        title: "What are Elements?",
        content: [
          { type: "p", text: "In the previous lesson we learned that HTML is made up of \"tags\". But in reality, a tag alone is not the element. An <strong>Element</strong> consists of three parts:" },
          { type: "li", text: "<strong>Opening Tag</strong>" },
          { type: "li", text: "<strong>Content</strong>" },
          { type: "li", text: "<strong>Closing Tag</strong>" },
          { type: "p", text: "Some elements <strong>don't contain content</strong> and are called \"empty elements\" like:" },
          { type: "callout", title: "Simple Analogy", text: "A tag is like parentheses <code>( )</code>, and the content is what's inside them. But some elements like <code>&lt;br&gt;</code> and <code>&lt;img&gt;</code> don't need content between the parentheses - they're like empty <code>( )</code>." }
        ]
      },
      {
        title: "Basic Text Elements",
        content: [
          { type: "p", text: "There are many tags for working with text. Here are the most important ones:" },
          { type: "h3", text: "Headings" },
          { type: "p", text: "HTML provides 6 levels of headings from <code>&lt;h1&gt;</code> (largest) to <code>&lt;h6&gt;</code> (smallest):" },
          { type: "callout", title: "Important Rule", text: "Don't skip from <code>&lt;h1&gt;</code> directly to <code>&lt;h3&gt;</code>! Headings must be sequential. <code>&lt;h1&gt;</code> then <code>&lt;h2&gt;</code> then <code>&lt;h3&gt;</code> and so on. Skipping levels is a common mistake." },
          { type: "h3", text: "Paragraphs" },
          { type: "p", text: "For a regular text paragraph, we use the <code>&lt;p&gt;</code> tag:" },
          { type: "h3", text: "Bold & Italic Text" },
          { type: "p", text: "The difference between <code>&lt;strong&gt;</code> and <code>&lt;b&gt;</code>: the former indicates <strong>semantic importance</strong> of the text, while the latter only gives <strong>visual bold</strong>. It's preferred to use <code>&lt;strong&gt;</code> for accessibility reasons." }
        ]
      },
      {
        title: "Lists",
        content: [
          { type: "p", text: "HTML provides three types of lists:" },
          { type: "h3", text: "1. Unordered List" },
          { type: "p", text: "Used when the order of items doesn't matter:" },
          { type: "h3", text: "2. Ordered List" },
          { type: "p", text: "Used when order matters:" },
          { type: "h3", text: "3. Description List" },
          { type: "p", text: "Used to display pairs of terms and definitions:" },
          { type: "h3", text: "Nested Lists" },
          { type: "p", text: "You can place a list inside another list:" }
        ]
      },
      {
        title: "Other Useful Text Tags",
        content: [
          { type: "p", text: "HTML provides several other useful tags for text formatting and structure." }
        ]
      },
      {
        title: "Practical Example: Simple Article Page",
        content: [
          { type: "p", text: "Let's see how we use everything we've learned in a real article page:" }
        ]
      },
      {
        title: "What Happens Behind the Scenes?",
        content: [
          { type: "p", text: "When the browser reads text tags, the following happens:" },
          { type: "li", text: "Converts <code>&lt;h1&gt;</code> to large text (usually <strong>32px</strong> or more) with bold weight." },
          { type: "li", text: "Converts <code>&lt;p&gt;</code> to text in a separate paragraph with bottom margin." },
          { type: "li", text: "Converts <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> to bullet or numbered lists automatically." },
          { type: "li", text: "Converts <code>&lt;strong&gt;</code> to <strong>bold</strong> text." },
          { type: "li", text: "Converts <code>&lt;code&gt;</code> to text with a special font (Monospace) and gray background." },
          { type: "callout", title: "Did You Know?", text: "The browser gives each tag <strong>default dimensions</strong>. For example, <code>&lt;h1&gt;</code> gets <code>font-size: 2em</code> and <code>margin: 0.67em 0</code>. You can see these values in the developer tools (F12)." }
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Skipping heading levels:</strong> Using <code>&lt;h1&gt;</code> directly followed by <code>&lt;h3&gt;</code> without <code>&lt;h2&gt;</code>. This weakens the page structure and causes SEO and accessibility issues." },
          { type: "li", text: "<strong>Using headings for text styling only:</strong> Using <code>&lt;h3&gt;</code> because you want smaller text. Headings are for semantic structure only, styling is CSS's role." },
          { type: "li", text: "<strong>Placing inline elements in wrong places:</strong> Like placing <code>&lt;p&gt;</code> inside another <code>&lt;p&gt;</code>. This is invalid in HTML." },
          { type: "li", text: "<strong>Using <code>&lt;br&gt;</code> to create spacing:</strong> Using <code>&lt;br&gt;&lt;br&gt;&lt;br&gt;</code> to create space between paragraphs. Use CSS margin instead." }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Use h1 only once per page:</strong> Because it represents the main heading of the page." },
          { type: "li", text: "<strong>Use strong and em instead of b and i:</strong> Because they provide additional semantic meaning." },
          { type: "li", text: "<strong>Separate elements with visual spacing:</strong> Use blank lines between logical blocks in HTML files for readability." },
          { type: "li", text: "<strong>Use lists when needed:</strong> Don't convert every bullet point set into paragraphs." }
        ]
      },
      {
        title: "Lesson Summary",
        content: [
          { type: "li", text: "<strong>Element</strong> = Opening tag + Content + Closing tag" },
          { type: "li", text: "Headings from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - don't skip levels" },
          { type: "li", text: "Paragraphs: <code>&lt;p&gt;</code>" },
          { type: "li", text: "Bold text: <code>&lt;strong&gt;</code> | Italic: <code>&lt;em&gt;</code>" },
          { type: "li", text: "Lists: <code>&lt;ul&gt;</code> (unordered) | <code>&lt;ol&gt;</code> (ordered) | <code>&lt;dl&gt;</code> (description)" },
          { type: "li", text: "Empty elements: <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, and <code>&lt;img&gt;</code> (no closing tag)" }
        ]
      }
    ],
    quiz: [
      {
        question: "How many heading levels are there in HTML?",
        options: ["4 levels", "5 levels", "6 levels", "3 levels"],
        explanation: "HTML provides 6 heading levels from h1 (largest) to h6 (smallest)."
      },
      {
        question: "What is the difference between <strong>strong</strong> and <strong>b</strong>?",
        options: [
          "There is no difference between them",
          "strong is for bold text, b is for italic text",
          "strong indicates semantic importance, b only gives visual bold",
          "strong is used in CSS, b is only used in HTML"
        ],
        explanation: "strong indicates that the text has semantic importance, while b only gives a bold appearance without additional meaning. It's preferred to use strong for accessibility reasons."
      }
    ],
    challenge: {
      title: "Challenge: Complete Article Page",
      description: "Create an HTML page containing a complete article with: 1. A main heading <code>&lt;h1&gt;</code>, 2. An introduction paragraph, 3. A subheading <code>&lt;h2&gt;</code> with a paragraph, 4. An ordered list of steps, 5. An unordered list, 6. A blockquote, 7. A horizontal rule, 8. A closing paragraph with bold and italic text."
    },
    cheatSheet: {
      title: "Elements and Text Cheat Sheet",
      items: [
        { term: "<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>", definition: "Headings (h1 largest, h6 smallest)" },
        { term: "<code>&lt;p&gt;</code>", definition: "Paragraph" },
        { term: "<code>&lt;strong&gt;</code>", definition: "Bold (semantic importance)" },
        { term: "<code>&lt;em&gt;</code>", definition: "Italic (emphasis)" },
        { term: "<code>&lt;ul&gt;</code>", definition: "Unordered list" },
        { term: "<code>&lt;ol&gt;</code>", definition: "Ordered list" },
        { term: "<code>&lt;li&gt;</code>", definition: "List item" },
        { term: "<code>&lt;code&gt;</code>", definition: "Inline code" },
        { term: "<code>&lt;blockquote&gt;</code>", definition: "Block quote" },
        { term: "<code>&lt;pre&gt;</code>", definition: "Preformatted text" }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce qu'un élément ?",
        content: [
          { type: "p", text: "Dans la leçon précédente, nous avons appris que le HTML est composé de \"balises\". Mais en réalité, une balise seule n'est pas un élément. Un <strong>élément</strong> se compose de trois parties :" },
          { type: "li", text: "<strong>Balise d'ouverture</strong>" },
          { type: "li", text: "<strong>Contenu</strong>" },
          { type: "li", text: "<strong>Balise de fermeture</strong>" },
          { type: "p", text: "Certains éléments <strong>ne contiennent pas de contenu</strong> et sont appelés \"éléments vides\" comme :" },
          { type: "callout", title: "Analogie simple", text: "Une balise est comme des parenthèses <code>( )</code>, et le contenu est ce qu'il y a à l'intérieur. Mais certains éléments comme <code>&lt;br&gt;</code> et <code>&lt;img&gt;</code> n'ont pas besoin de contenu entre les parenthèses - ils sont comme des <code>( )</code> vides." }
        ]
      },
      {
        title: "Éléments de texte de base",
        content: [
          { type: "p", text: "Il existe de nombreuses balises pour travailler avec le texte. Voici les plus importantes :" },
          { type: "h3", text: "Titres" },
          { type: "p", text: "Le HTML fournit 6 niveaux de titres de <code>&lt;h1&gt;</code> (plus grand) à <code>&lt;h6&gt;</code> (plus petit) :" },
          { type: "callout", title: "Règle importante", text: "Ne passez pas directement de <code>&lt;h1&gt;</code> à <code>&lt;h3&gt;</code> ! Les titres doivent être séquentiels. <code>&lt;h1&gt;</code> puis <code>&lt;h2&gt;</code> puis <code>&lt;h3&gt;</code> et ainsi de suite. Sauter des niveaux est une erreur courante." },
          { type: "h3", text: "Paragraphes" },
          { type: "p", text: "Pour un paragraphe de texte ordinaire, nous utilisons la balise <code>&lt;p&gt;</code> :" },
          { type: "h3", text: "Texte en gras et en italique" },
          { type: "p", text: "La différence entre <code>&lt;strong&gt;</code> et <code>&lt;b&gt;</code> : le premier indique l'<strong>importance sémantique</strong> du texte, tandis que le second ne donne qu'un <strong>gras visuel</strong>. Il est préférable d'utiliser <code>&lt;strong&gt;</code> pour des raisons d'accessibilité." }
        ]
      },
      {
        title: "Listes",
        content: [
          { type: "p", text: "Le HTML fournit trois types de listes :" },
          { type: "h3", text: "1. Liste non ordonnée" },
          { type: "p", text: "Utilisée lorsque l'ordre des éléments n'a pas d'importance :" },
          { type: "h3", text: "2. Liste ordonnée" },
          { type: "p", text: "Utilisée lorsque l'ordre est important :" },
          { type: "h3", text: "3. Liste de définition" },
          { type: "p", text: "Utilisée pour afficher des paires de termes et de définitions :" },
          { type: "h3", text: "Listes imbriquées" },
          { type: "p", text: "Vous pouvez placer une liste à l'intérieur d'une autre liste :" }
        ]
      },
      {
        title: "Autres balises de texte utiles",
        content: [
          { type: "p", text: "Le HTML fournit plusieurs autres balises utiles pour la mise en forme et la structure du texte." }
        ]
      },
      {
        title: "Exemple pratique : Page d'article simple",
        content: [
          { type: "p", text: "Voyons comment nous utilisons tout ce que nous avons appris dans une page d'article réelle :" }
        ]
      },
      {
        title: "Que se passe-t-il en coulisses ?",
        content: [
          { type: "p", text: "Quand le navigateur lit les balises de texte, voici ce qui se passe :" },
          { type: "li", text: "Convertit <code>&lt;h1&gt;</code> en texte grand (généralement <strong>32px</strong> ou plus) avec un poids gras." },
          { type: "li", text: "Convertit <code>&lt;p&gt;</code> en texte dans un paragraphe séparé avec une marge inférieure." },
          { type: "li", text: "Convertit <code>&lt;ul&gt;</code> et <code>&lt;ol&gt;</code> en listes à puces ou numérotées automatiquement." },
          { type: "li", text: "Convertit <code>&lt;strong&gt;</code> en texte <strong>gras</strong>." },
          { type: "li", text: "Convertit <code>&lt;code&gt;</code> en texte avec une police spéciale (Monospace) et un fond gris." },
          { type: "callout", title: "Le saviez-vous ?", text: "Le navigateur donne à chaque balise des <strong>dimensions par défaut</strong>. Par exemple, <code>&lt;h1&gt;</code> obtient <code>font-size: 2em</code> et <code>margin: 0.67em 0</code>. Vous pouvez voir ces valeurs dans les outils de développement (F12)." }
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Sauter des niveaux de titres :</strong> Utiliser <code>&lt;h1&gt;</code> directement suivi de <code>&lt;h3&gt;</code> sans <code>&lt;h2&gt;</code>. Cela affaiblit la structure de la page et cause des problèmes de SEO et d'accessibilité." },
          { type: "li", text: "<strong>Utiliser les titres uniquement pour la mise en forme :</strong> Utiliser <code>&lt;h3&gt;</code> parce que vous voulez du texte plus petit. Les titres sont uniquement pour la structure sémantique, la mise en forme est le rôle de CSS." },
          { type: "li", text: "<strong>Placer des éléments en ligne au mauvais endroit :</strong> Comme placer <code>&lt;p&gt;</code> à l'intérieur d'un autre <code>&lt;p&gt;</code>. C'est invalide en HTML." },
          { type: "li", text: "<strong>Utiliser <code>&lt;br&gt;</code> pour créer de l'espacement :</strong> Utiliser <code>&lt;br&gt;&lt;br&gt;&lt;br&gt;</code> pour créer de l'espace entre les paragraphes. Utilisez plutôt la marge CSS." }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "<strong>Utilisez h1 une seule fois par page :</strong> Parce qu'il représente le titre principal de la page." },
          { type: "li", text: "<strong>Utilisez strong et em au lieu de b et i :</strong> Parce qu'ils fournissent une signification sémantique supplémentaire." },
          { type: "li", text: "<strong>Séparez les éléments avec un espacement visuel :</strong> Utilisez des lignes vides entre les blocs logiques dans les fichiers HTML pour la lisibilité." },
          { type: "li", text: "<strong>Utilisez des listes cuando sea necesario :</strong> Ne convertissez pas chaque ensemble de puces en paragraphes." }
        ]
      },
      {
        title: "Résumé de la leçon",
        content: [
          { type: "li", text: "<strong>Élément</strong> = Balise d'ouverture + Contenu + Balise de fermeture" },
          { type: "li", text: "Titres de <code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> - ne sautez pas de niveaux" },
          { type: "li", text: "Paragraphes : <code>&lt;p&gt;</code>" },
          { type: "li", text: "Texte en gras : <code>&lt;strong&gt;</code> | Italique : <code>&lt;em&gt;</code>" },
          { type: "li", text: "Listes : <code>&lt;ul&gt;</code> (non ordonnée) | <code>&lt;ol&gt;</code> (ordonnée) | <code>&lt;dl&gt;</code> (définition)" },
          { type: "li", text: "Éléments vides : <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, et <code>&lt;img&gt;</code> (pas de balise de fermeture)" }
        ]
      }
    ],
    quiz: [
      {
        question: "Combien de niveaux de titres y a-t-il en HTML ?",
        options: ["4 niveaux", "5 niveaux", "6 niveaux", "3 niveaux"],
        explanation: "Le HTML fournit 6 niveaux de titres de h1 (plus grand) à h6 (plus petit)."
      },
      {
        question: "Quelle est la différence entre <strong>strong</strong> et <strong>b</strong> ?",
        options: [
          "Il n'y a pas de différence entre eux",
          "strong est pour le texte en gras, b est pour le texte en italique",
          "strong indique une importance sémantique, b ne donne qu'un gras visuel",
          "strong est utilisé en CSS, b n'est utilisé qu'en HTML"
        ],
        explanation: "strong indique que le texte a une importance sémantique, tandis que b ne donne qu'une apparence en gras sans signification supplémentaire. Il est préférable d'utiliser strong pour des raisons d'accessibilité."
      }
    ],
    challenge: {
      title: "Défi : Page d'article complète",
      description: "Créez une page HTML contenant un article complet avec : 1. Un titre principal <code>&lt;h1&gt;</code>, 2. Un paragraphe d'introduction, 3. Un sous-titre <code>&lt;h2&gt;</code> avec un paragraphe, 4. Une liste ordonnée d'étapes, 5. Une liste non ordonnée, 6. Une citation, 7. Une ligne horizontale, 8. Un paragraphe de conclusion avec du gras et de l'italique."
    },
    cheatSheet: {
      title: "Fiche mémo Éléments et Texte",
      items: [
        { term: "<code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code>", definition: "Titres (h1 plus grand, h6 plus petit)" },
        { term: "<code>&lt;p&gt;</code>", definition: "Paragraphe" },
        { term: "<code>&lt;strong&gt;</code>", definition: "Gras (importance sémantique)" },
        { term: "<code>&lt;em&gt;</code>", definition: "Italique (emphase)" },
        { term: "<code>&lt;ul&gt;</code>", definition: "Liste non ordonnée" },
        { term: "<code>&lt;ol&gt;</code>", definition: "Liste ordonnée" },
        { term: "<code>&lt;li&gt;</code>", definition: "Élément de liste" },
        { term: "<code>&lt;code&gt;</code>", definition: "Code en ligne" },
        { term: "<code>&lt;blockquote&gt;</code>", definition: "Citation en bloc" },
        { term: "<code>&lt;pre&gt;</code>", definition: "Texte préformaté" }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was sind Elemente?",
        content: [
          { type: "p", text: "In der vorherigen Lektion haben wir gelernt, dass HTML aus \"Tags\" besteht. Aber in Wirklichkeit ist ein Tag allein nicht das Element. Ein <strong>Element</strong> besteht aus drei Teilen:" },
          { type: "li", text: "<strong>Öffnungstag</strong>" },
          { type: "li", text: "<strong>Inhalt</strong>" },
          { type: "li", text: "<strong>Schließungstag</strong>" },
          { type: "p", text: "Einige Elemente <strong>enthalten keinen Inhalt</strong> und werden \"leere Elemente\" genannt, wie:" },
          { type: "callout", title: "Einfache Analogie", text: "Ein Tag ist wie Klammern <code>( )</code>, und der Inhalt ist, was drin ist. Aber einige Elemente wie <code>&lt;br&gt;</code> und <code>&lt;img&gt;</code> benötigen keinen Inhalt zwischen den Klammern - sie sind wie leere <code>( )</code>." }
        ]
      },
      {
        title: "Grundlegende Textelemente",
        content: [
          { type: "p", text: "Es gibt viele Tags für die Arbeit mit Text. Hier sind die wichtigsten:" },
          { type: "h3", text: "Überschriften" },
          { type: "p", text: "HTML bietet 6 Überschriftsebenen von <code>&lt;h1&gt;</code> (größte) bis <code>&lt;h6&gt;</code> (kleinste):" },
          { type: "callout", title: "Wichtige Regel", text: "Wechseln Sie nicht direkt von <code>&lt;h1&gt;</code> zu <code>&lt;h3&gt;</code>! Überschriften müssen sequenziell sein. <code>&lt;h1&gt;</code> dann <code>&lt;h2&gt;</code> dann <code>&lt;h3&gt;</code> und so weiter. Das Überspringen von Ebenen ist ein häufiger Fehler." },
          { type: "h3", text: "Absätze" },
          { type: "p", text: "Für einen normalen Textabsatz verwenden wir das <code>&lt;p&gt;</code>-Tag:" },
          { type: "h3", text: "Fetter und kursiver Text" },
          { type: "p", text: "Der Unterschied zwischen <code>&lt;strong&gt;</code> und <code>&lt;b&gt;</code>: Ersteres deutet die <strong>semantische Bedeutung</strong> des Textes an, während letzteres nur <strong>visuelles Fett</strong> gibt. Es wird bevorzugt, <code>&lt;strong&gt;</code> aus Barrierefreiheitsgründen zu verwenden." }
        ]
      },
      {
        title: "Listen",
        content: [
          { type: "p", text: "HTML bietet drei Arten von Listen:" },
          { type: "h3", text: "1. Ungeordnete Liste" },
          { type: "p", text: "Verwendet, wenn die Reihenfolge der Elemente nicht wichtig ist:" },
          { type: "h3", text: "2. Geordnete Liste" },
          { type: "p", text: "Verwendet, wenn die Reihenfolge wichtig ist:" },
          { type: "h3", text: "3. Beschreibungsliste" },
          { type: "p", text: "Verwendet, um Paare von Begriffen und Definitionen anzuzeigen:" },
          { type: "h3", text: "Verschachtelte Listen" },
          { type: "p", text: "Sie können eine Liste innerhalb einer anderen Liste platzieren:" }
        ]
      },
      {
        title: "Andere nützliche Text-Tags",
        content: [
          { type: "p", text: "HTML bietet mehrere andere nützliche Tags für Textformatierung und Struktur." }
        ]
      },
      {
        title: "Praktisches Beispiel: Einfache Artikel-Seite",
        content: [
          { type: "p", text: "Schauen wir uns an, wie wir alles, was wir gelernt haben, in einer echten Artikel-Seite verwenden:" }
        ]
      },
      {
        title: "Was passiert hinter den Kulissen?",
        content: [
          { type: "p", text: "Wenn der Browser Text-Tags liest, passiert Folgendes:" },
          { type: "li", text: "Konvertiert <code>&lt;h1&gt;</code> in großen Text (normalerweise <strong>32px</strong> oder mehr) mit fetter Stärke." },
          { type: "li", text: "Konvertiert <code>&lt;p&gt;</code> in Text in einem separaten Absatz mit unterem Abstand." },
          { type: "li", text: "Konvertiert <code>&lt;ul&gt;</code> und <code>&lt;ol&gt;</code> automatisch in Aufzählungs- oder nummerierte Listen." },
          { type: "li", text: "Konvertiert <code>&lt;strong&gt;</code> in <strong>fetten</strong> Text." },
          { type: "li", text: "Konvertiert <code>&lt;code&gt;</code> in Text mit einer speziellen Schrift (Monospace) und grauem Hintergrund." },
          { type: "callout", title: "Wussten Sie?", text: "Der Browser gibt jedem Tag <strong>Standardabmessungen</strong>. Zum Beispiel bekommt <code>&lt;h1&gt;</code> <code>font-size: 2em</code> und <code>margin: 0.67em 0</code>. Sie können diese Werte in den Entwicklertools (F12) sehen." }
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Überspringen von Überschriftsebenen:</strong> Verwendung von <code>&lt;h1&gt;</code> direkt gefolgt von <code>&lt;h3&gt;</code> ohne <code>&lt;h2&gt;</code>. Dies schwächt die Seitenstruktur und verursacht SEO- und Barrierefreiheitsprobleme." },
          { type: "li", text: "<strong>Verwendung von Überschriften nur zur Textformatierung:</strong> Verwendung von <code>&lt;h3&gt;</code>, weil Sie kleineren Text wollen. Überschriften sind nur für semantische Struktur, Formatierung ist CSS's Rolle." },
          { type: "li", text: "<strong>Platzieren von Inline-Elementen an falschen Stellen:</strong> Wie das Platzieren von <code>&lt;p&gt;</code> innerhalb eines anderen <code>&lt;p&gt;</code>. Dies ist in HTML ungültig." },
          { type: "li", text: "<strong>Verwendung von <code>&lt;br&gt;</code> zum Erstellen von Abstand:</strong> Verwendung von <code>&lt;br&gt;&lt;br&gt;&lt;br&gt;</code>, um Abstand zwischen Absätzen zu erzeugen. Verwenden Sie stattdessen CSS-Margin." }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Verwenden Sie h1 nur einmal pro Seite:</strong> Weil es die Hauptüberschrift der Seite repräsentiert." },
          { type: "li", text: "<strong>Verwenden Sie strong und em statt b und i:</strong> Weil sie zusätzliche semantische Bedeutung bieten." },
          { type: "li", text: "<strong>Trennen Sie Elemente mit visuellem Abstand:</strong> Verwenden Sie Leerzeilen zwischen logischen Blöcken in HTML-Dateien für bessere Lesbarkeit." },
          { type: "li", text: "<strong>Verwenden Sie Listen bei Bedarf:</strong> Konvertieren Sie nicht jede Aufzählung in Absätze." }
        ]
      },
      {
        title: "Zusammenfassung der Lektion",
        content: [
          { type: "li", text: "<strong>Element</strong> = Öffnungstag + Inhalt + Schließungstag" },
          { type: "li", text: "Überschriften von <code>&lt;h1&gt;</code> bis <code>&lt;h6&gt;</code> - überspringen Sie keine Ebenen" },
          { type: "li", text: "Absätze: <code>&lt;p&gt;</code>" },
          { type: "li", text: "Fetter Text: <code>&lt;strong&gt;</code> | Kursiv: <code>&lt;em&gt;</code>" },
          { type: "li", text: "Listen: <code>&lt;ul&gt;</code> (ungeordnet) | <code>&lt;ol&gt;</code> (geordnet) | <code>&lt;dl&gt;</code> (Beschreibung)" },
          { type: "li", text: "Leere Elemente: <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code> und <code>&lt;img&gt;</code> (kein Schließungstag)" }
        ]
      }
    ],
    quiz: [
      {
        question: "Wie viele Überschriftsebenen gibt es in HTML?",
        options: ["4 Ebenen", "5 Ebenen", "6 Ebenen", "3 Ebenen"],
        explanation: "HTML bietet 6 Überschriftsebenen von h1 (größte) bis h6 (kleinste)."
      },
      {
        question: "Was ist der Unterschied zwischen <strong>strong</strong> und <strong>b</strong>?",
        options: [
          "Es gibt keinen Unterschied zwischen ihnen",
          "strong ist für fetten Text, b ist für kursiven Text",
          "strong deutet semantische Bedeutung an, b gibt nur visuelles Fett",
          "strong wird in CSS verwendet, b wird nur in HTML verwendet"
        ],
        explanation: "strong deutet an, dass der Text semantische Bedeutung hat, während b nur ein fettles Aussehen ohne zusätzliche Bedeutung gibt. Es wird bevorzugt, strong aus Barrierefreiheitsgründen zu verwenden."
      }
    ],
    challenge: {
      title: "Herausforderung: Vollständige Artikel-Seite",
      description: "Erstellen Sie eine HTML-Seite mit einem vollständigen Artikel: 1. einer Hauptüberschrift <code>&lt;h1&gt;</code>, 2. einem Einführungsabsatz, 3. einer Unterüberschrift <code>&lt;h2&gt;</code> mit einem Absatz, 4. einer geordneten Liste von Schritten, 5. einer ungeordneten Liste, 6. einem Zitat, 7. einer horizontalen Linie, 8. einem abschließenden Absatz mit fettem und kursivem Text."
    },
    cheatSheet: {
      title: "Spickzettel Elemente und Text",
      items: [
        { term: "<code>&lt;h1&gt;</code> bis <code>&lt;h6&gt;</code>", definition: "Überschriften (h1 größte, h6 kleinste)" },
        { term: "<code>&lt;p&gt;</code>", definition: "Absatz" },
        { term: "<code>&lt;strong&gt;</code>", definition: "Fett (semantische Bedeutung)" },
        { term: "<code>&lt;em&gt;</code>", definition: "Kursiv (Hervorhebung)" },
        { term: "<code>&lt;ul&gt;</code>", definition: "Ungeordnete Liste" },
        { term: "<code>&lt;ol&gt;</code>", definition: "Geordnete Liste" },
        { term: "<code>&lt;li&gt;</code>", definition: "Listen-element" },
        { term: "<code>&lt;code&gt;</code>", definition: "Inline-Code" },
        { term: "<code>&lt;blockquote&gt;</code>", definition: "Block-Zitat" },
        { term: "<code>&lt;pre&gt;</code>", definition: "Vorformatierter Text" }
      ]
    }
  }
};

export default translations;