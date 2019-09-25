const Utility = require("../Utility/utility");
var readLine = Utility.input();
class Stock {
    constructor() {
        this.items = [];
        this.result = 0;
    }

    stockcalculator = () => {
        let validationRule = /^\s{1,}$/;
        var number = parseInt(readLine.question("enter the no of stocks"));
        if (isNaN(number) || validationRule.test(number) == true) {
            console.log("Value is undefined");
            return false;
        }
        for (let i = 0; i < number; i++) {

            var stock_name = readLine.question("enter the name of stocks");
            if (!isNaN(stock_name) || validationRule.test(stock_name) == true) {
                console.log("Value is undefined");
                return false;
            }
            var no_of_shares = readLine.question("enter the no of shares");
            if (isNaN(no_of_shares) || validationRule.test(no_of_shares) == true) {
                console.log("Value is undefined");
                return false;
            }
            var share_price = readLine.question("enter the price of shares");
            if (isNaN(share_price) || validationRule.test(share_price) == true) {
                console.log("Value is undefined");
                return false;
            }
            this.items.push({ stock_name, no_of_shares, share_price });
            var value_price = no_of_shares * share_price;
            console.log(`The value price of ${stock_name} is ${value_price}`);
            stock.add(value_price);
        }
        console.log(this.items);
        console.log(this.result);
    }

    add(value_price) {

        this.result += value_price;

    }
}

var stock = new Stock();
stock.stockcalculator();

