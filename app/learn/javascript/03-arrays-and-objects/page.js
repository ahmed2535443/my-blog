"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/javascript/03-arrays-and-objects";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2], en: [1, 2], fr: [1, 2], de: [1, 2] };

const challengeCode = `const students = [
  { name: "أحمد", grade: 92, subject: "رياضيات" },
  { name: "فاطمة", grade: 88, subject: "علوم" },
  { name: "محمد", grade: 76, subject: "تاريخ" },
  { name: "نورة", grade: 95, subject: "رياضيات" },
  { name: "خالد", grade: 82, subject: "علوم" }
];

const excellent = students.filter(s => s.grade >= 90);
console.log("الطلاب الممتازون:", excellent);

const names = students.map(s => s.name);
console.log("أسماء الطلاب:", names);

const total = students.reduce((sum, s) => sum + s.grade, 0);
const average = total / students.length;
console.log("المعدل:", average.toFixed(2));

const mathStudents = students.filter(s => s.subject === "رياضيات");
console.log("طلاب الرياضيات:", mathStudents);

function addStudent(name, grade, subject) {
  const exists = students.some(s => s.name === name);
  if (!exists) {
    students.push({ name, grade, subject });
    console.log(\`تمت إضافة \${name}\`);
  } else {
    console.log(\`\${name} موجود مسبقاً\`);
  }
  return students;
}

addStudent("سارة", 89, "علوم");
console.log("القائمة المحدثة:", students);`;

const cheatSheetData = {
  ar: {
    title: "ورقة مرجعية لجافاسكريبت - الدرس 3",
    columns: [
      {
        heading: "طرق المصفوفة:",
        items: [
          '<code className="inline-code">.filter()</code> - تُرجع مصفوفة جديدة بالعناصر المطابقة',
          '<code className="inline-code">.map()</code> - تُرجع مصفوفة جديدة بتحويل كل عنصر',
          '<code className="inline-code">.reduce()</code> - تُحول المصفوفة إلى قيمة واحدة',
          '<code className="inline-code">.find()</code> - تُرجع أول عنصر مطابق',
          '<code className="inline-code">.some()</code> - تتحقق مما إذا كان عنصر واحد على الأقل يجتزء',
          '<code className="inline-code">.every()</code> - تتحقق مما إذا كان كل العناصر تجتزء',
        ],
      },
      {
        heading: "عمليات الكائن:",
        items: [
          '<code className="inline-code">Object.keys()</code> - تُرجع مصفوفة بالمفاتيح',
          '<code className="inline-code">Object.values()</code> - تُرجع مصفوفة بالقيم',
          '<code className="inline-code">Object.entries()</code> - تُرجع أزواج المفتاح-القيمة',
          "Spread: <code>{...obj}</code> - تنسخ الخصائص",
        ],
      },
    ],
  },
  en: {
    title: "JavaScript Cheat Sheet - Lesson 3",
    columns: [
      {
        heading: "Array Methods:",
        items: [
          '<code className="inline-code">.filter()</code> - returns new array with matching elements',
          '<code className="inline-code">.map()</code> - returns new array by transforming each element',
          '<code className="inline-code">.reduce()</code> - reduces array to single value',
          '<code className="inline-code">.find()</code> - returns first matching element',
          '<code className="inline-code">.some()</code> - tests if at least one element passes',
          '<code className="inline-code">.every()</code> - tests if all elements pass',
        ],
      },
      {
        heading: "Object Operations:",
        items: [
          '<code className="inline-code">Object.keys()</code> - returns array of keys',
          '<code className="inline-code">Object.values()</code> - returns array of values',
          '<code className="inline-code">Object.entries()</code> - returns key-value pairs',
          "Spread: <code>{...obj}</code> - copies properties",
        ],
      },
    ],
  },
  fr: {
    title: "Aide-Mémoire JavaScript - Cours 3",
    columns: [
      {
        heading: "Méthodes de Tableau:",
        items: [
          '<code className="inline-code">.filter()</code> - retourne un tableau avec les éléments correspondants',
          '<code className="inline-code">.map()</code> - retourne un tableau en transformant chaque élément',
          '<code className="inline-code">.reduce()</code> - réduit un tableau à une seule valeur',
          '<code className="inline-code">.find()</code> - retourne le premier élément correspondant',
          '<code className="inline-code">.some()</code> - teste si au moins un élément passe',
          '<code className="inline-code">.every()</code> - teste si tous les éléments passent',
        ],
      },
      {
        heading: "Opérations sur Objets:",
        items: [
          '<code className="inline-code">Object.keys()</code> - retourne un tableau de clés',
          '<code className="inline-code">Object.values()</code> - retourne un tableau de valeurs',
          '<code className="inline-code">Object.entries()</code> - retourne les paires clé-valeur',
          "Spread: <code>{...obj}</code> - copie les propriétés",
        ],
      },
    ],
  },
  de: {
    title: "JavaScript Spickzettel - Lektion 3",
    columns: [
      {
        heading: "Array-Methoden:",
        items: [
          '<code className="inline-code">.filter()</code> - gibt neues Array mit passenden Elementen zurück',
          '<code className="inline-code">.map()</code> - gibt neues Array durch Transformation jedes Elements',
          '<code className="inline-code">.reduce()</code> - reduziert Array auf einen einzelnen Wert',
          '<code className="inline-code">.find()</code> - gibt erstes passendes Element zurück',
          '<code className="inline-code">.some()</code> - testet ob mindestens ein Element besteht',
          '<code className="inline-code">.every()</code> - testet ob alle Elemente bestehen',
        ],
      },
      {
        heading: "Objektoperationen:",
        items: [
          '<code className="inline-code">Object.keys()</code> - gibt Array von Schlüsseln zurück',
          '<code className="inline-code">Object.values()</code> - gibt Array von Werten zurück',
          '<code className="inline-code">Object.entries()</code> - gibt Schlüssel-Wert-Paare zurück',
          "Spread: <code>{...obj}</code> - kopiert Eigenschaften",
        ],
      },
    ],
  },
};

const miniProject = {
  ar: {
    title: "مشروع صغير: نظام إدارة الطلاب",
    description: "أنشئ نظامًا يدير سجلات الطلاب:",
    items: [
      'أنشئ مصفوفة من كائنات الطلاب بالاسم والدرجة والمادة',
      'استخدم filter() لإيجاد الطلاب بدرجات أعلى من 85',
      'استخدم map() لإنشاء مصفوفة بأسماء الطلاب',
      'استخدم reduce() لحساب متوسط الدرجة',
      'أضف دالة لإدراج طالب جديد (بالتحقق من التكرارات)',
      'اعرض جميع معلومات الطلاب بتنسيق أنيق',
    ],
    hint: "استخدم filter و map و reduce و عمليات Spread معًا.",
  },
  en: {
    title: "Mini Project: Student Management System",
    description: "Create a system that manages student records:",
    items: [
      'Create an array of student objects with name, grade, and subject',
      'Use filter() to find students with grades above 85',
      'Use map() to create an array of student names',
      'Use reduce() to calculate the average grade',
      'Add a function to insert a new student (checking for duplicates)',
      'Display all student information formatted neatly',
    ],
    hint: "Use filter, map, reduce, and spread operators together.",
  },
  fr: {
    title: "Mini Projet: Système de Gestion d'Élèves",
    description: "Créez un système qui gère les dossiers d'élèves:",
    items: [
      "Créez un tableau d'objets élèves avec nom, note et matière",
      "Utilisez filter() pour trouver les élèves avec des notes supérieures à 85",
      "Utilisez map() pour créer un tableau de noms d'élèves",
      "Utilisez reduce() pour calculer la note moyenne",
      "Ajoutez une fonction pour insérer un nouvel élève (en vérifiant les doublons)",
      "Affichez toutes les informations des élèves formatées proprement",
    ],
    hint: "Utilisez filter, map, reduce et les opérateurs spread ensemble.",
  },
  de: {
    title: "Mini-Projekt: Schülerverwaltungssystem",
    description: "Erstellen Sie ein System zur Verwaltung von Schülerakten:",
    items: [
      "Erstellen Sie ein Array von Schülerobjekten mit Name, Note und Fach",
      "Verwenden Sie filter() um Schüler mit Noten über 85 zu finden",
      "Verwenden Sie map() um ein Array von Schülernamen zu erstellen",
      "Verwenden Sie reduce() um die Durchschnittsnote zu berechnen",
      "Fügen Sie eine Funktion zum Einfügen eines neuen Schülers hinzu (Duplikate prüfen)",
      "Zeigen Sie alle Schülerinformationen sauber formatiert an",
    ],
    hint: "Verwenden Sie filter, map, reduce und Spread-Operatoren zusammen.",
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

export default function ArraysAndObjects() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("javascript", "03-arrays-and-objects");
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
