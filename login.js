var sqlite3 = require('sqlite3').verbose();
var file = "./usersdb";

var url = require('url');
var queryString = require('querystring');
var bcrypt = require('bcrypt');
// var db = new sqlite3.Database(file);
var users = [
    { login: 'Anton', password: 'step1' },
    { login: 'Andrei', password: 'step2' },
    { login: 'Alexandr', password: 'step3' },
    { login: 'Anton', password: 'step4' },
    { login: 'Cristin', password: 'step5' },
    { login: 'Victor', password: 'step6' },
    { login: 'Radu', password: 'step0' }
];

// function getUsersHashPassword(users) {
//     for (var i = 0; i < users.length; i++) {
//         let hash = bcrypt.hash(users[i].password, 10);
//         users[i].password = hash;
//     }
//     return users;
// }

function getConnectionObject() {
    var db = new sqlite3.Database(file);
    db.get(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='login_data'",
        function(err, row) {
            if (!row.name) {
                db.run("CREATE TABLE login_data (uid integer not null, user_login varchar not null, password varchar not null)",
                    function(err, res) {
                        if (err) {
                            return console.error(err.message);
                        }
                        for (var i = 0; i < users.length; i++) {
                            let hash = bcrypt.hash(users[i].password, 10);
                            var query = "INSERT INTO login_data (user_login, password) VALUES (" + users[i].login + "," + hash + ")";
                            db.run(query, function(err) {
                                if (err) {
                                    return console.error(err.message);
                                }
                            });
                        }
                        return db;
                    });
            } else {
                return db;
            }
        });
}

function loginUser(response, request) {
    var db = getConnectionObject();
    var data;
    if (request.method == "POST") {
        var body = '';
        request.on('data', function(data) {
            body += data;
        });
        request.on('end', function() {
            data = queryString.parse(body);
        });
    } else if (request.method == "GET") {
        var query = url.parse(request.url).query;
        data = queryString.parse(query);
    }
    var query = "SELECT uid, user_login, password FROM login_data WHERE login=" + data.login;
    db.get(query, function(err, res) {
        var responce;
        if (err) {
            var message = "Wrong login";
            return console.error(message);
        }
        if (data.password != res.password || bcrypt.compareSync(data.password, res.password)) {
            responce = false;
        } else {
            responce = true;
        }
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(responce));
        response.end();
    });

}

exports.loginUser = loginUser;