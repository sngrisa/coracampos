const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
  username: {
    type: string,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: Boolean,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = model("Users", UsersSchema);
