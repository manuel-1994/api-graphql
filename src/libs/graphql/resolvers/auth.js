const tokenToCookie = require("../../../helpers/tokenToCookie");
const Auth = require("../../../services/auth.service")
const authServ = new Auth();

const authResolvers={
  Query:{
    validateAuth(_,args,context){
      if(context.role>=0){
        return {logged:true,user:context.email}
      }
      return {logged:false, message:context.role}
    },
    signOut(_,args,context){
      context.res.cookie('token','',{
        httpOnly:true,
        sameSite:"none",
        secure:true,
        expires:new Date()
      })
      return {loggedOut:true}
    }
  },

  Mutation:{
    async signIn(_,args,context){
      const data = await authServ.signIn(args.user)
      if(data.success){
        return tokenToCookie(context.res,data)
      }
      return data
    },

    async signUp(_,args,context){
      const data = await authServ.signUp(args.user)
      return tokenToCookie(context.res,data)
    }

    
  }
}

module.exports= authResolvers