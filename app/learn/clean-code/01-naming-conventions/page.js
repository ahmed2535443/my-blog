"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clean-code/01-naming-conventions";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [2], en: [2], fr: [2], de: [2] };

const challengeCode = `// ❌ Bad code
function fn(d, n) {
  let r = d.filter(x => x.a > n);
  let s = r.map(x => x.n);
  return s;
}

// ✅ Improved solution
function getAdultNames(people, minAge) {
  const adults = people.filter(
    person => person.age > minAge
  );
  const names = adults.map(
    person => person.name
  );
  return names;
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص اتفاقيات التسمية",
    columns: [
      {
        heading: "النمط لكل عنصر:",
        items: [
          '<code className="inline-code">userName</code>, <code className="inline-code">isActive</code>, <code className="inline-code">maxRetryCount</code> - المتغيرات: camelCase',
          '<code className="inline-code">getUserData()</code>, <code className="inline-code">calculateTotal()</code> - الدوال: camelCase + فعل',
          '<code className="inline-code">ShoppingCart</code>, <code className="inline-code">PaymentProcessor</code> - الفئات: PascalCase',
          '<code className="inline-code">MAX_RETRY_COUNT</code>, <code className="inline-code">API_URL</code> - الثوابت: UPPER_SNAKE_CASE',
        ],
      },
      {
        heading: "القواعد الذهبية:",
        items: [
          '<code className="inline-code">button</code> وليس <code className="inline-code">btn</code> - لا تختصر',
          '<code className="inline-code">get</code>, <code className="inline-code">create</code>, <code className="inline-code">validate</code> - استخدم أفعالاً للدوال',
          '<code className="inline-code">isValid</code> وليس <code className="inline-code">check</code> - الأسماء تصف المحتوى',
          'التزم بنمط واحد طوال المشروع - كن متسقاً',
        ],
      },
    ],
  },
  en: {
    title: "Naming Conventions Cheat Sheet",
    columns: [
      {
        heading: "Pattern per element:",
        items: [
          '<code className="inline-code">userName</code>, <code className="inline-code">isActive</code>, <code className="inline-code">maxRetryCount</code> - Variables: camelCase',
          '<code className="inline-code">getUserData()</code>, <code className="inline-code">calculateTotal()</code> - Functions: camelCase + verb',
          '<code className="inline-code">ShoppingCart</code>, <code className="inline-code">PaymentProcessor</code> - Classes: PascalCase',
          '<code className="inline-code">MAX_RETRY_COUNT</code>, <code className="inline-code">API_URL</code> - Constants: UPPER_SNAKE_CASE',
        ],
      },
      {
        heading: "Golden rules:",
        items: [
          '<code className="inline-code">button</code> not <code className="inline-code">btn</code> - Don\'t abbreviate',
          '<code className="inline-code">get</code>, <code className="inline-code">create</code>, <code className="inline-code">validate</code> - Use verbs for functions',
          '<code className="inline-code">isValid</code> not <code className="inline-code">check</code> - Names describe content',
          'Stick to one pattern throughout the project - Be consistent',
        ],
      },
    ],
  },
  fr: {
    title: "Référence des conventions de nommage",
    columns: [
      {
        heading: "Modèle par élément :",
        items: [
          '<code className="inline-code">userName</code>, <code className="inline-code">isActive</code>, <code className="inline-code">maxRetryCount</code> - Variables : camelCase',
          '<code className="inline-code">getUserData()</code>, <code className="inline-code">calculateTotal()</code> - Fonctions : camelCase + verbe',
          '<code className="inline-code">ShoppingCart</code>, <code className="inline-code">PaymentProcessor</code> - Classes : PascalCase',
          '<code className="inline-code">MAX_RETRY_COUNT</code>, <code className="inline-code">API_URL</code> - Constantes : UPPER_SNAKE_CASE',
        ],
      },
      {
        heading: "Règles d'or :",
        items: [
          '<code className="inline-code">button</code> pas <code className="inline-code">btn</code> - N\'abrégez pas',
          '<code className="inline-code">get</code>, <code className="inline-code">create</code>, <code className="inline-code">validate</code> - Utilisez des verbes pour les fonctions',
          '<code className="inline-code">isValid</code> pas <code className="inline-code">check</code> - Les noms décrivent le contenu',
          'Respectez un seul modèle dans tout le projet - Soyez cohérent',
        ],
      },
    ],
  },
  de: {
    title: "Übersicht über Namenskonventionen",
    columns: [
      {
        heading: "Muster pro Element:",
        items: [
          '<code className="inline-code">userName</code>, <code className="inline-code">isActive</code>, <code className="inline-code">maxRetryCount</code> - Variablen: camelCase',
          '<code className="inline-code">getUserData()</code>, <code className="inline-code">calculateTotal()</code> - Funktionen: camelCase + Verb',
          '<code className="inline-code">ShoppingCart</code>, <code className="inline-code">PaymentProcessor</code> - Klassen: PascalCase',
          '<code className="inline-code">MAX_RETRY_COUNT</code>, <code className="inline-code">API_URL</code> - Konstanten: UPPER_SNAKE_CASE',
        ],
      },
      {
        heading: "Goldene Regeln:",
        items: [
          '<code className="inline-code">button</code> nicht <code className="inline-code">btn</code> - Nicht abkürzen',
          '<code className="inline-code">get</code>, <code className="inline-code">create</code>, <code className="inline-code">validate</code> - Verben für Funktionen verwenden',
          '<code className="inline-code">isValid</code> nicht <code className="inline-code">check</code> - Namen beschreiben den Inhalt',
          'Halten Sie sich an ein einziges Muster im gesamten Projekt - Konsistent sein',
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

export default function NamingConventions() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clean-code", "01-naming-conventions");
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
