const DatetimeEvents = require('../models/datetimeEventsModel');

// Listar todos os registros de datetime_events
exports.index = async (req, res) => {
    try {
        const datetimes = await DatetimeEvents.findAll();
        res.status(200).json(datetimes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Listar todos os horários de um evento específico
exports.byEvent = async (req, res) => {
    const { eventId } = req.params;

    try {
        const datetimes = await DatetimeEvents.findByEventId(eventId);
        res.status(200).json(datetimes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Criar um novo registro de datetime_event
exports.create = async (req, res) => {
    const { day_time, event_id } = req.body;

    try {
        await DatetimeEvents.create({ day_time, event_id });
        res.status(201).json({ message: "Data e hora do evento criada com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Atualizar um registro de datetime_event
exports.update = async (req, res) => {
    const { id } = req.params;
    const { day_time } = req.body;

    try {
        await DatetimeEvents.update(id, { day_time });
        res.status(200).json({ message: "Data e hora atualizadas com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Deletar um registro de datetime_event
exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        await DatetimeEvents.delete(id);
        res.status(200).json({ message: 'Data e hora removida com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
