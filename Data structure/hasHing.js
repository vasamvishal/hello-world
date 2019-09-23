/********************************************************************************************
*Execution    :  default node     cmd> node hasHing.js.
*
*Purpose      :  to hash the elements.
*
*@description  
*
*@file        : hasHing.js.
*@overview    : linked list module to hash the elements.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/** 
 * @description  variable is declared to use to require the file System
 * @const {text} fs
 */
const fs = require('fs');
/** 
 * @description  variable is declared to use to acquire Queue class
 * @const {input} src
 */
const src = require('../programs/linkedList');


let text = fs.readFileSync('./input1.txt','utf8');
/** 
 * @description  variable is declared to use to split the array
 * @const {input} c
 */

const c = text.split(" ");
/** 
 * @description  variable ll is declared to use access LinkedList class
 * @const {input} src
 */
var ll = new src.LinkedList(); 

for(let i = 0;i<11;i++)
 {
  ll.insertAtElement(i);
 }    
/** 
 * @description  variable size is declared to use to acquire getsize element
 * @const {input} src
 */
const size = ll.getsize();

for(let i = 0;i<size;i++ )
 {
  ll[i] = [];
 }


/** 
 * @description  variable is declared to use to acquire hash function
 * @var {number} a,size
 */
hash = (a,size) =>
 {
  return a % size;
 }
//creating of an class hashtable
class hashTable
{
 constructor()
 {}

 add(value)
 {
   if(value==undefined||isNaN(value)||value==null)
   {
     console.log("enter new value");
      return;
   }
/** 
 * @description  variable is declared to use to acquire hash class
 * @let {number} index
 */
 let index = hash(value,size);
 /** 
 * @description  variable is declared to use to acquire inserted class
 * @var {number} inserted
 */
 let inserted = false;

 for(let i=0;i<ll[index].length;i++)
 {
    if(ll[index][i] == value)
    {
     ll[index][i] == value;
     inserted = true;
    }	
 }

 if(inserted == false)
 {
  ll[index].push(value);
 }
}

//remove function to delete a value
remove(value)
{
let index = hash(value,size);
let deleted = false;
//for deletion of an single item
if(ll[index].length === 1 && ll[index][0] === value)
{
 delete ll[index][0]; 
}
     else 
    {
      //for deletion of elements inside array

      for (var i = 0; i < ll[index].length; i++) 
      {
        if (ll[index][i] === value)
        { 
          delete ll[index][i];
          deleted = true;
          }
      }
      if(deleted == false)
          return this.add(value);
    }
}
//print the linked list
print() 
{
console.log(ll);
}
}
/** 
 * @description  variable is declared to use to acquire hashTable class
 * @var {number} ht
 */
let ht = new hashTable();

ht.add(12);
ht.remove(12);
ht.add(12);
ht.add(66);

/** 
 * @description  variable is declared to use to acquire print function
 * @var {number} o
 */
const o=ht.print();
