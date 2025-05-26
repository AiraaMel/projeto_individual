const Events = require('../models/eventsModel');

// Listar eventos
exports.index = async (req, res) => {
  try {
    const events = await Events.findAll();
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json(events);
    } else {
      res.render('events/index', { events });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar uma nova inscrição
exports.create = async (req, res) => {
  const { users_id, events_id, date, hour, status } = req.body;

  try {
    await Events.create({ users_id, events_id, date, hour, status });
    res.status(200).json({message: "Evento criado"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados da inscrição
exports.update = async (req, res) => {
  const { id } = req.params;
  const { users_id, events_id, date, hour, status } = req.body;

  try {
    const event = await Events.update(id, { users_id, events_id, date, hour, status });
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json(event);
    } else {
      res.redirect('/events');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar inscrição
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Events.delete(id);
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json({ message: 'event deleted successfully', event });
    } else {
      res.redirect('/events');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};