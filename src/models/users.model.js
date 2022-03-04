const {mongoose} = require('../config/database/mongo');

const {Schema} = mongoose

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Date,
  Address: String,
  phone: String,
  email: String,
  password: String,
  role:{
    type: Number,
    default: 0
  },
  create_at: {
    type: Date,
    default: new Date()
  }
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;

