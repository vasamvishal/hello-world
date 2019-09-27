var src = require("../Utility/utility");

regex = () =>
{
    let string = `Hello <<name>>, we have your full name as <<full name>> in our system. 
    Your contact number is 91­xxxxxxxxxx.Please let us know in case of any clarification.
    Thank you BridgeLabz,01/01/2016.`
    let string1;
    let namePattern = /^[a-z A-Z]{1,15}$/;
    let fullNamePattern = /^[a-z A-Z]{1,15}$/;
    let numberPattern = /^\d{10}$/;
    let datePattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

      console.log("Enter the name");
    let name = src.inputString();
    if(name==false||namePattern.test(name)==false)
    {
       console.log("Wrong entry");
       return;
    }
    console.log("Enter the full name");
      fullName = src.inputString();
      if(fullName==false||fullNamePattern.test(fullName)==false)
    {
       console.log("Wrong entry");
       return;
    }
      console.log("Enter the number");
      number = src.inputInt();
      if(number==false||namePattern.test(number)==true)
    {
       console.log("Wrong entry");
       return;
    }
      console.log("enter the date");
      date = src.inputString();
      if(date==false||namePattern.test(date)==true)
    {
       console.log("Wrong entry");
       return;
    }

  

    let nameTest = namePattern.test(name);
    let fullNameTest = fullNamePattern.test(fullName);
    let numberTest = numberPattern.test(number);
    let dateTest = datePattern.test(date);

    if( nameTest && fullNameTest && numberTest && dateTest)
    {
      string1 = string.replace("<<name>>",name).replace("<<full name>>",fullName).replace("xxxxxxxxxx",number).replace("01/01/2016",date);
    }
    else
        return false;
    
    console.log(string1);
}
regex();