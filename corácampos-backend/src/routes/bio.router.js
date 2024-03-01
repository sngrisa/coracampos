const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getBiodiversity, getBiodiversityById, getBiodiversityByTitle, deletePropertyBio, postBioDiversity, putBioDiversity } = require('../controllers/biodiversity.controller');

router.get('', getBiodiversity);

router.get('/:_id', check('_id', "El id es obligatorio").isLength(3), getBiodiversityById);

router.get('/title/:title', check('title', "El nombre de la propiedad es obligatorio").isLength(4), getBiodiversityByTitle);

router.post('',
    [
        check('title', "El nombre de la propiedad tiene que ser mayor a 3 digitos").isLength(3),
        check('desc', "La descripcion de la propiedad tiene que ser mayor a 3 digitos").isLength(3),
        check('area', "La area de la propiedad tiene que ser mayor a 1 digito").isLength(1),
    ]
    , postBioDiversity);

router.put('/:id',
    [check("_id", "El id es obligatorio").isLength(2),
    check("title", "El titulo de la propiedad es obligatorio").isLength(4)]
    , putBioDiversity);

router.delete('/delete/:_id', check('_id', "El id es obligatorio").isLength(4), deletePropertyBio);


module.exports = router;