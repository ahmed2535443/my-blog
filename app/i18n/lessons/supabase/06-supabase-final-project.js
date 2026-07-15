const translations = {
  ar: {
    sections: [
      { title: "ملخص المرحلة", content: [
        { type: "p", text: "تهانينا على إكمال مرحلة Supabase! لقد تعلمت جميع المهارات الأساسية لاستخدام Supabase كخادم لتطبيقات Next.js الخاصة بك." },
        { type: "li", text: "الدرس 1: ما هو Supabase" },
        { type: "li", text: "الدرس 2: التثبيت والإعداد" },
        { type: "li", text: "الدرس 3: قاعدة البيانات — الجداول والعلاقات و CRUD" },
        { type: "li", text: "الدرس 4: المصادقة" },
        { type: "li", text: "الدرس 5: التخزين والأمان" },
      ]},
      { title: "ما أتقنته", content: [
        { type: "li", text: "إنشاء وإدارة مشاريع Supabase" },
        { type: "li", text: "تصميم جداول قاعدة البيانات والعلاقات" },
        { type: "li", text: "تنفيذ عمليات CRUD" },
        { type: "li", text: "تنفيذ طرق مصادقة متعددة" },
        { type: "li", text: "إدارة تخزين الملفات" },
        { type: "li", text: "تطبيق الأمان على مستوى الصف" },
      ]},
      { title: "المشروع النهائي: نظام إدارة الطلاب", content: [
        { type: "p", text: "في هذا المشروع، سنبني نظاماً كاملاً لإدارة الطلاب باستخدام جميع المفاهيم التي تعلمناها." },
        { type: "li", text: "تصميم جداول قاعدة البيانات: الطلاب والمعلمون والدورات والتسجيلات" },
        { type: "li", text: "تنفيذ مصادقة البريد الإلكتروني/كلمة المرور" },
        { type: "li", text: "إنشاء عمليات CRUD لجميع الكيانات" },
        { type: "li", text: "إضافة رفع الملفات لصور الطلاب" },
        { type: "li", text: "تطبيق سياسات الأمان لحماية البيانات" },
      ]},
      { title: "أفضل الممارسات", content: [
        { type: "li", text: "استخدم دائماً متغيرات البيئة للمفاتيح" },
        { type: "li", text: "فعّل RLS على جميع الجداول التي تحتوي على بيانات المستخدمين" },
        { type: "li", text: "استخدم العلاقات بدلاً من تكرار البيانات" },
        { type: "li", text: "تعامل مع الأخطاء بأناقة في كودك" },
        { type: "li", text: "أبقِ تكوين عميل Supabase في مكان واحد" },
      ]},
      { title: "ما الخطوة التالية؟", content: [
        { type: "p", text: "بعد هذه المرحلة، يمكنك الانتقال إلى Clerk للمصادقة المتقدمة، أو البدء في بناء مشاريع حقيقية مع Supabase + Next.js." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "أتقن Supabase: قاعدة البيانات والمصادقة والتخزين والأمان." },
        { type: "li", text: "بنى نظام إدارة طلاب كامل." },
        { type: "li", text: "جاهز لمرحلة Clerk والمشاريع الحقيقية." },
      ]}
    ],
    quiz: [
      { question: "ما هي أفضل ممارسة لتخزين مفاتيح Supabase؟", options: ["في الكود مباشرة", "في متغيرات البيئة", "في localStorage", "في قاعدة البيانات"], explanation: "استخدم دائماً متغيرات البيئة (.env.local) للمفاتيح الحساسة." },
      { question: "ما هو الغرض من RLS في Supabase؟", options: ["تسريع الاستعلامات", "تحكم في الوصول إلى البيانات على مستوى الصف", "إدارة تخزين الملفات", "التعامل مع الوقت الفوري"], explanation: "RLS (الأمان على مستوى الصف) يتحكم في الصفوف التي يمكن لكل مستخدم الوصول إليها." },
      { question: "ما هي ميزة استخدام Supabase؟", options: ["لا حاجة للبرمجة", "APIs جاهزة ولوحة تحكم", "يدعم MySQL فقط", "لا مصادقة"], explanation: "يوفر Supabase APIs جاهزة، لوحة تحكم مرئية، ومصادقة مدمجة." },
    ],
    challenge: { title: "ابنِ نظام إدارة الطلاب", description: "أنشئ نظاماً كاملاً مع جداول الطلاب/المعلمين والمصادقة وعمليات CRUD ورفع الملفات وسياسات الأمان." },
    cheatSheet: { title: "ملخص مراجعة Supabase الكامل", items: [
      { term: "createClient(url, key)", definition: "تهيئة عميل Supabase" },
      { term: ".from('table').select('*')", definition: "قراءة البيانات" },
      { term: ".insert({})", definition: "إنشاء سجل" },
      { term: ".update({}).eq('id', val)", definition: "تحديث سجل" },
      { term: ".delete().eq('id', val)", definition: "حذف سجل" },
      { term: "signUp()", definition: "تسجيل مستخدم" },
      { term: "signInWithPassword()", definition: "تسجيل الدخول" },
      { term: "signOut()", definition: "تسجيل الخروج" },
      { term: ".upload('path', file)", definition: "رفع ملف" },
      { term: ".getPublicUrl('path')", definition: "الحصول على رابط الملف" },
      { term: "RLS + Policies", definition: "الأمان على مستوى الصف" },
      { term: ".env.local", definition: "تخزين متغيرات البيئة" }
    ]},
    interviewQuestions: [
      { q: "كيف تبني تطبيق كامل بـ Supabase؟", a: "قاعدة البيانات → المصادقة → Storage → Realtime → الواجهة.", difficulty: "medium" },
    ],
    tricks: [
      { title: "استخدم Edge Functions", description: "للعمليات المعقدة التي تحتاج server-side logic", icon: "brain" },
    ]
  },
  en: {
    sections: [
      { title: "Stage Summary", content: [
        { type: "p", text: "Congratulations on completing the Supabase stage! You've learned all the essential skills to use Supabase as a backend for your Next.js applications." },
        { type: "li", text: "Lesson 1: What is Supabase" },
        { type: "li", text: "Lesson 2: Installation and Setup" },
        { type: "li", text: "Lesson 3: Database — Tables, Relationships, CRUD" },
        { type: "li", text: "Lesson 4: Authentication" },
        { type: "li", text: "Lesson 5: Storage and Security" },
      ]},
      { title: "What You've Mastered", content: [
        { type: "li", text: "Creating and managing Supabase projects" },
        { type: "li", text: "Designing database tables and relationships" },
        { type: "li", text: "Performing CRUD operations" },
        { type: "li", text: "Implementing multiple authentication methods" },
        { type: "li", text: "Managing file storage" },
        { type: "li", text: "Applying Row Level Security" },
      ]},
      { title: "Final Project: Student Management System", content: [
        { type: "p", text: "In this project, we'll build a complete student management system using all the concepts we've learned." },
        { type: "li", text: "Design database tables: Students, Teachers, Courses, Enrollments" },
        { type: "li", text: "Implement email/password authentication" },
        { type: "li", text: "Create CRUD operations for all entities" },
        { type: "li", text: "Add file upload for student photos" },
        { type: "li", text: "Apply security policies to protect data" },
      ]},
      { title: "Best Practices", content: [
        { type: "li", text: "Always use environment variables for keys" },
        { type: "li", text: "Enable RLS on all tables with user data" },
        { type: "li", text: "Use relationships instead of duplicating data" },
        { type: "li", text: "Handle errors gracefully in your code" },
        { type: "li", text: "Keep your Supabase client configuration in one place" },
      ]},
      { title: "What's Next?", content: [
        { type: "p", text: "After this stage, you can move on to Clerk for advanced authentication, or start building real projects with Supabase + Next.js." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Mastered Supabase: database, auth, storage, security." },
        { type: "li", text: "Built a complete student management system." },
        { type: "li", text: "Ready for Clerk stage and real-world projects." },
      ]}
    ],
    quiz: [
      { question: "What is the best practice for storing Supabase keys?", options: ["In your code directly", "In environment variables", "In localStorage", "In a database"], explanation: "Always use environment variables (.env.local) for sensitive keys." },
      { question: "What is the purpose of RLS in Supabase?", options: ["Speed up queries", "Control row-level data access", "Manage file storage", "Handle real-time"], explanation: "RLS (Row Level Security) controls which rows each user can access." },
      { question: "Which is a benefit of using Supabase?", options: ["No coding needed", "Ready-made APIs and dashboard", "Only supports MySQL", "No authentication"], explanation: "Supabase provides ready-made APIs, a visual dashboard, and built-in authentication." },
    ],
    challenge: { title: "Build Student Management System", description: "Create a complete system with student/teacher tables, authentication, CRUD operations, file uploads, and security policies." },
    cheatSheet: { title: "Supabase Complete Cheat Sheet", items: [
      { term: "createClient(url, key)", definition: "Initialize Supabase client" },
      { term: ".from('table').select('*')", definition: "Read data" },
      { term: ".insert({})", definition: "Create record" },
      { term: ".update({}).eq('id', val)", definition: "Update record" },
      { term: ".delete().eq('id', val)", definition: "Delete record" },
      { term: "signUp()", definition: "Register user" },
      { term: "signInWithPassword()", definition: "Sign in" },
      { term: "signOut()", definition: "Sign out" },
      { term: ".upload('path', file)", definition: "Upload file" },
      { term: ".getPublicUrl('path')", definition: "Get file URL" },
      { term: "RLS + Policies", definition: "Row Level Security" },
      { term: ".env.local", definition: "Store environment variables" }
    ]},
    interviewQuestions: [
      { q: "How do you build a full app with Supabase?", a: "Database → Authentication → Storage → Realtime → Frontend.", difficulty: "medium" },
    ],
    tricks: [
      { title: "Use Edge Functions", description: "For complex operations that need server-side logic", icon: "brain" },
    ]
  },
  fr: {
    sections: [
      { title: "Résumé de la stage", content: [
        { type: "p", text: "Félicitations pour avoir complété la stage Supabase ! Vous avez appris toutes les compétences essentielles." },
        { type: "li", text: "Leçon 1 : Qu'est-ce que Supabase" },
        { type: "li", text: "Leçon 2 : Installation et configuration" },
        { type: "li", text: "Leçon 3 : Base de données — Tables, Relations, CRUD" },
        { type: "li", text: "Leçon 4 : Authentification" },
        { type: "li", text: "Leçon 5 : Stockage et sécurité" },
      ]},
      { title: "Projet final : Système de gestion des étudiants", content: [
        { type: "p", text: "Nous allons construire un système complet de gestion des étudiants." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Maîtrisé Supabase : base de données, auth, stockage, sécurité." },
        { type: "li", text: "Prêt pour la stage Clerk et les projets réels." },
      ]}
    ],
    quiz: [
      { question: "Quelle est la meilleure pratique pour stocker les clés Supabase ?", options: ["Directement dans le code", "Dans des variables d'environnement", "Dans localStorage"], explanation: "Utilisez toujours des variables d'environnement pour les clés sensibles." },
    ],
    challenge: { title: "Construire le système de gestion", description: "Créez un système complet avec tables étudiants/enseignants, authentification et opérations CRUD." },
    cheatSheet: { title: "Supabase Fiche mémo complète", items: [
      { term: "createClient(url, key)", definition: "Initialiser le client" },
      { term: ".from('table').select('*')", definition: "Lire les données" },
      { term: ".insert({})", definition: "Créer un enregistrement" },
      { term: "signUp()", definition: "Inscrire un utilisateur" },
      { term: "signInWithPassword()", definition: "Se connecter" },
      { term: "RLS + Policies", definition: "Sécurité au niveau des lignes" },
    ]}
  },
  de: {
    sections: [
      { title: "Phasen-Zusammenfassung", content: [
        { type: "p", text: "Herzlichen Glückwunsch zum Abschluss der Supabase-Phase! Sie haben alle wesentlichen Fähigkeiten erlernt." },
        { type: "li", text: "Lektion 1: Was ist Supabase" },
        { type: "li", text: "Lektion 2: Installation und Einrichtung" },
        { type: "li", text: "Lektion 3: Datenbank — Tabellen, Beziehungen, CRUD" },
        { type: "li", text: "Lektion 4: Authentifizierung" },
        { type: "li", text: "Lektion 5: Speicher und Sicherheit" },
      ]},
      { title: "Abschlussprojekt: Studentenverwaltungssystem", content: [
        { type: "p", text: "Wir erstellen ein vollständiges Studentenverwaltungssystem mit allen Konzepten." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Supabase gemeistert: Datenbank, Auth, Speicher, Sicherheit." },
        { type: "li", text: "Bereit für die Clerk-Phase und reale Projekte." },
      ]}
    ],
    quiz: [
      { question: "Was ist die beste Methode zum Speichern von Supabase-Schlüsseln?", options: ["Direkt im Code", "In Umgebungsvariablen", "In localStorage"], explanation: "Verwenden Sie immer Umgebungsvariablen für sensible Schlüssel." },
    ],
    challenge: { title: "Studentenverwaltungssystem erstellen", description: "Erstellen Sie ein vollständiges System mit Authentifizierung und CRUD-Operationen." },
    cheatSheet: { title: "Supabase Vollständiger Spickzettel", items: [
      { term: "createClient(url, key)", definition: "Client initialisieren" },
      { term: ".from('table').select('*')", definition: "Daten lesen" },
      { term: ".insert({})", definition: "Datensatz erstellen" },
      { term: "signUp()", definition: "Benutzer registrieren" },
      { term: "signInWithPassword()", definition: "Anmelden" },
      { term: "RLS + Policies", definition: "Zeilenbasierte Sicherheit" },
    ]}
  }
};
export default translations;
