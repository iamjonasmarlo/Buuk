/* Standorte */

function standort(name, adresse, plz, ort, telefon, fax, oeffnungszeiten, ausstattung) {
    this.name = name;
    this.adresse = adresse;
    this.plz = plz;
    this.ort = ort;
    this.telefon = telefon;
    this.fax = fax;
    this.oeffnungszeiten = oeffnungszeiten;
    this.ausstattung = ausstattung;
    this.buecher = [];
    this.addBuch = function(buch) {
        this.buecher.push(buch);
    }
}

var standorte = [];

/* Export */

module.exports = {
    standort,
    standorte
};