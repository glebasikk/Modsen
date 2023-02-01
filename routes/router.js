const express = require("express");
const meetings = require("../controller/meetings");
const auth = require("../controller/auth")
const guest = require("../controller/guests")
const authMidleware = require("../midleware/auth");
const roleMidleware = require("../midleware/role");
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


router.get("/allMeetings", meetings.allMeetings);
router.post("/filteredMeetings",jsonParser, meetings.allFilteredMeetings);
router.post("/findMeeting",jsonParser, meetings.findMeetingByID);
router.post("/delMeeting",jsonParser, meetings.delMeetingByID);
router.post("/addMeeting",jsonParser, meetings.addMeeting);
router.post("/updateMeeting",jsonParser, meetings.updateMeetingInfo);
router.post("/addGuest",jsonParser, roleMidleware("user"),guest.addGuest);
router.post("/registration",jsonParser, auth.registration);
router.post("/auth",jsonParser, auth.login);

module.exports = router;
