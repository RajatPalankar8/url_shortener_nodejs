const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const urlSubmittion = require('./routers/urlSubmition.routers');
const userRouter = require('./routers/users.routers');

app.use(cors());
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.set('view engine',"ejs")
app.get('/',(req,res)=>{
    res.render('index')
})

app.use("/",urlSubmittion);
app.use("/",userRouter);

module.exports = app;