const meetings = require("../models/meetings");

class Meetings {
    async meetings() {
        console.log(3)
        return await meetings.findAll();
    }
}

module.exports = new Meetings();