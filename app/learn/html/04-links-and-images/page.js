"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/html/04-links-and-images";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2, 1], fr: [1, 2, 1], de: [1, 2, 1] };

const challengeCode = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>معرضي الشخصي</title>
</head>
<body>
    <header>
        <a href="/">
            <img src="logo.svg" alt="شعار معرضي" width="100" height="40" />
        </a>
        <nav>
            <a href="#travel">رحلاتي</a>
            <a href="#nature">الطبيعة</a>
            <a href="#food">أكلاتي</a>
        </nav>
    </header>

    <main>
        <section id="travel">
            <h2>رحلاتي</h2>
            <figure>
                <img src="travel.jpg" alt="صورة من رحلة استانبول" width="600" height="400" />
                <figcaption>رحلة استانبول - صيف 2025</figcaption>
            </figure>
        </section>

        <section id="nature">
            <h2>الطبيعة</h2>
            <figure>
                <img src="nature.jpg" alt="غروب في الصحراء" width="600" height="400" />
                <figcaption>غروب الصحراء - الربع الخالي</figcaption>
            </figure>
        </section>

        <section id="food">
            <h2>أكلاتي</h2>
            <figure>
                <img src="food.jpg" alt="طعام منزلي" width="600" height="400" />
                <figcaption>وصفة منزلي - مندي الدجاج</figcaption>
            </figure>
        </section>
    </main>

    <footer>
        <p>تواصل: <a href="mailto:me@example.com">أرسل بريد</a> | <a href="tel:+966501234567">اتصل</a></p>
    </footer>
</body>
</html>`;

const cheatSheetData = {
  en: {
    title: "Links and Images Cheat Sheet",
    columns: [
      {
        heading: "Links:",
        items: [
          '<code className="inline-code">&lt;a href="url"&gt;</code> - Basic link',
          '<code className="inline-code">target="_blank"</code> - Opens in new tab',
          '<code className="inline-code">rel="noopener noreferrer"</code> - Security with _blank',
          '<code className="inline-code">href="#id"</code> - Internal page link',
          '<code className="inline-code">href="mailto:x@x.com"</code> - Email link',
          '<code className="inline-code">href="tel:+123456"</code> - Phone link',
          '<code className="inline-code">download</code> - File download link',
        ],
      },
      {
        heading: "Images:",
        items: [
          '<code className="inline-code">src</code> - Image source (required)',
          '<code className="inline-code">alt</code> - Alternative text (required)',
          '<code className="inline-code">width</code> / <code className="inline-code">height</code> - Dimensions',
          '<code className="inline-code">loading="lazy"</code> - Lazy loading',
          '<code className="inline-code">&lt;figure&gt;</code> - Image container',
          '<code className="inline-code">&lt;figcaption&gt;</code> - Image caption',
        ],
        code: `<!-- Links -->
<a href="https://example.com">External</a>
<a href="/about">Internal</a>
<a href="#section">Anchor</a>
<a href="mailto:x@x.com">Email</a>
<a href="file.pdf" download>Download</a>
<a href="url" target="_blank"
   rel="noopener noreferrer">New Tab</a>

<!-- Images -->
<img src="pic.jpg" alt="Description"
     width="400" height="300"
     loading="lazy" />

<figure>
  <img src="pic.jpg" alt="Description" />
  <figcaption>Caption text</figcaption>
</figure>`,
        codeLanguage: "html",
      },
    ],
  },
  fr: {
    title: "Fiche mémo Liens et Images",
    columns: [
      {
        heading: "Liens:",
        items: [
          '<code className="inline-code">&lt;a href="url"&gt;</code> - Lien de base',
          '<code className="inline-code">target="_blank"</code> - Ouvre dans un nouvel onglet',
          '<code className="inline-code">rel="noopener noreferrer"</code> - Sécurité avec _blank',
          '<code className="inline-code">href="#id"</code> - Lien interne',
          '<code className="inline-code">href="mailto:x@x.com"</code> - Lien email',
          '<code className="inline-code">href="tel:+123456"</code> - Lien téléphonique',
          '<code className="inline-code">download</code> - Lien de téléchargement',
        ],
      },
      {
        heading: "Images:",
        items: [
          '<code className="inline-code">src</code> - Source de l\'image (requis)',
          '<code className="inline-code">alt</code> - Texte alternatif (requis)',
          '<code className="inline-code">width</code> / <code className="inline-code">height</code> - Dimensions',
          '<code className="inline-code">loading="lazy"</code> - Chargement différé',
          '<code className="inline-code">&lt;figure&gt;</code> - Conteneur d\'image',
          '<code className="inline-code">&lt;figcaption&gt;</code> - Légende d\'image',
        ],
        code: `<!-- Liens -->
<a href="https://example.com">Externe</a>
<a href="/about">Interne</a>
<a href="#section">Ancre</a>
<a href="mailto:x@x.com">Email</a>
<a href="file.pdf" download>Télécharger</a>
<a href="url" target="_blank"
   rel="noopener noreferrer">Nouvel onglet</a>

<!-- Images -->
<img src="pic.jpg" alt="Description"
     width="400" height="300"
     loading="lazy" />

<figure>
  <img src="pic.jpg" alt="Description" />
  <figcaption>Texte de légende</figcaption>
</figure>`,
        codeLanguage: "html",
      },
    ],
  },
  de: {
    title: "Spickzettel Links und Bilder",
    columns: [
      {
        heading: "Links:",
        items: [
          '<code className="inline-code">&lt;a href="url"&gt;</code> - Basis-Link',
          '<code className="inline-code">target="_blank"</code> - Öffnet in neuem Tab',
          '<code className="inline-code">rel="noopener noreferrer"</code> - Sicherheit mit _blank',
          '<code className="inline-code">href="#id"</code> - Interner Seitenlink',
          '<code className="inline-code">href="mailto:x@x.com"</code> - E-Mail-Link',
          '<code className="inline-code">href="tel:+123456"</code> - Telefon-Link',
          '<code className="inline-code">download</code> - Datei-Download-Link',
        ],
      },
      {
        heading: "Bilder:",
        items: [
          '<code className="inline-code">src</code> - Bildquelle (erforderlich)',
          '<code className="inline-code">alt</code> - Alternativtext (erforderlich)',
          '<code className="inline-code">width</code> / <code className="inline-code">height</code> - Abmessungen',
          '<code className="inline-code">loading="lazy"</code> - Lazyladung',
          '<code className="inline-code">&lt;figure&gt;</code> - Bild-Container',
          '<code className="inline-code">&lt;figcaption&gt;</code> - Bildunterschrift',
        ],
        code: `<!-- Links -->
<a href="https://example.com">Extern</a>
<a href="/about">Intern</a>
<a href="#section">Anker</a>
<a href="mailto:x@x.com">E-Mail</a>
<a href="file.pdf" download>Herunterladen</a>
<a href="url" target="_blank"
   rel="noopener noreferrer">Neuer Tab</a>

<!-- Bilder -->
<img src="pic.jpg" alt="Beschreibung"
     width="400" height="300"
     loading="lazy" />

<figure>
  <img src="pic.jpg" alt="Beschreibung" />
  <figcaption>Bildunterschrift</figcaption>
</figure>`,
        codeLanguage: "html",
      },
    ],
  },
};

const miniProject = {
  en: {
    title: "Mini Project: Blog Page",
    description: "Create a simple blog page that includes:",
    items: [
      'Internal navigation between sections using <code>#</code> links',
      'Multiple articles, each with an image using <code>&lt;figure&gt;</code>',
      'External links to additional resources that open in new tabs',
      'A logo image that links to the homepage',
      'A contact section with email and phone links',
      'Use different link types: absolute, relative, internal, mailto, tel',
    ],
    hint: "Use <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> with each image, and don't forget <code>rel='noopener noreferrer'</code> with external links.",
  },
  fr: {
    title: "Mini Projet: Page de blog",
    description: "Créez une page de blog simple comprenant:",
    items: [
      'Navigation interne entre les sections avec des liens <code>#</code>',
      'Plusieurs articles, chacun avec une image utilisant <code>&lt;figure&gt;</code>',
      'Des liens externes vers des ressources supplémentaires qui s\'ouvrent dans de nouveaux onglets',
      'Une image de logo qui lie à la page d\'accueil',
      'Une section de contact avec des liens email et téléphone',
      'Utilisez différents types de liens: absolu, relatif, interne, mailto, tel',
    ],
    hint: "Utilisez <code>&lt;figure&gt;</code> et <code>&lt;figcaption&gt;</code> avec chaque image, et n'oubliez pas <code>rel='noopener noreferrer'</code> avec les liens externes.",
  },
  de: {
    title: "Mini-Projekt: Blog-Seite",
    description: "Erstellen Sie eine einfache Blog-Seite mit:",
    items: [
      'Interne Navigation zwischen Abschnitten mit <code>#</code>-Links',
      'Mehrere Artikel, jeweils mit einem Bild unter Verwendung von <code>&lt;figure&gt;</code>',
      'Externe Links zu zusätzlichen Ressourcen, die in neuen Tabs geöffnet werden',
      'Ein Logo-Bild, das zur Startseite verlinkt',
      'Einen Kontaktabschnitt mit E-Mail- und Telefon-Links',
      'Verwenden Sie verschiedene Linktypen: absolut, relativ, intern, mailto, tel',
    ],
    hint: "Verwenden Sie <code>&lt;figure&gt;</code> und <code>&lt;figcaption&gt;</code> mit jedem Bild und vergessen Sie nicht <code>rel='noopener noreferrer'</code> bei externen Links.",
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
  if (item.type === "callout-danger") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
          ⚠️ {item.title}:
        </p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  return null;
}

export default function LinksAndImages() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("html", "04-links-and-images");
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
