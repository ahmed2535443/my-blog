"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/html/06-semantic-html";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2, 1], fr: [1, 2, 1], de: [1, 2, 1] };

const challengeCode = `<!-- الحل المتوقع -->
<header>
  <h1>موقعي</h1>
  <nav>
    <ul>
      <li><a href="/">الرئيسية</a></li>
      <li><a href="/blog">المدونة</a></li>
      <li><a href="/contact">تواصل</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>عنوان المقال</h2>
    <p>محتوى المقال هنا...</p>
    <section>
      <h3>القسم الأول</h3>
      <p>تفاصيل إضافية...</p>
    </section>
  </article>

  <aside>
    <h3>مقالات ذات صلة</h3>
    <ul>
      <li><a href="#">مقال 1</a></li>
      <li><a href="#">مقال 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2026 جميع الحقوق محفوظة</p>
</footer>`;

const cheatSheetData = {
  en: {
    title: "Semantic HTML Cheat Sheet",
    columns: [
      {
        heading: "Structure Elements:",
        items: [
          '<code className="inline-code">&lt;header&gt;</code> - Page/section header',
          '<code className="inline-code">&lt;nav&gt;</code> - Navigation links',
          '<code className="inline-code">&lt;main&gt;</code> - Main content (one per page)',
          '<code className="inline-code">&lt;section&gt;</code> - Logical section with heading',
          '<code className="inline-code">&lt;article&gt;</code> - Independent content',
          '<code className="inline-code">&lt;aside&gt;</code> - Sidebar content',
          '<code className="inline-code">&lt;footer&gt;</code> - Page/section footer',
        ],
      },
      {
        heading: "Text Elements:",
        items: [
          '<code className="inline-code">&lt;figure&gt;</code> - Image/content wrapper',
          '<code className="inline-code">&lt;figcaption&gt;</code> - Figure caption',
          '<code className="inline-code">&lt;blockquote&gt;</code> - Block quote',
          '<code className="inline-code">&lt;cite&gt;</code> - Citation source',
          '<code className="inline-code">&lt;mark&gt;</code> - Highlighted text',
          '<code className="inline-code">&lt;time&gt;</code> - Dates and times',
        ],
      },
      {
        heading: "Lists & Tables:",
        items: [
          '<code className="inline-code">&lt;details&gt;</code> - Expandable content',
          '<code className="inline-code">&lt;summary&gt;</code> - Details summary',
          '<code className="inline-code">&lt;caption&gt;</code> - Table title',
          '<code className="inline-code">&lt;thead&gt;</code> - Table header',
          '<code className="inline-code">&lt;tbody&gt;</code> - Table body',
          '<code className="inline-code">&lt;tfoot&gt;</code> - Table footer',
        ],
      },
      {
        heading: "Page Structure:",
        code: `<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <article>...</article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>`,
        codeLanguage: "html",
      },
    ],
  },
  fr: {
    title: "Fiche mémo HTML Sémantique",
    columns: [
      {
        heading: "Éléments de structure:",
        items: [
          '<code className="inline-code">&lt;header&gt;</code> - En-tête de page/section',
          '<code className="inline-code">&lt;nav&gt;</code> - Liens de navigation',
          '<code className="inline-code">&lt;main&gt;</code> - Contenu principal (un par page)',
          '<code className="inline-code">&lt;section&gt;</code> - Section logique avec titre',
          '<code className="inline-code">&lt;article&gt;</code> - Contenu indépendant',
          '<code className="inline-code">&lt;aside&gt;</code> - Contenu latéral',
          '<code className="inline-code">&lt;footer&gt;</code> - Pied de page/section',
        ],
      },
      {
        heading: "Éléments de texte:",
        items: [
          '<code className="inline-code">&lt;figure&gt;</code> - Conteneur d\'image/contenu',
          '<code className="inline-code">&lt;figcaption&gt;</code> - Légende de figure',
          '<code className="inline-code">&lt;blockquote&gt;</code> - Citation',
          '<code className="inline-code">&lt;cite&gt;</code> - Source de citation',
          '<code className="inline-code">&lt;mark&gt;</code> - Texte surligné',
          '<code className="inline-code">&lt;time&gt;</code> - Dates et heures',
        ],
      },
      {
        heading: "Listes et tableaux:",
        items: [
          '<code className="inline-code">&lt;details&gt;</code> - Contenu extensible',
          '<code className="inline-code">&lt;summary&gt;</code> - Résumé des détails',
          '<code className="inline-code">&lt;caption&gt;</code> - Titre du tableau',
          '<code className="inline-code">&lt;thead&gt;</code> - En-tête du tableau',
          '<code className="inline-code">&lt;tbody&gt;</code> - Corps du tableau',
          '<code className="inline-code">&lt;tfoot&gt;</code> - Pied du tableau',
        ],
      },
      {
        heading: "Structure de la page:",
        code: `<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <article>...</article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>`,
        codeLanguage: "html",
      },
    ],
  },
  de: {
    title: "Spickzettel Semantisches HTML",
    columns: [
      {
        heading: "Strukturelemente:",
        items: [
          '<code className="inline-code">&lt;header&gt;</code> - Seiten-/Abschnittskopf',
          '<code className="inline-code">&lt;nav&gt;</code> - Navigationslinks',
          '<code className="inline-code">&lt;main&gt;</code> - Hauptinhalt (eine pro Seite)',
          '<code className="inline-code">&lt;section&gt;</code> - Logischer Abschnitt mit Überschrift',
          '<code className="inline-code">&lt;article&gt;</code> - Unabhängiger Inhalt',
          '<code className="inline-code">&lt;aside&gt;</code> - Seitenleisten-Inhalt',
          '<code className="inline-code">&lt;footer&gt;</code> - Seiten-/Abschnittsfuß',
        ],
      },
      {
        heading: "Textelemente:",
        items: [
          '<code className="inline-code">&lt;figure&gt;</code> - Bild-/Inhalts-Container',
          '<code className="inline-code">&lt;figcaption&gt;</code> - Abbildungsunterschrift',
          '<code className="inline-code">&lt;blockquote&gt;</code> - Block-Zitat',
          '<code className="inline-code">&lt;cite&gt;</code> - Zitationsquelle',
          '<code className="inline-code">&lt;mark&gt;</code> - Hervorgehobener Text',
          '<code className="inline-code">&lt;time&gt;</code> - Daten und Zeiten',
        ],
      },
      {
        heading: "Listen & Tabellen:",
        items: [
          '<code className="inline-code">&lt;details&gt;</code> - Erweiterbarer Inhalt',
          '<code className="inline-code">&lt;summary&gt;</code> - Details-Zusammenfassung',
          '<code className="inline-code">&lt;caption&gt;</code> - Tabellentitel',
          '<code className="inline-code">&lt;thead&gt;</code> - Tabellenkopf',
          '<code className="inline-code">&lt;tbody&gt;</code> - Tabellenkörper',
          '<code className="inline-code">&lt;tfoot&gt;</code> - Tabellenfuß',
        ],
      },
      {
        heading: "Seitenstruktur:",
        code: `<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <article>...</article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>`,
        codeLanguage: "html",
      },
    ],
  },
};

const miniProject = {
  en: {
    title: "Mini Project: Semantic Blog Layout",
    description: "Create a blog page using semantic HTML elements:",
    items: [
      'A <code>&lt;header&gt;</code> with site title and <code>&lt;nav&gt;</code>',
      'A <code>&lt;main&gt;</code> containing an <code>&lt;article&gt;</code> with <code>&lt;section&gt;</code>s',
      'An <code>&lt;aside&gt;</code> for related articles or sidebar',
      'Use <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> for images',
      'Use <code>&lt;time&gt;</code> for article dates',
      'A <code>&lt;footer&gt;</code> with copyright info',
    ],
    hint: "Remember: <code>&lt;main&gt;</code> should appear only once per page. Each <code>&lt;section&gt;</code> should have a heading. <code>&lt;article&gt;</code> content should be independently distributable.",
  },
  fr: {
    title: "Mini Projet: Mise en page de blog sémantique",
    description: "Créez une page de blog avec des éléments HTML sémantiques:",
    items: [
      'Un <code>&lt;header&gt;</code> avec le titre du site et <code>&lt;nav&gt;</code>',
      'Un <code>&lt;main&gt;</code> contenant un <code>&lt;article&gt;</code> avec des <code>&lt;section&gt;</code>s',
      'Un <code>&lt;aside&gt;</code> pour les articles connexes ou la barre latérale',
      'Utilisez <code>&lt;figure&gt;</code> et <code>&lt;figcaption&gt;</code> pour les images',
      'Utilisez <code>&lt;time&gt;</code> pour les dates d\'articles',
      'Un <code>&lt;footer&gt;</code> avec les informations de copyright',
    ],
    hint: "N\'oubliez pas: <code>&lt;main&gt;</code> ne doit apparaître qu\'une seule fois par page. Chaque <code>&lt;section&gt;</code> doit avoir un titre. Le contenu de <code>&lt;article&gt;</code> doit être indépendamment distribuable.",
  },
  de: {
    title: "Mini-Projekt: Semantisches Blog-Layout",
    description: "Erstellen Sie eine Blog-Seite mit semantischen HTML-Elementen:",
    items: [
      'Ein <code>&lt;header&gt;</code> mit Seitentitel und <code>&lt;nav&gt;</code>',
      'Ein <code>&lt;main&gt;</code> mit einem <code>&lt;article&gt;</code> und <code>&lt;section&gt;</code>s',
      'Ein <code>&lt;aside&gt;</code> für verwandte Artikel oder Seitenleiste',
      'Verwenden Sie <code>&lt;figure&gt;</code> und <code>&lt;figcaption&gt;</code> für Bilder',
      'Verwenden Sie <code>&lt;time&gt;</code> für Artikeldaten',
      'Ein <code>&lt;footer&gt;</code> mit Urheberrechtsinformationen',
    ],
    hint: "Denken Sie daran: <code>&lt;main&gt;</code> sollte nur einmal pro Seite erscheinen. Jede <code>&lt;section&gt;</code> sollte eine Überschrift haben. Der Inhalt von <code>&lt;article&gt;</code> sollte unabhängig verteilbar sein.",
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

export default function SemanticHtml() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("html", "06-semantic-html");
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
