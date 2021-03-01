const db = require("../database/db.js");

/* Get methoden*/

function get_autoren() {
    return db.autoren;
}

function get_autoren_detail(id) {
    let autor = db.autoren[id];
    return autor;
}

function add_autor(name, fachrichtung, beschreibung) {
    let autor = new db.autor(name, fachrichtung, beschreibung);
    db.autoren.push(autor);

}

/* Exports */

module.exports = {
    get_autoren,
    get_autoren_detail,
    add_autor
};