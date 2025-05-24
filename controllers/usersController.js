const Users = require('../models/usersModel');

// Listar todos os usuários
exports.index = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.render('users/index', { users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar um novo usuário
exports.create = async (req, res) => {
  const { name, email, password, photo, preferences } = req.body;

  try {
    await Users.create({ name, email, password, photo, preferences });
    res.redirect('/users');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados do usuário
exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, photo, preferences } = req.body;

  try {
    await Users.update(id, { name, email, password, photo, preferences });
    res.redirect('/users');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar usuário
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Users.delete(id);
    res.redirect('/users');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};