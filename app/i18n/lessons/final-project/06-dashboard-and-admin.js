const translations = {
  en: {
    sections: [
      { title: "Introduction to Dashboard and Admin", content: [
        { type: "p", text: "The dashboard is the control center for managing blog content. In this lesson, we build a complete admin panel with post management, category management, and image uploads." },
        { type: "callout", title: "What We Will Build", text: "Dashboard homepage with statistics, post management with CRUD operations, category management, image upload with Supabase Storage, pagination for large datasets." }
      ]},
      { title: "Dashboard Homepage", content: [
        { type: "p", text: "The dashboard shows statistics (total posts, categories, users) and recent posts. Use Promise.all to fetch multiple counts in parallel." },
        { type: "callout", title: "Performance Tip", text: "Promise.all executes multiple database queries simultaneously instead of sequentially, significantly improving load times." }
      ]},
      { title: "Post Management", content: [
        { type: "p", text: "Manage all posts with a table view showing title, category, status, date, and action buttons for edit, publish toggle, and delete." },
        { type: "callout", title: "Post Actions", text: "Edit opens the edit form, Publish toggle changes status between draft and published, Delete removes the post with confirmation." }
      ]},
      { title: "Image Upload with Supabase Storage", content: [
        { type: "p", text: "Upload images to Supabase Storage with file type validation, size limits, and automatic URL generation." },
        { type: "callout", title: "Upload Best Practices", text: "Validate file types (JPEG, PNG, WebP), enforce size limits (5MB), generate unique filenames, provide upload preview." }
      ]},
      { title: "Category Management", content: [
        { type: "p", text: "Create, edit, and delete categories. Show post count per category." },
        { type: "callout", title: "Category Operations", text: "Inline form for creating/editing, delete with confirmation, display post count for each category." }
      ]},
      { title: "Pagination", content: [
        { type: "p", text: "Pagination splits large datasets into pages for better performance and user experience." },
        { type: "callout", title: "Pagination Implementation", text: "Calculate offset from current page, use Supabase .range() for limiting results, show page numbers with ellipsis for many pages." }
      ]}
    ],
    quiz: [
      { question: "Why use Promise.all for fetching dashboard statistics?",
        options: ["It is required by JavaScript", "It executes multiple queries in parallel for better performance", "It is the only way to query Supabase", "It prevents errors"],
        correctAnswer: 1, explanation: "Promise.all runs multiple asynchronous operations simultaneously, which is much faster than running them one after another." },
      { question: "What is the purpose of pagination?",
        options: ["To make the database smaller", "To split large datasets into manageable pages", "To prevent SQL injection", "To encrypt data"],
        correctAnswer: 1, explanation: "Pagination splits large result sets into smaller pages, improving both performance and user experience." }
    ],
    challenge: { title: "Challenge: Add Search to Dashboard",
      description: "Add a search input to the posts management page. Create SearchInput component with debounce, use URL params for search query, implement Supabase filtering with .ilike()." },
    cheatSheet: { title: "Dashboard Quick Reference", items: [
      { title: "Supabase Storage", content: ".from('bucket').upload(path, file), .getPublicUrl(path)" },
      { title: "Pagination", content: ".range(start, end), { count: 'exact' }, calculate offset" },
      { title: "Performance", content: "Promise.all for parallel queries, useOptimistic for UI updates" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction au tableau de bord et admin", content: [
        { type: "p", text: "Le tableau de bord est le centre de controle pour gerer le contenu du blog. Nous construisons un panneau admin complet." },
        { type: "callout", title: "Ce que nous allons construire", text: "Page d'accueil avec statistiques, gestion des articles, gestion des categories, telechargement d'images, pagination." }
      ]},
      { title: "Page d'accueil du tableau de bord", content: [
        { type: "p", text: "Le tableau de bord affiche les statistiques et les articles recents. Utilisez Promise.all pour recuperer plusieurs compteurs en parallele." },
        { type: "callout", title: "Conseil de performance", text: "Promise.all execute plusieurs requetes simultanement au lieu de sequentiellement." }
      ]},
      { title: "Gestion des articles", content: [
        { type: "p", text: "Gerez tous les articles avec une vue en tableau montrant titre, categorie, statut et actions." },
        { type: "callout", title: "Actions sur les articles", text: "Modifier, basculer la publication, supprimer avec confirmation." }
      ]},
      { title: "Telechargement d'images", content: [
        { type: "p", text: "Telechargez des images vers Supabase Storage avec validation et limites de taille." },
        { type: "callout", title: "Bonnes pratiques", text: "Validez les types de fichier, imposez les limites de taille, generez des noms uniques." }
      ]},
      { title: "Gestion des categories", content: [
        { type: "p", text: "Creez, modifiez et supprimez des categories avec compteur d'articles." },
        { type: "callout", title: "Operations sur les categories", text: "Formulaire integre, suppression avec confirmation, affichage du nombre d'articles." }
      ]},
      { title: "Pagination", content: [
        { type: "p", text: "La pagination divise les grands ensembles de donnees en pages pour de meilleures performances." },
        { type: "callout", title: "Implementation", text: "Calculez l'offset, utilisez .range() de Supabase, affichez les numeros de page." }
      ]}
    ],
    quiz: [
      { question: "Pourquoi utiliser Promise.all pour les statistiques du tableau de bord ?",
        options: ["C'est requis par JavaScript", "Il execute plusieurs requetes en parallele", "C'est la seule facon d'interroger Supabase", "Il previent les erreurs"],
        correctAnswer: 1, explanation: "Promise.all execute plusieurs operations asynchrones simultanement, ce qui est plus rapide." },
      { question: "Quel est le but de la pagination ?",
        options: ["Reduire la base de donnees", "Diviser les grands ensembles en pages gerables", "Prevenir l'injection SQL", "Chiffrer les donnees"],
        correctAnswer: 1, explanation: "La pagination divise les grands resultats en pages plus petites, ameliorant les performances et l'UX." }
    ],
    challenge: { title: "Defi : Ajouter la recherche au tableau de bord",
      description: "Ajoutez un champ de recherche a la page de gestion des articles avec debounce et filtrage Supabase." },
    cheatSheet: { title: "Reference rapide du tableau de bord", items: [
      { title: "Supabase Storage", content: ".from('bucket').upload(path, file)" },
      { title: "Pagination", content: ".range(start, end), { count: 'exact' }" },
      { title: "Performance", content: "Promise.all, useOptimistic" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Dashboard und Admin", content: [
        { type: "p", text: "Das Dashboard ist das Kontrollzentrum zur Verwaltung von Blog-Inhalten. Wir bauen ein vollstandiges Admin-Panel." },
        { type: "callout", title: "Was wir bauen werden", text: "Dashboard-Startseite mit Statistiken, Post-Verwaltung, Kategorieverwaltung, Bildupload, Pagination." }
      ]},
      { title: "Dashboard-Startseite", content: [
        { type: "p", text: "Das Dashboard zeigt Statistiken und aktuelle Posts. Verwenden Sie Promise.all fur parallele Abfragen." },
        { type: "callout", title: "Leistungstipp", text: "Promise.all fuhrt mehrere Abfragen gleichzeitig aus, was die Ladezeit erheblich verbessert." }
      ]},
      { title: "Post-Verwaltung", content: [
        { type: "p", text: "Verwalten Sie alle Posts mit einer Tabellenansicht mit Titel, Kategorie, Status und Aktionen." },
        { type: "callout", title: "Post-Aktionen", text: "Bearbeiten, Veroffentlichung umschalten, Loschen mit Bestatigung." }
      ]},
      { title: "Bildupload mit Supabase Storage", content: [
        { type: "p", text: "Laden Sie Bilder mit Dateitypvalidierung und Größenbegrenzungen hoch." },
        { type: "callout", title: "Best Practices", text: "Validieren Sie Dateitypen, setzen Sie Größenbegrenzungen, generieren Sie eindeutige Dateinamen." }
      ]},
      { title: "Kategorieverwaltung", content: [
        { type: "p", text: "Erstellen, bearbeiten und loschen Sie Kategorien mit Post-Anzahl." },
        { type: "callout", title: "Kategorieoperationen", text: "Inline-Formular, Loschen mit Bestatigung, Post-Anzahl anzeigen." }
      ]},
      { title: "Pagination", content: [
        { type: "p", text: "Pagination teilt große Datensätze in Seiten fur bessere Leistung." },
        { type: "callout", title: "Implementierung", text: "Offset berechnen, Supabase .range() verwenden, Seitenzahlen anzeigen." }
      ]}
    ],
    quiz: [
      { question: "Warum Promise.all fur Dashboard-Statistiken verwenden?",
        options: ["Wird von JavaScript verlangt", "Fuhrt mehrere Abfragen parallel aus", "Ist die einzige Moglichkeit", "Verhindert Fehler"],
        correctAnswer: 1, explanation: "Promise.all fuhrt mehrere asynchrone Operationen gleichzeitig aus, was schneller ist." },
      { question: "Was ist der Zweck der Pagination?",
        options: ["Datenbank kleiner machen", "Große Datensätze in handhabbare Seiten teilen", "SQL-Injection verhindern", "Daten verschlüsseln"],
        correctAnswer: 1, explanation: "Pagination teilt groβe Ergebnismengen in kleinere Seiten auf." }
    ],
    challenge: { title: "Herausforderung: Suche zum Dashboard hinzufugen",
      description: "Fugen Sie ein Suchfeld zur Post-Verwaltungsseite hinzu." },
    cheatSheet: { title: "Dashboard-Schnellreferenz", items: [
      { title: "Supabase Storage", content: ".from('bucket').upload(path, file)" },
      { title: "Pagination", content: ".range(start, end), { count: 'exact' }" },
      { title: "Leistung", content: "Promise.all, useOptimistic" }
    ]}
  }
};
export default translations;
