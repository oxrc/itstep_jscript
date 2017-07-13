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

function interests(response) {
    var interestsList = {};

    db.all("SELECT i_id, i_name from interests_list", function(err, rows) {
        for (row in rows) {
            interestsList[rows[row].i_id] = rows[row].i_name;
        }
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(interestsList));
        response.end();
    });

}

function addInterests(response, request) {
    var query = url.parse(request.url).query;
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
}

function getUsersCount(response, request) {
    db.get("SELECT count(id) as count FROM users", function(err, row) {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(row));
        response.end();
    });
}

function getUsersByParameters(response, request) {
    var query = url.parse(request.url).query;
    var object = queryString.parse(query);
    query_interests = "u.id = i.uid AND i.int_id = il.i_id";
    query = "SELECT DISTINCT u.id FROM users u, interests_list il, interests i WHERE " + query_interests;

    if (typeof object.name !== 'undefined' && object.name !== '') {
        query += ' AND u.name LIKE "%' + object.name + '%"';
    }
    if (typeof object.age !== 'undefined' && object.age !== '') {
        query += " AND u.age =" + object.age;
    }
    if (typeof object.phone !== 'undefined' && object.phone !== '') {
        query += " AND u.phone =" + object.phone;
    }
    if (typeof object.interests !== 'undefined' && object.interests !== '') {

        var arrayInterests = (object.interests).split(',');

        query += " AND i.int_id IN (" + arrayInterests + ")";
    }
    db.all(query, function(err, rows) {
        var ids = [];
        for (row in rows) {
            ids.push(rows[row].id);
        }
        getUsersById(response, ids);
    });

}

function getUsersById(response, ids) {
    var query = "SELECT u.id, u.name, u.age, u.phone, group_concat(i.int_id, ',') as interests" +
        " FROM users u, interests i WHERE u.id = i.uid AND u.id IN (" + ids + ") GROUP BY u.id";
    var users = [];
    db.all(query, function(err, rows) {
        for (row in rows) {
            var userData = {};
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

function getUsersById(response, request) {

    var query = url.parse(request.url).query;
    var object = queryString.parse(query);

    var query = "SELECT u.id, u.name, u.age, u.phone, group_concat(i.int_id, ',') as interests" +
        " FROM users u, interests i WHERE u.id = i.uid AND u.id = " + object.id;
    db.get(query, function(err, row) {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(row));
        response.end();
    });
}


exports.start = start;
exports.getUsersById = getUsersById;
exports.interests = interests;
exports.getUsersCount = getUsersCount;
exports.getUsers = getUsers;
exports.addInterests = addInterests;
exports.getUsersByParameters = getUsersByParameters;