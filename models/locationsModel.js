const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = 'INSERT INTO locations (country, language, coin, customs, curiosities) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [data.country, data.language, data.coin, data.customs, data.curiosities];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query('SELECT * FROM locations ORDER BY id ASC');
    return result.rows;
  },
  async update(id, data) {
    const query = 'UPDATE locations SET country = $1, language = $2, coin = $3, customs = $4, curiosities = $5 WHERE id = $6 RETURNING *';
    const values = [data.country, data.language, data.coin, data.customs, data.curiosities, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM locations WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  }
};