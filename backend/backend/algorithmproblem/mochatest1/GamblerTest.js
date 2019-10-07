const assert = require('assert')
var Util= require('../../programs/utility'); 

describe('Gambler', function()  
{  
it('Gambler function should return false for negative number.', function()  
  {  
      
      assert.equal(Util.Gambler(-10,-10,0),false);  

  });

  it('Gambler function should return true for positive number.', function()  
  {  
      
      assert.equal(Util.Gambler(10,10,1),true);  

  });
});