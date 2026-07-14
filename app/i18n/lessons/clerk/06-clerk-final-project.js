const translations = {
  ar: {
    sections: [
      { title: "ملخص المرحلة", content: [
        { type: "p", text: "تهانينا على إكمال مرحلة Clerk! لقد أتقنت المصادقة المتقدمة وإدارة المستخدمين." },
        { type: "li", text: "الدرس 1: ما هو Clerk" },
        { type: "li", text: "الدرس 2: التثبيت والإعداد" },
        { type: "li", text: "الدرس 3: طرق المصادقة" },
        { type: "li", text: "الدرس 4: إدارة المستخدمين" },
        { type: "li", text: "الدرس 5: الميزات المتقدمة" },
      ]},
      { title: "ما أتقنته", content: [
        { type: "li", text: "إعداد مصادقة Clerk في Next.js" },
        { type: "li", text: "تنفيذ البريد الإلكتروني/كلمة المرور وتسجيل الدخول الاجتماعي" },
        { type: "li", text: "تكوين المصادقة متعددة العوامل (MFA)" },
        { type: "li", text: "إدارة المستخدمين والمنظمات" },
        { type: "li", text: "حماية المسارات باستخدام Middleware" },
        { type: "li", text: "دمج Clerk مع Supabase" },
        { type: "li", text: "تخصيص سمات المكونات" },
      ]},
      { title: "المشروع النهائي: تطبيق إدارة المهام", content: [
        { type: "p", text: "في هذا المشروع، سنبني تطبيقاً كاملاً لإدارة المهام باستخدام جميع مفاهيم Clerk التي تعلمناها." },
        { type: "li", text: "تسجيل/تسجيل دخول بمزودين متعددين" },
        { type: "li", text: "المصادقة متعددة العوامل للأمان" },
        { type: "li", text: "المنظمات لمساحات عمل الفريق" },
        { type: "li", text: "تحكم في الوصول بالأدوار" },
        { type: "li", text: "الملفات الشخصية للمستخدمين والإعدادات" },
        { type: "li", text: "المسارات المحمية بـ Middleware" },
      ]},
      { title: "أفضل الممارسات", content: [
        { type: "li", text: "استخدم Middleware لحماية المسارات عالمياً" },
        { type: "li", text: "فعّل MFA للتطبيقات الحساسة" },
        { type: "li", text: "استخدم المنظمات للميزات القائمة على الفرق" },
        { type: "li", text: "تعامل مع حالات التحميل باستخدام isLoaded" },
        { type: "li", text: "أبقِ مفاتيح Clerk في متغيرات البيئة" },
      ]},
      { title: "ما الخطوة التالية؟", content: [
        { type: "p", text: "بعد إكمال جميع المراحل — TypeScript و Tailwind CSS و HTML و Next.js و Supabase و Clerk — لديك مجموعة أدوات كاملة لبناء تطبيقات الويب الحديثة. ابدأ مشروعك النهائي!" },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "أتقن Clerk: المصادقة وإدارة المستخدمين وMFA والمنظمات." },
        { type: "li", text: "بنى تطبيق إدارة مهام كامل." },
        { type: "li", text: "جاهز للمشاريع الحقيقية بجميع التقنيات." },
      ]}
    ],
    quiz: [
      { question: "ما هي الطريقة الموصى بها لحماية المسارات في Clerk؟", options: ["التحقق من المصادقة في كل صفحة", "استخدام clerkMiddleware في middleware.js", "استخدام CSS لإخفاء المحتوى", "إضافة علامة meta"], explanation: "استخدم clerkMiddleware في middleware.js لحماية المسارات عالمياً." },
      { question: "لماذا تستخدم المنظمات في Clerk؟", options: ["لتخزين قاعدة البيانات", "للتحكم في الوصول القائم على الفرق", "لرفع الملفات", "لإرسال البريد الإلكتروني"], explanation: "المنظمات تمكّن مساحات عمل الفريق مع التحكم في الوصول بالأدوار." },
      { question: "كيف تتعامل مع حالات التحميل مع Clerk؟", options: ["استخدم isLoading", "استخدم isLoaded من useUser()", "استخدم setTimeout", "استخدم useEffect"], explanation: "استخدم خاصية isLoaded من hooks useUser() أو useAuth()." },
    ],
    challenge: { title: "ابنِ تطبيق إدارة المهام", description: "أنشئ تطبيق إدارة مهام كاملاً مع مصادقة متعددة المزودين وMFA ومنظمات وأدوار ومسارات محمية." },
    cheatSheet: { title: "ملخص مراجعة Clerk الكامل", items: [
      { term: "<ClerkProvider>", definition: "لف التطبيق لسياق Clerk" },
      { term: "<SignIn /> / <SignUp />", definition: "مكونات واجهة المصادقة" },
      { term: "<SignedIn> / <SignedOut>", definition: "عرض شرطي" },
      { term: "<UserButton />", definition: "زر الملف الشخصي للمستخدم" },
      { term: "useUser()", definition: "الوصول إلى بيانات المستخدم" },
      { term: "useAuth()", definition: "الوصول إلى حالة المصادقة" },
      { term: "useOrganization()", definition: "الوصول إلى بيانات المنظمة" },
      { term: "auth()", definition: "فحص المصادقة من جانب الخادم" },
      { term: "clerkMiddleware", definition: "حماية المسارات عالمياً" },
      { term: "MFA", definition: "المصادقة متعددة العوامل" },
      { term: "Organizations", definition: "مساحات عمل الفريق" },
      { term: "Webhooks", definition: "إشعارات الأحداث" }
    ]}
  },
  en: {
    sections: [
      { title: "Stage Summary", content: [
        { type: "p", text: "Congratulations on completing the Clerk stage! You've mastered advanced authentication and user management." },
        { type: "li", text: "Lesson 1: What is Clerk" },
        { type: "li", text: "Lesson 2: Installation and Setup" },
        { type: "li", text: "Lesson 3: Authentication Methods" },
        { type: "li", text: "Lesson 4: User Management" },
        { type: "li", text: "Lesson 5: Advanced Features" },
      ]},
      { title: "What You've Mastered", content: [
        { type: "li", text: "Setting up Clerk authentication in Next.js" },
        { type: "li", text: "Implementing email/password and social login" },
        { type: "li", text: "Configuring Multi-Factor Authentication (MFA)" },
        { type: "li", text: "Managing users and organizations" },
        { type: "li", text: "Protecting routes with middleware" },
        { type: "li", text: "Integrating Clerk with Supabase" },
        { type: "li", text: "Customizing component themes" },
      ]},
      { title: "Final Project: Task Management App", content: [
        { type: "p", text: "In this project, we'll build a complete task management application using all Clerk concepts learned." },
        { type: "li", text: "Sign-up/sign-in with multiple providers" },
        { type: "li", text: "Multi-Factor Authentication for security" },
        { type: "li", text: "Organizations for team workspaces" },
        { type: "li", text: "Role-based access control" },
        { type: "li", text: "User profiles and settings" },
        { type: "li", text: "Protected routes with middleware" },
      ]},
      { title: "Best Practices", content: [
        { type: "li", text: "Use middleware for global route protection" },
        { type: "li", text: "Enable MFA for sensitive applications" },
        { type: "li", text: "Use Organizations for team-based features" },
        { type: "li", text: "Handle loading states with isLoaded" },
        { type: "li", text: "Keep Clerk keys in environment variables" },
      ]},
      { title: "What's Next?", content: [
        { type: "p", text: "After completing all stages — TypeScript, Tailwind CSS, HTML, Next.js, Supabase, and Clerk — you have a complete toolkit for building modern web applications. Start your final project!" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Mastered Clerk: authentication, user management, MFA, organizations." },
        { type: "li", text: "Built a complete task management application." },
        { type: "li", text: "Ready for real-world projects with all technologies." },
      ]}
    ],
    quiz: [
      { question: "What is the recommended way to protect routes in Clerk?", options: ["Check auth in every page", "Use clerkMiddleware in middleware.js", "Use CSS to hide content", "Add a meta tag"], explanation: "Use clerkMiddleware in middleware.js for global route protection." },
      { question: "Why use Organizations in Clerk?", options: ["For database storage", "For team-based access control", "For file uploads", "For email sending"], explanation: "Organizations enable team workspaces with role-based access control." },
      { question: "How do you handle loading states with Clerk?", options: ["Use isLoading", "Use isLoaded from useUser()", "Use a setTimeout", "Use useEffect"], explanation: "Use the isLoaded property from useUser() or useAuth() hooks." },
    ],
    challenge: { title: "Build Task Management App", description: "Create a complete task management app with multi-provider auth, MFA, organizations, roles, and protected routes." },
    cheatSheet: { title: "Clerk Complete Cheat Sheet", items: [
      { term: "<ClerkProvider>", definition: "App wrapper for Clerk context" },
      { term: "<SignIn /> / <SignUp />", definition: "Auth UI components" },
      { term: "<SignedIn> / <SignedOut>", definition: "Conditional rendering" },
      { term: "<UserButton />", definition: "User profile button" },
      { term: "useUser()", definition: "Access user data" },
      { term: "useAuth()", definition: "Access auth state" },
      { term: "useOrganization()", definition: "Access org data" },
      { term: "auth()", definition: "Server-side auth check" },
      { term: "clerkMiddleware", definition: "Global route protection" },
      { term: "MFA", definition: "Multi-Factor Authentication" },
      { term: "Organizations", definition: "Team workspaces" },
      { term: "Webhooks", definition: "Event notifications" }
    ]}
  },
  fr: {
    sections: [
      { title: "Résumé de la stage", content: [
        { type: "p", text: "Félicitations pour avoir complété la stage Clerk ! Vous avez maîtrisé l'authentification avancée et la gestion des utilisateurs." },
        { type: "li", text: "Leçon 1 : Qu'est-ce que Clerk" },
        { type: "li", text: "Leçon 2 : Installation et configuration" },
        { type: "li", text: "Leçon 3 : Méthodes d'authentification" },
        { type: "li", text: "Leçon 4 : Gestion des utilisateurs" },
        { type: "li", text: "Leçon 5 : Fonctionnalités avancées" },
      ]},
      { title: "Projet final : Application de gestion de tâches", content: [
        { type: "p", text: "Nous allons construire une application complète de gestion de tâches." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Maîtrisé Clerk : authentification, gestion, MFA, organisations." },
        { type: "li", text: "Prêt pour des projets réels avec toutes les technologies." },
      ]}
    ],
    quiz: [
      { question: "Quelle est la méthode recommandée pour protéger les routes ?", options: ["Vérifier l'auth dans chaque page", "Utiliser clerkMiddleware", "Utiliser du CSS"], explanation: "Utilisez clerkMiddleware dans middleware.js pour la protection globale." },
    ],
    challenge: { title: "Construire l'application de gestion", description: "Créez une application complète avec auth multi-fournisseurs et organisations." },
    cheatSheet: { title: "Clerk Fiche mémo complète", items: [
      { term: "<ClerkProvider>", definition: "Enveloppe pour le contexte Clerk" },
      { term: "useUser()", definition: "Accéder aux données utilisateur" },
      { term: "auth()", definition: "Vérification serveur" },
      { term: "clerkMiddleware", definition: "Protection globale des routes" },
      { term: "MFA", definition: "Authentification multi-facteurs" },
      { term: "Organizations", definition: "Espaces de travail d'équipe" },
    ]}
  },
  de: {
    sections: [
      { title: "Phasen-Zusammenfassung", content: [
        { type: "p", text: "Herzlichen Glückwunsch zum Abschluss der Clerk-Phase! Sie haben erweiterte Authentifizierung und Benutzerverwaltung gemeistert." },
        { type: "li", text: "Lektion 1: Was ist Clerk" },
        { type: "li", text: "Lektion 2: Installation und Einrichtung" },
        { type: "li", text: "Lektion 3: Authentifizierungsmethoden" },
        { type: "li", text: "Lektion 4: Benutzerverwaltung" },
        { type: "li", text: "Lektion 5: Erweiterte Funktionen" },
      ]},
      { title: "Abschlussprojekt: Aufgabenverwaltungs-App", content: [
        { type: "p", text: "Wir erstellen eine vollständige Aufgabenverwaltungs-Anwendung mit allen Clerk-Konzepten." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Clerk gemeistert: Authentifizierung, Benutzerverwaltung, MFA, Organisationen." },
        { type: "li", text: "Bereit für reale Projekte mit allen Technologien." },
      ]}
    ],
    quiz: [
      { question: "Was ist der empfohlene Weg zum Routenschutz in Clerk?", options: ["Auth in jeder Seite prüfen", "clerkMiddleware in middleware.js verwenden", "CSS zum Verstecken verwenden"], explanation: "Verwenden Sie clerkMiddleware in middleware.js für globalen Routenschutz." },
    ],
    challenge: { title: "Aufgabenverwaltung erstellen", description: "Erstellen Sie eine vollständige App mit Multi-Provider-Auth, MFA und Organisationen." },
    cheatSheet: { title: "Clerk Vollständiger Spickzettel", items: [
      { term: "<ClerkProvider>", definition: "App-Wrapper für Clerk-Kontext" },
      { term: "useUser()", definition: "Benutzerdaten abrufen" },
      { term: "auth()", definition: "Server-seitige Auth-Prüfung" },
      { term: "clerkMiddleware", definition: "Globaler Routenschutz" },
      { term: "MFA", definition: "Mehr-Faktor-Authentifizierung" },
      { term: "Organizations", definition: "Team-Arbeitsbereiche" },
    ]}
  }
};
export default translations;
