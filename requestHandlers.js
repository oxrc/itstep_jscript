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
function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
}

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



exports.start = start;
exports.interests = interests;
exports.getUsers = getUsers;
exports.addInterests = addInterests;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
