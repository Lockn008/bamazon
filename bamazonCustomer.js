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
		//connection.end();
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
		quantity = response.itemquantity;
		connection.query("SELECT * FROM products WHERE item_id=?;", [id], function(err, response) {
			if (err) throw err;
			if (quantity <= response.stock_quantity) {
				var updateQuantity = response.stock_quantity - quantity;
				connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?", [updateQuantity, id], function(err, res) {
					if (err) throw err;
					connection.end();
				});
			} else {
				console.log("Insufficient quantity in stock!");
				connection.end();
			};
		});
	});
};

connect();