
/********************************************************************************************
*Execution    :  default node     cmd> node palindromechecker.js.
*
*Purpose      :  to find the strings/numbers are palindrome.
*
*@description  
*
*@file        : palindromechecker .js.
*@overview    : deque module to find the strings/numbers are palindrome.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/** 
 * @description  variable is declared to use to require the Utility.js
 * @vconst {Utility} Utility
 */
const Utility=require("../programs/utility");

/** 
 * @description  variable is declared to use to acquire input function
 * @const {input} readline
 */
const readline=Utility.input();

/** 
 * @description  variable is declared to use to acquire Queue class
 * @const {input} src
 */
const src=require('../programs/deque');

/** 
 * @description  variable is declared to use to read array
 * @const {number} array
 */
const array=readline.question("enter the string");

//palindrome function
palindrome=(array)=>{
   /** 
 * @description  variable is declared to use to print array;
 * @var {number} array
 */
console.log(array);
/** 
 * @description  variable is declared to use to deque function
 * @var {number} queue
 */
const queue=new src.Deque();
for (let i = 0; i < array.length; i++) 
{    
 queue.addRear(array[i]);
}
/** 
 * @description  variable is declared to use to print PrintQueue
 * @var {number} printQueue
 */
console.log(queue.printQueue());

while (queue.size() > 1  )
{
 /** 
 * @description  variable is declared to use to acquire removefront function
 * @var {number} first
 */
let first = queue.removeFront();
/** 
 * @description  variable is declared to use to acquire removefront function
 * @let {number} last
 */
let last = queue.removeRear();   
if (first !== last) 
 {
    return false;
 }
}
return true;
}

//calling a palindrome function
if(palindrome(array)==false)
{
console.log("not an string");
}
else
{
console.log("is a string");
}
