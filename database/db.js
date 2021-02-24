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

function standort(id, name, adresse, plz, ort, telefon, fax, oeffnungszeiten) {
    this.id = id;
    this.name = name;
    this.adresse = adresse;
    this.plz = plz;
    this.ort = ort;
    this.telefon = telefon;
    this.fax = fax;
    this.oeffnungszeiten = oeffnungszeiten;
    this.buecher = [];
    this.addBuch = function(buch) {
        this.buecher.push(buch);
    }
}

var standort1 = new standort(1, "Emil-Figge-Straße", "Emil-Figge-Str. 44", 44227, "Dortmund", "+49 (0) 231 7554000", "+49 (0) 231 7554003", [["Montag", "08:00 Uhr", "18:00 Uhr"], ["Dienstag", "08:00 Uhr", "18:00 Uhr"], ["Mittwoch", "08:00 Uhr", "18:00 Uhr"], ["Donnerstag", "08:00 Uhr", "18:00 Uhr"], ["Freitag", "08:00 Uhr", "18:00 Uhr"]]);
var standort2 = new standort(2, "Sonnenstraße", "Sonnenstr. 96", 44139, "Dortmund", "+49 (0) 231 7554000", "+49 (0) 231 7554003", [["Montag", "08:00 Uhr", "18:00 Uhr"], ["Dienstag", "08:00 Uhr", "18:00 Uhr"], ["Mittwoch", "08:00 Uhr", "18:00 Uhr"], ["Donnerstag", "08:00 Uhr", "18:00 Uhr"], ["Freitag", "08:00 Uhr", "18:00 Uhr"]]);
var standort3 = new standort(3, "Max-Ophüls-Platz", "Max-Ophüls-Platz 2", 44139, "Dortmund", "+49 (0) 231 7554000", "+49 (0) 231 7554003", [["Montag", "08:00 Uhr", "18:00 Uhr"], ["Dienstag", "08:00 Uhr", "18:00 Uhr"], ["Mittwoch", "08:00 Uhr", "18:00 Uhr"], ["Donnerstag", "08:00 Uhr", "18:00 Uhr"], ["Freitag", "08:00 Uhr", "18:00 Uhr"]]);

var standorte = [standort1, standort2, standort3];

/* Export */

module.exports = {
    standort,
    standorte
};