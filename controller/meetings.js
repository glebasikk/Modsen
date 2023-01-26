const meetings = require("../service/meetings");
const findOrDelMeetingDTO = require("../dto/findOrDelMeetingDTO")
const addMeetingDTO = require("../dto/addMeeting");
const updateMeetingDTO = require("../dto/updateMeeting");


class Meetings {
    async allMeetings(req, res, next) {
        try {
            let result = await meetings.allMeetings();
            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
    async findMeetingByID(req, res, next) {
        try {
            let data = findOrDelMeetingDTO(req.body)
            let result = await meetings.findMeetingByID(data);
            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
    
    async delMeetingByID(req, res, next) {
        try {
            let data = findOrDelMeetingDTO(req.body)
            let result = await meetings.delMeetingByID(data);
            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
    async addMeeting(req, res, next) {
        try {
            let data = addMeetingDTO(req.body)
            let result = await meetings.addMeeting(data);
            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
    
    async updateMeetingInfo(req, res, next) {
        try {
            let data = updateMeetingDTO(req.body)
            let result = await meetings.updateMeetingInfo(data);
            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new Meetings();
