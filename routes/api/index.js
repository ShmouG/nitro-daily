const router = require('express').Router();
const charRoutes = require('./characters');
const sceneRoutes = require('./scenario');

router.use('/characters', charRoutes);
router.use('/scenario', sceneRoutes);

module.exports = router;
