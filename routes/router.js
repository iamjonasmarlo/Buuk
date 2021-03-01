const express = require("express");
const router = express.Router();
const autor_controller = require("../controller/autor-controller.js");
const standort_controller = require("../controller/standort-controller.js");
const buch_controller = require("../controller/buch-controller.js");
const reservierung_controller = require("../controller/reservierung-controller.js");

/* Dashboard / Startseite */

router.get("/", function(req, res, next) {
    res.status(200);
    res.render("index");
});

/* Login & Logout */

router.get("/login", function(req, res, next) {
    res.status(200);
    res.render("login");
});

router.get("/logout", function(req, res, next) {
    res.status(200);
    res.render("logout");
});

/* Impressum / Datenschutz */

router.get("/impressum", function(req, res, next) {
    res.status(200);
    res.render("impressum");
});

router.get("/datenschutz", function(req, res, next) {
    res.status(200);
    res.render("datenschutz");
});

/* Autor */

router.get("/autoren", function(req, res, next) {
    res.status(200);
    res.render("autoren", { autoren: autor_controller.get_autoren() });
});

router.post("/autoren", function(req, res, next) {
    autor_controller.add_autor(req.body.name, req.body.fachrichtung, req.body.beschreibung);
    res.status(200);
    res.render("autoren", { autoren: autor_controller.get_autoren(), action: "added" });
});

router.get("/autor/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("autor-detail", { autor: autor_controller.get_autoren_detail(id), buecher: buch_controller.get_buecher() });
});

router.get("/autor/neu", function(req, res, next) {
    res.status(200);
    res.render("autoren-add");
});

/* Buecher */

router.get("/buecher/neu", function(req, res, next) {
    res.status(200);
    res.render("buecher-add", { standorte: standort_controller.get_standorte(), autoren: autor_controller.get_autoren() });
});

router.get("/buecher/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("buecher-detail", { buch: buch_controller.get_buecher_detail(id), id: id });
});

router.post("/buecher/detail", function(req, res, next) {
    let id = req.query.id;
    reservierung_controller.add_reservierung(req.body.buch, req.body.datumVon, req.body.datumBis);
    res.status(200);
    res.render("buecher-detail", { buch: buch_controller.get_buecher_detail(id), id: id, action: "added"});
});

router.get("/buecher", function(req, res, next) {
    res.status(200);
    res.render("buecher", { buecher: buch_controller.get_buecher(), standorte: standort_controller.get_standorte(), autoren: autor_controller.get_autoren() });
});

router.post("/buecher", function(req, res, next) {
    buch_controller.add_buch(req.body.name, req.body.author, req.body.isbn, req.body.cat, req.body.year, req.body.desc, req.body.location)
    res.status(200);
    res.render("buecher", { buecher: buch_controller.get_buecher(), standorte: standort_controller.get_standorte(), autoren: autor_controller.get_autoren(), action: "added" });
});

/* Standorte */

router.get("/standorte", function(req, res, next) {
    res.status(200);
    res.render("standorte", { standorte: standort_controller.get_standorte() });
});

router.post("/standorte", function(req, res, next) {
    standort_controller.add_standort(req.body.name, req.body.address, req.body.zip, req.body.city, req.body.phone, req.body.fax, [
        ["Montag", req.body.monday],
        ["Dienstag", req.body.tuesday],
        ["Mittwoch", req.body.wednesday],
        ["Donnerstag", req.body.thursday],
        ["Freitag", req.body.friday]
    ], req.body.feature);
    res.status(200);
    res.render("standorte", { standorte: standort_controller.get_standorte(), action: "added" });
});

router.get("/standorte/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("standorte-detail", { standort: standort_controller.get_standorte_detail(id), buecher: buch_controller.get_buecher(), autoren: autor_controller.get_autoren() });
});

router.get("/standorte/neu", function(req, res, next) {
    res.status(200);
    res.render("standorte-add");
});

/* Profil */

router.get("/user/profil", function(req, res, next) {
    res.status(200);
    res.render("profil");
});

/* Reservierungen */

router.get("/reservierungen/neu", function(req, res, next) {
    let buch = req.query.id;
    res.status(200);
    res.render("reservierungen-add", { buch: buch_controller.get_buecher_detail(buch), standorte: standort_controller.get_standorte(), id: buch });
});

router.get("/user/reservierungen", function(req, res, next) {
    res.status(200);
    res.render("reservierungen", {reservierungen: reservierung_controller.get_reservierungen(), standorte: standort_controller.get_standorte(), autoren: autor_controller.get_autoren()});
});

router.post("/user/reservierungen", function(req, res, next) {
    let id = req.body.id;
    reservierung_controller.remove_reservierung(id);
    res.status(200);
    res.render("reservierungen", {reservierungen: reservierung_controller.get_reservierungen(), standorte: standort_controller.get_standorte(), autoren: autor_controller.get_autoren(), action: "removed"});
});

router.get("/user/reservierungen/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("reservierungen-detail", {reservierung: reservierung_controller.get_reservierung_detail(id), standorte: standort_controller.get_standorte(), id: id});
});

/* Ausleihen */

router.get("/user/ausleihen/detail", function(req, res, next) {
    res.status(200);
    res.render("ausleihen-detail");
});

router.get("/user/ausleihen", function(req, res, next) {
    res.status(200);
    res.render("ausleihen");
});

/* 404 */

router.use(function(req, res, next) {
    res.status(404);
    res.render("404");
});

module.exports = router;