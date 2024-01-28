const { Schema, model } = require("mongoose");

const OwnersSchema = new Schema({
  ownerName: {
    type: String,
    required: true,
    unique: true,
  },
  ownerPhone: {
    type: String,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  ownerDesc: {
    type: String,
    required: true,
  },
});

module.exports = model("Owners", OwnersSchema);
