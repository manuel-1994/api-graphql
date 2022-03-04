const {mongoose}=require('../config/database/mongo');
const {Schema} = mongoose;

const propertiesSchemas = new Schema({
  name: String,
  type: String,
  status: String,
  city: String,
  pool: Boolean,
  parking: String,
  baths: Number,
  beds: Number,
  acres: Number,
  yearBuilt: Number,
  price: Number,
  create_at: {
    type: Date,
    default: new Date()
  },
  agent: {
    name: String,
    phone: Number
  }
})

const PropertiesModel = mongoose.model('properties', propertiesSchemas);

module.exports = PropertiesModel;