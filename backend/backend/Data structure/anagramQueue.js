/********************************************************************************************
*Execution    :  default node     cmd> node anagramQueue.js.
*
*Purpose      :  to find the anagrams and enter into queue
*
*@description  
*
*@file        : anagramQueue.js.
*@overview    : queue module to find the anagrams and enter into queue
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/** 
 * @description  variable is declared to use to require the Utility.js
 * @var {Utility} Utility
 */
var Utility = require("../Utility/utility");

/** 
 * @description  variable is declared to use to acquire Queue class
 * @var {input} src
 */
var src = require('../Utility/queueLL');
/** 
 * @description  variable is declared to use to string.
 * @var {number} string
 */
var string = 1000;

/** 
 * @description  variable is declared to use to acquire prime function
 * @var {number} increment
 */
var increment = Utility.prime(string);

/** 
 * @description  variable is declared to use to split the array
 * @var {number} array
 */
var array = increment.split(' ');

/** 
 * @description  variable is declared to use string;
 * @var {number} string
 */
var string = '';
//for using anagram function
for (var i = 2; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {

        if (Utility.Anagram(array[i], array[j]) == false) { }
        else {
            string = string + array[i] + " " + array[j] + " ";
        }
    }
}
/** 
 * @description  variable is declared to use to print array
 * @var {number} array
 */

console.log(string);
/** 
 * @description  variable is declared to used to split the  array
 * @var {number} array
 */

var array = string.split(" ");

/** 
 * @description  variable is declared to use to sort an array
 * @var {number} array1
 */
var array1 = array.sort();
/** 
 * @description  variable is declared to use to print array
 * @var {number} array1
 */
console.log(array1);


/** 
 * @description  variable is declared to use to print linked list
 * @var {number} queue
 */
let Queue = new src.Queue1();
for (let i = 0; i < array.length; i++) {
    Queue.addElement(array[i]);
}


Queue.PrintQueue();
