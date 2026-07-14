import { stages } from "./data/curriculum";

export default function sitemap() {
  const baseUrl = "https://codemaster-edu.vercel.app";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/learn`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  const stagePages = stages.map((stage) => ({
    url: `${baseUrl}/learn/${stage.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const lessonPages = stages.flatMap((stage) =>
    stage.lessons.map((lesson) => ({
      url: `${baseUrl}/learn/${stage.id}/${lesson.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  return [...staticPages, ...stagePages, ...lessonPages];
}
