import StagePageClient from "@/components/StagePageClient";

const infoBox = {
  bg: "rgba(56, 189, 248, 0.1)",
  border: "var(--primary)",
  color: "var(--primary)",
  text: "💡 هذا المنهج مُعدَّل للعمل مع Next.js 16 و React 19",
};

export default function ReactStagePage() {
  return <StagePageClient stageId="react" infoBox={infoBox} />;
}
