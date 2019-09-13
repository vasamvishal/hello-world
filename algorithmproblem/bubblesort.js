var Utility=require('../../Utility/programs/utility');
var readline=Utility.input();
var row=readline.question("Enter the row you want to enter");
var col=readline.question("Enter the col you want to enter");
var arr=Utility.array1D(row);
console.log(arr);
Utility.bubbleSort(row,col,arr);


 
