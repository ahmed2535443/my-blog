"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clerk/02-clerk-installation-setup";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 0], en: [1, 1, 0], fr: [1, 1, 0], de: [1, 1, 0] };

const challengeCode = `# الخطوة 1: إنشاء مشروع Next.js جديد
npx create-next-app@latest my-app --yes

# الخطوة 2: تثبيت Clerk
cd my-app
npm install @clerk/nextjs

# الخطوة 3: إنشاء ملف .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# الخطوة 4: إنشاء middleware.ts في جذر المشروع

# الخطوة 5: إضافة ClerkProvider في app/layout.js

# الخطوة 6: إنشاء صفحة Sign-In
# app/sign-in/[[...sign-in]]/page.js

# الخطوة 7: إنشاء صفحة Sign-Up
# app/sign-up/[[...sign-up]]/page.js

# الخطوة 8: إنشاء صفحة Dashboard محمية
# app/dashboard/page.js

# الخطوة 9: تعديل الصفحة الرئيسية
# app/page.js مع SignedIn و SignedOut

# شغّل المشروع
npm run dev`;

const cheatSheetData = {
  ar: {
    title: "ملخص إعداد Clerk الشامل",
    columns: [
      {
        heading: "الخطوات:",
        items: [
          "1. npx create-next-app@latest my-app --yes",
          "2. npm install @clerk/nextjs",
          "3. إنشاء .env.local بمفاتيح Clerk",
          "4. إنشاء middleware.ts لحماية المسارات",
          "5. إضافة ClerkProvider في layout.js",
          "6. إنشاء صفحة Sign-In",
          "7. إنشاء صفحة Sign-Up",
          "8. إنشاء Dashboard محمي",
          "9. تعديل الصفحة الرئيسية مع SignedIn/SignedOut",
        ],
      },
      {
        heading: "الكود الأساسي:",
        code: '// .env.local\nNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx\n\n// middleware.ts\nimport { clerkMiddleware, createRouteMatcher } from \'@clerk/nextjs/server\';\nconst isPublicRoute = createRouteMatcher([\'/\']);\nexport default clerkMiddleware(async (auth, req) => {\n  if (!isPublicRoute(req)) await auth.protect();\n});',
        codeLanguage: "typescript",
      },
      {
        heading: "الصفحات:",
        items: [
          "sign-in/[[...sign-in]]/page.js → <SignIn />",
          "sign-up/[[...sign-up]]/page.js → <SignUp />",
          "dashboard/page.js → auth() + currentUser()",
          "page.js → <SignedIn> + <SignedOut>",
        ],
      },
    ],
  },
  en: {
    title: "Complete Clerk Setup Cheat Sheet",
    columns: [
      {
        heading: "Steps:",
        items: [
          "1. npx create-next-app@latest my-app --yes",
          "2. npm install @clerk/nextjs",
          "3. Create .env.local with Clerk keys",
          "4. Create middleware.ts for route protection",
          "5. Add ClerkProvider to layout.js",
          "6. Create Sign-In page",
          "7. Create Sign-Up page",
          "8. Create protected Dashboard",
          "9. Modify home page with SignedIn/SignedOut",
        ],
      },
      {
        heading: "Basic Code:",
        code: '// .env.local\nNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx\n\n// middleware.ts\nimport { clerkMiddleware, createRouteMatcher } from \'@clerk/nextjs/server\';\nconst isPublicRoute = createRouteMatcher([\'/\']);\nexport default clerkMiddleware(async (auth, req) => {\n  if (!isPublicRoute(req)) await auth.protect();\n});',
        codeLanguage: "typescript",
      },
      {
        heading: "Pages:",
        items: [
          "sign-in/[[...sign-in]]/page.js → <SignIn />",
          "sign-up/[[...sign-up]]/page.js → <SignUp />",
          "dashboard/page.js → auth() + currentUser()",
          "page.js → <SignedIn> + <SignedOut>",
        ],
      },
    ],
  },
  fr: {
    title: "Configuration complète Clerk",
    columns: [
      {
        heading: "Étapes:",
        items: [
          "1. npx create-next-app@latest my-app --yes",
          "2. npm install @clerk/nextjs",
          "3. Créer .env.local avec les clés Clerk",
          "4. Créer middleware.ts pour la protection",
          "5. Ajouter ClerkProvider dans layout.js",
          "6. Créer la page Sign-In",
          "7. Créer la page Sign-Up",
          "8. Créer un Dashboard protégé",
          "9. Modifier la page d'accueil avec SignedIn/SignedOut",
        ],
      },
      {
        heading: "Code de base:",
        code: '// .env.local\nNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx',
        codeLanguage: "bash",
      },
      {
        heading: "Pages:",
        items: [
          "sign-in/[[...sign-in]]/page.js → <SignIn />",
          "sign-up/[[...sign-up]]/page.js → <SignUp />",
          "dashboard/page.js → auth() + currentUser()",
          "page.js → <SignedIn> + <SignedOut>",
        ],
      },
    ],
  },
  de: {
    title: "Vollständige Clerk-Einrichtung",
    columns: [
      {
        heading: "Schritte:",
        items: [
          "1. npx create-next-app@latest my-app --yes",
          "2. npm install @clerk/nextjs",
          "3. .env.local mit Clerk-Schlüsseln erstellen",
          "4. middleware.ts für Routenschutz erstellen",
          "5. ClerkProvider in layout.js hinzufügen",
          "6. Sign-In-Seite erstellen",
          "7. Sign-Up-Seite erstellen",
          "8. Geschütztes Dashboard erstellen",
          "9. Startseite mit SignedIn/SignedOut anpassen",
        ],
      },
      {
        heading: "Grundcode:",
        code: '// .env.local\nNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx\nCLERK_SECRET_KEY=sk_test_xxx',
        codeLanguage: "bash",
      },
      {
        heading: "Seiten:",
        items: [
          "sign-in/[[...sign-in]]/page.js → <SignIn />",
          "sign-up/[[...sign-up]]/page.js → <SignUp />",
          "dashboard/page.js → auth() + currentUser()",
          "page.js → <SignedIn> + <SignedOut>",
        ],
      },
    ],
  },
};

function renderContent(item) {
  if (item.type === "p") {
    return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  }
  if (item.type === "li") {
    return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  }
  if (item.type === "ol") {
    return <ol dangerouslySetInnerHTML={{ __html: item.text }} />;
  }
  if (item.type === "code") {
    return <CodeBlock language="bash" code={item.text} />;
  }
  if (item.type === "callout") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
          💡 {item.title}:
        </p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  if (item.type === "callout-accent") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
          ✅ {item.title}:
        </p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  if (item.type === "callout-primary") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
          🔍 {item.title}:
        </p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  return null;
}

export default function SetupWithNextjs() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clerk", "02-setup-with-nextjs");
  const content = rawTranslations[lang] || rawTranslations.en;

  if (!content) return null;

  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {content.sections.map((section, i) => (
          <LessonSection key={i} title={section.title}>
            {section.content.map((item, j) => (
              <div key={j}>{renderContent(item)}</div>
            ))}
          </LessonSection>
        ))}

        {content.quiz && content.quiz.map((q, i) => (
          <Quiz
            key={i}
            question={q.question}
            options={q.options}
            correctAnswer={answers[i]}
            explanation={q.explanation}
          />
        ))}

        {content.challenge && (
          <Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>
            <CodeBlock language="bash" code={challengeCode} />
          </Challenge>
        )}

        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                {col.items && (
                  <ul className="text-sm space-y-1">
                    {col.items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
                {col.code && <CodeBlock language={col.codeLanguage || "html"} code={col.code} />}
              </div>
            ))}
          </div>
        </CheatSheet>

        <LessonExtras content={content} />

        <LessonNavigation
          prevLesson={lessonInfo.prevLesson}
          prevStage={lessonInfo.prevLessonStage}
          nextLesson={lessonInfo.nextLesson}
          nextStage={lessonInfo.nextLessonStage}
        />
      </div>
    </div>
  );
}
