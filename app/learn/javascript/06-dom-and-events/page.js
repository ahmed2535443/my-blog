"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/javascript/06-dom-and-events";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { ar: [2, 1], en: [2, 1], fr: [2, 1], de: [2, 1] };

const challengeCode = `const countEl = document.getElementById("count");
let count = 0;

document.getElementById("increase").addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countEl.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
});`;

const cheatSheetData = {
  ar: {
    title: "ورقة مرجعية DOM والأحداث",
    columns: [
      {
        heading: "اختيار العناصر:",
        code: `document.getElementById("id")
document.querySelector(".class")
document.querySelectorAll("li")
element.parentElement
element.children`,
      },
      {
        heading: "الأحداث:",
        code: `el.addEventListener("click", fn)
el.removeEventListener("click", fn)
"click" "input" "submit" "keydown"
event.target / event.preventDefault()`,
      },
      {
        heading: "تعديل العناصر:",
        code: `el.textContent = "جديد"
el.innerHTML = "<b>جديد</b>"
el.style.color = "red"
el.classList.add("أ")
el.setAttribute("href", "#")`,
      },
      {
        heading: "الإنشاء والحذف:",
        code: `document.createElement("div")
parent.appendChild(div)
div.remove()
element.cloneNode(true)`,
      },
    ],
  },
  en: {
    title: "DOM & Events Cheat Sheet",
    columns: [
      {
        heading: "Selecting Elements:",
        code: `document.getElementById("id")
document.querySelector(".class")
document.querySelectorAll("li")
element.parentElement
element.children`,
      },
      {
        heading: "Events:",
        code: `el.addEventListener("click", fn)
el.removeEventListener("click", fn)
"click" "input" "submit" "keydown"
event.target / event.preventDefault()`,
      },
      {
        heading: "Modifying Elements:",
        code: `el.textContent = "new"
el.innerHTML = "<b>new</b>"
el.style.color = "red"
el.classList.add("a")
el.setAttribute("href", "#")`,
      },
      {
        heading: "Creating & Removing:",
        code: `document.createElement("div")
parent.appendChild(div)
div.remove()
element.cloneNode(true)`,
      },
    ],
  },
  fr: {
    title: "Aide-Mémoire DOM & Événements",
    columns: [
      {
        heading: "Sélection d'Éléments:",
        code: `document.getElementById("id")
document.querySelector(".class")
document.querySelectorAll("li")
element.parentElement
element.children`,
      },
      {
        heading: "Événements:",
        code: `el.addEventListener("click", fn)
el.removeEventListener("click", fn)
"click" "input" "submit" "keydown"
event.target / event.preventDefault()`,
      },
      {
        heading: "Modification d'Éléments:",
        code: `el.textContent = "nouveau"
el.innerHTML = "<b>nouveau</b>"
el.style.color = "red"
el.classList.add("a")
el.setAttribute("href", "#")`,
      },
      {
        heading: "Création & Suppression:",
        code: `document.createElement("div")
parent.appendChild(div)
div.remove()
element.cloneNode(true)`,
      },
    ],
  },
  de: {
    title: "DOM & Events Spickzettel",
    columns: [
      {
        heading: "Elemente Auswählen:",
        code: `document.getElementById("id")
document.querySelector(".class")
document.querySelectorAll("li")
element.parentElement
element.children`,
      },
      {
        heading: "Events:",
        code: `el.addEventListener("click", fn)
el.removeEventListener("click", fn)
"click" "input" "submit" "keydown"
event.target / event.preventDefault()`,
      },
      {
        heading: "Elemente Ändern:",
        code: `el.textContent = "neu"
el.innerHTML = "<b>neu</b>"
el.style.color = "red"
el.classList.add("a")
el.setAttribute("href", "#")`,
      },
      {
        heading: "Erstellen & Entfernen:",
        code: `document.createElement("div")
parent.appendChild(div)
div.remove()
element.cloneNode(true)`,
      },
    ],
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

export default function DOMAndEvents() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("javascript", "06-dom-and-events");
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
            <CodeBlock language="javascript" code={challengeCode} />
          </Challenge>
        )}

        <CheatSheet title={cs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.columns.map((col, i) => (
              <div key={i}>
                <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>{col.heading}</p>
                <CodeBlock language="javascript" code={col.code} />
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
