var Utility=require("../Utility/utility");

var string=`Read in the following message: Hello <<name>>, 
We have your full name as <<full name>> in our system.
 your contact number is 91­xxxxxxxxxx.Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
`;
let testregex=/^[a-zA-z]{10}$/;

let test1=/^[0-9]*$/;

 let name=Utility.inputString();
 if(testregex.test(name)==true||name==false)
 {
 console.log("enter again");
 }

 let full_name=Utility.inputString();
 if(test1.test(full_name)==true||name==false)
 {
    console.log("enter again");

 }


let number=Utility.inputInt();
if(test1.test(number)==true||name==false)
 {
    console.log("enter again");
 }

 var result=string.replace("<<name>>",name).replace("<<full name>>",full_name).replace("91­xxxxxxxxxx",number);
 console.log(result);
 


 
