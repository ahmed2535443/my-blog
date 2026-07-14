"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/html/03-attributes-and-tables";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [0, 2, 1], fr: [0, 2, 1], de: [0, 2, 1] };

const challengeCode = `<table border="1">
  <caption>جدول رواتب الموظفين</caption>
  <thead>
    <tr>
      <th>الاسم</th>
      <th>الوظيفة</th>
      <th>الراتب</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>أحمد محمد</td>
      <td>مطور</td>
      <td>8000 ر.س</td>
    </tr>
    <tr>
      <td>سارة علي</td>
      <td>مصممة</td>
      <td>7500 ر.س</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">المتوسط</td>
      <td>7750 ر.س</td>
    </tr>
  </tfoot>
</table>`;

const cheatSheetData = {
  en: {
    title: "Attributes and Tables Cheat Sheet",
    columns: [
      {
        heading: "Global Attributes:",
        items: [
          '<code className="inline-code">id</code> - Unique identifier for an element',
          '<code className="inline-code">class</code> - CSS class name (can be shared)',
          '<code className="inline-code">style</code> - Inline CSS styles',
          '<code className="inline-code">title</code> - Tooltip text on hover',
          '<code className="inline-code">hidden</code> - Hides the element',
        ],
      },
      {
        heading: "Table Structure:",
        items: [
          '<code className="inline-code">&lt;table&gt;</code> - Table container',
          '<code className="inline-code">&lt;caption&gt;</code> - Table title',
          '<code className="inline-code">&lt;thead&gt;</code> - Table header group',
          '<code className="inline-code">&lt;tbody&gt;</code> - Table body group',
          '<code className="inline-code">&lt;tfoot&gt;</code> - Table footer group',
          '<code className="inline-code">&lt;tr&gt;</code> - Table row',
          '<code className="inline-code">&lt;th&gt;</code> - Header cell',
          '<code className="inline-code">&lt;td&gt;</code> - Data cell',
        ],
        code: `<!-- Table with attributes -->
<table border="1" style="width:100%">
  <caption>Employee Table</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ahmed</td>
      <td>Developer</td>
    </tr>
  </tbody>
</table>`,
        codeLanguage: "html",
      },
      {
        heading: "Colspan & Rowspan:",
        items: [
          '<code className="inline-code">colspan="n"</code> - Merge n columns',
          '<code className="inline-code">rowspan="n"</code> - Merge n rows',
          '<code className="inline-code">scope="col"</code> - Header for column',
          '<code className="inline-code">scope="row"</code> - Header for row',
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Attributs et Tableaux",
    columns: [
      {
        heading: "Attributs globaux:",
        items: [
          '<code className="inline-code">id</code> - Identifiant unique pour un élément',
          '<code className="inline-code">class</code> - Nom de classe CSS (peut être partagé)',
          '<code className="inline-code">style</code> - Styles CSS en ligne',
          '<code className="inline-code">title</code> - Texte de l\'infobulle au survol',
          '<code className="inline-code">hidden</code> - Masque l\'élément',
        ],
      },
      {
        heading: "Structure du tableau:",
        items: [
          '<code className="inline-code">&lt;table&gt;</code> - Conteneur de tableau',
          '<code className="inline-code">&lt;caption&gt;</code> - Titre du tableau',
          '<code className="inline-code">&lt;thead&gt;</code> - Groupe d\'en-tête',
          '<code className="inline-code">&lt;tbody&gt;</code> - Groupe de corps',
          '<code className="inline-code">&lt;tfoot&gt;</code> - Groupe de pied',
          '<code className="inline-code">&lt;tr&gt;</code> - Ligne de tableau',
          '<code className="inline-code">&lt;th&gt;</code> - Cellule d\'en-tête',
          '<code className="inline-code">&lt;td&gt;</code> - Cellule de données',
        ],
        code: `<!-- Tableau avec attributs -->
<table border="1" style="width:100%">
  <caption>Tableau des employés</caption>
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Rôle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ahmed</td>
      <td>Développeur</td>
    </tr>
  </tbody>
</table>`,
        codeLanguage: "html",
      },
      {
        heading: "Colspan et Rowspan:",
        items: [
          '<code className="inline-code">colspan="n"</code> - Fusionner n colonnes',
          '<code className="inline-code">rowspan="n"</code> - Fusionner n lignes',
          '<code className="inline-code">scope="col"</code> - En-tête pour colonne',
          '<code className="inline-code">scope="row"</code> - En-tête pour ligne',
        ],
      },
    ],
  },
  de: {
    title: "Spickzettel Attribute und Tabellen",
    columns: [
      {
        heading: "Globale Attribute:",
        items: [
          '<code className="inline-code">id</code> - Eindeutige Kennung für ein Element',
          '<code className="inline-code">class</code> - CSS-Klassenname (kann geteilt werden)',
          '<code className="inline-code">style</code> - Inline-CSS-Stile',
          '<code className="inline-code">title</code> - Tooltip-Text beim Überfahren',
          '<code className="inline-code">hidden</code> - Versteckt das Element',
        ],
      },
      {
        heading: "Tabellenstruktur:",
        items: [
          '<code className="inline-code">&lt;table&gt;</code> - Tabellen-Container',
          '<code className="inline-code">&lt;caption&gt;</code> - Tabellentitel',
          '<code className="inline-code">&lt;thead&gt;</code> - Tabellenkopfgruppe',
          '<code className="inline-code">&lt;tbody&gt;</code> - Tabellenkörpergruppe',
          '<code className="inline-code">&lt;tfoot&gt;</code> - Tabellenfußgruppe',
          '<code className="inline-code">&lt;tr&gt;</code> - Tabellenzeile',
          '<code className="inline-code">&lt;th&gt;</code> - Kopfzelle',
          '<code className="inline-code">&lt;td&gt;</code> - Datenzelle',
        ],
        code: `<!-- Tabelle mit Attributen -->
<table border="1" style="width:100%">
  <caption>Mitarbeitertabelle</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Rolle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ahmed</td>
      <td>Entwickler</td>
    </tr>
  </tbody>
</table>`,
        codeLanguage: "html",
      },
      {
        heading: "Colspan und Rowspan:",
        items: [
          '<code className="inline-code">colspan="n"</code> - N Spalten zusammenführen',
          '<code className="inline-code">rowspan="n"</code> - N Zeilen zusammenführen',
          '<code className="inline-code">scope="col"</code> - Kopf für Spalte',
          '<code className="inline-code">scope="row"</code> - Kopf für Zeile',
        ],
      },
    ],
  },
};

const miniProject = {
  en: {
    title: "Mini Project: Course Grades Table",
    description: "Create a table that displays student grades:",
    items: [
      'A <code>&lt;caption&gt;</code> with the title "Student Grades"',
      'A header row with: Name, Math, Science, English, Average',
      'At least 3 student rows with grade data',
      'A footer row with the class average using <code>colspan</code>',
      'Use <code>scope</code> attributes on all <code>&lt;th&gt;</code> elements',
    ],
    hint: "Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to structure your table properly. The average can be calculated as the mean of the three grades.",
  },
  fr: {
    title: "Mini Projet: Tableau de notes de cours",
    description: "Créez un tableau affichant les notes des étudiants:",
    items: [
      'Un <code>&lt;caption&gt;</code> avec le titre "Notes des étudiants"',
      'Une ligne d\'en-tête avec: Nom, Maths, Sciences, Anglais, Moyenne',
      'Au moins 3 lignes d\'étudiants avec des données de notes',
      'Une ligne de pied avec la moyenne de la classe utilisant <code>colspan</code>',
      'Utilisez des attributs <code>scope</code> sur tous les éléments <code>&lt;th&gt;</code>',
    ],
    hint: "Utilisez <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> et <code>&lt;tfoot&gt;</code> pour structurer correctement votre tableau. La moyenne peut être calculée comme la moyenne des trois notes.",
  },
  de: {
    title: "Mini-Projekt: Notentabelle für Kurse",
    description: "Erstellen Sie eine Tabelle, die Schülernoten anzeigt:",
    items: [
      'Ein <code>&lt;caption&gt;</code> mit dem Titel "Schülernoten"',
      'Eine Kopfzeile mit: Name, Mathe, Naturwissenschaften, Englisch, Durchschnitt',
      'Mindestens 3 Schülerzeilen mit Notendaten',
      'Eine Fußzeile mit dem Klassendurchschnitt unter Verwendung von <code>colspan</code>',
      'Verwenden Sie <code>scope</code>-Attribute bei allen <code>&lt;th&gt;</code>-Elementen',
    ],
    hint: "Verwenden Sie <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> und <code>&lt;tfoot&gt;</code>, um Ihre Tabelle korrekt zu strukturieren. Der Durchschnitt kann als Mittelwert der drei Noten berechnet werden.",
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

export default function AttributesAndTables() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("html", "03-attributes-and-tables");
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
