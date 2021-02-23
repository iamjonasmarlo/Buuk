# Buuk - Die online Bücherei

## Seiten

- Dashboard
- ~~Bücher~~
    - ~~Buchdetails~~
    - ~~Buch hinzufügen~~
- Autoren
    - Autordetails
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





#### Java Script Fortschritt
- Startseite (Index)
- Dashboard
- Bücher
    - Bücherliste
    - Buchdetails
- Autoren
    - Autorenliste
    - Autordetails
- Standorte
    - Standortliste
        - Emil-Figge-Straße 44
        - Sonnenstraße
        - ~ax-Ophüls-Platz 
    - Standortdetails

- Persönliche
    - Mein Profil
    - Reservierungen
        - Reservierungsliste
        - Reservierungsdetails   
        - Reservieren
    - Ausleihen
        - Ausleihenliste
        - Ausleihendetails / Strafendetails
    - Strafen
        - Strafenliste
        - ~usleihendetails / Strafendetails
    - Login
    - Logout




## Klassen

- Buch
    - id (int)
    - name (string)
    - isbn (int)
    - fachrichtung (string)
    - jahr (int)
    - inhaltsangabe (string)
    - autor (array -> foreignkey)
    - verfügbarkeitstatus (boolean) ???
    - anzahl (int ) ???
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