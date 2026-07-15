const translations = {
  ar: {
    sections: [
      { title: "مصادقة Supabase", content: [
        { type: "p", text: "يوفر Supabase نظام مصادقة كاملاً جاهزاً، يدعم طرقاً متعددة: البريد الإلكتروني/كلمة المرور، الروابط السحرية، تسجيل الدخول الاجتماعي (Google، GitHub، Facebook)، و OTP للهاتف." },
      ]},
      { title: "مصادقة البريد الإلكتروني/كلمة المرور", content: [
        { type: "code", text: "// التسجيل\nconst { data, error } = await supabase.auth.signUp({\n  email: 'user@example.com',\n  password: 'securePassword123'\n});\n\n// تسجيل الدخول\nconst { data, error } = await supabase.auth.signInWithPassword({\n  email: 'user@example.com',\n  password: 'securePassword123'\n});\n\n// تسجيل الخروج\nawait supabase.auth.signOut();" },
      ]},
      { title: "تسجيل الدخول الاجتماعي", content: [
        { type: "code", text: "// تسجيل الدخول بـ Google\nconst { data, error } = await supabase.auth.signInWithOAuth({\n  provider: 'google'\n});" },
      ]},
      { title: "حماية الصفحات", content: [
        { type: "p", text: "لحماية الصفحات، تحقق من جلسة المستخدم من جانب الخادم باستخدام <code>supabase.auth.getSession()</code>." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "يدعم Supabase البريد الإلكتروني/كلمة المرور والروابط السحرية وتسجيل الدخول الاجتماعي." },
        { type: "li", text: "استخدم signUp() و signInWithPassword() و signOut()." },
        { type: "li", text: "احمِ الصفحات بالتحقق من الجلسة على الخادم." },
      ]}
    ],
    quiz: [
      { question: "أي طريقة مصادقة لا يدعمها Supabase؟", options: ["البريد الإلكتروني/كلمة المرور", "تسجيل الدخول الاجتماعي (Google)", "الروابط السحرية", "المصادقة البيومترية"], explanation: "Supabase لا يدعم المصادقة البيومترية أصلاً." },
      { question: "كيف تتسجيل الدخول بالبريد الإلكتروني وكلمة المرور؟", options: ["supabase.auth.login()", "supabase.auth.signInWithPassword()", "supabase.auth.authenticate()", "supabase.auth.email()"], explanation: "استخدم supabase.auth.signInWithPassword() لتسجيل الدخول بالبريد الإلكتروني وكلمة المرور." },
    ],
    challenge: { title: "أضف المصادقة إلى تطبيقك", description: "أنشئ نموذج تسجيل وتسجيل دخول. نفذ مصادقة البريد الإلكتروني/كلمة المرور وأضف التحقق من الجلسة لحماية المسارات." },
    cheatSheet: { title: "ملخص مراجعة مصادقة Supabase", items: [
      { term: "signUp({email, password})", definition: "تسجيل مستخدم جديد" },
      { term: "signInWithPassword({email, password})", definition: "تسجيل الدخول بالبيانات" },
      { term: "signInWithOAuth({provider})", definition: "تسجيل الدخول بمزود اجتماعي" },
      { term: "signOut()", definition: "تسجيل خروج المستخدم الحالي" },
      { term: "getSession()", definition: "الحصول على الجلسة الحالية" },
      { term: "getUser()", definition: "الحصول على معلومات المستخدم الحالي" },
      { term: "onAuthStateChange()", definition: "الاستماع لتغييرات المصادقة" }
    ]},
    interviewQuestions: [
      { q: "كيف تضيف تسجيل دخول بـ Google؟", a: "فعّل Google provider في Dashboard وأضف الكود في تطبيقك.", difficulty: "easy" },
    ],
    tricks: [
      { title: "استخدم Supabase Auth Helpers", description: "مكتبة تسهل المصادقة في Next.js", icon: "brain" },
    ]
  },
  en: {
    sections: [
      { title: "Supabase Authentication", content: [
        { type: "p", text: "Supabase provides a complete authentication system out of the box, supporting multiple methods: Email/Password, Magic Links, Social Logins (Google, GitHub, Facebook), and Phone OTP." },
      ]},
      { title: "Email/Password Authentication", content: [
        { type: "code", text: "// Sign up\nconst { data, error } = await supabase.auth.signUp({\n  email: 'user@example.com',\n  password: 'securePassword123'\n});\n\n// Sign in\nconst { data, error } = await supabase.auth.signInWithPassword({\n  email: 'user@example.com',\n  password: 'securePassword123'\n});\n\n// Sign out\nawait supabase.auth.signOut();" },
      ]},
      { title: "Social Login", content: [
        { type: "code", text: "// Sign in with Google\nconst { data, error } = await supabase.auth.signInWithOAuth({\n  provider: 'google'\n});" },
      ]},
      { title: "Protecting Pages", content: [
        { type: "p", text: "To protect pages, check the user session on the server side using <code>supabase.auth.getSession()</code>." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Supabase supports email/password, magic links, and social logins." },
        { type: "li", text: "Use signUp(), signInWithPassword(), signOut()." },
        { type: "li", text: "Protect pages by checking session on server." },
      ]}
    ],
    quiz: [
      { question: "Which authentication method does Supabase NOT support?", options: ["Email/Password", "Social Login (Google)", "Magic Links", "Biometric authentication"], explanation: "Supabase doesn't natively support biometric authentication." },
      { question: "How do you sign in with email and password?", options: ["supabase.auth.login()", "supabase.auth.signInWithPassword()", "supabase.auth.authenticate()", "supabase.auth.email()"], explanation: "Use supabase.auth.signInWithPassword() for email/password sign in." },
    ],
    challenge: { title: "Add Authentication to Your App", description: "Create a registration and login form. Implement email/password auth and add session checking to protect routes." },
    cheatSheet: { title: "Supabase Auth Cheat Sheet", items: [
      { term: "signUp({email, password})", definition: "Register new user" },
      { term: "signInWithPassword({email, password})", definition: "Sign in with credentials" },
      { term: "signInWithOAuth({provider})", definition: "Sign in with social provider" },
      { term: "signOut()", definition: "Sign out current user" },
      { term: "getSession()", definition: "Get current session" },
      { term: "getUser()", definition: "Get current user info" },
      { term: "onAuthStateChange()", definition: "Listen for auth changes" }
    ]},
    interviewQuestions: [
      { q: "How do you add Google sign-in?", a: "Enable Google provider in Dashboard and add the code to your app.", difficulty: "easy" },
    ],
    tricks: [
      { title: "Use Supabase Auth Helpers", description: "A library that simplifies authentication in Next.js", icon: "brain" },
    ]
  },
  fr: {
    sections: [
      { title: "Authentification Supabase", content: [
        { type: "p", text: "Supabase fournit un système d'authentification complet avec Email/Mot de passe, Magic Links et Connexions sociales." },
      ]},
      { title: "Connexion par email/mot de passe", content: [
        { type: "code", text: "const { data } = await supabase.auth.signInWithPassword({\n  email: 'user@example.com',\n  password: 'motDePasse123'\n});" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Supabase supporte email/mot de passe, magic links et connexions sociales." },
        { type: "li", text: "Utilisez signUp(), signInWithPassword(), signOut()." },
      ]}
    ],
    quiz: [
      { question: "Quelle méthode d'authentification Supabase ne supporte-t-il pas ?", options: ["Email/Mot de passe", "Connexion sociale", "Authentification biométrique"], explanation: "Supabase ne supporte pas nativement l'authentification biométrique." },
    ],
    challenge: { title: "Ajouter l'authentification", description: "Créez des formulaires d'inscription et de connexion." },
    cheatSheet: { title: "Supabase Auth Fiche mémo", items: [
      { term: "signInWithPassword()", definition: "Se connecter avec identifiants" },
      { term: "signInWithOAuth()", definition: "Se connecter avec un fournisseur social" },
      { term: "signOut()", definition: "Se déconnecter" },
    ]}
  },
  de: {
    sections: [
      { title: "Supabase-Authentifizierung", content: [
        { type: "p", text: "Supabase bietet ein vollständiges Authentifizierungssystem mit E-Mail/Passwort, Magic Links und sozialen Anmeldungen." },
      ]},
      { title: "E-Mail/Passwort-Anmeldung", content: [
        { type: "code", text: "const { data } = await supabase.auth.signInWithPassword({\n  email: 'user@example.com',\n  password: 'sicheresPasswort123'\n});" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Supabase unterstützt E-Mail/Passwort, Magic Links und soziale Anmeldungen." },
        { type: "li", text: "Verwenden Sie signUp(), signInWithPassword(), signOut()." },
      ]}
    ],
    quiz: [
      { question: "Welche Authentifizierungsmethode unterstützt Supabase NICHT?", options: ["E-Mail/Passwort", "Soziale Anmeldung", "Biometrische Authentifizierung"], explanation: "Supabase unterstützt keine biometrische Authentifizierung." },
    ],
    challenge: { title: "Authentifizierung hinzufügen", description: "Erstellen Sie Registrierungs- und Anmeldeformulare." },
    cheatSheet: { title: "Supabase Auth Spickzettel", items: [
      { term: "signInWithPassword()", definition: "Mit Anmeldedaten anmelden" },
      { term: "signInWithOAuth()", definition: "Mit sozialem Anbieter anmelden" },
      { term: "signOut()", definition: "Abmelden" },
    ]}
  }
};
export default translations;
