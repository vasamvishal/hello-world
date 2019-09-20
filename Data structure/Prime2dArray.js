var Utility=require('../programs/utility')
let row=10;
var array=new Array(row);
console.log(array);
prime =() =>
{
 var start=0;
 var end=99;
 var col=0;
while(end>1000)
{  

for(let i=start;i<end;i++)
{  
   if( Utility.isPrime(i)==true)
   {
   col++;
   }
 }
start=end+1;
end=end+100;
console.log(end);  
console.log(col);
for(let j=0;j<1;j++)
{
array[j]=new Array(col);
}
 for(let i=0;i<row;i++)
 {
 for(let j=0;j<col;j++)
 { 
  array[i][j]='o';
 }
 }
 console.log(array);
}
}
prime();

