const express = require('express');
const router = express.Router();
const controller = require('../controllers/locationsController');

// Rota principal
router.get('/', controller.index);

// Criar nova localização
router.post('/', controller.create);

// Editar localização
router.post('/edit/:id', controller.update);

// Deletar localização
router.post('/delete/:id', controller.delete);

module.exports = router;