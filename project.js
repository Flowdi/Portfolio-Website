const labels = {
  de: { back: "Alle Projekte", challenge: "Ziel & Herausforderung", status: "Aktueller Stand", progress: "Dieses Projekt befindet sich in aktiver Entwicklung. Weitere Details, Screenshots und technische Entscheidungen werden mit dem nächsten Projektstand ergänzt.", rebuild: "Dieses Projekt wird aktuell grundlegend überarbeitet und anschließend wieder als spielbare Demo veröffentlicht.", missing: "Projekt nicht gefunden." },
  en: { back: "All projects", challenge: "Goal & challenge", status: "Current status", progress: "This project is under active development. More details, screenshots and technical decisions will be added with the next iteration.", rebuild: "This project is currently being rebuilt and will return as a playable demo afterwards.", missing: "Project not found." }
};
let language = localStorage.getItem("portfolio-language") || "de";
const projectId = new URLSearchParams(window.location.search).get("id");
const project = portfolioProjects.find(item => item.id === projectId);

function render() {
  document.documentElement.lang = language;
  document.querySelector(".language-toggle").textContent = language === "de" ? "EN" : "DE";
  document.querySelector("#back-label").textContent = labels[language].back;
  if (!project) {
    document.querySelector("#not-found").hidden = false;
    document.querySelector("#not-found h1").textContent = labels[language].missing;
    return;
  }
  const copy = project[language];
  document.title = `${copy.title} — Florian Dumler`;
  document.querySelector("#project-content").hidden = false;
  document.querySelector("#project-category").textContent = project.category;
  document.querySelector("#project-title").textContent = copy.title;
  document.querySelector("#project-summary").textContent = copy.summary;
  document.querySelector("#project-challenge").textContent = copy.challenge;
  document.querySelector("#project-technologies").innerHTML = project.technologies.map(item => `<li>${item}</li>`).join("");
  document.querySelector("#challenge-title").textContent = labels[language].challenge;
  document.querySelector("#status-title").textContent = labels[language].status;
  document.querySelector("#project-status").textContent = labels[language][project.statusKey === "project.rebuild" ? "rebuild" : "progress"];
}

const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
document.documentElement.dataset.theme = savedTheme;
document.querySelector(".theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
});
document.querySelector(".language-toggle").addEventListener("click", () => {
  language = language === "de" ? "en" : "de";
  localStorage.setItem("portfolio-language", language);
  render();
});
render();
