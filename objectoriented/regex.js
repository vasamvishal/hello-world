var Utility= require("../Utility/utility");

regex = () =>
{
    let string = `Hello <<name>>, we have your full name as <<full name>> in our system. 
    Your contact number is 91­xxxxxxxxxx.Please let us know in case of any clarification.
    Thank you BridgeLabz,01/01/2016.`
    let string1;
    let fullNamePattern = /^[a-z A-Z ]{1,40}$/;
    let numberPattern = /^\d{10}$/;
    let datePattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    let testregex=/^[a-zA-z]{10}$/;

    let test1=/^[0-9]*$/;
     console.log("enter the name ");
     let name=Utility.inputString();
     if(testregex.test(name)==true||name==false)
     {
     console.log("enter again");
     }
     console.log("enter full name");
     let full_name=Utility.inputString();
     if(fullNamePattern.test(full_name)==true||name==false)
     {
        console.log("enter again");
     }
     console.log("enter the number");
    let number=Utility.inputInt();
    if(test1.test(number)==true||name==false)
     {
        console.log("enter again");
     }
     console.log("enter the date");
     let date=readline.question("enter the date");
     if(date==null||date==undefined||datePattern(date)==false)
     {
         console.log("enter again");
         return;
     }
     var result=string.replace("<<name>>",name).replace("<<full name>>",full_name).replace("91­xxxxxxxxxx",number).replace("01/01/2016",date);
     console.log(result);

     }
     regex();
    
     
    
