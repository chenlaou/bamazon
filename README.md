# **AMAZON CLI APP**
### CREATED BY CHENLA OU [MAY 2019]
An Amazon-like CLI app storefront using MySQL and Node. The app will take in orders from customers and deplete stock from the store's inventory.

## **OVERVIEW**

This is a basic overview of how this app works with instructions on how to run this in your own terminal.

## **Required NPM Packages**
```
MySQL
Inquirer
```

* First step - is to install `required NPM packages`.
* Next, User will run **`bamazonCustomer.js`** in their terminal which will print a list a list of all products including ID Number, Product Name and Price.
```
node bamazonCustomer.js
```
![Results](/images/list2.png)

* List displayed followed by a prompts for the user.
![Results](/images/prompt1.png)
* User should input a `product id` number.
* User will then be asked to `input quantity`.
![Results](/images/prompt2.png)
* If the product qunatity is available user will get `total cost.`
![Results](/images/total.png)
* If the product qunatity is not available user will get a `message`.
![Results](/images/toomuch.png)

* User will then have the option to purchase another item which will restart the app or they can select 'n' to complete their order.
![Results](/images/no.png)

