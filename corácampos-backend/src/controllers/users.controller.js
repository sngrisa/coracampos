const { response } = require("express");
const Users = require("../models/Users.model");
const bcrypt = require("bcryptjs");

const getUsers = (req, res = response) => {
  Users.find({}).then((resp, err) => {
    return !err ? resp : err;
  });
};

const getUsersById = async (req, res = response) => {
  const { id } = req.params;
  try {
    await Users.findById({ _id: id }).then((resp, err) => {
      return !err ? resp : err;
    });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Usuario no encontrado con ese id" });
  }
};

const getUsersByEmail = async (req, res = response) => {
  const { email } = req.params;
  try {
    await Users.find({ email: email }).then((resp, err) => {
      return !err ? resp : err;
    });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Usuario no encontrado con ese parametro" });
  }
};

const getUsersByUsername = async (req, res = response) => {
  const { username } = req.params;
  try {
    await Users.find({ username: username }).then((resp, err) => {
      return !err ? resp : err;
    });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Usuario no encontrado con ese parametro" });
  }
};

const getUsersByStatus = async (req, res = response) => {
  const { status } = req.params;
  try {
    await Users.find({ status: status }).then((resp, err) => {
      return !err ? resp : err;
    });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Usuario no encontrado con ese parametro" });
  }
};

const postUsers = async (req, res = response) => {
  const { email, username, password, confirmPassword } = req.body;
  try {
    const existingUserByEmail = await Users.findOne({ email: email });
    const existingUserByUsername = await Users.findOne({ username: username });
    if (existingUserByEmail) {
      return res.status(401).json({
        ok: false,
        msg: "Usuario existente en la base de datos con ese nombre",
      });
    }
    if (existingUserByUsername) {
      return res.status(401).json({
        ok: false,
        msg: "Usuario existente en la base de datos con ese email",
      });
    }
    if (password != confirmPassword) {
      return res.status(401).json({
        ok: false,
        msg: "Contraseñas incorrectas, vuelvalo a intentar nuevamente",
      });
    }
    const bcryptHash = bcrypt.getSalt(14);
    dbUser.password = bcrypt.hashSync(password, bcryptHash);
    const dbUser = new Users(req.body);
    dbUser.status = true;
    dbUser.save();
    return res.status(201).json({
      ok: true,
      msg: "Usuario dado de alta con éxito",
      dbUser,
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al dar de alta a usuario",
    });
  }
};

const putUsers = async (req, res = response) => {
  const { email, username, password, confirmPassword } = req.body;
  try {
    const existingUserByEmail = await Users.findOne({ email: email });
    const existingUserByUsername = await Users.findOne({ username: username });
    if (existingUserByEmail) {
      return res.status(401).json({
        ok: false,
        msg: "Usuario existente en la base de datos con ese nombre",
      });
    }
    if (existingUserByUsername) {
      return res.status(401).json({
        ok: false,
        msg: "Usuario existente en la base de datos con ese email",
      });
    }
    if (password != confirmPassword) {
      return res.status(401).json({
        ok: false,
        msg: "Contraseñas incorrectas, vuelvalo a intentar nuevamente",
      });
    }
    const bcryptHash = bcrypt.getSalt(14);
    dbUser.password = bcrypt.hashSync(password, bcryptHash);
    const dbUser = new Users(req.body);
    dbUser.status = true;
    dbUser.save();
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al dar de alta a usuario",
    });
  }
};

module.exports = {
  getUsers,
  getUsersById,
  postUsers,
  putUsers,
  getUsersByEmail,
  getUsersByUsername,
  getUsersByStatus,
};
