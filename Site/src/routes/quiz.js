var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
});

router.post("/primeiraKPI", function (req, res) {
    quizController.primeiraKPI(req, res);
});

router.post("/segundaKPI", function (req, res) {
    quizController.segundaKPI(req, res);
});
router.post("/terceiraKPI", function (req, res) {
    quizController.terceiraKPI(req, res);
});


module.exports = router;
