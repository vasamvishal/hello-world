var Utility=require('../../Utility/programs/utility');
var readline=Utility.input();
let arr=[1,2,3,4,5];
var start=0;
console.log(start);
var end=arr.length-1;
console.log(end);
let x=readline.question("enter the number you want to search");
console.log(arr);
if(Utility.binarysearch(arr,x,start,end)===true)
{
    console.log("element "+x+" is at position ");
}

if(Utility.binarysearch(arr,x,start,end)===false)
{console.log("element not found");
}



 