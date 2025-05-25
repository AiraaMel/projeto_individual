const db = require('../config/db');

module.exports = {
  // create recebe um parametro(dados que quero inserir)
  async create(data) {
    const query = 'INSERT INTO users (name, email, password, photo, preferences) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [data.name, data.email, data.password, data.photo, data.preferences];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query('SELECT * FROM users ORDER BY id ASC');
    return result.rows;
  },

  async update(id, data) {
    const query = 'UPDATE users SET name = $1, email = $2, password = $3, photo = $4, preferences = $5, WHERE id = $6 RETURNING *';
    const values = [data.name, data.email, data.password, data.photo, data.preferences, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  }
};