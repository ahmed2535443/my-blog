"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/css/02-modern-selectors";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1, 1], en: [1, 1, 1, 1], fr: [1, 1, 1, 1], de: [1, 1, 1, 1] };

const challengeCode = `/* Modern Selectors Challenge */

/* 1. Use :has() to style cards with images */
.card:has(img) {
  display: grid;
  grid-template-columns: 200px 1fr;
}

/* 2. Use :is() to group selectors */
:is(.nav, .footer) a:is(:hover, :focus, :active) {
  color: var(--accent);
}

/* 3. Use :where() for resets */
:where(h1, h2, h3) {
  margin: 0;
}

/* 4. Use CSS Nesting */
.card {
  background: white;
  border-radius: 8px;

  & h2 {
    color: navy;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

/* 5. Use @layer for specificity control */
@layer reset, base, components;

@layer reset {
  * { margin: 0; padding: 0; }
}

@layer components {
  .card h2 { margin-bottom: 1rem; }
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص: المحددات الحديثة + CSS Nesting",
    columns: [
      {
        heading: "المحددات الأساسية:",
        items: [
          '<code className="inline-code">عنصر</code> - p { }',
          '<code className="inline-code">فئة</code> - .btn { }',
          '<code className="inline-code">معرّف</code> - #header { }',
          '<code className="inline-code">سمة</code> - [type="text"]',
        ],
      },
      {
        heading: "المحرّكات:",
        items: [
          '<code className="inline-code">ابن ></code> - .nav > li (ابنة مباشرة)',
          '<code className="inline-code">تابع</code> - .nav a (أي تابع)',
          '<code className="inline-code">مجاور +</code> - h2 + p (الأخ المجاور التالي)',
          '<code className="inline-code">عام ~</code> - h2 ~ p (جميع الإخوة التاليين)',
        ],
      },
      {
        heading: "المحددات الحديثة:",
        items: [
          '<code className="inline-code">:has()</code> - محدد الأب (ينسّق الأب بناءً على الأبناء)',
          '<code className="inline-code">:is()</code> - تجميع المحددات (يأخذ أعلى نوعية)',
          '<code className="inline-code">:where()</code> - نوعية صفرية (ممتاز لإعادة التعيين)',
        ],
      },
      {
        heading: "CSS Nesting:",
        code: `.parent {
  background: white;

  & .child { color: red; }
  &:hover { background: gray; }
  &::before { content: ""; }
  &.active { color: blue; }
}`,
        codeLanguage: "css",
      },
    ],
  },
  en: {
    title: "Cheat Sheet: Modern Selectors + CSS Nesting",
    columns: [
      {
        heading: "Basic Selectors:",
        items: [
          '<code className="inline-code">Element</code> - p { }',
          '<code className="inline-code">Class</code> - .btn { }',
          '<code className="inline-code">ID</code> - #header { }',
          '<code className="inline-code">Attribute</code> - [type="text"]',
        ],
      },
      {
        heading: "Combinators:",
        items: [
          '<code className="inline-code">Child ></code> - .nav > li (direct child)',
          '<code className="inline-code">Descendant</code> - .nav a (any descendant)',
          '<code className="inline-code">Adjacent +</code> - h2 + p (next sibling)',
          '<code className="inline-code">General ~</code> - h2 ~ p (all following siblings)',
        ],
      },
      {
        heading: "Modern Selectors:",
        items: [
          '<code className="inline-code">:has()</code> - Parent selector (styles parent based on children)',
          '<code className="inline-code">:is()</code> - Group selectors (takes highest specificity)',
          '<code className="inline-code">:where()</code> - Zero specificity (great for resets)',
        ],
      },
      {
        heading: "CSS Nesting:",
        code: `.parent {
  background: white;

  & .child { color: red; }
  &:hover { background: gray; }
  &::before { content: ""; }
  &.active { color: blue; }
}`,
        codeLanguage: "css",
      },
    ],
  },
  fr: {
    title: "Fiche memo: Selecteurs Modernes + CSS Nesting",
    columns: [
      {
        heading: "Selecteurs de base:",
        items: [
          '<code className="inline-code">Element</code> - p { }',
          '<code className="inline-code">Classe</code> - .btn { }',
          '<code className="inline-code">ID</code> - #header { }',
          '<code className="inline-code">Attribut</code> - [type="text"]',
        ],
      },
      {
        heading: "Combinateurs:",
        items: [
          '<code className="inline-code">Enfant ></code> - .nav > li',
          '<code className="inline-code">Descendant</code> - .nav a',
          '<code className="inline-code">Adjacent +</code> - h2 + p',
          '<code className="inline-code">General ~</code> - h2 ~ p',
        ],
      },
      {
        heading: "Selecteurs Modernes:",
        items: [
          '<code className="inline-code">:has()</code> - Selecteur parent',
          '<code className="inline-code">:is()</code> - Grouper les selecteurs',
          '<code className="inline-code">:where()</code> - Specificite zero',
        ],
      },
      {
        heading: "CSS Nesting:",
        code: `.parent {
  background: white;

  & .child { color: red; }
  &:hover { background: gray; }
}`,
        codeLanguage: "css",
      },
    ],
  },
  de: {
    title: "Spickzettel: Moderne Selektoren + CSS Nesting",
    columns: [
      {
        heading: "Grundlegende Selektoren:",
        items: [
          '<code className="inline-code">Element</code> - p { }',
          '<code className="inline-code">Klasse</code> - .btn { }',
          '<code className="inline-code">ID</code> - #header { }',
          '<code className="inline-code">Attribut</code> - [type="text"]',
        ],
      },
      {
        heading: "Kombinatoren:",
        items: [
          '<code className="inline-code">Kind ></code> - .nav > li',
          '<code className="inline-code">Nachkomme</code> - .nav a',
          '<code className="inline-code">Angrenzend +</code> - h2 + p',
          '<code className="inline-code">Allgemein ~</code> - h2 ~ p',
        ],
      },
      {
        heading: "Moderne Selektoren:",
        items: [
          '<code className="inline-code">:has()</code> - Eltern-Selektor',
          '<code className="inline-code">:is()</code> - Selektoren gruppieren',
          '<code className="inline-code">:where()</code> - Null-Spezifitaet',
        ],
      },
      {
        heading: "CSS Nesting:",
        code: `.parent {
  background: white;

  & .child { color: red; }
  &:hover { background: gray; }
}`,
        codeLanguage: "css",
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

export default function ModernSelectors() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("css", "02-modern-selectors");
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
