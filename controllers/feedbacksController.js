const Feedbacks = require('../models/feedbacksModel');

// Listar todos os feedbacks
exports.index = async (req, res) => {
  try {
    const feedbacks = await Feedbacks.findAll();
    if (feedbacks.length === 0) {
      return res.status(404).json({ message: "Nenhum feedback encontrado" });
    }
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
    res.status(201).json({message: "Feedback criado"});
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
    res.status(200).json({message: "Inscrição atualizada"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar feedback
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Feedbacks.delete(id);
    res.status(200).json({ message: 'Feedback deletado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};