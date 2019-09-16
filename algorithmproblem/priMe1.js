
/********************************************************************************************
*Execution    :  default node     cmd> node prime1.js.
*
*Purpose      : to generate prime number in range of 1-1000
*
*@description  
*
*@file        :  prime1.js.
*@overview    : prime module to generate prime number
                 
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
 * @description  variable is declared to use to define the range of numbers from 0-1000.
 * @var {number} str
 */
var str=parseInt(1000);

/** 
 * @description variable is declared to require prime function.
 * @var {number} str
 */

Utility.prime(str);
