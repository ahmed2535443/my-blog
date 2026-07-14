"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/css/04-css-grid";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1], en: [1, 1], fr: [1, 1], de: [1, 1] };

const challengeCode = `.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
  gap: 1rem;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* أضف تنسيقات إضافية هنا */`;

const cheatSheetData = {
  ar: {
    title: "مرجع: CSS Grid + Subgrid",
    columns: [
      {
        heading: "حاوية Grid:",
        items: [
          '<code className="inline-code">display: grid</code> - تفعيل Grid',
          '<code className="inline-code">grid-template-columns</code> - تحديد مسارات الأعمدة',
          '<code className="inline-code">grid-template-rows</code> - تحديد مسارات الصفوف',
          '<code className="inline-code">grid-template-areas</code> - مناطق التخطيط المسماة',
          '<code className="inline-code">gap</code> - المسافة بين خلايا الشبكة',
          '<code className="inline-code">grid-auto-flow</code> - row | column | dense',
        ],
      },
      {
        heading: "عناصر Grid:",
        items: [
          '<code className="inline-code">grid-column</code> - start / end | span N',
          '<code className="inline-code">grid-row</code> - start / end | span N',
          '<code className="inline-code">grid-area</code> - اسم | row-start / col-start',
          '<code className="inline-code">justify-self</code> - محاذاة عنصر واحد أفقياً',
          '<code className="inline-code">align-self</code> - محاذاة عنصر واحد عمودياً',
        ],
      },
      {
        heading: "أنماط شائعة:",
        code: `/* بطاقات متجاوبة */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* توسيط */
display: grid; place-items: center;

/* شريط جانبي + محتوى */
grid-template-columns: 250px 1fr;`,
        codeLanguage: "css",
      },
      {
        heading: "Grid مقابل Flexbox:",
        items: [
          "صف أزرار -> Flexbox (1D)",
          "شبكة بطاقات -> Grid (2D)",
          "توسيط عنصر -> كلاهما يعمل",
          "شريط التنقل -> Flexbox",
          "لوحة تحكم بمناطق مسماة -> Grid",
        ],
      },
    ],
  },
  en: {
    title: "Reference Sheet: CSS Grid + Subgrid",
    columns: [
      {
        heading: "Grid Container:",
        items: [
          '<code className="inline-code">display: grid</code> - Activates Grid',
          '<code className="inline-code">grid-template-columns</code> - Define column tracks',
          '<code className="inline-code">grid-template-rows</code> - Define row tracks',
          '<code className="inline-code">grid-template-areas</code> - Named layout areas',
          '<code className="inline-code">gap</code> - Space between grid cells',
          '<code className="inline-code">grid-auto-flow</code> - row | column | dense',
        ],
      },
      {
        heading: "Grid Items:",
        items: [
          '<code className="inline-code">grid-column</code> - start / end | span N',
          '<code className="inline-code">grid-row</code> - start / end | span N',
          '<code className="inline-code">grid-area</code> - name | row-start / col-start',
          '<code className="inline-code">justify-self</code> - Align one item horizontally',
          '<code className="inline-code">align-self</code> - Align one item vertically',
        ],
      },
      {
        heading: "Common Patterns:",
        code: `/* Responsive cards */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* Centering */
display: grid; place-items: center;

/* Sidebar + Content */
grid-template-columns: 250px 1fr;`,
        codeLanguage: "css",
      },
      {
        heading: "Grid vs Flexbox:",
        items: [
          "Row of buttons -> Flexbox (1D)",
          "Card grid -> Grid (2D)",
          "Center an element -> Both work",
          "Navbar -> Flexbox",
          "Dashboard with named areas -> Grid",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche de reference: CSS Grid + Subgrid",
    columns: [
      {
        heading: "Conteneur Grid:",
        items: [
          '<code className="inline-code">display: grid</code> - Active Grid',
          '<code className="inline-code">grid-template-columns</code> - Definir les colonnes',
          '<code className="inline-code">grid-template-areas</code> - Zones nommees',
          '<code className="inline-code">gap</code> - Espace entre les cellules',
        ],
      },
      {
        heading: "Elements Grid:",
        items: [
          '<code className="inline-code">grid-column</code> - Position horizontale',
          '<code className="inline-code">grid-row</code> - Position verticale',
          '<code className="inline-code">grid-area</code> - Par nom ou chiffres',
        ],
      },
      {
        heading: "Modeles courants:",
        code: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
display: grid; place-items: center;
grid-template-columns: 250px 1fr;`,
        codeLanguage: "css",
      },
      {
        heading: "Grid vs Flexbox:",
        items: [
          "Range de boutons -> Flexbox (1D)",
          "Grille de cartes -> Grid (2D)",
          "Centrer un element -> Les deux",
          "Barre de nav -> Flexbox",
          "Dashboard -> Grid",
        ],
      },
    ],
  },
  de: {
    title: "Referenzblatt: CSS Grid + Subgrid",
    columns: [
      {
        heading: "Grid-Container:",
        items: [
          '<code className="inline-code">display: grid</code> - Aktiviert Grid',
          '<code className="inline-code">grid-template-columns</code> - Spalten definieren',
          '<code className="inline-code">grid-template-areas</code> - Benannte Bereiche',
          '<code className="inline-code">gap</code> - Abstand zwischen Zellen',
        ],
      },
      {
        heading: "Grid-Elemente:",
        items: [
          '<code className="inline-code">grid-column</code> - Horizontal positionieren',
          '<code className="inline-code">grid-row</code> - Vertikal positionieren',
          '<code className="inline-code">grid-area</code> - Nach Name oder Zahlen',
        ],
      },
      {
        heading: "Haeufige Muster:",
        code: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
display: grid; place-items: center;
grid-template-columns: 250px 1fr;`,
        codeLanguage: "css",
      },
      {
        heading: "Grid vs Flexbox:",
        items: [
          "Buttonreihe -> Flexbox (1D)",
          "Kartenraster -> Grid (2D)",
          "Element zentrieren -> Beide",
          "Nav-Leiste -> Flexbox",
          "Dashboard -> Grid",
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

export default function CSSGridLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("css", "04-css-grid");
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
