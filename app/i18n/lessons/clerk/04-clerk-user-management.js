const translations = {
  ar: {
    sections: [
      { title: "إدارة المستخدمين", content: [
        { type: "p", text: "يوفر Clerk نظاماً كاملاً لإدارة المستخدمين يشمل الملفات الشخصية للمستخدمين والمنظمات وإدارة الجلسات." },
      ]},
      { title: "الملفات الشخصية للمستخدمين", content: [
        { type: "code", text: "import { useUser } from '@clerk/nextjs';\n\nfunction UserProfile() {\n  const { isLoaded, isSignedIn, user } = useUser();\n  \n  if (!isLoaded) return <div>جاري التحميل...</div>;\n  if (!isSignedIn) return null;\n  \n  return (\n    <div>\n      <p>الاسم: {user.fullName}</p>\n      <p>البريد الإلكتروني: {user.primaryEmailAddress}</p>\n    </div>\n  );\n}" },
      ]},
      { title: "المنظمات", content: [
        { type: "p", text: "المنظمات تسمح للمستخدمين بالانتماء إلى فرق أو شركات مع تحكم في الوصول بالأدوار." },
        { type: "code", text: "import { useOrganization } from '@clerk/nextjs';\n\nconst { organization } = useOrganization();" },
      ]},
      { title: "Webhooks", content: [
        { type: "p", text: "Webhooks تُبلغ تطبيقك عندما تحدث أحداث في Clerk (إنشاء مستخدم، تحديث، حذف). قم بتكوينها في لوحة التحكم تحت Webhooks." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "يوفر Clerk hook useUser للوصول إلى بيانات المستخدم." },
        { type: "li", text: "المنظمات تمكّن التحكم في الوصول القائم على الفرق." },
        { type: "li", text: "Webhooks تُبلغ تطبيقك بأحداث المستخدمين." },
      ]}
    ],
    quiz: [
      { question: "كيف تصل إلى بيانات المستخدم الحالي في Clerk؟", options: ["useAuth()", "useUser()", "getUser()", "currentUser()"], explanation: "استخدم hook useUser() للوصول إلى بيانات المستخدم الحالي." },
      { question: "ما هي المنظمات في Clerk؟", options: ["جداول قواعد بيانات", "فرق/شركات مع تحكم في الوصول بالأدوار", "مجلدات ملفات", "نقاط نهاية API"], explanation: "المنظمات تسمح للمستخدمين بالانتماء إلى فرق أو شركات مع تحكم في الوصول بالأدوار." },
    ],
    challenge: { title: "نفذ إدارة المستخدمين", description: "أنشئ صفحة ملف شخصي للمستخدم ونفذ منظمات لإدارة الفريق." },
    cheatSheet: { title: "ملخص مراجعة إدارة المستخدمين", items: [
      { term: "useUser()", definition: "الوصول إلى بيانات المستخدم الحالي" },
      { term: "user.fullName", definition: "الاسم الكامل للمستخدم" },
      { term: "user.primaryEmailAddress", definition: "البريد الإلكتروني الأساسي" },
      { term: "useOrganization()", definition: "الوصول إلى بيانات المنظمة" },
      { term: "Webhooks", definition: "إشعارات الأحداث" }
    ]},
    interviewQuestions: [
      { q: "كيف تحفظ بيانات المستخدم الإضافية؟", a: "استخدم webhook لإنشاء profile في قاعدة البيانات عند التسجيل.", difficulty: "medium" },
    ],
    tricks: [
      { title: "استخدم UserButton component", description: "زر جاهز يعرض معلومات المستخدم وخيارات تسجيل الخروج", icon: "brain" },
    ]
  },
  en: {
    sections: [
      { title: "User Management", content: [
        { type: "p", text: "Clerk provides a complete user management system including user profiles, organizations, and session management." },
      ]},
      { title: "User Profiles", content: [
        { type: "code", text: "import { useUser } from '@clerk/nextjs';\n\nfunction UserProfile() {\n  const { isLoaded, isSignedIn, user } = useUser();\n  \n  if (!isLoaded) return <div>Loading...</div>;\n  if (!isSignedIn) return null;\n  \n  return (\n    <div>\n      <p>Name: {user.fullName}</p>\n      <p>Email: {user.primaryEmailAddress}</p>\n    </div>\n  );\n}" },
      ]},
      { title: "Organizations", content: [
        { type: "p", text: "Organizations allow users to belong to teams or companies with role-based access control." },
        { type: "code", text: "import { useOrganization } from '@clerk/nextjs';\n\nconst { organization } = useOrganization();" },
      ]},
      { title: "Webhooks", content: [
        { type: "p", text: "Webhooks notify your application when events happen in Clerk (user created, updated, deleted). Configure them in the dashboard under Webhooks." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Clerk provides useUser hook for accessing user data." },
        { type: "li", text: "Organizations enable team-based access control." },
        { type: "li", text: "Webhooks notify your app of user events." },
      ]}
    ],
    quiz: [
      { question: "How do you access current user data in Clerk?", options: ["useAuth()", "useUser()", "getUser()", "currentUser()"], explanation: "Use the useUser() hook to access current user data." },
      { question: "What are Organizations in Clerk?", options: ["Database tables", "Teams/companies with role-based access", "File folders", "API endpoints"], explanation: "Organizations allow users to belong to teams or companies with role-based access." },
    ],
    challenge: { title: "Implement User Management", description: "Create a user profile page and implement organizations for team management." },
    cheatSheet: { title: "User Management Cheat Sheet", items: [
      { term: "useUser()", definition: "Access current user data" },
      { term: "user.fullName", definition: "User's full name" },
      { term: "user.primaryEmailAddress", definition: "Primary email" },
      { term: "useOrganization()", definition: "Access organization data" },
      { term: "Webhooks", definition: "Event notifications" }
    ]},
    interviewQuestions: [
      { q: "How do you store additional user data?", a: "Use a webhook to create a profile in the database upon registration.", difficulty: "medium" },
    ],
    tricks: [
      { title: "Use UserButton component", description: "A ready-made button showing user info and sign-out options", icon: "brain" },
    ]
  },
  fr: {
    sections: [
      { title: "Gestion des utilisateurs", content: [
        { type: "p", text: "Clerk fournit un système complet de gestion des utilisateurs avec profils, organisations et gestion des sessions." },
      ]},
      { title: "Profils utilisateurs", content: [
        { type: "code", text: "import { useUser } from '@clerk/nextjs';\nconst { user } = useUser();" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Clerk fournit le hook useUser pour accéder aux données utilisateur." },
        { type: "li", text: "Les organisations permettent l'accès par équipe." },
        { type: "li", text: "Les webhooks notifient les événements utilisateur." },
      ]}
    ],
    quiz: [
      { question: "Comment accéder aux données utilisateur dans Clerk ?", options: ["useAuth()", "useUser()", "getUser()"], explanation: "Utilisez le hook useUser() pour accéder aux données utilisateur." },
    ],
    challenge: { title: "Implémenter la gestion des utilisateurs", description: "Créez une page de profil utilisateur et implémentez les organisations." },
    cheatSheet: { title: "Gestion des utilisateurs Fiche mémo", items: [
      { term: "useUser()", definition: "Accéder aux données utilisateur" },
      { term: "useOrganization()", definition: "Accéder aux données d'organisation" },
    ]}
  },
  de: {
    sections: [
      { title: "Benutzerverwaltung", content: [
        { type: "p", text: "Clerk bietet ein vollständiges Benutzerverwaltungssystem mit Profilen, Organisationen und Sitzungsverwaltung." },
      ]},
      { title: "Benutzerprofile", content: [
        { type: "code", text: "import { useUser } from '@clerk/nextjs';\nconst { user } = useUser();" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Clerk bietet den useUser-Hook für Benutzerdaten." },
        { type: "li", text: "Organisationen ermöglichen teambasierten Zugriff." },
        { type: "li", text: "Webhooks benachrichtigen über Benutzerereignisse." },
      ]}
    ],
    quiz: [
      { question: "Wie greifen Sie auf aktuelle Benutzerdaten in Clerk zu?", options: ["useAuth()", "useUser()", "getUser()"], explanation: "Verwenden Sie den useUser()-Hook." },
    ],
    challenge: { title: "Benutzerverwaltung implementieren", description: "Erstellen Sie eine Benutzerprofilseite und implementieren Sie Organisationen." },
    cheatSheet: { title: "Benutzerverwaltung Spickzettel", items: [
      { term: "useUser()", definition: "Benutzerdaten abrufen" },
      { term: "useOrganization()", definition: "Organisationsdaten abrufen" },
    ]}
  }
};
export default translations;
