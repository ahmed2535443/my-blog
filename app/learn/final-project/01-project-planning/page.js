"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/final-project/01-project-planning";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1], fr: [1], de: [1], ar: [1] };

const cheatSheetData = {
  en: {
    title: "Quick Planning Reference",
    columns: [
      {
        heading: "Planning Steps:",
        items: [
          "1. Define the Idea - Write a brief description of your project",
          "2. Analyze Requirements - Define core and additional features",
          "3. Choose Technologies - Choose the right tools for your project",
          "4. Plan the Structure - Define the file and folder structure",
        ],
      },
      {
        heading: "Key Technologies:",
        items: [
          "<code className='inline-code'>Next.js 16</code> - React framework with App Router",
          "<code className='inline-code'>Supabase</code> - PostgreSQL database with RLS",
          "<code className='inline-code'>Clerk</code> - User authentication",
          "<code className='inline-code'>Tailwind CSS</code> - Utility-first CSS framework",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide de planification",
    columns: [
      {
        heading: "Étapes de planification :",
        items: [
          "1. Définir l'idée - Écrivez une brève description de votre projet",
          "2. Analyser les besoins - Définissez les fonctionnalités de base et supplémentaires",
          "3. Choisir les technologies - Choisissez les bons outils pour votre projet",
          "4. Planifier la structure - Définissez la structure des fichiers et dossiers",
        ],
      },
      {
        heading: "Technologies clés :",
        items: [
          "<code className='inline-code'>Next.js 16</code> - Framework React avec App Router",
          "<code className='inline-code'>Supabase</code> - Base de données PostgreSQL avec RLS",
          "<code className='inline-code'>Clerk</code> - Authentification utilisateur",
          "<code className='inline-code'>Tailwind CSS</code> - Framework CSS utilitaire",
        ],
      },
    ],
  },
  de: {
    title: "Schnelle Planungsreferenz",
    columns: [
      {
        heading: "Planungsschritte:",
        items: [
          "1. Idee definieren - Schreiben Sie eine kurze Beschreibung Ihres Projekts",
          "2. Anforderungen analysieren - Definieren Sie Kern- und Zusatzfunktionen",
          "3. Technologien wählen - Wählen Sie die richtigen Tools für Ihr Projekt",
          "4. Struktur planen - Definieren Sie die Datei- und Ordnerstruktur",
        ],
      },
      {
        heading: "Schlüsseltechnologien:",
        items: [
          "<code className='inline-code'>Next.js 16</code> - React-Framework mit App Router",
          "<code className='inline-code'>Supabase</code> - PostgreSQL-Datenbank mit RLS",
          "<code className='inline-code'>Clerk</code> - Benutzerauthentifizierung",
          "<code className='inline-code'>Tailwind CSS</code> - Utility-First CSS-Framework",
        ],
      },
    ],
  },
  ar: {
    title: "مرجع التخطيط السريع",
    columns: [
      {
        heading: "خطوات التخطيط:",
        items: [
          "1. تحديد الفكرة - اكتب وصفًا موجزًا لمشروعك",
          "2. تحليل المتطلبات - حدد الميزات الأساسية والإضافية",
          "3. اختيار التقنيات - اختر الأدوات المناسبة لمشروعك",
          "4. تخطيط الهيكل - حدد هيكل الملفات والمجلدات",
        ],
      },
      {
        heading: "التقنيات الرئيسية:",
        items: [
          "<code className='inline-code'>Next.js 16</code> - إطار عمل React مع App Router",
          "<code className='inline-code'>Supabase</code> - قاعدة بيانات PostgreSQL مع RLS",
          "<code className='inline-code'>Clerk</code> - مصادقة المستخدمين",
          "<code className='inline-code'>Tailwind CSS</code> - إطار عمل CSS على أساس المساعدات",
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

export default function ProjectPlanning() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("final-project", "01-project-planning");
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
