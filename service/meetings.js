const meetings = require("../repository/meetings");


class Meetings {
    async all() {
        console.log(21212121)
        return await meetings.meetings();
    }
}

module.exports = new Meetings();