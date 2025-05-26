const Users = require('../models/usersModel');

// Listar todos os usuários
exports.index = async (req, res) => {
  try {
    const users = await Users.findAll();
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json(users);
    } else {
      res.render('users/index', { users });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar um novo usuário
exports.create = async (req, res) => {
  const { name, email, password, photo, preferences } = req.body;
  try {
    await Users.create({ name, email, password, photo, preferences });
    res.status(200).json({message: "Usuário criado"});
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
    res.status(200).json({message: "Usuário atualizado"})
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar usuário
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Users.delete(id);
    res.status(200).json({message: "Usuário deletado"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};