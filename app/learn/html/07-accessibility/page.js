"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/html/07-accessibility";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1, 1], en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1] };

const challengeCode = `<!-- الحل المتوقع -->
<a href="#login-form" class="skip-link">
  انتقل لنموذج تسجيل الدخول
</a>

<main>
  <article>
    <header>
      <h1>تسجيل الدخول</h1>
    </header>

    <form id="login-form" aria-labelledby="form-title">
      <h2 id="form-title" class="sr-only">
        نموذج تسجيل الدخول
      </h2>

      <div>
        <label for="login-email">
          البريد الإلكتروني
          <span aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          aria-required="true"
          autocomplete="email"
        />
      </div>

      <div>
        <label for="login-password">
          كلمة المرور
          <span aria-hidden="true">*</span>
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          aria-required="true"
          autocomplete="current-password"
        />
      </div>

      <div>
        <input type="checkbox" id="remember" />
        <label for="remember">تذكرني</label>
      </div>

      <button type="submit">تسجيل الدخول</button>

      <!-- رسالة خطأ -->
      <div role="alert" aria-live="assertive"
           id="error-message" style="color: red">
        البريد أو كلمة المرور غير صحيحة
      </div>
    </form>

    <p>
      ليس لديك حساب؟
      <a href="/register">سجّل الآن</a>
    </p>
  </article>
</main>`;

const cheatSheetData = {
  ar: {
    title: "ملخص إمكانية الوصول (A11y)",
    columns: [
      {
        heading: "أساسيات إمكانية الوصول:",
        items: [
          'كل صورة تحتاج نص <code className="inline-code">alt</code>',
          'كل حقل نموذج يحتاج <code className="inline-code">&lt;label&gt;</code>',
          'استخدم <code className="inline-code">روابط التخطي</code> لمستخدمي لوحة المفاتيح',
          'استخدم فئة <code className="inline-code">.sr-only</code> لنص قارئ الشاشة',
          'جميع العناصر التفاعلية يجب أن تعمل بزر Tab',
        ],
      },
      {
        heading: "التنقل بلوحة المفاتيح:",
        items: [
          '<code className="inline-code">tabindex="0"</code> - إضافة لتسلسل Tab الافتراضي',
          '<code className="inline-code">tabindex="-1"</code> - وصول программي فقط',
          "تجنب قيم tabindex الموجبة",
          "العناصر التفاعلية: button, a, input, select, textarea",
        ],
      },
      {
        heading: "سمات ARIA الشائعة:",
        items: [
          '<code className="inline-code">role="alert"</code> - تنبيه عاجل',
          '<code className="inline-code">role="status"</code> - تحديث غير عاجل',
          '<code className="inline-code">role="button"</code> - زر مخصص',
          '<code className="inline-code">role="navigation"</code> - قسم التنقل',
          '<code className="inline-code">role="main"</code> - المحتوى الرئيسي',
          '<code className="inline-code">aria-label</code> - اسم مسموع',
          '<code className="inline-code">aria-describedby</code> - وصف إضافي',
          '<code className="inline-code">aria-required</code> - حقل إجباري',
          '<code className="inline-code">aria-invalid</code> - بيانات غير صالحة',
          '<code className="inline-code">aria-live</code> - تحديثات مباشرة',
          '<code className="inline-code">aria-hidden</code> - مخفي عن قارئ الشاشة',
        ],
      },
      {
        heading: "القاعدة الذهبية لـ ARIA:",
        items: [
          "1. استخدم HTML الدلالي أولاً",
          "2. لا تكسر ما يعمل في HTML",
          "3. جميع العناصر التفاعلية يجب أن تعمل بـ Tab",
          "4. كل صورة لها alt",
          "5. كل حقل له label",
        ],
      },
    ],
  },
  en: {
    title: "Accessibility (A11y) Cheat Sheet",
    columns: [
      {
        heading: "Accessibility Basics:",
        items: [
          'Every image needs <code className="inline-code">alt</code> text',
          'Every form field needs a <code className="inline-code">&lt;label&gt;</code>',
          'Use <code className="inline-code">skip links</code> for keyboard users',
          'Use <code className="inline-code">.sr-only</code> class for screen reader text',
          'All interactive elements must work with Tab key',
        ],
      },
      {
        heading: "Keyboard Navigation:",
        items: [
          '<code className="inline-code">tabindex="0"</code> - Add to default Tab order',
          '<code className="inline-code">tabindex="-1"</code> - Programmatic access only',
          "Avoid positive tabindex values",
          "Interactive elements: button, a, input, select, textarea",
        ],
      },
      {
        heading: "Common ARIA Attributes:",
        items: [
          '<code className="inline-code">role="alert"</code> - Urgent alert',
          '<code className="inline-code">role="status"</code> - Non-urgent update',
          '<code className="inline-code">role="button"</code> - Custom button',
          '<code className="inline-code">role="navigation"</code> - Navigation section',
          '<code className="inline-code">role="main"</code> - Main content',
          '<code className="inline-code">aria-label</code> - Audible name',
          '<code className="inline-code">aria-describedby</code> - Additional description',
          '<code className="inline-code">aria-required</code> - Required field',
          '<code className="inline-code">aria-invalid</code> - Invalid data',
          '<code className="inline-code">aria-live</code> - Live updates',
          '<code className="inline-code">aria-hidden</code> - Hidden from screen reader',
        ],
      },
      {
        heading: "ARIA Golden Rule:",
        items: [
          "1. Use semantic HTML first",
          "2. Don't break what works in HTML",
          "3. All interactive elements must work with Tab",
          "4. Every image has alt",
          "5. Every field has a label",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Accessibilité (A11y)",
    columns: [
      {
        heading: "Bases de l'accessibilité:",
        items: [
          'Chaque image a besoin d\'un texte <code className="inline-code">alt</code>',
          'Chaque champ de formulaire a besoin d\'un <code className="inline-code">&lt;label&gt;</code>',
          'Utilisez des <code className="inline-code">liens d\'évitement</code> pour les utilisateurs clavier',
          'Utilisez la classe <code className="inline-code">.sr-only</code> pour le texte des lecteurs d\'écran',
          'Tous les éléments interactifs doivent fonctionner avec la touche Tab',
        ],
      },
      {
        heading: "Navigation au clavier:",
        items: [
          '<code className="inline-code">tabindex="0"</code> - Ajouter à l\'ordre Tab par défaut',
          '<code className="inline-code">tabindex="-1"</code> - Accès programmatique uniquement',
          "Évitez les valeurs tabindex positives",
          "Éléments interactifs: button, a, input, select, textarea",
        ],
      },
      {
        heading: "Attributs ARIA courants:",
        items: [
          '<code className="inline-code">role="alert"</code> - Alerte urgente',
          '<code className="inline-code">role="status"</code> - Mise à jour non urgente',
          '<code className="inline-code">role="button"</code> - Bouton personnalisé',
          '<code className="inline-code">role="navigation"</code> - Section de navigation',
          '<code className="inline-code">role="main"</code> - Contenu principal',
          '<code className="inline-code">aria-label</code> - Nom audible',
          '<code className="inline-code">aria-describedby</code> - Description supplémentaire',
          '<code className="inline-code">aria-required</code> - Champ obligatoire',
          '<code className="inline-code">aria-invalid</code> - Données invalides',
          '<code className="inline-code">aria-live</code> - Mises à jour en direct',
          '<code className="inline-code">aria-hidden</code> - Masqué du lecteur d\'écran',
        ],
      },
      {
        heading: "Règle d\'or ARIA:",
        items: [
          "1. Utilisez le HTML sémantique d'abord",
          "2. Ne cassez pas ce qui fonctionne en HTML",
          "3. Tous les éléments interactifs doivent fonctionner avec Tab",
          "4. Chaque image a un alt",
          "5. Chaque champ a un label",
        ],
      },
    ],
  },
  de: {
    title: "Spickzettel Barrierefreiheit (A11y)",
    columns: [
      {
        heading: "Barrierefreiheits-Grundlagen:",
        items: [
          'Jedes Bild benötigt <code className="inline-code">alt</code>-Text',
          'Jedes Formularfeld benötigt ein <code className="inline-code">&lt;label&gt;</code>',
          'Verwenden Sie <code className="inline-code">Skip Links</code> für Tastaturnutzer',
          'Verwenden Sie die Klasse <code className="inline-code">.sr-only</code> für Screenreader-Text',
          'Alle interaktiven Elemente müssen mit der Tab-Taste funktionieren',
        ],
      },
      {
        heading: "Tastaturnavigation:",
        items: [
          '<code className="inline-code">tabindex="0"</code> - Zur Standard-Tab-Reihenfolge hinzufügen',
          '<code className="inline-code">tabindex="-1"</code> - Nur programmatischer Zugriff',
          "Vermeiden Sie positive tabindex-Werte",
          "Interaktive Elemente: button, a, input, select, textarea",
        ],
      },
      {
        heading: "Gängige ARIA-Attribute:",
        items: [
          '<code className="inline-code">role="alert"</code> - Dringender Alarm',
          '<code className="inline-code">role="status"</code> - Nicht-dringende Aktualisierung',
          '<code className="inline-code">role="button"</code> - Benutzerdefinierter Button',
          '<code className="inline-code">role="navigation"</code> - Navigationsabschnitt',
          '<code className="inline-code">role="main"</code> - Hauptinhalt',
          '<code className="inline-code">aria-label</code> - Hörbarer Name',
          '<code className="inline-code">aria-describedby</code> - Zusätzliche Beschreibung',
          '<code className="inline-code">aria-required</code> - Erforderliches Feld',
          '<code className="inline-code">aria-invalid</code> - Ungültige Daten',
          '<code className="inline-code">aria-live</code> - Live-Updates',
          '<code className="inline-code">aria-hidden</code> - Für Screenreader versteckt',
        ],
      },
      {
        heading: "ARIA-Goldene Regel:",
        items: [
          "1. Verwenden Sie zuerst semantisches HTML",
          "2. Brechen Sie nicht, was in HTML funktioniert",
          "3. Alle interaktiven Elemente müssen mit Tab funktionieren",
          "4. Jedes Bild hat alt",
          "5. Jedes Feld hat ein Label",
        ],
      },
    ],
  },
};

const miniProject = {
  ar: {
    title: "مشروع صغير: نموذج تسجيل دخول متوافق مع إمكانية الوصول",
    description: "أنشئ نموذج تسجيل دخول متوافق مع إمكانية الوصول يتضمن:",
    items: [
      'رابط تخطي في أعلى الصفحة',
      'هيكل HTML دلالي (header, main, footer)',
      '<code>&lt;label&gt;</code> لكل حقل إدخال',
      '<code>aria-required</code> للحقول الإجبارية',
      'رسائل خطأ مع <code>role="alert"</code>',
      'تسلسل عنوان صحيح (h1، h2، h3)',
      'سمات الإكمال التلقائي للحقول الشائعة',
    ],
    hint: "اختبر نموذجك بالتنقل بلوحة المفاتيح فقط (بدون ماوس). كل حقل يجب أن يكون قابلاً للوصول وله label مرئي. استخدم <code>aria-describedby</code> لربط نص المساعدة بالحقول.",
  },
  en: {
    title: "Mini Project: Accessible Registration Form",
    description: "Create an accessible registration form that includes:",
    items: [
      'Skip link at the top of the page',
      'Semantic HTML structure (header, main, footer)',
      '<code>&lt;label&gt;</code> for every input field',
      '<code>aria-required</code> for mandatory fields',
      'Error messages with <code>role="alert"</code>',
      'Proper heading hierarchy (h1, h2, h3)',
      'Autocomplete attributes for common fields',
    ],
    hint: "Test your form by navigating with Tab only (no mouse). Every field should be reachable and have a visible label. Use <code>aria-describedby</code> to link help text to inputs.",
  },
  fr: {
    title: "Mini Projet: Formulaire d\'inscription accessible",
    description: "Créez un formulaire d\'inscription accessible comprenant:",
    items: [
      'Lien d\'évitement en haut de la page',
      'Structure HTML sémantique (header, main, footer)',
      'Un <code>&lt;label&gt;</code> pour chaque champ de saisie',
      '<code>aria-required</code> pour les champs obligatoires',
      'Messages d\'erreur avec <code>role="alert"</code>',
      'Hiérarchie correcte des titres (h1, h2, h3)',
      'Attributs d\'autoremplissage pour les champs courants',
    ],
    hint: "Testez votre formulaire en naviguant uniquement avec Tab (pas de souris). Chaque champ doit être accessible et avoir un label visible. Utilisez <code>aria-describedby</code> pour lier le texte d\'aide aux champs.",
  },
  de: {
    title: "Mini-Projekt: Barrierefreies Registrierungsformular",
    description: "Erstellen Sie ein barrierefreies Registrierungsformular mit:",
    items: [
      'Skip-Link oben auf der Seite',
      'Semantische HTML-Struktur (header, main, footer)',
      'Ein <code>&lt;label&gt;</code> für jedes Eingabefeld',
      '<code>aria-required</code> für Pflichtfelder',
      'Fehlermeldungen mit <code>role="alert"</code>',
      'Richtige Überschriftshierarchie (h1, h2, h3)',
      'Autocomplete-Attribute für gängige Felder',
    ],
    hint: "Testen Sie Ihr Formular nur mit Tab (keine Maus). Jedes Feld sollte erreichbar sein und ein sichtbares Label haben. Verwenden Sie <code>aria-describedby</code>, um Hilfetext mit Eingabefeldern zu verknüpfen.",
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

export default function Accessibility() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("html", "07-accessibility");
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
