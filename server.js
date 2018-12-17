const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();


// Serve up static assets (usually on heroku)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(routes);
// app.use(express.static('public'));


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/textadventure';
mongoose.connect(MONGODB_URI || { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
