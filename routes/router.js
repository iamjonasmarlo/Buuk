const express = require("express");
const router = express.Router();

const standort_controller = require("../controller/standort-controller.js");

/* Dashboard / Startseite */

router.get("/", function(req, res, next) {
    res.status(200);
    res.render("index");
});

/* Profil */

router.get("/profil", function(req, res, next) {
    res.status(200);
    res.render("profil");
});

router.get("/login", function(req, res, next) {
    res.status(200);
    res.render("login");
});

router.get("/logout", function(req, res, next) {
    res.status(200);
    res.render("login");
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

/* Ausleihen */

router.get("/ausleihen-detail", function(req, res, next) {
    res.status(200);
    res.render("ausleihen-detail");
});

router.get("/ausleihen", function(req, res, next) {
    res.status(200);
    res.render("ausleihen");
});

/* Autor */

router.get("/autor-add", function(req, res, next) {
    res.status(200);
    res.render("autor-add");
});

router.get("/autor-detail", function(req, res, next) {
    res.status(200);
    res.render("autor-detail");
});

router.get("/autoren", function(req, res, next) {
    res.status(200);
    res.render("autoren");
});

/* Buecher */

router.get("/buch-add", function(req, res, next) {
    res.status(200);
    res.render("buch-add");
});

router.get("/buecher-detail", function(req, res, next) {
    res.status(200);
    res.render("buecher-detail");
});

router.get("/buecher", function(req, res, next) {
    res.status(200);
    res.render("buecher");
});

/* Standorte */

router.get("/standorte", function(req, res, next) {
    res.status(200);
    res.render("standorte", {standorte: standort_controller.get_standorte()});
});

router.post("/standorte", function(req, res, next) {
    standort_controller.add_standort(req.body.name, req.body.address, req.body.zip, req.body.city, req.body.phone, req.body.fax, [["Montag", req.body.monday], ["Dienstag", req.body.tuesday], ["Mittwoch", req.body.wednesday], ["Donnerstag", req.body.thursday], ["Freitag", req.body.friday]], req.body.feature);
    res.status(200);
    res.render("standorte", {standorte: standort_controller.get_standorte()});
});

router.get("/standorte/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("standorte-detail", {standort: standort_controller.get_standorte_detail(id)});
});

router.get("/standorte/neu", function(req, res, next) {
    res.status(200);
    res.render("standorte-add");
});

/* Reservierungen */

router.get("/reservierungen-add", function(req, res, next) {
    res.status(200);
    res.render("reservierungen-add");
});

router.get("/reservierungen-detail", function(req, res, next) {
    res.status(200);
    res.render("reservierungen-detail");
});

router.get("/reservierungen", function(req, res, next) {
    res.status(200);
    res.render("reservierungen");
});

/* 404 */

router.use(function(req, res, next) {
    res.status(404);
    res.render("404");
});

module.exports = router;