const translations = {
  ar: {
    sections: [
      { title: "تثبيت Clerk وإعداده", content: [
        { type: "p", text: "بعد إنشاء تطبيق Clerk الخاص بك، دعنا نثبّته ونُكيّنه في مشروع Next.js الخاص بك." },
      ]},
      { title: "تثبيت التبعيات", content: [
        { type: "code", text: "npm install @clerk/nextjs" },
        { type: "p", text: "هذه الحزمة توفر كل ما يلزم لدمج Clerk مع Next.js." },
      ]},
      { title: "متغيرات البيئة", content: [
        { type: "p", text: "أضف مفاتيح Clerk إلى <code>.env.local</code>:" },
        { type: "code", text: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...\nCLERK_SECRET_KEY=sk_test_..." },
      ]},
      { title: "لف تطبيقك", content: [
        { type: "code", text: "// app/layout.js\nimport { ClerkProvider } from '@clerk/nextjs';\n\nexport default function RootLayout({ children }) {\n  return (\n    <ClerkProvider>\n      <html>\n        <body>{children}</body>\n      </html>\n    </ClerkProvider>\n  );\n}" },
      ]},
      { title: "إضافة تسجيل الدخول/التسجيل", content: [
        { type: "code", text: "import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';\n\n// في مكونك:\n<SignedOut>\n  <SignInButton />\n</SignedOut>\n<SignedIn>\n  <UserButton />\n</SignedIn>" },
      ]},
      { title: "حماية الصفحات", content: [
        { type: "code", text: "import { auth } from '@clerk/nextjs/server';\n\nexport default async function ProtectedPage() {\n  const { userId } = await auth();\n  if (!userId) redirect('/sign-in');\n  return <div>محتوى محمي</div>;\n}" },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "ثبّت حزمة @clerk/nextjs." },
        { type: "li", text: "أضف متغيرات البيئة للمفاتيح." },
        { type: "li", text: "لف التطبيق بـ ClerkProvider." },
        { type: "li", text: "استخدم مكونات SignInButton و SignedIn و SignedOut و UserButton." },
        { type: "li", text: "احمِ الصفحات بـ auth() من الخادم." },
      ]}
    ],
    quiz: [
      { question: "أي حزمة تحتاجها لـ Clerk مع Next.js؟", options: ["clerk", "@clerk/nextjs", "next-clerk", "clerk-sdk"], explanation: "الحزمة الرسمية هي @clerk/nextjs." },
      { question: "كيف تحمي صفحة بـ Clerk؟", options: ["بأنساق CSS", "باستخدام auth() للتحقق من userId", "بعلامة meta", "في package.json"], explanation: "استخدم auth() من @clerk/nextjs/server للتحقق من userId على الخادم." },
    ],
    challenge: { title: "ادمج Clerk في تطبيقك", description: "ثبّت Clerk، أضف متغيرات البيئة، لف تطبيقك بـ ClerkProvider، وأضف أزرار تسجيل الدخول/التسجيل." },
    cheatSheet: { title: "ملخص مراجعة إعداد Clerk", items: [
      { term: "npm install @clerk/nextjs", definition: "تثبيت حزمة Clerk" },
      { term: "ClerkProvider", definition: "لف التطبيق لسياق Clerk" },
      { term: "SignInButton", definition: "مكون زر تسجيل الدخول" },
      { term: "SignedIn / SignedOut", definition: "عرض شرطي حسب حالة المصادقة" },
      { term: "UserButton", definition: "زر الملف الشخصي للمستخدم" },
      { term: "auth()", definition: "الحصول على userId على الخادم" },
      { term: "protect()", definition: "حماية المسار على الخادم" }
    ]}
  },
  en: {
    sections: [
      { title: "Clerk Installation and Setup", content: [
        { type: "p", text: "After creating your Clerk application, let's install and configure it in your Next.js project." },
      ]},
      { title: "Installing Dependencies", content: [
        { type: "code", text: "npm install @clerk/nextjs" },
        { type: "p", text: "This package provides everything needed for Clerk integration with Next.js." },
      ]},
      { title: "Environment Variables", content: [
        { type: "p", text: "Add your Clerk keys to <code>.env.local</code>:" },
        { type: "code", text: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...\nCLERK_SECRET_KEY=sk_test_..." },
      ]},
      { title: "Wrapping Your App", content: [
        { type: "code", text: "// app/layout.js\nimport { ClerkProvider } from '@clerk/nextjs';\n\nexport default function RootLayout({ children }) {\n  return (\n    <ClerkProvider>\n      <html>\n        <body>{children}</body>\n      </html>\n    </ClerkProvider>\n  );\n}" },
      ]},
      { title: "Adding Sign-In/Sign-Up", content: [
        { type: "code", text: "import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';\n\n// In your component:\n<SignedOut>\n  <SignInButton />\n</SignedOut>\n<SignedIn>\n  <UserButton />\n</SignedIn>" },
      ]},
      { title: "Protecting Pages", content: [
        { type: "code", text: "import { auth } from '@clerk/nextjs/server';\n\nexport default async function ProtectedPage() {\n  const { userId } = await auth();\n  if (!userId) redirect('/sign-in');\n  return <div>Protected content</div>;\n}" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Install @clerk/nextjs package." },
        { type: "li", text: "Add environment variables for keys." },
        { type: "li", text: "Wrap app with ClerkProvider." },
        { type: "li", text: "Use SignInButton, SignedIn, SignedOut, UserButton components." },
        { type: "li", text: "Protect pages with auth() from server." },
      ]}
    ],
    quiz: [
      { question: "What package do you need for Clerk with Next.js?", options: ["clerk", "@clerk/nextjs", "next-clerk", "clerk-sdk"], explanation: "The official package is @clerk/nextjs." },
      { question: "How do you protect a page with Clerk?", options: ["With a CSS class", "Using auth() to check userId", "With a meta tag", "In package.json"], explanation: "Use auth() from @clerk/nextjs/server to check the userId on the server." },
    ],
    challenge: { title: "Integrate Clerk into Your App", description: "Install Clerk, add environment variables, wrap your app with ClerkProvider, and add sign-in/sign-up buttons." },
    cheatSheet: { title: "Clerk Setup Cheat Sheet", items: [
      { term: "npm install @clerk/nextjs", definition: "Install Clerk package" },
      { term: "ClerkProvider", definition: "Wrap app for Clerk context" },
      { term: "SignInButton", definition: "Sign-in button component" },
      { term: "SignedIn / SignedOut", definition: "Conditional rendering by auth state" },
      { term: "UserButton", definition: "User profile button" },
      { term: "auth()", definition: "Get userId on server" },
      { term: "protect()", definition: "Protect route on server" }
    ]}
  },
  fr: {
    sections: [
      { title: "Installation et configuration de Clerk", content: [
        { type: "p", text: "Après avoir créé votre application Clerk, installons et configurons-la dans votre projet Next.js." },
      ]},
      { title: "Installation des dépendances", content: [
        { type: "code", text: "npm install @clerk/nextjs" },
      ]},
      { title: "Envelopper votre application", content: [
        { type: "code", text: "import { ClerkProvider } from '@clerk/nextjs';\n\n<ClerkProvider>\n  <html><body>{children}</body></html>\n</ClerkProvider>" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Installez le package @clerk/nextjs." },
        { type: "li", text: "Ajoutez les variables d'environnement." },
        { type: "li", text: "Enveloppez l'app avec ClerkProvider." },
        { type: "li", text: "Protégez les pages avec auth()." },
      ]}
    ],
    quiz: [
      { question: "Quel package faut-il pour Clerk avec Next.js ?", options: ["clerk", "@clerk/nextjs", "next-clerk"], explanation: "Le package officiel est @clerk/nextjs." },
    ],
    challenge: { title: "Intégrer Clerk", description: "Installez Clerk, ajoutez les variables d'environnement et les boutons de connexion." },
    cheatSheet: { title: "Clerk Configuration Fiche mémo", items: [
      { term: "@clerk/nextjs", definition: "Package Clerk" },
      { term: "ClerkProvider", definition: "Envelopper l'application" },
      { term: "auth()", definition: "Obtenir userId côté serveur" },
    ]}
  },
  de: {
    sections: [
      { title: "Clerk-Installation und Einrichtung", content: [
        { type: "p", text: "Nach der Erstellung Ihrer Clerk-Anwendung installieren und konfigurieren wir sie in Ihrem Next.js-Projekt." },
      ]},
      { title: "Abhängigkeiten installieren", content: [
        { type: "code", text: "npm install @clerk/nextjs" },
      ]},
      { title: "App einbinden", content: [
        { type: "code", text: "import { ClerkProvider } from '@clerk/nextjs';\n\n<ClerkProvider>\n  <html><body>{children}</body></html>\n</ClerkProvider>" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Installieren Sie das Paket @clerk/nextjs." },
        { type: "li", text: "Fügen Sie Umgebungsvariablen hinzu." },
        { type: "li", text: "Binden Sie die App mit ClerkProvider ein." },
        { type: "li", text: "Schützen Sie Seiten mit auth()." },
      ]}
    ],
    quiz: [
      { question: "Welches Paket benötigen Sie für Clerk mit Next.js?", options: ["clerk", "@clerk/nextjs", "next-clerk"], explanation: "Das offizielle Paket ist @clerk/nextjs." },
    ],
    challenge: { title: "Clerk integrieren", description: "Installieren Sie Clerk, fügen Sie Umgebungsvariablen und Anmeldebuttons hinzu." },
    cheatSheet: { title: "Clerk Einrichtung Spickzettel", items: [
      { term: "@clerk/nextjs", definition: "Clerk-Paket" },
      { term: "ClerkProvider", definition: "App einbinden" },
      { term: "auth()", definition: "Server-seitig userId abrufen" },
    ]}
  }
};
export default translations;
