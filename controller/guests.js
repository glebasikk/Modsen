const guest = require("../service/guests");

const addGuestDTO = require("../dto/addGuestDTO");

const {addGuestValidator} = require("../midleware/validator")



class Meetings {
    async addGuest(req, res, next) {
        try {
            
            let data = addGuestDTO(req.body)
            
            //let validator = await addMeetingValidation.validateAsync(data)
            let result = await guest.addGuest(data);
            return res.status(200).json(result);
        } catch (e) {
            if(e.isJoi ==true){
                e.status = 422
            }
            next(e);
        }
    }
}   
module.exports = new Meetings();
