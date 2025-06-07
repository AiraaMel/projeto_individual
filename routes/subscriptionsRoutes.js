const express = require('express');
const router = express.Router();
const controller = require('../controllers/subscriptionsController');
const authenticateToken = require('../middleware/auth');

// Rota principal
router.get('/', controller.index);

// Criar nova inscrição (protegida com JWT)
router.post('/', authenticateToken, controller.create);

// Editar inscrição
router.put('/update/:id', controller.update);

// Deletar inscrição
router.delete('/delete/:id', controller.delete);

module.exports = router;