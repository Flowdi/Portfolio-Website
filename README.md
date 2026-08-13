# Florian Dumler — Portfolio Website

Quellcode der persönlichen Portfolio-Website von Florian Dumler.

**Live:** [www.floriandumler.de](https://www.floriandumler.de)

**Status:** produktiv veröffentlicht

## Über das Projekt

Die Website präsentiert Florian Dumler als Full-Stack Developer aus Augsburg mit Fokus auf Webentwicklung, Python und Automatisierung. Sie verbindet eine seriöse, persönliche Darstellung mit einer eigenständigen technisch-futuristischen Gestaltung.

Das Portfolio wurde als bewusst schlanke statische Website umgesetzt. Es benötigt kein Framework und lässt sich dadurch schnell ausliefern, einfach warten und kontrolliert auf einem eigenen Server betreiben.

## Funktionsumfang

- responsive Darstellung für Desktop, Tablet und Smartphone
- Dark Mode als Standard und optionaler Light Mode
- vollständiger Sprachwechsel zwischen Deutsch und Englisch
- barrierearme Navigation und Bedienung per Tastatur
- zentral gepflegte Projektinhalte in `projects.js`
- dynamisch erzeugte Projektkarten und Projektdetailseiten
- ausführliche Case Studies für ausgewählte Projekte
- automatisch berechnetes Alter
- geschützter Zertifikatsviewer innerhalb der Website
- bestehender JavaScript-Plattformer unter `game/`
- individuelle Favicons und Social-Preview-Grafik
- grundlegende technische SEO-Daten, Sitemap und strukturierte Personendaten

## Enthaltene Projekte

- Food-App — in Entwicklung
- JavaScript-Plattformer — in Überarbeitung
- Portfolio Website — abgeschlossen
- Creative Portfolio Experiment — abgeschlossen
- Fashion & Cooking Blog Website — geplant

## Technologie

- HTML5
- CSS3
- Vanilla JavaScript
- Nginx
- Ubuntu Server bei Hetzner
- Let's Encrypt für HTTPS
- Git und GitHub

Es sind keine Installation, kein Build-Prozess und keine externen Laufzeitabhängigkeiten erforderlich.

## Projektstruktur

```text
index.html       Startseite
project.html     Vorlage für Projektdetailseiten
projects.js      zentrale Projekt- und Case-Study-Inhalte
script.js        Startseitenlogik, Sprache, Theme und Zertifikate
project.js       Logik der Projektdetailseiten
styles.css       gemeinsames Designsystem
images/          optimierte Bilder, Favicons und Social Preview
certificates/    ausgewählte Zertifikatsnachweise
game/            JavaScript-Plattformer
server/          dokumentierte Nginx- und SSH-Härtung
```

## Sicherheit

Die produktive Website und der Server sind unter anderem durch folgende Maßnahmen abgesichert:

- HTTPS mit TLS 1.2 und TLS 1.3 sowie HSTS
- Schutz vor Einbettung und Clickjacking
- restriktive Content Security Policy
- Schutz vor MIME-Sniffing und unnötiger Referrer-Weitergabe
- deaktivierte, nicht benötigte Browser-Schnittstellen
- ausschließlich erlaubte HTTP-Methoden für die statische Website
- Sperre für versteckte und typische Sicherungsdateien
- keine PHP-Ausführung
- Firewall, Fail2ban und automatische Sicherheitsupdates
- SSH-Zugriff ausschließlich per Schlüssel
- automatische Erneuerung des TLS-Zertifikats

Die produktiven Konfigurationsvorlagen und Wartungshinweise befinden sich unter `server/`. Änderungen an eingebetteten JSON-LD- oder CSS-Blöcken können eine Aktualisierung der dort dokumentierten CSP-Hashes erforderlich machen.

## Lokale Vorschau

Die Website sollte über einen lokalen Webserver geöffnet werden, damit Pfade und browserseitige Funktionen dem Produktivbetrieb entsprechen. Hierfür kann beispielsweise die Vorschaufunktion eines Editors oder ein beliebiger statischer Entwicklungsserver verwendet werden.

## Veröffentlichung

Die produktive Website wird unter `www.floriandumler.de` betrieben. Änderungen werden erst nach Prüfung gezielt veröffentlicht.
