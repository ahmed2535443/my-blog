const translations = {
  ar: {
    sections: [
      { title: "المقدمة", content: [
        { type: "p", text: "React هو أحد أكثر مكتبات JavaScript شعبية لبناء واجهات المستخدم. تم إنشاؤه من قبل Facebook (الآن Meta) في عام 2013، وأصبح الأساس لملايين تطبيقات الويب في جميع أنحاء العالم." },
        { type: "p", text: "في هذا الدرس، سنتعلم ما هو React، ولماذا يُستخدم، وكيف تُنشئ مشروع React أساسي." },
      ]},
      { title: "ما هو React؟", content: [
        { type: "p", text: "React هو مكتبة JavaScript لبناء واجهات المستخدم. يسمح لك بإنشاء مكونات واجهة مستخدم قابلة لإعادة الاستخدام يمكن دمجها معاً لبناء واجهات معقدة." },
        { type: "p", text: "الخصائص الأساسية لـ React:" },
        { type: "li", text: "<strong>مبني على المكونات:</strong> واجهة المستخدم مبنية من مكونات صغيرة قابلة لإعادة الاستخدام" },
        { type: "li", text: "<strong>صرفي (Declarative):</strong> أنت تصف ما تريد، وReact يتعامل مع تحديثات DOM" },
        { type: "li", text: "<strong>DOM افتراضي:</strong> يستخدم تمثيلاً في الذاكرة لـ DOM الحقيقي لأداء أفضل" },
        { type: "li", text: "<strong>تدفق بيانات أحادي الاتجاه:</strong> البيانات تتدفق من الأصل إلى المكونات الفرعية" },
      ]},
      { title: "لماذا تستخدم React؟", content: [
        { type: "p", text: "هناك أسباب كثيرة لشعبية React:" },
        { type: "li", text: "<strong>سهل التعلم:</strong> API بسيط وصيغة JSX تجعله متاحاً للجميع" },
        { type: "li", text: "<strong>نظام بيئي غني:</strong> آلاف المكتبات والأدوات المتاحة" },
        { type: "li", text: "<strong>مجتمع كبير:</strong> توثيق شامل ودروس ودعم مجتمعي" },
        { type: "li", text: "<strong>سوق العمل:</strong> طلب كبير على مطوري React" },
        { type: "li", text: "<strong>الأداء:</strong> DOM افتراضي وعرض محسّن" },
      ]},
      { title: "إعداد مشروع React", content: [
        { type: "p", text: "أسهل طريقة لبدء مشروع React هي استخدام Create React App:" },
        { type: "li", text: "ثبّت Node.js من nodejs.org" },
        { type: "li", text: "افتح الطرفية وشغّل: npx create-react-app my-app" },
        { type: "li", text: "انتقل إلى مجلد المشروع: cd my-app" },
        { type: "li", text: "شغّل خادم التطوير: npm start" },
        { type: "p", text: "سيُنشئ هذا مشروع React جديد بجميع الإعدادات اللازمة." },
      ]},
      { title: "JSX - لغة الترميز الموسعة", content: [
        { type: "p", text: "JSX هو امتداد صيغة لـ JavaScript يبدو مشابهاً لـ HTML. يجعل كتابة مكونات React أكثر سهولة ووضوحاً." },
        { type: "p", text: "يسمح لك JSX بكتابة كود يشبه HTML في ملفات JavaScript. يتم تحويله إلى استدعاءات دوال JavaScript عادية." },
        { type: "callout", title: "ملاحظة", text: "JSX غير مطلوب لاستخدام React، لكنه مُوصى به بشدة لأنه يجعل الكود أسهل بكثير للكتابة والفهم." },
      ]},
      { title: "مكونك الأول في React", content: [
        { type: "p", text: "في React، كل شيء مكون. المكون هو جزء قابل لإعادة الاستخدام من واجهة المستخدم يمكنه إدارة حالته ودورة حياته الخاصة." },
        { type: "p", text: "يمكن تعريف المكونات كـ:" },
        { type: "li", text: "<strong>مكونات الدوال:</strong> دوال بسيطة تُرجع JSX (النهج الحديث)" },
        { type: "li", text: "<strong>مكونات الفئات:</strong> فئات ES6 تُوسع React.Component (النهج القديم)" },
      ]},
      { title: "React مقابل المكتبات الأخرى", content: [
        { type: "p", text: "كيف يقارن React بالإطارات الأخرى الشائعة؟" },
        { type: "li", text: "<strong>React vs Angular:</strong> React مكتبة، Angular إطار عمل كامل" },
        { type: "li", text: "<strong>React vs Vue:</strong> كلاهما متشابه، لكن React لديه نظام بيئي أكبر" },
        { type: "li", text: "<strong>React vs jQuery:</strong> React مبني على المكونات، jQuery للتعامل مع DOM" },
        { type: "p", text: "مرونة React ونظامه البيئي يجعلانه خياراً رائعاً لمعظم المشاريع." },
      ]},
    ],
    quiz: [
      { question: "ما هو React؟", options: ["لغة برمجة", "مكتبة JavaScript لبناء واجهة المستخدم", "نظام إدارة قواعد بيانات", "نظام تشغيل"], explanation: "React هو مكتبة JavaScript أنشأها Facebook لبناء واجهات المستخدم. يسمح لك بإنشاء مكونات واجهة مستخدم قابلة لإعادة الاستخدام." },
    ],
    challenge: { title: "تحدي: أنشئ مكونك الأول", description: "أنشئ مكون React بسيط يعرض رسالة ترحيب وزر. عند النقر على الزر، يعرض تنبيهاً." },
    cheatSheet: { title: "ملخص مقدمة React", items: [
      { term: "React", definition: "مكتبة JavaScript لبناء واجهات المستخدم" },
      { term: "مبني على المكونات", definition: "واجهة مستخدم مبنية من مكونات صغيرة قابلة لإعادة الاستخدام" },
      { term: "صرفي", definition: "صف ما تريد، React يتعامل مع DOM" },
      { term: "DOM افتراضي", definition: "تمثيل في الذاكرة لأداء أفضل" },
      { term: "JSX", definition: "امتداد صيغة JavaScript يبدو مثل HTML" },
      { term: "Create React App", definition: "أداة لإنشاء مشروع React جديد بسرعة" },
      { term: "مكونات الدوال", definition: "نهج حديث لكتابة المكونات باستخدام الدوال" },
      { term: "تدفق بيانات أحادي الاتجاه", definition: "البيانات تتدفق من المكون الأصل إلى الفرعي" },
    ]}
  },
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "React is one of the most popular JavaScript libraries for building user interfaces. Created by Facebook (now Meta) in 2013, it has become the foundation for millions of web applications worldwide." },
        { type: "p", text: "In this lesson, we will learn what React is, why it is used, and how to set up a basic React project." },
      ]},
      { title: "What is React?", content: [
        { type: "p", text: "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components that can be composed together to build complex interfaces." },
        { type: "p", text: "Key characteristics of React:" },
        { type: "li", text: "<strong>Component-Based:</strong> UI is built from small, reusable components" },
        { type: "li", text: "<strong>Declarative:</strong> You describe what you want, and React handles the DOM updates" },
        { type: "li", text: "<strong>Virtual DOM:</strong> Uses an in-memory representation of the real DOM for better performance" },
        { type: "li", text: "<strong>One-Way Data Flow:</strong> Data flows down from parent to child components" },
      ]},
      { title: "Why Use React?", content: [
        { type: "p", text: "There are many reasons why React has become so popular:" },
        { type: "li", text: "<strong>Easy to Learn:</strong> Simple API and JSX syntax make it accessible" },
        { type: "li", text: "<strong>Rich Ecosystem:</strong> Thousands of libraries and tools available" },
        { type: "li", text: "<strong>Large Community:</strong> Extensive documentation, tutorials, and community support" },
        { type: "li", text: "<strong>Job Market:</strong> High demand for React developers" },
        { type: "li", text: "<strong>Performance:</strong> Virtual DOM and optimized rendering" },
      ]},
      { title: "Setting Up a React Project", content: [
        { type: "p", text: "The easiest way to start a React project is using Create React App:" },
        { type: "li", text: "Install Node.js from nodejs.org" },
        { type: "li", text: "Open your terminal and run: npx create-react-app my-app" },
        { type: "li", text: "Navigate to the project folder: cd my-app" },
        { type: "li", text: "Start the development server: npm start" },
        { type: "p", text: "This will create a new React project with all the necessary configurations." },
      ]},
      { title: "JSX - JavaScript XML", content: [
        { type: "p", text: "JSX is a syntax extension for JavaScript that looks similar to HTML. It makes writing React components more intuitive and readable." },
        { type: "p", text: "JSX allows you to write HTML-like code in your JavaScript files. It gets transpiled to regular JavaScript function calls." },
        { type: "callout", title: "Note", text: "JSX is not required to use React, but it is highly recommended as it makes code much easier to write and understand." },
      ]},
      { title: "Your First React Component", content: [
        { type: "p", text: "In React, everything is a component. A component is a reusable piece of UI that can manage its own state and lifecycle." },
        { type: "p", text: "Components can be defined as:" },
        { type: "li", text: "<strong>Function Components:</strong> Simple functions that return JSX (modern approach)" },
        { type: "li", text: "<strong>Class Components:</strong> ES6 classes that extend React.Component (older approach)" },
      ]},
      { title: "React vs Other Libraries", content: [
        { type: "p", text: "How does React compare to other popular frameworks?" },
        { type: "li", text: "<strong>React vs Angular:</strong> React is a library, Angular is a full framework" },
        { type: "li", text: "<strong>React vs Vue:</strong> Both are similar, but React has a larger ecosystem" },
        { type: "li", text: "<strong>React vs jQuery:</strong> React is component-based, jQuery is for DOM manipulation" },
        { type: "p", text: "React's flexibility and ecosystem make it a great choice for most projects." },
      ]},
    ],
    quiz: [
      { question: "What is React?", options: ["A programming language", "A JavaScript library for building UI", "A database management system", "An operating system"], explanation: "React is a JavaScript library created by Facebook for building user interfaces. It allows you to create reusable UI components." },
    ],
    challenge: { title: "Challenge: Create your first component", description: "Create a simple React component that displays a welcome message and a button. When the button is clicked, it should show an alert." },
    cheatSheet: { title: "React Introduction Cheat Sheet", items: [
      { term: "React", definition: "JavaScript library for building user interfaces" },
      { term: "Component-Based", definition: "UI built from small, reusable components" },
      { term: "Declarative", definition: "Describe what you want, React handles the DOM" },
      { term: "Virtual DOM", definition: "In-memory representation for better performance" },
      { term: "JSX", definition: "JavaScript XML - syntax extension that looks like HTML" },
      { term: "Create React App", definition: "Tool to quickly set up a new React project" },
      { term: "Function Components", definition: "Modern way to write components using functions" },
      { term: "One-Way Data Flow", definition: "Data flows from parent to child components" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "React est l'une des bibliothèques JavaScript les plus populaires pour construire des interfaces utilisateur. Créé par Facebook (maintenant Meta) en 2013, il est devenu la base de millions d'applications web dans le monde." },
        { type: "p", text: "Dans cette leçon, nous apprendrons ce qu'est React, pourquoi il est utilisé et comment configurer un projet React de base." },
      ]},
      { title: "Qu'est-ce que React ?", content: [
        { type: "p", text: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur. Il vous permet de créer des composants UI réutilisables qui peuvent être combinés pour construire des interfaces complexes." },
        { type: "p", text: "Caractéristiques clés de React :" },
        { type: "li", text: "<strong>Basé sur les composants :</strong> L'UI est construite à partir de petits composants réutilisables" },
        { type: "li", text: "<strong>Déclaratif :</strong> Vous décrivez ce que vous voulez, et React gère les mises à jour du DOM" },
        { type: "li", text: "<strong>DOM Virtuel :</strong> Utilise une représentation en mémoire du DOM réel pour de meilleures performances" },
        { type: "li", text: "<strong>Flux de données unidirectionnel :</strong> Les données descendent du parent aux composants enfants" },
      ]},
      { title: "Pourquoi utiliser React ?", content: [
        { type: "p", text: "Il y a de nombreuses raisons pour lesquelles React est devenu si populaire :" },
        { type: "li", text: "<strong>Facile à apprendre :</strong> API simple et syntaxe JSX le rendent accessible" },
        { type: "li", text: "<strong>Riche écosystème :</strong> Des milliers de bibliothèques et outils disponibles" },
        { type: "li", text: "<strong>Grande communauté :</strong> Documentation étendue, tutoriels et support communautaire" },
        { type: "li", text: "<strong>Marché du travail :</strong> Forte demande pour les développeurs React" },
        { type: "li", text: "<strong>Performance :</strong> DOM virtuel et rendu optimisé" },
      ]},
      { title: "Configuration d'un projet React", content: [
        { type: "p", text: "La manière la plus simple de démarrer un projet React est d'utiliser Create React App :" },
        { type: "li", text: "Installez Node.js depuis nodejs.org" },
        { type: "li", text: "Ouvrez votre terminal et exécutez : npx create-react-app my-app" },
        { type: "li", text: "Naviguez vers le dossier du projet : cd my-app" },
        { type: "li", text: "Démarrez le serveur de développement : npm start" },
        { type: "p", text: "Cela créera un nouveau projet React avec toutes les configurations nécessaires." },
      ]},
      { title: "JSX - JavaScript XML", content: [
        { type: "p", text: "JSX est une extension de syntaxe pour JavaScript qui ressemble à HTML. Il rend l'écriture de composants React plus intuitive et lisible." },
        { type: "p", text: "JSX vous permet d'écrire du code semblable à HTML dans vos fichiers JavaScript. Il est transcodé en appels de fonctions JavaScript réguliers." },
        { type: "callout", title: "Note", text: "JSX n'est pas requis pour utiliser React, mais il est fortement recommandé car il rend le code beaucoup plus facile à écrire et à comprendre." },
      ]},
      { title: "Votre premier composant React", content: [
        { type: "p", text: "Dans React, tout est un composant. Un composant est une pièce réutilisable de l'UI qui peut gérer son propre état et son cycle de vie." },
        { type: "p", text: "Les composants peuvent être définis comme :" },
        { type: "li", text: "<strong>Composants fonctionnels :</strong> De simples fonctions qui retournent du JSX (approche moderne)" },
        { type: "li", text: "<strong>Composants de classe :</strong> Des classes ES6 qui étendent React.Component (ancienne approche)" },
      ]},
      { title: "React vs autres bibliothèques", content: [
        { type: "p", text: "Comment React se compare-t-il aux autres frameworks populaires ?" },
        { type: "li", text: "<strong>React vs Angular :</strong> React est une bibliothèque, Angular est un framework complet" },
        { type: "li", text: "<strong>React vs Vue :</strong> Les deux sont similaires, mais React a un écosystème plus large" },
        { type: "li", text: "<strong>React vs jQuery :</strong> React est basé sur les composants, jQuery est pour la manipulation du DOM" },
        { type: "p", text: "La flexibilité et l'écosystème de React en font un excellent choix pour la plupart des projets." },
      ]},
    ],
    quiz: [
      { question: "Qu'est-ce que React ?", options: ["Un langage de programmation", "Une bibliothèque JavaScript pour construire l'UI", "Un système de gestion de base de données", "Un système d'exploitation"], explanation: "React est une bibliothèque JavaScript créée par Facebook pour construire des interfaces utilisateur. Elle vous permet de créer des composants UI réutilisables." },
    ],
    challenge: { title: "Défi : Créez votre premier composant", description: "Créez un composant React simple qui affiche un message de bienvenue et un bouton. Quand on clique sur le bouton, il devrait afficher une alerte." },
    cheatSheet: { title: "Référence de l'introduction à React", items: [
      { term: "React", definition: "Bibliothèque JavaScript pour construire des interfaces utilisateur" },
      { term: "Basé sur les composants", definition: "UI construite à partir de petits composants réutilisables" },
      { term: "Déclaratif", definition: "Décrivez ce que vous voulez, React gère le DOM" },
      { term: "DOM Virtuel", definition: "Représentation en mémoire pour de meilleures performances" },
      { term: "JSX", definition: "JavaScript XML - extension de syntaxe qui ressemble à HTML" },
      { term: "Create React App", definition: "Outil pour rapidement configurer un nouveau projet React" },
      { term: "Composants fonctionnels", definition: "Manère moderne d'écrire des composants avec des fonctions" },
      { term: "Flux de données unidirectionnel", definition: "Les données descendent des composants parent aux enfants" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "React ist eine der beliebtesten JavaScript-Bibliotheken zum Erstellen von Benutzeroberflächen. Erstellt von Facebook (jetzt Meta) im Jahr 2013, ist es zur Grundlage für Millionen von Webanwendungen weltweit geworden." },
        { type: "p", text: "In dieser Lektion lernen wir, was React ist, warum es verwendet wird und wie man ein grundlegendes React-Projekt einrichtet." },
      ]},
      { title: "Was ist React?", content: [
        { type: "p", text: "React ist eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen. Es ermöglicht Ihnen, wiederverwendbare UI-Komponenten zu erstellen, die zu komplexen Oberflächen zusammengefasst werden können." },
        { type: "p", text: "Hauptmerkmale von React:" },
        { type: "li", text: "<strong>Komponentenbasiert:</strong> UI wird aus kleinen, wiederverwendbaren Komponenten aufgebaut" },
        { type: "li", text: "<strong>Deklarativ:</strong> Sie beschreiben, was Sie wollen, und React kümmert sich um die DOM-Aktualisierungen" },
        { type: "li", text: "<strong>Virtuelles DOM:</strong> Verwendet eine Speicherrepräsentation des echten DOM für bessere Leistung" },
        { type: "li", text: "<strong>Einseitiger Datenfluss:</strong> Daten fließen von Eltern- zu Kindkomponenten" },
      ]},
      { title: "Warum React verwenden?", content: [
        { type: "p", text: "Es gibt viele Gründe, warum React so beliebt geworden ist:" },
        { type: "li", text: "<strong>Leicht zu erlernen:</strong> Einfache API und JSX-Syntax machen es zugänglich" },
        { type: "li", text: "<strong>Reiches Ökosystem:</strong> Tausende von Bibliotheken und Tools verfügbar" },
        { type: "li", text: "<strong>Große Gemeinschaft:</strong> Umfangreiche Dokumentation, Tutorials und Gemeinschaftsunterstützung" },
        { type: "li", text: "<strong>Arbeitsmarkt:</strong> Hohe Nachfrage nach React-Entwicklern" },
        { type: "li", text: "<strong>Leistung:</strong> Virtuelles DOM und optimiertes Rendering" },
      ]},
      { title: "React-Projekt einrichten", content: [
        { type: "p", text: "Der einfachste Weg, ein React-Projekt zu starten, ist die Verwendung von Create React App:" },
        { type: "li", text: "Installieren Sie Node.js von nodejs.org" },
        { type: "li", text: "Öffnen Sie Ihr Terminal und führen Sie aus: npx create-react-app my-app" },
        { type: "li", text: "Navigieren Sie zum Projektordner: cd my-app" },
        { type: "li", text: "Starten Sie den Entwicklungsserver: npm start" },
        { type: "p", text: "Dies erstellt ein neues React-Projekt mit allen notwendigen Konfigurationen." },
      ]},
      { title: "JSX - JavaScript XML", content: [
        { type: "p", text: "JSX ist eine Syntaxerweiterung für JavaScript, die ähnlich wie HTML aussieht. Sie macht das Schreiben von React-Komponenten intuitiver und lesbarer." },
        { type: "p", text: "JSX ermöglicht es Ihnen, HTML-ähnlichen Code in Ihren JavaScript-Dateien zu schreiben. Es wird in reguläre JavaScript-Funktionsaufrufe übersetzt." },
        { type: "callout", title: "Hinweis", text: "JSX ist nicht erforderlich, um React zu verwenden, wird aber dringend empfohlen, da es den Code viel leichter lesbar und verständlich macht." },
      ]},
      { title: "Ihre erste React-Komponente", content: [
        { type: "p", text: "In React ist alles eine Komponente. Eine Komponente ist ein wiederverwendbares Stück UI, das seinen eigenen Zustand und Lebenszyklus verwalten kann." },
        { type: "p", text: "Komponenten können definiert werden als:" },
        { type: "li", text: "<strong>Funktionskomponenten:</strong> Einfache Funktionen, die JSX zurückgeben (moderner Ansatz)" },
        { type: "li", text: "<strong>Klassenkomponenten:</strong> ES6-Klassen, die React.Component erweitern (älterer Ansatz)" },
      ]},
      { title: "React vs andere Bibliotheken", content: [
        { type: "p", text: "Wie schneidet React im Vergleich zu anderen beliebten Frameworks ab?" },
        { type: "li", text: "<strong>React vs Angular:</strong> React ist eine Bibliothek, Angular ist ein vollständiges Framework" },
        { type: "li", text: "<strong>React vs Vue:</strong> Beide sind ähnlich, aber React hat ein größeres Ökosystem" },
        { type: "li", text: "<strong>React vs jQuery:</strong> React ist komponentenbasiert, jQuery ist für DOM-Manipulation" },
        { type: "p", text: "Die Flexibilität und das Ökosystem von React machen es zu einer great Wahl für die meisten Projekte." },
      ]},
    ],
    quiz: [
      { question: "Was ist React?", options: ["Eine Programmiersprache", "Eine JavaScript-Bibliothek zum Erstellen von UI", "Ein Datenbanksystem", "Ein Betriebssystem"], explanation: "React ist eine von Facebook erstellte JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen. Sie ermöglicht das Erstellen wiederverwendbarer UI-Komponenten." },
    ],
    challenge: { title: "Herausforderung: Erstellen Sie Ihre erste Komponente", description: "Erstellen Sie eine einfache React-Komponente, die eine Willkommensnachricht und einen Button anzeigt. Wenn auf den Button geklickt wird, sollte eine Meldung angezeigt werden." },
    cheatSheet: { title: "Übersicht über die React-Einführung", items: [
      { term: "React", definition: "JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen" },
      { term: "Komponentenbasiert", definition: "UI wird aus kleinen, wiederverwendbaren Komponenten aufgebaut" },
      { term: "Deklarativ", definition: "Beschreiben Sie, was Sie wollen, React kümmert sich um das DOM" },
      { term: "Virtuelles DOM", definition: "Speicherrepräsentation für bessere Leistung" },
      { term: "JSX", definition: "JavaScript XML - Syntaxerweiterung, die wie HTML aussieht" },
      { term: "Create React App", definition: "Tool zum schnellen Einrichten eines neuen React-Projekts" },
      { term: "Funktionskomponenten", definition: "Moderner Ansatz zum Schreiben von Komponenten mit Funktionen" },
      { term: "Einseitiger Datenfluss", definition: "Daten fließen von Eltern- zu Kindkomponenten" },
    ]}
  },
};

export default translations;
