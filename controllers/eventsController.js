const Events = require('../models/eventsModel');

// Listar eventos
exports.index = async (req, res) => {
  try {
    const events = await Events.findAll();
    res.render('events/index', { events });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar um novo evento
exports.create = async (req, res) => {
  const { title, type, description, photo, locations_id } = req.body;

  try {
    await Events.create({ title, type, description, photo, locations_id });
    res.redirect('/events');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados do evento
exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, type, description, photo, locations_id } = req.body;

  try {
    await Events.update(id, { title, type, description, photo, locations_id });
    res.redirect('/events');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar evento
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Events.delete(id);
    res.redirect('/events');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};