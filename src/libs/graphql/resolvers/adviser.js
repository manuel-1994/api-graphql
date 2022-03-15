const { GraphQLError } = require("graphql")
const Adviser = require("../../../services/advisers.Service")
const advisersServ = new Adviser();

const adviserResolvers = {
  Query:{
    advisers(_,args,context){
      if(context.role>=1){
        return advisersServ.getAll(args.adviser)
      }
      return new GraphQLError('No tienes permisos')
    }
  },
  Mutation:{
    createAdviser(_,args, context){
      if(context.role>=1){
        return advisersServ.create(args.adviser)
      }
      return new GraphQLError('No tienes permisos')
    }
  }
}

module.exports = adviserResolvers