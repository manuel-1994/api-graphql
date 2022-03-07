const {userQuery,userMutation} = require('./user')
const {propertieQuery,propertieMutetion} = require('./propertie')
const {authQuery, authMutation} = require('./auth')
const resolvers = {
  Query:{
    ...userQuery,
    ...propertieQuery,
    ...authQuery
  },
  Mutation:{
    ...userMutation,
    ...propertieMutetion,
    ...authMutation
  },
  
}
module.exports = resolvers