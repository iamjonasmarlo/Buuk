const db = require("../database/db.js");

/* Get Standorte */

function get_standorte() {
    return db.standorte;
}

function get_standorte_detail(id) {
    let standort = db.standorte[id];
    return standort;
}

function add_standort(name, adresse, plz, ort, telefon, fax, oeffnungszeiten, ausstattung) {
    let standort = new db.standort(name, adresse, plz, ort, telefon, fax, oeffnungszeiten, ausstattung);
    db.standorte.push(standort);
}

/* Exports */

module.exports = {
    get_standorte,
    get_standorte_detail,
    add_standort
};