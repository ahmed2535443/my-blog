"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/css/07-modern-animations";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1], en: [1, 1], fr: [1, 1], de: [1, 1] };

const challengeCode = `/* CSS Animation Challenge */

/* 1. Create a custom easing function */
:root {
  --ease-spring: linear(
    0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 18.9%,
    0.721 25.3%, 0.849 31.5%, 0.937 38.1%,
    0.968 41.8%, 0.991 46.3%, 1.006 51.2%,
    1.015 56.6%, 1.017 64.2%, 1.001 88.7%, 1
  );
}

/* 2. Animate something */
.animated-element {
  animation: bounce 0.6s var(--ease-spring);
}

@keyframes bounce {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}`;

const cheatSheetData = {
  ar: {
    title: "مرجع سريع: إتقان الرسوم المتحركة CSS",
    columns: [
      {
        heading: "دوال التسهيل الجديدة:",
        code: `/* linear() - تسهيل مخصص */
--ease-spring: linear(
  0, 0.006, 0.025 2.8%,
  0.539 18.9%, 0.849 31.5%,
  1.006 51.2%, 0.968 55.2%
);

/* view() - مدفوع بالتمرير */
animation-timeline: view();
animation-range: entry 0% cover 100%;

/* scroll() - مدفوع بالتمرير */
animation-timeline: scroll();`,
        codeLanguage: "css",
      },
      {
        heading: "نطاقات الجدول الزمني:",
        code: `/* نطاقات دخول/خروج محددة */
animation-range: entry 0% entry 100%;
animation-range: exit 0% exit 100%;

/* نطاقات التغطية */
animation-range: cover 0% cover 50%;

/* نطاقات مسماة */
animation-range: normal;`,
        codeLanguage: "css",
      },
      {
        heading: "الأداء:",
        items: [
          "جيد: transform، opacity (متسارع بالـ GPU)",
          "سيء: width، height، margin، padding (يسبب إعادة حساب التخطيط)",
          "نصيحة: will-change: transform لرسوم متحركة أكثر سلاسة",
          "نصيحة: استخدم contain: layout لعزل الرسوم المتحركة",
        ],
      },
      {
        heading: "أمثلة سريعة:",
        code: `/* مؤشر تقدم التمرير */
.progress {
  animation: grow linear;
  animation-timeline: scroll();
}

/* ظهور عند التمرير */
.card {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}`,
        codeLanguage: "css",
      },
    ],
  },
  en: {
    title: "Quick Reference: CSS Animation Mastery",
    columns: [
      {
        heading: "New Easing Functions:",
        code: `/* linear() - Custom easing */
--ease-spring: linear(
  0, 0.006, 0.025 2.8%,
  0.539 18.9%, 0.849 31.5%,
  1.006 51.2%, 0.968 55.2%
);

/* view() - Scroll-driven */
animation-timeline: view();
animation-range: entry 0% cover 100%;

/* scroll() - Scroll-driven */
animation-timeline: scroll();`,
        codeLanguage: "css",
      },
      {
        heading: "Timeline Ranges:",
        code: `/* Specific entry/exit ranges */
animation-range: entry 0% entry 100%;
animation-range: exit 0% exit 100%;

/* Cover ranges */
animation-range: cover 0% cover 50%;

/* Named ranges */
animation-range: normal;`,
        codeLanguage: "css",
      },
      {
        heading: "Performance:",
        items: [
          "Good: transform, opacity (GPU-accelerated)",
          "Bad: width, height, margin, padding (layout-triggering)",
          "Tip: will-change: transform for smoother animations",
          "Tip: Use contain: layout to isolate animations",
        ],
      },
      {
        heading: "Quick Examples:",
        code: `/* Scroll progress indicator */
.progress {
  animation: grow linear;
  animation-timeline: scroll();
}

/* On-scroll fade in */
.card {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}`,
        codeLanguage: "css",
      },
    ],
  },
  fr: {
    title: "Reference rapide: Animation CSS moderne",
    columns: [
      {
        heading: "Nouvelles courbes:",
        code: `--ease-spring: linear(
  0, 0.006, 0.025 2.8%,
  0.539 18.9%, 0.849 31.5%,
  1.006 51.2%, 0.968 55.2%
);

animation-timeline: view();
animation-range: entry 0% cover 100%;`,
        codeLanguage: "css",
      },
      {
        heading: "Performances:",
        items: [
          "Bon: transform, opacity (GPU)",
          "Mauvais: width, height, margin (layout)",
          "Conseil: will-change: transform",
        ],
      },
      {
        heading: "Exemples rapides:",
        code: `/* Barre de progression */
.progress {
  animation: grow linear;
  animation-timeline: scroll();
}

/* Fade in au scroll */
.card {
  animation: fade-in linear both;
  animation-timeline: view();
}`,
        codeLanguage: "css",
      },
      {
        heading: "Ranges:",
        code: `animation-range: entry 0% entry 100%;
animation-range: exit 0% exit 100%;
animation-range: cover 0% cover 50%;`,
        codeLanguage: "css",
      },
    ],
  },
  de: {
    title: "Kurzreferenz: CSS-Animationen meistern",
    columns: [
      {
        heading: "Neue Easing-Funktionen:",
        code: `--ease-spring: linear(
  0, 0.006, 0.025 2.8%,
  0.539 18.9%, 0.849 31.5%,
  1.006 51.2%, 0.968 55.2%
);

animation-timeline: view();
animation-range: entry 0% cover 100%;`,
        codeLanguage: "css",
      },
      {
        heading: "Leistung:",
        items: [
          "Gut: transform, opacity (GPU)",
          "Schlecht: width, height, margin (Layout)",
          "Tipp: will-change: transform",
        ],
      },
      {
        heading: "Schnelle Beispiele:",
        code: `/* Fortschrittsbalken */
.progress {
  animation: grow linear;
  animation-timeline: scroll();
}

/* Fade-in beim Scrollen */
.card {
  animation: fade-in linear both;
  animation-timeline: view();
}`,
        codeLanguage: "css",
      },
      {
        heading: "Bereiche:",
        code: `animation-range: entry 0% entry 100%;
animation-range: exit 0% exit 100%;
animation-range: cover 0% cover 50%;`,
        codeLanguage: "css",
      },
    ],
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

export default function ModernAnimations() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("css", "07-modern-animations");
  const content = rawTranslations[lang] || rawTranslations.en;
  if (!content) return null;
  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;

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
            <CodeBlock language="css" code={challengeCode} />
          </Challenge>
        )}
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
