const db = require("../database/db.js");

/* Get Standorte */

function get_buecher() {
    return db.buecher;
}

function get_buecher_detail(id) {
    let buch = db.buecher[id];
    return buch;
}

function add_buch(name, author, isbn, cat, year, desc, location) {
    let buch = new db.buch(name, isbn, cat, year, desc, author, true);
    db.buecher.push(buch);

    add_buch_standort(buch, location);
}

function add_buch_standort(buch, location) {
    db.standorte.forEach(function(standort, index) {
        if(index == location) {
            standort.addBuch(buch);
        }
    });
}

/* Exports */

module.exports = {
    get_buecher,
    get_buecher_detail,
    add_buch
};