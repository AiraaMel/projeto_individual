const jwt = require('jsonwebtoken');
const db = require('../config/db');

module.exports = {
  // Criação da inscrição com verificação de JWT
  async create(req, res) {
    const { events_id, datetime_event_id, status } = req.body;
    const { token } = req.body; // O token JWT será passado no corpo da requisição

    try {
      // Verifica se o token JWT é válido
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Extraí o ID do usuário do token
      const user_id = decoded.id; 

      // Cria a inscrição associada ao usuário
      const query = `
        INSERT INTO subscriptions (users_id, events_id, datetime_event_id, status)
        VALUES ($1, $2, $3, $4) RETURNING *`;
      const values = [user_id, events_id, datetime_event_id, status];

      // Inserção no banco de dados
      const result = await db.query(query, values);

      res.status(201).json({ message: 'Inscrição criada com sucesso', subscription: result.rows[0] });
    } catch (err) {
      console.error('Erro ao verificar token ou criar inscrição:', err);
      res.status(401).json({ message: 'Token inválido ou erro ao criar inscrição' });
    }
  },

  // Outras funções do controller (findAll, update, delete) permanecem as mesmas
  async findAll() {
    const result = await db.query('SELECT * FROM subscriptions ORDER BY id ASC');
    return result.rows;
  },

  async update(id, data) {
    const query = `
      UPDATE subscriptions 
      SET users_id = $1, events_id = $2, datetime_event_id = $3, status = $4 
      WHERE id = $5 RETURNING *`;
    const values = [data.users_id, data.events_id, data.datetime_event_id, data.status, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM subscriptions WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  }
};
