const fs = require('fs') 
fs.readFile('input.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
    console.log(data); 
    var arr=data.split(' ');
 console.log(arr);
 
var Utility=require('../../Utility/programs/utility');
  var readline=Utility.input();
  arr.sort();
console.log(arr);
 var x =readline.question("enter the string to be entered");
 console.log(x);


 if(Utility.binarysearch(arr,x,0,arr.length-1)==true)
 {
    console.log("element found ");
 }
 else{
     console.log("not found");

 }
 
});

