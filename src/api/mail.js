const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { verifyToken, adminRequired } = require("../middlewares/auth.middleware");
const { uploadRestricted } = require("../middlewares/upload.middleware");

const db = require('monk')(process.env.MONGODB_URI)
const collection = db.get("mail");

const schema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    message: Joi.string().trim().required(),
    files: Joi.array(),
})

router.get("/", verifyToken, adminRequired, async (req, res, next) => {
    
    try{
        const items = await collection.find();

        if(!items) return next();

        return res.json(items);

    }catch(error){
        next(error);
    }
});

router.get("/:id", verifyToken, adminRequired, async (req, res, next) => {

    try{
        const { id } = req.params;
        const item = await collection.findOne({
            _id: id,
        });

        if(!item) return next();
        return res.json(item);

    }catch(error){
        next(error);
    }
});

router.post("/", uploadRestricted.array("files"), async (req, res, next) => {

    let filenames = [];

    req.files.forEach(item => {
        filenames.push("restricted/uploads/" + item.filename);
    })

    req.body.files = filenames;

    console.log(req.body.files);

    try{
        const value = await schema.validateAsync(req.body);
        const inserted = await collection.insert(value);

        res.json(inserted);
    }catch(error){
        console.log(error);
        next(error);
    }
});

router.delete(":id", verifyToken, adminRequired, async(req, res, next) => {

    try{
        const { id } = req.params;
        await collection.delete({ _id: id });

        res.status(200);
        res.json({
            message: "Sucess"
        })

    }catch(error){
        next(error);
    }
})

module.exports = router;