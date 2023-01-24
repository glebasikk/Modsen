const express = require("express");
const app = express();

async function start() {
    app.listen(4000, () => {
        console.log(`Example app listening at http://localhost:${4000}`);
    });
   
}



start();
