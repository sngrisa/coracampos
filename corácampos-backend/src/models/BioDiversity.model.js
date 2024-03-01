const { model, Schema } = require('mongoose');

const Biodiversity = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    title_desc: {
        type: String,
        required: true
    },

})


module.exports = model('Biodiversity', Biodiversity);