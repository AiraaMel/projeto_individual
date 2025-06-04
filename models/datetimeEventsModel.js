const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = `
      INSERT INTO datetime_events (day_time, event_id)
      VALUES ($1, $2)
      RETURNING *`;
    const values = [data.day_time, data.event_id];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query('SELECT * FROM datetime_events ORDER BY id ASC');
    return result.rows;
  },

  async findByEventId(eventId) {
    const result = await db.query('SELECT * FROM datetime_events WHERE event_id = $1 ORDER BY day_time ASC', [eventId]);
    return result.rows;
  },

  async update(id, data) {
    const query = `
      UPDATE datetime_events
      SET day_time = $1
      WHERE id = $2
      RETURNING *`;
    const values = [data.day_time, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM datetime_events WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  }
};
