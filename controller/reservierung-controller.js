const db = require("../database/db.js");

/* Get Reservierungen */

function get_reservierungen() {
    return db.reservierungen;
}

/* Add Reservierung */

function add_reservierung(index, datumVon, datumBis) {
    let buch = db.buecher[index],
        reservierung = new db.reservierung(buch, datumVon, datumBis);
    db.reservierungen.push(reservierung);
}

/* Get Reservierung Details */

function get_reservierung_detail(id) {
    let reservierung = db.reservierungen[id];
    return reservierung;
}

/* Remove Reservierung */

function remove_reservierung(id) {
    db.reservierungen.splice(id, 1)
}

/* Exports */

module.exports = {
    get_reservierungen,
    add_reservierung,
    get_reservierung_detail,
    remove_reservierung
};