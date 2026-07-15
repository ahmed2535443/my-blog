"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/final-project/04-auth-and-layout";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2], fr: [1, 2], de: [1, 2], ar: [1, 2] };

const cheatSheetData = {
  en: {
    title: "Auth & Layout Quick Reference",
    columns: [
      {
        heading: "Clerk Components:",
        items: [
          "<code className='inline-code'>ClerkProvider</code> - Wraps app for auth context",
          "<code className='inline-code'>SignIn / SignUp</code> - Login and registration pages",
          "<code className='inline-code'>UserButton</code> - User account button in header",
          "<code className='inline-code'>SignedIn / SignedOut</code> - Conditional rendering",
        ],
      },
      {
        heading: "Layout Concepts:",
        items: [
          "RootLayout - Main app layout with ClerkProvider",
          "Route Group - Group pages with shared layout",
          "Middleware - Protect routes before page access",
          "auth.protect() - Redirects unauthenticated users",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide Auth & Layout",
    columns: [
      {
        heading: "Composants Clerk :",
        items: [
          "<code className='inline-code'>ClerkProvider</code> - Enveloppe l'app pour le contexte d'auth",
          "<code className='inline-code'>SignIn / SignUp</code> - Pages de connexion et d'inscription",
          "<code className='inline-code'>UserButton</code> - Bouton de compte utilisateur dans l'en-tête",
          "<code className='inline-code'>SignedIn / SignedOut</code> - Rendu conditionnel",
        ],
      },
      {
        heading: "Concepts de layout :",
        items: [
          "RootLayout - Layout principal avec ClerkProvider",
          "Route Group - Grouper les pages avec un layout partagé",
          "Middleware - Protéger les routes avant l'accès",
          "auth.protect() - Redirige les utilisateurs non authentifiés",
        ],
      },
    ],
  },
  de: {
    title: "Auth & Layout Schnellreferenz",
    columns: [
      {
        heading: "Clerk-Komponenten:",
        items: [
          "<code className='inline-code'>ClerkProvider</code> - Umschließt App für Auth-Kontext",
          "<code className='inline-code'>SignIn / SignUp</code> - Anmelde- und Registrierungsseiten",
          "<code className='inline-code'>UserButton</code> - Benutzerkontoschaltfläche im Header",
          "<code className='inline-code'>SignedIn / SignedOut</code> - Bedingte Darstellung",
        ],
      },
      {
        heading: "Layout-Konzepte:",
        items: [
          "RootLayout - Hauptlayout mit ClerkProvider",
          "Route Group - Seiten mit gemeinsamem Layout gruppieren",
          "Middleware - Routen vor Seitenzugriff schützen",
          "auth.protect() - Leitet nicht authentifizierte Benutzer um",
        ],
      },
    ],
  },
  ar: {
    title: "مرجع المصادقة والتخطيط السريع",
    columns: [
      {
        heading: "مكونات Clerk:",
        items: [
          "<code className='inline-code'>ClerkProvider</code> - يلف التطبيق لسياق المصادقة",
          "<code className='inline-code'>SignIn / SignUp</code> - صفحات تسجيل الدخول والتسجيل",
          "<code className='inline-code'>UserButton</code> - زر حساب المستخدم في الرأس",
          "<code className='inline-code'>SignedIn / SignedOut</code> - العرض الشرطي",
        ],
      },
      {
        heading: "مفاهيم التخطيط:",
        items: [
          "RootLayout - التخطيط الرئيسي مع ClerkProvider",
          "Route Group - تجميع الصفحات بتخطيط مشترك",
          "Middleware - حماية المسارات قبل الوصول للصفحة",
          "auth.protect() - إعادة توجيه المستخدمين غير المصادقين",
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

export default function AuthAndLayoutLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("final-project", "04-auth-and-layout");
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
