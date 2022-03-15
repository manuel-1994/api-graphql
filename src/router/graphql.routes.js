const {graphqlHTTP} = require('express-graphql')
const jwt = require("jsonwebtoken")
const schema = require('../libs/graphql/schema')

const graphql = (app) =>{
  app.use('/graphql', graphqlHTTP((req,res,params)=>{
    const token = req.cookies.token
    let context;
    
    if(token){
      const decoded = jwt.verify(token, "123456")
      const {role,email, _id} = decoded
      context = {res,role,email, id:_id}
    }else{
      context = {res, role:"UNAUTHENTICATED"}
    }
    
    return ({
      graphiql:true,
      schema,
      context
    })
  }))
}

module.exports = graphql;