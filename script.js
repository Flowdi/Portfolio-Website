const translations = {
  de: {
    "navigation.open": "Menü öffnen", "navigation.projects": "Projekte", "navigation.skills": "Kenntnisse", "navigation.about": "Über mich", "navigation.contact": "Kontakt",
    "hero.eyebrow": "Entwickelt in Augsburg · offen für Remote", "hero.lineOne": "Full-Stack Development", "hero.lineTwo": "mit persönlicher Handschrift.",
    "hero.intro": "Ich bin Florian Dumler. Ich entwickle moderne Webanwendungen und beschäftige mich intensiv mit Python-Automatisierung – strukturiert, neugierig und mit Freude an guten Lösungen.", "hero.projectsCta": "Projekte entdecken",
    "projects.label": "Ausgewählte Arbeiten", "projects.title": "Projekte, die mit mir wachsen.", "projects.intro": "Eigene Anwendungen, Experimente und langfristige Ideen – transparent dokumentiert vom ersten Konzept bis zur nächsten Version.",
    "skills.label": "Kenntnisse", "skills.title": "Solide Grundlagen. Klarer Lernfokus.", "skills.intro": "Keine künstlichen Prozentwerte: Ich zeige, womit ich arbeite, was ich vertiefe und wohin ich mich entwickle.",
    "skills.used": "Regelmäßig eingesetzt", "skills.deepening": "Derzeit in Vertiefung", "skills.practical": "Praktische Kenntnisse", "skills.exploring": "Im Aufbau", "skills.webDescription": "Responsive Oberflächen, semantische Strukturen und interaktive Funktionen für moderne Webprojekte.",
    "about.label": "Persönlich", "about.title": "Technik verstehen. Probleme lösen. Neues schaffen.", "about.agePrefix": "Ich bin", "about.ageSuffix": "Jahre alt, technik- und handwerksbegeistert – und überzeugt davon, dass strukturiertes Arbeiten und Kreativität sehr gut zusammenpassen.",
    "about.story": "Gaming, Technik und frühere berufliche Erfahrungen haben mich schließlich zur Programmierung geführt. Besonders reizen mich die Abwechslung und der Moment, in dem aus einem unübersichtlichen Problem eine klare, funktionierende Lösung wird.", "about.goal": "Mein Ziel ist es, dauerhaft in der IT Fuß zu fassen und mich besonders in Full-Stack Development und Python-Automatisierung weiterzuentwickeln.",
    "about.structured": "Strukturiert", "about.ambitious": "Ehrgeizig", "about.precise": "Ordentlich", "about.sports": "Sport", "about.hiking": "Wandern", "about.imagePlaceholder": "Neues Bild folgt",
    "certificates.label": "Weiterbildung", "certificates.title": "Lernen, anwenden, weiterdenken.", "certificates.intro": "Zertifikate sind für mich kein Endpunkt, sondern dokumentieren Grundlagen, auf denen ich in eigenen Projekten weiter aufbaue.", "certificates.view": "Ansehen", "certificates.credential": "Zertifikat", "certificates.back": "Zurück zur Seite", "certificates.previous": "Vorheriges", "certificates.next": "Nächstes", "certificates.protection": "Ansichtsmodus · Rechtsklick und Ziehen deaktiviert",
    "contact.label": "Kontakt", "contact.title": "Lass uns in Verbindung bleiben.", "contact.copy": "Aktuell konzentriere ich mich auf eigene Projekte und fachliche Weiterentwicklung. Für Austausch, Feedback und interessante Kontakte bin ich jederzeit offen.", "contact.soon": "folgt",
    "footer.made": "Entwickelt mit Neugier in Augsburg.", "footer.top": "Nach oben ↑", "project.details": "Details ansehen", "project.progress": "In Entwicklung", "project.rebuild": "In Überarbeitung"
  },
  en: {
    "navigation.open": "Open menu", "navigation.projects": "Projects", "navigation.skills": "Skills", "navigation.about": "About", "navigation.contact": "Contact",
    "hero.eyebrow": "Building in Augsburg · open to remote", "hero.lineOne": "Full-stack development", "hero.lineTwo": "with a personal signature.",
    "hero.intro": "I'm Florian Dumler. I build modern web applications and dive deep into Python automation – structured, curious and driven by the joy of finding good solutions.", "hero.projectsCta": "Explore projects",
    "projects.label": "Selected work", "projects.title": "Projects that grow with me.", "projects.intro": "Applications, experiments and long-term ideas – documented transparently from first concept to the next iteration.",
    "skills.label": "Skills", "skills.title": "Solid foundations. A clear learning path.", "skills.intro": "No artificial percentages: I show what I use, what I am deepening and where I am heading.",
    "skills.used": "Used regularly", "skills.deepening": "Currently deepening", "skills.practical": "Practical knowledge", "skills.exploring": "Building foundations", "skills.webDescription": "Responsive interfaces, semantic structures and interactive features for modern web projects.",
    "about.label": "Personal", "about.title": "Understand technology. Solve problems. Build new things.", "about.agePrefix": "I'm", "about.ageSuffix": "years old, passionate about technology and craftsmanship – and convinced that structured work and creativity belong together.",
    "about.story": "Gaming, technology and previous professional experiences eventually led me to programming. What excites me most is the variety and the moment when a complex problem turns into a clear, working solution.", "about.goal": "My goal is to establish myself in IT and continue growing, particularly in full-stack development and Python automation.",
    "about.structured": "Structured", "about.ambitious": "Ambitious", "about.precise": "Precise", "about.sports": "Sports", "about.hiking": "Hiking", "about.imagePlaceholder": "New image coming soon",
    "certificates.label": "Continued learning", "certificates.title": "Learn, apply, keep thinking.", "certificates.intro": "Certificates are not the finish line for me. They document foundations that I continue to build on through practical projects.", "certificates.view": "View", "certificates.credential": "Certificate", "certificates.back": "Back to page", "certificates.previous": "Previous", "certificates.next": "Next", "certificates.protection": "Viewer mode · Right-click and dragging disabled",
    "contact.label": "Contact", "contact.title": "Let's stay connected.", "contact.copy": "I am currently focused on personal projects and professional growth. I am always open to exchange, feedback and interesting connections.", "contact.soon": "soon",
    "footer.made": "Built with curiosity in Augsburg.", "footer.top": "Back to top ↑", "project.details": "View details", "project.progress": "In development", "project.rebuild": "Being rebuilt"
  }
};

let currentLanguage = localStorage.getItem("portfolio-language") || "de";

function calculateAge() {
  const today = new Date();
  const birthday = new Date(1987, 11, 20);
  let age = today.getFullYear() - birthday.getFullYear();
  const birthdayThisYear = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (today < birthdayThisYear) age -= 1;
  document.querySelector("#age").textContent = age;
}

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  grid.innerHTML = portfolioProjects.map(project => {
    const copy = project[currentLanguage];
    const status = translations[currentLanguage][project.statusKey];
    return `<a class="project-card reveal" href="project.html?id=${project.id}" aria-label="${copy.title}: ${translations[currentLanguage]["project.details"]}">
      <div class="project-meta"><span>${project.number} · ${project.category}</span><span class="project-status">${status}</span></div>
      <h3>${copy.title}</h3>
      <p>${copy.summary}</p>
      <ul class="project-tags">${project.technologies.map(technology => `<li>${technology}</li>`).join("")}</ul>
      <span class="project-arrow" aria-hidden="true">↗</span>
    </a>`;
  }).join("");
  observeReveals();
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  const toggle = document.querySelector(".language-toggle");
  toggle.textContent = language === "de" ? "EN" : "DE";
  toggle.setAttribute("aria-label", language === "de" ? "Switch to English" : "Auf Deutsch wechseln");
  localStorage.setItem("portfolio-language", language);
  renderProjects();
}

function observeReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach(item => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal:not(.visible)").forEach(item => observer.observe(item));
}

const themeToggle = document.querySelector(".theme-toggle");
const preferredTheme = localStorage.getItem("portfolio-theme") || "dark";
document.documentElement.dataset.theme = preferredTheme;

function updateThemeLabel() {
  const light = document.documentElement.dataset.theme === "light";
  themeToggle.setAttribute("aria-label", light ? "Dunkles Farbschema aktivieren" : "Helles Farbschema aktivieren");
}

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
  updateThemeLabel();
});

document.querySelector(".language-toggle").addEventListener("click", () => applyLanguage(currentLanguage === "de" ? "en" : "de"));

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  navigation.classList.toggle("open", !open);
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
}));

const certificates = [
  { id: "responsive", title: "Responsive Web Design", image: "certificates/ResponsiveWebDesign.png", date: "August 2024" },
  { id: "javascript", title: "JavaScript Algorithms and Data Structures", image: "certificates/JavaScript.png", date: "September 2024" }
];
const certificateViewer = document.querySelector("#certificate-viewer");
const certificateImage = document.querySelector("#certificate-image");
let activeCertificateIndex = 0;

function showCertificate(index) {
  activeCertificateIndex = (index + certificates.length) % certificates.length;
  const certificate = certificates[activeCertificateIndex];
  document.querySelector("#certificate-dialog-title").textContent = certificate.title;
  document.querySelector("#certificate-position").textContent = `0${activeCertificateIndex + 1} / 0${certificates.length}`;
  certificateImage.src = certificate.image;
  certificateImage.alt = `${certificate.title} – Florian Dumler, ${certificate.date}`;
}

document.querySelectorAll("[data-certificate]").forEach(button => {
  button.addEventListener("click", () => {
    const index = certificates.findIndex(certificate => certificate.id === button.dataset.certificate);
    showCertificate(index);
    certificateViewer.showModal();
  });
});
document.querySelectorAll("[data-certificate-close]").forEach(button => button.addEventListener("click", () => certificateViewer.close()));
document.querySelector("#certificate-previous").addEventListener("click", () => showCertificate(activeCertificateIndex - 1));
document.querySelector("#certificate-next").addEventListener("click", () => showCertificate(activeCertificateIndex + 1));
certificateViewer.addEventListener("click", event => { if (event.target === certificateViewer) certificateViewer.close(); });
certificateViewer.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") showCertificate(activeCertificateIndex - 1);
  if (event.key === "ArrowRight") showCertificate(activeCertificateIndex + 1);
});
certificateViewer.addEventListener("contextmenu", event => event.preventDefault());
certificateViewer.addEventListener("dragstart", event => event.preventDefault());

calculateAge();
document.querySelector("#year").textContent = new Date().getFullYear();
updateThemeLabel();
applyLanguage(currentLanguage);
observeReveals();
