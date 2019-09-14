

/********************************************************************************************
*Execution    :  default node     cmd> node binarySearch.js.
*
*Purpose      :  to search a given number in an array through BinarySearch.
*
*@description  
*
*@file        :  binarySearch.js.
*@overview    :  binarySearch module to find the number you want to search;
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/** 
 * @description  variable is declared to use to require the Utility class
 * @var {Utility} Utility
 */
var Utility=require('../../Utility/programs/utility');

/** 
 * @description variable is declared to use to acquire input class
 * @var {input} readline
 */
var readline=Utility.input();
/** 
 * @description  array is declared in ascending order
 * @var {number} arr
 */
let arr=[1,2,3,4,5];
/** 
 * @description  variable is declared for start.
 * @var {number} start
 */
var start=0; 

/** 
 * @description  used for printing start varaiable.
 * @var {number} start
 */
console.log(start);

/** 
 * @description  used for printing end varaiable.
 * @var {number} end
 */
var end=arr.length-1;

/** 
 * @description  used for printing start varaiable.
 * @var {number} end
 */
console.log(end);

/** 
 * @description  variable is declarted to enter the number you want to search.
 * @var {number} x
 */
let x=readline.question("enter the number you want to search");

/** 
 * @description  used for printing start varaiable.
 * @var {number} arr
 */
console.log(arr);

/** 
 * @description  used for accesing binaryserach function if it is true.
 * @var {number} arr
 */
if(Utility.binarysearch(arr,x,start,end)===true)
{
    console.log("element "+x+" is at position ");
}

/** 
 * @description  used for accesing binaryserach function if it is false.
 * @var {number} arr
 */
if(Utility.binarysearch(arr,x,start,end)===false)
{console.log("element not found");
}



 