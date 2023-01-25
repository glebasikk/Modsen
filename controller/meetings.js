const meetings = require("../service/meetings");


class Meetings {
    async all(req, res, next) {
        try {
            let result = await meetings.all();
            console.log(result)
            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new Meetings();
