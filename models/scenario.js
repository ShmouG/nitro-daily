const mongoose = require('mongoose');

const ScenarioSchema = new mongoose.Schema({
  location: { type: String },
  context: { type: String, required: true },
  option1: { type: String },
  option2: { type: String },
  option3: { type: String },

});

const Scenario = mongoose.model('Scenario', ScenarioSchema);

module.exports = Scenario;
