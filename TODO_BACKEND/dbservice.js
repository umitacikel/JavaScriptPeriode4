const connection = require("./db")
const ObjectId = require('mongodb').ObjectId;

function postNewProject(data, callback){

    let database = connection.get();
    let collection = database.collection("projects");
    collection.insertOne(data, function(err, data){

        if(err){

            console.log("The insert gave an error..");
            throw "Error! " + err;

        }
        else {

            let result = data.ops[0];
            console.log("Success! " + result);
            callback(result);

        }
    });
}

function getAllProjects(callback){

    let database = connection.get();
    let collection = database.collection("projects");


    collection.find({}).toArray(function (err, data){

        if(err){

            console.log("Could not find anything..");
            throw "Error!";
        }
        else {

            callback(data);
        }
    });
}

module.exports.postNewProject = postNewProject;
module.exports.getAllProjects = getAllProjects
module.exports.editProjects = editProjects;
