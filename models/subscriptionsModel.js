const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = 'INSERT INTO subscriptions (users_id, events_id, date, hour, status) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [data.users_id, data.events_id, data.date, data.hour, data.status];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query('SELECT * FROM subscriptions ORDER BY id ASC');
    return result.rows;
  },

  async update(id, data) {
    const query = 'UPDATE subscriptions SET users_id = $1, events_id = $2, date = $3, hour = $4, status = $5 WHERE id = $6 RETURNING *';
    const values = [data.users_id, data.events_id, data.date, data.hour, data.status, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM subscriptions WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  }
};