const translations = {
  ar: {
    sections: [
      { title: "next/image — مكون الصور المحسّن", content: [
        { type: "p", text: "مكون <code>next/image</code> يوفر تحسيناً تلقائياً للصور بما في ذلك التحميل الكسول، وإعادة التغيير الحجم، وتحويل الصيغة إلى WebP أو AVIF." },
        { type: "p", text: "استخدام علامات <code>&lt;img&gt;</code> العادية يسبب العديد من المشاكل: لا يوجد تحميل كسول، لا يوجد تغيير حجم، لا يوجد تحويل صيغة." },
      ]},
      { title: "next/font — الخطوط المحسّنة", content: [
        { type: "p", text: "وحدة <code>next/font</code> تحسّن الخطوط تلقائياً عن طريق تنزيلها وقت البناء واستضافتها مع أصولك الثابتة." },
      ]},
      { title: "واجهة برمجة البيانات الوصفية", content: [
        { type: "p", text: "Next.js يوفر واجهة برمجة البيانات الوصفية لتحسين محركات البحث. صدّر كائن <code>metadata</code> أو دالة <code>generateMetadata</code> من page.js أو layout.js." },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "استخدم next/image بدلاً من <img> للصور المحسّنة." },
        { type: "li", text: "استخدم next/font للتحميل المحسّن للخطوط." },
        { type: "li", text: "صدّر كائنات metadata لتحسين محركات البحث." },
      ]}
    ],
    quiz: [
      { question: "لماذا تستخدم next/image بدلاً من <img>؟", options: ["يبدو أفضل", "يوفر التحميل الكسول وإعادة تغيير الحجم وتحسين الصيغة", "مطلوب من React", "لا يوجد فرق"], explanation: "next/image يوفر التحميل الكسول التلقائي وتحويل WebP/AVIF." },
    ],
    challenge: { title: "حسّن الصور والخطوط", description: "استبدل علامات <img> بـ next/image وقم بتكوين الخطوط باستخدام next/font." },
    cheatSheet: { title: "ملخص مراجعة الصور والخطوط والبيانات الوصفية", items: [
      { term: "<Image src='/photo.jpg' />", definition: "مكون صور محسّن" },
      { term: "next/font", definition: "تحميل خطوط محسّن" },
      { term: "export const metadata = {}", definition: "بيانات وصفية للصفحة لتحسين محركات البحث" },
      { term: "generateMetadata()", definition: "دالة بيانات وصفية ديناميكية" }
    ]}
  },
  en: {
    sections: [
      { title: "next/image — Optimized Image Component", content: [
        { type: "p", text: "The <code>next/image</code> component provides automatic optimization for images including lazy loading, resizing, and format conversion to WebP or AVIF." },
        { type: "p", text: "Using regular <code>&lt;img&gt;</code> tags causes many problems: no lazy loading, no size optimization, no format conversion." },
      ]},
      { title: "next/font — Optimized Fonts", content: [
        { type: "p", text: "The <code>next/font</code> module automatically optimizes fonts by downloading them at build time and hosting them with your static assets." },
      ]},
      { title: "Metadata API", content: [
        { type: "p", text: "Next.js provides a Metadata API for SEO optimization. Export a <code>metadata</code> object or <code>generateMetadata</code> function from page.js or layout.js." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Use next/image instead of <img> for optimized images." },
        { type: "li", text: "Use next/font for optimized font loading." },
        { type: "li", text: "Export metadata objects for SEO." },
      ]}
    ],
    quiz: [
      { question: "Why use next/image instead of <img>?", options: ["It looks better", "Provides lazy loading, resizing, and format optimization", "It's required by React", "No difference"], explanation: "next/image provides automatic lazy loading, resizing, and WebP/AVIF conversion." },
    ],
    challenge: { title: "Optimize Images and Fonts", description: "Replace <img> tags with next/image and configure fonts with next/font." },
    cheatSheet: { title: "Images, Fonts & Metadata Cheat Sheet", items: [
      { term: "<Image src='/photo.jpg' />", definition: "Optimized image component" },
      { term: "next/font", definition: "Optimized font loading" },
      { term: "export const metadata = {}", definition: "Page metadata for SEO" },
      { term: "generateMetadata()", definition: "Dynamic metadata function" }
    ]}
  },
  fr: {
    sections: [
      { title: "next/image — Composant d'images optimisé", content: [
        { type: "p", text: "Le composant <code>next/image</code> fournit une optimisation automatique des images avec chargement lazy, redimensionnement et conversion de format." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Utilisez next/image au lieu de <img> pour des images optimisées." },
        { type: "li", text: "Utilisez next/font pour le chargement optimisé des polices." },
        { type: "li", text: "Exportez des objets metadata pour le SEO." },
      ]}
    ],
    quiz: [
      { question: "Pourquoi utiliser next/image au lieu de <img> ?", options: ["Il a une meilleure apparence", "Fournit le chargement lazy et l'optimisation", "C'est requis par React"], explanation: "next/image fournit le chargement automatique et la conversion WebP/AVIF." },
    ],
    challenge: { title: "Optimiser les images et polices", description: "Remplacez <img> par next/image et configurez les polices avec next/font." },
    cheatSheet: { title: "Fiche mémo Images, Fonts & Metadata", items: [
      { term: "<Image src='/photo.jpg' />", definition: "Composant d'image optimisé" },
      { term: "next/font", definition: "Chargement optimisé des polices" },
      { term: "export const metadata = {}", definition: "Métadonnées pour le SEO" }
    ]}
  },
  de: {
    sections: [
      { title: "next/image — Optimierte Bildkomponente", content: [
        { type: "p", text: "Die <code>next/image</code>-Komponente bietet automatische Bildoptimierung mit Lazy Loading, Größenanpassung und Formatkonvertierung." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Verwenden Sie next/image statt <img> für optimierte Bilder." },
        { type: "li", text: "Verwenden Sie next/font für optimiertes Schriftarten-Laden." },
        { type: "li", text: "Exportieren Sie Metadata-Objekte für SEO." },
      ]}
    ],
    quiz: [
      { question: "Warum next/image statt <img> verwenden?", options: ["Sieht besser aus", "Bietet Lazy Loading und Optimierung", "Ist von React vorgeschrieben"], explanation: "next/image bietet automatisches Lazy Loading und WebP/AVIF-Konvertierung." },
    ],
    challenge: { title: "Bilder und Schriftarten optimieren", description: "Ersetzen Sie <img> durch next/image und konfigurieren Sie Schriftarten mit next/font." },
    cheatSheet: { title: "Bilder, Schriftarten & Metadata Spickzettel", items: [
      { term: "<Image src='/photo.jpg' />", definition: "Optimierte Bildkomponente" },
      { term: "next/font", definition: "Optimiertes Schriftarten-Laden" },
      { term: "export const metadata = {}", definition: "Seiten-Metadaten für SEO" }
    ]}
  }
};
export default translations;
