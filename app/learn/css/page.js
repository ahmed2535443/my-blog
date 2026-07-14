import StagePageClient from "@/components/StagePageClient";

const infoBox = {
  bg: "rgba(38, 77, 228, 0.1)",
  border: "#264de4",
  color: "#264de4",
  text: "💡 هذا المنهج مُحدَّث لـ 2025-2026 - نتجاهل الطرق القديمة (Floats, Tables, Sass) ونركّز على المميزات الحديثة",
};

export default function CSSStagePage() {
  return <StagePageClient stageId="css" infoBox={infoBox} />;
}
