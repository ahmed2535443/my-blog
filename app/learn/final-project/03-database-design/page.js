"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/final-project/03-database-design";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import LessonExtras from "@/components/LessonExtras";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [2], fr: [2], de: [2], ar: [2] };

const cheatSheetData = {
  en: {
    title: "Database Design Quick Reference",
    columns: [
      {
        heading: "Core Tables:",
        items: [
          "<code className='inline-code'>profiles</code> - User profiles linked to auth.users",
          "<code className='inline-code'>categories</code> - Article categories with slug and color",
          "<code className='inline-code'>posts</code> - Articles with title, content, status",
          "<code className='inline-code'>comments</code> - Nested comments with parent_id",
        ],
      },
      {
        heading: "Key Concepts:",
        items: [
          "ON DELETE CASCADE - Deletes related records automatically",
          "ON DELETE SET NULL - Sets foreign key to null",
          "RLS Policies - Row-level security for data protection",
          "Views - Saved queries for complex joins",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide de conception de base de données",
    columns: [
      {
        heading: "Tables principales :",
        items: [
          "<code className='inline-code'>profiles</code> - Profils utilisateur liés à auth.users",
          "<code className='inline-code'>categories</code> - Catégories d'articles avec slug et couleur",
          "<code className='inline-code'>posts</code> - Articles avec titre, contenu, statut",
          "<code className='inline-code'>comments</code> - Commentaires imbriqués avec parent_id",
        ],
      },
      {
        heading: "Concepts clés :",
        items: [
          "ON DELETE CASCADE - Supprime automatiquement les enregistrements liés",
          "ON DELETE SET NULL - Définit la clé étrangère à null",
          "Politiques RLS - Sécurité au niveau des lignes",
          "Views - Requêtes enregistrées pour les jointures complexes",
        ],
      },
    ],
  },
  de: {
    title: "Datenbankdesign-Schnellreferenz",
    columns: [
      {
        heading: "Kerntabellen:",
        items: [
          "<code className='inline-code'>profiles</code> - Benutzerprofile verknüpft mit auth.users",
          "<code className='inline-code'>categories</code> - Artikelskategorien mit Slug und Farbe",
          "<code className='inline-code'>posts</code> - Artikel mit Titel, Inhalt, Status",
          "<code className='inline-code'>comments</code> - Verschachtelte Kommentare mit parent_id",
        ],
      },
      {
        heading: "Schlüsselkonzepte:",
        items: [
          "ON DELETE CASCADE - Löscht zugehörige Datensätze automatisch",
          "ON DELETE SET NULL - Setzt Fremdschlüssel auf null",
          "RLS-Richtlinien - Zeilenebenensicherheit für Datenschutz",
          "Views - Gespeicherte Abfragen für komplexe Joins",
        ],
      },
    ],
  },
  ar: {
    title: "مرجع تصميم قاعدة البيانات السريع",
    columns: [
      {
        heading: "الجداول الأساسية:",
        items: [
          "<code className='inline-code'>profiles</code> - ملفات تعريف المستخدمين المرتبطة بـ auth.users",
          "<code className='inline-code'>categories</code> - تصنيفات المقالات مع slug واللون",
          "<code className='inline-code'>posts</code> - المقالات مع العنوان والمحتوى والحالة",
          "<code className='inline-code'>comments</code> - التعليقات المتداخلة مع parent_id",
        ],
      },
      {
        heading: "المفاهيم الرئيسية:",
        items: [
          "ON DELETE CASCADE - يحذف السجلات المرتبطة تلقائيًا",
          "ON DELETE SET NULL - يضع المفتاح الأجنبي على null",
          "سياسات RLS - أمان على مستوى الصفوف لحماية البيانات",
          "العروض - استعلامات محفوظة للjoins المعقدة",
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

export default function DatabaseDesign() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("final-project", "03-database-design");
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

        <LessonExtras content={content} />

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
