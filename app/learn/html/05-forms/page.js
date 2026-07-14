"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/html/05-forms";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [2, 1, 1], fr: [2, 1, 1], de: [2, 1, 1] };

const challengeCode = `<form action="/api/comments" method="POST">
    <fieldset>
        <legend>أضف تعليقاً</legend>

    <label for="comment-name">اسمك *</label>
    <input type="text" id="comment-name" name="name" required
           placeholder="أحمد" minlength="2" />

    <label for="comment-email">بريدك الإلكتروني *</label>
    <input type="email" id="comment-email" name="email" required
           placeholder="ahmed@example.com" />

    <label for="comment-text">تعليقك *</label>
    <textarea id="comment-text" name="comment" required
              rows="5" minlength="10" maxlength="500"
              placeholder="اكتب تعليقك هنا..."></textarea>

    <label>
        <input type="checkbox" name="terms" value="accepted" required />
        أوافق على شروط التعليق *
    </label>

    <button type="submit">إرسال التعليق</button>
    <button type="reset">مسح</button>
    </fieldset>
</form>`;

const cheatSheetData = {
  en: {
    title: "Forms Cheat Sheet",
    columns: [
      {
        heading: "Form & Input Types:",
        code: `<!-- Basic Form -->
<form action="/url" method="POST">
  ...
</form>

<!-- Input Types -->
<input type="text" name="x" />
<input type="email" name="x" />
<input type="password" name="x" />
<input type="number" name="x" />
<input type="tel" name="x" />
<input type="url" name="x" />
<input type="date" name="x" />
<input type="color" name="x" />
<input type="range" name="x" />
<input type="file" name="x" />
<input type="hidden" name="x" />

<!-- Textarea -->
<textarea name="msg" rows="5"></textarea>`,
        codeLanguage: "html",
      },
      {
        heading: "Validation & Grouping:",
        code: `<!-- Label (required) -->
<label for="id">Label</label>
<input type="text" id="id" name="n" />

<!-- Validation -->
<input required minlength="3"
       maxlength="50" />
<input type="number" min="0"
       max="100" />
<input pattern="[A-Za-z]{3}" />

<!-- Select -->
<select name="x">
  <option value="1">One</option>
</select>

<!-- Fieldset -->
<fieldset>
  <legend>Title</legend>
  <!-- fields -->
</fieldset>`,
        codeLanguage: "html",
      },
      {
        heading: "Key Attributes:",
        items: [
          '<code className="inline-code">name</code> - Required for form submission',
          '<code className="inline-code">required</code> - Field is mandatory',
          '<code className="inline-code">placeholder</code> - Hint text',
          '<code className="inline-code">minlength</code> / <code className="inline-code">maxlength</code> - Text length limits',
          '<code className="inline-code">min</code> / <code className="inline-code">max</code> - Number range limits',
          '<code className="inline-code">pattern</code> - Regex validation',
          '<code className="inline-code">autocomplete</code> - Browser autofill hint',
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Formulaires",
    columns: [
      {
        heading: "Formulaire et types d'entrée:",
        code: `<!-- Formulaire de base -->
<form action="/url" method="POST">
  ...
</form>

<!-- Types d'entrée -->
<input type="text" name="x" />
<input type="email" name="x" />
<input type="password" name="x" />
<input type="number" name="x" />
<input type="tel" name="x" />
<input type="url" name="x" />
<input type="date" name="x" />
<input type="color" name="x" />
<input type="range" name="x" />
<input type="file" name="x" />
<input type="hidden" name="x" />

<!-- Textarea -->
<textarea name="msg" rows="5"></textarea>`,
        codeLanguage: "html",
      },
      {
        heading: "Validation et regroupement:",
        code: `<!-- Label (requis) -->
<label for="id">Étiquette</label>
<input type="text" id="id" name="n" />

<!-- Validation -->
<input required minlength="3"
       maxlength="50" />
<input type="number" min="0"
       max="100" />
<input pattern="[A-Za-z]{3}" />

<!-- Select -->
<select name="x">
  <option value="1">Un</option>
</select>

<!-- Fieldset -->
<fieldset>
  <legend>Titre</legend>
  <!-- champs -->
</fieldset>`,
        codeLanguage: "html",
      },
      {
        heading: "Attributs clés:",
        items: [
          '<code className="inline-code">name</code> - Requis pour la soumission',
          '<code className="inline-code">required</code> - Champ obligatoire',
          '<code className="inline-code">placeholder</code> - Texte d\'indice',
          '<code className="inline-code">minlength</code> / <code className="inline-code">maxlength</code> - Limites de longueur',
          '<code className="inline-code">min</code> / <code className="inline-code">max</code> - Limites de plage numérique',
          '<code className="inline-code">pattern</code> - Validation par regex',
          '<code className="inline-code">autocomplete</code> - Indice de remplissage automatique',
        ],
      },
    ],
  },
  de: {
    title: "Spickzettel Formulare",
    columns: [
      {
        heading: "Formular & Eingabetypen:",
        code: `<!-- Basisformular -->
<form action="/url" method="POST">
  ...
</form>

<!-- Eingabetypen -->
<input type="text" name="x" />
<input type="email" name="x" />
<input type="password" name="x" />
<input type="number" name="x" />
<input type="tel" name="x" />
<input type="url" name="x" />
<input type="date" name="x" />
<input type="color" name="x" />
<input type="range" name="x" />
<input type="file" name="x" />
<input type="hidden" name="x" />

<!-- Textarea -->
<textarea name="msg" rows="5"></textarea>`,
        codeLanguage: "html",
      },
      {
        heading: "Validierung & Gruppierung:",
        code: `<!-- Label (erforderlich) -->
<label for="id">Bezeichnung</label>
<input type="text" id="id" name="n" />

<!-- Validierung -->
<input required minlength="3"
       maxlength="50" />
<input type="number" min="0"
       max="100" />
<input pattern="[A-Za-z]{3}" />

<!-- Select -->
<select name="x">
  <option value="1">Eins</option>
</select>

<!-- Fieldset -->
<fieldset>
  <legend>Titel</legend>
  <!-- Felder -->
</fieldset>`,
        codeLanguage: "html",
      },
      {
        heading: "Schlüsselattribute:",
        items: [
          '<code className="inline-code">name</code> - Erforderlich für Formularübermittlung',
          '<code className="inline-code">required</code> - Feld ist obligatorisch',
          '<code className="inline-code">placeholder</code> - Hinweistext',
          '<code className="inline-code">minlength</code> / <code className="inline-code">maxlength</code> - Textlängenlimits',
          '<code className="inline-code">min</code> / <code className="inline-code">max</code> - Zahlenbereichslimits',
          '<code className="inline-code">pattern</code> - Regex-Validierung',
          '<code className="inline-code">autocomplete</code> - Browser-Autofill-Hinweis',
        ],
      },
    ],
  },
};

const miniProject = {
  en: {
    title: "Mini Project: Team Application Form",
    description: "Create a team application form that includes:",
    items: [
      'Personal information section (name, birth date, gender) using <code>&lt;fieldset&gt;</code>',
      'Contact information (email, phone) with appropriate autocomplete',
      'Skills section using checkboxes (HTML, CSS, JS, React, Node)',
      'Experience level using radio buttons (Beginner, Intermediate, Advanced, Expert)',
      'A <code>&lt;textarea&gt;</code> for the application letter with <code>minlength</code>',
      'Resume upload field (PDF only) using <code>accept</code>',
      'Required field validation using <code>required</code>',
      'Terms and conditions with required checkbox',
    ],
    hint: "Use <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> to group each section, and make sure every field has a <code>&lt;label&gt;</code> with <code>for</code> matching the <code>id</code>.",
  },
  fr: {
    title: "Mini Projet: Formulaire de candidature d'équipe",
    description: "Créez un formulaire de candidature comprenant:",
    items: [
      'Section d\'informations personnelles (nom, date de naissance, sexe) avec <code>&lt;fieldset&gt;</code>',
      'Informations de contact (email, téléphone) avec autocomplete approprié',
      'Section compétences avec cases à cocher (HTML, CSS, JS, React, Node)',
      'Niveau d\'expérience avec boutons radio (Débutant, Intermédiaire, Avancé, Expert)',
      'Un <code>&lt;textarea&gt;</code> pour la lettre de motivation avec <code>minlength</code>',
      'Chargement de CV (PDF uniquement) avec <code>accept</code>',
      'Validation des champs obligatoires avec <code>required</code>',
      'Conditions d\'utilisation avec case à cocher obligatoire',
    ],
    hint: "Utilisez <code>&lt;fieldset&gt;</code> et <code>&lt;legend&gt;</code> pour grouper chaque section, et assurez-vous que chaque champ a un <code>&lt;label&gt;</code> avec <code>for</code> correspondant au <code>id</code>.",
  },
  de: {
    title: "Mini-Projekt: Team-Bewerbungsformular",
    description: "Erstellen Sie ein Team-Bewerbungsformular mit:",
    items: [
      'Abschnitt für persönliche Informationen (Name, Geburtsdatum, Geschlecht) mit <code>&lt;fieldset&gt;</code>',
      'Kontaktinformationen (E-Mail, Telefon) mit passendem Autocomplete',
      'Fähigkeitsabschnitt mit Kontrollkästchen (HTML, CSS, JS, React, Node)',
      'Erfahrungsstufe mit Radio-Buttons (Anfänger, Mittelstufe, Fortgeschritten, Experte)',
      'Ein <code>&lt;textarea&gt;</code> für das Bewerbungsschreiben mit <code>minlength</code>',
      'Lebenslauf-Upload-Feld (nur PDF) mit <code>accept</code>',
      'Pflichtfeldvalidierung mit <code>required</code>',
      'Geschäftsbedingungen mit erforderlichem Kontrollkästchen',
    ],
    hint: "Verwenden Sie <code>&lt;fieldset&gt;</code> und <code>&lt;legend&gt;</code> zum Gruppieren jedes Abschnitts und stellen Sie sicher, dass jedes Feld ein <code>&lt;label&gt;</code> mit <code>for</code> hat, das mit der <code>id</code> übereinstimmt.",
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

export default function Forms() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("html", "05-forms");
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
