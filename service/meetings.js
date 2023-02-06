const meeting = require("../repository/meetings");
const notFound = require("../errors/NotFound");

class Meeting {
    async allMeetings(query) {
        if (query.page == undefined || query.page < 1) {
            query.page = 1;
        }
        let limit = 2;
        let startIndex = (query.page - 1) * limit;
        let endIndex = query.page * limit;
        
        let result = await meeting.allMeetings();
        result = result.slice(startIndex, endIndex);
        if (result.length == 0){
            throw new notFound("There are no meetings on this page");
        }
        return result
    }
    async allFilteredMeetings(data,query) {
        if (query.page == undefined || query.page < 1) {
            query.page = 1;
        }
        let limit = 3;
        let startIndex = (query.page - 1) * limit;
        let endIndex = query.page * limit;
        delete query.page
        let params = []
        for (let key in query){
            params.push(key)
        }
        console.log(params)
        let result = await meeting.allFilteredMeetings(data, params);
        result = result.slice(startIndex, endIndex);
        
        if (result.length == 0){
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
        let result = await meeting.findMeetingByID(data);
        if (result == null){
            throw new notFound("Cannot delete this Meeting becouse this meeting does not exist");
         }
        return await  meeting.delMeetingByID(data);
    }
    async addMeeting(data) {
        
        return await meeting.addMeeting(data);
    }
    async updateMeetingInfo(data) {
        let result = await meeting.updateMeetingInfo(data);
         if (result == null){
            throw new notFound("Meeting with this id does not exist");
         }
         return result
    }
    
}

module.exports = new Meeting();