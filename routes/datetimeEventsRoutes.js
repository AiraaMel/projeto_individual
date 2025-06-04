const express = require('express');
const router = express.Router();
const controller = require('../controllers/datetimeEventsController');

// Listar todos os datetime_events
router.get('/', controller.index);

// Listar horários de um evento específico
router.get('/event/:eventId', controller.byEvent);

// Criar novo horário para evento
router.post('/', controller.create);

// Atualizar horário
router.put('/update/:id', controller.update);

// Deletar horário
router.delete('/delete/:id', controller.delete);

module.exports = router;
