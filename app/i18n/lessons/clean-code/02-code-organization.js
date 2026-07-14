const translations = {
  ar: {
    sections: [
      { title: "لماذا تنظيم الكود مهم؟", content: [
        { type: "p", text: "الكود الذي تكتبه اليوم سيكون غير مقروء بعد شهر، ولن تفهمه إذا لم تنظمه بشكل صحيح. <strong>تنظيم الكود</strong> ليس مجرد ترتيب أنيق - إنه ضرورة للصيانة والعمل الجماعي." },
        { type: "callout", title: "تخيل هذا:", text: "إذا كان لديك غرفة مليئة بالأدوات مبعثرة على الأرض، يستغرق وقتاً طويلاً للعثور على ما تحتاجه. لكن إذا كان كل صندوق به ملصق وكل شيء في مكانه، ستجد ما تريد في ثوانٍ. الكود تماماً هكذا." },
        { type: "p", text: "في هذا الدرس ستتعلم خمسة مبادئ أساسية لتنظيم الكود تجعله أسهل للقراءة والصيانة والعمل عليه كفريق." },
      ]},
      { title: "المسؤولية الفردية", content: [
        { type: "p", text: "<strong>مبدأ المسؤولية الفردية (SRP)</strong> يعني أن كل وحدة في كودك - سواء كانت دالة أو ملف أو مكون - يجب أن يكون لها <strong>مسؤولية واحدة فقط</strong> وتؤديها بشكل ممتاز." },
      ]},
      { title: "ترتيب الاستيراد", content: [
        { type: "p", text: "ترتيب الاستيراد ي่วย في العثور على الملفات بسرعة وتجنب الأخطاء. المبادئ الأساسية: استورد المكتبات الخارجية أولاً، ثم المكونات المحلية، ثم الأدوات المساعدة." },
      ]},
      { title: "تنظيم الملفات", content: [
        { type: "p", text: "الطريقة التي تorganize بها ملفاتك تؤثر بشكل كبير على سهولة العثور على الأشياء وفهم الكود. استخدم تصدير الأسطوانة (barrel exports) وorganize حسب الميزات." },
      ]},
      { title: "مبدأ أقل معرفة", content: [
        { type: "p", text: "لا تصل الكائنات ببعضها البعض أكثر مما هو ضروري. تجنب سلاسل الطرق الطويلة لأنها تجعل الكود صعباً للفهم والصيانة." },
      ]},
      { title: "تجميع الكود المترابط", content: [
        { type: "p", text: "اجمع الدوال المتشابهة معاً وتجنب تكرار الكود. اتبع مبدأ DRY (لا تكرر نفسك)." },
      ]},
    ],
    quiz: [
      { question: "أي من المبادئ التالية يعني أن كل دالة يجب أن تفعل شيئاً واحداً فقط؟", options: ["KISS", "DRY", "المسؤولية الفردية", "المعرفة الأدنى"], explanation: "مبدأ المسؤولية الفردية (SRP) يعني أن كل وحدة في الكود يجب أن يكون لها مسؤولية واحدة فقط." },
    ],
    challenge: { title: "تحدي: رتّب الكود التالي", description: "أعد تنظيم الكود التالي باستخدام مبادئ تنظيم الكود الخمسة." },
    cheatSheet: { title: "ملخص تنظيم الكود", columns: [
      { heading: "المبادئ الأساسية:", items: [
        "1. المسؤولية الفردية (SRP) - كل دالة تفعل شيئاً واحداً",
        "2. ترتيب الاستيراد - المكتبات الخارجية ← المكونات المحلية ← الأدوات المساعدة",
        "3. تنظيم الملفات - استخدم تصدير الأسطوانة، organize حسب الميزات",
        "4. مبدأ أقل معرفة - لا تسلسل طرق طويل",
        "5. تجميع الكود المترابط - اجمع الدوال المتشابهة، لا تكرر (DRY)",
      ]},
      { heading: "القاعدة الذهبية:", items: [
        "الكود الجيد هو الكود الذي يمكن لشخص آخر قراءته وفهمه في أقصر وقت ممكن.",
      ]},
    ]}
  },
  en: {
    sections: [
      { title: "Why is code organization important?", content: [
        { type: "p", text: "The code you write today will be unreadable in a month, and you won't understand it if you don't organize it properly. <strong>Code organization</strong> is not just neat arrangement - it's a necessity for maintainability and team collaboration." },
        { type: "callout", title: "Imagine this:", text: "If you have a room full of tools scattered on the floor, it takes a long time to find what you need. But if every box has a label and everything is in its place, you'll find what you want in seconds. Code is exactly like that." },
        { type: "p", text: "In this lesson you will learn five basic principles for organizing code that make it easier to read, maintain, and work on as a team." },
      ]},
      { title: "Single Responsibility", content: [
        { type: "p", text: "The <strong>Single Responsibility Principle (SRP)</strong> means that every unit in your code - whether it's a function, file, or component - should have <strong>only one responsibility</strong> and do it excellently." },
        { type: "p", text: "If you find yourself writing a function that does more than one thing, you may need to split it. The simple rule:" },
        { type: "callout-accent", title: "Rule", text: "The function name should start with one verb: getUser, calculateTotal, sendEmail" },
        { type: "callout-accent", title: "Benefits:", text: "Easier to test, easier to reuse, easier to understand, easier to debug." },
      ]},
      { title: "Import Ordering", content: [
        { type: "p", text: "<strong>Import ordering</strong> at the top of the file is not just aesthetics - it makes it easier for other developers to understand what your file depends on quickly. The accepted way is to order them in three groups:" },
        { type: "callout-primary", title: "Correct import order:", text: "1. External libraries (React, Next.js, any library from node_modules) → 2. Internal components and files (your project files) → 3. Utilities and constants (Constants, utils, types)" },
      ]},
      { title: "File and Folder Structure", content: [
        { type: "p", text: "<strong>File organization</strong> means putting every file in the right place inside the project. The golden rule: <strong>everything related to each other goes in the same folder</strong>." },
        { type: "p", text: "The concept of <strong>Barrel Exports</strong> means using an <code>index.js</code> file in each folder to export everything from that folder in one place." },
      ]},
      { title: "Principle of Least Knowledge", content: [
        { type: "p", text: "The <strong>Principle of Least Knowledge (Law of Demeter)</strong> means that an object should only know about its direct neighbors. In other words: no long method chaining." },
        { type: "callout", title: "Why is this important?", text: "If you change the structure of getAddress() or getCity(), all functions with method chaining will break. But if each function only knows its direct neighbor, changes are local and safe." },
      ]},
      { title: "Grouping Related Code", content: [
        { type: "p", text: "<strong>Grouping related code</strong> means putting similar functions and code in one place. Don't scatter helper functions in different places in the project." },
        { type: "p", text: "The principle is: <strong>Don't Repeat Yourself (DRY)</strong>. If you find yourself copying code from place to place, make it a function in one place and use it from there." },
      ]},
    ],
    quiz: [
      { question: "If a function `processOrder` does order validation + saving to database + sending an email, how do you split it according to the Single Responsibility Principle?", options: ["Leave the function as is because it does everything related to the order", "Split it into three functions: validateOrder, saveOrder, and sendOrderConfirmation", "Make three copies of the function in different places", "Delete the function because it's too complex"], explanation: "According to the Single Responsibility Principle, each function should do one thing only. We split it into: validateOrder for validation, saveOrder for saving, sendOrderConfirmation for email. Then we write a processOrder function that calls all three." },
    ],
    challenge: { title: "Restructure the following function", description: "You have the following function written in an unorganized way. Restructure it according to the organization principles you learned." },
    cheatSheet: { title: "Code Organization Cheat Sheet", columns: [
      { heading: "Core principles:", items: [
        "1. Single Responsibility (SRP) - Each function does one thing",
        "2. Import Ordering - External libraries → Internal components → Utilities",
        "3. File Organization - Use barrel exports, organize by features",
        "4. Principle of Least Knowledge - No long method chaining",
        "5. Grouping Related Code - Collect similar functions, don't repeat (DRY)",
      ]},
      { heading: "Golden rule:", items: [
        "Good code is code that another person can read and understand in the shortest time possible.",
      ]},
    ]}
  },
  fr: {
    sections: [
      { title: "Pourquoi l'organisation du code est importante ?", content: [
        { type: "p", text: "Le code que vous écrivez aujourd'hui sera illisible dans un mois, et vous ne le comprendrez pas si vous ne l'organisez pas correctement. <strong>L'organisation du code</strong> n'est pas seulement un arrangement soigné - c'est une nécessité pour la maintenabilité et la collaboration en équipe." },
        { type: "callout", title: "Imaginez ceci :", text: "Si vous avez une pièce pleine d'outils éparpillés sur le sol, il faut beaucoup de temps pour trouver ce dont vous avez besoin. Mais si chaque boîte a une étiquette et que tout est à sa place, vous trouverez ce que vous voulez en quelques secondes. Le code est exactement comme ça." },
        { type: "p", text: "Dans cette leçon, vous apprendrez cinq principes de base pour organiser le code qui le rendent plus facile à lire, à maintenir et à travailler en équipe." },
      ]},
      { title: "Responsabilité unique", content: [
        { type: "p", text: "Le <strong>principe de responsabilité unique (SRP)</strong> signifie que chaque unité dans votre code - qu'il s'agisse d'une fonction, d'un fichier ou d'un composant - ne devrait avoir <strong>qu'une seule responsabilité</strong> et la faire excellamment." },
        { type: "p", text: "Si vous vous retrouvez à écrire une fonction qui fait plus d'une chose, vous devrez peut-être la diviser. La règle simple :" },
        { type: "callout-accent", title: "Règle", text: "Le nom de la fonction devrait commencer par un verbe : getUser, calculateTotal, sendEmail" },
        { type: "callout-accent", title: "Avantages :", text: "Plus facile à tester, plus facile à réutiliser, plus facile à comprendre, plus facile à déboguer." },
      ]},
      { title: "Ordre des imports", content: [
        { type: "p", text: "<strong>L'ordre des imports</strong> en haut du fichier n'est pas seulement esthétique - il aide les autres développeurs à comprendre rapidement ce dont votre fichier dépend. La manière acceptée est de les ordonner en trois groupes :" },
        { type: "callout-primary", title: "Ordre correct des imports :", text: "1. Bibliothèques externes (React, Next.js, toute bibliothèque de node_modules) → 2. Composants et fichiers internes (vos fichiers de projet) → 3. Utilitaires et constantes (Constants, utils, types)" },
      ]},
      { title: "Structure des fichiers et dossiers", content: [
        { type: "p", text: "<strong>L'organisation des fichiers</strong> signifie mettre chaque fichier au bon endroit dans le projet. La règle d'or : <strong>tout ce qui est lié les uns aux autres va dans le même dossier</strong>." },
        { type: "p", text: "Le concept de <strong>Barrel Exports</strong> signifie utiliser un fichier <code>index.js</code> dans chaque dossier pour exporter tout de ce dossier en un seul endroit." },
      ]},
      { title: "Principe de moindre connaissance", content: [
        { type: "p", text: "Le <strong>principe de moindre connaissance (Loi de Demeter)</strong> signifie qu'un objet ne devrait connaître que ses voisins directs. En d'autres termes : pas de chaînage de méthodes long." },
        { type: "callout", title: "Pourquoi c'est important ?", text: "Si vous changez la structure de getAddress() ou getCity(), toutes les fonctions avec chaînage de méthodes casseront. Mais si chaque fonction ne connaît que son voisin direct, les changements sont locaux et sûrs." },
      ]},
      { title: "Regrouper le code apparenté", content: [
        { type: "p", text: "<strong>Regrouper le code apparenté</strong> signifie mettre les fonctions et le code similaires en un seul endroit. Ne dispersez pas les fonctions utilitaires dans différents endroits du projet." },
        { type: "p", text: "Le principe est : <strong>Ne vous répétez pas (DRY)</strong>. Si vous vous retrouvez à copier du code d'un endroit à un autre, faites-en une fonction à un seul endroit et utilisez-la de là." },
      ]},
    ],
    quiz: [
      { question: "Si une fonction `processOrder` fait la validation de la commande + l'enregistrement en base de données + l'envoi d'un e-mail, comment la divisez-vous selon le principe de responsabilité unique ?", options: ["Laissez la fonction telle quelle parce qu'elle fait tout ce qui est lié à la commande", "Divisez-la en trois fonctions : validateOrder, saveOrder et sendOrderConfirmation", "Faites trois copies de la fonction à différents endroits", "Supprimez la fonction parce qu'elle est trop complexe"], explanation: "Selon le principe de responsabilité unique, chaque fonction ne devrait faire qu'une chose. Nous la divisons en : validateOrder pour la validation, saveOrder pour l'enregistrement, sendOrderConfirmation pour l'e-mail. Puis nous écrivons une fonction processOrder qui appelle les trois." },
    ],
    challenge: { title: "Restructurez la fonction suivante", description: "Vous avez la fonction suivante écrite de manière désorganisée. Restructurez-la selon les principes d'organisation que vous avez appris." },
    cheatSheet: { title: "Référence de l'organisation du code", columns: [
      { heading: "Principes fondamentaux :", items: [
        "1. Responsabilité unique (SRP) - Chaque fonction fait une chose",
        "2. Ordre des imports - Bibliothèques externes → Composants internes → Utilitaires",
        "3. Organisation des fichiers - Utilisez les barrel exports, organisez par fonctionnalités",
        "4. Principe de moindre connaissance - Pas de chaînage de méthodes long",
        "5. Regrouper le code apparenté - Rassemblez les fonctions similaires, ne vous répétez pas (DRY)",
      ]},
      { heading: "Règle d'or :", items: [
        "Le bon code est un code qu'une autre personne peut lire et comprendre le plus rapidement possible.",
      ]},
    ]}
  },
  de: {
    sections: [
      { title: "Warum ist Codeorganisation wichtig?", content: [
        { type: "p", text: "Der Code, den Sie heute schreiben, wird in einem Monat unlesbar sein, und Sie werden ihn nicht verstehen, wenn Sie ihn nicht richtig organisieren. <strong>Codeorganisation</strong> ist nicht nur eine ordentliche Anordnung - sie ist eine Notwendigkeit für Wartbarkeit und Teamzusammenarbeit." },
        { type: "callout", title: "Stellen Sie sich das vor:", text: "Wenn Sie einen Raum voller Werkzeuge haben, die auf dem Boden verstreut sind, brauchen Sie lange Zeit, um zu finden, was Sie brauchen. Aber wenn jede Box ein Etikett hat und alles an seinem Platz ist, finden Sie in Sekunden, was Sie wollen. Code ist genau so." },
        { type: "p", text: "In dieser Lektion lernen Sie fünf grundlegende Prinzipien zur Codeorganisation, die es einfacher machen, Code zu lesen, zu warten und im Team zu arbeiten." },
      ]},
      { title: "Verantwortliche Einzelheit", content: [
        { type: "p", text: "Das <strong>Prinzip der Verantwortlichen Einzelheit (SRP)</strong> bedeutet, dass jede Einheit in Ihrem Code - ob Funktion, Datei oder Komponente - <strong>nur eine Verantwortung</strong> haben und diese exzellent ausführen sollte." },
        { type: "p", text: "Wenn Sie feststellen, dass Sie eine Funktion schreiben, die mehr als eine Sache tut, müssen Sie sie möglicherweise aufteilen. Die einfache Regel:" },
        { type: "callout-accent", title: "Regel", text: "Der Funktionsname sollte mit einem Verb beginnen: getUser, calculateTotal, sendEmail" },
        { type: "callout-accent", title: "Vorteile:", text: "Leichter zu testen, leichter wiederzuverwenden, leichter zu verstehen, leichter zu debuggen." },
      ]},
      { title: "Import-Reihenfolge", content: [
        { type: "p", text: "Die <strong>Import-Reihenfolge</strong> oben in der Datei ist nicht nur Ästhetik - sie macht es anderen Entwicklern leichter, schnell zu verstehen, wovon Ihre Datei abhängt. Die akzeptierte Methode ist, sie in drei Gruppen zu ordnen:" },
        { type: "callout-primary", title: "Korrekte Import-Reihenfolge:", text: "1. Externe Bibliotheken (React, Next.js, jede Bibliothek aus node_modules) → 2. Interne Komponenten und Dateien (Ihre Projektdateien) → 3. Hilfsprogramme und Konstanten (Constants, utils, types)" },
      ]},
      { title: "Datei- und Ordnerstruktur", content: [
        { type: "p", text: "<strong>Dateiorganisation</strong> bedeutet, jede Datei an den richtigen Ort im Projekt zu legen. Die goldene Regel: <strong>Alles, was zusammengehört, kommt in denselben Ordner</strong>." },
        { type: "p", text: "Das Konzept der <strong>Barrel Exports</strong> bedeutet die Verwendung einer <code>index.js</code>-Datei in jedem Ordner, um alles aus diesem Ordner an einem Ort zu exportieren." },
      ]},
      { title: "Prinzip des geringsten Wissens", content: [
        { type: "p", text: "Das <strong>Prinzip des geringsten Wissens (Gesetz von Demeter)</strong> bedeutet, dass ein Objekt nur seine direkten Nachbarn kennen sollte. Mit anderen Worten: keine lange Methodenverkettung." },
        { type: "callout", title: "Warum ist das wichtig?", text: "Wenn Sie die Struktur von getAddress() oder getCity() ändern, brechen alle Funktionen mit Methodenverkettung. Aber wenn jede Funktion nur ihren direkten Nachbarn kennt, sind Änderungen lokal und sicher." },
      ]},
      { title: "Zusammenhängenden Code gruppieren", content: [
        { type: "p", text: "<strong>Zusammenhängenden Code gruppieren</strong> bedeutet, ähnliche Funktionen und Code an einem Ort zu platzieren. Verstreuen Sie keine Hilfsfunktionen an verschiedenen Stellen im Projekt." },
        { type: "p", text: "Das Prinzip lautet: <strong>Wiederholen Sie sich nicht (DRY)</strong>. Wenn Sie feststellen, dass Sie Code von Ort zu Ort kopieren, machen Sie ihn zu einer Funktion an einem Ort und verwenden Sie ihn von dort." },
      ]},
    ],
    quiz: [
      { question: "Wenn eine Funktion `processOrder` Auftragsvalidierung + Speichern in der Datenbank + Senden einer E-Mail macht, wie teilen Sie sie nach dem Prinzip der Verantwortlichen Einzelheit?", options: ["Lassen Sie die Funktion wie sie ist, weil sie alles mit der Bestellung zu tun hat", "Teilen Sie sie in drei Funktionen: validateOrder, saveOrder und sendOrderConfirmation", "Machen Sie drei Kopien der Funktion an verschiedenen Orten", "Löschen Sie die Funktion, weil sie zu komplex ist"], explanation: "Nach dem Prinzip der Verantwortlichen Einzelheit sollte jede Funktion nur eine Sache tun. Wir teilen sie in: validateOrder für die Validierung, saveOrder für das Speichern, sendOrderConfirmation für die E-Mail. Dann schreiben wir eine processOrder-Funktion, die alle drei aufruft." },
    ],
    challenge: { title: "Restrukturieren Sie die folgende Funktion", description: "Sie haben die folgende Funktion, die unorganisiert geschrieben wurde. Restrukturieren Sie sie nach den Organisationsprinzipien, die Sie gelernt haben." },
    cheatSheet: { title: "Übersicht über die Codeorganisation", columns: [
      { heading: "Grundprinzipien:", items: [
        "1. Verantwortliche Einzelheit (SRP) - Jede Funktion tut eine Sache",
        "2. Import-Reihenfolge - Externe Bibliotheken → Interne Komponenten → Hilfsprogramme",
        "3. Dateiorganisation - Verwenden Sie Barrel Exports, organisieren Sie nach Funktionen",
        "4. Prinzip des geringsten Wissens - Keine lange Methodenverkettung",
        "5. Zusammenhängenden Code gruppieren - Ähnliche Funktionen sammeln, nicht wiederholen (DRY)",
      ]},
      { heading: "Goldene Regel:", items: [
        "Guter Code ist Code, den eine andere Person in kürzester Zeit lesen und verstehen kann.",
      ]},
    ]}
  },
};

export default translations;
