"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/typescript/05-typescript-react";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 0, 1], fr: [1, 0, 1], de: [1, 0, 1] };

const challengeCode = `interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={
        props.variant === "secondary"
          ? "bg-gray-500 text-white px-4 py-2 rounded"
          : "bg-blue-500 text-white px-4 py-2 rounded"
      }
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

// Usage Examples:
<Button text="Click me" onClick={() => console.log("clicked")} />`;

const cheatSheetData = {
  en: {
    title: "TypeScript React Cheat Sheet",
    columns: [
      {
        heading: "Component Patterns:",
        items: [
          ".tsx — TypeScript React file extension",
          "interface Props {} — Define component props type",
          "function Comp({}: Props) — Type props in function",
          "React.FC — Function component type (less common)",
        ],
      },
      {
        heading: "Hooks & Events:",
        items: [
          "useState<Type>(init) — Type state with generic",
          "React.FormEvent — Form event type",
          "React.ChangeEvent — Input change event type",
          "useRef<Type>(init) — Typed ref",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo TypeScript React",
    columns: [
      {
        heading: "Patterns de composants:",
        items: [
          ".tsx — Extension de fichier TypeScript React",
          "interface Props {} — Définir le type des props",
          "function Comp({}: Props) — Typer les props",
          "React.FC — Type function component",
        ],
      },
      {
        heading: "Hooks et événements:",
        items: [
          "useState<Type>(init) — Typer l'état avec générique",
          "React.FormEvent — Type d'événement formulaire",
          "React.ChangeEvent — Type d'événement input",
          "useRef<Type>(init) — Ref typée",
        ],
      },
    ],
  },
  de: {
    title: "TypeScript React Spickzettel",
    columns: [
      {
        heading: "Komponentenmuster:",
        items: [
          ".tsx — TypeScript React Dateierweiterung",
          "interface Props {} — Component-Props-Typ definieren",
          "function Comp({}: Props) — Props typisieren",
          "React.FC — Function component type",
        ],
      },
      {
        heading: "Hooks & Events:",
        items: [
          "useState<Type>(init) — State mit Generic typisieren",
          "React.FormEvent — Formular-Event-Typ",
          "React.ChangeEvent — Input-Change-Event-Typ",
          "useRef<Type>(init) — Getypter Ref",
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
  if (item.type === "code") {
    return <CodeBlock language="tsx" code={item.text} />;
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

export default function TypeScriptReact() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("typescript", "05-typescript-react");
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
            <CodeBlock language="tsx" code={challengeCode} />
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
