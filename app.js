const express = require("express");
const router = require("./routes/router");
const app = express();
var bodyParser = require('body-parser')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
},

router);




module.exports = app;
