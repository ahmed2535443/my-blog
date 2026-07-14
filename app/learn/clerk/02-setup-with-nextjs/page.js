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
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1], en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1] };

const challengeCode = `# الخطوة 1: إنشاء مشروع Next.js جديد
npx create-next-app@latest my-clerk-project
# اختر: JavaScript, App Router, src directory: No

# الخطوة 2: تثبيت Clerk
cd my-clerk-project
npm install @clerk/nextjs

# الخطوة 3: إنشاء ملف .env.local وأضف مفاتيح Clerk
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
# CLERK_SECRET_KEY=sk_test_...

# الخطوة 4: أضف ClerkProvider إلى app/layout.js

# الخطوة 5: أنشئ ملف proxy.ts لإعداد الوسيط

# الخطوة 6: أنشئ مسار تسجيل الدخول
# app/sign-in/[[...sign-in]]/page.js

# الخطوة 7: أنشئ مسار إنشاء حساب
# app/sign-up/[[...sign-up]]/page.js

# الخطوة 8: شغّل المشروع
npm run dev`;

const cheatSheetData = {
  ar: {
    title: "ملخص مراجعة إعداد Clerk",
    columns: [
      {
        heading: "خطوات التثبيت:",
        items: [
          '<code className="inline-code">npm install @clerk/nextjs</code> - تثبيت حزمة Clerk',
          '<code className="inline-code">.env.local</code> - إضافة المفاتيح العامة والسرية',
          '<code className="inline-code">ClerkProvider</code> - لف التطبيق في layout.js',
          '<code className="inline-code">proxy.ts</code> - وسيط لحماية المسارات',
          '<code className="inline-code">sign-in/[[...sign-in]]</code> - مسار تسجيل الدخول',
          '<code className="inline-code">sign-up/[[...sign-up]]</code> - مسار التسجيل',
        ],
      },
      {
        heading: "الأوامر الرئيسية:",
        items: [
          '<code className="inline-code">clerk init</code> - الإعداد الأولي للمشروع',
          '<code className="inline-code">clerk doctor</code> - تشخيص مشاكل الإعداد',
          '<code className="inline-code">clerk env pull</code> - سحب متغيرات البيئة من لوحة التحكم',
        ],
      },
    ],
  },
  en: {
    title: "Clerk Setup Checklist",
    columns: [
      {
        heading: "Installation Steps:",
        items: [
          '<code className="inline-code">npm install @clerk/nextjs</code> - Install Clerk package',
          '<code className="inline-code">.env.local</code> - Add publishable and secret keys',
          '<code className="inline-code">ClerkProvider</code> - Wrap app in layout.js',
          '<code className="inline-code">proxy.ts</code> - Middleware for route protection',
          '<code className="inline-code">sign-in/[[...sign-in]]</code> - Sign-in route',
          '<code className="inline-code">sign-up/[[...sign-up]]</code> - Sign-up route',
        ],
      },
      {
        heading: "Key Commands:",
        items: [
          '<code className="inline-code">clerk init</code> - Initial project setup',
          '<code className="inline-code">clerk doctor</code> - Diagnose setup issues',
          '<code className="inline-code">clerk env pull</code> - Pull env vars from dashboard',
        ],
      },
    ],
  },
  fr: {
    title: "Clerk Configuration Fiche mémo",
    columns: [
      {
        heading: "Étapes d'installation:",
        items: [
          '<code className="inline-code">npm install @clerk/nextjs</code> - Installer le package Clerk',
          '<code className="inline-code">.env.local</code> - Ajouter les clés',
          '<code className="inline-code">ClerkProvider</code> - Envelopper l\'app dans layout.js',
          '<code className="inline-code">proxy.ts</code> - Middleware pour la protection des routes',
          '<code className="inline-code">sign-in/[[...sign-in]]</code> - Route de connexion',
        ],
      },
      {
        heading: "Commandes clés:",
        items: [
          '<code className="inline-code">clerk init</code> - Configuration initiale',
          '<code className="inline-code">clerk doctor</code> - Diagnostiquer les problèmes',
        ],
      },
    ],
  },
  de: {
    title: "Clerk Einrichtung Spickzettel",
    columns: [
      {
        heading: "Installationsschritte:",
        items: [
          '<code className="inline-code">npm install @clerk/nextjs</code> - Clerk-Paket installieren',
          '<code className="inline-code">.env.local</code> - Schlüssel hinzufügen',
          '<code className="inline-code">ClerkProvider</code> - App in layout.js einbinden',
          '<code className="inline-code">proxy.ts</code> - Middleware für Routenschutz',
          '<code className="inline-code">sign-in/[[...sign-in]]</code> - Anmelderoute',
        ],
      },
      {
        heading: "Wichtige Befehle:",
        items: [
          '<code className="inline-code">clerk init</code> - Ersteinrichtung',
          '<code className="inline-code">clerk doctor</code> - Probleme diagnostizieren',
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