const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    if(process.env.DISABLE_AUTH === "true" && process.env.NODE_ENV === "development"){
        next();
        return;
    }

    let bearerToken = null;
    const bearerHeader = req.headers["authorization"]

    if (bearerHeader) {
      bearerToken = bearerHeader.split(" ")[1]
    }

    const cookieToken = req.cookies.access_token

    const token = bearerToken || cookieToken

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

        if (err) return res.sendStatus(403);

        req.token = token;
        req.user = user;
        next();
    })
};

const adminRequired = (req, res, next) => {

    if(process.env.DISABLE_AUTH === "true" && process.env.NODE_ENV === "development"){
      next();
      return;
    }

    const user = req.user;
    const isAdmin = user.role === "admin";

    if (!isAdmin) {
      return res.status(403).send({
        message: 'Admin only',
        auth
      })
    }
    next();
};

module.exports = {
    adminRequired,
    verifyToken
};