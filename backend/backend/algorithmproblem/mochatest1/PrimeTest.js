const assert = require('assert')
 var Util= require('../../programs/utility'); 

describe('Prime Demo', function()  
{  
  it('isPrime should return true for prime number. Else it should return false', function()  
  {  
      assert.equal(Util.prime(1000),1); 
  });  
  it('isPrime ', function()  
  {    
    assert.equal(Util.prime(-1),-1);  
  }); 
});  


  

