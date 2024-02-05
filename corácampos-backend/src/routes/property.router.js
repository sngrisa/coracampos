const express = require('express');
const router = express.Router();
const { getProperties, getPropertiesById, getPropertiesByTitle, getPropertiesByStatus, getPropertiesByType, getPropertiesByLocation, deleteProperty, postProperty, updateProperty } = require('./../controllers/properties.controller');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');

router.get("", validateFields, getProperties);

router.get("/:_id", check("_id", "El id es obligatorio").isLength(1), validateFields, getPropertiesById);

router.get("/title/:title", check("title", "El nombre de la propiedad es obligatorio").isLength(3), validateFields, getPropertiesByTitle);

router.get("/status/:status", check("status", "El status es obligatorio").isLength(3), validateFields, getPropertiesByStatus);

router.get("/type/:propertyType", check("propertyType", "El tipo de la propiedad es obligatorio").isLength(3), validateFields, getPropertiesByType);

router.get("/location/:location", check("location", "El es obligatorio").isLength(3), validateFields, getPropertiesByLocation);

router.delete("/:_id", check("_id", "El id es obligatorio").isLength(3), validateFields, deleteProperty);

router.post("", [check("title", "El nombre de la propiedad es obligatorio").isLength(4),
check("propertyType", "El tipo de propiedad es obligatorio").isLength(3), check("status", "Es obligatorio ingresar el status").isLength(3)],
    validateFields, postProperty);

router.put("/:_id", [check("_id", "El id es obligatorio").isLength(5)], validateFields, updateProperty);

module.exports = router;