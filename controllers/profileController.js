const db = require('../config/db');

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    // Dados do usuário
    const userResult = await db.query('SELECT name, email FROM users WHERE id = $1', [userId]);
    const user = userResult.rows[0];

    // Eventos em que o usuário está inscrito
    const eventsResult = await db.query(`
      SELECT s.id as subscription_id, e.id as event_id,e.title, e.description, e.photo, e.place AS location,e.type AS category, e.duration,e.price,d.day_time,d.id as datetime_event_id
      FROM subscriptions s
      JOIN datetime_events d ON s.datetime_event_id = d.id
      JOIN events e ON d.event_id = e.id
      WHERE s.users_id = $1
      ORDER BY d.day_time ASC
    `, [userId]);

    res.status(200).json({ user, events: eventsResult.rows });
  } catch (err) {
    console.error('Erro ao buscar perfil:', err);
    res.status(500).json({ error: 'Erro ao buscar dados do perfil' });
  }
};
