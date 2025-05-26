const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

// Rota principal
router.get('/', controller.index);

// Criar novo usuário
router.post('/', controller.create);

// Editar usuário
router.put('/update/:id', controller.update);

// Deletar usuário
router.delete('/delete/:id', controller.delete);

module.exports = router;