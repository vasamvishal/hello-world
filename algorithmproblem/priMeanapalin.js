var Utility=require('../../Utility/programs/utility');
var readline=Utility.input();
var str=readline.question('enter the number');
var increment=Utility.prime(str);
let array=increment.split(' ');
console.log(array);

Utility.palindrome(array);

function Anagram1(array)
{
    
for(var i=2;i<array.length;i++)
{
for(var j=i+1;j<array.length;j++)
{
if(Utility.Anagram1(array[i],array[j]))
{
console.log(array[i]+" "+array[j]+" are anagrams");	
}
}
}
}
Anagram1(array);

    
        

    

      