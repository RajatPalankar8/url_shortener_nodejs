const router = require('express').Router();
const userModel = require('../models/user.model');

router.post('/userRegister',async (req,res)=>{

    try{
        const {name,email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            const createUser = new userModel({name,email,password});
            await createUser.save();
            res.json({ status: true, success: 'User registered successfully' });
        }else{
            res.json({ status: false, success: 'user Already Exist!' });
        }
    }catch(err){
        console.log("error",err);
    }
});

module.exports = router;