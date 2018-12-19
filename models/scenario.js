const mongoose = require('mongoose');

const ScenarioSchema = new mongoose.Schema({
  context: String,
  option1: String,
  option2: String,
  option3: String,
  location: String,

});

const Scenario = mongoose.model('Scenario', ScenarioSchema);

module.exports = Scenario;
