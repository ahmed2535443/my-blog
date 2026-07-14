const translations = {
  en: {
    sections: [
      { title: "Supabase Storage", content: [
        { type: "p", text: "Supabase Storage allows you to upload, manage, and serve files (images, videos, documents) with built-in CDN and access control." },
      ]},
      { title: "Creating a Bucket", content: [
        { type: "li", text: "Go to Storage in your dashboard" },
        { type: "li", text: "Click 'Create Bucket'" },
        { type: "li", text: "Choose a name and set it as public or private" },
      ]},
      { title: "Uploading Files", content: [
        { type: "code", text: "const { data, error } = await supabase.storage\n  .from('images')\n  .upload('folder/file.jpg', file);" },
      ]},
      { title: "Downloading/Viewing Files", content: [
        { type: "code", text: "const { data } = supabase.storage\n  .from('images')\n  .getPublicUrl('folder/file.jpg');" },
      ]},
      { title: "Row Level Security (RLS)", content: [
        { type: "p", text: "RLS is a PostgreSQL feature that controls which rows users can access. Each table can have policies that determine who can read, insert, update, or delete data." },
        { type: "p", text: "Always enable RLS on tables with user data. Create policies for each operation." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Supabase Storage handles file uploads and serving." },
        { type: "li", text: "Buckets organize files into containers." },
        { type: "li", text: "Row Level Security protects your data." },
      ]}
    ],
    quiz: [
      { question: "What is the purpose of Supabase Storage?", options: ["Database management", "File uploads and serving", "User authentication", "Real-time subscriptions"], explanation: "Supabase Storage is for uploading, managing, and serving files." },
      { question: "What is Row Level Security (RLS)?", options: ["A firewall feature", "Controls which rows users can access", "Encrypts data at rest", "Manages API keys"], explanation: "RLS is a PostgreSQL feature that controls row-level data access." },
    ],
    challenge: { title: "Implement File Uploads", description: "Create a file upload form, store files in Supabase Storage, and display them with proper access control." },
    cheatSheet: { title: "Storage & RLS Cheat Sheet", items: [
      { term: ".from('bucket')", definition: "Select storage bucket" },
      { term: ".upload('path', file)", definition: "Upload file" },
      { term: ".getPublicUrl('path')", definition: "Get file URL" },
      { term: "RLS", definition: "Row Level Security" },
      { term: "CREATE POLICY", definition: "Define access rules" },
      { term: "ENABLE ROW LEVEL SECURITY", definition: "Turn on RLS for table" }
    ]}
  },
  fr: {
    sections: [
      { title: "Stockage Supabase", content: [
        { type: "p", text: "Supabase Storage vous permet de télécharger, gérer et servir des fichiers avec CDN et contrôle d'accès intégrés." },
      ]},
      { title: "Sécurité au niveau des lignes (RLS)", content: [
        { type: "p", text: "RLS contrôle quelles lignes les utilisateurs peuvent accéder. Activez toujours RLS sur les tables avec des données utilisateur." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Supabase Storage gère les téléchargements de fichiers." },
        { type: "li", text: "La sécurité au niveau des lignes protège vos données." },
      ]}
    ],
    quiz: [
      { question: "Quel est le but de Supabase Storage ?", options: ["Gestion de base de données", "Téléchargement et service de fichiers", "Authentification utilisateur"], explanation: "Supabase Storage est pour télécharger, gérer et servir des fichiers." },
    ],
    challenge: { title: "Implémenter les téléchargements", description: "Créez un formulaire de téléchargement de fichiers avec contrôle d'accès." },
    cheatSheet: { title: "Stockage & RLS Fiche mémo", items: [
      { term: ".upload('path', file)", definition: "Télécharger un fichier" },
      { term: "RLS", definition: "Sécurité au niveau des lignes" },
    ]}
  },
  de: {
    sections: [
      { title: "Supabase-Speicher", content: [
        { type: "p", text: "Supabase Storage ermöglicht das Hochladen, Verwalten und Bereitstellen von Dateien mit CDN und Zugriffskontrolle." },
      ]},
      { title: "Zeilenbasierte Sicherheit (RLS)", content: [
        { type: "p", text: "RLS steuert, welche Zeilen Benutzer abrufen können. Aktivieren Sie immer RLS für Tabellen mit Benutzerdaten." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Supabase Storage verwaltet Datei-Uploads." },
        { type: "li", text: "Zeilenbizierte Sicherheit schützt Ihre Daten." },
      ]}
    ],
    quiz: [
      { question: "Was ist der Zweck von Supabase Storage?", options: ["Datenbankverwaltung", "Datei-Uploads und Bereitstellung", "Benutzerauthentifizierung"], explanation: "Supabase Storage dient zum Hochladen, Verwalten und Bereitstellen von Dateien." },
    ],
    challenge: { title: "Datei-Uploads implementieren", description: "Erstellen Sie ein Upload-Formular mit Zugriffskontrolle." },
    cheatSheet: { title: "Speicher & RLS Spickzettel", items: [
      { term: ".upload('path', file)", definition: "Datei hochladen" },
      { term: "RLS", definition: "Zeilenbasierte Sicherheit" },
    ]}
  }
};
export default translations;
