const db = require("../database/db.js");

/* Get Standorte */

function get_buecher() {
    return db.buecher;
}

function get_buecher_detail(id) {
    let buch = db.buecher[id];
    return buch;
}

function add_buch(name, isbn, fachrichtung, jahr, beschreibung, autor, status) {
    let buch = new db.buch(name, isbn, fachrichtung, jahr, beschreibung, autor, status);
    db.buecher.push(buch);
}

/* Exports */

module.exports = {
    get_buecher,
    get_buecher_detail,
    add_buch
};