
var fs = require('fs');
var Utility = require("../Utility/utility");
var obj = fs.readFileSync("company.json");
var obj1 = fs.readFileSync("user.json");
var company = JSON.parse(obj);
var user = JSON.parse(obj1);
var readLine = Utility.input();
class stockAccount {
    constructor() {

        
        this.totalprice = 0;
    }
    valueof = () => {
        console.log(user);
        for (let i = 0; i < user.stocks.length; i++) {
            
            this.totalprice += user.stocks[i].shares;
            console.log(this.totalprice);
        }
    }

    buy = () => {
        console.log(user);
        console.log(company);
        console.log("Enter the name of shares");
        var company_name = Utility.inputString();
        
        if (!company_name == true) {
           
            return;
        }
        console.log("Enter the number of shares");
        var shares = Utility.inputInt();
        if (shares == false) {
            return;
        }
        for (let i = 0; i < company.shares.length; i++) {
            if (company.shares[i].company_name == company_name && company.shares[i].shares > shares) {
                var quantity = shares;
                company.shares[i].shares = company.shares[i].shares - quantity;
                let price = company.shares[i].price;
                user.stocks.push({ company_name, shares, price });

            }
        }
       
    }

    sell = () => {
        console.log(user);
        console.log(company);
        console.log("Enter the name of shares");
        var company_name = Utility.inputString();
        if(company_name==false)
        {
            return;
        }
        
        console.log("Enter the number of shares");
        var shares = Utility.inputInt();
        if (shares == false) {
            return;
        }
        for (let i = 0; i < user.stocks.length; i++) {
            if (user.stocks[i].company_name == company_name && user.stocks[i].shares > shares) {
                var quantity = shares;
                user.stocks[i].shares = user.stocks[i].shares - quantity;
            }
        }
        console.log(company);
        console.log(user);
        for (let i = 0; i < company.shares.length; i++) {
            if (company.shares[i].company_name == company_name && company.shares[i].shares > shares) {
                var quantity = shares;
                company.shares[i].shares = company.shares[i].shares + quantity;
                
            }
        }
        


    }
    save=()=>
    { 
        fs.writeFileSync("finalreport.json",JSON.stringify(user));
        console.log("file is created");
    }
    print=()=>
    {
        console.log(user);
        console.log(company);

    }

}
module.exports={
    stockAccount
}