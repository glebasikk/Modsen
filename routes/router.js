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
* @openapi
* components:
*  securitySchemes:
*     bearerAuth:            
*        type: http
*        scheme: bearer
*        bearerFormat: JWT    
*  schemas:
*    filterReq:
*      type: object
*      required:
*        - id
*        - topic
*        - tag
*        - place
*      properties:
*        id:
*          type: integer
*          default: 2
*        topic:
*          type: string
*          default: Working
*        tag:
*          type: string
*          default: work
*        place:
*          type: string
*          default: Minsk
*    addReq:
*      type: object
*      required:
*        - topic
*        - tag
*        - date
*        - place
*      properties:
*        topic:
*          type: string
*          default: "Mafia"
*        tag:
*          type: string
*          default: games
*        date:
*          type: string
*          default: 2002-01-01
*        place:
*          type: string
*          default: London
*    updateReq:
*      type: object
*      required:
*        - id
*        - topic
*        - tag
*        - date
*        - place
*      properties:
*        id:
*          type: number
*          default: 1
*        topic:
*          type: string
*          default: "Quiz"
*        tag:
*          type: string
*          default: games
*        date:
*          type: string
*          default: 2002-01-01
*        place:
*          type: string
*          default: London
*    findReq:
*      type: object
*      required:
*        - id
*      properties:
*        id:
*          type: integer
*          default: 2
*    meetingsRes:
*      type: object
*      properties:
*        id:
*          type: integer
*        topic:
*          type: string
*        tag:
*          type: string
*        date:
*          type: string
*        place:
*          type: string
*    userReq:
*      type: object
*      required:
*        - username
*        - password
*      properties:
*        username:
*          type: string
*          default: vasya
*        password:
*          type: string
*          default: pwd
*    tokenRes:
*      type: object
*      properties:
*        token:
*          type: string
*        refreshToken:
*          type: string
*    addGuestReq:
*      type: object
*      required:
*        - meetingId
*      properties:
*        meetingId:
*          type: number
*          default: 1
*/

/**
* @openapi
* /allMeetings?page=2:
*  get:
*     tags:
*     - Server
*     description: Return all meetings on this page
*     responses:
*       200:
*        content:
*          application/json:
*            schema:
*                $ref: '#/components/schemas/meetingsRes'
*       404:
*         description: There are no meetings on this page
*       422: 
*        description: ValidationError
*         
*/

/**
* @openapi
* '/filteredMeetings':
*  post:
*     tags:
*     - Server
*     summary: Return all meetings on this page with current params 
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/filterReq'
*     responses:
*      200:
*        content:
*          application/json:
*            schema:
*                $ref: '#/components/schemas/meetingsRes'
*      404:
*        description: Meeting with this params does not exist
*      422: 
*        description: ValidationError
*/

/**
* @openapi
* '/findMeeting':
*  post:
*     tags:
*     - Server
*     summary: return required meeting
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/findReq'
*     responses:
*      200:
*        content:
*          application/json:
*            schema:
*                $ref: '#/components/schemas/meetingsRes'
*      404:
*        description: Meeting with this id does not exist
*      422: 
*        description: ValidationError
*/

/**
* @openapi
* '/registration':
*  post:
*     tags:
*     - User
*     summary: user regitration
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/userReq'
*     responses:
*      200:
*        description: registration complete
*      401:
*        description: user exist
*      422: 
*        description: ValidationError
*/

/**
* @openapi
* '/auth':
*  post:
*     tags:
*     - User
*     summary: user authorization (admin account ADMIN Password ADMIN)
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/userReq'
*     responses:
*      200:
*        content:
*          application/json:
*           schema:
*              $ref: '#/components/schemas/tokenRes'
*      401:
*        description: Incorrect password
*      404:
*        description: user does not exist
*/

/**
* @openapi
* '/refresh':
*  post:
*     tags:
*     - User
*     summary: Refresh Token (The bearer must be a refresh token )
*     security:
*       - bearerAuth: []
*     responses:
*      200:
*        content:
*          application/json:
*           schema:
*              $ref: '#/components/schemas/tokenRes'
*      401:
*        description: access denied
*      403:
*        description: Wrong token type
*      422: 
*        description: ValidationError
*/

/**
* @openapi
* '/delMeeting':
*  post:
*     tags:
*     - Server
*     summary: return required meeting
*     security:
*       - bearerAuth: []
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/findReq'
*     responses:
*      200:
*        description: Meeting deleted
*      401:
*        description: access denied
*      403:
*        description: Wrong token type
*      404:
*        description: Meeting with this id does not exist
*      422: 
*        description: ValidationError
*/

/**
* @openapi
* '/addMeeting':
*  post:
*     tags:
*     - Server
*     summary: add Meeting
*     security:
*       - bearerAuth: []
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/addReq'
*     responses:
*      200:
*        description: Meeting added
*      401:
*        description: access denied
*      403:
*        description: Wrong token type
*      404:
*        description: Meeting with this id does not exist
*      422: 
*        description: ValidationError
*/

/**
* @openapi
* '/updateMeeting':
*  post:
*     tags:
*     - Server
*     summary: add Meeting
*     security:
*       - bearerAuth: []
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/updateReq'
*     responses:
*      200:
*        description: Meeting updated
*      401:
*        description: access denied
*      403:
*        description: Wrong token type
*      404:
*        description: Meeting with this id does not exist
*      422: 
*        description: ValidationError
*/

/**
* @openapi
* '/addGuest':
*  post:
*     tags:
*     - User
*     summary: add a guest to a meeting
*     security:
*       - bearerAuth: []
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/addGuestReq'
*     responses:
*      200:
*        description: User added to this meeting
*      401:
*        description: access denied
*      404:
*        description: Meeting with this id does not exist
*      422: 
*        description: ValidationError
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
