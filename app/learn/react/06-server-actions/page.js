"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/react/06-server-actions";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 2, 1, 1], en: [1, 1, 2, 1, 1], fr: [1, 1, 2, 1, 1], de: [1, 1, 2, 1, 1] };

const challengeCode = `"use server";
export async function submitContactForm(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const errors = {};
  if (!name || name.trim().length < 2) errors.name = "الاسم قصير جداً";
  if (!email || !email.includes("@")) errors.email = "البريد غير صحيح";
  if (!message || message.trim().length < 10) errors.message = "الرسالة قصيرة";

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  await db.messages.create({
    data: { name: name.trim(), email: email.trim(), message: message.trim() }
  });

  return { success: true, message: "تم الإرسال بنجاح!" };
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص إجراءات الخادم",
    columns: [
      {
        heading: "إجراء خادم أساسي:",
        items: [
          '"use server";',
          "async function saveData(formData) {",
          '  const name = formData.get("name");',
          "  await db.insert(name);",
          "}",
        ],
      },
      {
        heading: "في النموذج:",
        items: [
          "<form action={saveData}>",
          '  <input name="name" />',
          '  <button type="submit">Save</button>',
          "</form>",
        ],
      },
    ],
  },
  en: {
    title: "Server Actions Cheat Sheet",
    columns: [
      {
        heading: "Basic Server Action:",
        items: ['"use server";', 'async function saveData(formData) {', '  const name = formData.get("name");', '  await db.insert(name);', '}'],
      },
      {
        heading: "In Form:",
        items: ['<form action={saveData}>', '  <input name="name" />', '  <button type="submit">Save</button>', '</form>'],
      },
    ],
  },
  fr: {
    title: "Fiche mémo des Server Actions",
    columns: [
      {
        heading: "Server Action de base:",
        items: ['"use server";', 'async function saveData(formData) {', '  await db.insert(formData.get("name"));', '}'],
      },
    ],
  },
  de: {
    title: "Server Actions Spickzettel",
    columns: [
      {
        heading: "Grundlegende Server Action:",
        items: ['"use server";', 'async function saveData(formData) {', '  await db.insert(formData.get("name"));', '}'],
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

export default function ServerActionsLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("react", "06-server-actions");
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
