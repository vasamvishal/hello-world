
var Utility=require("../programs/utility");
var readline=Utility.input();
var src=require('../programs/Queue');
var str=1000;
var increment=Utility.prime(str);
var array=increment.split(' ');
console.log(array);
var string='';
for(var i=2;i<array.length;i++)
{
for(var j=i+1;j<array.length;j++)
{

if(Utility.Anagram(array[i],array[j])==false)
{

}
else{
    string=string+array[i]+" "+array[j]+" ";
    
    console.log(array[i]+" "+array[j]+" are anagrams");	
}
}
}
    var array=string.split(" ");
    console.log(array);
let Queue=new src.Queue();
for(let i=0;i<array.length;i++)
{
 Queue.enqueue(array[i]);
}

 Queue.printQueue();
