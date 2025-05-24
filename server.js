require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

db.connect()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL');

    app.use(express.json());
    
    const eventsRoutes = require('./routes/eventsRoutes');
    app.use('/events', eventsRoutes);  

    const feedbacksRoutes = require('./routes/feedbacksRoutes');
    app.use('/feedbacks', feedbacksRoutes); 

    const locationsRoutes = require('./routes/locationsRoutes');
    app.use('/locations', locationsRoutes); 

    const playlistsRoutes = require('./routes/playlistsRoutes');
    app.use('/playlists', playlistsRoutes); 

    const subscriptionsRoutes = require('./routes/subscriptionsRoutes');
    app.use('/subscriptions', subscriptionsRoutes);

    const usersRoutes = require('./routes/usersRoutes');
    app.use('/users', usersRoutes); 

    const frontendRoutes = require('./routes/frontRoutes');
    app.use('/', frontendRoutes);

    // Middleware para lidar com erros de rota não encontrada
    app.use((req, res, next) => {
      res.status(404).send('Página não encontrada');
    });

    // Middleware para lidar com erros internos do servidor
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Erro no servidor');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
