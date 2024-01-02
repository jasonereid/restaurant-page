const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
app.use("/images",express.static('images'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log("server listening on port " + port);
});