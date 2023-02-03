const guest = require("../repository/guests");
const meeting = require("../repository/meetings");
const NotFound = require("../errors/NotFound");
const BadRequest = require("../errors/BadRequest");

class Guest {
    async addGuest(data) {
        let check = await guest.findGuest(data)
        if (check != null){
            throw new BadRequest("user already added to this meeting");
        }
        check = await meeting.findMeetingByID(data)
        if (check == null){
            throw new NotFound("Meeting with this id does not exist");
        }
        return await guest.addGuest(data);
    }
}

module.exports = new Guest();