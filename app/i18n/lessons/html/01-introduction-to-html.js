const translations = {
  ar: {
    sections: [
      {
        title: "ما هو HTML؟",
        content: [
          { type: "p", text: "<strong>HTML</strong> اختصار لـ <strong>HyperText Markup Language</strong>، وهي لغة الترميز القياسية لإنشاء صفحات الويب." },
          { type: "p", text: "دعنا نفكر في الأمر ببساطة: إذا كنت تريد بناء منزل، فأنت بحاجة إلى <strong>هيكل</strong> يشكل أساس المنزل (جدران، أبواب، نوافذ). بدون هذا الهيكل، لا يمكنك إضافة الأثاث أو الطلاء أو أي تفاصيل أخرى." },
          { type: "p", text: "<strong>HTML هو الشيء نفسه ولكن لمواقع الويب.</strong> إنه الهيكل الأساسي لكل صفحة ويب في العالم. كل ما تراه في المتصفح - النصوص، الصور، الأزرار، الروابط - كلها مبنية على هيكل HTML." },
          { type: "callout", title: "تشبيه بسيط", text: "تخيّل أنك تكتب رسالة. <strong>HTML</strong> يحدد أي جملة هي عنوان، وأي جملة هي فقرة عادية، وأي كلمة هي رابط. HTML يعطي المتصفح تعليمات حول <strong>الهيكل</strong> للصفحة، لكنه لا يتحدث عن <strong>المظهر</strong> (ذلك دور CSS)." }
        ]
      },
      {
        title: "لماذا نستخدم HTML؟",
        content: [
          { type: "p", text: "HTML يحل مشكلة أساسية: <strong>كيف يفهم المتصفح ما تريد عرضه للمستخدم؟</strong>" },
          { type: "p", text: "بدون HTML، المتصفح يرى نصاً عشوائياً بدون أي معنى. HTML يعطي النص <strong>هيكلاً ودلالات</strong> حتى يفهم المتصفح:" },
          { type: "li", text: "أي جزء هو <strong>عنوان</strong> (يجب أن يكون كبيراً وعريضاً)" },
          { type: "li", text: "أي جزء هو <strong>فقرة</strong> (يجب أن تكون منفصلة)" },
          { type: "li", text: "أي جزء هو <strong>رابط</strong> (يجب أن يكون قابلاً للنقر)" },
          { type: "li", text: "أي جزء هو <strong>صورة</strong> (يجب أن تُعرض، لا تُقرأ كنص)" },
          { type: "li", text: "أي جزء هو <strong>قائمة</strong> (يجب أن تُعرض بترتيب)" },
          { type: "callout", title: "حقيقة مهمة", text: "كل صفحة ويب تزورها الآن (Google، YouTube، Facebook، Twitter) مبنية على HTML في جوهرها. حتى تطبيقات JavaScript المعقدة تستخدم HTML لبناء الواجهة." }
        ]
      },
      {
        title: "المشكلة التي يحلها HTML",
        content: [
          { type: "p", text: "تخيّل أنك تريد إرسال ملف نصي إلى المتصفح وتخبره: \"هذه صفحة ويب.\" ماذا يحدث؟" },
          { type: "p", text: "المتصفح يرى نصاً عشوائياً ولا يفهم:" },
          { type: "li", text: "أي جزء هو العنوان الرئيسي؟" },
          { type: "li", text: "أين تبدأ الفقرة وأين تنتهي؟" },
          { type: "li", text: "أي كلمة هي رابط يجب النقر عليه؟" },
          { type: "li", text: "أين يجب أن تظهر الصورة؟" },
          { type: "p", text: "<strong>HTML يحل هذه المشكلة</strong> باستخدام \"علامات\" بسيطة تحيط بالنص وتعطيه معنى. المتصفح يعرف هذه العلامات ويعالج كل علامة وفقاً لدورها." }
        ]
      },
      {
        title: "كيف يعمل HTML؟ شرح بسيط",
        content: [
          { type: "p", text: "HTML يعمل على مبدأ بسيط جداً: <strong>علامة الفتح + المحتوى + علامة الإغلاق</strong>" },
          { type: "p", text: "دعنا نحلل هذا السطر:" },
          { type: "li", text: "<code>&lt;h1&gt;</code> هي <strong>علامة الفتح</strong> - تخبر المتصفح: \"ابدأ عنواناً من المستوى الأول هنا\"" },
          { type: "li", text: "<code>مرحبا بالعالم</code> هو <strong>المحتوى</strong> - النص الذي سيُعرض للمستخدم" },
          { type: "li", text: "<code>&lt;/h1&gt;</code> هي <strong>علامة الإغلاق</strong> - تخبر المتصفح: \"العنوان ينتهي هنا\"" },
          { type: "p", text: "لاحظ أن علامة الإغلاق تحتوي على <code>/</code> قبل اسم العلامة. هكذا تميز بين علامات الفتح والإغلاق." },
          { type: "callout", title: "تشبيه بسيط", text: "العلامة مثل الأقواس: <code>(مرحبا بالعالم)</code>. القوس المفتوح <code>(</code> يبدأ النص، والقوس المغلق <code>)</code> ينهيه. HTML يستخدم <code>&lt;</code> و<code>&gt;</code> بدلاً من الأقواس العادية." }
        ]
      },
      {
        title: "مثال بسيط: صفحتك الأولى بـ HTML",
        content: [
          { type: "p", text: "إليك أبسط صفحة HTML ممكنة. يمكنك كتابتها في أي ملف بامتداد <code>.html</code> وفتحها في المتصفح:" },
          { type: "p", text: "دعنا نفهم كل سطر:" },
          { type: "li", text: "<code>&lt;!DOCTYPE html&gt;</code>: تخبر المتصفح بأن هذا ملف <strong>HTML5</strong> (أحدث إصدار). يجب أن يكون هذا السطر دائماً الأول في الملف." },
          { type: "li", text: "<code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code>: العلامة الجذرية التي تحتوي على الصفحة بأكملها. <code>lang=\"ar\"</code> تخبر المتصفح بأن اللغة عربية، و<code>dir=\"rtl\"</code> تخبره بأن الاتجاه من اليمين إلى اليسار." },
          { type: "li", text: "<code>&lt;head&gt;</code>: يحتوي على <strong>معلومات عن الصفحة</strong> لا تظهر مباشرة للمستخدم (مثل العنوان و charset)." },
          { type: "li", text: "<code>&lt;meta charset=\"UTF-8\"&gt;</code>: يحدد ترميز الأحرف - مهم لدعم الأحرف العربية بشكل صحيح." },
          { type: "li", text: "<code>&lt;title&gt;</code>: العنوان الذي يظهر في تبويب المتصفح." },
          { type: "li", text: "<code>&lt;body&gt;</code>: يحتوي على <strong>كل المحتوى المرئي</strong> للصفحة - كل ما يراه المستخدم." }
        ]
      },
      {
        title: "مثال عملي: هيكل صفحة حقيقية",
        content: [
          { type: "p", text: "دعنا نرى كيف تبدو صفحة ويب حقيقية في بداية المشروع. هذا المثال يحاكي هيكل صفحة \"من نحن\" على موقع ويب بسيط:" },
          { type: "callout", title: "ملاحظة", text: "استخدمنا علامات مثل <code>&lt;header&gt;</code> و<code>&lt;nav&gt;</code> و<code>&lt;main&gt;</code> و<code>&lt;section&gt;</code> و<code>&lt;footer&gt;</code>. هذه علامات <strong>دلالية</strong> سنتعلمها بالتفصيل في درس لاحق. إنها تعطي المتصفح فهماً أعمق لهيكل الصفحة." }
        ]
      },
      {
        title: "ماذا يحدث خلف الكواليس؟",
        content: [
          { type: "p", text: "عندما تكتب ملف HTML وتفتحه في المتصفح، يحدث ما يلي:" },
          { type: "li", text: "<strong>المتصفح يقرأ ملف HTML</strong> سطراً بعد سطر من الأعلى إلى الأسفل." },
          { type: "li", text: "<strong>يبني \"شجرة DOM\"</strong>: يحول العلامات إلى بنية شجرية حيث تصبح كل علامة \"عقدة\" لها أب وأبناء. مثلاً، <code>&lt;body&gt;</code> هو الأب لـ <code>&lt;h1&gt;</code> و<code>&lt;p&gt;</code>." },
          { type: "li", text: "<strong>يطبق الأنماط</strong>: إذا كان هناك ملف CSS مرتبط، يضيف الألوان والمسافات والأحجام." },
          { type: "li", text: "<strong>يُنشئ \"شجرة العرض\"</strong>: يجمع HTML مع CSS لإنشاء الصورة النهائية." },
          { type: "li", text: "<strong>يرسم الصفحة</strong>: يرسم كل عنصر في موضعه الصحيح على الشاشة." },
          { type: "callout", title: "هل تعلم؟", text: "يمكنك رؤية هذه \"الشجرة\" بنفسك! اضغط <strong>F12</strong> على أي صفحة ويب وانتقل إلى تبويب <strong>Elements</strong>. سترى HTML الأصلي وكيف يحوله المتصفح إلى بنية شجرية." }
        ]
      },
      {
        title: "أخطاء شائعة للمبتدئين",
        content: [
          { type: "li", text: "<strong>نسيان علامة الإغلاق:</strong> كتابة <code>&lt;p&gt;نص بدون إغلاق</code> بدلاً من <code>&lt;p&gt;نص مع إغلاق&lt;/p&gt;</code>. قد يعالجها المتصفح بشكل غير متوقع، أو يغلق العلامة تلقائياً في المكان الخطأ." },
          { type: "li", text: "<strong>استخدام علامات تنصيص خاطئة:</strong> كتابة <code>lang='ar'</code> بدلاً من <code>lang=\"ar\"</code>. في HTML، يُفضل دائماً استخدام علامات التنصيص المزدوجة." },
          { type: "li", text: "<strong>عدم استخدام doctype:</strong> نسيان <code>&lt;!DOCTYPE html&gt;</code> في بداية الملف. بدونها، قد يعالج المتصفح الصفحة في \"وضع الغرابة\" مما يؤدي إلى سلوك غير متوقع." },
          { type: "li", text: "<strong>وضع المحتوى في head:</strong> النصوص والصور والأزرار يجب وضعها في <code>&lt;body&gt;</code>، وليس في <code>&lt;head&gt;</code>. الـ head فقط للبيانات الوصفية." },
          { type: "li", text: "<strong>التداخل الخاطئ للعلامات:</strong> كتابة <code>&lt;b&gt;&lt;i&gt;نص&lt;/b&gt;&lt;/i&gt;</code> بدلاً من <code>&lt;b&gt;&lt;i&gt;نص&lt;/i&gt;&lt;/b&gt;</code>. العلامة الداخلية يجب إغلاقها أولاً." }
        ]
      },
      {
        title: "أفضل الممارسات",
        content: [
          { type: "li", text: "<strong>استخدم دائماً &lt;!DOCTYPE html&gt;:</strong> تأكد أنها السطر الأول في الملف." },
          { type: "li", text: "<strong>استخدم الأحرف الكبيرة لل اختصارات:</strong> مثل <code>HTML</code> و<code>DOCTYPE</code> و<code>UTF-8</code> - غير مطلوب لكنه ممارسة شائعة." },
          { type: "li", text: "<strong>استخدم علامات التنصيص المزدوجة للخصائص:</strong> مثل <code>lang=\"ar\"</code> بدلاً من <code>lang='ar'</code>." },
          { type: "li", text: "<strong>أغلق دائماً جميع العلامات:</strong> حتى العلامات الفارغة مثل <code>&lt;br&gt;</code> و<code>&lt;img&gt;</code> يُفضل كتابتها كـ <code>&lt;br /&gt;</code> و<code>&lt;img /&gt;</code> في XHTML." },
          { type: "li", text: "<strong>استخدم العلامات الدلالية:</strong> مثل <code>&lt;header&gt;</code> و<code>&lt;nav&gt;</code> و<code>&lt;main&gt;</code> بدلاً من استخدام <code>&lt;div&gt;</code> لكل شيء." },
          { type: "li", text: "<strong>اكتب تعليقات وصفية:</strong> استخدم التعليقات لشرح الأجزاء المعقدة: <code>&lt;!-- هذا هو عنوان الصفحة --&gt;</code>" }
        ]
      },
      {
        title: "ملخص الدرس",
        content: [
          { type: "li", text: "<strong>HTML</strong> هي لغة ترميز تعطي المحتوى هيكلاً ودلالة." },
          { type: "li", text: "HTML تُستخدم لبناء <strong>الهيكل</strong> لكل صفحة ويب." },
          { type: "li", text: "العلامات تأتي على شكل <code>&lt;اسم_العلامة&gt;محتوى&lt;/اسم_العلامة&gt;</code>" },
          { type: "li", text: "كل صفحة HTML تبدأ بـ <code>&lt;!DOCTYPE html&gt;</code>" },
          { type: "li", text: "الصفحة لها جزآن رئيسيان: <code>&lt;head&gt;</code> (معلومات) و<code>&lt;body&gt;</code> (المحتوى المرئي)" },
          { type: "li", text: "HTML وحده لا يوفر تصميماً جميلاً - دوره فقط <strong>الهيكل</strong>. التصميم دور CSS." }
        ]
      }
    ],
    quiz: [
      {
        question: "ما هو الدور الرئيسي لـ HTML؟",
        options: [
          "تنسيق الألوان والخطوط في الصفحة",
          "إضافة التفاعلية والحسابات إلى الصفحة",
          "إعطاء المحتوى هيكلاً ودلالة",
          "إدارة قاعدة بيانات"
        ],
        explanation: "HTML مسؤول عن هيكل الصفحة ودلالة محتويها (تحديد ما هو عنوان، ما هي فقرة، ما هو رابط، إلخ). التنسيق دور CSS، والتفاعلية دور JavaScript."
      },
      {
        question: "أين يوضع المحتوى المرئي للصفحة (النصوص، الصور، الأزرار)؟",
        options: [
          "في <code>&lt;head&gt;</code>",
          "في <code>&lt;body&gt;</code>",
          "في <code>&lt;html&gt;</code>",
          "في <code>&lt;title&gt;</code>"
        ],
        explanation: "كل ما يراه المستخدم في الصفحة يوضع داخل علامة <code>&lt;body&gt;</code>. الـ <code>&lt;head&gt;</code> فقط يحتوي على البيانات الوصفية مثل العنوان و charset."
      },
      {
        question: "أي علامة تخبر المتصفح بأن اللغة عربية والاتجاه من اليمين إلى اليسار؟",
        options: [
          "<code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code>",
          "<code>&lt;html lang=\"en\" dir=\"ltr\"&gt;</code>",
          "<code>&lt;body lang=\"ar\"&gt;</code>",
          "<code>&lt;meta charset=\"ar\"&gt;</code>"
        ],
        explanation: "العلامة <code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code> تخبر المتصفح باللغة (ar = عربية) واتجاه النص (rtl = من اليمين إلى اليسار)."
      }
    ],
    challenge: {
      title: "تحدي: أول صفحة HTML",
      description: "أنشئ ملف HTML جديد يسمى <code>index.html</code> يحتوي على: 1. عنوان رئيسي <code>&lt;h1&gt;</code> باسمك، 2. فقرة <code>&lt;p&gt;</code> تقدمك بنفسك، 3. قائمة غير مرقمة <code>&lt;ul&gt;</code> بثلاثة من هواياتك."
    },
    cheatSheet: {
      title: "ملخص HTML - الدرس الأول",
      items: [
        { term: "<code>&lt;!DOCTYPE html&gt;</code>", definition: "يحدد نوع المستند" },
        { term: "<code>&lt;html&gt;</code>", definition: "العنصر الجذر" },
        { term: "<code>&lt;head&gt;</code>", definition: "البيانات الوصفية للصفحة" },
        { term: "<code>&lt;body&gt;</code>", definition: "المحتوى المرئي" },
        { term: "<code>&lt;title&gt;</code>", definition: "عنوان التبويب" },
        { term: "<code>&lt;meta&gt;</code>", definition: "معلومات البيانات الوصفية" }
      ]
    }
  },
  en: {
    sections: [
      {
        title: "What is HTML?",
        content: [
          { type: "p", text: "<strong>HTML</strong> stands for <strong>HyperText Markup Language</strong>, which is the standard markup language for creating web pages." },
          { type: "p", text: "Let's think about this simply: if you want to build a house, you need a <strong>structure</strong> that forms the foundation of the house (walls, doors, windows). Without this structure, you cannot add furniture, paint, or any other details." },
          { type: "p", text: "<strong>HTML is the same thing but for websites.</strong> It is the basic structure of every web page in the world. Everything you see in the browser - text, images, buttons, links - all are built on an HTML structure." },
          { type: "callout", title: "Simple Analogy", text: "Imagine you are writing a letter. <strong>HTML</strong> determines which sentence is a heading, which sentence is a regular paragraph, and which word is a link. HTML gives the browser instructions about the <strong>structure</strong> of the page, but it doesn't talk about its <strong>appearance</strong> (that's CSS's role)." }
        ]
      },
      {
        title: "Why Do We Use HTML?",
        content: [
          { type: "p", text: "HTML solves a fundamental problem: <strong>how does the browser understand what you want to display to the user?</strong>" },
          { type: "p", text: "Without HTML, the browser only sees random text without any meaning. HTML gives text <strong>structure and meaning</strong> so the browser knows:" },
          { type: "li", text: "Which part is a <strong>heading</strong> (should be large and bold)" },
          { type: "li", text: "Which part is a <strong>paragraph</strong> (should be separate)" },
          { type: "li", text: "Which part is a <strong>link</strong> (should be clickable)" },
          { type: "li", text: "Which part is an <strong>image</strong> (should display, not be read as text)" },
          { type: "li", text: "Which part is a <strong>list</strong> (should display in order)" },
          { type: "callout", title: "Important Fact", text: "Every web page you visit right now (Google, YouTube, Facebook, Twitter) is built on HTML at its core. Even complex JavaScript applications use HTML to build the interface." }
        ]
      },
      {
        title: "The Problem HTML Solves",
        content: [
          { type: "p", text: "Imagine you want to send a text file to the browser and tell it: \"This is a web page.\" What happens?" },
          { type: "p", text: "The browser sees random text and doesn't know:" },
          { type: "li", text: "Which part is the main heading?" },
          { type: "li", text: "Where does the paragraph start and where does it end?" },
          { type: "li", text: "Which word is a link that should be clicked?" },
          { type: "li", text: "Where should the image appear?" },
          { type: "p", text: "<strong>HTML solves this problem</strong> using simple \"tags\" that surround text and give it meaning. The browser knows these tags and treats each tag according to its role." }
        ]
      },
      {
        title: "How Does HTML Work? A Simple Explanation",
        content: [
          { type: "p", text: "HTML works on a very simple principle: <strong>opening tag + content + closing tag</strong>" },
          { type: "p", text: "Let's break down this line:" },
          { type: "li", text: "<code>&lt;h1&gt;</code> is the <strong>opening tag</strong> - it tells the browser: \"Start a first-level heading here\"" },
          { type: "li", text: "<code>مرحبا بالعالم</code> is the <strong>content</strong> - the text that will be displayed to the user" },
          { type: "li", text: "<code>&lt;/h1&gt;</code> is the <strong>closing tag</strong> - it tells the browser: \"The heading ends here\"" },
          { type: "p", text: "Notice that the closing tag contains a <code>/</code> before the tag name. This is how you distinguish between opening and closing tags." },
          { type: "callout", title: "Simple Analogy", text: "A tag is like parentheses: <code>(مرحبا بالعالم)</code>. The opening parenthesis <code>(</code> starts the text, and the closing parenthesis <code>)</code> ends it. HTML uses <code>&lt;</code> and <code>&gt;</code> instead of regular parentheses." }
        ]
      },
      {
        title: "Simple Example: Your First HTML Page",
        content: [
          { type: "p", text: "Here is the simplest possible HTML page. You can write it in any file with a <code>.html</code> extension and open it in the browser:" },
          { type: "p", text: "Let's understand each line:" },
          { type: "li", text: "<code>&lt;!DOCTYPE html&gt;</code>: Tells the browser that this is an <strong>HTML5</strong> file (latest version). This line should always be the first line in the file." },
          { type: "li", text: "<code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code>: The root tag that contains the entire page. <code>lang=\"ar\"</code> tells the browser the language is Arabic, and <code>dir=\"rtl\"</code> tells it the direction is right-to-left." },
          { type: "li", text: "<code>&lt;head&gt;</code>: Contains <strong>information about the page</strong> that doesn't directly appear to the user (like the title and charset)." },
          { type: "li", text: "<code>&lt;meta charset=\"UTF-8\"&gt;</code>: Specifies character encoding - important for proper Arabic character support." },
          { type: "li", text: "<code>&lt;title&gt;</code>: The title that appears in the browser tab." },
          { type: "li", text: "<code>&lt;body&gt;</code>: Contains <strong>all visible content</strong> of the page - everything the user sees." }
        ]
      },
      {
        title: "Practical Example: Real Page Structure",
        content: [
          { type: "p", text: "Let's see how a real web page looks at the beginning of a project. This example simulates the structure of an \"About Us\" page on a simple website:" },
          { type: "callout", title: "Note", text: "We used tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code>. These are <strong>semantic</strong> tags that we will learn in detail in a later lesson. They give the browser a deeper understanding of the page structure." }
        ]
      },
      {
        title: "What Happens Behind the Scenes?",
        content: [
          { type: "p", text: "When you write an HTML file and open it in the browser, the following happens:" },
          { type: "li", text: "<strong>The browser reads the HTML file</strong> line by line from top to bottom." },
          { type: "li", text: "<strong>Builds a \"DOM Tree\"</strong>: It converts tags into a tree structure where each tag becomes a \"node\" with a parent and children. For example, <code>&lt;body&gt;</code> is the parent of <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>." },
          { type: "li", text: "<strong>Applies styles</strong>: If there's an associated CSS file, it adds colors, spacing, and sizes." },
          { type: "li", text: "<strong>Creates a \"Render Tree\"</strong>: Combines HTML + CSS to create the final image." },
          { type: "li", text: "<strong>Paints the page</strong>: Draws each element in its correct position on the screen." },
          { type: "callout", title: "Did You Know?", text: "You can see this \"tree\" yourself! Press <strong>F12</strong> on any web page and go to the <strong>Elements</strong> tab. You'll see the original HTML and how the browser converts it into a tree structure." }
        ]
      },
      {
        title: "Common Mistakes for Beginners",
        content: [
          { type: "li", text: "<strong>Forgetting the closing tag:</strong> Writing <code>&lt;p&gt;text without closing</code> instead of <code>&lt;p&gt;text with closing&lt;/p&gt;</code>. The browser may handle it unexpectedly, or may close the tag automatically in the wrong place." },
          { type: "li", text: "<strong>Using wrong quotation marks:</strong> Writing <code>lang='ar'</code> instead of <code>lang=\"ar\"</code>. In HTML, it's always preferred to use double quotation marks." },
          { type: "li", text: "<strong>Not using doctype:</strong> Forgetting <code>&lt;!DOCTYPE html&gt;</code> at the beginning of the file. Without it, the browser may treat the page in \"Quirks Mode\" which leads to unexpected behavior." },
          { type: "li", text: "<strong>Placing content in the head:</strong> Text, images, and buttons should be placed in <code>&lt;body&gt;</code>, not in <code>&lt;head&gt;</code>. The head is only for metadata." },
          { type: "li", text: "<strong>Incorrectly nesting tags:</strong> Writing <code>&lt;b&gt;&lt;i&gt;text&lt;/b&gt;&lt;/i&gt;</code> instead of <code>&lt;b&gt;&lt;i&gt;text&lt;/i&gt;&lt;/b&gt;</code>. The inner tag must be closed first." }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Always use &lt;!DOCTYPE html&gt;:</strong> Make sure it's the first line in the file." },
          { type: "li", text: "<strong>Use uppercase for abbreviations:</strong> Like <code>HTML</code>, <code>DOCTYPE</code>, and <code>UTF-8</code> - not required but common practice." },
          { type: "li", text: "<strong>Use double quotes for attributes:</strong> Like <code>lang=\"ar\"</code> instead of <code>lang='ar'</code>." },
          { type: "li", text: "<strong>Always close all tags:</strong> Even empty tags like <code>&lt;br&gt;</code> and <code>&lt;img&gt;</code> are preferably written as <code>&lt;br /&gt;</code> and <code>&lt;img /&gt;</code> in XHTML." },
          { type: "li", text: "<strong>Use semantic tags:</strong> Like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;main&gt;</code> instead of using <code>&lt;div&gt;</code> for everything." },
          { type: "li", text: "<strong>Write descriptive comments:</strong> Use comments to explain complex parts: <code>&lt;!-- This is the page header --&gt;</code>" }
        ]
      },
      {
        title: "Lesson Summary",
        content: [
          { type: "li", text: "<strong>HTML</strong> is a markup language that gives content structure and meaning." },
          { type: "li", text: "HTML is used to build the <strong>structure</strong> of every web page." },
          { type: "li", text: "Tags come in the form <code>&lt;tagname&gt;content&lt;/tagname&gt;</code>" },
          { type: "li", text: "Every HTML page starts with <code>&lt;!DOCTYPE html&gt;</code>" },
          { type: "li", text: "The page has two main parts: <code>&lt;head&gt;</code> (information) and <code>&lt;body&gt;</code> (visible content)" },
          { type: "li", text: "HTML alone doesn't provide beautiful design - its role is only <strong>structure</strong>. Design is CSS's role." }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the main role of HTML?",
        options: [
          "Styling colors and fonts on the page",
          "Adding interactivity and calculations to the page",
          "Giving content structure and meaning",
          "Managing a database"
        ],
        explanation: "HTML is responsible for the page structure and the meaning of its content (determining what is a heading, what is a paragraph, what is a link, etc.). Styling is CSS's role, and interactivity is JavaScript's role."
      },
      {
        question: "Where is the visible content of the page placed (text, images, buttons)?",
        options: [
          "In <code>&lt;head&gt;</code>",
          "In <code>&lt;body&gt;</code>",
          "In <code>&lt;html&gt;</code>",
          "In <code>&lt;title&gt;</code>"
        ],
        explanation: "Everything the user sees on the page is placed inside the <code>&lt;body&gt;</code> tag. The <code>&lt;head&gt;</code> only contains metadata like the title and charset."
      },
      {
        question: "Which tag tells the browser that the language is Arabic and the direction is right-to-left?",
        options: [
          "<code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code>",
          "<code>&lt;html lang=\"en\" dir=\"ltr\"&gt;</code>",
          "<code>&lt;body lang=\"ar\"&gt;</code>",
          "<code>&lt;meta charset=\"ar\"&gt;</code>"
        ],
        explanation: "The tag <code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code> tells the browser the language (ar = Arabic) and text direction (rtl = right-to-left)."
      }
    ],
    challenge: {
      title: "Challenge: First HTML Page",
      description: "Create a new HTML file named <code>index.html</code> containing: 1. A main heading <code>&lt;h1&gt;</code> with your name, 2. A paragraph <code>&lt;p&gt;</code> introducing yourself, 3. An unordered list <code>&lt;ul&gt;</code> with three of your hobbies."
    },
    cheatSheet: {
      title: "HTML Cheat Sheet - Lesson 1",
      items: [
        { term: "<code>&lt;!DOCTYPE html&gt;</code>", definition: "Specifies the document type" },
        { term: "<code>&lt;html&gt;</code>", definition: "The root element" },
        { term: "<code>&lt;head&gt;</code>", definition: "Page metadata" },
        { term: "<code>&lt;body&gt;</code>", definition: "Visible content" },
        { term: "<code>&lt;title&gt;</code>", definition: "Tab title" },
        { term: "<code>&lt;meta&gt;</code>", definition: "Metadata information" }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que le HTML ?",
        content: [
          { type: "p", text: "<strong>HTML</strong> signifie <strong>HyperText Markup Language</strong>, qui est le langage de balisage standard pour créer des pages web." },
          { type: "p", text: "Pensons simplement : si vous voulez construire une maison, vous avez besoin d'une <strong>structure</strong> qui forme la fondation de la maison (murs, portes, fenêtres). Sans cette structure, vous ne pouvez pas ajouter de meubles, de peinture ou d'autres détails." },
          { type: "p", text: "<strong>HTML est la même chose mais pour les sites web.</strong> C'est la structure de base de chaque page web dans le monde. Tout ce que vous voyez dans le navigateur - texte, images, boutons, liens - tout est construit sur une structure HTML." },
          { type: "callout", title: "Analogie simple", text: "Imaginez que vous écrivez une lettre. <strong>HTML</strong> détermine quelle phrase est un titre, quelle phrase est un paragraphe ordinaire et quel mot est un lien. HTML donne au navigateur des instructions sur la <strong>structure</strong> de la page, mais ne parle pas de son <strong>apparence</strong> (c'est le rôle de CSS)." }
        ]
      },
      {
        title: "Pourquoi utilisons-nous HTML ?",
        content: [
          { type: "p", text: "HTML résout un problème fondamental : <strong>comment le navigateur comprend-il ce que vous voulez afficher à l'utilisateur ?</strong>" },
          { type: "p", text: "Sans HTML, le navigateur ne voit que du texte aléatoire sans aucun sens. HTML donne au texte une <strong>structure et une signification</strong> pour que le navigateur sache :" },
          { type: "li", text: "Quelle partie est un <strong>titre</strong> (doit être grand et gras)" },
          { type: "li", text: "Quelle partie est un <strong>paragraphe</strong> (doit être séparé)" },
          { type: "li", text: "Quelle partie est un <strong>lien</strong> (doit être cliquable)" },
          { type: "li", text: "Quelle partie est une <strong>image</strong> (doit s'afficher, pas être lue comme du texte)" },
          { type: "li", text: "Quelle partie est une <strong>liste</strong> (doit s'afficher dans l'ordre)" },
          { type: "callout", title: "Fait important", text: "Chaque page web que vous visitez en ce moment (Google, YouTube, Facebook, Twitter) est construite sur HTML à sa base. Même les applications JavaScript complexes utilisent HTML pour construire l'interface." }
        ]
      },
      {
        title: "Le problème qu'HTML résout",
        content: [
          { type: "p", text: "Imaginez que vous voulez envoyer un fichier texte au navigateur et lui dire : \"C'est une page web.\" Que se passe-t-il ?" },
          { type: "p", text: "Le navigateur voit du texte aléatoire et ne comprend pas :" },
          { type: "li", text: "Quelle partie est le titre principal ?" },
          { type: "li", text: "Où commence le paragraphe et où finit-il ?" },
          { type: "li", text: "Quel mot est un lien qui doit être cliqué ?" },
          { type: "li", text: "Où l'image doit-elle apparaître ?" },
          { type: "p", text: "<strong>HTML résout ce problème</strong> en utilisant des \"balises\" simples qui entourent le texte et lui donnent un sens. Le navigateur connaît ces balises et traite chaque balise selon son rôle." }
        ]
      },
      {
        title: "Comment fonctionne HTML ? Explication simple",
        content: [
          { type: "p", text: "HTML fonctionne sur un principe très simple : <strong>balise d'ouverture + contenu + balise de fermeture</strong>" },
          { type: "p", text: "Décomposons cette ligne :" },
          { type: "li", text: "<code>&lt;h1&gt;</code> est la <strong>balise d'ouverture</strong> - elle dit au navigateur : \"Commencez un titre de premier niveau ici\"" },
          { type: "li", text: "<code>مرحبا بالعالم</code> est le <strong>contenu</strong> - le texte qui sera affiché à l'utilisateur" },
          { type: "li", text: "<code>&lt;/h1&gt;</code> est la <strong>balise de fermeture</strong> - elle dit au navigateur : \"Le titre se termine ici\"" },
          { type: "p", text: "Remarquez que la balise de fermeture contient un <code>/</code> avant le nom de la balise. C'est ainsi que vous distinguez les balises d'ouverture et de fermeture." },
          { type: "callout", title: "Analogie simple", text: "Une balise est comme des parenthèses : <code>(مرحبا بالعالم)</code>. La parenthèse ouvrante <code>(</code> commence le texte, et la parenthèse fermante <code>)</code> le termine. HTML utilise <code>&lt;</code> et <code>&gt;</code> au lieu des parenthèses ordinaires." }
        ]
      },
      {
        title: "Exemple simple : Votre première page HTML",
        content: [
          { type: "p", text: "Voici la page HTML la plus simple possible. Vous pouvez l'écrire dans n'importe quel fichier avec l'extension <code>.html</code> et l'ouvrir dans le navigateur :" },
          { type: "p", text: "Comprends chaque ligne :" },
          { type: "li", text: "<code>&lt;!DOCTYPE html&gt;</code> : Indique au navigateur qu'il s'agit d'un fichier <strong>HTML5</strong> (dernière version). Cette ligne doit toujours être la première ligne du fichier." },
          { type: "li", text: "<code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code> : La balise racine qui contient toute la page. <code>lang=\"ar\"</code> indique au navigateur que la langue est l'arabe, et <code>dir=\"rtl\"</code> indique que la direction est de droite à gauche." },
          { type: "li", text: "<code>&lt;head&gt;</code> : Contient des <strong>informations sur la page</strong> qui n'apparaissent pas directement à l'utilisateur (comme le titre et le charset)." },
          { type: "li", text: "<code>&lt;meta charset=\"UTF-8\"&gt;</code> : Spécifie l'encodage des caractères - important pour un support correct des caractères arabes." },
          { type: "li", text: "<code>&lt;title&gt;</code> : Le titre qui apparaît dans l'onglet du navigateur." },
          { type: "li", text: "<code>&lt;body&gt;</code> : Contient tout le <strong>contenu visible</strong> de la page - tout ce que l'utilisateur voit." }
        ]
      },
      {
        title: "Exemple pratique : Structure d'une page réelle",
        content: [
          { type: "p", text: "Voyons à quoi ressemble une page web réelle au début d'un projet. Cet exemple simule la structure d'une page \"À propos\" sur un site web simple :" },
          { type: "callout", title: "Remarque", text: "Nous avons utilisé des balises comme <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code> et <code>&lt;footer&gt;</code>. Ce sont des balises <strong>sémantiques</strong> que nous apprendrons en détail dans une leçon ultérieure. Elles donnent au navigateur une compréhension plus profonde de la structure de la page." }
        ]
      },
      {
        title: "Que se passe-t-il en coulisses ?",
        content: [
          { type: "p", text: "Quand vous écrivez un fichier HTML et l'ouvez dans le navigateur, voici ce qui se passe :" },
          { type: "li", text: "<strong>Le navigateur lit le fichier HTML</strong> ligne par ligne de haut en bas." },
          { type: "li", text: "<strong>Construit un \"DOM Tree\"</strong> : Il convertit les balises en une arborescence où chaque balise devient un \"nœud\" avec un parent et des enfants. Par exemple, <code>&lt;body&gt;</code> est le parent de <code>&lt;h1&gt;</code> et <code>&lt;p&gt;</code>." },
          { type: "li", text: "<strong>Applique les styles</strong> : S'il y a un fichier CSS associé, il ajoute les couleurs, l'espacement et les tailles." },
          { type: "li", text: "<strong>Crée un \"Render Tree\"</strong> : Combine HTML + CSS pour créer l'image finale." },
          { type: "li", text: "<strong>Dessine la page</strong> : Dessine chaque élément à sa position correcte à l'écran." },
          { type: "callout", title: "Le saviez-vous ?", text: "Vous pouvez voir cet \"arbre\" vous-même ! Appuyez sur <strong>F12</strong> sur n'importe quelle page web et allez dans l'onglet <strong>Elements</strong>. Vous verrez le HTML original et comment le navigateur le convertit en une structure arborescente." }
        ]
      },
      {
        title: "Erreurs courantes pour les débutants",
        content: [
          { type: "li", text: "<strong>Oublier la balise de fermeture :</strong> Écrire <code>&lt;p&gt;texte sans fermeture</code> au lieu de <code>&lt;p&gt;texte avec fermeture&lt;/p&gt;</code>. Le navigateur peut le traiter de manière inattendue, ou fermer la balise automatiquement au mauvais endroit." },
          { type: "li", text: "<strong>Utiliser les mauvais guillemets :</strong> Écrire <code>lang='ar'</code> au lieu de <code>lang=\"ar\"</code>. En HTML, il est toujours préférable d'utiliser des guillemets doubles." },
          { type: "li", text: "<strong>Ne pas utiliser doctype :</strong> Oublier <code>&lt;!DOCTYPE html&gt;</code> au début du fichier. Sans cela, le navigateur peut traiter la page en \"Quirks Mode\" ce qui entraîne un comportement inattendu." },
          { type: "li", text: "<strong>Placer le contenu dans le head :</strong> Le texte, les images et les boutons doivent être placés dans <code>&lt;body&gt;</code>, pas dans <code>&lt;head&gt;</code>. Le head n'est que pour les métadonnées." },
          { type: "li", text: "<strong>Imbriquer incorrectement les balises :</strong> Écrire <code>&lt;b&gt;&lt;i&gt;texte&lt;/b&gt;&lt;/i&gt;</code> au lieu de <code>&lt;b&gt;&lt;i&gt;texte&lt;/i&gt;&lt;/b&gt;</code>. La balise interne doit être fermée en premier." }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "<strong>Toujours utiliser &lt;!DOCTYPE html&gt; :</strong> Assurez-vous que c'est la première ligne du fichier." },
          { type: "li", text: "<strong>Utiliser des majuscules pour les abréviations :</strong> Comme <code>HTML</code>, <code>DOCTYPE</code> et <code>UTF-8</code> - pas obligatoire mais pratique courante." },
          { type: "li", text: "<strong>Utiliser des guillemets doubles pour les attributs :</strong> Comme <code>lang=\"ar\"</code> au lieu de <code>lang='ar'</code>." },
          { type: "li", text: "<strong>Toujours fermer toutes les balises :</strong> Même les balises vides comme <code>&lt;br&gt;</code> et <code>&lt;img&gt;</code> sont préférablement écrites <code>&lt;br /&gt;</code> et <code>&lt;img /&gt;</code> en XHTML." },
          { type: "li", text: "<strong>Utiliser des balises sémantiques :</strong> Comme <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> et <code>&lt;main&gt;</code> au lieu d'utiliser <code>&lt;div&gt;</code> pour tout." },
          { type: "li", text: "<strong>Écrire des commentaires descriptifs :</strong> Utilisez les commentaires pour expliquer les parties complexes : <code>&lt;!-- C'est l'en-tête de la page --&gt;</code>" }
        ]
      },
      {
        title: "Résumé de la leçon",
        content: [
          { type: "li", text: "<strong>HTML</strong> est un langage de balisage qui donne au contenu une structure et une signification." },
          { type: "li", text: "HTML est utilisé pour construire la <strong>structure</strong> de chaque page web." },
          { type: "li", text: "Les balises ont la forme <code>&lt;nom_balise&gt;contenu&lt;/nom_balise&gt;</code>" },
          { type: "li", text: "Chaque page HTML commence par <code>&lt;!DOCTYPE html&gt;</code>" },
          { type: "li", text: "La page a deux parties principales : <code>&lt;head&gt;</code> (informations) et <code>&lt;body&gt;</code> (contenu visible)" },
          { type: "li", text: "HTML seul ne fournit pas un beau design - son rôle est uniquement la <strong>structure</strong>. Le design est le rôle de CSS." }
        ]
      }
    ],
    quiz: [
      {
        question: "Quel est le rôle principal de HTML ?",
        options: [
          "Styler les couleurs et les polices de la page",
          "Ajouter l'interactivité et les calculs à la page",
          "Donner au contenu une structure et une signification",
          "Gérer une base de données"
        ],
        explanation: "HTML est responsable de la structure de la page et de la signification de son contenu (déterminer ce qui est un titre, un paragraphe, un lien, etc.). Le style est le rôle de CSS, et l'interactivité est le rôle de JavaScript."
      },
      {
        question: "Où le contenu visible de la page est-il placé (texte, images, boutons) ?",
        options: [
          "Dans <code>&lt;head&gt;</code>",
          "Dans <code>&lt;body&gt;</code>",
          "Dans <code>&lt;html&gt;</code>",
          "Dans <code>&lt;title&gt;</code>"
        ],
        explanation: "Tout ce que l'utilisateur voit sur la page est placé à l'intérieur de la balise <code>&lt;body&gt;</code>. Le <code>&lt;head&gt;</code> ne contient que des métadonnées comme le titre et le charset."
      },
      {
        question: "Quelle balise indique au navigateur que la langue est l'arabe et la direction de droite à gauche ?",
        options: [
          "<code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code>",
          "<code>&lt;html lang=\"en\" dir=\"ltr\"&gt;</code>",
          "<code>&lt;body lang=\"ar\"&gt;</code>",
          "<code>&lt;meta charset=\"ar\"&gt;</code>"
        ],
        explanation: "La balise <code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code> indique au navigateur la langue (ar = arabe) et la direction du texte (rtl = de droite à gauche)."
      }
    ],
    challenge: {
      title: "Défi : Première page HTML",
      description: "Créez un nouveau fichier HTML nommé <code>index.html</code> contenant : 1. Un titre principal <code>&lt;h1&gt;</code> avec votre nom, 2. Un paragraphe <code>&lt;p&gt;</code> vous présentant, 3. Une liste non ordonnée <code>&lt;ul&gt;</code> avec trois de vos passe-temps."
    },
    cheatSheet: {
      title: "Fiche mémo HTML - Leçon 1",
      items: [
        { term: "<code>&lt;!DOCTYPE html&gt;</code>", definition: "Spécifie le type de document" },
        { term: "<code>&lt;html&gt;</code>", definition: "L'élément racine" },
        { term: "<code>&lt;head&gt;</code>", definition: "Métadonnées de la page" },
        { term: "<code>&lt;body&gt;</code>", definition: "Contenu visible" },
        { term: "<code>&lt;title&gt;</code>", definition: "Titre de l'onglet" },
        { term: "<code>&lt;meta&gt;</code>", definition: "Informations de métadonnées" }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was ist HTML?",
        content: [
          { type: "p", text: "<strong>HTML</strong> steht für <strong>HyperText Markup Language</strong>, die Standard-Auszeichnungssprache zum Erstellen von Webseiten." },
          { type: "p", text: "Denken wir einfach darüber nach: Wenn Sie ein Haus bauen wollen, benötigen Sie eine <strong>Struktur</strong>, die das Fundament des Hauses bildet (Wände, Türen, Fenster). Ohne diese Struktur können Sie keine Möbel, Farbe oder andere Details hinzufügen." },
          { type: "p", text: "<strong>HTML ist dasselbe, aber für Websites.</strong> Es ist die grundlegende Struktur jeder Webseite in der Welt. Alles, was Sie im Browser sehen - Text, Bilder, Buttons, Links - alles basiert auf einer HTML-Struktur." },
          { type: "callout", title: "Einfache Analogie", text: "Stellen Sie sich vor, Sie schreiben einen Brief. <strong>HTML</strong> bestimmt, welcher Satz eine Überschrift ist, welcher Satz ein normaler Absatz ist und welches Wort ein Link ist. HTML gibt dem Browser Anweisungen über die <strong>Struktur</strong> der Seite, spricht aber nicht über das <strong>Erscheinungsbild</strong> (das ist CSS's Rolle)." }
        ]
      },
      {
        title: "Warum verwenden wir HTML?",
        content: [
          { type: "p", text: "HTML löst ein grundlegendes Problem: <strong>Wie versteht der Browser, was Sie dem Benutzer anzeigen möchten?</strong>" },
          { type: "p", text: "Ohne HTML sieht der Browser nur zufälligen Text ohne jegliche Bedeutung. HTML gibt dem Text <strong>Struktur und Bedeutung</strong>, damit der Browser weiß:" },
          { type: "li", text: "Welcher Teil eine <strong>Überschrift</strong> ist (sollte groß und fett sein)" },
          { type: "li", text: "Welcher Teil ein <strong>Absatz</strong> ist (sollte getrennt sein)" },
          { type: "li", text: "Welcher Teil ein <strong>Link</strong> ist (sollte klickbar sein)" },
          { type: "li", text: "Welcher Teil ein <strong>Bild</strong> ist (sollte angezeigt werden, nicht als Text gelesen werden)" },
          { type: "li", text: "Welcher Teil eine <strong>Liste</strong> ist (sollte in Reihenfolge angezeigt werden)" },
          { type: "callout", title: "Wichtige Tatsache", text: "Jede Webseite, die Sie gerade besuchen (Google, YouTube, Facebook, Twitter), basiert auf HTML in ihrem Kern. Sogar komplexe JavaScript-Anwendungen verwenden HTML zum Erstellen der Benutzeroberfläche." }
        ]
      },
      {
        title: "Das Problem, das HTML löst",
        content: [
          { type: "p", text: "Stellen Sie sich vor, Sie möchten eine Textdatei an den Browser senden und ihm sagen: \"Das ist eine Webseite.\" Was passiert?" },
          { type: "p", text: "Der Browser sieht zufälligen Text und versteht nicht:" },
          { type: "li", text: "Welcher Teil die Hauptüberschrift ist?" },
          { type: "li", text: "Wo beginnt der Absatz und wo endet er?" },
          { type: "li", text: "Welches Wort ein Link ist, der geklickt werden soll?" },
          { type: "li", text: "Wo das Bild erscheinen soll?" },
          { type: "p", text: "<strong>HTML löst dieses Problem</strong> mit einfachen \"Tags\", die den Text umgeben und ihm eine Bedeutung geben. Der Browser kennt diese Tags und behandelt jedes Tag entsprechend seiner Rolle." }
        ]
      },
      {
        title: "Wie funktioniert HTML? Einfache Erklärung",
        content: [
          { type: "p", text: "HTML funktioniert nach einem sehr einfachen Prinzip: <strong>Öffnungstag + Inhalt + Schließungstag</strong>" },
          { type: "p", text: "Lassen Sie uns diese Zeile aufschlüsseln:" },
          { type: "li", text: "<code>&lt;h1&gt;</code> ist der <strong>Öffnungstag</strong> - er sagt dem Browser: \"Beginnen Sie hier eine Überschrift erster Stufe\"" },
          { type: "li", text: "<code>مرحبا بالعالم</code> ist der <strong>Inhalt</strong> - der Text, der dem Benutzer angezeigt wird" },
          { type: "li", text: "<code>&lt;/h1&gt;</code> ist der <strong>Schließungstag</strong> - er sagt dem Browser: \"Die Überschrift endet hier\"" },
          { type: "p", text: "Beachten Sie, dass der Schließungstag ein <code>/</code> vor dem Tag-Namen enthält. So unterscheiden Sie zwischen Öffnungs- und Schließungstags." },
          { type: "callout", title: "Einfache Analogie", text: "Ein Tag ist wie Klammern: <code>(مرحبا بالعالم)</code>. Die öffnende Klammer <code>(</code> beginnt den Text, und die schließende Klammer <code>)</code> beendet ihn. HTML verwendet <code>&lt;</code> und <code>&gt;</code> anstelle von normalen Klammern." }
        ]
      },
      {
        title: "Einfaches Beispiel: Ihre erste HTML-Seite",
        content: [
          { type: "p", text: "Hier ist die einfachste mögliche HTML-Seite. Sie können sie in einer beliebigen Datei mit der Erweiterung <code>.html</code> schreiben und im Browser öffnen:" },
          { type: "p", text: "Verstehen wir jede Zeile:" },
          { type: "li", text: "<code>&lt;!DOCTYPE html&gt;</code>: Teilt dem Browser mit, dass dies eine <strong>HTML5</strong>-Datei ist (neueste Version). Diese Zeile sollte immer die erste Zeile in der Datei sein." },
          { type: "li", text: "<code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code>: Das Root-Tag, das die gesamte Seite enthält. <code>lang=\"ar\"</code> teilt dem Browser mit, dass die Sprache Arabisch ist, und <code>dir=\"rtl\"</code> teilt ihm mit, dass die Richtung von rechts nach links ist." },
          { type: "li", text: "<code>&lt;head&gt;</code>: Enthält <strong>Informationen über die Seite</strong>, die dem Benutzer nicht direkt angezeigt werden (wie der Titel und der Zeichensatz)." },
          { type: "li", text: "<code>&lt;meta charset=\"UTF-8\"&gt;</code>: Spezifiziert die Zeichenkodierung - wichtig für die korrekte Unterstützung arabischer Zeichen." },
          { type: "li", text: "<code>&lt;title&gt;</code>: Der Titel, der im Browser-Tab erscheint." },
          { type: "li", text: "<code>&lt;body&gt;</code>: Enthält den gesamten <strong>sichtbaren Inhalt</strong> der Seite - alles, was der Benutzer sieht." }
        ]
      },
      {
        title: "Praktisches Beispiel: Struktur einer echten Seite",
        content: [
          { type: "p", text: "Schauen wir uns an, wie eine echte Webseite zu Beginn eines Projekts aussieht. Dieses Beispiel simuliert die Struktur einer \"Über uns\"-Seite auf einer einfachen Website:" },
          { type: "callout", title: "Hinweis", text: "Wir haben Tags wie <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code> und <code>&lt;footer&gt;</code> verwendet. Dies sind <strong>semantische</strong> Tags, die wir in einer späteren Lektion im Detail lernen werden. Sie geben dem Browser ein tieferes Verständnis der Seitenstruktur." }
        ]
      },
      {
        title: "Was passiert hinter den Kulissen?",
        content: [
          { type: "p", text: "Wenn Sie eine HTML-Datei schreiben und im Browser öffnen, passiert Folgendes:" },
          { type: "li", text: "<strong>Der Browser liest die HTML-Datei</strong> Zeile für Zeile von oben nach unten." },
          { type: "li", text: "<strong>Erstellt einen \"DOM Tree\"</strong>: Er wandelt Tags in eine Baumstruktur um, wobei jedes Tag zu einem \"Knoten\" mit einem Elternteil und Kindern wird. Zum Beispiel ist <code>&lt;body&gt;</code> das Elternteil von <code>&lt;h1&gt;</code> und <code>&lt;p&gt;</code>." },
          { type: "li", text: "<strong>Wendet Styles an</strong>: Wenn eine zugehörige CSS-Datei vorhanden ist, fügt sie Farben, Abstände und Größen hinzu." },
          { type: "li", text: "<strong>Erstellt einen \"Render Tree\"</strong>: Kombiniert HTML + CSS, um das endgültige Bild zu erstellen." },
          { type: "li", text: "<strong>Zeichnet die Seite</strong>: Zeichnet jedes Element an seiner richtigen Position auf dem Bildschirm." },
          { type: "callout", title: "Wussten Sie?", text: "Sie können diesen \"Baum\" selbst sehen! Drücken Sie <strong>F12</strong> auf einer beliebigen Webseite und gehen Sie zum Tab <strong>Elements</strong>. Sie sehen das ursprüngliche HTML und wie der Browser es in eine Baumstruktur umwandelt." }
        ]
      },
      {
        title: "Häufige Fehler für Anfänger",
        content: [
          { type: "li", text: "<strong>Vergessen des Schließungstags:</strong> Schreiben von <code>&lt;p&gt;Text ohne Schließung</code> anstelle von <code>&lt;p&gt;Text mit Schließung&lt;/p&gt;</code>. Der Browser kann es unerwartet behandeln oder den Tag automatisch an der falschen Stelle schließen." },
          { type: "li", text: "<strong>Verwendung falscher Anführungszeichen:</strong> Schreiben von <code>lang='ar'</code> anstelle von <code>lang=\"ar\"</code>. In HTML sollten immer doppelte Anführungszeichen verwendet werden." },
          { type: "li", text: "<strong>Nicht verwenden von doctype:</strong> Vergessen von <code>&lt;!DOCTYPE html&gt;</code> am Anfang der Datei. Ohne dies kann der Browser die Seite im \"Quirks Mode\" behandeln, was zu unerwartetem Verhalten führt." },
          { type: "li", text: "<strong>Inhalte im head platzieren:</strong> Text, Bilder und Buttons sollten in <code>&lt;body&gt;</code> platziert werden, nicht in <code>&lt;head&gt;</code>. Der head ist nur für Metadaten." },
          { type: "li", text: "<strong>Falsches Verschachteln von Tags:</strong> Schreiben von <code>&lt;b&gt;&lt;i&gt;Text&lt;/b&gt;&lt;/i&gt;</code> anstelle von <code>&lt;b&gt;&lt;i&gt;Text&lt;/i&gt;&lt;/b&gt;</code>. Das innere Tag muss zuerst geschlossen werden." }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Verwenden Sie immer &lt;!DOCTYPE html&gt;:</strong> Stellen Sie sicher, dass es die erste Zeile in der Datei ist." },
          { type: "li", text: "<strong>Verwenden Sie Großbuchstaben für Abkürzungen:</strong> Wie <code>HTML</code>, <code>DOCTYPE</code> und <code>UTF-8</code> - nicht erforderlich, aber gängige Praxis." },
          { type: "li", text: "<strong>Verwenden Sie doppelte Anführungszeichen für Attribute:</strong> Wie <code>lang=\"ar\"</code> anstelle von <code>lang='ar'</code>." },
          { type: "li", text: "<strong>Schließen Sie immer alle Tags:</strong> Sogar leere Tags wie <code>&lt;br&gt;</code> und <code>&lt;img&gt;</code> werden in XHTML bevorzugt als <code>&lt;br /&gt;</code> und <code>&lt;img /&gt;</code> geschrieben." },
          { type: "li", text: "<strong>Verwenden Sie semantische Tags:</strong> Wie <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> und <code>&lt;main&gt;</code> anstelle von <code>&lt;div&gt;</code> für alles." },
          { type: "li", text: "<strong>Schreiben Sie beschreibende Kommentare:</strong> Verwenden Sie Kommentare, um komplexe Teile zu erklären: <code>&lt;!-- Dies ist der Seitenheader --&gt;</code>" }
        ]
      },
      {
        title: "Zusammenfassung der Lektion",
        content: [
          { type: "li", text: "<strong>HTML</strong> ist eine Auszeichnungssprache, die dem Inhalt Struktur und Bedeutung gibt." },
          { type: "li", text: "HTML wird verwendet, um die <strong>Struktur</strong> jeder Webseite zu erstellen." },
          { type: "li", text: "Tags haben die Form <code>&lt;tagname&gt;Inhalt&lt;/tagname&gt;</code>" },
          { type: "li", text: "Jede HTML-Seite beginnt mit <code>&lt;!DOCTYPE html&gt;</code>" },
          { type: "li", text: "Die Seite hat zwei Hauptteile: <code>&lt;head&gt;</code> (Informationen) und <code>&lt;body&gt;</code> (sichtbarer Inhalt)" },
          { type: "li", text: "HTML allein kein schönes Design - seine Rolle ist nur die <strong>Struktur</strong>. Design ist CSS's Rolle." }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist die Hauptrolle von HTML?",
        options: [
          "Farben und Schriftarten auf der Seite gestalten",
          "Interaktivität und Berechnungen zur Seite hinzufügen",
          "Dem Inhalt Struktur und Bedeutung geben",
          "Eine Datenbank verwalten"
        ],
        explanation: "HTML ist verantwortlich für die Seitenstruktur und die Bedeutung seines Inhalts (Bestimmen, was eine Überschrift, ein Absatz, ein Link usw. ist). Gestaltung ist CSS's Rolle, und Interaktivität ist JavaScript's Rolle."
      },
      {
        question: "Wo wird der sichtbare Inhalt der Seite platziert (Text, Bilder, Buttons)?",
        options: [
          "In <code>&lt;head&gt;</code>",
          "In <code>&lt;body&gt;</code>",
          "In <code>&lt;html&gt;</code>",
          "In <code>&lt;title&gt;</code>"
        ],
        explanation: "Alles, was der Benutzer auf der Seite sieht, wird innerhalb des <code>&lt;body&gt;</code>-Tags platziert. Der <code>&lt;head&gt;</code> enthält nur Metadaten wie den Titel und den Zeichensatz."
      },
      {
        question: "Welches Tag teilt dem Browser mit, dass die Sprache Arabisch ist und die Richtung von rechts nach links?",
        options: [
          "<code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code>",
          "<code>&lt;html lang=\"en\" dir=\"ltr\"&gt;</code>",
          "<code>&lt;body lang=\"ar\"&gt;</code>",
          "<code>&lt;meta charset=\"ar\"&gt;</code>"
        ],
        explanation: "Das Tag <code>&lt;html lang=\"ar\" dir=\"rtl\"&gt;</code> teilt dem Browser die Sprache (ar = Arabisch) und die Textrichtung (rtl = von rechts nach links) mit."
      }
    ],
    challenge: {
      title: "Herausforderung: Erste HTML-Seite",
      description: "Erstellen Sie eine neue HTML-Datei namens <code>index.html</code> mit: 1. einer Hauptüberschrift <code>&lt;h1&gt;</code> mit Ihrem Namen, 2. einem Absatz <code>&lt;p&gt;</code>, der sich vorstellt, 3. einer ungeordneten Liste <code>&lt;ul&gt;</code> mit drei Ihrer Hobbys."
    },
    cheatSheet: {
      title: "HTML-Spickzettel - Lektion 1",
      items: [
        { term: "<code>&lt;!DOCTYPE html&gt;</code>", definition: "Gibt den Dokumenttyp an" },
        { term: "<code>&lt;html&gt;</code>", definition: "Das Root-Element" },
        { term: "<code>&lt;head&gt;</code>", definition: "Seitenmetadaten" },
        { term: "<code>&lt;body&gt;</code>", definition: "Sichtbarer Inhalt" },
        { term: "<code>&lt;title&gt;</code>", definition: "Tab-Titel" },
        { term: "<code>&lt;meta&gt;</code>", definition: "Metadaten-Informationen" }
      ]
    }
  }
};

export default translations;