const fs = require("fs");

var util = require("../Utility/utility");
var list = fs.readFileSync("addressbook.json");
let namePattern = /^[a-z A-Z]{1,15}$/,
    addressPattern = /^[a-z A-Z/d]{1,40}$/,
    zipPattern = /^[0-9]{6}$/,
    numberPattern = /^\d{10}$/;
var object = JSON.parse(list);

class Address {
    constructor() {

    }

    create() {
        console.log(object);
        console.log("Enter first name(Max. 15 characters):");
        let firstName = util.inputString();
        if (firstName == false || namePattern.test(firstName) == false) {
            console.log("Enter character properly");
            return;
        }
        console.log("Enter last name(Max. 15 characters):");
        let lastName = util.inputString();
        if (lastName == false || namePattern.test(lastName) == false) {
            console.log("Enter character properly")
        }

        for (let i = 0; i < object.list.length; i++) {
            let name = object.list[i].firstName.toLowerCase();
            let last_name = object.list[i].lastName.toLowerCase();
            if (name == firstName)
                if (lastName == last_name) {
                    console.log("Entered name already present.");
                    return false;
                }
        }
        console.log("Enter address(Max. 40 characters):");
        let address = util.inputString();
        if (address == false || addressPattern.test(firstName) == false) {
            console.log("Enter character properly")
        }
        console.log("Enter City(Max. 30 characters):");
        let city = util.inputString();
        if (city == false || namePattern.test(city) == false) {
            console.log("Enter character properly")
        }
        console.log("Enter State(Max. 30 characters):");
        let state = util.inputString();
        if (state == false || namePattern.test(state) == false) {
            console.log("Enter character properly")
        }

        console.log("Enter Zip(Should be 6 digits):");
        let zip = util.inputInt();
        if (zip == false || zipPattern.test(zip) == true) {
            console.log("Enter character properly")
        }

        console.log("Enter Phone(Min. 10 digits):");
        let phone = util.inputInt();
        if (phone == false || numberPattern.test(phone) == true) {
            console.log("Enter character properly")
        }
        object.list.push({ firstName, lastName, address, city, state, zip, phone });
        console.log("Record created");
        var sortList = object.list.sort((a, b) => {
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
                return 1;
            else if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
                return -1;
            else
                return 0;
        });
        fs.writeFileSync("addressbook.json", JSON.stringify(object));
        console.log(sortList);
    }

    view() {
        console.log(object);
        console.log("Enter the first name of Profile which you want to view");
        let name = util.inputString(), viewed = false;
        for (let i = 0; i < object.list.length; i++) {
            if (name == object.list[i].firstName) {
                console.log(object.list[i]);
                viewed = true;
                break;
            }
        }

        if (!viewed)
            console.log("Profile not found. Please create the profile.")
    }

    update() {
        console.log(object);
        console.log("Enter the first name of Profile which you want to update");
        let name = util.inputString();
        for (let i = 0; i < object.list.length; i++) {
            if (name == object.list[i].firstName) {
                console.log("Choose the detail you want to update:");
                console.log("1.Address\n2.City\n3.State\n4.Zip Code\n5.Phone\n6.Main Menu");
                let choice = util.inputInt();
                switch (choice) {
                    case 1:
                        console.log("Enter the address");
                        let address = util.inputString();
                        if (address == false || addressPattern.test(firstName) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].address = address;
                        console.log(object.list[i]);
                        break;
                    case 2:
                        console.log("Enter the city");
                        let city = util.inputString();
                        if (city == false || namePattern.test(city) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].city = city;
                        console.log(object.list[i]);
                        break;
                    case 3:
                        console.log("Enter the state");
                        let state = util.inputString();
                        if (state == false || namePattern.test(state) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].state = state;
                        console.log(object.list[i]);
                        break;
                    case 4:
                        console.log("Enter the zip code");
                        let zip = util.inputInt();
                        if (zip == false || zipPattern.test(zip) == true) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].zip = zip;
                        console.log(object.list[i]);
                        break;
                    case 5:
                        console.log("Enter the phone number");
                        let phone = util.inputInt();
                        console.log(numberPattern.test(phone));
                        if (phone == false || numberPattern.test(phone) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].phone = phone;
                        console.log(object.list[i]);
                        break;
                    case 6:
                        return false;
                    default:
                        console.log("Entered wrong choice");
                        break;
                }

            }
        }
        fs.writeFileSync("addressbook.json", JSON.stringify(object));
    }

    delete() {
        console.log(object.list);
        console.log("Enter the first name of Profile which you want to delete");
        let name = util.inputString();
        for (let i = 0; i < object.list.length; i++) {
            if (object.list[i].firstName == name) {
                delete object.list[i];
                console.log("Profile has been deleted");
                object.list = object.list.filter((el) => {
                    return el != null;
                });
                fs.writeFileSync("addressbook.json", JSON.stringify(object));
                return;
            }
        }
        console.log("Profile not found");
    }
}

var address = new Address(),
    i = 0;

while (i == 0) {
    console.log("WELCOME TO ADDRESS BOOK PROGRAM");
    console.log("1.Create Address\n2.View Address\n3.Update Address Details\n4.Delete Address\n5.Exit");
    let choice = util.inputInt();

    switch (choice) {
        case 1:
            address.create();
            break;
        case 2:
            address.view();
            break;
        case 3:
            address.update();
            break;
        case 4:
            address.delete();
            break;
        case 5:
            i++;
            break;
        default:
            console.log("Incorrect choice.")
            break;

    }
}