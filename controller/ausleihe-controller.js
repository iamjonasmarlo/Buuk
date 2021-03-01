const db = require("../database/db.js");

/* Get Ausleihen */

function get_ausleihen() {
    return db.ausleihen;
}

/* Get Ausleihe Details */

function get_ausleihe_details(id) {
    let ausleihe = db.ausleihen[id];
    return ausleihe;
}

/* Exports */

module.exports = {
    get_ausleihen,
    get_ausleihe_details
};