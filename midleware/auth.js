const { secret } = require("../config");
const jwt = require("jsonwebtoken");
const Forbidden = require("../errors/Forbidden");

module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            throw new Forbidden("user not authorized");
        }
        const decodedData = jwt.verify(token, secret);
        req.body.token = token;
        req.body.userId = decodedData.id;
        req.body.email = decodedData.email;
        req.body.role = decodedData.role;
        next();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ message: "user not authorized" });
    }
};
