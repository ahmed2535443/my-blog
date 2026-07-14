"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/javascript/05-array-and-object-methods";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [1, 2], en: [1, 2], fr: [1, 2], de: [1, 2] };

const challengeCode = `// بيانات المنتجات
const products = [
  { id: 1, name: "لابتوب",    price: 3500, category: "إلكترونيات", rating: 4.5 },
  { id: 2, name: "هاتف",      price: 2000, category: "إلكترونيات", rating: 4.8 },
  { id: 3, name: "كتاب JS",   price: 80,   category: "كتب",        rating: 4.2 },
  { id: 4, name: "سماعات",    price: 300,  category: "إلكترونيات", rating: 3.9 },
  { id: 5, name: "قلم",       price: 15,   category: "كتب",        rating: 4.0 },
  { id: 6, name: "تابلت",     price: 1500, category: "إلكترونيات", rating: 4.3 },
];

// المطلوب:
// 1. حساب متوسط سعر المنتجات من فئة "إلكترونيات" باستخدام reduce()
// 2. تجميع المنتجات حسب الفئة (Object key) باستخدام reduce()
// 3. إيجاد أول منتج تقييمه أكبر من 4.5 باستخدام find()
// 4. التحقق هل جميع المنتجات تقييمها أكبر من 3.0 باستخدام every()
// 5. تحويل المنتجات التي سعرها أقل من 500 لمصفوفة أسماء باستخدام filter() ثم map()`;

const cheatSheetData = {
  ar: {
    title: "ورقة مرجعية - مرجع سريع",
    items: [
      { label: "map()", description: "المدخل: مصفوفة | المخرج: مصفوفة جديدة (بنفس الطول) | تعدّل: لا" },
      { label: "filter()", description: "المدخل: مصفوفة | المخرج: مصفوفة جديدة (مجموعة فرعية) | تعدّل: لا" },
      { label: "reduce()", description: "المدخل: مصفوفة | المخرج: قيمة واحدة | تعدّل: لا" },
      { label: "find()", description: "المدخل: مصفوفة | المخرج: عنصر أو undefined | تعدّل: لا" },
      { label: "every() / some()", description: "المدخل: مصفوفة | المخرج: قيمة منطقية | تعدّل: لا" },
      { label: "طرق الكائن", description: "Object.keys() المفاتيح | Object.values() القيم | Object.entries() أزواج المفتاح-القيمة" },
      { label: "العمليات", description: "obj?.prop Optional Chaining | value ?? افتراضي Nullish Coalescing" },
    ],
  },
  en: {
    title: "Cheat Sheet - Quick Reference",
    items: [
      { label: "map()", description: "Input: Array | Output: New Array (same length) | Mutates: No" },
      { label: "filter()", description: "Input: Array | Output: New Array (subset) | Mutates: No" },
      { label: "reduce()", description: "Input: Array | Output: Single value | Mutates: No" },
      { label: "find()", description: "Input: Array | Output: Element or undefined | Mutates: No" },
      { label: "every() / some()", description: "Input: Array | Output: Boolean | Mutates: No" },
      { label: "Object Methods", description: "Object.keys() keys | Object.values() values | Object.entries() key-value pairs" },
      { label: "Operators", description: "obj?.prop Optional Chaining | value ?? default Nullish Coalescing" },
    ],
  },
  fr: {
    title: "Aide-Mémoire - Référence Rapide",
    items: [
      { label: "map()", description: "Entrée: Tableau | Sortie: Nouveau Tableau | Mutate: Non" },
      { label: "filter()", description: "Entrée: Tableau | Sortie: Nouveau Tableau (sous-ensemble) | Mutate: Non" },
      { label: "reduce()", description: "Entrée: Tableau | Sortie: Valeur unique | Mutate: Non" },
      { label: "find()", description: "Entrée: Tableau | Sortie: Élément ou undefined | Mutate: Non" },
      { label: "Méthodes Object", description: "Object.keys() clés | Object.values() valeurs | Object.entries() paires" },
      { label: "Opérateurs", description: "obj?.prop Chaining Optionnel | value ?? défaut Coalescence Nullish" },
    ],
  },
  de: {
    title: "Spickzettel - Schnellreferenz",
    items: [
      { label: "map()", description: "Eingabe: Array | Ausgabe: Neues Array | Mutiert: Nein" },
      { label: "filter()", description: "Eingabe: Array | Ausgabe: Neues Array (Teilmenge) | Mutiert: Nein" },
      { label: "reduce()", description: "Eingabe: Array | Ausgabe: Einzelner Wert | Mutiert: Nein" },
      { label: "find()", description: "Eingabe: Array | Ausgabe: Element oder undefined | Mutiert: Nein" },
      { label: "Objekt-Methoden", description: "Object.keys() Schlüssel | Object.values() Werte | Object.entries() Paare" },
      { label: "Operatoren", description: "obj?.prop Optionales Chaining | value ?? Standard Nullish Coalescing" },
    ],
  },
};

const miniProject = {
  ar: { title: "تحدي: بيانات متجر الإلكترونيات", description: "طبّق جميع الطرق التي تعلمتها في هذا الدرس لإيجاد بيانات متجر إلكترونيات." },
  en: { title: "Challenge: Electronics Store Data", description: "Apply all the methods you learned in this lesson to find electronics store data." },
  fr: { title: "Défi : Données Magasin d'Électronique", description: "Appliquez toutes les méthodes que vous avez apprises pour trouver des données de magasin d'électronique." },
  de: { title: "Herausforderung: Elektronikgeschäftsdaten", description: "Wenden Sie alle Methoden an, die Sie in dieser Lektion gelernt haben, um Elektronikgeschäftsdaten zu finden." },
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

export default function ArrayAndObjectMethods() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("javascript", "05-array-and-object-methods");
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

        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.items.map((item, i) => (
              <div key={i}>
                <p className="font-bold" style={{ color: "var(--primary)" }}>{item.label}</p>
                <p className="text-sm" style={{ color: "var(--foreground)" }}>{item.description}</p>
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
