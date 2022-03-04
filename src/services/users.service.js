const UserModel = require("../models/users.model");

class Users{
  async getAll(){
    const data = await UserModel.find({})
    return data;
  }

  async get(query){
    const data = await UserModel.findOne(query)
    return data;
  }

  async create(query){
    const saveData= await UserModel.create(query.user)
    return {success: true, message: 'usuario creado', data: saveData}
  }

  async update(query){
    const dataUpdated = await UserModel.findByIdAndUpdate({_id:query.id},query.user,{new:true})
    console.log(query);
    return {success:true, message: 'usuario actualizado', data:dataUpdated}
  }

  async delete(query){
    const dataDeleted = await UserModel.findByIdAndDelete({_id:query.id});
    return {success:true, message: 'usuario eliminado', data:dataDeleted}
  }
}

module.exports = Users;