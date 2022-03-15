const appointmentsModel = require("../models/appointments.model");

class Appointments{
  async getAll(query){
    return await appointmentsModel.find({user: query}).populate({path: 'propertie', populate: 'adviser'})
  }

  async create(query){
    const saveData = await appointmentsModel.create(query) 
    return {success: true, message: 'Cita creada exitosamente', data:saveData}
  }

  async delete(query){
    const dataDeleted = await appointmentsModel.findByIdAndDelete(query)
    return {success: true, message: 'Cita eliminada', data:dataDeleted}
  }
}

module.exports = Appointments