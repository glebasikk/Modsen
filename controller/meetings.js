const meetings = require("../service/meetings");
const findOrDelMeetingDTO = require("../dto/findOrDelMeetingDTO")
const addMeetingDTO = require("../dto/addMeeting");
const updateMeetingDTO = require("../dto/updateMeeting");
const {
    findOrDelMeetingValidation,
    addMeetingValidation,
    updateMeetingValidation,
    filteredMeetings
} = require("../midleware/validator")



class Meetings {
    async allMeetings(req, res, next) {
        try {
            let query = req.query
            let result = await meetings.allMeetings(query);
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
            let result = await meetings.allFilteredMeetings(data,query);
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
            let result = await meetings.findMeetingByID(data);
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
            let result = await meetings.delMeetingByID(data);
            return res.status(200).json(result);
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
            let result = await meetings.addMeeting(data);
            return res.status(200).json(result);
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
            let result = await meetings.updateMeetingInfo(data);
            return res.status(200).json(result);
        } catch (e) {
            if(e.isJoi ==true){
                e.status = 422
            }
            next(e);
        }
    }
}

module.exports = new Meetings();
