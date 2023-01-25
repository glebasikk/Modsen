const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const tags = sequelize.define("tags", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = tags;
