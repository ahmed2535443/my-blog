"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clean-code/02-code-organization";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1], en: [1], fr: [1], de: [1] };

const challengeCode = `function handleUserAction(action, userData) {
  if (action === "register") {
    if (!userData.name || !userData.email) {
      return { success: false, error: "Missing data" };
    }
    const user = db.users.create(userData);
    sendEmail(userData.email, "Welcome", "Registration successful");
    log("New user registered: " + userData.name);
    return { success: true, user };
  } else if (action === "login") {
    const user = db.users.findByEmail(userData.email);
    if (!user || user.password !== userData.password) {
      return { success: false, error: "Invalid credentials" };
    }
    log("User logged in: " + user.name);
    return { success: true, user };
  }
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص تنظيم الكود",
    columns: [
      {
        heading: "المبادئ الأساسية:",
        items: [
          "1. المسؤولية الفردية (SRP) - كل دالة تفعل شيئاً واحداً",
          "2. ترتيب الاستيراد - المكتبات الخارجية ← المكونات المحلية ← الأدوات المساعدة",
          "3. تنظيم الملفات - استخدم تصدير الأسطوانة، organize حسب الميزات",
          "4. مبدأ أقل معرفة - لا تسلسل طرق طويل",
          "5. تجميع الكود المترابط - اجمع الدوال المتشابهة، لا تكرر (DRY)",
        ],
      },
      {
        heading: "القاعدة الذهبية:",
        items: [
          "الكود الجيد هو الكود الذي يمكن لشخص آخر قراءته وفهمه في أقصر وقت ممكن.",
        ],
      },
    ],
  },
  en: {
    title: "Code Organization Cheat Sheet",
    columns: [
      {
        heading: "Core principles:",
        items: [
          "1. Single Responsibility (SRP) - Each function does one thing",
          "2. Import Ordering - External libraries → Internal components → Utilities",
          "3. File Organization - Use barrel exports, organize by features",
          "4. Principle of Least Knowledge - No long method chaining",
          "5. Grouping Related Code - Collect similar functions, don't repeat (DRY)",
        ],
      },
      {
        heading: "Golden rule:",
        items: [
          "Good code is code that another person can read and understand in the shortest time possible.",
        ],
      },
    ],
  },
  fr: {
    title: "Référence de l'organisation du code",
    columns: [
      {
        heading: "Principes fondamentaux :",
        items: [
          "1. Responsabilité unique (SRP) - Chaque fonction fait une chose",
          "2. Ordre des imports - Bibliothèques externes → Composants internes → Utilitaires",
          "3. Organisation des fichiers - Utilisez les barrel exports, organisez par fonctionnalités",
          "4. Principe de moindre connaissance - Pas de chaînage de méthodes long",
          "5. Regrouper le code apparenté - Rassemblez les fonctions similaires, ne vous répétez pas (DRY)",
        ],
      },
      {
        heading: "Règle d'or :",
        items: [
          "Le bon code est un code qu'une autre personne peut lire et comprendre le plus rapidement possible.",
        ],
      },
    ],
  },
  de: {
    title: "Übersicht über die Codeorganisation",
    columns: [
      {
        heading: "Grundprinzipien:",
        items: [
          "1. Verantwortliche Einzelheit (SRP) - Jede Funktion tut eine Sache",
          "2. Import-Reihenfolge - Externe Bibliotheken → Interne Komponenten → Hilfsprogramme",
          "3. Dateiorganisation - Verwenden Sie Barrel Exports, organisieren Sie nach Funktionen",
          "4. Prinzip des geringsten Wissens - Keine lange Methodenverkettung",
          "5. Zusammenhängenden Code gruppieren - Ähnliche Funktionen sammeln, nicht wiederholen (DRY)",
        ],
      },
      {
        heading: "Goldene Regel:",
        items: [
          "Guter Code ist Code, den eine andere Person in kürzester Zeit lesen und verstehen kann.",
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

export default function CodeOrganization() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clean-code", "02-code-organization");
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
                <ul className="text-sm space-y-1">
                  {col.items.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
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
