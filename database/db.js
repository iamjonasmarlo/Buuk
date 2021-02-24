/* Buch */

function buch(id, name, isbn, fachrichtung, jahr, beschreibung, autor, status) {
    this.id = id;
    this.name = name;
    this.isbn = isbn;
    this.fachrichtung = fachrichtung;
    this.jahr = jahr;
    this.beschreibung = beschreibung;
    this.autor = autor;
    this.status = status;
    this.setStatus = function (neuerStatus) {
        this.status = neuerStatus;
    }
}

/* Standort */

function standort(name, adresse, plz, ort, telefon, fax, oeffnungszeiten, ausstattung) {
    this.name = name;
    this.adresse = adresse;
    this.plz = plz;
    this.ort = ort;
    this.telefon = telefon;
    this.fax = fax;
    this.oeffnungszeiten = oeffnungszeiten;
    this.ausstattung = ausstattung;
    this.buecher = [];
    this.addBuch = function(buch) {
        this.buecher.push(buch);
    }
}

var standort1 = new standort("Emil-Figge-Straße", "Emil-Figge-Str. 44", 44227, "Dortmund", "+49 (0231) 9112-4917", "+49 (0231) 9112-4922", [["Montag", "08:00 Uhr - 18:00 Uhr"], ["Dienstag", "08:00 Uhr - 18:00 Uhr"], ["Mittwoch", "08:00 Uhr - 18:00 Uhr"], ["Donnerstag", "08:00 Uhr - 18:00 Uhr"], ["Freitag", "08:00 Uhr - 18:00 Uhr"]], ["ca. 95.000 Bände Buchbestand", "WLAN-Zugang (über VPN)", "21 Einzelarbeitsplätze im 2. OG", "68 Einzelarbeitsplätze im 3. OG", "1 barrierefreier Arbeitsplatz (gleichzeitig Eltern-Kind-Arbeitsplatz) mit PC für Blinde und Sehbehinderte im 2. OG", "4 Gruppenarbeitsräume mit jeweils 7-8 Plätzen", "1 Schulungsraum", "6 Recherche-PCs im 2. OG)", "2 Recherche-PCs im 3. OG)", "32 Internet-PCs"]);
var standort2 = new standort("Sonnenstraße", "Sonnenstr. 96", 44139, "Dortmund", "+49 (0231) 9112-9135", "+49 (0231) 9112-9666", [["Montag", "08:00 Uhr - 18:00 Uhr"], ["Dienstag", "08:00 Uhr - 18:00 Uhr"], ["Mittwoch", "08:00 Uhr - 18:00 Uhr"], ["Donnerstag", "08:00 Uhr - 18:00 Uhr"], ["Freitag", "08:00 Uhr - 18:00 Uhr"]], ["ca. 30.500 Bände Buchbestand", "WLAN-Zugang (über VPN)", "12 Einzelarbeitsplätze", "in der Bibliothek: 1 Gruppenarbeitsbereich mit 9 Tischen à 5-6 Plätzen", "im Flur vor der Bibliothek: 1 Gruppenarbeitsbereich mit 5 Tischen à 4 Plätzen", "4 Recherche-PCs", "18 Internet-PCs"]);
var standort3 = new standort("Max-Ophüls-Platz", "Max-Ophüls-Platz 2", 44139, "Dortmund", "+49 (0231) 9112-9441", "+49 (0231) 9112-9443", [["Montag", "08:00 Uhr - 18:00 Uhr"], ["Dienstag", "08:00 Uhr - 18:00 Uhr"], ["Mittwoch", "08:00 Uhr - 18:00 Uhr"], ["Donnerstag", "08:00 Uhr - 18:00 Uhr"], ["Freitag", "08:00 Uhr - 18:00 Uhr"]], ["ca. 24.500 Bände Buchbestand", "WLAN-Zugang (über VPN)", "10 Einzelarbeitsplätze", "3 Recherche-PCs", "3 Internet-PCs", "8 Kurzzeitschließfächer"]);

var standorte = [standort1, standort2, standort3];

/* Export */

module.exports = {
    standort,
    standorte
};