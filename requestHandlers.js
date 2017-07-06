var exec = require("child_process").exec;
var sqlite3 = require('sqlite3').verbose();
var file = "./usersdb";
var url = require('url');
var queryString = require('querystring');

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

function getUsers(response) {
    var users = [];

    db.all("SELECT u.id, u.name, u.age, u.phone, GROUP_CONCAT(i.int_id, ',') AS interests FROM users u, interests i WHERE u.id = i.uid GROUP BY u.id", function(err, rows) {
        for (row in rows) {
            userData = {};
            userData['id'] = rows[row].id;
            userData['name'] = rows[row].name;
            userData['age'] = rows[row].age;
            userData['phone'] = rows[row].phone;
            userData['interests'] = rows[row].interests;
            users.push(userData);
        }

        console.log(users);
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(users));
        response.end();
    });
}

function interests(response) {
    var interestsList = {};

    db.all("SELECT i_id, i_name from interests_list", function(err, rows) {
        for (row in rows) {
            // console.log(rows[row].i_id);
            interestsList[rows[row].i_id] = rows[row].i_name;
        }
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(interestsList));
        response.end();
    });

}

function add_interests(response, request) {
        var query = url.parse()
        console.log("Function 'add_interests' was called.");
        console.log();
        // var stmt = db.prepare("INSERT INTO interests VALUES (NULL,"+param+")");
        // stmt.run();  
        // stmt.finalize();  
        
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

function addInterests(response, request) {
    var query = url.parse(request.url).query;
    console.log(query);
    console.log("Request handler 'addInterest' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Add interest");
    response.end();
}

exports.start = start;
exports.interests = interests;

exports.getUsers = getUsers;
exports.addInterests = addInterests;
