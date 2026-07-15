const translations = {
  ar: {
    sections: [
      { title: "ما هو Supabase؟", content: [
        { type: "p", text: "<strong>Supabase</strong> هو منصة Backend-as-a-Service (BaaS) مفتوحة المصدر توفر خادماً كاملاً لتطبيقاتك، بما في ذلك قاعدة البيانات والمصادقة والتخزين والاشتراكات الفورية." },
        { type: "p", text: "فكر في Supabase كخادم جاهز للاستخدام يوفر عليك كتابة مئات الأسطر من الكود لمنطق الخادم." },
      ]},
      { title: "لماذا Supabase؟", content: [
        { type: "li", text: "مفتوح المصدر — تحكم كامل في بياناتك" },
        { type: "li", text: "مبني على PostgreSQL — أكثر قواعد البيانات تقدماً في العالم" },
        { type: "li", text: "اشتراكات فورية — تحديثات البيانات فورية" },
        { type: "li", text: "مصادقة جاهزة — تسجيل دخول اجتماعي، روابط سحرية، بريد/كلمة مرور" },
        { type: "li", text: "التخزين — رفع وتقديم الملفات مع CDN" },
        { type: "li", text: "لوحة تحكم — لوحة إدارة مرئية لبياناتك" },
      ]},
      { title: "Supabase مقابل Firebase", content: [
        { type: "p", text: "كلاهما منصات BaaS شائعة، لكن Supabase يستخدم قاعدة بيانات علائقية (PostgreSQL) بينما Firebase يستخدم NoSQL (Firestore). Supabase مفتوح المصدر ويعطيك تحكماً أكبر." },
      ]},
      { title: "Supabase مقابل خادم مخصص", content: [
        { type: "p", text: "مع خادم مخصص (Node.js، Django، إلخ)، تكتب جميع منطق الخادم بنفسك. Supabase يوفر APIs جاهزة لجميع عمليات قاعدة البيانات من خلال عميل JavaScript الخاص به." },
      ]},
      { title: "إنشاء أول مشروع لك", content: [
        { type: "li", text: "اذهب إلى supabase.com وأنشئ حساباً" },
        { type: "li", text: "انقر على 'New Project' واختر مؤسستك" },
        { type: "li", text: "حدد اسم المشروع وكلمة مرور قاعدة البيانات والمنطقة" },
        { type: "li", text: "انتظر ثوانٍ قليلة لإنشاء المشروع" },
      ]},
      { title: "لوحة تحكم Supabase", content: [
        { type: "p", text: "تتكون لوحة التحكم من عدة أقسام: محرر الجداول، محرر SQL، المصادقة، التخزين، Edge Functions، السجلات، والإعدادات." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "Supabase هو BaaS مفتوح المصدر مبني على PostgreSQL." },
        { type: "li", text: "يوفر قاعدة البيانات والمصادقة والتخزين والوقت الفوري." },
        { type: "li", text: "إنشاء المشروع يستغرق ثوانٍ فقط." },
        { type: "li", text: "لوحة التحكم تعطيك تحكماً كاملاً في خادمك." },
      ]}
    ],
    quiz: [
      { question: "ما نوع قاعدة البيانات التي يستخدمها Supabase؟", options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"], explanation: "Supabase مبني على PostgreSQL، وهي قاعدة بيانات علائقية قوية." },
      { question: "ما هي الميزة الرئيسية لـ Supabase على Firebase؟", options: ["أداء أسرع", "Supabase مفتوح المصدر", "توثيق أفضل", "مستخدمون أكثر"], explanation: "Supabase مفتوح المصدر، يعطيك تحكماً كاملاً في كود الخادم وبياناتك." },
      { question: "هل يتطلب Supabase كتابة كود خادم؟", options: ["نعم، جميع منطق الخادم", "لا، يوفر APIs جاهزة", "للمصادقة فقط", "للاستعلامات المعقدة فقط"], explanation: "Supabase يوفر APIs جاهزة لجميع عمليات قاعدة البيانات." },
    ],
    challenge: { title: "أنشئ مشروع Supabase الأول", description: "أنشئ حساباً ومتجراً Supabase مجانياً. استكشف لوحة التحكم: أنشئ جدولاً وأضف بياناتاً وتحقق من ظهورها في محرر الجداول." },
    cheatSheet: { title: "ملخص مراجعة البدء مع Supabase", items: [
      { term: "supabase.com", definition: "إنشاء حساب ومشروع" },
      { term: "Table Editor", definition: "إدارة مرئية لقاعدة البيانات" },
      { term: "SQL Editor", definition: "تنفيذ استعلامات SQL خام" },
      { term: "Project URL", definition: "نقطة نهاية API الخاصة بك (https://xxx.supabase.co)" },
      { term: "Anon Key", definition: "مفتاح API عام لجانب العميل" },
      { term: "Service Role Key", definition: "مفتاح وصول كامل (أبقه سراً)" }
    ]},
    interviewQuestions: [
      { q: "ما هو Supabase؟", a: "بديل مفتوح المصدر لـ Firebase. يوفر قاعدة بيانات PostgreSQL ومصادقة وتخزين.", difficulty: "easy" },
      { q: "لماذا Supabase بدلاً من Firebase؟", a: "مفتوح المصدر، PostgreSQL حقيقي، و pricing أفضل.", difficulty: "medium" },
    ],
    tricks: [
      { title: "ابدأ بـ Dashboard", description: "إنشاء مشروع من Supabase Dashboard هو أسرع طريقة للبدء", icon: "rocket" },
    ]
  },
  en: {
    sections: [
      { title: "What is Supabase?", content: [
        { type: "p", text: "<strong>Supabase</strong> is an open-source Backend-as-a-Service (BaaS) platform that provides a complete backend for your applications, including database, authentication, storage, and real-time subscriptions." },
        { type: "p", text: "Think of Supabase as a ready-to-use backend that saves you from writing hundreds of lines of code for server logic." },
      ]},
      { title: "Why Supabase?", content: [
        { type: "li", text: "Open source — full control over your data" },
        { type: "li", text: "Built on PostgreSQL — the world's most advanced database" },
        { type: "li", text: "Real-time subscriptions — data updates instantly" },
        { type: "li", text: "Authentication out of the box — social logins, magic links, email/password" },
        { type: "li", text: "Storage — upload and serve files with CDN" },
        { type: "li", text: "Dashboard — visual admin panel for your data" },
      ]},
      { title: "Supabase vs Firebase", content: [
        { type: "p", text: "Both are popular BaaS platforms, but Supabase uses a relational database (PostgreSQL) while Firebase uses NoSQL (Firestore). Supabase is open source and gives you more control." },
      ]},
      { title: "Supabase vs Custom Backend", content: [
        { type: "p", text: "With a custom backend (Node.js, Django, etc.), you write all server logic yourself. Supabase provides ready-made APIs for all database operations through its JavaScript client." },
      ]},
      { title: "Creating Your First Project", content: [
        { type: "li", text: "Go to supabase.com and create an account" },
        { type: "li", text: "Click 'New Project' and choose your organization" },
        { type: "li", text: "Set project name, database password, and region" },
        { type: "li", text: "Wait a few seconds for the project to be created" },
      ]},
      { title: "The Supabase Dashboard", content: [
        { type: "p", text: "The dashboard consists of several sections: Table Editor, SQL Editor, Authentication, Storage, Edge Functions, Logs, and Settings." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Supabase is an open-source BaaS built on PostgreSQL." },
        { type: "li", text: "It provides database, authentication, storage, and real-time." },
        { type: "li", text: "Creating a project takes only seconds." },
        { type: "li", text: "The dashboard gives you full control over your backend." },
      ]}
    ],
    quiz: [
      { question: "What type of database does Supabase use?", options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"], explanation: "Supabase is built on PostgreSQL, which is a powerful relational database." },
      { question: "What is a key advantage of Supabase over Firebase?", options: ["Faster performance", "Supabase is open source", "Better documentation", "More users"], explanation: "Supabase is open source, giving you full control over your backend code and data." },
      { question: "Does Supabase require writing backend code?", options: ["Yes, all server logic", "No, it provides ready-made APIs", "Only for authentication", "Only for complex queries"], explanation: "Supabase provides ready-made APIs for all database operations." },
    ],
    challenge: { title: "Create Your First Supabase Project", description: "Create a free Supabase account and project. Explore the dashboard: create a table, add data, and verify it appears in the Table Editor." },
    cheatSheet: { title: "Supabase Getting Started Cheat Sheet", items: [
      { term: "supabase.com", definition: "Create account and project" },
      { term: "Table Editor", definition: "Visual database management" },
      { term: "SQL Editor", definition: "Run raw SQL queries" },
      { term: "Project URL", definition: "Your API endpoint (https://xxx.supabase.co)" },
      { term: "Anon Key", definition: "Public API key for client-side" },
      { term: "Service Role Key", definition: "Full access key (keep secret)" }
    ]},
    interviewQuestions: [
      { q: "What is Supabase?", a: "An open-source Firebase alternative. Provides PostgreSQL database, authentication, and storage.", difficulty: "easy" },
      { q: "Why Supabase instead of Firebase?", a: "Open source, real PostgreSQL, and better pricing.", difficulty: "medium" },
    ],
    tricks: [
      { title: "Start with Dashboard", description: "Creating a project from Supabase Dashboard is the fastest way to get started", icon: "rocket" },
    ]
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que Supabase ?", content: [
        { type: "p", text: "<strong>Supabase</strong> est une plateforme Backend-as-a-Service (BaaS) open-source qui fournit un backend complet pour vos applications." },
        { type: "p", text: "Supabase est comme un backend prêt à l'emploi qui vous évite d'écrire des centaines de lignes de code." },
      ]},
      { title: "Pourquoi Supabase ?", content: [
        { type: "li", text: "Open source — contrôle total sur vos données" },
        { type: "li", text: "Basé sur PostgreSQL — la base de données la plus avancée" },
        { type: "li", text: "Abonnements en temps réel" },
        { type: "li", text: "Authentification intégrée" },
      ]},
      { title: "Créer votre premier projet", content: [
        { type: "li", text: "Allez sur supabase.com et créez un compte" },
        { type: "li", text: "Cliquez sur 'New Project'" },
        { type: "li", text: "Définissez le nom et le mot de passe de la base de données" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Supabase est un BaaS open-source basé sur PostgreSQL." },
        { type: "li", text: "Il fournit base de données, authentification, stockage et temps réel." },
        { type: "li", text: "Créer un projet ne prend que quelques secondes." },
      ]}
    ],
    quiz: [
      { question: "Quel type de base de données Supabase utilise-t-il ?", options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"], explanation: "Supabase est basé sur PostgreSQL." },
    ],
    challenge: { title: "Créer votre premier projet Supabase", description: "Créez un compte Supabase gratuit et un projet. Explorez le tableau de bord." },
    cheatSheet: { title: "Supabase Fiche mémo", items: [
      { term: "supabase.com", definition: "Créer un compte et projet" },
      { term: "Table Editor", definition: "Gestion visuelle de la base" },
      { term: "SQL Editor", definition: "Exécuter des requêtes SQL" },
    ]}
  },
  de: {
    sections: [
      { title: "Was ist Supabase?", content: [
        { type: "p", text: "<strong>Supabase</strong> ist eine Open-Source Backend-as-a-Service (BaaS)-Plattform, die ein vollständiges Backend für Ihre Anwendungen bereitstellt." },
        { type: "p", text: "Supabase ist wie ein fertiges Backend, das Ihnen das Schreiben hunderte Zeilen Server-Logik erspart." },
      ]},
      { title: "Warum Supabase?", content: [
        { type: "li", text: "Open Source — volle Kontrolle über Ihre Daten" },
        { type: "li", text: "Basierend auf PostgreSQL" },
        { type: "li", text: "Echtzeit-Abonnements" },
        { type: "li", text: "Integrierte Authentifizierung" },
      ]},
      { title: "Ihr erstes Projekt erstellen", content: [
        { type: "li", text: "Gehen Sie zu supabase.com und erstellen Sie ein Konto" },
        { type: "li", text: "Klicken Sie auf 'New Project'" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Supabase ist eine Open-Source-BaaS auf PostgreSQL-Basis." },
        { type: "li", text: "Es bietet Datenbank, Authentifizierung, Speicherung und Echtzeit." },
      ]}
    ],
    quiz: [
      { question: "Welche Art von Datenbank verwendet Supabase?", options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"], explanation: "Supabase basiert auf PostgreSQL." },
    ],
    challenge: { title: "Erstes Supabase-Projekt erstellen", description: "Erstellen Sie ein kostenloses Supabase-Konto und Projekt. Erkunden Sie das Dashboard." },
    cheatSheet: { title: "Supabase Spickzettel", items: [
      { term: "supabase.com", definition: "Konto und Projekt erstellen" },
      { term: "Table Editor", definition: "Visuelles Datenbank-Management" },
      { term: "SQL Editor", definition: "SQL-Abfragen ausführen" },
    ]}
  }
};
export default translations;
