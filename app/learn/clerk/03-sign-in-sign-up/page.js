"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clerk/03-clerk-authentication-methods";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2, 1], en: [1, 2, 1], fr: [1, 2, 1], de: [1, 2, 1] };

const challengeCode = `"use client";

import { SignInButton, SignUpButton, UserButton, Show } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* شريط علوي */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">منصتنا</h1>
        <div className="flex gap-4 items-center">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-gray-700 hover:text-gray-900 font-semibold">
                تسجيل الدخول
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                ابدأ مجانًا
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <a href="/dashboard" className="text-gray-700 hover:text-gray-900">
              لوحة التحكم
            </a>
            <UserButton afterSignOutUrl="/" />
          </Show>
        </div>
      </nav>

      {/* محتوى الصفحة الرئيسية */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            تعلّم البرمجة بطريقة أسهل
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            منصة تعليمية متكاملة تساعدك على تعلم أحدث التقنيات
          </p>
        </div>
      </main>
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص مراجعة طرق المصادقة",
    columns: [
      {
        heading: "مكونات النماذج:",
        items: [
          '<code className="inline-code">{"<SignIn />"}</code> - نموذج تسجيل دخول كامل',
          '<code className="inline-code">{"<SignUp />"}</code> - نموذج تسجيل كامل',
          '<code className="inline-code">{"<SignInButton />"}</code> - زر تسجيل الدخول (يدعم mode="modal" و "navigation")',
          '<code className="inline-code">{"<SignUpButton />"}</code> - زر التسجيل (يدعم mode="modal" و "navigation")',
        ],
      },
      {
        heading: "العرض الشرطي:",
        items: [
          '<code className="inline-code">{"<Show when=\\"signed-in\\">"}</code> - عرض عند تسجيل الدخول',
          '<code className="inline-code">{"<Show when=\\"signed-out\\">"}</code> - عرض عند تسجيل الخروج',
          '<code className="inline-code">useAuth()</code> - خطاف عميل لحالة المصادقة',
          '<code className="inline-code">useUser()</code> - خطاف عميل لبيانات المستخدم',
        ],
      },
    ],
  },
  en: {
    title: "Auth Components Reference",
    columns: [
      {
        heading: "Form Components:",
        items: [
          '<code className="inline-code">{"<SignIn />"}</code> - Full sign-in form',
          '<code className="inline-code">{"<SignUp />"}</code> - Full sign-up form',
          '<code className="inline-code">{"<SignInButton />"}</code> - Sign-in button (supports mode="modal" and "navigation")',
          '<code className="inline-code">{"<SignUpButton />"}</code> - Sign-up button (supports mode="modal" and "navigation")',
        ],
      },
      {
        heading: "Conditional Rendering:",
        items: [
          '<code className="inline-code">{"<Show when=\\"signed-in\\">"}</code> - Show when signed in',
          '<code className="inline-code">{"<Show when=\\"signed-out\\">"}</code> - Show when signed out',
          '<code className="inline-code">useAuth()</code> - Client hook for auth state',
          '<code className="inline-code">useUser()</code> - Client hook for user data',
        ],
      },
    ],
  },
  fr: {
    title: "Référence Composants Auth",
    columns: [
      {
        heading: "Composants de formulaire:",
        items: [
          '<code className="inline-code">{"<SignIn />"}</code> - Formulaire de connexion complet',
          '<code className="inline-code">{"<SignUp />"}</code> - Formulaire d\'inscription complet',
          '<code className="inline-code">{"<SignInButton />"}</code> - Bouton de connexion',
          '<code className="inline-code">{"<SignUpButton />"}</code> - Bouton d\'inscription',
        ],
      },
      {
        heading: "Rendu conditionnel:",
        items: [
          '<code className="inline-code">{"<Show when=\\"signed-in\\">"}</code> - Afficher quand connecté',
          '<code className="inline-code">{"<Show when=\\"signed-out\\">"}</code> - Afficher quand déconnecté',
          '<code className="inline-code">useAuth()</code> - Hook pour l\'état d\'auth',
        ],
      },
    ],
  },
  de: {
    title: "Auth-Komponenten Referenz",
    columns: [
      {
        heading: "Formularkomponenten:",
        items: [
          '<code className="inline-code">{"<SignIn />"}</code> - Vollständiges Anmeldeformular',
          '<code className="inline-code">{"<SignUp />"}</code> - Vollständiges Registrierungsformular',
          '<code className="inline-code">{"<SignInButton />"}</code> - Anmeldebutton',
          '<code className="inline-code">{"<SignUpButton />"}</code> - Registrierungsbutton',
        ],
      },
      {
        heading: "Bedingte Darstellung:",
        items: [
          '<code className="inline-code">{"<Show when=\\"signed-in\\">"}</code> - Zeigen bei Anmeldung',
          '<code className="inline-code">{"<Show when=\\"signed-out\\">"}</code> - Zeigen bei Abmeldung',
          '<code className="inline-code">useAuth()</code> - Hook für Auth-Status',
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
    return <CodeBlock language="jsx" code={item.text} />;
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

export default function SignInSignUp() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clerk", "03-sign-in-sign-up");
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