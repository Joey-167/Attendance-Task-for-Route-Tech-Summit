const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
exports.register= async(req, res)=>{
    try{
        const{name, email, password}= req.body;
        const user= new User({name, email, password});
        await User.save();
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{
            expiresIN: '1h',
        });
        res.status(201).send({user, token});
    }catch(err){
        res.status(400).send(err);
    }
};
exports.login= async(req, res)=>{
    try{
        const{email, password}= req.body;
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).send({error:'Invalid Credentials'});
        }
        const isMatch= await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).send({error:'Invalid credentials'});
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{
            expiresIN:'1hr',
        });
        res.send({user, token});
    }catch(err){
        res.status(500).send(err);
    }
};