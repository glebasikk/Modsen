const meetings = require("../repository/meetings");
const notFound = require("../errors/NotFound");

class Meetings {
    async allMeetings(query) {
        if (query.page == undefined || query.page < 1) {
            query.page = 1;
        }
        let limit = 2;
        let startIndex = (query.page - 1) * limit;
        let endIndex = query.page * limit;
        
        let result = await meetings.allMeetings();
        result = result.slice(startIndex, endIndex);
        if (result == null){
            throw new notFound("Database is empty");
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
        let result = await meetings.allFilteredMeetings(data, params);
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