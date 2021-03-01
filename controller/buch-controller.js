const db = require("../database/db.js");

/* Get Standorte */

function get_buecher() {
    return db.buecher;
}

/* Get Buch Details */

function get_buecher_detail(id) {
    let buch = db.buecher[id];
    return buch;
}

/* Add Buch */

function add_buch(name, authorId, isbn, cat, year, desc, location) {
    let author = get_author(authorId),
        buch = new db.buch(name, isbn, cat, year, desc, author, true);
    db.buecher.push(buch);

    add_buch_standort(buch, location);
}

/* Add Buch to Standort */

function add_buch_standort(buch, location) {
    db.standorte.forEach(function(standort, index) {
        if(index == location) {
            standort.addBuch(buch);
        }
    });
}

/* Get Autor */

function get_author(id) {
    let author = db.autoren[id];
    return author;
}

/* Exports */

module.exports = {
    get_buecher,
    get_buecher_detail,
    add_buch
};