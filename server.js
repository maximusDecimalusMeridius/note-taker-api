const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.listen(3001, function() {
    console.log("Server Started on Port 3000");
})