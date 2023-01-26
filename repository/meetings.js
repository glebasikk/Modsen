
const meetings = require("../models/meetings");

class Meetings {
    async allMeetings() {
        return await await meetings.findAll();
    }
    async findMeetingByID(data) {
        return await meetings.findOne({where: {id: data.id}});
    }
    async delMeetingByID(data) {
        return await meetings.destroy({where: {id: data.id}});
    }
    async addMeeting(data) {
        return await meetings.create( 
            {
                topic: data.topic,
                tag: data.tag,
                date: data.date,
                place: data.place,
            });
    }
    async updateMeetingInfo(data) {
        console.log(data)
        return await meetings.update(
            {
                topic: data.topic,
                tag: data.tag,
                date: data.date,
                place: data.place,
            },
            { where: { id: data.id } }
        );
    }
}

module.exports = new Meetings();