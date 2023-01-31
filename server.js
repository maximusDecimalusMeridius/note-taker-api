//bring in express, path, and dotenv dependencies, create app object
const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

//set port to process.env.PORT for heroku port if it exists, otherwise assign to 3000
const port = process.env.PORT || 3000;

//express methods used - json, urlencoded, static
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//declare notes controller for routing notes requests
const notesController = require("./controllers/notesController");
app.use(notesController);

//declare notes controller for routing notes requests
const apiController = require("./controllers/apiController");
app.use("/api/notes", apiController);

//wildcard GET method routing /*anything* to index.html
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

//server is listening on heroku port or 3000 as declared above
app.listen(port, function() {
    console.log(`Server Started on Port ${port}`);
})