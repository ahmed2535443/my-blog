"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function CodeBlockWithPreview({ code, language, result }) {
  const [activeTab, setActiveTab] = useState("code");

  const showPreview = result !== undefined && result !== null;

  if (!showPreview) {
    return <CodeBlock code={code} language={language} />;
  }

  return (
    <div className="my-4 rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
      {/* Tab Header */}
      <div
        className="flex items-center gap-0 border-b"
        style={{
          background: "#161b22",
          borderColor: "#334155",
        }}
      >
        <button
          onClick={() => setActiveTab("code")}
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-200 border-b-2"
          style={{
            background: activeTab === "code" ? "#0d1117" : "transparent",
            color: activeTab === "code" ? "#38bdf8" : "#8b949e",
            borderColor: activeTab === "code" ? "#38bdf8" : "transparent",
            cursor: "pointer",
          }}
        >
          <span>💻</span>
          <span>الكود</span>
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-200 border-b-2"
          style={{
            background: activeTab === "preview" ? "#0d1117" : "transparent",
            color: activeTab === "preview" ? "#22c55e" : "#8b949e",
            borderColor: activeTab === "preview" ? "#22c55e" : "transparent",
            cursor: "pointer",
          }}
        >
          <span>📺</span>
          <span>النتيجة</span>
        </button>
      </div>

      {/* Content */}
      {activeTab === "code" ? (
        <CodeBlock code={code} language={language} />
      ) : (
        <div
          className="preview-container"
          style={{
            background: "#ffffff",
            direction: "ltr",
          }}
        >
          <iframe
            srcDoc={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
      padding: 20px;
      margin: 0;
      color: #1e293b;
      line-height: 1.6;
    }
  </style>
</head>
<body>
${result}
</body>
</html>`}
            sandbox="allow-scripts"
            className="preview-iframe"
            style={{
              width: "100%",
              minHeight: "200px",
              border: "none",
              borderRadius: "0 0 12px 12px",
            }}
            title="معاينة النتيجة"
          />
        </div>
      )}
    </div>
  );
}
