const ausleihen_model = require("../models/ausleihen.js");
const autoren_model = require("../models/autoren.js");
const buecher_model = require("../models/buecher.js");
const reservierungen_model = require("../models/reservierungen.js");
const standorte_model = require("../models/standorte.js");

/* Ausleihen */

function get_ausleihen() {
    return ausleihen_model.ausleihen;
}

function get_ausleihe_details(id) {
    let ausleihe = ausleihen_model.ausleihen[id];
    return ausleihe;
}

/* Autoren */

function get_autoren() {
    return autoren_model.autoren;
}

function get_autoren_detail(id) {
    let autor = autoren_model.autoren[id];
    return autor;
}

function add_autor(name, fachrichtung, beschreibung) {
    let autor = new autoren_model.autor(name, fachrichtung, beschreibung);
    autoren_model.autoren.push(autor);
}

/* Buecher */

function get_buecher() {
    return buecher_model.buecher;
}

function get_buecher_detail(id) {
    let buch = buecher_model.buecher[id];
    return buch;
}

function add_buch(name, authorId, isbn, cat, year, desc, location) {
    let author = get_autoren_detail(authorId),
        buch = new buecher_model.buch(name, isbn, cat, year, desc, author, true);
    buecher_model.buecher.push(buch);
    add_buch_standort(buch, location);
}

function add_buch_standort(buch, location) {
    standorte_model.standorte.forEach(function(standort, index) {
        if(index == location) {
            standort.addBuch(buch);
        }
    });
}

/* Reservierungen */

function get_reservierungen() {
    return reservierungen_model.reservierungen;
}

function add_reservierung(index, datumVon, datumBis) {
    let buch = buecher_model.buecher[index],
        reservierung = new reservierungen_model.reservierung(buch, new Date(datumVon), new Date(datumBis));
        reservierungen_model.reservierungen.push(reservierung);
}

function get_reservierung_detail(id) {
    let reservierung = reservierungen_model.reservierungen[id];
    return reservierung;
}

function remove_reservierung(id) {
    reservierungen_model.reservierungen.splice(id, 1)
}

/* Standorte */

function get_standorte() {
    return standorte_model.standorte;
}

function get_standorte_detail(id) {
    let standort = standorte_model.standorte[id];
    return standort;
}

function add_standort(name, adresse, plz, ort, telefon, fax, oeffnungszeiten, ausstattung) {
    let standort = new standorte_model.standort(name, adresse, plz, ort, telefon, fax, oeffnungszeiten, ausstattung);
    standorte_model.standorte.push(standort);
}

/* Exports */

module.exports = {
    get_ausleihen,
    get_ausleihe_details,
    get_autoren,
    get_autoren_detail,
    add_autor,
    get_buecher,
    get_buecher_detail,
    add_buch,
    get_reservierungen,
    add_reservierung,
    get_reservierung_detail,
    remove_reservierung,
    get_standorte,
    get_standorte_detail,
    add_standort
};