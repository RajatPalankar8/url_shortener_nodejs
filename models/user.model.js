const db = require('../config/db');

const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        }
    }
)

const userModel = db.model('User',userSchema);
module.exports = userModel;