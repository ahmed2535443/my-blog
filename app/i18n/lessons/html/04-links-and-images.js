const translations = {
  ar: {
    sections: [
      {
        title: "ما هي علامة الارتباط؟",
        content: [
          { type: "p", text: "الروابط هي واحدة من أهم ميزات الويب. بدون الروابط، كل صفحة ويب ستكون معزولة عن الأخرى. <strong>علامة الارتباط</strong> هي العلامة التي تحوّل أي عنصر إلى رابط تفاعلي يمكنك النقر عليه للانتقال إلى صفحة أخرى أو موضع آخر في الصفحة نفسها." },
          { type: "p", text: "اسم \"الارتباط\" يأتي من فكرة أن الرابط \"يرسو\" مكاناً محدداً على الإنترنت، مثل المرساة التي تحجز السفينة في مكان واحد." },
          { type: "callout", title: "تشبيه", text: "تخيّل أنك تكتب رسالة وتريد أن تحدد كلمة \"انقر هنا\" لتحويلها إلى رابط ينقلك إلى صفحة أخرى. علامة <code>&lt;a&gt;</code> تفعل هذا بالضبط، لكن بدلاً من \"انقر هنا\"، تحدد وجهة الرابط باستخدام خاصية <code>href</code>." }
        ]
      },
      {
        title: "لماذا نستخدم الروابط؟",
        content: [
          { type: "p", text: "الروابط تحل مشكلة أساسية على الويب: <strong>كيف ننتقل من صفحة إلى أخرى؟</strong>" },
          { type: "p", text: "بدون الروابط، الويب سيكون مجرد مجموعة صفحات معزولة. الروابط هي ما يخلق \"الشبكة\" في شبكة الإنترنت العالمية:" },
          { type: "li", text: "<strong>التنقل بين الصفحات:</strong> الانتقال من الصفحة الرئيسية إلى صفحة \"من نحن\" أو \"اتصل بنا\"" },
          { type: "li", text: "<strong>القفز إلى نفس الصفحة:</strong> التمرير إلى قسم محدد في صفحة طويلة (مثل جدول المحتويات)" },
          { type: "li", text: "<strong>تنزيل الملفات:</strong> رابط لتنزيل ملف PDF أو صورة" },
          { type: "li", text: "<strong>فتح البريد الإلكتروني:</strong> رابط يفتح برنامج البريد الإلكتروني تلقائياً" },
          { type: "li", text: "<strong>المكالمات الهاتفية:</strong> رابط يبدأ مكالمة هاتفية" },
          { type: "li", text: "<strong>تحسين SEO:</strong> محركات البحث تتبع الروابط لاكتشاف صفحات جديدة" }
        ]
      },
      {
        title: "أنواع الروابط",
        content: [
          { type: "h3", text: "1. الروابط الداخلية" },
          { type: "p", text: "تربط بين صفحات مختلفة في نفس الموقع:" },
          { type: "h3", text: "2. الروابط الخارجية" },
          { type: "p", text: "تفتح صفحات في مواقع أخرى:" },
          { type: "h3", text: "3. الروابط المensurable" },
          { type: "p", text: "تنقل إلى موضع محدد داخل الصفحة نفسها:" },
          { type: "h3", text: "4. روابط البريد الإلكتروني" },
          { type: "p", text: "تفتح برنامج البريد الإلكتروني:" },
          { type: "h3", text: "5. روابط الملفات" },
          { type: "p", text: "تنزيل ملفات مباشرة:" }
        ]
      },
      {
        title: "الصور وأنواعها",
        content: [
          { type: "p", text: "الصور تجعل صفحات الويب أكثر جاذبية. في HTML، نستخدم علامة <code>&lt;img&gt;</code> لإدراج الصور." },
          { type: "h3", text: "أنواع الصور الشائعة" },
          { type: "li", text: "<strong>JPG/JPEG:</strong> مناسبة للصور الفوتوغرافية (خلفية معقدة)" },
          { type: "li", text: "<strong>PNG:</strong> دعم الشفافية وصور عالية الدقة" },
          { type: "li", text: "<strong>GIF:</strong> للصور المتحركة" },
          { type: "li", text: "<strong>SVG:</strong> للرسومات المتجهة (الأيقونات والشعارات)" },
          { type: "li", text: "<strong>WebP:</strong> تنسيق حديث بضغط أفضل" },
          { type: "callout", title: "نصيحة", text: "استخدم <strong>WebP</strong> إذا أمكن (أفضل ضغط)، و<strong>PNG</strong> للصور التي تحتاج شفافية، و<strong>JPG</strong> للصور الفوتوغرافية العادية." }
        ]
      },
      {
        title: "نص alt للصور",
        content: [
          { type: "p", text: "خاصية <code>alt</code> مهمة جداً لعدة أسباب:" },
          { type: "li", text: "<strong>إمكانية الوصول:</strong> قارئ الشاشة يقرأ نص alt بدلاً من الصورة للمستخدمين ذوي الإعاقة البصرية." },
          { type: "li", text: "<strong>SEO:</strong> محركات البحث تستخدم alt لفهم محتوى الصورة." },
          { type: "li", text: "<strong>الخطأ:</strong> إذا فشل تحميل الصورة، يظهر نص alt بدلاً منها." },
          { type: "callout", title: "أفضل الممارسات لنص alt", text: "اكتب وصفاً دقيقاً ومختصراً للصورة. تجنب عبارات مثل \"صورة\" أو \"image\". مثال: <code>alt=\"قط أسود يلعب بكرة صوفية حمراء\"</code>." }
        ]
      },
      {
        title: "أفضل الممارسات",
        content: [
          { type: "li", text: "<strong>استخدم always text في الروابط الوصفية:</strong> \"اضغط هنا\" سيء. استخدم \"اقرأ المزيد عن HTML\"." },
          { type: "li", text: "<strong>افتح الروابط الخارجية في تبويب جديد:</strong> استخدم <code>target=\"_blank\"</code> مع <code>rel=\"noopener noreferrer\"</code>." },
          { type: "li", text: "<strong>حدد أبعاد الصور:</strong> حدد width وheight لتجنب إعادة تخطيط الصفحة." },
          { type: "li", text: "<strong>استخدم always text في الصور التفاعلية:</strong> إذا كانت الصورة رابطاً، أضف alt وصفي." }
        ]
      },
      {
        title: "ملخص الدرس",
        content: [
          { type: "li", text: "الروابط: <code>&lt;a href=\"...\"&gt;</code>" },
          { type: "li", text: "الصور: <code>&lt;img src=\"...\" alt=\"...\" /&gt;</code>" },
          { type: "li", text: "الروابط الداخلية: استخدم <code>id</code> للوجهة" },
          { type: "li", text: "الروابط الخارجية: استخدم <code>target=\"_blank\"</code>" },
          { type: "li", text: "نص alt إجباري للصور (إمكانية الوصول + SEO)" }
        ]
      }
    ],
    quiz: [
      {
        question: "أي الخاصيات تُستخدم لتحديد وجهة الرابط؟",
        options: ["src", "href", "link", "url"],
        explanation: "خاصية href تُستخدم لتحديد وجهة الرابط (URL) في علامة الارتباط."
      },
      {
        question: "لماذا نستخدم نص alt في الصور؟",
        options: [
          "لتحسين مظهر الصفحة فقط",
          "لدعم إمكانية الوصول وSEO وعرض الصورة عند الخطأ",
          "لتحديد حجم الصورة",
          "لإضافة تأثيرات حركية للصورة"
        ],
        explanation: "نص alt مهم لثلاثة أسباب: إمكانية الوصول (قارئ الشاشة)، SEO (محركات البحث)، وعرض الصورة عند فشل التحميل."
      }
    ],
    challenge: {
      title: "تحدي: صفحة صور وروابط",
      description: "أنشئ صفحة HTML تحتوي على: 1. رابط رئيسي لصفحة أخرى، 2. رابط لقسم في الصفحة نفسها، 3. صورة بنص alt وصفي، 4. رابط صورة تنقل لصفحة أخرى، 5. رابط بريد إلكتروني."
    },
    cheatSheet: {
      title: "ملخص الروابط والصور",
      items: [
        { term: "<code>&lt;a href=\"url\"&gt;</code>", definition: "رابط ارتباط" },
        { term: "<code>target=\"_blank\"</code>", definition: "فتح في تبويب جديد" },
        { term: "<code>&lt;img src=\"url\" alt=\"text\" /&gt;</code>", definition: "إدراج صورة" },
        { term: "<code>alt</code>", definition: "نص بديل للصورة (إجباري)" },
        { term: "<code>width / height</code>", definition: "أبعاد الصورة" },
        { term: "<code>href=\"mailto:\"</code>", definition: "رابط بريد إلكتروني" },
        { term: "<code>href=\"tel:\"</code>", definition: "رابط اتصال هاتفي" }
      ]
    }
  },
  en: {
    sections: [
      {
        title: "What is the Anchor Tag?",
        content: [
          { type: "p", text: "Links are one of the most important features of the web. Without links, every web page would be isolated from the others. The <strong>Anchor Tag</strong> is the tag that converts any element into an interactive link you can click to navigate to another page or another position on the same page." },
          { type: "p", text: "The name \"Anchor\" comes from the idea that the link \"anchors\" a specific place on the internet, like an anchor that holds a ship in one place." },
          { type: "callout", title: "Analogy", text: "Imagine you're writing a letter and you want to mark the word \"click here\" to turn it into a link that takes you to another page. The <code>&lt;a&gt;</code> tag does exactly this, but instead of \"click here\", you specify the link's destination using the <code>href</code> attribute." }
        ]
      },
      {
        title: "Why Do We Use Links?",
        content: [
          { type: "p", text: "Links solve a fundamental problem on the web: <strong>how do we navigate from one page to another?</strong>" },
          { type: "p", text: "Without links, the web would just be a collection of isolated pages. Links are what create the \"web\" in World Wide Web:" },
          { type: "li", text: "<strong>Navigation between pages:</strong> Moving from the homepage to an \"About Us\" or \"Contact Us\" page" },
          { type: "li", text: "<strong>Jumping to the same page:</strong> Scrolling to a specific section on a long page (like a table of contents)" },
          { type: "li", text: "<strong>Downloading files:</strong> A link to download a PDF or image file" },
          { type: "li", text: "<strong>Opening email:</strong> A link that opens the email client automatically" },
          { type: "li", text: "<strong>Phone calls:</strong> A link that initiates a phone call" },
          { type: "li", text: "<strong>SEO improvement:</strong> Search engines follow links to discover new pages" }
        ]
      },
      {
        title: "The Problem Links Solve",
        content: [
          { type: "p", text: "Imagine you're on a web page and want to navigate to another page. Without the anchor tag, what options are available?" },
          { type: "li", text: "Typing a full URL in the address bar manually (impractical)" },
          { type: "li", text: "Using JavaScript for redirection (complex and unreliable)" },
          { type: "li", text: "Having no way to navigate (stuck on a page)" },
          { type: "p", text: "<strong>The <code>&lt;a&gt;</code> tag solves this problem simply.</strong> It gives you an interactive element you can click to navigate to any destination on the internet. The browser knows how to handle it and performs the navigation automatically." }
        ]
      },
      {
        title: "The href Attribute and Link Types",
        content: [
          { type: "p", text: "The essential attribute in the anchor tag is <code>href</code> (short for Hypertext REFerence). This attribute specifies the link's destination. There are several types of links:" },
          { type: "h3", text: "1. Absolute Links" },
          { type: "p", text: "A complete link containing the protocol, domain, and path. Works from anywhere in the world:" },
          { type: "h3", text: "2. Relative Links" },
          { type: "p", text: "A link that refers to a file within the same website relative to the current file's location:" },
          { type: "h3", text: "3. Internal Links (Anchors)" },
          { type: "p", text: "To navigate to a specific position on the same page, we use <code>#</code> followed by the target element's id:" },
          { type: "h3", text: "4. Email Links (mailto)" },
          { type: "p", text: "To add a link that opens the user's email client:" },
          { type: "h3", text: "5. Phone Links (tel)" },
          { type: "p", text: "To add a link that initiates a phone call (useful for mobile devices):" },
          { type: "h3", text: "6. Download Links" },
          { type: "p", text: "To add a link to download a file instead of opening it:" }
        ]
      },
      {
        title: "The target Attribute - Where Does the Link Open?",
        content: [
          { type: "p", text: "The <code>target</code> attribute allows you to specify how and where the link opens when clicked:" },
          { type: "callout", title: "Important Security Warning", text: "When using <code>target=\"_blank\"</code>, the new page opens in the same context as the original page. This is a security vulnerability called <strong>Tabnabbing</strong>. The fix is to always add <code>rel=\"noopener noreferrer\"</code> with <code>_blank</code>." },
          { type: "p", text: "Meaning of <code>rel=\"noopener noreferrer\"</code>:" },
          { type: "li", text: "<strong>noopener:</strong> Prevents the new page from accessing window.opener (the original page). This protects you from Tabnabbing attacks." },
          { type: "li", text: "<strong>noreferrer:</strong> Prevents sending referrer information to the opened page. Improves privacy." }
        ]
      },
      {
        title: "The Image Tag (img) - Essentials",
        content: [
          { type: "p", text: "The <code>&lt;img&gt;</code> tag is used to display images on a web page. This is an <strong>empty</strong> tag (Empty Element) - it doesn't need a closing tag because the content is the image itself." },
          { type: "h3", text: "Essential Attributes for &lt;img&gt;" },
          { type: "li", text: "<strong><code>src</code> (Source):</strong> The image path (required). Can be relative, absolute, or an external URL." },
          { type: "li", text: "<strong><code>alt</code> (Alternative Text):</strong> Alternative text displayed when the image doesn't load (required). Very important for accessibility and search engines." },
          { type: "li", text: "<strong><code>width</code>:</strong> Image width in pixels." },
          { type: "li", text: "<strong><code>height</code>:</strong> Image height in pixels." },
          { type: "li", text: "<strong><code>loading</code>:</strong> Controls how the image loads. The <code>lazy</code> value loads the image only when it's near the viewport (performance improvement)." }
        ]
      },
      {
        title: "Responsive Images",
        content: [
          { type: "p", text: "Responsive images are images that adapt to different screen sizes. Instead of displaying a large image on a small phone (slow to load) or a small image on a large screen (blurry), we use HTML attributes to provide the appropriate image for each device." },
          { type: "callout", title: "Why Is This Important?", text: "Loading a very large image on a mobile phone slows down the page and consumes the user's data. Responsive images significantly improve website performance and user experience across all devices." }
        ]
      },
      {
        title: "Figure and Figcaption - Semantic Images",
        content: [
          { type: "p", text: "The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements give images <strong>meaning</strong> and a <strong>descriptive caption</strong>. These are important tags for improving accessibility and SEO." }
        ]
      },
      {
        title: "Images Inside Links (Linked Images)",
        content: [
          { type: "p", text: "You can make an image an interactive link by placing an <code>&lt;a&gt;</code> tag around the <code>&lt;img&gt;</code> tag. This is common practice for image thumbnails, tool icons, and logos." },
          { type: "callout", title: "Accessibility Warning", text: "When placing an image inside a link, make sure the image's <code>alt</code> text describes the link's destination, not just the image. Users who use screen readers rely on the alt text to understand where they'll be clicking." }
        ]
      },
      {
        title: "SVG Images - Vector Graphics",
        content: [
          { type: "p", text: "<strong>SVG</strong> (Scalable Vector Graphics) is a vector graphics format. The main difference from raster images (JPG, PNG) is that SVG doesn't lose quality when scaled up or down, because it's based on mathematical equations rather than pixels." },
          { type: "h3", text: "When Should We Use SVG?" },
          { type: "li", text: "<strong>Icons and logos:</strong> Because they need small sizes and stay sharp at any scale" },
          { type: "li", text: "<strong>Simple graphics:</strong> Charts and geometric shapes" },
          { type: "li", text: "<strong>Images that need effects:</strong> SVG supports CSS and JavaScript directly" },
          { type: "li", text: "<strong>Performance improvement:</strong> SVG files are usually smaller than PNG or JPG for simple graphics" },
          { type: "callout", title: "Did You Know?", text: "Google, Twitter, and YouTube logos on the internet are all in SVG format. You can see this by right-clicking on any logo and selecting \"Inspect\"." }
        ]
      },
      {
        title: "Handling Broken Images (Error Handling)",
        content: [
          { type: "p", text: "Sometimes images don't load due to a wrong path or missing file. The browser displays a placeholder icon at the original image size. We can handle this better:" },
          { type: "h3", text: "Tips to Avoid Broken Images" },
          { type: "li", text: "Always verify the image path is correct" },
          { type: "li", text: "Use filenames without spaces or special characters" },
          { type: "li", text: "Separate names with dashes (-) or underscores (_)" },
          { type: "li", text: "Ensure the file extension is correct (jpg, png, webp, svg)" },
          { type: "li", text: "Always use lowercase in filenames" }
        ]
      },
      {
        title: "Practical Example: Simple Art Gallery",
        content: [
          { type: "p", text: "Let's combine everything we've learned in a practical example: an art gallery page with links and images:" }
        ]
      },
      {
        title: "What Happens Behind the Scenes?",
        content: [
          { type: "p", text: "When the browser reads link and image tags, the following happens:" },
          { type: "h3", text: "For Links (<code>&lt;a&gt;</code>):" },
          { type: "li", text: "Converts the element into an interactive element that can be clicked." },
          { type: "li", text: "Applies default styles: blue text with underline." },
          { type: "li", text: "When clicked, the browser reads the <code>href</code> value and performs the navigation." },
          { type: "li", text: "If the link is internal (#), the browser scrolls to the element with the target id." },
          { type: "h3", text: "For Images (<code>&lt;img&gt;</code>):" },
          { type: "li", text: "The browser starts loading the image from the path specified in <code>src</code>." },
          { type: "li", text: "If <code>width</code> and <code>height</code> are set, the browser reserves space for the image (prevents Layout Shift)." },
          { type: "li", text: "If the image fails to load, the browser displays a placeholder icon and shows the <code>alt</code> text next to it." },
          { type: "li", text: "If <code>loading=\"lazy\"</code> is set, the browser delays loading the image until the user scrolls near it." },
          { type: "li", text: "After the image loads successfully, it's displayed in its position." },
          { type: "callout", title: "Did You Know?", text: "The <code>width</code> and <code>height</code> attributes don't actually change the image size (you can do that with CSS), but they give the browser information about the image's aspect ratio in advance so other page elements don't shift when the image loads. This is called <strong>preventing Layout Shift</strong>." }
        ]
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "<strong>Forgetting the alt attribute:</strong> Writing <code>&lt;img src=\"photo.jpg\"&gt;</code> without <code>alt</code>. This is a mistake that hurts accessibility and SEO. Screen readers won't be able to describe the image to users with disabilities." },
          { type: "li", text: "<strong>Using <code>target=\"_blank\"</code> without <code>rel=\"noopener noreferrer\"</code>:</strong> This leaves a security vulnerability called Tabnabbing where the opened page can manipulate the original page." },
          { type: "li", text: "<strong>Using \"click here\" for link text:</strong> Writing <code>&lt;a href=\"...\"&gt;click here&lt;/a&gt;</code> is bad for SEO and accessibility. Use a descriptive phrase like <code>&lt;a href=\"...\"&gt;download annual report&lt;/a&gt;</code>." },
          { type: "li", text: "<strong>Not specifying image dimensions:</strong> Not using <code>width</code> and <code>height</code> causes Layout Shift when images load." },
          { type: "li", text: "<strong>Using images that are too large:</strong> A 5MB JPEG displayed as a 32×32 pixel icon. Use the appropriate size for the required display size." },
          { type: "li", text: "<strong>Using raster images for icons:</strong> Using PNG or JPG for icons reduces quality when scaled. Use SVG for icons and logos." }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Always write descriptive alt text:</strong> Describe what's in the image, not just \"image\"." },
          { type: "li", text: "<strong>Always set width and height:</strong> To prevent Layout Shift and improve performance." },
          { type: "li", text: "<strong>Use loading=\"lazy\" for non-urgent images:</strong> To improve initial load speed." },
          { type: "li", text: "<strong>Add rel=\"noopener noreferrer\" with target=\"_blank\":</strong> For security." },
          { type: "li", text: "<strong>Use appropriate formats:</strong> WebP for general images, SVG for icons, PNG for images needing transparency." },
          { type: "li", text: "<strong>Use figure and figcaption:</strong> When displaying images with descriptive captions." },
          { type: "li", text: "<strong>Make link text descriptive:</strong> Instead of \"click here\", use \"read more about HTML\"." },
          { type: "li", text: "<strong>Use responsive images:</strong> To improve display across all devices." }
        ]
      },
      {
        title: "Lesson Summary",
        content: [
          { type: "li", text: "The <strong>anchor tag <code>&lt;a&gt;</code></strong> converts any element into an interactive link" },
          { type: "li", text: "The <code>href</code> attribute specifies the link's destination (absolute, relative, internal, mailto, tel)" },
          { type: "li", text: "The <code>target=\"_blank\"</code> attribute opens the link in a new tab" },
          { type: "li", text: "Always add <code>rel=\"noopener noreferrer\"</code> with <code>target=\"_blank\"</code>" },
          { type: "li", text: "The <strong>image tag <code>&lt;img&gt;</code></strong> displays images - an empty tag that doesn't need closing" },
          { type: "li", text: "The <code>src</code> attribute is the image path and <code>alt</code> is the alternative text (both required)" },
          { type: "li", text: "Use <code>width</code> and <code>height</code> to prevent Layout Shift" },
          { type: "li", text: "Use <code>loading=\"lazy\"</code> to improve performance" },
          { type: "li", text: "<code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> give images meaning and descriptive captions" },
          { type: "li", text: "SVG is excellent for icons because they stay sharp at any scale" }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the required attribute in the img tag?",
        options: [
          "width and height only",
          "src and alt",
          "src only",
          "alt and loading"
        ],
        explanation: "The src (image path) and alt (alternative text) attributes are required in the img tag. src specifies where the image is, and alt provides alternative text when the image doesn't load or for screen readers."
      },
      {
        question: "Why do we use rel=\"noopener noreferrer\" with target=\"_blank\"?",
        options: [
          "To improve loading speed",
          "To make the link bold",
          "To protect the page from Tabnabbing vulnerability",
          "To make the link open in the same tab"
        ],
        explanation: "When using target=\"_blank\", the new page gets a reference to the original page via window.opener. noopener prevents this, and noreferrer prevents sending referrer information. Together they protect against Tabnabbing attacks."
      },
      {
        question: "What is the difference between an absolute link and a relative link?",
        options: [
          "There is no difference between them",
          "Absolute contains full protocol (https://...), relative refers to a file in the same website",
          "Absolute is faster than relative",
          "Relative works outside the website and absolute only inside it"
        ],
        explanation: "An absolute link contains the full protocol and domain (like https://example.com/about) and works from anywhere. A relative link refers to a file relative to the current file's location (like about.html or ../index.html)."
      }
    ],
    challenge: {
      title: "Challenge: Personal Photo Gallery Page",
      description: "Create an HTML page containing a personal photo gallery with: 1. A logo at the top that is an image inside a link to the homepage, 2. A navigation menu with internal links (#), 3. Three sections, each containing an image with &lt;figure&gt; and &lt;figcaption&gt;, 4. An external link to another page (like Wikipedia) that opens in a new tab with rel=\"noopener noreferrer\", 5. An email link and phone link in the contact section."
    },
    cheatSheet: {
      title: "Links and Images Cheat Sheet",
      items: [
        { term: "<code>&lt;a href=\"url\"&gt;</code>", definition: "Basic link" },
        { term: "<code>target=\"_blank\"</code>", definition: "Opens in new tab" },
        { term: "<code>rel=\"noopener noreferrer\"</code>", definition: "Security with _blank" },
        { term: "<code>href=\"#id\"</code>", definition: "Internal page link" },
        { term: "<code>href=\"mailto:...\"</code>", definition: "Email link" },
        { term: "<code>href=\"tel:...\"</code>", definition: "Phone link" },
        { term: "<code>download</code>", definition: "Download file" },
        { term: "<code>&lt;img src=\"...\" alt=\"...\" /&gt;</code>", definition: "Basic image" },
        { term: "<code>width / height</code>", definition: "Image dimensions" },
        { term: "<code>loading=\"lazy\"</code>", definition: "Lazy loading" },
        { term: "<code>&lt;figure&gt;</code>", definition: "Image with caption" },
        { term: "<code>&lt;svg&gt;</code>", definition: "Vector graphics" }
      ]
    }
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que la balise Anchor ?",
        content: [
          { type: "p", text: "Les liens sont l'une des fonctionnalités les plus importantes du web. Sans liens, chaque page web serait isolée des autres. La <strong>balise Anchor</strong> est la balise qui convertit n'importe quel élément en un lien interactif sur lequel vous pouvez cliquer pour naviguer vers une autre page ou une autre position sur la même page." },
          { type: "p", text: "Le nom \"Anchor\" (ancre) vient de l'idée que le lien \"ancre\" un endroit spécifique sur Internet, comme une ancre qui maintient un navage en un seul endroit." },
          { type: "callout", title: "Analogie", text: "Imaginez que vous écrivez une lettre et que vous voulez marquer le mot \"cliquez ici\" pour le transformer en lien qui vous emmène vers une autre page. La balise <code>&lt;a&gt;</code> fait exactement cela, mais au lieu de \"cliquez ici\", vous spécifiez la destination du lien avec l'attribut <code>href</code>." }
        ]
      },
      {
        title: "Pourquoi utilisons-nous les liens ?",
        content: [
          { type: "p", text: "Les liens résolvent un problème fondamental sur le web : <strong>comment naviguer d'une page à une autre ?</strong>" },
          { type: "p", text: "Sans liens, le web ne serait qu'une collection de pages isolées. Les liens créent le \"web\" dans World Wide Web :" },
          { type: "li", text: "<strong>Navigation entre les pages :</strong> Passer de la page d'accueil à une page \"À propos\" ou \"Contactez-nous\"" },
          { type: "li", text: "<strong>Sauter à la même page :</strong> Défiler vers une section spécifique sur une page longue (comme une table des matières)" },
          { type: "li", text: "<strong>Télécharger des fichiers :</strong> Un lien pour télécharger un fichier PDF ou image" },
          { type: "li", text: "<strong>Ouvrir un e-mail :</strong> Un lien qui ouvre automatiquement le client de messagerie" },
          { type: "li", text: "<strong>Appels téléphoniques :</strong> Un lien qui initie un appel téléphonique" },
          { type: "li", text: "<strong>Amélioration SEO :</strong> Les moteurs de recherche suivent les liens pour découvrir de nouvelles pages" }
        ]
      },
      {
        title: "Le problème que les liens résolvent",
        content: [
          { type: "p", text: "Imaginez que vous êtes sur une page web et que vous voulez naviguer vers une autre page. Sans la balise anchor, quelles options sont disponibles ?" },
          { type: "li", text: "Taper une URL complète dans la barre d'adresse manuellement (impratique)" },
          { type: "li", text: "Utiliser JavaScript pour la redirection (complexe et peu fiable)" },
          { type: "li", text: "N'avoir aucun moyen de naviguer (bloqué sur une page)" },
          { type: "p", text: "<strong>La balise <code>&lt;a&gt;</code> résout ce problème simplement.</strong> Elle vous donne un élément interactif sur lequel vous pouvez cliquer pour naviguer vers n'importe quelle destination sur Internet. Le navigateur sait comment le gérer et effectue la navigation automatiquement." }
        ]
      },
      {
        title: "L'attribut href et les types de liens",
        content: [
          { type: "p", text: "L'attribut essentiel dans la balise anchor est <code>href</code> (abréviation de Hypertext REFerence). Cet attribut spécifie la destination du lien. Il existe plusieurs types de liens :" },
          { type: "h3", text: "1. Liens absolus" },
          { type: "p", text: "Un lien complet contenant le protocole, le domaine et le chemin. Fonctionne de n'importe où dans le monde :" },
          { type: "h3", text: "2. Liens relatifs" },
          { type: "p", text: "Un lien qui fait référence à un fichier dans le même site web par rapport à l'emplacement du fichier actuel :" },
          { type: "h3", text: "3. Liens internes (Ancres)" },
          { type: "p", text: "Pour naviguer vers une position spécifique sur la même page, nous utilisons <code>#</code> suivi de l'id de l'élément cible :" },
          { type: "h3", text: "4. Liens e-mail (mailto)" },
          { type: "p", text: "Pour ajouter un lien qui ouvre le client de messagerie de l'utilisateur :" },
          { type: "h3", text: "5. Liens téléphoniques (tel)" },
          { type: "p", text: "Pour ajouter un lien qui initie un appel téléphonique (utile pour les appareils mobiles) :" },
          { type: "h3", text: "6. Liens de téléchargement" },
          { type: "p", text: "Pour ajouter un lien pour télécharger un fichier au lieu de l'ouvrir :" }
        ]
      },
      {
        title: "L'attribut target - Où s'ouvre le lien ?",
        content: [
          { type: "p", text: "L'attribut <code>target</code> vous permet de spécifier comment et où le lien s'ouvre lorsqu'on clique dessus :" },
          { type: "callout", title: "Avertissement de sécurité important", text: "Lors de l'utilisation de <code>target=\"_blank\"</code>, la nouvelle page s'ouvre dans le même contexte que la page originale. C'est une vulnérabilité de sécurité appelée <strong>Tabnabbing</strong>. La solution est d'ajouter toujours <code>rel=\"noopener noreferrer\"</code> avec <code>_blank</code>." },
          { type: "p", text: "Signification de <code>rel=\"noopener noreferrer\"</code> :" },
          { type: "li", text: "<strong>noopener :</strong> Empêche la nouvelle page d'accéder à window.opener (la page originale). Cela vous protège des attaques Tabnabbing." },
          { type: "li", text: "<strong>noreferrer :</strong> Empêche l'envoi d'informations de referer à la page ouverte. Améliore la confidentialité." }
        ]
      },
      {
        title: "La balise image (img) - Essentiels",
        content: [
          { type: "p", text: "La balise <code>&lt;img&gt;</code> est utilisée pour afficher des images sur une page web. C'est une balise <strong>vide</strong> (Empty Element) - elle n'a pas besoin de balise de fermeture car le contenu est l'image elle-même." },
          { type: "h3", text: "Attributs essentiels pour &lt;img&gt;" },
          { type: "li", text: "<strong><code>src</code> (Source) :</strong> Le chemin de l'image (requis). Peut être relatif, absolu ou une URL externe." },
          { type: "li", text: "<strong><code>alt</code> (Texte alternatif) :</strong> Texte alternatif affiché lorsque l'image ne se charge pas (requis). Très important pour l'accessibilité et les moteurs de recherche." },
          { type: "li", text: "<strong><code>width</code> :</strong> Largeur de l'image en pixels." },
          { type: "li", text: "<strong><code>height</code> :</strong> Hauteur de l'image en pixels." },
          { type: "li", text: "<strong><code>loading</code> :</strong> Contrôle comment l'image se charge. La valeur <code>lazy</code> charge l'image uniquement lorsqu'elle est proche du viewport (amélioration des performances)." }
        ]
      },
      {
        title: "Images responsives",
        content: [
          { type: "p", text: "Les images responsives sont des images qui s'adaptent à différentes tailles d'écran. Au lieu d'afficher une grande image sur un petit téléphone (lent à charger) ou une petite image sur un grand écran (floue), nous utilisons des attributs HTML pour fournir l'image appropriée pour chaque appareil." },
          { type: "callout", title: "Pourquoi est-ce important ?", text: "Charger une image très grande sur un téléphone ralentit la page et consomme les données de l'utilisateur. Les images responsives améliorent considérablement les performances du site et l'expérience utilisateur sur tous les appareils." }
        ]
      },
      {
        title: "Figure et Figcaption - Images sémantiques",
        content: [
          { type: "p", text: "Les éléments <code>&lt;figure&gt;</code> et <code>&lt;figcaption&gt;</code> donnent aux images un <strong>sens</strong> et une <strong>légende descriptive</strong>. Ce sont des balises importantes pour améliorer l'accessibilité et le SEO." }
        ]
      },
      {
        title: "Images dans les liens (Images liées)",
        content: [
          { type: "p", text: "Vous pouvez rendre une image un lien interactif en plaçant une balise <code>&lt;a&gt;</code> autour de la balise <code>&lt;img&gt;</code>. C'est une pratique courante pour les miniatures d'images, les icônes d'outils et les logos." },
          { type: "callout", title: "Avertissement d'accessibilité", text: "Lorsque vous placez une image dans un lien, assurez-vous que le texte <code>alt</code> de l'image décrit la destination du lien, pas seulement l'image. Les utilisateurs qui utilisent des lecteurs d'écran se fient au texte alt pour comprendre où ils vont cliquer." }
        ]
      },
      {
        title: "Images SVG - Graphiques vectoriels",
        content: [
          { type: "p", text: "<strong>SVG</strong> (Scalable Vector Graphics) est un format de graphiques vectoriels. La principale différence par rapport aux images matricielles (JPG, PNG) est que SVG ne perd pas de qualité lorsqu'il est mis à l'échelle, car il est basé sur des équations mathématiques plutôt que des pixels." },
          { type: "h3", text: "Quand devrions-nous utiliser SVG ?" },
          { type: "li", text: "<strong>Icônes et logos :</strong> Parce qu'ils ont besoin de petites tailles et restent nets à toute échelle" },
          { type: "li", text: "<strong>Graphiques simples :</strong> Diagrammes et formes géométriques" },
          { type: "li", text: "<strong>Images nécessitant des effets :</strong> SVG supporte CSS et JavaScript directement" },
          { type: "li", text: "<strong>Amélioration des performances :</strong> Les fichiers SVG sont généralement plus petits que PNG ou JPG pour les graphiques simples" },
          { type: "callout", title: "Le saviez-vous ?", text: "Les logos de Google, Twitter et YouTube sur Internet sont tous au format SVG. Vous pouvez le voir en cliquant droit sur n'importe quel logo et en sélectionnant \"Inspecter\"." }
        ]
      },
      {
        title: "Gestion des images cassées (Error Handling)",
        content: [
          { type: "p", text: "Parfois les images ne se chargent pas à cause d'un mauvais chemin ou d'un fichier manquant. Le navigateur affiche une icône de remplacement à la taille originale de l'image. Nous pouvons gérer cela mieux :" },
          { type: "h3", text: "Conseils pour éviter les images cassées" },
          { type: "li", text: "Vérifiez toujours que le chemin de l'image est correct" },
          { type: "li", text: "Utilisez des noms de fichiers sans espaces ou caractères spéciaux" },
          { type: "li", text: "Séparez les noms avec des tirets (-) ou des underscores (_)" },
          { type: "li", text: "Assurez-vous que l'extension du fichier est correcte (jpg, png, webp, svg)" },
          { type: "li", text: "Utilisez toujours des minuscules dans les noms de fichiers" }
        ]
      },
      {
        title: "Exemple pratique : Galerie d'art simple",
        content: [
          { type: "p", text: "Combinons tout ce que nous avons appris dans un exemple pratique : une page de galerie d'art avec des liens et des images :" }
        ]
      },
      {
        title: "Que se passe-t-il en coulisses ?",
        content: [
          { type: "p", text: "Quand le navigateur lit les balises de liens et d'images, voici ce qui se passe :" },
          { type: "h3", text: "Pour les liens (<code>&lt;a&gt;</code>) :" },
          { type: "li", text: "Convertit l'élément en un élément interactif cliquable." },
          { type: "li", text: "Applique des styles par défaut : texte bleu avec soulignement." },
          { type: "li", text: "Lors du clic, le navigateur lit la valeur <code>href</code> et effectue la navigation." },
          { type: "li", text: "Si le lien est interne (#), le navigateur fait défiler vers l'élément avec l'id cible." },
          { type: "h3", text: "Pour les images (<code>&lt;img&gt;</code>) :" },
          { type: "li", text: "Le navigateur commence à charger l'image depuis le chemin spécifié dans <code>src</code>." },
          { type: "li", text: "Si <code>width</code> et <code>height</code> sont définis, le navigateur réserve l'espace pour l'image (évite le Layout Shift)." },
          { type: "li", text: "Si l'image ne se charge pas, le navigateur affiche une icône de remplacement et affiche le texte <code>alt</code> à côté." },
          { type: "li", text: "Si <code>loading=\"lazy\"</code> est défini, le navigateur retarde le chargement de l'image jusqu'à ce que l'utilisateur défile près d'elle." },
          { type: "li", text: "Après le chargement réussi de l'image, elle est affichée à sa position." },
          { type: "callout", title: "Le saviez-vous ?", text: "Les attributs <code>width</code> et <code>height</code> ne changent pas réellement la taille de l'image (vous pouvez le faire avec CSS), mais ils donnent au navigateur des informations sur le rapport d'aspect de l'image à l'avance pour que les autres éléments de la page ne se déplacent pas lors du chargement de l'image. C'est ce qu'on appelle <strong>prévenir le Layout Shift</strong>." }
        ]
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "<strong>Oublier l'attribut alt :</strong> Écrire <code>&lt;img src=\"photo.jpg\"&gt;</code> sans <code>alt</code>. C'est une erreur qui nuit à l'accessibilité et au SEO. Les lecteurs d'écran ne pourront pas décrire l'image aux utilisateurs handicapés." },
          { type: "li", text: "<strong>Utiliser <code>target=\"_blank\"</code> sans <code>rel=\"noopener noreferrer\"</code> :</strong> Cela laisse une vulnérabilité de sécurité appelée Tabnabbing où la page ouverte peut manipuler la page originale." },
          { type: "li", text: "<strong>Utiliser \"cliquez ici\" pour le texte du lien :</strong> Écrire <code>&lt;a href=\"...\"&gt;cliquez ici&lt;/a&gt;</code> est mauvais pour le SEO et l'accessibilité. Utilisez une phrase descriptive comme <code>&lt;a href=\"...\"&gt;télécharger le rapport annuel&lt;/a&gt;</code>." },
          { type: "li", text: "<strong>Ne pas spécifier les dimensions de l'image :</strong> Ne pas utiliser <code>width</code> et <code>height</code> cause le Layout Shift lors du chargement des images." },
          { type: "li", text: "<strong>Utiliser des images trop grandes :</strong> Un JPEG de 5Mo affiché comme icône de 32×32 pixels. Utilisez la taille appropriée pour la taille d'affichage requise." },
          { type: "li", text: "<strong>Utiliser des images matricielles pour les icônes :</strong> Utiliser PNG ou JPG pour les icônes réduit la qualité lors du redimensionnement. Utilisez SVG pour les icônes et les logos." }
        ]
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "<strong>Écrivez toujours un texte alt descriptif :</strong> Décrivez ce qui est dans l'image, pas seulement \"image\"." },
          { type: "li", text: "<strong>Définissez toujours width et height :</strong> Pour prévenir le Layout Shift et améliorer les performances." },
          { type: "li", text: "<strong>Utilisez loading=\"lazy\" pour les images non urgentes :</strong> Pour améliorer la vitesse de chargement initiale." },
          { type: "li", text: "<strong>Ajoutez rel=\"noopener noreferrer\" avec target=\"_blank\" :</strong> Pour la sécurité." },
          { type: "li", text: "<strong>Utilisez les formats appropriés :</strong> WebP pour les images générales, SVG pour les icônes, PNG pour les images nécessitant la transparence." },
          { type: "li", text: "<strong>Utilisez figure et figcaption :</strong> Lors de l'affichage d'images avec des légendes descriptives." },
          { type: "li", text: "<strong>Rendez le texte du lien descriptif :</strong> Au lieu de \"cliquez ici\", utilisez \"lire la suite sur HTML\"." },
          { type: "li", text: "<strong>Utilisez des images responsives :</strong> Pour améliorer l'affichage sur tous les appareils." }
        ]
      },
      {
        title: "Résumé de la leçon",
        content: [
          { type: "li", text: "La <strong>balise anchor <code>&lt;a&gt;</code></strong> convertit n'importe quel élément en lien interactif" },
          { type: "li", text: "L'attribut <code>href</code> spécifie la destination du lien (absolue, relative, interne, mailto, tel)" },
          { type: "li", text: "L'attribut <code>target=\"_blank\"</code> ouvre le lien dans un nouvel onglet" },
          { type: "li", text: "Ajoutez toujours <code>rel=\"noopener noreferrer\"</code> avec <code>target=\"_blank\"</code>" },
          { type: "li", text: "La <strong>balise image <code>&lt;img&gt;</code></strong> affiche les images - une balise vide qui n'a pas besoin de fermeture" },
          { type: "li", text: "L'attribut <code>src</code> est le chemin de l'image et <code>alt</code> est le texte alternatif (tous deux requis)" },
          { type: "li", text: "Utilisez <code>width</code> et <code>height</code> pour prévenir le Layout Shift" },
          { type: "li", text: "Utilisez <code>loading=\"lazy\"</code> pour améliorer les performances" },
          { type: "li", text: "<code>&lt;figure&gt;</code> et <code>&lt;figcaption&gt;</code> donnent aux images un sens et des légendes descriptives" },
          { type: "li", text: "SVG est excellent pour les icônes car elles restent nets à toute échelle" }
        ]
      }
    ],
    quiz: [
      {
        question: "Quel est l'attribut requis dans la balise img ?",
        options: [
          "width et height seulement",
          "src et alt",
          "src seulement",
          "alt et loading"
        ],
        explanation: "Les attributs src (chemin de l'image) et alt (texte alternatif) sont requis dans la balise img. src spécifie où se trouve l'image, et alt fournit du texte alternatif lorsque l'image ne se charge pas ou pour les lecteurs d'écran."
      },
      {
        question: "Pourquoi utilisons-nous rel=\"noopener noreferrer\" avec target=\"_blank\" ?",
        options: [
          "Pour améliorer la vitesse de chargement",
          "Pour rendre le lien en gras",
          "Pour protéger la page de la vulnérabilité Tabnabbing",
          "Pour que le lien s'ouvre dans le même onglet"
        ],
        explanation: "Lors de l'utilisation de target=\"_blank\", la nouvelle page obtient une référence à la page originale via window.opener. noopener empêche cela, et noreferrer empêche l'envoi d'informations de referer. Ensemble, ils protègent contre les attaques Tabnabbing."
      },
      {
        question: "Quelle est la différence entre un lien absolu et un lien relatif ?",
        options: [
          "Il n'y a pas de différence entre eux",
          "L'absolu contient le protocole complet (https://...), le relatif fait référence à un fichier dans le même site web",
          "L'absolu est plus rapide que le relatif",
          "Le relatif fonctionne en dehors du site et l'absolu à l'intérieur seulement"
        ],
        explanation: "Un lien absolu contient le protocole et le domaine complets (comme https://example.com/about) et fonctionne de n'importe où. Un lien relatif fait référence à un fichier par rapport à l'emplacement du fichier actuel (comme about.html ou ../index.html)."
      }
    ],
    challenge: {
      title: "Défi : Page de galerie photos personnelle",
      description: "Créez une page HTML contenant une galerie photos personnelle avec : 1. un logo en haut qui est une image dans un lien vers la page d'accueil, 2. un menu de navigation avec des liens internes (#), 3. trois sections, chaque section contenant une image avec &lt;figure&gt; et &lt;figcaption&gt;, 4. un lien externe vers une autre page (comme Wikipedia) qui s'ouvre dans un nouvel onglet avec rel=\"noopener noreferrer\", 5. un lien e-mail et un lien téléphonique dans la section contact."
    },
    cheatSheet: {
      title: "Fiche mémo Liens et Images",
      items: [
        { term: "<code>&lt;a href=\"url\"&gt;</code>", definition: "Lien basique" },
        { term: "<code>target=\"_blank\"</code>", definition: "Ouvre dans un nouvel onglet" },
        { term: "<code>rel=\"noopener noreferrer\"</code>", definition: "Sécurité avec _blank" },
        { term: "<code>href=\"#id\"</code>", definition: "Lien interne à la page" },
        { term: "<code>href=\"mailto:...\"</code>", definition: "Lien e-mail" },
        { term: "<code>href=\"tel:...\"</code>", definition: "Lien téléphonique" },
        { term: "<code>download</code>", definition: "Télécharger un fichier" },
        { term: "<code>&lt;img src=\"...\" alt=\"...\" /&gt;</code>", definition: "Image basique" },
        { term: "<code>width / height</code>", definition: "Dimensions de l'image" },
        { term: "<code>loading=\"lazy\"</code>", definition: "Chargement différé" },
        { term: "<code>&lt;figure&gt;</code>", definition: "Image avec légende" },
        { term: "<code>&lt;svg&gt;</code>", definition: "Graphiques vectoriels" }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Was ist der Anchor-Tag?",
        content: [
          { type: "p", text: "Links sind eine der wichtigsten Funktionen des Webs. Ohne Links wäre jede Webseite von den anderen isoliert. Der <strong>Anchor-Tag</strong> ist das Tag, das jedes Element in einen interaktiven Link verwandelt, auf den Sie klicken können, um zu einer anderen Seite oder einer anderen Position auf derselben Seite zu navigieren." },
          { type: "p", text: "Der Name \"Anchor\" (Anker) kommt von der Idee, dass der Link einen bestimmten Ort im Internet \"verankert\", wie ein Anker, der ein Schiff an einem Ort hält." },
          { type: "callout", title: "Analogie", text: "Stellen Sie sich vor, Sie schreiben einen Brief und möchten das Wort \"klicken Sie hier\" markieren, um es in einen Link zu verwandeln, der Sie zu einer anderen Seite bringt. Der <code>&lt;a&gt;</code>-Tag tut genau dies, aber anstatt \"klicken Sie hier\" geben Sie das Ziel des Links mit dem <code>href</code>-Attribut an." }
        ]
      },
      {
        title: "Warum verwenden wir Links?",
        content: [
          { type: "p", text: "Links lösen ein grundlegendes Problem im Web: <strong>Wie navigieren wir von einer Seite zur anderen?</strong>" },
          { type: "p", text: "Ohne Links wäre das Web nur eine Ansammlung isolierter Seiten. Links sind das, was das \"Web\" im World Wide Web erstellt:" },
          { type: "li", text: "<strong>Navigation zwischen Seiten:</strong> Von der Startseite zur \"Über uns\"- oder \"Kontakt\"-Seite wechseln" },
          { type: "li", text: "<strong>Zur selben Seite springen:</strong> Zu einem bestimmten Abschnitt auf einer langen Seite scrollen (wie ein Inhaltsverzeichnis)" },
          { type: "li", text: "<strong>Dateien herunterladen:</strong> Ein Link zum Herunterladen einer PDF- oder Bilddatei" },
          { type: "li", text: "<strong>E-Mail öffnen:</strong> Ein Link, der automatisch den E-Mail-Client öffnet" },
          { type: "li", text: "<strong>Telefonanrufe:</strong> Ein Link, der einen Telefonanruf initiiert" },
          { type: "li", text: "<strong>SEO-Verbesserung:</strong> Suchmaschinen folgen Links, um neue Seiten zu entdecken" }
        ]
      },
      {
        title: "Das Problem, das Links lösen",
        content: [
          { type: "p", text: "Stellen Sie sich vor, Sie sind auf einer Webseite und möchten zu einer anderen Seite navigieren. Ohne den Anchor-Tag, welche Optionen stehen zur Verfügung?" },
          { type: "li", text: "Eine vollständige URL manuell in der Adresszeile eingeben (unpraktisch)" },
          { type: "li", text: "JavaScript zur Weiterleitung verwenden (komplex und unzuverlässig)" },
          { type: "li", text: "Keine Möglichkeit zu navigieren (auf einer Seite gefangen)" },
          { type: "p", text: "<strong>Der <code>&lt;a&gt;</code>-Tag löst dieses Problem einfach.</strong> Er gibt Ihnen ein interaktives Element, auf das Sie klicken können, um zu jedem Ziel im Internet zu navigieren. Der Browser weiß, wie er damit umgehen soll, und führt die Navigation automatisch aus." }
        ]
      },
      {
        title: "Das href-Attribut und Link-Typen",
        content: [
          { type: "p", text: "Das wesentliche Attribut im Anchor-Tag ist <code>href</code> (Kurzform für Hypertext REFerence). Dieses Attribut gibt das Ziel des Links an. Es gibt mehrere Link-Typen:" },
          { type: "h3", text: "1. Absolute Links" },
          { type: "p", text: "Ein vollständiger Link mit Protokoll, Domain und Pfad. Funktioniert von überall auf der Welt:" },
          { type: "h3", text: "2. Relative Links" },
          { type: "p", text: "Ein Link, der sich auf eine Datei innerhalb derselben Website relativ zum Standort der aktuellen Datei bezieht:" },
          { type: "h3", text: "3. Interne Links (Anker)" },
          { type: "p", text: "Um zu einer bestimmten Position auf derselben Seite zu navigieren, verwenden wir <code>#</code> gefolgt von der id des Ziellelements:" },
          { type: "h3", text: "4. E-Mail-Links (mailto)" },
          { type: "p", text: "Um einen Link hinzuzufügen, der den E-Mail-Client des Benutzers öffnet:" },
          { type: "h3", text: "5. Telefon-Links (tel)" },
          { type: "p", text: "Um einen Link hinzuzufügen, der einen Telefonanruf initiiert (nützlich für Mobilgeräte):" },
          { type: "h3", text: "6. Download-Links" },
          { type: "p", text: "Um einen Link zum Herunterladen einer Datei hinzuzufügen, anstatt sie zu öffnen:" }
        ]
      },
      {
        title: "Das target-Attribut - Wo öffnet sich der Link?",
        content: [
          { type: "p", text: "Das <code>target</code>-Attribut ermöglicht es Ihnen zu spezifizieren, wie und wo sich der Link beim Klicken öffnet:" },
          { type: "callout", title: "Wichtige Sicherheitswarnung", text: "Bei Verwendung von <code>target=\"_blank\"</code> öffnet sich die neue Seite im selben Kontext wie die Originalseite. Dies ist eine Sicherheitslücke namens <strong>Tabnabbing</strong>. Die Lösung ist, immer <code>rel=\"noopener noreferrer\"</code> mit <code>_blank</code> hinzuzufügen." },
          { type: "p", text: "Bedeutung von <code>rel=\"noopener noreferrer\"</code>:" },
          { type: "li", text: "<strong>noopener:</strong> Verhindert, dass die neue Seite auf window.opener (die Originalseite) zugreift. Dies schützt Sie vor Tabnabbing-Angriffen." },
          { type: "li", text: "<strong>noreferrer:</strong> Verhindert das Senden von Referrer-Informationen an die geöffnete Seite. Verbessert die Privatsphäre." }
        ]
      },
      {
        title: "Das Image-Tag (img) - Grundlagen",
        content: [
          { type: "p", text: "Das <code>&lt;img&gt;</code>-Tag wird verwendet, um Bilder auf einer Webseite anzuzeigen. Dies ist ein <strong>leeres</strong> Tag (Empty Element) - es benötigt kein Schließungstag, da der Inhalt das Bild selbst ist." },
          { type: "h3", text: "Wesentliche Attribute für &lt;img&gt;" },
          { type: "li", text: "<strong><code>src</code> (Quelle):</strong> Der Bildpfad (erforderlich). Kann relativ, absolut oder eine externe URL sein." },
          { type: "li", text: "<strong><code>alt</code> (Alternativer Text):</strong> Alternativer Text, der angezeigt wird, wenn das Bild nicht geladen wird (erforderlich). Sehr wichtig für Barrierefreiheit und Suchmaschinen." },
          { type: "li", text: "<strong><code>width</code>:</strong> Bildbreite in Pixeln." },
          { type: "li", text: "<strong><code>height</code>:</strong> Bildhöhe in Pixeln." },
          { type: "li", text: "<strong><code>loading</code>:</strong> Steuert, wie das Bild geladen wird. Der Wert <code>lazy</code> lädt das Bild erst, wenn es nahe am Viewport ist (Leistungsverbesserung)." }
        ]
      },
      {
        title: "Responsive Bilder",
        content: [
          { type: "p", text: "Responsive Bilder sind Bilder, die sich an verschiedene Bildschirmgrößen anpassen. Anstatt ein großes Bild auf einem kleinen Telefon anzuzeigen (langsam beim Laden) oder ein kleines Bild auf einem großen Bildschirm (unscharf), verwenden wir HTML-Attribute, um das passende Bild für jedes Gerät bereitzustellen." },
          { type: "callout", title: "Warum ist das wichtig?", text: "Das Laden eines sehr großen Bildes auf einem Mobiltelefon verlangsamt die Seite und verbraucht die Daten des Benutzers. Responsive Bilder verbessern die Website-Leistung und das Benutzererlebnis auf allen Geräten erheblich." }
        ]
      },
      {
        title: "Figure und Figcaption - Semantische Bilder",
        content: [
          { type: "p", text: "Die Elemente <code>&lt;figure&gt;</code> und <code>&lt;figcaption&gt;</code> geben Bildern <strong>Bedeutung</strong> und eine <strong>beschreibende Bildunterschrift</strong>. Dies sind wichtige Tags zur Verbesserung der Barrierefreiheit und des SEO." }
        ]
      },
      {
        title: "Bilder innerhalb von Links (Verknüpfte Bilder)",
        content: [
          { type: "p", text: "Sie können ein Bild zu einem interaktiven Link machen, indem Sie ein <code>&lt;a&gt;</code>-Tag um das <code>&lt;img&gt;</code>-Tag platzieren. Dies ist gängige Praxis für Bildvorschaubilder, Werkzeug-Symbole und Logos." },
          { type: "callout", title: "Barrierefreiheits-Warnung", text: "Wenn Sie ein Bild in einen Link platzieren, stellen Sie sicher, dass der <code>alt</code>-Text des Bildes das Ziel des Links beschreibt, nicht nur das Bild. Benutzer, die Screenreader verwenden, verlassen sich darauf, um zu verstehen, wo sie klicken werden." }
        ]
      },
      {
        title: "SVG-Bilder - Vektorgrafiken",
        content: [
          { type: "p", text: "<strong>SVG</strong> (Scalable Vector Graphics) ist ein Vektorgrafikformat. Der Hauptunterschied zu Rasterbildern (JPG, PNG) ist, dass SVG beim Skalieren keine Qualität verliert, da es auf mathematischen Gleichungen basiert und nicht auf Pixeln." },
          { type: "h3", text: "Wann sollten wir SVG verwenden?" },
          { type: "li", text: "<strong>Symbole und Logos:</strong> Weil sie kleine Größen brauchen und bei jeder Skalierung scharf bleiben" },
          { type: "li", text: "<strong>Einfache Grafiken:</strong> Diagramme und geometrische Formen" },
          { type: "li", text: "<strong>Bilder mit Effekten:</strong> SVG unterstützt CSS und JavaScript direkt" },
          { type: "li", text: "<strong>Leistungsverbesserung:</strong> SVG-Dateien sind normalerweise kleiner als PNG oder JPG für einfache Grafiken" },
          { type: "callout", title: "Wussten Sie?", text: "Google-, Twitter- und YouTube-Logos im Internet sind alle im SVG-Format. Das können Sie sehen, indem Sie mit der rechten Maustaste auf ein Logo klicken und \"Untersuchen\" wählen." }
        ]
      },
      {
        title: "Umgang mit defekten Bildern (Fehlerbehandlung)",
        content: [
          { type: "p", text: "Manchmal werden Bilder wegen eines falschen Pfads oder fehlender Datei nicht geladen. Der Browser zeigt ein Platzhalter-Symbol in der ursprünglichen Bildgröße an. Wir können das besser handhaben:" },
          { type: "h3", text: "Tipps, um defekte Bilder zu vermeiden" },
          { type: "li", text: "Überprüfen Sie immer, ob der Bildpfad korrekt ist" },
          { type: "li", text: "Verwenden Sie Dateinamen ohne Leerzeichen oder Sonderzeichen" },
          { type: "li", text: "Trennen Sie Namen mit Bindestrichen (-) oder Unterstrichen (_)" },
          { type: "li", text: "Stellen Sie sicher, dass die Dateierweiterung korrekt ist (jpg, png, webp, svg)" },
          { type: "li", text: "Verwenden Sie immer Kleinbuchstaben in Dateinamen" }
        ]
      },
      {
        title: "Praktisches Beispiel: Einfache Kunstgalerie",
        content: [
          { type: "p", text: "Lassen Sie uns alles, was wir gelernt haben, in einem praktischen Beispiel kombinieren: eine Kunstgalerie-Seite mit Links und Bildern:" }
        ]
      },
      {
        title: "Was passiert hinter den Kulissen?",
        content: [
          { type: "p", text: "Wenn der Browser Link- und Bild-Tags liest, passiert Folgendes:" },
          { type: "h3", text: "Für Links (<code>&lt;a&gt;</code>):" },
          { type: "li", text: "Verwandelt das Element in ein interaktives Element, auf das geklickt werden kann." },
          { type: "li", text: "Wendet Standardstile an: blauer Text mit Unterstreichung." },
          { type: "li", text: "Beim Klicken liest der Browser den <code>href</code>-Wert und führt die Navigation aus." },
          { type: "li", text: "Wenn der Link intern ist (#),滚动t der Browser zum Element mit der Ziel-id." },
          { type: "h3", text: "Für Bilder (<code>&lt;img&gt;</code>):" },
          { type: "li", text: "Der Browser beginnt, das Bild vom in <code>src</code> angegebenen Pfad zu laden." },
          { type: "li", text: "Wenn <code>width</code> und <code>height</code> gesetzt sind, reserviert der Browser Platz für das Bild (verhindert Layout Shift)." },
          { type: "li", text: "Wenn das Bild nicht geladen werden kann, zeigt der Browser ein Platzhalter-Symbol und den <code>alt</code>-Text daneben an." },
          { type: "li", text: "Wenn <code>loading=\"lazy\"</code> gesetzt ist, verzögert der Browser das Laden des Bildes, bis der Benutzer nahe genug scrollt." },
          { type: "li", text: "Nach dem erfolgreichen Laden wird das Bild an seiner Position angezeigt." },
          { type: "callout", title: "Wussten Sie?", text: "Die <code>width</code>- und <code>height</code>-Attribute ändern tatsächlich nicht die Bildgröße (das können Sie mit CSS tun), aber sie geben dem Browser im Voraus Informationen über das Seitenverhältnis des Bildes, damit sich andere Seitenelemente beim Laden des Bildes nicht verschieben. Dies nennt man <strong>Layout Shift verhindern</strong>." }
        ]
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "<strong>Vergessen des alt-Attributs:</strong> Schreiben von <code>&lt;img src=\"photo.jpg\"&gt;</code> ohne <code>alt</code>. Dies ist ein Fehler, der Barrierefreiheit und SEO beeinträchtigt. Screenreader können das Bild für Benutzer mit Behinderungen nicht beschreiben." },
          { type: "li", text: "<strong>Verwendung von <code>target=\"_blank\"</code> ohne <code>rel=\"noopener noreferrer\"</code>:</strong> Dies lässt eine Sicherheitslücke namens Tabnabbing offen, bei der die geöffnete Seite die Originalseite manipulieren kann." },
          { type: "li", text: "<strong>Verwendung von \"klicken Sie hier\" für Linktext:</strong> Schreiben von <code>&lt;a href=\"...\"&gt;klicken Sie hier&lt;/a&gt;</code> ist schlecht für SEO und Barrierefreiheit. Verwenden Sie eine beschreibende Phrase wie <code>&lt;a href=\"...\"&gt;Jahresbericht herunterladen&lt;/a&gt;</code>." },
          { type: "li", text: "<strong>Nicht spezifizieren von Bildabmessungen:</strong> Nicht verwenden von <code>width</code> und <code>height</code> verursacht Layout Shift beim Laden von Bildern." },
          { type: "li", text: "<strong>Verwendung von zu großen Bildern:</strong> Ein 5MB-JPEG als 32×32 Pixel-Symbol angezeigt. Verwenden Sie die passende Größe für die erforderliche Anzeigegröße." },
          { type: "li", text: "<strong>Verwendung von Rasterbildern für Symbole:</strong> Verwendung von PNG oder JPG für Symbole reduziert die Qualität beim Skalieren. Verwenden Sie SVG für Symbole und Logos." }
        ]
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "<strong>Schreiben Sie immer beschreibenden alt-Text:</strong> Beschreiben Sie, was auf dem Bild ist, nicht nur \"Bild\"." },
          { type: "li", text: "<strong>Setzen Sie immer width und height:</strong> Um Layout Shift zu verhindern und die Leistung zu verbessern." },
          { type: "li", text: "<strong>Verwenden Sie loading=\"lazy\" für nicht dringende Bilder:</strong> Um die anfängliche Ladezeit zu verbessern." },
          { type: "li", text: "<strong>Fügen Sie rel=\"noopener noreferrer\" mit target=\"_blank\" hinzu:</strong> Aus Sicherheitsgründen." },
          { type: "li", text: "<strong>Verwenden Sie geeignete Formate:</strong> WebP für allgemeine Bilder, SVG für Symbole, PNG für Bilder mit Transparenz." },
          { type: "li", text: "<strong>Verwenden Sie figure und figcaption:</strong> Bei der Anzeige von Bildern mit beschreibenden Bildunterschriften." },
          { type: "li", text: "<strong>Machen Sie Linktext beschreibend:</strong> Statt \"klicken Sie hier\" verwenden Sie \"mehr über HTML lesen\"." },
          { type: "li", text: "<strong>Verwenden Sie responsive Bilder:</strong> Um die Anzeige auf allen Geräten zu verbessern." }
        ]
      },
      {
        title: "Zusammenfassung der Lektion",
        content: [
          { type: "li", text: "Der <strong>Anchor-Tag <code>&lt;a&gt;</code></strong> verwandelt jedes Element in einen interaktiven Link" },
          { type: "li", text: "Das <code>href</code>-Attribut spezifiziert das Ziel des Links (absolut, relativ, intern, mailto, tel)" },
          { type: "li", text: "Das <code>target=\"_blank\"</code>-Attribut öffnet den Link in einem neuen Tab" },
          { type: "li", text: "Fügen Sie immer <code>rel=\"noopener noreferrer\"</code> mit <code>target=\"_blank\"</code> hinzu" },
          { type: "li", text: "Das <strong>Image-Tag <code>&lt;img&gt;</code></strong> zeigt Bilder - ein leeres Tag, das keine Schließung benötigt" },
          { type: "li", text: "Das <code>src</code>-Attribut ist der Bildpfad und <code>alt</code> ist der alternative Text (beide erforderlich)" },
          { type: "li", text: "Verwenden Sie <code>width</code> und <code>height</code>, um Layout Shift zu verhindern" },
          { type: "li", text: "Verwenden Sie <code>loading=\"lazy\"</code>, um die Leistung zu verbessern" },
          { type: "li", text: "<code>&lt;figure&gt;</code> und <code>&lt;figcaption&gt;</code> geben Bildern Bedeutung und beschreibende Bildunterschriften" },
          { type: "li", text: "SVG ist ausgezeichnet für Symbole, da sie bei jeder Skalierung scharf bleiben" }
        ]
      }
    ],
    quiz: [
      {
        question: "Was ist das erforderliche Attribut im img-Tag?",
        options: [
          "Nur width und height",
          "src und alt",
          "Nur src",
          "alt und loading"
        ],
        explanation: "Die Attribute src (Bildpfad) und alt (alternativer Text) sind im img-Tag erforderlich. src gibt an, wo das Bild ist, und alt stellt alternativen Text bereit, wenn das Bild nicht geladen wird oder für Screenreader."
      },
      {
        question: "Warum verwenden wir rel=\"noopener noreferrer\" mit target=\"_blank\"?",
        options: [
          "Um die Ladezeit zu verbessern",
          "Um den Link fett zu machen",
          "Um die Seite vor der Tabnabbing-Schwachstelle zu schützen",
          "Um den Link im selben Tab zu öffnen"
        ],
        explanation: "Bei Verwendung von target=\"_blank\" erhält die neue Seite eine Referenz zur Originalseite über window.opener. noopener verhindert dies, und noreferrer verhindert das Senden von Referrer-Informationen. Zusammen schützen sie vor Tabnabbing-Angriffen."
      },
      {
        question: "Was ist der Unterschied zwischen einem absoluten und einem relativen Link?",
        options: [
          "Es gibt keinen Unterschied zwischen ihnen",
          "Absolut enthält vollständiges Protokoll (https://...), relativ verweist auf eine Datei in derselben Website",
          "Absolut ist schneller als relativ",
          "Relativ funktioniert außerhalb der Website und absolut nur innerhalb"
        ],
        explanation: "Ein absoluter Link enthält das vollständige Protokoll und die Domain (wie https://example.com/about) und funktioniert von überall. Ein relativer Link verweist auf eine Datei relativ zum Standort der aktuellen Datei (wie about.html oder ../index.html)."
      }
    ],
    challenge: {
      title: "Herausforderung: Persönliche Fotogalerie-Seite",
      description: "Erstellen Sie eine HTML-Seite mit einer persönlichen Fotogalerie mit: 1. einem Logo oben, das ein Bild innerhalb eines Links zur Startseite ist, 2. einem Navigationsmenü mit internen Links (#), 3. drei Abschnitten, jeder mit einem Bild mit &lt;figure&gt; und &lt;figcaption&gt;, 4. einem externen Link zu einer anderen Seite (wie Wikipedia), der in einem neuen Tab mit rel=\"noopener noreferrer\" geöffnet wird, 5. einem E-Mail-Link und einem Telefon-Link im Kontaktabschnitt."
    },
    cheatSheet: {
      title: "Spickzettel Links und Bilder",
      items: [
        { term: "<code>&lt;a href=\"url\"&gt;</code>", definition: "Basis-Link" },
        { term: "<code>target=\"_blank\"</code>", definition: "Öffnet in neuem Tab" },
        { term: "<code>rel=\"noopener noreferrer\"</code>", definition: "Sicherheit mit _blank" },
        { term: "<code>href=\"#id\"</code>", definition: "Interner Seitenlink" },
        { term: "<code>href=\"mailto:...\"</code>", definition: "E-Mail-Link" },
        { term: "<code>href=\"tel:...\"</code>", definition: "Telefon-Link" },
        { term: "<code>download</code>", definition: "Datei herunterladen" },
        { term: "<code>&lt;img src=\"...\" alt=\"...\" /&gt;</code>", definition: "Basis-Bild" },
        { term: "<code>width / height</code>", definition: "Bildabmessungen" },
        { term: "<code>loading=\"lazy\"</code>", definition: "Lazy Loading" },
        { term: "<code>&lt;figure&gt;</code>", definition: "Bild mit Bildunterschrift" },
        { term: "<code>&lt;svg&gt;</code>", definition: "Vektorgrafiken" }
      ]
    }
  }
};

export default translations;