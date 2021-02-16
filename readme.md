# Buuk - Die online Bücherei

## Seiten

### Seiten

- Dashboard
- Bücher
    - Buchdetails
- Autoren
    - Autordetails
- ~~Standorte~~
    - Emil-Figge-Straße 44 (Detail)
    - Sonnenstraße (Detail)
    - Max-Ophüls-Platz (Detail)

### Profil

- Mein Profil
- Meine Reservierung
    - Reservierungdetails
- Meine Ausleihen
    - Ausleihdetails
- Meine Strafen
    - Strafdetails

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