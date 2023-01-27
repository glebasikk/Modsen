const express = require("express");
const meetings = require("../controller/meetings");
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


router.get("/allMeetings", meetings.allMeetings);
router.post("/findMeeting",jsonParser, meetings.findMeetingByID);
router.post("/delMeeting",jsonParser, meetings.delMeetingByID);
router.post("/addMeeting",jsonParser, meetings.addMeeting);
router.post("/updateMeeting",jsonParser, meetings.updateMeetingInfo);


module.exports = router;
