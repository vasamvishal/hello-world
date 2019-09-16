
/********************************************************************************************
*Execution    :  default node     cmd> node bubblesortList.js.
*
*Purpose      :  to sort an array through bubbleSort function using input file.
*
*@description  
*
*@file        :  bubblesortList.js.
*@overview    :  bubbleSort module to to sort an array using input file;
                 
*@author	 :  Vishal vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/** 
 * @description  variable is declared to use to require the file System
 * @var {text} fs
 */
const fs = require('fs') 

/** 
 * @description  variable is declared to use to read the file System
 * @var {text} fs
 */
fs.readFile('input.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 

 /** 
 * @description  variable is declared to use to print the input text file
 * @var {text} fs
 */   
    console.log(data); 

  /** 
 * @description  variable is declared to use to split the data in input file
 * @var {text} fs
 */  
  var arr=data.split(' ');

/** 
 * @description  variable is declared to print the array
 * @var {text} arr
 */  
 console.log(arr);

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
 * @description  variable is declared to use sort the array
 * @var {number}sort
 */ 
  arr.sort();
  /** 
 * @description  variable is declared to print the array
 * @var {number} arr
 */
console.log(arr);
/** 
 * @description  variable is declared to ask to  enter the string 
 * @var {number} x
 */
 var x =readline.question("enter the string to be entered");

 /** 
 * @description  variable is declared to use to print the value of x
 * @var {number} x
 */
 console.log(x);

/** 
 * @description   Used to call binarysearch method
 * @var {number} arr,x,start,end
 */
 if(Utility.binarysearch(arr,x,0,arr.length-1)==true)
 {
    console.log("element found ");
 }
 else{
     console.log("not found");
 }
 
});

