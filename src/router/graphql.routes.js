const {graphqlHTTP} = require('express-graphql')
const { root, schemas } = require('../libs/graphql')

const graphql = (app) =>{
  app.use('/graphql', graphqlHTTP({
    graphiql:true,
    rootValue: root,
    schema: schemas
  }))
}

module.exports = graphql;