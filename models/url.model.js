const db = require('../config/db');

const mongoose = require('mongoose');
const userModel = require('../models/user.model');
const { Schema } = mongoose;

const shortenerSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: userModel.modelName,
        },
        longUrl:{
            type: String,
            required: true
        },
        shortUrl:{
            type: String,
            required: true
        }
    }
);

const shortenerModel = db.model("ShortenerUrl",shortenerSchema);
module.exports = shortenerModel;