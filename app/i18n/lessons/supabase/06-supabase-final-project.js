const translations = {
  en: {
    sections: [
      { title: "Stage Summary", content: [
        { type: "p", text: "Congratulations on completing the Supabase stage! You've learned all the essential skills to use Supabase as a backend for your Next.js applications." },
        { type: "li", text: "Lesson 1: What is Supabase" },
        { type: "li", text: "Lesson 2: Installation and Setup" },
        { type: "li", text: "Lesson 3: Database — Tables, Relationships, CRUD" },
        { type: "li", text: "Lesson 4: Authentication" },
        { type: "li", text: "Lesson 5: Storage and Security" },
      ]},
      { title: "What You've Mastered", content: [
        { type: "li", text: "Creating and managing Supabase projects" },
        { type: "li", text: "Designing database tables and relationships" },
        { type: "li", text: "Performing CRUD operations" },
        { type: "li", text: "Implementing multiple authentication methods" },
        { type: "li", text: "Managing file storage" },
        { type: "li", text: "Applying Row Level Security" },
      ]},
      { title: "Final Project: Student Management System", content: [
        { type: "p", text: "In this project, we'll build a complete student management system using all the concepts we've learned." },
        { type: "li", text: "Design database tables: Students, Teachers, Courses, Enrollments" },
        { type: "li", text: "Implement email/password authentication" },
        { type: "li", text: "Create CRUD operations for all entities" },
        { type: "li", text: "Add file upload for student photos" },
        { type: "li", text: "Apply security policies to protect data" },
      ]},
      { title: "Best Practices", content: [
        { type: "li", text: "Always use environment variables for keys" },
        { type: "li", text: "Enable RLS on all tables with user data" },
        { type: "li", text: "Use relationships instead of duplicating data" },
        { type: "li", text: "Handle errors gracefully in your code" },
        { type: "li", text: "Keep your Supabase client configuration in one place" },
      ]},
      { title: "What's Next?", content: [
        { type: "p", text: "After this stage, you can move on to Clerk for advanced authentication, or start building real projects with Supabase + Next.js." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Mastered Supabase: database, auth, storage, security." },
        { type: "li", text: "Built a complete student management system." },
        { type: "li", text: "Ready for Clerk stage and real-world projects." },
      ]}
    ],
    quiz: [
      { question: "What is the best practice for storing Supabase keys?", options: ["In your code directly", "In environment variables", "In localStorage", "In a database"], explanation: "Always use environment variables (.env.local) for sensitive keys." },
      { question: "What is the purpose of RLS in Supabase?", options: ["Speed up queries", "Control row-level data access", "Manage file storage", "Handle real-time"], explanation: "RLS (Row Level Security) controls which rows each user can access." },
      { question: "Which is a benefit of using Supabase?", options: ["No coding needed", "Ready-made APIs and dashboard", "Only supports MySQL", "No authentication"], explanation: "Supabase provides ready-made APIs, a visual dashboard, and built-in authentication." },
    ],
    challenge: { title: "Build Student Management System", description: "Create a complete system with student/teacher tables, authentication, CRUD operations, file uploads, and security policies." },
    cheatSheet: { title: "Supabase Complete Cheat Sheet", items: [
      { term: "createClient(url, key)", definition: "Initialize Supabase client" },
      { term: ".from('table').select('*')", definition: "Read data" },
      { term: ".insert({})", definition: "Create record" },
      { term: ".update({}).eq('id', val)", definition: "Update record" },
      { term: ".delete().eq('id', val)", definition: "Delete record" },
      { term: "signUp()", definition: "Register user" },
      { term: "signInWithPassword()", definition: "Sign in" },
      { term: "signOut()", definition: "Sign out" },
      { term: ".upload('path', file)", definition: "Upload file" },
      { term: ".getPublicUrl('path')", definition: "Get file URL" },
      { term: "RLS + Policies", definition: "Row Level Security" },
      { term: ".env.local", definition: "Store environment variables" }
    ]}
  },
  fr: {
    sections: [
      { title: "Résumé de la stage", content: [
        { type: "p", text: "Félicitations pour avoir complété la stage Supabase ! Vous avez appris toutes les compétences essentielles." },
        { type: "li", text: "Leçon 1 : Qu'est-ce que Supabase" },
        { type: "li", text: "Leçon 2 : Installation et configuration" },
        { type: "li", text: "Leçon 3 : Base de données — Tables, Relations, CRUD" },
        { type: "li", text: "Leçon 4 : Authentification" },
        { type: "li", text: "Leçon 5 : Stockage et sécurité" },
      ]},
      { title: "Projet final : Système de gestion des étudiants", content: [
        { type: "p", text: "Nous allons construire un système complet de gestion des étudiants." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Maîtrisé Supabase : base de données, auth, stockage, sécurité." },
        { type: "li", text: "Prêt pour la stage Clerk et les projets réels." },
      ]}
    ],
    quiz: [
      { question: "Quelle est la meilleure pratique pour stocker les clés Supabase ?", options: ["Directement dans le code", "Dans des variables d'environnement", "Dans localStorage"], explanation: "Utilisez toujours des variables d'environnement pour les clés sensibles." },
    ],
    challenge: { title: "Construire le système de gestion", description: "Créez un système complet avec tables étudiants/enseignants, authentification et opérations CRUD." },
    cheatSheet: { title: "Supabase Fiche mémo complète", items: [
      { term: "createClient(url, key)", definition: "Initialiser le client" },
      { term: ".from('table').select('*')", definition: "Lire les données" },
      { term: ".insert({})", definition: "Créer un enregistrement" },
      { term: "signUp()", definition: "Inscrire un utilisateur" },
      { term: "signInWithPassword()", definition: "Se connecter" },
      { term: "RLS + Policies", definition: "Sécurité au niveau des lignes" },
    ]}
  },
  de: {
    sections: [
      { title: "Phasen-Zusammenfassung", content: [
        { type: "p", text: "Herzlichen Glückwunsch zum Abschluss der Supabase-Phase! Sie haben alle wesentlichen Fähigkeiten erlernt." },
        { type: "li", text: "Lektion 1: Was ist Supabase" },
        { type: "li", text: "Lektion 2: Installation und Einrichtung" },
        { type: "li", text: "Lektion 3: Datenbank — Tabellen, Beziehungen, CRUD" },
        { type: "li", text: "Lektion 4: Authentifizierung" },
        { type: "li", text: "Lektion 5: Speicher und Sicherheit" },
      ]},
      { title: "Abschlussprojekt: Studentenverwaltungssystem", content: [
        { type: "p", text: "Wir erstellen ein vollständiges Studentenverwaltungssystem mit allen Konzepten." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Supabase gemeistert: Datenbank, Auth, Speicher, Sicherheit." },
        { type: "li", text: "Bereit für die Clerk-Phase und reale Projekte." },
      ]}
    ],
    quiz: [
      { question: "Was ist die beste Methode zum Speichern von Supabase-Schlüsseln?", options: ["Direkt im Code", "In Umgebungsvariablen", "In localStorage"], explanation: "Verwenden Sie immer Umgebungsvariablen für sensible Schlüssel." },
    ],
    challenge: { title: "Studentenverwaltungssystem erstellen", description: "Erstellen Sie ein vollständiges System mit Authentifizierung und CRUD-Operationen." },
    cheatSheet: { title: "Supabase Vollständiger Spickzettel", items: [
      { term: "createClient(url, key)", definition: "Client initialisieren" },
      { term: ".from('table').select('*')", definition: "Daten lesen" },
      { term: ".insert({})", definition: "Datensatz erstellen" },
      { term: "signUp()", definition: "Benutzer registrieren" },
      { term: "signInWithPassword()", definition: "Anmelden" },
      { term: "RLS + Policies", definition: "Zeilenbasierte Sicherheit" },
    ]}
  }
};
export default translations;
