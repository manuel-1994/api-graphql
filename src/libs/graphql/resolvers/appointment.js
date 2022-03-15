const { GraphQLError } = require("graphql");
const Appointments = require("../../../services/appointments.service");
const appointmentsServ = new Appointments();


const appointmentResolvers ={
  Query:{
    appointments(_,args,context){
      if(context.role>=0){
        return appointmentsServ.getAll(context.id)
      }
      return new GraphQLError('No tienes permisos')
      
    }
  },

  Mutation:{
  createAppointment(_,args, context){
      if(context.role>=0){
        args.appointment.user = context.id
        return appointmentsServ.create(args.appointment)
      }
      return new GraphQLError('No tienes permisos')
    },
  }
}

module.exports = appointmentResolvers