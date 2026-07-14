"use client";

import { useLanguage } from "@/components/LanguageProvider";
import rawTranslations from "@/i18n/lessons/nextjs/09-route-handlers-and-proxy";
import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

const correctAnswers = { en: [1, 2, 1, 1, 2], fr: [1, 2, 1, 1, 2], de: [1, 2, 1, 1, 2], ar: [1, 2, 1, 1, 2] };

const challengeCode = `// 1. ملف app/api/todos/route.js
import { NextResponse } from "next/server";

let todos = [
  { id: "1", title: "تعلم Next.js", completed: false },
  { id: "2", title: "بناء مشروع", completed: false },
];

// GET /api/todos
export async function GET() {
  return NextResponse.json({ success: true, data: todos });
}

// POST /api/todos
export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.title) {
      return NextResponse.json(
        { success: false, error: "العنوان مطلوب" },
        { status: 400 }
      );
    }
    const newTodo = {
      id: String(todos.length + 1),
      title: body.title,
      completed: false,
    };
    todos.push(newTodo);
    return NextResponse.json({ success: true, data: newTodo }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "بيانات غير صحيحة" },
      { status: 400 }
    );
  }
}

// 2. ملف app/api/todos/[id]/route.js
export async function GET(request, { params }) {
  const { id } = await params;
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return NextResponse.json({ success: false, error: "غير موجود" }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: todo });
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return NextResponse.json({ success: false, error: "غير موجود" }, { status: 404 });
  }
  todos[index] = { ...todos[index], ...body, id };
  return NextResponse.json({ success: true, data: todos[index] });
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return NextResponse.json({ success: false, error: "غير موجود" }, { status: 404 });
  }
  todos.splice(index, 1);
  return NextResponse.json({ success: true, message: "تم الحذف" });
}

// 3. ملف proxy.ts
import { NextResponse } from "next/server";

const protectedPaths = ["/dashboard", "/admin"];

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtected) {
    const token = request.cookies.get("auth-token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};`;

const cheatSheetData = {
  en: {
    title: "Route Handlers & Proxy Cheat Sheet",
    columns: [
      {
        heading: "GET Route Handler:",
        code: `export async function GET(request) {
  const data = await fetchData();
  return Response.json(data);
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "POST Route Handler:",
        code: `export async function POST(request) {
  const body = await request.json();
  const result = await createItem(body);
  return Response.json(result, { status: 201 });
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Dynamic Route Handler:",
        code: `export async function GET(request, { params }) {
  const { id } = await params;
  const item = await getItem(id);
  return Response.json(item);
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Proxy:",
        code: `import { NextResponse } from "next/server";

export function proxy(request) {
  if (!request.cookies.get("token")) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};`,
        codeLanguage: "jsx",
      },
    ],
  },
  fr: {
    title: "Fiche mémo Route Handlers & Proxy",
    columns: [
      {
        heading: "GET Route Handler:",
        code: `export async function GET(request) {
  const data = await fetchData();
  return Response.json(data);
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "POST Route Handler:",
        code: `export async function POST(request) {
  const body = await request.json();
  const result = await createItem(body);
  return Response.json(result, { status: 201 });
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Dynamic Route Handler:",
        code: `export async function GET(request, { params }) {
  const { id } = await params;
  const item = await getItem(id);
  return Response.json(item);
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Proxy:",
        code: `import { NextResponse } from "next/server";

export function proxy(request) {
  if (!request.cookies.get("token")) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};`,
        codeLanguage: "jsx",
      },
    ],
  },
  de: {
    title: "Spickzettel Route Handlers & Proxy",
    columns: [
      {
        heading: "GET Route Handler:",
        code: `export async function GET(request) {
  const data = await fetchData();
  return Response.json(data);
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "POST Route Handler:",
        code: `export async function POST(request) {
  const body = await request.json();
  const result = await createItem(body);
  return Response.json(result, { status: 201 });
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Dynamic Route Handler:",
        code: `export async function GET(request, { params }) {
  const { id } = await params;
  const item = await getItem(id);
  return Response.json(item);
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "Proxy:",
        code: `import { NextResponse } from "next/server";

export function proxy(request) {
  if (!request.cookies.get("token")) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};`,
        codeLanguage: "jsx",
      },
    ],
  },
  ar: {
    title: "ملخص مراجعة Route Handlers والـ Proxy",
    columns: [
      {
        heading: "معالج GET:",
        code: `export async function GET(request) {
  const data = await fetchData();
  return Response.json(data);
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "معالج POST:",
        code: `export async function POST(request) {
  const body = await request.json();
  const result = await createItem(body);
  return Response.json(result, { status: 201 });
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "معالج مسار ديناميكي:",
        code: `export async function GET(request, { params }) {
  const { id } = await params;
  const item = await getItem(id);
  return Response.json(item);
}`,
        codeLanguage: "jsx",
      },
      {
        heading: "الـ Proxy:",
        code: `import { NextResponse } from "next/server";

export function proxy(request) {
  if (!request.cookies.get("token")) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};`,
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

export default function RouteHandlersAndProxy() {
  const { lang } = useLanguage();
  const lessonInfo = getLessonBySlug("nextjs", "09-route-handlers-and-proxy");
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
