const assert = require('assert')
var Util= require('../../programs/utility'); 

describe('anagramTest No', function()  
{  
    it('anagram function should return true if both string are same',function()
    {
        assert.equal(Util.anagram("vishal","vishal"),true);
    });
    it('anagram function should return false if both string are not  same',function()
    {
        assert.equal(Util.anagram("vide","dice"),false);
    });
});