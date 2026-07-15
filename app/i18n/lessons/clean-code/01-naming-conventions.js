const translations = {
  ar: {
    sections: [
      { title: "المقدمة", content: [
        { type: "p", text: "التسمية الواضحة والمتسقة هي واحدة من أهم عناصر الكود النظيف. أنت تقرأ الكود أكثر مماكتبه، لذا الأسماء الجيدة توفر عليك الوقت والجهد وتجعل الكود سهل الصيانة والفهم." },
        { type: "p", text: "في هذا الدرس، سنتعلم أفضل الممارسات لتسمية المتغيرات والدوال والثوابت والملفات، وسنرى كيف يمكن للأسماء السيئة تحويل كود بسيط إلى كابوس." },
      ]},
      { title: "المتغيرات", content: [
        { type: "p", text: "المتغيرات هي حاويات تخزين للبيانات. القاعدة الذهبية هي: <strong>سمّ متغيرك ليصف محتواه بدقة</strong>." },
        { type: "p", text: "في JavaScript، نستخدم <code>camelCase</code> لأسماء المتغيرات: الكلمة الأولى بحرف صغير، والكلمات التالية تبدأ بحرف كبير." },
        { type: "p", text: "استخدام حرف واحد مثل <code>x</code> أو <code>y</code> يجعل الكود صعب الفهم. استخدم أسماء وصفية حتى في الحلقات." },
        { type: "callout", title: "استثناء: الحلقات", text: "استخدام <code>i</code> و <code>j</code> و <code>k</code> في الحلقات مقبول في JavaScript، لكن تأكد أن الحلحة لها معنى واضح من السياق المحيط." },
      ]},
      { title: "الدوال", content: [
        { type: "p", text: "الدوال تنفيذ إجراءات أو حسابات. القاعدة هنا: <strong>ابدأ اسم الدالة بفعل</strong> يصف ما تفعله." },
        { type: "p", text: "أفعال مقترحة للدوال:" },
        { type: "li", text: "<code>get</code> / <code>fetch</code> / <code>retrieve</code> - للحصول على بيانات" },
        { type: "li", text: "<code>create</code> / <code>add</code> / <code>insert</code> - لإنشاء عنصر جديد" },
        { type: "li", text: "<code>update</code> / <code>modify</code> / <code>change</code> - لتعديل البيانات" },
        { type: "li", text: "<code>delete</code> / <code>remove</code> / <code>destroy</code> - لحذف عنصر" },
        { type: "li", text: "<code>validate</code> / <code>check</code> / <code>verify</code> - للتحقق من شرط" },
        { type: "li", text: "<code>calculate</code> / <code>compute</code> - لتنفيذ الحسابات" },
        { type: "li", text: "<code>render</code> / <code>display</code> / <code>show</code> - لعرض واجهة مستخدم" },
      ]},
      { title: "الفئات", content: [
        { type: "p", text: "الفئات هي \"قوالب\" لإنشاء الأشياء. نستخدم <strong>PascalCase</strong> (الكلمة الأولى تبدأ بحرف كبير) والأسماء هي <strong>اسماء</strong>." },
      ]},
      { title: "الثوابت", content: [
        { type: "p", text: "الثوابت هي قيم لا تتغير. نستخدم <strong>UPPER_SNAKE_CASE</strong> (أحرف كبيرة مع شرطات سفلية) للتميز بوضوح بينها وبين المتغيرات العادية." },
        { type: "p", text: "استثناء: الثوابت المحلية داخل الدوال لا تحتاج إلى UPPER_CASE." },
      ]},
      { title: "الملفات", content: [
        { type: "p", text: "تسمية الملفات هي جزء أساسي من تنظيم المشروع. هناك نهجان رئيسيان مقبولان في مجتمع JavaScript:" },
        { type: "li", text: "<strong>kebab-case (شائع)</strong>: user-profile.js, shopping-cart.js" },
        { type: "li", text: "<strong>camelCase (بديل)</strong>: userProfile.js, shoppingCart.js" },
        { type: "callout", title: "نصيحة مهمة", text: "اختر نمطاً واحداً والتزم به طوال مشروعك. معظم مكتبات JavaScript تستخدم kebab-case (مثل react-router-dom)، لذا هو الخيار الأ أكثر أماناً للمشاركب الكبيرة." },
      ]},
      { title: "الأسماء السيئة مقابل الأسماء الجيدة", content: [
        { type: "p", text: "دعنا نرى بعض الأمثلة الواقعية للأسماء السيئة وكيفية تحسينها:" },
        { type: "p", text: "القواعد الذهبية للتسمية:" },
        { type: "li", text: "<strong>لا تختصر:</strong> <code>button</code> وليس <code>btn</code>، <code>user</code> وليس <code>usr</code>" },
        { type: "li", text: "<strong>استخدم كلمات كاملة:</strong> <code>first</code> و <code>second</code> وليس <code>f</code> و <code>s</code>" },
        { type: "li", text: "<strong>لا تستخدم لواحق رقمية:</strong> <code>userData</code> و <code>productData</code> وليس <code>data1</code> و <code>data2</code>" },
        { type: "li", text: "<strong>استخدم مصطلحات متسقة:</strong> لا تخلط بين <code>get</code> و <code>fetch</code> و <code>retrieve</code> للمفهوم نفسه" },
        { type: "li", text: "<strong>اجعل الأسماء تصف المحتوى:</strong> <code>isValid</code> وليس <code>check</code> أو <code>flag</code>" },
      ]},
    ],
    quiz: [
      { question: "أي من الأسماء التالية هو الاسم الصحيح لدالة تتحقق من البريد الإلكتروني؟", options: ["email", "check", "validateEmail", "emailValidator"], explanation: "الدالة تبدأ بفعل (validate) وتنتهي بالموضوع (Email). هذا النمط يجعل الكود واضحاً ومتسقاً." },
    ],
    challenge: { title: "تحدي: حسّن أسماء الكود أدناه", description: "أعد كتابة الكود التالي بأسماء أفضل ووضوح أعلى. اجعل الكود مقروءاً وسهلاً للفهم." },
    cheatSheet: { title: "ملخص اتفاقيات التسمية", columns: [
      { heading: "النمط لكل عنصر:", items: [
        '<code className="inline-code">userName</code>, <code className="inline-code">isActive</code>, <code className="inline-code">maxRetryCount</code> - المتغيرات: camelCase',
        '<code className="inline-code">getUserData()</code>, <code className="inline-code">calculateTotal()</code> - الدوال: camelCase + فعل',
        '<code className="inline-code">ShoppingCart</code>, <code className="inline-code">PaymentProcessor</code> - الفئات: PascalCase',
        '<code className="inline-code">MAX_RETRY_COUNT</code>, <code className="inline-code">API_URL</code> - الثوابت: UPPER_SNAKE_CASE',
      ]},
      { heading: "القواعد الذهبية:", items: [
        '<code className="inline-code">button</code> وليس <code className="inline-code">btn</code> - لا تختصر',
        '<code className="inline-code">get</code>, <code className="inline-code">create</code>, <code className="inline-code">validate</code> - استخدم أفعالاً للدوال',
        '<code className="inline-code">isValid</code> وليس <code className="inline-code">check</code> - الأسماء تصف المحتوى',
        'التزم بنمط واحد طوال المشروع - كن متسقاً',
      ]},
    ]},
    interviewQuestions: [
      { question: "ما هو Clean Code؟", answer: "كود واضح، سهل القراءة، وقابل للصيانة.", difficulty: "easy" },
      { question: "لماذا Clean Code مهم؟", answer: "يقلل الأخطاء ويسهل التعاون ويوفر وقت التطوير.", difficulty: "medium" }
    ],
    tricks: [
      { title: "اقرأ كود الآخرين", description: "أفضل طريقة لتعلم Clean Code هي قراءة مشاريع مفتوحة المصدر", type: "brain" }
    ]
  },
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Clear and consistent naming is one of the most important elements of Clean Code. You read code more often than you write it, so good names save you time and effort and make code easy to maintain and understand." },
        { type: "p", text: "In this lesson, we will learn best practices for naming variables, functions, constants, and files, and see how bad names can turn simple code into a nightmare." },
      ]},
      { title: "Variables", content: [
        { type: "p", text: "Variables are storage containers for data. The golden rule is: <strong>Name your variable to accurately describe its content</strong>." },
        { type: "p", text: "In JavaScript, we use <code>camelCase</code> for variable names: the first word is lowercase, and subsequent words start with a capital letter." },
        { type: "p", text: "Using a single letter like <code>x</code> or <code>y</code> makes code hard to understand. Use descriptive names even in loops." },
        { type: "callout", title: "Exception: Loops", text: "Using <code>i</code>, <code>j</code>, and <code>k</code> in loops is acceptable in JavaScript, but make sure the loop has clear meaning from the surrounding context." },
      ]},
      { title: "Functions", content: [
        { type: "p", text: "Functions perform actions or calculations. The rule here: <strong>Start the function name with a verb</strong> that describes what it does." },
        { type: "p", text: "Suggested verbs for functions:" },
        { type: "li", text: "<code>get</code> / <code>fetch</code> / <code>retrieve</code> - for getting data" },
        { type: "li", text: "<code>create</code> / <code>add</code> / <code>insert</code> - for creating a new item" },
        { type: "li", text: "<code>update</code> / <code>modify</code> / <code>change</code> - for modifying data" },
        { type: "li", text: "<code>delete</code> / <code>remove</code> / <code>destroy</code> - for deleting an item" },
        { type: "li", text: "<code>validate</code> / <code>check</code> / <code>verify</code> - for checking a condition" },
        { type: "li", text: "<code>calculate</code> / <code>compute</code> - for performing calculations" },
        { type: "li", text: "<code>render</code> / <code>display</code> / <code>show</code> - for displaying a UI" },
      ]},
      { title: "Classes", content: [
        { type: "p", text: "Classes are \"templates\" for creating objects. We use <strong>PascalCase</strong> (first word starts with a capital letter) and names are <strong>nouns</strong>." },
      ]},
      { title: "Constants", content: [
        { type: "p", text: "Constants are values that do not change. We use <strong>UPPER_SNAKE_CASE</strong> (uppercase letters with underscores) to clearly distinguish them from regular variables." },
        { type: "p", text: "Exception: Local constants inside functions do not need UPPER_CASE." },
      ]},
      { title: "Files", content: [
        { type: "p", text: "File naming is an essential part of project organization. There are two main accepted approaches in the JavaScript community:" },
        { type: "li", text: "<strong>kebab-case (common)</strong>: user-profile.js, shopping-cart.js" },
        { type: "li", text: "<strong>camelCase (alternative)</strong>: userProfile.js, shoppingCart.js" },
        { type: "callout", title: "Important Tip", text: "Choose one pattern and stick with it throughout your project. Most JavaScript libraries use kebab-case (like react-router-dom), so it is the safer choice for large projects." },
      ]},
      { title: "Bad Names vs Good Names", content: [
        { type: "p", text: "Let's see some real-world examples of bad names and how to improve them:" },
        { type: "p", text: "Golden Rules of Naming:" },
        { type: "li", text: "<strong>Don't abbreviate:</strong> <code>button</code> not <code>btn</code>, <code>user</code> not <code>usr</code>" },
        { type: "li", text: "<strong>Use full words:</strong> <code>first</code> and <code>second</code> not <code>f</code> and <code>s</code>" },
        { type: "li", text: "<strong>Don't use numeric suffixes:</strong> <code>userData</code> and <code>productData</code> not <code>data1</code> and <code>data2</code>" },
        { type: "li", text: "<strong>Use consistent terminology:</strong> Don't mix <code>get</code>, <code>fetch</code>, and <code>retrieve</code> for the same concept" },
        { type: "li", text: "<strong>Make names describe content:</strong> <code>isValid</code> not <code>check</code> or <code>flag</code>" },
      ]},
    ],
    quiz: [
      { question: "Which of the following is the correct name for a function that validates an email?", options: ["email", "check", "validateEmail", "emailValidator"], explanation: "The function starts with a verb (validate) and ends with the subject (Email). This pattern makes code clear and consistent." },
    ],
    challenge: { title: "Challenge: Improve the code names below", description: "Rewrite the following code with better names and higher clarity. Make the code readable and understandable." },
    cheatSheet: { title: "Naming Conventions Cheat Sheet", columns: [
      { heading: "Pattern per element:", items: [
        '<code className="inline-code">userName</code>, <code className="inline-code">isActive</code>, <code className="inline-code">maxRetryCount</code> - Variables: camelCase',
        '<code className="inline-code">getUserData()</code>, <code className="inline-code">calculateTotal()</code> - Functions: camelCase + verb',
        '<code className="inline-code">ShoppingCart</code>, <code className="inline-code">PaymentProcessor</code> - Classes: PascalCase',
        '<code className="inline-code">MAX_RETRY_COUNT</code>, <code className="inline-code">API_URL</code> - Constants: UPPER_SNAKE_CASE',
      ]},
      { heading: "Golden rules:", items: [
        '<code className="inline-code">button</code> not <code className="inline-code">btn</code> - Don\'t abbreviate',
        '<code className="inline-code">get</code>, <code className="inline-code">create</code>, <code className="inline-code">validate</code> - Use verbs for functions',
        '<code className="inline-code">isValid</code> not <code className="inline-code">check</code> - Names describe content',
        'Stick to one pattern throughout the project - Be consistent',
      ]},
    ]},
    interviewQuestions: [
      { question: "What is Clean Code?", answer: "Code that is clear, easy to read, and maintainable.", difficulty: "easy" },
      { question: "Why is Clean Code important?", answer: "It reduces errors, facilitates collaboration, and saves development time.", difficulty: "medium" }
    ],
    tricks: [
      { title: "Read others' code", description: "The best way to learn Clean Code is to read open source projects", type: "brain" }
    ]
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Un nommage clair et cohérent est l'un des éléments les plus importants du code propre. Vous lisez le code plus souvent que vous ne l'écrivez, donc de bons noms vous font gagner du temps et rendent le code facile à maintenir et à comprendre." },
        { type: "p", text: "Dans cette leçon, nous apprendrons les meilleures pratiques pour nommer les variables, fonctions, constantes et fichiers, et nous verrons comment de mauvais noms peuvent transformer un code simple en un cauchemar." },
      ]},
      { title: "Variables", content: [
        { type: "p", text: "Les variables sont des conteneurs de stockage pour les données. La règle d'or est : <strong>Nommez votre variable pour décrire précisément son contenu</strong>." },
        { type: "p", text: "En JavaScript, nous utilisons le <code>camelCase</code> pour les noms de variables : le premier mot est en minuscule et les mots suivants commencent par une majuscule." },
        { type: "p", text: "L'utilisation d'une seule lettre comme <code>x</code> ou <code>y</code> rend le code difficile à comprendre. Utilisez des noms descriptifs même dans les boucles." },
        { type: "callout", title: "Exception : Boucles", text: "L'utilisation de <code>i</code>, <code>j</code> et <code>k</code> dans les boucles est acceptable en JavaScript, mais assurez-vous que la boucle a un sens clair du contexte environnant." },
      ]},
      { title: "Fonctions", content: [
        { type: "p", text: "Les fonctions effectuent des actions ou des calculs. La règle ici : <strong>Commencez le nom de la fonction par un verbe</strong> qui décrit ce qu'elle fait." },
        { type: "p", text: "Verbes suggérés pour les fonctions :" },
        { type: "li", text: "<code>get</code> / <code>fetch</code> / <code>retrieve</code> - pour obtenir des données" },
        { type: "li", text: "<code>create</code> / <code>add</code> / <code>insert</code> - pour créer un nouvel élément" },
        { type: "li", text: "<code>update</code> / <code>modify</code> / <code>change</code> - pour modifier des données" },
        { type: "li", text: "<code>delete</code> / <code>remove</code> / <code>destroy</code> - pour supprimer un élément" },
        { type: "li", text: "<code>validate</code> / <code>check</code> / <code>verify</code> - pour vérifier une condition" },
        { type: "li", text: "<code>calculate</code> / <code>compute</code> - pour effectuer des calculs" },
        { type: "li", text: "<code>render</code> / <code>display</code> / <code>show</code> - pour afficher une interface" },
      ]},
      { title: "Classes", content: [
        { type: "p", text: "Les classes sont des \"modèles\" pour créer des objets. Nous utilisons le <strong>PascalCase</strong> (première lettre en majuscule) et les noms sont des <strong>substantifs</strong>." },
      ]},
      { title: "Constantes", content: [
        { type: "p", text: "Les constantes sont des valeurs qui ne changent pas. Nous utilisons le <strong>UPPER_SNAKE_CASE</strong> (lettres majuscules avec des tirets bas) pour les distinguer clairement des variables normales." },
        { type: "p", text: "Exception : Les constantes locales dans les fonctions n'ont pas besoin de UPPER_CASE." },
      ]},
      { title: "Fichiers", content: [
        { type: "p", text: "Le nommage des fichiers fait partie essentielle de l'organisation du projet. Il existe deux approches principales acceptées dans la communauté JavaScript :" },
        { type: "li", text: "<strong>kebab-case (courant)</strong> : user-profile.js, shopping-cart.js" },
        { type: "li", text: "<strong>camelCase (alternative)</strong> : userProfile.js, shoppingCart.js" },
        { type: "callout", title: "Conseil important", text: "Choisissez un modèle et respectez-le dans tout votre projet. La plupart des bibliothèques JavaScript utilisent le kebab-case (comme react-router-dom), c'est donc le choix le plus sûr pour les grands projets." },
      ]},
      { title: "Mauvais noms vs Bons noms", content: [
        { type: "p", text: "Voyons des exemples réels de mauvais noms et comment les améliorer :" },
        { type: "p", text: "Règles d'or du nommage :" },
        { type: "li", text: "<strong>N'abrégez pas :</strong> <code>button</code> pas <code>btn</code>, <code>user</code> pas <code>usr</code>" },
        { type: "li", text: "<strong>Utilisez des mots complets :</strong> <code>first</code> et <code>second</code> pas <code>f</code> et <code>s</code>" },
        { type: "li", text: "<strong>N'utilisez pas de suffixes numériques :</strong> <code>userData</code> et <code>productData</code> pas <code>data1</code> et <code>data2</code>" },
        { type: "li", text: "<strong>Utilisez une terminologie cohérente :</strong> Ne mélangez pas <code>get</code>, <code>fetch</code> et <code>retrieve</code> pour le même concept" },
        { type: "li", text: "<strong>Les noms décrivent le contenu :</strong> <code>isValid</code> pas <code>check</code> ou <code>flag</code>" },
      ]},
    ],
    quiz: [
      { question: "Lequel des noms suivants est le bon nom pour une fonction qui valide un email ?", options: ["email", "check", "validateEmail", "emailValidator"], explanation: "La fonction commence par un verbe (validate) et se termine par le sujet (Email). Ce modèle rend le code clair et cohérent." },
    ],
    challenge: { title: "Défi : Améliorez les noms du code ci-dessous", description: "Réécrivez le code suivant avec de meilleurs noms et une clarté plus élevée. Rendez le code lisible et compréhensible." },
    cheatSheet: { title: "Référence des conventions de nommage", columns: [
      { heading: "Modèle par élément :", items: [
        '<code className="inline-code">userName</code>, <code className="inline-code">isActive</code>, <code className="inline-code">maxRetryCount</code> - Variables : camelCase',
        '<code className="inline-code">getUserData()</code>, <code className="inline-code">calculateTotal()</code> - Fonctions : camelCase + verbe',
        '<code className="inline-code">ShoppingCart</code>, <code className="inline-code">PaymentProcessor</code> - Classes : PascalCase',
        '<code className="inline-code">MAX_RETRY_COUNT</code>, <code className="inline-code">API_URL</code> - Constantes : UPPER_SNAKE_CASE',
      ]},
      { heading: "Règles d'or :", items: [
        '<code className="inline-code">button</code> pas <code className="inline-code">btn</code> - N\'abrégez pas',
        '<code className="inline-code">get</code>, <code className="inline-code">create</code>, <code className="inline-code">validate</code> - Utilisez des verbes pour les fonctions',
        '<code className="inline-code">isValid</code> pas <code className="inline-code">check</code> - Les noms décrivent le contenu',
        'Respectez un seul modèle dans tout le projet - Soyez cohérent',
      ]},
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Klares und konsistentes Benennen ist eines der wichtigsten Elemente von sauberem Code. Sie lesen Code öfter, als Sie ihn schreiben, daher sparen Ihnen gute Namen Zeit und Aufwand und machen Code leicht wartbar und verständlich." },
        { type: "p", text: "In dieser Lektion lernen wir bewährte Praktiken für das Benennen von Variablen, Funktionen, Konstanten und Dateien und sehen, wie schlechte Namen einfachen Code in einen Albtraum verwandeln können." },
      ]},
      { title: "Variablen", content: [
        { type: "p", text: "Variablen sind Speicherbehälter für Daten. Die goldene Regel ist: <strong>Nennen Sie Ihre Variable so, dass sie ihren Inhalt genau beschreibt</strong>." },
        { type: "p", text: "In JavaScript verwenden wir <code>camelCase</code> für Variablennamen: Das erste Wort ist klein geschrieben, nachfolgende Wörter beginnen mit einem Großbuchstaben." },
        { type: "p", text: "Die Verwendung eines einzelnen Buchstabens wie <code>x</code> oder <code>y</code> macht Code schwer verständlich. Verwenden Sie beschreibende Namen auch in Schleifen." },
        { type: "callout", title: "Ausnahme: Schleifen", text: "Die Verwendung von <code>i</code>, <code>j</code> und <code>k</code> in Schleifen ist in JavaScript akzeptabel, aber stellen Sie sicher, dass die Schleife einen klaren Sinn aus dem umgebenden Kontext hat." },
      ]},
      { title: "Funktionen", content: [
        { type: "p", text: "Funktionen führen Aktionen oder Berechnungen durch. Die Regel hier: <strong>Beginnen Sie den Funktionsnamen mit einem Verb</strong>, das beschreibt, was die Funktion tut." },
        { type: "p", text: "Vorgeschlagene Verben für Funktionen:" },
        { type: "li", text: "<code>get</code> / <code>fetch</code> / <code>retrieve</code> - zum Abrufen von Daten" },
        { type: "li", text: "<code>create</code> / <code>add</code> / <code>insert</code> - zum Erstellen eines neuen Elements" },
        { type: "li", text: "<code>update</code> / <code>modify</code> / <code>change</code> - zum Ändern von Daten" },
        { type: "li", text: "<code>delete</code> / <code>remove</code> / <code>destroy</code> - zum Löschen eines Elements" },
        { type: "li", text: "<code>validate</code> / <code>check</code> / <code>verify</code> - zum Überprüfen einer Bedingung" },
        { type: "li", text: "<code>calculate</code> / <code>compute</code> - zum Durchführen von Berechnungen" },
        { type: "li", text: "<code>render</code> / <code>display</code> / <code>show</code> - zum Anzeigen einer Benutzeroberfläche" },
      ]},
      { title: "Klassen", content: [
        { type: "p", text: "Klassen sind \"Vorlagen\" zum Erstellen von Objekten. Wir verwenden <strong>PascalCase</strong> (erstes Wort beginnt mit einem Großbuchstaben) und die Namen sind <strong>Substantive</strong>." },
      ]},
      { title: "Konstanten", content: [
        { type: "p", text: "Konstanten sind Werte, die sich nicht ändern. Wir verwenden <strong>UPPER_SNAKE_CASE</strong> (Großbuchstaben mit Unterstrichen), um sie eindeutig von regulären Variablen zu unterscheiden." },
        { type: "p", text: "Ausnahme: Lokale Konstanten innerhalb von Funktionen benötigen kein UPPER_CASE." },
      ]},
      { title: "Dateien", content: [
        { type: "p", text: "Die Dateibenennung ist ein wesentlicher Teil der Projektorganisation. Es gibt zwei Hauptansätze in der JavaScript-Community:" },
        { type: "li", text: "<strong>kebab-case (gängig)</strong>: user-profile.js, shopping-cart.js" },
        { type: "li", text: "<strong>camelCase (Alternative)</strong>: userProfile.js, shoppingCart.js" },
        { type: "callout", title: "Wichtiger Tipp", text: "Wählen Sie ein Muster und halten Sie sich durchgehend daran. Die meisten JavaScript-Bibliotheken verwenden kebab-case (wie react-router-dom), daher ist es die sicherere Wahl für große Projekte." },
      ]},
      { title: "Schlechte Namen vs Gute Namen", content: [
        { type: "p", text: "Schauen wir uns reale Beispiele für schlechte Namen an und wie man sie verbessern kann:" },
        { type: "p", text: "Goldene Regeln der Benennung:" },
        { type: "li", text: "<strong>Kürzen Sie nicht ab:</strong> <code>button</code> nicht <code>btn</code>, <code>user</code> nicht <code>usr</code>" },
        { type: "li", text: "<strong>Verwenden Sie vollständige Wörter:</strong> <code>first</code> und <code>second</code> nicht <code>f</code> und <code>s</code>" },
        { type: "li", text: "<strong>Keine numerischen Suffixe:</strong> <code>userData</code> und <code>productData</code> nicht <code>data1</code> und <code>data2</code>" },
        { type: "li", text: "<strong>Konsistente Terminologie:</strong> Mischen Sie nicht <code>get</code>, <code>fetch</code> und <code>retrieve</code> für dasselbe Konzept" },
        { type: "li", text: "<strong>Namen beschreiben den Inhalt:</strong> <code>isValid</code> nicht <code>check</code> oder <code>flag</code>" },
      ]},
    ],
    quiz: [
      { question: "Welcher der folgenden Namen ist der richtige Name für eine Funktion, die eine E-Mail validiert?", options: ["email", "check", "validateEmail", "emailValidator"], explanation: "Die Funktion beginnt mit einem Verb (validate) und endet mit dem Thema (Email). Dieses Muster macht den Code klar und konsistent." },
    ],
    challenge: { title: "Herausforderung: Verbessern Sie die folgenden Code-Namen", description: "Schreiben Sie den folgenden Code mit besseren Namen und höherer Klarheit um. Machen Sie den Code lesbar und verständlich." },
    cheatSheet: { title: "Übersicht über Namenskonventionen", columns: [
      { heading: "Muster pro Element:", items: [
        '<code className="inline-code">userName</code>, <code className="inline-code">isActive</code>, <code className="inline-code">maxRetryCount</code> - Variablen: camelCase',
        '<code className="inline-code">getUserData()</code>, <code className="inline-code">calculateTotal()</code> - Funktionen: camelCase + Verb',
        '<code className="inline-code">ShoppingCart</code>, <code className="inline-code">PaymentProcessor</code> - Klassen: PascalCase',
        '<code className="inline-code">MAX_RETRY_COUNT</code>, <code className="inline-code">API_URL</code> - Konstanten: UPPER_SNAKE_CASE',
      ]},
      { heading: "Goldene Regeln:", items: [
        '<code className="inline-code">button</code> nicht <code className="inline-code">btn</code> - Nicht abkürzen',
        '<code className="inline-code">get</code>, <code className="inline-code">create</code>, <code className="inline-code">validate</code> - Verben für Funktionen verwenden',
        '<code className="inline-code">isValid</code> nicht <code className="inline-code">check</code> - Namen beschreiben den Inhalt',
        'Halten Sie sich an ein einziges Muster im gesamten Projekt - Konsistent sein',
      ]},
    ]}
  },
};

export default translations;
