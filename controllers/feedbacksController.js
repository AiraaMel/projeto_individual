const Feedbacks = require('../models/feedbacksModel');

// Listar todos os Feedbacks
exports.index = async (req, res) => {
  try {
    const feedbacks = await Feedbacks.findAll();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar um novo feedback
exports.create = async (req, res) => {
  const { users_id, events_id, comments, grade, date, hour } = req.body;

  try {
    await Feedbacks.create({ users_id, events_id, comments, grade, date, hour });
    res.redirect('/feedbacks');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados do feedback
exports.update = async (req, res) => {
  const { id } = req.params;
  const { comments, grade, date, hour } = req.body;

  try {
    await Feedbacks.update(id, { comments, grade, date, hour });
    res.redirect('/feedbacks');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar feedback
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Feedbacks.delete(id);
    res.redirect('/feedbacks');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};