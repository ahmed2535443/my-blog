const translations = {
  ar: {
    sections: [
      {
        title: "ملخص كل ما تعلمناه في مرحلة HTML",
        content: [
          { type: "p", text: "تهانينا! لقد وصلت إلى الدرس الأخير في مرحلة HTML. دعنا نلخص كل ما تعلمته في هذه المرحلة:" },
          { type: "li", text: "الدرس 1 - مقدمة في HTML: تعلمنا ما هو HTML ولماذا نحتاجه، كيف يعمل المتصفح مع HTML، وصفحتنا الأولى بـ HTML." },
          { type: "li", text: "الدرس 2 - العناصر والنصوص: تعلمنا عن أنواع العناصر، العناوين، الفقرات، القوائم، والنص العريض والمائل." },
          { type: "li", text: "الدرس 3 - الخصائص والجداول: تعلمنا عن الخصائص (id، class، style)، وبناء الجداول مع thead وtbody وtfoot." },
          { type: "li", text: "الدرس 4 - الروابط والصور: تعلمنا كيفية إنشاء الروابط، أنواع الروابط، وإضافة الصور مع نص alt." },
          { type: "li", text: "الدرس 5 - النماذج: تعلمنا كيفية بناء النماذج التفاعلية، أنواع حقول الإدخال، والتحقق من صحة البيانات." },
          { type: "li", text: "الدرس 6 - HTML الدلالي: تعلمنا أهمية العناصر الدلالية وكيف تحسن هيكل صفحتك." },
          { type: "li", text: "الدرس 7 - إمكانية الوصول (A11y): تعلمنا كيفية جعل موقعك متاحاً للجميع باستخدام ARIA وأفضل الممارسات." },
          { type: "callout", title: "لديك الآن مهارات أساسية في:", text: "كتابة HTML نظيف ودلالي، بناء هيكل صفحات الويب، إنشاء نماذج تفاعلية، تحسين إمكانية الوصول، وفهم كيف يعمل المتصفح مع كودك." }
        ]
      },
      {
        title: "جدول مرجعي شامل لجميع علامات HTML الأساسية",
        content: [
          { type: "p", text: "إليك ملخص مرجعي سريع لأهم علامات HTML التي تعلمتها:" }
        ]
      },
      {
        title: "مشروع عملي: صفحة \"من نحن\" لشركة",
        content: [
          { type: "p", text: "الآن سنطبق كل ما تعلمناه لبناء صفحة \"من نihn\" متكاملة لشركة تقنية. سنستخدم HTML الدلالي، إمكانية الوصول، وأفضل الممارسات." },
          { type: "h3", text: "الخطوة 1: هيكل الصفحة الأساسي" },
          { type: "h3", text: "الخطوة 2: الترويسة مع الشعار والتنقل" },
          { type: "h3", text: "الخطوة 3: قسم البطل" },
          { type: "h3", text: "الخطوة 4: قسم الميزات" },
          { type: "h3", text: "الخطوة 5: قسم الفريق" },
          { type: "h3", text: "الخطوة 6: قسم الاتصال والتذييل" }
        ]
      },
      {
        title: "نصائح للتطوير المستمر",
        content: [
          { type: "li", text: "<strong>مارس يومياً:</strong> حاول بناء صفحة جديدة كل يوم." },
          { type: "li", text: "<strong>اقرأ كود الآخرين:</strong> تعلم من المواقع الأخرى." },
          { type: "li", text: "<strong>استخدم أدوات المطورين:</strong> F12 لفحص الكود." },
          { type: "li", text: "<strong>تابع التحديثات:</strong> HTML تتطور باستمرار." },
          { type: "li", text: "<strong>شارك في المجتمعات:</strong> Stack Overflow، GitHub." }
        ]
      }
    ],
    quiz: [
      {
        question: "ما هي العلامة التي تُستخدم لإنشاء رابط؟",
        options: ["<link>", "<a>", "<href>", "<url>"],
        explanation: "علامة <a> (anchor) تُستخدم لإنشاء الروابط مع خاصية href لتحديد الوجهة."
      }
    ],
    challenge: {
      title: "تحدي نهائي: صفحة \"من نحن\" متكاملة",
      description: "أنشئ صفحة \"من نحن\" متكاملة تشمل: 1. header وnav، 2. main مع article وsection، 3. قسم الميزات، 4. قسم الفريق، 5. نموذج اتصال، 6. footer، 7. صور بـ alt نصي، 8. تسلسل عنوان صحيح، 9. HTML دلالي."
    },
    cheatSheet: {
      title: "ملخص شامل لـ HTML",
      items: [
        { term: "الهيكل الأساسي", definition: "DOCTYPE، html، head، body" },
        { term: "العناصر النصية", definition: "h1-h6، p، strong، em، code" },
        { term: "القوائم", definition: "ul، ol， li， dl， dt， dd" },
        { term: "الروابط والصور", definition: "a href， img src/alt" },
        { term: "الجداول", definition: "table， tr， th， td， thead， tbody， tfoot" },
        { term: "النماذج", definition: "form， label， input types， select， textarea" },
        { term: "العناصر الدلالية", definition: "header， nav， main， article， section， footer" },
        { term: "إمكانية الوصول", definition: "alt， labels， ARIA， contrast" }
      ]
    }
  },
  en: {
    sections: [
      {
        title: "Summary of Everything We Learned in the HTML Stage",
        content: [
          { type: "p", text: "Congratulations! You've reached the final lesson in the HTML stage. Let's summarize everything you've learned in this stage:" },
          { type: "li", text: "Lesson 1 - Introduction to HTML: We learned what HTML is and why we need it, how the browser works with HTML, and our first HTML page." },
          { type: "li", text: "Lesson 2 - Elements and Text: We learned about element types, headings, paragraphs, lists, and bold and italic text." },
          { type: "li", text: "Lesson 3 - Attributes and Tables: We learned about attributes (id, class, style), and building tables with thead, tbody, and tfoot." },
          { type: "li", text: "Lesson 4 - Links and Images: We learned how to create links, types of links, and adding images with alt text." },
          { type: "li", text: "Lesson 5 - Forms: We learned how to build interactive forms, input types, and data validation." },
          { type: "li", text: "Lesson 6 - Semantic HTML: We learned the importance of semantic elements and how they improve your page structure." },
          { type: "li", text: "Lesson 7 - Accessibility (A11y): We learned how to make your website available to everyone using ARIA and best practices." },
          { type: "callout", title: "You now have foundational skills in:", text: "Writing clean, semantic HTML, building web page structures, creating interactive forms, improving accessibility, and understanding how the browser works with your code." },
        ],
      },
      {
        title: "Comprehensive Cheat Sheet for All Basic HTML Tags",
        content: [
          { type: "p", text: "Here is a quick reference summary of the most important HTML tags you learned:" },
        ],
      },
      {
        title: "Practical Project: Company \"About Us\" Page",
        content: [
          { type: "p", text: "Now we will apply everything we learned to build a complete \"About Us\" page for a tech company. We will use semantic HTML, accessibility, and best practices." },
          { type: "h3", text: "Step 1: Basic page structure" },
          { type: "h3", text: "Step 2: Page header with logo and navigation" },
          { type: "h3", text: "Step 3: Hero section" },
          { type: "h3", text: "Step 4: Services section" },
          { type: "h3", text: "Step 5: Team section" },
          { type: "h3", text: "Step 6: Contact form" },
          { type: "h3", text: "Step 7: Page footer" },
        ],
      },
      {
        title: "Common HTML Interview Questions",
        content: [
          { type: "p", text: "Here are some common interview questions related to HTML:" },
          { type: "li", text: "Q: What is the difference between HTML and HTML5? A: HTML5 is the latest version of HTML and includes new semantic tags (like <article> and <section>), better multimedia support, and accessibility and performance improvements." },
          { type: "li", text: "Q: What is the difference between div and span? A: <div> is a block element that starts on a new line, while <span> is an inline element that doesn't break the line. Both are generic without semantic meaning." },
          { type: "li", text: "Q: What is the difference between class and id? A: id is unique on the page and doesn't repeat, while class can be repeated for multiple elements. id has higher priority in CSS and is used for programmatic access." },
          { type: "li", text: "Q: Why do we use meta viewport? A: To make the site responsive on mobile devices. It tells the browser to set the page width to the device width." },
          { type: "li", text: "Q: What are semantic elements and why do we use them? A: Tags that carry semantic meaning like <header> and <nav>. They improve accessibility, SEO, and code maintainability." },
          { type: "li", text: "Q: What is doctype and why do we need it? A: <<!DOCTYPE html> tells the browser that the page is written in HTML5. Without it, the browser may work in compatibility mode (Quirks Mode)." },
          { type: "li", text: "Q: How do you improve your site's accessibility? A: Use semantic HTML, add alt to images, link labels to fields, ensure keyboard navigation, and use ARIA when needed." },
        ],
      },
      {
        title: "Comparison: Beginner Code vs Professional Code",
        content: [
          { type: "p", text: "Let's see the difference between beginner and professional code for the same content:" },
          { type: "h3", text: "Beginner Code:" },
          { type: "h3", text: "Professional Code:" },
          { type: "callout", title: "Key differences:", text: "DOCTYPE and meta viewport and charset, semantic HTML instead of div for everything, descriptive alt text for images, labels linked to fields, no using br for spacing, button instead of div with onclick, skip link for accessibility, aria labels and semantic landmarks." },
        ],
      },
      {
        title: "Tips for Transitioning to the CSS Stage",
        content: [
          { type: "p", text: "Now that you've mastered HTML, you're ready to move on to the CSS stage to style your pages. Here are tips for a smooth transition:" },
          { type: "li", text: "Think of HTML as structure: HTML gives you the structure and semantics. CSS gives you the appearance and design. Don't mix them." },
          { type: "li", text: "Start with structure first: Write HTML first and make sure it's correct before adding any CSS." },
          { type: "li", text: "Don't use inline styles: Avoid using style=\"...\" in HTML. Use external CSS files." },
          { type: "li", text: "Understand the Box Model: Every HTML element is a box containing content + padding + border + margin." },
          { type: "li", text: "Learn about Flexbox and Grid: They are the two fundamental tools for layout in modern CSS." },
          { type: "li", text: "Start with responsive design: Learn how to make your site work on all screen sizes from the beginning." },
          { type: "li", text: "Practice with small projects: Convert the HTML pages you created into styled pages with CSS." },
          { type: "callout", title: "Tip:", text: "In the CSS stage, we will learn how to style all the HTML elements we've learned. Your pages will transform from simple text pages to professional, attractive websites!" },
        ],
      },
      {
        title: "What Happens Behind the Scenes? — Comprehensive Summary",
        content: [
          { type: "p", text: "During the HTML stage, we learned what happens behind the scenes when a web page loads:" },
          { type: "li", text: "Page request: The browser sends a request to the server to get the HTML file." },
          { type: "li", text: "HTML parsing: The browser reads the HTML file line by line and converts it into a tree structure (DOM Tree)." },
          { type: "li", text: "Building the Accessibility Tree: The browser also builds a separate accessibility tree for screen readers." },
          { type: "li", text: "Applying CSS (if present): The browser combines HTML with CSS to build the Render Tree." },
          { type: "li", text: "Layout: The browser calculates the position and dimensions of each element." },
          { type: "li", text: "Paint: The browser draws every element on the screen." },
        ],
      },
      {
        title: "HTML Stage Summary",
        content: [
          { type: "li", text: "HTML is the foundation upon which all web pages are built" },
          { type: "li", text: "We learned to write correct HTML tags with attributes and values" },
          { type: "li", text: "We learned to create links, images, and interactive forms" },
          { type: "li", text: "We learned the importance of semantic HTML for improving page structure" },
          { type: "li", text: "We learned accessibility basics (A11y) to make the site available to everyone" },
          { type: "li", text: "We built a complete practical example of a professional \"About Us\" page" },
          { type: "li", text: "You are now ready to move on to the CSS stage to style and design your pages!" },
        ],
      },
    ],
    quiz: [
      {
        question: "Which of the following represents valid, professional HTML code?",
        options: [
          "<html><body><div>Text</div></body></html>",
          "<!DOCTYPE html><html lang='ar'><body><p>Text</p></body></html>",
          "<!DOCTYPE html><html lang=\"ar\" dir=\"rtl\"><head><meta charset=\"UTF-8\"></head><body><p>Text</p></body></html>",
          "<div>Text</div>",
        ],
        explanation: "The third option is the most complete and correct: it includes DOCTYPE, lang, dir, charset, head, and body.",
      },
      {
        question: "Why do we use alt on images?",
        options: [
          "To improve image loading speed",
          "To improve image color",
          "To provide alternative text for the blind and improve SEO",
          "To add visual effects to the image",
        ],
        explanation: "Alt text is read by screen readers for blind users, helps search engines understand the image content, and appears if the image fails to load.",
      },
      {
        question: "What is the next step after mastering HTML?",
        options: [
          "Learn Python",
          "Learn CSS to style and design pages",
          "Learn databases",
          "Start deploying immediately",
        ],
        explanation: "CSS is the natural next step. HTML gives you structure and semantics, and CSS gives you appearance and design. Together they create a complete web page.",
      },
    ],
    challenge: {
      title: "Final Challenge: Build a complete HTML page from scratch",
      description: "Create a \"Frequently Asked Questions\" (FAQ) page for your personal project using everything you've learned. It must include: 1. Complete page structure (<!DOCTYPE>, <html>, <head>, <body>), 2. Page header with logo and semantic navigation, 3. Main heading and sequential subheadings, 4. <details> and <summary> elements for questions, 5. Image with alt text, 6. Contact form with linked labels, 7. Page footer with copyright information, 8. Accessibility features (skip link, aria labels).",
    },
    cheatSheet: {
      title: "Comprehensive HTML Stage Cheat Sheet",
      items: [
        { term: "Page Structure", definition: "<!DOCTYPE html><html lang=\"ar\" dir=\"rtl\"><head>...</head><body>...</body></html>" },
        { term: "Semantic Elements", definition: "<header> <nav> <main> <section> <article> <aside> <footer> <figure> <figcaption> <blockquote> <cite> <time>" },
        { term: "Forms", definition: "<form><label for=\"x\">Name</label><input type=\"text\" id=\"x\" required><textarea></textarea><select>...</select><button type=\"submit\">Submit</button></form>" },
        { term: "Links", definition: "<a href=\"url\">text</a>, <a href=\"url\" target=\"blank\">new</a>, <a href=\"mailto:x@x.com\">email</a>" },
        { term: "Images", definition: "<img src=\"pic.jpg\" alt=\"description\" loading=\"lazy\" />" },
        { term: "Accessibility", definition: "aria-label, aria-required, aria-describedby, aria-invalid, aria-current, role=\"alert\" role=\"button\", class=\"skip-link\" sr-only" },
        { term: "Pro Tips", definition: "1. HTML first, CSS second, 2. Always use semantic HTML, 3. alt for every image, 4. label for every field, 5. Skip link for accessibility, 6. No br for spacing, 7. No div for everything, 8. Test with Tab and Screen Reader" },
      ],
    },
  },
  fr: {
    sections: [
      {
        title: "Résumé de tout ce que nous avons appris dans l'étape HTML",
        content: [
          { type: "p", text: "Félicitations ! Vous êtes arrivé à la dernière leçon de l'étape HTML. Résumons tout ce que vous avez appris dans cette étape :" },
          { type: "li", text: "Leçon 1 - Introduction à HTML : Nous avons appris ce qu'est HTML et pourquoi nous en avons besoin, comment le navigateur fonctionne avec HTML, et notre première page HTML." },
          { type: "li", text: "Leçon 2 - Éléments et texte : Nous avons appris les types d'éléments, les titres, les paragraphes, les listes, et le texte en gras et en italique." },
          { type: "li", text: "Leçon 3 - Attributs et tableaux : Nous avons appris les attributs (id, class, style), et la construction de tableaux avec thead, tbody et tfoot." },
          { type: "li", text: "Leçon 4 - Liens et images : Nous avons appris comment créer des liens, les types de liens, et ajouter des images avec texte alternatif." },
          { type: "li", text: "Leçon 5 - Formulaires : Nous avons appris comment construire des formulaires interactifs, les types de champs et la validation des données." },
          { type: "li", text: "Leçon 6 - HTML sémantique : Nous avons appris l'importance des éléments sémantiques et comment ils améliorent la structure de votre page." },
          { type: "li", text: "Leçon 7 - Accessibilité (A11y) : Nous avons appris comment rendre votre site web accessible à tous en utilisant ARIA et les meilleures pratiques." },
          { type: "callout", title: "Vous avez maintenant des compétences de base en :", text: "Écrire du HTML propre et sémantique, construire des structures de pages web, créer des formulaires interactifs, améliorer l'accessibilité, et comprendre comment le navigateur fonctionne avec votre code." },
        ],
      },
      {
        title: "Aide-mémoire complet pour toutes les balises HTML de base",
        content: [
          { type: "p", text: "Voici un résumé de référence rapide des balises HTML les plus importantes que vous avez apprises :" },
        ],
      },
      {
        title: "Projet pratique : Page \"À propos\" d'entreprise",
        content: [
          { type: "p", text: "Maintenant, nous allons appliquer tout ce que nous avons appris pour construire une page \"À propos\" complète pour une entreprise technologique. Nous utiliserons le HTML sémantique, l'accessibilité et les meilleures pratiques." },
          { type: "h3", text: "Étape 1 : Structure de base de la page" },
          { type: "h3", text: "Étape 2 : En-tête de la page avec logo et navigation" },
          { type: "h3", text: "Étape 3 : Section héros" },
          { type: "h3", text: "Étape 4 : Section des services" },
          { type: "h3", text: "Étape 5 : Section de l'équipe" },
          { type: "h3", text: "Étape 6 : Formulaire de contact" },
          { type: "h3", text: "Étape 7 : Pied de page" },
        ],
      },
      {
        title: "Questions d'entrevue courantes sur HTML",
        content: [
          { type: "p", text: "Voici quelques questions d'entrevue courantes liées à HTML :" },
          { type: "li", text: "Q : Quelle est la différence entre HTML et HTML5 ? R : HTML5 est la dernière version de HTML et comprend de nouvelles balises sémantiques (comme <article> et <section>), une meilleure prise en charge des multimédias, et des améliorations d'accessibilité et de performance." },
          { type: "li", text: "Q : Quelle est la différence entre div et span ? R : <div> est un élément bloc qui commence sur une nouvelle ligne, tandis que <span> est un élément inline qui ne rompt pas la ligne. Les deux sont génériques sans signification sémantique." },
          { type: "li", text: "Q : Quelle est la différence entre class et id ? R : id est unique sur la page et ne se répète pas, tandis que class peut être répété pour plusieurs éléments. id a une priorité plus élevée en CSS et est utilisé pour l'accès programmatique." },
          { type: "li", text: "Q : Pourquoi utilisons-nous meta viewport ? R : Pour rendre le site responsive sur les appareils mobiles. Il indique au navigateur de définir la largeur de la page sur la largeur de l'appareil." },
          { type: "li", text: "Q : Qu'est-ce que les éléments sémantiques et pourquoi les utilisons-nous ? R : Des balises qui portent une signification sémantique comme <header> et <nav>. Elles améliorent l'accessibilité, le SEO et la maintenabilité du code." },
          { type: "li", text: "Q : Qu'est-ce que le doctype et pourquoi en avons-nous besoin ? R : <!DOCTYPE html> indique au navigateur que la page est écrite en HTML5. Sans lui, le navigateur peut fonctionner en mode compatibilité (Quirks Mode)." },
          { type: "li", text: "Q : Comment améliorez-vous l'accessibilité de votre site ? R : Utilisez le HTML sémantique, ajoutez alt aux images, liez les labels aux champs, assurez la navigation au clavier, et utilisez ARIA quand c'est nécessaire." },
        ],
      },
      {
        title: "Comparaison : Code débutant vs Code professionnel",
        content: [
          { type: "p", text: "Voyons la différence entre le code d'un débutant et celui d'un professionnel pour le même contenu :" },
          { type: "h3", text: "Code débutant :" },
          { type: "h3", text: "Code professionnel :" },
          { type: "callout", title: "Différences clés :", text: "DOCTYPE et meta viewport et charset, HTML sémantique au lieu de div pour tout, texte alt descriptif pour les images, labels liés aux champs, pas d'utilisation de br pour l'espacement, button au lieu de div avec onclick, lien d'évitement pour l'accessibilité, aria labels et repères sémantiques." },
        ],
      },
      {
        title: "Conseils pour la transition vers l'étape CSS",
        content: [
          { type: "p", text: "Maintenant que vous maîtrisez HTML, vous êtes prêt à passer à l'étape CSS pour styliser vos pages. Voici des conseils pour une transition fluide :" },
          { type: "li", text: "Pensez à HTML comme structure : HTML vous donne la structure et la sémantique. CSS vous donne l'apparence et le design. Ne les mélangez pas." },
          { type: "li", text: "Commencez par la structure d'abord : Écrivez HTML d'abord et assurez-vous qu'il est correct avant d'ajouter du CSS." },
          { type: "li", text: "N'utilisez pas de styles inline : Évitez d'utiliser style=\"...\" dans HTML. Utilisez des fichiers CSS externes." },
          { type: "li", text: "Comprenez le modèle de boîte : Chaque élément HTML est une boîte contenant le contenu + la marge interne + la bordure + la marge externe." },
          { type: "li", text: "Apprenez Flexbox et Grid : Ce sont les deux outils fondamentaux pour la mise en page en CSS moderne." },
          { type: "li", text: "Commencez par le design responsive : Apprenez à faire fonctionner votre site sur toutes les tailles d'écran dès le début." },
          { type: "li", text: "Entraînez-vous avec de petits projets : Convertissez les pages HTML que vous avez créées en pages stylisées avec CSS." },
          { type: "callout", title: "Conseil :", text: "Dans l'étape CSS, nous apprendrons à styliser tous les éléments HTML que nous avons appris. Vos pages se transformeront de pages texte simples en sites web professionnels et attrayants !" },
        ],
      },
      {
        title: "Que se passe-t-il en coulisses ? — Résumé complet",
        content: [
          { type: "p", text: "Pendant l'étape HTML, nous avons appris ce qui se passe en coulisses lors du chargement d'une page web :" },
          { type: "li", text: "Requête de page : Le navigateur envoie une requête au serveur pour obtenir le fichier HTML." },
          { type: "li", text: "Analyse HTML : Le navigateur lit le fichier HTML ligne par ligne et le convertit en une structure arborescente (DOM Tree)." },
          { type: "li", text: "Construction de l'arbre d'accessibilité : Le navigateur construit également un arbre d'accessibilité séparé pour les lecteurs d'écran." },
          { type: "li", text: "Application de CSS (si présent) : Le navigateur combine HTML avec CSS pour construire l'arbre de rendu." },
          { type: "li", text: "Mise en page : Le navigateur calcule la position et les dimensions de chaque élément." },
          { type: "li", text: "Rendu : Le navigateur dessine chaque élément à l'écran." },
        ],
      },
      {
        title: "Résumé de l'étape HTML",
        content: [
          { type: "li", text: "HTML est la fondation sur laquelle toutes les pages web sont construites" },
          { type: "li", text: "Nous avons appris à écrire des balises HTML correctes avec attributs et valeurs" },
          { type: "li", text: "Nous avons appris à créer des liens, des images et des formulaires interactifs" },
          { type: "li", text: "Nous avons appris l'importance du HTML sémantique pour améliorer la structure de la page" },
          { type: "li", text: "Nous avons appris les bases de l'accessibilité (A11y) pour rendre le site accessible à tous" },
          { type: "li", text: "Nous avons construit un exemple pratique complet d'une page \"À propos\" professionnelle" },
          { type: "li", text: "Vous êtes maintenant prêt à passer à l'étape CSS pour styliser et concevoir vos pages !" },
        ],
      },
    ],
    quiz: [
      {
        question: "Lequel des éléments suivants représente un code HTML valide et professionnel ?",
        options: [
          "<html><body><div>Texte</div></body></html>",
          "<!DOCTYPE html><html lang='ar'><body><p>Texte</p></body></html>",
          "<!DOCTYPE html><html lang=\"ar\" dir=\"rtl\"><head><meta charset=\"UTF-8\"></head><body><p>Texte</p></body></html>",
          "<div>Texte</div>",
        ],
        explanation: "La troisième option est la plus complète et correcte : elle comprend DOCTYPE, lang, dir, charset, head et body.",
      },
      {
        question: "Pourquoi utilisons-nous alt sur les images ?",
        options: [
          "Pour améliorer la vitesse de chargement de l'image",
          "Pour améliorer la couleur de l'image",
          "Pour fournir du texte alternatif pour les aveugles et améliorer le SEO",
          "Pour ajouter des effets visuels à l'image",
        ],
        explanation: "Le texte alt est lu par les lecteurs d'écran pour les utilisateurs aveugles, aide les moteurs de recherche à comprendre le contenu de l'image, et apparaît si l'image ne se charge pas.",
      },
      {
        question: "Quelle est la prochaine étape après la maîtrise de HTML ?",
        options: [
          "Apprendre Python",
          "Apprendre CSS pour styliser et concevoir des pages",
          "Apprendre les bases de données",
          "Commencer le déploiement immédiatement",
        ],
        explanation: "CSS est l'étape naturelle suivante. HTML vous donne la structure et la sémantique, et CSS vous donne l'apparence et le design. Ensemble, ils créent une page web complète.",
      },
    ],
    challenge: {
      title: "Défi final : Créez une page HTML complète from scratch",
      description: "Créez une page \"Foire aux questions\" (FAQ) pour votre projet personnel en utilisant tout ce que vous avez appris. Elle doit inclure : 1. Structure complète de la page (<!DOCTYPE>, <html>, <head>, <body>), 2. En-tête de la page avec logo et navigation sémantique, 3. Titre principal et sous-titres séquentiels, 4. Éléments <details> et <summary> pour les questions, 5. Image avec texte alt, 6. Formulaire de contact avec labels liés, 7. Pied de page avec informations de copyright, 8. Fonctionnalités d'accessibilité (lien d'évitement, aria labels).",
    },
    cheatSheet: {
      title: "Aide-mémoire complet de l'étape HTML",
      items: [
        { term: "Structure de page", definition: "<!DOCTYPE html><html lang=\"ar\" dir=\"rtl\"><head>...</head><body>...</body></html>" },
        { term: "Éléments sémantiques", definition: "<header> <nav> <main> <section> <article> <aside> <footer> <figure> <figcaption> <blockquote> <cite> <time>" },
        { term: "Formulaires", definition: "<form><label for=\"x\">Nom</label><input type=\"text\" id=\"x\" required><textarea></textarea><select>...</select><button type=\"submit\">Soumettre</button></form>" },
        { term: "Liens", definition: "<a href=\"url\">texte</a>, <a href=\"url\" target=\"blank\">nouveau</a>, <a href=\"mailto:x@x.com\">email</a>" },
        { term: "Images", definition: "<img src=\"pic.jpg\" alt=\"description\" loading=\"lazy\" />" },
        { term: "Accessibilité", definition: "aria-label, aria-required, aria-describedby, aria-invalid, aria-current, role=\"alert\" role=\"button\", class=\"skip-link\" sr-only" },
        { term: "Conseils pro", definition: "1. HTML d'abord, CSS ensuite, 2. Utilisez toujours le HTML sémantique, 3. alt pour chaque image, 4. label pour chaque champ, 5. Lien d'évitement pour l'accessibilité, 6. Pas de br pour l'espacement, 7. Pas de div pour tout, 8. Testez avec Tab et lecteur d'écran" },
      ],
    },
  },
  de: {
    sections: [
      {
        title: "Zusammenfassung alles, was wir in der HTML-Phase gelernt haben",
        content: [
          { type: "p", text: "Herzlichen Glückwunsch! Sie haben die letzte Lektion der HTML-Phase erreicht. Fassen wir zusammen, was Sie in dieser Phase gelernt haben:" },
          { type: "li", text: "Lektion 1 - Einführung in HTML: Wir haben gelernt, was HTML ist und warum wir es brauchen, wie der Browser mit HTML arbeitet, und unsere erste HTML-Seite." },
          { type: "li", text: "Lektion 2 - Elemente und Text: Wir haben gelernt über Elementtypen, Überschriften, Absätze, Listen und fetten und kursiven Text." },
          { type: "li", text: "Lektion 3 - Attribute und Tabellen: Wir haben gelernt über Attribute (id, class, style) und den Aufbau von Tabellen mit thead, tbody und tfoot." },
          { type: "li", text: "Lektion 4 - Links und Bilder: Wir haben gelernt, wie man Links erstellt, Arten von Links, und das Hinzufügen von Bildern mit Alternativtext." },
          { type: "li", text: "Lektion 5 - Formulare: Wir haben gelernt, wie man interaktive Formulare erstellt, Eingabetypen und Datenvalidierung." },
          { type: "li", text: "Lektion 6 - Semantic HTML: Wir haben die Bedeutung semantischer Elemente gelernt und wie sie Ihre Seitenstruktur verbessern." },
          { type: "li", text: "Lektion 7 - Barrierefreiheit (A11y): Wir haben gelernt, wie man Ihre Website mit ARIA und Best Practices für alle zugänglich macht." },
          { type: "callout", title: "Sie haben jetzt Grundfertigkeiten in:", text: "Sauberes, semantisches HTML schreiben, Webseitenstrukturen aufbauen, interaktive Formulare erstellen, Barrierefreiheit verbessern und verstehen, wie der Browser mit Ihrem Code arbeitet." },
        ],
      },
      {
        title: "Umfassender Spickzettel für alle grundlegenden HTML-Tags",
        content: [
          { type: "p", text: "Hier ist eine schnelle Referenzübersicht der wichtigsten HTML-Tags, die Sie gelernt haben:" },
        ],
      },
      {
        title: "Praktisches Projekt: Unternehmens-Seite \"Über uns\"",
        content: [
          { type: "p", text: "Jetzt wenden wir alles an, was wir gelernt haben, um eine vollständige \"Über uns\"-Seite für ein Technologieunternehmen zu erstellen. Wir werden Semantic HTML, Barrierefreiheit und Best Practices verwenden." },
          { type: "h3", text: "Schritt 1: Grundlegende Seitenstruktur" },
          { type: "h3", text: "Schritt 2: Seitenheader mit Logo und Navigation" },
          { type: "h3", text: "Schritt 3: Hero-Bereich" },
          { type: "h3", text: "Schritt 4: Dienstleistungsbereich" },
          { type: "h3", text: "Schritt 5: Team-Bereich" },
          { type: "h3", text: "Schritt 6: Kontaktformular" },
          { type: "h3", text: "Schritt 7: Seitenfußzeile" },
        ],
      },
      {
        title: "Häufige HTML-Interviewfragen",
        content: [
          { type: "p", text: "Hier sind einige häufige Interviewfragen zu HTML:" },
          { type: "li", text: "F: Was ist der Unterschied zwischen HTML und HTML5? A: HTML5 ist die neueste Version von HTML und umfasst neue semantische Tags (wie <article> und <section>), bessere Multimedia-Unterstützung und Barrierefreiheits- und Performance-Verbesserungen." },
          { type: "li", text: "F: Was ist der Unterschied zwischen div und span? A: <div> ist ein Blockelement, das in einer neuen Zeile beginnt, während <span> ein Inline-Element ist, das die Zeile nicht bricht. Beide sind generisch ohne semantische Bedeutung." },
          { type: "li", text: "F: Was ist der Unterschied zwischen class und id? A: id ist eindeutig auf der Seite und wiederholt sich nicht, während class für mehrere Elemente wiederholt werden kann. id hat höhere Priorität in CSS und wird für programmatischen Zugriff verwendet." },
          { type: "li", text: "F: Warum verwenden wir meta viewport? A: Um die Seite auf Mobilgeräten responsiv zu machen. Es teilt dem Browser mit, die Seitenbreite auf die Gerätebreite einzustellen." },
          { type: "li", text: "F: Was sind semantische Elemente und warum verwenden wir sie? A: Tags, die semantische Bedeutung tragen wie <header> und <nav>. Sie verbessern Barrierefreiheit, SEO und Code-Wartbarkeit." },
          { type: "li", text: "F: Was ist doctype und warum brauchen wir es? A: <!DOCTYPE html> teilt dem Browser mit, dass die Seite in HTML5 geschrieben ist. Ohne es kann der Browser im Kompatibilitätsmodus (Quirks Mode) arbeiten." },
          { type: "li", text: "F: Wie verbessern Sie die Barrierefreiheit Ihrer Seite? A: Verwenden Sie Semantic HTML, fügen Sie alt zu Bildern hinzu, verknüpfen Sie Labels mit Feldern, stellen Sie Tastaturnavigation sicher und verwenden Sie ARIA bei Bedarf." },
        ],
      },
      {
        title: "Vergleich: Anfänger-Code vs professioneller Code",
        content: [
          { type: "p", text: "Schauen wir uns den Unterschied zwischen Anfänger-Code und professionellem Code für denselben Inhalt an:" },
          { type: "h3", text: "Anfänger-Code:" },
          { type: "h3", text: "Professioneller Code:" },
          { type: "callout", title: "Wichtige Unterschiede:", text: "DOCTYPE und meta viewport und charset, Semantic HTML statt div für alles, beschreibender Alternativtext für Bilder, Labels mit Feldern verknüpft, keine Verwendung von br für Abstände, button statt div mit onclick, Skip-Link für Barrierefreiheit, aria-Labels und semantische Landmarks." },
        ],
      },
      {
        title: "Tipps für den Übergang zur CSS-Phase",
        content: [
          { type: "p", text: "Jetzt, Sie HTML gemeistert haben, sind Sie bereit, zur CSS-Phase überzugehen, um Ihre Seiten zu gestalten. Hier sind Tipps für einen reibungslosen Übergang:" },
          { type: "li", text: "Denken Sie an HTML als Struktur: HTML gibt Ihnen die Struktur und Semantik. CSS gibt Ihnen das Aussehen und Design. Vermischen Sie es nicht." },
          { type: "li", text: "Beginnen Sie mit der Struktur zuerst: Schreiben Sie zuerst HTML und stellen Sie sicher, dass es korrekt ist, bevor Sie CSS hinzufügen." },
          { type: "li", text: "Verwenden Sie keine Inline-Stile: Vermeiden Sie style=\"...\" in HTML. Verwenden Sie externe CSS-Dateien." },
          { type: "li", text: "Verstehen Sie das Box-Model: Jedes HTML-Element ist eine Box, die Inhalt + Innenabstand + Rahmen + Außenabstand enthält." },
          { type: "li", text: "Lernen Sie Flexbox und Grid: Sie sind die beiden grundlegenden Werkzeuge für Layouts in modernem CSS." },
          { type: "li", text: "Beginnen Sie mit responsivem Design: Lernen Sie, wie Ihre Seite auf alle Bildschirmgrößen von Anfang an funktioniert." },
          { type: "li", text: "Üben Sie mit kleinen Projekten: Konvertieren Sie die HTML-Seiten, die Sie erstellt haben, in gestylte Seiten mit CSS." },
          { type: "callout", title: "Tipp:", text: "In der CSS-Phase werden wir lernen, wie wir alle HTML-Elemente gestalten, die wir gelernt haben. Ihre Seiten verwandeln sich von einfachen Textseiten in professionelle, attraktive Websites!" },
        ],
      },
      {
        title: "Was passiert hinter den Kulissen? — Umfassende Zusammenfassung",
        content: [
          { type: "p", text: "Während der HTML-Phase haben wir gelernt, was hinter den Kulissen passiert, wenn eine Webseite geladen wird:" },
          { type: "li", text: "Seitenanfrage: Der Browser sendet eine Anfrage an den Server, um die HTML-Datei zu erhalten." },
          { type: "li", text: "HTML-Parsing: Der Browser liest die HTML-Datei Zeile für Zeile und wandelt sie in eine Baumstruktur (DOM Tree) um." },
          { type: "li", text: "Aufbau des Barrierefreiheitsbaums: Der Browser baut auch einen separaten Barrierefreiheitsbaum für Screenreader auf." },
          { type: "li", text: "CSS anwenden (falls vorhanden): Der Browser kombiniert HTML mit CSS, um den Render Tree aufzubauen." },
          { type: "li", text: "Layout: Der Browser berechnet die Position und Abmessungen jedes Elements." },
          { type: "li", text: "Rendern: Der Browser zeichnet jedes Element auf dem Bildschirm." },
        ],
      },
      {
        title: "Zusammenfassung der HTML-Phase",
        content: [
          { type: "li", text: "HTML ist die Grundlage, auf der alle Webseiten aufgebaut sind" },
          { type: "li", text: "Wir haben gelernt, korrekte HTML-Tags mit Attributen und Werten zu schreiben" },
          { type: "li", text: "Wir haben gelernt, Links, Bilder und interaktive Formulare zu erstellen" },
          { type: "li", text: "Wir haben die Bedeutung von Semantic HTML zur Verbesserung der Seitenstruktur gelernt" },
          { type: "li", text: "Wir haben die Grundlagen der Barrierefreiheit (A11y) gelernt, um die Seite für alle zugänglich zu machen" },
          { type: "li", text: "Wir haben ein vollständiges praktisches Beispiel einer professionellen \"Über uns\"-Seite erstellt" },
          { type: "li", text: "Sie sind jetzt bereit, zur CSS-Phase überzugehen, um Ihre Seiten zu gestalten und zu entwerfen!" },
        ],
      },
    ],
    quiz: [
      {
        question: "Welches der folgenden repräsentiert gültigen, professionellen HTML-Code?",
        options: [
          "<html><body><div>Text</div></body></html>",
          "<!DOCTYPE html><html lang='ar'><body><p>Text</p></body></html>",
          "<!DOCTYPE html><html lang=\"ar\" dir=\"rtl\"><head><meta charset=\"UTF-8\"></head><body><p>Text</p></body></html>",
          "<div>Text</div>",
        ],
        explanation: "Die dritte Option ist die vollständigste und korrekte: Sie enthält DOCTYPE, lang, dir, charset, head und body.",
      },
      {
        question: "Warum verwenden wir alt auf Bildern?",
        options: [
          "Um die Ladezeit des Bildes zu verbessern",
          "Um die Farbe des Bildes zu verbessern",
          "Um Alternativtext für Blinde bereitzustellen und SEO zu verbessern",
          "Um visuelle Effekte zum Bild hinzuzufügen",
        ],
        explanation: "Alt-Text wird von Screenreadern für blinde Benutzer gelesen, hilft Suchmaschinen, den Bildinhalt zu verstehen, und erscheint, wenn das Bild nicht geladen werden kann.",
      },
      {
        question: "Was ist der nächste Schritt nach der Beherrschung von HTML?",
        options: [
          "Python lernen",
          "CSS lernen, um Seiten zu gestalten und zu entwerfen",
          "Datenbanken lernen",
          "Sofort mit dem Deployment beginnen",
        ],
        explanation: "CSS ist der natürliche nächste Schritt. HTML gibt Ihnen Struktur und Semantik, und CSS gibt Ihnen Aussehen und Design. Zusammen erstellen sie eine vollständige Webseite.",
      },
    ],
    challenge: {
      title: "Finale Herausforderung: Erstellen Sie eine vollständige HTML-Seite von Grund auf",
      description: "Erstellen Sie eine \"Häufig gestellte Fragen\" (FAQ)-Seite für Ihr persönliches Projekt mit allem, was Sie gelernt haben. Sie muss umfassen: 1. Vollständige Seitenstruktur (<!DOCTYPE>, <html>, <head>, <body>), 2. Seitenheader mit Logo und semantischer Navigation, 3. Hauptüberschrift und aufeinanderfolgende Unterüberschriften, 4. <details> und <summary>-Elemente für Fragen, 5. Bild mit Alternativtext, 6. Kontaktformular mit verknüpften Labels, 7. Seitenfußzeile mit Urheberrechtsinformationen, 8. Barrierefreiheitsfunktionen (Skip-Link, aria-Labels).",
    },
    cheatSheet: {
      title: "Umfassender HTML-Phase Spickzettel",
      items: [
        { term: "Seitenstruktur", definition: "<!DOCTYPE html><html lang=\"ar\" dir=\"rtl\"><head>...</head><body>...</body></html>" },
        { term: "Semantische Elemente", definition: "<header> <nav> <main> <section> <article> <aside> <footer> <figure> <figcaption> <blockquote> <cite> <time>" },
        { term: "Formulare", definition: "<form><label for=\"x\">Name</label><input type=\"text\" id=\"x\" required><textarea></textarea><select>...</select><button type=\"submit\">Absenden</button></form>" },
        { term: "Links", definition: "<a href=\"url\">Text</a>, <a href=\"url\" target=\"blank\">neu</a>, <a href=\"mailto:x@x.com\">E-Mail</a>" },
        { term: "Bilder", definition: "<img src=\"pic.jpg\" alt=\"Beschreibung\" loading=\"lazy\" />" },
        { term: "Barrierefreiheit", definition: "aria-label, aria-required, aria-describedby, aria-invalid, aria-current, role=\"alert\" role=\"button\", class=\"skip-link\" sr-only" },
        { term: "Profi-Tipps", definition: "1. HTML zuerst, CSS danach, 2. Verwenden Sie immer Semantic HTML, 3. alt für jedes Bild, 4. label für jedes Feld, 5. Skip-Link für Barrierefreiheit, 6. Kein br für Abstände, 7. Kein div für alles, 8. Testen Sie mit Tab und Screenreader" },
      ],
    },
  },
};

export default translations;
