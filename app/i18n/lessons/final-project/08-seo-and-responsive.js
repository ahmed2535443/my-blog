const translations = {
  en: {
    sections: [
      { title: "Introduction to SEO and Responsive Design", content: [
        { type: "p", text: "SEO helps your blog appear in search results. Responsive design ensures it looks great on all devices. This lesson covers Next.js Metadata API, Open Graph images, and Tailwind responsive utilities." },
        { type: "callout", title: "Key Topics", text: "Metadata API for SEO, generateMetadata for dynamic pages, Open Graph images, responsive design with Tailwind breakpoints, next/image optimization." }
      ]},
      { title: "Next.js Metadata API", content: [
        { type: "p", text: "Next.js provides a Metadata API to configure SEO settings per page, including title, description, keywords, and Open Graph tags." },
        { type: "callout", title: "Metadata Properties", text: "title with template pattern, description for search snippets, keywords for search engines, openGraph for social sharing, canonical for duplicate content prevention." }
      ]},
      { title: "Dynamic Metadata with generateMetadata", content: [
        { type: "p", text: "For dynamic pages like blog posts, use generateMetadata to create metadata based on the content from your database." },
        { type: "callout", title: "generateMetadata Pattern", text: "Export an async function that fetches post data and returns metadata object with title, description, openGraph images from the post." }
      ]},
      { title: "Open Graph Dynamic Images", content: [
        { type: "p", text: "Generate dynamic Open Graph images using Next.js Route Handlers and the ImageResponse library." },
        { type: "callout", title: "OG Image Generation", text: "Use app/api/og/route.js with ImageResponse, pass title and subtitle as URL params, return 1200x630 image." }
      ]},
      { title: "Responsive Design with Tailwind", content: [
        { type: "p", text: "Tailwind uses Mobile First approach with breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)." },
        { type: "callout", title: "Tailwind Breakpoints", text: "sm: small devices, md: tablets, lg: laptops, xl: large screens. Apply responsive styles using prefix notation like md:flex, lg:grid-cols-3." }
      ]},
      { title: "Image Optimization with next/image", content: [
        { type: "p", text: "next/image provides automatic optimization including lazy loading, WebP conversion, and responsive sizing." },
        { type: "callout", title: "Image Features", text: "Automatic lazy loading, WebP/AVIF format conversion, responsive sizes attribute, blur placeholder, priority for above-the-fold images." }
      ]},
      { title: "Additional SEO Features", content: [
        { type: "p", text: "Generate sitemap.xml and robots.txt dynamically, add structured data (JSON-LD) for rich snippets." },
        { type: "callout", title: "SEO Extras", text: "sitemap.js generates XML sitemap, robots.js creates robots.txt, JSON-LD provides structured data for search engines." }
      ]}
    ],
    quiz: [
      { question: "What does the Next.js Metadata API provide?",
        options: ["Database optimization", "HTML head configuration for SEO including title, description, and Open Graph", "API route protection", "Performance monitoring"],
        correctAnswer: 1, explanation: "Metadata API provides a structured way to configure SEO-related HTML head elements per page." },
      { question: "What advantage does next/image have over a regular img tag?",
        options: ["Supports more formats", "Automatic optimization, WebP conversion, lazy loading, and responsive sizing", "Works with TypeScript", "Faster rendering"],
        correctAnswer: 1, explanation: "next/image provides automatic optimization including format conversion, lazy loading, and responsive sizing." },
      { question: "What does the sm: breakpoint do in Tailwind?",
        options: ["Applies styles to all screens", "Applies styles to screens 640px and wider", "Makes text smaller", "Hides elements on mobile"],
        correctAnswer: 1, explanation: "sm: in Tailwind applies styles at 640px and above, following the Mobile First approach." },
      { question: "What is the purpose of sitemap.xml?",
        options: ["Store API endpoints", "List all pages for search engines to crawl", "Cache user sessions", "Store environment variables"],
        correctAnswer: 1, explanation: "sitemap.xml lists all pages of your site with their URLs and metadata for search engine crawlers." }
    ],
    challenge: { title: "Challenge: Create Category Page with SEO",
      description: "Create a category page with dynamic metadata, Open Graph tags, and structured data. Use generateMetadata to set page title and description from the category data." },
    cheatSheet: { title: "SEO and Responsive Design Reference", items: [
      { title: "Metadata", content: "export const metadata = { title, description, openGraph }" },
      { title: "Dynamic Metadata", content: "export async function generateMetadata({ params })" },
      { title: "Tailwind Responsive", content: "Mobile First: sm: 640px, md: 768px, lg: 1024px, xl: 1280px" },
      { title: "next/image", content: "priority, sizes, placeholder='blur', format conversion" },
      { title: "SEO Files", content: "sitemap.js, robots.js, JSON-LD structured data" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction au SEO et au design responsive", content: [
        { type: "p", text: "Le SEO aide votre blog a apparaitre dans les resultats de recherche. Le design responsive assure qu'il est magnifique sur tous les appareils." },
        { type: "callout", title: "Sujets cles", text: "API Metadata pour le SEO, generateMetadata pour les pages dynamiques, images Open Graph, design responsive avec Tailwind." }
      ]},
      { title: "API Metadata de Next.js", content: [
        { type: "p", text: "Next.js fournit une API Metadata pour configurer les parametres SEO par page." },
        { type: "callout", title: "Proprietes Metadata", text: "title avec modele, description pour les extraits, keywords pour les moteurs de recherche, openGraph pour le partage." }
      ]},
      { title: "Metadata dynamique avec generateMetadata", content: [
        { type: "p", text: "Pour les pages dynamiques, utilisez generateMetadata pour creer des metadonnees basees sur le contenu." },
        { type: "callout", title: "Modele", text: "Exportez une fonction async qui recupere les donnees et retourne un objet metadata." }
      ]},
      { title: "Images Open Graph dynamiques", content: [
        { type: "p", text: "Generez des images Open Graph dynamiques avec Next.js Route Handlers." },
        { type: "callout", title: "Generation d'images OG", text: "Utilisez app/api/og/route.js avec ImageResponse, retournez une image 1200x630." }
      ]},
      { title: "Design responsive avec Tailwind", content: [
        { type: "p", text: "Tailwind utilise l'approche Mobile First avec des points d'arret : sm (640px), md (768px), lg (1024px), xl (1280px)." },
        { type: "callout", title: "Points d'arret Tailwind", text: "sm: petits appareils, md: tablettes, lg: ordinateurs portables, xl: grands ecrans." }
      ]},
      { title: "Optimisation d'images avec next/image", content: [
        { type: "p", text: "next/image fournit l'optimisation automatique avec chargement paresseux et conversion WebP." },
        { type: "callout", title: "Fonctionnalites", text: "Chargement paresseux, conversion WebP/AVIF, tailles responsives, placeholder flou." }
      ]},
      { title: "Fonctionnalites SEO supplementaires", content: [
        { type: "p", text: "Generez sitemap.xml et robots.txt dynamiquement, ajoutez des donnees structurees JSON-LD." },
        { type: "callout", title: "SEO supplementaire", text: "sitemap.js genere le sitemap XML, robots.js cree robots.txt, JSON-LD fournit les donnees structurees." }
      ]}
    ],
    quiz: [
      { question: "Que fournit l'API Metadata de Next.js ?",
        options: ["Optimisation de base de donnees", "Configuration SEO du HTML incluant title et description", "Protection des routes API", "Monitoring de performance"],
        correctAnswer: 1, explanation: "L'API Metadata fournit un moyen structure de configurer les elements SEO du HTML." },
      { question: "Quel avantage next/image a-t-il par rapport a img ?",
        options: ["Supporte plus de formats", "Optimisation auto, conversion WebP, chargement paresseux", "Fonctionne avec TypeScript", "Rendu plus rapide"],
        correctAnswer: 1, explanation: "next/image fournit l'optimisation automatique incluant conversion de format et chargement paresseux." },
      { question: "Que fait le breakpoint sm: dans Tailwind ?",
        options: ["Applique les styles a tous les ecrans", "Applique les styles a 640px et plus", "Rend le texte plus petit", "Masque les elements sur mobile"],
        correctAnswer: 1, explanation: "sm: dans Tailwind applique les styles a 640px et plus, suivant l'approche Mobile First." },
      { question: "Quel est le but de sitemap.xml ?",
        options: ["Stocker les points d'extremite API", "Lister toutes les pages pour les moteurs de recherche", "Mettre en cache les sessions", "Stocker les variables d'environnement"],
        correctAnswer: 1, explanation: "sitemap.xml list toutes les pages de votre site avec leurs URLs pour les robots de recherche." }
    ],
    challenge: { title: "Defi : Creer une page categorie avec SEO",
      description: "Creez une page categorie avec metadata dynamique, balises Open Graph et donnees structurees." },
    cheatSheet: { title: "Reference SEO et design responsive", items: [
      { title: "Metadata", content: "export const metadata = { title, description, openGraph }" },
      { title: "Metadata dynamique", content: "export async function generateMetadata({ params })" },
      { title: "Tailwind responsive", content: "Mobile First : sm: 640px, md: 768px, lg: 1024px, xl: 1280px" },
      { title: "next/image", content: "priority, sizes, placeholder='blur', conversion de format" },
      { title: "Fichiers SEO", content: "sitemap.js, robots.js, JSON-LD" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in SEO und responsives Design", content: [
        { type: "p", text: "SEO hilft Ihrem Blog, in Suchergebnissen zu erscheinen. Responsives Design stellt sicher, dass er auf allen Geräten großartig aussieht." },
        { type: "callout", title: "Hauptthemen", text: "Metadata API fur SEO, generateMetadata fur dynamische Seiten, Open Graph Bilder, responsives Design mit Tailwind." }
      ]},
      { title: "Next.js Metadata API", content: [
        { type: "p", text: "Next.js bietet eine Metadata API zur Konfiguration von SEO-Einstellungen pro Seite." },
        { type: "callout", title: "Metadata-Eigenschaften", text: "title mit Vorlagenmuster, description fur Suchausschnitte, keywords fur Suchmaschinen, openGraph fur soziale Weitergabe." }
      ]},
      { title: "Dynamische Metadata mit generateMetadata", content: [
        { type: "p", text: "Fur dynamische Seiten verwenden Sie generateMetadata, um Metadaten basierend auf dem Inhalt zu erstellen." },
        { type: "callout", title: "Muster", text: "Exportieren Sie eine async Funktion, die Beitragsdaten abruft und ein Metadata-Objekt zuruckgibt." }
      ]},
      { title: "Dynamische Open Graph Bilder", content: [
        { type: "p", text: "Generieren Sie dynamische Open Graph Bilder mit Next.js Route Handlern." },
        { type: "callout", title: "OG-Bildgenerierung", text: "Verwenden Sie app/api/og/route.js mit ImageResponse, geben Sie ein 1200x630-Bild zuruck." }
      ]},
      { title: "Responsives Design mit Tailwind", content: [
        { type: "p", text: "Tailwind verwendet Mobile First mit Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)." },
        { type: "callout", title: "Tailwind-Breakpoints", text: "sm: kleine Geräte, md: Tablets, lg: Laptops, xl: große Bildschirme." }
      ]},
      { title: "Bildoptimierung mit next/image", content: [
        { type: "p", text: "next/image bietet automatische Optimierung mit Lazy Loading und WebP-Konvertierung." },
        { type: "callout", title: "Bildfunktionen", text: "Lazy Loading, WebP/AVIF-Konvertierung, responsive Größen, Blur-Placeholder." }
      ]},
      { title: "Zusätzliche SEO-Funktionen", content: [
        { type: "p", text: "Generieren Sie sitemap.xml und robots.txt dynamisch, fügen Sie strukturierte Daten (JSON-LD) hinzu." },
        { type: "callout", title: "SEO-Extras", text: "sitemap.js generiert XML-Sitemap, robots.js erstellt robots.txt, JSON-LD liefert strukturierte Daten." }
      ]}
    ],
    quiz: [
      { question: "Was bietet die Next.js Metadata API?",
        options: ["Datenbankoptimierung", "HTML-Head-Konfiguration fur SEO inklusive Title und Description", "API-Routenschutz", "Leistungsüberwachung"],
        correctAnswer: 1, explanation: "Die Metadata API bietet eine strukturierte Möglichkeit, SEO-bezogene HTML-Head-Elemente pro Seite zu konfigurieren." },
      { question: "Welchen Vorteil hat next/image gegenüber einem normalen img-Tag?",
        options: ["Unterstützt mehr Formate", "Automatische Optimierung, WebP-Konvertierung, Lazy Loading", "Funktioniert mit TypeScript", "Schnelleres Rendering"],
        correctAnswer: 1, explanation: "next/image bietet automatische Optimierung inklusive Formatkonvertierung und Lazy Loading." },
      { question: "Was macht der sm:-Breakpoint in Tailwind?",
        options: ["Wendet Styles auf alle Bildschirme an", "Wendet Styles ab 640px an", "Macht Text kleiner", "Versteckt Elemente auf Mobilgeräten"],
        correctAnswer: 1, explanation: "sm: in Tailwind wendet Styles ab 640px an, dem Mobile-First-Ansatz folgend." },
      { question: "Was ist der Zweck von sitemap.xml?",
        options: ["API-Endpunkte speichern", "Alle Seiten für Suchmaschinen auflisten", "Benutzersitzungen zwischenspeichern", "Umgebungsvariablen speichern"],
        correctAnswer: 1, explanation: "sitemap.xml listet alle Seiten Ihrer Website mit ihren URLs für Suchmaschinen-Roboter auf." }
    ],
    challenge: { title: "Herausforderung: Kategorieseite mit SEO erstellen",
      description: "Erstellen Sie eine Kategorieseite mit dynamischen Metadaten, Open-Graph-Tags und strukturierten Daten." },
    cheatSheet: { title: "SEO und responsives Design Referenz", items: [
      { title: "Metadata", content: "export const metadata = { title, description, openGraph }" },
      { title: "Dynamische Metadata", content: "export async function generateMetadata({ params })" },
      { title: "Tailwind responsiv", content: "Mobile First: sm: 640px, md: 768px, lg: 1024px, xl: 1280px" },
      { title: "next/image", content: "priority, sizes, placeholder='blur', Formatkonvertierung" },
      { title: "SEO-Dateien", content: "sitemap.js, robots.js, JSON-LD strukturierte Daten" }
    ]}
  }
};
export default translations;
