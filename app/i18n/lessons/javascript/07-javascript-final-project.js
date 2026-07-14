const translations = {
  ar: {
    sections: [
      { title: "1. مقدمة المشروع", content: [
        { type: "p", text: "مرحبًا بك في الدرس الأخير من مرحلة جافاسكريبت + ES6+! في هذا الدرس، سنبني مشروعًا عمليًا يجمع <strong>جميع المفاهيم</strong> التي تعلمتها في الدروس السابقة." },
        { type: "callout", title: "مشروعنا:", text: "نظام إدارة طلاب يحتوي على بيانات الطلاب ومعدلاتهم. سنبني دوالًا لإضافة الطلاب وحساب المعدلات والتصفية وعرض التقارير." },
        { type: "p", text: "هذا المشروع مصمم ليكون <strong>جسرًا</strong> بين أساسيات جافاسكريبت ومكتبة React. كل مفهوم تستخدمه هنا ستجده مباشرة في React:" },
        { type: "li", text: "المصفوفات والكائنات = <strong>Props و State</strong> في React" },
        { type: "li", text: "الدوال المساعدة = <strong>Custom Hooks</strong>" },
        { type: "li", text: "تحويل البيانات = <strong>JSX والعرض</strong>" },
        { type: "li", text: "async/await = <strong>useEffect وجلب البيانات</strong>" },
        { type: "li", text: "الوحدات = <strong>تقسيم المكونات</strong>" },
      ]},
      { title: "2. ما سنتعلمه", content: [
        { type: "p", text: "من خلال هذا المشروع، ستطبق عمليًا:" },
        { type: "li", text: "هياكل البيانات (المصفوفات والكائنات)" },
        { type: "li", text: "دوال السهم" },
        { type: "li", text: "التفكيك" },
        { type: "li", text: "عملية Spread" },
        { type: "li", text: "map و filter و reduce" },
        { type: "li", text: "find و some و every" },
        { type: "li", text: "Object.keys و values و entries" },
        { type: "li", text: "قوالب النصوص" },
        { type: "li", text: "الوحدات" },
        { type: "li", text: "async/await" },
      ]},
      { title: "3. هيكل المشروع", content: [
        { type: "p", text: "في المشاريع الحقيقية، نقسم الكود إلى ملفات منفصلة. لأغراض تعليمية، سنكتب كل شيء في ملف واحد، ثم نُظهر كيف يمكن تقسيمه." },
        { type: "p", text: "<strong>المبدأ الأساسي:</strong> كل ملف مسؤول عن مهمة واحدة فقط (مبدأ المسؤولية الفردية)." },
      ]},
      { title: "4. الخطوة 1: تجهيز البيانات", content: [
        { type: "p", text: "الخطوة الأولى هي تعريف شكل البيانات التي سيعمل معها مشروعنا. نستخدم <strong>مصفوفة كائنات</strong>، النمط الأكثر شيوعًا لتمثيل مجموعات البيانات في جافاسكريبت." },
      ]},
      { title: "5. الخطوة 2: المنطق الأساسي", content: [
        { type: "p", text: "الآن نبني الدوال الأساسية: حساب المتوسط باستخدام <strong>reduce</strong>، وتصنيف الدرجات، وثراء بيانات الطلاب." },
        { type: "p", text: "<strong>حساب المتوسط مع reduce:</strong> دالة reduce من أقوى طرق المصفوفات. تأخذ دالة callback وقيمة أولية، ثم تكرر عبر كل عنصر متراكمًا النتيجة." },
        { type: "p", text: "<strong>ثراء البيانات مع map و Spread:</strong> بعد حساب المتوسط، نستخدم map لإنشاء نسخة محسّنة لكل طالب. نستخدم عملية Spread لإضافة حقول جديدة دون تعديل الكائن الأصلي." },
      ]},
      { title: "6. الخطوة 3: الدوال المساعدة (البحث والتصفية)", content: [
        { type: "p", text: "الآن نبني دوالًا تبحث وتصفية البيانات. هذه هي أساس كل تطبيق ويب: البحث والتصفية والتحقق الشرطي." },
        { type: "p", text: "<strong>مقارنة الطرق:</strong>" },
        { type: "li", text: "filter() - تُرجع مصفوفة بالعناصر المطابقة لشرط" },
        { type: "li", text: "find() - تُرجع أول عنصر يطابق شرطًا" },
        { type: "li", text: "some() - تتحقق مما إذا كان عنصر واحد على الأقل يطابق" },
        { type: "li", text: "every() - تتحقق مما إذا كان كل العناصر تطابق" },
        { type: "li", text: "map() - تحول كل عنصر إلى قيمة جديدة" },
        { type: "li", text: "reduce() - تجمع العناصر في قيمة واحدة" },
      ]},
      { title: "7. الخطوة 4: دمج الكل (الإحصائيات والتقارير)", content: [
        { type: "p", text: "الآن نجمع كل الدوال في نظام متكامل: إحصائيات عامة، وتقارير تفصيلية، وإدارة البيانات (إضافة وحذف وتحديث)." },
        { type: "p", text: "<strong>إدارة البيانات (CRUD):</strong> إنشاء (إضافة)، قراءة (عرض)، تحديث (تعديل)، حذف (إزالة). لاحظ أننا لا نعدّل المصفوفة الأصلية أبدًا - ننشئ نسخ جديدة، وهو مبدأ أساسي في React." },
      ]},
      { title: "8. الكود الكامل", content: [
        { type: "p", text: "هذا هو الكود الكامل لنظام إدارة الطلاب. يمكنك نسخه وتشغيله مباشرة في محرر جافاسكريبت." },
      ]},
      { title: "9. الوحدات و async/await", content: [
        { type: "p", text: "<strong>تقسيم الكود إلى وحدات:</strong> في المشاريع الحقيقية، لا نكتب كل شيء في ملف واحد. كل ملف مسؤول عن مهمة محددة. تسمى برمجة الوحدات." },
        { type: "p", text: "<strong>محاكاة غير المتزامنة:</strong> في التطبيقات الحقيقية، تأتي البيانات من خادم عبر الشبكة. نستخدم async/await مع الوعود للتعامل مع هذا التأخير." },
      ]},
      { title: "10. تحديات إضافية", content: [
        { type: "p", text: "وقت التحديات! حاول حل هذه التحديات لتثبيت ما تعلمته." },
        { type: "li", text: "<strong>التحدي 1:</strong> ترتيب الطلاب حسب المتوسط (من الأعلى إلى الأدنى)" },
        { type: "li", text: "<strong>التحدي 2:</strong> التجميع حسب القسم" },
        { type: "li", text: "<strong>التحدي 3:</strong> التصدير بتنسيق CSV" },
        { type: "li", text: "<strong>التحدي 4:</strong> نظام التحقق من الدرجات" },
        { type: "li", text: "<strong>التحدي 5:</strong> بحث متقدم بمعايير متعددة" },
      ]},
    ],
    quiz: [
      { question: "أي مفهوم سنستخدمه لحساب معدل مجموعة من الدرجات في مصفوفة؟", options: ["map - لتحويل العناصر", "filter - لتصفية العناصر", "reduce - لجمع العناصر في قيمة واحدة", "find - للبحث عن عنصر محدد"], correctAnswer: 2, explanation: "reduce هي الأنسب لأنها تكرر عبر كل عنصر وتجمعهم في قيمة واحدة (المجموع)، ثم نقسم على عدد العناصر للحصول على المتوسط." },
    ],
    challenge: { title: "تحديات إضافية", description: "جرب هذه التحديات: 1. ترتيب حسب المتوسط، 2. تجميع حسب القسم، 3. تصدير CSV، 4. التحقق من الدرجات، 5. بحث متقدم." },
    cheatSheet: { title: "نظام إدارة الطلاب - مرجع كامل", items: [
      { label: "ثراء البيانات", description: "calculateAverage(grades) باستخدام reduce | getGradeLabel(average) باستخدام if/else | enrichStudent(student) باستخدام spread" },
      { label: "البحث والتصفية", description: "getActiveStudents() باستخدام filter | getTopStudents() باستخدام filter | findByName() باستخدام find | searchStudents() باستخدام filter مع includes" },
      { label: "الإحصائيات", description: "getStatistics() باستخدام reduce لبناء كائن إحصائيات كامل مع count و average و highest و lowest و active" },
      { label: "إدارة البيانات", description: "addStudent() باستخدام spread | removeStudent() باستخدام filter | updateGrades() باستخدام map مع spread" },
      { label: "أنماط غير المتزامنة", description: "fetchStudentsFromAPI() باستخدام Promise | async/await مع try/catch/finally | processStudentData() تجمع map و reduce و async" },
    ]},
  },
  en: {
    sections: [
      { title: "1. Project Introduction", content: [
        { type: "p", text: "Welcome to the final lesson of the JavaScript + ES6+ stage! In this lesson, we will build a practical project that combines <strong>all the concepts</strong> you learned in previous lessons." },
        { type: "callout", title: "Our Project:", text: "A Student Management System that contains student data and their averages. We will build functions to add students, calculate averages, filter, and display reports." },
        { type: "p", text: "This project is designed to be a <strong>bridge</strong> between JavaScript fundamentals and the React library. Every concept you use here you will find directly in React:" },
        { type: "li", text: "Arrays and Objects = <strong>Props and State</strong> in React" },
        { type: "li", text: "Helper Functions = <strong>Custom Hooks</strong>" },
        { type: "li", text: "Data Transformation = <strong>JSX and Rendering</strong>" },
        { type: "li", text: "async/await = <strong>useEffect and Data Fetching</strong>" },
        { type: "li", text: "Modules = <strong>Component Splitting</strong>" },
      ]},
      { title: "2. What We Will Learn", content: [
        { type: "p", text: "Through this project, you will practically apply:" },
        { type: "li", text: "Data Structures (Arrays & Objects)" },
        { type: "li", text: "Arrow Functions" },
        { type: "li", text: "Destructuring" },
        { type: "li", text: "Spread Operator" },
        { type: "li", text: "map, filter, reduce" },
        { type: "li", text: "find, some, every" },
        { type: "li", text: "Object.keys, values, entries" },
        { type: "li", text: "Template Literals" },
        { type: "li", text: "Modules" },
        { type: "li", text: "async/await" },
      ]},
      { title: "3. Project Structure", content: [
        { type: "p", text: "In real projects, we split code into separate files. For educational purposes, we'll write everything in one file, then show how it can be split." },
        { type: "p", text: "<strong>Fundamental Principle:</strong> Each file is responsible for only one task (Single Responsibility Principle)." },
      ]},
      { title: "4. Step 1: Setting Up Data", content: [
        { type: "p", text: "The first step is defining the shape of data our project will work with. We use an <strong>array of objects</strong>, the most common pattern for representing data collections in JavaScript." },
      ]},
      { title: "5. Step 2: Basic Logic", content: [
        { type: "p", text: "Now we build the core functions: calculate average using <strong>reduce</strong>, grade labeling, and enriching student data." },
        { type: "p", text: "<strong>Calculating Average with reduce:</strong> The reduce function is one of the most powerful array methods. It takes a callback and an initial value, then iterates through each element accumulating the result." },
        { type: "p", text: "<strong>Data Enrichment with map and Spread:</strong> After calculating the average, we use map to create an enhanced version of each student. We use Spread Operator to add new fields without modifying the original object." },
      ]},
      { title: "6. Step 3: Helper Functions (Search and Filter)", content: [
        { type: "p", text: "Now we build functions that search and filter data. These are the foundation of any web application: search, filtering, and conditional verification." },
        { type: "p", text: "<strong>Method Comparison:</strong>" },
        { type: "li", text: "filter() - Returns an array of elements matching a condition" },
        { type: "li", text: "find() - Returns the first element matching a condition" },
        { type: "li", text: "some() - Checks if at least one element matches" },
        { type: "li", text: "every() - Checks if all elements match" },
        { type: "li", text: "map() - Transforms each element to a new value" },
        { type: "li", text: "reduce() - Collects elements into a single value" },
      ]},
      { title: "7. Step 4: Putting It All Together (Statistics and Reports)", content: [
        { type: "p", text: "Now we combine all functions into an integrated system: general statistics, detailed reports, and data management (add, delete, update)." },
        { type: "p", text: "<strong>Data Management (CRUD):</strong> Create (add), Read (view), Update (modify), Delete (remove). Notice we never modify the original array - we create new copies, which is a fundamental principle in React." },
      ]},
      { title: "8. Complete Code", content: [
        { type: "p", text: "This is the complete code for the student management system. You can copy and run it directly in a JavaScript editor." },
      ]},
      { title: "9. Modules and async/await", content: [
        { type: "p", text: "<strong>Splitting Code into Modules:</strong> In real projects, we don't write everything in one file. Each file is responsible for a specific task. This is called Modular Programming." },
        { type: "p", text: "<strong>Async Simulation:</strong> In real applications, data comes from a server via the network. We use async/await with Promises to handle this delay." },
      ]},
      { title: "10. Additional Challenges", content: [
        { type: "p", text: "Time for a challenge! Try solving these challenges to solidify what you've learned." },
        { type: "li", text: "<strong>Challenge 1:</strong> Sort students by average (highest to lowest)" },
        { type: "li", text: "<strong>Challenge 2:</strong> Group by department" },
        { type: "li", text: "<strong>Challenge 3:</strong> Export to CSV format" },
        { type: "li", text: "<strong>Challenge 4:</strong> Grade validation system" },
        { type: "li", text: "<strong>Challenge 5:</strong> Advanced search with multiple criteria" },
      ]},
    ],
    quiz: [
      { question: "Which concept will we use to calculate the average of a group of grades in an array?", options: ["map - to transform elements", "filter - to filter elements", "reduce - to collect elements into a single value", "find - to search for a specific element"], correctAnswer: 2, explanation: "reduce is most suitable because it iterates through each element and collects them into a single value (the sum), then we divide by the number of elements to get the average." },
    ],
    challenge: { title: "Additional Challenges", description: "Try these challenges: 1. Sort students by average, 2. Group by department, 3. Export to CSV, 4. Grade validation, 5. Advanced search." },
    cheatSheet: { title: "Student Management System - Complete Reference", items: [
      { label: "Data Enrichment", description: "calculateAverage(grades) using reduce | getGradeLabel(average) using if/else | enrichStudent(student) using spread" },
      { label: "Search and Filter", description: "getActiveStudents() using filter | getTopStudents() using filter | findByName() using find | searchStudents() using filter with includes" },
      { label: "Statistics", description: "getStatistics() using reduce to build complete stats object with count, average, highest, lowest, active" },
      { label: "Data Management", description: "addStudent() using spread | removeStudent() using filter | updateGrades() using map with spread" },
      { label: "Async Patterns", description: "fetchStudentsFromAPI() using Promise | async/await with try/catch/finally | processStudentData() combining map, reduce, async" },
    ]},
  },
  fr: {
    sections: [
      { title: "1. Introduction du Projet", content: [
        { type: "p", text: "Bienvenue dans le dernier cours de l'étape JavaScript + ES6+ ! Dans ce cours, nous construirons un projet pratique qui combine <strong>tous les concepts</strong> que vous avez appris dans les cours précédents." },
        { type: "callout", title: "Notre Projet :", text: "Un Système de Gestion d'Étudiants qui contient les données des étudiants et leurs moyennes. Nous construirons des fonctions pour ajouter des étudiants, calculer les moyennes, filtrer et afficher des rapports." },
        { type: "p", text: "Ce projet est conçu pour être un <strong>pont</strong> entre les fondamentaux de JavaScript et la bibliothèque React." },
        { type: "li", text: "Tableaux et Objets = <strong>Props et State</strong> dans React" },
        { type: "li", text: "Fonctions Helper = <strong>Custom Hooks</strong>" },
        { type: "li", text: "Transformation des Données = <strong>JSX et Rendu</strong>" },
        { type: "li", text: "async/await = <strong>useEffect et Récupération de Données</strong>" },
        { type: "li", text: "Modules = <strong>Division des Composants</strong>" },
      ]},
      { title: "2. Ce Que Nous Allons Apprendre", content: [
        { type: "p", text: "À travers ce projet, vous appliquerez pratiquement :" },
        { type: "li", text: "Structures de Données (Tableaux & Objets)" },
        { type: "li", text: "Fonctions Fléchées" },
        { type: "li", text: "Destructuration" },
        { type: "li", text: "Opérateur Spread" },
        { type: "li", text: "map, filter, reduce" },
        { type: "li", text: "find, some, every" },
        { type: "li", text: "Template Literals" },
        { type: "li", text: "Modules" },
        { type: "li", text: "async/await" },
      ]},
      { title: "3. Structure du Projet", content: [
        { type: "p", text: "Dans les vrais projets, nous divisons le code en fichiers séparés. Pour des raisons pédagogiques, nous écrirons tout dans un seul fichier, puis montrerons comment le diviser." },
        { type: "p", text: "<strong>Principe Fondamental :</strong> Chaque fichier est responsable d'une seule tâche (Principe de Responsabilité Unique)." },
      ]},
      { title: "4. Étape 1 : Préparation des Données", content: [
        { type: "p", text: "La première étape est de définir la forme des données. Nous utilisons un <strong>tableau d'objets</strong>, le pattern le plus courant pour représenter des collections de données." },
      ]},
      { title: "5. Étape 2 : Logique de Base", content: [
        { type: "p", text: "Nous construisons les fonctions principales : calcul de la moyenne avec <strong>reduce</strong>, étiquetage des notes, et enrichissement des données étudiantes." },
      ]},
      { title: "6. Étape 3 : Fonctions Helper (Recherche et Filtrage)", content: [
        { type: "p", text: "Nous construisons les fonctions de recherche et de filtrage, fondamentales de toute application web." },
      ]},
      { title: "7. Étape 4 : Tout Combiner (Statistiques et Rapports)", content: [
        { type: "p", text: "Nous combinons toutes les fonctions en un système intégré : statistiques générales, rapports détaillés, et gestion des données (ajout, suppression, modification)." },
        { type: "p", text: "<strong>Gestion des Données (CRUD) :</strong> Create, Read, Update, Delete. Nous ne modifions jamais le tableau original - nous créons de nouvelles copies." },
      ]},
      { title: "8. Code Complet", content: [
        { type: "p", text: "Voici le code complet du système de gestion des étudiants. Vous pouvez le copier et l'exécuter directement." },
      ]},
      { title: "9. Modules et async/await", content: [
        { type: "p", text: "<strong>Division du Code en Modules :</strong> Dans les vrais projets, nous n'écrivons pas tout dans un seul fichier." },
        { type: "p", text: "<strong>Simulation Async :</strong> Dans les vraies applications, les données viennent d'un serveur via le réseau." },
      ]},
      { title: "10. Défis Supplémentaires", content: [
        { type: "p", text: "Place aux défis ! Essayez de résoudre ces défis pour consolider vos connaissances." },
        { type: "li", text: "<strong>Défi 1 :</strong> Trier les étudiants par moyenne" },
        { type: "li", text: "<strong>Défi 2 :</strong> Grouper par département" },
        { type: "li", text: "<strong>Défi 3 :</strong> Exporter en format CSV" },
        { type: "li", text: "<strong>Défi 4 :</strong> Système de validation des notes" },
        { type: "li", text: "<strong>Défi 5 :</strong> Recherche avancée avec critères multiples" },
      ]},
    ],
    quiz: [
      { question: "Quel concept utiliserons-nous pour calculer la moyenne d'un groupe de notes ?", options: ["map - pour transformer les éléments", "filter - pour filtrer les éléments", "reduce - pour collecter les éléments en une seule valeur", "find - pour chercher un élément spécifique"], correctAnswer: 2, explanation: "reduce est la plus appropriée car elle parcourt chaque élément et les collecte en une seule valeur (la somme), puis nous divisons par le nombre d'éléments." },
    ],
    challenge: { title: "Défis Supplémentaires", description: "Essayez ces défis : 1. Trier par moyenne, 2. Grouper par département, 3. Exporter CSV, 4. Validation des notes, 5. Recherche avancée." },
    cheatSheet: { title: "Système de Gestion d'Étudiants - Référence Complète", items: [
      { label: "Enrichissement", description: "calculateAverage(grades) avec reduce | getGradeLabel(average) avec if/else | enrichStudent(student) avec spread" },
      { label: "Recherche et Filtrage", description: "getActiveStudents() avec filter | getTopStudents() avec filter | findByName() avec find | searchStudents() avec filter" },
      { label: "Statistiques", description: "getStatistics() avec reduce pour construire l'objet complet" },
      { label: "Gestion des Données", description: "addStudent() avec spread | removeStudent() avec filter | updateGrades() avec map" },
      { label: "Patterns Async", description: "fetchStudentsFromAPI() avec Promise | async/await avec try/catch/finally" },
    ]},
  },
  de: {
    sections: [
      { title: "1. Projekteinführung", content: [
        { type: "p", text: "Willkommen zur letzten Lektion der JavaScript + ES6+ Phase! In dieser Lektion werden wir ein praktisches Projekt erstellen, das <strong>alle Konzepte</strong> kombiniert, die Sie in vorherigen Lektionen gelernt haben." },
        { type: "callout", title: "Unser Projekt:", text: "Ein Schülerverwaltungssystem mit Schülerdaten und Durchschnitten. Wir erstellen Funktionen zum Hinzufügen von Schülern, Berechnen von Durchschnitten, Filtern und Anzeigen von Berichten." },
        { type: "p", text: "Dieses Projekt ist als <strong>Brücke</strong> zwischen JavaScript-Grundlagen und der React-Bibliothek konzipiert." },
        { type: "li", text: "Arrays und Objekte = <strong>Props und State</strong> in React" },
        { type: "li", text: "Hilfsfunktionen = <strong>Custom Hooks</strong>" },
        { type: "li", text: "Datentransformation = <strong>JSX und Rendering</strong>" },
        { type: "li", text: "async/await = <strong>useEffect und Datenabruf</strong>" },
        { type: "li", text: "Module = <strong>Komponentenaufteilung</strong>" },
      ]},
      { title: "2. Was Wir Lernen Werden", content: [
        { type: "p", text: "Durch dieses Projekt wenden Sie praktisch an:" },
        { type: "li", text: "Datenstrukturen (Arrays & Objekte)" },
        { type: "li", text: "Pfeilfunktionen" },
        { type: "li", text: "Destructuring" },
        { type: "li", text: "Spread-Operator" },
        { type: "li", text: "map, filter, reduce" },
        { type: "li", text: "find, some, every" },
        { type: "li", text: "Template Literals" },
        { type: "li", text: "Module" },
        { type: "li", text: "async/await" },
      ]},
      { title: "3. Projektstruktur", content: [
        { type: "p", text: "In echten Projekten teilen wir Code in separate Dateien auf. Zu Bildungszwecken schreiben wir alles in eine Datei." },
        { type: "p", text: "<strong>Grundprinzip:</strong> Jede Datei ist nur für eine Aufgabe verantwortlich (Single Responsibility Principle)." },
      ]},
      { title: "4. Schritt 1: Daten Einrichten", content: [
        { type: "p", text: "Der erste Schritt ist die Definition der Datenform. Wir verwenden ein <strong>Array von Objekten</strong>, das gängigste Muster für Datensammlungen." },
      ]},
      { title: "5. Schritt 2: Grundlegende Logik", content: [
        { type: "p", text: "Wir erstellen die Kernfunktionen: Durchschnittsberechnung mit <strong>reduce</strong>, Notenbezeichnung und Datenanreicherung." },
      ]},
      { title: "6. Schritt 3: Hilfsfunktionen (Suche und Filterung)", content: [
        { type: "p", text: "Wir erstellen Such- und Filterfunktionen, die Grundlage jeder Webanwendung." },
      ]},
      { title: "7. Schritt 4: Alles Zusammenfügen (Statistiken und Berichte)", content: [
        { type: "p", text: "Wir kombinieren alle Funktionen in ein integriertes System: allgemeine Statistiken, detaillierte Berichte und Datenverwaltung." },
        { type: "p", text: "<strong>Datenverwaltung (CRUD):</strong> Create, Read, Update, Delete. Wir ändern nie das Original-Array - wir erstellen neue Kopien." },
      ]},
      { title: "8. Vollständiger Code", content: [
        { type: "p", text: "Dies ist der vollständige Code des Schülerverwaltungssystems. Sie können ihn kopieren und direkt ausführen." },
      ]},
      { title: "9. Module und async/await", content: [
        { type: "p", text: "<strong>Code-Aufteilung in Module:</strong> In echten Projekten schreiben wir nicht alles in eine Datei." },
        { type: "p", text: "<strong>Async-Simulation:</strong> In echten Anwendungen kommen Daten von einem Server über das Netzwerk." },
      ]},
      { title: "10. Zusätzliche Herausforderungen", content: [
        { type: "p", text: "Zeit für Herausforderungen! Versuchen Sie diese Aufgaben, um Ihr Wissen zu festigen." },
        { type: "li", text: "<strong>Herausforderung 1:</strong> Schüler nach Durchschnitt sortieren" },
        { type: "li", text: "<strong>Herausforderung 2:</strong> Nach Abteilung gruppieren" },
        { type: "li", text: "<strong>Herausforderung 3:</strong> Als CSV exportieren" },
        { type: "li", text: "<strong>Herausforderung 4:</strong> Notenvalidierungssystem" },
        { type: "li", text: "<strong>Herausforderung 5:</strong> Erweiterte Suche mit mehreren Kriterien" },
      ]},
    ],
    quiz: [
      { question: "Welches Konzept verwenden wir, um den Durchschnitt einer Notengruppe zu berechnen?", options: ["map - um Elemente zu transformieren", "filter - um Elemente zu filtern", "reduce - um Elemente in einen einzelnen Wert zu sammeln", "find - um ein spezifisches Element zu suchen"], correctAnswer: 2, explanation: "reduce ist am geeignetsten, da es jedes Element durchläuft und zu einem einzelnen Wert (der Summe) sammelt, dann teilen wir durch die Anzahl der Elemente." },
    ],
    challenge: { title: "Zusätzliche Herausforderungen", description: "Versuchen Sie diese Aufgaben: 1. Nach Durchschnitt sortieren, 2. Nach Abteilung gruppieren, 3. CSV exportieren, 4. Notenvalidierung, 5. Erweiterte Suche." },
    cheatSheet: { title: "Schülerverwaltungssystem - Vollständige Referenz", items: [
      { label: "Datenanreicherung", description: "calculateAverage(grades) mit reduce | getGradeLabel(average) mit if/else | enrichStudent(student) mit spread" },
      { label: "Suche und Filterung", description: "getActiveStudents() mit filter | getTopStudents() mit filter | findByName() mit find | searchStudents() mit filter" },
      { label: "Statistiken", description: "getStatistics() mit reduce zum Erstellen des vollständigen Stats-Objekts" },
      { label: "Datenverwaltung", description: "addStudent() mit spread | removeStudent() mit filter | updateGrades() mit map" },
      { label: "Async-Muster", description: "fetchStudentsFromAPI() mit Promise | async/await mit try/catch/finally" },
    ]},
  },
};

export default translations;
