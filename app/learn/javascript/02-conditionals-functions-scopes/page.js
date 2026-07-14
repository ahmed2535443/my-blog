"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/javascript/02-conditionals-functions-scopes";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 1], en: [1, 1], fr: [1, 1], de: [1, 1] };

const challengeCode = `function greetUser(name, timeOfDay) {
  let greeting;
  switch (timeOfDay) {
    case "morning":
      greeting = "صباح الخير";
      break;
    case "afternoon":
      greeting = "مساء الخير";
      break;
    case "evening":
      greeting = "مساء الخير";
      break;
    default:
      greeting = "مرحباً";
  }
  return \`\${greeting}, \${name}!\`;
}

console.log(greetUser("أحمد", "morning"));
console.log(greetUser("فاطمة", "evening"));

function calculateGrade(score) {
  if (score >= 90) return "ممتاز";
  if (score >= 80) return "جيد جداً";
  if (score >= 70) return "جيد";
  if (score >= 60) return "مقبول";
  return "راسب";
}

const scores = [95, 82, 67, 45, 88];
scores.forEach(score => {
  console.log(\`الدرجة: \${score} - التقدير: \${calculateGrade(score)}\`);
});

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log("م factorial(5):", factorial(5));

function isEven(num) {
  return num % 2 === 0;
}

console.log("هل 7 زوجي؟", isEven(7));
console.log("هل 10 زوجي؟", isEven(10));`;

const cheatSheetData = {
  ar: {
    title: "ورقة مرجعية لجافاسكريبت - الدرس 2",
    columns: [
      {
        heading: "الجمل الشرطية:",
        items: [
          '<code className="inline-code">if (condition) {"{}"}</code> - ينفذ الكتلة إذا كان الشرط صحيحًا',
          '<code className="inline-code">else if (condition) {"{}"}</code> - شرط بديل',
          '<code className="inline-code">else {"{}"}</code> - الكتلة الافتراضية',
          '<code className="inline-code">switch (value) {"{}"}</code> - مطابقة حالات متعددة',
        ],
      },
      {
        heading: "الدوال:",
        items: [
          '<code className="inline-code">function name() {"{}"}</code> - تعريف الدالة (مرفوعة)',
          '<code className="inline-code">const name = () =&gt; {}</code> - دالة السهم',
          '<code className="inline-code">return value</code> - إرجاع من الدالة',
          "المعاملات: مدخلات | الإرجاع: مخرجات",
        ],
      },
    ],
  },
  en: {
    title: "JavaScript Cheat Sheet - Lesson 2",
    columns: [
      {
        heading: "Conditional Statements:",
        items: [
          '<code className="inline-code">if (condition) {"{}"}</code> - executes block if condition is true',
          '<code className="inline-code">else if (condition) {"{}"}</code> - alternative condition',
          '<code className="inline-code">else {"{}"}</code> - default block',
          '<code className="inline-code">switch (value) {"{}"}</code> - multiple case matching',
        ],
      },
      {
        heading: "Functions:",
        items: [
          '<code className="inline-code">function name() {"{}"}</code> - function declaration (hoisted)',
          '<code className="inline-code">const name = () =&gt; {}</code> - arrow function',
          '<code className="inline-code">return value</code> - return from function',
          "Parameters: inputs | Return: output",
        ],
      },
    ],
  },
  fr: {
    title: "Aide-Mémoire JavaScript - Cours 2",
    columns: [
      {
        heading: "Instructions Conditionnelles:",
        items: [
          '<code className="inline-code">if (condition) {"{}"}</code> - exécute le bloc si la condition est vraie',
          '<code className="inline-code">else if (condition) {"{}"}</code> - condition alternative',
          '<code className="inline-code">else {"{}"}</code> - bloc par défaut',
          '<code className="inline-code">switch (value) {"{}"}</code> - correspondance multi-cas',
        ],
      },
      {
        heading: "Fonctions:",
        items: [
          '<code className="inline-code">function name() {"{}"}</code> - déclaration de fonction (hissée)',
          '<code className="inline-code">const name = () =&gt; {}</code> - fonction fléchée',
          '<code className="inline-code">return value</code> - retour de la fonction',
          "Paramètres: entrées | Retour: sortie",
        ],
      },
    ],
  },
  de: {
    title: "JavaScript Spickzettel - Lektion 2",
    columns: [
      {
        heading: "Bedingte Anweisungen:",
        items: [
          '<code className="inline-code">if (condition) {"{}"}</code> - führt Block aus, wenn Bedingung wahr',
          '<code className="inline-code">else if (condition) {"{}"}</code> - alternative Bedingung',
          '<code className="inline-code">else {"{}"}</code> - Standardblock',
          '<code className="inline-code">switch (value) {"{}"}</code> - Mehrfachfall-Zuordnung',
        ],
      },
      {
        heading: "Funktionen:",
        items: [
          '<code className="inline-code">function name() {"{}"}</code> - Funktionsdeklaration (gehoben)',
          '<code className="inline-code">const name = () =&gt; {}</code> - Pfeilfunktion',
          '<code className="inline-code">return value</code> - Rückgabe aus Funktion',
          "Parameter: Eingaben | Rückgabe: Ausgabe",
        ],
      },
    ],
  },
};

const miniProject = {
  ar: {
    title: "مشروع صغير: حاسبة الدرجات",
    description: "أنشئ برنامجًا:",
    items: [
      'يأخذ درجات الطلاب كمدخل',
      'يستخدم if-else لتحديد درجات الحروف (A, B, C, D, F)',
      'ينشئ دالة تُرجع الدرجة',
      'يستخدم جملة switch لأوصاف الدرجات',
      'يكرر عبر عدة طلاب ويطبع درجاتهم',
    ],
    hint: "اجمع مفاهيم if-else و switch والدوال.",
  },
  en: {
    title: "Mini Project: Grade Calculator",
    description: "Create a program that:",
    items: [
      'Takes student scores as input',
      'Uses if-else to determine letter grades (A, B, C, D, F)',
      'Creates a function that returns the grade',
      'Uses a switch statement for grade descriptions',
      'Loops through multiple students and prints their grades',
    ],
    hint: "Combine if-else, switch, and function concepts.",
  },
  fr: {
    title: "Mini Projet: Calculatrice de Notes",
    description: "Créez un programme qui:",
    items: [
      'Prend les notes des étudiants en entrée',
      'Utilise if-else pour déterminer les lettres (A, B, C, D, F)',
      'Crée une fonction qui retourne la note',
      'Utilise switch pour les descriptions de notes',
      'Boucle sur plusieurs étudiants et affiche leurs notes',
    ],
    hint: "Combinz les concepts de if-else, switch et fonction.",
  },
  de: {
    title: "Mini-Projekt: Notenrechner",
    description: "Erstellen Sie ein Programm, das:",
    items: [
      'Schulnoten als Eingabe nimmt',
      'If-else zur Bestimmung von Notenbuchstaben verwendet (A, B, C, D, F)',
      'Eine Funktion erstellt, die die Note zurückgibt',
      'Switch für Notenbeschreibungen verwendet',
      'Durch mehrere Schüler loopt und ihre Noten ausgibt',
    ],
    hint: "Kombinieren Sie If-else-, Switch- und Funktionskonzepte.",
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

export default function ConditionalsFunctionsScopes() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("javascript", "02-conditionals-functions-scopes");
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
