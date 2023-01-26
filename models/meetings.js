const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const meetings = sequelize.define("meetings", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    topic: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tag: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    place: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = meetings;
