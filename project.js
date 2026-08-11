const labels = {
  de: { back: "Alle Projekte", challenge: "Ziel & Herausforderung", status: "Aktueller Stand", period: "Zeitraum", role: "Rolle", type: "Typ", context: "Kontext", problem: "Problem", approach: "Ansatz", decisions: "Entscheidungen", result: "Ergebnis", learning: "Erkenntnis", next: "Nächste Schritte", introductionTitle: "Vom Lernprojekt zur professionellen Plattform.", problemTitle: "Was sich verändern musste.", approachTitle: "Ein bewusst schlankes Fundament.", resultTitle: "Eine Basis, die weiter wachsen kann.", learningTitle: "Struktur kommt vor Effekten.", nextTitle: "Noch nicht fertig – bewusst.", progress: "Dieses Projekt befindet sich in aktiver Entwicklung. Weitere Details, Screenshots und technische Entscheidungen werden mit dem nächsten Projektstand ergänzt.", rebuild: "Dieses Projekt wird aktuell grundlegend überarbeitet und anschließend wieder als spielbare Demo veröffentlicht.", complete: "Dieses Projekt ist in seiner aktuellen Version abgeschlossen. Künftige Verbesserungen werden als neue, klar dokumentierte Versionen ergänzt.", planned: "Dieses Projekt befindet sich in der Konzept- und Planungsphase. Funktionsumfang und Gestaltung werden vor Beginn der Umsetzung gemeinsam festgelegt.", missing: "Projekt nicht gefunden." },
  en: { back: "All projects", challenge: "Goal & challenge", status: "Current status", period: "Period", role: "Role", type: "Type", context: "Context", problem: "Problem", approach: "Approach", decisions: "Decisions", result: "Result", learning: "Learning", next: "Next steps", introductionTitle: "From learning project to professional platform.", problemTitle: "What needed to change.", approachTitle: "A deliberately lean foundation.", resultTitle: "A foundation designed to grow.", learningTitle: "Structure comes before effects.", nextTitle: "Intentionally not finished yet.", progress: "This project is under active development. More details, screenshots and technical decisions will be added with the next iteration.", rebuild: "This project is currently being rebuilt and will return as a playable demo afterwards.", complete: "This project is complete in its current version. Future improvements will be added as new, clearly documented iterations.", planned: "This project is currently in the concept and planning stage. Its scope and visual direction will be defined together before implementation begins.", missing: "Project not found." }
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
  document.querySelector("#project-links").innerHTML = (project.links || []).map(link => `<a class="button button-secondary" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">↗</span></a>`).join("");
  document.querySelector("#challenge-title").textContent = labels[language].challenge;
  document.querySelector("#status-title").textContent = labels[language].status;
  const statusLabelKey = project.statusKey.replace("project.", "");
  document.querySelector("#project-status").textContent = labels[language][statusLabelKey] || labels[language].progress;
  document.querySelector("#period-label").textContent = labels[language].period;
  document.querySelector("#role-label").textContent = labels[language].role;
  document.querySelector("#type-label").textContent = labels[language].type;
  document.querySelector("#project-period").textContent = copy.period || "–";
  document.querySelector("#project-role").textContent = copy.role || "–";
  document.querySelector("#project-type").textContent = project.category;

  const caseStudy = document.querySelector("#case-study");
  if (copy.introduction) {
    caseStudy.hidden = false;
    const textFields = { "project-introduction": copy.introduction, "project-problem": copy.problem, "project-approach": copy.approach, "project-result": copy.result, "project-learnings": copy.learnings };
    Object.entries(textFields).forEach(([id, value]) => { document.querySelector(`#${id}`).textContent = value; });
    const labelFields = { "context-label": "context", "problem-label": "problem", "approach-label": "approach", "decisions-label": "decisions", "result-label": "result", "learning-label": "learning", "next-label": "next" };
    Object.entries(labelFields).forEach(([id, key]) => { document.querySelector(`#${id}`).textContent = labels[language][key]; });
    const titleFields = { "introduction-title": "introduction", "problem-title": "problem", "approach-title": "approach", "result-title": "result", "learning-title": "learning", "next-title": "next" };
    Object.entries(titleFields).forEach(([id, key]) => {
      const fallbackKey = key === "introduction" ? "introductionTitle" : `${key}Title`;
      document.querySelector(`#${id}`).textContent = copy.sectionTitles?.[key] || labels[language][fallbackKey];
    });
    const figure = document.querySelector("#project-figure");
    const image = document.querySelector("#project-image");
    if (copy.image) {
      figure.hidden = false;
      image.src = copy.image;
      image.alt = copy.imageAlt;
      document.querySelector("#project-image-caption").textContent = copy.imageCaption;
    } else {
      figure.hidden = true;
      image.removeAttribute("src");
      image.alt = "";
      document.querySelector("#project-image-caption").textContent = "";
    }
    document.querySelector("#project-highlights").innerHTML = copy.highlights.map(item => `<li>${item}</li>`).join("");
    document.querySelector("#project-decisions").innerHTML = copy.decisions.map((item, index) => `<article class="decision-card"><span>0${index + 1}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");
    document.querySelector("#project-next").innerHTML = copy.nextSteps.map(item => `<li>${item}</li>`).join("");
  } else {
    caseStudy.hidden = true;
  }
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
