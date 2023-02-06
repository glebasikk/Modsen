const express = require("express");
const meetings = require("../controller/meetings");
const auth = require("../controller/auth")
const guest = require("../controller/guests")
const authMidleware = require("../midleware/auth");
const router = express.Router();
const bodyParser = require('body-parser');
const authMidlewareRefresh = require("../midleware/authRefresh");
const jsonParser = bodyParser.json()


/**
 * @swagger
 * /allMeetings?page=3:
 *   get:
 *     description: Get allMeetings on page 2
 *     responses:
 *       200:
 *         description: Return all meetings on page 2
 *       404:
 *         description: There are no meetings on this page
 * /filteredMeetings:
 *   post:
 *     description: Get all books
 *     parameters:
 *      - id: 5
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */




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
