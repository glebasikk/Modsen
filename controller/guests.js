const guest = require("../service/guests");
const addGuestDTO = require("../dto/addGuestDTO");
const Response = require("../help/Response");
const {addGuestValidator} = require("../midleware/validator")

class Meeting {
    async addGuest(req, res, next) {
        try {
            let data = addGuestDTO(req.body)
            console.log(data)
            let validator = await addGuestValidator.validateAsync(data)
            validator
            let result = await guest.addGuest(data);
            result
            return res.json(new Response("200", "User added to this meeting"));
        } catch (e) {
            if(e.isJoi ==true){
                e.status = 422
            }
            next(e);
        }
    }
}   
module.exports = new Meeting();
