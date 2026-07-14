const translations = {
  en: {
    sections: [
      {
        title: "What Is Accessibility and Why Is It Important?",
        content: [
          { type: "p", text: "Accessibility (also known as A11y — the number of letters between A and y is 11) is the practice of designing websites and applications so that they are available to everyone, regardless of their abilities or disabilities." },
          { type: "p", text: "Accessibility ensures that all users — including those with disabilities — can interact with your website and use it effectively. This is not a \"luxury\" but an ethical and legal responsibility in many countries." },
          { type: "callout", title: "Simple analogy:", text: "Imagine you are building a building. Would you only provide stairs? No, you need an elevator and wheelchair ramps and Braille cards. Accessibility is the same thing but for websites — making them available to everyone." },
          { type: "p", text: "The numbers speak: Approximately 15-20% of the world's population suffers from some form of disability. Ignoring them means losing a large group of users and potential customers." },
        ],
      },
      {
        title: "Who Benefits from Accessibility?",
        content: [
          { type: "p", text: "Accessibility is not only for the blind, but for all groups:" },
          { type: "li", text: "Blind and visually impaired: They use screen readers that read page content aloud. They need alt text for images and properly identified elements." },
          { type: "li", text: "Hearing impaired: They need captions for videos and alternative text for audio content." },
          { type: "li", text: "People with motor disabilities: They use a keyboard or special controllers to navigate instead of a mouse. They need all interactive elements to be reachable by pressing Tab." },
          { type: "li", text: "People with cognitive disorders: They need a clear, simple design with logical content structure." },
          { type: "li", text: "Elderly people: They may suffer from poor vision or fine motor skills. They need large fonts and clear buttons." },
          { type: "li", text: "Users in non-ideal conditions: Small screen, dim lighting, slow connection. Accessibility improves the experience for everyone." },
          { type: "callout", title: "Important fact:", text: "Improving accessibility benefits everyone, not just people with disabilities. For example, alt text for images helps search engines like Google understand your images." },
        ],
      },
      {
        title: "The Problem That Accessibility Solves",
        content: [
          { type: "p", text: "Without accessibility, the following happens:" },
          { type: "li", text: "A blind person cannot read your page content because the screen reader doesn't understand the structure." },
          { type: "li", text: "A person with a motor disability cannot click a small button or access a dropdown menu." },
          { type: "li", text: "A hearing impaired person cannot understand a video without captions." },
          { type: "li", text: "An elderly person has difficulty reading small text or clicking on links that are close together." },
          { type: "p", text: "Accessibility solves these problems through a set of practices and standards that ensure your website works for everyone." },
        ],
      },
      {
        title: "Semantic HTML and Its Relationship to Accessibility",
        content: [
          { type: "p", text: "In the previous lesson we learned about Semantic HTML. Now we will learn that using semantic tags is not just for improving code structure — it is a fundamental tool for accessibility." },
          { type: "p", text: "Screen readers rely heavily on semantic HTML:" },
          { type: "li", text: "When you use <nav>, it tells the blind person: \"You are now in the navigation section\"" },
          { type: "li", text: "When you use <main>, it says: \"Jump to the main content\"" },
          { type: "li", text: "When you use <article>, it says: \"Standalone content\"" },
          { type: "li", text: "When you use <h1> to <h6>, it can build a \"table of contents\" for the page" },
        ],
      },
      {
        title: "Image Alt Text — Alternative Text",
        content: [
          { type: "p", text: "The alt attribute on the <img> tag is one of the most important accessibility elements. The screen reader reads this text instead of the image." },
          { type: "h3", text: "Rules for writing good alt text:" },
          { type: "callout", title: "Important rule:", text: "Do not start alt text with \"Image of\" or \"Picture of\". The screen reader already knows it's an image and will say \"Image: brown cat\". No need to repeat this information." },
        ],
      },
      {
        title: "Labels and Accessibility",
        content: [
          { type: "p", text: "Every input field in a form should have a clear label associated with it using <label>. This tells the screen reader the field name and allows the user to click the label to focus the field." },
          { type: "callout", title: "Why are for/id important?", text: "The for attribute in <label> links the label to the field via its id. This allows: (1) the screen reader knows the field name, (2) clicking the label automatically focuses the field." },
        ],
      },
      {
        title: "Keyboard Navigation",
        content: [
          { type: "p", text: "Some users cannot use a mouse and rely solely on the keyboard. All interactive elements must be reachable by pressing the Tab key." },
          { type: "h3", text: "Skip Link:" },
          { type: "p", text: "A hidden link that appears only when pressing Tab, allowing the user to skip content and go directly to the main content:" },
        ],
      },
      {
        title: "Color Contrast",
        content: [
          { type: "p", text: "The contrast between text color and background color is very important for reading content. The international standard is WCAG (Web Content Accessibility Guidelines)." },
          { type: "li", text: "AA Level (minimum): Contrast ratio of 4.5:1 for normal text, 3:1 for large text." },
          { type: "li", text: "AAA Level (highest): Contrast ratio of 7:1 for normal text, 4.5:1 for large text." },
          { type: "callout", title: "Useful tool:", text: "Use WebAIM Contrast Checker (webaim.org/resources/contrastchecker) to check the contrast ratio between any two colors." },
        ],
      },
      {
        title: "Introduction to ARIA",
        content: [
          { type: "p", text: "ARIA stands for Accessible Rich Internet Applications. It is a set of attributes that improve accessibility for elements that don't provide sufficient semantic HTML." },
          { type: "callout", title: "The Golden Rule of ARIA:", text: "Don't use ARIA if you can use semantic HTML! First try to use semantic elements, and only use ARIA as a last resort." },
          { type: "h3", text: "Most common ARIA attributes:" },
          { type: "h3", text: "Screen Reader Only content:" },
        ],
      },
      {
        title: "The role Attribute — Defining Roles",
        content: [
          { type: "p", text: "The role attribute tells the screen reader the type and role of the element. This is especially useful with custom elements:" },
        ],
      },
      {
        title: "Practical Example: Improving Form Accessibility",
        content: [
          { type: "p", text: "Let's take a simple contact form and improve its accessibility:" },
          { type: "h3", text: "Without accessibility:" },
          { type: "h3", text: "With improved accessibility:" },
          { type: "h3", text: "Improved error messages:" },
        ],
      },
      {
        title: "What Happens Behind the Scenes?",
        content: [
          { type: "p", text: "How do screen readers work with your page?" },
          { type: "li", text: "Building the accessibility tree: The screen reader builds a tree model from HTML based on semantic elements and ARIA attributes." },
          { type: "li", text: "Reading order: It reads content in the order it appears in the DOM (not necessarily the visual order)." },
          { type: "li", text: "Providing landmarks: It uses semantic elements (<header>, <nav>, <main>) to provide \"maps\" for the user." },
          { type: "li", text: "Quick navigation: The user can jump directly between sections (e.g., go directly to <main>)." },
          { type: "li", text: "Reading images: It reads the alt text instead of the image." },
          { type: "callout", title: "Did you know?", text: "You can test how your site looks to a screen reader by enabling VoiceOver on Mac (Cmd + F5) or Narrator on Windows (Win + Ctrl + Enter)." },
        ],
      },
      {
        title: "Common Accessibility Mistakes",
        content: [
          { type: "li", text: "Forgetting alt for images: Every image should have an alt attribute. Even if it's a decorative image, write alt=\"\" instead of omitting it." },
          { type: "li", text: "Using div instead of button: Writing <div onclick=\"...\">Click here</div> instead of <button>. The div cannot be reached by Tab and the screen reader doesn't know it's a button." },
          { type: "li", text: "Forgetting labels in forms: Every input field should have a clear label. Without it, the blind user doesn't know what is being asked of them." },
          { type: "li", text: "Relying only on color: Not using additional visual indicators (icons, text, shapes) alongside colors. Blind people cannot distinguish colors." },
          { type: "li", text: "Using tabindex with positive numbers: Using tabindex=\"5\" changes the natural tab order and breaks the user experience. Use only 0 or -1." },
          { type: "li", text: "Forgetting heading order: Skipping heading levels (e.g., from h1 to h3 directly) breaks the table of contents in the screen reader." },
        ],
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "Use semantic HTML first: Semantic elements provide free accessibility. Use <button> instead of <div>, and <nav> instead of <div class=\"nav\">." },
          { type: "li", text: "Write descriptive alt text for images: Describe the image content, not its appearance." },
          { type: "li", text: "Link every label to its corresponding field: Use for and id or wrap the label around the field." },
          { type: "li", text: "Ensure keyboard navigation: Test your site using only Tab, without a mouse." },
          { type: "li", text: "Use skip links: Allow users to skip repetitive content." },
          { type: "li", text: "Check color contrast: Use tools like WebAIM Contrast Checker." },
          { type: "li", text: "Test with automation tools: Use axe DevTools or Lighthouse to check accessibility." },
          { type: "li", text: "Use ARIA carefully: Semantic HTML is preferred. ARIA is a last resort." },
        ],
      },
      {
        title: "Accessibility Testing Tools",
        content: [
          { type: "p", text: "There are free tools that help you check your site's accessibility:" },
          { type: "li", text: "Chrome DevTools (F12) — Lighthouse tab: Checks accessibility and gives a comprehensive report with improvement suggestions." },
          { type: "li", text: "axe DevTools (browser extension): A free tool for automatically discovering accessibility issues." },
          { type: "li", text: "WebAIM WAVE: An online tool for checking accessibility." },
          { type: "li", text: "VoiceOver (Mac) or Narrator (Windows): Test your site with a real screen reader." },
          { type: "li", text: "WebAIM Contrast Checker: Check color contrast ratio." },
        ],
      },
      {
        title: "Lesson Summary",
        content: [
          { type: "li", text: "Accessibility (A11y) makes your site available to everyone regardless of their abilities" },
          { type: "li", text: "Accessibility benefits all users, not just people with disabilities" },
          { type: "li", text: "Semantic HTML is the foundation of accessibility" },
          { type: "li", text: "Every image should have a descriptive alt text" },
          { type: "li", text: "Every form field should have an associated <label>" },
          { type: "li", text: "Keyboard navigation (Tab) should work for all elements" },
          { type: "li", text: "ARIA is a last resort after semantic HTML" },
          { type: "li", text: "Use Lighthouse and axe DevTools to check accessibility" },
        ],
      },
    ],
    quiz: [
      {
        question: "What is alt text and what is it used for?",
        options: [
          "Text that appears in place of the image if it fails to load",
          "Text that the screen reader reads instead of the image for visually impaired users",
          "Text that appears when hovering over the image",
          "Text used only to improve SEO",
        ],
        explanation: "Alt text is read by screen readers to convey image content to blind users. It is essential for accessibility and also helps search engines understand images.",
      },
      {
        question: "Why is using <button> better than <div onclick>?",
        options: [
          "It is smaller in code size",
          "button can be reached by Tab and is treated as an interactive element by screen readers",
          "button has better performance",
          "div is not supported in modern browsers",
        ],
        explanation: "<button> is an interactive element that supports keyboard navigation (Tab) and works with screen readers. The div does not support any of these features by default.",
      },
      {
        question: "What is the best use of the role attribute in ARIA?",
        options: [
          "Replace all semantic elements",
          "Add additional description to an element only when there is no suitable semantic HTML",
          "Style elements visually",
          "Add animation effects to elements",
        ],
        explanation: "The golden rule: Use semantic HTML first. ARIA is only used when there is no suitable semantic HTML element to describe the element's role.",
      },
    ],
    challenge: {
      title: "Challenge: Improve login page accessibility",
      description: "Fix the following login page to be accessibility compliant: 1. Add <label> for each field, 2. Add a skip link, 3. Use semantic HTML for structure, 4. Add aria-required for required fields, 5. Add an error message with role=\"alert\".",
    },
    cheatSheet: {
      title: "Accessibility Cheat Sheet (A11y)",
      items: [
        { term: "Image alt text", definition: "<img src=\"pic.jpg\" alt=\"Accurate description\" />" },
        { term: "Form field labeling", definition: "<label for=\"name\">Name</label><input id=\"name\" type=\"text\" />" },
        { term: "Skip link", definition: "<a href=\"#main\" class=\"skip-link\">Skip to content</a>" },
        { term: "Screen reader only text", definition: "<span class=\"sr-only\">Text for screen reader only</span>" },
        { term: "Keyboard navigation", definition: "tabindex=\"0\" to add to tab order, tabindex=\"-1\" for programmatic only" },
        { term: "Common ARIA attributes", definition: "role=\"alert\", aria-label, aria-describedby, aria-required, aria-invalid, aria-live, aria-hidden" },
        { term: "Testing tools", definition: "Chrome DevTools Lighthouse, axe DevTools, WebAIM WAVE, VoiceOver/Narrator" },
        { term: "Golden ARIA Rule", definition: "1. Use semantic HTML first, 2. Don't break what works in HTML, 3. All interactive elements must work with Tab, 4. Every image has alt, 5. Every field has label" },
      ],
    },
  },
  fr: {
    sections: [
      {
        title: "Qu'est-ce que l'accessibilité et pourquoi est-elle importante ?",
        content: [
          { type: "p", text: "L'accessibilité (également connue sous le nom de A11y — le nombre de lettres entre A et y est 11) est la pratique de concevoir des sites web et des applications de manière à ce qu'ils soient accessibles à tous, quelles que soient leurs capacités ou leurs handicaps." },
          { type: "p", text: "L'accessibilité garantit que tous les utilisateurs — y compris ceux en situation de handicap — peuvent interagir avec votre site web et l'utiliser efficacement. Ce n'est pas un \"luxe\" mais une responsabilité éthique et légale dans de nombreux pays." },
          { type: "callout", title: "Analogie simple :", text: "Imaginez que vous construisez un bâtiment. Vous ne vous contenteriez pas d'escaliers, n'est-ce pas ? Non, vous avez besoin d'un ascenseur et de rampes pour fauteuil roulant et de cartes en braille. L'accessibilité, c'est la même chose mais pour les sites web — les rendre accessibles à tous." },
          { type: "p", text: "Les chiffres parlent : Environ 15 à 20 % de la population mondiale souffre d'une forme de handicap. Les ignorer signifie perdre un grand groupe d'utilisateurs et de clients potentiels." },
        ],
      },
      {
        title: "Qui bénéficie de l'accessibilité ?",
        content: [
          { type: "p", text: "L'accessibilité n'est pas seulement pour les aveugles, mais pour tous les groupes :" },
          { type: "li", text: "Aveugles et malvoyants : Ils utilisent des lecteurs d'écran qui lisent le contenu de la page à voix haute. Ils ont besoin de texte alternatif pour les images et d'éléments correctement identifiés." },
          { type: "li", text: "Malentendants : Ils ont besoin de sous-titres pour les vidéos et de texte alternatif pour le contenu audio." },
          { type: "li", text: "Personnes avec des handicaps moteurs : Ils utilisent un clavier ou des contrôleurs spéciaux pour naviguer au lieu d'une souris. Ils ont besoin que tous les éléments interactifs soient accessibles en appuyant sur Tab." },
          { type: "li", text: "Personnes avec des troubles cognitifs : Elles ont besoin d'un design clair et simple avec une structure de contenu logique." },
          { type: "li", text: "Personnes âgées : Elles peuvent souffrir de problèmes de vue ou de motricité fine. Elles ont besoin de polices grandes et de boutons clairs." },
          { type: "li", text: "Utilisateurs dans des conditions non idéales : Petit écran, éclairage faible, connexion lente. L'accessibilité améliore l'expérience pour tous." },
          { type: "callout", title: "Fait important :", text: "Améliorer l'accessibilité profite à tous, pas seulement aux personnes en situation de handicap. Par exemple, le texte alternatif des images aide les moteurs de recherche comme Google à comprendre vos images." },
        ],
      },
      {
        title: "Le problème que l'accessibilité résout",
        content: [
          { type: "p", text: "Sans accessibilité, voici ce qui se passe :" },
          { type: "li", text: "Une personne aveugle ne peut pas lire le contenu de votre page car le lecteur d'écran ne comprend pas la structure." },
          { type: "li", text: "Une personne avec un handicap moteur ne peut pas cliquer sur un petit bouton ou accéder à un menu déroulant." },
          { type: "li", text: "Une personne malentendante ne peut pas comprendre une vidéo sans sous-titres." },
          { type: "li", text: "Une personne âgée a du mal à lire du texte en petite taille ou à cliquer sur des liens proches les uns des autres." },
          { type: "p", text: "L'accessibilité résout ces problèmes grâce à un ensemble de pratiques et de normes qui garantissent que votre site web fonctionne pour tous." },
        ],
      },
      {
        title: "HTML sémantique et sa relation avec l'accessibilité",
        content: [
          { type: "p", text: "Dans la leçon précédente, nous avons appris le HTML sémantique. Maintenant, nous apprendrons que l'utilisation de balises sémantiques n'est pas seulement pour améliorer la structure du code — c'est un outil fondamental pour l'accessibilité." },
          { type: "p", text: "Les lecteurs d'écran s'appuient fortement sur le HTML sémantique :" },
          { type: "li", text: "Lorsque vous utilisez <nav>, il dit à la personne aveugle : \"Vous êtes maintenant dans la section de navigation\"" },
          { type: "li", text: "Lorsque vous utilisez <main>, il dit : \"Aller au contenu principal\"" },
          { type: "li", text: "Lorsque vous utilisez <article>, il dit : \"Contenu autonome\"" },
          { type: "li", text: "Lorsque vous utilisez <h1> à <h6>, il peut construire une \"table des matières\" pour la page" },
        ],
      },
      {
        title: "Texte alternatif des images — Alt Text",
        content: [
          { type: "p", text: "L'attribut alt sur la balise <img> est l'un des éléments d'accessibilité les plus importants. Le lecteur d'écran lit ce texte à la place de l'image." },
          { type: "h3", text: "Règles pour écrire un bon texte alternatif :" },
          { type: "callout", title: "Règle importante :", text: "Ne commencez pas le texte alternatif par \"Image de\" ou \"Photo de\". Le lecteur d'écran sait déjà que c'est une image et dira \"Image : chat marron\". Pas besoin de répéter cette information." },
        ],
      },
      {
        title: "Labels et accessibilité",
        content: [
          { type: "p", text: "Chaque champ de saisie dans un formulaire doit avoir un label clair associé à l'aide de <label>. Cela indique au lecteur d'écran le nom du champ et permet à l'utilisateur de cliquer sur le label pour focusser le champ." },
          { type: "callout", title: "Pourquoi for/id est important ?", text: "L'attribut for dans <label> lie le label au champ via son id. Cela permet : (1) le lecteur d'écran connaît le nom du champ, (2) cliquer sur le label focusse automatiquement le champ." },
        ],
      },
      {
        title: "Navigation au clavier",
        content: [
          { type: "p", text: "Certains utilisateurs ne peuvent pas utiliser une souris et s'appuient uniquement sur le clavier. Tous les éléments interactifs doivent être accessibles en appuyant sur la touche Tab." },
          { type: "h3", text: "Lien d'évitement (Skip Link) :" },
          { type: "p", text: "Un lien caché qui n'apparaît qu'en appuyant sur Tab, permettant à l'utilisateur de sauter le contenu et d'aller directement au contenu principal :" },
        ],
      },
      {
        title: "Contraste des couleurs",
        content: [
          { type: "p", text: "Le contraste entre la couleur du texte et la couleur de l'arrière-plan est très important pour la lecture du contenu. La norme internationale est WCAG (Web Content Accessibility Guidelines)." },
          { type: "li", text: "Niveau AA (minimum) : Ratio de contraste de 4,5:1 pour le texte normal, 3:1 pour le texte grand." },
          { type: "li", text: "Niveau AAA (le plus élevé) : Ratio de contraste de 7:1 pour le texte normal, 4,5:1 pour le texte grand." },
          { type: "callout", title: "Outil utile :", text: "Utilisez WebAIM Contrast Checker (webaim.org/resources/contrastchecker) pour vérifier le ratio de contraste entre deux couleurs." },
        ],
      },
      {
        title: "Introduction à ARIA",
        content: [
          { type: "p", text: "ARIA signifie Accessible Rich Internet Applications. C'est un ensemble d'attributs qui améliorent l'accessibilité pour les éléments qui ne fournissent pas de HTML sémantique suffisant." },
          { type: "callout", title: "La règle d'or d'ARIA :", text: "N'utilisez pas ARIA si vous pouvez utiliser du HTML sémantique ! Essayez d'abord d'utiliser des éléments sémantiques, et n'utilisez ARIA qu'en dernier recours." },
          { type: "h3", text: "Attributs ARIA les plus courants :" },
          { type: "h3", text: "Contenu uniquement pour lecteur d'écran :" },
        ],
      },
      {
        title: "L'attribut role — Définition des rôles",
        content: [
          { type: "p", text: "L'attribut role indique au lecteur d'écran le type et le rôle de l'élément. C'est particulièrement utile avec les éléments personnalisés :" },
        ],
      },
      {
        title: "Exemple pratique : Améliorer l'accessibilité d'un formulaire",
        content: [
          { type: "p", text: "Prenons un formulaire de contact simple et améliorons son accessibilité :" },
          { type: "h3", text: "Sans accessibilité :" },
          { type: "h3", text: "Avec accessibilité améliorée :" },
          { type: "h3", text: "Messages d'erreur améliorés :" },
        ],
      },
      {
        title: "Que se passe-t-il en coulisses ?",
        content: [
          { type: "p", text: "Comment les lecteurs d'écran fonctionnent-ils avec votre page ?" },
          { type: "li", text: "Construction de l'arbre d'accessibilité : Le lecteur d'écran construit un modèle arborescent à partir du HTML basé sur les éléments sémantiques et les attributs ARIA." },
          { type: "li", text: "Ordre de lecture : Il lit le contenu dans l'ordre où il apparaît dans le DOM (pas nécessairement l'ordre visuel)." },
          { type: "li", text: "Fourniture de repères : Il utilise les éléments sémantiques (<header>, <nav>, <main>) pour fournir des \"cartes\" à l'utilisateur." },
          { type: "li", text: "Navigation rapide : L'utilisateur peut sauter directement entre les sections (par exemple, aller directement à <main>)." },
          { type: "li", text: "Lecture des images : Il lit le texte alt à la place de l'image." },
          { type: "callout", title: "Le saviez-vous ?", text: "Vous pouvez tester à quoi ressemble votre site pour un lecteur d'écran en activant VoiceOver sur Mac (Cmd + F5) ou Narrator sur Windows (Win + Ctrl + Enter)." },
        ],
      },
      {
        title: "Erreurs courantes d'accessibilité",
        content: [
          { type: "li", text: "Oublier alt pour les images : Chaque image doit avoir un attribut alt. Même s'il s'agit d'une image décorative, écrivez alt=\"\" plutôt que de l'omettre." },
          { type: "li", text: "Utiliser div au lieu de button : Écrire <div onclick=\"...\">Cliquez ici</div> au lieu de <button>. Le div n'est pas accessible par Tab et le lecteur d'écran ne sait pas que c'est un bouton." },
          { type: "li", text: "Oublier les labels dans les formulaires : Chaque champ de saisie doit avoir un label clair. Sans lui, l'utilisateur aveugle ne sait pas ce qui lui est demandé." },
          { type: "li", text: "Compter uniquement sur la couleur : Ne pas utiliser d'indicateurs visuels supplémentaires (icônes, textes, formes) à côté des couleurs. Les aveugles ne peuvent pas distinguer les couleurs." },
          { type: "li", text: "Utiliser tabindex avec des nombres positifs : Utiliser tabindex=\"5\" change l'ordre naturel de tabulation et casse l'expérience utilisateur. Utilisez uniquement 0 ou -1." },
          { type: "li", text: "Oublier l'ordre des titres : Sauter des niveaux de titres (par exemple, de h1 à h3 directement) casse la table des matières dans le lecteur d'écran." },
        ],
      },
      {
        title: "Meilleures pratiques",
        content: [
          { type: "li", text: "Utilisez le HTML sémantique en premier : Les éléments sémantiques offrent une accessibilité gratuite. Utilisez <button> au lieu de <div>, et <nav> au lieu de <div class=\"nav\">." },
          { type: "li", text: "Écrivez du texte alternatif descriptif pour les images : Décrivez le contenu de l'image, pas son apparence." },
          { type: "li", text: "Lie chaque label à son champ correspondant : Utilisez for et id ou enveloppez le label autour du champ." },
          { type: "li", text: "Assurez la navigation au clavier : Testez votre site en utilisant uniquement Tab, sans souris." },
          { type: "li", text: "Utilisez des liens d'évitement : Permettez aux utilisateurs de sauter le contenu répétitif." },
          { type: "li", text: "Vérifiez le contraste des couleurs : Utilisez des outils comme WebAIM Contrast Checker." },
          { type: "li", text: "Testez avec des outils d'automatisation : Utilisez axe DevTools ou Lighthouse pour vérifier l'accessibilité." },
          { type: "li", text: "Utilisez ARIA avec précaution : Le HTML sémantique est préféré. ARIA est un dernier recours." },
        ],
      },
      {
        title: "Outils de test d'accessibilité",
        content: [
          { type: "p", text: "Il existe des outils gratuits qui vous aident à vérifier l'accessibilité de votre site :" },
          { type: "li", text: "Chrome DevTools (F12) — onglet Lighthouse : Vérifie l'accessibilité et donne un rapport complet avec des suggestions d'amélioration." },
          { type: "li", text: "axe DevTools (extension de navigateur) : Un outil gratuit pour découvrir automatiquement les problèmes d'accessibilité." },
          { type: "li", text: "WebAIM WAVE : Un outil en ligne pour vérifier l'accessibilité." },
          { type: "li", text: "VoiceOver (Mac) ou Narrator (Windows) : Testez votre site avec un vrai lecteur d'écran." },
          { type: "li", text: "WebAIM Contrast Checker : Vérifiez le ratio de contraste des couleurs." },
        ],
      },
      {
        title: "Résumé de la leçon",
        content: [
          { type: "li", text: "L'accessibilité (A11y) rend votre site accessible à tous quelles que soient leurs capacités" },
          { type: "li", text: "L'accessibilité profite à tous les utilisateurs, pas seulement aux personnes en situation de handicap" },
          { type: "li", text: "Le HTML sémantique est le fondement de l'accessibilité" },
          { type: "li", text: "Chaque image doit avoir un texte alt descriptif" },
          { type: "li", text: "Chaque champ de formulaire doit avoir un <label> associé" },
          { type: "li", text: "La navigation au clavier (Tab) doit fonctionner pour tous les éléments" },
          { type: "li", text: "ARIA est un dernier recours après le HTML sémantique" },
          { type: "li", text: "Utilisez Lighthouse et axe DevTools pour vérifier l'accessibilité" },
        ],
      },
    ],
    quiz: [
      {
        question: "Qu'est-ce que le texte alt et à quoi sert-il ?",
        options: [
          "Texte qui apparaît à la place de l'image si elle ne se charge pas",
          "Texte que le lecteur d'écran lit à la place de l'image pour les utilisateurs malvoyants",
          "Texte qui apparaît au survol de l'image",
          "Texte utilisé uniquement pour améliorer le SEO",
        ],
        explanation: "Le texte alt est lu par les lecteurs d'écran pour transmettre le contenu de l'image aux utilisateurs aveugles. Il est essentiel pour l'accessibilité et aide également les moteurs de recherche à comprendre les images.",
      },
      {
        question: "Pourquoi l'utilisation de <button> est-elle préférable à <div onclick> ?",
        options: [
          "Il est plus petit en taille de code",
          "button peut être atteint par Tab et est traité comme un élément interactif par les lecteurs d'écran",
          "button a de meilleures performances",
          "div n'est pas supporté dans les navigateurs modernes",
        ],
        explanation: "<button> est un élément interactif qui prend en charge la navigation au clavier (Tab) et fonctionne avec les lecteurs d'écran. Le div ne supporte aucune de ces fonctionnalités par défaut.",
      },
      {
        question: "Quelle est la meilleure utilisation de l'attribut role dans ARIA ?",
        options: [
          "Remplacer tous les éléments sémantiques",
          "Ajouter une description supplémentaire à un élément uniquement lorsqu'il n'y a pas de HTML sémantique approprié",
          "Styliser les éléments visuellement",
          "Ajouter des effets d'animation aux éléments",
        ],
        explanation: "La règle d'or : Utilisez le HTML sémantique en premier. ARIA n'est utilisé que lorsqu'il n'y a pas d'élément HTML sémantique approprié pour décrire le rôle de l'élément.",
      },
    ],
    challenge: {
      title: "Défi : Améliorer l'accessibilité de la page de connexion",
      description: "Corrigez la page de connexion suivante pour qu'elle soit conforme à l'accessibilité : 1. Ajoutez <label> pour chaque champ, 2. Ajoutez un lien d'évitement, 3. Utilisez le HTML sémantique pour la structure, 4. Ajoutez aria-required pour les champs obligatoires, 5. Ajoutez un message d'erreur avec role=\"alert\".",
    },
    cheatSheet: {
      title: "Aide-mémoire accessibilité (A11y)",
      items: [
        { term: "Texte alternatif d'image", definition: "<img src=\"pic.jpg\" alt=\"Description précise\" />" },
        { term: "Étiquetage des champs de formulaire", definition: "<label for=\"name\">Nom</label><input id=\"name\" type=\"text\" />" },
        { term: "Lien d'évitement", definition: "<a href=\"#main\" class=\"skip-link\">Aller au contenu</a>" },
        { term: "Texte pour lecteur d'écran uniquement", definition: "<span class=\"sr-only\">Texte pour lecteur d'écran uniquement</span>" },
        { term: "Navigation au clavier", definition: "tabindex=\"0\" pour ajouter à l'ordre de tabulation, tabindex=\"-1\" pour accès programmatique uniquement" },
        { term: "Attributs ARIA courants", definition: "role=\"alert\", aria-label, aria-describedby, aria-required, aria-invalid, aria-live, aria-hidden" },
        { term: "Outils de test", definition: "Chrome DevTools Lighthouse, axe DevTools, WebAIM WAVE, VoiceOver/Narrator" },
        { term: "Règle d'or ARIA", definition: "1. Utilisez le HTML sémantique en premier, 2. Ne cassez pas ce qui fonctionne en HTML, 3. Tous les éléments interactifs doivent fonctionner avec Tab, 4. Chaque image a un alt, 5. Chaque champ a un label" },
      ],
    },
  },
  de: {
    sections: [
      {
        title: "Was ist Barrierefreiheit und warum ist sie wichtig?",
        content: [
          { type: "p", text: "Barrierefreiheit (auch bekannt als A11y — die Anzahl der Buchstaben zwischen A und y ist 11) ist die Praxis, Websites und Anwendungen so zu gestalten, dass sie für alle zugänglich sind, unabhängig von ihren Fähigkeiten oder Behinderungen." },
          { type: "p", text: "Barrierefreiheit stellt sicher, dass alle Benutzer — einschließlich derer mit Behinderungen — mit Ihrer Website interagieren und sie effektiv nutzen können. Dies ist kein \"Luxus\", sondern eine ethische und rechtliche Verantwortung in vielen Ländern." },
          { type: "callout", title: "Einfache Analogie:", text: "Stellen Sie sich vor, Sie bauen ein Gebäude. Würden Sie sich nur mit Treppen begnügen? Nein, Sie brauchen einen Aufzug und Rollstuhlrampen und Braille-Karten. Barrierefreiheit ist dasselbe, aber für Websites — sie für alle zugänglich machen." },
          { type: "p", text: "Die Zahlen sprechen: Ungefähr 15-20 % der Weltbevölkerung leiden unter einer Form von Behinderung. Sie zu ignorieren bedeutet, eine große Gruppe von Benutzern und potenziellen Kunden zu verlieren." },
        ],
      },
      {
        title: "Wer profitiert von Barrierefreiheit?",
        content: [
          { type: "p", text: "Barrierefreiheit ist nicht nur für Blinde, sondern für alle Gruppen:" },
          { type: "li", text: "Blinde und Sehbehinderte: Sie verwenden Screenreader, die den Seiteninhalt laut vorlesen. Sie brauchen Alternativtext für Bilder und korrekt identifizierte Elemente." },
          { type: "li", text: "Hörbehinderte: Sie brauchen Untertitel für Videos und Alternativtext für Audioinhalte." },
          { type: "li", text: "Menschen mit motorischen Behinderungen: Sie verwenden eine Tastatur oder spezielle Controller zur Navigation statt einer Maus. Sie brauchen, dass alle interaktiven Elemente durch Drücken von Tab erreichbar sind." },
          { type: "li", text: "Menschen mit kognitiven Störungen: Sie brauchen ein klares, einfaches Design mit logischer Inhaltsstruktur." },
          { type: "li", text: "Ältere Menschen: Sie können unter Sehproblemen oder feinem Motorik leiden. Sie brauchen große Schriftarten und klare Buttons." },
          { type: "li", text: "Benutzer unter nicht idealen Bedingungen: Kleiner Bildschirm, gedämpftes Licht, langsame Verbindung. Barrierefreiheit verbessert die Erfahrung für alle." },
          { type: "callout", title: "Wichtige Tatsache:", text: "Die Verbesserung der Barrierefreiheit kommt allen zugute, nicht nur Menschen mit Behinderungen. Zum Beispiel hilft Alternativtext für Bilder Suchmaschinen wie Google, Ihre Bilder zu verstehen." },
        ],
      },
      {
        title: "Das Problem, das Barrierefreiheit löst",
        content: [
          { type: "p", text: "Ohne Barrierefreiheit passiert Folgendes:" },
          { type: "li", text: "Eine blinde Person kann Ihren Seiteninhalt nicht lesen, weil der Screenreader die Struktur nicht versteht." },
          { type: "li", text: "Eine Person mit motorischer Behinderung kann nicht auf eine kleine Schaltfläche klicken oder ein Dropdown-Menü öffnen." },
          { type: "li", text: "Eine hörgeschädigte Person kann ein Video ohne Untertitel nicht verstehen." },
          { type: "li", text: "Eine ältere Person hat Schwierigkeiten, kleinen Text zu lesen oder auf nahe beieinanderliegende Links zu klicken." },
          { type: "p", text: "Barrierefreiheit löst diese Probleme durch einen Satz von Praktiken und Standards, die sicherstellen, dass Ihre Website für alle funktioniert." },
        ],
      },
      {
        title: "Semantic HTML und seine Beziehung zur Barrierefreiheit",
        content: [
          { type: "p", text: "In der vorherigen Lektion haben wir Semantic HTML kennengelernt. Jetzt lernen wir, dass die Verwendung semantischer Tags nicht nur zur Verbesserung der Codestruktur dient — es ist ein grundlegendes Werkzeug für die Barrierefreiheit." },
          { type: "p", text: "Screenreader stützen sich stark auf Semantic HTML:" },
          { type: "li", text: "Wenn Sie <nav> verwenden, sagt es der blinden Person: \"Sie sind jetzt im Navigationsabschnitt\"" },
          { type: "li", text: "Wenn Sie <main> verwenden, sagt es: \"Zum Hauptinhalt springen\"" },
          { type: "li", text: "Wenn Sie <article> verwenden, sagt es: \"Eigenständiger Inhalt\"" },
          { type: "li", text: "Wenn Sie <h1> bis <h6> verwenden, kann es ein \"Inhaltsverzeichnis\" für die Seite erstellen" },
        ],
      },
      {
        title: "Bild-Alternativtext — Alt Text",
        content: [
          { type: "p", text: "Das alt-Attribut am <img>-Tag ist eines der wichtigsten Barrierefreiheitselemente. Der Screenreader liest diesen Text anstelle des Bildes." },
          { type: "h3", text: "Regeln für das Schreiben von gutem Alternativtext:" },
          { type: "callout", title: "Wichtige Regel:", text: "Beginnen Sie Alternativtext nicht mit \"Bild von\" oder \"Foto von\". Der Screenreader weiß bereits, dass es ein Bild ist, und sagt \"Bild: braune Katze\". Keine Notwendigkeit, diese Information zu wiederholen." },
        ],
      },
      {
        title: "Labels und Barrierefreiheit",
        content: [
          { type: "p", text: "Jedes Eingabefeld in einem Formular sollte ein deutliches Label haben, das mit <label> verknüpft ist. Dies teilt dem Screenreader den Feldnamen mit und ermöglicht es dem Benutzer, auf das Label zu klicken, um das Feld zu fokussieren." },
          { type: "callout", title: "Warum sind for/id wichtig?", text: "Das for-Attribut in <label> verknüpft das Label mit dem Feld über seine id. Dies ermöglicht: (1) der Screenreader kennt den Feldnamen, (2) ein Klick auf das Label fokussiert das Feld automatisch." },
        ],
      },
      {
        title: "Tastaturnavigation",
        content: [
          { type: "p", text: "Einige Benutzer können keine Maus verwenden und stützen sich nur auf die Tastatur. Alle interaktiven Elemente müssen durch Drücken der Tab-Taste erreichbar sein." },
          { type: "h3", text: "Skip-Link:" },
          { type: "p", text: "Ein versteckter Link, der nur beim Drücken von Tab erscheint und es dem Benutzer erlaubt, den Inhalt zu überspringen und direkt zum Hauptinhalt zu gelangen:" },
        ],
      },
      {
        title: "Farbkontrast",
        content: [
          { type: "p", text: "Der Kontrast zwischen Textfarbe und Hintergrundfarbe ist sehr wichtig für das Lesen von Inhalten. Der internationale Standard ist WCAG (Web Content Accessibility Guidelines)." },
          { type: "li", text: "AA-Level (Minimum): Kontrastverhältnis von 4,5:1 für normalen Text, 3:1 für großen Text." },
          { type: "li", text: "AAA-Level (Höchstes): Kontrastverhältnis von 7:1 für normalen Text, 4,5:1 für großen Text." },
          { type: "callout", title: "Nützliches Tool:", text: "Verwenden Sie den WebAIM Contrast Checker (webaim.org/resources/contrastchecker), um das Kontrastverhältnis zwischen zwei Farben zu überprüfen." },
        ],
      },
      {
        title: "Einführung in ARIA",
        content: [
          { type: "p", text: "ARIA steht für Accessible Rich Internet Applications. Es ist ein Satz von Attributen, die die Barrierefreiheit für Elemente verbessern, die kein ausreichendes semantisches HTML bieten." },
          { type: "callout", title: "Die goldene Regel von ARIA:", text: "Verwenden Sie nicht ARIA, wenn Sie Semantic HTML verwenden können! Versuchen Sie zuerst, semantische Elemente zu verwenden, und verwenden Sie ARIA nur als letzten Ausweg." },
          { type: "h3", text: "Häufigste ARIA-Attribute:" },
          { type: "h3", text: "Nur für Screenreader bestimmte Inhalte:" },
        ],
      },
      {
        title: "Das role-Attribut — Rollen definieren",
        content: [
          { type: "p", text: "Das role-Attribut teilt dem Screenreader den Typ und die Rolle des Elements mit. Dies ist besonders nützlich bei benutzerdefinierten Elementen:" },
        ],
      },
      {
        title: "Praktisches Beispiel: Verbesserung der Formularbarrierefreiheit",
        content: [
          { type: "p", text: "Nehmen wir ein einfaches Kontaktformular und verbessern seine Barrierefreiheit:" },
          { type: "h3", text: "Ohne Barrierefreiheit:" },
          { type: "h3", text: "Mit verbesserter Barrierefreiheit:" },
          { type: "h3", text: "Verbesserte Fehlermeldungen:" },
        ],
      },
      {
        title: "Was passiert hinter den Kulissen?",
        content: [
          { type: "p", text: "Wie arbeiten Screenreader mit Ihrer Seite?" },
          { type: "li", text: "Aufbau des Barrierefreiheitsbaums: Der Screenreader erstellt ein Baummodell aus HTML basierend auf semantischen Elementen und ARIA-Attributen." },
          { type: "li", text: "Lesereihenfolge: Er liest den Inhalt in der Reihenfolge, in der er im DOM erscheint (nicht unbedingt die visuelle Reihenfolge)." },
          { type: "li", text: "Bereitstellung von Landmarks: Er verwendet semantische Elemente (<header>, <nav>, <main>), um \"Karten\" für den Benutzer bereitzustellen." },
          { type: "li", text: "Schnelle Navigation: Der Benutzer kann direkt zwischen den Abschnitten springen (z.B. direkt zu <main> gehen)." },
          { type: "li", text: "Bilder lesen: Er liest den Alternativtext anstelle des Bildes." },
          { type: "callout", title: "Wussten Sie schon?", text: "Sie können testen, wie Ihre Seite für einen Screenreader aussieht, indem Sie VoiceOver auf Mac (Cmd + F5) oder Narrator auf Windows (Win + Ctrl + Enter) aktivieren." },
        ],
      },
      {
        title: "Häufige Barrierefreiheitsfehler",
        content: [
          { type: "li", text: "Alt für Bilder vergessen: Jedes Bild sollte ein alt-Attribut haben. Auch wenn es ein dekoratives Bild ist, schreiben Sie alt=\"\" statt es wegzulassen." },
          { type: "li", text: "Div statt Button verwenden: <div onclick=\"...\">Klicken Sie hier</div> statt <button> zu schreiben. Das Div ist nicht per Tab erreichbar und der Screenreader weiß nicht, dass es eine Schaltfläche ist." },
          { type: "li", text: "Labels in Formularen vergessen: Jedes Eingabefeld sollte ein deutliches Label haben. Ohne es weiß der blinde Benutzer nicht, was von ihm verlangt wird." },
          { type: "li", text: "Nur auf Farbe vertrauen: Keine zusätzlichen visuellen Indikatoren (Symbole, Texte, Formen) neben Farben verwenden. Blinde können Farben nicht unterscheiden." },
          { type: "li", text: "Tabindex mit positiven Zahlen verwenden: Verwenden von tabindex=\"5\" ändert die natürliche Tab-Reihenfolge und bricht die Benutzererfahrung. Verwenden Sie nur 0 oder -1." },
          { type: "li", text: "Überschriftenreihenfolge vergessen: Überspringen von Überschriftenebenen (z.B. direkt von h1 zu h3) bricht das Inhaltsverzeichnis im Screenreader." },
        ],
      },
      {
        title: "Best Practices",
        content: [
          { type: "li", text: "Verwenden Sie Semantic HTML zuerst: Semantische Elemente bieten kostenlose Barrierefreiheit. Verwenden Sie <button> statt <div> und <nav> statt <div class=\"nav\">." },
          { type: "li", text: "Schreiben Sie beschreibenden Alternativtext für Bilder: Beschreiben Sie den Bildinhalt, nicht sein Aussehen." },
          { type: "li", text: "Verknüpfen Sie jedes Label mit seinem entsprechenden Feld: Verwenden Sie for und id oder wickeln Sie das Label um das Feld." },
          { type: "li", text: "Stellen Sie Tastaturnavigation sicher: Testen Sie Ihre Seite nur mit Tab, ohne Maus." },
          { type: "li", text: "Verwenden Sie Skip-Links: Ermöglichen Sie es Benutzern, sich wiederholende Inhalte zu überspringen." },
          { type: "li", text: "Überprüfen Sie den Farbkontrast: Verwenden Sie Tools wie den WebAIM Contrast Checker." },
          { type: "li", text: "Testen Sie mit Automatisierungstools: Verwenden Sie axe DevTools oder Lighthouse zur Überprüfung der Barrierefreiheit." },
          { type: "li", text: "Verwenden Sie ARIA vorsichtig: Semantic HTML ist bevorzugt. ARIA ist ein letzter Ausweg." },
        ],
      },
      {
        title: "Barrierefreiheits-Testtools",
        content: [
          { type: "p", text: "Es gibt kostenlose Tools, die Ihnen helfen, die Barrierefreiheit Ihrer Seite zu überprüfen:" },
          { type: "li", text: "Chrome DevTools (F12) — Lighthouse-Tab: Überprüft Barrierefreiheit und gibt einen umfassenden Bericht mit Verbesserungsvorschlägen." },
          { type: "li", text: "axe DevTools (Browser-Erweiterung): Ein kostenloses Tool zum automatischen Entdecken von Barrierefreiheitsproblemen." },
          { type: "li", text: "WebAIM WAVE: Ein Online-Tool zur Überprüfung der Barrierefreiheit." },
          { type: "li", text: "VoiceOver (Mac) oder Narrator (Windows): Testen Sie Ihre Seite mit einem echten Screenreader." },
          { type: "li", text: "WebAIM Contrast Checker: Überprüfen Sie das Farbkontrastverhältnis." },
        ],
      },
      {
        title: "Zusammenfassung der Lektion",
        content: [
          { type: "li", text: "Barrierefreiheit (A11y) macht Ihre Seite für alle zugänglich, unabhängig von ihren Fähigkeiten" },
          { type: "li", text: "Barrierefreiheit kommt allen Benutzern zugute, nicht nur Menschen mit Behinderungen" },
          { type: "li", text: "Semantic HTML ist die Grundlage der Barrierefreiheit" },
          { type: "li", text: "Jedes Bild sollte einen beschreibenden Alternativtext haben" },
          { type: "li", text: "Jedes Formularfeld sollte ein zugehöriges <label> haben" },
          { type: "li", text: "Tastaturnavigation (Tab) sollte für alle Elemente funktionieren" },
          { type: "li", text: "ARIA ist ein letzter Ausweg nach Semantic HTML" },
          { type: "li", text: "Verwenden Sie Lighthouse und axe DevTools zur Überprüfung der Barrierefreiheit" },
        ],
      },
    ],
    quiz: [
      {
        question: "Was ist Alt-Text und wofür wird er verwendet?",
        options: [
          "Text, der anstelle des Bildes erscheint, wenn es nicht geladen wird",
          "Text, den der Screenreader anstelle des Bildes für sehbehinderte Benutzer liest",
          "Text, der beim Überfahren des Bildes mit der Maus erscheint",
          "Text, der nur zur SEO-Verbesserung verwendet wird",
        ],
        explanation: "Alt-Text wird von Screenreadern gelesen, um den Bildinhalt an blinde Benutzer zu übermitteln. Er ist essenziell für die Barrierefreiheit und hilft auch Suchmaschinen, Bilder zu verstehen.",
      },
      {
        question: "Warum ist die Verwendung von <button> besser als <div onclick>?",
        options: [
          "Es ist kleiner in der Codogröße",
          "button kann per Tab erreicht werden und wird als interaktives Element von Screenreadern behandelt",
          "button hat bessere Leistung",
          "div wird in modernen Browsern nicht unterstützt",
        ],
        explanation: "<button> ist ein interaktives Element, das Tastaturnavigation (Tab) unterstützt und mit Screenreadern funktioniert. Das div unterstützt standardmäßig keine dieser Funktionen.",
      },
      {
        question: "Was ist die beste Verwendung des role-Attributs in ARIA?",
        options: [
          "Alle semantischen Elemente ersetzen",
          "Zusätzliche Beschreibung zu einem Element nur hinzufügen, wenn kein geeignetes semantisches HTML vorhanden ist",
          "Elemente visuell gestalten",
          "Animationseffekte zu Elementen hinzufügen",
        ],
        explanation: "Die goldene Regel: Verwenden Sie zuerst Semantic HTML. ARIA wird nur verwendet, wenn kein geeignetes semantisches HTML-Element vorhanden ist, um die Rolle des Elements zu beschreiben.",
      },
    ],
    challenge: {
      title: "Herausforderung: Barrierefreiheit der Anmeldeseite verbessern",
      description: "Beheben Sie die folgende Anmeldeseite, um barrierefreiheitskonform zu sein: 1. Fügen Sie <label> für jedes Feld hinzu, 2. Fügen Sie einen Skip-Link hinzu, 3. Verwenden Sie Semantic HTML für die Struktur, 4. Fügen Sie aria-required für erforderliche Felder hinzu, 5. Fügen Sie eine Fehlermeldung mit role=\"alert\" hinzu.",
    },
    cheatSheet: {
      title: "Barrierefreiheit Spickzettel (A11y)",
      items: [
        { term: "Bild-Alternativtext", definition: "<img src=\"pic.jpg\" alt=\"Genaue Beschreibung\" />" },
        { term: "Formularfeld-Beschriftung", definition: "<label for=\"name\">Name</label><input id=\"name\" type=\"text\" />" },
        { term: "Skip-Link", definition: "<a href=\"#main\" class=\"skip-link\">Zum Inhalt springen</a>" },
        { term: "Nur für Screenreader bestimmter Text", definition: "<span class=\"sr-only\">Nur für Screenreader bestimmter Text</span>" },
        { term: "Tastaturnavigation", definition: "tabindex=\"0\" zum Hinzufügen zur Tab-Reihenfolge, tabindex=\"-1\" nur für programmatischen Zugriff" },
        { term: "Häufige ARIA-Attribute", definition: "role=\"alert\", aria-label, aria-describedby, aria-required, aria-invalid, aria-live, aria-hidden" },
        { term: "Test-Tools", definition: "Chrome DevTools Lighthouse, axe DevTools, WebAIM WAVE, VoiceOver/Narrator" },
        { term: "Goldene ARIA-Regel", definition: "1. Verwenden Sie zuerst Semantic HTML, 2. Brechen Sie nicht, was in HTML funktioniert, 3. Alle interaktiven Elemente müssen mit Tab funktionieren, 4. Jedes Bild hat alt, 5. Jedes Feld hat label" },
      ],
    },
  },
};

export default translations;
