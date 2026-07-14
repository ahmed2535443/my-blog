const translations = {
  ar: {
    sections: [
      { title: "ما هو DOM؟", content: [
        { type: "p", text: "<strong>DOM</strong> يعني <strong>نموذج كائن المستند (Document Object Model)</strong>. هو واجهة برمجة تطبيقات تمثل محتوى صفحة الويب كشجرة كائنات. يُحوّل المتصفح HTML إلى شجرة يمكن لجافاسكريبت التفاعل معها وتعديلها." },
        { type: "callout", title: "تشبيه:", text: "DOM مثل شجرة عائلية: <code>document</code> هو الجذر، تحته الفروع (عناصر HTML)، وكل فرع يمكن أن يحتوي على فروع أخرى." },
      ]},
      { title: "لماذا نستخدم DOM؟", content: [
        { type: "p", text: "بدون DOM، كانت صفحات الويب ثابتة وغير قابلة للتعديل. DOM يسمح بجعل الصفحات <strong>تفاعلية</strong>: تحديث المحتوى، إظهار/إخفاء العناصر، وإضافة عناصر جديدة دون إعادة تحميل الصفحة." },
        { type: "callout", title: "ملاحظة حول React:", text: "في <strong>React</strong>، لا نعدّل DOM يدويًا - React يتعامل مع ذلك تلقائيًا. لكن فهم DOM يساعدك على فهم ما يفعله React خلف الكواليس." },
      ]},
      { title: "المشكلة التي يحلها DOM", content: [
        { type: "p", text: "قبل DOM، كان المتصفحات تعرض HTML كنص ثابت فقط. DOM يوفر <strong>تمثيلًا شجريًا</strong> لكل عنصر وواجهة برمجة للبحث والتعديل والتفاعل معه." },
      ]},
      { title: "شرح بسيط", content: [
        { type: "p", text: "ثلاث طرق رئيسية لاختيار العناصر:" },
        { type: "p", text: "<strong>getElementById</strong>: البحث بالـ id فقط. <strong>querySelector</strong>: أكثر مرونة ويدعم أي محدد CSS." },
      ]},
      { title: "مثال بسيط: تعديل العناصر", content: [
        { type: "p", text: "تغيير النص وHTML والنمط، إضافة/تبديل الفئات، وتعيين السمات." },
      ]},
      { title: "مثال عملي: قائمة مهام تفاعلية", content: [
        { type: "p", text: "قائمة مهام تفاعلية كاملة مع وظائف الإضافة والحذف باستخدام addEventListener و createElement و appendChild." },
      ]},
      { title: "الأحداث", content: [
        { type: "p", text: "الأحداث هي طريقة جافاسكريبت للاستجابة لتفاعلات المستخدم." },
        { type: "li", text: "<code>click</code> / <code>dblclick</code> - النقر" },
        { type: "li", text: "<code>input</code> / <code>change</code> - تغيير الحقول" },
        { type: "li", text: "<code>submit</code> - إرسال النموذج" },
        { type: "li", text: "<code>keydown</code> / <code>keyup</code> - المفاتيح" },
        { type: "li", text: "<code>scroll</code> - التمرير" },
      ]},
      { title: "تفويض الأحداث - نمط مهم", content: [
        { type: "p", text: "<strong>تفويض الأحداث:</strong> بدلاً من مستمع لكل عنصر، أضف مستمعًا واحدًا للأب وتحقق من <code>event.target</code>." },
        { type: "callout", title: "لماذا مهم؟", text: "يعمل مع العناصر المنشأة ديناميكيًا. موفر للذاكرة: مستمع واحد بدلاً من المئات." },
      ]},
      { title: "ماذا يحدث خلف الكواليس؟", content: [
        { type: "p", text: "عندما يحدث حدث، يمر بثلاث مراحل:" },
        { type: "li", text: "<strong>التقاط:</strong> يهبط من الجذر إلى العنصر المستهدف" },
        { type: "li", text: "<strong>الهدف:</strong> يصل إلى العنصر ويعمل المستمع" },
        { type: "li", text: "<strong>الفقاعات:</strong> يصعد من الهدف إلى الجذر" },
        { type: "p", text: "هذه الآلية تجعل <strong>تفويض الأحداث</strong> ممكنًا - الأحداث تنتقل من الأبناء إلى الآباء عبر مرحلة الفقاعات." },
      ]},
      { title: "الأخطاء الشائعة", content: [
        { type: "li", text: "<strong>الخلط بين querySelector و querySelectorAll:</strong> querySelector يُرجع عنصرًا واحدًا، querySelectorAll يُرجع جميع العناصر المطابقة." },
        { type: "li", text: "<strong>استخدام innerHTML مع نص المستخدم:</strong> يسمح بهجمات XSS. استخدم textContent بدلاً من ذلك." },
        { type: "li", text: "<strong>نسيان removeEventListener:</strong> أزل المستمعين دائمًا عند الانتهاء لمنع تسرب الذاكرة." },
      ]},
      { title: "أفضل الممارسات", content: [
        { type: "li", text: "<strong>فضل querySelector/All:</strong> أكثر مرونة." },
        { type: "li", text: "<strong>استخدم textContent بدلاً من innerHTML:</strong> لتجنب XSS." },
        { type: "li", text: "<strong>استخدم تفويض الأحداث:</strong> للعناصر الديناميكية." },
        { type: "li", text: "<strong>أزل المستمعين عند الانتهاء:</strong> لمنع تسرب الذاكرة." },
        { type: "li", text: "<strong>في React، لا تعدّل DOM يدويًا:</strong> دع React يتعامل مع ذلك." },
      ]},
      { title: "ملخص", content: [
        { type: "li", text: "<strong>DOM</strong> هو تمثيل شجري لمحتوى الصفحة يمكن لجافاسكريبت التفاعل معه." },
        { type: "li", text: "<strong>الاختيار:</strong> getElementById و querySelector و querySelectorAll." },
        { type: "li", text: "<strong>التعديل:</strong> textContent و innerHTML و classList و style." },
        { type: "li", text: "<strong>الإنشاء/الحذف:</strong> createElement و appendChild و remove." },
        { type: "li", text: "<strong>الأحداث:</strong> addEventListener للاستجابة لتفاعلات المستخدم." },
        { type: "li", text: "<strong>تفويض الأحداث:</strong> مستمع واحد على الأب يتعامل مع جميع الأبناء." },
        { type: "li", text: "<strong>في React:</strong> لا نعدّل DOM مباشرة - React يستخدم DOM افتراضيًا." },
      ]},
    ],
    quiz: [
      { question: "ما هو الفرق بين querySelector و getElementById؟", options: ["لا يوجد فرق", "querySelector تبحث فقط بالـ id", "getElementById تبحث فقط بالـ id، بينما querySelector تدعم أي محدد CSS", "querySelector أسرع دائمًا"], correctAnswer: 2, explanation: "getElementById تبحث فقط بالـ id. querySelector تبحث عن أول عنصر يطابق أي محدد CSS. getElementById أسرع لكن querySelector أكثر مرونة." },
      { question: "لماذا نستخدم تفويض الأحداث؟", options: ["لأنها أسرع وأسهل في المعالجة", "لأنها تسمح بمعالجة أحداث العناصر المنشأة ديناميكيًا توفر الذاكرة", "لأنها الطريقة الوحيدة", "لأنها تمنع preventDefault"], correctAnswer: 1, explanation: "تفويض الأحداث تستخدم مرحلة الفقاعات لالتقاط الأحداث على الأب. تعمل مع العناصر المنشأة ديناميكيًا وتوفر الذاكرة." },
    ],
    challenge: { title: "تحدي: عداد تفاعلي", description: "أنشئ عدادًا مع: عنصر يعرض العداد (يبدأ من 0)، زر +1، زر -1، وزر إعادة تعيين. استخدم querySelector و addEventListener." },
    cheatSheet: { title: "ملخص DOM والأحداث", items: [
      { label: "اختيار العناصر", description: "document.getElementById('id') | document.querySelector('.class') | document.querySelectorAll('li') | element.parentElement | element.children" },
      { label: "الأحداث", description: "el.addEventListener('click', fn) | el.removeEventListener('click', fn) | 'click' 'input' 'submit' 'keydown' | event.target / event.preventDefault()" },
      { label: "تعديل العناصر", description: "el.textContent = 'جديد' | el.innerHTML = '<b>جديد</b>' | el.style.color = 'أحمر' | el.classList.add('أ') | el.setAttribute('href', '#')" },
      { label: "الإنشاء والحذف", description: "document.createElement('div') | parent.appendChild(div) | div.remove() | element.cloneNode(true)" },
    ]},
  },
  en: {
    sections: [
      { title: "What Is DOM?", content: [
        { type: "p", text: "<strong>DOM</strong> stands for <strong>Document Object Model</strong>. It is an API that represents web page content as a tree of objects. The browser converts HTML into a tree that JavaScript can interact with and modify." },
        { type: "callout", title: "Analogy:", text: "The DOM is like a family tree: <code>document</code> is the root, underneath are branches (HTML elements), and each branch can contain other branches." },
      ]},
      { title: "Why Use DOM?", content: [
        { type: "p", text: "Without DOM, web pages would be static and unchangeable. DOM allows making pages <strong>interactive</strong>: updating content, showing/hiding elements, and adding new elements without reloading the page." },
        { type: "callout", title: "Note about React:", text: "In <strong>React</strong>, we don't manually modify the DOM - React handles that automatically. But understanding DOM helps you understand what React does behind the scenes." },
      ]},
      { title: "The Problem DOM Solves", content: [
        { type: "p", text: "Before DOM, browsers displayed HTML as static text only. DOM provides a <strong>tree representation</strong> for every element and an API for searching, modifying, and interacting with it." },
      ]},
      { title: "Simple Explanation", content: [
        { type: "p", text: "Three main ways to select elements:" },
        { type: "p", text: "<strong>getElementById</strong>: Searches by id only. <strong>querySelector</strong>: More flexible and supports any CSS selector." },
      ]},
      { title: "Simple Example: Modifying Elements", content: [
        { type: "p", text: "Changing text, HTML, style, adding/toggling classes, and setting attributes." },
      ]},
      { title: "Practical Example: Interactive Task List", content: [
        { type: "p", text: "A complete interactive task list with add and delete functionality using addEventListener, createElement, and appendChild." },
      ]},
      { title: "Events", content: [
        { type: "p", text: "Events are JavaScript's way of responding to user interactions." },
        { type: "li", text: "<code>click</code> / <code>dblclick</code> - Clicking" },
        { type: "li", text: "<code>input</code> / <code>change</code> - Changing fields" },
        { type: "li", text: "<code>submit</code> - Form submission" },
        { type: "li", text: "<code>keydown</code> / <code>keyup</code> - Keys" },
        { type: "li", text: "<code>scroll</code> - Scrolling" },
      ]},
      { title: "Event Delegation - Important Pattern", content: [
        { type: "p", text: "<strong>Event Delegation:</strong> Instead of a listener for each element, add one listener to the parent and check <code>event.target</code>." },
        { type: "callout", title: "Why Important?", text: "Works with dynamically created elements. Memory efficient: one listener instead of hundreds." },
      ]},
      { title: "What Happens Behind the Scenes?", content: [
        { type: "p", text: "When an event occurs, it passes through three phases:" },
        { type: "li", text: "<strong>Capture:</strong> Goes down from root to target element" },
        { type: "li", text: "<strong>Target:</strong> Reaches the element and listener fires" },
        { type: "li", text: "<strong>Bubble:</strong> Goes up from target to root" },
        { type: "p", text: "This mechanism makes <strong>Event Delegation</strong> possible - events transfer from children to parents through the Bubble Phase." },
      ]},
      { title: "Common Mistakes", content: [
        { type: "li", text: "<strong>Confusing querySelector and querySelectorAll:</strong> querySelector returns one element, querySelectorAll returns all matching elements." },
        { type: "li", text: "<strong>Using innerHTML with user text:</strong> Allows XSS attacks. Use textContent instead." },
        { type: "li", text: "<strong>Forgetting removeEventListener:</strong> Always remove listeners when done to prevent memory leaks." },
      ]},
      { title: "Best Practices", content: [
        { type: "li", text: "<strong>Prefer querySelector/All:</strong> More flexible." },
        { type: "li", text: "<strong>Use textContent instead of innerHTML:</strong> To avoid XSS." },
        { type: "li", text: "<strong>Use Event Delegation:</strong> For dynamic elements." },
        { type: "li", text: "<strong>Remove listeners when done:</strong> To prevent memory leaks." },
        { type: "li", text: "<strong>In React, don't modify DOM manually:</strong> Let React handle it." },
      ]},
      { title: "Summary", content: [
        { type: "li", text: "<strong>DOM</strong> is a tree representation of page content that JavaScript can interact with." },
        { type: "li", text: "<strong>Selection:</strong> getElementById, querySelector, querySelectorAll." },
        { type: "li", text: "<strong>Modification:</strong> textContent, innerHTML, classList, style." },
        { type: "li", text: "<strong>Creation/Deletion:</strong> createElement, appendChild, remove." },
        { type: "li", text: "<strong>Events:</strong> addEventListener for responding to user interactions." },
        { type: "li", text: "<strong>Event Delegation:</strong> One listener on parent handles all children." },
        { type: "li", text: "<strong>In React:</strong> We don't modify DOM directly - React uses Virtual DOM." },
      ]},
    ],
    quiz: [
      { question: "What is the difference between querySelector and getElementById?", options: ["No difference", "querySelector only searches by id", "getElementById only searches by id, while querySelector supports any CSS selector", "querySelector is always faster"], correctAnswer: 2, explanation: "getElementById only searches by id. querySelector searches for the first element matching any CSS selector. getElementById is faster but querySelector is more flexible." },
      { question: "Why do we use Event Delegation?", options: ["Because it's faster and easier to process", "Because it allows handling events on dynamically created elements and saves memory", "Because it's the only way", "Because it prevents preventDefault"], correctAnswer: 1, explanation: "Event Delegation uses the Bubble Phase to capture events on the parent. It works with dynamically created elements and saves memory." },
    ],
    challenge: { title: "Challenge: Interactive Counter", description: "Create a counter with: an element displaying the count (start from 0), a +1 button, a -1 button, and a reset button. Use querySelector and addEventListener." },
    cheatSheet: { title: "DOM and Events Summary", items: [
      { label: "Element Selection", description: "document.getElementById('id') | document.querySelector('.class') | document.querySelectorAll('li') | element.parentElement | element.children" },
      { label: "Events", description: "el.addEventListener('click', fn) | el.removeEventListener('click', fn) | 'click' 'input' 'submit' 'keydown' | event.target / event.preventDefault()" },
      { label: "Element Modification", description: "el.textContent = 'new' | el.innerHTML = '<b>new</b>' | el.style.color = 'red' | el.classList.add('a') | el.setAttribute('href', '#')" },
      { label: "Creation and Deletion", description: "document.createElement('div') | parent.appendChild(div) | div.remove() | element.cloneNode(true)" },
    ]},
  },
  fr: {
    sections: [
      { title: "Qu'Est-Ce Que Le DOM ?", content: [
        { type: "p", text: "Le <strong>DOM</strong> signifie <strong>Document Object Model</strong>. C'est une API qui représente le contenu d'une page web sous forme d'arbre d'objets." },
        { type: "callout", title: "Analogie :", text: "Le DOM est comme un arbre généalogique : <code>document</code> est la racine, en dessous sont les branches (éléments HTML), et chaque branche peut contenir d'autres branches." },
      ]},
      { title: "Pourquoi Utiliser Le DOM ?", content: [
        { type: "p", text: "Sans DOM, les pages web seraient statiques et inchangables. Le DOM permet de rendre les pages <strong>interactives</strong>." },
        { type: "callout", title: "Note sur React :", text: "Dans <strong>React</strong>, nous ne modifions pas manuellement le DOM - React le gère automatiquement." },
      ]},
      { title: "Le Problème Que Le DOM Résout", content: [
        { type: "p", text: "Avant le DOM, les navigateurs affichaient le HTML comme du texte statique uniquement. Le DOM fournit une <strong>représentation en arbre</strong> pour chaque élément." },
      ]},
      { title: "Explication Simple", content: [
        { type: "p", text: "Trois façons principales de sélectionner des éléments :" },
        { type: "p", text: "<strong>getElementById</strong> : Recherche par id uniquement. <strong>querySelector</strong> : Plus flexible et supporte tout sélecteur CSS." },
      ]},
      { title: "Exemple Simple : Modification d'Éléments", content: [
        { type: "p", text: "Changement de texte, HTML, style, ajout/toggle de classes, et définition d'attributs." },
      ]},
      { title: "Exemple Pratique : Liste de Tâches Interactive", content: [
        { type: "p", text: "Une liste de tâches interactive complète avec ajout et suppression." },
      ]},
      { title: "Événements", content: [
        { type: "p", text: "Les événements sont la façon dont JavaScript répond aux interactions utilisateur." },
        { type: "li", text: "<code>click</code> / <code>dblclick</code> - Clic" },
        { type: "li", text: "<code>input</code> / <code>change</code> - Modification de champs" },
        { type: "li", text: "<code>submit</code> - Soumission de formulaire" },
        { type: "li", text: "<code>keydown</code> / <code>keyup</code> - Touches" },
        { type: "li", text: "<code>scroll</code> - Défilement" },
      ]},
      { title: "Délégation d'Événements - Pattern Important", content: [
        { type: "p", text: "<strong>Délégation d'Événements :</strong> Au lieu d'un écouteur pour chaque élément, ajoutez un écouteur au parent et vérifiez <code>event.target</code>." },
        { type: "callout", title: "Pourquoi Important ?", text: "Fonctionne avec les éléments créés dynamiquement. Économie de mémoire : un écouteur au lieu de centaines." },
      ]},
      { title: "Que Se Passe-T-il en Coulisse ?", content: [
        { type: "p", text: "Quand un événement se produit, il passe par trois phases :" },
        { type: "li", text: "<strong>Capture :</strong> Descend de la racine vers l'élément cible" },
        { type: "li", text: "<strong>Cible :</strong> Atteint l'élément et l'écouteur se déclenche" },
        { type: "li", text: "<strong>Bulles :</strong> Remonte de la cible vers la racine" },
      ]},
      { title: "Erreurs Courantes", content: [
        { type: "li", text: "<strong>Confondre querySelector et querySelectorAll :</strong> querySelector retourne un élément, querySelectorAll tous les éléments correspondants." },
        { type: "li", text: "<strong>Utiliser innerHTML avec du texte utilisateur :</strong> Permet les attaques XSS. Utilisez textContent." },
        { type: "li", text: "<strong>Oublier removeEventListener :</strong> Toujours supprimer les écouteurs quand c'est fini." },
      ]},
      { title: "Bonnes Pratiques", content: [
        { type: "li", text: "<strong>Préférez querySelector/All :</strong> Plus flexible." },
        { type: "li", text: "<strong>Utilisez textContent au lieu de innerHTML :</strong> Pour éviter les XSS." },
        { type: "li", text: "<strong>Utilisez la Délégation d'Événements :</strong> Pour les éléments dynamiques." },
        { type: "li", text: "<strong>Supprimez les écouteurs :</strong> Pour éviter les fuites de mémoire." },
        { type: "li", text: "<strong>Dans React, ne modifiez pas le DOM :</strong> Laissez React s'en occuper." },
      ]},
      { title: "Résumé", content: [
        { type: "li", text: "<strong>DOM</strong> est une représentation en arbre du contenu de la page." },
        { type: "li", text: "<strong>Sélection :</strong> getElementById, querySelector, querySelectorAll." },
        { type: "li", text: "<strong>Modification :</strong> textContent, innerHTML, classList, style." },
        { type: "li", text: "<strong>Création/Suppression :</strong> createElement, appendChild, remove." },
        { type: "li", text: "<strong>Événements :</strong> addEventListener pour répondre aux interactions." },
        { type: "li", text: "<strong>Délégation :</strong> Un écouteur sur le parent gère tous les enfants." },
        { type: "li", text: "<strong>Dans React :</strong> Nous ne modifions pas le DOM directement." },
      ]},
    ],
    quiz: [
      { question: "Quelle est la différence entre querySelector et getElementById ?", options: ["Pas de différence", "querySelector ne recherche que par id", "getElementById ne recherche que par id, tandis que querySelector supporte tout sélecteur CSS", "querySelector est toujours plus rapide"], correctAnswer: 2, explanation: "getElementById ne recherche que par id. querySelector recherche le premier élément correspondant à n'importe quel sélecteur CSS." },
      { question: "Pourquoi utilisons-nous la Délégation d'Événements ?", options: ["Parce qu'elle est plus rapide", "Parce qu'elle permet de gérer les événements des éléments dynamiques et économise la mémoire", "Parce que c'est la seule façon", "Parce qu'elle empêche preventDefault"], correctAnswer: 1, explanation: "La Délégation d'Événements utilise la Phase Bulles pour capturer les événements sur le parent." },
    ],
    challenge: { title: "Défi : Compteur Interactif", description: "Créez un compteur avec : un élément affichant le compteur, un bouton +1, un bouton -1, et un bouton réinitialiser." },
    cheatSheet: { title: "Résumé DOM et Événements", items: [
      { label: "Sélection d'Éléments", description: "document.getElementById('id') | document.querySelector('.class') | document.querySelectorAll('li')" },
      { label: "Événements", description: "el.addEventListener('click', fn) | el.removeEventListener('click', fn) | event.target / event.preventDefault()" },
      { label: "Modification", description: "el.textContent = 'nouveau' | el.innerHTML = '<b>nouveau</b>' | el.style.color = 'rouge' | el.classList.add('a')" },
      { label: "Création et Suppression", description: "document.createElement('div') | parent.appendChild(div) | div.remove()" },
    ]},
  },
  de: {
    sections: [
      { title: "Was Ist DOM?", content: [
        { type: "p", text: "<strong>DOM</strong> steht für <strong>Document Object Model</strong>. Es ist eine API, die den Webseiteninhalt als Objektbaum darstellt." },
        { type: "callout", title: "Analogie:", text: "Das DOM ist wie ein Familienbaum: <code>document</code> ist die Wurzel, darunter sind Äste (HTML-Elemente), und jeder Ast kann andere Äste enthalten." },
      ]},
      { title: "Warum DOM Verwenden?", content: [
        { type: "p", text: "Ohne DOM wären Webseiten statisch und unveränderbar. DOM ermöglicht es, Seiten <strong>interaktiv</strong> zu machen." },
        { type: "callout", title: "Hinweis zu React:", text: "In <strong>React</strong> ändern wir das DOM nicht manuell - React übernimmt das automatisch." },
      ]},
      { title: "Das Problem, das DOM Löst", content: [
        { type: "p", text: "Vor DOM zeigten Browser HTML nur als statischen Text an. DOM stellt eine <strong>baumartige Darstellung</strong> für jedes Element bereit." },
      ]},
      { title: "Einfache Erklärung", content: [
        { type: "p", text: "Drei Hauptwege, um Elemente auszuwählen:" },
        { type: "p", text: "<strong>getElementById</strong>: Sucht nur per id. <strong>querySelector</strong>: Flexibler und unterstützt jeden CSS-Selektor." },
      ]},
      { title: "Einfaches Beispiel: Elemente Ändern", content: [
        { type: "p", text: "Text, HTML, Stil ändern, Klassen hinzufügen/umschalten und Attribute setzen." },
      ]},
      { title: "Praktisches Beispiel: Interaktive Aufgabenliste", content: [
        { type: "p", text: "Eine vollständige interaktive Aufgabenliste mit Hinzufügen und Löschen." },
      ]},
      { title: "Ereignisse", content: [
        { type: "p", text: "Ereignisse sind die Art und Weise, wie JavaScript auf Benutzerinteraktionen reagiert." },
        { type: "li", text: "<code>click</code> / <code>dblclick</code> - Klicken" },
        { type: "li", text: "<code>input</code> / <code>change</code> - Felder ändern" },
        { type: "li", text: "<code>submit</code> - Formularabsendung" },
        { type: "li", text: "<code>keydown</code> / <code>keyup</code> - Tasten" },
        { type: "li", text: "<code>scroll</code> - Scrollen" },
      ]},
      { title: "Event Delegation - Wichtiges Muster", content: [
        { type: "p", text: "<strong>Event Delegation:</strong> Anstatt eines Listeners für jedes Element, fügen Sie einen Listener zum Elternteil hinzu und prüfen Sie <code>event.target</code>." },
        { type: "callout", title: "Warum Wichtig?", text: "Funktioniert mit dynamisch erstellten Elementen. Sparsam im Speicher: ein Listener statt Hunderten." },
      ]},
      { title: "Was Passiert Hinter den Kulissen?", content: [
        { type: "p", text: "Wenn ein Ereignis auftritt, durchläuft es drei Phasen:" },
        { type: "li", text: "<strong>Capture:</strong> Geht von der Wurzel zum Ziel-Element herunter" },
        { type: "li", text: "<strong>Target:</strong> Erreicht das Element und der Listener feuert" },
        { type: "li", text: "<strong>Bubble:</strong> Geht vom Ziel zur Wurzel hinauf" },
      ]},
      { title: "Häufige Fehler", content: [
        { type: "li", text: "<strong>Verwechslung von querySelector und querySelectorAll:</strong> querySelector gibt ein Element zurück, querySelectorAll alle passenden Elemente." },
        { type: "li", text: "<strong>Verwendung von innerHTML mit Benutzertext:</strong> Ermöglicht XSS-Angriffe. Verwenden Sie stattdessen textContent." },
        { type: "li", text: "<strong>Vergessen von removeEventListener:</strong> Entfernen Sie Listener immer, wenn Sie fertig sind." },
      ]},
      { title: "Best Practices", content: [
        { type: "li", text: "<strong>Bevorzugen Sie querySelector/All:</strong> Flexibler." },
        { type: "li", text: "<strong>Verwenden Sie textContent statt innerHTML:</strong> Um XSS zu vermeiden." },
        { type: "li", text: "<strong>Verwenden Sie Event Delegation:</strong> Für dynamische Elemente." },
        { type: "li", text: "<strong>Entfernen Sie Listener:</strong> Um Speicherlecks zu verhindern." },
        { type: "li", text: "<strong>In React, ändern Sie das DOM nicht manuell:</strong> Lassen Sie React das übernehmen." },
      ]},
      { title: "Kurszusammenfassung", content: [
        { type: "li", text: "<strong>DOM</strong> ist eine baumartige Darstellung des Seiteninhalts." },
        { type: "li", text: "<strong>Auswahl:</strong> getElementById, querySelector, querySelectorAll." },
        { type: "li", text: "<strong>Änderung:</strong> textContent, innerHTML, classList, style." },
        { type: "li", text: "<strong>Erstellung/Löschung:</strong> createElement, appendChild, remove." },
        { type: "li", text: "<strong>Ereignisse:</strong> addEventListener zur Reaktion auf Benutzerinteraktionen." },
        { type: "li", text: "<strong>Delegation:</strong> Ein Listener am Elternteil behandelt alle Kinder." },
        { type: "li", text: "<strong>In React:</strong> Wir ändern das DOM nicht direkt." },
      ]},
    ],
    quiz: [
      { question: "Was ist der Unterschied zwischen querySelector und getElementById?", options: ["Kein Unterschied", "querySelector sucht nur nach id", "getElementById sucht nur nach id, während querySelector jeden CSS-Selektor unterstützt", "querySelector ist immer schneller"], correctAnswer: 2, explanation: "getElementById sucht nur nach id. querySelector sucht das erste Element, das einem beliebigen CSS-Selektor entspricht." },
      { question: "Warum verwenden wir Event Delegation?", options: ["Weil sie schneller ist", "Weil sie die Verarbeitung von Ereignissen dynamischer Elemente ermöglicht und Speicher spart", "Weil es der einzige Weg ist", "Weil sie preventDefault verhindert"], correctAnswer: 1, explanation: "Event Delegation nutzt die Bubble Phase, um Ereignisse am Elternteil abzufangen." },
    ],
    challenge: { title: "Herausforderung: Interaktiver Zähler", description: "Erstellen Sie einen Zähler mit: einem Element, das die Anzahl anzeigt, einem +1-Button, einem -1-Button und einem Reset-Button." },
    cheatSheet: { title: "DOM und Ereignisse Zusammenfassung", items: [
      { label: "Elementauswahl", description: "document.getElementById('id') | document.querySelector('.class') | document.querySelectorAll('li')" },
      { label: "Ereignisse", description: "el.addEventListener('click', fn) | el.removeEventListener('click', fn) | event.target / event.preventDefault()" },
      { label: "Änderung", description: "el.textContent = 'neu' | el.innerHTML = '<b>neu</b>' | el.style.color = 'rot' | el.classList.add('a')" },
      { label: "Erstellung und Löschung", description: "document.createElement('div') | parent.appendChild(div) | div.remove()" },
    ]},
  },
};

export default translations;
