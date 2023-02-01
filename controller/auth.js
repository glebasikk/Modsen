const authService = require("../service/auth");
//const validator = require("express-validator");
const registrationAndAuthDTO = require("../dto/registrationAndAuthDTO")
const Response = require("../help/Response");
const PreconditionFailed = require("../errors/PreconditionFailed");
const { registrationAndAuthValidation } = require("../midleware/validator")


class Auth {
    async registration(req, res, next) {
        try {
            let data = registrationAndAuthDTO(req.body) 
            let validation = await registrationAndAuthValidation.validateAsync(data)
            let response = await authService.registration(data);
            return res.json(new Response("200", "registration complete"));
        } catch (e) {
            if(e.isJoi == true){
                e.status = 422
            }
            next(e);
        }
    }
    async login(req, res, next) {
        try {
            // const err = validator.validationResult(req);
            // if (!err.isEmpty()) {
            //     throw new PreconditionFailed("invalid input values ");
            // }
            let data = registrationAndAuthDTO(req.body) 
            let validation = await registrationAndAuthValidation.validateAsync(data)
            let response = await authService.login(data);
            return res.json(response);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

module.exports = new Auth();
