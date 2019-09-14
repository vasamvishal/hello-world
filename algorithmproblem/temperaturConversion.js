
/********************************************************************************************
*Execution    :  default node     cmd> node temperatureConversion.js.
*
*Purpose      :  to convert farheniet to celcius and vice versa
*
*@description  
*
*@file        :  temperatureConversion.js.
*@overview    : temperatureConversion module to convert farheniet to celcius and vice versa. 
                
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
 * @description  variable is declared to use to enter the notes
 * @var {number} farheniet
 */
var farheniet=readline.question("enter the number in farheniet");

/** 
 * @description it is declared to use to require farheniet function.
 * @var {farheniet} temperatureConversion
 */
Utility.temperatureConversion(farheniet);