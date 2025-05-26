const Subscriptions = require('../models/subscriptionsModel');

// Listar todas as inscrições
exports.index = async (req, res) => {
  try {
    const subscriptions = await Subscriptions.findAll();
    res.status(200).json(subscriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar uma nova inscrição
exports.create = async (req, res) => {
  const { users_id, events_id, date, hour, status } = req.body;
  try {
    await Subscriptions.create({ users_id, events_id, date, hour, status });
    res.status(200).json({message: "Inscrição criada"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados da inscrição
exports.update = async (req, res) => {
  const { id } = req.params;
  const { users_id, events_id, date, hour, status } = req.body;

  try {
    await Subscriptions.update(id, { users_id, events_id, date, hour, status });
    res.redirect('/subscriptions');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar inscrição
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Subscriptions.delete(id);
    res.status(200).json({message: "Inscrição deletada"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};