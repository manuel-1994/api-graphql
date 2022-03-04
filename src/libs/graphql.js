const {buildSchema} =require('graphql');
const Properties = require('../services/properties.service');
const Users = require('../services/users.service')
const usersServ = new Users();
const propertiesServ = new Properties();

const root = {
  createUser: usersServ.create,
  users:usersServ.getAll,
  user: usersServ.get,
  deleteUser: usersServ.delete,
  updateUser: usersServ.update,

  createPropertie: propertiesServ.create,
  properties: propertiesServ.getAll
}

let schemas = buildSchema(`
    type Query{
      users: [User]
      user(id:String, email:String): User
      properties(propertie:PropertieInput): [Propertie]
    }

    type Mutation{
      createUser(user: UserInput): UserMessage
      deleteUser(id: String!): UserMessage
      updateUser(id: String!, user: UserInput): UserMessage

      createPropertie(propertie: PropertieInput): PropertieMessage
      updatePropertie(id: String!, propertie: PropertieInput): PropertieMessage
      deletePropertie(id: String!): PropertieMessage
    }

    type User{
      id: String
      firstName: String
      lastName: String
      Address: String
      phone: String
      email: String
      password: String
      role: Int
    }

    type UserMessage{
      success: Boolean
      message: String
      data: User
    }

    input UserInput{
      firstName: String
      lastName: String
      Address: String
      phone: String
      email: String
      password: String
      role:Int
    }

    type Propertie{
      id: String
      name: String
      type: String
      status: String
      city: String
      pool: Boolean
      parking: String
      baths: Int
      beds: Int
      acres: Int
      yearBuilt: Int
      price: Int
      agent: Agent
    }

    type PropertieMessage{
      success: Boolean
      message: String
      data: Propertie
    }

    input PropertieInput{
      name: String
      type: String
      status: String
      city: String
      pool: Boolean
      parking: String
      baths: Int
      beds: Int
      acres: Int
      yearBuilt: Int
      price: Int
      agent: InputAgent
    }

    type Agent{
      name: String!
      phone: String!
    }

    input InputAgent{
      name: String!
      phone: String!
    }
`)

module.exports = {
  root, 
  schemas
}