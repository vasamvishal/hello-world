const assert = require('assert')
var Util= require('../../Utility/utility'); 

describe('Atm No', function()  
{  
it('Atm number  should return true for positive value.', function()  
{  
    
    assert.equal(Util.Atm(30000),true);   

});
it('Atm number  should return false for negative value.', function()  
{  
    
    assert.equal(Util.Atm(-3),false);   

});


});