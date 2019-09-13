var Utility=require('../../programs/utility.js')
var readline=Utility.input();
var string1="Hello <<UserName>> How are you?";
console.log(string1);
var string2=readline.question("enter the name u have to change");
Utility.string(string1,string2);

