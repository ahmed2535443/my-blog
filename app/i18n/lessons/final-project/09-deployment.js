const translations = {
  ar: {
    sections: [
      { title: "مقدمة في النشر", content: [
        { type: "p", text: "النشر هو عملية جعل تطبيقك متاحًا للمستخدمين على الإنترنت. يغطي هذا الدرس النشر على Vercel وإعداد متغيرات البيئة وإعداد CI/CD." },
        { type: "callout", title: "ما سنتعلمه", text: "النشر على Vercel، إعداد متغيرات البيئة، إعداد Supabase للإنتاج، إعداد النطاق المخصص، تحسين الأداء، CI/CD مع GitHub Actions." }
      ]},
      { title: "التحضير قبل النشر", content: [
        { type: "p", text: "قبل النشر، تأكد من أن مشروعك جاهز للإنتاج: قم بتشغيل lint و type-check والبناء بنجاح." },
        { type: "callout", title: "قائمة التحقق قبل النشر", text: "قم بتشغيل npm run lint و npm run type-check و npm run build، تأكد من أن .gitignore يشمل الملفات الحساسة." }
      ]},
      { title: "النشر باستخدام Vercel", content: [
        { type: "p", text: "Vercel هو أسهل طريقة لنشر تطبيقات Next.js. ادفع إلى GitHub، اتصل بـ Vercel، اضبط متغيرات البيئة، وانشر." },
        { type: "callout", title: "خطوات نشر Vercel", text: "1. ادفع إلى GitHub، 2. أنشئ حساب Vercel، 3. استورد المستودع، 4. اضبط متغيرات البيئة، 5. انشر." }
      ]},
      { title: "إعداد متغيرات البيئة", content: [
        { type: "p", text: "تخزن متغيرات البيئة البيانات الحساسة مثل مفاتيح API. يجب إعدادها في لوحة تحكم Vercel، لا يتم ا_commit_ها أبدًا إلى Git." },
        { type: "callout", title: "المتغيرات الرئيسية", text: "بادئة NEXT_PUBLIC_ للمتغيرات من جانب العميل، SUPABASE_SERVICE_ROLE_KEY للخادم فقط، مفاتيح Clerk للمصادقة." }
      ]},
      { title: "إعداد Supabase للإنتاج", content: [
        { type: "p", text: "اضبط سياسات RLS ودلو التخزين ودوال قاعدة البيانات للاستخدام في الإنتاج." },
        { type: "callout", title: "قائمة التحقق للإنتاج", text: "فعّل RLS على جميع الجداول، أنشئ دلو التخزين مع السياسات، أضف دوال قاعدة البيانات، اختبر جميع العمليات." }
      ]},
      { title: "إعداد النطاق المخصص", content: [
        { type: "p", text: "اتصل نطاقًا مخصصًا بنشر Vercel مع إعداد DNS و SSL." },
        { type: "callout", title: "إعداد النطاق", text: "اشترِ النطاق، أضفه إلى Vercel، اضبط سجلات DNS (A/CNAME)، SSL تلقائي." }
      ]},
      { title: "تحسين الأداء", content: [
        { type: "p", text: "حسّن بناء الإنتاج مع تحسين الصور وتحميل الخطوط والتخزين المؤقت وتقسيم الكود." },
        { type: "callout", title: "نصائح التحسين", text: "استخدم next/image مع priority، حسّن الخطوط باستخدام next/font، استفد من التخزين المؤقت، استخدم الاستيراد الديناميكي." }
      ]},
      { title: "CI/CD مع GitHub Actions", content: [
        { type: "p", text: "أعد التكامل المستمر والنشر باستخدام GitHub Actions للاختبار والنشر التلقائي." },
        { type: "callout", title: "فوائد CI/CD", text: "الاختبار التلقائي مع كل دفع، النشر التلقائي إلى الإنتاج، عملية بناء متسقة." }
      ]}
    ],
    quiz: [
      { question: "ما هو الهدف من متغيرات البيئة في الإنتاج؟",
        options: ["تحسين الأداء", "تخزين البيانات الحساسة مثل مفاتيح API بشكل منفصل عن الكود", "تسريع البناء", "تقليل حجم الحزمة"],
        correctAnswer: 1, explanation: "تخزن متغيرات البيئة بيانات الإعداد الحساسة بشكل منفصل عن قاعدة الكود، مما يحافظ على أمان الأسرار." },
      { question: "ماذا يضبط vercel.json؟",
        options: ["إعدادات React", "إعدادات نشر Vercel بما في ذلك الرؤوس والإعادة التوجيهات وإعادة الكتابة", "مخطط قاعدة البيانات", "تبعيات الحزمة"],
        correctAnswer: 1, explanation: "يضبط vercel.json إعدادات النشر المحددة بما في ذلك رؤوس الأمان وإعادة التوجيه/إعادة الكتابة والمهام المجدولة." },
      { question: "كيف يجب تخزين متغيرات البيئة الحساسة لـ GitHub Actions؟",
        options: ["في README.md", "في GitHub Secrets", "في .env.local", "في package.json"],
        correctAnswer: 1, explanation: "يشفر GitHub Secrets المتغيرات الحساسة بحيث يمكن استخدامها في سير العمل دون كشفها." },
      { question: "ماذا يعني CI/CD؟",
        options: ["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment", "Create Install / Create Deploy", "Central Interface / Central Database"],
        correctAnswer: 1, explanation: "يقوم CI/CD بأتمتة عملية الاختبار والتكامل ونشر تغييرات الكود بشكل متسق." }
    ],
    challenge: { title: "تحدي: إعداد النشر الكامل",
      description: "أنشئ vercel.json مع رؤوس الأمان، أعد إعداد سير عمل GitHub Actions، أنشئ نقطة نهاية لفحص الحالة، اضبط متغيرات البيئة في Vercel." },
    cheatSheet: { title: "مرجع النشر السريع", items: [
      { title: "أوامر Vercel", content: "vercel، vercel --prod، vercel ls" },
      { title: "vercel.json", content: "الرؤوس للأمان، إعادة التوجيه/إعادة الكتابة للعناوين" },
      { title: "التحسين", content: "next/image، next/font، التخزين المؤقت، الاستيراد الديناميكي" },
      { title: "CI/CD", content: "GitHub Actions للاختبار والنشر التلقائي" }
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
      { title: "Introduction to Deployment", content: [
        { type: "p", text: "Deployment is the process of making your application available to users on the internet. This lesson covers deploying to Vercel, configuring environment variables, and setting up CI/CD." },
        { type: "callout", title: "What We Will Learn", text: "Deploying to Vercel, environment variable configuration, Supabase production setup, custom domain configuration, performance optimization, CI/CD with GitHub Actions." }
      ]},
      { title: "Pre-deployment Preparation", content: [
        { type: "p", text: "Before deploying, ensure your project is production-ready: run linting, type checking, and build successfully." },
        { type: "callout", title: "Pre-deployment Checklist", text: "Run npm run lint, npm run type-check, npm run build, verify .gitignore includes sensitive files." }
      ]},
      { title: "Deploying with Vercel", content: [
        { type: "p", text: "Vercel is the easiest way to deploy Next.js apps. Push to GitHub, connect to Vercel, configure environment variables, and deploy." },
        { type: "callout", title: "Vercel Deployment Steps", text: "1. Push to GitHub, 2. Create Vercel account, 3. Import repository, 4. Configure env vars, 5. Deploy." }
      ]},
      { title: "Environment Variables Configuration", content: [
        { type: "p", text: "Environment variables store sensitive data like API keys. They must be configured in Vercel dashboard, never committed to Git." },
        { type: "callout", title: "Key Variables", text: "NEXT_PUBLIC_ prefix for client-side vars, SUPABASE_SERVICE_ROLE_KEY for server-only, CLERK keys for authentication." }
      ]},
      { title: "Supabase Production Setup", content: [
        { type: "p", text: "Configure RLS policies, storage buckets, and database functions for production use." },
        { type: "callout", title: "Production Checklist", text: "Enable RLS on all tables, create storage buckets with policies, add database functions, test all operations." }
      ]},
      { title: "Custom Domain Configuration", content: [
        { type: "p", text: "Connect a custom domain to your Vercel deployment with DNS configuration and SSL." },
        { type: "callout", title: "Domain Setup", text: "Purchase domain, add to Vercel, configure DNS records (A/CNAME), SSL is automatic." }
      ]},
      { title: "Performance Optimization", content: [
        { type: "p", text: "Optimize your production build with image optimization, font loading, caching, and code splitting." },
        { type: "callout", title: "Optimization Tips", text: "Use next/image with priority, optimize fonts with next/font, leverage caching, use dynamic imports." }
      ]},
      { title: "CI/CD with GitHub Actions", content: [
        { type: "p", text: "Set up continuous integration and deployment with GitHub Actions for automated testing and deployment." },
        { type: "callout", title: "CI/CD Benefits", text: "Automated testing on every push, automatic deployment to production, consistent build process." }
      ]}
    ],
    quiz: [
      { question: "What is the purpose of environment variables in production?",
        options: ["Improve performance", "Store sensitive data like API keys separately from code", "Speed up builds", "Reduce bundle size"],
        correctAnswer: 1, explanation: "Environment variables store sensitive configuration data separately from the codebase, keeping secrets secure." },
      { question: "What does vercel.json configure?",
        options: ["React settings", "Vercel deployment settings like headers, redirects, and rewrites", "Database schema", "Package dependencies"],
        correctAnswer: 1, explanation: "vercel.json configures deployment-specific settings including security headers, URL redirects/rewrites, and cron jobs." },
      { question: "How should sensitive environment variables be stored for GitHub Actions?",
        options: ["In README.md", "In GitHub Secrets", "In .env.local", "In package.json"],
        correctAnswer: 1, explanation: "GitHub Secrets encrypt sensitive variables so they can be used in workflows without exposing them." },
      { question: "What does CI/CD stand for?",
        options: ["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment", "Create Install / Create Deploy", "Central Interface / Central Database"],
        correctAnswer: 1, explanation: "CI/CD automates the process of testing, integrating, and deploying code changes consistently." }
    ],
    challenge: { title: "Challenge: Set Up Complete Deployment",
      description: "Create vercel.json with security headers, set up GitHub Actions workflow, create a health check endpoint, configure environment variables in Vercel." },
    cheatSheet: { title: "Deployment Quick Reference", items: [
      { title: "Vercel Commands", content: "vercel, vercel --prod, vercel ls" },
      { title: "vercel.json", content: "headers for security, redirects/rewrites for URLs" },
      { title: "Optimization", content: "next/image, next/font, caching, dynamic imports" },
      { title: "CI/CD", content: "GitHub Actions for automated testing and deployment" }
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
      { title: "Introduction au deploiement", content: [
        { type: "p", text: "Le deploiement est le processus de mise a disposition de votre application aux utilisateurs sur Internet." },
        { type: "callout", title: "Ce que nous allons apprendre", text: "Deploiement sur Vercel, configuration des variables d'environnement, configuration de production Supabase, domaine personnalise, optimisation, CI/CD." }
      ]},
      { title: "Preparation au deploiement", content: [
        { type: "p", text: "Avant de deployer, assurez-vous que votre projet est pret pour la production." },
        { type: "callout", title: "Checklist", text: "Lancez lint, type-check et build, verifiez le .gitignore." }
      ]},
      { title: "Deploiement avec Vercel", content: [
        { type: "p", text: "Vercel est la facon la plus simple de deployer les applications Next.js." },
        { type: "callout", title: "Etapes", text: "1. Push vers GitHub, 2. Creer un compte Vercel, 3. Importer le depot, 4. Configurer les vars, 5. Deployer." }
      ]},
      { title: "Configuration des variables d'environnement", content: [
        { type: "p", text: "Les variables d'environnement stockent les donnees sensibles. Elles doivent etre configurees dans le dashboard Vercel." },
        { type: "callout", title: "Variables cles", text: "Prefixe NEXT_PUBLIC_ pour le client, SUPABASE_SERVICE_ROLE_KEY pour le serveur, cles Clerk pour l'auth." }
      ]},
      { title: "Configuration de production Supabase", content: [
        { type: "p", text: "Configurez les politiques RLS, les buckets de stockage et les fonctions de base de donnees." },
        { type: "callout", title: "Checklist production", text: "Activez RLS, creez les buckets, ajoutez les fonctions, testez toutes les operations." }
      ]},
      { title: "Configuration du domaine personnalise", content: [
        { type: "p", text: "Connectez un domaine personnalise a votre deploiement Vercel avec DNS et SSL." },
        { type: "callout", title: "Etapes du domaine", text: "Achetez le domaine, ajoutez-le a Vercel, configurez DNS, SSL automatique." }
      ]},
      { title: "Optimisation des performances", content: [
        { type: "p", text: "Optimisez votre build de production avec l'optimisation d'images et le cache." },
        { type: "callout", title: "Conseils", text: "Utilisez next/image, optimisez les polices, utilisez le cache et les imports dynamiques." }
      ]},
      { title: "CI/CD avec GitHub Actions", content: [
        { type: "p", text: "Configurez l'integration et le deploiement continus avec GitHub Actions." },
        { type: "callout", title: "Avantages CI/CD", text: "Tests automatiques, deploiement automatique, processus de build coherent." }
      ]}
    ],
    quiz: [
      { question: "Quel est le but des variables d'environnement en production ?",
        options: ["Ameliorer les performances", "Stockent les donnees sensibles separement du code", "Accelerer les builds", "Reduire la taille du bundle"],
        correctAnswer: 1, explanation: "Les variables d'environnement stockent les donnees de configuration sensibles separement du code." },
      { question: "Que configure vercel.json ?",
        options: ["Parametres React", "Parametres de deploiement Vercel incluant headers et redirects", "Schema de base de donnees", "Dependances"],
        correctAnswer: 1, explanation: "vercel.json configure les parametres de deploiement incluant headers de securite et redirects." },
      { question: "Comment stocker les variables sensibles pour GitHub Actions ?",
        options: ["Dans README.md", "Dans GitHub Secrets", "Dans .env.local", "Dans package.json"],
        correctAnswer: 1, explanation: "GitHub Secrets chiffre les variables sensibles pour les utiliser dans les workflows." },
      { question: "Que signifie CI/CD ?",
        options: ["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment", "Create Install / Create Deploy", "Central Interface / Central Database"],
        correctAnswer: 1, explanation: "CI/CD automatise le processus de test, integration et deploiement du code." }
    ],
    challenge: { title: "Defi : Configurer le deploiement complet",
      description: "Creez vercel.json avec les headers de securite, configurez GitHub Actions, creez un endpoint health check." },
    cheatSheet: { title: "Reference rapide de deploiement", items: [
      { title: "Commandes Vercel", content: "vercel, vercel --prod, vercel ls" },
      { title: "vercel.json", content: "headers pour la securite, redirects/rewrites pour les URLs" },
      { title: "Optimisation", content: "next/image, next/font, cache, imports dynamiques" },
      { title: "CI/CD", content: "GitHub Actions pour tests et deploiement auto" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in das Deployment", content: [
        { type: "p", text: "Deployment ist der Prozess, Ihre Anwendung Benutzern im Internet zur Verfugung zu stellen." },
        { type: "callout", title: "Was wir lernen werden", text: "Deployment auf Vercel, Umgebungsvariablen-Konfiguration, Supabase-Produktioneinrichtung, benutzerdefinierte Domain, Leistungsoptimierung, CI/CD." }
      ]},
      { title: "Vorbereitung auf das Deployment", content: [
        { type: "p", text: "Stellen Sie vor dem Deployment sicher, dass Ihr Projekt produktionsbereit ist." },
        { type: "callout", title: "Checkliste", text: "Fuhren Sie lint, type-check und build aus, uberprufen Sie .gitignore." }
      ]},
      { title: "Deployment mit Vercel", content: [
        { type: "p", text: "Vercel ist der einfachste Weg, Next.js-Apps zu deployen." },
        { type: "callout", title: "Schritte", text: "1. Zu GitHub pushen, 2. Vercel-Konto erstellen, 3. Repository importieren, 4. Env-Vars konfigurieren, 5. Deployen." }
      ]},
      { title: "Umgebungsvariablen-Konfiguration", content: [
        { type: "p", text: "Umgebungsvariablen speichern sensible Daten wie API-Schlussel." },
        { type: "callout", title: "Schlusselvariablen", text: "NEXT_PUBLIC_ Prefix fur Client, SUPABASE_SERVICE_ROLE_KEY fur Server, Clerk-Schlussel fur Auth." }
      ]},
      { title: "Supabase Produktioneinrichtung", content: [
        { type: "p", text: "Konfigurieren Sie RLS-Richtlinien, Storage-Buckets und Datenbankfunktionen." },
        { type: "callout", title: "Produktions-Checkliste", text: "RLS aktivieren, Buckets erstellen, Funktionen hinzufugen, alle Operationen testen." }
      ]},
      { title: "Benutzerdefinierte Domain", content: [
        { type: "p", text: "Verbinden Sie eine benutzerdefinierte Domain mit Ihrem Vercel-Deployment." },
        { type: "callout", title: "Domain-Setup", text: "Domain kaufen, zu Vercel hinzufugen, DNS konfigurieren, SSL ist automatisch." }
      ]},
      { title: "Leistungsoptimierung", content: [
        { type: "p", text: "Optimieren Sie Ihren Produktionsbuild mit Bildoptimierung und Caching." },
        { type: "callout", title: "Optimierungstipps", text: "Verwenden Sie next/image, optimieren Sie Schriftarten, nutzen Sie Cache und dynamische Imports." }
      ]},
      { title: "CI/CD mit GitHub Actions", content: [
        { type: "p", text: "Richten Sie Continuous Integration und Deployment mit GitHub Actions ein." },
        { type: "callout", title: "CI/CD-Vorteile", text: "Automatisches Testen, automatisches Deployment, konsistenter Build-Prozess." }
      ]}
    ],
    quiz: [
      { question: "Was ist der Zweck von Umgebungsvariablen in der Produktion?",
        options: ["Leistung verbessern", "Sensible Daten wie API-Schlussel getrennt vom Code speichern", "Builds beschleunigen", "Bundle-Größe reduzieren"],
        correctAnswer: 1, explanation: "Umgebungsvariablen speichern sensible Konfigurationsdaten getrennt vom Codebase." },
      { question: "Was konfiguriert vercel.json?",
        options: ["React-Einstellungen", "Vercel-Deployment-Einstellungen wie Headers und Redirects", "Datenbankschema", "Paketabhangigkeiten"],
        correctAnswer: 1, explanation: "vercel.json konfiguriert deployment-spezifische Einstellungen inklusive Security-Headers und Redirects." },
      { question: "Wie sollten sensible Umgebungsvariablen fur GitHub Actions gespeichert werden?",
        options: ["In README.md", "In GitHub Secrets", "In .env.local", "In package.json"],
        correctAnswer: 1, explanation: "GitHub Secrets verschlosselt sensible Variablen zur Verwendung in Workflows." },
      { question: "Was bedeutet CI/CD?",
        options: ["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment", "Create Install / Create Deploy", "Central Interface / Central Database"],
        correctAnswer: 1, explanation: "CI/CD automatisiert den Prozess des Testens, Integrierens und Deployens von Codeänderungen." }
    ],
    challenge: { title: "Herausforderung: Vollständiges Deployment einrichten",
      description: "Erstellen Sie vercel.json mit Security-Headers, richten Sie GitHub Actions ein, erstellen Sie einen Health-Check-Endpunkt." },
    cheatSheet: { title: "Deployment-Schnellreferenz", items: [
      { title: "Vercel-Befehle", content: "vercel, vercel --prod, vercel ls" },
      { title: "vercel.json", content: "headers fur Sicherheit, redirects/rewrites fur URLs" },
      { title: "Optimierung", content: "next/image, next/font, Cache, dynamische Imports" },
      { title: "CI/CD", content: "GitHub Actions fur automatisches Testen und Deployment" }
    ]}
  }
};
export default translations;
