require('dotenv').config()

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();
const api = require('./api');
const { notFound, errorHandler } = require('./middlewares/errors.middleware');
const { verifyToken, adminRequired } = require('./middlewares/auth.middleware');
const port = process.env.PORT || 1000;

var corsOptions = {
    origin: '*', // change to specific address
    optionsSuccessStatus: 204
}

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', cors(corsOptions), api);

app.use('/restricted', verifyToken, adminRequired, express.static(__dirname + '/../restricted'));
app.use('/public', express.static(__dirname + '/../public'));

app.use(express.json());
app.use(cors());
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is up at port http://localhost:${port}`);
});

module.exports = app;