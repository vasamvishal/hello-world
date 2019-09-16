  
  /********************************************************************************************
*Execution    :  default node     cmd> node couPon.js.
*
*Purpose      :  to create different coupons everytime.
*
*@description  
*
*@file        :  couPon.js.
*@overview    : couponNumberGenerator module to create a different coupon. 
                
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
var readline=Utility.input();

/** 
 * @description  variable is declared to use to enter the notes
 * @var {number} num
 */
  var num=readline.question("enter the no you want to enter ");

  /** 
 * @description  it is used to require couponNumberGenerator.
 * @var {number} num
 */


  Utility.couponNumberGenerator(num);
    
    
    
    
    
