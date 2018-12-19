const db = require('../models');

module.exports = {
  findById(req, res) {
    db.Scenario
      .findById(req.params.num)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
