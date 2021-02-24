const db = require("../database/db.js");

/* Get Standorte */

function get_standorte() {
    return db.standorte;
}

function add_standort(id, name, adresse, plz, ort, telefon, fax, oeffnungszeiten) {
    let standort = new db.standort(id, name, adresse, plz, ort, telefon, fax, oeffnungszeiten);
    db.standorte.push(standort);
}

/* Exports */

module.exports = {
    get_standorte,
    add_standort
};