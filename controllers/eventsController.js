const Events = require('../models/eventsModel');

// Listar todos os eventos
exports.index = async (req, res) => {
  try {
    const events = await Events.findAll();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar um novo evento
exports.create = async (req, res) => {
  const { title, type, description, photo, locations_id, included, place, duration, price, capacity } = req.body;

  try {
    await Events.create({ title, type, description, photo, locations_id, included, place, duration, price, capacity });
    res.status(201).json({ message: "Evento criado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados do evento
exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, type, description, photo, locations_id, included, place, duration, price, capacity } = req.body;

  try {
    await Events.update(id, { title, type, description, photo, locations_id, included, place, duration, price, capacity });
    res.status(200).json({ message: "Evento atualizado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar evento
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Events.delete(id);
    res.status(200).json({ message: 'Evento deletado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Exibir detalhes do evento (renderizar view)
exports.show = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Events.findById(id);

    if (!event) {
      return res.status(404).send("Evento não encontrado");
    }

    res.render('pages/eventPage', { event });

  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao carregar evento");
  }
};
