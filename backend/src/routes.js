const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfillerController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);


routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;