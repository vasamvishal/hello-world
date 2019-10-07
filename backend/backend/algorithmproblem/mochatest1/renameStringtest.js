const assert = require('assert')
var Util= require('../../programs/utility'); 

describe('renameString No', function()  
{  
    it('renameString num function should return true for string greather than 3',function()
    {
        assert.equal(Util.stringrep("Hello <<UserName>> How are you?","vishal"),true);
    });
    it('renameString num function should return false for string lesser than 3',function()
    {
        assert.equal(Util.stringrep("Hello <<UserName>> How are you?","di"),false);
    });
});