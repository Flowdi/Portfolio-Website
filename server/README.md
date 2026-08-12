# Server-Härtung

Diese Dateien dokumentieren die produktive Nginx- und SSH-Konfiguration der Portfolio-Website. Sie werden nicht über das Webroot ausgeliefert.

## Enthaltene Schutzmaßnahmen

- HTTPS mit TLS 1.2 und TLS 1.3
- HSTS für Domain und Subdomains
- Schutz vor Einbettung und Clickjacking durch CSP `frame-ancestors 'none'` und `X-Frame-Options: DENY`
- restriktive Content Security Policy für Skripte, Styles, Bilder und Browser-Schnittstellen
- ausschließlich `GET`- und `HEAD`-Anfragen
- Sperre für versteckte und typische Sicherungsdateien
- keine PHP-Ausführung
- keine Versionsnummer im Nginx-Header
- SSH ausschließlich mit Schlüssel, ohne Passwortanmeldung

## Wartungshinweis

Die CSP enthält Hashes für den strukturierten JSON-LD-Block in `index.html` und den eingebetteten Styleblock in `project.html`. Wenn einer dieser Blöcke verändert wird, muss der zugehörige Hash vor der nächsten Veröffentlichung aktualisiert und die Seite auf CSP-Verstöße getestet werden.
