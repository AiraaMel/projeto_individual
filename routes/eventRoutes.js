// routes/index.js
const express = require('express');
const router = express.Router();

const EventController = require('../controllers/EventController');

// Rotas para o CRUD de tarefas
router.post('/eventos', EventController.criarTarefa);
router.get('/eventos', EventController.listarEventos);
router.put('/eventos/:id', EventController.editarTarefa);
router.delete('/eventos/:id', EventController.excluirTarefa);

module.exports = router;