const Playlists = require('../models/playlistsModel');

// Listar todas as playlists
exports.index = async (req, res) => {
  try {
    const playlists = await Playlists.findAll();
    res.status(200).json(playlists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar uma nova playlist
exports.create = async (req, res) => {
  const { locations_id, name, link } = req.body;

  try {
    await Playlists.create({ locations_id, name, link });
    res.redirect('/playlists');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar dados da playlist
exports.update = async (req, res) => {
  const { id } = req.params;
  const { locations_id, name, link } = req.body;

  try {
    await Playlists.update(id, { locations_id, name, link });
    res.redirect('/playlists');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar playlist
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Playlists.delete(id);
    res.redirect('/playlists');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};