/** 
 * @description  variable is declared to use to acquire Utility class
 * @var {input} Utility
 */
var Utility = require("../Utility/utility");

var fs = require("fs");
/** 
 * @description  variable is declared to use to acquire input function
 * @const {input} readline
 */
var readline = Utility.input();
/** 
 * @description  variable is declared to used to readfilesync 
 * @var {input} obj
 */
var obj = fs.readFileSync("clinique.json");

/** 
 * @description  variable is declared to used to parse json file
 * @var {obj} object
 */
var object = JSON.parse(obj);
/** 
 * @description  variable is declared to use to acquire stockAccount class
 * @var {input} src
 */
var src = require("../Utility/oops/clinique");
/** 
 * @description  variable is declared to use to acquire stockAccount class
 * @var {input} clinique
 */
var clinique = new src.clinique(),
    i = 0;
//for doctor and patient 
while (i == 0) {
    console.log("Enter the choice");
    console.log("Enter 1 for Doctors");
    console.log("Enter 2 for Patient");
    console.log("Enter 3 for Appointment");
    console.log("Enter 4 for Exit")
    let choice = Utility.inputInt();
    switch (choice) {
        case 1: clinique.searchdoctor();
            break;
        case 2: clinique.searchpatient();
            break;
        case 3: clinique.appointment();
            break;
        case 4: i++;
            break;
        default: return;

    }
}