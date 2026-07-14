"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/css/01-css-fundamentals";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2], fr: [1, 2], de: [1, 2] };

const challengeCode = `/* أكمل الكود هنا */`;

const cheatSheetData = {
  en: {
    title: "CSS Cheat Sheet - Lesson 1",
    columns: [
      {
        heading: "Units:",
        items: [
          '<code className="inline-code">px</code> - Fixed: borders, icons',
          '<code className="inline-code">rem</code> - Root font size: fonts, spacing',
          '<code className="inline-code">em</code> - Parent font size: nested elements',
          '<code className="inline-code">%</code> - Parent: relative layout',
          '<code className="inline-code">vw / vh</code> - Viewport: responsive sizing',
          '<code className="inline-code">dvh</code> - Dynamic viewport height',
          '<code className="inline-code">clamp()</code> - Min + fluid + max',
        ],
      },
      {
        heading: "Colors:",
        items: [
          '<code className="inline-code">#hex</code> - Fast and popular',
          '<code className="inline-code">rgb()</code> - With transparency: rgba()',
          '<code className="inline-code">hsl()</code> - Easy to adjust',
          '<code className="inline-code">oklch()</code> - Modern and perceptual',
          '<code className="inline-code">color-mix()</code> - Mix two colors',
          '<code className="inline-code">light-dark()</code> - Auto theme colors',
        ],
      },
      {
        heading: "Display:",
        items: [
          '<code className="inline-code">block</code> - New line + full width',
          '<code className="inline-code">inline</code> - Same line + content width',
          '<code className="inline-code">inline-block</code> - Same line + accepts dimensions',
          '<code className="inline-code">none</code> - Hidden + no space',
          '<code className="inline-code">flex</code> - Flexible layout',
          '<code className="inline-code">grid</code> - Grid layout',
        ],
      },
      {
        heading: "Specificity:",
        items: [
          "1. Elements (p, div) -> 0-0-1",
          "2. Classes (.class) -> 0-1-0",
          "3. IDs (#id) -> 1-0-0",
          "4. Inline (style=&quot;&quot;) -> 1-0-0-0",
          "5. !important -> Highest",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche memo CSS - Lecon 1",
    columns: [
      {
        heading: "Unites:",
        items: [
          '<code className="inline-code">px</code> - Fixe: bordures, icones',
          '<code className="inline-code">rem</code> - Taille police racine: polices, espacement',
          '<code className="inline-code">em</code> - Taille police parent',
          '<code className="inline-code">%</code> - Parent: mise en page relative',
          '<code className="inline-code">vw / vh</code> - Fenetre: dimensionnement responsive',
          '<code className="inline-code">clamp()</code> - Min + fluide + max',
        ],
      },
      {
        heading: "Couleurs:",
        items: [
          '<code className="inline-code">#hex</code> - Rapide et populaire',
          '<code className="inline-code">rgb()</code> - Avec transparence: rgba()',
          '<code className="inline-code">hsl()</code> - Facile a ajuster',
          '<code className="inline-code">oklch()</code> - Moderne et perceptuel',
          '<code className="inline-code">color-mix()</code> - Melanger deux couleurs',
          '<code className="inline-code">light-dark()</code> - Couleurs auto thème',
        ],
      },
      {
        heading: "Affichage:",
        items: [
          '<code className="inline-code">block</code> - Nouvelle ligne + pleine largeur',
          '<code className="inline-code">inline</code> - Même ligne + largeur contenu',
          '<code className="inline-code">none</code> - Masque + aucun espace',
          '<code className="inline-code">flex</code> - Mise en page flexible',
          '<code className="inline-code">grid</code> - Mise en page en grille',
        ],
      },
      {
        heading: "Specificite:",
        items: [
          "1. Elements (p, div) -> 0-0-1",
          "2. Classes (.class) -> 0-1-0",
          "3. IDs (#id) -> 1-0-0",
          "4. Inline (style=&quot;&quot;) -> 1-0-0-0",
          "5. !important -> La plus haute",
        ],
      },
    ],
  },
  de: {
    title: "CSS-Spickzettel - Lektion 1",
    columns: [
      {
        heading: "Einheiten:",
        items: [
          '<code className="inline-code">px</code> - Fest: Rahmen, Symbole',
          '<code className="inline-code">rem</code> - Root-Schriftgroesse: Schriften, Abstaende',
          '<code className="inline-code">em</code> - Eltern-Schriftgroesse',
          '<code className="inline-code">%</code> - Eltern: relatives Layout',
          '<code className="inline-code">vw / vh</code> - Viewport: responsive Groesse',
          '<code className="inline-code">clamp()</code> - Min + flexibel + max',
        ],
      },
      {
        heading: "Farben:",
        items: [
          '<code className="inline-code">#hex</code> - Schnell und beliebt',
          '<code className="inline-code">rgb()</code> - Mit Transparenz: rgba()',
          '<code className="inline-code">hsl()</code> - Leicht anzupassen',
          '<code className="inline-code">oklch()</code> - Modern und wahrnehmungsbezogen',
          '<code className="inline-code">color-mix()</code> - Zwei Farben mischen',
          '<code className="inline-code">light-dark()</code> - Auto-Theme-Farben',
        ],
      },
      {
        heading: "Anzeige:",
        items: [
          '<code className="inline-code">block</code> - Neue Zeile + volle Breite',
          '<code className="inline-code">inline</code> - Gleiche Zeile + Inhaltsbreite',
          '<code className="inline-code">none</code> - Versteckt + kein Platz',
          '<code className="inline-code">flex</code> - Flexibles Layout',
          '<code className="inline-code">grid</code> - Rasterlayout',
        ],
      },
      {
        heading: "Spezifitaet:",
        items: [
          "1. Elemente (p, div) -> 0-0-1",
          "2. Klassen (.class) -> 0-1-0",
          "3. IDs (#id) -> 1-0-0",
          "4. Inline (style=&quot;&quot;) -> 1-0-0-0",
          "5. !important -> Hoechste",
        ],
      },
    ],
  },
};

const miniProject = {
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
    description: "Creez une page HTML contenant une carte d'identification personnelle comprenant:",
    items: [
      'Votre nom comme titre principal <code>&lt;h1&gt;</code>',
      'Une brève description de vous-même dans un paragraphe <code>&lt;p&gt;</code>',
      'Une liste de vos competences <code>&lt;ul&gt;</code>',
      'Une liste numerotee de vos experiences <code>&lt;ol&gt;</code>',
      'Un lien vers votre page ou email <code>&lt;a&gt;</code>',
    ],
    hint: "Vous aurez besoin de nouvelles balises que nous n'avons pas encore apprises comme <code>&lt;a&gt;</code> pour les liens.",
  },
  de: {
    title: "Mini-Projekt: Persoenliche Ausweiskarte",
    description: "Erstellen Sie eine HTML-Seite mit einer persoenlichen Ausweiskarte:",
    items: [
      'Ihren Namen als Hauptueberschrift <code>&lt;h1&gt;</code>',
      'Eine kurze Selbstbeschreibung in einem Absatz <code>&lt;p&gt;</code>',
      'Eine Liste Ihrer Faehigkeiten <code>&lt;ul&gt;</code>',
      'Eine nummerierte Liste Ihrer Erfahrungen <code>&lt;ol&gt;</code>',
      'Einen Link zu Ihrer Seite oder E-Mail <code>&lt;a&gt;</code>',
    ],
    hint: "Sie werden neue Tags brauchen, die wir noch nicht gelernt haben, wie <code>&lt;a&gt;</code> fuer Links.",
  },
};

function renderContent(item) {
  if (item.type === "p") return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "li") return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "ol") return <ol dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "callout") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>💡 {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  if (item.type === "callout-accent") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>✅ {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  if (item.type === "callout-primary") return (
    <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>🔍 {item.title}:</p>
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  return null;
}

export default function CSSFundamentals() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("css", "01-css-fundamentals");
  const content = rawTranslations[lang] || rawTranslations.en;
  if (!content) return null;
  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;
  const mp = miniProject[lang] || miniProject.en;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader stage={lessonInfo.stage} lesson={lessonInfo} lessonIndex={lessonInfo.lessonIndex} totalLessons={lessonInfo.totalLessons} />
        {content.sections.map((section, i) => (
          <LessonSection key={i} title={section.title}>
            {section.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          </LessonSection>
        ))}
        {content.quiz && content.quiz.map((q, i) => (
          <Quiz key={i} question={q.question} options={q.options} correctAnswer={answers[i]} explanation={q.explanation} />
        ))}
        {content.challenge && (
          <Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>
            {challengeCode && <CodeBlock language="css" code={challengeCode} />}
          </Challenge>
        )}
        <div className="rounded-xl p-6 my-6 border-2" style={{ background: "var(--surface)", borderColor: "var(--secondary)" }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🏗️</span>
            <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>{mp.title}</span>
          </div>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>{mp.description}</p>
          <ul className="mb-4" style={{ color: "var(--foreground)" }}>
            {mp.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
          </ul>
          <p className="text-sm" style={{ color: "var(--muted)" }}>💡 {mp.hint}</p>
        </div>
        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                {col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>}
                {col.code && <CodeBlock language={col.codeLanguage || "css"} code={col.code} />}
              </div>
            ))}
          </div>
        </CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
