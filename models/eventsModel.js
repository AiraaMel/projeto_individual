const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = `
      INSERT INTO events 
        (title, type, description, photo, locations_id, included, place, duration, price, capacity) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
      RETURNING *`;
    const values = [data.title, data.type, data.description, data.photo, data.locations_id, data.included, data.place, data.duration, data.price, data.capacity];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query(`
      SELECT id, title, type, description, photo, locations_id, included, place, duration, price, capacity 
      FROM events 
      ORDER BY id ASC
    `);
    return result.rows;
  },

  async update(id, data) {
    const query = `
      UPDATE events 
      SET title = $1, type = $2, description = $3, photo = $4, locations_id = $5,
          included = $6, place = $7, duration = $8, price = $9, capacity = $10
      WHERE id = $11 
      RETURNING *`;
    const values = [data.title, data.type, data.description, data.photo, data.locations_id, data.included, data.place, data.duration, data.price, data.capacity, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM events WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  },

  async findById(id) {
    const result = await db.query(`
      SELECT id, title, type, description, photo, locations_id, included, place, duration, price, capacity 
      FROM events 
      WHERE id = $1
    `, [id]);
    return result.rows[0];
  }
};
