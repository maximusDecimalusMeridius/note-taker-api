const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

const notesController = require("./controllers/notesController");
app.use(notesController);

const apiController = require("./controllers/apiController");
app.use("/api/notes", apiController);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.listen(3001, function() {
    console.log("Server Started on Port 3001");
})