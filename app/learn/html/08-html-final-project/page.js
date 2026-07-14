"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/html/08-html-final-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [2, 2, 1], en: [2, 2, 1], fr: [2, 2, 1], de: [2, 2, 1] };

const challengeCode = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>الأسئلة الشائعة</title>
</head>
<body>
  <a href="#main" class="skip-link">انتقل للمحتوى</a>

  <header>
    <nav aria-label="التنقل الرئيسي">
      <ul>
        <li><a href="/">الرئيسية</a></li>
        <li><a href="/faq" aria-current="page">الأسئلة الشائعة</a></li>
        <li><a href="/contact">تواصل</a></li>
      </ul>
    </nav>
  </header>

  <main id="main" tabindex="-1">
    <h1>الأسئلة الشائعة</h1>

    <figure>
      <img src="faq.jpg" alt="شخص يقرأ كتاباً" />
      <figcaption>إجابات على أسئلتكم الشائعة</figcaption>
    </figure>

    <details>
      <summary>كيف أسجل في المنصة؟</summary>
      <p>1. اضغط على زر التسجيل
      2. أدخل بياناتك
      3. أكمل</p>
    </details>

    <details>
      <summary>هل الخدمة مجانية؟</summary>
      <p>نعم، نوفر خطة مجانية مع ميزات أساسية.</p>
    </details>

    <section aria-labelledby="ask-title">
      <h2 id="ask-title">لم تجد إجابتك؟</h2>
      <form>
        <label for="q-name">الاسم</label>
        <input type="text" id="q-name" required />
        <label for="q-email">البريد</label>
        <input type="email" id="q-email" required />
        <label for="q-msg">سؤالك</label>
        <textarea id="q-msg" rows="4" required></textarea>
        <button type="submit">إرسال</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; <time dateTime="2026">2026</time> جميع الحقوق محفوظة</p>
  </footer>
</body>
</html>`;

const cheatSheetData = {
  ar: {
    title: "ملخص مرحلة HTML",
    columns: [
      {
        heading: "هيكل الصفحة:",
        code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width">
  <title>العنوان</title>
</head>
<body>
  <!-- المحتوى -->
</body>
</html>`,
        codeLanguage: "html",
      },
      {
        heading: "العناصر الدلالية:",
        items: [
          '<code className="inline-code">&lt;header&gt;</code> <code className="inline-code">&lt;nav&gt;</code> <code className="inline-code">&lt;main&gt;</code>',
          '<code className="inline-code">&lt;section&gt;</code> <code className="inline-code">&lt;article&gt;</code> <code className="inline-code">&lt;aside&gt;</code>',
          '<code className="inline-code">&lt;footer&gt;</code> <code className="inline-code">&lt;figure&gt;</code> <code className="inline-code">&lt;figcaption&gt;</code>',
          '<code className="inline-code">&lt;blockquote&gt;</code> <code className="inline-code">&lt;cite&gt;</code> <code className="inline-code">&lt;time&gt;</code>',
        ],
      },
      {
        heading: "النماذج:",
        code: `<form>
  <label for="x">الاسم</label>
  <input type="text" id="x" required>
  <textarea></textarea>
  <select>
    <option>...</option>
  </select>
  <button type="submit">إرسال</button>
</form>`,
        codeLanguage: "html",
      },
      {
        heading: "الروابط والصور:",
        items: [
          '<code className="inline-code">&lt;a href="url"&gt;</code> - رابط',
          '<code className="inline-code">target="_blank" rel="noopener noreferrer"</code> - تبويب جديد',
          '<code className="inline-code">&lt;img src="pic.jpg" alt="desc" loading="lazy" /&gt;</code>',
        ],
      },
      {
        heading: "إمكانية الوصول:",
        items: [
          'aria-label - اسم مسموع',
          'aria-required - حقل إجباري',
          'aria-describedby - وصف إضافي',
          'aria-invalid - بيانات غير صالحة',
          'aria-current="page" - الصفحة الحالية',
          'role="alert" / role="button"',
          'skip-link / sr-only',
        ],
      },
      {
        heading: "نصائح للمحترفين:",
        items: [
          "1. HTML أولاً، CSS ثانياً",
          "2. استخدم HTML الدلالي دائماً",
          "3. alt لكل صورة",
          "4. label لكل حقل",
          "5. رابط التخطي لإمكانية الوصول",
          "6. لا تستخدم br للمسافات",
          "7. لا تستخدم div لكل شيء",
          "8. اختبر بـ Tab وقارئ الشاشة",
        ],
      },
    ],
  },
  en: {
    title: "HTML Stage Cheat Sheet",
    columns: [
      {
        heading: "Page Structure:",
        code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width">
  <title>Title</title>
</head>
<body>
  <!-- Content -->
</body>
</html>`,
        codeLanguage: "html",
      },
      {
        heading: "Semantic Elements:",
        items: [
          '<code className="inline-code">&lt;header&gt;</code> <code className="inline-code">&lt;nav&gt;</code> <code className="inline-code">&lt;main&gt;</code>',
          '<code className="inline-code">&lt;section&gt;</code> <code className="inline-code">&lt;article&gt;</code> <code className="inline-code">&lt;aside&gt;</code>',
          '<code className="inline-code">&lt;footer&gt;</code> <code className="inline-code">&lt;figure&gt;</code> <code className="inline-code">&lt;figcaption&gt;</code>',
          '<code className="inline-code">&lt;blockquote&gt;</code> <code className="inline-code">&lt;cite&gt;</code> <code className="inline-code">&lt;time&gt;</code>',
        ],
      },
      {
        heading: "Forms:",
        code: `<form>
  <label for="x">Name</label>
  <input type="text" id="x" required>
  <textarea></textarea>
  <select>
    <option>...</option>
  </select>
  <button type="submit">Submit</button>
</form>`,
        codeLanguage: "html",
      },
      {
        heading: "Links & Images:",
        items: [
          '<code className="inline-code">&lt;a href="url"&gt;</code> - Link',
          '<code className="inline-code">target="_blank" rel="noopener noreferrer"</code> - New tab',
          '<code className="inline-code">&lt;img src="pic.jpg" alt="desc" loading="lazy" /&gt;</code>',
        ],
      },
      {
        heading: "Accessibility:",
        items: [
          'aria-label - Audible name',
          'aria-required - Required field',
          'aria-describedby - Additional description',
          'aria-invalid - Invalid data',
          'aria-current="page" - Current page',
          'role="alert" / role="button"',
          'skip-link / sr-only',
        ],
      },
      {
        heading: "Pro Tips:",
        items: [
          "1. HTML first, CSS second",
          "2. Use semantic HTML always",
          "3. Alt for every image",
          "4. Label for every field",
          "5. Skip link for accessibility",
          "6. No br for spacing",
          "7. No div for everything",
          "8. Test with Tab and Screen Reader",
        ],
      },
    ],
  },
  fr: {
    title: "Fiche mémo Étape HTML",
    columns: [
      {
        heading: "Structure de la page:",
        code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width">
  <title>Titre</title>
</head>
<body>
  <!-- Contenu -->
</body>
</html>`,
        codeLanguage: "html",
      },
      {
        heading: "Éléments sémantiques:",
        items: [
          '<code className="inline-code">&lt;header&gt;</code> <code className="inline-code">&lt;nav&gt;</code> <code className="inline-code">&lt;main&gt;</code>',
          '<code className="inline-code">&lt;section&gt;</code> <code className="inline-code">&lt;article&gt;</code> <code className="inline-code">&lt;aside&gt;</code>',
          '<code className="inline-code">&lt;footer&gt;</code> <code className="inline-code">&lt;figure&gt;</code> <code className="inline-code">&lt;figcaption&gt;</code>',
          '<code className="inline-code">&lt;blockquote&gt;</code> <code className="inline-code">&lt;cite&gt;</code> <code className="inline-code">&lt;time&gt;</code>',
        ],
      },
      {
        heading: "Formulaires:",
        code: `<form>
  <label for="x">Nom</label>
  <input type="text" id="x" required>
  <textarea></textarea>
  <select>
    <option>...</option>
  </select>
  <button type="submit">Soumettre</button>
</form>`,
        codeLanguage: "html",
      },
      {
        heading: "Liens et images:",
        items: [
          '<code className="inline-code">&lt;a href="url"&gt;</code> - Lien',
          '<code className="inline-code">target="_blank" rel="noopener noreferrer"</code> - Nouvel onglet',
          '<code className="inline-code">&lt;img src="pic.jpg" alt="desc" loading="lazy" /&gt;</code>',
        ],
      },
      {
        heading: "Accessibilité:",
        items: [
          'aria-label - Nom audible',
          'aria-required - Champ obligatoire',
          'aria-describedby - Description supplémentaire',
          'aria-invalid - Données invalides',
          'aria-current="page" - Page actuelle',
          'role="alert" / role="button"',
          'skip-link / sr-only',
        ],
      },
      {
        heading: "Conseils de pro:",
        items: [
          "1. HTML d'abord, CSS ensuite",
          "2. Utilisez toujours le HTML sémantique",
          "3. Alt pour chaque image",
          "4. Label pour chaque champ",
          "5. Lien d'évitement pour l'accessibilité",
          "6. Pas de br pour l'espacement",
          "7. Pas de div pour tout",
          "8. Testez avec Tab et lecteur d'écran",
        ],
      },
    ],
  },
  de: {
    title: "Spickzettel HTML-Phase",
    columns: [
      {
        heading: "Seitenstruktur:",
        code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width">
  <title>Titel</title>
</head>
<body>
  <!-- Inhalt -->
</body>
</html>`,
        codeLanguage: "html",
      },
      {
        heading: "Semantische Elemente:",
        items: [
          '<code className="inline-code">&lt;header&gt;</code> <code className="inline-code">&lt;nav&gt;</code> <code className="inline-code">&lt;main&gt;</code>',
          '<code className="inline-code">&lt;section&gt;</code> <code className="inline-code">&lt;article&gt;</code> <code className="inline-code">&lt;aside&gt;</code>',
          '<code className="inline-code">&lt;footer&gt;</code> <code className="inline-code">&lt;figure&gt;</code> <code className="inline-code">&lt;figcaption&gt;</code>',
          '<code className="inline-code">&lt;blockquote&gt;</code> <code className="inline-code">&lt;cite&gt;</code> <code className="inline-code">&lt;time&gt;</code>',
        ],
      },
      {
        heading: "Formulare:",
        code: `<form>
  <label for="x">Name</label>
  <input type="text" id="x" required>
  <textarea></textarea>
  <select>
    <option>...</option>
  </select>
  <button type="submit">Absenden</button>
</form>`,
        codeLanguage: "html",
      },
      {
        heading: "Links & Bilder:",
        items: [
          '<code className="inline-code">&lt;a href="url"&gt;</code> - Link',
          '<code className="inline-code">target="_blank" rel="noopener noreferrer"</code> - Neuer Tab',
          '<code className="inline-code">&lt;img src="pic.jpg" alt="desc" loading="lazy" /&gt;</code>',
        ],
      },
      {
        heading: "Barrierefreiheit:",
        items: [
          'aria-label - Hörbarer Name',
          'aria-required - Erforderliches Feld',
          'aria-describedby - Zusätzliche Beschreibung',
          'aria-invalid - Ungültige Daten',
          'aria-current="page" - Aktuelle Seite',
          'role="alert" / role="button"',
          'skip-link / sr-only',
        ],
      },
      {
        heading: "Profi-Tipps:",
        items: [
          "1. HTML zuerst, CSS danach",
          "2. Verwenden Sie immer semantisches HTML",
          "3. Alt für jedes Bild",
          "4. Label für jedes Feld",
          "5. Skip-Link für Barrierefreiheit",
          "6. Kein br für Abstände",
          "7. Kein div für alles",
          "8. Testen Sie mit Tab und Screenreader",
        ],
      },
    ],
  },
};

const miniProject = {
  ar: {
    title: "المشروع النهائي: صفحة أسئلة شائعة متكاملة",
    description: "أنشئ صفحة أسئلة شائعة متكاملة لمشروعك الشخصي باستخدام كل ما تعلمته:",
    items: [
      'هيكل صفحة كامل (<code>&lt;!DOCTYPE&gt;</code>، <code>&lt;html&gt;</code>، <code>&lt;head&gt;</code>، <code>&lt;body&gt;</code>)',
      'ترويسة بشعار وتنقل دلالي',
      'عنوان رئيسي وعناوين فرعية متسلسلة',
      '<code>&lt;details&gt;</code> و<code>&lt;summary&gt;</code> لعناصر الأسئلة الشائعة',
      'صورة بنص alt وصفي',
      'نموذج اتصال بتسميات مرتبطة',
      'تذييل بمعلومات حقوق النشر',
      'ميزات إمكانية الوصول (رابط تخطي، أسماء aria)',
    ],
    hint: "طبق كل ما تعلمته في مرحلة HTML. فكر في الهيكل أولاً، ثم إمكانية الوصول، ثم الدلالية. اختبر بالتنقل بلوحة المفاتيح!",
  },
  en: {
    title: "Final Project: Complete FAQ Page",
    description: "Create a complete FAQ page for your personal project using everything you've learned:",
    items: [
      'Complete page structure (<code>&lt;!DOCTYPE&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>)',
      'Header with logo and semantic navigation',
      'Main heading and sequential subheadings',
      '<code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> for FAQ items',
      'An image with meaningful alt text',
      'A contact form with associated labels',
      'Footer with copyright information',
      'Accessibility features (skip link, aria labels)',
    ],
    hint: "Apply everything you learned in the HTML stage. Think about structure first, then accessibility, then semantics. Test with Tab navigation!",
  },
  fr: {
    title: "Projet final: Page FAQ complète",
    description: "Créez une page FAQ complète pour votre projet personnel en utilisant tout ce que vous avez appris:",
    items: [
      'Structure complète de la page (<code>&lt;!DOCTYPE&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>)',
      'En-tête avec logo et navigation sémantique',
      'Titre principal et sous-titres séquentiels',
      '<code>&lt;details&gt;</code> et <code>&lt;summary&gt;</code> pour les éléments FAQ',
      'Une image avec un texte alt significatif',
      'Un formulaire de contact avec des labels associés',
      'Pied de page avec informations de copyright',
      'Fonctionnalités d\'accessibilité (lien d\'évitement, labels aria)',
    ],
    hint: "Appliquez tout ce que vous avez appris dans l\'étape HTML. Pensez d\'abord à la structure, puis à l\'accessibilité, puis à la sémantique. Testez avec la navigation Tab!",
  },
  de: {
    title: "Endprojekt: Vollständige FAQ-Seite",
    description: "Erstellen Sie eine vollständige FAQ-Seite für Ihr persönliches Projekt mit allem, was Sie gelernt haben:",
    items: [
      'Vollständige Seitenstruktur (<code>&lt;!DOCTYPE&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>)',
      'Header mit Logo und semantischer Navigation',
      'Hauptüberschrift und sequentielle Unterüberschriften',
      '<code>&lt;details&gt;</code> und <code>&lt;summary&gt;</code> für FAQ-Elemente',
      'Ein Bild mit aussagekräftigem alt-Text',
      'Ein Kontaktformular mit zugehörigen Labels',
      'Footer mit Urheberrechtsinformationen',
      'Barrierefreiheitsfunktionen (Skip-Link, Aria-Labels)',
    ],
    hint: "Wenden Sie alles an, was Sie in der HTML-Phase gelernt haben. Denken Sie zuerst an die Struktur, dann an Barrierefreiheit, dann an Semantik. Testen Sie mit Tab-Navigation!",
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

export default function HtmlFinalProject() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("html", "08-html-final-project");
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

        <div className="rounded-xl p-6 my-6 border-2 text-center" style={{ background: "var(--surface)", borderColor: "var(--accent)" }}>
          <span className="text-4xl block mb-4">🎉</span>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--accent)" }}>
            {lang === "ar" ? "مبروك! أكملت مرحلة HTML" : lang === "fr" ? "Félicitations ! Vous avez terminé l'étape HTML" : "Herzlichen Glückwunsch! Sie haben die HTML-Phase abgeschlossen"}
          </h2>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>
            {lang === "ar"
              ? "أنت الآن تملك الأساس القوي لبناء أي صفحة ويب. الخطوة التالية هي تعلم CSS لتصفح صفحاتك وجعلها جميلة واحترافية."
              : lang === "fr"
              ? "Vous avez maintenant les bases solides pour construire n'importe quelle page web. La prochaine étape est d'apprendre CSS pour styliser vos pages."
              : "Sie haben jetzt die Grundlagen, um jede Webseite zu erstellen. Der nächste Schritt ist CSS zu lernen, um Ihre Seiten zu gestalten."}
          </p>
          <p style={{ color: "var(--muted)" }}>
            {lang === "ar"
              ? "استمر في التدرب على المشاريع الصغيرة ولا تتوقف عن التعلم!"
              : lang === "fr"
              ? "Continuez à vous entraîner sur de petits projets et n'arrêtez pas d'apprendre !"
              : "Üben Sie weiterhin mit kleinen Projekten und hören Sie nicht auf zu lernen!"}
          </p>
        </div>

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
