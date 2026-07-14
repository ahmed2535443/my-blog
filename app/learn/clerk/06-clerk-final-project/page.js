"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clerk/06-clerk-final-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1] };

const challengeCode = `// task-manager - مشروع إدارة المهام الكامل
// هيكل المشروع:

task-manager/
├── app/
│   ├── layout.js                  # ClerkProvider
│   ├── page.js                    # الصفحة الرئيسية (عامة)
│   ├── sign-in/[[...sign-in]]/page.js
│   ├── sign-up/[[...sign-up]]/page.js
│   ├── dashboard/
│   │   ├── layout.js              # محمية
│   │   ├── page.js                # لوحة التحكم
│   │   └── tasks/
│   │       ├── page.js            # جميع المهام
│   │       ├── new/page.js        # مهمة جديدة
│   │       └── [taskId]/page.js   # تعديل مهمة
│   ├── profile/page.js            # الملف الشخصي
│   ├── admin/                     # للمديرين فقط
│   │   ├── layout.js
│   │   └── page.js
│   └── api/tasks/route.js         # API
├── components/
│   ├── Header.js
│   ├── TaskCard.js
│   ├── TaskForm.js
│   └── RoleBadge.js
├── lib/prisma.js
├── prisma/schema.prisma
├── proxy.ts
└── .env.local`;

const cheatSheetData = {
  en: {
    title: "Clerk Complete Cheat Sheet",
    columns: [
      {
        heading: "Core Components:",
        items: [
          '<code className="inline-code">{"<ClerkProvider />"}</code> - App wrapper for Clerk context',
          '<code className="inline-code">{"<SignIn />"}</code> / <code className="inline-code">{"<SignUp />"}</code> - Auth UI components',
          '<code className="inline-code">{"<UserButton />"}</code> - User profile button',
          '<code className="inline-code">{"<UserProfile />"}</code> - Full profile management',
          '<code className="inline-code">{"<Show />"}</code> - Conditional rendering',
        ],
      },
      {
        heading: "Hooks & Functions:",
        items: [
          '<code className="inline-code">useUser()</code> - Access user data (client)',
          '<code className="inline-code">useAuth()</code> - Access auth state (client)',
          '<code className="inline-code">useSession()</code> - Current session info',
          '<code className="inline-code">auth()</code> - Server-side auth check',
          '<code className="inline-code">currentUser()</code> - Get full user object (server)',
          '<code className="inline-code">clerkMiddleware()</code> - Global route protection',
        ],
      },
    ],
  },
  fr: {
    title: "Clerk Fiche mémo complète",
    columns: [
      {
        heading: "Composants principaux:",
        items: [
          '<code className="inline-code">{"<ClerkProvider />"}</code> - Enveloppe pour le contexte',
          '<code className="inline-code">{"<SignIn />"}</code> / <code className="inline-code">{"<SignUp />"}</code> - Composants d\'auth',
          '<code className="inline-code">{"<UserButton />"}</code> - Bouton profil utilisateur',
          '<code className="inline-code">{"<Show />"}</code> - Rendu conditionnel',
        ],
      },
      {
        heading: "Hooks et fonctions:",
        items: [
          '<code className="inline-code">useUser()</code> - Données utilisateur (client)',
          '<code className="inline-code">useAuth()</code> - État d\'auth (client)',
          '<code className="inline-code">auth()</code> - Vérification serveur',
          '<code className="inline-code">currentUser()</code> - Objet utilisateur complet (serveur)',
          '<code className="inline-code">clerkMiddleware()</code> - Protection globale',
        ],
      },
    ],
  },
  de: {
    title: "Clerk Vollständiger Spickzettel",
    columns: [
      {
        heading: "Hauptkomponenten:",
        items: [
          '<code className="inline-code">{"<ClerkProvider />"}</code> - App-Wrapper für Clerk-Kontext',
          '<code className="inline-code">{"<SignIn />"}</code> / <code className="inline-code">{"<SignUp />"}</code> - Auth-UI-Komponenten',
          '<code className="inline-code">{"<UserButton />"}</code> - Benutzerprofil-Button',
          '<code className="inline-code">{"<Show />"}</code> - Bedingte Darstellung',
        ],
      },
      {
        heading: "Hooks & Funktionen:",
        items: [
          '<code className="inline-code">useUser()</code> - Benutzerdaten abrufen (Client)',
          '<code className="inline-code">useAuth()</code> - Auth-Status abrufen (Client)',
          '<code className="inline-code">auth()</code> - Server-seitige Auth-Prüfung',
          '<code className="inline-code">currentUser()</code> - Vollständiges Benutzerobjekt (Server)',
          '<code className="inline-code">clerkMiddleware()</code> - Globaler Routenschutz',
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
    return <CodeBlock language="javascript" code={item.text} />;
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

export default function ClerkFinalProject() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clerk", "06-clerk-final-project");
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
            <CodeBlock language="text" code={challengeCode} />
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