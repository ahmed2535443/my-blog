const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Forms are one of the most important ways to collect user input in web applications. React provides powerful tools for building forms that are easy to use and maintain." },
        { type: "p", text: "In this lesson, we will learn how to build forms in React, handle user input, and validate form data." },
      ]},
      { title: "Controlled vs Uncontrolled Components", content: [
        { type: "p", text: "React offers two approaches to managing form data:" },
        { type: "li", text: "<strong>Controlled Components:</strong> Form data is handled by React state" },
        { type: "li", text: "<strong>Uncontrolled Components:</strong> Form data is handled by the DOM itself" },
        { type: "p", text: "Controlled components are the recommended approach in React because they provide better control and predictability." },
      ]},
      { title: "Building a Controlled Form", content: [
        { type: "p", text: "To build a controlled form:" },
        { type: "li", text: "1. Initialize state for each form field" },
        { type: "li", text: "2. Set the value of each input to its corresponding state" },
        { type: "li", text: "3. Create onChange handlers to update state" },
        { type: "li", text: "4. Handle form submission with onSubmit handler" },
        { type: "p", text: "This gives you complete control over the form data at all times." },
      ]},
      { title: "Handling Multiple Inputs", content: [
        { type: "p", text: "When you have multiple form fields, you can use a single handler with a computed property name to handle all inputs efficiently." },
        { type: "p", text: "This approach uses ES6 computed property names to dynamically set the state key based on the input name." },
      ]},
      { title: "Form Validation", content: [
        { type: "p", text: "Form validation is essential for providing good user experience. You can validate:" },
        { type: "li", text: "<strong>On submit:</strong> Validate when the user submits the form" },
        { type: "li", text: "<strong>On change:</strong> Validate as the user types" },
        { type: "li", text: "<strong>On blur:</strong> Validate when the user leaves a field" },
        { type: "p", text: "You should provide clear error messages to help users correct their input." },
      ]},
      { title: "Displaying Validation Errors", content: [
        { type: "p", text: "Display validation errors clearly to help users understand what went wrong:" },
        { type: "li", text: "Show errors near the relevant field" },
        { type: "li", text: "Use clear, descriptive error messages" },
        { type: "li", text: "Highlight invalid fields visually" },
        { type: "li", text: "Provide suggestions for fixing errors" },
      ]},
      { title: "Form Libraries", content: [
        { type: "p", text: "For complex forms, consider using form libraries that handle validation, state management, and form submission:" },
        { type: "li", text: "<strong>React Hook Form:</strong> Performant form library with minimal re-renders" },
        { type: "li", text: "<strong>Formik:</strong> Popular form library with validation support" },
        { type: "li", text: "<strong>Yup:</strong> Schema validation library that works well with Formik" },
        { type: "p", text: "These libraries can save you time and reduce bugs in complex forms." },
      ]},
      { title: "File Inputs", content: [
        { type: "p", text: "File inputs are uncontrolled because their value is read-only. You can handle file uploads using refs or controlled file inputs." },
        { type: "p", text: "When handling files, remember to:" },
        { type: "li", text: "Validate file types and sizes" },
        { type: "li", text: "Show upload progress" },
        { type: "li", text: "Handle errors gracefully" },
      ]},
    ],
    quiz: [
      { question: "What is a controlled component in React forms?", options: ["A component that manages its own state", "A component where form data is handled by React state", "A component that validates input", "A component that prevents form submission"], explanation: "In controlled components, form data is handled by React state. The component controls the input's value and updates it through onChange handlers." },
    ],
    challenge: { title: "Challenge: Build a registration form", description: "Create a registration form with fields for name, email, password, and confirm password. Include validation for all fields." },
    cheatSheet: { title: "Forms Cheat Sheet", items: [
      { term: "Controlled Components", definition: "Form data handled by React state" },
      { term: "Uncontrolled Components", definition: "Form data handled by DOM" },
      { term: "onChange handler", definition: "Updates state when input changes" },
      { term: "onSubmit handler", definition: "Handles form submission" },
      { term: "Validation", definition: "Check input on submit, change, or blur" },
      { term: "Error messages", definition: "Show clear errors near relevant fields" },
      { term: "Form libraries", definition: "React Hook Form, Formik for complex forms" },
      { term: "File inputs", definition: "Uncontrolled, handle with refs" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Les formulaires sont l'une des façons les plus importantes de collecter les entrées utilisateur dans les applications web. React fournit des outils puissants pour construire des formulaires faciles à utiliser et à maintenir." },
        { type: "p", text: "Dans cette leçon, nous apprendrons comment construire des formulaires dans React, gérer les entrées utilisateur et valider les données de formulaire." },
      ]},
      { title: "Composants contrôlés vs non contrôlés", content: [
        { type: "p", text: "React offre deux approches pour gérer les données de formulaire :" },
        { type: "li", text: "<strong>Composants contrôlés :</strong> Les données de formulaire sont gérées par l'état React" },
        { type: "li", text: "<strong>Composants non contrôlés :</strong> Les données de formulaire sont gérées par le DOM lui-même" },
        { type: "p", text: "Les composants contrôlés sont l'approche recommandée dans React car ils offrent un meilleur contrôle et une meilleure prévisibilité." },
      ]},
      { title: "Construire un formulaire contrôlé", content: [
        { type: "p", text: "Pour construire un formulaire contrôlé :" },
        { type: "li", text: "1. Initialisez l'état pour chaque champ de formulaire" },
        { type: "li", text: "2. Définissez la valeur de chaque entrée à son état correspondant" },
        { type: "li", text: "3. Créez des gestionnaires onChange pour mettre à jour l'état" },
        { type: "li", text: "4. Gérez la soumission du formulaire avec un gestionnaire onSubmit" },
        { type: "p", text: "Cela vous donne un contrôle complet sur les données du formulaire en tout temps." },
      ]},
      { title: "Gérer plusieurs entrées", content: [
        { type: "p", text: "Quand vous avez plusieurs champs de formulaire, vous pouvez utiliser un seul gestionnaire avec un nom de propriété calculé pour gérer toutes les entrées efficacement." },
        { type: "p", text: "Cette approche utilise les noms de propriétés calculées ES6 pour définir dynamiquement la clé d'état basée sur le nom de l'entrée." },
      ]},
      { title: "Validation de formulaire", content: [
        { type: "p", text: "La validation de formulaire est essentielle pour fournir une bonne expérience utilisateur. Vous pouvez valider :" },
        { type: "li", text: "<strong>À la soumission :</strong> Valider quand l'utilisateur soumet le formulaire" },
        { type: "li", text: "<strong>Au changement :</strong> Valider pendant que l'utilisateur tape" },
        { type: "li", text: "<strong>Au blur :</strong> Valider quand l'utilisateur quitte un champ" },
        { type: "p", text: "Vous devriez fournir des messages d'erreur clairs pour aider les utilisateurs à corriger leur saisie." },
      ]},
      { title: "Afficher les erreurs de validation", content: [
        { type: "p", text: "Affichez les erreurs de validation clairement pour aider les utilisateurs à comprendre ce qui a mal tourné :" },
        { type: "li", text: "Affichez les erreurs près du champ concerné" },
        { type: "li", text: "Utilisez des messages d'erreur clairs et descriptifs" },
        { type: "li", text: "Mettez en surbrillance les champs invalides visuellement" },
        { type: "li", text: "Fournissez des suggestions pour corriger les erreurs" },
      ]},
      { title: "Bibliothèques de formulaire", content: [
        { type: "p", text: "Pour les formulaires complexes, envisagez d'utiliser des bibliothèques de formulaire qui gèrent la validation, la gestion d'état et la soumission de formulaire :" },
        { type: "li", text: "<strong>React Hook Form :</strong> Bibliothèque performante avec peu de re-rendus" },
        { type: "li", text: "<strong>Formik :</strong> Bibliothèque populaire avec support de validation" },
        { type: "li", text: "<strong>Yup :</strong> Bibliothèque de validation par schéma qui fonctionne bien avec Formik" },
        { type: "p", text: "Ces bibliothèques peuvent vous faire gagner du temps et réduire les bugs dans les formulaires complexes." },
      ]},
      { title: "Entrées de fichier", content: [
        { type: "p", text: "Les entrées de fichier sont non contrôlées car leur valeur est en lecture seule. Vous pouvez gérer les téléchargements de fichiers en utilisant des refs ou des entrées de fichier contrôlées." },
        { type: "p", text: "Lorsque vous gérez des fichiers, souvenez-vous de :" },
        { type: "li", text: "Valider les types et tailles de fichiers" },
        { type: "li", text: "Afficher la progression du téléchargement" },
        { type: "li", text: "Gérer les erreurs gracieusement" },
      ]},
    ],
    quiz: [
      { question: "Qu'est-ce qu'un composant contrôlé dans les formulaires React ?", options: ["Un composant qui gère son propre état", "Un composant où les données de formulaire sont gérées par l'état React", "Un composant qui valide les entrées", "Un composant qui empêche la soumission de formulaire"], explanation: "Dans les composants contrôlés, les données de formulaire sont gérées par l'état React. Le composant contrôle la valeur de l'entrée et la met à jour via des gestionnaires onChange." },
    ],
    challenge: { title: "Défi : Construisez un formulaire d'inscription", description: "Créez un formulaire d'inscription avec des champs pour nom, email, mot de passe et confirmation du mot de passe. Incluez la validation pour tous les champs." },
    cheatSheet: { title: "Référence des formulaires", items: [
      { term: "Composants contrôlés", definition: "Données de formulaire gérées par l'état React" },
      { term: "Composants non contrôlés", definition: "Données de formulaire gérées par le DOM" },
      { term: "Gestionnaire onChange", definition: "Met à jour l'état quand l'entrée change" },
      { term: "Gestionnaire onSubmit", definition: "Gère la soumission de formulaire" },
      { term: "Validation", definition: "Vérifiez l'entrée à la soumission, au changement ou au blur" },
      { term: "Messages d'erreur", definition: "Affichez des erreurs claires près des champs concernés" },
      { term: "Bibliothèques de formulaire", definition: "React Hook Form, Formik pour les formulaires complexes" },
      { term: "Entrées de fichier", definition: "Non contrôlées, gérez avec des refs" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Formulare sind eine der wichtigsten Möglichkeiten, Benutzereingaben in Webanwendungen zu sammeln. React stellt leistungsstarke Werkzeuge für die Erstellung von Formularen bereit, die einfach zu verwenden und zu warten sind." },
        { type: "p", text: "In dieser Lektion lernen wir, wie man Formulare in React erstellt, Benutzereingaben handhabt und Formulardaten validiert." },
      ]},
      { title: "Kontrollierte vs unkodierte Komponenten", content: [
        { type: "p", text: "React bietet zwei Ansätze zur Verwaltung von Formulardaten:" },
        { type: "li", text: "<strong>Kontrollierte Komponenten:</strong> Formulardaten werden von React-Zustand verwaltet" },
        { type: "li", text: "<strong>Nicht-kontrollierte Komponenten:</strong> Formulardaten werden vom DOM selbst verwaltet" },
        { type: "p", text: "Kontrollierte Komponenten sind der empfohlene Ansatz in React, da sie bessere Kontrolle und Vorhersagbarkeit bieten." },
      ]},
      { title: "Ein kontrolliertes Formular erstellen", content: [
        { type: "p", text: "Um ein kontrolliertes Formular zu erstellen:" },
        { type: "li", text: "1. Initialisieren Sie den Zustand für jedes Formularfeld" },
        { type: "li", text: "2. Setzen Sie den Wert jeder Eingabe auf den entsprechenden Zustand" },
        { type: "li", text: "3. Erstellen Sie onChange-Handler, um den Zustand zu aktualisieren" },
        { type: "li", text: "4. Handhaben Sie die Formularübermittlung mit einem onSubmit-Handler" },
        { type: "p", text: "Dies gibt Ihnen jederzeit vollständige Kontrolle über die Formulardaten." },
      ]},
      { title: "Mehrere Eingaben handhaben", content: [
        { type: "p", text: "Wenn Sie mehrere Formularfelder haben, können Sie einen einzelnen Handler mit einem berechneten Eigenschaftsnamen verwenden, um alle Eingaben effizient zu handhaben." },
        { type: "p", text: "Dieser Ansatz verwendet ES6-berechnete Eigenschaftsnamen, um den Zustandsschlüssel dynamisch basierend auf dem Eingabenamen zu setzen." },
      ]},
      { title: "Formularvalidierung", content: [
        { type: "p", text: "Formularvalidierung ist essenziell für eine gute Benutzererfahrung. Sie können validieren:" },
        { type: "li", text: "<strong>Bei Übermittlung:</strong> Validieren, wenn der Benutzer das Formular übermittelt" },
        { type: "li", text: "<strong>Bei Änderung:</strong> Validieren, während der Benutzer tippt" },
        { type: "li", text: "<strong>Bei Blur:</strong> Validieren, wenn der Benutzer ein Feld verlässt" },
        { type: "p", text: "Sie sollten klare Fehlermeldungen bereitstellen, um Benutzern zu helfen, ihre Eingabe zu korrigieren." },
      ]},
      { title: "Validierungsfehler anzeigen", content: [
        { type: "p", text: "Zeigen Sie Validierungsfehler klar an, um Benutzern zu helfen zu verstehen, was schiefgegangen ist:" },
        { type: "li", text: "Zeigen Sie Fehler in der Nähe des relevanten Felds" },
        { type: "li", text: "Verwenden Sie klare, beschreibende Fehlermeldungen" },
        { type: "li", text: "Heben Sie ungültige Felder visuell hervor" },
        { type: "li", text: "Geben Sie Vorschläge zur Behebung von Fehlern" },
      ]},
      { title: "Formularbibliotheken", content: [
        { type: "p", text: "Für komplexe Formulare erwägen Sie die Verwendung von Formularbibliotheken, die Validierung, Zustandsverwaltung und Formularübermittlung handhaben:" },
        { type: "li", text: "<strong>React Hook Form:</strong> Leistungsstarke Bibliothek mit wenigen Re-Renderings" },
        { type: "li", text: "<strong>Formik:</strong> Beliebte Bibliothek mit Validierungsunterstützung" },
        { type: "li", text: "<strong>Yup:</strong> Schema-Validierungsbibliothek, die gut mit Formik funktioniert" },
        { type: "p", text: "Diese Bibliotheken können Ihnen Zeit sparen und Fehler in komplexen Formularen reduzieren." },
      ]},
      { title: "Dateieingaben", content: [
        { type: "p", text: "Dateieingaben sind nicht-kontrolliert, da ihr Wert nur gelesen werden kann. Sie können Datei-Uploads mit Refs oder kontrollierten Dateieingaben handhaben." },
        { type: "p", text: "Bei der Handhabung von Dateien denken Sie daran:" },
        { type: "li", text: "Dateitypen und -größen zu validieren" },
        { type: "li", text: "Upload-Fortschritt anzuzeigen" },
        { type: "li", text: "Fehler优雅地 zu handhaben" },
      ]},
    ],
    quiz: [
      { question: "Was ist eine kontrollierte Komponente in React-Formularen?", options: ["Eine Komponente, die ihren eigenen Zustand verwaltet", "Eine Komponente, bei der Formulardaten von React-Zustand verwaltet werden", "Eine Komponente, die Eingaben validiert", "Eine Komponente, die Formularübermittlung verhindert"], explanation: "Bei kontrollierten Komponenten werden Formulardaten von React-Zustand verwaltet. Die Komponente kontrolliert den Wert der Eingabe und aktualisiert ihn über onChange-Handler." },
    ],
    challenge: { title: "Herausforderung: Erstellen Sie ein Registrierungsformular", description: "Erstellen Sie ein Registrierungsformular mit Feldern für Name, E-Mail, Passwort und Passwortbestätigung. Fügen Sie Validierung für alle Felder hinzu." },
    cheatSheet: { title: "Übersicht über Formulare", items: [
      { term: "Kontrollierte Komponenten", definition: "Formulardaten von React-Zustand verwaltet" },
      { term: "Nicht-kontrollierte Komponenten", definition: "Formulardaten vom DOM verwaltet" },
      { term: "onChange-Handler", definition: "Aktualisiert den Zustand, wenn sich die Eingabe ändert" },
      { term: "onSubmit-Handler", definition: "Handhabt die Formularübermittlung" },
      { term: "Validierung", definition: "Eingabe bei Übermittlung, Änderung oder Blur überprüfen" },
      { term: "Fehlermeldungen", definition: "Klare Fehler in der Nähe relevanter Felder anzeigen" },
      { term: "Formularbibliotheken", definition: "React Hook Form, Formik für komplexe Formulare" },
      { term: "Dateieingaben", definition: "Nicht-kontrolliert, mit Refs handhaben" },
    ]}
  },
};

export default translations;
