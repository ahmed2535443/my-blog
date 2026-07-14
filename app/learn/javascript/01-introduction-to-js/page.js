"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/javascript/01-introduction-to-js";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2], en: [1, 2], fr: [1, 2], de: [1, 2] };

const challengeCode = `// بيانات المستخدم
const userName = "أحمد";
const userAge = 25;

// الهوايات
const hobbies = ["البرمجة", "القراءة", "الألعاب"];

// كائن المستخدم
const user = {
  name: userName,
  age: userAge,
  hobbies: hobbies
};

// طباعة المعلومات
console.log("معلومات المستخدم:");
console.log("الاسم:", user.name);
console.log("العمر:", user.age);
console.log("الهوايات:", user.hobbies.join("، "));

// فحص الأنواع
console.log("\\n--- أنواع البيانات ---");
console.log("typeof userName:", typeof userName);
console.log("typeof userAge:", typeof userAge);
console.log("typeof hobbies:", typeof hobbies);
console.log("typeof user:", typeof user);`;

const cheatSheetData = {
  ar: {
    title: "ورقة مرجعية لجافاسكريبت - الدرس 1",
    columns: [
      {
        heading: "مقارنة المتغيرات:",
        items: [
          '<code className="inline-code">var</code> - نطاق الدالة | إعادة التعيين: نعم | الرفع: نعم (undefined)',
          '<code className="inline-code">let</code> - نطاق الكتلة | إعادة التعيين: نعم | الرفع: نعم (منطقة الموت المؤقتة)',
          '<code className="inline-code">const</code> - نطاق الكتلة | إعادة التعيين: لا | الرفع: نعم (منطقة الموت المؤقتة)',
        ],
      },
      {
        heading: "العمليات الشائعة:",
        items: [
          "حسابية: <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>**</code>",
          "مقارنة: <code>===</code> <code>!==</code> <code>==</code> <code>!=</code> <code>&gt;</code> <code>&lt;</code>",
          "منطقية: <code>&&</code> <code>||</code> <code>!</code>",
          "تعيين: <code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code>",
        ],
      },
    ],
  },
  en: {
    title: "JavaScript Cheat Sheet - Lesson 1",
    columns: [
      {
        heading: "Variable Comparison:",
        items: [
          '<code className="inline-code">var</code> - Function Scope | Reassignment: Yes | Hoisting: Yes (undefined)',
          '<code className="inline-code">let</code> - Block Scope | Reassignment: Yes | Hoisting: Yes (TDZ)',
          '<code className="inline-code">const</code> - Block Scope | Reassignment: No | Hoisting: Yes (TDZ)',
        ],
      },
      {
        heading: "Common Operators:",
        items: [
          "Arithmetic: <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>**</code>",
          "Comparison: <code>===</code> <code>!==</code> <code>==</code> <code>!=</code> <code>&gt;</code> <code>&lt;</code>",
          "Logical: <code>&&</code> <code>||</code> <code>!</code>",
          "Assignment: <code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code>",
        ],
      },
    ],
  },
  fr: {
    title: "Aide-Mémoire JavaScript - Cours 1",
    columns: [
      {
        heading: "Comparaison des Variables:",
        items: [
          '<code className="inline-code">var</code> - Portée de fonction | Réaffectation: Oui | Hissement: Oui (undefined)',
          '<code className="inline-code">let</code> - Portée de bloc | Réaffectation: Oui | Hissement: Oui (TDM)',
          '<code className="inline-code">const</code> - Portée de bloc | Réaffectation: Non | Hissement: Oui (TDM)',
        ],
      },
      {
        heading: "Opérateurs Courants:",
        items: [
          "Arithmétiques: <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>**</code>",
          "Comparaison: <code>===</code> <code>!==</code> <code>==</code> <code>!=</code> <code>&gt;</code> <code>&lt;</code>",
          "Logiques: <code>&&</code> <code>||</code> <code>!</code>",
          "Affectation: <code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code>",
        ],
      },
    ],
  },
  de: {
    title: "JavaScript Spickzettel - Lektion 1",
    columns: [
      {
        heading: "Variablenvergleich:",
        items: [
          '<code className="inline-code">var</code> - Function Scope | Neuzuweisung: Ja | Hoisting: Ja (undefined)',
          '<code className="inline-code">let</code> - Block Scope | Neuzuweisung: Ja | Hoisting: Ja (TDZ)',
          '<code className="inline-code">const</code> - Block Scope | Neuzuweisung: Nein | Hoisting: Ja (TDZ)',
        ],
      },
      {
        heading: "Häufige Operatoren:",
        items: [
          "Arithmetisch: <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>**</code>",
          "Vergleich: <code>===</code> <code>!==</code> <code>==</code> <code>!=</code> <code>&gt;</code> <code>&lt;</code>",
          "Logisch: <code>&&</code> <code>||</code> <code>!</code>",
          "Zuweisung: <code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code>",
        ],
      },
    ],
  },
};

const miniProject = {
  ar: {
    title: "مشروع صغير: آلة حاسبة بسيطة",
    description: "أنشئ ملف جافاسكريبت جديدًا يحتوي على:",
    items: [
      'متغيرات لتخزين اسم المستخدم والعمر باستخدام <code>const</code>',
      'مصفوفة تحتوي على 3 هوايات للمستخدم',
      'كائن يمثل المستخدم بالخصائص: الاسم والعمر والهوايات',
      'استخدم console.log لطباعة معلومات المستخدم',
      'استخدم console.log لطباعة نوع كل متغير باستخدام typeof',
    ],
    hint: "ستحتاج إلى استخدام المتغيرات والمصفوفات والكائنات وعملية typeof.",
  },
  en: {
    title: "Mini Project: Simple Calculator",
    description: "Create a new JavaScript file that contains:",
    items: [
      'Variables to store username and age using <code>const</code>',
      'An array with 3 hobbies for the user',
      'An object representing the user with properties: name, age, and hobbies',
      'Use console.log to print user information',
      'Use console.log to print the type of each variable using typeof',
    ],
    hint: "You'll need to use variables, arrays, objects, and the typeof operator.",
  },
  fr: {
    title: "Mini Projet: Calculatrice Simple",
    description: "Créez un nouveau fichier JavaScript contenant:",
    items: [
      'Des variables pour stocker le nom et l\'âge en utilisant <code>const</code>',
      'Un tableau avec 3 loisirs pour l\'utilisateur',
      'Un objet représentant l\'utilisateur avec les propriétés: name, age et hobbies',
      'Utilisez console.log pour afficher les informations',
      'Utilisez console.log pour afficher le type de chaque variable en utilisant typeof',
    ],
    hint: "Vous aurez besoin d'utiliser des variables, des tableaux, des objets et l'opérateur typeof.",
  },
  de: {
    title: "Mini-Projekt: Einfacher Taschenrechner",
    description: "Erstellen Sie eine neue JavaScript-Datei mit:",
    items: [
      'Variablen zur Speicherung von Benutzername und Alter mit <code>const</code>',
      'Ein Array mit 3 Hobbys für den Benutzer',
      'Ein Objekt, das den Benutzer darstellt mit: name, age und hobbies',
      'Verwenden Sie console.log zum Ausgeben der Benutzerinformationen',
      'Verwenden Sie console.log zum Ausgeben des Typs jeder Variable mit typeof',
    ],
    hint: "Sie werden Variablen, Arrays, Objekte und den typeof-Operator benötigen.",
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

export default function IntroductionToJS() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("javascript", "01-introduction-to-js");
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
                {col.code && <CodeBlock language={col.codeLanguage || "javascript"} code={col.code} />}
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
