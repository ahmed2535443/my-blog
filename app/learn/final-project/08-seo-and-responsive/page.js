"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/final-project/08-seo-and-responsive";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 3, 1], fr: [1, 1, 3, 1], de: [1, 1, 3, 1] };

const cheatSheetData = {
  en: {
    title: "SEO & Responsive Quick Reference",
    columns: [
      {
        heading: "Metadata API:",
        items: [
          "Static: <code className='inline-code'>export const metadata = {...}</code>",
          "Dynamic: <code className='inline-code'>export async function generateMetadata()</code>",
          "Open Graph for social media sharing",
          "sitemap.xml and robots.txt for crawlers",
        ],
      },
      {
        heading: "Responsive Design:",
        items: [
          "Mobile First - default for small screens",
          "<code className='inline-code'>sm:</code> 640px - <code className='inline-code'>md:</code> 768px",
          "<code className='inline-code'>lg:</code> 1024px - <code className='inline-code'>xl:</code> 1280px",
          "Use <code className='inline-code'>next/image</code> for optimized images",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide SEO & Responsive",
    columns: [
      {
        heading: "Metadata API :",
        items: [
          "Statique : <code className='inline-code'>export const metadata = {...}</code>",
          "Dynamique : <code className='inline-code'>export async function generateMetadata()</code>",
          "Open Graph pour le partage sur les réseaux sociaux",
          "sitemap.xml et robots.txt pour les crawlers",
        ],
      },
      {
        heading: "Design responsive :",
        items: [
          "Mobile First - par défaut pour les petits écrans",
          "<code className='inline-code'>sm:</code> 640px - <code className='inline-code'>md:</code> 768px",
          "<code className='inline-code'>lg:</code> 1024px - <code className='inline-code'>xl:</code> 1280px",
          "Utiliser <code className='inline-code'>next/image</code> pour les images optimisées",
        ],
      },
    ],
  },
  de: {
    title: "SEO & Responsive Schnellreferenz",
    columns: [
      {
        heading: "Metadata API:",
        items: [
          "Statisch: <code className='inline-code'>export const metadata = {...}</code>",
          "Dynamisch: <code className='inline-code'>export async function generateMetadata()</code>",
          "Open Graph für Social-Media-Freigabe",
          "sitemap.xml und robots.txt für Crawler",
        ],
      },
      {
        heading: "Responsives Design:",
        items: [
          "Mobile First - Standard für kleine Bildschirme",
          "<code className='inline-code'>sm:</code> 640px - <code className='inline-code'>md:</code> 768px",
          "<code className='inline-code'>lg:</code> 1024px - <code className='inline-code'>xl:</code> 1280px",
          "<code className='inline-code'>next/image</code> für optimierte Bilder verwenden",
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

export default function SeoAndResponsive() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("final-project", "08-seo-and-responsive");
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
