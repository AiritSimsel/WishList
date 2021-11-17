const express = require('express');
const wishController = require('../controllers/mainController');
const router = express.Router({ mergeParams: true });

router.get('/admin', wishController.getAdminPage);
router.post('/form', wishController. postNewWish);
router.post('/delete', wishController.deleteWish);

module.exports = router;