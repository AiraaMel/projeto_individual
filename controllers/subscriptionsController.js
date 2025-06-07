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

// Criar uma nova inscrição (com JWT já decodificado no middleware)
exports.create = async (req, res) => {
  const { events_id, datetime_event_id, status } = req.body;

  try {
    const users_id = req.user.id; // ID já disponível após autenticação via middleware

    await Subscriptions.create({ users_id, events_id, datetime_event_id, status });
    res.status(201).json({ message: 'Inscrição criada com sucesso' });
  } catch (err) {
    console.error('Erro ao criar inscrição:', err);
    res.status(500).json({ error: 'Erro ao criar inscrição' });
  }
};

// Atualizar dados da inscrição
exports.update = async (req, res) => {
  const { id } = req.params;
  const { users_id, events_id, datetime_event_id, status } = req.body;

  try {
    await Subscriptions.update(id, { users_id, events_id, datetime_event_id, status });
    res.status(200).json({ message: "Inscrição atualizada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar inscrição
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Subscriptions.delete(id);
    res.status(200).json({ message: "Inscrição deletada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
