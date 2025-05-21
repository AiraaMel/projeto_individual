// controllers/TarefaController.js
const pool = require('../config/database');

// Criar um novo evento
exports.criarEvento = async (req, res) => {
  const { id, title, type, description, photo, location_id } = req.body;

  const query = 'INSERT INTO eventos (id, title, type, description, photo, location_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [id, title, type, description, photo, location_id];

  try {
    const result = await pool.query(query, values);
    const evento = result.rows[0];
    res.status(201).json(evento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas os eventos
exports.listarEventos = async (req, res) => {
  const query = 'SELECT * FROM eventos';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar um evento
exports.editarEvento = async (req, res) => {
  const { id } = req.params;
  const { title, type, description, photo, location_id } = req.body;

  const query = `
    UPDATE eventos SET nome = $1, descricao = $2, status = $3, updated_at = CURRENT_TIMESTAMP
    WHERE id = $4 RETURNING *`;
  const values = [title, type, description, photo, location_id, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir um evento
exports.excluirEvento = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM eventos WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    res.status(200).json({ message: 'Evento excluíd0 com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
