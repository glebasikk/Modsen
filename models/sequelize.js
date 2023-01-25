const Sequelize = require("sequelize");
const sequelize = new Sequelize("meeting", "postgres", "12345", {
    dialect: "postgres",
    host: "localhost",
    port: "5432",
    define: {
        timestamps: false,
    },
    
});


// sequelize.sync().then(result=>{
//     console.log(1);
//   })
//   .catch(err=> console.log(2));

module.exports = sequelize;
