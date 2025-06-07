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

router.get('/home', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Inicial',
    content: path.join(__dirname, '../views/pages/home'),
    locations: [],  // ou um array real com dados se quiser buscar do DB aqui
    search: null
  });
});


router.get('/search', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Busca',
    content: path.join(__dirname, '../views/pages/search')
  });
});

router.get('/country', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'País',
    content: path.join(__dirname, '../views/pages/country')
  });
});

router.get('/profile', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Perfil',
    content: path.join(__dirname, '../views/pages/profile')
  });
});

router.get('/feedback', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Avaliação',
    content: path.join(__dirname, '../views/pages/feedback')
  });
});

router.get('/searchCountry', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Busca países',
    content: path.join(__dirname, '../views/pages/searchCountry')
  });
});

router.get('/eventPage', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Página do evento',
    content: path.join(__dirname, '../views/pages/eventPage')
  });
});

module.exports = router;
