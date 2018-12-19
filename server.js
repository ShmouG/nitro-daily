const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const db = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}

app.use('/', routes, (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/textadventure';
mongoose.connect(MONGODB_URI || { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
