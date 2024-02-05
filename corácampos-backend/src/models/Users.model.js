const { model, Schema } = require("mongoose");

const UsersSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    confirmPasswordStatus: {
        type: Boolean,
        required: true,
    }
})

module.exports = model('Users', UsersSchema);