

var Utility = require('../../Utility/programs/utility'); 
var readline = Utility.input();
var goal=readline.question("enter the no.of goal");
var stack=readline.question("enter the no of cash you have");
var n =readline.question("enter the no of turns u want to play");
Utility.Gambler(goal,stack,n);













