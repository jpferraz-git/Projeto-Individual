var express = require("express");
var router = express.Router();

var relatosController = require("../controllers/relatosController");

router.get("/mostrarRelatos", function (req, res) {
    relatosController.mostrarRelatos(req, res);
  });
  
router.post("/cadastrar/:id_usuario", function (req, res) {
    relatosController.cadastrar(req, res);
})
  
module.exports = router;