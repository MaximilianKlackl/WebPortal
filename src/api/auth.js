const express = require("express");
const router = express.Router();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const db = require('monk')(process.env.MONGODB_URI)
const collection = db.get("user");

const saltRounds = 10;

const schema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().required(),
})

const accessTokenSecret = process.env.JWT_SECRET;
const expire = process.env.JWT_EXPIRE;

router.post("/login", async (req, res, next) => {

    try{
        const email = req.body.email;
        const password = req.body.password;
        
        const user = await collection.findOne({email: email});
        const isMatch = await bcrypt.compare(password, user.password);

        console.log(isMatch);

        if(!isMatch){
            res.status(401);
            return next(new Error("no user with given credintials"));
        }

        const token = jwt.sign({
            id: user.id, 
            email: user.email,
            role: user.role
        }, accessTokenSecret)
        
        res.cookie('access_token', token, {
            maxAge: expire,
            httpOnly: true
        })

        res.send({
            message: 'Authenticated! Use this token in your Authorization header as Bearer token',
            token
        })  

    }catch(error){
        next(error);
    }
});

router.post("/register", async (req, res, next) => {

    try{
        const hashed = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashed;

        const value = await schema.validateAsync(req.body);
        const exists = await collection.findOne({email: req.body.email});

        if(exists){
            res.status(409);
            return next(new Error("user with email already exists"));
        }

        value.role = "user";
        const inserted = await collection.insert(value);

        res.status(201);
        res.json(inserted);
    }catch(error){
        next(error);
    }
});

module.exports = router;