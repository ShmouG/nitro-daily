const router = require('express').Router();
const charController = require('../../controller/charController');
const scenarioController = require('../../controller/scenarioController');

router.route('/')
  .get(scenarioController.findAll);

router.route('/characters')
  .get(charController.findAll)
  .post(charController.create);

// // "/api/character/:id"
// router
//   .route('/:id')
//   .get(charController.findById)
//   .put(charController.update);
// // .delete(charController.remove);
// '/api/scenario'

module.exports = router;
