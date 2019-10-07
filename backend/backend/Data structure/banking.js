/********************************************************************************************
*Execution    :  default node     cmd> node banKing.js.
*
*Purpose      :  to enter the queue and deposit/withdraw of money and exit queue.
*
*@description  
*
*@file        :  banKing.js.
*@overview    :  Queue class to enter the queue and deposit/withdraw of money and exit queue.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/** 
 * @description  variable is declared to use to require the Utility.js
 * @var {Utility} Utility
 */
const Utility = require("../Utility/utility");

/** 
 * @description  variable is declared to use to acquire input function
 * @var {input} readline
 */
const readline = Utility.input();

/** 
 * @description  variable is declared to use to acquire Queue class
 * @var {input} src
 */
const src = require('../Utility/queue');
/** 
 * @description  variable is declared to use to acquire Queue class
 * @var {number} initialMoney
 */
var initialMoney = 1000;
/** 
 * @description  variable is declared to use to acquire Queue class
 * @var {number} count
 */
var count = 1;

while (initialMoney > 0) {
       /** 
      * @description  variable is declared to use to acquire Queue class
      * @var {number} count
      */
       var queue = new src.Queue();
       console.log("enter 1 for deposit & enter 2 for withdraw ");
       console.log("enter 3 to exit");
       /** 
       * @description  variable is declared to use to acquire Queue class
       * @var {number} count
       */
       var choice = parseInt(readline.question("enter the value "));
      
       if (choice == undefined||choice==null) {
              console.log("!!please enter correct value!!");
              return;
       }
       switch (choice) {
              case 1: console.log("entered the queue");
                     /** 
                     * @description  queue variable is declared to use to acquire enqueue class
                     * @var {number} count
                     */
                     queue.enqueue(count);
                     /** 
                     * @description  variable is declared to use to acquire Queue class
                     * @var {number} money
                     */
                     var money1 = parseInt(readline.question('enter money to deposit'));
                     if (money1 == undefined || money1 < 0 || isNaN(money1)) {
                            console.log("!!please enter correct value!!");
                            return;
                     }
                     /** 
                     * @description  variable is declared to use to acquire addMoney function
                     * @var {number} initialMoney
                     */
                     initialMoney = queue.addMoney(money1, initialMoney);
                     /** 
                     * @description  variable is declared to use to total balance.
                     * @var {number} count
                     */
                     console.log("total balance is " + initialMoney);

                     console.log("person have entered the money now dequeue")
                     /** 
                     * @description  variable is declared to use to acquire Queue class
                     * @var {number} count
                     */
                     count++;
                     /** 
                     * @description  queue variable is declared to use to acquire dequeue function
                     * @var {number} queue
                     */
                     queue.dequeue();

                     break;

              case 2:
                     console.log("enter in the queue of withdraw");
                     /** 
                      * @description  queue variable is declared to use to acquire enqueue function.
                      * @var {number} count
                      */
                     queue.enqueue(count);
                     /** 
                     * @description  variable is declared to use to read money varaible.
                     * @var {number} count
                     */
                     let money = readline.question('enter money to withdraw');

                     if (money == undefined || money < 0 || isNaN(money)) {
                            console.log("!!please enter correct value!!");
                            return;
                     }
                     else {
                            /** 
                            * @description  queue variable is declared to use to acquire intialMoney.
                            * @var {number} initialMoney
                            */
                            initialMoney = queue.withdrawMoney(money, initialMoney);
                            console.log("total balance is " + initialMoney);
                            /** 
                            * @description  variable is declared to use for count increment.
                            * @var {number} count
                            */
                            count++;
                            console.log("person have withdrawn the money now dequeue")
                            break;
                     }

              case 3:
                     return;
                    

              default:
                     return;

       }
}





