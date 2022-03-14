const {userQuery,userMutation} = require('./user')
const {propertieQuery,propertieMutetion} = require('./propertie')
const {authQuery, authMutation} = require('./auth')
const {adviserQuery, adviserMutation} = require('./adviser')
const resolvers = {
  Query:{
    ...userQuery,
    ...propertieQuery,
    ...authQuery,
    ...adviserQuery
  },
  Mutation:{
    ...userMutation,
    ...propertieMutetion,
    ...authMutation,
    ...adviserMutation
  },
  
}
module.exports = resolvers