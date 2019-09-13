var Utility=require('../../Utility/programs/utility');
var readline=Utility.input();
var row=readline.question("Enter the row you want to enter");
var arr=Utility.array1D(row);
Utility.insertionSort(row,arr);