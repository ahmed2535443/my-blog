import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function LessonNavigation({ prevLesson, prevStage, nextLesson, nextStage }) {
  const { t } = useLanguage();

  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="flex-1">
        {prevLesson ? (
          <Link
            href={`/learn/${prevStage.id}/${prevLesson.slug}`}
            className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:border-[var(--primary)]"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <span className="text-2xl">→</span>
            <div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.navigation.prevLesson}</p>
              <p className="font-bold" style={{ color: "var(--foreground)" }}>
                {prevStage.icon} {prevLesson.title}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {nextLesson ? (
          <Link
            href={`/learn/${nextStage.id}/${nextLesson.slug}`}
            className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:border-[var(--primary)]"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <div className="text-left">
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.navigation.nextLesson}</p>
              <p className="font-bold" style={{ color: "var(--foreground)" }}>
                {nextStage.icon} {nextLesson.title}
              </p>
            </div>
            <span className="text-2xl">←</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
