/********************************************************************************************
*Execution    :  default node     cmd> node singlylinkedlist.js.
*
*Purpose      :  to insert and delete the number using linked list
*
*@description  
*
*@file        : singlylinkedlist.js.
*@overview    : linkedList module to insert and delete the number using linked list
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/** 
 * @description  variable is declared to use to require the Utility.js
 * @const {Utility} Utility
 */
const Utility = require("../programs/utility")
/** 
 * @description  variable is declared to use to acquire input function
 * @const {input} readline
 */
const readline = Utility.input();

/** 
 * @description  variable is declared to use to acquire Queue class
 * @const {input} src
 */
const src = require('../programs/linkedList');
/** 
 * @description  variable is declared to use to acquire file system
 * @const {text} fs
 */
const fs = require('fs')
/** 
 * @description  variable is declared to use to readfile.
 * @const {number} fs
 */
fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
  /** 
* @description  variable is declared to use to split the array
* @const {number} str
*/
  var arr = data.split(' ');

  console.log(arr);

  /** 
* @description  variable is declared to use to acquire linkedlist class
* @const {number}n1
*/
  const n1 = new src.LinkedList();
  //for inserting the elements in linkedlist
  for (let i = 0; i < arr.length; i++) {
    n1.insertAtElement(arr[i]);
  }

  /** 
   * @description  variable is declared to use to acquire linkedlist class
   * @const {number} element
   */
  const element = readline.question("enter the string  to be searched");
  //for deleting the element
  if (n1.deleteElement(element) != true) {
    n1.insertAtElement(element);
  }
  /** 
  * @description  variable is declared to use to print linked list
  * @const {number} print
  */
  const print = n1.printListData();
  //fow writing into file
  fs.writeFile("temp.txt", print, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
});

