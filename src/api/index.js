const express = require("express");
const router = express.Router();

const auth = require("./auth");
const news = require("./news");
const upload = require("./upload");
const kebab = require("./kebab");
const baklava = require("./baklava");
const testimonials = require("./testimonials");
const mail = require("./mail");

router.get("/", (req, res) => {
    res.json({
        message: "API 🙋‍♂️"
    });
});

router.use("/news", news);
router.use("/auth", auth);
router.use("/upload", upload);
router.use("/kebab", kebab); // für informationmateral
router.use("/baklava", baklava); // für downloadbereich
router.use("/testimonials", testimonials);
router.use("/mail", mail);

module.exports = router;