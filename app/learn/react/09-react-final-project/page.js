// =====================================================
// ملف: page.js (الدرس التاسع: مشروع React تطبيقي)
// المكان: app/learn/react/09-react-final-project/page.js
// الوظيفة: ملخص شامل لمرحلة React + مشروع تطبيقي كامل + أسئلة مقابلات
// URL: /learn/react/09-react-final-project
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function ReactFinalProject() {
  const lessonInfo = getLessonBySlug("react", "09-react-final-project");

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
        {/* القسم الأول: ملخص شامل لمرحلة React */}
        {/* ========================================== */}
        <LessonSection title="ملخص شامل لمرحلة React">
          <p>
            مبارك! وصلت للدرس الأخير في مرحلة React. قبل أن نبني المشروع
            التطبيقي، لنلخص كل ما تعلمته في هذه المرحلة:
          </p>

          <ul className="space-y-3 my-4">
            <li>
              <strong>الدرس 1 - مقدمة في React:</strong> تعلمنا ما هو React
              ولماذا نستخدمه، ومفهوم Virtual DOM والمكونات.
            </li>
            <li>
              <strong>الدرس 2 - المكونات والخصائص:</strong> تعلمنا بناء
              المكونات وتمرير البيانات عبر Props.
            </li>
            <li>
              <strong>الدرس 3 - الحالة والـ Hooks:</strong> تعلمنا إدارة
              البيانات التفاعلية مع useState وفهم hooks.
            </li>
            <li>
              <strong>الدرس 4 - useEffect:</strong> تعلمنا التعامل مع
              الآثار الجانبية مثل جلب البيانات والأحداث.
            </li>
            <li>
              <strong>الدرس 5 - Server vs Client Components:</strong> تعلمنا
              الفرق بين مكونات الخادم والعميل في Next.js.
            </li>
            <li>
              <strong>الدرس 6 - Server Actions & Forms:</strong> تعلمنا جمع
              بيانات المستخدم وتمريرها للخادم بطريقة حديثة.
            </li>
            <li>
              <strong>الدرس 7 - Custom Hooks:</strong> تعلمنا إنشاء hooks
              خاصة لاستخراج المنطق القابل لإعادة الاستخدام.
            </li>
            <li>
              <strong>الدرس 8 - Context API:</strong> تعلمنا إدارة الحالة
              العامة للتطبيق بدون prop drilling.
            </li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              أنت الآن تملك مهارات في:
            </p>
            <p>
              بناء مكونات React، إدارة الحالة والتفاعل، التعامل مع الآثار
              الجانبية، فهم Server و Client Components، استخدام Server
              Actions، إنشاء Custom Hooks، وإدارة الحالة العامة مع Context
              API.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: Cheat Sheet شامل */}
        {/* ========================================== */}
        <LessonSection title="Cheat Sheet شامل لمرحلة React">
          <p>إليك ملخصاً مرجعياً شاملاً لكل ما تعلمته:</p>

          <CodeBlock
            language="jsx"
            code={`// ===== 1. المكونات (Components) =====
// مكون وظيفي بسيط
function Greeting({ name }) {
  return <h1>مرحباً {name}</h1>;
}

// مكون يستخدم State
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      العدد: {count}
    </button>
  );
}

// ===== 2. Props =====
// تمرير بيانات من أب لابن
function App() {
  return <UserCard name="أحمد" age={25} />;
}

function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>العمر: {age}</p>
    </div>
  );
}

// ===== 3. State (useState) =====
function Form() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  // إضافة عنصر
  const addItem = () => {
    setItems(prev => [...prev, name]);
    setName("");
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addItem}>إضافة</button>
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
}

// ===== 4. useEffect =====
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // جلب البيانات عند تغير userId
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>جاري التحميل...</p>;
  return <h2>{user.name}</h2>;
}

// ===== 5. Custom Hooks =====
function useLocalStorage(key, initial) {
  const [val, setVal] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal];
}

// ===== 6. Context API =====
const ThemeContext = createContext("light");

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: مشروع تطبيقي */}
        {/* ========================================== */}
        <LessonSection title="مشروع: تطبيق إدارة مهام (Task Manager)">
          <p>
            الآن سنبني <strong>تطبيق إدارة مهام كامل</strong> يستخدم كل
            ما تعلمناه. هذا المشروع يتضمن: إضافة مهام، تعديلها، حذفها،
            فلترتها، وحفظ البيانات في localStorage.
          </p>

          <h3>هيكل المشروع:</h3>
          <CodeBlock
            language="text"
            code={`app/
  layout.js            ← يلف التطبيق بـ AppProvider
  page.js              ← الصفحة الرئيسية
  learn/
    react/
      09-react-final-project/
        page.js        ← هذا الدرس
context/
  TasksContext.js      ← Context لإدارة المهام
hooks/
  useLocalStorage.js   ← Custom Hook لحفظ البيانات
components/
  TaskManager/
    TaskInput.js       ← مكون إضافة مهمة جديدة
    TaskItem.js        ← مكون عرض مهمة واحدة
    TaskList.js        ← مكون قائمة المهام
    TaskFilter.js      ← مكون فلترة المهام`}
          />

          <h3>الخطوة 1: Custom Hook - useLocalStorage</h3>
          <p>
            أولاً نحتاج hook يحفظ البيانات في localStorage ويُرجعها تلقائياً:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: hooks/useLocalStorage.js

import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
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

          <h3>الخطوة 2: Context لإدارة المهام</h3>
          <p>
            نستخدم Context مع useReducer لإدارة جميع عمليات المهام:
          </p>

          <CodeBlock
            language="jsx"
            code={`// ملف: context/TasksContext.js

"use client";

import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const TasksContext = createContext(undefined);

// الـ Reducer: يدير جميع عمليات المهام
function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
          createdAt: new Date().toLocaleDateString("ar-SA"),
        },
      ];

    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);

    case "EDIT_TASK":
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task
      );

    default:
      return state;
  }
}

export function TasksProvider({ children }) {
  // حفظ المهام في localStorage
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  // استخدام useReducer لإدارة العمليات
  const [state, dispatch] = useReducer(tasksReducer, tasks);

  // مزامنة الحالة مع localStorage
  const addTask = (text) => dispatch({ type: "ADD_TASK", payload: text });
  const toggleTask = (id) => dispatch({ type: "TOGGLE_TASK", payload: id });
  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });
  const editTask = (id, text) => dispatch({ type: "EDIT_TASK", payload: { id, text } });

  // حساب الإحصائيات
  const completedCount = state.filter(t => t.completed).length;
  const pendingCount = state.filter(t => !t.completed).length;

  return (
    <TasksContext.Provider value={{
      tasks: state,
      addTask,
      toggleTask,
      deleteTask,
      editTask,
      completedCount,
      pendingCount,
      totalCount: state.length,
    }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks يجب استخدامه داخل TasksProvider");
  }
  return context;
}`}
          />

          <h3>الخطوة 3: مكون إضافة المهمة</h3>
          <CodeBlock
            language="jsx"
            code={`// ملف: components/TaskManager/TaskInput.js

"use client";

import { useState } from "react";
import { useTasks } from "@/context/TasksContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  function handleSubmit(e) {
    e.preventDefault();
    // التحقق من أن النص ليس فارغاً
    if (text.trim() === "") return;
    addTask(text.trim());
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="أضف مهمة جديدة..."
        className="flex-1 p-3 rounded-lg border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          color: "var(--foreground)",
        }}
      />
      <button
        type="submit"
        disabled={text.trim() === ""}
        className="px-6 py-3 rounded-lg font-bold"
        style={{
          background: text.trim() ? "var(--primary)" : "var(--border)",
          color: text.trim() ? "white" : "var(--muted)",
          cursor: text.trim() ? "pointer" : "not-allowed",
        }}
      >
        إضافة
      </button>
    </form>
  );
}`}
          />

          <h3>الخطوة 4: مكون عرض المهمة</h3>
          <CodeBlock
            language="jsx"
            code={`// ملف: components/TaskManager/TaskItem.js

"use client";

import { useState } from "react";
import { useTasks } from "@/context/TasksContext";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask, editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  function handleSave() {
    if (editText.trim() === "") return;
    editTask(task.id, editText.trim());
    setIsEditing(false);
  }

  function handleCancel() {
    setEditText(task.text);
    setIsEditing(false);
  }

  return (
    <div
      className="flex items-center gap-3 p-4 rounded-lg border mb-3"
      style={{
        background: task.completed ? "rgba(34, 197, 94, 0.05)" : "var(--surface)",
        borderColor: task.completed ? "var(--accent)" : "var(--border)",
        opacity: task.completed ? 0.7 : 1,
      }}
    >
      {/* مربع الاختيار */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="w-5 h-5 cursor-pointer"
      />

      {/* نص المهمة أو حقل التعديل */}
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") handleCancel();
          }}
          autoFocus
          className="flex-1 p-2 rounded border"
          style={{
            background: "var(--background)",
            borderColor: "var(--primary)",
            color: "var(--foreground)",
          }}
        />
      ) : (
        <span
          className="flex-1"
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "var(--muted)" : "var(--foreground)",
          }}
        >
          {task.text}
        </span>
      )}

      {/* تاريخ الإنشاء */}
      <span className="text-sm" style={{ color: "var(--muted)" }}>
        {task.createdAt}
      </span>

      {/* أزرار التعديل والحذف */}
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-3 py-1 rounded text-sm"
              style={{ background: "var(--accent)", color: "white" }}
            >
              حفظ
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 rounded text-sm"
              style={{ background: "var(--border)", color: "var(--foreground)" }}
            >
              إلغاء
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 rounded text-sm"
              style={{ background: "var(--secondary)", color: "white" }}
            >
              تعديل
            </button>
            <button
              onClick={() => {
                if (confirm("هل أنت متأكد من حذف هذه المهمة؟")) {
                  deleteTask(task.id);
                }
              }}
              className="px-3 py-1 rounded text-sm"
              style={{ background: "var(--danger)", color: "white" }}
            >
              حذف
            </button>
          </>
        )}
      </div>
    </div>
  );
}`}
          />

          <h3>الخطوة 5: مكون قائمة المهام</h3>
          <CodeBlock
            language="jsx"
            code={`// ملف: components/TaskManager/TaskList.js

"use client";

import { useTasks } from "@/context/TasksContext";
import TaskItem from "./TaskItem";

export default function TaskList({ filter }) {
  const { tasks } = useTasks();

  // فلترة المهام حسب الاختيار
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // "all"
  });

  if (filteredTasks.length === 0) {
    return (
      <div
        className="text-center py-12 rounded-lg"
        style={{ background: "var(--surface)" }}
      >
        <p style={{ color: "var(--muted)" }}>
          {filter === "all" && "لا توجد مهام بعد. أضف مهمتك الأولى!"}
          {filter === "completed" && "لا توجد مهام مكتملة"}
          {filter === "pending" && "جميع المهام مكتملة! أحسنت!"}
        </p>
      </div>
    );
  }

  return (
    <div>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}`}
          />

          <h3>الخطوة 6: مكون الفلترة والإحصائيات</h3>
          <CodeBlock
            language="jsx"
            code={`// ملف: components/TaskManager/TaskFilter.js

"use client";

import { useTasks } from "@/context/TasksContext";

export default function TaskFilter({ filter, setFilter }) {
  const { totalCount, completedCount, pendingCount } = useTasks();

  const filters = [
    { key: "all", label: "الكل", count: totalCount },
    { key: "pending", label: "قيد التنفيذ", count: pendingCount },
    { key: "completed", label: "المكتملة", count: completedCount },
  ];

  return (
    <div className="flex flex-col gap-4 mb-6">
      {/* إحصائيات */}
      <div className="flex gap-4 justify-center">
        <div className="text-center p-3 rounded-lg" style={{ background: "var(--surface)" }}>
          <div className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
            {totalCount}
          </div>
          <div className="text-sm" style={{ color: "var(--muted)" }}>إجمالي</div>
        </div>
        <div className="text-center p-3 rounded-lg" style={{ background: "var(--surface)" }}>
          <div className="text-2xl font-bold" style={{ color: "var(--secondary)" }}>
            {pendingCount}
          </div>
          <div className="text-sm" style={{ color: "var(--muted)" }}>قيد التنفيذ</div>
        </div>
        <div className="text-center p-3 rounded-lg" style={{ background: "var(--surface)" }}>
          <div className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
            {completedCount}
          </div>
          <div className="text-sm" style={{ color: "var(--muted)" }}>مكتملة</div>
        </div>
      </div>

      {/* أزرار الفلترة */}
      <div className="flex gap-2 justify-center">
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className="px-4 py-2 rounded-lg text-sm font-bold"
            style={{
              background: filter === f.key ? "var(--primary)" : "var(--surface)",
              color: filter === f.key ? "white" : "var(--foreground)",
              border: \`1px solid \${filter === f.key ? "var(--primary)" : "var(--border)"}\`,
            }}
          >
            {f.label} ({f.count})
          </button>
        ))}
      </div>
    </div>
  );
}`}
          />

          <h3>الخطوة 7: تجميع كل شيء في الصفحة الرئيسية</h3>
          <CodeBlock
            language="jsx"
            code={`// ملف: app/page.js

"use client";

import { useState } from "react";
import { TasksProvider } from "@/context/TasksContext";
import TaskInput from "@/components/TaskManager/TaskInput";
import TaskList from "@/components/TaskManager/TaskList";
import TaskFilter from "@/components/TaskManager/TaskFilter";

export default function HomePage() {
  const [filter, setFilter] = useState("all");

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1
        className="text-3xl font-bold text-center mb-8"
        style={{ color: "var(--foreground)" }}
      >
        تطبيق إدارة المهام
      </h1>

      <TasksProvider>
        {/* مكون الإضافة */}
        <TaskInput />

        {/* الفلترة والإحصائيات */}
        <TaskFilter filter={filter} setFilter={setFilter} />

        {/* قائمة المهام */}
        <TaskList filter={filter} />
      </TasksProvider>
    </main>
  );
}`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: مقارنة كود المبتدئ vs المحترف */}
        {/* ========================================== */}
        <LessonSection title="مقارنة: كود المبتدئ vs كود المحترف">
          <p>
            لنرَ الفرق بين كتابة كل شيء في مكون واحد (مبتدئ) وفصل المنطق
            في مكونات و hooks (محترف):
          </p>

          <h3>كود المبتدئ - كل شيء في مكون واحد:</h3>
          <CodeBlock
            language="jsx"
            code={`// ❌ كود المبتدئ: كل شيء في مكون واحد
"use client";
import { useState, useEffect } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // كل المنطق مختلط في مكان واحد
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggle = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const remove = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const saveEdit = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: editText } : t));
    setEditingId(null);
  };

  const filtered = tasks.filter(t => {
    if (filter === "done") return t.done;
    if (filter === "pending") return !t.done;
    return true;
  });

  return (
    <div>
      <h1>المهام</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTask}>إضافة</button>
      <div>
        <button onClick={() => setFilter("all")}>الكل</button>
        <button onClick={() => setFilter("pending")}>قيد التنفيذ</button>
        <button onClick={() => setFilter("done")}>مكتملة</button>
      </div>
      <p>{tasks.length} مهمة | {tasks.filter(t => t.done).length} مكتملة</p>
      {filtered.map(task => (
        <div key={task.id}>
          {editingId === task.id ? (
            <>
              <input value={editText} onChange={e => setEditText(e.target.value)} />
              <button onClick={() => saveEdit(task.id)}>حفظ</button>
            </>
          ) : (
            <>
              <input type="checkbox" checked={task.done} onChange={() => toggle(task.id)} />
              <span>{task.text}</span>
              <button onClick={() => { setEditingId(task.id); setEditText(task.text); }}>تعديل</button>
              <button onClick={() => remove(task.id)}>حذف</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}`}
          />

          <h3>كود المحترف - فصل وتنظيم:</h3>
          <CodeBlock
            language="jsx"
            code={`// ✅ كود المحترف: فصل وتنظيم

// hooks/useLocalStorage.js - hook مخصص
export function useLocalStorage(key, initial) { /* ... */ }

// context/TasksContext.js - إدارة الحالة
export function TasksProvider({ children }) { /* ... */ }
export function useTasks() { /* ... */ }

// components/TaskManager/TaskInput.js - إضافة
export default function TaskInput() { /* ... */ }

// components/TaskManager/TaskItem.js - مهمة واحدة
export default function TaskItem({ task }) { /* ... */ }

// components/TaskManager/TaskList.js - القائمة
export default function TaskList({ filter }) { /* ... */ }

// components/TaskManager/TaskFilter.js - الفلترة
export default function TaskFilter({ filter, setFilter }) { /* ... */ }

// app/page.js - الصفحة الرئيسية فقط تُجمّع
export default function HomePage() {
  return (
    <TasksProvider>
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </TasksProvider>
  );
}`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
              الفروقات الرئيسية:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>الفصل:</strong> كل مكون مسؤول عن شيء واحد فقط
              </li>
              <li>
                <strong>إعادة الاستخدام:</strong> كل مكون يمكن استخدامه في
                أماكن مختلفة
              </li>
              <li>
                <strong>قابلية الصيانة:</strong> يمكنك تعديل أي مكون بدون
                التأثير على الآخرين
              </li>
              <li>
                <strong>الاختبار:</strong> يمكنك اختبار كل مكون و hook بشكل
                مستقل
              </li>
              <li>
                <strong>قراءة الكود:</strong> أي مطور جديد يفهم الكود بسرعة
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: أسئلة مقابلات شائعة */}
        {/* ========================================== */}
        <LessonSection title="أسئلة مقابلات React شائعة">
          <p>
            إليك بعض الأسئلة الشائعة في مقابلات العمل المتعلقة بـ
            React مع إجاباتها:
          </p>

          <ul className="space-y-6 my-4">
            <li>
              <strong>س: ما الفرق بين Virtual DOM والـ Real DOM؟</strong>
              <br />
              <strong>ج:</strong> الـ Real DOM هو التمثيل الفعلي للمستند في
              المتصفح (شجرة من العناصر). الـ Virtual DOM هو نسخة خفيفة من
              الـ DOM في الذاكرة. عندما تتغير الحالة، يُنشئ React نسخة
              جديدة من Virtual DOM ويقارنها بالسابقة (Reconciliation) ثم
              يحدث فقط الأجزاء المتغيرة في Real DOM. هذا يجعل التحديثات
              أسرع بكثير.
            </li>

            <li>
              <strong>س: ما هي Hooks ولماذا نستخدمها؟</strong>
              <br />
              <strong>ج:</strong> Hooks هي دوال تبدأ بـ "use" تسمح لك باستخدام
              ميزات React من المكونات الوظيفية. <code>useState</code> لإدارة
              الحالة، <code>useEffect</code> للآثار الجانبية، و{" "}
              <code>useContext</code> للوصول للـ Context. Hooks أبسط وأكثر
              مرونة من Class Components.
            </li>

            <li>
              <strong>س: ما الفرق بين State و Props؟</strong>
              <br />
              <strong>ج:</strong> الـ <strong>State</strong> هو بيانات داخلية
              للمكون يمكن تغييرها برمجياً (مثل النقر على زر). الـ{" "}
              <strong>Props</strong> هي بيانات تمرر من مكون أب لابنه ولا يمكن
              للمكون تغييرها (مثل الأرقام والنصوص التي تُمرر كمعاملات).
            </li>

            <li>
              <strong>س: ما هي Server Components في Next.js؟</strong>
              <br />
              <strong>ج:</strong> Server Components هي مكونات تعمل على الخادم
              (Server) وتمرس HTML جاهز للمتصفح. لا تحتاج لـ "use client" و
              يمكنها الوصول مباشرة لقاعدة البيانات والملفات. Client
              Components تعمل على المتصفح وتتفاعل مع المستخدم. الفصل بينهما
              يحسّن الأداء والأمان.
            </li>

            <li>
              <strong>س: ما هي Custom Hooks؟</strong>
              <br />
              <strong>ج:</strong> Custom Hooks هي دوال عادية تنشئها أنت وتستخدم
              بداخلها hooks خاصة بـ React. هدفها استخراج منطق مكرر إلى دوال
              قابلة لإعادة الاستخدام. يجب أن يبدأ اسمها بـ "use". مثال:
              <code>useFetch</code> لجلب البيانات،{" "}
              <code>useLocalStorage</code> للحفظ المحلي.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: نصائح للانتقال لمرحلة Next.js */}
        {/* ========================================== */}
        <LessonSection title="نصائح للانتقال لمرحلة Next.js">
          <p>
            الآن بعد أن أتقنت React، أنت جاهز لمرحلة{" "}
            <strong>Next.js</strong>. إليك ما تحتاج معرفته:
          </p>

          <ul className="space-y-3 my-4">
            <li>
              <strong>✅ كل ما تعلمته عن React ينطبق:</strong> Next.js هو
              إطار عمل مبني على React. كل مكون و hook و مفهوم تعلمته
              ستعمل في Next.js.
            </li>
            <li>
              <strong>✅ التوجيه المبني على الملفات:</strong> Next.js يستخدم
              هيكل المجلدات كمسارات URLs. مجلد في{" "}
              <code>app/</code> = صفحة في التطبيق.
            </li>
            <li>
              <strong>✅ Server Components بشكل افتراضي:</strong> في Next.js
              13+، كل مكون هو Server Component افتراضياً. تحتاج إضافة{" "}
              <code>"use client"</code> فقط للمكونات التفاعلية.
            </li>
            <li>
              <strong>✅ Server Actions:</strong> بديل حديث لـ API Routes
              لمعالجة النماذج وتعديل البيانات.
            </li>
            <li>
              <strong>✅ التحسين التلقائي:</strong> Next.js يحسن أداء تلقائياً
              مثل التحميل على الخادم (SSR) والتخزين المؤقت.
            </li>
            <li>
              <strong>✅ النشر السهل:</strong> Next.js مصمم للعمل بشكل مثالي
              مع Vercel للنشر.
            </li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه:
            </p>
            <p>
              تخيّل أنك تعلمت قيادة السيارة (React). الآن ستنقل لسيارة
              أوسع وأقوى (Next.js). نفس مهارات القيادة، لكن ميزات إضافية
              مثل نظام ملاحة (Routing) ومكيف更强 (Performance) ونوافذ أوتوماتيك
              (SSR).
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص مرحلة React">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li>
                <strong style={{ color: "var(--primary)" }}>React</strong>{" "}
                هي مكتبة لبناء واجهات المستخدم التفاعلية
              </li>
              <li>
                تعلمنا بناء <strong>المكونات</strong> وتمرير البيانات عبر{" "}
                <strong>Props</strong>
              </li>
              <li>
                تعلمنا إدارة الحالة مع <strong>useState</strong> والآثار
                الجانبية مع <strong>useEffect</strong>
              </li>
              <li>
                فهم الفرق بين <strong>Server و Client Components</strong>
              </li>
              <li>
                تعلمنا استخدام <strong>Server Actions</strong> لجمع البيانات
              </li>
              <li>
                تعلمنا إنشاء <strong>Custom Hooks</strong> لإعادة استخدام
                المنطق
              </li>
              <li>
                تعلمنا إدارة الحالة العامة مع <strong>Context API</strong>
              </li>
              <li>
                بنينا <strong>تطبيق إدارة مهام كامل</strong> يجمع كل
                المفاهيم
              </li>
              <li>
                أنت الآن جاهز للانتقال لمرحلة{" "}
                <strong style={{ color: "var(--secondary)" }}>Next.js</strong>{" "}
                لبناء تطبيقات احترافية!
              </li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="ما هو الفرق الأساسي بين Virtual DOM و Real DOM؟"
          options={[
            "Virtual DOM أبطأ من Real DOM",
            "Virtual DOM هو نسخة خفيفة في الذاكرة يقارنها React لتقليل التحديثات",
            "Virtual DOM يعمل على الخادم و Real DOM على المتصفح",
            "لا يوجد فرق بينهما",
          ]}
          correctAnswer={1}
          explanation="Virtual DOM هو نسخة خفيفة من Real DOM في الذاكرة. React يُنشئ نسخة جديدة عند التغيير ويقارنها بالأولى ثم يحدث فقط الأجزاء المتغيرة في Real DOM، مما يجعل التحديثات أسرع."
        />

        <Quiz
          question="ما هو الغرض الرئيسي من Context API؟"
          options={[
            "تحسين أداء التحميل",
            "تمرير البيانات عبر شجرة المكونات بدون prop drilling",
            "إدارة النماذج التفاعلية",
            "التعامل مع التوجيه (Routing)",
          ]}
          correctAnswer={1}
          explanation="Context API يُنشئ قناة اتصال بين Provider وأي consumer في شجرة المكونات، مما يُلغي الحاجة لتمرير props عبر عدة مستويات (prop drilling)."
        />

        <Quiz
          question="أي من التالي هو أفضل استخدام لـ Custom Hook؟"
          options={[
            "لإظهار واجهة مستخدم جديدة",
            "لاستخراج منطق مكرر من عدة مكونات إلى دالة قابلة لإعادة الاستخدام",
            "لتحسين سرعة الموقع",
            "للتعامل مع التوجيه بين الصفحات",
          ]}
          correctAnswer={1}
          explanation="Custom Hooks تُستخدم لإخراج المنطق المكرر (مثل جلب البيانات أو الحفظ المحلي) من المكونات إلى دوال مستقلة يمكن إعادة استخدامها في أي مكان."
        />

        <Quiz
          question="في تطبيق إدارة المهام، أي مفهوم React نستخدمه لإضافة مهمة جديدة؟"
          options={[
            "useEffect فقط",
            "Context API فقط",
            "useState أو useReducer لإدارة حالة المهام",
            "Server Components فقط",
          ]}
          correctAnswer={2}
          explanation="لإضافة مهمة جديدة، نحتاج إدارة حالة المهام (قائمة المهام). نستخدم useState أو useReducer لتخزين وتحديث قائمة المهام."
        />

        <Quiz
          question="ما هي الخطوة التالية بعد إتقان React في هذا المنهج؟"
          options={[
            "تعلم Python",
            "تعلم Next.js لبناء تطبيقات ويب كاملة",
            "تعلم قواعد البيانات SQL",
            "البدء في النشر مباشرة",
          ]}
          correctAnswer={1}
          explanation="Next.js هو الإطار المبني على React ويُوفر ميزات مثل التوجيه و Server Components والنشر. هو الخطوة التالية الطبيعية لبناء تطبيقات ويب احترافية."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: وسّع تطبيق إدارة المهام"
          description={
            <p>
              وسّع تطبيق إدارة المهام الذي بنيناه بإضافة الميزات التالية:
              <br />
              1. <strong>التصنيفات:</strong> أضف حقل اختيار (select) لتصنيف
              كل مهمة (عمل، شخصي، دراسة)
              <br />
              2. <strong>مستويات الأولوية:</strong> أضف خيار الأولوية
              (منخفضة، متوسطة، عالية) مع لون مختلف لكل مستوى
              <br />
              3. <strong>فلترة حسب التصنيف:</strong> أضف أزرار لفلترة
              المهام حسب التصنيف
              <br />
              4. <strong>ترتيب حسب الأولوية:</strong> اجعل المهام عالية
              الأولوية تظهر أولاً
            </p>
          }
        >
          <CodeBlock
            language="jsx"
            code={`// الحل: تحديث useReducer لدعم التصنيف والأولوية

function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, {
        id: Date.now(),
        text: action.payload.text,
        category: action.payload.category || "personal",
        priority: action.payload.priority || "medium",
        completed: false,
        createdAt: new Date().toLocaleDateString("ar-SA"),
      }];
    case "TOGGLE_TASK":
      return state.map(t =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    case "DELETE_TASK":
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
}

// تحديث TaskInput لدعم التصنيف والأولوية
function TaskInput() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("personal");
  const [priority, setPriority] = useState("medium");
  const { addTask } = useTasks();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ text: text.trim(), category, priority });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)}
             placeholder="مهمة جديدة..." />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="work">عمل</option>
        <option value="personal">شخصي</option>
        <option value="study">دراسة</option>
      </select>
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="high">عالية</option>
        <option value="medium">متوسطة</option>
        <option value="low">منخفضة</option>
      </select>
      <button type="submit">إضافة</button>
    </form>
  );
}

// تحديث TaskList للدعم حسب الأولوية
function TaskList({ filter, categoryFilter }) {
  const { tasks } = useTasks();

  const priorityOrder = { high: 0, medium: 1, low: 2 };

  const filtered = tasks
    .filter(t => {
      if (filter === "completed") return t.completed;
      if (filter === "pending") return !t.completed;
      return true;
    })
    .filter(t => categoryFilter === "all" || t.category === categoryFilter)
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return filtered.map(task => <TaskItem key={task.id} task={task} />);
}`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* Cheat Sheet شامل لمرحلة React */}
        {/* ========================================== */}
        <CheatSheet title="Cheat Sheet شامل لمرحلة React">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                المكونات والـ Props:
              </p>
              <CodeBlock
                language="jsx"
                code={`// مكون وظيفي
function Greeting({ name, age }) {
  return <p>مرحباً {name}، عمرك {age}</p>;
}

// استخدامه
<Greeting name="أحمد" age={25} />

// children
function Card({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                useState:
              </p>
              <CodeBlock
                language="jsx"
                code={`const [count, setCount] = useState(0);
const [name, setName] = useState("");
const [items, setItems] = useState([]);

// التحديث
setCount(count + 1);
setName("أحمد");
setItems(prev => [...prev, newItem]);
setItems(prev => prev.filter(i => i.id !== id));`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                useEffect:
              </p>
              <CodeBlock
                language="jsx"
                code={`// تشغيل بعد كل render
useEffect(() => { });

// تشغيل مرة واحدة فقط
useEffect(() => { }, []);

// تشغيل عند تغير dependency
useEffect(() => { }, [userId, token]);

// cleanup عند إلغاء التحميل
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer);
}, []);`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
                Server vs Client Components:
              </p>
              <CodeBlock
                language="jsx"
                code={`// Server Component (الافتراضي)
// يعمل على الخادم، لا يحتاج "use client"
async function ServerComponent() {
  const data = await fetch("https://api...");
  const posts = await data.json();
  return <div>{posts.map(p => <p key={p.id}>{p.title}</p>)}</div>;
}

// Client Component (يتفاعل مع المستخدم)
"use client";
function ClientComponent({ initialData }) {
  const [data, setData] = useState(initialData);
  return <button onClick={() => setData([...data, "جديد"])}>
    إضافة
  </button>;
}`}
              />

              <p className="font-bold mb-2 mt-4" style={{ color: "var(--primary)" }}>
                Custom Hooks:
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
                Context API:
              </p>
              <CodeBlock
                language="jsx"
                code={`const Ctx = createContext(null);

function Provider({ children }) {
  const [val, setVal] = useState("قيمة");
  return (
    <Ctx.Provider value={{ val, setVal }}>
      {children}
    </Ctx.Provider>
  );
}

function Consumer() {
  const { val, setVal } = useContext(Ctx);
}`}
              />
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* رسالة تهنئة */}
        {/* ========================================== */}
        <div
          className="rounded-xl p-6 my-6 border-2 text-center"
          style={{ background: "var(--surface)", borderColor: "var(--accent)" }}
        >
          <span className="text-4xl block mb-4">&#127881;</span>
          <h2
            className="text-2xl font-bold mb-3"
            style={{ color: "var(--accent)" }}
          >
            مبروك! أكملت مرحلة React
          </h2>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>
            أنت الآن تملك مهارات قوية في بناء تطبيقات ويب تفاعلية باستخدام
            React. الخطوة التالية هي تعلم <strong>Next.js</strong> لإنشاء
            تطبيقات احترافية مع توجيه وتحسين أداء ونشر سهل.
          </p>
          <p style={{ color: "var(--muted)" }}>
            استمر في التدرب على المشاريع وتطبيق ما تعلمته. كل مشروع جديد
            يجعلك مطوراً أقوى!
          </p>
        </div>

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
