const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventsController');

// Rota principal
router.get('/', controller.index);

// Criar novo evento
router.post('/', controller.create);

// Editar evento
router.post('/edit/:id', controller.update);

// Deletar evento
router.post('/delete/:id', controller.delete);

module.exports = router;