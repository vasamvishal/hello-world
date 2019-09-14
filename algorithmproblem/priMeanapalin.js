

/********************************************************************************************
*Execution    :  default node     cmd> node priMeanapalin.js.
*
*Purpose      :  to find the prime number that are anagram and palindrome
*
*@description  
*
*@file        :  priMeananapalin.js.
*@overview    :  Prime module to check if number is prime or not. 
                 Anagram module to check if the number is anagram or not.
                 Palindrome module to check if the number is palindrome or not.
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 
/** 
 * @description  variable is declared to use to require the Utility class
 * @var {Utility} Utility
 */
var Utility=require('../../Utility/programs/utility');
/** 
 * @description  variable is declared to use to acquire input class
 * @var {input} readline
 */

var readline=Utility.input();
/** 
 * @description  variable is declared to use to define the range of primary number from 0-1000.
 * @var {string} str
 */

var str=1000;
/** 
 * @description variable is declared to use to acquire increment class.
 * @var {prime} increment
 */
var increment=Utility.prime(1000);
/** 
 * @description variable is declared to use to define the message to enter the number.
 * @var {string} str
 */

let array=increment.split(' ');
/** 
 * @description variable is declared to use to define the message to enter the number.
 * @var {string} str
 */

console.log(array);
  
for(var i=2;i<array.length;i++)
{
for(var j=i+1;j<array.length;j++)
{

if(Utility.Anagram(array[i],array[j]))
{
console.log(array[i]+" "+array[j]+" are anagrams");	
}
}
}

Utility.palindrome(array);

    
        

    

      