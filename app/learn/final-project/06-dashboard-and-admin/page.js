"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/final-project/06-dashboard-and-admin";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1], ar: [1, 1, 1] };

const cheatSheetData = {
  en: {
    title: "Dashboard & Admin Quick Reference",
    columns: [
      {
        heading: "Supabase Storage:",
        items: [
          "<code className='inline-code'>.from('bucket').upload(path, file)</code> - Upload file",
          "<code className='inline-code'>.getPublicUrl(path)</code> - Get public URL",
          "<code className='inline-code'>.from('bucket').remove([path])</code> - Delete file",
        ],
      },
      {
        heading: "Key Concepts:",
        items: [
          "<code className='inline-code'>.range(start, end)</code> - Pagination range",
          "Promise.all for parallel queries",
          "useOptimistic for instant UI updates",
          "useTransition for background operations",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide Tableau de bord & Admin",
    columns: [
      {
        heading: "Supabase Storage :",
        items: [
          "<code className='inline-code'>.from('bucket').upload(path, file)</code> - Télécharger un fichier",
          "<code className='inline-code'>.getPublicUrl(path)</code> - Obtenir l'URL publique",
          "<code className='inline-code'>.from('bucket').remove([path])</code> - Supprimer un fichier",
        ],
      },
      {
        heading: "Concepts clés :",
        items: [
          "<code className='inline-code'>.range(start, end)</code> - Plage de pagination",
          "Promise.all pour les requêtes parallèles",
          "useOptimistic pour les mises à jour instantanées",
          "useTransition pour les opérations en arrière-plan",
        ],
      },
    ],
  },
  de: {
    title: "Dashboard & Admin Schnellreferenz",
    columns: [
      {
        heading: "Supabase Storage:",
        items: [
          "<code className='inline-code'>.from('bucket').upload(path, file)</code> - Datei hochladen",
          "<code className='inline-code'>.getPublicUrl(path)</code> - Öffentliche URL abrufen",
          "<code className='inline-code'>.from('bucket').remove([path])</code> - Datei löschen",
        ],
      },
      {
        heading: "Schlüsselkonzepte:",
        items: [
          "<code className='inline-code'>.range(start, end)</code> - Paginierungsbereich",
          "Promise.all für parallele Abfragen",
          "useOptimistic für sofortige UI-Updates",
          "useTransition für Hintergrundoperationen",
        ],
      },
    ],
  },
  ar: {
    title: "مرجع لوحة التحكم والإدارة السريع",
    columns: [
      {
        heading: "Supabase Storage:",
        items: [
          "<code className='inline-code'>.from('bucket').upload(path, file)</code> - رفع ملف",
          "<code className='inline-code'>.getPublicUrl(path)</code> - الحصول على رابط عام",
          "<code className='inline-code'>.from('bucket').remove([path])</code> - حذف ملف",
        ],
      },
      {
        heading: "المفاهيم الرئيسية:",
        items: [
          "<code className='inline-code'>.range(start, end)</code> - نطاق التقسيم",
          "Promise.all للاستعلامات المتوازية",
          "useOptimistic لتحديثات واجهة المستخدم الفورية",
          "useTransition للعمليات في الخلفية",
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

export default function DashboardAndAdminLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("final-project", "06-dashboard-and-admin");
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
