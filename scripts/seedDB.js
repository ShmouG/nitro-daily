const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost/textadventure',
);

const scenarioSeed = [
  {
    scenario: 'Get out of Bed',
    option1: 'Wake up and spring out of bed',
    option2: 'Roll over and go back to sleep',
    option3: 'Wish for death and try to find the will to face another day',
    location: 'Start your day: [Location: Bedroom]',
  },
];

db.Scenario
  .remove({})
  .then(() => db.Scenario.collection.insertMany(scenarioSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
