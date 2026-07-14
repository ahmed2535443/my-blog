"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clerk/05-clerk-advanced";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1] };

const challengeCode = `"use client";

import { useUser, useAuth, useSessionList } from "@clerk/nextjs";
import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const { has, signOut } = useAuth();
  const { sessions } = useSessionList();

  if (!isLoaded) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">الملف الشخصي</h1>

        {/* معلومات المستخدم */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex items-center gap-4">
            <img
              src={user?.imageUrl}
              alt={user?.fullName}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{user?.fullName}</h2>
              <p className="text-gray-500">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </div>

        {/* الصلاحيات */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="font-bold mb-3">الصلاحيات</h3>
          <div className="flex gap-2">
            {has({ role: "org:admin" }) && (
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                مدير
              </span>
            )}
            {has({ role: "org:teacher" }) && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                معلم
              </span>
            )}
            {has({ role: "org:student" }) && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                طالب
              </span>
            )}
          </div>
        </div>

        {/* الجلسات */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="font-bold mb-3">الجلسات النشطة</h3>
          <div className="space-y-2">
            {sessions?.map((session) => (
              <div
                key={session.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    {session.user?.fullName}
                  </p>
                  <p className="text-sm text-gray-500">
                    آخر نشاط: {session.lastActiveAt?.toLocaleDateString("ar-SA")}
                  </p>
                </div>
                {session.current && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    حالية
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* زر تسجيل الخروج */}
        <button
          onClick={() => signOut()}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}`;

const cheatSheetData = {
  en: {
    title: "User & Sessions Reference",
    columns: [
      {
        heading: "Components:",
        items: [
          '<code className="inline-code">{"<UserButton />"}</code> - User avatar with dropdown menu',
          '<code className="inline-code">{"<UserProfile />"}</code> - Full profile management page',
        ],
      },
      {
        heading: "Client Hooks:",
        items: [
          '<code className="inline-code">useUser()</code> - user, isLoaded, isSignedIn',
          '<code className="inline-code">useAuth()</code> - userId, sessionId, getToken, signOut, has',
          '<code className="inline-code">useSession()</code> - Current session info',
          '<code className="inline-code">useSessionList()</code> - All active sessions',
        ],
      },
    ],
  },
  fr: {
    title: "Référence Utilisateur & Sessions",
    columns: [
      {
        heading: "Composants:",
        items: [
          '<code className="inline-code">{"<UserButton />"}</code> - Avatar utilisateur avec menu',
          '<code className="inline-code">{"<UserProfile />"}</code> - Page de gestion du profil',
        ],
      },
      {
        heading: "Hooks Client:",
        items: [
          '<code className="inline-code">useUser()</code> - user, isLoaded, isSignedIn',
          '<code className="inline-code">useAuth()</code> - userId, sessionId, getToken, signOut, has',
          '<code className="inline-code">useSession()</code> - Info de la session actuelle',
          '<code className="inline-code">useSessionList()</code> - Toutes les sessions actives',
        ],
      },
    ],
  },
  de: {
    title: "Benutzer & Sitzungen Referenz",
    columns: [
      {
        heading: "Komponenten:",
        items: [
          '<code className="inline-code">{"<UserButton />"}</code> - Benutzeravatar mit Dropdown-Menü',
          '<code className="inline-code">{"<UserProfile />"}</code> - Vollständige Profilverwaltungsseite',
        ],
      },
      {
        heading: "Client-Hooks:",
        items: [
          '<code className="inline-code">useUser()</code> - user, isLoaded, isSignedIn',
          '<code className="inline-code">useAuth()</code> - userId, sessionId, getToken, signOut, has',
          '<code className="inline-code">useSession()</code> - Aktuelle Sitzungsinformationen',
          '<code className="inline-code">useSessionList()</code> - Alle aktiven Sitzungen',
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

export default function UserAndSessions() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clerk", "05-user-and-sessions");
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
            <CodeBlock language="jsx" code={challengeCode} />
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