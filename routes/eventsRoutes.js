const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventsController');

// Rota principal
router.get('/', controller.index);

// Criar novo evento
router.post('/', controller.create);

// Editar evento
router.put('/update/:id', controller.update);

// Deletar evento
router.delete('/delete/:id', controller.delete);

module.exports = router;