/********************************************************************************************
*Execution    :  default node     cmd> node arrayPrime.js 
*
*Purpose      :  To determine the prime numbers in the range of 0 to 1000 in 2D array.
*
*@description  
*
*@file        :  arrayPrime.js
*@overview    :  print module to print the numbers in the range of 0 to 1000 in 2D array.
Prime module to determine the columns for second dimension of 2D array.
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/** 
 * @description  variable is declared to use to acquire Utility class
 * @var {input} src
 */
var src = require('../programs/utility');


//function of prime array
Prime = (array) =>
{
    
let start = 1, end = 100;
for(let i=0;i<array.length;i++)
{	
let k = 0;	
for(let j=start;j<=end;j++)
{
if(src.isPrime(j)==true)
k++;
}
console.log(k);
array[i] = [k];

start = end + 1;
end = end + 100;
}
}

//calling prime array
(print = () =>
{
var array = new Array(10);
console.log(array);
Prime(array);
let start = 1, end = 100;
for(let i=0;i<array.length;i++)
{	
let k = 0;	
for(let j=start;j<=end;j++)
{
if(src.isPrime(j)==true)
{	
array[i][k] = j;
k++;
}
}
start = end + 1;
end = end + 100;
}

console.log(array);
})();