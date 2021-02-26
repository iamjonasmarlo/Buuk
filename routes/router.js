const express = require("express");
const router = express.Router();

const standort_controller = require("../controller/standort-controller.js");
const buch_controller = require("../controller/buch-controller.js");

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

/* Ausleihen */

router.get("/ausleihen/detail", function(req, res, next) {
    res.status(200);
    res.render("ausleihen-detail");
});

router.get("/ausleihen", function(req, res, next) {
    res.status(200);
    res.render("ausleihen");
});

/* Autor */

router.get("/autor/neu", function(req, res, next) {
    res.status(200);
    res.render("autoren-add");
});

router.get("/autor/detail", function(req, res, next) {
    res.status(200);
    res.render("autoren-detail");
});

router.get("/autoren", function(req, res, next) {
    res.status(200);
    res.render("autoren");
});

/* Buecher */

router.get("/buecher/neu", function(req, res, next) {
    res.status(200);
    res.render("buecher-add", {standorte:standort_controller.get_standorte()});
});

router.get("/buecher/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("buecher-detail", {buch:buch_controller.get_buecher_detail(id),id:id });
});

router.get("/buecher", function(req, res, next) {
    res.status(200);
    res.render("buecher", {buecher:buch_controller.get_buecher(),standorte:standort_controller.get_standorte()});
});

router.post("/buecher", function(req, res, next) {
    buch_controller.add_buch(req.body.name, req.body.author, req.body.isbn, req.body.cat, req.body.year, req.body.desc, req.body.location)
    res.status(200);
    res.render("buecher", {buecher:buch_controller.get_buecher(),standorte:standort_controller.get_standorte(),action:"added"});
});

/* Standorte */

router.get("/standorte", function(req, res, next) {
    res.status(200);
    res.render("standorte", {standorte:standort_controller.get_standorte() });
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
    res.render("standorte", {standorte:standort_controller.get_standorte(),action:"added"});
});

router.get("/standorte/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("standorte-detail", {standort:standort_controller.get_standorte_detail(id),buecher:buch_controller.get_buecher()});
});

router.get("/standorte/neu", function(req, res, next) {
    res.status(200);
    res.render("standorte-add");
});

/* Reservierungen */

router.get("/reservierungen/neu", function(req, res, next) {
    res.status(200);
    res.render("reservierungen-add");
});

router.get("/reservierungen/detail", function(req, res, next) {
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