const express = require('express');
const wishController = require('../controllers/mainController');
const router = express.Router({ mergeParams: true });

router.get('/', wishController.getMainPage);

module.exports = router;