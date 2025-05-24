const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = 'INSERT INTO Events (title, type, description, photo, locations_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [data.title, data.type, data.description, data.photo, data.location_id];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query('SELECT id, title, type, description, photo, locations_id FROM events ORDER BY id ASC');
    return result.rows;
  },

  async update(id, data) {
    const query = 'UPDATE Events SET title = $1, type = $2, description = $3, photo = $4, locations_id = $5, updated_at = CURRENT_TIMESTAMP WHERE id = $6 RETURNING *';
    const values = [data.type, data.description, data.photo, data.location_id, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM events WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  }
};