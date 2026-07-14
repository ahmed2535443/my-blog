import StagePageClient from "@/components/StagePageClient";

const infoBox = {
  bg: "rgba(247, 223, 30, 0.1)",
  border: "#f7df1e",
  color: "#b8960a",
  text: "💡 هذه المرحلة تجمع أساسيات JavaScript مع المميزات الحديثة (ES6+) لتحضيرك لتعلم React بثقة",
};

export default function JavaScriptStagePage() {
  return <StagePageClient stageId="javascript" infoBox={infoBox} />;
}
