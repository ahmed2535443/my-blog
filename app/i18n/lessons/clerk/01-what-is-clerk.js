const translations = {
  ar: {
    sections: [
      { title: "ما هو Clerk؟", content: [
        { type: "p", text: "<strong>Clerk</strong> هو منصة مصادقة وإدارة مستخدمين كاملة مصممة خصيصاً لتطبيقات الويب الحديثة. يوفر كل ما تحتاجه للتعامل مع تسجيل المستخدمين وتسجيل الدخول وإدارة الملفات الشخصية." },
        { type: "p", text: "على عكس Supabase Auth الذي جزء من منصة BaaS أكبر، Clerk يركز فقط على المصادقة وإدارة المستخدمين، مما يوفر ميزات أعمق وأكثر تخصصاً." },
      ]},
      { title: "لماذا Clerk؟", content: [
        { type: "li", text: "مكونات جاهزة — واجهة مستخدم جميلة لتسجيل الدخول والتسجيل والملف الشخصي" },
        { type: "li", text: "مزودون متعددون — البريد الإلكتروني و Google و GitHub و Facebook والمزيد" },
        { type: "li", text: "مصادقة متعددة العوامل (MFA) — دعم مدمج" },
        { type: "li", text: "Webhooks — تلقي إشعارات بأحداث المستخدمين" },
        { type: "li", text: "إدارة المستخدمين — لوحة إدارية لإدارة المستخدمين" },
      ]},
      { title: "Clerk مقابل Supabase Auth", content: [
        { type: "p", text: "استخدم Supabase Auth عندما تريد خادماً مTEGRATED مع قاعدة البيانات. استخدم Clerk عندما تريد تجربة مصادقة ممتازة مع مكونات جاهزة." },
      ]},
      { title: "إنشاء تطبيق Clerk", content: [
        { type: "li", text: "اذهب إلى clerk.com وأنشئ حساباً" },
        { type: "li", text: "انقر على 'Create Application'" },
        { type: "li", text: "اختر طرق المصادقة (البريد الإلكتروني، Google، إلخ)" },
        { type: "li", text: "احصل على مفاتيح API من لوحة التحكم" },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "Clerk هو منصة مصادقة وإدارة مستخدمين متخصصة." },
        { type: "li", text: "يوفر مكونات جاهزة ومزودي مصادقة متعددين." },
        { type: "li", text: "إنشاء التطبيق يستغرق ثوانٍ فقط." },
      ]}
    ],
    quiz: [
      { question: "ما هو الاستخدام الرئيسي لـ Clerk؟", options: ["إدارة قاعدة البيانات", "المصادقة وإدارة المستخدمين", "تخزين الملفات", "تطوير API"], explanation: "Clerk يركز على المصادقة وإدارة المستخدمين." },
      { question: "ما هي ميزة Clerk على Supabase Auth؟", options: ["قاعدة بيانات أفضل", "مكونات واجهة مستخدم جاهزة وميزات مصادقة أعمق", "تخزين أكثر", "استعلامات أسرع"], explanation: "يوفر Clerk مكونات واجهة مستخدم جاهزة وميزات مصادقة متخصصة مثل MFA." },
    ],
    challenge: { title: "أنشئ تطبيق Clerk الأول", description: "أنشئ حساباً Clerk مجانياً، وأعداد تطبيق، واستكشف لوحة التحكم." },
    cheatSheet: { title: "ملخص مراجعة البدء مع Clerk", items: [
      { term: "clerk.com", definition: "إنشاء حساب وتطبيق" },
      { term: "Publishable Key", definition: "مفتاح عام لجانب العميل" },
      { term: "Secret Key", definition: "مفتاح جانب الخادم (أبقه سراً)" },
      { term: "Dashboard", definition: "إدارة المستخدمين والإعدادات" },
      { term: "Providers", definition: "طرق المصادقة (البريد الإلكتروني، Google، إلخ)" }
    ]}
  },
  en: {
    sections: [
      { title: "What is Clerk?", content: [
        { type: "p", text: "<strong>Clerk</strong> is a complete authentication and user management platform designed specifically for modern web applications. It provides everything you need to handle user registration, login, and profile management." },
        { type: "p", text: "Unlike Supabase Auth which is part of a larger BaaS platform, Clerk is focused solely on authentication and user management, providing deeper and more specialized features." },
      ]},
      { title: "Why Clerk?", content: [
        { type: "li", text: "Ready-made components — beautiful UI for login, signup, profile" },
        { type: "li", text: "Multiple providers — Email, Google, GitHub, Facebook, and more" },
        { type: "li", text: "Multi-factor authentication (MFA) — built-in support" },
        { type: "li", text: "Webhooks — get notified of user events" },
        { type: "li", text: "User management — admin panel for managing users" },
      ]},
      { title: "Clerk vs Supabase Auth", content: [
        { type: "p", text: "Use Supabase Auth when you want an integrated backend with database. Use Clerk when you want the best-in-class authentication experience with ready-made components." },
      ]},
      { title: "Creating a Clerk Application", content: [
        { type: "li", text: "Go to clerk.com and create an account" },
        { type: "li", text: "Click 'Create Application'" },
        { type: "li", text: "Choose authentication methods (Email, Google, etc.)" },
        { type: "li", text: "Get your API keys from the dashboard" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Clerk is a specialized authentication and user management platform." },
        { type: "li", text: "It provides ready-made components and multiple auth providers." },
        { type: "li", text: "Creating an application takes only seconds." },
      ]}
    ],
    quiz: [
      { question: "What is Clerk primarily used for?", options: ["Database management", "Authentication and user management", "File storage", "API development"], explanation: "Clerk is focused on authentication and user management." },
      { question: "What advantage does Clerk have over Supabase Auth?", options: ["Better database", "Ready-made UI components and deeper auth features", "More storage", "Faster queries"], explanation: "Clerk provides ready-made UI components and specialized auth features like MFA." },
    ],
    challenge: { title: "Create Your First Clerk Application", description: "Create a free Clerk account, set up an application, and explore the dashboard." },
    cheatSheet: { title: "Clerk Getting Started Cheat Sheet", items: [
      { term: "clerk.com", definition: "Create account and application" },
      { term: "Publishable Key", definition: "Public key for client-side" },
      { term: "Secret Key", definition: "Server-side key (keep secret)" },
      { term: "Dashboard", definition: "Manage users and settings" },
      { term: "Providers", definition: "Auth methods (Email, Google, etc.)" }
    ]}
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que Clerk ?", content: [
        { type: "p", text: "<strong>Clerk</strong> est une plateforme complète d'authentification et de gestion des utilisateurs conçue pour les applications web modernes." },
        { type: "p", text: "Contrairement à Supabase Auth, Clerk est spécialisé uniquement dans l'authentification et la gestion des utilisateurs." },
      ]},
      { title: "Pourquoi Clerk ?", content: [
        { type: "li", text: "Composants prêts à l'emploi — UI magnifique pour login, signup, profil" },
        { type: "li", text: "Plusieurs fournisseurs — Email, Google, GitHub, Facebook" },
        { type: "li", text: "Authentification multi-facteurs (MFA)" },
        { type: "li", text: "Gestion des utilisateurs — panneau d'administration" },
      ]},
      { title: "Créer une application Clerk", content: [
        { type: "li", text: "Allez sur clerk.com et créez un compte" },
        { type: "li", text: "Cliquez sur 'Create Application'" },
        { type: "li", text: "Choisissez les méthodes d'authentification" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Clerk est une plateforme spécialisée dans l'authentification." },
        { type: "li", text: "Il fournit des composants prêts à l'emploi." },
      ]}
    ],
    quiz: [
      { question: "Quel est l'usage principal de Clerk ?", options: ["Gestion de base de données", "Authentification et gestion des utilisateurs", "Stockage de fichiers"], explanation: "Clerk est spécialisé dans l'authentification et la gestion des utilisateurs." },
    ],
    challenge: { title: "Créer une application Clerk", description: "Créez un compte Clerk gratuit et configurez une application." },
    cheatSheet: { title: "Clerk Fiche mémo", items: [
      { term: "clerk.com", definition: "Créer un compte et une application" },
      { term: "Publishable Key", definition: "Clé publique côté client" },
      { term: "Secret Key", definition: "Clé côté serveur" },
    ]}
  },
  de: {
    sections: [
      { title: "Was ist Clerk?", content: [
        { type: "p", text: "<strong>Clerk</strong> ist eine vollständige Authentifizierungs- und Benutzerverwaltungsplattform für moderne Webanwendungen." },
        { type: "p", text: "Im Gegensatz zu Supabase Auth ist Clerk speziell auf Authentifizierung und Benutzerverwaltung spezialisiert." },
      ]},
      { title: "Warum Clerk?", content: [
        { type: "li", text: "Fertige Komponenten — wunderschöne UI für Login, Signup, Profil" },
        { type: "li", text: "Mehrere Anbieter — E-Mail, Google, GitHub, Facebook" },
        { type: "li", text: "Mehr-Faktor-Authentifizierung (MFA)" },
      ]},
      { title: "Clerk-Anwendung erstellen", content: [
        { type: "li", text: "Gehen Sie zu clerk.com und erstellen Sie ein Konto" },
        { type: "li", text: "Klicken Sie auf 'Create Application'" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Clerk ist eine spezialisierte Authentifizierungsplattform." },
        { type: "li", text: "Es stellt fertige Komponenten bereit." },
      ]}
    ],
    quiz: [
      { question: "Wofür wird Clerk hauptsächlich verwendet?", options: ["Datenbankverwaltung", "Authentifizierung und Benutzerverwaltung", "Dateispeicherung"], explanation: "Clerk ist auf Authentifizierung und Benutzerverwaltung spezialisiert." },
    ],
    challenge: { title: "Clerk-Anwendung erstellen", description: "Erstellen Sie ein kostenloses Clerk-Konto und richten Sie eine Anwendung ein." },
    cheatSheet: { title: "Clerk Spickzettel", items: [
      { term: "clerk.com", definition: "Konto und Anwendung erstellen" },
      { term: "Publishable Key", definition: "Öffentlicher Client-Schlüssel" },
      { term: "Secret Key", definition: "Server-Seitiger Schlüssel" },
    ]}
  }
};
export default translations;
