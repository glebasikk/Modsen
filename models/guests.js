const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const guests = sequelize.define("guests", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    meeting_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = guests;
