const mongoose = require('mongoose');

const CharSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
});

const Character = mongoose.model('Character', CharSchema);

module.exports = Character;
