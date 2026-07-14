const translations = {
  ar: {
    sections: [
      { title: "مقدمة في تصميم قاعدة البيانات", content: [
        { type: "p", text: "الآن نحتاج إلى تصميم قاعدة البيانات التي ستخزن جميع بيانات المدونة. تصميم قاعدة البيانات هو أساس أي تطبيق يعتمد على البيانات." },
        { type: "p", text: "تصميم قاعدة البيانات الجيد يجعل التطبيق أسرع وأمان وأسهل في الصيانة." },
        { type: "callout", title: "الفوائد الرئيسية", text: "جداول منظمة جيدًا، علاقات واضحة بين البيانات، وصول آمن عبر RLS، استعلامات محسّنة." }
      ]},
      { title: "الجداول المطلوبة", content: [
        { type: "p", text: "بناءً على متطلبات مدونتنا، نحتاج إلى 4 جداول رئيسية:" },
        { type: "li", text: "<strong>profiles:</strong> ملفات تعريف المستخدمين المرتبطة بمصادقة Clerk" },
        { type: "li", text: "<strong>categories:</strong> تصنيفات المقالات مثل التكنولوجيا والتصميم والتطوير" },
        { type: "li", text: "<strong>posts:</strong> مقالات المدونة مع العنوان والمحتوى والمؤلف والتصنيف" },
        { type: "li", text: "<strong>comments:</strong> تعليقات المستخدمين على المقالات" }
      ]},
      { title: "إنشاء جدول profiles", content: [
        { type: "p", text: "يخزن جدول profiles معلومات المستخدم الإضافية além مما توفره Clerk. إنه مرتبط بجدول auth.users." },
        { type: "callout", title: "المفاهيم الرئيسية", text: "id UUID PRIMARY KEY مرتبط بـ auth.users، REFERENCES ينشئ مفتاحًا أجنبيًا، ON DELETE CASCADE يحذف الملف عند حذف المستخدم." }
      ]},
      { title: "إنشاء جدول categories", content: [
        { type: "p", text: "ينظم جدول categories المقالات إلى مجموعات بأسماء فريدة وروابط مناسبة للعناوين." },
        { type: "callout", title: "الحقول المهمة", text: "name TEXT NOT NULL UNIQUE يضمن أسماء فريدة، slug يُستخدم في العناوين، color يساعد في التمييز البصري." }
      ]},
      { title: "إنشاء جدول posts", content: [
        { type: "p", text: "جدول posts هو جوهر مدونتنا ويخزن المقالات مع المحتوى والمؤلف والتصنيف وحالة النشر." },
        { type: "callout", title: "العلاقات المهمة", text: "author_id مرتبط بـ profiles، category_id مرتبط بـ categories مع ON DELETE SET NULL، status يمكن أن يكون draft أو published." }
      ]},
      { title: "إنشاء جدول comments", content: [
        { type: "p", text: "يخزن جدول comments تعليقات المستخدمين على المقالات مع دعم التعليقات المتداخلة." },
        { type: "callout", title: "التعليقات المتداخلة", text: "عمود parent_id يتيح التعليقات المتداخلة. null يعني تعليق في المستوى الأول، وإلا يشير إلى id تعليق آخر." }
      ]},
      { title: "علاقات البيانات", content: [
        { type: "p", text: "تحدد العلاقات كيفية اتصال الجداول ببعضها البعض." },
        { type: "li", text: "<strong>واحد إلى متعدد:</strong> مستخدم واحد يمكنه كتابة عدة مقالات" },
        { type: "li", text: "<strong>متعدد إلى واحد:</strong> عدة مقالات يمكن أن تنتمي إلى تصنيف واحد" },
        { type: "li", text: "<strong>إحالة ذاتية:</strong> التعليقات يمكن أن ترد على تعليقات أخرى" },
        { type: "callout", title: "سلوك ON DELETE", text: "CASCADE يحذف السجلات المرتبطة، SET NULL يضع المفتاح الأجنبي على null، RESTRICT يمنع الحذف إذا وجدت سجلات مرتبطة." }
      ]},
      { title: "سياسات أمان RLS", content: [
        { type: "p", text: "يضمن أمان مستوى الصفوف أن المستخدمين يمكنهم فقط الوصول إلى البيانات المصرح لهم برؤيتها." },
        { type: "callout", title: "قواعد RLS الرئيسية", text: "الجميع يمكنهم رؤية المقالات المنشورة، المستخدمون المصادق عليهم يمكنهم إنشاء المقالات، المؤلفون لا يمكنهم تعديل/حذف مقالاتهم فقط." }
      ]},
      { title: "عروض قاعدة البيانات", content: [
        { type: "p", text: "العروض هي جداول افتراضية تجمع البيانات من جداول متعددة، مما يبسط الاستعلامات المعقدة." },
        { type: "callout", title: "فوائد العروض", text: "تبسط استعلامات JOIN، تحسين الأداء، توفر API نظيفة للواجهة الأمامية." }
      ]}
    ],
    quiz: [
      { question: "ماذا يحدث مع ON DELETE SET NULL لـ category_id في posts عند حذف تصنيف؟",
        options: ["تُحذف جميع المقالات", "يُوضع category_id على NULL", "يُمنع الحذف", "يتم إلقاء خطأ"],
        correctAnswer: 1, explanation: "يضع ON DELETE SET NULL category_id في المقالات المرتبطة على NULL بدلاً من حذف المقالات." }
    ],
    challenge: { title: "تحدي: تصميم جدول likes",
      description: "صمم جدول likes مع id، post_id، user_id، created_at. أضف قيد UNIQUE على (post_id، user_id) وفعّل RLS." },
    cheatSheet: { title: "مرجع تصميم قاعدة البيانات السريع", items: [
      { title: "الجداول الأساسية", content: "profiles, categories, posts, comments" },
      { title: "أنواع العلاقات", content: "واحد إلى متعدد وإحالة ذاتية" },
      { title: "خيارات ON DELETE", content: "CASCADE, SET NULL, RESTRICT" },
      { title: "الأمان", content: "فعّل RLS على جميع الجداول" }
    ]}
  },
  en: {
    sections: [
      { title: "Introduction to Database Design", content: [
        { type: "p", text: "Now we need to design the database that will store all blog data. Database design is the foundation of any application that relies on data." },
        { type: "p", text: "A good database design makes the application faster, more secure, and easier to maintain." },
        { type: "callout", title: "Key Benefits", text: "Well-structured tables, clear relationships between data, secure access via RLS, optimized queries." }
      ]},
      { title: "Required Tables", content: [
        { type: "p", text: "Based on our blog requirements, we need 4 main tables:" },
        { type: "li", text: "<strong>profiles:</strong> User profiles linked to Clerk authentication" },
        { type: "li", text: "<strong>categories:</strong> Article categories like Technology, Design, Development" },
        { type: "li", text: "<strong>posts:</strong> Blog articles with title, content, author, and category" },
        { type: "li", text: "<strong>comments:</strong> User comments on articles" }
      ]},
      { title: "Creating the profiles Table", content: [
        { type: "p", text: "The profiles table stores additional user information beyond what Clerk provides. It links to the auth.users table." },
        { type: "callout", title: "Key Concepts", text: "id UUID PRIMARY KEY links to auth.users, REFERENCES creates a foreign key, ON DELETE CASCADE deletes profile when user is deleted." }
      ]},
      { title: "Creating the categories Table", content: [
        { type: "p", text: "The categories table organizes articles into groups with unique names and URL-friendly slugs." },
        { type: "callout", title: "Important Fields", text: "name TEXT NOT NULL UNIQUE ensures unique category names, slug is used in URLs, color helps visually distinguish categories." }
      ]},
      { title: "Creating the posts Table", content: [
        { type: "p", text: "The posts table is the core of our blog storing articles with content, author, category, and publication status." },
        { type: "callout", title: "Important Relationships", text: "author_id links to profiles, category_id links to categories with ON DELETE SET NULL, status can be draft or published." }
      ]},
      { title: "Creating the comments Table", content: [
        { type: "p", text: "The comments table stores user comments on articles with support for nested comments." },
        { type: "callout", title: "Nested Comments", text: "The parent_id column enables nested comments. Null means top-level comment, otherwise it references another comment's id." }
      ]},
      { title: "Data Relationships", content: [
        { type: "p", text: "Relationships define how tables connect to each other." },
        { type: "li", text: "<strong>One-to-Many:</strong> One user can write many posts" },
        { type: "li", text: "<strong>Many-to-One:</strong> Many posts can belong to one category" },
        { type: "li", text: "<strong>Self-Referencing:</strong> Comments can reply to other comments" },
        { type: "callout", title: "ON DELETE Behavior", text: "CASCADE deletes related records, SET NULL sets foreign key to null, RESTRICT prevents deletion if related records exist." }
      ]},
      { title: "RLS Security Policies", content: [
        { type: "p", text: "Row Level Security ensures users can only access data they are authorized to see." },
        { type: "callout", title: "Key RLS Rules", text: "Everyone can view published posts, authenticated users can create posts, authors can only edit/delete their own posts." }
      ]},
      { title: "Database Views", content: [
        { type: "p", text: "Views are virtual tables that combine data from multiple tables, simplifying complex queries." },
        { type: "callout", title: "Benefits of Views", text: "Simplify JOIN queries, improve performance, provide a clean API for the frontend." }
      ]}
    ],
    quiz: [
      { question: "What happens with ON DELETE SET NULL for category_id in posts when a category is deleted?",
        options: ["All posts are deleted", "category_id is set to NULL", "Deletion is prevented", "An error is thrown"],
        correctAnswer: 1, explanation: "ON DELETE SET NULL sets the category_id in related posts to NULL instead of deleting the posts." }
    ],
    challenge: { title: "Challenge: Design a likes Table",
      description: "Design a likes table with id, post_id, user_id, created_at. Add UNIQUE constraint on (post_id, user_id) and enable RLS." },
    cheatSheet: { title: "Quick Database Design Reference", items: [
      { title: "Core Tables", content: "profiles, categories, posts, comments" },
      { title: "Relationship Types", content: "One-to-Many and Self-Referencing" },
      { title: "ON DELETE Options", content: "CASCADE, SET NULL, RESTRICT" },
      { title: "Security", content: "Enable RLS on all tables" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a la conception de base de donnees", content: [
        { type: "p", text: "Nous devons concevoir la base de donnees qui stockera toutes les donnees du blog. La conception de base de donnees est le fondement de toute application." },
        { type: "p", text: "Une bonne conception rend l'application plus rapide, plus sure et plus facile a maintenir." },
        { type: "callout", title: "Avantages cles", text: "Tables bien structurees, relations claires, acces securise via RLS, requetes optimisees." }
      ]},
      { title: "Tables requises", content: [
        { type: "p", text: "Selon les exigences, nous avons besoin de 4 tables principales :" },
        { type: "li", text: "<strong>profiles :</strong> Profils utilisateurs lies a Clerk" },
        { type: "li", text: "<strong>categories :</strong> Categories d'articles" },
        { type: "li", text: "<strong>posts :</strong> Articles de blog" },
        { type: "li", text: "<strong>comments :</strong> Commentaires utilisateurs" }
      ]},
      { title: "Creation de la table profiles", content: [
        { type: "p", text: "La table profiles stocke les informations supplementaires des utilisateurs." },
        { type: "callout", title: "Concepts cles", text: "id UUID PRIMARY KEY lie a auth.users, ON DELETE CASCADE supprime le profil quand l'utilisateur est supprime." }
      ]},
      { title: "Creation de la table categories", content: [
        { type: "p", text: "La table categories organise les articles en groupes avec des noms uniques." },
        { type: "callout", title: "Champs importants", text: "name NOT NULL UNIQUE garantit des noms uniques, slug utilise dans les URLs." }
      ]},
      { title: "Creation de la table posts", content: [
        { type: "p", text: "La table posts est le coeur du blog avec titre, contenu, auteur et statut." },
        { type: "callout", title: "Relations importantes", text: "author_id lie a profiles, category_id lie a categories avec SET NULL." }
      ]},
      { title: "Creation de la table comments", content: [
        { type: "p", text: "La table comments stocke les commentaires avec support pour commentaires imbriques." },
        { type: "callout", title: "Commentaires imbriques", text: "parent_id permet les commentaires imbriques. Null = commentaire de premier niveau." }
      ]},
      { title: "Relations de donnees", content: [
        { type: "p", text: "Les relations definissent comment les tables sont connectees." },
        { type: "li", text: "<strong>Un-a-Plusieurs :</strong> Un utilisateur peut ecrire plusieurs articles" },
        { type: "li", text: "<strong>Plusieurs-a-Un :</strong> Plusieurs articles dans une categorie" },
        { type: "li", text: "<strong>Auto-reference :</strong> Les commentaires repondent a d'autres commentaires" },
        { type: "callout", title: "Comportement ON DELETE", text: "CASCADE supprime, SET NULL met a null, RESTRICT empêche la suppression." }
      ]},
      { title: "Politiques de securite RLS", content: [
        { type: "p", text: "RLS garantit que les utilisateurs n'accedent qu'aux donnees autorisees." },
        { type: "callout", title: "Regles RLS", text: "Articles publies visibles par tous, auteurs ne modifient que leurs propres articles." }
      ]},
      { title: "Vues de base de donnees", content: [
        { type: "p", text: "Les vues combinent les donnees de plusieurs tables, simplifiant les requetes complexes." },
        { type: "callout", title: "Avantages des vues", text: "Simplifient les JOIN, ameliorent les performances, API propre pour le frontend." }
      ]}
    ],
    quiz: [
      { question: "Que se passe-t-il avec ON DELETE SET NULL quand une categorie est supprimee ?",
        options: ["Tous les posts sont supprimes", "category_id est mis a NULL", "La suppression est empechee", "Une erreur est lancee"],
        correctAnswer: 1, explanation: "ON DELETE SET NULL definit category_id a NULL au lieu de supprimer les articles." }
    ],
    challenge: { title: "Defi : Concevoir une table likes",
      description: "Concevez une table likes avec id, post_id, user_id, created_at. Ajoutez une contrainte UNIQUE sur (post_id, user_id) et activez RLS." },
    cheatSheet: { title: "Reference rapide de conception", items: [
      { title: "Tables principales", content: "profiles, categories, posts, comments" },
      { title: "Types de relations", content: "Un-a-Plusieurs et Auto-reference" },
      { title: "Options ON DELETE", content: "CASCADE, SET NULL, RESTRICT" },
      { title: "Securite", content: "Activez RLS sur toutes les tables" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in das Datenbankdesign", content: [
        { type: "p", text: "Wir mussen die Datenbank entwerfen, die alle Blog-Daten speichert. Das Datenbankdesign ist die Grundlage jeder anwendungsbezogenen Anwendung." },
        { type: "p", text: "Ein gutes Datenbankdesign macht die Anwendung schneller, sicherer und wartbarer." },
        { type: "callout", title: "Hauptvorteile", text: "Gut strukturierte Tabellen, klare Beziehungen, sicherer Zugriff uber RLS, optimierte Abfragen." }
      ]},
      { title: "Erforderliche Tabellen", content: [
        { type: "p", text: "Basierend auf den Blog-Anforderungen benotigen wir 4 Haupttabellen:" },
        { type: "li", text: "<strong>profiles:</strong> Benutzerprofile verknupft mit Clerk-Authentifizierung" },
        { type: "li", text: "<strong>categories:</strong> Artikellategorien wie Technologie, Design, Entwicklung" },
        { type: "li", text: "<strong>posts:</strong> Blog-Artikel mit Titel, Inhalt, Autor und Kategorie" },
        { type: "li", text: "<strong>comments:</strong> Benutzerkommentare zu Artikeln" }
      ]},
      { title: "Erstellen der profiles-Tabelle", content: [
        { type: "p", text: "Die profiles-Tabelle speichert zusatzliche Benutzerinformationen und ist mit auth.users verknupft." },
        { type: "callout", title: "Schlusselkonzepte", text: "id UUID PRIMARY KEY verknupft mit auth.users, ON DELETE CASCADE loscht Profil wenn Benutzer geloscht wird." }
      ]},
      { title: "Erstellen der categories-Tabelle", content: [
        { type: "p", text: "Die categories-Tabelle organisiert Artikel in Gruppen mit eindeutigen Namen und URL-freundlichen Slugs." },
        { type: "callout", title: "Wichtige Felder", text: "name NOT NULL UNIQUE garantiert eindeutige Namen, slug wird in URLs verwendet." }
      ]},
      { title: "Erstellen der posts-Tabelle", content: [
        { type: "p", text: "Die posts-Tabelle ist das Herz des Blogs mit Titel, Inhalt, Autor und Veroffentlichungsstatus." },
        { type: "callout", title: "Wichtige Beziehungen", text: "author_id verknupft mit profiles, category_id verknupft mit categories mit ON DELETE SET NULL." }
      ]},
      { title: "Erstellen der comments-Tabelle", content: [
        { type: "p", text: "Die comments-Tabelle speichert Benutzerkommentare mit verschachtelten Kommentaren." },
        { type: "callout", title: "Verschachtelte Kommentare", text: "parent_id ermoglicht verschachtelte Kommentare. Null bedeutet Kommentar erster Ebene." }
      ]},
      { title: "Datenbeziehungen", content: [
        { type: "p", text: "Beziehungen definieren, wie Tabellen miteinander verbunden sind." },
        { type: "li", text: "<strong>Eins-zu-Viele:</strong> Ein Benutzer kann viele Artikel schreiben" },
        { type: "li", text: "<strong>Viele-zu-Eins:</strong> Viele Artikel konnen zu einer Kategorie gehoren" },
        { type: "li", text: "<strong>Selbstreferenzierend:</strong> Kommentare konnen auf andere Kommentare antworten" },
        { type: "callout", title: "ON DELETE Verhalten", text: "CASCADE loscht verwandte Datensatze, SET NULL setzt Fremdschlussel auf null, RESTRICT verhindert Loschung." }
      ]},
      { title: "RLS-Sicherheitsrichtlinien", content: [
        { type: "p", text: "Row Level Security stellt sicher, dass Benutzer nur auf autorisierte Daten zugreifen konnen." },
        { type: "callout", title: "Schlussel-RLS-Regeln", text: "Veroffentlichte Artikel von allen sichtbar, Authentifizierte konnen Artikel erstellen, Autoren konnen nur eigene Artikel bearbeiten/loschen." }
      ]},
      { title: "Datenbankansichten", content: [
        { type: "p", text: "Views sind virtuelle Tabellen, die Daten aus mehreren Tabellen kombinieren." },
        { type: "callout", title: "Vorteile von Views", text: "Vereinfachen JOIN-Abfragen, verbessern die Leistung, bieten eine saubere API." }
      ]}
    ],
    quiz: [
      { question: "Was passiert mit ON DELETE SET NULL wenn eine Kategorie geloscht wird?",
        options: ["Alle Posts werden geloscht", "category_id wird auf NULL gesetzt", "Loschung wird verhindert", "Ein Fehler wird ausgelost"],
        correctAnswer: 1, explanation: "ON DELETE SET NULL setzt category_id in verwandten Posts auf NULL statt die Posts selbst zu loschen." }
    ],
    challenge: { title: "Herausforderung: Eine likes-Tabelle entwerfen",
      description: "Entwerfen Sie eine likes-Tabelle mit id, post_id, user_id, created_at. Fugen Sie eine UNIQUE-Einschrankung auf (post_id, user_id) hinzu und aktivieren Sie RLS." },
    cheatSheet: { title: "Schnelle Datenbankdesign-Referenz", items: [
      { title: "Kerntabellen", content: "profiles, categories, posts, comments" },
      { title: "Beziehungstypen", content: "Eins-zu-Viele und Selbstreferenzierend" },
      { title: "ON DELETE-Optionen", content: "CASCADE, SET NULL, RESTRICT" },
      { title: "Sicherheit", content: "RLS auf allen Tabellen aktivieren" }
    ]}
  }
};
export default translations;
