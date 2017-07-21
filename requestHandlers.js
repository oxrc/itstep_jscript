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

//Add interes.
function addInterests(response, request) {
    var query = url.parse(request.url).query;
    var queryObject = queryString.parse(query);
   
    var dbQuery = "INSERT INTO interests_list (i_name) VALUES ('" + queryObject['interest'] + "')";
    console.log(dbQuery);
    var stmt = db.prepare(dbQuery);
    stmt.run();  
    stmt.finalize();  
    console.log("Request handler 'addInterest' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Add interes");
    response.end();
}


function addUser(response, request) {
    var query = url.parse(request.url).query;
    var queryObject = queryString.parse(query);
    var dbQuery = "INSERT INTO users (name,age,phone) VALUES";
    var dbQueryLastID = "SELECT MAX(id) as id FROM users";
    
    if(queryObject.name != undefined && name != ""){
        var name = queryObject.name;
        dbQuery += "(" + "'" + name + "',"; 
    }
    else{
        
    }
    if (queryObject.age != undefined && age != "") {
        var age = queryObject.age;
        dbQuery += age + ",";  
    }
    else if(queryObject.age == undefined || age == ""){
         var age = 0;
         dbQuery += age + ",";
    }
    if (queryObject.phone != undefined && phone != "") {
        var phone = queryObject.phone;
        dbQuery += phone; 
    }
    else if(queryObject.phone == undefined || phone == ""){
         var phone = 0;
         dbQuery += phone + ",";
    }
    dbQuery += ")";
    
    var stmt = db.prepare(dbQuery);
    stmt.run();  
    stmt.finalize();

        var interests_arr =  queryObject.interests.split(",").map(function(element){
        return parseInt(element,10);
     });
    
    db.get(dbQueryLastID, function(err,row){
        id = row.id;
        var kol = interests_arr.length;
        var interest;
        
        var stmt = db.prepare("Insert into interests (uid, int_id) values (?,?)");
        for (var i = 0; i < kol; i++) {
            stmt.run(id,interests_arr[i]);
        }
        stmt.finalize;
    });  
    console.log("Request handler 'addInterest' was called.");
    console.log("Tat normal");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Add user");
    response.end();
}

function deleteUser(response, request){
    var query = url.parse(request.url).query;
    var queryObject = queryString.parse(query);
    var id = queryObject.id;
    var dbQuery = "DELETE FROM users where id = ?";
    var dbQueryInterests = "DELETE FROM interests where uid = ?";

    var stmt = db.prepare(dbQuery);
    stmt.run(id);
    stmt.finalize();
    console.log(stmt);

    var stmtI = db.prepare(dbQueryInterests);
    stmtI.run(id);
    stmtI.finalize();
    console.log(stmtI);

    console.log("GG WP");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Add user");
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



function upload(response) {
  console.log("Request handler 'upload' was called.");

  response.json({ status: "success", message: "Upload completed." });
}

exports.start = start;
exports.interests = interests;
exports.addInterests = addInterests;
exports.getUsers = getUsers;
exports.upload = upload;