/* Buecher */

function buch(name, isbn, fachrichtung, jahr, beschreibung, autor, status) {
    this.name = name;
    this.isbn = isbn;
    this.fachrichtung = fachrichtung;
    this.jahr = jahr;
    this.beschreibung = beschreibung;
    this.autor = autor;
    this.status = status;
}

var buecher = [];

/* Export */

module.exports = {
    buch,
    buecher
};