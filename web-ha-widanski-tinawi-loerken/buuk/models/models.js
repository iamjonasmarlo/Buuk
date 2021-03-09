const ausleihen_model = require("../models/ausleihen.js");
const autoren_model = require("../models/autoren.js");
const buecher_model = require("../models/buecher.js");
const reservierungen_model = require("../models/reservierungen.js");
const standorte_model = require("../models/standorte.js");

function generate_values() {
    /* Autoren */

    var autor1 = new autoren_model.autor("Jordan Peterson", "Psychologie", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur");
    var autor2 = new autoren_model.autor("Alan Watts", "Philosophie", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur");
    var autor3 = new autoren_model.autor("Barry A. Burd", "Informatik", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur");

    autoren_model.autoren.push(autor1);
    autoren_model.autoren.push(autor2);
    autoren_model.autoren.push(autor3);

    /* Buecher */

    var buch1 = new buecher_model.buch("MaFi 1", 484845741, "PI", 2005, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur quasi autem quidem quae aperiam quam, assumenda quo exercitationem odio ullam. Aliquid laudantium corporis quae aut.", autor1, true);
    var buch2 = new buecher_model.buch("Mafi 2", 484845741, "PI", 2005, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur quasi autem quidem quae aperiam quam, assumenda quo exercitationem odio ullam. Aliquid laudantium corporis quae aut.", autor2, true);
    var buch3 = new buecher_model.buch("MaFi 3", 484845741, "PI", 2005, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo minus ducimus blanditiis pariatur quasi autem quidem quae aperiam quam, assumenda quo exercitationem odio ullam. Aliquid laudantium corporis quae aut.", autor3, true);

    buecher_model.buecher.push(buch1);
    buecher_model.buecher.push(buch2);
    buecher_model.buecher.push(buch3);

    /* Ausleihen */

    var ausleihe1 = new ausleihen_model.ausleihe(buch1, new Date("2020-01-05T00:00:00"), new Date("2020-01-12T00:00:00"), false);
    var ausleihe2 = new ausleihen_model.ausleihe(buch2, new Date("2020-01-10T00:00:00"), new Date("2020-01-17T00:00:00"), true);

    ausleihen_model.ausleihen.push(ausleihe1);
    ausleihen_model.ausleihen.push(ausleihe2);

    /* Standorte */

    var standort1 = new standorte_model.standort("Emil-Figge-Straße", "Emil-Figge-Str. 44", 44227, "Dortmund", "+49 (0231) 9112-4917", "+49 (0231) 9112-4922", [
        ["Montag", "08:00 Uhr - 18:00 Uhr"],
        ["Dienstag", "08:00 Uhr - 18:00 Uhr"],
        ["Mittwoch", "08:00 Uhr - 18:00 Uhr"],
        ["Donnerstag", "08:00 Uhr - 18:00 Uhr"],
        ["Freitag", "08:00 Uhr - 18:00 Uhr"]
    ], ["ca. 95.000 Bände Buchbestand", "WLAN-Zugang (über VPN)", "21 Einzelarbeitsplätze im 2. OG", "68 Einzelarbeitsplätze im 3. OG", "1 barrierefreier Arbeitsplatz (gleichzeitig Eltern-Kind-Arbeitsplatz) mit PC für Blinde und Sehbehinderte im 2. OG", "4 Gruppenarbeitsräume mit jeweils 7-8 Plätzen", "1 Schulungsraum", "6 Recherche-PCs im 2. OG)", "2 Recherche-PCs im 3. OG)", "32 Internet-PCs"]);
    var standort2 = new standorte_model.standort("Sonnenstraße", "Sonnenstr. 96", 44139, "Dortmund", "+49 (0231) 9112-9135", "+49 (0231) 9112-9666", [
        ["Montag", "08:00 Uhr - 18:00 Uhr"],
        ["Dienstag", "08:00 Uhr - 18:00 Uhr"],
        ["Mittwoch", "08:00 Uhr - 18:00 Uhr"],
        ["Donnerstag", "08:00 Uhr - 18:00 Uhr"],
        ["Freitag", "08:00 Uhr - 18:00 Uhr"]
    ], ["ca. 30.500 Bände Buchbestand", "WLAN-Zugang (über VPN)", "12 Einzelarbeitsplätze", "in der Bibliothek: 1 Gruppenarbeitsbereich mit 9 Tischen à 5-6 Plätzen", "im Flur vor der Bibliothek: 1 Gruppenarbeitsbereich mit 5 Tischen à 4 Plätzen", "4 Recherche-PCs", "18 Internet-PCs"]);
    var standort3 = new standorte_model.standort("Max-Ophüls-Platz", "Max-Ophüls-Platz 2", 44139, "Dortmund", "+49 (0231) 9112-9441", "+49 (0231) 9112-9443", [
        ["Montag", "08:00 Uhr - 18:00 Uhr"],
        ["Dienstag", "08:00 Uhr - 18:00 Uhr"],
        ["Mittwoch", "08:00 Uhr - 18:00 Uhr"],
        ["Donnerstag", "08:00 Uhr - 18:00 Uhr"],
        ["Freitag", "08:00 Uhr - 18:00 Uhr"]
    ], ["ca. 24.500 Bände Buchbestand", "WLAN-Zugang (über VPN)", "10 Einzelarbeitsplätze", "3 Recherche-PCs", "3 Internet-PCs", "8 Kurzzeitschließfächer"]);

    standort1.addBuch(buch1);
    standort2.addBuch(buch2);
    standort3.addBuch(buch3);

    standorte_model.standorte.push(standort1);
    standorte_model.standorte.push(standort2);
    standorte_model.standorte.push(standort3);
}

/* Export */

module.exports = {
    generate_values
};
