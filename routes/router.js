const express = require("express");
const meetings = require("../controller/meetings");
const auth = require("../controller/auth")
const guest = require("../controller/guests")
const authMidleware = require("../midleware/auth");
const router = express.Router();
const bodyParser = require('body-parser');
const authMidlewareRefresh = require("../midleware/authRefresh");
const jsonParser = bodyParser.json()


router.get("/allMeetings", meetings.allMeetings);
router.post("/filteredMeetings",jsonParser, meetings.allFilteredMeetings);
router.post("/findMeeting", meetings.findMeetingByID);
router.post("/delMeeting",jsonParser, authMidleware(["admin"]), meetings.delMeetingByID);
router.post("/addMeeting",jsonParser, authMidleware(["admin"]), meetings.addMeeting);
router.post("/updateMeeting",jsonParser, authMidleware(["admin"]), meetings.updateMeetingInfo);
router.post("/addGuest",jsonParser, authMidleware(["admin", "user"]),guest.addGuest);
router.post("/registration",jsonParser, auth.registration);
router.post("/auth",jsonParser, auth.login);
router.post("/refresh", authMidlewareRefresh(),jsonParser, auth.refreshToken);

module.exports = router;
