const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = 'INSERT INTO playlists (location_id, name, link) VALUES ($1, $2, $3) RETURNING *';
    const values = [data.location_id, data.name, data.link];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query('SELECT * FROM playlists ORDER BY id ASC');
    return result.rows;
  },

  async update(id, data) {
    const query = 'UPDATE playlists SET location_id = $1, name = $2, link = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *';
    const values = [data.location_id, data.name, data.link, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM playlists WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  }
};