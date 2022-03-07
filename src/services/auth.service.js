const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const Users = require("./users.service");

class Auth{
  constructor(){
    this.usersServ = new Users()
  }

  async signIn({email,password}){
    if(!email || !password){
      return {success: false, message: "ingrese credenciales"}
    }
    const user = await this.usersServ.get({email});
    console.log(user.data);
    if(user.success){
      const successPassword = await bcrypt.compare(password, user.data.password)
      console.log(successPassword);
      if(successPassword){
        return this.#generateToken(user)
      }
      return {success: false, message:'Contraseña incorrecta'}
    }
    return {success: false, message: 'Las credenciales no coinciden'}
  }

  async signUp(userData){
    delete userData.rol
    const password = await this.#hashPassword(userData.password)
    const user = await this.usersServ.create({...userData,password})
    if(user.success){
      return this.#generateToken(user)
    }
    return user
  }

  #generateToken (user){
    console.log(user);
    const data = user.data.toObject()
    const token = jwt.sign(data,'123456', {expiresIn:'1d'})
    return {...user,data,token}
  }

  async #hashPassword(password){
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    return hash
  }
}

module.exports = Auth;