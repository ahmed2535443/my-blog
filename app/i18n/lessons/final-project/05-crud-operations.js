const translations = {
  en: {
    sections: [
      { title: "Introduction to CRUD Operations", content: [
        { type: "p", text: "CRUD stands for Create, Read, Update, and Delete - the four basic operations for managing data. In this lesson we implement them using Server Actions and Supabase." },
        { type: "callout", title: "CRUD Operations", text: "Create = Insert new records, Read = Fetch and display data, Update = Modify existing records, Delete = Remove records." }
      ]},
      { title: "Supabase Client Setup", content: [
        { type: "p", text: "We need two Supabase clients: one for server-side operations (server.js) and one for client-side operations (client.js)." },
        { type: "callout", title: "Server vs Client", text: "Server client handles authenticated requests with cookies, client client is for browser-side queries." }
      ]},
      { title: "Creating Posts (Create)", content: [
        { type: "p", text: "Use Server Actions to create new posts. Server Actions are functions that run on the server and can be called from form submissions." },
        { type: "callout", title: "Server Actions Pattern", text: "Mark function with 'use server', receive FormData, use Supabase to insert, call revalidatePath and redirect." }
      ]},
      { title: "Reading Posts (Read)", content: [
        { type: "p", text: "Fetch posts from Supabase using server components. Next.js automatically optimizes data fetching on the server." },
        { type: "callout", title: "Fetching Pattern", text: "Use supabase.from('posts').select() with related data, handle errors gracefully, use .order() for sorting." }
      ]},
      { title: "Updating Posts (Update)", content: [
        { type: "p", text: "Create an update function in Server Actions and a form page that loads existing data for editing." },
        { type: "callout", title: "Update Pattern", text: "Load existing data with defaultValue, use supabase.update() with .eq() filter, revalidate affected paths." }
      ]},
      { title: "Deleting Posts (Delete)", content: [
        { type: "p", text: "Create a delete function with confirmation dialog. Use useTransition for loading states." },
        { type: "callout", title: "Delete Pattern", text: "Add confirmation dialog, use useTransition for pending state, call revalidatePath after deletion." }
      ]},
      { title: "Optimistic Updates", content: [
        { type: "p", text: "Optimistic updates immediately update the UI before the server confirms the change, then revert if there is an error." },
        { type: "callout", title: "useOptimistic Pattern", text: "Immediately update UI for better UX, revert on error, use for operations where speed matters." }
      ]}
    ],
    quiz: [
      { question: "What are Server Actions in Next.js?",
        options: ["Client-side event handlers", "Server-side functions callable from client components", "Database triggers", "API endpoints"],
        correctAnswer: 1, explanation: "Server Actions are server-side functions that can be called directly from client components, eliminating the need for API routes." },
      { question: "Why do we need two Supabase clients?",
        options: ["For different databases", "Server client uses cookies for auth, client client is for browser queries", "For performance", "One is for reading, one for writing"],
        correctAnswer: 1, explanation: "Server client handles authenticated requests with cookie-based sessions, while client client is used for browser-side queries." }
    ],
    challenge: { title: "Challenge: Add Category Filtering",
      description: "Add category filtering to the posts list page. Create a CategoryFilter component, use URL params to track selected category, implement filtering in the Supabase query." },
    cheatSheet: { title: "CRUD Operations Quick Reference", items: [
      { title: "Supabase Methods", content: ".insert([{}]) .select() .update({}) .delete() .eq()" },
      { title: "Server Actions", content: "Mark with 'use server', receive FormData, use revalidatePath()" },
      { title: "Optimistic Updates", content: "useOptimistic for immediate UI updates, revert on error" }
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction aux operations CRUD", content: [
        { type: "p", text: "CRUD signifie Create, Read, Update et Delete - les quatre operations de base pour gerer les donnees." },
        { type: "callout", title: "Operations CRUD", text: "Create = Inserer, Read = Lire et afficher, Update = Modifier, Delete = Supprimer." }
      ]},
      { title: "Configuration du client Supabase", content: [
        { type: "p", text: "Nous avons besoin de deux clients Supabase : un pour les operations cote serveur et un pour le navigateur." },
        { type: "callout", title: "Serveur vs Client", text: "Le client serveur gere les requetes authentifiees, le client navigateur est pour les requetes cote navigateur." }
      ]},
      { title: "Creation d'articles (Create)", content: [
        { type: "p", text: "Utilisez les Server Actions pour creer de nouveaux articles. Ce sont des fonctions qui s'executent sur le serveur." },
        { type: "callout", title: "Modele Server Actions", text: "Marquez la fonction avec 'use server', recevez FormData, utilisez Supabase pour inserer." }
      ]},
      { title: "Lecture d'articles (Read)", content: [
        { type: "p", text: "Recuperez les articles depuis Supabase en utilisant les composants serveur." },
        { type: "callout", title: "Modele de recuperation", text: "Utilisez supabase.from('posts').select() avec les donnees liees, gerez les erreurs." }
      ]},
      { title: "Modification d'articles (Update)", content: [
        { type: "p", text: "Creez une fonction de mise a jour dans les Server Actions et une page de formulaire." },
        { type: "callout", title: "Modele de mise a jour", text: "Chargez les donnees existantes, utilisez supabase.update() avec .eq(), reactivez les chemins." }
      ]},
      { title: "Suppression d'articles (Delete)", content: [
        { type: "p", text: "Creez une fonction de suppression avec boite de dialogue de confirmation." },
        { type: "callout", title: "Modele de suppression", text: "Ajoutez une confirmation, utilisez useTransition pour l'etat en attente." }
      ]},
      { title: "Mises a jour optimistes", content: [
        { type: "p", text: "Les mises a jour optimistes mettent a jour l'interface immediatement avant la confirmation du serveur." },
        { type: "callout", title: "Modele useOptimistic", text: "Mise a jour immediate de l'interface, revert en cas d'erreur." }
      ]}
    ],
    quiz: [
      { question: "Que sont les Server Actions dans Next.js ?",
        options: ["Gestionnaires d'evenements cote client", "Fonctions cote serveur appelables depuis les composants client", "Declencheurs de base de donnees", "Points d'extremite API"],
        correctAnswer: 1, explanation: "Les Server Actions sont des fonctions cote serveur appelables directement depuis les composants client." },
      { question: "Pourquoi avons-nous besoin de deux clients Supabase ?",
        options: ["Pour differentes bases de donnees", "Le client serveur utilise les cookies, le client navigateur est pour les requetes", "Pour les performances", "Un pour lire, un pour ecrire"],
        correctAnswer: 1, explanation: "Le client serveur gere les requetes authentifiees avec les cookies, le client navigateur est pour les requetes cote navigateur." }
    ],
    challenge: { title: "Defi : Ajouter le filtrage par categorie",
      description: "Ajoutez le filtrage par categorie a la page de liste des articles." },
    cheatSheet: { title: "Reference rapide des operations CRUD", items: [
      { title: "Methodes Supabase", content: ".insert([{}]) .select() .update({}) .delete() .eq()" },
      { title: "Server Actions", text: "Marquez avec 'use server', recevez FormData, utilisez revalidatePath()" },
      { title: "Mises a jour optimistes", content: "useOptimistic pour les mises a jour immediates" }
    ]}
  },
  de: {
    sections: [
      { title: "Einfuhr in CRUD-Operationen", content: [
        { type: "p", text: "CRUD steht fur Create, Read, Update und Delete - die vier grundlegenden Operationen zur Datenverwaltung." },
        { type: "callout", title: "CRUD-Operationen", text: "Create = Neue Datensatze einfugen, Read = Daten abrufen, Update = Datensatze andern, Delete = Datensatze loschen." }
      ]},
      { title: "Supabase-Client-Setup", content: [
        { type: "p", text: "Wir benotigen zwei Supabase-Clients: einen fur Serveroperationen und einen fur den Browser." },
        { type: "callout", title: "Server vs Client", text: "Server-Client verarbeitet authentifizierte Anfragen, Client-Client ist fur Browseranfragen." }
      ]},
      { title: "Posts erstellen (Create)", content: [
        { type: "p", text: "Verwenden Sie Server Actions, um neue Posts zu erstellen. Dies sind Funktionen, die auf dem Server ausgefuhrt werden." },
        { type: "callout", title: "Server-Actions-Muster", text: "Markieren Sie mit 'use server', empfangen FormData, verwenden Sie Supabase zum Einfugen." }
      ]},
      { title: "Posts lesen (Read)", content: [
        { type: "p", text: "Rufen Sie Posts von Supabase mit Server-Komponenten ab." },
        { type: "callout", title: "Abrufmuster", text: "Verwenden Sie supabase.from('posts').select() mit verknupften Daten, behandeln Sie Fehler." }
      ]},
      { title: "Posts aktualisieren (Update)", content: [
        { type: "p", text: "Erstellen Sie eine Aktualisierungsfunktion in Server Actions und eine Formularseite." },
        { type: "callout", title: "Aktualisierungsmuster", text: "Laden Sie vorhandene Daten, verwenden Sie supabase.update() mit .eq(), revalidieren Sie Pfade." }
      ]},
      { title: "Posts loschen (Delete)", content: [
        { type: "p", text: "Erstellen Sie eine Loschfunktion mit Bestatigungsdialog." },
        { type: "callout", title: "Loschmuster", text: "Fugen Sie Bestatigung hinzu, verwenden Sie useTransition fur den wartenden Zustand." }
      ]},
      { title: "Optimistische Aktualisierungen", content: [
        { type: "p", text: "Optimistische Aktualisierungen aktualisieren die UI sofort vor der Serverbestatigung." },
        { type: "callout", title: "useOptimistic-Muster", text: "Sofortige UI-Aktualisierung, Revert bei Fehler." }
      ]}
    ],
    quiz: [
      { question: "Was sind Server Actions in Next.js?",
        options: ["Client-seitige Event-Handler", "Server-seitige Funktionen die von Client-Komponenten aufgerufen werden konnen", "Datenbank-Trigger", "API-Endpunkte"],
        correctAnswer: 1, explanation: "Server Actions sind server-seitige Funktionen, die direkt von Client-Komponenten aufgerufen werden konnen." },
      { question: "Warum benotigen wir zwei Supabase-Clients?",
        options: ["Fur verschiedene Datenbanken", "Server-Client verwendet Cookies, Client-Client ist fur Browseranfragen", "Fur die Leistung", "Einer zum Lesen, einer zum Schreiben"],
        correctAnswer: 1, explanation: "Server-Client verarbeitet authentifizierte Anfragen mit Cookie-Sessions, Client-Client ist fur Browseranfragen." }
    ],
    challenge: { title: "Herausforderung: Kategoriefilterung hinzufugen",
      description: "Fugen Sie Kategoriefilterung zur Posts-Listenseite hinzu." },
    cheatSheet: { title: "CRUD-Schnellreferenz", items: [
      { title: "Supabase-Methoden", content: ".insert([{}]) .select() .update({}) .delete() .eq()" },
      { title: "Server Actions", content: "Mit 'use server' markieren, FormData empfangen, revalidatePath() verwenden" },
      { title: "Optimistische Aktualisierungen", content: "useOptimistic fur sofortige UI-Aktualisierungen" }
    ]}
  }
};
export default translations;
