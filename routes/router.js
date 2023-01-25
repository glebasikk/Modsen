const express = require("express");
const meetings = require("../controller/meetings");
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


router.get("/meetings", meetings.all);



module.exports = router;
