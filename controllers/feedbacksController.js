const Feedbacks = require('../models/feedbacksModel');

// Listar todos os feedbacks
exports.index = async (req, res) => {
  try {
    const feedbacks = await Feedbacks.findAll();
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json(feedbacks);
    } else {
      res.render('feedbacks/index', { feedbacks });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar um novo feedback
exports.create = async (req, res) => {
  const { users_id, events_id, comments, grade, date, hour } = req.body;

  try {
    const feedback = await Feedbacks.create({ users_id, events_id, comments, grade, date, hour });
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(201).json(feedback);
    } else {
      res.redirect('/feedbacks');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados do feedback
exports.update = async (req, res) => {
  const { id } = req.params;
  const { comments, grade, date, hour } = req.body;

  try {
    const feedback = await Feedbacks.update(id, { comments, grade, date, hour });
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json(feedback);
    } else {
      res.redirect('/feedbacks');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar feedback
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const feedback = await Feedbacks.delete(id);
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json({ message: 'Feedback deleted successfully', feedback });
    } else {
      res.redirect('/feedbacks');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};