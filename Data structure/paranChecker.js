/********************************************************************************************
*Execution    :  default node     cmd> node paranChecker.js.
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
const src=require('../programs/stackarray')
/** 
 * @description  variable is declared to use to acquire stack class
 * @const {input} src
 */
const stack=new src.Stack();
/** 
 * @description  constant variable is declared to use to require the file System
 * @const {text} fs
 */
const fs = require('fs');
/** 
 * @description  variable is declared to use to require the file System
 * @const {text} fs
 */
const text = fs.readFileSync('./input1.txt','utf8');  
/** 
 * @description  variable is declared to use to split the file system.
 * @const {text} fs
 */
const exp=text.split('');

//match function
matchRet=(element,element1)=>
  {
     if(element=='(' && element1==')')
      {
       return true;
      }
     if(element=='{' && element1=='}')
      {
       return true;
      }
    if(element=='['&& element1==']')
      {
       return true;
      }
   }
 //for push and pop operation.
for(let i=0;i<exp.length;i++)
 { 
  if(exp[i]=='('||exp[i]=='{'||exp[i]=='[')
    {
      //push the elements  
     stack.push(exp[i]);
    }
  if(exp[i]==')'|| exp[i]=='}'||exp[i]==']')
    {  
      if(stack.isEmpty()==true)
       {
        console.log("cannot enter into stack");
        return;
       }
       else if(matchRet(stack.pop(),exp[i])==true)
       {
         //check whether the stack is empty or not and pop//
       }
       else
        {
         console.log("wrong characters");
         return;
        }
    }
}
       
console.log(stack.printStack());
//checking whether the stack is empty or not
if(stack.isEmpty()==true)
{
console.log("balanced");
}
else
{
console.log("not balanced");
}
       

       
    