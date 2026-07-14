"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/final-project/02-setup-and-structure";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1], fr: [1], de: [1], ar: [1] };

const cheatSheetData = {
  en: {
    title: "Quick Setup Reference",
    columns: [
      {
        heading: "Setup Steps:",
        items: [
          "1. Create Project - <code className='inline-code'>npx create-next-app@latest my-blog</code>",
          "2. Install Dependencies - <code className='inline-code'>npm install @supabase/ssr @clerk/nextjs</code>",
          "3. Setup .env.local - Add Supabase and Clerk keys",
          "4. Run Project - <code className='inline-code'>npm run dev</code>",
        ],
      },
      {
        heading: "Key Files:",
        items: [
          "<code className='inline-code'>.env.local</code> - Environment variables (never commit)",
          "<code className='inline-code'>package.json</code> - Dependencies and scripts",
          "<code className='inline-code'>next.config.js</code> - Next.js configuration",
          "<code className='inline-code'>tailwind.config.js</code> - Tailwind CSS configuration",
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide de configuration",
    columns: [
      {
        heading: "Étapes de configuration :",
        items: [
          "1. Créer le projet - <code className='inline-code'>npx create-next-app@latest my-blog</code>",
          "2. Installer les dépendances - <code className='inline-code'>npm install @supabase/ssr @clerk/nextjs</code>",
          "3. Configurer .env.local - Ajouter les clés Supabase et Clerk",
          "4. Exécuter le projet - <code className='inline-code'>npm run dev</code>",
        ],
      },
      {
        heading: "Fichiers clés :",
        items: [
          "<code className='inline-code'>.env.local</code> - Variables d'environnement (ne jamais commit)",
          "<code className='inline-code'>package.json</code> - Dépendances et scripts",
          "<code className='inline-code'>next.config.js</code> - Configuration Next.js",
          "<code className='inline-code'>tailwind.config.js</code> - Configuration Tailwind CSS",
        ],
      },
    ],
  },
  de: {
    title: "Schnelle Einrichtungsreferenz",
    columns: [
      {
        heading: "Einrichtungsschritte:",
        items: [
          "1. Projekt erstellen - <code className='inline-code'>npx create-next-app@latest my-blog</code>",
          "2. Abhängigkeiten installieren - <code className='inline-code'>npm install @supabase/ssr @clerk/nextjs</code>",
          "3. .env.local einrichten - Supabase- und Clerk-Schlüssel hinzufügen",
          "4. Projekt ausführen - <code className='inline-code'>npm run dev</code>",
        ],
      },
      {
        heading: "Schlüsseldateien:",
        items: [
          "<code className='inline-code'>.env.local</code> - Umgebungsvariablen (niemals committen)",
          "<code className='inline-code'>package.json</code> - Abhängigkeiten und Skripte",
          "<code className='inline-code'>next.config.js</code> - Next.js-Konfiguration",
          "<code className='inline-code'>tailwind.config.js</code> - Tailwind CSS-Konfiguration",
        ],
      },
    ],
  },
  ar: {
    title: "مرجع الإعداد السريع",
    columns: [
      {
        heading: "خطوات الإعداد:",
        items: [
          "1. إنشاء المشروع - <code className='inline-code'>npx create-next-app@latest my-blog</code>",
          "2. تثبيت التبعيات - <code className='inline-code'>npm install @supabase/ssr @clerk/nextjs</code>",
          "3. إعداد .env.local - أضف مفاتيح Supabase و Clerk",
          "4. تشغيل المشروع - <code className='inline-code'>npm run dev</code>",
        ],
      },
      {
        heading: "الملفات الرئيسية:",
        items: [
          "<code className='inline-code'>.env.local</code> - متغيرات البيئة (لا تدفع أبدًا)",
          "<code className='inline-code'>package.json</code> - التبعيات والسكربتات",
          "<code className='inline-code'>next.config.js</code> - إعدادات Next.js",
          "<code className='inline-code'>tailwind.config.js</code> - إعدادات Tailwind CSS",
        ],
      },
    ],
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

export default function SetupAndStructure() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("final-project", "02-setup-and-structure");
  const content = rawTranslations[lang] || rawTranslations.en;

  if (!content) return null;

  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;

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
          </Challenge>
        )}

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
