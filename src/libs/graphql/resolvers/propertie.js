const { GraphQLError } = require("graphql");
const Properties = require("../../../services/properties.service");
const propertiesServ = new Properties();


const resolvers ={
  propertieQuery:{
    properties(_,args){
      return propertiesServ.getAll(args)
    },
    propertie(_,args){
      return propertiesServ.getByAdviser(args.adviserId)
    }
  },

  propertieMutetion:{
    createPropertie(_,args, context){
      if(context.role>=1){
        return propertiesServ.create(args)
      }
      return new GraphQLError('No tienes permisos')
    },
    updatePropertie(_,args, context){
      if(context.role>=1){
        return propertiesServ.update(args)
      }
      return new GraphQLError('No tienes permisos')
    },
    deletePropertie(_, args, context){
      if(context.role>=1){
        return propertiesServ.delete(args)
      }
      return new GraphQLError('No tienes permisos')
    }
  }
}

module.exports = resolvers