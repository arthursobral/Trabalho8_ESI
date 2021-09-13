const express = require('express');
const app = express();
const db = require('../Infraestrutura/config/db')
const consign = require('consign');

consign()
    .then('./config/middlewares.js')
    .then('./Servicos/api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3000, () => {
    console.log('comecou')
})