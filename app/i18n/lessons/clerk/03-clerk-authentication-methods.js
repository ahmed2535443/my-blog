const translations = {
  en: {
    sections: [
      { title: "Authentication Methods", content: [
        { type: "p", text: "Clerk supports multiple authentication methods out of the box. In this lesson, we'll learn how to implement each one." },
      ]},
      { title: "Email and Password", content: [
        { type: "code", text: "// Sign up page\nimport { SignUp } from '@clerk/nextjs';\n\nexport default function SignUpPage() {\n  return <SignUp />;\n}\n\n// Sign in page\nimport { SignIn } from '@clerk/nextjs';\n\nexport default function SignInPage() {\n  return <SignIn />;\n}" },
      ]},
      { title: "Social Login Providers", content: [
        { type: "p", text: "Enable social login in your Clerk dashboard: Application → User & Authentication → Social Connections." },
        { type: "li", text: "Google — most popular" },
        { type: "li", text: "GitHub — for developers" },
        { type: "li", text: "Facebook — largest social network" },
        { type: "li", text: "Twitter/X — popular among tech community" },
        { type: "li", text: "Apple — required for iOS apps" },
      ]},
      { title: "Multi-Factor Authentication (MFA)", content: [
        { type: "p", text: "MFA adds an extra layer of security. Clerk supports SMS codes, email codes, and authenticator apps." },
        { type: "p", text: "Enable MFA in your dashboard: User & Authentication → Multi-factor." },
      ]},
      { title: "Lesson Summary", content: [
        { type: "li", text: "Clerk provides built-in SignIn and SignUp components." },
        { type: "li", text: "Social login can be enabled from the dashboard." },
        { type: "li", text: "MFA adds extra security with multiple verification methods." },
      ]}
    ],
    quiz: [
      { question: "Which social login providers does Clerk support?", options: ["Only Google", "Google, GitHub, Facebook, and more", "Only Email", "Only GitHub"], explanation: "Clerk supports multiple providers including Google, GitHub, Facebook, Twitter, Apple, and more." },
      { question: "What does MFA stand for?", options: ["Multi-File Access", "Multi-Factor Authentication", "Managed File Allocation", "Multi-Function API"], explanation: "MFA = Multi-Factor Authentication, adding extra security layers." },
    ],
    challenge: { title: "Implement Multiple Auth Methods", description: "Set up email/password, enable Google social login, and configure MFA for your app." },
    cheatSheet: { title: "Authentication Methods Cheat Sheet", items: [
      { term: "<SignIn />", definition: "Sign-in component" },
      { term: "<SignUp />", definition: "Sign-up component" },
      { term: "Social Connections", definition: "Enable in dashboard" },
      { term: "MFA", definition: "Multi-Factor Authentication" },
      { term: "SMS Code", definition: "Phone verification" },
      { term: "Authenticator App", definition: "TOTP-based verification" }
    ]}
  },
  fr: {
    sections: [
      { title: "Méthodes d'authentification", content: [
        { type: "p", text: "Clerk supporte plusieurs méthodes d'authentification. Apprenons à implémenter chacune." },
      ]},
      { title: "Email et mot de passe", content: [
        { type: "code", text: "import { SignUp } from '@clerk/nextjs';\n\nexport default function SignUpPage() {\n  return <SignUp />;\n}" },
      ]},
      { title: "Connexion sociale", content: [
        { type: "li", text: "Google — le plus populaire" },
        { type: "li", text: "GitHub — pour les développeurs" },
        { type: "li", text: "Facebook — plus grand réseau social" },
      ]},
      { title: "Authentification multi-facteurs (MFA)", content: [
        { type: "p", text: "L'MFA ajoute une couche de sécurité supplémentaire." },
      ]},
      { title: "Résumé de la leçon", content: [
        { type: "li", text: "Clerk fournit des composants SignIn et SignUp intégrés." },
        { type: "li", text: "La connexion sociale peut être activée depuis le tableau de bord." },
        { type: "li", text: "L'MFA ajoute une sécurité supplémentaire." },
      ]}
    ],
    quiz: [
      { question: "Quels fournisseurs de connexion sociale Clerk supporte-t-il ?", options: ["Seulement Google", "Google, GitHub, Facebook et plus", "Seulement Email"], explanation: "Clerk supporte plusieurs fournisseurs." },
    ],
    challenge: { title: "Implémenter plusieurs méthodes", description: "Configurez email/mot de passe, activez Google et configurez l'MFA." },
    cheatSheet: { title: "Méthodes d'auth Fiche mémo", items: [
      { term: "<SignIn />", definition: "Composant de connexion" },
      { term: "<SignUp />", definition: "Composant d'inscription" },
      { term: "MFA", definition: "Authentification multi-facteurs" },
    ]}
  },
  de: {
    sections: [
      { title: "Authentifizierungsmethoden", content: [
        { type: "p", text: "Clerk unterstützt mehrere Authentifizierungsmethoden. Lernen Sie, jede zu implementieren." },
      ]},
      { title: "E-Mail und Passwort", content: [
        { type: "code", text: "import { SignUp } from '@clerk/nextjs';\n\nexport default function SignUpPage() {\n  return <SignUp />;\n}" },
      ]},
      { title: "Soziale Anmeldung", content: [
        { type: "li", text: "Google — am beliebtesten" },
        { type: "li", text: "GitHub — für Entwickler" },
        { type: "li", text: "Facebook" },
      ]},
      { title: "Mehr-Faktor-Authentifizierung (MFA)", content: [
        { type: "p", text: "MFA fügt eine zusätzliche Sicherheitsschicht hinzu." },
      ]},
      { title: "Zusammenfassung der Lektion", content: [
        { type: "li", text: "Clerk bietet integrierte SignIn- und SignUp-Komponenten." },
        { type: "li", text: "Soziale Anmeldung kann im Dashboard aktiviert werden." },
        { type: "li", text: "MFA fügt zusätzliche Sicherheit hinzu." },
      ]}
    ],
    quiz: [
      { question: "Welche sozialen Anmeldeanbieter unterstützt Clerk?", options: ["Nur Google", "Google, GitHub, Facebook und mehr", "Nur E-Mail"], explanation: "Clerk unterstützt mehrere Anbieter." },
    ],
    challenge: { title: "Mehrere Auth-Methoden implementieren", description: "Richten Sie E-Mail/Passwort ein, aktivieren Sie Google und konfigurieren Sie MFA." },
    cheatSheet: { title: "Authentifizierungsmethoden Spickzettel", items: [
      { term: "<SignIn />", definition: "Anmeldekomponente" },
      { term: "<SignUp />", definition: "Registrierungskomponente" },
      { term: "MFA", definition: "Mehr-Faktor-Authentifizierung" },
    ]}
  }
};
export default translations;
