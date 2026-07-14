import StagePageClient from "@/components/StagePageClient";

const infoBox = {
  bg: "rgba(0, 0, 0, 0.1)",
  border: "#333",
  color: "var(--foreground)",
  text: "💡 هذا المنهج يغطي Next.js 16 مع App Router و Server Components و Route Handlers",
};

export default function NextjsStagePage() {
  return <StagePageClient stageId="nextjs" infoBox={infoBox} />;
}
