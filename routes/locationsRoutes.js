const express = require('express');
const router = express.Router();
const controller = require('../controllers/locationsController');

// Rota principal
router.get('/', controller.index);

// Criar nova localização
router.post('/', controller.create);

// Editar localização
router.put('/update/:id', controller.update);

// Deletar localização
router.delete('/delete/:id', controller.delete);

module.exports = router;