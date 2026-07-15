const translations = {
  ar: {
    sections: [
      {
        title: "إنشاء مشروع Next.js جديد",
        content: [
          { type: "p", text: "الآن سنقوم فعليًا بإعداد المشروع. سنستخدم <code>create-next-app</code> لإنشاء مشروع Next.js جديد مع جميع الإعدادات اللازمة." },
          { type: "p", text: "سيقوم هذا الأمر بإنشاء مجلد <code>my-blog</code> يحتوي على:" },
          { type: "li", text: "مشروع Next.js جاهز مع TypeScript" },
          { type: "li", text: "Tailwind CSS مثبت ومسّتى" },
          { type: "li", text: "ESLint للتحقق من الكود" },
          { type: "li", text: "هيكل app/ جاهز للاستخدام" },
          { type: "li", text: "ملف package.json مع التبعيات الأساسية" },
          { type: "callout", title: "شرح الخيارات", text: "--typescript لاستخدام TypeScript بدلاً من JavaScript العادي، --tailwind لتثبيت وإعداد Tailwind CSS تلقائيًا، --eslint لإضافة ESLint للتحقق من الكود، --app لاستخدام App Router (النهج الحديث)، --src-dir لوضع الكود في مجلد src/ (اختياري لكن أفضل)، --import-alias \"@/*\" لتبسيط الاستيراد باستخدام @" }
        ]
      },
      {
        title: "تثبيت التبعيات الإضافية",
        content: [
          { type: "p", text: "بعد إنشاء المشروع، نحتاج إلى تثبيت التبعيات الإضافية التي سنستخدمها في مشروع المدونة:" },
          { type: "li", text: "<strong>@supabase/ssr:</strong> يوفر إعدادات Supabase للعرض من جانب الخادم. هذا يتيح لنا الوصول إلى قاعدة البيانات من الخادم بشكل آمن." },
          { type: "li", text: "<strong>@supabase/supabase-js:</strong> العميل الرئيسي للعمل مع Supabase. يوفر API لاستعلامات قاعدة البيانات." },
          { type: "li", text: "<strong>@clerk/nextjs:</strong> يوفر مكونات وأدوات Clerk لـ Next.js. يتضمن نماذج تسجيل الدخول وحماية المسارات وإدارة المستخدمين." }
        ]
      },
      {
        title: "إعداد هيكل المجلدات",
        content: [
          { type: "p", text: "بعد إنشاء المشروع وتثبيت التبعيات، نحتاج إلى إنشاء مجلدات وملفات إضافية. دعنا نرى هيكل المشروع النهائي:" },
          { type: "callout", title: "لماذا نستخدم مجلد src/؟", text: " استخدام مجلد src/ يجعل هيكل المشروع أكثر تنظيمًا. جميع ملفات الكود تذهب داخل src/ بينما تظل ملفات الإعداد في الجذر. هذا نمط شائع في المشاريع الكبيرة." }
        ]
      },
      {
        title: "إعداد متغيرات البيئة",
        content: [
          { type: "p", text: "تُستخدم متغيرات البيئة لتخزين المعلومات السرية مثل مفاتيح API. هذه الملفات <strong>لا يجب رفعها إلى GitHub</strong> لأنها تحتوي على معلومات حساسة." },
          { type: "p", text: "كيفية الحصول على هذه المفاتيح:" },
          { type: "li", text: "<strong>مفاتيح Supabase:</strong> اذهب إلى dashboard.supabase.com، اختر مشروعك، انتقل إلى Settings > API، انسخ رابط المشروع ومفتاح anon العام." },
          { type: "li", text: "<strong>مفاتيح Clerk:</strong> اذهب إلى dashboard.clerk.com، اختر مشروعك، انتقل إلى API Keys، انسخ Publishable Key و Secret Key." },
          { type: "callout", title: "تنبيه أمني مهم", text: "أضف .env.local إلى ملف .gitignore لمنع رفعه إلى GitHub. أي شخص يحصل على هذه المفاتيح يمكنه الوصول إلى بياناتك!" }
        ]
      },
      {
        title: "ملف package.json",
        content: [
          { type: "p", text: "يحتوي ملف package.json على معلومات المشروع والتبعيات والأوامر المتاحة. بعد تثبيت التبعيات، سيبدو هكذا:" },
          { type: "p", text: "الأمر المهم هو <code>npm run dev</code> الذي يقوم بتشغيل خادم التطوير. يمكنك تشغيله عن طريق الكتابة في الطرفية:" },
          { type: "p", text: "بعد التشغيل، افتح المتصفح وانتقل إلى <code>http://localhost:3000</code> لرؤية مشروعك." }
        ]
      },
      {
        title: "تحسين الكود: هيكل Monorepo للتوسع",
        content: [
          { type: "p", text: "إذا كنت تخطط لتوسيع مشروعك في المستقبل (مثل إضافة تطبيق جوال أو API خارجي)، يمكنك استخدام هيكل <strong>Monorepo</strong>. هذا الهيكل يتيح لك مشاركة الكود بين مشاريع متعددة." },
          { type: "p", text: "المكتبات التي تساعدك على إدارة Monorepo:" },
          { type: "li", text: "<strong>Turborepo:</strong> أداة سريعة لإدارة مشاريع متعددة" },
          { type: "li", text: "<strong>pnpm workspaces:</strong> إدارة التبعيات المشتركة" },
          { type: "li", text: "<strong>Nx:</strong> إطار عمل قوي للمشاريع الكبيرة" },
          { type: "callout", title: "متى تستخدم Monorepo؟", text: "استخدم Monorepo عندما يكون لديك أكثر من مشروع يشارك نفس الكود. للمشاريع الصغيرة (مثل مدونتنا)، الهيكل العادي (Single Repo) كافٍ ويبسط الأمور." }
        ]
      }
    ],
    quiz: [
      {
        question: "أي ملف يحتوي على مفاتيح API السرية ولا يجب رفعه إلى GitHub؟",
        options: ["package.json", ".env.local", "next.config.js", "tailwind.config.js"],
        correctAnswer: 1,
        explanation: "يحتوي ملف .env.local على متغيرات البيئة الحساسة مثل مفاتيح API. يجب دائمًا إضافته إلى .gitignore لمنع رفعه إلى GitHub."
      }
    ],
    challenge: {
      title: "تحدي الإعداد: أعد إنشاء المشروع",
      description: "حاول إنشاء مشروع Next.js جديد بنفسك باستخدام الأوامر التالية: 1. قم بتشغيل npx create-next-app@latest 2. ثبّت التبعيات الإضافية (@supabase/ssr, @clerk/nextjs) 3. أنشئ مجلد components/ مع ملف Header.js بسيط 4. أنشئ مجلد lib/ مع ملف utils.js بسيط 5. قم بتشغيل المشروع باستخدام npm run dev وتأكد من أنه يعمل. إذا واجهت أي مشكلة، راجع خطوات التثبيت أعلاه أو ابحث عن الحل على Google."
    },
    cheatSheet: {
      title: "مرجع الإعداد السريع",
      items: [
        { title: "1. إنشاء المشروع", content: "npx create-next-app@latest my-blog" },
        { title: "2. تثبيت التبعيات", content: "npm install @supabase/ssr @clerk/nextjs" },
        { title: "3. إعداد .env.local", content: "أضف مفاتيح Supabase و Clerk" },
        { title: "4. تشغيل المشروع", content: "npm run dev" }
      ]
    },
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
      {
        title: "Creating a New Next.js Project",
        content: [
          { type: "p", text: "Now we will actually set up the project. We will use <code>create-next-app</code> to create a new Next.js project with all the necessary settings." },
          { type: "p", text: "This command will create a <code>my-blog</code> folder containing:" },
          { type: "li", text: "A ready Next.js project with TypeScript" },
          { type: "li", text: "Tailwind CSS installed and configured" },
          { type: "li", text: "ESLint for code validation" },
          { type: "li", text: "Ready app/ structure for use" },
          { type: "li", text: "package.json file with core dependencies" },
          { type: "callout", title: "Options Explained", text: "--typescript to use TypeScript instead of plain JavaScript, --tailwind to install and configure Tailwind CSS automatically, --eslint to add ESLint for code validation, --app to use App Router (modern approach), --src-dir to place code in src/ directory (optional but better), --import-alias \"@/*\" to simplify imports using @" }
        ]
      },
      {
        title: "Installing Additional Dependencies",
        content: [
          { type: "p", text: "After creating the project, we need to install additional dependencies we will use in the blog project:" },
          { type: "li", text: "<strong>@supabase/ssr:</strong> Provides Supabase settings for server-side rendering. This allows us to access the database from the server securely." },
          { type: "li", text: "<strong>@supabase/supabase-js:</strong> The main client for working with Supabase. Provides an API for database queries." },
          { type: "li", text: "<strong>@clerk/nextjs:</strong> Provides Clerk components and tools for Next.js. Includes login forms, route protection, and user management." }
        ]
      },
      {
        title: "Folder Structure Setup",
        content: [
          { type: "p", text: "After creating the project and installing dependencies, we need to create additional folders and files. Let's see the final project structure:" },
          { type: "callout", title: "Why do we use the src/ folder?", text: "Using the src/ folder makes the project structure more organized. All code files go inside src/ while configuration files stay at the root. This is a common pattern in large projects." }
        ]
      },
      {
        title: "Environment Variables Setup",
        content: [
          { type: "p", text: "Environment variables are used to store secret information like API keys. These files <strong>should not be uploaded to GitHub</strong> because they contain sensitive information." },
          { type: "p", text: "How to get these keys:" },
          { type: "li", text: "<strong>Supabase Keys:</strong> Go to dashboard.supabase.com, select your project, navigate to Settings > API, copy Project URL and anon public key." },
          { type: "li", text: "<strong>Clerk Keys:</strong> Go to dashboard.clerk.com, select your project, navigate to API Keys, copy Publishable Key and Secret Key." },
          { type: "callout", title: "Important Security Warning", text: "Add .env.local to the .gitignore file to prevent uploading it to GitHub. Anyone who gets these keys can access your data!" }
        ]
      },
      {
        title: "package.json File",
        content: [
          { type: "p", text: "The package.json file contains project information, dependencies, and available commands. After installing dependencies, it will look like this:" },
          { type: "p", text: "The important command is <code>npm run dev</code> which runs the development server. You can run it by typing in the terminal:" },
          { type: "p", text: "After running, open the browser and go to <code>http://localhost:3000</code> to see your project." }
        ]
      },
      {
        title: "Code Improvement: Monorepo Structure for Scaling",
        content: [
          { type: "p", text: "If you plan to expand your project in the future (like adding a mobile app or external API), you can use a <strong>Monorepo</strong> structure. This structure allows you to share code between multiple projects." },
          { type: "p", text: "Libraries that help you manage Monorepo:" },
          { type: "li", text: "<strong>Turborepo:</strong> Fast tool for managing multiple projects" },
          { type: "li", text: "<strong>pnpm workspaces:</strong> Managing shared dependencies" },
          { type: "li", text: "<strong>Nx:</strong> Powerful framework for large projects" },
          { type: "callout", title: "When to use Monorepo?", text: "Use Monorepo when you have more than one project sharing the same code. For small projects (like our blog), the regular structure (Single Repo) is sufficient and simplifies things." }
        ]
      }
    ],
    quiz: [
      {
        question: "Which file contains secret API keys and should not be uploaded to GitHub?",
        options: ["package.json", ".env.local", "next.config.js", "tailwind.config.js"],
        correctAnswer: 1,
        explanation: "The .env.local file contains sensitive environment variables like API keys. It should always be added to .gitignore to prevent uploading to GitHub."
      }
    ],
    challenge: {
      title: "Setup Challenge: Recreate the Project",
      description: "Try creating a new Next.js project yourself using the following commands: 1. Run npx create-next-app@latest 2. Install additional dependencies (@supabase/ssr, @clerk/nextjs) 3. Create a components/ folder with a simple Header.js file 4. Create a lib/ folder with a simple utils.js file 5. Run the project with npm run dev and make sure it works. If you encounter any problem, review the installation steps above or search for the solution on Google."
    },
    cheatSheet: {
      title: "Quick Setup Reference",
      items: [
        { title: "1. Create Project", content: "npx create-next-app@latest my-blog" },
        { title: "2. Install Dependencies", content: "npm install @supabase/ssr @clerk/nextjs" },
        { title: "3. Setup .env.local", content: "Add Supabase and Clerk keys" },
        { title: "4. Run Project", content: "npm run dev" }
      ]
    },
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
      {
        title: "Créer un nouveau projet Next.js",
        content: [
          { type: "p", text: "Maintenant nous allons réellement configurer le projet. Nous allons utiliser <code>create-next-app</code> pour créer un nouveau projet Next.js avec tous les paramètres nécessaires." },
          { type: "p", text: "Cette commande créera un dossier <code>my-blog</code> contenant :" },
          { type: "li", text: "Un projet Next.js prêt avec TypeScript" },
          { type: "li", text: "Tailwind CSS installé et configuré" },
          { type: "li", text: "ESLint pour la validation du code" },
          { type: "li", text: "Structure app/ prête à l'emploi" },
          { type: "li", text: "Fichier package.json avec les dépendances de base" },
          { type: "callout", title: "Options expliquées", text: "--typescript pour utiliser TypeScript au lieu de JavaScript pur, --tailwind pour installer et configurer Tailwind CSS automatiquement, --eslint pour ajouter ESLint pour la validation du code, --app pour utiliser App Router (approche moderne), --src-dir pour placer le code dans le répertoire src/ (optionnel mais meilleur), --import-alias \"@/*\" pour simplifier les imports en utilisant @" }
        ]
      },
      {
        title: "Installation des dépendances supplémentaires",
        content: [
          { type: "p", text: "Après avoir créé le projet, nous devons installer les dépendances supplémentaires que nous utiliserons dans le projet blog :" },
          { type: "li", text: "<strong>@supabase/ssr :</strong> Fournit les paramètres Supabase pour le rendu côté serveur. Cela nous permet d'accéder à la base de données depuis le serveur en toute sécurité." },
          { type: "li", text: "<strong>@supabase/supabase-js :</strong> Le client principal pour travailler avec Supabase. Fournit une API pour les requêtes de base de données." },
          { type: "li", text: "<strong>@clerk/nextjs :</strong> Fournit les composants et outils Clerk pour Next.js. Inclut les formulaires de connexion, la protection des routes et la gestion des utilisateurs." }
        ]
      },
      {
        title: "Configuration de la structure des dossiers",
        content: [
          { type: "p", text: "Après avoir créé le projet et installé les dépendances, nous devons créer des dossiers et fichiers supplémentaires. Voyons la structure finale du projet :" },
          { type: "callout", title: "Pourquoi utilisons-nous le dossier src/ ?", text: "L'utilisation du dossier src/ rend la structure du projet plus organisée. Tous les fichiers de code vont à l'intérieur de src/ tandis que les fichiers de configuration restent à la racine. C'est un modèle courant dans les grands projets." }
        ]
      },
      {
        title: "Configuration des variables d'environnement",
        content: [
          { type: "p", text: "Les variables d'environnement sont utilisées pour stocker les informations secrètes comme les clés API. Ces fichiers <strong>ne doivent pas être uploadés sur GitHub</strong> car ils contiennent des informations sensibles." },
          { type: "p", text: "Comment obtenir ces clés :" },
          { type: "li", text: "<strong>Clés Supabase :</strong> Allez sur dashboard.supabase.com, sélectionnez votre projet, naviguez vers Settings > API, copiez l'URL du projet et la clé publique anon." },
          { type: "li", text: "<strong>Clés Clerk :</strong> Allez sur dashboard.clerk.com, sélectionnez votre projet, naviguez vers API Keys, copiez la Publishable Key et la Secret Key." },
          { type: "callout", title: "Avertissement de sécurité important", text: "Ajoutez .env.local au fichier .gitignore pour empêcher son upload sur GitHub. Toute personne qui obtient ces clés peut accéder à vos données !" }
        ]
      },
      {
        title: "Fichier package.json",
        content: [
          { type: "p", text: "Le fichier package.json contient les informations du projet, les dépendances et les commandes disponibles. Après l'installation des dépendances, il ressemblera à ceci :" },
          { type: "p", text: "La commande importante est <code>npm run dev</code> qui lance le serveur de développement. Vous pouvez l'exécuter en tapant dans le terminal :" },
          { type: "p", text: "Après l'exécution, ouvrez le navigateur et allez sur <code>http://localhost:3000</code> pour voir votre projet." }
        ]
      },
      {
        title: "Amélioration du code : Structure Monorepo pour l'évolutivité",
        content: [
          { type: "p", text: "Si vous prévoyez d'étendre votre projet à l'avenir (comme ajouter une application mobile ou une API externe), vous pouvez utiliser une structure <strong>Monorepo</strong>. Cette structure vous permet de partager le code entre plusieurs projets." },
          { type: "p", text: "Bibliothèques qui vous aident à gérer Monorepo :" },
          { type: "li", text: "<strong>Turborepo :</strong> Outil rapide pour gérer plusieurs projets" },
          { type: "li", text: "<strong>pnpm workspaces :</strong> Gestion des dépendances partagées" },
          { type: "li", text: "<strong>Nx :</strong> Framework puissant pour les grands projets" },
          { type: "callout", title: "Quand utiliser Monorepo ?", text: "Utilisez Monorepo lorsque vous avez plus d'un projet partageant le même code. Pour les petits projets (comme notre blog), la structure normale (Single Repo) est suffisante et simplifie les choses." }
        ]
      }
    ],
    quiz: [
      {
        question: "Quel fichier contient les clés API secrètes et ne doit pas être uploadé sur GitHub ?",
        options: ["package.json", ".env.local", "next.config.js", "tailwind.config.js"],
        correctAnswer: 1,
        explanation: "Le fichier .env.local contient les variables d'environnement sensibles comme les clés API. Il doit toujours être ajouté au .gitignore pour empêcher l'upload sur GitHub."
      }
    ],
    challenge: {
      title: "Défi de configuration : Recréer le projet",
      description: "Essayez de créer un nouveau projet Next.js vous-même en utilisant les commandes suivantes : 1. Exécutez npx create-next-app@latest 2. Installez les dépendances supplémentaires (@supabase/ssr, @clerk/nextjs) 3. Créez un dossier components/ avec un fichier Header.js simple 4. Créez un dossier lib/ avec un fichier utils.js simple 5. Lancez le projet avec npm run dev et assurez-vous qu'il fonctionne. Si vous rencontrez un problème, revoyez les étapes d'installation ci-dessus ou cherchez la solution sur Google."
    },
    cheatSheet: {
      title: "Référence rapide de configuration",
      items: [
        { title: "1. Créer le projet", content: "npx create-next-app@latest my-blog" },
        { title: "2. Installer les dépendances", content: "npm install @supabase/ssr @clerk/nextjs" },
        { title: "3. Configurer .env.local", content: "Ajouter les clés Supabase et Clerk" },
        { title: "4. Lancer le projet", content: "npm run dev" }
      ]
    }
  },
  de: {
    sections: [
      {
        title: "Ein neues Next.js-Projekt erstellen",
        content: [
          { type: "p", text: "Jetzt werden wir das Projekt tatsächlich einrichten. Wir verwenden <code>create-next-app</code>, um ein neues Next.js-Projekt mit allen notwendigen Einstellungen zu erstellen." },
          { type: "p", text: "Dieser Befehl erstellt einen <code>my-blog</code>-Ordner mit:" },
          { type: "li", text: "Einem fertigen Next.js-Projekt mit TypeScript" },
          { type: "li", text: "Tailwind CSS installiert und konfiguriert" },
          { type: "li", text: "ESLint zur Codevalidierung" },
          { type: "li", text: "Fertiger app/-Struktur zur Verwendung" },
          { type: "li", text: "package.json-Datei mit Kernabhängigkeiten" },
          { type: "callout", title: "Optionen erklärt", text: "--typescript zur Verwendung von TypeScript statt normalem JavaScript, --tailwind zur automatischen Installation und Konfiguration von Tailwind CSS, --eslint zum Hinzufügen von ESLint zur Codevalidierung, --app zur Verwendung des App Router (moderner Ansatz), --src-dir zum Platzieren des Codes im src/-Verzeichnis (optional aber besser), --import-alias \"@/*\" zum Vereinfachen von Imports mit @" }
        ]
      },
      {
        title: "Zusätzliche Abhängigkeiten installieren",
        content: [
          { type: "p", text: "Nach der Erstellung des Projekts müssen wir die zusätzlichen Abhängigkeiten installieren, die wir im Blog-Projekt verwenden werden:" },
          { type: "li", text: "<strong>@supabase/ssr:</strong> Bietet Supabase-Einstellungen für Server-Side Rendering. Dies ermöglicht es uns, sicher auf die Datenbank vom Server aus zuzugreifen." },
          { type: "li", text: "<strong>@supabase/supabase-js:</strong> Der Hauptclient für die Arbeit mit Supabase. Bietet eine API für Datenbankabfragen." },
          { type: "li", text: "<strong>@clerk/nextjs:</strong> Bietet Clerk-Komponenten und -Tools für Next.js. Enthält Anmeldeformulare, Routenschutz und Benutzerverwaltung." }
        ]
      },
      {
        title: "Ordnerstruktur einrichten",
        content: [
          { type: "p", text: "Nach der Erstellung des Projekts und der Installation der Abhängigkeiten müssen wir zusätzliche Ordner und Dateien erstellen. Schauen wir uns die endgültige Projektstruktur an:" },
          { type: "callout", title: "Warum verwenden wir den src/-Ordner?", text: "Die Verwendung des src/-Ordners macht die Projektstruktur organisierter. Alle Code-Dateien kommen in src/, während Konfigurationsdateien im Stammverzeichnis bleiben. Dies ist ein gängiges Muster in großen Projekten." }
        ]
      },
      {
        title: "Umgebungsvariablen einrichten",
        content: [
          { type: "p", text: "Umgebungsvariablen werden verwendet, um geheime Informationen wie API-Schlüssel zu speichern. Diese Dateien <strong>sollten nicht auf GitHub hochgeladen werden</strong>, da sie sensible Informationen enthalten." },
          { type: "p", text: "Wie man diese Schlüssel erhält:" },
          { type: "li", text: "<strong>Supabase-Schlüssel:</strong> Gehen Sie zu dashboard.supabase.com, wählen Sie Ihr Projekt, navigieren Sie zu Settings > API, kopieren Sie Project URL und anon public key." },
          { type: "li", text: "<strong>Clerk-Schlüssel:</strong> Gehen Sie zu dashboard.clerk.com, wählen Sie Ihr Projekt, navigieren Sie zu API Keys, kopieren Sie Publishable Key und Secret Key." },
          { type: "callout", title: "Wichtige Sicherheitswarnung", text: "Fügen Sie .env.local zur .gitignore-Datei hinzu, um das Hochladen auf GitHub zu verhindern. Jeder, der diese Schlüssel erhält, kann auf Ihre Daten zugreifen!" }
        ]
      },
      {
        title: "package.json-Datei",
        content: [
          { type: "p", text: "Die package.json-Datei enthält Projektinformationen, Abhängigkeiten und verfügbare Befehle. Nach der Installation der Abhängigkeiten sieht sie so aus:" },
          { type: "p", text: "Der wichtige Befehl ist <code>npm run dev</code>, der den Entwicklungsserver startet. Sie können ihn ausführen, indem Sie im Terminal eingeben:" },
          { type: "p", text: "Nach dem Start öffnen Sie den Browser und gehen zu <code>http://localhost:3000</code>, um Ihr Projekt zu sehen." }
        ]
      },
      {
        title: "Code-Verbesserung: Monorepo-Struktur für Skalierung",
        content: [
          { type: "p", text: "Wenn Sie planen, Ihr Projekt in der Zukunft zu erweitern (wie das Hinzufügen einer mobilen App oder einer externen API), können Sie eine <strong>Monorepo</strong>-Struktur verwenden. Diese Struktur ermöglicht es Ihnen, Code zwischen mehreren Projekten zu teilen." },
          { type: "p", text: "Bibliotheken, die Ihnen bei der Verwaltung von Monorepo helfen:" },
          { type: "li", text: "<strong>Turborepo:</strong> Schnelles Tool zur Verwaltung mehrerer Projekte" },
          { type: "li", text: "<strong>pnpm workspaces:</strong> Verwaltung gemeinsamer Abhängigkeiten" },
          { type: "li", text: "<strong>Nx:</strong> Leistungsstarkes Framework für große Projekte" },
          { type: "callout", title: "Wann Monorepo verwenden?", text: "Verwenden Sie Monorepo, wenn Sie mehr als ein Projekt haben, das den gleichen Code teilt. Für kleine Projekte (wie unseren Blog) ist die reguläre Struktur (Single Repo) ausreichend und vereinfacht die Dinge." }
        ]
      }
    ],
    quiz: [
      {
        question: "Welche Datei enthält geheime API-Schlüssel und sollte nicht auf GitHub hochgeladen werden?",
        options: ["package.json", ".env.local", "next.config.js", "tailwind.config.js"],
        correctAnswer: 1,
        explanation: "Die .env.local-Datei enthält sensible Umgebungsvariablen wie API-Schlüssel. Sie sollte immer zur .gitignore-Datei hinzugefügt werden, um das Hochladen auf GitHub zu verhindern."
      }
    ],
    challenge: {
      title: "Einrichtungsherausforderung: Projekt neu erstellen",
      description: "Versuchen Sie, ein neues Next.js-Projekt selbst mit den folgenden Befehlen zu erstellen: 1. Führen Sie npx create-next-app@latest aus 2. Installieren Sie die zusätzlichen Abhängigkeiten (@supabase/ssr, @clerk/nextjs) 3. Erstellen Sie einen components/-Ordner mit einer einfachen Header.js-Datei 4. Erstellen Sie einen lib/-Ordner mit einer einfachen utils.js-Datei 5. Starten Sie das Projekt mit npm run dev und stellen Sie sicher, dass es funktioniert. Wenn Sie auf ein Problem stoßen, überprüfen Sie die Installationsschritte oben oder suchen Sie die Lösung bei Google."
    },
    cheatSheet: {
      title: "Schnelle Einrichtungsreferenz",
      items: [
        { title: "1. Projekt erstellen", content: "npx create-next-app@latest my-blog" },
        { title: "2. Abhängigkeiten installieren", content: "npm install @supabase/ssr @clerk/nextjs" },
        { title: "3. .env.local einrichten", content: "Supabase- und Clerk-Schlüssel hinzufügen" },
        { title: "4. Projekt starten", content: "npm run dev" }
      ]
    }
  }
};
export default translations;
