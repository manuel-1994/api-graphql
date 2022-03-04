const {buildSchema} =require('graphql')
const Users = require('../services/users.service')
const usersServ = new Users();

const root = {
  createUser: usersServ.create,
  users:usersServ.getAll,
  user: usersServ.get,
  deleteUser: usersServ.delete,
  updateUser: usersServ.update
}

let schemas = buildSchema(`
    type Query{
      users: [User]
      user(id:String, email:String): User
    }

    type Mutation{
      createUser(user: UserInput): UserMessage
      deleteUser(id: String!): UserMessage
      updateUser(id: String!, user: UserInput): UserMessage
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
`)

module.exports = {
  root, 
  schemas
}