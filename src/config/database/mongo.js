const mongoose = require('mongoose')
const config = require('../environments')

const connection = async () => {
  const conn = await mongoose.connect(`mongodb://mongo/${config.database}`)
  console.log("Conectado:",conn.connection.host)
}

module.exports = {connection,mongoose}