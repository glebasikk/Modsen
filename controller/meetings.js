const meeting = require("../service/meetings");
const findOrDelMeetingDTO = require("../dto/findOrDelMeetingDTO")
const addMeetingDTO = require("../dto/addMeetingDTO");
const updateMeetingDTO = require("../dto/updateMeetingDTO");
const Response = require("../help/Response");
const {
    findOrDelMeetingValidation,
    addMeetingValidation,
    updateMeetingValidation,
    filteredMeetings
} = require("../midleware/validator")



class Meeting {
    async allMeetings(req, res, next) {
        try {
            let query = req.query
            let result = await meeting.allMeetings(query);
            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
    async allFilteredMeetings(req, res, next) {
        try {
            let query = req.query
            let data = req.body
            let validator = await filteredMeetings.validateAsync(data)
            let result = await meeting.allFilteredMeetings(data,query);
            return res.status(200).json(result);
        } catch (e) {
            if(e.isJoi == true){
                e.status = 422
            }
            next(e);
        }
    }
    async findMeetingByID(req, res, next) {
        try {
            let data = findOrDelMeetingDTO(req.body)
            let validator = await findOrDelMeetingValidation.validateAsync(data)
            let result = await meeting.findMeetingByID(data);
            return res.status(200).json(result);
        } catch (e) {
            if(e.isJoi ==true){
                e.status = 422
            }
            next(e);
        }
    }
    
    async delMeetingByID(req, res, next) {
        try {
            let data = findOrDelMeetingDTO(req.body)
            let validator = await findOrDelMeetingValidation.validateAsync(data)
            let result = await meeting.delMeetingByID(data);
            return res.json(new Response("200", "Meeting deleted"));
        } catch (e) {
            if(e.isJoi ==true){
                e.status = 422
            }
            next(e);
        }
    }
    async addMeeting(req, res, next) {
        try {
            let data = addMeetingDTO(req.body)
            let validator = await addMeetingValidation.validateAsync(data)
            let result = await meeting.addMeeting(data);
            return res.json(new Response("200", "Meeting added"));
        } catch (e) {
            if(e.isJoi ==true){
                e.status = 422
            }
            next(e);
        }
    }
    
    async updateMeetingInfo(req, res, next) {
        try {
            let data = updateMeetingDTO(req.body)
            let validator = await updateMeetingValidation.validateAsync(data)
            let result = await meeting.updateMeetingInfo(data);
            return res.json(new Response("200", "Meeting updated"));
        } catch (e) {
            if(e.isJoi ==true){
                e.status = 422
            }
            next(e);
        }
    }
}

module.exports = new Meeting();
