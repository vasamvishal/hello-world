const assert = require('assert')
var Util= require('../../programs/utility'); 

describe('Leap year', function()  
{  
    it('leap year should return true for positive number',function()
    {
        assert.equal(Util.leapYear(2000),true);
    });
    it('leap year should return false for negative number',function()
    {
        assert.equal(Util.leapYear(0),false);
    });
});