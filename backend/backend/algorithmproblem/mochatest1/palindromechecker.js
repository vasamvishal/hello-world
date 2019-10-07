const assert = require('assert');
var queue= require('../../programs/deque'); 

var q=new queue.Deque();
describe('palindromechecker problem', function()  
{  
  it('addfront  should return null for null value.', function()  
{  
    assert.equal(q.addFront(null),null);   
});
it('addfront  should return null for null value.', function()  
{  
    assert.equal(q.addFront(0),null);   
});
it('addrear function should return null for  character.', function()  
{  
    assert.equal(q.addRear('m'),undefined);   
});
it('addrear function should return null for nothing.', function()  
{  
    assert.equal(q.addRear(''),null);   
});
it('addrear function should return null for 0.', function()  
{  
    assert.equal(q.addRear(0),null);   
});


  it('removefront should return value .', function()  
  {  
    assert.equal(q.removeFront(),'m');   
  });
  it('dequeue should return value for deque value.', function()  
  {  
   assert.equal(q.removeRear(),undefined);   
  });

});