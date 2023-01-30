const meetings = require("../repository/meetings");
const notFound = require("../errors/NotFound");

class Meetings {
    async allMeetings() {
         let result = await meetings.allMeetings();
         if (result == null){
            throw new notFound("Database is empty");
         }
         return result
    }
    async findMeetingByID(data) {
        let result = await meetings.findMeetingByID(data);
         if (result == null){
            throw new notFound("Meeting with this id does not exist");
         }
         return result
    }
    async delMeetingByID(data) {
        if (result == 0){
            throw new notFound("Cannot delete this Meeting becouse meeting does not exist");
         }
        return await  meetings.delMeetingByID(data);
    }
    async addMeeting(data) {
        
        return await meetings.addMeeting(data);
    }
    async updateMeetingInfo(data) {
        let result = await meetings.updateMeetingInfo(data);
         if (result == null){
            throw new notFound("Meeting with this id does not exist");
         }
         return result
    }
    
}

module.exports = new Meetings();