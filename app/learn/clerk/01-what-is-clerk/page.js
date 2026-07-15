"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clerk/01-what-is-clerk";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2, 1], en: [1, 2, 1], fr: [1, 2, 1], de: [1, 2, 1] };

const challengeCode = `// مثال بسيط: كيفية استخدام Clerk في مشروع Next.js
// أولاً: استيراد المكونات من Clerk
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

// في الخادم: جلب بيانات المستخدم الحالي
export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div>
      <h1>مرحباً {user.firstName}</h1>
      <p>البريد الإلكتروني: {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص مراجعة البدء مع Clerk",
    columns: [
      {
        heading: "أساسيات Clerk:",
        items: [
          '<code className="inline-code">Clerk</code> - منصة مصادقة وإدارة مستخدمين كاملة',
          '<code className="inline-code">@clerk/nextjs</code> - Clerk SDK لـ Next.js',
          '<code className="inline-code">currentUser()</code> - دالة خادم لجلب بيانات المستخدم الكاملة',
          '<code className="inline-code">auth()</code> - دالة خادم لجلب معلومات المصادقة',
          '<code className="inline-code">useUser()</code> - خطاف عميل لبيانات المستخدم',
          '<code className="inline-code">useAuth()</code> - خطاف عميل لمعلومات المصادقة',
        ],
      },
      {
        heading: "المكونات الرئيسية:",
        items: [
          '<code className="inline-code">{"<SignIn />"}</code> - مكون تسجيل الدخول',
          '<code className="inline-code">{"<SignUp />"}</code> - مكون التسجيل',
          '<code className="inline-code">{"<UserButton />"}</code> - صورة المستخدم والقائمة',
          '<code className="inline-code">{"<UserProfile />"}</code> - صفحة إدارة الملف الشخصي',
          '<code className="inline-code">{"<OrganizationSwitcher />"}</code> - محوّل المنظمات',
        ],
      },
    ],
  },
  en: {
    title: "Clerk Getting Started Cheat Sheet",
    columns: [
      {
        heading: "Clerk Basics:",
        items: [
          '<code className="inline-code">Clerk</code> - Complete authentication and user management platform',
          '<code className="inline-code">@clerk/nextjs</code> - Clerk SDK for Next.js',
          '<code className="inline-code">currentUser()</code> - Server function to get full user data',
          '<code className="inline-code">auth()</code> - Server function to get auth info',
          '<code className="inline-code">useUser()</code> - Client hook for user data',
          '<code className="inline-code">useAuth()</code> - Client hook for auth info',
        ],
      },
      {
        heading: "Key Components:",
        items: [
          '<code className="inline-code">{"<SignIn />"}</code> - Login form component',
          '<code className="inline-code">{"<SignUp />"}</code> - Signup form component',
          '<code className="inline-code">{"<UserButton />"}</code> - User avatar and menu',
          '<code className="inline-code">{"<UserProfile />"}</code> - Profile management page',
          '<code className="inline-code">{"<OrganizationSwitcher />"}</code> - Organization switcher',
        ],
      },
    ],
  },
  fr: {
    title: "Clerk Fiche mémo",
    columns: [
      {
        heading: "Bases de Clerk:",
        items: [
          '<code className="inline-code">Clerk</code> - Plateforme complète d\'authentification',
          '<code className="inline-code">@clerk/nextjs</code> - SDK Clerk pour Next.js',
          '<code className="inline-code">currentUser()</code> - Fonction serveur pour les données utilisateur',
          '<code className="inline-code">auth()</code> - Fonction serveur pour les infos d\'auth',
          '<code className="inline-code">useUser()</code> - Hook client pour les données utilisateur',
          '<code className="inline-code">useAuth()</code> - Hook client pour les infos d\'auth',
        ],
      },
      {
        heading: "Composants clés:",
        items: [
          '<code className="inline-code">{"<SignIn />"}</code> - Composant de connexion',
          '<code className="inline-code">{"<SignUp />"}</code> - Composant d\'inscription',
          '<code className="inline-code">{"<UserButton />"}</code> - Avatar et menu utilisateur',
          '<code className="inline-code">{"<UserProfile />"}</code> - Page de gestion du profil',
        ],
      },
    ],
  },
  de: {
    title: "Clerk Spickzettel",
    columns: [
      {
        heading: "Clerk-Grundlagen:",
        items: [
          '<code className="inline-code">Clerk</code> - Vollständige Authentifizierungsplattform',
          '<code className="inline-code">@clerk/nextjs</code> - Clerk SDK für Next.js',
          '<code className="inline-code">currentUser()</code> - Serverfunktion für Benutzerdaten',
          '<code className="inline-code">auth()</code> - Serverfunktion für Auth-Infos',
          '<code className="inline-code">useUser()</code> - Client-Hook für Benutzerdaten',
          '<code className="inline-code">useAuth()</code> - Client-Hook für Auth-Infos',
        ],
      },
      {
        heading: "Wichtige Komponenten:",
        items: [
          '<code className="inline-code">{"<SignIn />"}</code> - Login-Formular',
          '<code className="inline-code">{"<SignUp />"}</code> - Registrierungsformular',
          '<code className="inline-code">{"<UserButton />"}</code> - Benutzeravatar und Menü',
          '<code className="inline-code">{"<UserProfile />"}</code> - Profilverwaltungsseite',
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

export default function WhatIsClerk() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clerk", "01-what-is-clerk");
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