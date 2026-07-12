import Link from "next/link";
import { getStageById } from "@/data/curriculum";

export default async function ClerkStage() {
  const stage = getStageById("clerk");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/learn"
          className="text-sm mb-4 inline-block hover:underline"
          style={{ color: "var(--muted)" }}
        >
          العودة لخريطة التعلم
        </Link>
        <h1
          className="text-4xl font-extrabold mb-3"
          style={{ color: "var(--foreground)" }}
        >
          {stage.icon} {stage.title}
        </h1>
        <p className="text-lg mb-10" style={{ color: "var(--muted)" }}>
          {stage.description}
        </p>
        <div className="space-y-4">
          {stage.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/learn/clerk/${lesson.slug}`}
              className="block p-6 rounded-xl border transition-all duration-200 hover:shadow-lg"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    background: stage.color + "20",
                    color: stage.color,
                  }}
                >
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "var(--foreground)" }}
                  >
                    {lesson.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {lesson.description}
                  </p>
                </div>
                <span className="text-sm" style={{ color: "var(--muted)" }}>
                  {lesson.duration}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
