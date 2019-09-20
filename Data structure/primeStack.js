
var Utility=require("../programs/utility");
var readline=Utility.input();
var src=require('../programs/stack');
var Utility=require('../../Utility/programs/utility');


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
     {}
     else
     {
      string=string+array[i]+" "+array[j]+" ";
      console.log(string);
      console.log(array[i]+" "+array[j]+" are anagrams");	
     }
   }
 }
    
var array=string.split(" ");
console.log(array);
let stack=new src.Stack();
console.log(array.length);
for(let i=0;i<array.length;i++)
 {
  stack.push(array[i]);     
 }
stack.showdata();



