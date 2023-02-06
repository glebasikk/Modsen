const meeting = require("../models/meetings");

class Meeting {
    async allMeetings() {
        return await await meeting.findAll();
    }
    async allFilteredmeetings(data,params) {
        return await await meeting.findAll({
            where: data,
            order: params});
    }
    async findMeetingByID(data) {
        return await meeting.findOne({where: {id: data.id}});
    }
    async delMeetingByID(data) {
        return await meeting.destroy({where: {id: data.id}});
    }
    async addMeeting(data) {
        return await meeting.create( 
            {
                topic: data.topic,
                tag: data.tag,
                date: data.date,
                place: data.place,
            });
    }
    async updateMeetingInfo(data) {
        return await meeting.update(
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

module.exports = new Meeting();