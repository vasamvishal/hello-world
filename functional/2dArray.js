
/********************************************************************************************
*Execution    :  default node     cmd> node 2dArray.js.
*
*Purpose      :  to create a 2D array for integer,strings.
*
*@description  
*
*@file        :  2dArray.js.
*@overview    : Array2d module to create a 2D string. 
                
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
 * @description  variable is declared to use to enter the no of rows
 * @var {number} row
 */
var row=readline.question("Enter the row you want to enter");

/** 
 * @description  variable is declared to use to enter the no of cols
 * @var {number} col
 */
var col=readline.question("Enter the col you want to enter");

/** 
 * @description  it is  to require the  use of  Array2d function
 * @var {number} Array2d
 */
Utility.Array2d(row,col);

