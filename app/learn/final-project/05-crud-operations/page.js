"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/final-project/05-crud-operations";
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
    title: "CRUD Operations Quick Reference",
    columns: [
      {
        heading: "Supabase Operations:",
        items: [
          "<code className='inline-code'>.insert([{}])</code> - Create a new record",
          "<code className='inline-code'>.select()</code> - Fetch data",
          "<code className='inline-code'>.update({})</code> - Update an existing record",
          "<code className='inline-code'>.delete()</code> - Delete a record",
          "<code className='inline-code'>.eq('field', value)</code> - Filter condition",
        ],
      },
      {
        heading: "Server Actions:",
        items: [
          "Start with <code className='inline-code'>\"use server\"</code> directive",
          "Receive <code className='inline-code'>FormData</code> as parameter",
          "Use <code className='inline-code'>revalidatePath()</code> to update cache",
          "Use <code className='inline-code'>redirect()</code> after success",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide des opérations CRUD",
    columns: [
      {
        heading: "Opérations Supabase :",
        items: [
          "<code className='inline-code'>.insert([{}])</code> - Créer un nouvel enregistrement",
          "<code className='inline-code'>.select()</code> - Récupérer les données",
          "<code className='inline-code'>.update({})</code> - Mettre à jour un enregistrement",
          "<code className='inline-code'>.delete()</code> - Supprimer un enregistrement",
          "<code className='inline-code'>.eq('field', value)</code> - Condition de filtre",
        ],
      },
      {
        heading: "Server Actions :",
        items: [
          "Commencer par la directive <code className='inline-code'>\"use server\"</code>",
          "Recevoir <code className='inline-code'>FormData</code> comme paramètre",
          "Utiliser <code className='inline-code'>revalidatePath()</code> pour mettre à jour le cache",
          "Utiliser <code className='inline-code'>redirect()</code> après le succès",
        ],
      },
    ],
  },
  de: {
    title: "CRUD-Operationen Schnellreferenz",
    columns: [
      {
        heading: "Supabase-Operationen:",
        items: [
          "<code className='inline-code'>.insert([{}])</code> - Neuen Datensatz erstellen",
          "<code className='inline-code'>.select()</code> - Daten abrufen",
          "<code className='inline-code'>.update({})</code> - Vorhandenen Datensatz aktualisieren",
          "<code className='inline-code'>.delete()</code> - Datensatz löschen",
          "<code className='inline-code'>.eq('field', value)</code> - Filterbedingung",
        ],
      },
      {
        heading: "Server Actions:",
        items: [
          "Beginnen mit <code className='inline-code'>\"use server\"</code> Direktive",
          "<code className='inline-code'>FormData</code> als Parameter empfangen",
          "<code className='inline-code'>revalidatePath()</code> zum Cache-Update verwenden",
          "<code className='inline-code'>redirect()</code> nach Erfolg verwenden",
        ],
      },
    ],
  },
  ar: {
    title: "مرجع عمليات CRUD السريع",
    columns: [
      {
        heading: "عمليات Supabase:",
        items: [
          "<code className='inline-code'>.insert([{}])</code> - إنشاء سجل جديد",
          "<code className='inline-code'>.select()</code> - جلب البيانات",
          "<code className='inline-code'>.update({})</code> - تحديث سجل موجود",
          "<code className='inline-code'>.delete()</code> - حذف سجل",
          "<code className='inline-code'>.eq('field', value)</code> - شرط الفلتر",
        ],
      },
      {
        heading: "Server Actions:",
        items: [
          "ابدأ بـ <code className='inline-code'>\"use server\"</code> توجيه",
          "تلقّي <code className='inline-code'>FormData</code> كمعامل",
          "استخدم <code className='inline-code'>revalidatePath()</code> لتحديث الذاكرة المؤقتة",
          "استخدم <code className='inline-code'>redirect()</code> بعد النجاح",
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

export default function CrudOperationsLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("final-project", "05-crud-operations");
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
