
/********************************************************************************************
*Execution    :  default node     cmd> node bubbleSort.js.
*
*Purpose      :  to sort an array through bubbleSort function.
*
*@description  
*
*@file        :  bubbleSort.js.
*@overview    :  bubbleSort module to to sort an array;
                 
*@author	 :  Vishal vasam <vasamvishal12@gmail.com>
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
 * @description variable is declared  for row variable 
 * @var {number} row
 */
var row=readline.question("Enter the row you want to enter");



/** 
 * @description variable arr is used to access array1D function
 * @var {number} arr
 */
var arr=Utility.array1D(row);

/** 
 * @description  used for printing arr variable.
 * @var {number} arr
 */
console.log(arr);

/** 
 * @description  used for accesing bubbleSort function.
 * @var {number} row,col
 */
Utility.bubbleSort(row,arr);


 
