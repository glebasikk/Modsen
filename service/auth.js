const userRepo = require("../repository/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secret } = require("../config");
const NotFound = require("../errors/NotFound");
const PreconditionFailed = require("../errors/PreconditionFailed");

const generateToken = (id, email, role) => {
    const payload = {
        id,
        email,
        role,
    };
    return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class Auth {
    async registration(data) {
        if ((await userRepo.findUserByUsername(data.username)) !== null) {
            throw new PreconditionFailed("user exist");
        }
        data.password = bcrypt.hashSync(data.password, 5);
        data.userRole = "user"
        return await userRepo.addUser(data);
    }
    async login(data) {
        if ((await userRepo.findUserByUsername(data.username)) == null) {
            throw new NotFound("user  does not exist");
        }
        const user = await userRepo.findUserByUsername(data.username);
        const validPassword = bcrypt.compareSync(data.password, user.password);
        if (!validPassword) {
            throw new NotFound("Incorrect password");
        }
        const token = generateToken(user);
        return { token };
    }
}

module.exports = new Auth();
