const UserModel = require("../models/users.model");

class Users{
  async getAll(){
    const data = await UserModel.find({})
    return data;
  }

  async create(data){
    const saveData = await UserModel.create(data)
    return {success:true, message: 'usuario creado exitosamente', saveData}
  }

  async update(data,id){
    const dataUpdated = await UserModel.findByIdAndUpdate(id, data)
    return {success:true, message: 'usuario actualizado', dataUpdated}
  }

  async delete(id){
    const dataDeleted = await UserModel.findByIdAndDelete(id);
    return {success:true, message: 'usuario eliminado', dataDeleted}
  }
}

module.exports = Users;