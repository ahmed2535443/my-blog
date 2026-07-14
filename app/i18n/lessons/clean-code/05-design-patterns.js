const translations = {
  ar: {
    sections: [
      { title: "مقدمة في أنماط التصميم", content: [
        { type: "p", text: "أنماط التصميم هي حلول موثقة ومجربة للمشاكل الشائعة في تصميم البرمجيات. وهي ضرورية لكتابة كود نظيف وسهل الصيانة، توفر لغة مشتركة بين المطورين وتساعد في بناء هياكل مرنة وقابلة للتوسع." },
      ]},
      { title: "نمط Singleton", content: [
        { type: "p", text: "يضمن نمط Singleton أن يكون هناك نسخة واحدة فقط من فئة معينة في أي وقت، ويوفر نقطة وصول عامة إليها. يُستخدم عندما تحتاج إلى إدارة موارد مشتركة مثل اتصالات قاعدة البيانات أو إعدادات التطبيق." },
      ]},
      { title: "نمط Factory", content: [
        { type: "p", text: "يوفر نمط Factory طريقة لإنشاء أشياء دون تحديد الفئة الدقيقة للإنشاء. يفصل عملية الإنشاء عن الاستخدام، مما يجعل الكود أكثر مرونة وقابلية للصيانة." },
      ]},
      { title: "نمط Observer", content: [
        { type: "p", text: "ينشئ نمط Observer علاقة واحد-لكثير بين الأشياء، حيث يُبلغ الكائن المُراقب (Subject) جميع المُراقبين (Observers) عند تغيير حالته. يُستخدم على نطاق واسع في البرمجة المبنية على الأحداث." },
      ]},
      { title: "نمط Module", content: [
        { type: "p", text: "يوفر نمط Module الت encapsulation للبيانات والدوال، مخفياً التفاصيل الداخلية وعائضاً واجهة البرمجة العامة فقط. يساعد في تنظيم الكود وتجنب تلوث أسماء النطاقات." },
      ]},
      { title: "نمط Strategy", content: [
        { type: "p", text: "يحدد نمط Strategy عائلة من الخوارزميات ويجعلها قابلة للتبديل. يسمح لكائن بتغيير سلوكه أثناء التشغيل دون تعديل الكود الأصلي. يُستخدم في حسابات أو استراتيجيات ترتيب مختلفة." },
      ]},
      { title: "اختبار المعرفة", content: [] },
      { title: "تحدي عملي", content: [
        { type: "p", text: "أنشئ نظام إشعارات يدعم الاشتراك في أنواع إشعارات مختلفة (بريد إلكتروني، رسالة نصية، إشعار داخل التطبيق). يجب أن يدعم النظام: إضافة مشتركين لأنواع إشعارات مختلفة، إرسال الإشعارات فقط ل المشتركين في النوع المحدد، إلغاء الاشتراك من نوع محدد، سرد جميع المشتركين لكل نوع." },
      ]},
      { title: "ملخص الأنماط", content: [
        { type: "li", text: "<strong>نمط Singleton:</strong> ينشئ نسخة واحدة فقط من فئة. يُستخدم للموارد المشتركة." },
        { type: "li", text: "<strong>نمط Factory:</strong> ينشئ أشياءً بناءً على المدخلات. يفصل الإنشاء عن الاستخدام." },
        { type: "li", text: "<strong>نمط Observer:</strong> يُبلغ المُراقبين عند تغيير الحالة. يُستخدم في الأحداث." },
        { type: "li", text: "<strong>نمط Module:</strong> يُغلّف البيانات والدوال. يخفي التفاصيل الداخلية." },
        { type: "li", text: "<strong>نمط Strategy:</strong> يجعل الخوارزميات قابلة للتبديل. يُستخدم في سلوكيات مختلفة." },
      ]},
    ],
    quiz: [
      { question: "أي من أنماط التصميم التالية يُستخدم لإنشاء نسخة واحدة فقط في التطبيق؟", options: ["نمط Factory", "نمط Singleton", "نمط Observer", "نمط Strategy"], explanation: "يضمن نمط Singleton أن يكون هناك نسخة واحدة فقط من فئة معينة في أي وقت، ويُستخدم لإدارة الموارد المشتركة." },
    ],
    challenge: { title: "ابنِ نظام إشعارات باستخدام نمط Observer", description: "أنشئ نظام إشعارات يدعم الاشتراك في أنواع إشعارات مختلفة (بريد إلكتروني، رسالة نصية، داخل التطبيق). يجب أن يدعم إضافة المشتركين وإرسال الإشعارات فقط للمشتركين ذوي الصلة وإلغاء الاشتراك وسرد جميع المشتركين." },
    cheatSheet: { title: "مرجع سريع لأنماط التصميم", columns: [
      { heading: "أنماط الإنشاء:", items: [
        '<strong style={{ color: "var(--primary)" }}>Singleton</strong> - نسخة واحدة فقط. للموارد المشتركة.',
        '<strong style={{ color: "var(--primary)" }}>Factory</strong> - ينشئ أشياءً بناءً على المدخلات. يفصل الإنشاء عن الاستخدام.',
      ]},
      { heading: "الأنماط الهيكلية والسلوكية:", items: [
        '<strong style={{ color: "var(--primary)" }}>Observer</strong> - يُبلغ المُراقبين عند تغيير الحالة. يُستخدم في الأحداث.',
        '<strong style={{ color: "var(--primary)" }}>Module</strong> - يُغلّف البيانات والدوال. يخفي التفاصيل الداخلية.',
        '<strong style={{ color: "var(--primary)" }}>Strategy</strong> - يجعل الخوارزميات قابلة للتبديل. يُستخدم في سلوكيات مختلفة.',
      ]},
    ]}
  },
  en: {
    sections: [
      { title: "Introduction to Design Patterns", content: [
        { type: "p", text: "Design Patterns are proven and documented solutions to common problems in software design. They are essential for writing clean and maintainable code, providing a shared language between developers and helping build flexible and extensible structures." },
      ]},
      { title: "Singleton Pattern", content: [
        { type: "p", text: "The Singleton Pattern ensures that only one instance of a class exists at any given time, and provides a global point of access to it. It's used when you need to manage shared resources like database connections or application settings." },
      ]},
      { title: "Factory Pattern", content: [
        { type: "p", text: "The Factory Pattern provides a way to create objects without specifying the exact class for creation. It separates the creation process from usage, making the code more flexible and maintainable." },
      ]},
      { title: "Observer Pattern", content: [
        { type: "p", text: "The Observer Pattern establishes a one-to-many relationship between objects, where the observed object (Subject) notifies all observers (Observers) when its state changes. It's widely used in Event-Driven Programming." },
      ]},
      { title: "Module Pattern", content: [
        { type: "p", text: "The Module Pattern provides encapsulation for data and functions, hiding internal details and exposing only the public interface. It helps organize code and avoid namespace pollution." },
      ]},
      { title: "Strategy Pattern", content: [
        { type: "p", text: "The Strategy Pattern defines a family of algorithms and makes them interchangeable. It allows an object to change its behavior at runtime without modifying the original code. It's used in different calculations or sorting strategies." },
      ]},
      { title: "Knowledge Test", content: [] },
      { title: "Practical Challenge", content: [
        { type: "p", text: "Create a notification system that supports subscribing to different types of notifications (email, SMS, in-app notification). The system must support: Adding subscribers for different notification types, sending notifications only to subscribers of the specified type, unsubscribing from a specific type, listing all subscribers for each type." },
      ]},
      { title: "Patterns Summary", content: [
        { type: "li", text: "<strong>Singleton Pattern:</strong> Creates only one instance of a class. Used for shared resources." },
        { type: "li", text: "<strong>Factory Pattern:</strong> Creates objects based on inputs. Separates creation from usage." },
        { type: "li", text: "<strong>Observer Pattern:</strong> Notifies observers when state changes. Used in events." },
        { type: "li", text: "<strong>Module Pattern:</strong> Encapsulates data and functions. Hides internal details." },
        { type: "li", text: "<strong>Strategy Pattern:</strong> Makes algorithms interchangeable. Used in different behaviors." },
      ]},
    ],
    quiz: [
      { question: "Which of the following design patterns is used to create only one instance in the application?", options: ["Factory Pattern", "Singleton Pattern", "Observer Pattern", "Strategy Pattern"], explanation: "The Singleton Pattern ensures that only one instance of a class exists at any given time, and is used for managing shared resources." },
    ],
    challenge: { title: "Build a notification system using the Observer Pattern", description: "Create a notification system that supports subscribing to different notification types (email, SMS, in-app). It must support adding subscribers, sending notifications only to relevant subscribers, unsubscribing, and listing all subscribers." },
    cheatSheet: { title: "Design Patterns Quick Reference", columns: [
      { heading: "Creational Patterns:", items: [
        '<strong style={{ color: "var(--primary)" }}>Singleton</strong> - One instance only. For shared resources.',
        '<strong style={{ color: "var(--primary)" }}>Factory</strong> - Creates objects based on inputs. Separates creation from usage.',
      ]},
      { heading: "Structural & Behavioral Patterns:", items: [
        '<strong style={{ color: "var(--primary)" }}>Observer</strong> - Notifies observers on state change. Used in events.',
        '<strong style={{ color: "var(--primary)" }}>Module</strong> - Encapsulates data and functions. Hides internal details.',
        '<strong style={{ color: "var(--primary)" }}>Strategy</strong> - Makes algorithms interchangeable. Used in different behaviors.',
      ]},
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux patrons de conception", content: [
        { type: "p", text: "Les patrons de conception sont des solutions éprouvées et documentées aux problèmes courants de la conception logicielle. Ils sont essentiels pour écrire du code propre et maintenable, fournissant un langage partagé entre les développeurs et aidant à construire des structures flexibles et extensibles." },
      ]},
      { title: "Patron Singleton", content: [
        { type: "p", text: "Le patron Singleton garantit qu'une seule instance d'une classe existe à un moment donné, et fournit un point d'accès global. Il est utilisé lorsque vous devez gérer des ressources partagées comme les connexions de base de données ou les paramètres de l'application." },
      ]},
      { title: "Patron Factory", content: [
        { type: "p", text: "Le patron Factory fournit un moyen de créer des objets sans spécifier la classe exacte pour la création. Il sépare le processus de création de l'utilisation, rendant le code plus flexible et maintenable." },
      ]},
      { title: "Patron Observer", content: [
        { type: "p", text: "Le patron Observer établit une relation un-à-plusieurs entre les objets, où l'objet observé (Subject) notifie tous les observateurs (Observers) lorsque son état change. Il est largement utilisé dans la programmation événementielle." },
      ]},
      { title: "Patron Module", content: [
        { type: "p", text: "Le patron Module fournit l'encapsulation pour les données et les fonctions, cachant les détails internes et n'exposant que l'interface publique. Il aide à organiser le code et à éviter la pollution des espaces de noms." },
      ]},
      { title: "Patron Strategy", content: [
        { type: "p", text: "Le patron Strategy définit une famille d'algorithmes et les rend interchangeables. Il permet à un objet de changer son comportement à l'exécution sans modifier le code original. Il est utilisé dans les différents calculs ou stratégies de tri." },
      ]},
      { title: "Test de connaissances", content: [] },
      { title: "Défi pratique", content: [
        { type: "p", text: "Créez un système de notifications qui supporte l'abonnement à différents types de notifications (e-mail, SMS, notification dans l'application). Le système doit supporter : Ajouter des abonnés pour différents types de notifications, envoyer des notifications uniquement aux abonnés du type spécifié, se désabonner d'un type spécifique, lister tous les abonnés pour chaque type." },
      ]},
      { title: "Résumé des patrons", content: [
        { type: "li", text: "<strong>Patron Singleton :</strong> Crée une seule instance d'une classe. Utilisé pour les ressources partagées." },
        { type: "li", text: "<strong>Patron Factory :</strong> Crée des objets basés sur les entrées. Sépare la création de l'utilisation." },
        { type: "li", text: "<strong>Patron Observer :</strong> Notifie les observateurs lors du changement d'état. Utilisé dans les événements." },
        { type: "li", text: "<strong>Patron Module :</strong> Encapsule les données et fonctions. Cache les détails internes." },
        { type: "li", text: "<strong>Patron Strategy :</strong> Rend les algorithmes interchangeables. Utilisé dans les différents comportements." },
      ]},
    ],
    quiz: [
      { question: "Lequel des patrons de conception suivants est utilisé pour créer une seule instance dans l'application ?", options: ["Patron Factory", "Patron Singleton", "Patron Observer", "Patron Strategy"], explanation: "Le patron Singleton garantit qu'une seule instance d'une classe existe à un moment donné, et est utilisé pour gérer les ressources partagées." },
    ],
    challenge: { title: "Construisez un système de notifications avec le patron Observer", description: "Créez un système de notifications qui supporte l'abonnement à différents types de notifications (e-mail, SMS, dans l'application). Il doit supporter l'ajout d'abonnés, l'envoi de notifications uniquement aux abonnés pertinents, le désabonnement et la liste de tous les abonnés." },
    cheatSheet: { title: "Référence rapide des patrons de conception", columns: [
      { heading: "Patrons de création :", items: [
        '<strong style={{ color: "var(--primary)" }}>Singleton</strong> - Une seule instance. Pour les ressources partagées.',
        '<strong style={{ color: "var(--primary)" }}>Factory</strong> - Crée des objets basés sur les entrées. Sépare la création de l\'utilisation.',
      ]},
      { heading: "Patrons structurels et comportementaux :", items: [
        '<strong style={{ color: "var(--primary)" }}>Observer</strong> - Notifie les observateurs lors du changement d\'état. Utilisé dans les événements.',
        '<strong style={{ color: "var(--primary)" }}>Module</strong> - Encapsule les données et fonctions. Cache les détails internes.',
        '<strong style={{ color: "var(--primary)" }}>Strategy</strong> - Rend les algorithmes interchangeables. Utilisé dans les différents comportements.',
      ]},
    ]}
  },
  de: {
    sections: [
      { title: "Einführung in Entwurfsmuster", content: [
        { type: "p", text: "Entwurfsmuster sind bewährte und dokumentierte Lösungen für häufige Probleme in der Softwareentwicklung. Sie sind unerlässlich für das Schreiben von sauberem und wartbarem Code, bieten eine gemeinsame Sprache zwischen Entwicklern und helfen, flexible und erweiterbare Strukturen aufzubauen." },
      ]},
      { title: "Singleton-Muster", content: [
        { type: "p", text: "Das Singleton-Muster stellt sicher, dass zu jedem Zeitpunkt nur eine Instanz einer Klasse existiert, und bietet einen globalen Zugriffspunkt darauf. Es wird verwendet, wenn Sie gemeinsame Ressourcen wie Datenbankverbindungen oder Anwendungseinstellungen verwalten müssen." },
      ]},
      { title: "Factory-Muster", content: [
        { type: "p", text: "Das Factory-Muster bietet eine Möglichkeit, Objekte zu erstellen, ohne die genaue Klasse für die Erstellung festzulegen. Es trennt den Erstellungsprozess von der Verwendung und macht den Code flexibler und wartbarer." },
      ]},
      { title: "Observer-Muster", content: [
        { type: "p", text: "Das Observer-Muster stellt eine eins-zu-viele-Beziehung zwischen Objekten her, wobei das beobachtete Objekt (Subject) alle Beobachter (Observers) benachrichtigt, wenn sich sein Zustand ändert. Es wird häufig in der ereignisgesteuerten Programmierung verwendet." },
      ]},
      { title: "Module-Muster", content: [
        { type: "p", text: "Das Module-Muster bietet Kapselung für Daten und Funktionen, verbirgt interne Details und zeigt nur die öffentliche Schnittstelle. Es hilft, Code zu organisieren und Namespace-Verschmutzung zu vermeiden." },
      ]},
      { title: "Strategy-Muster", content: [
        { type: "p", text: "Das Strategy-Muster definiert eine Familie von Algorithmen und macht sie austauschbar. Es erlaubt einem Objekt, sein Verhalten zur Laufzeit zu ändern, ohne den ursprünglichen Code zu ändern. Es wird in verschiedenen Berechnungen oder Sortierstrategien verwendet." },
      ]},
      { title: "Wissenstest", content: [] },
      { title: "Praktische Herausforderung", content: [
        { type: "p", text: "Erstellen Sie ein Benachrichtigungssystem, das das Abonnieren verschiedener Benachrichtigungstypen (E-Mail, SMS, In-App-Benachrichtigung) unterstützt. Das System muss unterstützen: Hinzufügen von Abonnenten für verschiedene Benachrichtigungstypen, Senden von Benachrichtigungen nur an Abonnenten des angegebenen Typs, Abbestimmung eines bestimmten Typs, Auflistung aller Abonnenten für jeden Typ." },
      ]},
      { title: "Muster-Zusammenfassung", content: [
        { type: "li", text: "<strong>Singleton-Muster:</strong> Erstellt nur eine Instanz einer Klasse. Für gemeinsame Ressourcen." },
        { type: "li", text: "<strong>Factory-Muster:</strong> Erstellt Objekte basierend auf Eingaben. Trennt Erstellung von Verwendung." },
        { type: "li", text: "<strong>Observer-Muster:</strong> Benachrichtigt Beobachter bei Zustandsänderung. In Ereignissen verwendet." },
        { type: "li", text: "<strong>Module-Muster:</strong> Kapselt Daten und Funktionen. Verbirgt interne Details." },
        { type: "li", text: "<strong>Strategy-Muster:</strong> Macht Algorithmen austauschbar. In verschiedenen Verhaltensweisen verwendet." },
      ]},
    ],
    quiz: [
      { question: "Welches der folgenden Entwurfsmuster wird verwendet, um nur eine Instanz in der Anwendung zu erstellen?", options: ["Factory-Muster", "Singleton-Muster", "Observer-Muster", "Strategy-Muster"], explanation: "Das Singleton-Muster stellt sicher, dass zu jedem Zeitpunkt nur eine Instanz einer Klasse existiert und wird zur Verwaltung gemeinsamer Ressourcen verwendet." },
    ],
    challenge: { title: "Bauen Sie ein Benachrichtigungssystem mit dem Observer-Muster", description: "Erstellen Sie ein Benachrichtigungssystem, das das Abonnieren verschiedener Benachrichtigungstypen (E-Mail, SMS, In-App) unterstützt. Es muss das Hinzufügen von Abonnenten, das Senden von Benachrichtigungen nur an relevante Abonnenten, das Abbestimmen und die Auflistung aller Abonnenten unterstützen." },
    cheatSheet: { title: "Schnellreferenz für Entwurfsmuster", columns: [
      { heading: "Erstellungsmuster:", items: [
        '<strong style={{ color: "var(--primary)" }}>Singleton</strong> - Nur eine Instanz. Für gemeinsame Ressourcen.',
        '<strong style={{ color: "var(--primary)" }}>Factory</strong> - Erstellt Objekte basierend auf Eingaben. Trennt Erstellung von Verwendung.',
      ]},
      { heading: "Struktur- und Verhaltensmuster:", items: [
        '<strong style={{ color: "var(--primary)" }}>Observer</strong> - Benachrichtigt Beobachter bei Zustandsänderung. In Ereignissen verwendet.',
        '<strong style={{ color: "var(--primary)" }}>Module</strong> - Kapselt Daten und Funktionen. Verbirgt interne Details.',
        '<strong style={{ color: "var(--primary)" }}>Strategy</strong> - Macht Algorithmen austauschbar. In verschiedenen Verhaltensweisen verwendet.',
      ]},
    ]}
  },
};

export default translations;
