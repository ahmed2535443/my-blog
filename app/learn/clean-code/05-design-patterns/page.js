"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/clean-code/05-design-patterns";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1], fr: [1], de: [1] };

const codeSingleton = `class DatabaseConnection {
  static instance = null;
  constructor() {
    if (DatabaseConnection.instance) return DatabaseConnection.instance;
    this.connection = this.createConnection();
    DatabaseConnection.instance = this;
  }
  createConnection() {
    console.log('New database connection created');
    return { host: 'localhost', port: 5432 };
  }
  query(sql) {
    console.log('Executing query:', sql);
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log(db1 === db2); // true`;

const codeFactory = `class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.permissions = ["read", "write", "delete"];
  }
}

class Student extends User {
  constructor(name) {
    super(name, "student");
    this.permissions = ["read"];
  }
}

class Teacher extends User {
  constructor(name) {
    super(name, "teacher");
    this.permissions = ["read", "write"];
  }
}

class UserFactory {
  static createUser(name, type) {
    switch (type) {
      case "admin":
        return new Admin(name);
      case "student":
        return new Student(name);
      case "teacher":
        return new Teacher(name);
      default:
        throw new Error("Unknown user type");
    }
  }
}

const admin = UserFactory.createUser("Ahmed", "admin");
const student = UserFactory.createUser("Sara", "student");
console.log(admin.permissions); // ["read", "write", "delete"]
console.log(student.permissions); // ["read"]`;

const codeObserver = `class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event, callback) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(
      (cb) => cb !== callback
    );
  }

  emit(event, data) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((callback) => callback(data));
  }
}

const emitter = new EventEmitter();

function onUserLogin(user) {
  console.log("User logged in:", user.name);
}

function sendWelcomeEmail(user) {
  console.log("Sending welcome email to:", user.email);
}

emitter.on("login", onUserLogin);
emitter.on("login", sendWelcomeEmail);

emitter.emit("login", { name: "Mohamed", email: "mohamed@example.com" });`;

const codeModule = `const Calculator = (function () {
  let result = 0;

  function add(value) {
    result += value;
    return this;
  }

  function subtract(value) {
    result -= value;
    return this;
  }

  function multiply(value) {
    result *= value;
    return this;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;
    return this;
  }

  return {
    add,
    subtract,
    multiply,
    getResult,
    reset,
  };
})();

Calculator.add(10).multiply(2).subtract(5);
console.log(Calculator.getResult()); // 15
console.log(Calculator.result); // undefined - hidden inside module`;

const codeStrategy = `const pricingStrategies = {
  regular: (price) => price,
  discount: (price) => price * 0.9,
  vip: (price) => price * 0.75,
  seasonal: (price) => price * 0.5,
};

class ShoppingCart {
  constructor(pricingStrategy = "regular") {
    this.items = [];
    this.pricingStrategy = pricingStrategy;
  }

  addItem(item) {
    this.items.push(item);
  }

  setStrategy(strategy) {
    this.pricingStrategy = strategy;
  }

  calculateTotal() {
    const strategy = pricingStrategies[this.pricingStrategy];
    return this.items.reduce((total, item) => {
      return total + strategy(item.price * item.quantity);
    }, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Book", price: 50, quantity: 2 });
cart.addItem({ name: "Pen", price: 10, quantity: 5 });

console.log(cart.calculateTotal()); // 150 (no discount)
cart.setStrategy("vip");
console.log(cart.calculateTotal()); // 112.5 (25% VIP discount)`;

const cheatSheetData = {
  en: {
    title: "Design Patterns Quick Reference",
    columns: [
      {
        heading: "Creational Patterns:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>Singleton</strong> - One instance only. For shared resources.',
          '<strong style={{ color: "var(--primary)" }}>Factory</strong> - Creates objects based on inputs. Separates creation from usage.',
        ],
      },
      {
        heading: "Structural & Behavioral Patterns:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>Observer</strong> - Notifies observers on state change. Used in events.',
          '<strong style={{ color: "var(--primary)" }}>Module</strong> - Encapsulates data and functions. Hides internal details.',
          '<strong style={{ color: "var(--primary)" }}>Strategy</strong> - Makes algorithms interchangeable. Used in different behaviors.',
        ],
      },
    ],
  },
  fr: {
    title: "Référence rapide des patrons de conception",
    columns: [
      {
        heading: "Patrons de création :",
        items: [
          '<strong style={{ color: "var(--primary)" }}>Singleton</strong> - Une seule instance. Pour les ressources partagées.',
          '<strong style={{ color: "var(--primary)" }}>Factory</strong> - Crée des objets basés sur les entrées. Sépare la création de l\'utilisation.',
        ],
      },
      {
        heading: "Patrons structurels et comportementaux :",
        items: [
          '<strong style={{ color: "var(--primary)" }}>Observer</strong> - Notifie les observateurs lors du changement d\'état. Utilisé dans les événements.',
          '<strong style={{ color: "var(--primary)" }}>Module</strong> - Encapsule les données et fonctions. Cache les détails internes.',
          '<strong style={{ color: "var(--primary)" }}>Strategy</strong> - Rend les algorithmes interchangeables. Utilisé dans les différents comportements.',
        ],
      },
    ],
  },
  de: {
    title: "Schnellreferenz für Entwurfsmuster",
    columns: [
      {
        heading: "Erstellungsmuster:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>Singleton</strong> - Nur eine Instanz. Für gemeinsame Ressourcen.',
          '<strong style={{ color: "var(--primary)" }}>Factory</strong> - Erstellt Objekte basierend auf Eingaben. Trennt Erstellung von Verwendung.',
        ],
      },
      {
        heading: "Struktur- und Verhaltensmuster:",
        items: [
          '<strong style={{ color: "var(--primary)" }}>Observer</strong> - Benachrichtigt Beobachter bei Zustandsänderung. In Ereignissen verwendet.',
          '<strong style={{ color: "var(--primary)" }}>Module</strong> - Kapselt Daten und Funktionen. Verbirgt interne Details.',
          '<strong style={{ color: "var(--primary)" }}>Strategy</strong> - Macht Algorithmen austauschbar. In verschiedenen Verhaltensweisen verwendet.',
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

export default function DesignPatternsLesson() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("clean-code", "05-design-patterns");
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

        {content.sections.map((section, i) => {
          if (section.title === "Knowledge Test") {
            return content.quiz && content.quiz.map((q, qi) => (
              <Quiz
                key={`quiz-${qi}`}
                question={q.question}
                options={q.options}
                correctAnswer={answers[qi]}
                explanation={q.explanation}
              />
            ));
          }
          if (section.title === "Practical Challenge") {
            return (
              <Challenge key={i} title={content.challenge.title} description={<p>{content.challenge.description}</p>}>
                <CodeBlock language="javascript" code={codeSingleton} />
              </Challenge>
            );
          }
          if (section.title === "Singleton Pattern") {
            return (
              <LessonSection key={i} title={section.title}>
                {section.content.map((item, j) => (
                  <div key={j}>{renderContent(item)}</div>
                ))}
                <CodeBlock language="javascript" code={codeSingleton} />
              </LessonSection>
            );
          }
          if (section.title === "Factory Pattern") {
            return (
              <LessonSection key={i} title={section.title}>
                {section.content.map((item, j) => (
                  <div key={j}>{renderContent(item)}</div>
                ))}
                <CodeBlock language="javascript" code={codeFactory} />
              </LessonSection>
            );
          }
          if (section.title === "Observer Pattern") {
            return (
              <LessonSection key={i} title={section.title}>
                {section.content.map((item, j) => (
                  <div key={j}>{renderContent(item)}</div>
                ))}
                <CodeBlock language="javascript" code={codeObserver} />
              </LessonSection>
            );
          }
          if (section.title === "Module Pattern") {
            return (
              <LessonSection key={i} title={section.title}>
                {section.content.map((item, j) => (
                  <div key={j}>{renderContent(item)}</div>
                ))}
                <CodeBlock language="javascript" code={codeModule} />
              </LessonSection>
            );
          }
          if (section.title === "Strategy Pattern") {
            return (
              <LessonSection key={i} title={section.title}>
                {section.content.map((item, j) => (
                  <div key={j}>{renderContent(item)}</div>
                ))}
                <CodeBlock language="javascript" code={codeStrategy} />
              </LessonSection>
            );
          }
          if (section.title === "Patterns Summary") {
            return (
              <CheatSheet key={i} title={cs.title}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cs.columns.map((col, ci) => (
                    <div key={ci}>
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
            );
          }
          return (
            <LessonSection key={i} title={section.title}>
              {section.content.map((item, j) => (
                <div key={j}>{renderContent(item)}</div>
              ))}
            </LessonSection>
          );
        })}

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
