const translations = {
  ar: {
    sections: [
      { title: "الطباعة", content: [
        { type: "p", text: "يوفر Tailwind CSS مجموعة شاملة من الأدوات للتحكم الكامل في مظهر النص. من أحجام الخطوط إلى ارتفاعات الأسطر والتباعد — كل شيء متاح كفئات مساعدة جاهزة للاستخدام." },
        { type: "li", text: "أحجام الخطوط من text-xs (0.75rem) إلى text-9xl (8rem)" },
        { type: "li", text: "أوزان الخطوط من font-thin (100) إلى font-black (900)" },
        { type: "li", text: "عائلات الخطوط: font-sans، font-serif، font-mono" },
        { type: "li", text: "ارتفاعات الأسطر، تباعد الأحرف، محاذاة النص، وزخرفة النص" },
      ]},
      { title: "الألوان", content: [
        { type: "p", text: "يحتوي Tailwind على إحدى أقوى مجموعات الألوان من بين أي إطار عمل CSS. أكثر من 50 لوناً مع 11 درجة لكل منها، بالإضافة إلى أدوات شفافية متقدمة." },
        { type: "li", text: "ألوان الخلفية: bg-white، bg-blue-500، إلخ" },
        { type: "li", text: "ألوان النص: text-gray-900، text-red-500، إلخ" },
        { type: "li", text: "ألوان الحدود: border-gray-300، border-blue-500، إلخ" },
        { type: "li", text: " معدلات الشفافية: bg-blue-500/75 لشفافية 75%" },
      ]},
      { title: "الخلفيات والحدود", content: [
        { type: "p", text: "يوفر Tailwind تحديداً دقيقاً على الخلفيات والحدود، بما في ذلك التدرجات والأحجام والأشكال." },
        { type: "li", text: "تدرجات الخلفية: bg-gradient-to-r from-blue-500 to-purple-500" },
        { type: "li", text: "عرض الحدود: border، border-2، border-4" },
        { type: "li", text: "نصف قطر الحدود: rounded، rounded-lg، rounded-xl، rounded-full" },
      ]},
      { title: "الظلال والتدرجات", content: [
        { type: "p", text: "تضيف الظلال والتدرجات عمقاً وحيوية للعناصر. يوفر Tailwind مجموعة منظمة من الظلال الجاهزة وأدوات التدرج القوية." },
        { type: "li", text: "ظلال الصندوق: shadow-sm، shadow، shadow-md، shadow-lg، shadow-xl، shadow-2xl" },
        { type: "li", text: "اتجاهات التدرج: to-r، to-l، to-t، to-b، to-br، to-tr" },
        { type: "li", text: "تدرجات متعددة الألوان باستخدام via-*" },
      ]},
      { title: "الشفافية ووضع الدمج", content: [
        { type: "p", text: "تحكم في الشفافية ودمج الألوان للتأثيرات البصرية المتقدمة." },
        { type: "li", text: "الشفافية: opacity-0 إلى opacity-100" },
        { type: "li", text: "دمج الخلفية: bg-blend-multiply، bg-blend-overlay" },
        { type: "li", text: "دمج المزج: mix-blend-overlay، mix-blend-difference" },
      ]},
      { title: "الانتقالات والرسوم المتحركة", content: [
        { type: "p", text: "تجعل الرسوم المتحركة واجهتك أكثر حيوية وتفاعلية." },
        { type: "li", text: "الانتقالات: transition-all، transition-colors، transition-opacity، transition-shadow، transition-transform" },
        { type: "li", text: "المدة: duration-75 إلى duration-1000" },
        { type: "li", text: "رسوم متحركة مدمجة: animate-spin، animate-pulse، animate-bounce، animate-ping" },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "تغطي فئات الطباعة حجم الخط ووزنه وعائلته وارتفاعه وتباعده" },
        { type: "li", text: "أكثر من 50 لوناً مع 11 درجة ومعدلات شفافية" },
        { type: "li", text: "تضيف التدرجات والظلال ووضع الدمج عمقاً بصرياً" },
        { type: "li", text: "تخلق الانتقالات والرسوم المتحركة تفاعلات سلسة" },
      ]}
    ],
    quiz: [
      { question: "كيف تعيّن لون خلفية بشفافية 50%؟", options: ["bg-blue-500 opacity-50", "bg-blue-500/50", "bg-opacity-50 blue", "transparent-blue-50"], explanation: "استخدم صيغة معدل الشفافية: bg-blue-500/50 تعيّن لون blue-500 بشفافية 50%." },
      { question: "أي فئة تنشئ تدرجاً من اليسار إلى اليمين؟", options: ["bg-gradient-to-l", "bg-gradient-to-r", "bg-gradient-horizontal", "gradient-r"], explanation: "bg-gradient-to-r تنشئ تدرجاً خطيياً من اليسار إلى اليمين." },
      { question: "ماذا يفعل transition-all؟", options: ["يُحوّل جميع خصائص CSS بسلاسة", "يجعل كل شيء يدور", "يفعّل الرسوم المتحركة", "يُغيّر جميع الألوان"], explanation: "يُطبق transition-all انتقالات سلسة على جميع تغييرات خصائص CSS." }
    ],
    challenge: { title: "إنشاء بطاقة منتج بتأثيرات", description: "ابنِ بطاقة منتج تستخدم التسلسل الطباعي وخلفيات التدرج والظلال وانتقالات التمرير وتناقض الألوان المناسب." },
    cheatSheet: { title: "ملخص الطباعة والألوان والتأثيرات", items: [
      { term: "text-sm / text-lg / text-xl", definition: "أحجام الخطوط" },
      { term: "font-bold / font-semibold", definition: "أوزان الخطوط" },
      { term: "text-gray-700", definition: "لون النص" },
      { term: "bg-blue-500", definition: "لون الخلفية" },
      { term: "bg-blue-500/75", definition: "خلفية بشفافية 75%" },
      { term: "rounded-lg / rounded-full", definition: "نصف قطر الحدود" },
      { term: "shadow-lg", definition: "ظل صندوق كبير" },
      { term: "bg-gradient-to-r", definition: "تدرج من اليسار إلى اليمين" },
      { term: "transition-colors", definition: "انتقال الألوان" },
      { term: "animate-spin", definition: "دوران مستمر" }
    ]},
    interviewQuestions: [
      { question: "كيف تنشئ مكونات قابلة لإعادة الاستخدام بـ Tailwind؟", answer: "استخدم clsx أو cva لإدارة الفئات الشرطية.", difficulty: "medium" }
    ],
    tricks: [
      { title: "استخدم cva", description: "class-variance-authority لإنشاء مكونات بـ variants مختلفة", type: "brain" }
    ]
  },
  en: {
    sections: [
      { title: "Typography", content: [
        { type: "p", text: "Tailwind CSS provides a comprehensive set of tools for full control over text appearance. From font sizes to line heights and spacing — everything is available as ready-to-use utility classes." },
        { type: "li", text: "Font sizes from text-xs (0.75rem) to text-9xl (8rem)" },
        { type: "li", text: "Font weights from font-thin (100) to font-black (900)" },
        { type: "li", text: "Font families: font-sans, font-serif, font-mono" },
        { type: "li", text: "Line heights, letter spacing, text alignment, and text decoration" },
      ]},
      { title: "Colors", content: [
        { type: "p", text: "Tailwind has one of the strongest color collections of any CSS framework. Over 50 colors with 11 shades each, plus advanced transparency controls." },
        { type: "li", text: "Background colors: bg-white, bg-blue-500, etc." },
        { type: "li", text: "Text colors: text-gray-900, text-red-500, etc." },
        { type: "li", text: "Border colors: border-gray-300, border-blue-500, etc." },
        { type: "li", text: "Opacity modifiers: bg-blue-500/75 for 75% opacity" },
      ]},
      { title: "Backgrounds & Borders", content: [
        { type: "p", text: "Tailwind provides precise control over backgrounds and borders, including gradients, sizing, position, and shapes." },
        { type: "li", text: "Background gradients: bg-gradient-to-r from-blue-500 to-purple-500" },
        { type: "li", text: "Border width: border, border-2, border-4" },
        { type: "li", text: "Border radius: rounded, rounded-lg, rounded-xl, rounded-full" },
      ]},
      { title: "Shadows & Gradients", content: [
        { type: "p", text: "Shadows and gradients add depth and life to elements. Tailwind provides an organized set of ready-made shadows and powerful gradient tools." },
        { type: "li", text: "Box shadows: shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl" },
        { type: "li", text: "Gradient directions: to-r, to-l, to-t, to-b, to-br, to-tr" },
        { type: "li", text: "Multi-color gradients using via-*" },
      ]},
      { title: "Opacity & Blend Modes", content: [
        { type: "p", text: "Control transparency and color blending for advanced visual effects." },
        { type: "li", text: "Opacity: opacity-0 to opacity-100" },
        { type: "li", text: "Background blend: bg-blend-multiply, bg-blend-overlay" },
        { type: "li", text: "Mix blend: mix-blend-overlay, mix-blend-difference" },
      ]},
      { title: "Transitions & Animations", content: [
        { type: "p", text: "Animations make your interface more lively and interactive." },
        { type: "li", text: "Transitions: transition-all, transition-colors, transition-opacity, transition-shadow, transition-transform" },
        { type: "li", text: "Duration: duration-75 to duration-1000" },
        { type: "li", text: "Built-in animations: animate-spin, animate-pulse, animate-bounce, animate-ping" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Typography classes cover font size, weight, family, line height, and spacing" },
        { type: "li", text: "Over 50 colors with 11 shades and opacity modifiers" },
        { type: "li", text: "Gradients, shadows, and blend modes add visual depth" },
        { type: "li", text: "Transitions and animations create smooth interactions" },
      ]}
    ],
    quiz: [
      { question: "How do you set a background color with 50% opacity?", options: ["bg-blue-500 opacity-50", "bg-blue-500/50", "bg-opacity-50 blue", "transparent-blue-50"], explanation: "Use the opacity modifier syntax: bg-blue-500/50 sets the blue-500 color at 50% opacity." },
      { question: "Which class creates a gradient from left to right?", options: ["bg-gradient-to-l", "bg-gradient-to-r", "bg-gradient-horizontal", "gradient-r"], explanation: "bg-gradient-to-r creates a linear gradient from left to right." },
      { question: "What does transition-all do?", options: ["Transitions all CSS properties smoothly", "Makes everything spin", "Enables animations", "Changes all colors"], explanation: "transition-all applies smooth transitions to all CSS property changes." }
    ],
    challenge: { title: "Create a Product Card with Effects", description: "Build a product card that uses typography hierarchy, gradient backgrounds, shadows, hover transitions, and proper color contrast." },
    cheatSheet: { title: "Typography, Colors & Effects Cheat Sheet", items: [
      { term: "text-sm / text-lg / text-xl", definition: "Font sizes" },
      { term: "font-bold / font-semibold", definition: "Font weights" },
      { term: "text-gray-700", definition: "Text color" },
      { term: "bg-blue-500", definition: "Background color" },
      { term: "bg-blue-500/75", definition: "75% opacity background" },
      { term: "rounded-lg / rounded-full", definition: "Border radius" },
      { term: "shadow-lg", definition: "Large box shadow" },
      { term: "bg-gradient-to-r", definition: "Left-to-right gradient" },
      { term: "transition-colors", definition: "Color transition" },
      { term: "animate-spin", definition: "Continuous rotation" }
    ]},
    interviewQuestions: [
      { question: "How do you create reusable components with Tailwind?", answer: "Use clsx or cva for conditional class management.", difficulty: "medium" }
    ],
    tricks: [
      { title: "Use cva", description: "class-variance-authority for creating components with different variants", type: "brain" }
    ]
  },
  fr: {
    sections: [
      { title: "Typographie", content: [
        { type: "p", text: "Tailwind CSS fournit un ensemble complet d'outils pour le contrôle total de l'apparence du texte. Des tailles de police aux hauteurs de ligne et à l'espacement." },
        { type: "li", text: "Tailles de police de text-xs (0.75rem) à text-9xl (8rem)" },
        { type: "li", text: "Épaisseurs de police de font-thin (100) à font-black (900)" },
        { type: "li", text: "Familles de police : font-sans, font-serif, font-mono" },
      ]},
      { title: "Couleurs", content: [
        { type: "p", text: "Tailwind possède l'une des plus fortes collections de couleurs de tout framework CSS. Plus de 50 couleurs avec 11 nuances chacune." },
        { type: "li", text: "Couleurs d'arrière-plan : bg-white, bg-blue-500, etc." },
        { type: "li", text: "Couleurs de texte : text-gray-900, text-red-500, etc." },
        { type: "li", text: "Modificateurs d'opacité : bg-blue-500/75 pour 75% d'opacité" },
      ]},
      { title: "Arrière-plans et bordures", content: [
        { type: "p", text: "Tailwind fournit un contrôle précis sur les arrière-plans et les bordures, y compris les dégradés, le dimensionnement et les formes." },
        { type: "li", text: "Dégradés : bg-gradient-to-r from-blue-500 to-purple-500" },
        { type: "li", text: "Épaisseur de bordure : border, border-2, border-4" },
        { type: "li", text: "Rayon de bordure : rounded, rounded-lg, rounded-xl, rounded-full" },
      ]},
      { title: "Ombres et dégradés", content: [
        { type: "p", text: "Les ombres et les dégradés ajoutent de la profondeur et de la vie aux éléments." },
        { type: "li", text: "Ombres : shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl" },
        { type: "li", text: "Directions de dégradé : to-r, to-l, to-t, to-b, to-br" },
      ]},
      { title: "Opacité et modes de fusion", content: [
        { type: "p", text: "Contrôlez la transparence et le mélange de couleurs pour des effets visuels avancés." },
        { type: "li", text: "Opacité : opacity-0 à opacity-100" },
        { type: "li", text: "Fusion d'arrière-plan : bg-blend-multiply, bg-blend-overlay" },
      ]},
      { title: "Transitions et animations", content: [
        { type: "p", text: "Les animations rendent votre interface plus vivante et interactive." },
        { type: "li", text: "Transitions : transition-all, transition-colors, transition-opacity" },
        { type: "li", text: "Durée : duration-75 à duration-1000" },
        { type: "li", text: "Animations intégrées : animate-spin, animate-pulse, animate-bounce" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Les classes de typographie couvrent la taille, l'épaisseur et la famille des polices" },
        { type: "li", text: "Plus de 50 couleurs avec 11 nuances et modificateurs d'opacité" },
        { type: "li", text: "Les dégradés, ombres et modes de fusion ajoutent de la profondeur visuelle" },
      ]}
    ],
    quiz: [
      { question: "Comment définir une couleur d'arrière-plan avec 50% d'opacité ?", options: ["bg-blue-500 opacity-50", "bg-blue-500/50", "bg-opacity-50 blue", "transparent-blue-50"], explanation: "Utilisez la syntaxe de modificateur d'opacité : bg-blue-500/50." },
      { question: "Quelle classe crée un dégradé de gauche à droite ?", options: ["bg-gradient-to-l", "bg-gradient-to-r", "bg-gradient-horizontal", "gradient-r"], explanation: "bg-gradient-to-r crée un dégradé linéaire de gauche à droite." },
      { question: "Que fait transition-all ?", options: ["Transitionne toutes les propriétés CSS", "Fait tourner tout", "Active les animations", "Change toutes les couleurs"], explanation: "transition-all applique des transitions fluides à tous les changements de propriétés CSS." }
    ],
    challenge: { title: "Créer une carte produit avec effets", description: "Construisez une carte produit utilisant la hiérarchie typographique, les arrière-plans dégradés, les ombres et les transitions au survol." },
    cheatSheet: { title: "Fiche mémo Typographie, Couleurs & Effets", items: [
      { term: "text-sm / text-lg / text-xl", definition: "Tailles de police" },
      { term: "font-bold / font-semibold", definition: "Épaisseurs de police" },
      { term: "text-gray-700", definition: "Couleur de texte" },
      { term: "bg-blue-500", definition: "Couleur d'arrière-plan" },
      { term: "bg-blue-500/75", definition: "Arrière-plan à 75% d'opacité" },
      { term: "rounded-lg / rounded-full", definition: "Rayon de bordure" },
      { term: "shadow-lg", definition: "Grande ombre" },
      { term: "bg-gradient-to-r", definition: "Dégradé gauche à droite" },
      { term: "transition-colors", definition: "Transition de couleurs" },
      { term: "animate-spin", definition: "Rotation continue" }
    ]}
  },
  de: {
    sections: [
      { title: "Typografie", content: [
        { type: "p", text: "Tailwind CSS bietet ein umfassendes Werkzeugsatz für die vollständige Kontrolle über das Texterscheinungsbild." },
        { type: "li", text: "Schriftgrößen von text-xs (0.75rem) bis text-9xl (8rem)" },
        { type: "li", text: "Schriftstärken von font-thin (100) bis font-black (900)" },
        { type: "li", text: "Schriftfamilien: font-sans, font-serif, font-mono" },
      ]},
      { title: "Farben", content: [
        { type: "p", text: "Tailwind hat eine der stärksten Farbsammlungen jedes CSS-Frameworks. Über 50 Farben mit 11 Schattierungen." },
        { type: "li", text: "Hintergrundfarben: bg-white, bg-blue-500, usw." },
        { type: "li", text: "Textfarben: text-gray-900, text-red-500, usw." },
        { type: "li", text: "Opazitätsmodifikatoren: bg-blue-500/75 für 75% Opazität" },
      ]},
      { title: "Hintergründe & Ränder", content: [
        { type: "p", text: "Tailwind bietet präzise Kontrolle über Hintergründe und Ränder, einschließlich Verläufen und Formen." },
        { type: "li", text: "Verläufe: bg-gradient-to-r from-blue-500 to-purple-500" },
        { type: "li", text: "Randbreite: border, border-2, border-4" },
        { type: "li", text: "Randradius: rounded, rounded-lg, rounded-xl, rounded-full" },
      ]},
      { title: "Schatten & Verläufe", content: [
        { type: "p", text: "Schatten und Verläufe fügen Elementen Tiefe und Leben hinzu." },
        { type: "li", text: "Box-Schatten: shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl" },
        { type: "li", text: "Verlaufsrichtungen: to-r, to-l, to-t, to-b, to-br" },
      ]},
      { title: "Opazität & Mischmodi", content: [
        { type: "p", text: "Kontrollieren Sie Transparenz und Farbmischung für fortgeschrittene visuelle Effekte." },
        { type: "li", text: "Opazität: opacity-0 bis opacity-100" },
        { type: "li", text: "Hintergrundmischung: bg-blend-multiply, bg-blend-overlay" },
      ]},
      { title: "Übergänge & Animationen", content: [
        { type: "p", text: "Animationen machen Ihre Schnittstelle lebendiger und interaktiver." },
        { type: "li", text: "Übergänge: transition-all, transition-colors, transition-opacity" },
        { type: "li", text: "Dauer: duration-75 bis duration-1000" },
        { type: "li", text: "Eingebaute Animationen: animate-spin, animate-pulse, animate-bounce" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Typografieklassen decken Schriftgröße, Stärke und Familie ab" },
        { type: "li", text: "Über 50 Farben mit 11 Schattierungen und Opazitätsmodifikatoren" },
        { type: "li", text: "Verläufe, Schatten und Mischmodi fügen visuelle Tiefe hinzu" },
      ]}
    ],
    quiz: [
      { question: "Wie setzt man eine Hintergrundfarbe mit 50% Opazität?", options: ["bg-blue-500 opacity-50", "bg-blue-500/50", "bg-opacity-50 blue", "transparent-blue-50"], explanation: "Verwenden Sie die Opazitätsmodifikator-Syntax: bg-blue-500/50." },
      { question: "Welche Klasse erzeugt einen Verlauf von links nach rechts?", options: ["bg-gradient-to-l", "bg-gradient-to-r", "bg-gradient-horizontal", "gradient-r"], explanation: "bg-gradient-to-r erzeugt einen linearen Verlauf von links nach rechts." },
      { question: "Was macht transition-all?", options: ["Übergänge aller CSS-Eigenschaften", "Lässt alles rotieren", "Aktiviert Animationen", "Ändert alle Farben"], explanation: "transition-all wendet sanfte Übergänge auf alle CSS-Eigenschaftsänderungen an." }
    ],
    challenge: { title: "Produktkarte mit Effekten erstellen", description: "Erstellen Sie eine Produktkarte mit Typografiehierarchie, Verlaufshintergründen, Schatten und Hover-Übergängen." },
    cheatSheet: { title: "Typografie, Farben & Effekte Spickzettel", items: [
      { term: "text-sm / text-lg / text-xl", definition: "Schriftgrößen" },
      { term: "font-bold / font-semibold", definition: "Schriftstärken" },
      { term: "text-gray-700", definition: "Textfarbe" },
      { term: "bg-blue-500", definition: "Hintergrundfarbe" },
      { term: "bg-blue-500/75", definition: "75% Opazität Hintergrund" },
      { term: "rounded-lg / rounded-full", definition: "Randradius" },
      { term: "shadow-lg", definition: "Großer Box-Schatten" },
      { term: "bg-gradient-to-r", definition: "Links-nach-rechts-Verlauf" },
      { term: "transition-colors", definition: "Farbübergang" },
      { term: "animate-spin", definition: "Kontinuierliche Drehung" }
    ]}
  }
};
export default translations;
