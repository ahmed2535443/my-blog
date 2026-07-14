import StagePageClient from "@/components/StagePageClient";

const infoBox = {
  bg: "rgba(228, 160, 76, 0.1)",
  border: "#e4a04c",
  color: "#e4a04c",
  text: "💡 هذا المنهج مُحدَّث لـ 2025-2026 مع أحدث الممارسات والتقنيات",
};

export default function HtmlStagePage() {
  return <StagePageClient stageId="html" infoBox={infoBox} />;
}
