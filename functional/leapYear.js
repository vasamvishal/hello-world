
/********************************************************************************************
*Execution    :  default node     cmd> node leapYear.js.
*
*Purpose      :  to calculate whether the year is leap year or not
*
*@description  
*
*@file        :  temperatureConversion.js.
*@overview    : leapYear module to  calculate whether the year is leap year or not 
                
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/** 
 * @description  variable is declared to use to require the Utility class
 * @var {Utility} Utility
 */
var Utility=require("../../Utility/programs/utility");

/** 
 * @description  variable is declared to use to acquire input class
 * @var {input} readline
 */

var readline=Utility.input();
/** 
 * @description  variable is declared to enter the year to check
 * @var {number} year
 */

var year=readline.question("enter the year");
/** 
 * @description  it is used to require leapYear function
 * @var {number} year
 */
Utility.leapYear(year);

