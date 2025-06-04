const Locations = require('../models/locationsModel');
const pool = require('../config/db'); // ajuste o caminho conforme seu projeto

// Listar todas as localizações
exports.index = async (req, res) => {
  try {
    const locations = await Locations.findAll();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar uma nova localização
exports.create = async (req, res) => {
  const { country, language, coin, customs, curiosities } = req.body;
  try {
    await Locations.create({ country, language, coin, customs, curiosities });
    res.status(200).json({ message: "Evento criado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados da localização
exports.update = async (req, res) => {
  const { id } = req.params;
  const { country, language, coin, customs, curiosities } = req.body;

  try {
    await Locations.update(id, { country, language, coin, customs, curiosities });
    res.status(200).json({ message: "Localização atualizada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar localização
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Locations.delete(id);
    res.status(200).json({ message: 'Localização deletada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Busca de eventos
exports.searchEventsByCountry = async (req, res) => {
  const searchQuery = req.query.query?.toLowerCase() || '';

  try {
    let result;
    if (searchQuery) {
      result = await pool.query(
        `SELECT events.*
         FROM events
         JOIN locations ON events.locations_id = locations.id
         WHERE unaccent(LOWER(locations.country)) LIKE unaccent($1)`,
        [`%${searchQuery}%`]
      );
    } else {
      result = await pool.query(`SELECT * FROM events`);
    }

    res.render('pages/search', {
      pageTitle: `Eventos para: ${searchQuery}`,
      events: result.rows,
      search: searchQuery
    });
  } catch (error) {
    console.error('Erro na busca de eventos por país:', error);
    res.status(500).send('Erro interno do servidor');
  }
};
