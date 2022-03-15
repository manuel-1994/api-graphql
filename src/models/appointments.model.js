const {mongoose}=require('../config/database/mongo');
const {Schema} = mongoose;

const appointmentsSchemas = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  propertie:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "properties"
  },
  date_for: Date
})

const appointmentsModel = mongoose.model('appointments', appointmentsSchemas);

module.exports = appointmentsModel;