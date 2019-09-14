

 /********************************************************************************************
*Execution    :  default node     cmd> node quaDratic.js.
*
*Purpose      :  to calculate the square root of x and x1;
*
*@description  
*
*@file        : quaDratic.js
*@overview    : quadratic module to calculate the square root of x and x1; 
                
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
 * @description  variable is declared to use to enter the number of a
 * @var {number} a
 */
var a=readline.question("enter the number of a ");
/** 
 * @description  variable is declared to use to enter the number of b
 * @var {number} b
 */
var b=readline.question("enter the number of b ");

/** 
 * @description  variable is declared to use to enter the number of c 
 * @var {number} c
 */
var c=readline.question("enter the number of c ");

/** 
 * @description  variable is used to require quadratic function
 * @var {quadratic} a,b,c
 */
Utility.quadratic(a,b,c);

  

