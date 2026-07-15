const translations = {
  ar: {
    sections: [
      { title: "طرق المصادقة", content: [
        { type: "p", text: "يدعم Clerk طرق مصادقة متعددة جاهزة. في هذا الدرس، سنتعلم كيفية تنفيذ كل منها." },
      ]},
      { title: "البريد الإلكتروني وكلمة المرور", content: [
        { type: "code", text: "// صفحة التسجيل\nimport { SignUp } from '@clerk/nextjs';\n\nexport default function SignUpPage() {\n  return <SignUp />;\n}\n\n// صفحة تسجيل الدخول\nimport { SignIn } from '@clerk/nextjs';\n\nexport default function SignInPage() {\n  return <SignIn />;\n}" },
      ]},
      { title: "مزودو تسجيل الدخول الاجتماعي", content: [
        { type: "p", text: "فعّل تسجيل الدخول الاجتماعي في لوحة تحكم Clerk: التطبيق → المستخدم والمصادقة → الاتصالات الاجتماعية." },
        { type: "li", text: "Google — الأكثر شعبية" },
        { type: "li", text: "GitHub — للمطورين" },
        { type: "li", text: "Facebook — أكبر شبكة اجتماعية" },
        { type: "li", text: "Twitter/X — شائعة بين مجتمع التقنية" },
        { type: "li", text: "Apple — مطلوبة لتطبيقات iOS" },
      ]},
      { title: "المصادقة متعددة العوامل (MFA)", content: [
        { type: "p", text: "تضيف MFA طبقة أمان إضافية. يدعم Clerk رموز SMS، ورموز البريد الإلكتروني، وتطبيقات المصادقة." },
        { type: "p", text: "فعّل MFA في لوحة التحكم: المستخدم والمصادقة → متعددة العوامل." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "يوفر Clerk مكونات SignIn و SignUp مدمجة." },
        { type: "li", text: "يمكن تفعيل تسجيل الدخول الاجتماعي من لوحة التحكم." },
        { type: "li", text: "تضيف MFA أماناً إضافياً بطرق تحقق متعددة." },
      ]}
    ],
    quiz: [
      { question: "أي مزودين لتسجيل الدخول الاجتماعي يدعمهم Clerk؟", options: ["Google فقط", "Google و GitHub و Facebook والمزيد", "البريد الإلكتروني فقط", "GitHub فقط"], explanation: "يدعم Clerk مزودين متعددين بما في ذلك Google و GitHub و Facebook و Twitter و Apple والمزيد." },
      { question: "ماذا يعني MFA؟", options: ["متعدد الملفات الوصول", "المصادقة متعددة العوامل", "تخصيص الملفات", "واجهة برمجة متعددة الوظائف"], explanation: "MFA = المصادقة متعددة العوامل، تضيف طبقات أمان إضافية." },
    ],
    challenge: { title: "نفذ طرق مصادقة متعددة", description: "أعد إعداد البريد الإلكتروني/كلمة المرور، وفعّل تسجيل الدخول الاجتماعي بـ Google، وكن MFA لتطبيقك." },
    cheatSheet: { title: "ملخص مراجعة طرق المصادقة", items: [
      { term: "<SignIn />", definition: "مكون تسجيل الدخول" },
      { term: "<SignUp />", definition: "مكون التسجيل" },
      { term: "Social Connections", definition: "تفعيل في لوحة التحكم" },
      { term: "MFA", definition: "المصادقة متعددة العوامل" },
      { term: "SMS Code", definition: "تحقق بالهاتف" },
      { term: "Authenticator App", definition: "تحقق مبني على TOTP" }
    ]},
    interviewQuestions: [
      { q: "كيف تخصص نماذج تسجيل الدخول؟", a: "استخدم خصائص appearance و localization في Clerk components.", difficulty: "medium" },
    ],
    tricks: [
      { title: "أضف多种 language support", description: "Clerk يدعم الترجمة التلقائية لأكثر من 30 لغة", icon: "brain" },
    ]
  },
  en: {
    sections: [
      { title: "Authentication Methods", content: [
        { type: "p", text: "Clerk supports multiple authentication methods out of the box. In this lesson, we'll learn how to implement each one." },
      ]},
      { title: "Email and Password", content: [
        { type: "code", text: "// Sign up page\nimport { SignUp } from '@clerk/nextjs';\n\nexport default function SignUpPage() {\n  return <SignUp />;\n}\n\n// Sign in page\nimport { SignIn } from '@clerk/nextjs';\n\nexport default function SignInPage() {\n  return <SignIn />;\n}" },
      ]},
      { title: "Social Login Providers", content: [
        { type: "p", text: "Enable social login in your Clerk dashboard: Application → User & Authentication → Social Connections." },
        { type: "li", text: "Google — most popular" },
        { type: "li", text: "GitHub — for developers" },
        { type: "li", text: "Facebook — largest social network" },
        { type: "li", text: "Twitter/X — popular among tech community" },
        { type: "li", text: "Apple — required for iOS apps" },
      ]},
      { title: "Multi-Factor Authentication (MFA)", content: [
        { type: "p", text: "MFA adds an extra layer of security. Clerk supports SMS codes, email codes, and authenticator apps." },
        { type: "p", text: "Enable MFA in your dashboard: User & Authentication → Multi-factor." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Clerk provides built-in SignIn and SignUp components." },
        { type: "li", text: "Social login can be enabled from the dashboard." },
        { type: "li", text: "MFA adds extra security with multiple verification methods." },
      ]}
    ],
    quiz: [
      { question: "Which social login providers does Clerk support?", options: ["Only Google", "Google, GitHub, Facebook, and more", "Only Email", "Only GitHub"], explanation: "Clerk supports multiple providers including Google, GitHub, Facebook, Twitter, Apple, and more." },
      { question: "What does MFA stand for?", options: ["Multi-File Access", "Multi-Factor Authentication", "Managed File Allocation", "Multi-Function API"], explanation: "MFA = Multi-Factor Authentication, adding extra security layers." },
    ],
    challenge: { title: "Implement Multiple Auth Methods", description: "Set up email/password, enable Google social login, and configure MFA for your app." },
    cheatSheet: { title: "Authentication Methods Cheat Sheet", items: [
      { term: "<SignIn />", definition: "Sign-in component" },
      { term: "<SignUp />", definition: "Sign-up component" },
      { term: "Social Connections", definition: "Enable in dashboard" },
      { term: "MFA", definition: "Multi-Factor Authentication" },
      { term: "SMS Code", definition: "Phone verification" },
      { term: "Authenticator App", definition: "TOTP-based verification" }
    ]},
    interviewQuestions: [
      { q: "How do you customize sign-in forms?", a: "Use the appearance and localization properties in Clerk components.", difficulty: "medium" },
    ],
    tricks: [
      { title: "Add multi-language support", description: "Clerk supports automatic translation for over 30 languages", icon: "brain" },
    ]
  },
  fr: {
    sections: [
      { title: "Méthodes d'authentification", content: [
        { type: "p", text: "Clerk supporte plusieurs méthodes d'authentification. Apprenons à implémenter chacune." },
      ]},
      { title: "Email et mot de passe", content: [
        { type: "code", text: "import { SignUp } from '@clerk/nextjs';\n\nexport default function SignUpPage() {\n  return <SignUp />;\n}" },
      ]},
      { title: "Connexion sociale", content: [
        { type: "li", text: "Google — le plus populaire" },
        { type: "li", text: "GitHub — pour les développeurs" },
        { type: "li", text: "Facebook — plus grand réseau social" },
      ]},
      { title: "Authentification multi-facteurs (MFA)", content: [
        { type: "p", text: "L'MFA ajoute une couche de sécurité supplémentaire." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Clerk fournit des composants SignIn et SignUp intégrés." },
        { type: "li", text: "La connexion sociale peut être activée depuis le tableau de bord." },
        { type: "li", text: "L'MFA ajoute une sécurité supplémentaire." },
      ]}
    ],
    quiz: [
      { question: "Quels fournisseurs de connexion sociale Clerk supporte-t-il ?", options: ["Seulement Google", "Google, GitHub, Facebook et plus", "Seulement Email"], explanation: "Clerk supporte plusieurs fournisseurs." },
    ],
    challenge: { title: "Implémenter plusieurs méthodes", description: "Configurez email/mot de passe, activez Google et configurez l'MFA." },
    cheatSheet: { title: "Méthodes d'auth Fiche mémo", items: [
      { term: "<SignIn />", definition: "Composant de connexion" },
      { term: "<SignUp />", definition: "Composant d'inscription" },
      { term: "MFA", definition: "Authentification multi-facteurs" },
    ]}
  },
  de: {
    sections: [
      { title: "Authentifizierungsmethoden", content: [
        { type: "p", text: "Clerk unterstützt mehrere Authentifizierungsmethoden. Lernen Sie, jede zu implementieren." },
      ]},
      { title: "E-Mail und Passwort", content: [
        { type: "code", text: "import { SignUp } from '@clerk/nextjs';\n\nexport default function SignUpPage() {\n  return <SignUp />;\n}" },
      ]},
      { title: "Soziale Anmeldung", content: [
        { type: "li", text: "Google — am beliebtesten" },
        { type: "li", text: "GitHub — für Entwickler" },
        { type: "li", text: "Facebook" },
      ]},
      { title: "Mehr-Faktor-Authentifizierung (MFA)", content: [
        { type: "p", text: "MFA fügt eine zusätzliche Sicherheitsschicht hinzu." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Clerk bietet integrierte SignIn- und SignUp-Komponenten." },
        { type: "li", text: "Soziale Anmeldung kann im Dashboard aktiviert werden." },
        { type: "li", text: "MFA fügt zusätzliche Sicherheit hinzu." },
      ]}
    ],
    quiz: [
      { question: "Welche sozialen Anmeldeanbieter unterstützt Clerk?", options: ["Nur Google", "Google, GitHub, Facebook und mehr", "Nur E-Mail"], explanation: "Clerk unterstützt mehrere Anbieter." },
    ],
    challenge: { title: "Mehrere Auth-Methoden implementieren", description: "Richten Sie E-Mail/Passwort ein, aktivieren Sie Google und konfigurieren Sie MFA." },
    cheatSheet: { title: "Authentifizierungsmethoden Spickzettel", items: [
      { term: "<SignIn />", definition: "Anmeldekomponente" },
      { term: "<SignUp />", definition: "Registrierungskomponente" },
      { term: "MFA", definition: "Mehr-Faktor-Authentifizierung" },
    ]}
  }
};
export default translations;
