const translations = {
  en: {
    sections: [
      { title: "Introduction to Search and Pagination", content: [
        { type: "p", text: "Search and pagination are essential for any blog with many articles. This lesson covers implementing search with Supabase, URL-based parameters, and pagination components." },
        { type: "callout", title: "Topics Covered", text: "Search using Supabase ilike and Full-Text Search, URL parameters with Next.js, Pagination components, Debounced search input, Autocomplete suggestions." }
      ]},
      { title: "Search with Supabase", content: [
        { type: "p", text: "Use the ilike operator for simple text search or Full-Text Search for more advanced matching with ranking." },
        { type: "callout", title: "Search Methods", text: "ilike for case-insensitive pattern matching, or() for searching multiple columns, textSearch for PostgreSQL full-text search with ranking." }
      ]},
      { title: "Full-Text Search", content: [
        { type: "p", text: "PostgreSQL Full-Text Search provides more sophisticated text matching with tsvector, tsquery, and ranking functions." },
        { type: "callout", title: "Full-Text Search Benefits", text: "Faster than LIKE for large datasets, supports word stemming and ranking, can weight different fields differently." }
      ]},
      { title: "URL-based Search Parameters", content: [
        { type: "p", text: "Using URL parameters makes search bookmarkable and shareable. Next.js provides searchParams for reading URL query strings." },
        { type: "callout", title: "URL Parameters Benefits", text: "Bookmarks and shares work correctly, SEO friendly with indexed search pages, browser back/forward navigation works naturally." }
      ]},
      { title: "Pagination Component", content: [
        { type: "p", text: "Pagination splits results into pages with numbered navigation, previous/next buttons, and ellipsis for large page counts." },
        { type: "callout", title: "Pagination Logic", text: "Calculate total pages from count and limit, show smart page numbers with ellipsis, maintain search params across pages." }
      ]},
      { title: "Debounced Search Input", content: [
        { type: "p", text: "Debounce delays the search query until the user stops typing, reducing unnecessary API calls." },
        { type: "callout", title: "How Debounce Works", text: "Waits 300ms after last keystroke before executing search, prevents firing a request for every character typed." }
      ]},
      { title: "Autocomplete Suggestions", content: [
        { type: "p", text: "Show search suggestions as the user types, including post titles and categories." },
        { type: "callout", title: "Autocomplete Features", text: "Show suggestions for posts and categories, keyboard navigation support, click to navigate directly to results." }
      ]}
    ],
    quiz: [
      { question: "What is the advantage of URL parameters over useState for search?",
        options: ["Faster performance", "Makes search bookmarkable and SEO friendly", "Uses less memory", "Requires less code"],
        correctAnswer: 1, explanation: "URL parameters make the search state persistent in the URL, enabling bookmarks, sharing, and SEO indexing." },
      { question: "What does the Debounce hook do?",
        options: ["Sends search immediately", "Delays search execution until user stops typing", "Clears the search input", "Saves search history"],
        correctAnswer: 1, explanation: "Debounce waits for a pause in typing (typically 300ms) before executing the search, reducing unnecessary requests." },
      { question: "Which Supabase function is used for case-insensitive search?",
        options: ["eq()", "like()", "ilike()", "textSearch()"],
        correctAnswer: 2, explanation: "ilike performs case-insensitive pattern matching with wildcard support (%) for flexible text search." },
      { question: "Why use range(offset, limit - 1) in Supabase for pagination?",
        options: ["To delete records", "To limit results to the current page", "To sort results", "To count records"],
        correctAnswer: 1, explanation: "range() limits the query results to a specific subset. offset skips previous pages, limit - 1 defines the end of the range." }
    ],
    challenge: { title: "Challenge: Add Category Filtering",
      description: "Add category filtering to the blog search page. Create a CategoryFilter component, pass category as URL param, filter Supabase query by category." },
    cheatSheet: { title: "Search and Pagination Reference", items: [
      { title: "Supabase Search", content: ".ilike('title', '%query%'), .or(), .rpc('search_posts')" },
      { title: "Pagination", content: "offset = (page - 1) * limit, .range(offset, offset + limit - 1)" },
      { title: "URL Parameters", content: "searchParams.q for query, searchParams.page for page number" },
      { title: "Debounce", content: "useDebounce(value, 300) delays execution until typing stops" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction a la recherche et la pagination", content: [
        { type: "p", text: "La recherche et la pagination sont essentielles pour tout blog avec de nombreux articles." },
        { type: "callout", title: "Sujets traites", text: "Recherche avec ilike et Full-Text Search, parametres URL, pagination, recherche avec delai, suggestions automatiques." }
      ]},
      { title: "Recherche avec Supabase", content: [
        { type: "p", text: "Utilisez l'operateur ilike pour une recherche simple ou le Full-Text Search pour des correspondances plus avancees." },
        { type: "callout", title: "Methodes de recherche", text: "ilike pour la correspondance insensible a la casse, or() pour chercher dans plusieurs colonnes, textSearch pour la recherche avancee." }
      ]},
      { title: "Full-Text Search", content: [
        { type: "p", text: "Le Full-Text Search de PostgreSQL offre une correspondance de texte plus sophistiquee avec classement." },
        { type: "callout", title: "Avantages", text: "Plus rapide que LIKE, supporte le racinement des mots et le classement, peut ponderer differents champs." }
      ]},
      { title: "Parametres de recherche URL", content: [
        { type: "p", text: "L'utilisation de parametres URL rend la recherche partageable et indexable." },
        { type: "callout", title: "Avantages des parametres URL", text: "Les favoris fonctionnent, SEO ameliore, navigation navigatrice naturelle." }
      ]},
      { title: "Composant de pagination", content: [
        { type: "p", text: "La pagination divise les resultats en pages avec navigation numerotee." },
        { type: "callout", title: "Logique de pagination", text: "Calculez les pages totales, affichez les numeros de pages intelligents, maintenez les parametres de recherche." }
      ]},
      { title: "Recherche avec delai (Debounce)", content: [
        { type: "p", text: "Le debounce retarde la requete de recherche jusqu'a ce que l'utilisateur arrete de taper." },
        { type: "callout", title: "Fonctionnement", text: "Attend 300ms apres la derniere frappe avant d'executer la recherche." }
      ]},
      { title: "Suggestions automatiques", content: [
        { type: "p", text: "Affichez les suggestions de recherche au fur et a mesure que l'utilisateur tape." },
        { type: "callout", title: "Fonctionnalites", text: "Suggestions pour articles et categories, navigation au clavier, clic pour naviguer directement." }
      ]}
    ],
    quiz: [
      { question: "Quel est l'avantage des parametres URL par rapport a useState pour la recherche ?",
        options: ["Performance plus rapide", "Rend la recherche partageable et indexable", "Moins de memoire", "Moins de code"],
        correctAnswer: 1, explanation: "Les parametres URL rendent l'etat de recherche persistant dans l'URL, permettant favoris et partage." },
      { question: "Que fait le hook Debounce ?",
        options: ["Envoie la recherche immediatement", "Retarde l'execution jusqu'a l'arret de la frappe", "Efface le champ", "Sauvegarde l'historique"],
        correctAnswer: 1, explanation: "Debounce attend une pause dans la frappe avant d'executer la recherche." },
      { question: "Quelle fonction Supabase est utilisee pour la recherche insensible a la casse ?",
        options: ["eq()", "like()", "ilike()", "textSearch()"],
        correctAnswer: 2, explanation: "ilike effectue une correspondance de motif insensible a la casse avec support du joker (%)." },
      { question: "Pourquoi utiliser range(offset, limit - 1) pour la pagination ?",
        options: ["Pour supprimer des enregistrements", "Pour limiter les resultats a la page courante", "Pour trier les resultats", "Pour compter les enregistrements"],
        correctAnswer: 1, explanation: "range() limite les resultats a un sous-ensemble specifique." }
    ],
    challenge: { title: "Defi : Ajouter le filtrage par categorie",
      description: "Ajoutez le filtrage par categorie a la page de recherche du blog." },
    cheatSheet: { title: "Reference recherche et pagination", items: [
      { title: "Recherche Supabase", content: ".ilike(), .or(), .rpc('search_posts')" },
      { title: "Pagination", content: "offset = (page - 1) * limit, .range(offset, offset + limit - 1)" },
      { title: "Parametres URL", content: "searchParams.q pour la requete, searchParams.page pour la page" },
      { title: "Debounce", content: "useDebounce(value, 300) retarde l'execution" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in Suche und Pagination", content: [
        { type: "p", text: "Suche und Pagination sind fur jeden Blog mit vielen Artikeln unerlasslich." },
        { type: "callout", title: "Behandelte Themen", text: "Suche mit ilike und Full-Text Search, URL-Parameter, Pagination, Debounce-Suche, Autovervollstandigung." }
      ]},
      { title: "Suche mit Supabase", content: [
        { type: "p", text: "Verwenden Sie den ilike-Operator fur einfache Textsuche oder Full-Text Search fur fortgeschrittene Suche." },
        { type: "callout", title: "Suchmethoden", text: "ilike fur fallunempfindliche Musterabgleiche, or() fur Suche in mehreren Spalten, textSearch fur PostgreSQL Full-Text Search." }
      ]},
      { title: "Full-Text Search", content: [
        { type: "p", text: "PostgreSQL Full-Text Search bietet anspruchsvollere Textabgleiche mit Ranking." },
        { type: "callout", title: "Vorteile", text: "Schneller als LIKE, unterstützt Wortstammisierung und Ranking, kann verschiedene Felder unterschiedlich gewichten." }
      ]},
      { title: "URL-basierte Suchparameter", content: [
        { type: "p", text: "URL-Parameter machen die Suche bookmarkbar und teilbar." },
        { type: "callout", title: "Vorteile", text: "Lesezeichen funktionieren, SEO-freundlich, Browser-Navigation funktioniert natürlich." }
      ]},
      { title: "Pagination-Komponente", content: [
        { type: "p", text: "Pagination teilt Ergebnisse in Seiten mit nummerierter Navigation." },
        { type: "callout", title: "Logik", text: "Berechnen Sie Gesamtseiten, zeigen Sie intelligente Seitenzahlen, behalten Sie Suchparameter bei." }
      ]},
      { title: "Debounced-Suche", content: [
        { type: "p", text: "Debounce verzogert die Suchanfrage bis der Benutzer aufhort zu tippen." },
        { type: "callout", title: "Funktion", text: "Wartet 300ms nach letztem Tastendruck vor der Suchausfuhrung." }
      ]},
      { title: "Autovervollstandigung", content: [
        { type: "p", text: "Zeigen Sie Suchvorschlage wahrend des Tippens." },
        { type: "callout", title: "Funktionen", text: "Vorschlage fur Artikel und Kategorien, Tastaturnavigation, direkte Navigation per Klick." }
      ]}
    ],
    quiz: [
      { question: "Was ist der Vorteil von URL-Parametern gegenuber useState fur die Suche?",
        options: ["Schnellere Leistung", "Macht Suche bookmarkbar und SEO-freundlich", "Weniger Speicher", "Weniger Code"],
        correctAnswer: 1, explanation: "URL-Parameter machen den Suchzustand in der URL persistent." },
      { question: "Was macht der Debounce-Hook?",
        options: ["Sendet Suche sofort", "Verzogert die Ausfuhrung bis Tippen stoppt", "Loscht das Eingabefeld", "Speichert Suchverlauf"],
        correctAnswer: 1, explanation: "Debounce wartet auf eine Pause beim Tippen vor der Suchausfuhrung." },
      { question: "Welche Supabase-Funktion wird fur fallunempfindliche Suche verwendet?",
        options: ["eq()", "like()", "ilike()", "textSearch()"],
        correctAnswer: 2, explanation: "ilike fuehrt fallunempfindliche Musterabgleiche mit Wildcard-Unterstutzung durch." },
      { question: "Warum range(offset, limit - 1) fur die Pagination verwenden?",
        options: ["Um Datensatze zu loschen", "Um Ergebnisse auf aktuelle Seite zu beschranken", "Um Ergebnisse zu sortieren", "Um Datensatze zu zahlen"],
        correctAnswer: 1, explanation: "range() beschrankt die Abfrageergebnisse auf eine bestimmte Teilmenge." }
    ],
    challenge: { title: "Herausforderung: Kategoriefilterung hinzufugen",
      description: "Fugen Sie Kategoriefilterung zur Blog-Sucheseite hinzu." },
    cheatSheet: { title: "Suche und Pagination Referenz", items: [
      { title: "Supabase-Suche", content: ".ilike(), .or(), .rpc('search_posts')" },
      { title: "Pagination", content: "offset = (page - 1) * limit, .range(offset, offset + limit - 1)" },
      { title: "URL-Parameter", content: "searchParams.q fur Abfrage, searchParams.page fur Seite" },
      { title: "Debounce", content: "useDebounce(value, 300) verzogert Ausfuhrung" }
    ]}
  }
};
export default translations;
