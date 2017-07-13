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

// Get the list of all users.
function getUsers(response, request) {
    var users = [];
    var query = url.parse(request.url).query;
    var object = queryString.parse(query);
    var offset;
    if (object['page'] == null || object['page'] == 1) {
        offset = 0;
    } else {
        offset = object['page'];
    }
    var dbQuery = "SELECT u.id, u.name, u.age, u.phone, GROUP_CONCAT(i.int_id, ',') AS interests FROM users u, interests i WHERE u.id = i.uid GROUP BY u.id LIMIT 5 OFFSET " + offset;
    db.all(dbQuery, function(err, rows) {
        for (row in rows) {
            userData = {};
            userData['id'] = rows[row].id;
            userData['name'] = rows[row].name;
            userData['age'] = rows[row].age;
            userData['phone'] = rows[row].phone;
            userData['interests'] = rows[row].interests;
            users.push(userData);
        }

        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(users));
        response.end();
    });
}

// Get the list of all interests.
function interests(response) {
    console.log("Request handler 'interests' was called.");
    var interestsList = {};

    db.all("SELECT i_id, i_name from interests_list", function(err, rows) {
        for (row in rows) {
            interestsList[rows[row].i_id] = rows[row].i_name;
        }
        response.json(interestsList);
    });
}

//Add interes.
function addInterests(response, request) {
    var query = url.parse(request.url).query;
    var queryObject = queryString.parse(query);
   
    var dbQuery = "INSERT INTO interests_list (i_name) VALUES (" + "'" + queryObject['interest'] + "'" + ")";
     console.log(dbQuery);
    var stmt = db.prepare(dbQuery);
    console.log();
    stmt.run();  
    stmt.finalize();  
    console.log("Request handler 'addInterest' was called.");
    
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Add interest");
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
exports.addInterests = addInterests;
exports.getUsers = getUsers;
exports.upload = upload;