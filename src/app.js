const express = require('express');
const cookie = require('cookie-parser');
const router = require('./router');
const app = express();

//middlewares
app.use(express.json());
app.use(cookie());

//routes
app.use(router());

module.exports = app;