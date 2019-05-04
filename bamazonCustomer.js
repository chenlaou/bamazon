
var inquirer = require('inquirer');
var mysql = require('mysql');
// var Table = require('cli-table');


var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,


	user: 'root',

	// Your password
	password: 'password',
	database: 'Bamazon'
});

// PRINT LIST OF ITEMS 
function start(){
	connection.query('SELECT * FROM Bamazon.Products', function(err, res){
		if(err) throw err;
		console.log(' ')
		console.log('------------------------ ★★★★★  WELCOME TO BAMAZON ★★★★★ ---------------------------------------')
		console.log(' ')
	
		for(var i = 0; i<res.length;i++){
			console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
			console.log('--------------------------------------------------------------------------------------------------')
		}
	})
};

// ASK ID OF PRODUCT FOR USER TO BUY

// ASK HOW MANY UNITS FOR USER TO BUY

// CHECK TO SEE IF PRODUCT QUANITITY IS AVAILABLE 


start();
