const translations = {
  ar: {
    sections: [
      { title: "مقدمة في المصادقة والتخطيط", content: [
        { type: "p", text: "بعد بناء قاعدة البيانات، نحتاج إلى إعداد مصادقة المستخدمين والتخطيط الرئيسي. Clerk يتعامل مع المصادقة بينما ننشئ الهيكل البصري." },
        { type: "callout", title: "ما سنتعلمه", text: "إعداد مصادقة Clerk، إنشاء صفحات تسجيل الدخول/التسجيل، حماية المسارات باستخدام middleware، بناء التخطيط الرئيسي مع الرأس والشريط الجانبي والتذييل." }
      ]},
      { title: "إعداد Clerk", content: [
        { type: "p", text: "يوفر Clerk حل مصادقة كامل. أولاً ثبّت الحزمة، ثم اضبط متغيرات البيئة، ولُف التطبيق باستخدام ClerkProvider." },
        { type: "callout", title: "مكونات Clerk الرئيسية", text: "ClerkProvider يلف التطبيق، SignIn/SignUp يتعاملان مع تسجيل الدخول/التسجيل، UserButton يعرض صورة المستخدم مع القائمة المنسدلة، SignedIn/SignedOut يتحكمان في العرض الشرطي." }
      ]},
      { title: "حماية الوسيطات", content: [
        { type: "p", text: "تحمي الوسيطات المسارات عن طريق التحقق مما إذا كان المستخدمون مصادق عليهم قبل الوصول إلى الصفحات المحمية مثل لوحة التحكم." },
        { type: "callout", title: "كيف تعمل الوسيطات", text: "أنشئ مقارنات المسارات للمسارات المحمية، استدعِ auth.protect() لطلب المصادقة، تعمل الوسيطات قبل عرض الصفحة." }
      ]},
      { title: "صفحات تسجيل الدخول والتسجيل", content: [
        { type: "p", text: "يوفر Clerk مكونات جاهزة لصفحات تسجيل الدخول والتسجيل باستخدام المسارات الشاملة." },
        { type: "callout", title: "هيكل المسارات", text: "استخدم المسارات الشاملة [[...sign-in]] و [[...sign-up]] لصفحات مصادقة Clerk." }
      ]},
      { title: "UserButton في الرأس", content: [
        { type: "p", text: "مكون UserButton من Clerk يعرض صورة المستخدم ويوفر خيارات إدارة الحساب." },
        { type: "callout", title: "العرض الشرطي", text: "استخدم SignedIn لعرض رابط لوحة التحكم وUserButton عند تسجيل الدخول، وSignedOut لعرض زر تسجيل الدخول عند تسجيل الخروج." }
      ]},
      { title: "هيكل التخطيط الرئيسي", content: [
        { type: "p", text: "أنشئ تخطيطًا مع الرأس والشريط الجانبي والتذييل باستخدام CSS Grid أو Flexbox للتصميم المتجاوب." },
        { type: "callout", title: "نمط التخطيط", text: "استخدم المجموعات المRoute لتنظيم المسارات، أنشئ مكونات تخطيط مشتركة، تأكد من التنقل المتسق عبر الصفحات." }
      ]}
    ],
    quiz: [
      { question: "أي وظيفة Clerk تحمي المسارات في الوسيطات؟",
        options: ["protectRoute()", "auth.protect()", "securePage()", "checkAuth()"],
        correctAnswer: 1, explanation: "auth.protect() هي وظيفة الوسيطات في Clerk التي تتطلب المصادقة للمسارات المحمية." },
      { question: "أين يجب وضع ClerkProvider لحماية جميع المسارات؟",
        options: ["في كل صفحة محمية", "في middleware.ts", "في app/layout.js التخطيط الجذر", "في next.config.js"],
        correctAnswer: 2, explanation: "يجب أن يكون ClerkProvider في التخطيط الجذر layout.js للف التطبيق بالكامل بسياق المصادقة." }
    ],
    challenge: { title: "تحدي: إنشاء صفحة ملف التعريف",
      description: "أنشئ صفحة /profile تعرض معلومات المستخدم باستخدام مكون UserProfile من Clerk. أنشئ المسار، أضف الصفحة مع UserProfile، وحمِّ المسار باستخدام الوسيطات." },
    cheatSheet: { title: "مرجع المصادقة والتخطيط السريع", items: [
      { title: "مكونات Clerk", content: "ClerkProvider, SignIn, SignUp, UserButton, SignedIn, SignedOut" },
      { title: "نمط التخطيط", content: "التخطيط الجزر للهيكل الرئيسي، المجموعات المRoute للتنظيم" },
      { title: "الوسيطات", content: "تحمي المسارات باستخدام createRouteMatcher و auth.protect()" }
    ]},
    interviewQuestions: [
      { question: "كيف تدير أخطاء المشروع؟", answer: "اكتب اختبارات، استخدم linting، و راجع الكود باستمرار.", difficulty: "medium" },
      { question: "كيف تُحسّن أداء المشروع؟", answer: "قلل الـ bundle size، استخدم lazy loading، وحسّن الصور.", difficulty: "medium" }
    ],
    tricks: [
      { title: "استخدم Git branches", description: "افصل كل ميزة في branch منفصل", type: "brain" },
      { title: "اكتب tests", description: "لا تنشر ميزة بدون اختبارات", type: "brain" }
    ]
  },
  en: {
    sections: [
      { title: "Introduction to Authentication and Layout", content: [
        { type: "p", text: "After building the database, we need to set up user authentication and the main layout. Clerk handles authentication while we create the visual structure." },
        { type: "callout", title: "What We Will Learn", text: "Setting up Clerk authentication, creating login/signup pages, protecting routes with middleware, building the main layout with header, sidebar and footer." }
      ]},
      { title: "Setting Up Clerk", content: [
        { type: "p", text: "Clerk provides a complete authentication solution. First install the package, then configure environment variables, and wrap the app with ClerkProvider." },
        { type: "callout", title: "Key Clerk Components", text: "ClerkProvider wraps the app, SignIn/SignUp handle login/registration, UserButton shows user avatar with dropdown, SignedIn/SignedOut control conditional rendering." }
      ]},
      { title: "Middleware Protection", content: [
        { type: "p", text: "Middleware protects routes by checking if users are authenticated before accessing protected pages like dashboard." },
        { type: "callout", title: "How Middleware Works", text: "Create route matchers for protected routes, call auth.protect() to require authentication, middleware runs before the page renders." }
      ]},
      { title: "Login and Registration Pages", content: [
        { type: "p", text: "Clerk provides ready-made components for sign-in and sign-up pages using catch-all routes." },
        { type: "callout", title: "Route Structure", text: "Use [[...sign-in]] and [[...sign-up]] catch-all routes for Clerk's authentication pages." }
      ]},
      { title: "UserButton in Header", content: [
        { type: "p", text: "The UserButton component from Clerk shows the user's avatar and provides account management options." },
        { type: "callout", title: "Conditional Rendering", text: "Use SignedIn to show dashboard link and UserButton when logged in, SignedOut to show login button when logged out." }
      ]},
      { title: "Main Layout Structure", content: [
        { type: "p", text: "Create a layout with Header, Sidebar, and Footer using CSS Grid or Flexbox for responsive design." },
        { type: "callout", title: "Layout Pattern", text: "Use Route Groups to organize routes, create shared layout components, ensure consistent navigation across pages." }
      ]}
    ],
    quiz: [
      { question: "Which Clerk function protects routes in middleware?",
        options: ["protectRoute()", "auth.protect()", "securePage()", "checkAuth()"],
        correctAnswer: 1, explanation: "auth.protect() is Clerk's middleware function that requires authentication for protected routes." },
      { question: "Where must ClerkProvider be placed to protect all routes?",
        options: ["In each protected page", "In middleware.ts", "In app/layout.js root layout", "In next.config.js"],
        correctAnswer: 2, explanation: "ClerkProvider must be in the root layout.js to wrap the entire application with authentication context." }
    ],
    challenge: { title: "Challenge: Create a Profile Page",
      description: "Create a /profile page that displays the user's information using Clerk's UserProfile component. Create the route, add the page with UserProfile, and protect the route with middleware." },
    cheatSheet: { title: "Quick Auth and Layout Reference", items: [
      { title: "Clerk Components", content: "ClerkProvider, SignIn, SignUp, UserButton, SignedIn, SignedOut" },
      { title: "Layout Pattern", content: "Root Layout for main structure, Route Groups for organization" },
      { title: "Middleware", content: "Protects routes using createRouteMatcher and auth.protect()" }
    ]},
    interviewQuestions: [
      { question: "How do you manage project errors?", answer: "Write tests, use linting, and review code regularly.", difficulty: "medium" },
      { question: "How do you improve project performance?", answer: "Reduce bundle size, use lazy loading, and optimize images.", difficulty: "medium" }
    ],
    tricks: [
      { title: "Use Git branches", description: "Separate each feature in its own branch", type: "brain" },
      { title: "Write tests", description: "Never deploy a feature without tests", type: "brain" }
    ]
  },
  fr: {
    sections: [
      { title: "Introduction a l'authentification et la mise en page", content: [
        { type: "p", text: "Apres avoir cree la base de donnees, nous devons configurer l'authentification et la mise en page principale." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Configuration de Clerk, creation des pages de connexion/inscription, protection des routes, construction de la mise en page principale." }
      ]},
      { title: "Configuration de Clerk", content: [
        { type: "p", text: "Clerk fournit une solution complete d'authentification. Installez le package, configurez les variables et enveloppez l'app avec ClerkProvider." },
        { type: "callout", title: "Composants Clerk cles", text: "ClerkProvider enveloppe l'app, SignIn/SignUp gèrent la connexion, UserButton affiche l'avatar, SignedIn/SignedOut controlent le rendu conditionnel." }
      ]},
      { title: "Protection par Middleware", content: [
        { type: "p", text: "Le middleware protege les routes en verifiant l'authentification avant d'acceder aux pages protegees." },
        { type: "callout", title: "Fonctionnement du Middleware", text: "Creez des comparateurs de routes, appelez auth.protect() pour exiger l'authentification." }
      ]},
      { title: "Pages de connexion et d'inscription", content: [
        { type: "p", text: "Clerk fournit des composants prets a l'emploi pour les pages de connexion et d'inscription." },
        { type: "callout", title: "Structure des routes", text: "Utilisez les routes catch-all [[...sign-in]] et [[...sign-up]] pour les pages d'authentification Clerk." }
      ]},
      { title: "UserButton dans l'en-tete", content: [
        { type: "p", text: "Le composant UserButton de Clerk affiche l'avatar utilisateur et les options de gestion de compte." },
        { type: "callout", title: "Rendu conditionnel", text: "Utilisez SignedIn pour afficher le lien tableau de bord et UserButton quand connecte, SignedOut pour afficher le bouton de connexion." }
      ]},
      { title: "Structure de la mise en page principale", content: [
        { type: "p", text: "Creez une mise en page avec En-tete, Barre laterale et Pied de page responsive." },
        { type: "callout", title: "Modele de mise en page", text: "Utilisez les Groupes de Routes pour organiser, creez des composants de mise en page partages." }
      ]}
    ],
    quiz: [
      { question: "Quelle fonction Clerk protege les routes dans le middleware ?",
        options: ["protectRoute()", "auth.protect()", "securePage()", "checkAuth()"],
        correctAnswer: 1, explanation: "auth.protect() est la fonction middleware de Clerk qui necessite l'authentification." },
      { question: "Ou doit-on placer ClerkProvider pour proteger toutes les routes ?",
        options: ["Dans chaque page protegee", "Dans middleware.ts", "Dans app/layout.js", "Dans next.config.js"],
        correctAnswer: 2, explanation: "ClerkProvider doit etre dans le layout.js racine pour envelopper toute l'application." }
    ],
    challenge: { title: "Defi : Creer une page Profil",
      description: "Creez une page /profile qui affiche les informations utilisateur avec le composant UserProfile de Clerk." },
    cheatSheet: { title: "Reference rapide auth et mise en page", items: [
      { title: "Composants Clerk", content: "ClerkProvider, SignIn, SignUp, UserButton, SignedIn, SignedOut" },
      { title: "Modele de mise en page", content: "Layout racine pour la structure principale" },
      { title: "Middleware", content: "Protege les routes avec createRouteMatcher et auth.protect()" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Authentifizierung und Layout", content: [
        { type: "p", text: "Nach dem Erstellen der Datenbank mussen wir die Benutzerauthentifizierung und das Hauptlayout einrichten." },
        { type: "callout", title: "Was wir lernen werden", text: "Einrichtung von Clerk-Authentifizierung, Erstellung von Anmeldeseiten, Schutz von Routen mit Middleware, Aufbau des Hauptlayouts." }
      ]},
      { title: "Clerk einrichten", content: [
        { type: "p", text: "Clerk bietet eine vollstandige Authentifizierungslösung. Installieren Sie das Paket, konfigurieren Sie Umgebungsvariablen und wickeln Sie die App mit ClerkProvider ein." },
        { type: "callout", title: "Wichtige Clerk-Komponenten", text: "ClerkProvider wickelt die App ein, SignIn/SignUp behandeln Anmeldung, UserButton zeigt Avatar, SignedIn/SignedOut steuern die bedingte Wiedergabe." }
      ]},
      { title: "Middleware-Schutz", content: [
        { type: "p", text: "Middleware schutzt Routen, indem sie pruft, ob Benutzer authentifiziert sind." },
        { type: "callout", title: "Wie Middleware funktioniert", text: "Erstellen Sie Routenvergleicher, rufen Sie auth.protect() auf, um Authentifizierung zu erfordern." }
      ]},
      { title: "Anmelde- und Registrierungsseiten", content: [
        { type: "p", text: "Clerk bietet fertige Komponenten fur Anmelde- und Registrierungsseiten." },
        { type: "callout", title: "Routenstruktur", text: "Verwenden Sie Catch-All-Routen [[...sign-in]] und [[...sign-up]] fur Clorks Authentifizierungsseiten." }
      ]},
      { title: "UserButton im Header", content: [
        { type: "p", text: "Die UserButton-Komponente von Clerk zeigt den Benutzeravatar und bietet Kontoverwaltungsoptionen." },
        { type: "callout", title: "Bedingte Wiedergabe", text: "Verwenden Sie SignedIn um Dashboard-Link und UserButton anzuzeigen, SignedOut fur den Anmeldebutton." }
      ]},
      { title: "Hauptlayout-Struktur", content: [
        { type: "p", text: "Erstellen Sie ein Layout mit Header, Sidebar und Footer mit responsivem Design." },
        { type: "callout", title: "Layout-Muster", text: "Verwenden Sie Route Groups zur Organisation, erstellen Sie gemeinsame Layout-Komponenten." }
      ]}
    ],
    quiz: [
      { question: "Welche Clerk-Funktion schutzt Routen in der Middleware?",
        options: ["protectRoute()", "auth.protect()", "securePage()", "checkAuth()"],
        correctAnswer: 1, explanation: "auth.protect() ist Clorks Middleware-Funktion, die Authentifizierung erfordert." },
      { question: "Wo muss ClerkProvider platziert werden, um alle Routen zu schutzen?",
        options: ["In jeder geschutzten Seite", "In middleware.ts", "In app/layout.js Root-Layout", "In next.config.js"],
        correctAnswer: 2, explanation: "ClerkProvider muss im Root layout.js platziert werden, um die gesamte Anwendung zu umgeben." }
    ],
    challenge: { title: "Herausforderung: Profilseite erstellen",
      description: "Erstellen Sie eine /profile-Seite, die Benutzerinformationen mit Clorks UserProfile-Komponente anzeigt." },
    cheatSheet: { title: "Schnelle Auth- und Layout-Referenz", items: [
      { title: "Clerk-Komponenten", content: "ClerkProvider, SignIn, SignUp, UserButton, SignedIn, SignedOut" },
      { title: "Layout-Muster", content: "Root-Layout fur Hauptstruktur, Route Groups zur Organisation" },
      { title: "Middleware", content: "Schutzt Routen mit createRouteMatcher und auth.protect()" }
    ]}
  }
};
export default translations;
