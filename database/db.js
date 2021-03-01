/* Autor */

function autor(name, fachrichtung, beschreibung) {
    this.name = name;
    this.fachrichtung = fachrichtung;
    this.beschreibung = beschreibung;
}
var autor1 = new autor("Jordan Peterson", "Psychologie", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur");
var autor2 = new autor("Alan Watts", "Philosophie", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur");
var autor3 = new autor("Barry A. Burd", "Informatik", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur");
var autoren = [autor1, autor2, autor3];

/* Buch */

function buch(name, isbn, fachrichtung, jahr, beschreibung, autor, status) {
    this.name = name;
    this.isbn = isbn;
    this.fachrichtung = fachrichtung;
    this.jahr = jahr;
    this.beschreibung = beschreibung;
    this.autor = autor;
    this.status = status;
}
var buch1 = new buch("MaFi 1", 484845741, "PI", 2005, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur quasi autem quidem quae aperiam quam, assumenda quo exercitationem odio ullam. Aliquid laudantium corporis quae aut.", autor1, false);
var buch2 = new buch("Mafi 2", 484845741, "PI", 2005, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur quasi autem quidem quae aperiam quam, assumenda quo exercitationem odio ullam. Aliquid laudantium corporis quae aut.", autor2, true);
var buch3 = new buch("MaFi 3", 484845741, "PI", 2005, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur quasi autem quidem quae aperiam quam, assumenda quo exercitationem odio ullam. Aliquid laudantium corporis quae aut.", autor3, true);
var buecher = [buch1, buch2, buch3];

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

var standort1 = new standort("Emil-Figge-Straße", "Emil-Figge-Str. 44", 44227, "Dortmund", "+49 (0231) 9112-4917", "+49 (0231) 9112-4922", [
    ["Montag", "08:00 Uhr - 18:00 Uhr"],
    ["Dienstag", "08:00 Uhr - 18:00 Uhr"],
    ["Mittwoch", "08:00 Uhr - 18:00 Uhr"],
    ["Donnerstag", "08:00 Uhr - 18:00 Uhr"],
    ["Freitag", "08:00 Uhr - 18:00 Uhr"]
], ["ca. 95.000 Bände Buchbestand", "WLAN-Zugang (über VPN)", "21 Einzelarbeitsplätze im 2. OG", "68 Einzelarbeitsplätze im 3. OG", "1 barrierefreier Arbeitsplatz (gleichzeitig Eltern-Kind-Arbeitsplatz) mit PC für Blinde und Sehbehinderte im 2. OG", "4 Gruppenarbeitsräume mit jeweils 7-8 Plätzen", "1 Schulungsraum", "6 Recherche-PCs im 2. OG)", "2 Recherche-PCs im 3. OG)", "32 Internet-PCs"]);
var standort2 = new standort("Sonnenstraße", "Sonnenstr. 96", 44139, "Dortmund", "+49 (0231) 9112-9135", "+49 (0231) 9112-9666", [
    ["Montag", "08:00 Uhr - 18:00 Uhr"],
    ["Dienstag", "08:00 Uhr - 18:00 Uhr"],
    ["Mittwoch", "08:00 Uhr - 18:00 Uhr"],
    ["Donnerstag", "08:00 Uhr - 18:00 Uhr"],
    ["Freitag", "08:00 Uhr - 18:00 Uhr"]
], ["ca. 30.500 Bände Buchbestand", "WLAN-Zugang (über VPN)", "12 Einzelarbeitsplätze", "in der Bibliothek: 1 Gruppenarbeitsbereich mit 9 Tischen à 5-6 Plätzen", "im Flur vor der Bibliothek: 1 Gruppenarbeitsbereich mit 5 Tischen à 4 Plätzen", "4 Recherche-PCs", "18 Internet-PCs"]);
var standort3 = new standort("Max-Ophüls-Platz", "Max-Ophüls-Platz 2", 44139, "Dortmund", "+49 (0231) 9112-9441", "+49 (0231) 9112-9443", [
    ["Montag", "08:00 Uhr - 18:00 Uhr"],
    ["Dienstag", "08:00 Uhr - 18:00 Uhr"],
    ["Mittwoch", "08:00 Uhr - 18:00 Uhr"],
    ["Donnerstag", "08:00 Uhr - 18:00 Uhr"],
    ["Freitag", "08:00 Uhr - 18:00 Uhr"]
], ["ca. 24.500 Bände Buchbestand", "WLAN-Zugang (über VPN)", "10 Einzelarbeitsplätze", "3 Recherche-PCs", "3 Internet-PCs", "8 Kurzzeitschließfächer"]);

standort1.addBuch(buch1);
standort2.addBuch(buch2);
standort3.addBuch(buch3);

var standorte = [standort1, standort2, standort3];

/* Reservierung */

function reservierung(buch, datumVon, datumBis) {
    this.buch = buch;
    this.datumVon = datumVon;
    this.datumBis = datumBis;
    this.token = "reservierung-" + Math.random().toString(36).substring(7);
}

var reservierungen = [];

/* Export */

module.exports = {
    buch,
    buecher,
    autor,
    autoren,
    standort,
    standorte,
    reservierung,
    reservierungen
};