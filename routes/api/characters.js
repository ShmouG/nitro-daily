const router = require('express').Router();
const charController = require('../../controller/charController');

//  "/api/characters"
router.route('/characters')
  .get(charController.findAll)
  .post(charController.create);

// "/api/character/:id"
router
  .route('/:id')
  .get(charController.findById)
  .put(charController.update)
  .delete(charController.remove);


module.exports = router;
