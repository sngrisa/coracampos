const { response } = require("express");
const Owners = require("./../models/Owners.model");

const postOwner = (req, res = response) => {
  const { ownerName } = req.body;
  try {
    const existingOwnerName = Owners.findOne({ ownerName: ownerName });
    if (existingOwnerName) {
      return res.status(401).json({
        ok: false,
        msg: "Nombre ya existente en la base de datos de dueño de propiedad",
      });
    }
    const dbOwner = new Owners(req.body);
    dbOwner.save();
    return res.status(200).json({
      ok: true,
      msg: "Dueño de propiedad guardado con éxito",
      dbOwner,
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al guardar dueño de propiedad",
    });
  }
};

const getOwners = (req, res = response) => {
  return Owners.find({}).then((resp, err) => {
    return !err
      ? res.status(200).json({ resp })
      : res.status(500).json({ err });
  });
};

const getOwnersById = async (req, res = reponse) => {
  const { _id } = req.params;
  try {
    return await Owners.findById({ _id: _id }).then((resp, err) => {
      return !err
        ? res.status(200).json({ resp })
        : res.status(500).json({ err });
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al consultar el dueño de la propiedad buscado",
    });
  }
};

const deleteOwners = async (req, res = response) => {
  const { _id } = req.params;
  try {
    return await Owners.findByIdAndDelete({ _id }).then((resp, err) => {
      return !err
        ? res.status(200).json({ resp })
        : res.status(500).json({ err });
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al eliminar el dueño de la propiedad buscado",
    });
  }
};

const updateOwners = async (req, res = response) => {
  const { _id } = req.params;
  try {
    return await Owners.findByIdAndUpdate({ _id }).then((resp, err) => {
      return !err
        ? res.status(200).json({ resp })
        : res.status(500).json({ err });
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al eliminar el dueño de la propiedad buscado",
    });
  }
};

module.exports = {
  postOwner,
  getOwners,
  getOwnersById,
  deleteOwners,
  updateOwners,
};
