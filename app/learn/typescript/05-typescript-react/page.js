"use client";

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function Lesson05TypeScriptReact() {
  const lesson = getLessonBySlug("typescript", "05-typescript-react");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <LessonSection title="React TypeScript Typed Components">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            React with TypeScript provides enhanced type safety and better developer experience. 
            This lesson covers Component Props Typing, Hooks Typing, Event Handlers, Generics, and Next.js 16 Server/Client Components.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">أساسيات كتابة أنواع خصائص المكونات</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            لإنشاء مكون React مكتوب بأنواع TypeScript بشكل صحيح، نستخدم interfaces لتحديد أنواع الخصائص.
          </p>
          
          <CodeBlock 
            code={`interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={
        props.variant === "secondary"
          ? "bg-gray-500 text-white px-4 py-2 rounded"
          : "bg-blue-500 text-white px-4 py-2 rounded"
      }
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

// Usage Examples:
<Button text="Click me" onClick={() => console.log("clicked")} />`}
            language="tsx" 
          />
        </LessonSection>

        <Quiz
          question="أي من هذه العبارات حول أنواع React Components صحيح؟"
          options={
            [
              "React.FC هو النمط المفضل والوحيد لكتابة أنواع المكونات",
              "يمكن استخدام React.ReactNode للأطفال الذين يمكن أن يكونوا أي عناصر React",
              "تقبل جميع Event Handler نوع Event عامًا",
              "يمكن دفن generics فقط في مكتبات المكونات"
            ]
          }
          correctAnswer={1}
          explanation="React.ReactNode يسمح لأي شيء يمكن وضعه داخل مكون، مما يجعله النوع المثالي لكتابة خصائص الأطفال."
        />

        <CheatSheet title="أنماط React + TypeScript">
          <div className="space-y-2 text-sm">
            <div><code>interface Props {}</code> - النمط الأساسي للخصائص</div>
            <div><code>React.FC&lt;Props&gt;</code> - نمط function component (deprecated)</div>
            <div><code>{`(props: Props) => JSX.Element`}</code> - نمط function component الحديث</div>
          </div>
        </CheatSheet>

        <Challenge title="بناء مكون نموذج Type-Safe مع Zod Validation">
          <div className="space-y-3">
            <p>بناء تطبيق TODO مع:</p>
            <ul className="list-disc list-inside space-y-1 mr-4">
              <li>مخطط Zod للأ form validation</li>
              <li>Hook مخصص لإدارة state مع typing</li>
              <li>مكونات Type-Safe مع generics</li>
              <li>Local Storage Integration مع Auto-Save</li>
              <li>Filter and Search مع حالات Type-Safe</li>
              <li>Error Handling مع Zod validation</li>
            </ul>
          </div>
        </Challenge>
      </div>
      
      <LessonNavigation
        prevLesson={lesson.prevLesson}
        prevStage={lesson.prevLessonStage}
        nextLesson={lesson.nextLesson}
        nextStage={lesson.nextLessonStage}
      />
    </div>
  );
}