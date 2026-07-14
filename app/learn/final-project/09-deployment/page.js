"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/final-project/09-deployment";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1, 1], fr: [1, 1, 1, 1], de: [1, 1, 1, 1] };

const cheatSheetData = {
  en: {
    title: "Deployment Quick Reference",
    columns: [
      {
        heading: "Vercel Deploy Steps:",
        items: [
          "1. Setup project on GitHub",
          "2. Create Vercel account",
          "3. Import repository",
          "4. Add environment variables",
          "5. Deploy automatically",
        ],
      },
      {
        heading: "Key Configurations:",
        items: [
          "<code className='inline-code'>vercel.json</code> - Headers, redirects, crons",
          "Environment variables for production",
          "Supabase RLS and Storage policies",
          "GitHub Actions for CI/CD",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide de déploiement",
    columns: [
      {
        heading: "Étapes de déploiement Vercel :",
        items: [
          "1. Configurer le projet sur GitHub",
          "2. Créer un compte Vercel",
          "3. Importer le dépôt",
          "4. Ajouter les variables d'environnement",
          "5. Déployer automatiquement",
        ],
      },
      {
        heading: "Configurations clés :",
        items: [
          "<code className='inline-code'>vercel.json</code> - En-têtes, redirections, crons",
          "Variables d'environnement pour la production",
          "Politiques RLS et Storage Supabase",
          "GitHub Actions pour le CI/CD",
        ],
      },
    ],
  },
  de: {
    title: "Deployment Schnellreferenz",
    columns: [
      {
        heading: "Vercel Deploy-Schritte:",
        items: [
          "1. Projekt auf GitHub einrichten",
          "2. Vercel-Konto erstellen",
          "3. Repository importieren",
          "4. Umgebungsvariablen hinzufügen",
          "5. Automatisch deployen",
        ],
      },
      {
        heading: "Schlüsselkonfigurationen:",
        items: [
          "<code className='inline-code'>vercel.json</code> - Headers, Redirects, Crons",
          "Umgebungsvariablen für Produktion",
          "Supabase RLS und Storage-Richtlinien",
          "GitHub Actions für CI/CD",
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

export default function Deployment() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("final-project", "09-deployment");
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
