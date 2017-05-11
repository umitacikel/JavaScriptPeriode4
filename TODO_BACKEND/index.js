const express = require("express");
const app = express();
const db = require("./db");
const url = "mongodb://toDoUser:Hest@:19588/todo";
const api = require("./api");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var numberToBeEdited = 99; // Start value 99

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser());
app.use("/api", api);

app.listen(3000, ()=>{

    console.log("Server started on port 3000...");
    db.connect(url, function(err){

        if(err){

            console.log("Connection failed..");
        }
        else {

            console.log("Connected to DB..");

        }
    });
});
