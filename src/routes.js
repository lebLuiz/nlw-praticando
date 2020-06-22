const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');

routes.get('/companies', CompanyController.index);

module.exports = routes;