/* Ausleihen */

function ausleihe(buch, datumVon, datumBis, status) {
    this.buch = buch;
    this.datumVon = datumVon;
    this.datumBis = datumBis;
    this.status = status;
    this.token = "ausleihe-" + Math.random().toString(36).substring(7);
    buch.status = false;
}

var ausleihen = [];

/* Export */

module.exports = {
    ausleihe,
    ausleihen
};