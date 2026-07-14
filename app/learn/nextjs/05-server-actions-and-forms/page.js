"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/05-server-actions-and-forms";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 1, 1, 1, 1], fr: [1, 1, 1, 1, 1], de: [1, 1, 1, 1, 1] };

const challengeCode = `// الحل الكامل

// 1. ملف app/actions.js
"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(prevState, formData) {
  const title = formData.get("title")?.trim();

  if (!title || title.length < 2) {
    return { success: false, error: "المهمة يجب أن تكون حرفين على الأقل" };
  }

  await db.todos.create({
    data: { title, completed: false },
  });

  revalidatePath("/todos");
  return { success: true, error: null };
}

export async function deleteTodo(id) {
  await db.todos.delete({ where: { id } });
  revalidatePath("/todos");
}

export async function toggleTodo(id, completed) {
  await db.todos.update({
    where: { id },
    data: { completed: !completed },
  });
  revalidatePath("/todos");
}

// 2. ملف app/todos/page.js
import { Suspense } from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function TodosPage() {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8">إدارة المهام</h1>
      <TodoForm />
      <Suspense fallback={<p>جاري تحميل المهام...</p>}>
        <TodoList />
      </Suspense>
    </div>
  );
}

// 3. ملف components/TodoForm.js
"use client";

import { useActionState } from "react";
import { addTodo } from "@/app/actions";

export default function TodoForm() {
  const [state, formAction, isPending] = useActionState(addTodo, {
    success: false,
    error: null,
  });

  return (
    <form action={formAction} className="flex gap-2 mb-6">
      <input
        type="text"
        name="title"
        placeholder="مهمة جديدة..."
        className="flex-1 p-2 border rounded"
        disabled={isPending}
      />
      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {isPending ? "..." : "إضافة"}
      </button>
      {state.error && (
        <p className="text-red-500 text-sm w-full">{state.error}</p>
      )}
    </form>
  );
}

// 4. ملف components/TodoList.js
import { db } from "@/lib/database";
import TodoItem from "./TodoItem";

export default async function TodoList() {
  const todos = await db.todos.findMany({
    orderBy: { createdAt: "desc" },
  });

  if (todos.length === 0) {
    return <p className="text-gray-500 text-center">لا توجد مهام بعد</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

// 5. ملف components/TodoItem.js
"use client";

import { useTransition } from "react";
import { deleteTodo, toggleTodo } from "@/app/actions";

export default function TodoItem({ todo }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          startTransition(() => toggleTodo(todo.id, todo.completed));
        }}
        disabled={isPending}
      />
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.title}
      </span>
      <button
        onClick={() => {
          startTransition(() => deleteTodo(todo.id));
        }}
        disabled={isPending}
        className="mr-auto text-red-500 text-sm"
      >
        حذف
      </button>
    </div>
  );
}`;

const cheatSheetData = {
  en: {
    title: "Server Actions Cheat Sheet",
    columns: [
      {
        heading: "Server Actions Basics:",
        code: `// Define Server Action
"use server";

export async function addItem(formData) {
  const name = formData.get("name");
  await db.items.create({ data: { name } });
  revalidatePath("/items");
}

// Use with Form
<form action={addItem}>
  <input name="name" />
  <button type="submit">Submit</button>
</form>

// Use with onClick
"use client";
import { useTransition } from "react";

function Button({ action }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button onClick={() => startTransition(action)}
            disabled={isPending}>
      {isPending ? "..." : "Click"}
    </button>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "useActionState:",
        code: `"use client";
import { useActionState } from "react";

const initialState = { error: null };

async function action(prev, formData) {
  const name = formData.get("name");
  if (!name) return { error: "Name required" };
  return { error: null };
}

function Form() {
  const [state, formAction, isPending] =
    useActionState(action, initialState);

  return (
    <form action={formAction}>
      <input name="name" disabled={isPending} />
      {state.error && <p>{state.error}</p>}
      <button disabled={isPending}>Submit</button>
    </form>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Revalidation:",
        code: `import { revalidatePath, revalidateTag }
  from "next/cache";

// Update specific path
revalidatePath("/");
revalidatePath("/blog");
revalidatePath("/blog/[slug]", "page");

// Update by tag
revalidateTag("products");
revalidateTag("user-123");`,
        codeLanguage: "jsx",
      },
      {
        heading: "Redirect:",
        code: `import { redirect } from "next/navigation";

export async function createItem(formData) {
  // ... save data
  redirect("/items");
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  fr: {
    title: "Fiche mémo Server Actions",
    columns: [
      {
        heading: "Base des Server Actions:",
        code: `// Définir un Server Action
"use server";

export async function addItem(formData) {
  const name = formData.get("name");
  await db.items.create({ data: { name } });
  revalidatePath("/items");
}

// Utiliser avec Form
<form action={addItem}>
  <input name="name" />
  <button type="submit">Soumettre</button>
</form>

// Utiliser avec onClick
"use client";
import { useTransition } from "react";

function Button({ action }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button onClick={() => startTransition(action)}
            disabled={isPending}>
      {isPending ? "..." : "Cliquer"}
    </button>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "useActionState:",
        code: `"use client";
import { useActionState } from "react";

const initialState = { error: null };

async function action(prev, formData) {
  const name = formData.get("name");
  if (!name) return { error: "Nom requis" };
  return { error: null };
}

function Form() {
  const [state, formAction, isPending] =
    useActionState(action, initialState);

  return (
    <form action={formAction}>
      <input name="name" disabled={isPending} />
      {state.error && <p>{state.error}</p>}
      <button disabled={isPending}>Soumettre</button>
    </form>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Revalidation:",
        code: `import { revalidatePath, revalidateTag }
  from "next/cache";

revalidatePath("/");
revalidatePath("/blog");
revalidateTag("products");`,
        codeLanguage: "jsx",
      },
      {
        heading: "Redirect:",
        code: `import { redirect } from "next/navigation";

export async function createItem(formData) {
  // ... sauvegarder les données
  redirect("/items");
}`,
        codeLanguage: "jsx",
      },
    ],
  },
  de: {
    title: "Spickzettel Server Actions",
    columns: [
      {
        heading: "Server Actions Grundlagen:",
        code: `// Server Action definieren
"use server";

export async function addItem(formData) {
  const name = formData.get("name");
  await db.items.create({ data: { name } });
  revalidatePath("/items");
}

// Mit Form verwenden
<form action={addItem}>
  <input name="name" />
  <button type="submit">Absenden</button>
</form>

// Mit onClick verwenden
"use client";
import { useTransition } from "react";

function Button({ action }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button onClick={() => startTransition(action)}
            disabled={isPending}>
      {isPending ? "..." : "Klicken"}
    </button>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "useActionState:",
        code: `"use client";
import { useActionState } from "react";

const initialState = { error: null };

async function action(prev, formData) {
  const name = formData.get("name");
  if (!name) return { error: "Name erforderlich" };
  return { error: null };
}

function Form() {
  const [state, formAction, isPending] =
    useActionState(action, initialState);

  return (
    <form action={formAction}>
      <input name="name" disabled={isPending} />
      {state.error && <p>{state.error}</p>}
      <button disabled={isPending}>Absenden</button>
    </form>
  );
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Revalidation:",
        code: `import { revalidatePath, revalidateTag }
  from "next/cache";

revalidatePath("/");
revalidatePath("/blog");
revalidateTag("products");`,
        codeLanguage: "jsx",
      },
      {
        heading: "Redirect:",
        code: `import { redirect } from "next/navigation";

export async function createItem(formData) {
  // ... Daten speichern
  redirect("/items");
}`,
        codeLanguage: "jsx",
      },
    ],
  },
};

function renderContent(item) {
  if (item.type === "p") return <p dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "li") return <li dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "ol") return <ol dangerouslySetInnerHTML={{ __html: item.text }} />;
  if (item.type === "callout") return (<div className="p-4 rounded-xl my-4 border" style={{background:"var(--surface)",borderColor:"var(--border)"}}><p className="font-bold mb-2" style={{color:"var(--secondary)"}}>💡 {item.title}:</p><p dangerouslySetInnerHTML={{__html:item.text}}/></div>);
  if (item.type === "callout-accent") return (<div className="p-4 rounded-xl my-4 border" style={{background:"var(--surface)",borderColor:"var(--border)"}}><p className="font-bold mb-2" style={{color:"var(--accent)"}}>✅ {item.title}:</p><p dangerouslySetInnerHTML={{__html:item.text}}/></div>);
  if (item.type === "callout-primary") return (<div className="p-4 rounded-xl my-4 border" style={{background:"var(--surface)",borderColor:"var(--border)"}}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>🔍 {item.title}:</p><p dangerouslySetInnerHTML={{__html:item.text}}/></div>);
  return null;
}

export default function ServerActionsAndForms() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "05-server-actions-and-forms");
  const content = rawTranslations[lang] || rawTranslations.en;
  if (!content) return null;
  const answers = correctAnswers[lang] || correctAnswers.en;
  const cs = cheatSheetData[lang] || cheatSheetData.en;
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader stage={lessonInfo.stage} lesson={lessonInfo} lessonIndex={lessonInfo.lessonIndex} totalLessons={lessonInfo.totalLessons} />
        {content.sections.map((section, i) => (<LessonSection key={i} title={section.title}>{section.content.map((item, j) => <div key={j}>{renderContent(item)}</div>)}</LessonSection>))}
        {content.quiz && content.quiz.map((q, i) => (<Quiz key={i} question={q.question} options={q.options} correctAnswer={answers[i]} explanation={q.explanation} />))}
        {content.challenge && (<Challenge title={content.challenge.title} description={<p>{content.challenge.description}</p>}>{challengeCode && <CodeBlock language="tsx" code={challengeCode} />}</Challenge>)}
        <CheatSheet title={cs.title}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{cs.columns.map((col, i) => (<div key={i}><p className="font-bold mb-2" style={{color:"var(--primary)"}}>{col.heading}</p>{col.items && <ul className="text-sm space-y-1">{col.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{__html:item}}/>)}</ul>}{col.code && <CodeBlock language={col.codeLanguage || "tsx"} code={col.code}/>}</div>))}</div></CheatSheet>
        <LessonNavigation prevLesson={lessonInfo.prevLesson} prevStage={lessonInfo.prevLessonStage} nextLesson={lessonInfo.nextLesson} nextStage={lessonInfo.nextLessonStage} />
      </div>
    </div>
  );
}
