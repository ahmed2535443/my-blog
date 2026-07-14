const translations = {
  en: {
    sections: [
      { title: "What are Server Actions?", content: [
        { type: "p", text: "<strong>Server Actions</strong> are functions that execute on the server and are invoked from Client Components. They are the primary way to modify data in Next.js." },
        { type: "p", text: "Instead of creating separate API Routes for each modification, you write the function directly in the component file." },
      ]},
      { title: "'use server' Directive", content: [
        { type: "p", text: "Add <code>'use server'</code> at the beginning of a function to convert it to a Server Action. It must be async." },
      ]},
      { title: "Forms with Server Actions", content: [
        { type: "p", text: "Pass the Server Action to the form's <code>action</code> prop. Next.js handles the server communication automatically." },
      ]},
      { title: "useActionState Hook", content: [
        { type: "p", text: "<code>useActionState</code> from React 19 manages form state with Server Actions. Returns current state, action function, and isPending status." },
      ]},
      { title: "Revalidation after Modification", content: [
        { type: "p", text: "After modifying data, use <code>revalidatePath</code> or <code>revalidateTag</code> to update cached data." },
      ]},
      { title: "Security in Server Actions", content: [
        { type: "li", text: "Always validate data on the server" },
        { type: "li", text: "Never trust client input" },
        { type: "li", text: "Check user authorization" },
        { type: "li", text: "Don't return detailed errors to the client" },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Server Actions execute on the server and are called from Client Components." },
        { type: "li", text: "Add 'use server' at the top of the function to make it a Server Action." },
        { type: "li", text: "Use with form action or onClick via startTransition." },
        { type: "li", text: "useActionState manages form state with isPending." },
        { type: "li", text: "Use revalidatePath or revalidateTag after every data modification." },
        { type: "li", text: "redirect() redirects the user after successful operations." },
      ]}
    ],
    quiz: [
      { question: "What is the correct way to designate a function as a Server Action?", options: ["Add @server decorator", "Add 'use server' at the top of the function body", "Name the function serverAction", "Pass it to runOnServer()"], explanation: "Add 'use server' at the top of the function body or at the top of the file." },
      { question: "What happens when you call revalidatePath('/') after modifying data?", options: ["All cached data is deleted", "The home page and its cached data are updated", "The server restarts", "The user is redirected to home"], explanation: "revalidatePath('/') tells Next.js to delete the cache for the home page and fetch new data." },
      { question: "What is the main role of useActionState in React 19?", options: ["Create new Server Actions", "Manage form state with Server Actions", "Validate data", "Manage cache"], explanation: "useActionState returns current state, action function, and isPending for form management." },
    ],
    challenge: { title: "Build a CRUD Form with Validation", description: "Build a complete Todo App with Server Actions for adding, deleting, and toggling tasks." },
    cheatSheet: { title: "Server Actions Cheat Sheet", items: [
      { term: "'use server'", definition: "Designate as Server Action" },
      { term: "formData.get('name')", definition: "Get form field value" },
      { term: "revalidatePath('/')", definition: "Update cached page" },
      { term: "revalidateTag('tag')", definition: "Update by tag" },
      { term: "redirect('/path')", definition: "Redirect after success" },
      { term: "useActionState()", definition: "Manage form state" },
      { term: "useTransition()", definition: "Track pending state" }
    ]}
  },
  fr: {
    sections: [
      { title: "Qu'est-ce que les Server Actions ?", content: [
        { type: "p", text: "Les <strong>Server Actions</strong> sont des fonctions qui s'exécutent sur le serveur et sont appelées depuis les Client Components. Elles sont le moyen principal de modifier les données dans Next.js." },
      ]},
      { title: "Directive 'use server'", content: [
        { type: "p", text: "Ajoutez <code>'use server'</code> au début d'une fonction pour la convertir en Server Action. Elle doit être asynchrone." },
      ]},
      { title: "Formulaires avec Server Actions", content: [
        { type: "p", text: "Passez la Server Action à la prop <code>action</code> du formulaire." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Les Server Actions s'exécutent sur le serveur et sont appelées depuis les Client Components." },
        { type: "li", text: "Ajoutez 'use server' au début de la fonction." },
        { type: "li", text: "Utilisez revalidatePath ou revalidateTag après chaque modification." },
      ]}
    ],
    quiz: [
      { question: "Quelle est la bonne façon de désigner une fonction comme Server Action ?", options: ["Ajouter @server", "Ajouter 'use server' au début du corps de la fonction", "Nommer la fonction serverAction"], explanation: "Ajoutez 'use server' au début du corps de la fonction ou en haut du fichier." },
    ],
    challenge: { title: "Construire un formulaire CRUD", description: "Construisez une application Todo complète avec Server Actions." },
    cheatSheet: { title: "Fiche mémo Server Actions", items: [
      { term: "'use server'", definition: "Désigner comme Server Action" },
      { term: "revalidatePath('/')", definition: "Mettre à jour la page en cache" },
      { term: "redirect('/path')", definition: "Rediriger après succès" },
      { term: "useActionState()", definition: "Gérer l'état du formulaire" }
    ]}
  },
  de: {
    sections: [
      { title: "Was sind Server Actions?", content: [
        { type: "p", text: "<strong>Server Actions</strong> sind Funktionen, die auf dem Server ausgeführt und von Client Components aufgerufen werden." },
      ]},
      { title: "'use server' Direktive", content: [
        { type: "p", text: "Fügen Sie <code>'use server'</code> am Anfang einer Funktion hinzu, um sie in eine Server Action umzuwandeln." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Server Actions werden auf dem Server ausgeführt und von Client Components aufgerufen." },
        { type: "li", text: "Fügen Sie 'use server' am Funktionsanfang hinzu." },
        { type: "li", text: "Verwenden Sie revalidatePath oder revalidateTag nach jeder Änderung." },
      ]}
    ],
    quiz: [
      { question: "Wie wird eine Funktion als Server Action gekennzeichnet?", options: ["@server Decorator hinzufügen", "'use server' am Anfang des Funktionskörpers hinzufügen", "Funktion serverAction nennen"], explanation: "Fügen Sie 'use server' am Anfang des Funktionskörpers oder am Dateianfang hinzu." },
    ],
    challenge: { title: "CRUD-Formular erstellen", description: "Erstellen Sie eine vollständige Todo-App mit Server Actions." },
    cheatSheet: { title: "Server Actions Spickzettel", items: [
      { term: "'use server'", definition: "Als Server Action kennzeichnen" },
      { term: "revalidatePath('/')", definition: "Gecachte Seite aktualisieren" },
      { term: "redirect('/path')", definition: "Nach Erfolg weiterleiten" },
      { term: "useActionState()", definition: "Formularstatus verwalten" }
    ]}
  }
};
export default translations;
