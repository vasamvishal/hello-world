     

 /********************************************************************************************
*Execution    :  default node     cmd> node flipCoin.js.
*
*Purpose      :  for checking percentage of heads and tails.
*
*@description  
*
*@file        : flipCoin.js
*@overview    : randomnum module to checking percentage of heads and tails. 
                
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/** 
 * @description  variable is declared to use to require the Utility class
 * @var {Utility} Utility
 */
var Utility=require('../../Utility/programs/utility')

/** 
 * @description variable is declared to use to acquire input class
 * @var {input} readline
 */
var readline=Utility.input();

/** 
 * @description variable is declared to enter the no of flips to toss
 * @var {input} flip
 */

var flip=readline.question("enter the no of flips to toss");

/** 
 * @description it is used to acquire randomnum function
 * @var {input} readline
 */
Utility.randomnum(flip);
            

   