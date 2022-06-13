const express = require("express");
const app = express();

app.use("/static", express.static("public"));
//added a /static url path to my web server (app) when hit, it will run our public folder

const localPort = 5001;
app.listen(localPort, () => {
    console.log(`Listening On Port: ${localPort}`);
})