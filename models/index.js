const meetings = require("./meetings");
const tags = require("./tags");
const users = require("./users");
const guests = require("./guests");

guests.hasMany(users, {
    foreignKey: "user_id",
    sourceKey: "id",
});
users.belongsTo(guests);


guests.hasMany(meetings, {
    foreignKey: "meeting_id",
    sourceKey: "id",
});
meetings.belongsTo(guests);