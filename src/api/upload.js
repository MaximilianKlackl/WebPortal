const express = require("express");
const router = express.Router();
const { uploadPublic } = require("../middlewares/upload.middleware");

router.post("/", uploadPublic.array("files"), async (req, res, next) => {
    
    let filenames = [];

    req.files.forEach(item => {
      filenames.push("public/uploads/" + item.filename);
    })

    res.json(filenames);
});

module.exports = router;