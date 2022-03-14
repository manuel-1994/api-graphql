const AdviserModel = require("../models/advisers.model");

class Adviser{

  async getAll(query){
    return AdviserModel.find(query)
  }

  static async getOne(query){
    return AdviserModel.findOne({_id:query})
  }

  async create(query){
    const saveData = AdviserModel.create(query)
    return {success:true, message:"Asesor creado exitosamente", data: saveData}
  }
}

module.exports = Adviser