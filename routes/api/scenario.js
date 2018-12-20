const router = require('express').Router();
const scenarioController = require('../../controller/scenarioController');

// '/api/scenario'
router.route('/')
  .get(scenarioController.findAll);

// '/api/scenario/:id'
router
  .route('/:id')
  .get(scenarioController.findById);

module.exports = router;
