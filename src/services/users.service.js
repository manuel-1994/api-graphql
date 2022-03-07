const UserModel = require("../models/users.model");

class Users{
  async getAll(){
    const data = await UserModel.find({})
    return data;
  }

  async get(query){
    const data = await UserModel.findOne(query)
    if(!data){
      return{success:false, message:"el usuario no existe",data}
    }
    return{success:true, data}
  }

  async create(query){
    const isEmailValid = await this.#validateEmail(query.user?query.user.email:query.email)
    if(isEmailValid.success){
      const saveData= await UserModel.create(query.user?query.user:query)
      return {success: true, message: 'usuario creado', data: saveData}
    }
    return isEmailValid;
  }

  async update(query){
    const dataUpdated = await UserModel.findByIdAndUpdate({_id:query.id},query.user,{new:true})
    return {success:true, message: 'usuario actualizado', data:dataUpdated}
  }

  async delete(query){
    const dataDeleted = await UserModel.findByIdAndDelete({_id:query.id});
    return {success:true, message: 'usuario eliminado', data:dataDeleted}
  }

  async #validateEmail (email, id){
    const isUser = await this.get({email})
    
    if(isUser){
      return (isUser.id === id)
      ?{success: true, message:'El correo actual es valido'}
      :{success:false, message:'El correo ya existe'}
    }

    return {success: true, message: 'Correo valido'}
  }
}

module.exports = Users;