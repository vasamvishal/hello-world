
 /********************************************************************************************
*Execution    :  default node     cmd> node renamestring.js.
*
*Purpose      :  to replace <<"hello"> with the string1;
*
*@description  
*
*@file        : renameString.js
*@overview    : string module to replace <<"hello"> with the string1; 
                
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/** 
 * @description  variable is declared to use to require the Utility class
 * @var {Utility} Utility
 */

var Utility=require('../../programs/utility.js')

/** 
 * @description  variable is declared to use to acquire input class
 * @var {input} readline
 */

var readline=Utility.input();

/** 
 * @description  variable is declared to use to acquire string1
 * @var {string} string1
 */

var string1="Hello <<UserName>> How are you?";

/** 
 * @description  it is used to print the value of string1
 * @var {string} string1
 */
console.log(string1);

/** 
 * @description  variable is declared to use to acquire string2
 * @var {string} string2
 */

var string2=readline.question("enter the name u have to change");

/** 
 * @description  it is used to require the string function
 * @var {string} string1,string2
 */

Utility.stringrep(string1,string2);

