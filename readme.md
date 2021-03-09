# Buuk - Die online Bücherei

## Seiten

- Dashboard
- ~~Bücher~~
    - ~~Buchdetails~~
    - ~~Buch hinzufügen~~
- Autoren
    - ~~Autordetails~~
    - ~~Autor hinzufügen~~
- ~~Standorte~~
    - ~~Emil-Figge-Straße 44 (Detail)~~
    - ~~Sonnenstraße (Detail)~~
    - ~~Max-Ophüls-Platz (Detail)~~
    - ~~Standort hinzufügen~~
- ~~Persönliche~~
    - ~~Mein Profil~~
    - ~~Reservierungen~~
        - ~~Reservierungsdetails~~
        - ~~Reservierungen hinzufügen~~
    - ~~Ausleihen~~
        - ~~Ausleihendetails~~
    - ~~Login~~
    - ~~Logout~~

## Klassen

- Buch
    - name (string)
    - isbn (int)
    - fachrichtung (string)
    - jahr (int)
    - beschreibung (string)
    - autor (array -> foreignkey)
    - status (boolean)
- Autor
    - name (string)
    - fachrichtung(String)
    - Beschreibung(String)
- Kunde
    - name (string)
    - Straße (string)
    - Stadt (string)
    - Postleitzahl (int)
    - typ (string)
    - Fachrichtung(string)
- Standort
    - name (string)
    - adresse (string)
    - plz (int)
    - ort (string)
    - telefon (int)
    - fax (int)
    - öffnungszeiten (array -> string)
    - ausstattung (array -> string)
    - bücher (array -> foreignkey)
- Reservierungen
    - buch (foreignkey)
    - datumVon (date)
    - datumBis (date)
    - token (string)
- Ausleihen
    - buch (foreignkey)
    - datumVon (date)
    - datumBis (date)
    - status (int)

## Aufgaben
- Allgemein
    - Menü aktiv schalten
- Dashboard
    - Automatisierte Ausgabe
- Standorte
    - ~~Automatisierte Aufgabe der Übersicht~~
    - ~~Automatisierte Ausgabe der Detailseite~~
    - ~~Anlegen eines Standortes~~
    - ~~Bücher auf der Detaisleite ausgeben~~
    - ~~Ausgabe der Autoren in der Bücherübersicht~~
- Reservierungen
    - ~~Automatisierte Ausgabe der Übersicht~~
    - ~~Automatisierte Ausgabe der Detailseite~~
    - ~~Anlegen einer Reservierung~~
    - ~~Löschen einer Reservierung~~
    - ~~Genieriung des Tokens~~
- Ausleihen
    - Automatisierte Aufgabe der Übersicht
    - Automatisierte Ausgabe der Detailseite
- Bücher
    - ~~Automatisierte Aufgabe der Übersicht~~
    - ~~Automatisierte Ausgabe der Detailseite~~
    - ~~Anlegen eines Buches~~
    - ~~Ausgabe des Autors in der Übersicht~~
    - Ausgabe des Standortes auf der Detailseite
- Autoren
    - ~~Automatisierte Aufgabe der Übersicht~~
    - ~~Automatisierte Ausgabe der Detailseite~~
    - ~~Anlegen eines Autors~~

## Bugs & Korrekturen

- Ausleihe Details
    - Alle h2 entfernen

- Reservierung Details
    - Alle h2 entfernen

- Buchstatus momentan noch statisch
    - Wenn ausgeliehen status ausgeliehen
    - Wenn nicht ausgeliehen verfügbar

- Seite Buchdetails fehlerhaft
    - Status des Buches fehlt
    - Standort fehlt

- Seite Autoren
    - Links sind zu Socialmedia sind nicht hinterlegt
    - Sollte vielleicht beim Anlegen des Autos eingegeben werden können

- Reservierungen
    - Datum von kann später als Datum bis sein
    - Wenn ein Buch für eine Zeit reserviert ist, kann es nicht nochmal in der gleichen Zeit ausgeliehen werden
    - Wenn eine reservierung abgegeben wurde sollte man zu /user/reservierungen/detail weitergeleitet werden
    - Daten der Reservierungen dürfen maximal 4 Wochen auseinander liegen (30 Tage)
                     