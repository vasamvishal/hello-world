/********************************************************************************************
*Execution    :  default node     cmd> node paranthesisChecker.js.
*
*Purpose      :  to push the characters and pop respectively .
*
*@description  
*
*@file        :  paranChecker.js.
*@overview    : stack module to to push the characters and pop respectively .
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/** 
 * @description  variable is declared to use to acquire Queue class
 * @const {input} src
 */
const Utility = require("../Utility/utility")
const src = require('../Utility/stackLL')
/** 
 * @description  variable is declared to use to acquire stack class
 * @const {input} src
 */
const readline = Utility.input();
const stack = new src.Stack();
/** 
 * @description  constant variable is declared to use to require the file System
 * @const {text} fs
 */

/** 
 * @description  variable is declared to use to require the file System
 * @const {text} fs
 */
var read = readline.question("enter the string");
let	validationRule = /^\s{1,}$/;
if(read == undefined || validationRule.test(read) == true)
{
console.log("Value is undefined");
return false;
}

var readarray = read.split('');
var array = "";
for (let i = 0; i < readarray.length; i++) {
  if (readarray[i] == "{" || readarray[i] == "(" || readarray[i] == "[" || readarray[i] == "}" || readarray[i] == "]" || readarray[i] == ")") {
    array = array + readarray[i];
  }
}
/** 
 * @description  variable is declared to use to split the file system.
 * @const {text} fs
 */

const exp = array.split('');


//match function
matchRet = (element, element1) => {
  if (element == '(' && element1 == ')') {
    return true;
  }
  if (element == '{' && element1 == '}') {
    return true;
  }
  if (element == '[' && element1 == ']') {
    return true;
  }
}
//for push and pop operation.
for (let i = 0; i < exp.length; i++) 
{
  if (exp[i] == '(' || exp[i] == '{' || exp[i] == '[') {
    //push the elements  
    stack.push(exp[i]);
  }
  if (exp[i] == ')' || exp[i] == '}' || exp[i] == ']') {
    if (stack.isEmpty() == true) {
      console.log("cannot enter into stack");
      return;
    }
    else if (matchRet(stack.pop(), exp[i]) == true) {
      //check whether the stack is empty or not and pop//
    }
    else {
      console.log("mismatch characters");
      return;
    }
  }
}

console.log(stack.printStack());
//checking whether the stack is empty or not
if (stack.isEmpty() == true) {
  console.log("balanced");
}
else {
  console.log("not balanced");
}



