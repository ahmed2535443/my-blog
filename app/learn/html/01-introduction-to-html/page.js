"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/html/01-introduction-to-html";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [2, 1, 0], en: [2, 1, 0], fr: [2, 1, 0], de: [2, 1, 0] };

const challengeCode = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>My Profile</title>
</head>
<body>
    <h1>Hello, I'm Ahmed</h1>
    <p>I'm a beginner in programming and currently learning HTML</p>
    <h2>My Hobbies:</h2>
    <ul>
        <li>Programming</li>
        <li>Reading</li>
        <li>Gaming</li>
    </ul>
</body>
</html>`;

const cheatSheetData = {
  ar: {
    title: "ملخص HTML - الدرس الأول",
    columns: [
      {
        heading: "العلامات الأساسية:",
        items: [
          '<code className="inline-code">&lt;!DOCTYPE html&gt;</code> - إعلان نوع المستند',
          '<code className="inline-code">&lt;html&gt;</code> - العنصر الجذر',
          '<code className="inline-code">&lt;head&gt;</code> - البيانات الوصفية للصفحة',
          '<code className="inline-code">&lt;body&gt;</code> - المحتوى المرئي',
          '<code className="inline-code">&lt;title&gt;</code> - عنوان التبويب',
          '<code className="inline-code">&lt;meta&gt;</code> - معلومات البيانات الوصفية',
        ],
      },
      {
        heading: "قالب صفحة أساسية:",
        code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>العنوان</title>
</head>
<body>
  <!-- المحتوى هنا -->
</body>
</html>`,
        codeLanguage: "html",
      },
    ],
  },
  en: {
    title: "HTML Cheat Sheet - Lesson 1",
    columns: [
      {
        heading: "Basic Tags:",
        items: [
          '<code className="inline-code">&lt;!DOCTYPE html&gt;</code> - Document type declaration',
          '<code className="inline-code">&lt;html&gt;</code> - Root element',
          '<code className="inline-code">&lt;head&gt;</code> - Page metadata',
          '<code className="inline-code">&lt;body&gt;</code> - Visible content',
          '<code className="inline-code">&lt;title&gt;</code> - Tab title',
          '<code className="inline-code">&lt;meta&gt;</code> - Metadata information',
        ],
      },
      {
        heading: "Basic Page Template:",
        code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <!-- Content here -->
</body>
</html>`,
        codeLanguage: "html",
      },
    ],
  },
  fr: {
    title: "Fiche mémo HTML - Leçon 1",
    columns: [
      {
        heading: "Balises de base:",
        items: [
          '<code className="inline-code">&lt;!DOCTYPE html&gt;</code> - Déclaration du type de document',
          '<code className="inline-code">&lt;html&gt;</code> - Élément racine',
          '<code className="inline-code">&lt;head&gt;</code> - Métadonnées de la page',
          '<code className="inline-code">&lt;body&gt;</code> - Contenu visible',
          '<code className="inline-code">&lt;title&gt;</code> - Titre de l\'onglet',
          '<code className="inline-code">&lt;meta&gt;</code> - Informations de métadonnées',
        ],
      },
      {
        heading: "Modèle de page de base:",
        code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <!-- Content here -->
</body>
</html>`,
        codeLanguage: "html",
      },
    ],
  },
  de: {
    title: "HTML-Spickzettel - Lektion 1",
    columns: [
      {
        heading: "Grundlegende Tags:",
        items: [
          '<code className="inline-code">&lt;!DOCTYPE html&gt;</code> - Dokumenttyp-Deklaration',
          '<code className="inline-code">&lt;html&gt;</code> - Root-Element',
          '<code className="inline-code">&lt;head&gt;</code> - Seitenmetadaten',
          '<code className="inline-code">&lt;body&gt;</code> - Sichtbarer Inhalt',
          '<code className="inline-code">&lt;title&gt;</code> - Tab-Titel',
          '<code className="inline-code">&lt;meta&gt;</code> - Metadaten-Informationen',
        ],
      },
      {
        heading: "Grundlegende Seitenvorlage:",
        code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <!-- Content here -->
</body>
</html>`,
        codeLanguage: "html",
      },
    ],
  },
};

const miniProject = {
  ar: {
    title: "مشروع صغير: بطاقة هوية شخصية",
    description: "أنشئ صفحة HTML تحتوي على بطاقة هوية شخصية تتضمن:",
    items: [
      'اسمك كعنوان رئيسي <code>&lt;h1&gt;</code>',
      'وصف مختصر عنك في فقرة <code>&lt;p&gt;</code>',
      'قائمة بمهاراتك <code>&lt;ul&gt;</code>',
      'قائمة مرقمة بتجاربك <code>&lt;ol&gt;</code>',
      'رابط لصفحتك أو بريدك الإلكتروني <code>&lt;a&gt;</code>',
    ],
    hint: "ستحتاج علامات جديدة لم تتعلمها بعد مثل <code>&lt;a&gt;</code> للروابط. يمكنك البحث عنها على Google أو الانتظار حتى الدرس القادم!",
  },
  en: {
    title: "Mini Project: Personal ID Card",
    description: "Create an HTML page containing a personal ID card that includes:",
    items: [
      'Your name as a main heading <code>&lt;h1&gt;</code>',
      'A brief description of yourself in a paragraph <code>&lt;p&gt;</code>',
      'A list of your skills <code>&lt;ul&gt;</code>',
      'A numbered list of your experiences <code>&lt;ol&gt;</code>',
      'A link to your page or email <code>&lt;a&gt;</code>',
    ],
    hint: "You'll need new tags we haven't learned yet like <code>&lt;a&gt;</code> for links. You can search for them on Google or wait for the next lesson!",
  },
  fr: {
    title: "Mini Projet: Carte d'identification personnelle",
    description: "Créez une page HTML contenant une carte d'identification personnelle comprenant:",
    items: [
      'Votre nom comme titre principal <code>&lt;h1&gt;</code>',
      'Une brève description de vous-même dans un paragraphe <code>&lt;p&gt;</code>',
      'Une liste de vos compétences <code>&lt;ul&gt;</code>',
      'Une liste numérotée de vos expériences <code>&lt;ol&gt;</code>',
      'Un lien vers votre page ou email <code>&lt;a&gt;</code>',
    ],
    hint: "Vous aurez besoin de nouvelles balises que nous n'avons pas encore apprises comme <code>&lt;a&gt;</code> pour les liens. Vous pouvez les chercher sur Google ou attendre la prochaine leçon!",
  },
  de: {
    title: "Mini-Projekt: Persönliche Ausweiskarte",
    description: "Erstellen Sie eine HTML-Seite mit einer persönlichen Ausweiskarte, die Folgendes enthält:",
    items: [
      'Ihren Namen als Hauptüberschrift <code>&lt;h1&gt;</code>',
      'Eine kurze Selbstbeschreibung in einem Absatz <code>&lt;p&gt;</code>',
      'Eine Liste Ihrer Fähigkeiten <code>&lt;ul&gt;</code>',
      'Eine nummerierte Liste Ihrer Erfahrungen <code>&lt;ol&gt;</code>',
      'Einen Link zu Ihrer Seite oder E-Mail <code>&lt;a&gt;</code>',
    ],
    hint: "Sie werden neue Tags brauchen, die wir noch nicht gelernt haben, wie <code>&lt;a&gt;</code> für Links. Sie können danach auf Google suchen oder auf die nächste Lektion warten!",
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

export default function IntroductionToHtml() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("html", "01-introduction-to-html");
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
