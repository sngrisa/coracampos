const { response } = require('express');
const Biodiversity = require('./../models/BioDiversity.model');

const postBioDiversity = async (req, res = response) => {
    const { name } = req.body;
    try {
        let existingName = await Biodiversity.findOne({ name: name });
        if (existingName) { return (existingName) && res.status(404).json({ ok: false, msg: "Nombre de la propiedad ya existe en la base de datos" }) }
        const Biodiversities = new Biodiversity(req.body);
        await Biodiversities.save();
        return res.status(201).json({
            ok: true,
            msg: "Éxito al guardar la propiedad en la base de datos"
        })
    } catch (err) {
        return res.status(500).json({
            ok: false,
            msg: "Error al dar de alta a propiedad de la biodiversidad, error del sistema"
        })
    }
}

const putBioDiversity = async (req, res = response) => {
    const { _id } = req.params;
    const { title } = req.body;
    try {
        const titleExisting = await Biodiversity.findOne({ title: title });
        if (titleExisting) { return res.status(401).json("El nombre de la propiedad ya esta registrada en la base de datos") };
        await Biodiversity.findByIdAndUpdate({ _id: _id }).then((resp, err) => {
            return (!err) ? resp : err;
        })
    } catch (err) {
        return res.status(501).json({
            ok: false,
            msg: "Error al actualizar los datos"
        })
    }
}

const getBiodiversity = (req, res = response) => {
    return Biodiversity.find({}).then((resp, err) => {
        return (!err) ? resp : err;
    })
}

const getBiodiversityById = async (req, res = response) => {
    const { _id } = req.params;
    try {
        return await Biodiversity.findById({ _id: _id }).then((resp, err) => {
            return (!err) ? resp : err;
        })
    } catch (err) {
        return res.status(500).json({ ok: false, msg: err })
    }
}



const getBiodiversityByTitle = async (req, res) => {
    const { title } = req.params;
    try {
        return await Biodiversity.find({ title: title }).then((resp, err) => {
            return (!err) ? resp : err;
        })
    } catch (err) {
        return res.status(500).json({ msg: err });
    }
}

const getBiodiversityByLocation = async (req, res) => {
    const { location } = req.params;
    try {
        return await Biodiversity.find({ location: location }).then((resp, err) => {
            return (!err) ? resp : err;
        })
    } catch (err) {
        return res.status(500).json({ msg: err });
    }
}

const deletePropertyBio = async (req, res = response) => {
    const { _id } = req.params;
    try {
        return await Properties.findByIdAndDelete({ _id: _id }).then((resp, err) => {
            return !err ? res.status(200).json({ resp }) : err;
        })
    } catch (err) {
        return res.status(500).json({
            ok: false,
            msg: "Error al eliminar los datos",
        })
    }
}

module.exports = {
    postBioDiversity,
    getBiodiversity,
    getBiodiversityById,
    getBiodiversityByTitle,
    getBiodiversityByLocation,
    deletePropertyBio,
    putBioDiversity
}

