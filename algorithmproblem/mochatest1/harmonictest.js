const assert = require('assert')
var Util= require('../../programs/utility'); 

describe('Harmonic No', function()  
{  
it('harmonic number  should return true for positive value.', function()  
{  
    
    assert.equal(Util.harmonic(3),true);   

});
it('harmonic number  should return false for negative value.', function()  
{  
    
    assert.equal(Util.harmonic(-3),false);   

});


});