const translations = {
  ar: {
    sections: [
      {
        title: "ما هو HTML الدلالي؟",
        content: [
          { type: "p", text: "HTML الدلالي هو استخدام علامات HTML التي تحمل دلالات ذات معنى لمحتواها، بدلاً من استخدام علامات عامة مثل <div> و<span> لكل شيء." },
          { type: "p", text: "كلمة \"دلالي\" تعني \"له معنى\". عندما نستخدم علامة مثل <header>، نخبر المتصفح (والمحررين ومحركات البحث وقارئات الشاشة) أن هذا المحتوى هو ترويسة الصفحة. هذا أوضح بكثير من استخدام <div class=\"header\">." },
          { type: "callout", title: "تشبيه بسيط", text: "تخيّل أنك تكتب رسالة لعمى. هل ستقول \"افتح الصندوق رقم 5\" أم \"افتح صندوق البريد\"؟ الثاني أوضح لأنه يحمل معنى. HTML الدلالي يفعل نفس الشيء — يعطي كل قسم في صفحتك اسماً دلالياً." }
        ]
      },
      {
        title: "لماذا نستخدم HTML الدلالي؟",
        content: [
          { type: "p", text: "HTML الدلالي مهم لأسباب أساسية عدة:" },
          { type: "li", text: "تحسين إمكانية الوصول: قارئات الشاشة تستخدم العناصر الدلالية لفهم هيكل الصفحة ونقلها بشكل صحيح للمستخدمين ذوي الإعاقة." },
          { type: "li", text: "تحسين SEO: محركات البحث مثل Google تفضل المواقع التي تستخدم HTML الدلالي لأنها تفهم المحتوى بشكل أفضل." },
          { type: "li", text: "سهولة القراءة والصيانة: الكود الدلالي أسهل في القراءة والفهم للمطورين الآخرين (ولك أنت في المستقبل)." },
          { type: "li", text: "التوافق مع الأجهزة المختلفة: الأجهزة الذكية والمتصفحات الأحدث تفهم HTML الدلالي وتعامل معه بشكل أفضل." }
        ]
      },
      {
        title: "العلامات الدلالية الأساسية",
        content: [
          { type: "h3", text: "1. الترويسة والتذييل" },
          { type: "li", text: "<code>&lt;header&gt;</code>: ترويسة الصفحة أو القسم" },
          { type: "li", text: "<code>&lt;footer&gt;</code>: تذييل الصفحة أو القسم" },
          { type: "li", text: "<code>&lt;nav&gt;</code>: قسم التنقل" },
          { type: "h3", text: "2. المحتوى الرئيسي" },
          { type: "li", text: "<code>&lt;main&gt;</code>: المحتوى الرئيسي للصفحة (يجب أن يكون واحداً فقط)" },
          { type: "li", text: "<code>&lt;article&gt;</code>: محتوى مستقل (مقال، منشور)" },
          { type: "li", text: "<code>&lt;section&gt;</code>: قسم منطقي داخل الصفحة" },
          { type: "li", text: "<code>&lt;aside&gt;</code>: محتوى جانبي" },
          { type: "h3", text: "3. عناصر أخرى" },
          { type: "li", text: "<code>&lt;figure&gt;</code> و<code>&lt;figcaption&gt;</code>: للصور والوصف" },
          { type: "li", text: "<code>&lt;time&gt;</code>: للتواريخ والأوقات" },
          { type: "li", text: "<code>&lt;mark&gt;</code>: للنص المُميّز" }
        ]
      },
      {
        title: "مقارنة: كود غير دلالي مقابل دلالي",
        content: [
          { type: "p", text: "دعنا نرى الفرق:" },
          { type: "h3", text: "بدون HTML الدلالي (عام):" },
          { type: "p", text: "في هذا المثال، كل شيء هو <code>&lt;div&gt;</code> — المتصفح لا يفهم أي جزء هو الترويسة أو المحتوى أو التنقل." },
          { type: "h3", text: "مع HTML الدلالي:" },
          { type: "p", text: "الكود الثاني أوضح بكثير! كل علامة تخبرك بدورها فوراً. قارئ الشاشة يستطيع الآن أن يقول \"أنت الآن في قسم التنقل\" بدلاً من \"أنت في div رقم 3\"." }
        ]
      },
      {
        title: "أفضل الممارسات",
        content: [
          { type: "li", text: "<strong>استخدم header وfooter في كل صفحة:</strong> لإنشاء هيكل أساسي." },
          { type: "li", text: "<strong>استخدم nav للتنقل الرئيسي فقط:</strong> لا لكل مجموعة روابط." },
          { type: "li", text: "<strong>استخدم main مرة واحدة فقط:</strong> لكل صفحة." },
          { type: "li", text: "<strong>استخدم article للمحتوى المستقل:</strong> مثل المقالات والمنشورات." },
          { type: "li", text: "<strong>استخدم section للأقسام المنطقية:</strong> بدلاً من div لكل شيء." },
          { type: "li", text: "<strong>لا تبالغ في الاستخدام:</strong> لا تحتاج علامة دلالية لكل عنصر صغير." }
        ]
      },
      {
        title: "ملخص الدرس",
        content: [
          { type: "li", text: "HTML الدلالي = استخدام علامات تحمل معنى" },
          { type: "li", text: "العلامات الأساسية: header، footer، nav، main، article، section، aside" },
          { type: "li", text: "الفائدة: تحسين إمكانية الوصول وSEO وسهولة الصيانة" },
          { type: "li", text: "لا تستخدم div لكل شيء — استخدم العلامات الدلالية عندما يكون مناسباً" }
        ]
      }
    ],
    quiz: [
      {
        question: "ما هو الفرق الرئيسي بين HTML الدلالي وغير الدلالي؟",
        options: [
          "HTML الدلالي أقصر في الكتابة",
          "HTML الدلالي يستخدم علامات تحمل معنى للمحتوى",
          "HTML الدلالي فقط يعمل في المتصفحات الحديثة",
          "HTML الدلالي لا يحتاج CSS"
        ],
        explanation: "HTML الدلالي يستخدم علامات تحمل دلالات ذات معنى (مثل header وnav) بدلاً من علامات عامة مثل div، مما يحسن إمكانية الوصول وSEO."
      }
    ],
    challenge: {
      title: "تحدي: صفحة دلالية",
      description: "أنشئ صفحة \"من نحن\" باستخدام HTML الدلالي: 1. header مع شعار وعنوان، 2. nav بالتنقل، 3. main، 4. article للمحتوى الرئيسي، 5. section لقسم الميزات، 6. aside لمعلومة جانبية، 7. footer."
    },
    cheatSheet: {
      title: "ملخص HTML الدلالي",
      items: [
        { term: "<code>&lt;header&gt;</code>", definition: "ترويسة الصفحة أو القسم" },
        { term: "<code>&lt;footer&gt;</code>", definition: "تذييل الصفحة أو القسم" },
        { term: "<code>&lt;nav&gt;</code>", definition: "قسم التنقل الرئيسي" },
        { term: "<code>&lt;main&gt;</code>", definition: "المحتوى الرئيسي للصفحة" },
        { term: "<code>&lt;article&gt;</code>", definition: "محتوى مستقل (مقال، منشور)" },
        { term: "<code>&lt;section&gt;</code>", definition: "قسم منطقي" },
        { term: "<code>&lt;aside&gt;</code>", definition: "محتوى جانبي" },
        { term: "<code>&lt;figure&gt;</code>", definition: "حاوية للصورة أو الرسم" }
      ]
    }
  },
  en: {
    sections: [
      {
        title: "What Is Semantic HTML?",
        content: [
          { type: "p", text: "Semantic HTML is the practice of using HTML tags that carry meaningful semantics for their content, instead of using generic tags like <div> and <span> for everything." },
          { type: "p", text: "The word \"semantic\" means \"having meaning\". When we use a tag like <header>, we tell the browser (and editors, search engines, and screen readers) that this content is the page header. This is much clearer than using <div class=\"header\">." },
          { type: "callout", title: "Simple analogy:", text: "Imagine you are writing a message to a blind person. Would you say \"Open box number 5\" or \"Open the mailbox\"? The second is clearer because it carries meaning. Semantic HTML does the same thing — it gives each section of your page a semantic name." },
        ],
      },
      {
        title: "Why Do We Use Semantic HTML?",
        content: [
          { type: "p", text: "Semantic HTML is important for several fundamental reasons:" },
          { type: "li", text: "Improved Accessibility: Screen readers use semantic elements to understand the page structure and convey it correctly to blind users." },
          { type: "li", text: "Improved SEO: Search engines like Google prefer websites with semantic HTML because they understand the content better. This improves your site's ranking in search results." },
          { type: "li", text: "Ease of Reading and Maintenance: Semantic code is easier to read and understand for other developers (and for you in the future). Instead of searching for <div class=\"main-content-area\">, you find <main> directly." },
          { type: "li", text: "Compatibility with Different Devices: Smart devices and newer browsers understand semantic HTML and handle it better." },
          { type: "callout", title: "Important fact:", text: "Tags like <header>, <main>, and <footer> are supported in all modern browsers. Using them costs you nothing but gives you many benefits." },
        ],
      },
      {
        title: "The Problem That Semantic HTML Solves",
        content: [
          { type: "p", text: "Let's see the difference between non-semantic and semantic code:" },
          { type: "h3", text: "Without Semantic HTML (Generic):" },
          { type: "h3", text: "With Semantic HTML (Semantic):" },
          { type: "p", text: "The second code is much clearer! Each tag immediately tells you its role. A screen reader can now say \"You are now in the navigation section\" instead of \"You are in div number 3\"." },
        ],
      },
      {
        title: "Semantic Elements for Page Structure",
        content: [
          { type: "p", text: "HTML5 provides several semantic tags for building the page structure:" },
          { type: "li", text: "<header>: The header of the page or section. Usually contains the logo, title, and navigation." },
          { type: "li", text: "<nav>: The navigation section. Contains the main links for navigating between site pages." },
          { type: "li", text: "<main>: The main content of the page. There should be only one per page and it contains the real essence of the content." },
          { type: "li", text: "<section>: A logical section on the page. Used to group related content under a common heading." },
          { type: "li", text: "<article>: An article or standalone content that can be reused elsewhere (like a blog post or tweet)." },
          { type: "li", text: "<aside>: Side content not related to the main content (like a sidebar or advertisements)." },
          { type: "li", text: "<footer>: The footer of the page or section. Contains copyright information and secondary links." },
        ],
      },
      {
        title: "Semantic Elements for Text",
        content: [
          { type: "p", text: "There are additional semantic tags for formatting and organizing text:" },
          { type: "h3", text: "Images and Figures (Figure & Figcaption)" },
          { type: "h3", text: "Blockquotes (Blockquote & Cite)" },
          { type: "h3", text: "Highlighted Text and Time (Mark & Time)" },
          { type: "callout", title: "Why is dateTime important?", text: "The dateTime attribute gives the date in a standardized format (ISO 8601) that browsers and search engines understand. Even if you wrote \"tomorrow\" in the text, you can put the real date in dateTime." },
        ],
      },
      {
        title: "Semantic Elements for Lists and Tables",
        content: [
          { type: "h3", text: "Details & Summary" },
          { type: "p", text: "The <details> tag creates an expandable list (Accordion) without needing JavaScript:" },
          { type: "h3", text: "Semantic Table Elements (thead, tbody, tfoot, caption)" },
        ],
      },
      {
        title: "Practical Example: Complete Article Page with Semantic Elements",
        content: [
          { type: "p", text: "Let's see what a real article page looks like that uses semantic HTML completely:" },
        ],
      },
      {
        title: "Comparison: div-based layout vs semantic layout",
        content: [
          { type: "p", text: "Let's compare the two approaches directly in a realistic scenario:" },
          { type: "h3", text: "The Old Way (div-based):" },
          { type: "h3", text: "The Modern Way (semantic):" },
          { type: "callout", title: "Key differences:", text: "Semantic code is shorter (no need for complex class names), clear in meaning (each tag explains its role), compatible with accessibility (screen readers understand it), and better for SEO (search engines understand it)." },
        ],
      },
      {
        title: "What Happens Behind the Scenes?",
        content: [
          { type: "p", text: "When the browser reads semantic elements, the following happens:" },
          { type: "li", text: "Building a semantic DOM tree: The browser builds a DOM tree where each element has a clear role. For example, it marks that <nav> contains navigation links." },
          { type: "li", text: "Improved content rendering: Some browsers give different default styles to semantic tags. For example, <main> may get additional margin." },
          { type: "li", text: "Improved accessibility: Screen readers can now provide a \"page elements list\" to blind users. It can say \"there are 3 sections, a navigation, and a main article\"." },
          { type: "li", text: "Improved SEO: Google crawlers understand important content from secondary content. Content inside <article> is treated as primary content." },
          { type: "callout", title: "Did you know?", text: "You can test how well the browser understands your page using the Lighthouse tool in Chrome DevTools (F12 then Lighthouse tab). You will get a higher \"Best Practices\" score with semantic HTML." },
        ],
      },
      {
        title: "Common Mistakes",
        content: [
          { type: "li", text: "Using div for everything: Using <div> and <span> for every element on the page. This is one of the oldest bad habits in HTML. Use semantic elements whenever possible." },
          { type: "li", text: "Using semantic elements incorrectly: Using <header> in the middle of the page as a general container, or using <article> for a non-standalone section. Make sure you understand the meaning of each tag before using it." },
          { type: "li", text: "Ignoring fallback: Some older browsers don't support semantic elements. But in 2026, this is no longer a big issue. All modern browsers support them." },
          { type: "li", text: "Using semantic elements only for styling: Using <small> because you want smaller text. Use semantic elements for their meaning, and use CSS for styling." },
          { type: "li", text: "Forgetting to wrap content inside main: Not using <main> for the main content. Each page should have only one <main> section." },
        ],
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "Use main only once on the page: Each page should have only one <main> section containing the main content." },
          { type: "li", text: "Use nav only for primary navigation: Don't put every group of links in <nav>. Keep it for main and secondary navigation only." },
          { type: "li", text: "Make article self-contained: The content inside <article> should be publishable independently elsewhere." },
          { type: "li", text: "Use section with a heading: Each <section> should have a heading (<h2> or <h3>). If you don't have a heading, you may need <div> instead." },
          { type: "li", text: "Use aside only for secondary content: The content inside <aside> should be related to the surrounding content but not essential." },
          { type: "li", text: "Use figure and figcaption with meaningful images: Don't use <figure> with every image. Keep it for images that have a caption." },
          { type: "li", text: "Always use time with dateTime: Write the date in ISO format in dateTime and in readable format between the tags." },
          { type: "li", text: "Use details and summary to improve user experience: Excellent for FAQs and expandable instructions." },
        ],
      },
      {
        title: "Lesson Summary",
        content: [
          { type: "li", text: "Semantic HTML is using meaningful tags instead of div and span for everything" },
          { type: "li", text: "Semantic elements improve accessibility, SEO, and ease of reading" },
          { type: "li", text: "Structure elements: <header> | <nav> | <main> | <section> | <article> | <aside> | <footer>" },
          { type: "li", text: "Text elements: <figure> | <figcaption> | <blockquote> | <cite> | <time> | <mark>" },
          { type: "li", text: "List elements: <details> and <summary> for expandable lists" },
          { type: "li", text: "Table elements: <caption> | <thead> | <tbody> | <tfoot>" },
        ],
      },
    ],
    quiz: [
      {
        question: "What is the main role of <main> on a page?",
        options: [
          "It contains all page content",
          "It contains the main standalone content of the page",
          "It contains links and navigation",
          "It contains the page footer",
        ],
        explanation: "<main> should contain only the main content of the page, and there should be only one on the page. Links go in <nav> and the footer goes in <footer>.",
      },
      {
        question: "What is the difference between <div> and <section>?",
        options: [
          "There is no difference between them",
          "div is for styling, section is for structure",
          "div is a generic element without meaning, section is a logical section with a heading",
          "div is in HTML4, section is in HTML5",
        ],
        explanation: "div is a generic element with no semantic meaning. section represents a logical section in the content and should usually have a heading.",
      },
      {
        question: "Which of the following is a correct use of <article>?",
        options: [
          "A general container for page content",
          "Standalone content that can be published elsewhere",
          "A section of paragraphs without a heading",
          "A sidebar for advertisements",
        ],
        explanation: "<article> is used for standalone content that can be reused, like a blog post, tweet, or forum topic.",
      },
    ],
    challenge: {
      title: "Challenge: Convert div code to semantic HTML",
      description: "Take the following code written with div only and convert it to semantic HTML using the correct elements: 1. Identify the page header and make it <header>, 2. Convert the link list to <nav>, 3. Put the main content inside <main>, 4. Convert the article to <article>, 5. Make the sidebar <aside>, 6. Convert the footer to <footer>.",
    },
    cheatSheet: {
      title: "Semantic HTML Cheat Sheet",
      items: [
        { term: "<header>", definition: "Page/section header" },
        { term: "<nav>", definition: "Navigation and links" },
        { term: "<main>", definition: "Main content" },
        { term: "<section>", definition: "Logical section with heading" },
        { term: "<article>", definition: "Standalone content" },
        { term: "<aside>", definition: "Side content" },
        { term: "<footer>", definition: "Page/section footer" },
        { term: "<figure>", definition: "Wraps image/content" },
        { term: "<figcaption>", definition: "Caption for figure" },
        { term: "<blockquote>", definition: "Long quote" },
        { term: "<cite>", definition: "Source of quote" },
        { term: "<mark>", definition: "Highlighted text (yellow)" },
        { term: "<time>", definition: "Dates and times" },
        { term: "<details>/<summary>", definition: "Expandable list" },
        { term: "<caption>", definition: "Table title" },
        { term: "<thead>/<tbody>/<tfoot>", definition: "Table structure" },
      ],
    },
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que le HTML sémantique ?",
        content: [
          { type: "p", text: "Le HTML sémantique est la pratique d'utiliser des balises HTML qui portent des sémantiques significatives pour leur contenu, au lieu d'utiliser des balises génériques comme <div> et <span> pour tout." },
          { type: "p", text: "Le mot \"sémantique\" signifie \"ayant un sens\". Lorsque nous utilisons une balise comme <header>, nous disons au navigateur (et aux éditeurs, moteurs de recherche et lecteurs d'écran) que ce contenu est l'en-tête de la page. C'est beaucoup plus clair que d'utiliser <div class=\"header\">." },
          { type: "callout", title: "Analogie simple :", text: "Imaginez que vous écrivez un message à une personne aveugle. Lui diriez-vous \"Ouvrez la boîte numéro 5\" ou \"Ouvrez la boîte aux lettres\" ? La deuxième est plus claire car elle porte un sens. Le HTML sémantique fait la même chose — il donne à chaque section de votre page un nom sémantique." },
        ],
      },
      {
        title: "Pourquoi utilisons-nous le HTML sémantique ?",
        content: [
          { type: "p", text: "Le HTML sémantique est important pour plusieurs raisons fondamentales :" },
          { type: "li", text: "Amélioration de l'accessibilité : Les lecteurs d'écran utilisent les éléments sémantiques pour comprendre la structure de la page et la transmettre correctement aux utilisateurs malvoyants." },
          { type: "li", text: "Amélioration du SEO : Les moteurs de recherche comme Google préfèrent les sites web avec du HTML sémantique car ils comprennent mieux le contenu. Cela améliore le classement de votre site dans les résultats de recherche." },
          { type: "li", text: "Facilité de lecture et de maintenance : Le code sémantique est plus facile à lire et à comprendre pour les autres développeurs (et pour vous dans le futur). Au lieu de chercher <div class=\"main-content-area\">, vous trouvez <main> directement." },
          { type: "li", text: "Compatibilité avec différents appareils : Les appareils intelligents et les navigateurs plus récents comprennent le HTML sémantique et le gèrent mieux." },
          { type: "callout", title: "Fait important :", text: "Des balises comme <header>, <main> et <footer> sont prises en charge dans tous les navigateurs modernes. Les utiliser ne vous coûte rien mais vous donne de nombreux avantages." },
        ],
      },
      {
        title: "Le problème que le HTML sémantique résout",
        content: [
          { type: "p", text: "Voyons la différence entre le code non sémantique et le code sémantique :" },
          { type: "h3", text: "Sans HTML sémantique (Générique) :" },
          { type: "h3", text: "Avec HTML sémantique (Sémantique) :" },
          { type: "p", text: "Le deuxième code est beaucoup plus clair ! Chaque balise vous explique immédiatement son rôle. Un lecteur d'écran peut maintenant dire \"Vous êtes dans la section de navigation\" au lieu de \"Vous êtes dans le div numéro 3\"." },
        ],
      },
      {
        title: "Éléments sémantiques pour la structure de page",
        content: [
          { type: "p", text: "HTML5 fournit plusieurs balises sémantiques pour construire la structure de la page :" },
          { type: "li", text: "<header> : L'en-tête de la page ou de la section. Contient généralement le logo, le titre et la navigation." },
          { type: "li", text: "<nav> : La section de navigation. Contient les principaux liens pour naviguer entre les pages du site." },
          { type: "li", text: "<main> : Le contenu principal de la page. Il ne doit y en avoir qu'un par page et il contient la véritable essence du contenu." },
          { type: "li", text: "<section> : Une section logique sur la page. Utilisée pour regrouper le contenu lié sous un titre commun." },
          { type: "li", text: "<article> : Un article ou du contenu autonome qui peut être réutilisé ailleurs (comme un article de blog ou un tweet)." },
          { type: "li", text: "<aside> : Contenu latéral non lié au contenu principal (comme une barre latérale ou des publicités)." },
          { type: "li", text: "<footer> : Le pied de page de la page ou de la section. Contient les informations de copyright et les liens secondaires." },
        ],
      },
      {
        title: "Éléments sémantiques pour le texte",
        content: [
          { type: "p", text: "Il existe des balises sémantiques supplémentaires pour formater et organiser le texte :" },
          { type: "h3", text: "Images et figures (Figure & Figcaption)" },
          { type: "h3", text: "Citations (Blockquote & Cite)" },
          { type: "h3", text: "Texte en surbrillance et heure (Mark & Time)" },
          { type: "callout", title: "Pourquoi dateTime est-il important ?", text: "L'attribut dateTime donne la date dans un format standardisé (ISO 8601) que les navigateurs et les moteurs de recherche comprennent. Même si vous avez écrit \"demain\" dans le texte, vous pouvez mettre la vraie date dans dateTime." },
        ],
      },
      {
        title: "Éléments sémantiques pour les listes et les tableaux",
        content: [
          { type: "h3", text: "Details & Summary" },
          { type: "p", text: "La balise <details> crée une liste extensible (Accordion) sans avoir besoin de JavaScript :" },
          { type: "h3", text: "Éléments sémantiques de tableau (thead, tbody, tfoot, caption)" },
        ],
      },
      {
        title: "Exemple pratique : Page d'article complète avec éléments sémantiques",
        content: [
          { type: "p", text: "Voyons à quoi ressemble une vraie page d'article qui utilise entièrement le HTML sémantique :" },
        ],
      },
      {
        title: "Comparaison : disposition basée sur div vs disposition sémantique",
        content: [
          { type: "p", text: "Comparons les deux approches directement dans un scénario réaliste :" },
          { type: "h3", text: "L'ancienne méthode (basée sur div) :" },
          { type: "h3", text: "La méthode moderne (sémantique) :" },
          { type: "callout", title: "Différences clés :", text: "Le code sémantique est plus court (pas besoin de noms de classes complexes), clair dans sa signification (chaque balise explique son rôle), compatible avec l'accessibilité (les lecteurs d'écran le comprennent), et meilleur pour le SEO (les moteurs de recherche le comprennent)." },
        ],
      },
      {
        title: "Que se passe-t-il en coulisses ?",
        content: [
          { type: "p", text: "Lorsque le navigateur lit les éléments sémantiques, voici ce qui se passe :" },
          { type: "li", text: "Construction d'un arbre DOM sémantique : Le navigateur construit un arbre DOM où chaque élément a un rôle clair. Par exemple, il marque que <nav> contient des liens de navigation." },
          { type: "li", text: "Rendu du contenu amélioré : Certains navigateurs donnent des styles par défaut différents aux balises sémantiques. Par exemple, <main> peut obtenir une marge supplémentaire." },
          { type: "li", text: "Accessibilité améliorée : Les lecteurs d'écran peuvent maintenant fournir une \"liste des éléments de page\" aux utilisateurs aveugles. Ils peuvent dire \"il y a 3 sections, une navigation et un article principal\"." },
          { type: "li", text: "SEO amélioré : Les crawlers de Google comprennent le contenu important du contenu secondaire. Le contenu dans <article> est traité comme du contenu principal." },
          { type: "callout", title: "Le saviez-vous ?", text: "Vous pouvez tester la compréhension de votre page par le navigateur en utilisant l'outil Lighthouse dans Chrome DevTools (F12 puis onglet Lighthouse). Vous obtiendrez un score \"Best Practices\" plus élevé avec le HTML sémantique." },
        ],
      },
      {
        title: "Erreurs courantes",
        content: [
          { type: "li", text: "Utiliser div pour tout : Utiliser <div> et <span> pour chaque élément de la page. C'est l'une des plus anciennes mauvaises habitudes en HTML. Utilisez les éléments sémantiques chaque fois que possible." },
          { type: "li", text: "Utiliser les éléments sémantiques incorrectement : Utiliser <header> au milieu de la page comme conteneur général, ou utiliser <article> pour une section non autonome. Assurez-vous de comprendre la signification de chaque balise avant de l'utiliser." },
          { type: "li", text: "Ignorer la rétrocompatibilité : Certains anciens navigateurs ne supportent pas les éléments sémantiques. Mais en 2026, ce n'est plus un gros problème. Tous les navigateurs modernes les supportent." },
          { type: "li", text: "Utiliser des éléments sémantiques uniquement pour le style : Utiliser <small> parce que vous voulez un texte plus petit. Utilisez les éléments sémantiques pour leur signification, et CSS pour le style." },
          { type: "li", text: "Oublier d'envelopper le contenu dans main : Ne pas utiliser <main> pour le contenu principal. Chaque page ne devrait avoir qu'une seule section <main>." },
        ],
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "Utilisez main une seule fois sur la page : Chaque page ne devrait avoir qu'une seule section <main> contenant le contenu principal." },
          { type: "li", text: "Utilisez nav uniquement pour la navigation principale : Ne mettez pas chaque groupe de liens dans <nav>. Conservez-le uniquement pour la navigation principale et secondaire." },
          { type: "li", text: "Rendez article autonome : Le contenu dans <article> devrait être publiable indépendamment ailleurs." },
          { type: "li", text: "Utilisez section avec un titre : Chaque <section> devrait avoir un titre (<h2> ou <h3>). Si vous n'avez pas de titre, vous aurez peut-être besoin de <div> à la place." },
          { type: "li", text: "Utilisez aside uniquement pour le contenu secondaire : Le contenu dans <aside> devrait être lié au contenu environnant mais pas essentiel." },
          { type: "li", text: "Utilisez figure et figcaption avec des images significatives : N'utilisez pas <figure> avec chaque image. Conservez-le pour les images qui ont une légende." },
          { type: "li", text: "Utilisez toujours time avec dateTime : Écrivez la date au format ISO dans dateTime et en format lisible entre les balises." },
          { type: "li", text: "Utilisez details et summary pour améliorer l'expérience utilisateur : Excellent pour les FAQ et les instructions extensibles." },
        ],
      },
      {
        title: "Résumé de la leçon",
        content: [
          { type: "li", text: "Le HTML sémantique est l'utilisation de balises significatives au lieu de div et span pour tout" },
          { type: "li", text: "Les éléments sémantiques améliorent l'accessibilité, le SEO et la facilité de lecture" },
          { type: "li", text: "Éléments de structure : <header> | <nav> | <main> | <section> | <article> | <aside> | <footer>" },
          { type: "li", text: "Éléments de texte : <figure> | <figcaption> | <blockquote> | <cite> | <time> | <mark>" },
          { type: "li", text: "Éléments de liste : <details> et <summary> pour les listes extensibles" },
          { type: "li", text: "Éléments de tableau : <caption> | <thead> | <tbody> | <tfoot>" },
        ],
      },
    ],
    quiz: [
      {
        question: "Quel est le rôle principal de <main> sur une page ?",
        options: [
          "Il contient tout le contenu de la page",
          "Il contient le contenu principal autonome de la page",
          "Il contient les liens et la navigation",
          "Il contient le pied de page",
        ],
        explanation: "<main> ne devrait contenir que le contenu principal de la page, et il ne devrait y en avoir qu'un seul sur la page. Les liens vont dans <nav> et le pied de page va dans <footer>.",
      },
      {
        question: "Quelle est la différence entre <div> et <section> ?",
        options: [
          "Il n'y a pas de différence entre eux",
          "div est pour le style, section est pour la structure",
          "div est un élément générique sans signification, section est une section logique avec un titre",
          "div est dans HTML4, section est dans HTML5",
        ],
        explanation: "div est un élément générique sans signification sémantique. section représente une section logique dans le contenu et devrait généralement avoir un titre.",
      },
      {
        question: "Lequel des éléments suivants est une utilisation correcte de <article> ?",
        options: [
          "Un conteneur général pour le contenu de la page",
          "Du contenu autonome qui peut être publié ailleurs",
          "Une section de paragraphes sans titre",
          "Une barre latérale pour les publicités",
        ],
        explanation: "<article> est utilisé pour du contenu autonome qui peut être réutilisé, comme un article de blog, un tweet ou un sujet de forum.",
      },
    ],
    challenge: {
      title: "Défi : Convertir le code div en HTML sémantique",
      description: "Prenez le code suivant écrit uniquement avec div et convertissez-le en HTML sémantique en utilisant les éléments corrects : 1. Identifiez l'en-tête de la page et faites-en <header>, 2. Convertissez la liste de liens en <nav>, 3. Mettez le contenu principal dans <main>, 4. Convertissez l'article en <article>, 5. Faites de la barre latérale un <aside>, 6. Convertissez le pied de page en <footer>.",
    },
    cheatSheet: {
      title: "Aide-mémoire HTML sémantique",
      items: [
        { term: "<header>", definition: "En-tête de page/section" },
        { term: "<nav>", definition: "Navigation et liens" },
        { term: "<main>", definition: "Contenu principal" },
        { term: "<section>", definition: "Section logique avec titre" },
        { term: "<article>", definition: "Contenu autonome" },
        { term: "<aside>", definition: "Contenu latéral" },
        { term: "<footer>", definition: "Pied de page/section" },
        { term: "<figure>", definition: "Enveloppe image/contenu" },
        { term: "<figcaption>", definition: "Légende pour figure" },
        { term: "<blockquote>", definition: "Longue citation" },
        { term: "<cite>", definition: "Source de citation" },
        { term: "<mark>", definition: "Texte en surbrillance (jaune)" },
        { term: "<time>", definition: "Dates et heures" },
        { term: "<details>/<summary>", definition: "Liste extensible" },
        { term: "<caption>", definition: "Titre de tableau" },
        { term: "<thead>/<tbody>/<tfoot>", definition: "Structure de tableau" },
      ],
    },
  },
  de: {
    sections: [
      {
        title: "Was ist Semantic HTML?",
        content: [
          { type: "p", text: "Semantic HTML ist die Praxis, HTML-Tags zu verwenden, die bedeutungsvolle Semantik für ihren Inhalt tragen, anstatt generische Tags wie <div> und <span> für alles zu verwenden." },
          { type: "p", text: "Das Wort \"semantic\" bedeutet \"Bedeutung habend\". Wenn wir ein Tag wie <header> verwenden, sagen wir dem Browser (und Editoren, Suchmaschinen und Screenreadern), dass dieser Inhalt der Seitenheader ist. Das ist viel klarer als die Verwendung von <div class=\"header\">." },
          { type: "callout", title: "Einfache Analogie:", text: "Stellen Sie sich vor, Sie schreiben eine Nachricht an eine blinde Person. Würden Sie sagen \"Öffnen Sie die Box Nummer 5\" oder \"Öffnen Sie den Briefkasten\"? Die zweite ist klarer, weil sie Bedeutung trägt. Semantic HTML macht dasselbe — es gibt jedem Abschnitt Ihrer Seite einen semantischen Namen." },
        ],
      },
      {
        title: "Warum verwenden wir Semantic HTML?",
        content: [
          { type: "p", text: "Semantic HTML ist aus mehreren grundlegenden Gründen wichtig:" },
          { type: "li", text: "Verbesserte Barrierefreiheit: Screenreader verwenden semantische Elemente, um die Seitenstruktur zu verstehen und sie sehbehinderten Benutzern korrekt zu vermitteln." },
          { type: "li", text: "Verbessertes SEO: Suchmaschinen wie Google bevorzugen Websites mit semantischem HTML, weil sie den Inhalt besser verstehen. Dies verbessert das Ranking Ihrer Seite in den Suchergebnissen." },
          { type: "li", text: "Lesbarkeit und Wartbarkeit: Semantischer Code ist für andere Entwickler (und für Sie in der Zukunft) leichter zu lesen und zu verstehen. Anstatt nach <div class=\"main-content-area\"> zu suchen, finden Sie <main> direkt." },
          { type: "li", text: "Kompatibilität mit verschiedenen Geräten: Smarte Geräte und neuere Browser verstehen semantisches HTML und behandeln es besser." },
          { type: "callout", title: "Wichtige Tatsache:", text: "Tags wie <header>, <main> und <footer> werden in allen modernen Browsern unterstützt. Sie zu verwenden kostet Sie nichts, gibt Ihnen aber viele Vorteile." },
        ],
      },
      {
        title: "Das Problem, das Semantic HTML löst",
        content: [
          { type: "p", text: "Sehen wir uns den Unterschied zwischen nicht-semantischem und semantischem Code an:" },
          { type: "h3", text: "Ohne Semantic HTML (Generisch):" },
          { type: "h3", text: "Mit Semantic HTML (Semantisch):" },
          { type: "p", text: "Der zweite Code ist viel klarer! Jedes Tag erklärt Ihnen sofort seine Rolle. Ein Screenreader kann nun sagen \"Sie sind jetzt im Navigationsabschnitt\" statt \"Sie sind in div Nummer 3\"." },
        ],
      },
      {
        title: "Semantische Elemente für die Seitenstruktur",
        content: [
          { type: "p", text: "HTML5 bietet mehrere semantische Tags zum Aufbau der Seitenstruktur:" },
          { type: "li", text: "<header>: Der Header der Seite oder des Abschnitts. Enthält normalerweise das Logo, den Titel und die Navigation." },
          { type: "li", text: "<nav>: Der Navigationsabschnitt. Enthält die Hauptlinks zum Navigieren zwischen den Seiten der Website." },
          { type: "li", text: "<main>: Der Hauptinhalt der Seite. Es sollte nur einen pro Seite geben und er enthält den wahren Kern des Inhalts." },
          { type: "li", text: "<section>: Ein logischer Abschnitt auf der Seite. Wird verwendet, um zusammenhängenden Inhalt unter einer gemeinsamen Überschrift zu gruppieren." },
          { type: "li", text: "<article>: Ein Artikel oder eigenständiger Inhalt, der anderswo wiederverwendet werden kann (wie ein Blog-Beitrag oder Tweet)." },
          { type: "li", text: "<aside>: Seiteninhalt, der nicht mit dem Hauptinhalt zusammenhängt (wie eine Seitenleiste oder Werbung)." },
          { type: "li", text: "<footer>: Die Fußzeile der Seite oder des Abschnitts. Enthält Urheberrechtsinformationen und sekundäre Links." },
        ],
      },
      {
        title: "Semantische Elemente für Text",
        content: [
          { type: "p", text: "Es gibt zusätzliche semantische Tags zum Formatieren und Organisieren von Text:" },
          { type: "h3", text: "Bilder und Abbildungen (Figure & Figcaption)" },
          { type: "h3", text: "Blockzitate (Blockquote & Cite)" },
          { type: "h3", text: "Hervorgehobener Text und Zeit (Mark & Time)" },
          { type: "callout", title: "Warum ist dateTime wichtig?", text: "Das dateTime-Attribut gibt das Datum in einem standardisierten Format (ISO 8601) aus, das Browser und Suchmaschinen verstehen. Selbst wenn Sie \"morgen\" im Text geschrieben haben, können Sie das echte Datum in dateTime setzen." },
        ],
      },
      {
        title: "Semantische Elemente für Listen und Tabellen",
        content: [
          { type: "h3", text: "Details & Summary" },
          { type: "p", text: "Das <details>-Tag erstellt eine erweiterbare Liste (Accordion) ohne JavaScript:" },
          { type: "h3", text: "Semantische Tabellenelemente (thead, tbody, tfoot, caption)" },
        ],
      },
      {
        title: "Praktisches Beispiel: Komplette Artikelseite mit semantischen Elementen",
        content: [
          { type: "p", text: "Schauen wir uns an, wie eine echte Artikelseite aussieht, die vollständig Semantic HTML verwendet:" },
        ],
      },
      {
        title: "Vergleich: div-basiertes Layout vs semantisches Layout",
        content: [
          { type: "p", text: "Lassen Sie uns die beiden Ansätze direkt in einem realistischen Szenario vergleichen:" },
          { type: "h3", text: "Die alte Methode (div-basiert):" },
          { type: "h3", text: "Die moderne Methode (semantisch):" },
          { type: "callout", title: "Wichtige Unterschiede:", text: "Semantischer Code ist kürzer (keine komplexen Klassennamen nötig), klar in der Bedeutung (jedes Tag erklärt seine Rolle), kompatibel mit Barrierefreiheit (Screenreader verstehen ihn) und besser für SEO (Suchmaschinen verstehen ihn)." },
        ],
      },
      {
        title: "Was passiert hinter den Kulissen?",
        content: [
          { type: "p", text: "Wenn der Browser semantische Elemente liest, geschieht Folgendes:" },
          { type: "li", text: "Aufbau eines semantischen DOM-Baums: Der Browser baut einen DOM-Baum auf, in dem jedes Element eine klare Rolle hat. Er markiert zum Beispiel, dass <nav> Navigationslinks enthält." },
          { type: "li", text: "Verbesserte Inhaltsdarstellung: Einige Browser geben semantischen Tags andere Standardstile. Zum Beispiel kann <main> zusätzlichen Abstand bekommen." },
          { type: "li", text: "Verbesserte Barrierefreiheit: Screenreader können nun eine \"Seitenelement-Liste\" für blinde Benutzer bereitstellen. Sie sagen können \"es gibt 3 Abschnitte, eine Navigation und einen Hauptartikel\"." },
          { type: "li", text: "Verbessertes SEO: Google-Crawler verstehen wichtigen Inhalt von sekundärem Inhalt. Inhalt in <article> wird als Hauptinhalt behandelt." },
          { type: "callout", title: "Wussten Sie schon?", text: "Sie können testen, wie gut der Browser Ihre Seite versteht, indem Sie das Lighthouse-Werkzeug in Chrome DevTools verwenden (F12 dann Lighthouse-Tab). Sie erhalten eine höhere \"Best Practices\"-Bewertung mit semantischem HTML." },
        ],
      },
      {
        title: "Häufige Fehler",
        content: [
          { type: "li", text: "Div für alles verwenden: <div> und <span> für jedes Element auf der Seite verwenden. Dies ist einer der ältesten schlechten Gewohnheiten in HTML. Verwenden Sie semantische Elemente, wann immer möglich." },
          { type: "li", text: "Semantische Elemente falsch verwenden: <header> in der Mitte der Seite als allgemeinen Container verwenden oder <article> für einen nicht eigenständigen Abschnitt verwenden. Stellen Sie sicher, dass Sie die Bedeutung jedes Tags verstehen, bevor Sie es verwenden." },
          { type: "li", text: "Fallback ignorieren: Einige ältere Browser unterstützen semantische Elemente nicht. Aber 2026 ist dies kein großes Problem mehr. Alle modernen Browser unterstützen sie." },
          { type: "li", text: "Semantische Elemente nur zum Styling verwenden: <small> verwenden, weil Sie kleineren Text wollen. Verwenden Sie semantische Elemente für ihre Bedeutung und CSS für das Styling." },
          { type: "li", text: "Vergessen, Inhalt in main zu wrappen: <main> nicht für den Hauptinhalt verwenden. Jede Seite sollte nur einen <main>-Abschnitt haben." },
        ],
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "Verwenden Sie main nur einmal auf der Seite: Jede Seite sollte nur einen <main>-Abschnitt mit dem Hauptinhalt haben." },
          { type: "li", text: "Verwenden Sie nav nur für die Hauptnavigation: Setzen Sie nicht jede Linkgruppe in <nav>. Behalten Sie es nur für die Haupt- und Sekundärnavigation bei." },
          { type: "li", text: "Machen Sie article eigenständig: Der Inhalt in <article> sollte anderswo eigenständig publizierbar sein." },
          { type: "li", text: "Verwenden Sie section mit einer Überschrift: Jeder <section> sollte eine Überschrift haben (<h2> oder <h3>). Wenn Sie keine Überschrift haben, brauchen Sie möglicherweise stattdessen <div>." },
          { type: "li", text: "Verwenden Sie aside nur für sekundären Inhalt: Der Inhalt in <aside> sollte mit dem umgebenden Inhalt zusammenhängen, aber nicht wesentlich sein." },
          { type: "li", text: "Verwenden Sie figure und figcaption mit bedeutungsvollen Bildern: Verwenden Sie nicht <figure> mit jedem Bild. Behalten Sie es für Bilder mit einer Bildunterschrift bei." },
          { type: "li", text: "Verwenden Sie immer time mit dateTime: Schreiben Sie das Datum im ISO-Format in dateTime und in lesbarem Format zwischen den Tags." },
          { type: "li", text: "Verwenden Sie details und summary zur Verbesserung der Benutzererfahrung: Ausgezeichnet für FAQs und erweiterbare Anleitungen." },
        ],
      },
      {
        title: "Zusammenfassung der Lektion",
        content: [
          { type: "li", text: "Semantic HTML ist die Verwendung bedeutungsvoller Tags statt div und span für alles" },
          { type: "li", text: "Semantische Elemente verbessern Barrierefreiheit, SEO und Lesbarkeit" },
          { type: "li", text: "Strukturelemente: <header> | <nav> | <main> | <section> | <article> | <aside> | <footer>" },
          { type: "li", text: "Textelemente: <figure> | <figcaption> | <blockquote> | <cite> | <time> | <mark>" },
          { type: "li", text: "Listenelemente: <details> und <summary> für erweiterbare Listen" },
          { type: "li", text: "Tabellenelemente: <caption> | <thead> | <tbody> | <tfoot>" },
        ],
      },
    ],
    quiz: [
      {
        question: "Was ist die Hauptrolle von <main> auf einer Seite?",
        options: [
          "Es enthält den gesamten Seiteninhalt",
          "Es enthält den Hauptinhalt der Seite",
          "Es enthält Links und Navigation",
          "Es enthält die Fußzeile",
        ],
        explanation: "<main> sollte nur den Hauptinhalt der Seite enthalten, und es sollte nur einen pro Seite geben. Links gehen in <nav> und die Fußzeile geht in <footer>.",
      },
      {
        question: "Was ist der Unterschied zwischen <div> und <section>?",
        options: [
          "Es gibt keinen Unterschied zwischen ihnen",
          "div ist für Styling, section ist für Struktur",
          "div ist ein generisches Element ohne Bedeutung, section ist ein logischer Abschnitt mit einer Überschrift",
          "div ist in HTML4, section ist in HTML5",
        ],
        explanation: "div ist ein generisches Element ohne semantische Bedeutung. section repräsentiert einen logischen Abschnitt im Inhalt und sollte normalerweise eine Überschrift haben.",
      },
      {
        question: "Welche der folgenden ist eine korrekte Verwendung von <article>?",
        options: [
          "Ein allgemeiner Container für Seiteninhalt",
          "Eigenständiger Inhalt, der anderswo veröffentlicht werden kann",
          "Ein Abschnitt von Absätzen ohne Überschrift",
          "Eine Seitenleiste für Werbung",
        ],
        explanation: "<article> wird für eigenständigen Inhalt verwendet, der wiederverwendet werden kann, wie ein Blog-Beitrag, Tweet oder Forumsthema.",
      },
    ],
    challenge: {
      title: "Herausforderung: Div-Code in Semantic HTML konvertieren",
      description: "Nehmen Sie den folgenden Code, der nur mit div geschrieben ist, und konvertieren Sie ihn in Semantic HTML mit den richtigen Elementen: 1. Identifizieren Sie den Seitenheader und machen Sie ihn zu <header>, 2. Konvertieren Sie die Linkliste in <nav>, 3. Setzen Sie den Hauptinhalt in <main>, 4. Konvertieren Sie den Artikel in <article>, 5. Machen Sie die Seitenleiste zu <aside>, 6. Konvertieren Sie die Fußzeile in <footer>.",
    },
    cheatSheet: {
      title: "Semantic HTML Spickzettel",
      items: [
        { term: "<header>", definition: "Seiten/Abschnitts-Header" },
        { term: "<nav>", definition: "Navigation und Links" },
        { term: "<main>", definition: "Hauptinhalt" },
        { term: "<section>", definition: "Logischer Abschnitt mit Überschrift" },
        { term: "<article>", definition: "Eigenständiger Inhalt" },
        { term: "<aside>", definition: "Seiteninhalt" },
        { term: "<footer>", definition: "Seiten/Abschnitts-Fußzeile" },
        { term: "<figure>", definition: "Umhüllt Bild/Inhalt" },
        { term: "<figcaption>", definition: "Bildunterschrift für Figur" },
        { term: "<blockquote>", definition: "Langes Zitat" },
        { term: "<cite>", definition: "Quelle des Zitats" },
        { term: "<mark>", definition: "Hervorgehobener Text (gelb)" },
        { term: "<time>", definition: "Daten und Zeiten" },
        { term: "<details>/<summary>", definition: "Erweiterbare Liste" },
        { term: "<caption>", definition: "Tabellentitel" },
        { term: "<thead>/<tbody>/<tfoot>", definition: "Tabellenstruktur" },
      ],
    },
  },
};

export default translations;
