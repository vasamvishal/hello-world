var Utility=require("../programs/utility");
var readline=Utility.input();
var src=require('../programs/deque');
var array=readline.question("enter your number");
if(array==undefined||array==null||!isNaN(array))
{
 console.log("please enter a string");
}

if(palin(array)==false)
{
console.log("not an string");
}
else
{
console.log("is a string");
}
palin=(array)=>{
console.log(array);
var queue=new src.Deque();
for (let i = 0; i < array.length; i++) 
{    
 queue.addRear(array[i]);
}
console.log(queue.printQueue());

while (queue.size() > 1  )
{
let first = queue.removeFront();
let last = queue.removeRear();   
if (first !== last) 
 {
    return false;
 }
}
return true;
}
 










