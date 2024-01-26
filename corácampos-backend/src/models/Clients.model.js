const { Schema, model } = require("mongoose");

const ClientesSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  localidad: {
    type: Boolean,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
});

module.exports = model("Clientes", ClientesSchema);
