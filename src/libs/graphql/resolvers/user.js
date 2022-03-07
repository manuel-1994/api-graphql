const { GraphQLError } = require("graphql")
const Users = require("../../../services/users.service")
const usersServ = new Users()

const resolvers = {
  userQuery:{
    users(_,args,context){
      if(context.role>=1){
        return usersServ.getAll()
      }
      return new GraphQLError('No tienes permisos')
    }
  },
  userMutation:{
    createUser(_,args, context){
      if(context.role>=1){
        return usersServ.create(args)
      }
      return new GraphQLError('No tienes permisos')
    },
    updateUser(_,args, context){
      if(context.role>=1){
        return usersServ.update(args)
      }
      return new GraphQLError('No tienes permisos')
    },
    deleteUser(_,args, context){
      if(context.role>=1){
        return usersServ.delete(args)
      }
      return new GraphQLError('No tienes permisos')
    }
  }
}

module.exports = resolvers