var exec = require("child_process").exec;
var sqlite3 = require('sqlite3').verbose();
var file = "./usersdb";

var db = new sqlite3.Database(file);

function start(response) {
    console.log("Request handler 'start' was called.");
    db.each("SELECT * from users u", function(err, row) {
        console.log(row.id, row.name, row.age, row.phone)
    });
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("rows");
    response.end();
}

function interests(response) {
    console.log("Request handler 'interests' was called.");
    var interestsList = {};


    db.all("SELECT i_id, i_name from interests_list", function(err, rows) {
        for (row in rows) {
            console.log(rows[row].i_id);
            interestsList[rows[row].i_id] = rows[row].i_name;
        }
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(interestsList));
        response.end();
    });

}

function add_interests(response, param) {
    console.log("Function 'add_interests' was called.");
        
        var stmt = db.prepare("INSERT INTO interests VALUES (NULL,"+param+")");
        stmt.run();  
        stmt.finalize();  
        
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write("OK");
        response.end();
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.interests = interests;
exports.upload = upload;