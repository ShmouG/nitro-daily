const mongoose = require('mongoose');

const ScenarioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String },
  id: { type: Number, required: true },
});

const Scenario = mongoose.model('Scenario', ScenarioSchema);

module.exports = Scenario;
