"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/javascript/04-modules-and-async";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2], fr: [1, 2], de: [1, 2] };

const challengeCode = `async function fetchUserData(userId) {
  try {
    const response = await fetch(
      \`https://jsonplaceholder.typicode.com/users/\${userId}\`
    );
    if (!response.ok) throw new Error("فشل في جلب البيانات");
    const data = await response.json();
    console.log("معلومات المستخدم:", data.name);
    return data;
  } catch (error) {
    console.error("خطأ:", error.message);
  }
}

fetchUserData(1);

async function fetchMultipleUsers() {
  const ids = [1, 2, 3];
  const promises = ids.map(id =>
    fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`)
      .then(r => r.json())
  );
  const users = await Promise.all(promises);
  console.log("جميع المستخدمين:", users);
}

fetchMultipleUsers();`;

const cheatSheetData = {
  en: {
    title: "JavaScript Cheat Sheet - Lesson 4",
    columns: [
      {
        heading: "Modules (ES6):",
        items: [
          '<code className="inline-code">export const name = value</code> - named export',
          '<code className="inline-code">export default function</code> - default export',
          '<code className="inline-code">import { name } from "./module"</code> - import named',
          '<code className="inline-code">import Name from "./module"</code> - import default',
        ],
      },
      {
        heading: "Async/Await & Promises:",
        items: [
          '<code className="inline-code">async function</code> - declares async function',
          '<code className="inline-code">await</code> - waits for Promise to resolve',
          '<code className="inline-code">new Promise()</code> - creates a Promise',
          '<code className="inline-code">Promise.all()</code> - waits for all promises',
          '<code className="inline-code">Promise.race()</code> - first to resolve wins',
          '<code className="inline-code">.then()/.catch()</code> - promise chaining',
        ],
      },
    ],
  },
  fr: {
    title: "Aide-Mémoire JavaScript - Cours 4",
    columns: [
      {
        heading: "Modules (ES6):",
        items: [
          '<code className="inline-code">export const name = value</code> - export nommé',
          '<code className="inline-code">export default function</code> - export par défaut',
          '<code className="inline-code">import { name } from "./module"</code> - import nommé',
          '<code className="inline-code">import Name from "./module"</code> - import par défaut',
        ],
      },
      {
        heading: "Async/Await & Promesses:",
        items: [
          '<code className="inline-code">async function</code> - déclare une fonction asynchrone',
          '<code className="inline-code">await</code> - attend la résolution de la Promesse',
          '<code className="inline-code">new Promise()</code> - crée une Promesse',
          '<code className="inline-code">Promise.all()</code> - attend toutes les promesses',
          '<code className="inline-code">Promise.race()</code> - la première à résoudre gagne',
          '<code className="inline-code">.then()/.catch()</code> - chaînage de promesses',
        ],
      },
    ],
  },
  de: {
    title: "JavaScript Spickzettel - Lektion 4",
    columns: [
      {
        heading: "Module (ES6):",
        items: [
          '<code className="inline-code">export const name = value</code> - benannter Export',
          '<code className="inline-code">export default function</code> - Standardexport',
          '<code className="inline-code">import { name } from "./module"</code> - benannter Import',
          '<code className="inline-code">import Name from "./module"</code> - Standardimport',
        ],
      },
      {
        heading: "Async/Await & Promises:",
        items: [
          '<code className="inline-code">async function</code> - deklariert async Funktion',
          '<code className="inline-code">await</code> - wartet auf Promise-Auflösung',
          '<code className="inline-code">new Promise()</code> - erstellt ein Promise',
          '<code className="inline-code">Promise.all()</code> - wartet auf alle Promises',
          '<code className="inline-code">Promise.race()</code> - erstes Ergebnis gewinnt',
          '<code className="inline-code">.then()/.catch()</code> - Promise-Verkettung',
        ],
      },
    ],
  },
};

const miniProject = {
  en: {
    title: "Mini Project: Async Data Fetcher",
    description: "Create an async application that:",
    items: [
      "Fetches data from a public API (e.g., JSONPlaceholder)",
      "Uses async/await for all asynchronous operations",
      "Handles errors gracefully with try-catch",
      "Fetches multiple resources in parallel with Promise.all",
      "Exports utility functions as ES6 modules",
    ],
    hint: "Use the fetch API with async/await pattern.",
  },
  fr: {
    title: "Mini Projet: Récupérateur de Données Async",
    description: "Créez une application async qui:",
    items: [
      "Récupère des données d'une API publique (ex: JSONPlaceholder)",
      "Utilise async/await pour toutes les opérations asynchrones",
      "Gère les erreurs avec try-catch",
      "Récupère plusieurs ressources en parallèle avec Promise.all",
      "Exporte les fonctions utilitaires comme modules ES6",
    ],
    hint: "Utilisez l'API fetch avec le pattern async/await.",
  },
  de: {
    title: "Mini-Projekt: Async-Daten-Fetcher",
    description: "Erstellen Sie eine Async-Anwendung die:",
    items: [
      "Daten von einer öffentlichen API holt (z.B. JSONPlaceholder)",
      "Async/await für alle asynchronen Operationen verwendet",
      "Fehler mit try-catch elegant behandelt",
      "Mehrere Ressourcen parallel mit Promise.all holt",
      "Utility-Funktionen als ES6-Module exportiert",
    ],
    hint: "Verwenden Sie die fetch API mit async/await-Muster.",
  },
};

function renderContent(item) {
  if (item.type === "p") return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "li") return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "ol") return <ol dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "callout") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>💡 {item.title}:</p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  if (item.type === "callout-accent") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>✅ {item.title}:</p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  if (item.type === "callout-primary") {
    return (
      <div className="p-4 rounded-xl my-4 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>🔍 {item.title}:</p>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  }
  return null;
}

export default function ModulesAndAsync() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("javascript", "04-modules-and-async");
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
            <CodeBlock language="javascript" code={challengeCode} />
          </Challenge>
        )}

        <div className="rounded-xl p-6 my-6 border-2" style={{ background: "var(--surface)", borderColor: "var(--secondary)" }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🏗️</span>
            <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>{mp.title}</span>
          </div>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>{mp.description}</p>
          <ul className="mb-4" style={{ color: "var(--foreground)" }}>
            {mp.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <p className="text-sm" style={{ color: "var(--muted)" }}>💡 {mp.hint}</p>
        </div>

        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                <ul className="text-sm space-y-1">
                  {col.items.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
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
