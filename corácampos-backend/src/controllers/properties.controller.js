const { response } = require("express");
const Properties = require('./../models/Properties.model');

const postProperty = async (req, res = response) => {
    const { title } = req.body;
    try {
        const existingPropertyByName = await Properties.findOne({ title: title });
        if (existingPropertyByName) { return res.status(401).json({ ok: false, msg: "Ya existe una propiedad con ese nombre" }) };
        const dbProperty = new Properties(req.body);
        await dbProperty.save();
        return res.status(201).json({
            ok: true,
            msg: "La propiedad ha sido guardada con éxito",
            dbProperty
        })
    } catch (err) {
        return res.status(501).json({
            ok: false,
            msg: "Error al guardar en la base de datos",
        })
    }
};

const getProperties = (req, res = response) => {
    return Properties.find({}).then((resp, err) => {
        return !err ? res.status(201).json({ resp }) : err;
    })
}

const getPropertiesByTitle = async (req, res = response) => {
    const { title } = req.params;
    return await Properties.find({ title: title }).then((resp, err) => {
        return !err ? res.status(200).json({ resp }) : err;
    })
}

const getPropertiesByLocation = async (req, res = reponse) => {
    const { location } = req.params;
    return await Properties.find({ location: location }).then((resp, err) => {
        return !err ? res.status(200).json({ resp }) : err;
    })
}

const getPropertiesById = async (req, res = response) => {
    const { _id } = req.params;
    return await Properties.findById({ _id: _id }).then((resp, err) => {
        return !err ? res.status(200).json({ resp }) : err;
    })
}

const getPropertiesByType = async (req, res = response) => {
    const { propertyType } = req.params;
    return await Properties.find({ propertyType: propertyType }).then((resp, err) => {
        return !err ? res.status(200).json({ resp }) : err;
    })
}

const deleteProperty = async (req, res = response) => {
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

const getPropertiesByStatus = async (req, res = response) => {
    const { status } = req.params;
    return Properties.find({ status: status }).then((resp, err) => {
        return !err ? res.status(200).json({ resp }) : err;
    })
}

const updateProperty = async (req, res = response) => {
    const { _id } = req.params;
    try {
        await Properties.findByIdAndUpdate({ _id: _id }, req.body).then((resp, err) => {
            return !err ? res.status(200).json({ resp }) : err;
        })
    } catch (err) {
        return res.status(500).json({
            ok: false,
            msg: "No se puede actualizar el dato"
        })
    }
}

module.exports = {
    postProperty, getProperties, getPropertiesByTitle, deleteProperty, getPropertiesById,
    getPropertiesByLocation, getPropertiesByType, getPropertiesByStatus, updateProperty
};
