const router = require('express').Router();
const scenarioController = require('../../controller/scenarioController');

router.route('/:num')
  .get(scenarioController.findById);

module.exports = router;
