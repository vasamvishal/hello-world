const assert = require('assert');
var stack= require('../../programs/stackarray'); 

var q=new stack.Stack();
describe('paranchecker problem', function()  
{ 
    it('push function should return null for undefined.', function()  
{  
    assert.equal(q.push(),null);   
});

    it('push function should return undefined for  character.', function()  
{  
    assert.equal(q.push('m'),undefined);   
});
it('print should return value .', function()  
{  
  assert.equal(q.printStack(),"m ");   
}); 
it('pop should return the value .', function()  
{  
  assert.equal(q.pop(),'m');   
});

it('push function should return undefined for  character.', function()  
{  
    assert.equal(q.push('m'),undefined);   
});
it('print should return value .', function()  
{  
  assert.equal(q.printStack(),"m ");   
});
 it('addrear function should return null for negative values.', function()  
{  
     assert.equal(q.push(-10),null);   
 });
 
   it('pop should return the value .', function()  
   {  
     assert.equal(q.pop(),'m');   
   });
   it('pop should return undefined for no returning  value .', function()  
   {  
     assert.equal(q.pop(),undefined);   
   });

   it('print should return  value .', function()  
  {  
  assert.equal(q.printStack(),'');   
  });

  

});