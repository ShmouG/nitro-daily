const db = require('../models');

module.exports = {
  findAll(req, res) {
    db.Scenario
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById(req, res) {
    console.log(req.params.id)
    db.Scenario
      .find({id: parseInt(req.params.id) })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
};
