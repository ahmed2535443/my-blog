const translations = {
  en: {
    sections: [
      { title: "Supabase Installation and Setup", content: [
        { type: "p", text: "After creating your Supabase project, the next step is to connect it to your Next.js application. In this lesson, we'll learn how to install and configure Supabase client in your project." },
      ]},
      { title: "Installing Supabase Client", content: [
        { type: "code", text: "npm install @supabase/supabase-js" },
        { type: "p", text: "This is the main library for interacting with Supabase from the client side." },
      ]},
      { title: "Getting Your Keys", content: [
        { type: "p", text: "Go to your project dashboard → Settings → API. You'll find:" },
        { type: "li", text: "Project URL (e.g., https://abc123.supabase.co)" },
        { type: "li", text: "Anon Key (public key for client-side use)" },
        { type: "li", text: "Service Role Key (admin key — keep it secret!)" },
      ]},
      { title: "Creating Supabase Client", content: [
        { type: "code", text: "import { createClient } from '@supabase/supabase-js';\n\nconst supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;\nconst supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;\n\nexport const supabase = createClient(supabaseUrl, supabaseAnonKey);" },
      ]},
      { title: "Environment Variables", content: [
        { type: "p", text: "Create a <code>.env.local</code> file in your project root with your Supabase credentials. Never commit this file to Git." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Install @supabase/supabase-js package." },
        { type: "li", text: "Get Project URL and Anon Key from dashboard." },
        { type: "li", text: "Create client using createClient()." },
        { type: "li", text: "Store keys in .env.local for security." },
      ]}
    ],
    quiz: [
      { question: "What npm package do you need to install for Supabase?", options: ["supabase", "@supabase/supabase-js", "supabase-client", "next-supabase"], explanation: "The official package is @supabase/supabase-js." },
      { question: "Where should you store your Supabase keys?", options: ["In your code directly", ".env.local file", "In a database", "In localStorage"], explanation: "Store keys in .env.local and never commit them to Git." },
    ],
    challenge: { title: "Set Up Supabase Client", description: "Install Supabase, get your project keys, create the client file, and verify connection by fetching data from a table." },
    cheatSheet: { title: "Supabase Setup Cheat Sheet", items: [
      { term: "npm install @supabase/supabase-js", definition: "Install Supabase client" },
      { term: "createClient(url, key)", definition: "Create Supabase client" },
      { term: "NEXT_PUBLIC_SUPABASE_URL", definition: "Environment variable for URL" },
      { term: "NEXT_PUBLIC_SUPABASE_ANON_KEY", definition: "Environment variable for anon key" },
      { term: ".env.local", definition: "File to store environment variables" }
    ]}
  },
  fr: {
    sections: [
      { title: "Installation et configuration de Supabase", content: [
        { type: "p", text: "Après avoir créé votre projet Supabase, l'étape suivante est de le connecter à votre application Next.js." },
      ]},
      { title: "Installation du client Supabase", content: [
        { type: "code", text: "npm install @supabase/supabase-js" },
      ]},
      { title: "Création du client Supabase", content: [
        { type: "code", text: "import { createClient } from '@supabase/supabase-js';\n\nexport const supabase = createClient(url, key);" },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Installez le package @supabase/supabase-js." },
        { type: "li", text: "Créez le client avec createClient()." },
        { type: "li", text: "Stockez les clés dans .env.local." },
      ]}
    ],
    quiz: [
      { question: "Quel package npm faut-il installer ?", options: ["supabase", "@supabase/supabase-js", "supabase-client"], explanation: "Le package officiel est @supabase/supabase-js." },
    ],
    challenge: { title: "Configurer le client Supabase", description: "Installez Supabase, obtenez vos clés, créez le fichier client." },
    cheatSheet: { title: "Supabase Configuration Fiche mémo", items: [
      { term: "@supabase/supabase-js", definition: "Package client Supabase" },
      { term: "createClient(url, key)", definition: "Créer le client Supabase" },
    ]}
  },
  de: {
    sections: [
      { title: "Supabase-Installation und Einrichtung", content: [
        { type: "p", text: "Nach der Erstellung Ihres Supabase-Projekts muss es mit Ihrer Next.js-Anwendung verbunden werden." },
      ]},
      { title: "Supabase-Client installieren", content: [
        { type: "code", text: "npm install @supabase/supabase-js" },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Installieren Sie @supabase/supabase-js." },
        { type: "li", text: "Erstellen Sie den Client mit createClient()." },
        { type: "li", text: "Speichern Sie Schlüssel in .env.local." },
      ]}
    ],
    quiz: [
      { question: "Welches npm-Paket muss installiert werden?", options: ["supabase", "@supabase/supabase-js", "supabase-client"], explanation: "Das offizielle Paket ist @supabase/supabase-js." },
    ],
    challenge: { title: "Supabase-Client einrichten", description: "Installieren Sie Supabase, holen Sie Ihre Schlüssel, erstellen Sie die Client-Datei." },
    cheatSheet: { title: "Supabase Einrichtung Spickzettel", items: [
      { term: "@supabase/supabase-js", definition: "Supabase Client-Paket" },
      { term: "createClient(url, key)", definition: "Supabase-Client erstellen" },
    ]}
  }
};
export default translations;
