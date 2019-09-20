const fs = require('fs');
var src = require('../programs/linkedList');

// User defined class node 
var text = fs.readFileSync('./input1.txt','utf8');

var c = text.split(" ");
var ll = new src.LinkedList(); 

for(let i = 0;i<11;i++)
 {
  ll.insertAtElement(i);
 }    

const size = ll.getsize();

for(let i = 0;i<size;i++ )
 {
  ll[i] = [];
 }

// console.log(ll);

hash = (a,size) =>
 {
  return a % size;
 }

class hashTable
{
 constructor()
 {}

 add(value)
 {
 let index = hash(value,size);
 console.log(index);
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

remove(value)
{
let index = hash(value,size);
let deleted = false;

if(ll[index].length === 1 && ll[index][0] === value)
      delete ll[index]; 
      else 
    {
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

print() 
{
console.log(ll);
}
}

let ht = new hashTable();
ht.add(12);
ht.add(15);
ht.remove(12);

var o=ht.print();
var outputFile = fs.writeFileSync("./unorderedlist.txt",o);