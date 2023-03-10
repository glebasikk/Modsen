const authService = require("../service/auth");
const registrationAndAuthDTO = require("../dto/registrationAndAuthDTO")
const Response = require("../help/Response");
const refreshTokenDTO = require("../dto/refreshTokenDTO");
const { 
    registrationAndAuthValidation,
    refreshTokenValidator 
} = require("../midleware/validator")

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
            let data = registrationAndAuthDTO(req.body) 
            let validation = await registrationAndAuthValidation.validateAsync(data)
            let response = await authService.login(data);
            return res.json(response);
        } catch (e) {
            if(e.isJoi ==true){
                e.status = 422
            }
            next(e);
        }
    }
    async refreshToken(req, res, next) {
        try {
            let data = refreshTokenDTO(req.body) 
            let validation = await refreshTokenValidator.validateAsync(data)
            let response = await authService.refreshToken(data);
            return res.json(response);
        } catch (e) {
            if(e.isJoi ==true){
                e.status = 422
            }
            next(e);
        }
    }
}

module.exports = new Auth();
