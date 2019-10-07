const assert = require('assert');
var queue= require('../../programs/Queue'); 

var q=new queue.Queue();
describe('queue problem', function()  
{  
it('enqueue  should return undefined for string value.', function()  
{  
    assert.equal(q.enqueue("a"),null);   
});
it('enqueue  should return undefined for space value.', function()  
{  
    assert.equal(q.enqueue( ),null);   
});
it('enqueue  should return undefined for space value.', function()  
{  
    assert.equal(q.enqueue(null),null);   
});
it('enqueue  should return undefined for entered value.', function()  
{  
    assert.equal(q.enqueue(1),undefined);   
});
it('isempty should return false for is empty.', function()  
{  
   assert.equal(q.isEmpty(),false);   
});

it('printQueue should return print value.', function()  
{  
   assert.equal(q.printQueue(),1);   
});

 it('dequeue should return 1 for deque value.', function()  
 {  
    assert.equal(q.dequeue(),1);   
 });

 it('printQueue should return print value.', function()  
{  
   assert.equal(q.printQueue(),'');   
});

 it('isempty should return true for isempty.', function()  
 {  
    assert.equal(q.isEmpty(),true);   
 });

 it('dequeue should return underflow for deque value.', function()  
 {  
    assert.equal(q.dequeue(),"Underflow");   
 });

 
});