const propertieResolvers = require('./propertie')
const userResolvers = require('./user')
const authResolvers = require('./auth')
const appointmentResolvers = require('./appointment')
const adviserResolvers = require('./adviser')
const customScalarResolver = require('./customScalarResolvers')

module.exports = [
  propertieResolvers,
  userResolvers,
  authResolvers,
  appointmentResolvers,
  adviserResolvers,
  customScalarResolver
]