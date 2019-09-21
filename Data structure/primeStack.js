

/********************************************************************************************
*Execution    :  default node     cmd> node primeStack.js.
*
*Purpose      :  to stack the numbers which are prime.
*
*@description  
*
*@file        :  primeStack.js.
*@overview    : anagram module to check if the strings is anagram or not.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/** 
 * @description  variable is declared to use to require the Utility.js
 * @const {Utility} Utility
 */
const Utility=require('../../Utility/programs/utility');

/** 
 * @description  variable is declared to use to acquire input function
 * @const {input} readline
 */
const readline=Utility.input();

/** 
 * @description  variable is declared to use to acquire Queue class
 * @const {input} src
 */
const src=require('../programs/stack');

/** 
 * @description  variable is declared to use to acquire Queue class
 * @const {number} str
 */
const str=1000;

/** 
 * @description  variable is declared to use to acquire prime function
 * @const {number} increment
 */
const increment=Utility.prime(str);

/** 
 * @description  variable is declared to use to split the array
 * @const {number} array
 */
const array1=increment.split(' ');

/** 
 * @description  variable is declared to use string;
 * @var {number} string
 */
var string='';
//for calling anagram function
for(let i=2;i<array1.length;i++)
 {
   for(let j=i+1;j<array1.length;j++)
   {
     if(Utility.Anagram(array1[i],array1[j])==false)
     {}
     else
     {
      string=string+array1[i]+" "+array1[j]+" ";
      
      	
     }
   }
 }
    /** 
 * @description  variable is declared to use to array.
 * @const {number} array
 */
const array=string.split(" ");

/** 
 * @description  variable is declared to use to acquire stack class
 * @const {number} stack
 */
const stack=new src.Stack();
console.log(array.length);

//pushing the elements into stack
for(let i=0;i<array.length;i++)
 {
  stack.push(array[i]);     
 }
 //for printing the stack.
stack.showdata();



