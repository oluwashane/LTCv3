const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = {
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    message: {
        type: String,
        trim: true,
        required: true
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;
