const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// =========================== RUTAS ===========================
router.post('/create', userController.create);
router.put('/update', userController.update);
router.delete('/delete', userController.delete);
router.put('/get', userController.get);
router.get('/getAll', userController.getAll);


module.exports = router;