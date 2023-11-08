const db = require('../config/db');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const shortenerSchema = new Schema(
    {
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