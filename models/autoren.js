/* Autoren */

function autor(name, fachrichtung, beschreibung) {
    this.name = name;
    this.fachrichtung = fachrichtung;
    this.beschreibung = beschreibung;
}

var autoren = [];

/* Export */

module.exports = {
    autor,
    autoren
};
