const { dialect,host,port } = require("../config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("meeting", "postgres", "12345", {
    dialect: dialect,
    host: host,
    port: port,
    define: {
        timestamps: false,
    },
    
});


// sequelize.sync().then(result=>{
//     console.log(1);
//   })
//   .catch(err=> console.log(2));

module.exports = sequelize;
