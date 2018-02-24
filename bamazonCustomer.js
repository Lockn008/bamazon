var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Aero$334",
	database: "bamazon"
});

function connect() {
	connection.connect(function(err) {
		if (err) throw err;
		console.log("connected as id " + connection.threadId);
		queryProducts();
		connection.end();
	});
};

function queryProducts() {
	connection.query("SELECT * FROM products", function(err, res) {
		console.log("item id  |  product name  |  price");
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
		}
	console.log("----------------------------------------------------");
	userRequest();
	});

};

function userRequest() {
	var id = "";
	var price = 0;
	inquirer.prompt([
		{
			type: "input",
			message: "What would you like to purchase? (enter item id)",
			name: "itemid"
		},
		{
			type: "input",
			message: "How Many would you like to purchase?",
			name: "itemquantity"
		}
	]).then(function(response) {
		id = response.itemid;
		console.log(id);
		quantity = response.itemquantity;
		connection.query("SELECT * FROM products;" /*WHERE item_id=?;", [id]*/, function(err, response) {
			console.log(response);
		});
	});

	// connection.query("INSERT INTO (itemname, price) VALUES (?,?);", [name, price], function(err, res) {

	// });
};

connect();