const { GraphQLError } = require("graphql")
const Adviser = require("../../../services/advisers.Service")
const advisersServ = new Adviser();

const resolvers = {
  adviserQuery:{
    advisers(_,args,context){
      if(context.role>=1){
        return advisersServ.getAll(args.adviser)
      }
      return new GraphQLError('No tienes permisos')
    }
  },
  adviserMutation:{
    createAdviser(_,args, context){
      if(context.role>=1){
        return advisersServ.create(args.adviser)
      }
      return new GraphQLError('No tienes permisos')
    }
  }
}

module.exports = resolvers