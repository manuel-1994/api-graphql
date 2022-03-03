const path = require('path');
require('dotenv').config({
  path: path.resolve(process.cwd(), `.env${process.env.NODE_ENV?'.'+process.env.NODE_ENV:''}`)
})

//import enviroments
const development = require('./development');
const test = require('./test');
const{NODE_ENV} = process.env

let currentEnv = development

switch (NODE_ENV) {
  case "test":
    currentEnv = test
    break;
  default:
    currentEnv = development
    break;
}

module.exports = currentEnv