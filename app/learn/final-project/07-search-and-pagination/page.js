"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/final-project/07-search-and-pagination";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2, 2, 1], fr: [1, 2, 2, 1], de: [1, 2, 2, 1] };

const cheatSheetData = {
  en: {
    title: "Search & Pagination Quick Reference",
    columns: [
      {
        heading: "Supabase Search:",
        items: [
          "<code className='inline-code'>.ilike('title', '%query%')</code> - Simple text search",
          "<code className='inline-code'>.or('title.ilike...')</code> - Multi-column search",
          "<code className='inline-code'>.rpc('search_posts', {search_query})</code> - Full-text search",
        ],
      },
      {
        heading: "Pagination & Debounce:",
        items: [
          "Calculate <code className='inline-code'>offset = (page - 1) * limit</code>",
          "Use <code className='inline-code'>.range(offset, offset + limit - 1)</code>",
          "Debounce delays search until user stops typing",
          "URL params make search links shareable",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide Recherche & Pagination",
    columns: [
      {
        heading: "Recherche Supabase :",
        items: [
          "<code className='inline-code'>.ilike('title', '%query%')</code> - Recherche de texte simple",
          "<code className='inline-code'>.or('title.ilike...')</code> - Recherche multi-colonnes",
          "<code className='inline-code'>.rpc('search_posts', {search_query})</code> - Recherche plein texte",
        ],
      },
      {
        heading: "Pagination & Debounce :",
        items: [
          "Calculer <code className='inline-code'>offset = (page - 1) * limit</code>",
          "Utiliser <code className='inline-code'>.range(offset, offset + limit - 1)</code>",
          "Le debounce retarde la recherche jusqu'à l'arrêt de la frappe",
          "Les paramètres URL rendent les liens de recherche partageables",
        ],
      },
    ],
  },
  de: {
    title: "Suche & Paginierung Schnellreferenz",
    columns: [
      {
        heading: "Supabase-Suche:",
        items: [
          "<code className='inline-code'>.ilike('title', '%query%')</code> - Einfache Textsuche",
          "<code className='inline-code'>.or('title.ilike...')</code> - Mehrspaltige Suche",
          "<code className='inline-code'>.rpc('search_posts', {search_query})</code> - Volltextsuche",
        ],
      },
      {
        heading: "Paginierung & Debounce:",
        items: [
          "<code className='inline-code'>offset = (page - 1) * limit</code> berechnen",
          "<code className='inline-code'>.range(offset, offset + limit - 1)</code> verwenden",
          "Debounce verzögert die Suche bis zum Stoppen der Eingabe",
          "URL-Parameter machen Suchlinks teilbar",
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

export default function SearchAndPagination() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("final-project", "07-search-and-pagination");
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
