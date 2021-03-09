/* Reservierung */

function reservierung(buch, datumVon, datumBis) {
    this.buch = buch;
    this.datumVon = datumVon;
    this.datumBis = datumBis;
    this.token = "reservierung-" + Math.random().toString(36).substring(7);
}

var reservierungen = [];

/* Export */

module.exports = {
    reservierung,
    reservierungen
};