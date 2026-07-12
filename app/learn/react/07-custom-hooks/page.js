// =====================================================
// ملف: page.js (الدرس السابع: الـ Hooks المخصصة - Custom Hooks)
// المكان: app/learn/react/07-custom-hooks/page.js
// الوظيفة: تعليم المبتدئين كيفية إنشاء hooks خاصة بهم لتنظيم الكود
// URL: /learn/react/07-custom-hooks
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function CustomHooks() {
  const lessonInfo = getLessonBySlug("react", "07-custom-hooks");

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
        {/* القسم الأول: ما هي Custom Hooks؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هي Custom Hooks؟">
          <p>
            الـ <strong>Custom Hooks</strong> هي دوال عادية تنشئها أنت تستخدم
            بداخلها hooks خاصة بـ React مثل <code>useState</code> و{" "}
            <code>useEffect</code>. الهدف منها هو استخراج منطق المكونات إلى
            دوال قابلة لإعادة الاستخدام.
          </p>

          <p>
            بدلاً من كتابة نفس الكود التكراري في عدة مكونات، يمكنك وضعه في
            custom hook واحد واستدعائه في أي مكان تحتاجه.
          </p>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              تشبيه بسيط:
            </p>
            <p>
              تخيّل أنك تملك صندوق أدوات. hooks الخاصة بـ React مثل{" "}
              <code>useState</code> و <code>useEffect</code> هي أدوات جاهزة
              تشتريها من المتجر. أما الـ Custom Hooks فهي أدوات تصنعها بنفسك
              لتتناسب مع احتياجاتك الخاصة. مثل صندوق يجمع عدة أدوات في مكان
              واحد.
            </p>
          </div>

          <CodeBlock
            language="jsx"
            code={`// هذا هو شكل custom hook بسيط
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// استخدامه في أي مكون
function MyComponent() {
  const { count, increment, decrement, reset } = useCounter(10);
  
  return (
    <div>
      <p>العدد: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>إعادة تعيين</button>
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: لماذا نستخدمها؟ */}
        {/* ========================================== */}
        <LessonSection title="لماذا نستخدم Custom Hooks؟">
          <p>
            هناك عدة أسباب جعلة استخدام Custom Hooks أفضل ممارسة في React:
          </p>

          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              <strong>إعادة استخدام الكود:</strong> يمكنك استخدام نفس المنطق
              في مكونات مختلفة بدون نسخ الكود
            </li>
            <li>
              <strong>فصل الاهتمامات:</strong> فصل منطق عرض البيانات عن منطق
              جلبها وإدارتها
            </li>
            <li>
              <strong>مكونات أنظف:</strong> المكون يصبح مسؤولاً فقط عن عرض
              الواجهة، والمنطق ينتقل للـ hook
            </li>
            <li>
              <strong>سهولة الاختبار:</strong> يمكنك اختبار الـ hook بشكل
              مستقل عن واجهة المستخدم
            </li>
            <li>
              <strong>تقليل التكرار:</strong> بدل كتابة نفس كود useEffect و
              useState في كل مرة، تكتبه مرة واحدة
            </li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              حقيقة مهمة:
            </p>
            <p>
              الـ Custom Hooks ليست ميزة معقدة أو جديدة في React. هي مجرد
              <strong> اتفاقية تسمية</strong>. أي دالة عادية تستخدم بداخلها
              hooks تُعتبر custom hook إذا بدأت اسمها بـ "use".
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: المشكلة التي يحلها */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها Custom Hooks">
          <p>
            لنرَ مشكلة حقيقية. تخيّل أنك تبني تطبيق ويب وتريد جلب بيانات من
            API في عدة مكونات مختلفة:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ❌ بدون Custom Hook - نفس الكود متكرر في كل مكون
function UsersList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, []);

  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p>خطأ: {error.message}</p>;
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

function PostsList() {
  const [data, setData] = useState(null);     // نفس الكود بالضبط!
  const [loading, setLoading] = useState(true); // مكرر!
  const [error, setError] = useState(null);     // مكرر!

  useEffect(() => {
    fetch("https://api.example.com/posts")   // فقط الـ URL مختلف!
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, []);

  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p>خطأ: {error.message}</p>;
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}`}
          />

          <p>
            كما ترى، الكود <strong>مكرر بشكل كامل</strong> بين المكونين.
            فقط الـ URL وطريقة عرض البيانات هما المختلفان. هذا بالضبط ما
            يحله Custom Hook:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ✅ مع Custom Hook - الكود نظيف وموحد
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, [url]);

  return { data, loading, error };
}

// الآن المكونات نظيفة ومركزة على العرض
function UsersList() {
  const { data, loading, error } = useFetch("https://api.example.com/users");
  
  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p>خطأ: {error.message}</p>;
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

function PostsList() {
  const { data, loading, error } = useFetch("https://api.example.com/posts");
  
  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p>خطأ: {error.message}</p>;
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: شرح بسيط */}
        {/* ========================================== */}
        <LessonSection title="شرح بسيط: كيف تعمل Custom Hooks؟">
          <p>
            الـ Custom Hooks هي أدوات مخصصة تصنعها بنفسك. القاعدة بسيطة جداً:
          </p>

          <ol className="list-decimal list-inside space-y-2 my-4">
            <li>
              اكتب دالة عادية تبدأ اسمها بـ <code>use</code>
            </li>
            <li>
              داخل الدالة، يمكنك استخدام أي hook من React مثل{" "}
              <code>useState</code> أو <code>useEffect</code>
            </li>
            <li>
              أعد ما تريد من قيم من الدالة (بيانات، دوال، أي شيء)
            </li>
            <li>
              استدعِ الدالة في مكونك واحصل على القيم
            </li>
          </ol>

          <CodeBlock
            language="jsx"
            code={`// الخطوة 1: اكتب الدالة
function useWindowSize() {
  // الخطوة 2: استخدم hooks داخلها
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // الخطوة 3: أعد القيم
  return size;
}

// الخطوة 4: استخدمها في مكونك
function MyComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <p>
      حجم النافذة: {width} x {height}
    </p>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              تشبيه آخر:
            </p>
            <p>
              تخيّل أنك تصنع "آلة قهوة مخصصة". داخل الآلة تستخدم مكونات
              جاهزة (مواء، فلتر، قهوة). لكن الشكل النهائي والنتيجة شيء
              صممتها أنت. الـ custom hook يجمع أدوات React الأساسية في
              حزمة مخصصة لاحتياجك.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: القواعد */}
        {/* ========================================== */}
        <LessonSection title="قواعد Custom Hooks">
          <p>هناك قواعد مهمة يجب اتباعها عند كتابة custom hooks:</p>

          <CodeBlock
            language="jsx"
            code={`// القاعدة 1: يجب أن يبدأ الاسم بـ "use"
function useMyHook() { }       // ✅ صحيح
function getMyData() { }        // ❌ خاطئ - لا يبدأ بـ use

// القاعدة 2: يمكنك استدعاء hooks أخرى داخلها
function useFetch(url) {
  const [data, setData] = useState(null);    // ✅ استخدام useState
  const [loading, setLoading] = useState(true); // ✅ استخدام useState
  
  useEffect(() => {                           // ✅ استخدام useEffect
    // جلب البيانات
  }, [url]);
  
  return { data, loading };                   // ✅ إعادة ما تريد
}

// القاعدة 3: لا تستدعي hook في شرط أو حلقة
function useConditionalHook(shouldFetch) {
  // ❌ خطأ: لا تستدعي hook في شرط
  // if (shouldFetch) {
  //   const [data, setData] = useState(null);
  // }
  
  // ✅ صحيح: استخدم hook دائماً ثم تحقق من الشرط
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if (shouldFetch) {
      // افعل شيئاً
    }
  }, [shouldFetch]);
  
  return data;
}

// القاعدة 4: custom hook يمكن أن يستدعي custom hooks أخرى
function useUserData(userId) {
  const { data, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );
  return { user: data, loading, error };
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: مثال بسيط - useCounter */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط: useCounter">
          <p>
            لنبدأ بـ custom hook بسيط: عدّاد (Counter) يمكن إعادة استخدامه
            في أي مكان.
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: hooks/useCounter.js

import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(prev => prev + 1);
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  function setToValue(value) {
    setCount(value);
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setToValue,
  };
}`}
          />

          <p>الآن يمكنك استخدامه في أي مكون:</p>

          <CodeBlock
            language="jsx"
            code={`"use client";

import { useCounter } from "@/hooks/useCounter";

// المكون الأول: عدّاد عادي
function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>العدّاد: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>إعادة تعيين</button>
    </div>
  );
}

// المكون الثاني: عدّاد يبدأ من 10
function ScoreCounter() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <h2>النتيجة: {count}</h2>
      <button onClick={increment}>هدف +1</button>
      <button onClick={decrement}>خصم -1</button>
    </div>
  );
}

// المكون الثالث: عدّاد خطوات
function StepCounter() {
  const { count, increment, reset } = useCounter(0);

  return (
    <div>
      <h2>الخطوات: {count}</h2>
      <button onClick={increment}>خطوة جديدة</button>
      <button onClick={reset}>مسح العد</button>
      {count >= 100 && <p>أحسنت! وصلت 100 خطوة!</p>}
    </div>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              ملاحظة مهمة:
            </p>
            <p>
              كل مكون يستدعي <code>useCounter</code> يحصل على{" "}
              <strong>state مستقل</strong> عن الآخرين. إذا غيرت العدد في
              مكون، لن يتغير في المكون الآخر.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: مثال عملي - useFetch */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: useFetch">
          <p>
            하나 من أكثر الـ custom hooks استخداماً هو <code>useFetch</code>{" "}
            الذي يجلب البيانات من API ويرجع حالة التحميل والأخطاء:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: hooks/useFetch.js

import { useState, useEffect } from "react";

export function useFetch(url, options = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(\`خطأ في الخادم: \${response.status}\`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // تنظيف عند إلغاء التحميل
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}`}
          />

          <p>كيفية استخدام useFetch:</p>

          <CodeBlock
            language="jsx"
            code={`"use client";

import { useFetch } from "@/hooks/useFetch";

function UserCard({ userId }) {
  const { data: user, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded">
        <p>خطأ في تحميل البيانات: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

function PostsList() {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>جاري تحميل المقالات...</p>;
  if (error) return <p>حدث خطأ: {error}</p>;

  return (
    <ul>
      {posts?.slice(0, 10).map(post => (
        <li key={post.id} className="mb-2">
          <strong>{post.title}</strong>
          <p>{post.body.substring(0, 100)}...</p>
        </li>
      ))}
    </ul>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: useLocalStorage hook */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: useLocalStorage">
          <p>
            هذا الـ hook يسمح لك بتخزين البيانات في{" "}
            <code>localStorage</code> بطريقة سهلة مع واجهة hook:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: hooks/useLocalStorage.js

import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // قراءة القيمة المخزنة من localStorage
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("خطأ في قراءة localStorage:", error);
      return initialValue;
    }
  });

  // حفظ القيمة في localStorage عند تغيرها
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("خطأ في حفظ localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}`}
          />

          <p>كيفية استخدام useLocalStorage:</p>

          <CodeBlock
            language="jsx"
            code={`"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";

function SettingsPage() {
  // سيتم حفظ الاسم في localStorage تلقائياً
  const [name, setName] = useLocalStorage("user-name", "");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [fontSize, setFontSize] = useLocalStorage("font-size", 16);

  return (
    <div>
      <h1>الإعدادات</h1>

      <div>
        <label>الاسم:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="أدخل اسمك"
        />
      </div>

      <div>
        <label>المظهر:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">فاتح</option>
          <option value="dark">داكن</option>
        </select>
      </div>

      <div>
        <label>حجم الخط: {fontSize}px</label>
        <input
          type="range"
          min="12"
          max="24"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
      </div>

      {/* هذه البيانات ستبقى محفوظة حتى بعد إغلاق المتصفح */}
      <p>مرحباً {name || "زائر"}! المظهر الحالي: {theme}</p>
    </div>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: useToggle hook */}
        {/* ========================================== */}
        <LessonSection title="مثال بسيط: useToggle">
          <p>
            <code>useToggle</code> هو custom hook بسيط جداً لكنه مفيد جداً.
            يُحوّل أي قيمة بين <code>true</code> و <code>false</code>:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: hooks/useToggle.js

import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue(prev => !prev);
  }

  function setTrue() {
    setValue(true);
  }

  function setFalse() {
    setValue(false);
  }

  return { value, toggle, setTrue, setFalse };
}`}
          />

          <p>استخدام useToggle:</p>

          <CodeBlock
            language="jsx"
            code={`"use client";

import { useToggle } from "@/hooks/useToggle";

function Modal() {
  const { value: isOpen, toggle, setFalse: close } = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>فتح النافذة</button>
      
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>هذه نافذة منبثقة</h2>
            <p>المحتوى هنا...</p>
            <button onClick={close}>إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Sidebar() {
  const { value: isExpanded, toggle } = useToggle(true);

  return (
    <aside className={isExpanded ? "sidebar expanded" : "sidebar collapsed"}>
      <button onClick={toggle}>
        {isExpanded ? "طي القائمة" : "توسيع القائمة"}
      </button>
      {isExpanded && (
        <nav>
          <a href="/home">الرئيسية</a>
          <a href="/settings">الإعدادات</a>
          <a href="/profile">الملف الشخصي</a>
        </nav>
      )}
    </aside>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>
            عند استخدام custom hook في مكون، يحدث ما يلي:
          </p>

          <ol className="list-decimal list-inside space-y-3 my-4">
            <li>
              <strong>كل مكون يحصل على state مستقل:</strong> عندما تستدعي
              <code>useCounter()</code> في مكونين مختلفين، كل مكون يحصل على
              نسخة مستقلة من العدد. لا يتشاركون في نفس البيانات.
            </li>
            <li>
              <strong>نفس قواعد الـ hooks تنطبق:</strong> القواعد التي تطبق
              على <code>useState</code> و <code>useEffect</code> تنطبق أيضاً
              على custom hooks. يجب استدعاؤها في أعلى المكون، لا في شرط أو
              حلقة.
            </li>
            <li>
              <strong>useEffect يعيد التشغيل:</strong> إذا كان الـ hook
              يحتوي على <code>useEffect</code> بdependency معين، سيقوم
              بإعادة التشغيل عند تغير هذه الـ dependency في المكون.
            </li>
            <li>
              <strong>تنظيف تلقائي:</strong> إذا كان الـ hook يحتوي على
              <code>useEffect</code> مع دالة تنظيف (cleanup)، ستُنفَّذ تلقائياً
              عند إلغاء تحميل المكون.
            </li>
          </ol>

          <CodeBlock
            language="jsx"
            code={`// مثال: كل مكون يحصل على state مستقل
function App() {
  return (
    <div>
      {/* كل من هذين المكونين لديه عداد مستقل */}
      <CounterDemo />   {/* count = 0 في هذا المكون */}
      <CounterDemo />   {/* count = 0 في هذا المكون أيضاً */}
      <CounterDemo />   {/* count = 0 في هذا المكون أيضاً */}
    </div>
  );
}

// النتيجة: الضغط على + في المكون الأول لا يؤثر على الآخرين`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul className="space-y-4 my-4">
            <li>
              <strong>❌ عدم استخدام "use" في اسم الدالة:</strong>
              <br />
              إذا لم تبدأ الدالة بـ <code>use</code>، لن يعرف React أنها
              custom hook، وقد تكسر قواعد الـ hooks.
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ
function fetchData(url) {
  const [data, setData] = useState(null);
  useEffect(() => { /* ... */ }, [url]);
  return data;
}

// ✅ صحيح
function useFetchData(url) {
  const [data, setData] = useState(null);
  useEffect(() => { /* ... */ }, [url]);
  return data;
}`}
              />
            </li>

            <li>
              <strong>❌ استدعاء hooks بشكل شرطي:</strong>
              <br />
              لا تضع hooks داخل <code>if</code> أو <code>for</code> أو{" "}
              <code>try/catch</code>:
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ
function useData(shouldFetch) {
  if (shouldFetch) {
    const [data, setData] = useState(null); // خاطئ!
  }
}

// ✅ صحيح
function useData(shouldFetch) {
  const [data, setData] = useState(null); // دائماً
  useEffect(() => {
    if (shouldFetch) {
      // اجلب البيانات
    }
  }, [shouldFetch]);
}`}
              />
            </li>

            <li>
              <strong>❌ استدعاء hooks في حلقة تكرارية:</strong>
              <br />
              لا تستدعي hook داخل <code>map</code> أو أي حلقة:
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - لا تفعل هذا أبداً!
function ItemList({ items }) {
  return items.map(item => {
    const [selected, setSelected] = useState(false); // خاطئ!
    return <Item key={item.id} selected={selected} />;
  });
}

// ✅ صحيح - ضع الـ hook في المكون الأب
function ItemList({ items }) {
  const [selectedId, setSelectedId] = useState(null);
  return items.map(item => (
    <Item
      key={item.id}
      item={item}
      selected={selectedId === item.id}
      onSelect={() => setSelectedId(item.id)}
    />
  ));
}`}
              />
            </li>

            <li>
              <strong>❌ نسيان دالة Cleanup:</strong>
              <br />
              إذا أضفت event listener أو interval في <code>useEffect</code>،
              تأكد من إزالته في دالة التنظيف:
              <CodeBlock
                language="jsx"
                code={`// ❌ خاطئ - تسريب ذاكرة
function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    // لم نُزِل المستمع!
  }, []);
  return size;
}

// ✅ صحيح
function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
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
              <strong>✅ ملف واحد لكل hook:</strong> ضع كل custom hook في
              ملف مستقل في مجلد <code>hooks/</code>. هذا يسهّل العثور عليه
              وإعادة استخدامه.
            </li>
            <li>
              <strong>✅ سمّه بما يفعله:</strong> اسم الـ hook يجب أن يصف
              ما يفعله بدقة مثل <code>useFetch</code> و{" "}
              <code>useLocalStorage</code> و <code>useToggle</code>.
            </li>
            <li>
              <strong>✅ اجعله مركزاً:</strong> كل hook يجب أن يفعل شيئاً
              واحداً بشكل جيد. لا تدمج عدة مسؤوليات في hook واحد.
            </li>
            <li>
              <strong>✅ أعد صياغة القيم:</strong> يُفضل إعادة كائن يحتوي
              على القيم والدوال بدلاً من مصفوفة لتسمية القيم بوضوح.
            </li>
            <li>
              <strong>✅ اكتب تعليقات توضيحية:</strong> اكتب تعليقاً مختصراً
              فوق الـ hook يشرح ماذا يفعل ومتى تستخدمه.
            </li>
            <li>
              <strong>✅ افحص الأخطاء:</strong> تأكد من معالجة الأخطاء في
              الـ hook وتقديم معلومات مفيدة للمطور.
            </li>
            <li>
              <strong>✅ فكّر في إعادة الاستخدام:</strong> قبل كتابة custom
              hook جديد، تأكد أنه لن يُستخدم مرة واحدة فقط. إذا كان كذلك،
              قد لا يكون hook ضرورياً.
            </li>
          </ul>

          <CodeBlock
            language="jsx"
            code={`// هيكل مجلد hooks مقترح
hooks/
  useCounter.js
  useFetch.js
  useLocalStorage.js
  useToggle.js
  useWindowSize.js
  useDebounce.js`}
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
                  Custom Hooks
                </strong>{" "}
                هي دوال تستخدم hooks داخلها لاستخراج المنطق القابل لإعادة
                الاستخدام
              </li>
              <li>
                يجب أن يبدأ اسمها دائماً بـ <code>use</code>
              </li>
              <li>
                يمكنها استخدام <code>useState</code> و{" "}
                <code>useEffect</code> وأي hook آخر
              </li>
              <li>
                كل مكون يستدعي الـ hook يحصل على state مستقل
              </li>
              <li>
                تُقلل تكرار الكود وتجعل المكونات أنظف
              </li>
              <li>
                من أكثرها استخداماً: <code>useFetch</code> و{" "}
                <code>useLocalStorage</code> و <code>useToggle</code>
              </li>
              <li>
                نفس قواعد الـ hooks تنطبق: لا hooks في شروط أو حلقات
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هي القاعدة الأولى لكتابة custom hook؟"
          options={[
            "يجب أن يكون المكون client component",
            "يجب أن يبدأ اسم الدالة بـ use",
            "يجب أن يُرجع object دائماً",
            "يجب أن يستخدم useEffect",
          ]}
          correctAnswer={1}
          explanation="القاعدة الأولى والأهم هي أن يبدأ اسم الدالة بـ use. هذا يُخبر React بأنها custom hook ويُطبق عليها قواعد hooks تلقائياً."
        />

        <Quiz
          question="ماذا يحدث عند استدعاء custom hook في مكونين مختلفين؟"
          options={[
            "يتشاركان في نفس البيانات",
            "أحدهما يحصل على بيانات والآخر لا",
            "كل مكون يحصل على نسخة مستقلة من البيانات",
            "يحدث خطأ في التشغيل",
          ]}
          correctAnswer={2}
          explanation="كل مكون يحصل على نسخة مستقلة تماماً من الـ state الخاص بالـ hook. هذا يعني أن تغيير البيانات في مكون لا يؤثر على المكون الآخر."
        />

        <Quiz
          question="أي من التالي هو استخدام صحيح لـ custom hook؟"
          options={[
            "داخل حلقة map لتكرار العناصر",
            "داخل شرط if لتحميل البيانات فقط عند الحاجة",
            "في أعلى المكون (في المستوى الأعلى)",
            "داخل دالة معالجة حدث onClick",
          ]}
          correctAnswer={2}
          explanation="يجب استدعاء الـ hooks دائماً في المستوى الأعلى للمكون، لا داخل شروط أو حلقات أو دوال أحداث. هذه قاعدة أساسية في React."
        />

        <Quiz
          question="لماذا نستخدم useFetch في hook منفصل بدلاً من كتابته في كل مكون؟"
          options={[
            "لأن React يطلب ذلك",
            "لتحسين أداء التطبيق فقط",
            "لإعادة استخدام الكود وتقليل التكرار",
            "لأن المكونات لا تدعم fetch",
          ]}
          correctAnswer={2}
          explanation="السبب الرئيسي هو إعادة استخدام الكود وتقليل التكرار. بدلاً من نسخ نفس كود Fetch وloading وerror في كل مكون، نكتبه مرة واحدة في hook ونستخدمه في أي مكان."
        />

        <Quiz
          question="ما هي أفضل طريقة لتنظيم custom hooks في مشروع؟"
          options={[
            "وضعها في نفس ملف المكون",
            "وضع كل hook في ملف مستقل في مجلد hooks/",
            "وضع كلها في ملف واحد كبير",
            "لا حاجة لتنظيم، استخدمها مباشرة",
          ]}
          correctAnswer={1}
          explanation="أفضل الممارسة هي وضع كل custom hook في ملف مستقل في مجلد hooks/ منفصل. هذا يسهّل العثور على الـ hooks وإعادة استخدامها."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: أنشئ useFetch و useToggle"
          description={
            <p>
              أكمل المهمات التالية لبناء custom hooks خاصة بك:
              <br />
              1. أنشئ <code>useFetch</code> hook يجلب بيانات من API ويرجع
             :data و loading و error
              <br />
              2. أنشئ <code>useToggle</code> hook يدير حالة true/false مع
              دوال toggle و setTrue و setFalse
              <br />
              3. استخدم كل hook في مكون مستقل لإثبات أنه يعمل
            </p>
          }
        >
          <CodeBlock
            language="jsx"
            code={`// الحل: useFetch hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("فشل الجلب");
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// الحل: useToggle hook
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  const toggle = () => setValue(prev => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  
  return { value, toggle, setTrue, setFalse };
}

// استخدام useFetch
function UsersPage() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  
  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p>خطأ: {error}</p>;
  return <ul>{data?.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// استخدام useToggle
function Sidebar() {
  const { value: isOpen, toggle } = useToggle(false);
  return (
    <div>
      <button onClick={toggle}>{isOpen ? "إغلاق" : "فتح"}</button>
      {isOpen && <nav>قائمة التنقل...</nav>}
    </div>
  );
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص Custom Hooks">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                القواعد الأساسية:
              </p>
              <CodeBlock
                language="jsx"
                code={`// 1. اسم يبدأ بـ "use"
function useMyHook() { }

// 2. يمكن استخدام hooks داخلها
function useMyHook() {
  const [x, setX] = useState(0);
  useEffect(() => { }, []);
  return x;
}

// 3. لا hooks في شروط أو حلقات
// ❌ if (x) { useState() }
// ✅ const [x] = useState(0);
//    if (x) { /* عمل */ }`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                useLocalStorage:
              </p>
              <CodeBlock
                language="jsx"
                code={`function useLocalStorage(key, init) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : init;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                useFetch:
              </p>
              <CodeBlock
                language="jsx"
                code={`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(e => { setError(e); setLoading(false); });
  }, [url]);

  return { data, loading, error };
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                useToggle:
              </p>
              <CodeBlock
                language="jsx"
                code={`function useToggle(init = false) {
  const [val, setVal] = useState(init);
  const toggle = () => setVal(v => !v);
  return { value: val, toggle };
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                هيكل المجلد:
              </p>
              <CodeBlock
                language="text"
                code={`hooks/
  useCounter.js
  useFetch.js
  useLocalStorage.js
  useToggle.js
  useWindowSize.js`}
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
