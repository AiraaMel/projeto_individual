const express = require('express');
const router = express.Router();
const controller = require('../controllers/playlistsController');

// Rota principal
router.get('/', controller.index);

// Criar nova playlist
router.post('/', controller.create);

// Editar playlist
router.put('/update/:id', controller.update);

// Deletar playlist
router.delete('/delete/:id', controller.delete);

module.exports = router;