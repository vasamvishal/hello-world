  
  function couponNumberGenerator(){
    var Utility=require('../programs/utility')
    var readline =Utility.input();
    var letters = ["a","b","c","d","e","f","g","1","2","3","4","5"],
    coupon="",
   
    num =readline.question("Enter the no you want to enter");
    random =(Math.random()*num);
   
    while(random>0)
    {	
    coupon+=letters[Math.floor(random % letters.length)];
    random= Math.floor(random/letters.length);
    }
    console.log("Coupon: "+coupon);
    }
    couponNumberGenerator();
    