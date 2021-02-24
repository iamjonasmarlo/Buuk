const express = require("express");
const router = express.Router();

const standort_controller = require("../controller/standort-controller.js");

standort_controller.add_standort(0, "test", "test", 58285, "gevelsberg", "01234567890", "01234567890", "öffnungszeiten");
console.log(standort_controller.get_standorte());

/*STARTSEITE*/
router.get("/", function(req, res, next) {
    res.status(200);
    res.render("index");
});

router.get("/index", function(req, res, next) {
    res.status(200);
    res.render("index");
});

/*DASHBOARD*/
router.get("/dashboard", function(req, res, next) {
    res.status(200);
    res.render("dashboard");
});

/*PROFIL*/
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

/*IMPRESSUM & DATENSCHUTZ*/
router.get("/impressum", function(req, res, next) {
    res.status(200);
    res.render("impressum");
});
router.get("/datenschutz", function(req, res, next) {
    res.status(200);
    res.render("datenschutz");
});

/*AUSLEIHEN*/

router.get("/ausleihen-detail", function(req, res, next) {
    res.status(200);
    res.render("ausleihen-detail");
});

router.get("/ausleihen", function(req, res, next) {
    res.status(200);
    res.render("ausleihen");
});

/*AUTOR*/

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

/*BUECHER*/

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

/*STANDORT*/

router.get("/standorte-add", function(req, res, next) {
    res.status(200);
    res.render("standorte-add");
});

router.get("/standorte/detail", function(req, res, next) {
    res.status(200);
    res.render("standorte-detail");
});
router.get("/standorte", function(req, res, next) {
    res.status(200);
    res.render("standorte", {standorte: standort_controller.get_standorte()});
});

/*RESERVIERUNG*/

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

router.use(function(req, res, next) {
    res.status(404);
    res.render("404");
});

module.exports = router;