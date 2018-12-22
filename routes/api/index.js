const router = require('express').Router();
const charRoutes = require('./characters');
const sceneRoutes = require('./scenario');

router.use('/characters', charRoutes);

// Use sceneRoutes for scenario routes
router.use('/scenario', sceneRoutes);

module.exports = router;
