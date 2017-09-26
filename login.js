var sqlite3 = require('sqlite3').verbose();
var file = "./usersdb";

var url = require('url');
var queryString = require('querystring');
var bcrypt = require('bcrypt');
var db = new sqlite3.Database(file);
var users = [
    { login: 'Anton', password: 'step1' },
    { login: 'Andrei', password: 'step2' },
    { login: 'Alexandr', password: 'step3' },
    { login: 'Anton', password: 'step4' },
    { login: 'Cristin', password: 'step5' },
    { login: 'Victor', password: 'step6' },
    { login: 'Radu', password: 'step0' }
];

function logoutUser(response, request) {
    var query = url.parse(request.url).query;
    data = queryString.parse(query);
    var responce = {};
    var query = "UPDATE login_data SET status = 0 WHERE uid =" + data.uid;
    db.run(query, function(err, res) {
        if (err) {
            responce.logout = "false";
        }
        responce.logout = "true";

    });
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(responce));
    response.end();
}

function loginUser(response, request) {
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

    var query = "SELECT * FROM login_data WHERE login=" + '"' + data.login + '"';
    db.get(query, function(err, res) {
        var responce = {};
        if (err) {

            responce.login = "false";
        }
        if (data.password === res.password || bcrypt.compareSync(data.password, res.password)) {
            var query = "UPDATE login_data SET status = 0 WHERE uid =" + res.uid;
            db.run(query, function(err, res) {
                if (err) {
                    return console.error(err.message);
                }
                responce.autorization = "true";

            });
        } else {
            responce.password = "false";
        }
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(responce));
        response.end();
    });

}



exports.loginUser = loginUser;