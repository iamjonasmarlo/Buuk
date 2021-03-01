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
- Ausleihen
    - buch (foreignkey)
    - datumVon (date)
    - datumBis (date)
    - status (int)

## Aufgaben & Bugs
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
    - Editieren einer Reservierung
    - Genieriung des Tokens
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