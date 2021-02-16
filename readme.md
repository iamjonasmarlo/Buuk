# Buuk - Die online Bücherei

## Seiten

- Dashboard
- Bücher
    - Buchdetails
    - Buch hinzufügen
- Autoren
    - Autordetails
    - Autor hinzufügen
- ~~Standorte~~
    - ~~Emil-Figge-Straße 44 (Detail)~~
    - ~~Sonnenstraße (Detail)~~
    - ~~Max-Ophüls-Platz (Detail)~~
    - ~~Standort hinzufügen~~
- ~~Persönliche~~
    - ~~Mein Profil~~
    - ~~Reservierungen~~
        - ~~Reservierungsdetails~~
    - ~~Ausleihen~~
        - ~~Ausleihendetails~~
    - ~~Login~~
    - ~~Logout~~

## Klassen

- Buch
    - id (int)
    - name (string)
    - isbn (int)
    - fachrichtung (string)
    - jahr (int)
    - inhaltsangabe (string)
    - autor (array -> foreignkey)
- Autor
    - id (int)
    - name (string)
- Kunde
    - id (int)
    - name (string)
    - Straße (string)
    - Stadt (string)
    - Postleitzahl (int)
    - typ (string)
    - Fachrichtung(string)
- Standort
    - id (int)
    - name (string)
    - adresse (string)
    - plz (int)
    - ort (string)
    - telefon (int)
    - fax (int)
    - öffnungszeiten (array -> string/int)
    - bücher (array -> foreignkey)
- Reservierungen
    - id (int)
    - buch (foreignkey)
    - kunde (foreignkey)
    - datumVon (date)
    - datumBis (date)
- Ausleihen
    - id (int)
    - buch (foreignkey)
    - kunde (foreignkey)
    - datumVon (date)
    - datumBis (date)
    - status (int)

## Aufgaben & Bugs

- Standorte
    - Automatisierte Aufgabe der Übersicht
    - Automatisierte Ausgabe der Detailseite
    - Anlegen eines Standortes
- Reservierungen
    - Automatisierte Aufgabe der Übersicht
    - Automatisierte Ausgabe der Detailseite
    - Anlegen einer Reservierung
    - Löschen einer Reservierung
    - Editieren einer Reservierung
- Ausleihen
    - Automatisierte Aufgabe der Übersicht
    - Automatisierte Ausgabe der Detailseite
    - Anlegen einer Reservierung
- Bücher
    - Automatisierte Aufgabe der Übersicht
    - Automatisierte Ausgabe der Detailseite
    - Anlegen eines Buches
- Autoren
    - Automatisierte Aufgabe der Übersicht
    - Automatisierte Ausgabe der Detailseite
    - Anlegen eines Autors