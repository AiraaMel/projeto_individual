const express = require('express');
const router = express.Router();
const path = require('path');

// Roteamento para páginas dinâmicas
router.get('/playlists', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Cadastrar playlist',
    content: path.join(__dirname, '../views/pages/playlists')
  });
});

router.get('/login', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/login'), {
    pageTitle: 'Página Inicial'
  });
});

router.get('/createAccount', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/createAccount'), {
    pageTitle: 'Criar conta'
  });
});

router.get('/preferences', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Preferencias',
    content: path.join(__dirname, '../views/pages/preferences')
  });
});

const Events = require('../models/eventsModel'); // certifique-se de que esteja no topo do arquivo

router.get('/home', async (req, res) => {
  try {
    const events = await Events.findAll(); // busca eventos disponíveis
    res.render(path.join(__dirname, '../views/pages/home'), {
      pageTitle: 'Inicial',
      locations: [],
      search: null,
      events
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao carregar eventos");
  }
});



router.get('/search', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/search'), {
    pageTitle: 'Busca',
    events: [],  // ou um array real com dados se quiser buscar do DB aqui
    search: null
  });
});

router.get('/country', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/country'), {
    pageTitle: 'País',
  });
});

router.get('/profile', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/profile'), {
    pageTitle: 'Perfil',
  });
});

router.get('/feedback', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/feedback'), {
    pageTitle: 'Avaliação',
  });
});

router.get('/searchCountry', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/searchCountry'), {
    pageTitle: 'Busca países',
  });
});

router.get('/eventPage', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/eventPage'), {
    pageTitle: 'Página do evento',
  });
});

module.exports = router;
