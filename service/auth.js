const userRepo = require("../repository/users");
const tokenGenerator = require("../midleware/tokenGenerator")
const bcrypt = require("bcrypt");
const NotFound = require("../errors/NotFound");
const Unauthorized = require("../errors/Unauthorized");
const BadRequest = require("../errors/BadRequest");


class Auth {
    async registration(data) {
        if ((await userRepo.findUserByUsername(data.username)) !== null) {
            throw new BadRequest("user exist");
        }
        data.password = bcrypt.hashSync(data.password, 5);
        data.userRole = "user"
        return await userRepo.addUser(data);
    }
    async login(data) {
        if ((await userRepo.findUserByUsername(data.username)) == null) {
            throw new NotFound("user does not exist");
        }
        const user = await userRepo.findUserByUsername(data.username);
        const validPassword = bcrypt.compareSync(data.password, user.password);
        if (!validPassword) {
            throw new Unauthorized("Incorrect password");
        }
        const token = tokenGenerator.generateToken(user);
        const refreshToken = tokenGenerator.generateRefreshToken(user)
        return { token, refreshToken};
    }
    async refreshToken(data) {
            if ((await userRepo.findUserByUsername(data.username)) == null) {
                throw new NotFound("user does not exist");
            }
            const user = await userRepo.findUserByUsername(data.username);
            const token = tokenGenerator.generateToken(user);
            const refreshToken = tokenGenerator.generateRefreshToken(user)
            return { token, refreshToken};
    }

}

module.exports = new Auth();
