var express = require("express");
var router = express.Router();

var dashSupinoController = require("../controllers/dashSupinoController");

router.get("/kpiTop1", function (req, res) {
  dashSupinoController.kpiTop1(req, res);
});

router.get("/kpiCliquesTop1", function (req, res) {
  dashSupinoController.kpiCliquesTop1(req, res);
});

router.get("/kpiMediaCliquesTop1", function (req, res) {
  dashSupinoController.kpiMediaCliquesTop1(req, res);
});

router.get("/kpiTop2", function (req, res) {
    dashSupinoController.kpiTop2(req, res);
});
  
router.get("/kpiCliquesTop2", function (req, res) {
    dashSupinoController.kpiCliquesTop2(req, res);
});
  
router.get("/kpiMediaCliquesTop2", function (req, res) {
    dashSupinoController.kpiMediaCliquesTop2(req, res);
});
  
router.get("/kpiTop3", function (req, res) {
    dashSupinoController.kpiTop3(req, res);
});
  
router.get("/kpiCliquesTop3", function (req, res) {
    dashSupinoController.kpiCliquesTop3(req, res);
  });
  
router.get("/kpiMediaCliquesTop3", function (req, res) {
  dashSupinoController.kpiMediaCliquesTop3(req, res);
  });

  router.get("/plotarLeaderboard", function (req, res) {
  dashSupinoController.plotarLeaderboard(req, res);
  });

module.exports = router;