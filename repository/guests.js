const guest = require("../models/guests");

class Guest {
    async addGuest(data) {
        return await guest.create({
            user_id: data.userId,
            meeting_id: data.meetingId,
        });
    }
    async findGuest(data) {
        return await guest.findOne({where:
             {
                user_id: data.userId,
                meeting_id: data.meetingId,
            }
        });   
    }

}

module.exports = new Guest();