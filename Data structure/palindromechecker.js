var Utility=require("../programs/utility");
var readline=Utility.input();
var src=require('../programs/deque');
var string=readline.question("enter the string");
if(Palin(string)==false)
{
console.log("not an string");
}
else
{
console.log("is a string");
}

function Palin(array) 
{
var queue=new src.Deque();
for (let i = 0; i < array.length; i++) 
{    
queue.addRear(array[i]);
}
console.log(queue.printQueue());

while (queue.size() > 1  )
{
var first = queue.removeFront();
var last = queue.removeRear();   
    if (first !== last) {
        return false;
    }
}
return t
}









