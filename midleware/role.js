const { secret } = require("../config");
const jwt = require("jsonwebtoken");
const Forbidden = require("../errors/Forbidden");

module.exports = function (role) {
    return function (req, res, next) {
        try {
            console.log(req.headers.authorization)
            const token = req.headers.authorization.split(" ")[1];
            if (!token) {
                throw new Forbidden("access denied");
            }
            const { role: userRoles } = jwt.verify(token, secret);
            let hasRole = false;
            if (userRoles === role) {
                hasRole = true;
            }
            if (hasRole === false) {
                throw new Forbidden("access denied");
            }
            next();
        } catch (e) {
            console.log(e);
            next(e);
        }
    };
};
