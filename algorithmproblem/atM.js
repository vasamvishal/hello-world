
/********************************************************************************************
*Execution    :  default node     cmd> node atM.js.
*
*Purpose      :  to find the fewest no of notes to return.
*
*@description  
*
*@file        :  Atm.js.
*@overview    : Atm module to find the fewest no of notes to return. 
                
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 
/** 
 * @description  variable is declared to use to require the Utility class
 * @var {Utility} Utility
 */
var Utility=require("../programs/utility");

/** 
 * @description  variable is declared to use to acquire input class
 * @var {input} readline
 */
var readline=Utility.input();
/** 
 * @description  variable is declared to use to enter the notes
 * @var {number} amount
 */
var amount=readline.question(' enter the notes you wnt to have');

/** 
 * @description variable is declared to use to require Atm function.
 * @var {Atm} amount
 */
Utility.Atm(amount);

