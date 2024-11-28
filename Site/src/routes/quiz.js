var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
});

router.get("/primeiraKPI", function (req, res) {
    quizController.primeiraKPI(req, res);
});

router.get("/segundaKPI", function (req, res) {
    quizController.segundaKPI(req, res);
});

router.get("/terceiraKPI", function (req, res) {
    quizController.terceiraKPI(req, res);
});



module.exports = router;
