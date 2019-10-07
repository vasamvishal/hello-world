

/********************************************************************************************
*Execution    :  default node     cmd> node insertionSort.js.
*
*Purpose      :  to search a given number in an array through Insertionsort .
*
*@description  
*
*@file        :  insertionSort.js.
*@overview    :  insertionSort module to find the number you want to search;
                 
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
 * @description variable is declared  for row variable 
 * @var {number} row
 */
var row=readline.question("Enter the row you want to enter");

/** 
 * @description  arr variable is used to access array1D function.
 * @var {number} arr
 */

var arr=Utility.array1D(row);

/** 
 * @description  it is used to access insertionSort function
 * @var {number,array} row,arr
 */
Utility.insertionSort(row,arr);