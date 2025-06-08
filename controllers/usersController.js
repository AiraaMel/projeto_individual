const Users = require('../models/usersModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Lista todos
exports.index = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Criar um novo usuário
exports.create = async (req, res) => {
  const { name, email, password, photo, preferences } = req.body;
  try {
    await Users.create({ name, email, password, photo, preferences });
    res.status(200).json({ message: "Usuário criado" });
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
    res.status(200).json({ message: "Usuário atualizado" })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar usuário
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Users.delete(id);
    res.status(200).json({ message: "Usuário deletado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await Users.findByEmail(email);

    if (!result || result.rowCount === 0) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    const user = result.rows[0];

    if (user.password !== password) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Sessão salva
    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    const token = generateToken(user);
    res.status(200).json({
      message: 'Login realizado com sucesso',
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });

  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ error: err.message });
  }
};



function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
}

