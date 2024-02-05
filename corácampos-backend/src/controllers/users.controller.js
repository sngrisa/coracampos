const { response } = require("express");
const Users = require("../models/Users.model");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("./../helpers/jwt");

const getUsers = (req, res = response) => {
  Users.find({}).then((resp, err) => {
    return !err ? res.status(201).json({ resp }) : err;
  });
};

const getUsersById = async (req, res = response) => {
  try {
    const { _id } = req.params;
    return await Users.findById({ _id: _id }).then((resp, err) => {
      return !err ? res.status(201).json({ resp }) : err;
    });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Usuario no encontrado con ese id" });
  }
};

const getUsersByEmail = async (req, res = response) => {

  try {
    const { email } = req.params;
    await Users.find({ email: email }).then((resp, err) => {
      return !err ? res.status(201).json({ resp }) : err;
    });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Usuario no encontrado con ese parametro" });
  }
};

const getUsersByUsername = async (req, res = response) => {
  try {
    const { username } = req.params;
    return await Users.find({ username: username }).then((resp, err) => {
      return !err ? res.status(200).json({ resp }) : err;
    });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Usuario no encontrado con ese parametro" });
  }
};

const getUsersByStatus = async (req, res = response) => {
  try {
    const { status } = req.params;
    return await Users.find({ status: status }).then((resp, err) => {
      return !err ? res.status(201).json({ resp }) : err;
    });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Usuario no encontrado con ese parametro" });
  }
};

const postUsers = async (req, res = response) => {
  try {
    const { email, username, password, confirmPassword } = req.body;
    const existingUserByEmail = await Users.findOne({ email: email });
    const existingUserByUsername = await Users.findOne({ username: username });
    if (password != confirmPassword) {
      return res.status(401).json({
        ok: false,
        msg: "Contraseñas incorrectas, vuelvalo a intentar nuevamente",
      });
    }
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
    const dbUser = new Users(req.body);
    const bcryptHash = bcrypt.genSaltSync(10);
    dbUser.password = bcrypt.hashSync(password, bcryptHash);
    dbUser.status = true;
    dbUser.confirmPasswordStatus = true;
    await dbUser.save();
    const token = await generateJWT(dbUser.id, dbUser.email);
    return res.status(201).json({
      ok: true,
      msg: "Usuario dado de alta con éxito",
      dbUser,
      token
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al dar de alta a usuario",
    });
  }
};

const putUsers = async (req, res = response) => {
  const { _id } = req.params;
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
    return await Users.findByIdAndUpdate({ _id: _id }, req.body).then((resp, err) => {
      const bcryptHash = bcrypt.getSalt(14);
      dbUser.password = bcrypt.hashSync(password, bcryptHash);
      const dbUser = new Users(req.body);
      dbUser.status = true;
      dbUser.save();
      return (!err) ? res.status(201).json({ resp }) : res.status(401).json({ err });
    })
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al dar de alta a usuario",
    });
  }
};

const deleteUsers = async (req, res = response) => {
  try {
    const { _id } = req.params;
    const dbUser = await Users.findById({ _id: _id }, req.body).then((resp, err) => {
      dbUser.status = false;
      dbUser.save();
      if (err) { return res.status(401).json({ err }) }
      return res.status(201).json({
        ok: true,
        msg: "Usuario dado de baja con éxito",
      })
    });
  } catch (err) {
    return res.status(401).json({
      ok: false,
      msg: "Error al dar de baja al usuario",
    })
  }
}

module.exports = {
  getUsers,
  getUsersById,
  postUsers,
  putUsers,
  getUsersByEmail,
  getUsersByUsername,
  getUsersByStatus,
  deleteUsers
};
