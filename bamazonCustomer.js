
var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazo_db"
});

connection.connect(function (err) {
    if (err) throw err;
    showallitems(); 
});

function showallitems() {
    connection.query("SELECT * FROM bamazo_db.products", function (err, res) {
        if (err) throw err;
       for (var i = 0; i < res.length; i++) {
        console.log("Item ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name+ " || Price: " + res[i].price);
      }
    })
};
