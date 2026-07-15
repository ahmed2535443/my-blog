"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/react/02-components-and-props";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 0, 1], en: [1, 0, 1], fr: [1, 0, 1], de: [1, 0, 1] };

const challengeCode = `function UserProfile({ name, role, bio }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{bio}</p>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <UserProfile name="أحمد" role="مطور" bio="مطور React" />
      <SkillList skills={["JavaScript", "React", "CSS"]} />
    </div>
  );
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص المكونات والخصائص",
    columns: [
      {
        heading: "المفاهيم الأساسية:",
        items: [
          "المكونات - أجزاء قابلة لإعادة الاستخدام من واجهة المستخدم",
          "مكونات الدوال - نهج حديث باستخدام الدوال التي تُرجع JSX",
          "الخصائص - بيانات من المكونات الأصل إلى الفرعية",
          "الخصائص للقراءة فقط - المكونات الفرعية لا يمكنها تعديلها",
          "الخصائص الافتراضية - قيم افتراضية للخصائص غير المقدمة",
        ],
      },
      {
        heading: "الأوامر:",
        items: [
          "يجب أن تبدأ أسماء المكونات بحرف كبير",
          "يجب أن تُرجع المكونات JSX",
          "يمكن تداخل المكونات داخل بعضها",
        ],
      },
    ],
  },
  en: {
    title: "Components and Props Cheat Sheet",
    columns: [
      {
        heading: "Basic Component:",
        items: ['function MyComponent() {', '  return <div>Hello</div>;', '}'],
      },
      {
        heading: "Using Props:",
        items: ['function UserCard({ name, age }) {', '  return <div><h2>{name}</h2><p>{age}</p></div>;', '}'],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Composants et Props",
    columns: [
      {
        heading: "Composant de base:",
        items: ['function MyComponent() {', '  return <div>Bonjour</div>;', '}'],
      },
    ],
  },
  de: {
    title: "Komponenten und Props Spickzettel",
    columns: [
      {
        heading: "Grundlegende Komponente:",
        items: ['function MyComponent() {', '  return <div>Hallo</div>;', '}'],
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

export default function ComponentsAndProps() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("react", "02-components-and-props");
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
