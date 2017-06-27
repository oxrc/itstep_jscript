var exec = require("child_process").exec;
var sqlite3 = require('sqlite3').verbose();
var file = "./usersdb";
console.log(file);
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

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;