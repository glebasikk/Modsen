const meetings = require("../repository/meetings");


class Meetings {
    async allMeetings() {
        return await meetings.allMeetings();
    }
    async findMeetingByID(data) {
        return await  meetings.findMeetingByID(data);
    }
    async delMeetingByID(data) {
        return await  meetings.delMeetingByID(data);
    }
    async addMeeting(data) {
        return await meetings.addMeeting(data);
    }
    async updateMeetingInfo(data) {
        return await meetings.updateMeetingInfo(data);
    }
    
}

module.exports = new Meetings();