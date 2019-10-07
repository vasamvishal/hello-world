const assert = require('assert')
var Util= require('../../programs/utility'); 

describe('Coupon No', function()  
{  
it('coupon number  should return true for positive value.', function()  
{  
    
    assert.equal(Util.couponNumberGenerator(10),true);   

});
it('coupon number  should return false for negative value.', function()  
{  
    
    assert.equal(Util.couponNumberGenerator(-3),false);   

});


});