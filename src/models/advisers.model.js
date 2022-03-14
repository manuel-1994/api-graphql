const {mongoose} = require('../config/database/mongo');

const {Schema} = mongoose

const adviserSchema = new Schema({
  fullname: String,
  phone: String,
  email: String,
  created_at: {
    type: Date,
    default: new Date()
  }
});

const AdviserModel = mongoose.model('advisers', adviserSchema);

module.exports = AdviserModel;

