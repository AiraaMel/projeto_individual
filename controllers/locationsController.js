const Locations = require('../models/locationsModel');

// Listar todas as localizações
exports.index = async (req, res) => {
  try {
    const locations = await Locations.findAll();
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(200).json(locations);
    } else {
      res.render('locations/index', { locations });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar uma nova localização
exports.create = async (req, res) => {
  const { country, language, coin, customs, curiosities } = req.body;
  try {
    await Locations.create({ country, language, coin, customs, curiosities });
      res.status(200).json({message: "Evento criado"});
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
    res.status(200).json({message: "Localização atualizada"});
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