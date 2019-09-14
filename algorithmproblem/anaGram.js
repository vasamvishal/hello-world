

/********************************************************************************************
*Execution    :  default node     cmd> node anaGram.js.
*
*Purpose      :  to find the strings that are anagram or not anagram
*
*@description  
*
*@file        :  anaGram.js.
*@overview    : anagram module to check if the strings is anagram or not.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/** 
 * @description  variable is declared to use to require the Utility class
 * @var {Utility}Utility
 */
var Utility = require('../../Utility/programs/utility');

/** 
 * @description  variable is declared to use to define the message to enter the number.
 * @var {input}rl
 */
var rl = Utility.input();

/** 
 * @description Constant variable is declared to use to define the message to enter the number.
 * @var {prime}str
 */
var str = rl.question("enter the number of str");

/** 
 * @description variable is declared to use to require prime function.
 * @var {prime}str1
 */
var str1 = rl.question("enter the number of str1 ");

/** 
 * @description variable is declared to require anagram function.
 * @var {anagram} str,str1
 */
Utility.anagram(str,str1);






