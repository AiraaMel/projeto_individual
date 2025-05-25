const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = 'INSERT INTO feedbacks (users_id, events_id, comments, grade, date, hour) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [data.users_id, data.events_id, data.comments, data.grade, data.date, data.hour];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query('SELECT * FROM feedbacks ORDER BY id ASC');
    return result.rows;
  },

  async update(id, data) {
    const query = 'UPDATE feedbacks SET comments = $1, grade = $2, date = $3, hour = $4 WHERE id = $5 RETURNING *';
    const values = [data.comments, data.grade, data.date, data.hour, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM feedbacks WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  }
};