const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

const notesController = require("./controllers/notesController");
app.use(notesController);

const apiController = require("./controllers/apiController");
app.use(apiController);

app.listen(3001, function() {
    console.log("Server Started on Port 3001");
})