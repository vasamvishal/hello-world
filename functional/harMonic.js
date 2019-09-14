
/********************************************************************************************
*Execution    :  default node     cmd> node harMonic.js.
*
*Purpose      :  to print harmonic value
*
*@description  
*
*@file        :  harMonic.js.
*@overview    : harmonic module to print harmonic value upto given number
                
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
 * @description  variable is declared to use to enter the no you want
 * @var {number}str
 */
var str=readline.question("Enter the no you want to enter");

/** 
 * @description  variable is declared to use to require harmonic number
 * @var {harmonic} str
 */
Utility.harmonic(str);