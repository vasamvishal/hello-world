const assert = require('assert')
<<<<<<< HEAD
var Util= require('../../Utility/utility'); 
=======
var Util= require('../../programs/utility'); 
>>>>>>> 43b3571ee16c0fd2360b6864b0fd05e53374bcbd

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