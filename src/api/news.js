const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { verifyToken, adminRequired } = require("../middlewares/auth.middleware");
const { uploadPublic } = require("../middlewares/upload.middleware");

const db = require('monk')(process.env.MONGODB_URI)
const collection = db.get("news");

const schema = Joi.object({
    title: Joi.string().trim().required(),
    preview_text: Joi.string().trim().required(),
    text: Joi.string().trim().required(),
    date: Joi.string().trim().required(),
    image_url: Joi.string()
})

router.get("/", async (req, res, next) => {
    
    try{
        const items = await collection.find();

        if(!items) return next();

        return res.json(items);

    }catch(error){
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {

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

router.post("/", verifyToken , adminRequired, uploadPublic.single("file"), async (req, res, next) => {

    if(req.file){
        req.body.image_url = "public/uploads/" + req.file.filename;
    }
    
    try{
        console.log(req.body);
        const value = await schema.validateAsync(req.body);
        const inserted = await collection.insert(value);
        res.json(inserted);
    }catch(error){
        next(error);
    }
});

router.put("/:id", verifyToken, adminRequired,  uploadPublic.single("file"), async(req, res, next) => {

    if(req.file){
        req.body.image_url = "public/uploads/" +  req.file.filename;
    }
    
    try{
        const { id } = req.params;
        const value = await schema.validateAsync(req.body);

        const item = await collection.findOne({
            _id: id,
        });

        const updated = await collection.update({
            _id: id
        }, value);

        res.json(updated);
    }catch(error){
        next(error);
    }
})

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