/********************************************************************************************
*Execution    :  default node     cmd> node gamBle.js.
*
*Purpose      :  to print the no of wins and percentage of wins and loss.
*
*@description  
*
*@file        :  gamBle.js.
*@overview    : Gambler module to print the no of wins and percentage of wins and loss.
                
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/** 
 * @description  variable is declared to use to require the Utility class
 * @var {Utility} Utility
 */
var Utility = require('../../Utility/programs/utility'); 
/** 
 * @description  variable is declared to use to acquire input class
 * @var {input} readline
 */
var readline = Utility.input();
/** 
 * @description  variable is declared to use to enter goal
 * @var {number} goal
 */

var goal=readline.question("enter the no.of goal");
/** 
 * @description  variable is declared to use to acquire input class
 * @var {number} stack
 */
var stack=readline.question("enter the no of cash you have");

/** 
 * @description  variable is declared to use to enter no of times to play
 * @var {number} n
 */
var n =readline.question("enter the no of turns u want to play");

/** 
 * @description  it is used to require Gambler function
 * @var {Gambler} goal,stack,n
 */
Utility.Gambler(goal,stack,n);













