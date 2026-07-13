import Link from "next/link";
import { getStageById } from "@/data/curriculum";
import ProgressBar from "@/components/ProgressBar";

export default async function FinalProjectStage() {
  const stage = getStageById("final-project");

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--muted)" }}>
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/learn" className="hover:text-[var(--primary)] transition-colors">المنهج</Link>
          <span>/</span>
          <span style={{ color: "var(--foreground)" }}>{stage.title}</span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{stage.icon}</span>
          <div>
            <h1 className="text-4xl font-extrabold" style={{ color: "var(--foreground)" }}>
              {stage.title}
            </h1>
            <p className="text-lg" style={{ color: "var(--muted)" }}>
              {stage.description}
            </p>
          </div>
        </div>

        <div
          className="p-4 rounded-xl border mt-4"
          style={{ background: "rgba(251, 191, 36, 0.1)", borderColor: "var(--secondary)" }}
        >
          <p className="text-sm" style={{ color: "var(--secondary)" }}>
            📌 في هذا المشروع سنتعلم كيف نبني مدونة احترافية من الصفر. كل درس يشرح الكود المكتوب بطريقة مبسطة مع تحسينات ممكنة.
          </p>
        </div>

        <div className="max-w-xl mt-6">
          <ProgressBar stageId={stage.id} totalLessons={stage.lessons.length} />
        </div>
      </header>

      <div className="max-w-3xl">
        <div className="space-y-4">
          {stage.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/learn/final-project/${lesson.slug}`}
              className="flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-md group"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                style={{ background: stage.color + "15", color: stage.color }}
              >
                {index + 1}
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-lg group-hover:text-[var(--primary)] transition-colors" style={{ color: "var(--foreground)" }}>
                  {lesson.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {lesson.description}
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full shrink-0" style={{ background: "var(--border)", color: "var(--muted)" }}>
                ⏱ {lesson.duration}
              </span>
              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-2 shrink-0" style={{ color: "var(--muted)" }}>
                ←
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
