var fs = require('fs');
var Utility = require("../Utility/utility");


var abc = require("./ll");
var node = new abc.LinkedList();
var i = 0;
while (i == 0) {
    console.log("Stock example");
    console.log("enter 1 to enter in linkedlist");
    console.log("enter 2 to delete from linkedlist");
    console.log("enter the options given above");

    let choice = Utility.inputInt();
    switch (choice) {

        case 1:
            console.log("enter the company name");
            var company_name = Utility.inputString();
            console.log("enter the share ");
            var shares = Utility.inputInt();
            console.log("enter the price");
            var price = Utility.inputInt();
            node.insertAtElement({ company_name, shares, price });

            break;

        case 2:
            console.log("enter the company name");
            var company_name = Utility.inputString();
            console.log("enter the share ");
            var shares = Utility.inputInt();
            console.log("enter the price");
            var price = Utility.inputInt();

            node.deleteElement(company_name, shares, price);

        case 3:
            fs.writeFileSync("ll.json", JSON.stringify(node));
            break;


    }



}
