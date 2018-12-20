const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost/textadventure',
);

const scenarioSeed = [
  {
    "id": 0,
    "context": "Example",
    "option1": "#",
    "option2": "#",
    "option3": "#",
    "location": "Fantasy Island"
  },
  {
    "id": 1,
    "context": "Get out of Bed",
    "option1": "Wake up and spring out of bed",
    "option2": "Roll over and go back to sleep",
    "option3": "Wish for death and try to find the will to face another day",
    "location": "Bedroom"
  },
  {
    "id": 2,
    "context": "Turns out you can't get out of bed since you are tied up, but you've got one free hand.",
    "option1": "Stop messing around with this app and call for help",
    "option2": "Scratch your itch",
    "option3": "Take a selfie",
    "location": "Bedroom"
  },
  {
    "id": 2,
    "context": "You call for help! ",
    "option1": "You call your mom and she gets you free",
    "option2": "",
    "option3": "",
    "location": "Bedroom"
  },
  {
    "id": 3,
    "context": "You scratch your itch, and it feels good. You are still bound however ",
    "option1": "Attempt to free yourself",
    "option2": "Call for help!",
    "option3": "Cry and admit defeat",
    "location": "Bedroom"
  },
  {
    "id": 4,
    "context": "You look great in your selfie, but your friends might think this is just an early morning S&M shoot ",
    "option1": "Attempt to free yourself",
    "option2": "Call for help!",
    "option3": "Cry and admit defeat",
    "location": "Bedroom"
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
