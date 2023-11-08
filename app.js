const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const urlSubmittion = require('./routers/urlSubmition.routers');


app.use(cors());
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));

app.use("/",urlSubmittion);


module.exports = app;