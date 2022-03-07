const PropertiesModel = require("../models/properties.model");

class Properties{
  async getAll(query){
    const data = await PropertiesModel.find(query.propertie)
    return data;
  }

  async get(query){
    const data = await PropertiesModel.findOne(query)
    return data;
  }

  async create(query){
    const saveData= await PropertiesModel.create(query.propertie)
    return {success: true, message: 'propiedad creada', data: saveData}
  }

  async update(query){
    const dataUpdated = await PropertiesModel.findByIdAndUpdate({_id:query.id},query.propertie,{new:true})
    return {success:true, message: 'propiedad actualizada', data:dataUpdated}
  }

  async delete(query){
    const dataDeleted = await PropertiesModel.findByIdAndDelete({_id:query.id});
    return {success:true, message: 'propiedad eliminada', data:dataDeleted}
  }
}

module.exports = Properties;