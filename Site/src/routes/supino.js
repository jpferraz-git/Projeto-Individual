var express = require("express");
var router = express.Router();

var supinoController = require("../controllers/supinoController");

router.get("/primeiraKPI", function (req, res) {
  supinoController.primeiraKPI(req, res);
});

router.get("/segundaKPI", function (req, res) {
  supinoController.segundaKPI(req, res);
});

router.get("/terceiraKPI", function (req, res) {
  supinoController.terceiraKPI(req, res);
});

router.get("/gerarGrafico", function (req, res) {
  supinoController.gerarGrafico(req, res);
});


router.post("/cadastrar", function (req, res) {
  supinoController.cadastrar(req, res);
})

module.exports = router;