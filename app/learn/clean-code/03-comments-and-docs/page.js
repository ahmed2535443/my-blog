"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clean-code/03-comments-and-docs";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [2], en: [2], fr: [2], de: [2] };

const challengeCode = `// ❌ Before improvement:

// Function to calculate price
function calc(p, q) {
  // Price multiplied by quantity
  return p * q;
}

// Check user eligibility
function check(u) {
  // If user age is greater than 18
  if (u.age > 18) {
    return true;
  }
  return false;
}

// ✅ After improvement:

/**
 * Calculate order total price
 * @param {number} unitPrice - Unit price
 * @param {number} quantity - Required quantity
 * @returns {number} Total before tax
 */
function calculateOrderTotal(unitPrice, quantity) {
  return unitPrice * quantity;
}

/**
 * Check customer eligibility for purchase
 * Customer must be 18 years or older per regulations
 * @param {Object} customer - Customer data
 * @param {number} customer.age - Customer age in years
 * @returns {boolean} true if eligible
 */
function isCustomerEligible(customer) {
  const minimumAge = 18;
  return customer.age >= minimumAge;
}`;

const cheatSheetData = {
  ar: {
    title: "ملخص التعليقات والتوثيق",
    columns: [
      {
        heading: "أنواع التعليقات:",
        items: [
          '<strong style={{ color: "#a855f7" }}>تعليقات لماذا ✅</strong> - تشرح السبب خلف القرار',
          '<strong style={{ color: "#a855f7" }}>TODO / FIXME</strong> - تتبع المهام المعلقة والمشاكل المعروفة',
          '<strong style={{ color: "#a855f7" }}>JSDoc</strong> - توثّق الدوال العامة بالتفصيل',
          '<strong style={{ color: "#ef4444" }}>تعليقاتماذا ❌</strong> - تشرحماذا يفعل الكود الواضح',
        ],
      },
      {
        heading: "قواعد التعليقات:",
        items: [
          '<strong style={{ color: "#22c55e" }}>الكود الموثّق ذاتياً</strong> - الأسماء الواضحة تحل محل التعليقات',
          '<strong style={{ color: "#22c55e" }}>حدّث أو احذف</strong> - التعليقات القديمة أسوأ من عدم وجود تعليق',
          '<strong style={{ color: "#22c55e" }}>TODO مسؤول</strong> - أضف اسمك والتاريخ والسبب',
          '<strong style={{ color: "#3b82f6" }}>README شامل</strong> - التثبيت والاستخدام والإعدادات والمساهمة',
        ],
      },
    ],
  },
  en: {
    title: "Comments and Documentation Cheat Sheet",
    columns: [
      {
        heading: "Comment types:",
        items: [
          '<strong style={{ color: "#a855f7" }}>WHY comments ✅</strong> - Explain the reason behind the decision',
          '<strong style={{ color: "#a855f7" }}>TODO / FIXME</strong> - Track pending tasks and known issues',
          '<strong style={{ color: "#a855f7" }}>JSDoc</strong> - Document public functions in detail',
          '<strong style={{ color: "#ef4444" }}>WHAT comments ❌</strong> - Explain what obvious code does',
        ],
      },
      {
        heading: "Comment rules:",
        items: [
          '<strong style={{ color: "#22c55e" }}>Self-documenting code</strong> - Clear names replace comments',
          '<strong style={{ color: "#22c55e" }}>Update or delete</strong> - Old comments are worse than no comment',
          '<strong style={{ color: "#22c55e" }}>Responsible TODO</strong> - Add your name, date, and reason',
          '<strong style={{ color: "#3b82f6" }}>Comprehensive README</strong> - Installation, usage, settings, contribution',
        ],
      },
    ],
  },
  fr: {
    title: "Référence des commentaires et de la documentation",
    columns: [
      {
        heading: "Types de commentaires :",
        items: [
          '<strong style={{ color: "#a855f7" }}>Commentaires POURQUOI ✅</strong> - Expliquent la raison derrière la décision',
          '<strong style={{ color: "#a855f7" }}>TODO / FIXME</strong> - Suivent les tâches en attente et les problèmes connus',
          '<strong style={{ color: "#a855f7" }}>JSDoc</strong> - Documentent les fonctions publiques en détail',
          '<strong style={{ color: "#ef4444" }}>Commentaires QUOI ❌</strong> - Expliquent ce que fait le code évident',
        ],
      },
      {
        heading: "Règles de commentaires :",
        items: [
          '<strong style={{ color: "#22c55e" }}>Code auto-documenté</strong> - Des noms clairs remplacent les commentaires',
          '<strong style={{ color: "#22c55e" }}>Mettez à jour ou supprimez</strong> - Les anciens commentaires sont pires que pas de commentaire',
          '<strong style={{ color: "#22c55e" }}>TODO responsable</strong> - Ajoutez votre nom, la date et la raison',
          '<strong style={{ color: "#3b82f6" }}>README complet</strong> - Installation, utilisation, paramètres, contribution',
        ],
      },
    ],
  },
  de: {
    title: "Übersicht über Kommentare und Dokumentation",
    columns: [
      {
        heading: "Kommentartypen:",
        items: [
          '<strong style={{ color: "#a855f7" }}>WARUM-Kommentare ✅</strong> - Erklären den Grund hinter der Entscheidung',
          '<strong style={{ color: "#a855f7" }}>TODO / FIXME</strong> - Verfolgen anstehende Aufgaben und bekannte Probleme',
          '<strong style={{ color: "#a855f7" }}>JSDokumentation</strong> - Dokumentieren öffentliche Funktionen im Detail',
          '<strong style={{ color: "#ef4444" }}>WAS-Kommentare ❌</strong> - Erklären, was offensichtlicher Code tut',
        ],
      },
      {
        heading: "Kommentarregeln:",
        items: [
          '<strong style={{ color: "#22c55e" }}>Selbst-dokumentierender Code</strong> - Klare Namen ersetzen Kommentare',
          '<strong style={{ color: "#22c55e" }}>Aktualisieren oder löschen</strong> - Alte Kommentare sind schlechter als keine',
          '<strong style={{ color: "#22c55e" }}>Verantwortungsvolles TODO</strong> - Fügen Sie Ihren Namen, das Datum und den Grund hinzu',
          '<strong style={{ color: "#3b82f6" }}>Umfassendes README</strong> - Installation, Nutzung, Einstellungen, Beitrag',
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

export default function CommentsAndDocs() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clean-code", "03-comments-and-docs");
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
            <CodeBlock language="javascript" code={challengeCode} />
          </Challenge>
        )}

        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                <ul className="text-sm space-y-1">
                  {col.items.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
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
