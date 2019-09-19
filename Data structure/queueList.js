
var Utility=require("../programs/utility");
var readline=Utility.input();
var src=require('../programs/Queue');
let Queue=new src.Queue();
 Queue.enqueue(10);
 Queue.enqueue(20);
 Queue.enqueue(30);
 Queue.enqueue(40);
 Queue.dequeue();
 Queue.dequeue();
 




 Queue.printQueue();
