"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/html/02-elements-and-text";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2, 0], en: [1, 2, 0], fr: [1, 2, 0], de: [1, 2, 0] };

const challengeCode = `<h1>مقدمة في HTML</h1>
<p>HTML هي لغة الويب الأساسية. تُستخدم لبناء صفحات الويب.</p>

<h2>أنواع العناصر</h2>
<p>هناك عدة أنواع من العناصر في HTML:</p>

<h3>العناوين</h3>
<p>يوجد 6 مستويات من العناوين من h1 إلى h6.</p>

<h3>القوائم</h3>
<ul>
    <li>العناصر غير المرقمة تستخدم ul</li>
    <li>العناصر المرقمة تستخدم ol</li>
</ul>

<h3>النص العريض والمائل</h3>
<p>يمكنك استخدام <strong>strong</strong> للنص العريض و <em>em</em> للنص المائل.</p>

<blockquote>
    <p>هذا اقتباس من مصدر موثوق.</p>
</blockquote>

<hr>

<p>هذا مثال على <code>النص المنسق</code> внутри فقرة.</p>`;

const cheatSheetData = {
  ar: {
    title: "ملخص العناصر والنصوص",
    columns: [
      {
        heading: "العناوين:",
        items: [
          '<code className="inline-code">&lt;h1&gt;</code> إلى <code className="inline-code">&lt;h6&gt;</code> - ستة مستويات عنوان',
          '<code className="inline-code">&lt;h1&gt;</code> هو الأكبر، <code className="inline-code">&lt;h6&gt;</code> هو الأصغر',
          "استخدم العناوين بالتسلسل، لا تتخطى المستويات",
        ],
      },
      {
        heading: "علامات النص:",
        items: [
          '<code className="inline-code">&lt;p&gt;</code> - فقرة',
          '<code className="inline-code">&lt;strong&gt;</code> - عريض (أهمية دلالية)',
          '<code className="inline-code">&lt;em&gt;</code> - مائل (تأكيد)',
          '<code className="inline-code">&lt;code&gt;</code> - كود مضمّن',
          '<code className="inline-code">&lt;blockquote&gt;</code> - اقتباس كتلي',
          '<code className="inline-code">&lt;pre&gt;</code> - نص مُنسّق مسبقاً',
        ],
      },
      {
        heading: "القوائم:",
        items: [
          '<code className="inline-code">&lt;ul&gt;</code> - قائمة غير مرقمة',
          '<code className="inline-code">&lt;ol&gt;</code> - قائمة مرقمة',
          '<code className="inline-code">&lt;li&gt;</code> - عنصر قائمة',
          '<code className="inline-code">&lt;dl&gt;</code> - قائمة وصفية',
        ],
      },
      {
        heading: "العناصر الفارغة:",
        items: [
          '<code className="inline-code">&lt;br&gt;</code> - سطر جديد',
          '<code className="inline-code">&lt;hr&gt;</code> - خط أفقي',
          '<code className="inline-code">&lt;img&gt;</code> - صورة (بدون علامة إغلاق)',
        ],
        code: `<!-- العناوين -->
<h1>العنوان الرئيسي</h1>
<h2>عنوان فرعي</h2>
<h3>عنوان قسم</h3>

<!-- النص -->
<p>نص الفقرة</p>
<strong>نص عريض</strong>
<em>نص مائل</em>
<code>كود مضمّن</code>

<!-- القوائم -->
<ul>
  <li>عنصر 1</li>
  <li>عنصر 2</li>
</ul>
<ol>
  <li>الأول</li>
  <li>الثاني</li>
</ol>`,
        codeLanguage: "html",
      },
    ],
  },
  en: {
    title: "Elements and Text Cheat Sheet",
    columns: [
      {
        heading: "Headings:",
        items: [
          '<code className="inline-code">&lt;h1&gt;</code> to <code className="inline-code">&lt;h6&gt;</code> - Six heading levels',
          '<code className="inline-code">&lt;h1&gt;</code> is the largest, <code className="inline-code">&lt;h6&gt;</code> is the smallest',
          "Use headings sequentially, don't skip levels",
        ],
      },
      {
        heading: "Text Tags:",
        items: [
          '<code className="inline-code">&lt;p&gt;</code> - Paragraph',
          '<code className="inline-code">&lt;strong&gt;</code> - Bold (semantic importance)',
          '<code className="inline-code">&lt;em&gt;</code> - Italic (emphasis)',
          '<code className="inline-code">&lt;code&gt;</code> - Inline code',
          '<code className="inline-code">&lt;blockquote&gt;</code> - Block quote',
          '<code className="inline-code">&lt;pre&gt;</code> - Preformatted text',
        ],
      },
      {
        heading: "Lists:",
        items: [
          '<code className="inline-code">&lt;ul&gt;</code> - Unordered list',
          '<code className="inline-code">&lt;ol&gt;</code> - Ordered list',
          '<code className="inline-code">&lt;li&gt;</code> - List item',
          '<code className="inline-code">&lt;dl&gt;</code> - Description list',
        ],
      },
      {
        heading: "Empty Elements:",
        items: [
          '<code className="inline-code">&lt;br&gt;</code> - Line break',
          '<code className="inline-code">&lt;hr&gt;</code> - Horizontal rule',
          '<code className="inline-code">&lt;img&gt;</code> - Image (no closing tag)',
        ],
        code: `<!-- Headings -->
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section Title</h3>

<!-- Text -->
<p>Paragraph text</p>
<strong>Bold text</strong>
<em>Italic text</em>
<code>inline code</code>

<!-- Lists -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol>
  <li>First</li>
  <li>Second</li>
</ol>`,
        codeLanguage: "html",
      },
    ],
  },
  fr: {
    title: "Fiche mémo Éléments et Texte",
    columns: [
      {
        heading: "Titres:",
        items: [
          '<code className="inline-code">&lt;h1&gt;</code> à <code className="inline-code">&lt;h6&gt;</code> - Six niveaux de titres',
          '<code className="inline-code">&lt;h1&gt;</code> est le plus grand, <code className="inline-code">&lt;h6&gt;</code> le plus petit',
          "Utilisez les titres séquentiellement, ne sautez pas de niveaux",
        ],
      },
      {
        heading: "Balises de texte:",
        items: [
          '<code className="inline-code">&lt;p&gt;</code> - Paragraphe',
          '<code className="inline-code">&lt;strong&gt;</code> - Gras (importance sémantique)',
          '<code className="inline-code">&lt;em&gt;</code> - Italique (emphase)',
          '<code className="inline-code">&lt;code&gt;</code> - Code en ligne',
          '<code className="inline-code">&lt;blockquote&gt;</code> - Citation',
          '<code className="inline-code">&lt;pre&gt;</code> - Texte préformaté',
        ],
      },
      {
        heading: "Listes:",
        items: [
          '<code className="inline-code">&lt;ul&gt;</code> - Liste non ordonnée',
          '<code className="inline-code">&lt;ol&gt;</code> - Liste ordonnée',
          '<code className="inline-code">&lt;li&gt;</code> - Élément de liste',
          '<code className="inline-code">&lt;dl&gt;</code> - Liste de définition',
        ],
      },
      {
        heading: "Éléments vides:",
        items: [
          '<code className="inline-code">&lt;br&gt;</code> - Saut de ligne',
          '<code className="inline-code">&lt;hr&gt;</code> - Ligne horizontale',
          '<code className="inline-code">&lt;img&gt;</code> - Image (pas de balise de fermeture)',
        ],
        code: `<!-- Titres -->
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Titre de section</h3>

<!-- Texte -->
<p>Texte de paragraphe</p>
<strong>Texte en gras</strong>
<em>Texte en italique</em>
<code>code en ligne</code>

<!-- Listes -->
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>
<ol>
  <li>Premier</li>
  <li>Deuxième</li>
</ol>`,
        codeLanguage: "html",
      },
    ],
  },
  de: {
    title: "Spickzettel Elemente und Text",
    columns: [
      {
        heading: "Überschriften:",
        items: [
          '<code className="inline-code">&lt;h1&gt;</code> bis <code className="inline-code">&lt;h6&gt;</code> - Sechs Überschriftsebenen',
          '<code className="inline-code">&lt;h1&gt;</code> ist die größte, <code className="inline-code">&lt;h6&gt;</code> die kleinste',
          "Verwenden Sie Überschriften sequentiell, überspringen Sie keine Ebenen",
        ],
      },
      {
        heading: "Text-Tags:",
        items: [
          '<code className="inline-code">&lt;p&gt;</code> - Absatz',
          '<code className="inline-code">&lt;strong&gt;</code> - Fett (semantische Bedeutung)',
          '<code className="inline-code">&lt;em&gt;</code> - Kursiv (Hervorhebung)',
          '<code className="inline-code">&lt;code&gt;</code> - Inline-Code',
          '<code className="inline-code">&lt;blockquote&gt;</code> - Block-Zitat',
          '<code className="inline-code">&lt;pre&gt;</code> - Vorformatierter Text',
        ],
      },
      {
        heading: "Listen:",
        items: [
          '<code className="inline-code">&lt;ul&gt;</code> - Ungeordnete Liste',
          '<code className="inline-code">&lt;ol&gt;</code> - Geordnete Liste',
          '<code className="inline-code">&lt;li&gt;</code> - Listen-Element',
          '<code className="inline-code">&lt;dl&gt;</code> - Beschreibungsliste',
        ],
      },
      {
        heading: "Leere Elemente:",
        items: [
          '<code className="inline-code">&lt;br&gt;</code> - Zeilenumbruch',
          '<code className="inline-code">&lt;hr&gt;</code> - Horizontale Linie',
          '<code className="inline-code">&lt;img&gt;</code> - Bild (kein Schließungstag)',
        ],
        code: `<!-- Überschriften -->
<h1>Haupttitel</h1>
<h2>Untertitel</h2>
<h3>Abschnittstitel</h3>

<!-- Text -->
<p>Absatztext</p>
<strong>Fetter Text</strong>
<em>Kursiver Text</em>
<code>Inline-Code</code>

<!-- Listen -->
<ul>
  <li>Element 1</li>
  <li>Element 2</li>
</ul>
<ol>
  <li>Erstes</li>
  <li>Zweites</li>
</ol>`,
        codeLanguage: "html",
      },
    ],
  },
};

const miniProject = {
  ar: {
    title: "مشروع صغير: صفحة ملف شخصي",
    description: "أنشئ صفحة ملف شخصي تتضمن:",
    items: [
      'اسمك كعنوان رئيسي <code>&lt;h1&gt;</code>',
      'نبذة مختصرة في فقرة <code>&lt;p&gt;</code>',
      'مهاراتك في قائمة غير مرقمة <code>&lt;ul&gt;</code>',
      'تجاربك في قائمة مرقمة <code>&lt;ol&gt;</code>',
      'اقتباس بمقالتك المفضلة',
      'خط أفقي لفصل الأقسام',
    ],
    hint: "استخدم جميع العلامات التي تعلمتها في هذا الدرس. تذكر استخدام العناوين بالترتيب (h1، h2، h3) دون تخطي المستويات.",
  },
  en: {
    title: "Mini Project: Personal Profile Page",
    description: "Create a personal profile page that includes:",
    items: [
      'Your name as a main heading <code>&lt;h1&gt;</code>',
      'A brief bio in a paragraph <code>&lt;p&gt;</code>',
      'Your skills as an unordered list <code>&lt;ul&gt;</code>',
      'Your experiences as an ordered list <code>&lt;ol&gt;</code>',
      'A blockquote with your favorite quote',
      'A horizontal rule to separate sections',
    ],
    hint: "Use all the tags you learned in this lesson. Remember to use headings in order (h1, h2, h3) without skipping levels.",
  },
  fr: {
    title: "Mini Projet: Page de profil personnel",
    description: "Créez une page de profil personnel comprenant:",
    items: [
      'Votre nom comme titre principal <code>&lt;h1&gt;</code>',
      'Une brève bio dans un paragraphe <code>&lt;p&gt;</code>',
      'Vos compétences en liste non ordonnée <code>&lt;ul&gt;</code>',
      'Vos expériences en liste ordonnée <code>&lt;ol&gt;</code>',
      'Un bloc de citation avec votre citation préférée',
      'Une ligne horizontale pour séparer les sections',
    ],
    hint: "Utilisez toutes les balises que vous avez apprises dans cette leçon. N'oubliez pas d'utiliser les titres dans l'ordre (h1, h2, h3) sans sauter de niveaux.",
  },
  de: {
    title: "Mini-Projekt: Persönliche Profilseite",
    description: "Erstellen Sie eine persönliche Profilseite mit:",
    items: [
      'Ihren Namen als Hauptüberschrift <code>&lt;h1&gt;</code>',
      'Eine kurze Biografie in einem Absatz <code>&lt;p&gt;</code>',
      'Ihre Fähigkeiten als ungeordnete Liste <code>&lt;ul&gt;</code>',
      'Ihre Erfahrungen als geordnete Liste <code>&lt;ol&gt;</code>',
      'Ein Zitat mit Ihrem Lieblingszitat',
      'Eine horizontale Linie zur Trennung der Abschnitte',
    ],
    hint: "Verwenden Sie alle Tags, die Sie in dieser Lektion gelernt haben. Denken Sie daran, Überschriften der Reihe nach zu verwenden (h1, h2, h3), ohne Ebenen zu überspringen.",
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
  if (item.type === "h3") {
    return <h3 dangerouslySetInnerHTML={{ __html: item.text }} />;
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

export default function ElementsAndText() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("html", "02-elements-and-text");
  const content = rawTranslations[lang] || rawTranslations.en;

  if (!content) return null;

  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;
  const mp = miniProject[lang] || miniProject.en;

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
            <CodeBlock language="html" code={challengeCode} />
          </Challenge>
        )}

        <div className="rounded-xl p-6 my-6 border-2" style={{ background: "var(--surface)", borderColor: "var(--secondary)" }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🏗️</span>
            <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>
              {mp.title}
            </span>
          </div>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>
            {mp.description}
          </p>
          <ul className="mb-4" style={{ color: "var(--foreground)" }}>
            {mp.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            💡 {mp.hint}
          </p>
        </div>

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
