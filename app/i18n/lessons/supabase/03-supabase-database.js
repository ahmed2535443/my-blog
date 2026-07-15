const translations = {
  ar: {
    sections: [
      { title: "مفاهيم قواعد البيانات", content: [
        { type: "p", text: "قاعدة البيانات هي طريقة منظمة لتخزين البيانات واسترجاعها وإدارتها. فكر فيها كخزانة ملفات رقمية تحتوي كل مجلد على بيانات محددة." },
        { type: "p", text: "Supabase يستخدم PostgreSQL، الذي ينظم البيانات في <strong>جداول</strong> (مثل جداول Excel) مع <strong>صفوف</strong> (سجلات) و <strong>أعمدة</strong> (حقول)." },
      ]},
      { title: "إنشاء الجداول", content: [
        { type: "li", text: "اذهب إلى محرر الجداول في لوحة تحكم Supabase" },
        { type: "li", text: "انقر على 'Create Table'" },
        { type: "li", text: "أعطه اسماً (مثل 'posts'، 'users'، 'comments')" },
        { type: "li", text: "أضف أعمدة مع أنواع بياناتها" },
        { type: "li", text: "اختر نوع البيانات المناسب لكل عمود" },
      ]},
      { title: "أنواع البيانات", content: [
        { type: "li", text: "<strong>int4/int8</strong> — أعداد صحيحة (صغيرة/كبيرة)" },
        { type: "li", text: "<strong>float8</strong> — أعداد عشرية" },
        { type: "li", text: "<strong>text</strong> — نص بأي طول" },
        { type: "li", text: "<strong>varchar(255)</strong> — نص بحد أقصى للطول" },
        { type: "li", text: "<strong>bool</strong> — منطقي (صحيح/خطأ)" },
        { type: "li", text: "<strong>timestamptz</strong> — تاريخ ووقت مع المنطقة الزمنية" },
        { type: "li", text: "<strong>uuid</strong> — معرّف فريد" },
        { type: "li", text: "<strong>jsonb</strong> — بيانات JSON للهياكل المعقدة" },
      ]},
      { title: "العلاقات", content: [
        { type: "li", text: "<strong>واحد إلى واحد</strong>: كل مستخدم له ملف شخصي واحد" },
        { type: "li", text: "<strong>واحد إلى متعدد</strong>: منشور واحد له العديد من التعليقات" },
        { type: "li", text: "<strong>متعدد إلى متعدد</strong>: الطلاب يسجّلون في العديد من الدورات" },
      ]},
      { title: "عمليات CRUD", content: [
        { type: "p", text: "CRUD تعني الإنشاء والقراءة والتحديث والحذف — العمليات الأساسية الأربعة لإدارة البيانات." },
        { type: "code", text: "// إنشاء\nawait supabase.from('posts').insert({ title: 'مرحباً', content: 'العالم' });\n\n// قراءة\nconst { data } = await supabase.from('posts').select('*');\n\n// تحديث\nawait supabase.from('posts').update({ title: 'محدّث' }).eq('id', 1);\n\n// حذف\nawait supabase.from('posts').delete().eq('id', 1);" },
      ]},
      { title: "ملخص الدرس", content: [
        { type: "li", text: "قواعد البيانات تنظم البيانات في جداول مع صفوف وأعمدة." },
        { type: "li", text: "كل عمود له نوع بيانات محدد." },
        { type: "li", text: "العلاقات تربط الجداول معاً." },
        { type: "li", text: "عمليات CRUD تدير بياناتك." },
      ]}
    ],
    quiz: [
      { question: "ماذا يعني CRUD؟", options: ["إنشاء وقراءة وتحديث وحذف", "اتصال وتشغيل واستخدام ونشر", "كود وعرض ورفع وتنزيل", "إنشاء واسترجاع ورفع وتدمير"], explanation: "CRUD = إنشاء وقراءة وتحديث وحذف — العمليات الأساسية الأربعة لقاعدة البيانات." },
      { question: "أي نوع بيانات تستخدمه لاسم المستخدم الكامل؟", options: ["int4", "bool", "text", "uuid"], text: "text مناسب لتخزين الأسماء بأي طول." },
      { question: "ما هي العلاقة واحد إلى متعدد؟", options: ["سجل واحد في A يرتبط بواحد في B", "سجل واحد في A يرتبط بالعديد في B", "العديد من السجلات في A مرتبطة بالعديد في B", "لا علاقة"], explanation: "واحد إلى متعدد: سجل واحد في الجدول الأول يرتبط بالعديد من السجلات في الجدول الثاني." },
    ],
    challenge: { title: "أنشئ جدولك الأول", description: "أنشئ جدول 'posts' بأعمدة: id و title و content و created_at. أضف 3 سجلات باستخدام محرر الجداول." },
    cheatSheet: { title: "ملخص مراجعة قواعد البيانات و CRUD", items: [
      { term: "جدول", definition: "مجموعة بيانات مرتبطة" },
      { term: "صف", definition: "سجل واحد في الجدول" },
      { term: "عمود", definition: "حقل بنوع بيانات محدد" },
      { term: "CRUD", definition: "إنشاء وقراءة وتحديث وحذف" },
      { term: ".from('table')", definition: "تحديد جدول" },
      { term: ".select('*')", definition: "تحديد جميع الأعمدة" },
      { term: ".insert({})", definition: "إضافة سجل جديد" },
      { term: ".update({})", definition: "تعديل سجل موجود" },
      { term: ".delete()", definition: "إزالة سجل" },
      { term: ".eq('col', val)", definition: "حيث العمود يساوي القيمة" }
    ]},
    interviewQuestions: [
      { q: "كيف تنشئ جدول في Supabase؟", a: "من Table Editor أو SQL Editor مباشرة.", difficulty: "easy" },
      { q: "ما هي RLS؟", a: "Row Level Security — تحدد من يمكنه قراءة/تعديل كل صف.", difficulty: "medium" },
    ],
    tricks: [
      { title: "فعّل RLS دائماً", description: "بدون RLS، أي شخص يمكنه الوصول لبياناتك", icon: "brain" },
    ]
  },
  en: {
    sections: [
      { title: "Database Concepts", content: [
        { type: "p", text: "A database is an organized way to store, retrieve, and manage data. Think of it as a digital filing cabinet where each folder contains specific data." },
        { type: "p", text: "Supabase uses PostgreSQL, which organizes data into <strong>tables</strong> (like Excel spreadsheets) with <strong>rows</strong> (records) and <strong>columns</strong> (fields)." },
      ]},
      { title: "Creating Tables", content: [
        { type: "li", text: "Go to Table Editor in your Supabase dashboard" },
        { type: "li", text: "Click 'Create Table'" },
        { type: "li", text: "Give it a name (e.g., 'posts', 'users', 'comments')" },
        { type: "li", text: "Add columns with their data types" },
        { type: "li", text: "Choose the appropriate data type for each column" },
      ]},
      { title: "Data Types", content: [
        { type: "li", text: "<strong>int4/int8</strong> — Integer numbers (small/large)" },
        { type: "li", text: "<strong>float8</strong> — Decimal numbers" },
        { type: "li", text: "<strong>text</strong> — Text of any length" },
        { type: "li", text: "<strong>varchar(255)</strong> — Text with maximum length" },
        { type: "li", text: "<strong>bool</strong> — Boolean (true/false)" },
        { type: "li", text: "<strong>timestamptz</strong> — Date and time with timezone" },
        { type: "li", text: "<strong>uuid</strong> — Unique identifier" },
        { type: "li", text: "<strong>jsonb</strong> — JSON data for complex structures" },
      ]},
      { title: "Relationships", content: [
        { type: "li", text: "<strong>One-to-One</strong>: Each user has one profile" },
        { type: "li", text: "<strong>One-to-Many</strong>: One post has many comments" },
        { type: "li", text: "<strong>Many-to-Many</strong>: Students enroll in many courses" },
      ]},
      { title: "CRUD Operations", content: [
        { type: "p", text: "CRUD stands for Create, Read, Update, Delete — the four basic operations for managing data." },
        { type: "code", text: "// Create\nawait supabase.from('posts').insert({ title: 'Hello', content: 'World' });\n\n// Read\nconst { data } = await supabase.from('posts').select('*');\n\n// Update\nawait supabase.from('posts').update({ title: 'Updated' }).eq('id', 1);\n\n// Delete\nawait supabase.from('posts').delete().eq('id', 1);" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Databases organize data into tables with rows and columns." },
        { type: "li", text: "Each column has a specific data type." },
        { type: "li", text: "Relationships connect tables together." },
        { type: "li", text: "CRUD operations manage your data." },
      ]}
    ],
    quiz: [
      { question: "What does CRUD stand for?", options: ["Create, Read, Update, Delete", "Connect, Run, Use, Deploy", "Code, Render, Upload, Download", "Create, Retrieve, Upload, Destroy"], explanation: "CRUD = Create, Read, Update, Delete — the four basic database operations." },
      { question: "What data type would you use for a user's full name?", options: ["int4", "bool", "text", "uuid"], explanation: "text is appropriate for storing names of any length." },
      { question: "What is a one-to-many relationship?", options: ["One record in A relates to one in B", "One record in A relates to many in B", "Many records in A relate to many in B", "No relationship"], explanation: "One-to-many: one record in the first table relates to many records in the second table." },
    ],
    challenge: { title: "Create Your First Table", description: "Create a 'posts' table with columns: id, title, content, created_at. Add 3 records using the Table Editor." },
    cheatSheet: { title: "Database & CRUD Cheat Sheet", items: [
      { term: "Table", definition: "Collection of related data" },
      { term: "Row", definition: "Single record in a table" },
      { term: "Column", definition: "Field with specific data type" },
      { term: "CRUD", definition: "Create, Read, Update, Delete" },
      { term: ".from('table')", definition: "Select a table" },
      { term: ".select('*')", definition: "Select all columns" },
      { term: ".insert({})", definition: "Add new record" },
      { term: ".update({})", definition: "Modify existing record" },
      { term: ".delete()", definition: "Remove record" },
      { term: ".eq('col', val)", definition: "Where column equals value" }
    ]},
    interviewQuestions: [
      { q: "How do you create a table in Supabase?", a: "From the Table Editor or SQL Editor directly.", difficulty: "easy" },
      { q: "What is RLS?", a: "Row Level Security — controls who can read/update each row.", difficulty: "medium" },
    ],
    tricks: [
      { title: "Always enable RLS", description: "Without RLS, anyone can access your data", icon: "brain" },
    ]
  },
  fr: {
    sections: [
      { title: "Concepts de base de données", content: [
        { type: "p", text: "Une base de données est un moyen organisé de stocker, récupérer et gérer les données." },
        { type: "p", text: "Supabase utilise PostgreSQL, qui organise les données en <strong>tables</strong> avec des <strong>lignes</strong> et des <strong>colonnes</strong>." },
      ]},
      { title: "Opérations CRUD", content: [
        { type: "p", text: "CRUD signifie Create, Read, Update, Delete — les quatre opérations de base pour gérer les données." },
        { type: "code", text: "// Créer\nawait supabase.from('posts').insert({ title: 'Bonjour' });\n\n// Lire\nconst { data } = await supabase.from('posts').select('*');" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Les bases de données organisent les données en tables." },
        { type: "li", text: "Chaque colonne a un type de données spécifique." },
        { type: "li", text: "Les opérations CRUD gèrent vos données." },
      ]}
    ],
    quiz: [
      { question: "Que signifie CRUD ?", options: ["Create, Read, Update, Delete", "Connect, Run, Use, Deploy"], explanation: "CRUD = Create, Read, Update, Delete." },
    ],
    challenge: { title: "Créer votre première table", description: "Créez une table 'posts' avec des colonnes : id, title, content, created_at." },
    cheatSheet: { title: "Base de données & CRUD Fiche mémo", items: [
      { term: "Table", definition: "Collection de données liées" },
      { term: "CRUD", definition: "Create, Read, Update, Delete" },
      { term: ".from('table')", definition: "Sélectionner une table" },
      { term: ".select('*')", definition: "Sélectionner toutes les colonnes" },
    ]}
  },
  de: {
    sections: [
      { title: "Datenbankkonzepte", content: [
        { type: "p", text: "Eine Datenbank ist eine organisierte Möglichkeit, Daten zu speichern, abzurufen und zu verwalten." },
        { type: "p", text: "Supabase verwendet PostgreSQL, das Daten in <strong>Tabellen</strong> mit <strong>Zeilen</strong> und <strong>Spalten</strong> organisiert." },
      ]},
      { title: "CRUD-Operationen", content: [
        { type: "p", text: "CRUD steht für Create, Read, Update, Delete — die vier grundlegenden Operationen." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Datenbanken organisieren Daten in Tabellen." },
        { type: "li", text: "Jede Spalte hat einen bestimmten Datentyp." },
        { type: "li", text: "CRUD-Operationen verwalten Ihre Daten." },
      ]}
    ],
    quiz: [
      { question: "Was bedeutet CRUD?", options: ["Create, Read, Update, Delete", "Connect, Run, Use, Deploy"], explanation: "CRUD = Create, Read, Update, Delete." },
    ],
    challenge: { title: "Erste Tabelle erstellen", description: "Erstellen Sie eine Tabelle 'posts' mit Spalten: id, title, content, created_at." },
    cheatSheet: { title: "Datenbank & CRUD Spickzettel", items: [
      { term: "Tabelle", definition: "Sammlung verwandter Daten" },
      { term: "CRUD", definition: "Create, Read, Update, Delete" },
      { term: ".from('table')", definition: "Tabelle auswählen" },
      { term: ".select('*')", definition: "Alle Spalten auswählen" },
    ]}
  }
};
export default translations;
