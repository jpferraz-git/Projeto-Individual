var express = require("express");
var router = express.Router();

var supinoController = require("../controllers/supinoController");

router.get("/primeiraKPI", function (req, res) {
  quizController.primeiraKPI(req, res);
});

router.get("/segundaKPI", function (req, res) {
  quizController.segundaKPI(req, res);
});

router.get("/terceiraKPI", function (req, res) {
  quizController.terceiraKPI(req, res);
});

router.post("/cadastrar", function (req, res) {
  supinoController.cadastrar(req, res);
})

module.exports = router;