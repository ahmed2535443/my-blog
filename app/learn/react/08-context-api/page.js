"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/react/08-context-api";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2, 1, 2, 2], en: [1, 2, 1, 2, 2], fr: [1, 2, 1, 2, 2], de: [1, 2, 1, 2, 2] };

const challengeCode = `// AppContext
"use client";
import { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ar");

  const t = useCallback((key) => {
    const texts = { ar: { title: "مرحباً" }, en: { title: "Hello" } };
    return texts[lang]?.[key] || key;
  }, [lang]);

  return (
    <AppContext.Provider value={{ theme, lang, t, toggleTheme: () => setTheme(p => p === "light" ? "dark" : "light"), toggleLang: () => setLang(p => p === "ar" ? "en" : "ar") }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص Context API",
    columns: [
      {
        heading: "إنشاء Context:",
        items: [
          'const ThemeContext = createContext("light");',
        ],
      },
      {
        heading: "توفير Context:",
        items: [
          "<ThemeContext.Provider value={theme}>",
          "  {children}",
          "</ThemeContext.Provider>",
        ],
      },
      {
        heading: "استهلاك Context:",
        items: [
          "const theme = useContext(ThemeContext);",
        ],
      },
    ],
  },
  en: {
    title: "Context API Cheat Sheet",
    columns: [
      {
        heading: "Create Context:",
        items: ['const ThemeContext = createContext("light");'],
      },
      {
        heading: "Provide Context:",
        items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'],
      },
      {
        heading: "Consume Context:",
        items: ['const theme = useContext(ThemeContext);'],
      },
    ],
  },
  fr: {
    title: "Fiche mémo de l'API Context",
    columns: [
      {
        heading: "Créer un Context:",
        items: ['const ThemeContext = createContext("light");'],
      },
      {
        heading: "Fournir le Context:",
        items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'],
      },
      {
        heading: "Consommer le Context:",
        items: ['const theme = useContext(ThemeContext);'],
      },
    ],
  },
  de: {
    title: "Context API Spickzettel",
    columns: [
      {
        heading: "Context erstellen:",
        items: ['const ThemeContext = createContext("light");'],
      },
      {
        heading: "Context bereitstellen:",
        items: ['<ThemeContext.Provider value={theme}>', '  {children}', '</ThemeContext.Provider>'],
      },
      {
        heading: "Context konsumieren:",
        items: ['const theme = useContext(ThemeContext);'],
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
  return null;
}

export default function ContextApi() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("react", "08-context-api");
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
                {col.code && <CodeBlock language={col.codeLanguage || "jsx"} code={col.code} />}
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
