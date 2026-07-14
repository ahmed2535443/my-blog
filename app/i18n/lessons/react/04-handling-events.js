const translations = {
  en: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "Event handling is a crucial part of building interactive React applications. It allows your components to respond to user actions like clicks, form submissions, and keyboard input." },
        { type: "p", text: "In this lesson, we will learn how to handle events in React and how to create interactive components." },
      ]},
      { title: "Event Handling in React", content: [
        { type: "p", text: "React uses a system called Synthetic Events to handle events consistently across different browsers." },
        { type: "p", text: "Key differences from vanilla JavaScript:" },
        { type: "li", text: "Events are named using camelCase (onClick, onChange)" },
        { type: "li", text: "You pass functions as event handlers, not strings" },
        { type: "li", text: "You must call preventDefault() to prevent default browser behavior" },
      ]},
      { title: "Click Events", content: [
        { type: "p", text: "The most common event type is the click event. You can handle clicks using the onClick attribute." },
        { type: "p", text: "You can pass a function reference or define an inline function for simple cases." },
      ]},
      { title: "Handling Arguments", content: [
        { type: "p", text: "Sometimes you need to pass arguments to event handlers. You can do this using arrow functions or Function.prototype.bind()." },
        { type: "p", text: "Two approaches:" },
        { type: "li", text: "<strong>Arrow function:</strong> () => handleClick(id)" },
        { type: "li", text: "<strong>Bind:</strong> handleClick.bind(null, id)" },
      ]},
      { title: "Form Events", content: [
        { type: "p", text: "Forms are essential for collecting user input. React provides controlled components to handle form data." },
        { type: "p", text: "Controlled components use state to manage form input values." },
      ]},
      { title: "Input Events", content: [
        { type: "p", text: "The onChange event is triggered whenever the input value changes. It's commonly used with text inputs, checkboxes, and select elements." },
      ]},
      { title: "Form Submission", content: [
        { type: "p", text: "When a form is submitted, you typically want to prevent the default browser behavior (page reload) and handle the data with JavaScript." },
        { type: "p", text: "Use e.preventDefault() to stop the form from submitting normally." },
      ]},
      { title: "Keyboard Events", content: [
        { type: "p", text: "React provides keyboard events for handling keyboard input. The most common are onKeyDown, onKeyUp, and onKeyPress." },
        { type: "p", text: "The event object contains useful information about the key pressed." },
      ]},
      { title: "Event Bubbling and Capture", content: [
        { type: "p", text: "Understanding event flow in React is important for building complex interactive UIs." },
        { type: "li", text: "<strong>Bubbling:</strong> Event fires on target, then propagates up to parent" },
        { type: "li", text: "<strong>Capture:</strong> Event fires on parent first, then down to target" },
        { type: "p", "Use event.stopPropagation() to prevent event from bubbling up." },
      ]},
    ],
    quiz: [
      { question: "What is the correct way to handle a click event in React?", options: ["onclick=\"handleClick()\"", "onClick={handleClick}", "onClick=\"handleClick\"", "on-click={handleClick}"], explanation: "In React, event handlers use camelCase (onClick) and receive a function reference (onClick={handleClick}), not a string." },
    ],
    challenge: { title: "Challenge: Build an interactive form", description: "Create a form with text input, email input, and a submit button. Validate the inputs and show error messages if validation fails." },
    cheatSheet: { title: "Event Handling Cheat Sheet", items: [
      { term: "onClick", definition: "Handle click events" },
      { term: "onChange", definition: "Handle input value changes" },
      { term: "onSubmit", definition: "Handle form submission" },
      { term: "onKeyDown/Up", definition: "Handle keyboard events" },
      { term: "preventDefault()", definition: "Stop default browser behavior" },
      { term: "stopPropagation()", definition: "Prevent event from bubbling up" },
      { term: "Synthetic Events", definition: "React's cross-browser event system" },
      { term: "Controlled Components", definition: "Form inputs managed by state" },
    ]}
  },
  fr: {
    sections: [
      { title: "Introduction", content: [
        { type: "p", text: "La gestion des événements est une partie cruciale de la construction d'applications React interactives. Elle permet à vos composants de répondre aux actions de l'utilisateur comme les clics, les soumissions de formulaires et les entrées au clavier." },
        { type: "p", text: "Dans cette leçon, nous apprendrons comment gérer les événements dans React et comment créer des composants interactifs." },
      ]},
      { title: "La gestion des événements dans React", content: [
        { type: "p", text: "React utilise un système appelé Synthetic Events pour gérer les événements de manière cohérente dans différents navigateurs." },
        { type: "p", text: "Différences clés avec le JavaScript vanilla :" },
        { type: "li", text: "Les événements sont nommés en camelCase (onClick, onChange)" },
        { type: "li", text: "Vous passez des fonctions comme gestionnaires d'événements, pas des chaînes" },
        { type: "li", text: "Vous devez appeler preventDefault() pour empêcher le comportement par défaut du navigateur" },
      ]},
      { title: "Événements de clic", content: [
        { type: "p", text: "Le type d'événement le plus courant est l'événement de clic. Vous pouvez gérer les clics en utilisant l'attribut onClick." },
        { type: "p", text: "Vous pouvez passer une référence de fonction ou définir une fonction en ligne pour les cas simples." },
      ]},
      { title: "Gestion des arguments", content: [
        { type: "p", text: "Parfois, vous devez passer des arguments aux gestionnaires d'événements. Vous pouvez le faire en utilisant des fonctions fléchées ou Function.prototype.bind()." },
        { type: "p", text: "Deux approches :" },
        { type: "li", text: "<strong>Fonction fléchée :</strong> () => handleClick(id)" },
        { type: "li", text: "<strong>Bind :</strong> handleClick.bind(null, id)" },
      ]},
      { title: "Événements de formulaire", content: [
        { type: "p", text: "Les formulaires sont essentiels pour collecter les entrées utilisateur. React fournit des composants contrôlés pour gérer les données de formulaire." },
        { type: "p", text: "Les composants contrôlés utilisent l'état pour gérer les valeurs des entrées de formulaire." },
      ]},
      { title: "Événements d'entrée", content: [
        { type: "p", text: "L'événement onChange est déclenché chaque fois que la valeur de l'entrée change. Il est couramment utilisé avec les entrées texte, les cases à cocher et les éléments de sélection." },
      ]},
      { title: "Soumission de formulaire", content: [
        { type: "p", text: "Quand un formulaire est soumis, vous voulez généralement empêcher le comportement par défaut du navigateur (rechargement de page) et gérer les données avec JavaScript." },
        { type: "p", text: "Utilisez e.preventDefault() pour empêcher le formulaire de se soumettre normalement." },
      ]},
      { title: "Événements clavier", content: [
        { type: "p", text: "React fournit des événements clavier pour gérer les entrées au clavier. Les plus courants sont onKeyDown, onKeyUp et onKeyPress." },
        { type: "p", text: "L'objet événement contient des informations utiles sur la touche pressée." },
      ]},
      { title: "Bulle et capture d'événements", content: [
        { type: "p", text: "Comprendre le flux des événements dans React est important pour construire des interfaces interactives complexes." },
        { type: "li", text: "<strong>Bulle :</strong> L'événement se déclenche sur la cible, puis se propage vers le parent" },
        { type: "li", text: "<strong>Capture :</strong> L'événement se déclenche d'abord sur le parent, puis descend vers la cible" },
        { type: "p", text: "Utilisez event.stopPropagation() pour empêcher l'événement de remonter en bulle." },
      ]},
    ],
    quiz: [
      { question: "Quelle est la bonne façon de gérer un événement de clic dans React ?", options: ["onclick=\"handleClick()\"", "onClick={handleClick}", "onClick=\"handleClick\"", "on-click={handleClick}"], explanation: "Dans React, les gestionnaires d'événements utilisent le camelCase (onClick) et reçoivent une référence de fonction (onClick={handleClick}), pas une chaîne." },
    ],
    challenge: { title: "Défi : Construisez un formulaire interactif", description: "Créez un formulaire avec une entrée texte, une entrée email et un bouton de soumission. Validez les entrées et affichez des messages d'erreur si la validation échoue." },
    cheatSheet: { title: "Référence de la gestion des événements", items: [
      { term: "onClick", definition: "Gérer les événements de clic" },
      { term: "onChange", definition: "Gérer les changements de valeur d'entrée" },
      { term: "onSubmit", definition: "Gérer la soumission de formulaire" },
      { term: "onKeyDown/Up", definition: "Gérer les événements clavier" },
      { term: "preventDefault()", definition: "Arrêter le comportement par défaut du navigateur" },
      { term: "stopPropagation()", definition: "Empêcher l'événement de remonter en bulle" },
      { term: "Synthetic Events", definition: "Système d'événements multi-navigateurs de React" },
      { term: "Composants contrôlés", definition: "Entrées de formulaire gérées par l'état" },
    ]}
  },
  de: {
    sections: [
      { title: "Einführung", content: [
        { type: "p", text: "Die Ereignisbehandlung ist ein entscheidender Teil der Erstellung interaktiver React-Anwendungen. Sie ermöglicht es Ihren Komponenten, auf Benutzeraktionen wie Klicks, Formulareingaben und Tastatureingaben zu reagieren." },
        { type: "p", text: "In dieser Lektion lernen wir, wie man Ereignisse in React handhabt und wie man interaktive Komponenten erstellt." },
      ]},
      { title: "Ereignisbehandlung in React", content: [
        { type: "p", text: "React verwendet ein System namens Synthetic Events, um Ereignisse konsistent in verschiedenen Browsern zu handhaben." },
        { type: "p", text: "Wichtige Unterschiede zu Vanilla-JavaScript:" },
        { type: "li", text: "Ereignisse werden in camelCase benannt (onClick, onChange)" },
        { type: "li", text: "Sie übergeben Funktionen als Ereignisbehandler, keine Strings" },
        { type: "li", text: "Sie müssen preventDefault() aufrufen, um Standardbrowserverhalten zu verhindern" },
      ]},
      { title: "Klick-Ereignisse", content: [
        { type: "p", text: "Der häufigste Ereignistyp ist das Klick-Ereignis. Sie können Klicks mit dem onClick-Attribut handhaben." },
        { type: "p", text: "Sie können eine Funktionsreferenz übergeben oder für einfache Fälle eine Inline-Funktion definieren." },
      ]},
      { title: "Argumente handhaben", content: [
        { type: "p", text: "Manchmal müssen Sie Argumente an Ereignisbehandler übergeben. Dies können Sie mit Pfeilfunktionen oder Function.prototype.bind() tun." },
        { type: "p", text: "Zwei Ansätze:" },
        { type: "li", text: "<strong>Pfeilfunktion:</strong> () => handleClick(id)" },
        { type: "li", text: "<strong>Bind:</strong> handleClick.bind(null, id)" },
      ]},
      { title: "Formular-Ereignisse", content: [
        { type: "p", text: "Formulare sind essenziell für die Eingabesammlung von Benutzern. React stellt kontrollierte Komponenten zur Handhabung von Formulardaten bereit." },
        { type: "p", text: "Kontrollierte Komponenten verwenden Zustand, um Formulareingabewerte zu verwalten." },
      ]},
      { title: "Eingabe-Ereignisse", content: [
        { type: "p", text: "Das onChange-Ereignis wird ausgelöst, whenever sich der Eingabewert ändert. Es wird häufig mit Texteingaben, Kontrollkästchen und Auswahlelementen verwendet." },
      ]},
      { title: "Formularübermittlung", content: [
        { type: "p", text: "Wenn ein Formular übermittelt wird, möchten Sie normalerweise das Standardbrowserverhalten (Seitenneuladen) verhindern und die Daten mit JavaScript verarbeiten." },
        { type: "p", text: "Verwenden Sie e.preventDefault(), um zu verhindern, dass das Formular normal übermittelt wird." },
      ]},
      { title: "Tastatur-Ereignisse", content: [
        { type: "p", text: "React stellt Tastaturereignisse zur Handhabung von Tastatureingaben bereit. Die häufigsten sind onKeyDown, onKeyUp und onKeyPress." },
        { type: "p", text: "Das Ereignisobjekt enthält nützliche Informationen über die gedrückte Taste." },
      ]},
      { title: "Ereignis-Bubbling und Capture", content: [
        { type: "p", text: "Das Verständnis des Ereignisflusses in React ist wichtig für den Aufbau komplexer interaktiver Benutzeroberflächen." },
        { type: "li", text: "<strong>Bubbling:</strong> Ereignis feuert auf dem Ziel, dann propagiert es zum Elternteil" },
        { type: "li", text: "<strong>Capture:</strong> Ereignis feuert zuerst auf dem Elternteil, dann zum Ziel" },
        { type: "p", text: "Verwenden Sie event.stopPropagation(), um zu verhindern, dass Ereignisse nach oben blubbern." },
      ]},
    ],
    quiz: [
      { question: "Was ist der richtige Weg, ein Klick-Ereignis in React zu handhaben?", options: ["onclick=\"handleClick()\"", "onClick={handleClick}", "onClick=\"handleClick\"", "on-click={handleClick}"], explanation: "In React verwenden Ereignisbehandler camelCase (onClick) und erhalten eine Funktionsreferenz (onClick={handleClick}), keinen String." },
    ],
    challenge: { title: "Herausforderung: Erstellen Sie ein interaktives Formular", description: "Erstellen Sie ein Formular mit Texteingabe, E-Mail-Eingabe und einem Übermittlungsbutton. Validieren Sie die Eingaben und zeigen Sie Fehlermeldungen an, wenn die Validierung fehlschlägt." },
    cheatSheet: { title: "Übersicht über Ereignisbehandlung", items: [
      { term: "onClick", definition: "Klick-Ereignisse handhaben" },
      { term: "onChange", definition: "Eingabewertänderungen handhaben" },
      { term: "onSubmit", definition: "Formularübermittlung handhaben" },
      { term: "onKeyDown/Up", definition: "Tastatur-Ereignisse handhaben" },
      { term: "preventDefault()", definition: "Standardbrowserverhalten stoppen" },
      { term: "stopPropagation()", definition: "Verhindern, dass Ereignisse nach oben blubbern" },
      { term: "Synthetic Events", definition: "Reacts browserübergreifendes Ereignissystem" },
      { term: "Kontrollierte Komponenten", definition: "Formulareingaben, die von Zustand verwaltet werden" },
    ]}
  },
};

export default translations;
