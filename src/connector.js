
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "boosju3ql57abqxev3db-mysql.services.clever-cloud.com",
    user: "uvotrceyanldwtvr",
    password: "Tk2j0H9sCf9ZVYTOXTyi",
    database: "boosju3ql57abqxev3db",
    multipleStatements: true
});


con.connect(function (err) {
    if (err) return console.log("failed to connect to mysql server/ database", err);
    else return console.log("connection establish with Datebase!!!!");
});

module.exports = con;