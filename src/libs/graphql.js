const {buildSchema} =require('graphql')

const root = {
  message:()=>{
    return 'Hello wolrd'
  }
}

let schemas = buildSchema(`
    type Query{
      message: String
    }
`)

module.exports = {
  root, 
  schemas
}