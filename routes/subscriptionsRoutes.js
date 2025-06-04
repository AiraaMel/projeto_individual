const express = require('express');
const router = express.Router();
const controller = require('../controllers/subscriptionsController');

// Rota principal
router.get('/', controller.index);

// Criar nova inscrição
router.post('/', controller.create);

// Editar inscrição
router.put('/update/:id', controller.update);

// Deletar inscrição
router.delete('/delete/:id', controller.delete);

router.post('/subscription', controller.create);

module.exports = router;