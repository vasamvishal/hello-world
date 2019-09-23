const assert = require('assert');
var queue= require('../../programs/Queue'); 

var q=new queue.Queue();
describe('banking problem', function()  
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

 it('dequeue should return 1 for deque value.', function()  
 {  
    assert.equal(q.dequeue(),1);   
 });
 it('dequeue should return underflow for deque value.', function()  
 {  
    assert.equal(q.dequeue(),"Underflow");   
 });

 it('addMoney should return value for deque value.', function()  
 {  
    assert.equal(q.addMoney(500,1000),1500);   
 });
 it('addMoney should null value for character.', function()  
 {  
    assert.equal(q.addMoney('abc',1000),null);   
 });
 it('addMoney should return value for deque value.', function()  
 {  
    assert.equal(q.addMoney(0,1000),null);   
 });
 it('withdraw should return value for deque value.', function()  
 {  
    assert.equal(q.withdrawMoney(500,1500),1000);   
 });
 it('withdraw money should return value for deque value.', function()  
 {  
    assert.equal(q.withdrawMoney(2500,1500),null);   
 });
});