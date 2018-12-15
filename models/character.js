// const mongoose = require('mongoose');

// const { Schema } = mongoose.Schema;

// const characterSchema = new Schema({
//   name: { type: String, required: true },
//   id: { type: Number, required: true },
// });

// const Character = mongoose.model('Character', characterSchema);

// module.exports = Character;
//= ===================================================
const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const charSchema = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
});

const Character = mongoose.model('Character', charSchema);

module.exports = Character;
