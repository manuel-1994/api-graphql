const express = require('express');
const cookie = require('cookie-parser');
const router = require('./router');
const { connection } = require('./config/database/mongo');
const app = express();

//middlewares
app.use(express.json());
app.use(cookie());
//TODO: configurar cors
//database connect
connection();

//routes
app.use(router);

module.exports = app;