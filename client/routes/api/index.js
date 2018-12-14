const router = require('express').Router();
const charRoutes = require('./characters');

router.use('/characters', charRoutes);

module.exports = router;
