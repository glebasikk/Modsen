const meetings = require("./meetings");
const tags = require("./tags");


meetings.hasMany(tags, {
    foreignKey: "tag",
    sourceKey: "id",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
});
tags.belongsTo(meetings);

