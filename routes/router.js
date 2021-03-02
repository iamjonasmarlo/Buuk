const express = require("express");
const router = express.Router();
const controller = require("../controller/controller.js");

/* Dashboard / Startseite */

router.get("/", function(req, res, next) {
    res.status(200);
    res.render("index", {reservierungen: controller.get_reservierungen(), autoren: controller.get_autoren(), ausleihen: controller.get_ausleihen(), standorte: controller.get_standorte()});
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
    res.render("autoren", {autoren: controller.get_autoren()});
});

router.post("/autoren", function(req, res, next) {
    controller.add_autor(req.body.name, req.body.fachrichtung, req.body.beschreibung);
    res.status(200);
    res.render("autoren", { autoren: controller.get_autoren(), action: "added" });
});

router.get("/autor/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("autor-detail", { autor: controller.get_autoren_detail(id), buecher: controller.get_buecher() });
});

router.get("/autor/neu", function(req, res, next) {
    res.status(200);
    res.render("autoren-add");
});

/* Buecher */

router.get("/buecher/neu", function(req, res, next) {
    res.status(200);
    res.render("buecher-add", { standorte: controller.get_standorte(), autoren: controller.get_autoren() });
});

router.get("/buecher/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("buecher-detail", { buch: controller.get_buecher_detail(id), id: id });
});

router.post("/buecher/detail", function(req, res, next) {
    let id = req.query.id;
    controller.add_reservierung(req.body.buch, req.body.datumVon, req.body.datumBis);
    res.status(200);
    res.render("buecher-detail", { buch: controller.get_buecher_detail(id), id: id, action: "added"});
});

router.get("/buecher", function(req, res, next) {
    res.status(200);
    res.render("buecher", { buecher: controller.get_buecher(), standorte: controller.get_standorte(), autoren: controller.get_autoren() });
});

router.post("/buecher", function(req, res, next) {
    controller.add_buch(req.body.name, req.body.author, req.body.isbn, req.body.cat, req.body.year, req.body.desc, req.body.location)
    res.status(200);
    res.render("buecher", { buecher: controller.get_buecher(), standorte: controller.get_standorte(), autoren: controller.get_autoren(), action: "added" });
});

/* Standorte */

router.get("/standorte", function(req, res, next) {
    res.status(200);
    res.render("standorte", { standorte: controller.get_standorte() });
});

router.post("/standorte", function(req, res, next) {
    controller.add_standort(req.body.name, req.body.address, req.body.zip, req.body.city, req.body.phone, req.body.fax, [
        ["Montag", req.body.monday],
        ["Dienstag", req.body.tuesday],
        ["Mittwoch", req.body.wednesday],
        ["Donnerstag", req.body.thursday],
        ["Freitag", req.body.friday]
    ], req.body.feature);
    res.status(200);
    res.render("standorte", { standorte: controller.get_standorte(), action: "added" });
});

router.get("/standorte/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("standorte-detail", { standort: controller.get_standorte_detail(id), buecher: controller.get_buecher(), autoren: controller.get_autoren() });
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
    res.render("reservierungen-add", { buch: controller.get_buecher_detail(buch), standorte: controller.get_standorte(), id: buch });
});

router.get("/user/reservierungen", function(req, res, next) {
    res.status(200);
    res.render("reservierungen", {reservierungen: controller.get_reservierungen(), standorte: controller.get_standorte(), autoren: controller.get_autoren()});
});

router.post("/user/reservierungen", function(req, res, next) {
    let id = req.body.id;
    controller.remove_reservierung(id);
    res.status(200);
    res.render("reservierungen", {reservierungen: controller.get_reservierungen(), standorte: controller.get_standorte(), autoren: controller.get_autoren(), action: "removed"});
});

router.get("/user/reservierungen/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("reservierungen-detail", {reservierung: controller.get_reservierung_detail(id), standorte: controller.get_standorte(), id: id});
});

/* Ausleihen */

router.get("/user/ausleihen/detail", function(req, res, next) {
    let id = req.query.id;
    res.status(200);
    res.render("ausleihen-detail", {ausleihe: controller.get_ausleihe_details(id), standorte: controller.get_standorte(), id: id});
});

router.get("/user/ausleihen", function(req, res, next) {
    res.status(200);
    res.render("ausleihen", {ausleihen: controller.get_ausleihen(), standorte: controller.get_standorte()});
});

/* 404 */

router.use(function(req, res, next) {
    res.status(404);
    res.render("404");
});

/* Exports */

module.exports = router;