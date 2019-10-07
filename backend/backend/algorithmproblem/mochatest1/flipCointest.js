const assert = require('assert')
var Util= require('../../programs/utility'); 

describe('flipCoin No', function()  
{  
    it('flipCoin num function should return true for positive number',function()
    {
        assert.equal(Util.flipCoin(20),true);
    });
    it('flipCoin num function should return false for negative number',function()
    {
        assert.equal(Util.flipCoin(0),false);
    });
});