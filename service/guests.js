const guest = require("../repository/guests");
const PreconditionFailed = require("../errors/PreconditionFailed")

class Guest {
    async addGuest(data) {
        let check = await guest.findGuest(data)
        if (check != null){
            throw new PreconditionFailed("user exist");
        }
        console.log(check)
        return await guest.addGuest(data);
    }
}

module.exports = new Guest();