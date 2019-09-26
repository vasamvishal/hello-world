
var fs = require('fs');

var Utility = require("../Utility/utility");
var src = require("./stockSelling");
var i = 0;
let stock = new src.stockAccount();
while (i == 0) {
    console.log("Stock example");
    
    console.log("enter 1 for value of each shares");
    console.log("enter 2 for buy the shares");
    console.log("enter 3 for sell the stock");
    console.log("enter 4 for saving the stocks");
    console.log("enter 5 for printing the stock");
    console.log("enter 6 for exit");
    console.log("enter the options given above");

    let choice = Utility.inputInt();
    switch (choice) {
        case 1: stock.valueof();
            break;
        case 2: stock.buy();
            break;
        case 3: stock.sell();
            break;
        case 4: stock.save();
            break;
        case 5: stock.print();
            break;
        case 6: i++;
            console.log("Exit");
            break;
        default:
            console.log("wrong input");
            return;
    }
}
