const tags = require("../models/tags");

class Tags {
    async tags() {
        console.log(3)
        return await tags.findAll();
    }
}

module.exports = new Tags();