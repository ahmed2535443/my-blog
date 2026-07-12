// =====================================================
// ملف: page.js (الدرس الثامن: Context API)
// المكان: app/learn/react/08-context-api/page.js
// الوظيفة: تعليم Context API لإدارة الحالة العامة بدون prop drilling
// URL: /learn/react/08-context-api
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ContextApi() {
  const lessonInfo = getLessonBySlug("react", "08-context-api");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {/* ========================================== */}
        {/* القسم الأول: ما هي Context API؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هي Context API؟">
          <p>
            <strong>Context API</strong> هي ميزة في React تسمح لك بتمرير
            البيانات عبر شجرة المكونات <strong>بدون الحاجة لتمرير Props
            يدوياً</strong> في كل مستوى. هذا يحل مشكلة{" "}
            <strong>Prop Drilling</strong> المعروفة.
          </p>

          <p>
            بدون Context، إذا أردت تمرير بيانات من مكون أب لمكون حفيد遥远，
            كنت مضطراً لتمريرها عبر كل مكون في الطريق. مع Context، تنشر
            البيانات مرة واحدة وتصل تلقائياً لأي مكون يحتاجها.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              تشبيه بسيط:
            </p>
            <p>
              تخيّل أنك في مبنى كبير. بدون Context، تحتاج أن تمشي عبر كل
              طابق لتوصيل رسالة من الطابق الأول للطابق العاشر. مع Context،
              هو像 محطة إذاعة: تبث الرسالة مرة واحدة من بثها، وكل من لديه
              جهاز استقبال (useContext) يسمعها مباشرة.
            </p>
          </div>

          <p>
            Context يُنشئ <strong>"قناة اتصال"</strong> بين المكون الذي
            يُنشئ البيانات (Provider) وأي مكون يريد استخدامها (Consumer)
            عبر أي عدد من المستويات في شجرة المكونات.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدمها؟ */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم Context API؟">
          <p>
            الطريقة الأساسية لتمرير البيانات في React هي عبر Props. لكن
            هذه الطريقة تصبح معقدة عندما تحتاج تمرير بيانات عبر عدة مستويات:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ❌ بدون Context - Prop Drilling
// المستخدم مسجل دخول ونريد تمرير معلوماته لكل المكونات

function App() {
  const user = { name: "أحمد", email: "ahmed@example.com" };
  
  return <Layout user={user} />;
}

function Layout({ user }) {
  // Layout لا يستخدم user، لكنه مضطر لتمريره
  return (
    <div>
      <Header user={user} />
      <Main user={user} />
    </div>
  );
}

function Header({ user }) {
  // Header لا يزال لا يستخدم user مباشرة!
  return (
    <div>
      <Navigation user={user} />
    </div>
  );
}

function Navigation({ user }) {
  // أخيراً وصلنا! Navigation هو الذي يحتاج user
  return <span>مرحباً {user.name}</span>;
}`}
          />

          <p>
            كما ترى، المكونات <code>Layout</code> و{" "}
            <code>Header</code> لا تستخدم <code>user</code> لكنها مضطرة
            لتمريره. هذا يُسمى <strong>Prop Drilling</strong> وهو يسبب:
          </p>

          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              <strong>كود مكرر:</strong> كل مكون في الطريق يأخذ prop لا
              يحتاجه
            </li>
            <li>
              <strong>تداخل المكونات:</strong> المكونات تصبح مرتبطة ببعضها
              بشكل وثيق
            </li>
            <li>
              <strong>صعوبة إعادة الهيكلة:</strong> تغيير بنية المكونات
              يتطلب تعديل عدة ملفات
            </li>
            <li>
              <strong>صعوبة الاختبار:</strong> اختبار مكون يحتاج اختبار كل
              مكون في سلسلة التمرير
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة التي يحلها */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها Context">
          <p>لنرَ نفس المثال باستخدام Context API:</p>

          <CodeBlock
            language="jsx"
            code={`// ✅ مع Context - لا Prop Drilling

// 1. إنشاء الـ Context
import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

// 2. إنشاء Provider يلف التطبيق
function App() {
  const [user, setUser] = useState({ name: "أحمد", email: "ahmed@example.com" });
  
  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
}

// 3. Layout لا يحتاج user أبداً!
function Layout() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

// 4. Header لا يحتاج user أيضاً!
function Header() {
  return (
    <div>
      <Navigation />
    </div>
  );
}

// 5. Navigation يحصل على user مباشرة عبر useContext
function Navigation() {
  const user = useContext(UserContext);
  return <span>مرحباً {user.name}</span>;
}`}
          />

          <p>
            الفرق واضح: لم نعد نحتاج تمرير <code>user</code> عبر Layout
            و Header. المكونات أصبحت مستقلة ومرنة.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: شرح بسيط */}
        {/* ========================================== */}
        <LessonSection title="شرح بسيط: كيف يعمل Context؟">
          <p>
            Context يعمل على مبدأ <strong>البث (Broadcasting)</strong>. هناك
            جزئان رئيسيان:
          </p>

          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>المزود (Provider):</strong> المكون الذي يُنشئ الـ
              Context ويحتوي على البيانات. يُلف المكونات التي تحتاج
              للبيانات ويُمكّنها من الوصول إليها.
            </li>
            <li>
              <strong>المستهلك (Consumer):</strong> أي مكون يريد استخدام
              البيانات يستدعي <code>useContext</code> للحصول على القيمة
              من أقرب Provider في شجرة المكونات.
            </li>
          </ol>

          <CodeBlock
            language="jsx"
            code={`// خطوات عمل Context في 3 خطوات:

// الخطوة 1: إنشاء الـ Context
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light"); // القيمة الافتراضية

// الخطوة 2: إنشاء Provider ولف المكونات
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// الخطوة 3: استخدام useContext في أي مكون فرعي
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      تبديل المظهر (الحالي: {theme})
    </button>
  );
}

// التجميع في App
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>تطبيقي</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: createContext + Provider */}
        {/* ========================================== */}
        <LessonSection title="createContext + Provider">
          <p>
            لإنشاء Context جديد، نستخدم دالة <code>createContext</code> من
            React:
          </p>

          <CodeBlock
            language="jsx"
            code={`import { createContext } from "react";

// إنشاء الـ Context مع قيمة افتراضية
const LanguageContext = createContext("ar");

// القيمة الافتراضية تُستخدم فقط إذا لم يوجد Provider في الأعلى
// مفيد للاختبار أو في حالة نسيان تغليف المكونات`}
          />

          <p>
            بعد إنشاء الـ Context، نحتاج إلى <strong>Provider</strong> يلف
            المكونات ويمرر القيمة:
          </p>

          <CodeBlock
            language="jsx"
            code={`"use client";

import { createContext, useState } from "react";

const LanguageContext = createContext("ar");

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ar");

  const t = (arabic, english) => {
    return language === "ar" ? arabic : english;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// استخدام Provider في layout أو App
function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              تنبيه مهم:
            </p>
            <p>
              لا تنسَ أن تلف المكونات children داخل Provider. إذا نسيت ذلك،
              لن يعمل useContext في المكونات الفرعية وستحصل على القيمة
              الافتراضية.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: useContext */}
        {/* ========================================== */}
        <LessonSection title="useContext - استخدام Context">
          <p>
            لاستخدام بيانات الـ Context في أي مكون، نستخدم hook{" "}
            <code>useContext</code>:
          </p>

          <CodeBlock
            language="jsx"
            code={`import { useContext } from "react";

// احصل على القيمة من الـ Context
const LanguageContext = createContext("ar");

function MyComponent() {
  // useContext يأخذ الـ Context object كمعامل
  // ويرجع القيمة التي مررها أقرب Provider
  const { language, setLanguage, t } = useContext(LanguageContext);

  return (
    <div>
      <p>اللغة الحالية: {language}</p>
      <p>{t("مرحباً بالعالم", "Hello World")}</p>
      <button onClick={() => setLanguage(language === "ar" ? "en" : "ar")}>
        تبديل اللغة
      </button>
    </div>
  );
}`}
          />

          <p>
            <code>useContext</code> يبحث في شجرة المكونات عن أقرب Provider
            للـ Context ويرجع قيمته. إذا لم يجد أي Provider، يُرجع
            القيمة الافتراضية التي حددتها في <code>createContext</code>.
          </p>

          <CodeBlock
            language="jsx"
            code={`// مثال: الوصول للقيمة من أي عمق
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />  {/* يمكنها الوصول */}
    </ThemeContext.Provider>
  );
}

function Header() {
  return <Navigation />;  {/* لا تستخدم Context */}
}

function Navigation() {
  const theme = useContext(ThemeContext); // "dark" ✅
  return <span>المظهر: {theme}</span>;
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: مثال بسيط - Theme Context */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط: Theme Context">
          <p>
            أكرداً في هذا المثال هي إنشاء نظام مظهر (Light/Dark) بدون أي
            prop drilling:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: context/ThemeContext.js

"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // قراءة المظهر المحفوظ
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    }
  }, []);

  // حفظ المظهر عند التغيير
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme يجب استخدامه داخل ThemeProvider");
  }
  return context;
}`}
          />

          <p>الآن يمكن لأي مكون استخدام المظهر بدون تمرير props:</p>

          <CodeBlock
            language="jsx"
            code={`// ملف: app/layout.js
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// ملف: components/Header.js
"use client";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      background: theme === "light" ? "#ffffff" : "#1a1a1a",
      color: theme === "light" ? "#000000" : "#ffffff",
    }}>
      <h1>تطبيقي</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "الوضع الداكن" : "الوضع الفاتح"}
      </button>
    </header>
  );
}

// ملف: components/Card.js
"use client";
import { useTheme } from "@/context/ThemeContext";

export default function Card({ title, children }) {
  const { theme } = useTheme();

  return (
    <div style={{
      background: theme === "light" ? "#f5f5f5" : "#2a2a2a",
      color: theme === "light" ? "#333333" : "#e0e0e0",
      padding: "20px",
      borderRadius: "12px",
      border: \`1px solid \${theme === "light" ? "#ddd" : "#444"}\`,
    }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: مثال عملي */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: محوّل لغة + مظهر داكن">
          <p>
            لنبنِ مثالاً أكثر شمولاً يجمع بين محوّل اللغة (عربي/إنجليزي)
            والوضع الداكن باستخدام Context:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: context/AppContext.js

"use client";

import { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext(undefined);

// النصوص بالعربية والإنجليزية
const translations = {
  ar: {
    welcome: "مرحباً بك في تطبيقنا",
    description: "هذا تطبيق تعليمي لمفاهيم React",
    toggleTheme: "تبديل المظهر",
    toggleLanguage: "تبديل اللغة",
    darkMode: "الوضع الداكن",
    lightMode: "الوضع الفاتح",
    home: "الرئيسية",
    about: "من نحن",
    contact: "تواصل معنا",
  },
  en: {
    welcome: "Welcome to our application",
    description: "This is an educational app for React concepts",
    toggleTheme: "Toggle Theme",
    toggleLanguage: "Toggle Language",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    home: "Home",
    about: "About",
    contact: "Contact",
  },
};

export function AppProvider({ children }) {
  const [language, setLanguage] = useState("ar");
  const [theme, setTheme] = useState("light");

  // دالة الترجمة
  const t = useCallback(
    (key) => {
      return translations[language]?.[key] || key;
    },
    [language]
  );

  // تبديل اللغة
  const toggleLanguage = useCallback(() => {
    setLanguage(prev => (prev === "ar" ? "en" : "ar"));
  }, []);

  // تبديل المظهر
  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }, []);

  const value = {
    language,
    theme,
    t,
    toggleLanguage,
    toggleTheme,
    dir: language === "ar" ? "rtl" : "ltr",
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp يجب استخدامه داخل AppProvider");
  }
  return context;
}`}
          />

          <CodeBlock
            language="jsx"
            code={`// ملف: app/layout.js
import { AppProvider } from "@/context/AppContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

// ملف: components/Header.js
"use client";

import { useApp } from "@/context/AppContext";

export default function Header() {
  const { theme, language, t, toggleTheme, toggleLanguage, dir } = useApp();

  return (
    <header
      dir={dir}
      style={{
        background: theme === "light" ? "#ffffff" : "#1a1a1a",
        color: theme === "light" ? "#000" : "#fff",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <nav style={{ display: "flex", gap: "16px" }}>
        <a href="/">{t("home")}</a>
        <a href="/about">{t("about")}</a>
        <a href="/contact">{t("contact")}</a>
      </nav>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={toggleLanguage}>
          {language === "ar" ? "English" : "العربية"}
        </button>
        <button onClick={toggleTheme}>
          {theme === "light" ? t("darkMode") : t("lightMode")}
        </button>
      </div>
    </header>
  );
}

// ملف: components/HeroSection.js
"use client";

import { useApp } from "@/context/AppContext";

export default function HeroSection() {
  const { theme, t, dir } = useApp();

  return (
    <section
      dir={dir}
      style={{
        padding: "60px 24px",
        textAlign: "center",
        background: theme === "light" ? "#f0f4f8" : "#111827",
        color: theme === "light" ? "#1f2937" : "#f9fafb",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
        {t("welcome")}
      </h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
        {t("description")}
      </p>
    </section>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: متى نستخدم Context vs Props vs State */}
        {/* ========================================== */}
        <LessonSection title="متى نستخدم Context vs Props vs State؟">
          <p>
            اختيار الطريقة الصحيحة لإدارة البيانات مهم. إليك دليل
            القرار:
          </p>

          <ul className="space-y-4 my-4">
            <li>
              <strong style={{ color: "var(--primary)" }}>
                استخدم Props:
              </strong>{" "}
              عندما تحتاج تمرير بيانات من أب لابنه مباشرة (مستوى واحد أو
              اثنين). هذا هو الأسلوب الأساسي والأبسط.
              <CodeBlock
                language="jsx"
                code={`// Props: الأفضل لتمرير بيانات مباشرة
function Parent() {
  return <Child name="أحمد" age={25} />;
}

function Child({ name, age }) {
  return <p>{name} - {age} سنة</p>;
}`}
              />
            </li>

            <li>
              <strong style={{ color: "var(--secondary)" }}>
                استخدم State (useState):
              </strong>{" "}
              عندما تكون البيانات خاصة بمكون واحد وتتغير مع تفاعل المستخدم.
              <CodeBlock
                language="jsx"
                code={`// State: الأفضل للبيانات المحلية
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>العدد: {count}</button>;
}`}
              />
            </li>

            <li>
              <strong style={{ color: "var(--accent)" }}>
                استخدم Context:
              </strong>{" "}
              عندما تحتاج بيانات للمشاركة بين عدة مكونات في أماكن مختلفة
              من التطبيق مثل المظهر أو اللغة أو معلومات المستخدم.
              <CodeBlock
                language="jsx"
                code={`// Context: الأفضل للبيانات العامة
const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState({ name: "أحمد" });
  return (
    <UserContext.Provider value={user}>
      <Header />     {/* تستخدم user */}
      <Sidebar />    {/* تستخدم user */}
      <Footer />     {/* تستخدم user */}
    </UserContext.Provider>
  );
}`}
              />
            </li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              القاعدة الذهبية:
            </p>
            <p>
              ابدأ دائماً بـ <strong>Props</strong> كخيار أولاً. إذا وجدت
              نفسك تمرر props عبر 3 مستويات أو أكثر، فكر في{" "}
              <strong>Context</strong>. لا تستخدم Context لبيانات خاصة
              بمكون واحد.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>كيف يعمل Context في الخلفية؟</p>

          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>إنشاء Context:</strong> عند استدعاء{" "}
              <code>createContext()</code>، يُنشئ React كائناً يحتوي على{" "}
              <code>Provider</code> و <code>Consumer</code>component.
            </li>
            <li>
              <strong>تحديث القيمة:</strong> عندما تمرر{" "}
              <code>value</code> لـ Provider وتحديثها، React يُعيد
              تحميل جميع المكونات التي تستخدم{" "}
              <code>useContext</code> لهذا الـ Context.
            </li>
            <li>
              <strong>البحث عن Provider:</strong> عند استدعاء{" "}
              <code>useContext(SomeContext)</code>، يبحث React في شجرة
              المكونات من الأسفل للأعلى عن أقرب Provider لهذا الـ
              Context.
            </li>
            <li>
              <strong>إرجاع القيمة:</strong> يُرجع React القيمة التي
              يحتويها أقرب Provider. إذا لم يُجد أي Provider، يُرجع
              القيمة الافتراضية.
            </li>
          </ol>

          <CodeBlock
            language="jsx"
            code={`// مثال: كيف يجد React القيمة الصحيحة
const ColorContext = createContext("blue");
const SizeContext = createContext("medium");

function App() {
  return (
    <ColorContext.Provider value="red">
      <SizeContext.Provider value="large">
        <Content />  {/* سيحصل على "red" و "large" */}
      </SizeContext.Provider>
    </ColorContext.Provider>
  );
}

function Content() {
  const color = useContext(ColorContext); // "red" - من App
  const size = useContext(SizeContext);   // "large" - من App
  return <div style={{ color, fontSize: size }}>محتوى</div>;
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              تنبيه الأداء:
            </p>
            <p>
              عند تغيير قيمة Provider، <strong>جميع</strong> المكونات
              التي تستخدم هذا الـ Context ستُعاد تحميلها. لهذا يُفضل
              تقسيم الـ Context حسب الاهتمام (مثل فصل theme عن language)
              لتقليل إعادة التحميل غير الضرورية.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul className="space-y-4 my-4">
            <li>
              <strong>❌ إنشاء Context داخل جسم المكون:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - يتم إنشاء Context جديد في كل render!
function App() {
  const ThemeContext = createContext("light"); // خاطئ!
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

// ✅ صحيح - أنشئه خارج المكون
const ThemeContext = createContext("light");
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}`}
              />
            </li>

            <li>
              <strong>❌ نسيان تغليف المكونات بـ Provider:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - لا يوجد Provider!
function App() {
  return <MyComponent />;
}

// MyComponent يستخدم useContext لكن لا يوجد Provider
function MyComponent() {
  const theme = useContext(ThemeContext); // يحصل على القيمة الافتراضية
  return <div>{theme}</div>;
}

// ✅ صحيح
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <MyComponent />
    </ThemeContext.Provider>
  );
}`}
              />
            </li>

            <li>
              <strong>❌ إنشاء كائن جديد كل مرة في Provider:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - إنشاء كائن جديد كل render يسبب re-render لكل المستهلكين
function App() {
  return (
    <ThemeContext.Provider value={{ theme: "dark", lang: "ar" }}>
      <Child />
    </ThemeContext.Provider>
  );
}

// ✅ صحيح - استخدم useMemo أو state
function App() {
  const [theme, setTheme] = useState("dark");
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  
  return (
    <ThemeContext.Provider value={value}>
      <Child />
    </ThemeContext.Provider>
  );
}`}
              />
            </li>

            <li>
              <strong>❌ استخدام Context لبيانات تتغير بسرعة:</strong>
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - كل ضغطة زر تُعيد تحميل كل المستهلكين
function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  return (
    <MouseContext.Provider value={mousePos}>
      <Child />
    </MouseContext.Provider>
  );
}

// ✅ صحيح - للبيانات سريعة التغير استخدم state محلي
function MouseTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  // تتبع الماوس محلياً فقط
}`}
              />
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul className="space-y-3 my-4">
            <li>
              <strong>✅ قسم الـ Context حسب الاهتمام:</strong> لا تضع كل شيء
              في Context واحد. أنشئ Context منفصل لكل اهتمام (مثل{" "}
              <code>ThemeContext</code> و <code>AuthContext</code> و{" "}
              <code>LanguageContext</code>).
            </li>
            <li>
              <strong>✅ اجعل قيمة Provider مستقرة:</strong> استخدم{" "}
              <code>useMemo</code> لتجنب إنشاء كائن جديد في كل render.
            </li>
            <li>
              <strong>✅ ادمج مع useReducer:</strong> للتطبيق معقد الحالة،
              استخدم <code>useReducer</code> مع Context بدلاً من عدة{" "}
              <code>useState</code>.
            </li>
            <li>
              <strong>✅ أنشئ custom hook للوصول:</strong> أنشئ hook مثل{" "}
              <code>useTheme()</code> بدلاً من استخدام{" "}
              <code>useContext(ThemeContext)</code> مباشرة.
            </li>
            <li>
              <strong>✅ قدّم قيمة افتراضية واضحة:</strong> في{" "}
              <code>createContext()</code>، حدد قيمة افتراضية مفيدة
              لتجنب الأخطاء.
            </li>
            <li>
              <strong>✅ لا تستخدم Context للبيانات المتكررة بسرعة:</strong>
              إذا كانت البيانات تتغير في كل ثانية (مثل موقع الماوس)،
              استخدم state محلياً بدلاً من Context.
            </li>
          </ul>

          <CodeBlock
            language="jsx"
            code={`// هيكل مثال: Context مع useReducer للتطبيق المعقد
"use client";

import { createContext, useContext, useReducer } from "react";

const AppContext = createContext(undefined);

function appReducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    theme: "light",
    language: "ar",
    user: null,
  });

  const value = {
    theme: state.theme,
    language: state.language,
    user: state.user,
    setTheme: (theme) => dispatch({ type: "SET_THEME", payload: theme }),
    setLanguage: (language) => dispatch({ type: "SET_LANGUAGE", payload: language }),
    setUser: (user) => dispatch({ type: "SET_USER", payload: user }),
    logout: () => dispatch({ type: "LOGOUT" }),
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp يجب استخدامه داخل AppProvider");
  }
  return context;
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li>
                <strong style={{ color: "var(--primary)" }}>
                  Context API
                </strong>{" "}
                تحل مشكلة Prop Drilling وتمكّنك من تمرير البيانات عبر
                شجرة المكونات مباشرة
              </li>
              <li>
                <code>createContext</code> لإنشاء الـ Context و{" "}
                <code>useContext</code> لاستخدامه
              </li>
              <li>
                <code>Provider</code> يلف المكونات ويمرر القيمة، و{" "}
                <code>useContext</code> يقرأ القيمة من أقرب Provider
              </li>
              <li>
                استخدم Context للبيانات العامة (المظهر، اللغة، المستخدم)
                وProps للبيانات المحلية
              </li>
              <li>
                لا تنشئ Context داخل جسم المكون ولا تُنشئ كائنات جديدة
                في كل render
              </li>
              <li>
                ادمج Context مع <code>useReducer</code> للتطبيقات المعقدة
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هي المشكلة الرئيسية التي يحلها Context API؟"
          options={[
            "تحسين أداء التطبيق",
            "Prop Drilling - تمرير props عبر عدة مستويات",
            "إدارة نماذج الإدخال",
            "التعامل مع الروابط",
          ]}
          correctAnswer={1}
          explanation="Context API تحل مشكلة Prop Drilling حيث تحتاج لتمرير props عبر عدة مستويات من المكونات. Context يسمح بتمرير البيانات مباشرة لأي مكون يحتاجها."
        />

        <Quiz
          question="ما هي الوظيفة الرئيسية لـ useContext؟"
          options={[
            "إنشاء context جديد",
            "تمرير props لمكون فرعي",
            "الحصول على قيمة الـ Context من أقرب Provider",
            "تحديث حالة المكون",
          ]}
          correctAnswer={2}
          explanation="useContext يأخذ كائن الـ Context كمعامل ويرجع القيمة التي يحتويها أقرب Provider في شجرة المكونات."
        />

        <Quiz
          question="متى يجب استخدام Context بدلاً من Props؟"
          options={[
            "عندما تحتاج تمرير بيانات لابن واحد فقط",
            "عندما تحتاج تمرير بيانات عبر 3 مستويات أو أكثر",
            "عندما تحتاج إدارة حالة محلية في مكون واحد",
            "دائماً بدلاً من Props",
          ]}
          correctAnswer={1}
          explanation="Context هو الحل عندما تحتاج تمرير بيانات عبر 3 مستويات أو أكثر (Prop Drilling). للبيانات المباشرة (1-2 مستويات)، Props هي الطريقة الأفضل."
        />

        <Quiz
          question="ما الذي يحدث عند تغيير قيمة Provider في Context؟"
          options={[
            "لا يحدث شيء تلقائياً",
            "يتم تحديث المكون الذي يحتوي على Provider فقط",
            "تتم إعادة تحميل جميع المكونات التي تستخدم هذا الـ Context",
            "يتم تحديث جميع مكونات التطبيق",
          ]}
          correctAnswer={2}
          explanation="عند تغيير قيمة Provider، جميع المكونات التي تستدعي useContext لهذا الـ Context بالذات ستتم إعادة تحميلها بالقيمة الجديدة."
        />

        <Quiz
          question="أي من التالي هو خطأ شائع عند استخدام Context؟"
          options={[
            "استدعاء useContext في أعلى المكون",
            "إنشاء createContext خارج جسم المكون",
            "إنشاء Context داخل جسم المكون (يتم إنشاؤه في كل render)",
            "استخدام Provider للف المكونات",
          ]}
          correctAnswer={2}
          explanation="إنشاء Context داخل جسم المكون خطأ شائع لأنه سيتم إنشاء Context جديد في كل مرة يُعاد فيها تحميل المكون، مما يكسر كل الاستخدامات."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: بناء Dark Mode + Language Switcher"
          description={
            <p>
              أنشئ تطبيقاً صغيراً يتضمن:
              <br />
              1. <code>AppContext</code> يدير المظهر (فاتح/داكن) واللغة
              (عربي/إنجليزي)
              <br />
              2. <code>AppProvider</code> يلف التطبيق
              <br />
              3. <code>useApp</code> custom hook للوصول للبيانات
              <br />
              4. مكون <code>Header</code> يعرض أزرار تبديل المظهر واللغة
              <br />
              5. مكون <code>Content</code> يستخدم الترجمة ويتغير لونه
              حسب المظهر
            </p>
          }
        >
          <CodeBlock
            language="jsx"
            code={`// الحل الكامل

// 1. إنشاء الـ Context
"use client";
import { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext(undefined);

const texts = {
  ar: { title: "مرحباً", desc: "هذا تطبيق بـ React", btn: "ابدأ" },
  en: { title: "Hello", desc: "This is a React app", btn: "Start" },
};

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ar");

  const t = useCallback((key) => texts[lang]?.[key] || key, [lang]);
  const toggleTheme = () => setTheme(p => p === "light" ? "dark" : "light");
  const toggleLang = () => setLang(p => p === "ar" ? "en" : "ar");

  return (
    <AppContext.Provider value={{ theme, lang, t, toggleTheme, toggleLang }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
}

// 2. استخدامه في layout
// app/layout.js
import { AppProvider } from "@/context/AppContext";
export default function Layout({ children }) {
  return (
    <html><body>
      <AppProvider>{children}</AppProvider>
    </body></html>
  );
}

// 3. مكون Header
"use client";
import { useApp } from "@/context/AppContext";

export default function Header() {
  const { theme, lang, toggleTheme, toggleLang } = useApp();
  return (
    <header style={{ background: theme === "light" ? "#fff" : "#222",
      color: theme === "light" ? "#000" : "#fff", padding: "16px" }}>
      <button onClick={toggleLang}>{lang === "ar" ? "EN" : "AR"}</button>
      <button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button>
    </header>
  );
}

// 4. مكون Content
"use client";
import { useApp } from "@/context/AppContext";

export default function Content() {
  const { theme, t } = useApp();
  return (
    <main style={{ background: theme === "light" ? "#f5f5f5" : "#111",
      color: theme === "light" ? "#333" : "#eee", padding: "40px" }}>
      <h1>{t("title")}</h1>
      <p>{t("desc")}</p>
      <button>{t("btn")}</button>
    </main>
  );
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص Context API">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                الإنشاء والاستخدام:
              </p>
              <CodeBlock
                language="jsx"
                code={`import { createContext, useContext, useState } from "react";

// 1. إنشاء Context
const MyContext = createContext(قيمة_افتراضية);

// 2. إنشاء Provider
function MyProvider({ children }) {
  const [val, setVal] = useState("قيمة");
  return (
    <MyContext.Provider value={{ val, setVal }}>
      {children}
    </MyContext.Provider>
  );
}

// 3. استخدام useContext
function MyComponent() {
  const { val, setVal } = useContext(MyContext);
  return <p>{val}</p>;
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                القواعد المهمة:
              </p>
              <CodeBlock
                language="text"
                code={`1. أنشئ Context خارج جسم المكون
2. لف المكونات بـ Provider
3. استخدم useContext داخل المكون الفرعي
4. لا تنشئ كائنات جديدة كل render
5. قسم Context حسب الاهتمام`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                Custom Hook للوصول:
              </p>
              <CodeBlock
                language="jsx"
                code={`// غلف useContext في custom hook
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error(
    "يجب استخدامه داخل ThemeProvider"
  );
  return ctx;
}

// الاستخدام
function MyComponent() {
  const { theme, toggle } = useTheme();
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                Context + useReducer:
              </p>
              <CodeBlock
                language="jsx"
                code={`function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, on: !state.on };
    default:
      return state;
  }
}

function Provider({ children }) {
  const [state, dispatch] = useReducer(
    reducer, { on: false }
  );
  return (
    <Ctx.Provider value={{ state, dispatch }}>
      {children}
    </Ctx.Provider>
  );
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                متى تستخدم:
              </p>
              <CodeBlock
                language="text"
                code={`Props   → 1-2 مستويات مباشرة
State   → بيانات محلية في مكون
Context → بيانات عامة (theme, lang, auth)
`}
              />
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* التنقل */}
        {/* ========================================== */}
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
