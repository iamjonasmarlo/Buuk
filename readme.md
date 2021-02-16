# Buuk - Die online Bücherei

## Seiten


#### HTML Fortschritt
- Startseite (Index)
- Dashboard
- Bücher
    - Bücherliste
    - Buchdetails
- Autoren
    - Autorenliste
    - Autordetails
- Standorte
    - ~~Standortliste~~
        - ~~Emil-Figge-Straße 44~~
        - ~~Sonnenstraße~~
        - ~~Max-Ophüls-Platz~~
    - Standortdetails

- ~~Persönliche~~
    - ~~Mein Profil~~
    - ~~Reservierungen~~
        - ~~Reservierungsliste~~
        - ~~Reservierungsdetails~~    
        - ~~Reservieren~~
    - ~~Ausleihen~~
        - ~~Ausleihenliste~~
        - ~~Ausleihendetails / Strafendetails~~
    - ~~Strafen~~
        - ~~Strafenliste~~
        - ~~Ausleihendetails / Strafendetails~~
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
- Autor
    - id (int)
    - name (string)
- Kunde
    - id (int)
    - name (string)
    - Straße (string)
    - Stadt (string)
    - Postleitzahl (int(5))
    - typ (string)
    - Fachrichtung(string)
- Standort
    - id (int)
    - name (string)
    - adresse (string)
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
- Strafe
    - id (int)
    - kunde (foreignkey)
    - buch (foreignkey)
    - höhe (int)
    - überziehungsdauer (int)
    - beglichen (boolean)

## Aufgaben & Bugs

- Automatisierte Ausgabe der Standorte