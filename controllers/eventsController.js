const Events = require('../models/eventsModel');

// Listar todos os eventos
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

// Criar um novo evento
exports.create = async (req, res) => {
  const { title, type, description, photo, locations_id } = req.body;

  try {
    await Events.create({ title, type, description, photo, locations_id });
    res.status(200).json({message: "Evento criado"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados do evento
exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, type, description, photo, locations_id } = req.body;

  try {
    const event = await Events.update(id, { title, type, description, photo, locations_id });
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json(event);
    } else {
      res.redirect('/events');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar evento
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Events.delete(id);
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json({ message: 'Event deleted successfully', event });
    } else {
      res.redirect('/events');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};