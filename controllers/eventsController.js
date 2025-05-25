const Subscriptions = require('../models/subscriptionsModel');

// Listar eventos
exports.index = async (req, res) => {
  try {
    const subscriptions = await Subscriptions.findAll();
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json(subscriptions);
    } else {
      res.render('subscriptions/index', { subscriptions });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar uma nova inscrição
exports.create = async (req, res) => {
  const { users_id, events_id, date, hour, status } = req.body;

  try {
    const subscription = await Subscriptions.create({ users_id, events_id, date, hour, status });
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(201).json(subscription);
    } else {
      res.redirect('/subscriptions');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados da inscrição
exports.update = async (req, res) => {
  const { id } = req.params;
  const { users_id, events_id, date, hour, status } = req.body;

  try {
    const subscription = await Subscriptions.update(id, { users_id, events_id, date, hour, status });
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json(subscription);
    } else {
      res.redirect('/subscriptions');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar inscrição
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const subscription = await Subscriptions.delete(id);
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json({ message: 'Subscription deleted successfully', subscription });
    } else {
      res.redirect('/subscriptions');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};