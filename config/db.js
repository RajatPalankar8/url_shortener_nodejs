const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // user: mongodbConfig.user,
    // pass: mongodbConfig.pass
}

const connection = mongoose.createConnection('mongodb://localhost:27017/shortURL');


module.exports = connection;