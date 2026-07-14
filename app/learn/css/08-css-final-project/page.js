"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/css/08-css-final-project";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1], fr: [1, 1, 1], de: [1, 1, 1] };

const challengeDescription = {
  en: "Create a new section titled 'What Our Customers Say' with 3 animated testimonial cards. Each card should include: user image (placeholder), name, position, and testimonial. Use CSS Grid with auto-fit/minmax, add scroll-reveal animations, and make cards adapt with Container Queries.",
  fr: "Créez une section 'Ce que disent nos clients' avec 3 cartes de témoignages animées. Chaque carte doit inclure : image, nom, poste et témoignage. Utilisez CSS Grid avec auto-fit/minmax, des animations au défilement, et Container Queries.",
  de: "Erstellen Sie einen Bereich 'Was unsere Kunden sagen' mit 3 animierten Empfehlungskarten. Jede Karte sollte enthalten: Bild, Name, Position und Empfehlung. Verwenden Sie CSS Grid mit auto-fit/minmax, Scroll-Animationen und Container Queries.",
};

function renderContent(item) {
  if (item.type === "p") return <p className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "li") return <li className="flex items-start gap-3" dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "ol") return <ol dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "callout") return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
      <p className="text-blue-800 dark:text-blue-300 font-bold mb-1">{item.title}</p>
      <p className="text-blue-700 dark:text-blue-400" dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  if (item.type === "callout-accent") return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
      <p className="text-green-800 dark:text-green-300 font-bold mb-1">{item.title}</p>
      <p className="text-green-700 dark:text-green-400" dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  if (item.type === "callout-primary") return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
      <p className="text-amber-800 dark:text-amber-300 font-bold mb-1">{item.title}</p>
      <p className="text-amber-700 dark:text-amber-400" dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
  return null;
}

export default function CSSFinalProject() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("css", "08-css-final-project");
  const content = rawTranslations[lang] || rawTranslations.en;
  if (!content) return null;
  const answers = correctAnswers[lang] || correctAnswers.en;
  const challenge = content.challenge || { title: "Testimonials Section", description: challengeDescription[lang] || challengeDescription.en };
  const cs = content.cheatSheet || { title: "Complete CSS Reference", items: [] };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lessonInfo.stage}
        lesson={lessonInfo}
        lessonIndex={lessonInfo.lessonIndex}
        totalLessons={lessonInfo.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* Section 1: Project Introduction */}
        <LessonSection title={content.sections[0]?.title || "Project Introduction"}>
          {content.sections[0]?.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
        </LessonSection>

        {/* Section 2: What We'll Learn */}
        <LessonSection title={content.sections[1]?.title || "What We'll Learn"}>
          <ul className="space-y-3 mb-4">
            {content.sections[1]?.content.map((item, j) => (
              <li key={j} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{j + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            ))}
          </ul>
        </LessonSection>

        {/* Section 3: Project Structure */}
        <LessonSection title={content.sections[2]?.title || "Project Structure"}>
          {content.sections[2]?.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          <CodeBlock
            code={`project/
├── index.html
├── css/
│   ├── layers.css
│   ├── base.css
│   ├── variables.css
│   ├── components.css
│   ├── layout.css
│   ├── utilities.css
│   └── animations.css
└── js/
    └── theme-toggle.js`}
            language="text"
          />
        </LessonSection>

        {/* Section 4: Step 1 - Basics */}
        <LessonSection title={content.sections[3]?.title || "Step 1: The Basics"}>
          {content.sections[3]?.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          <h3 className="text-xl font-bold mt-6 mb-3">layers.css</h3>
          <CodeBlock code={`@layer base, components, layout, utilities, animations;`} language="css" />
          <h3 className="text-xl font-bold mt-6 mb-3">variables.css</h3>
          <CodeBlock code={`@layer base {
  :root {
    color-scheme: light dark;

    --color-primary: oklch(0.65 0.19 265);
    --color-primary-hover: oklch(0.55 0.19 265);
    --color-primary-light: oklch(0.92 0.05 265);
    --color-secondary: oklch(0.65 0.19 145);
    --color-accent: oklch(0.75 0.15 55);

    --bg-page: light-dark(#f8fafc, #0f172a);
    --bg-surface: light-dark(#ffffff, #1e293b);
    --bg-surface-hover: light-dark(#f1f5f9, #334155);
    --bg-muted: light-dark(#f1f5f9, #1e293b);

    --text-primary: light-dark(#0f172a, #f1f5f9);
    --text-secondary: light-dark(#475569, #94a3b8);
    --text-muted: light-dark(#94a3b8, #64748b);

    --border-default: light-dark(#e2e8f0, #334155);
    --border-hover: light-dark(#cbd5e1, #475569);

    --shadow-sm: 0 1px 2px oklch(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px oklch(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px oklch(0 0 0 / 0.1);
    --shadow-glow: 0 0 20px color-mix(in oklch, var(--color-primary) 25%, transparent);

    --font-family: 'Inter', system-ui, -apple-system, sans-serif;
    --font-size-xs: clamp(0.75rem, 0.7rem + 0.15vw, 0.8rem);
    --font-size-sm: clamp(0.8rem, 0.75rem + 0.2vw, 0.875rem);
    --font-size-base: clamp(0.9rem, 0.85rem + 0.25vw, 1rem);
    --font-size-lg: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
    --font-size-xl: clamp(1.25rem, 1rem + 1vw, 1.75rem);
    --font-size-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem);
    --font-size-hero: clamp(2rem, 1.5rem + 2.5vw, 4rem);

    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;

    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-full: 9999px;

    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);

    --container-max: min(100% - 2rem, 72rem);
    --nav-height: 4rem;
  }
}`} language="css" />
          <h3 className="text-xl font-bold mt-6 mb-3">base.css</h3>
          <CodeBlock code={`@layer base {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--nav-height);
  }

  body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-page);
    min-height: 100dvh;
    -webkit-font-smoothing: antialiased;
  }

  img { max-width: 100%; display: block; }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
    &:hover { color: var(--color-primary-hover); }
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
    color: var(--text-primary);
  }

  ::selection {
    background: color-mix(in oklch, var(--color-primary) 30%, transparent);
  }
}`} language="css" />
        </LessonSection>

        {/* Section 5: Step 2 - Layout */}
        <LessonSection title={content.sections[4]?.title || "Step 2: Layout"}>
          {content.sections[4]?.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          <h3 className="text-xl font-bold mt-6 mb-3">Navbar - Flexbox</h3>
          <CodeBlock code={`/* components.css */
@layer components {
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    height: var(--nav-height);
    padding-inline: clamp(1rem, 3vw, 2rem);
    background: color-mix(in oklch, var(--bg-surface) 85%, transparent);
    backdrop-filter: blur(12px) saturate(1.5);
    border-block-end: 1px solid var(--border-default);
  }

  .navbar__logo {
    font-size: var(--font-size-xl);
    font-weight: 800;
    color: var(--color-primary);
  }

  .navbar__links {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    list-style: none;
  }

  .navbar__link {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    font-weight: 500;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    &:hover, &.active {
      color: var(--color-primary);
      background: var(--color-primary-light);
    }
  }

  .navbar__actions {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }
}`} language="css" />
          <h3 className="text-xl font-bold mt-6 mb-3">Hero Section - clamp()</h3>
          <CodeBlock code={`@layer components {
  .hero {
    display: grid;
    place-items: center;
    min-height: min(70vh, 500px);
    padding-block: var(--space-3xl);
    padding-inline: var(--space-xl);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero__bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 30% 20%, color-mix(in oklch, var(--color-primary) 15%, transparent), transparent 60%),
      radial-gradient(ellipse at 70% 80%, color-mix(in oklch, var(--color-secondary) 10%, transparent), transparent 60%);
    z-index: -1;
  }

  .hero__title {
    font-size: var(--font-size-hero);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    max-width: 20ch;
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--color-primary) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .hero__subtitle {
    font-size: var(--font-size-xl);
    color: var(--text-secondary);
    max-width: 45ch;
    margin-block-start: var(--space-lg);
  }

  .hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
    margin-block-start: var(--space-2xl);
    justify-content: center;
  }
}`} language="css" />
          <h3 className="text-xl font-bold mt-6 mb-3">Cards Grid - CSS Grid</h3>
          <CodeBlock code={`@layer layout {
  .features {
    padding-block: var(--space-3xl);
    padding-inline: var(--space-xl);
  }

  .features__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: var(--space-xl);
    max-width: var(--container-max);
    margin-inline: auto;
  }
}`} language="css" />
          <h3 className="text-xl font-bold mt-6 mb-3">Feature Card - Container Queries</h3>
          <CodeBlock code={`@layer components {
  .feature-card {
    container-type: inline-size;
    container-name: feature-card;
    background: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    transition: all var(--transition-base);
    &:hover {
      border-color: var(--border-hover);
      box-shadow: var(--shadow-lg), var(--shadow-glow);
      transform: translateY(-4px);
    }
  }

  .feature-card__icon {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: var(--radius-lg);
    background: var(--color-primary-light);
    color: var(--color-primary);
    font-size: 1.5rem;
    margin-block-end: var(--space-md);
  }

  .feature-card__title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-block-end: var(--space-sm);
  }

  .feature-card__description {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    line-height: 1.7;
  }

  @container feature-card (min-width: 400px) {
    .feature-card {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      gap: var(--space-sm) var(--space-lg);
      align-items: start;
    }
    .feature-card__icon {
      grid-row: 1 / -1;
      width: 4rem;
      height: 4rem;
      font-size: 2rem;
    }
    .feature-card__title { margin-block-end: 0; }
  }
}`} language="css" />
          <h3 className="text-xl font-bold mt-6 mb-3">Footer</h3>
          <CodeBlock code={`@layer layout {
  .footer {
    display: grid;
    place-items: center;
    gap: var(--space-lg);
    padding-block: var(--space-3xl) var(--space-xl);
    padding-inline: var(--space-xl);
    border-block-start: 1px solid var(--border-default);
    background: var(--bg-muted);
    text-align: center;
  }

  .footer__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-md) var(--space-xl);
    list-style: none;
  }

  .footer__copy {
    font-size: var(--font-size-sm);
    color: var(--text-muted);
  }
}`} language="css" />
        </LessonSection>

        {/* Section 6: Step 3 - Themes */}
        <LessonSection title={content.sections[5]?.title || "Step 3: Themes"}>
          {content.sections[5]?.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          <h3 className="text-xl font-bold mt-6 mb-3">light-dark() Usage</h3>
          <CodeBlock code={`:root { color-scheme: light dark; }

.card {
  background: light-dark(#ffffff, #1e293b);
  color: light-dark(#0f172a, #f1f5f9);
}`} language="css" />
          <h3 className="text-xl font-bold mt-6 mb-3">JavaScript Toggle</h3>
          <CodeBlock code={`const STORAGE_KEY = "theme";
const html = document.documentElement;

function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  html.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

setTheme(getPreferredTheme());`} language="javascript" />
          <h3 className="text-xl font-bold mt-6 mb-3">Custom Themes</h3>
          <CodeBlock code={`[data-theme="ocean"] {
  --color-primary: oklch(0.6 0.15 230);
  --bg-page: light-dark(#f0f9ff, #0c1929);
}

[data-theme="forest"] {
  --color-primary: oklch(0.6 0.18 155);
  --bg-page: light-dark(#f0fdf4, #0a1f0a);
}`} language="css" />
        </LessonSection>

        {/* Section 7: Step 4 - Animations */}
        <LessonSection title={content.sections[6]?.title || "Step 4: Animations"}>
          {content.sections[6]?.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}
          <h3 className="text-xl font-bold mt-6 mb-3">Button Hover</h3>
          <CodeBlock code={`@layer animations {
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-xl);
    font-size: var(--font-size-base);
    font-weight: 600;
    border: none;
    border-radius: var(--radius-lg);
    cursor: pointer;
    overflow: hidden;
    transition: all var(--transition-base);
  }

  .btn--primary {
    background: var(--color-primary);
    color: light-dark(#ffffff, #ffffff);
    box-shadow: var(--shadow-md);
  }

  .btn--primary:hover {
    background: var(--color-primary-hover);
    box-shadow: var(--shadow-lg), var(--shadow-glow);
    transform: translateY(-2px);
  }

  .btn--outline {
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }

  .btn--outline:hover {
    background: var(--color-primary);
    color: light-dark(#ffffff, #ffffff);
    transform: translateY(-2px);
  }
}`} language="css" />
          <h3 className="text-xl font-bold mt-6 mb-3">Keyframe Animations</h3>
          <CodeBlock code={`@layer animations {
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 0 0 color-mix(in oklch, var(--color-primary) 40%, transparent); }
    50% { box-shadow: 0 0 20px 5px color-mix(in oklch, var(--color-primary) 20%, transparent); }
  }

  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero__title { animation: fade-in-up 0.8s ease-out both; }
  .hero__subtitle { animation: fade-in-up 0.8s 0.2s ease-out both; }
  .hero__actions { animation: fade-in-up 0.8s 0.4s ease-out both; }

  .feature-card { animation: fade-in-up 0.6s ease-out both; }
  .feature-card:nth-child(1) { animation-delay: 0.1s; }
  .feature-card:nth-child(2) { animation-delay: 0.2s; }
  .feature-card:nth-child(3) { animation-delay: 0.3s; }

  .feature-card:hover .feature-card__icon {
    animation: float 2s ease-in-out infinite;
  }
}`} language="css" />
          <h3 className="text-xl font-bold mt-6 mb-3">Scroll Animations</h3>
          <CodeBlock code={`@layer animations {
  @keyframes reveal {
    from { opacity: 0; transform: translateY(40px) scale(0.96); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .feature-card {
    animation: reveal linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 100%;
  }
}`} language="css" />
        </LessonSection>

        {/* Section 8: Summary */}
        <LessonSection title={content.sections[7]?.title || "Summary & Tips"}>
          <ul className="space-y-3 mb-6">
            {content.sections[7]?.content.map((item, j) => (
              <li key={j} className="flex items-start gap-3">
                <span className="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{j + 1}</span>
                <p dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            ))}
          </ul>
        </LessonSection>

        {/* Quiz */}
        <LessonSection title="Quiz">
          {content.quiz?.map((q, i) => (
            <Quiz key={i} question={q.question} options={q.options} correctAnswer={answers[i]} explanation={q.explanation} />
          ))}
        </LessonSection>

        {/* Challenge */}
        <LessonSection title="Challenge">
          <Challenge title={challenge.title} description={<p>{challenge.description}</p>}>
            <CodeBlock language="css" code={`/* Add your testimonials section CSS here */`} />
          </Challenge>
        </LessonSection>

        {/* CheatSheet */}
        <LessonSection title="Reference">
          <CheatSheet title={cs.title}>
            <div className="space-y-4">
              {cs.items?.map((item, i) => (
                <div key={i}>
                  <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{item.title}</p>
                  <CodeBlock language="text" code={item.content} />
                </div>
              ))}
            </div>
          </CheatSheet>
        </LessonSection>

        {/* Navigation */}
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
