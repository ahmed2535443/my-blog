"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clerk/04-clerk-user-management";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1] };

const challengeCode = `// الحل المتوقع لـ proxy.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

const adminRoutes = createRouteMatcher(["/admin/(.*)"]);
const teacherRoutes = createRouteMatcher(["/teacher/(.*)"]);
const studentRoutes = createRouteMatcher(["/student/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (publicRoutes(req)) return;

  if (adminRoutes(req)) {
    await auth.protect({ role: "org:admin" });
  }

  if (teacherRoutes(req)) {
    await auth.protect({ role: "org:teacher" });
  }

  if (studentRoutes(req)) {
    await auth.protect({ role: "org:student" });
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\\\.(html|css|js|jpg|jpeg|png|gif|svg|ico)$).*)",
    "/(api|trpc)(.*)",
  ],
};`;

const cheatSheetData = {
  en: {
    title: "Route Protection Patterns",
    columns: [
      {
        heading: "Middleware (proxy.ts):",
        items: [
          '<code className="inline-code">await auth.protect()</code> - Basic route protection',
          '<code className="inline-code">await auth.protect({ role: "org:admin" })</code> - Role-based protection',
          '<code className="inline-code">await auth.protect({ permission: "org:course:create" })</code> - Permission-based',
          '<code className="inline-code">createRouteMatcher()</code> - Match routes pattern',
        ],
      },
      {
        heading: "Server Components & Actions:",
        items: [
          '<code className="inline-code">const { userId } = await auth()</code> - Get user ID',
          '<code className="inline-code">if (!userId) redirect("/sign-in")</code> - Redirect if not signed in',
          '<code className="inline-code">sessionClaims?.metadata?.role</code> - Get user role',
        ],
      },
    ],
  },
  fr: {
    title: "Modèles de Protection de Routes",
    columns: [
      {
        heading: "Middleware (proxy.ts):",
        items: [
          '<code className="inline-code">await auth.protect()</code> - Protection de base',
          '<code className="inline-code">await auth.protect({ role: "org:admin" })</code> - Protection par rôle',
          '<code className="inline-code">createRouteMatcher()</code> - Correspondance de routes',
        ],
      },
      {
        heading: "Server Components & Actions:",
        items: [
          '<code className="inline-code">const { userId } = await auth()</code> - Obtenir l\'ID utilisateur',
          '<code className="inline-code">if (!userId) redirect("/sign-in")</code> - Rediriger si non connecté',
        ],
      },
    ],
  },
  de: {
    title: "Routenschutz-Muster",
    columns: [
      {
        heading: "Middleware (proxy.ts):",
        items: [
          '<code className="inline-code">await auth.protect()</code> - Basisschutz',
          '<code className="inline-code">await auth.protect({ role: "org:admin" })</code> - Rollenbasierter Schutz',
          '<code className="inline-code">createRouteMatcher()</code> - Routenmuster abgleichen',
        ],
      },
      {
        heading: "Server Components & Actions:",
        items: [
          '<code className="inline-code">const { userId } = await auth()</code> - Benutzer-ID abrufen',
          '<code className="inline-code">if (!userId) redirect("/sign-in")</code> - Umleiten wenn nicht angemeldet',
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

export default function ProtectingRoutes() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clerk", "04-protecting-routes");
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
            <CodeBlock language="javascript" code={challengeCode} />
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