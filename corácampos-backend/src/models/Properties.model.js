const { Schema, model } = require("mongoose");

const PropertySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  garage: {
    type: Number,
  },
  status: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  title_desc: {
    type: String,
    required: true
  },
});

module.exports = model("Properties", PropertySchema);
