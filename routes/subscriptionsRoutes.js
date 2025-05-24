const express = require('express');
const router = express.Router();
const controller = require('../controllers/subscriptionsController');

// Rota principal
router.get('/', controller.index);

// Criar nova inscrição
router.post('/', controller.create);

// Editar inscrição
router.post('/edit/:id', controller.update);

// Deletar inscrição
router.post('/delete/:id', controller.delete);

module.exports = router;