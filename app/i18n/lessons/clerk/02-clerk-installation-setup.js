const translations = {
  ar: {
    sections: [
      { title: "الخطوة 1: إنشاء مشروع Next.js", content: [
        { type: "p", text: "نبدأ بإنشاء مشروع Next.js جديد باستخدام الأمر التالي:" },
        { type: "code", text: "npx create-next-app@latest my-app --yes" },
        { type: "p", text: "هذا الأمر سينشئ مشروع جديد باسم <code>my-app</code> مع جميع الإعدادات الافتراضية (JavaScript, App Router, TypeScript)." },
        { type: "callout", title: "ملاحظة", text: "خيار <code>--yes</code> يوافق تلقائياً على جميع الخيارات الافتراضية. يمكنك إزالته إذا أردت تخصيص الإعدادات يدوياً." },
      ]},
      { title: "الخطوة 2: تثبيت Clerk SDK", content: [
        { type: "p", text: "انتقل إلى مجلد المشروع ثم ثبّت حزمة Clerk:" },
        { type: "code", text: "cd my-app\nnpm install @clerk/nextjs" },
        { type: "p", text: "حزمة <code>@clerk/nextjs</code> هي الحزمة الرسمية لـ Clerk مع Next.js، وتوفر جميع المكونات والدوال اللازمة للمصادقة." },
      ]},
      { title: "الخطوة 3: إنشاء ملف .env.local", content: [
        { type: "p", text: "أنشئ ملف <code>.env.local</code> في جذر المشروع وأضف مفاتيح Clerk من لوحة التحكم:" },
        { type: "code", text: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx\nNEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in\nNEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/\nNEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/" },
        { type: "callout", title: "مفتاح مهم", text: "احصل على هذه المفاتيح من لوحة تحكم Clerk على <strong>dashboard.clerk.com</strong> → اختر مشروعك → API Keys." },
        { type: "callout-accent", title: "شرح المتغيرات", text: "<code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> - المفتاح العام (يظهر في الكود العميل). <code>CLERK_SECRET_KEY</code> - المفتاح السري (يُستخدم فقط على الخادم)." },
      ]},
      { title: "الخطوة 4: إنشاء middleware.ts", content: [
        { type: "p", text: "أنشئ ملف <code>middleware.ts</code> في جذر المشروع (بجانب مجلد <code>app</code>) لحماية جميع المسارات:" },
        { type: "code", text: "// middleware.ts\nimport { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isPublicRoute = createRouteMatcher([\n  '/',\n  '/learn(.*)',\n  '/sign-in(.*)',\n  '/sign-up(.*)',\n]);\n\nexport default clerkMiddleware(async (auth, request) => {\n  if (!isPublicRoute(request)) {\n    await auth.protect();\n  }\n});\n\nexport const config = {\n  matcher: [\n    '/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\n    '/(api|trpc)(.*)',\n  ],\n};"},
        { type: "callout", title: "ما هو middleware؟", text: "الـ middleware يُنفَّذ قبل كل طلب. في هذه الحالة، يتحقق Clerk من هوية المستخدم قبل السماح بالوصول للصفحات المحمية." },
        { type: "callout-primary", title: "المسارات العامة", text: "الصفحة الرئيسية (<code>/</code>) والمنهج (<code>/learn</code>) وصفحات تسجيل الدخول والتسجيل مفتوحة للجميع without authentication." },
      ]},
      { title: "الخطوة 5: إضافة ClerkProvider في layout.js", content: [
        { type: "p", text: "عدّل ملف <code>app/layout.js</code> للف التطبيق بـ <code>ClerkProvider</code>:" },
        { type: "code", text: "import { ClerkProvider } from '@clerk/nextjs';\n\nexport default function RootLayout({ children }) {\n  return (\n    <ClerkProvider>\n      <html lang=\"ar\" dir=\"rtl\">\n        <body>{children}</body>\n      </html>\n    </ClerkProvider>\n  );\n}" },
        { type: "callout", title: "لماذا ClerkProvider؟", text: "يُوفّر ClerkProvider سياق (context) لجميع مكونات Clerk في التطبيق. بدونه، لن تعمل مكونات المصادقة." },
      ]},
      { title: "الخطوة 6: إنشاء صفحة Sign-In", content: [
        { type: "p", text: "أنشئ ملف <code>app/sign-in/[[...sign-in]]/page.js</code>:" },
        { type: "code", text: "// app/sign-in/[[...sign-in]]/page.js\nimport { SignIn } from '@clerk/nextjs';\n\nexport default function SignInPage() {\n  return (\n    <div className=\"flex justify-center items-center min-h-screen\">\n      <SignIn />\n    </div>\n  );\n}" },
        { type: "callout-primary", title: "ما هو [[...sign-in]]؟", text: "هذا هو Catch-all route في Next.js. المكون <code>[[...sign-in]]</code> يلتقط جميع المسارات الفرعية التي تبدأ بـ <code>/sign-in</code>." },
      ]},
      { title: "الخطوة 7: إنشاء صفحة Sign-Up", content: [
        { type: "p", text: "أنشئ ملف <code>app/sign-up/[[...sign-up]]/page.js</code>:" },
        { type: "code", text: "// app/sign-up/[[...sign-up]]/page.js\nimport { SignUp } from '@clerk/nextjs';\n\nexport default function SignUpPage() {\n  return (\n    <div className=\"flex justify-center items-center min-h-screen\">\n      <SignUp />\n    </div>\n  );\n}" },
      ]},
      { title: "الخطوة 8: إنشاء صفحة Dashboard محمية", content: [
        { type: "p", text: "أنشئ ملف <code>app/dashboard/page.js</code> مع حماية تلقائية:" },
        { type: "code", text: "// app/dashboard/page.js\nimport { currentUser } from '@clerk/nextjs/server';\nimport { auth } from '@clerk/nextjs/server';\nimport { redirect } from 'next/navigation';\n\nexport default async function DashboardPage() {\n  // حماية الصفحة - إذا لم يكن المستخدم مسجلاً، يُحوّل لصفحة تسجيل الدخول\n  const { userId } = await auth();\n  if (!userId) {\n    redirect('/sign-in');\n  }\n\n  // جلب بيانات المستخدم\n  const user = await currentUser();\n\n  return (\n    <div className=\"container mx-auto p-8\">\n      <h1 className=\"text-3xl font-bold mb-4\">مرحباً {user.firstName}</h1>\n      <p className=\"mb-2\">البريد الإلكتروني: {user.emailAddresses[0].emailAddress}</p>\n      <p>معرف المستخدم: {user.id}</p>\n    </div>\n  );\n}" },
        { type: "callout", title: "طرقا للحماية", text: "1) <code>auth()</code> - للتحقق من userId يدوياً. 2) <code>auth.protect()</code> - للحماية التلقائية (يرمي خطأ إذا لم يكن المستخدم مسجلاً)." },
      ]},
      { title: "الخطوة 9: تعديل الصفحة الرئيسية", content: [
        { type: "p", text: "عدّل <code>app/page.js</code> لإظهار محتوى مختلف حسب حالة تسجيل الدخول:" },
        { type: "code", text: "// app/page.js\nimport { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';\n\nexport default function Home() {\n  return (\n    <div className=\"container mx-auto p-8\">\n      <h1>مرحباً بك في تطبيقنا</h1>\n\n      {/* يظهر للمستخدم غير المسجل */}\n      <SignedOut>\n        <p>سجّل دخولك للوصول لل Dashboard</p>\n        <SignInButton />\n      </SignedOut>\n\n      {/* يظهر للمستخدم المسجل */}\n      <SignedIn>\n        <p>أنت مسجل الدخول!</p>\n        <UserButton />\n        <a href=\"/dashboard\">الذهاب لل Dashboard</a>\n      </SignedIn>\n    </div>\n  );\n}" },
        { type: "callout-accent", title: "المكونات الشرطية", text: "<code>SignedIn</code> يعرض محتواه فقط للمستخدم المسجل. <code>SignedOut</code> يعرض محتواه فقط للمستخدم غير المسجل." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "أنشئ مشروع Next.js بـ <code>npx create-next-app@latest my-app --yes</code>" },
        { type: "li", text: "ثبّت Clerk بـ <code>npm install @clerk/nextjs</code>" },
        { type: "li", text: "أنشئ <code>.env.local</code> بمفاتيح Clerk من لوحة التحكم" },
        { type: "li", text: "أنشئ <code>middleware.ts</code> لحماية المسارات" },
        { type: "li", text: "أضف <code>ClerkProvider</code> في <code>app/layout.js</code>" },
        { type: "li", text: "أنشئ صفحات Sign-In و Sign-Up باستخدام المكونات المدمجة" },
        { type: "li", text: "أنشئ Dashboard محمي باستخدام <code>auth()</code> و <code>currentUser()</code>" },
        { type: "li", text: "استخدم <code>SignedIn</code> و <code>SignedOut</code> للمحتوى الشرطي" },
      ]}
    ],
    quiz: [
      { question: "ما هو الأمر الذي ينشئ مشروع Next.js جديد؟", options: ["npm init next-app", "npx create-next-app@latest my-app --yes", "next create my-app", "create-next-app my-app"], explanation: "الصحيح هو npx create-next-app@latest my-app --yes الذي ينشئ مشروع جديد مع جميع الإعدادات الافتراضية." },
      { question: "أين تحصل على مفاتيح Clerk؟", options: ["من GitHub", "من لوحة تحكم Clerk على dashboard.clerk.com", "من npm", "من ملف package.json"], explanation: "احصل على المفاتيح من لوحة تحكم Clerk → اختر مشروعك → API Keys." },
      { question: "ما هو ملف middleware.ts؟", options: ["ملف لإعداد قاعدة بيانات", "ملف يُنفَّذ قبل كل طلب لحماية المسارات", "ملف للـ CSS", "ملف لإعداد TypeScript"], explanation: "middleware.ts يُنفَّذ قبل كل طلب ويثبت من هوية المستخدم قبل السماح بالوصول للصفحات المحمية." },
    ],
    challenge: { title: "步骤 1-5: الإعداد الأساسي", description: "أنشئ مشروع Next.js جديد، ثبّت Clerk، أنشئ .env.local، أنشئ middleware.ts، وأضف ClerkProvider في layout.js." },
    cheatSheet: { title: "ملخص إعداد Clerk الشامل", columns: [
      { heading: "الخطوات:", items: [
        "1. npx create-next-app@latest my-app --yes",
        "2. npm install @clerk/nextjs",
        "3. إنشاء .env.local بمفاتيح Clerk",
        "4. إنشاء middleware.ts لحماية المسارات",
        "5. إضافة ClerkProvider في layout.js",
        "6. إنشاء صفحة Sign-In",
        "7. إ立案 صفحة Sign-Up",
        "8. إنشاء Dashboard محمي",
        "9. تعديل الصفحة الرئيسية مع SignedIn/SignedOut",
      ]},
      { heading: "الكود الأساسي:", code: "// .env.local\nNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx", codeLanguage: "bash" },
      { heading: "middleware.ts:", code: "import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isPublicRoute = createRouteMatcher(['/']);\n\nexport default clerkMiddleware(async (auth, req) => {\n  if (!isPublicRoute(req)) await auth.protect();\n});", codeLanguage: "typescript" },
      { heading: "الصفحات:", items: [
        "sign-in/[[...sign-in]]/page.js → <SignIn />",
        "sign-up/[[...sign-up]]/page.js → <SignUp />",
        "dashboard/page.js → auth() + currentUser()",
        "page.js → <SignedIn> + <SignedOut>",
      ]},
    ]},
    interviewQuestions: [
      { q: "كيف تُعد Clerk مع Next.js؟", a: "ثبّت clerk-sdk-webk، أضف middleware.ts، وأضف ClerkProvider.", difficulty: "easy" },
    ],
    tricks: [
      { title: "استخدم Clerk Dashboard", description: "لتفعيل مزودات تسجيل الدخول بدلاً من الكود", icon: "brain" },
    ]
  },
  en: {
    sections: [
      { title: "Step 1: Create Next.js Project", content: [
        { type: "p", text: "Start by creating a new Next.js project using this command:" },
        { type: "code", text: "npx create-next-app@latest my-app --yes" },
        { type: "p", text: "This command creates a new project named <code>my-app</code> with all default settings (JavaScript, App Router, TypeScript)." },
        { type: "callout", title: "Note", text: "The <code>--yes</code> flag auto-accepts all default options. Remove it if you want to customize settings manually." },
      ]},
      { title: "Step 2: Install Clerk SDK", content: [
        { type: "p", text: "Navigate to the project folder and install Clerk:" },
        { type: "code", text: "cd my-app\nnpm install @clerk/nextjs" },
        { type: "p", text: "The <code>@clerk/nextjs</code> package is the official Clerk SDK for Next.js, providing all components and functions needed for authentication." },
      ]},
      { title: "Step 3: Create .env.local File", content: [
        { type: "p", text: "Create a <code>.env.local</code> file in the project root and add your Clerk keys:" },
        { type: "code", text: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx\nNEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in\nNEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/\nNEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/" },
        { type: "callout", title: "Important Key", text: "Get these keys from the Clerk dashboard at <strong>dashboard.clerk.com</strong> → Select your project → API Keys." },
        { type: "callout-accent", title: "Variable Explanation", text: "<code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> - Public key (appears in client code). <code>CLERK_SECRET_KEY</code> - Secret key (used only on server)." },
      ]},
      { title: "Step 4: Create middleware.ts", content: [
        { type: "p", text: "Create a <code>middleware.ts</code> file in the project root (next to the <code>app</code> folder) to protect all routes:" },
        { type: "code", text: "// middleware.ts\nimport { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isPublicRoute = createRouteMatcher([\n  '/',\n  '/learn(.*)',\n  '/sign-in(.*)',\n  '/sign-up(.*)',\n]);\n\nexport default clerkMiddleware(async (auth, request) => {\n  if (!isPublicRoute(request)) {\n    await auth.protect();\n  }\n});\n\nexport const config = {\n  matcher: [\n    '/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\n    '/(api|trpc)(.*)',\n  ],\n};"},
        { type: "callout", title: "What is middleware?", text: "Middleware executes before every request. In this case, Clerk verifies user identity before allowing access to protected pages." },
        { type: "callout-primary", title: "Public Routes", text: "The homepage (<code>/</code>), curriculum (<code>/learn</code>), and sign-in/sign-up pages are open to everyone without authentication." },
      ]},
      { title: "Step 5: Add ClerkProvider to layout.js", content: [
        { type: "p", text: "Edit <code>app/layout.js</code> to wrap your app with <code>ClerkProvider</code>:" },
        { type: "code", text: "import { ClerkProvider } from '@clerk/nextjs';\n\nexport default function RootLayout({ children }) {\n  return (\n    <ClerkProvider>\n      <html lang=\"ar\" dir=\"rtl\">\n        <body>{children}</body>\n      </html>\n    </ClerkProvider>\n  );\n}" },
        { type: "callout", title: "Why ClerkProvider?", text: "ClerkProvider provides context for all Clerk components in your app. Without it, authentication components won't work." },
      ]},
      { title: "Step 6: Create Sign-In Page", content: [
        { type: "p", text: "Create <code>app/sign-in/[[...sign-in]]/page.js</code>:" },
        { type: "code", text: "// app/sign-in/[[...sign-in]]/page.js\nimport { SignIn } from '@clerk/nextjs';\n\nexport default function SignInPage() {\n  return (\n    <div className=\"flex justify-center items-center min-h-screen\">\n      <SignIn />\n    </div>\n  );\n}" },
        { type: "callout-primary", title: "What is [[...sign-in]]?", text: "This is a Catch-all route in Next.js. The <code>[[...sign-in]]</code> component captures all sub-routes starting with <code>/sign-in</code>." },
      ]},
      { title: "Step 7: Create Sign-Up Page", content: [
        { type: "p", text: "Create <code>app/sign-up/[[...sign-up]]/page.js</code>:" },
        { type: "code", text: "// app/sign-up/[[...sign-up]]/page.js\nimport { SignUp } from '@clerk/nextjs';\n\nexport default function SignUpPage() {\n  return (\n    <div className=\"flex justify-center items-center min-h-screen\">\n      <SignUp />\n    </div>\n  );\n}" },
      ]},
      { title: "Step 8: Create Protected Dashboard", content: [
        { type: "p", text: "Create <code>app/dashboard/page.js</code> with automatic protection:" },
        { type: "code", text: "// app/dashboard/page.js\nimport { currentUser } from '@clerk/nextjs/server';\nimport { auth } from '@clerk/nextjs/server';\nimport { redirect } from 'next/navigation';\n\nexport default async function DashboardPage() {\n  const { userId } = await auth();\n  if (!userId) {\n    redirect('/sign-in');\n  }\n\n  const user = await currentUser();\n\n  return (\n    <div className=\"container mx-auto p-8\">\n      <h1 className=\"text-3xl font-bold mb-4\">Welcome {user.firstName}</h1>\n      <p className=\"mb-2\">Email: {user.emailAddresses[0].emailAddress}</p>\n      <p>User ID: {user.id}</p>\n    </div>\n  );\n}" },
        { type: "callout", title: "Two Protection Methods", text: "1) <code>auth()</code> - Manually check userId. 2) <code>auth.protect()</code> - Automatic protection (throws error if not authenticated)." },
      ]},
      { title: "Step 9: Modify Home Page", content: [
        { type: "p", text: "Edit <code>app/page.js</code> to show different content based on auth state:" },
        { type: "code", text: "// app/page.js\nimport { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';\n\nexport default function Home() {\n  return (\n    <div className=\"container mx-auto p-8\">\n      <h1>Welcome to our app</h1>\n\n      {/* Shown to unauthenticated users */}\n      <SignedOut>\n        <p>Sign in to access the Dashboard</p>\n        <SignInButton />\n      </SignedOut>\n\n      {/* Shown to authenticated users */}\n      <SignedIn>\n        <p>You are signed in!</p>\n        <UserButton />\n        <a href=\"/dashboard\">Go to Dashboard</a>\n      </SignedIn>\n    </div>\n  );\n}" },
        { type: "callout-accent", title: "Conditional Components", text: "<code>SignedIn</code> renders its content only for authenticated users. <code>SignedOut</code> renders its content only for unauthenticated users." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Create Next.js project with <code>npx create-next-app@latest my-app --yes</code>" },
        { type: "li", text: "Install Clerk with <code>npm install @clerk/nextjs</code>" },
        { type: "li", text: "Create <code>.env.local</code> with Clerk keys from dashboard" },
        { type: "li", text: "Create <code>middleware.ts</code> for route protection" },
        { type: "li", text: "Add <code>ClerkProvider</code> to <code>app/layout.js</code>" },
        { type: "li", text: "Create Sign-In and Sign-Up pages with built-in components" },
        { type: "li", text: "Create protected Dashboard using <code>auth()</code> and <code>currentUser()</code>" },
        { type: "li", text: "Use <code>SignedIn</code> and <code>SignedOut</code> for conditional content" },
      ]}
    ],
    quiz: [
      { question: "Which command creates a new Next.js project?", options: ["npm init next-app", "npx create-next-app@latest my-app --yes", "next create my-app", "create-next-app my-app"], explanation: "The correct answer is npx create-next-app@latest my-app --yes which creates a new project with all default settings." },
      { question: "Where do you get Clerk keys?", options: ["From GitHub", "From Clerk dashboard at dashboard.clerk.com", "From npm", "From package.json"], explanation: "Get keys from Clerk dashboard → Select your project → API Keys." },
      { question: "What is the middleware.ts file?", options: ["A file for database setup", "A file that executes before every request to protect routes", "A CSS file", "A TypeScript config file"], explanation: "middleware.ts executes before every request and verifies user identity before allowing access to protected pages." },
    ],
    challenge: { title: "Steps 1-5: Basic Setup", description: "Create a new Next.js project, install Clerk, create .env.local, create middleware.ts, and add ClerkProvider to layout.js." },
    cheatSheet: { title: "Complete Clerk Setup Cheat Sheet", columns: [
      { heading: "Steps:", items: [
        "1. npx create-next-app@latest my-app --yes",
        "2. npm install @clerk/nextjs",
        "3. Create .env.local with Clerk keys",
        "4. Create middleware.ts for route protection",
        "5. Add ClerkProvider to layout.js",
        "6. Create Sign-In page",
        "7. Create Sign-Up page",
        "8. Create protected Dashboard",
        "9. Modify home page with SignedIn/SignedOut",
      ]},
      { heading: "Basic Code:", code: "// .env.local\nNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx", codeLanguage: "bash" },
      { heading: "middleware.ts:", code: "import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isPublicRoute = createRouteMatcher(['/']);\n\nexport default clerkMiddleware(async (auth, req) => {\n  if (!isPublicRoute(req)) await auth.protect();\n});", codeLanguage: "typescript" },
      { heading: "Pages:", items: [
        "sign-in/[[...sign-in]]/page.js → <SignIn />",
        "sign-up/[[...sign-up]]/page.js → <SignUp />",
        "dashboard/page.js → auth() + currentUser()",
        "page.js → <SignedIn> + <SignedOut>",
      ]},
    ]},
    interviewQuestions: [
      { q: "How do you set up Clerk with Next.js?", a: "Install @clerk/nextjs, add middleware.ts, and add ClerkProvider.", difficulty: "easy" },
    ],
    tricks: [
      { title: "Use Clerk Dashboard", description: "Enable sign-in providers from the dashboard instead of code", icon: "brain" },
    ]
  },
  fr: {
    sections: [
      { title: "Étape 1 : Créer le projet Next.js", content: [
        { type: "p", text: "Commencez par créer un nouveau projet Next.js avec cette commande :" },
        { type: "code", text: "npx create-next-app@latest my-app --yes" },
        { type: "p", text: "Cette commande crée un nouveau projet nommé <code>my-app</code> avec tous les paramètres par défaut." },
      ]},
      { title: "Étape 2 : Installer Clerk SDK", content: [
        { type: "code", text: "cd my-app\nnpm install @clerk/nextjs" },
      ]},
      { title: "Étape 3 : Créer .env.local", content: [
        { type: "p", text: "Créez un fichier <code>.env.local</code> à la racine du projet :" },
        { type: "code", text: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx\nNEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in\nNEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/\nNEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/" },
      ]},
      { title: "Étape 4 : Créer middleware.ts", content: [
        { type: "p", text: "Créez <code>middleware.ts</code> à la racine pour protéger les routes :" },
        { type: "code", text: "import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isPublicRoute = createRouteMatcher(['/']);\n\nexport default clerkMiddleware(async (auth, req) => {\n  if (!isPublicRoute(req)) await auth.protect();\n});" },
      ]},
      { title: "Étape 5 : Ajouter ClerkProvider", content: [
        { type: "code", text: "import { ClerkProvider } from '@clerk/nextjs';\n\nexport default function RootLayout({ children }) {\n  return (\n    <ClerkProvider>\n      <html><body>{children}</body></html>\n    </ClerkProvider>\n  );\n}" },
      ]},
      { title: "Étape 6-7 : Sign-In et Sign-Up", content: [
        { type: "code", text: "// app/sign-in/[[...sign-in]]/page.js\nimport { SignIn } from '@clerk/nextjs';\nexport default function SignInPage() {\n  return <SignIn />;\n}\n\n// app/sign-up/[[...sign-up]]/page.js\nimport { SignUp } from '@clerk/nextjs';\nexport default function SignUpPage() {\n  return <SignUp />;\n}" },
      ]},
      { title: "Étape 8 : Dashboard protégé", content: [
        { type: "code", text: "import { auth } from '@clerk/nextjs/server';\nimport { currentUser } from '@clerk/nextjs/server';\n\nexport default async function DashboardPage() {\n  const { userId } = await auth();\n  if (!userId) redirect('/sign-in');\n  const user = await currentUser();\n  return <div>Bonjour {user.firstName}</div>;\n}" },
      ]},
      { title: "Étape 9 : Page d'accueil", content: [
        { type: "code", text: "import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';\n\nexport default function Home() {\n  return (\n    <>\n      <SignedOut><SignInButton /></SignedOut>\n      <SignedIn><UserButton /></SignedIn>\n    </>\n  );\n}" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Créez le projet avec npx create-next-app" },
        { type: "li", text: "Installez Clerk avec npm install @clerk/nextjs" },
        { type: "li", text: "Créez .env.local avec les clés" },
        { type: "li", text: "Créez middleware.ts pour la protection" },
        { type: "li", text: "Ajoutez ClerkProvider dans layout.js" },
        { type: "li", text: "Créez les pages Sign-In et Sign-Up" },
        { type: "li", text: "Créez un Dashboard protégé" },
        { type: "li", text: "Utilisez SignedIn/SignedOut pour le contenu conditionnel" },
      ]}
    ],
    quiz: [
      { question: "Quelle commande crée un projet Next.js ?", options: ["npm init next-app", "npx create-next-app@latest my-app --yes", "next create"], explanation: "La bonne réponse est npx create-next-app@latest my-app --yes." },
      { question: "Où obtenir les clés Clerk ?", options: ["De GitHub", "Du dashboard Clerk à dashboard.clerk.com", "De npm"], explanation: "Obtenez les clés du dashboard Clerk → Projet → API Keys." },
    ],
    challenge: { title: "Étapes 1-5 : Setup de base", description: "Créez un projet Next.js, installez Clerk, créez .env.local, middleware.ts, et ajoutez ClerkProvider." },
    cheatSheet: { title: "Configuration complète Clerk", items: [
      { term: "npx create-next-app", definition: "Créer le projet" },
      { term: "npm install @clerk/nextjs", definition: "Installer Clerk" },
      { term: ".env.local", definition: "Clés Clerk" },
      { term: "middleware.ts", definition: "Protection des routes" },
      { term: "ClerkProvider", definition: "Envelopper l'application" },
      { term: "<SignIn />", definition: "Page de connexion" },
      { term: "<SignUp />", definition: "Page d'inscription" },
      { term: "auth()", definition: "Vérification serveur" },
    ]}
  },
  de: {
    sections: [
      { title: "Schritt 1: Next.js-Projekt erstellen", content: [
        { type: "p", text: "Erstellen Sie ein neues Next.js-Projekt mit diesem Befehl:" },
        { type: "code", text: "npx create-next-app@latest my-app --yes" },
      ]},
      { title: "Schritt 2: Clerk SDK installieren", content: [
        { type: "code", text: "cd my-app\nnpm install @clerk/nextjs" },
      ]},
      { title: "Schritt 3: .env.local erstellen", content: [
        { type: "code", text: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx\nNEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in\nNEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/\nNEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/" },
      ]},
      { title: "Schritt 4: middleware.ts erstellen", content: [
        { type: "code", text: "import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isPublicRoute = createRouteMatcher(['/']);\n\nexport default clerkMiddleware(async (auth, req) => {\n  if (!isPublicRoute(req)) await auth.protect();\n});" },
      ]},
      { title: "Schritt 5: ClerkProvider hinzufügen", content: [
        { type: "code", text: "import { ClerkProvider } from '@clerk/nextjs';\n\nexport default function RootLayout({ children }) {\n  return (\n    <ClerkProvider>\n      <html><body>{children}</body></html>\n    </ClerkProvider>\n  );\n}" },
      ]},
      { title: "Schritt 6-7: Sign-In und Sign-Up", content: [
        { type: "code", text: "// app/sign-in/[[...sign-in]]/page.js\nimport { SignIn } from '@clerk/nextjs';\nexport default function SignInPage() {\n  return <SignIn />;\n}\n\n// app/sign-up/[[...sign-up]]/page.js\nimport { SignUp } from '@clerk/nextjs';\nexport default function SignUpPage() {\n  return <SignUp />;\n}" },
      ]},
      { title: "Schritt 8: Geschütztes Dashboard", content: [
        { type: "code", text: "import { auth, currentUser } from '@clerk/nextjs/server';\n\nexport default async function DashboardPage() {\n  const { userId } = await auth();\n  if (!userId) redirect('/sign-in');\n  const user = await currentUser();\n  return <div>Hallo {user.firstName}</div>;\n}" },
      ]},
      { title: "Schritt 9: Startseite", content: [
        { type: "code", text: "import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';\n\nexport default function Home() {\n  return (\n    <>\n      <SignedOut><SignInButton /></SignedOut>\n      <SignedIn><UserButton /></SignedIn>\n    </>\n  );\n}" },
      ]},
      { title: "Zusammenfassung", content: [
        { type: "li", text: "Projekt erstellen mit npx create-next-app" },
        { type: "li", text: "Clerk installieren mit npm install @clerk/nextjs" },
        { type: "li", text: ".env.local mit Schlüsseln erstellen" },
        { type: "li", text: "middleware.ts für Routenschutz erstellen" },
        { type: "li", text: "ClerkProvider in layout.js hinzufügen" },
        { type: "li", text: "Sign-In und Sign-Up Seiten erstellen" },
        { type: "li", text: "Geschütztes Dashboard erstellen" },
        { type: "li", text: "SignedIn/SignedOut für bedingte Inhalte verwenden" },
      ]}
    ],
    quiz: [
      { question: "Welcher Befehl erstellt ein Next.js-Projekt?", options: ["npm init next-app", "npx create-next-app@latest my-app --yes", "next create"], explanation: "Die richtige Antwort ist npx create-next-app@latest my-app --yes." },
      { question: "Wo bekommt man Clerk-Schlüssel?", options: ["Von GitHub", "Vom Clerk-Dashboard unter dashboard.clerk.com", "Von npm"], explanation: "Holen Sie sich die Schlüssel vom Clerk-Dashboard → Projekt → API Keys." },
    ],
    challenge: { title: "Schritte 1-5: Grundsetup", description: "Erstellen Sie ein Next.js-Projekt, installieren Sie Clerk, erstellen Sie .env.local, middleware.ts und fügen Sie ClerkProvider hinzu." },
    cheatSheet: { title: "Vollständige Clerk-Einrichtung", items: [
      { term: "npx create-next-app", definition: "Projekt erstellen" },
      { term: "npm install @clerk/nextjs", definition: "Clerk installieren" },
      { term: ".env.local", definition: "Clerk-Schlüssel" },
      { term: "middleware.ts", definition: "Routenschutz" },
      { term: "ClerkProvider", definition: "App einbinden" },
      { term: "<SignIn />", definition: "Anmeldeseite" },
      { term: "<SignUp />", definition: "Registrierungsseite" },
      { term: "auth()", definition: "Server-Verifizierung" },
    ]}
  }
};
export default translations;
