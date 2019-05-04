var inquirer = require("inquirer");
var mysql = require("mysql");


// CREATION CONNECTION INFORMATION FOR SQL DATABASE
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

//  INCLUDE PASSWORD FOR MYSQL AND DATABASE PATH
  password: "password",
  database: "Bamazon"
});

// CONNECT TO SQL SERVER/DATABASE
connection.connect(function(err) {
  if (err) throw err;

  // FUNCTION TO START APP
  runBamazon();
});

// FUNCTION TO PRINT LIST DISPLAY FOR PURCHASE
function runBamazon() {
  connection.query("SELECT * FROM products", function(err, res) {
    console.log(
      "--------------------- WELCOME TO BAMAZON! ---------------------"
    );
    for (var i = 0; i < res.length; i++) {
      console.log(
        "ID: " +
          res[i].item_id +
          " : " +
          "Product: " +
          res[i].product_name +
          " - " +
          "Price: $" +
          res[i].price
      );
    }
    console.log("---------------------------------------------------------------------------");

    // APP PROMPT TO USER WITH TWO MESSAGES
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "What is the ID of the product you would like to buy?"
        },
        {
          type: "input",
          name: "qty",
          message: "How many units of this product would you like to buy?"
        }
      ])
      .then(function(answer) {
        var custProduct = answer.id - 1;
        var prodQuantity = parseInt(answer.qty);
        var total = parseFloat(
          (res[custProduct].price * prodQuantity).toFixed(2)
        );

        //    Once the customer has placed the order, your application should check if your
        //    store has enough of the product to meet the customer's request.
        if (res[custProduct].stock_quantity >= prodQuantity) {

          // UPDATE SQL DATABSE TO FULFILL ORDER
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: res[custProduct].stock_quantity - prodQuantity
              },
              {
                item_id: answer.id
              }
            ],
            function(err, res) {
              if (err) throw err;
              console.log(
                "Your total is $" + total + ". Thanks for your order!"
              );
              reRun();
            }
          );
        } else {
          console.log("Insufficient quantity");
          reRun();
        }
      });
  });
}

// CONFIRM IF CUSTOMER WANTS TO PURCHASE ANOTHER ORDER
function reRun() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "reply",
        message: "Would you like to purchase another item?"
      }
    ])
    .then(function(answer) {
      if (answer.reply) {
        runBamazon();
      } else {
        console.log("Thanks for visiting BAMAZON!");
      }
    });
}
