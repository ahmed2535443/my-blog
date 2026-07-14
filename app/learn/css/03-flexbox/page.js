"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/css/03-flexbox";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [2, 1], en: [2, 1], fr: [2, 1], de: [2, 1] };

const challengeCode = `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a2e;
  color: white;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar .nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.navbar .login-btn {
  padding: 0.5rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}`;

const cheatSheetData = {
  ar: {
    title: "مرجع: Flexbox + place-items",
    columns: [
      {
        heading: "خصائص حاوية Flex:",
        items: [
          '<code className="inline-code">display: flex</code> - تفعيل Flexbox',
          '<code className="inline-code">flex-direction</code> - row | column | row-reverse | column-reverse',
          '<code className="inline-code">flex-wrap</code> - nowrap | wrap | wrap-reverse',
          '<code className="inline-code">justify-content</code> - flex-start | center | space-between | space-around',
          '<code className="inline-code">align-items</code> - flex-start | center | stretch | baseline',
          '<code className="inline-code">gap</code> - المسافة بين العناصر',
        ],
      },
      {
        heading: "خصائص عناصر Flex:",
        items: [
          '<code className="inline-code">flex-grow</code> - مقدار نمو العنصر نسبياً',
          '<code className="inline-code">flex-shrink</code> - مقدار تقلص العنصر عند عدم وجود مساحة',
          '<code className="inline-code">flex-basis</code> - الحجم الافتراضي قبل النمو/التقلص',
          '<code className="inline-code">flex</code> - اختصار: grow shrink basis',
          '<code className="inline-code">align-self</code> - تجاوز align-items لعنصر واحد',
          '<code className="inline-code">order</code> - تغيير الترتيب المرئي دون تغيير HTML',
        ],
      },
      {
        heading: "أنماط شائعة:",
        items: [
          "توسيط: justify-content: center; align-items: center;",
          "شريط التنقل: justify-content: space-between; align-items: center;",
          "الأعمدة: align-items: stretch;",
          "التفاف: flex-wrap: wrap; gap: 1rem;",
        ],
      },
      {
        heading: "الطريقة القديمة مقابل Flexbox:",
        items: [
          "توسيط أفقي: margin: 0 auto -> justify-content: center",
          "توسيط عمودي: position: absolute + transform -> align-items: center",
          "أعمدة متساوية: display: table-cell -> display: flex; align-items: stretch",
          "تخطيط Float: float: left -> display: flex; flex-wrap: wrap",
        ],
      },
    ],
  },
  en: {
    title: "Reference Sheet: Flexbox + place-items",
    columns: [
      {
        heading: "Flex Container Properties:",
        items: [
          '<code className="inline-code">display: flex</code> - Activates Flexbox',
          '<code className="inline-code">flex-direction</code> - row | column | row-reverse | column-reverse',
          '<code className="inline-code">flex-wrap</code> - nowrap | wrap | wrap-reverse',
          '<code className="inline-code">justify-content</code> - flex-start | center | space-between | space-around',
          '<code className="inline-code">align-items</code> - flex-start | center | stretch | baseline',
          '<code className="inline-code">gap</code> - Space between items',
        ],
      },
      {
        heading: "Flex Item Properties:",
        items: [
          '<code className="inline-code">flex-grow</code> - How much item grows relative to others',
          '<code className="inline-code">flex-shrink</code> - How much item shrinks when no space',
          '<code className="inline-code">flex-basis</code> - Default size before grow/shrink',
          '<code className="inline-code">flex</code> - Shorthand: grow shrink basis',
          '<code className="inline-code">align-self</code> - Override align-items for one item',
          '<code className="inline-code">order</code> - Change visual order without changing HTML',
        ],
      },
      {
        heading: "Common Patterns:",
        items: [
          "Centering: justify-content: center; align-items: center;",
          "Navbar: justify-content: space-between; align-items: center;",
          "Columns: align-items: stretch;",
          "Wrap: flex-wrap: wrap; gap: 1rem;",
        ],
      },
      {
        heading: "Old Way vs Flexbox:",
        items: [
          "Center X: margin: 0 auto -> justify-content: center",
          "Center Y: position: absolute + transform -> align-items: center",
          "Equal columns: display: table-cell -> display: flex; align-items: stretch",
          "Float layout: float: left -> display: flex; flex-wrap: wrap",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche de reference: Flexbox + place-items",
    columns: [
      {
        heading: "Proprietes du conteneur:",
        items: [
          '<code className="inline-code">display: flex</code> - Active Flexbox',
          '<code className="inline-code">flex-direction</code> - row | column',
          '<code className="inline-code">justify-content</code> - center | space-between',
          '<code className="inline-code">align-items</code> - center | stretch',
          '<code className="inline-code">gap</code> - Espace entre les elements',
        ],
      },
      {
        heading: "Proprietes des elements:",
        items: [
          '<code className="inline-code">flex-grow</code> - Croissance relative',
          '<code className="inline-code">flex-shrink</code> - Retrecissement',
          '<code className="inline-code">flex-basis</code> - Taille de base',
          '<code className="inline-code">flex</code> - Raccourci',
          '<code className="inline-code">align-self</code> - Alignement individuel',
          '<code className="inline-code">order</code> - Ordre visuel',
        ],
      },
      {
        heading: "Modeles courants:",
        items: [
          "Centrage: justify-content: center; align-items: center;",
          "Barre de nav: justify-content: space-between;",
          "Colonnes: align-items: stretch;",
          "Enveloppement: flex-wrap: wrap; gap: 1rem;",
        ],
      },
      {
        heading: "Ancien vs Flexbox:",
        items: [
          "Centrage X: margin: 0 auto -> justify-content: center",
          "Centrage Y: position: absolute -> align-items: center",
          "Colonnes egales: display: table-cell -> display: flex",
          "Float: float: left -> display: flex; flex-wrap: wrap",
        ],
      },
    ],
  },
  de: {
    title: "Referenzblatt: Flexbox + place-items",
    columns: [
      {
        heading: "Container-Eigenschaften:",
        items: [
          '<code className="inline-code">display: flex</code> - Aktiviert Flexbox',
          '<code className="inline-code">flex-direction</code> - row | column',
          '<code className="inline-code">justify-content</code> - center | space-between',
          '<code className="inline-code">align-items</code> - center | stretch',
          '<code className="inline-code">gap</code> - Abstand zwischen Elementen',
        ],
      },
      {
        heading: "Item-Eigenschaften:",
        items: [
          '<code className="inline-code">flex-grow</code> - Relatives Wachstum',
          '<code className="inline-code">flex-shrink</code> - Schrumpfen',
          '<code className="inline-code">flex-basis</code> - Grundgroesse',
          '<code className="inline-code">flex</code> - Kurzschreibweise',
          '<code className="inline-code">align-self</code> - Individuelle Ausrichtung',
          '<code className="inline-code">order</code> - Visuelle Reihenfolge',
        ],
      },
      {
        heading: "Haeufige Muster:",
        items: [
          "Zentrieren: justify-content: center; align-items: center;",
          "Nav-Leiste: justify-content: space-between;",
          "Spalten: align-items: stretch;",
          "Umbruch: flex-wrap: wrap; gap: 1rem;",
        ],
      },
      {
        heading: "Alt vs Flexbox:",
        items: [
          "Zentrieren X: margin: 0 auto -> justify-content: center",
          "Zentrieren Y: position: absolute -> align-items: center",
          "Gleiche Spalten: display: table-cell -> display: flex",
          "Float: float: left -> display: flex; flex-wrap: wrap",
        ],
      },
    ],
  },
};

function renderContent(item) {
  if (item.type === "p") return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "li") return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "ol") return <ol dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "callout") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>💡 {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  if (item.type === "callout-accent") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>✅ {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  if (item.type === "callout-primary") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>🔍 {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  return null;
}

export default function FlexboxLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("css", "03-flexbox");
  const content = rawTranslations[lang] || rawTranslations.en;
  if (!content) return null;
  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader stage={lessonInfo.stage} lesson={lessonInfo} lessonIndex={lessonInfo.lessonIndex} totalLessons={lessonInfo.totalLessons} />
        {content.sections.map((section, i) => (
          <LessonSection key={i} title={section.title}>
            {section.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          </LessonSection>
        ))}
        {content.quiz && content.quiz.map((q, i) => (
          <Quiz key={i} question={q.question} options={q.options} correctAnswer={answers[i]} explanation={q.explanation} />
        ))}
        {content.challenge && (
          <Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>
            <CodeBlock language="css" code={challengeCode} />
          </Challenge>
        )}
        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                {col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>}
                {col.code && <CodeBlock language={col.codeLanguage || "css"} code={col.code} />}
              </div>
            ))}
          </div>
        </CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
