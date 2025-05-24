const express = require('express');
const router = express.Router();
const controller = require('../controllers/feedbacksController');

// Rota principal
router.get('/', controller.index);

// Criar novo feedback
router.post('/', controller.create);

// Editar feedback
router.post('/edit/:id', controller.update);

// Deletar feedback
router.post('/delete/:id', controller.delete);

module.exports = router;